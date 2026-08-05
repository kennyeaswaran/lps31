// Probability engine — LPS 31 / PHIL 31, Probability and Inductive Logic
// Kenny Easwaran, UC Irvine · https://kennyeaswaran.github.io/lps31/
//
// Decides what does and does not follow from a set of given probabilities over two atomic
// sentences. The method it implements is set out in Appendix D of LPS31-AI-study-guide.md,
// which is worth reading first: the mathematics is small enough to do by hand, and doing it
// by hand is what a student has to be able to do.
//
//   ask('a & ∼b', [['b','.3'], ['a ∨ b','.6']], ['a','b'])
//     -> { determined: true, value: '3/10' }
//   ask('a',      [['b','.3'], ['a ∨ b','.6']], ['a','b'])
//     -> { determined: false, min: '3/10', max: '3/5',
//          witnesses: [ ['0','3/10','3/10','2/5'], ['3/10','0','3/10','2/5'] ] }
//
// Rational arithmetic throughout: .1 + .2 is not .3 in floating point, and these answers
// are exact. Verified against every worked example in Appendix A of the study guide,
// including the ones whose answer is that there is not enough information.

// ---- exact fractions (decimals lose .1+.2, and these answers are exact) ----
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a||1;};
const fr=(n,d=1)=>{if(d<0){n=-n;d=-d;}const g=gcd(n,d);return{n:n/g,d:d/g};};
const add=(x,y)=>fr(x.n*y.d+y.n*x.d,x.d*y.d), sub=(x,y)=>fr(x.n*y.d-y.n*x.d,x.d*y.d);
const mul=(x,y)=>fr(x.n*y.n,x.d*y.d), dvd=(x,y)=>fr(x.n*y.d,x.d*y.n);
const zero=x=>x.n===0, cmp=(x,y)=>x.n*y.d-y.n*x.d, str=x=>x.d===1?''+x.n:x.n+'/'+x.d;
const val=s=>{s=(''+s).trim();const m=s.match(/^(-?\d+)\/(\d+)$/);if(m)return fr(+m[1],+m[2]);
  const d=s.indexOf('.');return d<0?fr(+s):fr(+s.replace('.',''),10**(s.length-d-1));};

// ---- the course's fragment: atoms, ∼, &, ∨, parentheses ----
function parse(s){
  const t=[...s.replace(/[~!-]/g,'∼').replace(/(^|[\s)])v($|[\s(])/g,'$1∨$2')].filter(c=>c!==' ');
  let i=0;
  const prim=()=>{const c=t[i++];
    if(c==='∼')return{k:'∼',a:prim()};
    if(c==='('){const e=or();i++;return e;}
    return{k:'atom',c};};
  const and=()=>{let l=prim();while(t[i]==='&'){i++;l={k:'&',a:l,b:prim()};}return l;};
  const or=()=>{let l=and();while(t[i]==='∨'){i++;l={k:'∨',a:l,b:and()};}return l;};
  return or();}
const ev=(n,e)=>n.k==='atom'?e[n.c]:n.k==='∼'?!ev(n.a,e):
  n.k==='&'?(ev(n.a,e)&&ev(n.b,e)):(ev(n.a,e)||ev(n.b,e));

// ---- the four cells: 0 = x&y, 1 = ∼x&y, 2 = x&∼y, 3 = ∼x&∼y ----
const envOf=(as,i)=>({[as[0]]:!(i%2),[as[1]]:i<2});
const region=(p,as)=>{const a=parse(p);let m=0;
  for(let i=0;i<4;i++)if(ev(a,envOf(as,i)))m|=1<<i;return m;};
const dot=(m,x)=>[0,1,2,3].reduce((s,i)=>m&(1<<i)?add(s,x[i]):s,fr(0));

// ---- what the givens fix: one particular solution and the directions of freedom ----
function solve(givens,as){
  const R=[[fr(1),fr(1),fr(1),fr(1),fr(1)]];                 // the four cells sum to 1
  givens.forEach(([p,v])=>R.push([0,1,2,3]
    .map(i=>region(p,as)&(1<<i)?fr(1):fr(0)).concat([val(v)])));
  let piv=0; const pivots=[];
  for(let c=0;c<4&&piv<R.length;c++){
    const s=R.findIndex((r,k)=>k>=piv&&!zero(r[c])); if(s<0)continue;
    [R[piv],R[s]]=[R[s],R[piv]];
    const p=R[piv][c]; for(let j=0;j<5;j++)R[piv][j]=dvd(R[piv][j],p);
    R.forEach((r,k)=>{if(k===piv||zero(r[c]))return;const f=r[c];
      for(let j=0;j<5;j++)r[j]=sub(r[j],mul(f,R[piv][j]));});
    pivots.push(c); piv++;}
  if(R.some(r=>r.slice(0,4).every(zero)&&!zero(r[4])))throw Error('the givens contradict each other');
  const part=[fr(0),fr(0),fr(0),fr(0)]; pivots.forEach((p,i)=>part[p]=R[i][4]);
  const dirs=[0,1,2,3].filter(c=>!pivots.includes(c)).map(f=>{
    const v=[fr(0),fr(0),fr(0),fr(0)];v[f]=fr(1);
    pivots.forEach((p,i)=>v[p]=sub(fr(0),R[i][f]));return v;});
  return{part,dirs};}

// ---- the question: is Pr(prop) fixed, and if not, what range could it take? ----
// Two things can fix a value: the equations, or the fact that no cell may fall outside
// [0,1] — Rule 0 does real work. Given Pr(b) = 0 the equations leave a free direction, but
// no cell can be negative, so Pr(a & b) is forced to 0 all the same.
function ask(prop,givens,as){
  const{part,dirs}=solve(givens,as), m=region(prop,as), k=dirs.length;
  const at=t=>part.map((p,i)=>t.reduce((s,tj,j)=>add(s,mul(tj,dirs[j][i])),p));
  const okAt=x=>x.every(v=>cmp(v,fr(0))>=0&&cmp(v,fr(1))<=0);
  if(k===0){if(!okAt(part))throw Error('the givens cannot all hold at once');
    return{determined:true,value:str(dot(m,part))};}
  if(k>2)return{determined:false};
  // The feasible set is bounded, so the extremes sit at a vertex, and a vertex is where k
  // of the eight bounds (each cell ≥ 0, each cell ≤ 1) hold with equality. Enumerate them.
  const cons=[];
  for(let i=0;i<4;i++)for(const rhs of[fr(0),fr(1)])
    cons.push({a:dirs.map(d=>d[i]),b:sub(rhs,part[i])});
  const V=[], push=t=>{const x=at(t); if(okAt(x))V.push(x);};
  if(k===1)cons.forEach(c=>{if(!zero(c.a[0]))push([dvd(c.b,c.a[0])]);});
  else for(let p=0;p<cons.length;p++)for(let q=p+1;q<cons.length;q++){
    const A=cons[p],B=cons[q],det=sub(mul(A.a[0],B.a[1]),mul(A.a[1],B.a[0]));
    if(zero(det))continue;
    push([dvd(sub(mul(A.b,B.a[1]),mul(A.a[1],B.b)),det),
          dvd(sub(mul(A.a[0],B.b),mul(A.b,B.a[0])),det)]);}
  if(!V.length)throw Error('the givens cannot all hold at once');
  let lo=V[0],hi=V[0];
  V.forEach(x=>{if(cmp(dot(m,x),dot(m,lo))<0)lo=x; if(cmp(dot(m,x),dot(m,hi))>0)hi=x;});
  const a=dot(m,lo), b=dot(m,hi);
  if(cmp(a,b)===0)return{determined:true,value:str(a)};      // pinned by Rule 0
  return{determined:false,min:str(a),max:str(b),
         witnesses:[lo.map(str),hi.map(str)]};}
if(typeof module!=='undefined')module.exports={ask,region,solve};
