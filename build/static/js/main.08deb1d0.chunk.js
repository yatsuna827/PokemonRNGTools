(this["webpackJsonppokemon-rng-tools"]=this["webpackJsonppokemon-rng-tools"]||[]).push([[0],{90:function(e,n,t){"use strict";t.r(n);var a=t(31),r=t.n(a),c=t(0),o=t.n(c),i=t(110),m=t(4),s=t(104),u=t(105),j=t(112),p=t(109),l=t(12),d=t(32),b=t(108),x=t(111),h=t(107),O=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133],[134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,213,214,215,216,217,218,219,220,221,222,223,231,232,233,234,235,236,237,238,239,240,241,249,250,251,252,253,256,257,258,259,267,268,269,270,271,274,275,276,277,285,286,287,288,289,290,291,292,293,294,295,303,304,305,306,307,308,309,310,311,312],[313,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464],[465,466,467,468,469,470,471,472,473,474,475,476,477,479,480,481,482,483,484,485,486,487,488,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,528,529,530,531,532,533,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,554,555,556,557,558,559,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611]],f=function(e){var n=(e>>>16&255)%132,t=(e>>>8&255)%132,a=(255&e)%132;return[O[0][(e>>>24&255)%132],O[1][n],O[2][t],O[3][a]]},k=t(23);Math.imul||(Math.imul=function(e,n){var t=(4194303&e)*(n|=0);return 4290772992&e&&(t+=(4290772992&e)*n|0),0|t});var g=function(e,n,t){return Math.imul(e,n)+t&4294967295},N=function e(n){var t=this;Object(k.a)(this,e),this.seed=n,this.count=void 0,this.getCount=function(){return t.count>>>0},this.getSeed=function(){return t.seed>>>0},this.getRand=function(e){return e?(t.advance()>>>16)%e:t.advance()>>>16},this.advance=function(){return t.count++,(t.seed=function(e){return g(e,1103515245,24691)}(t.seed))>>>0},this.back=function(){return t.count--,(t.seed=function(e){return g(e,4005161829,171270561)}(t.seed))>>>0},this.count=0};N.conCache=void 0,N.createCache=function(){if(N.conCache){var e=Array(32),n=Array(32);e[0]=1103515245,n[0]=24691;for(var t=0;t<32;t++)e[t]=Math.imul(e[t-1],e[t-1]),n[t]=Math.imul(n[t-1],e[t-1]+1);for(var a=[Array(256),Array(256),Array(256),Array(256)],r=[Array(256),Array(256),Array(256),Array(256)],c=0;c<4;c++){var o=c<<3;a[c][0]=1,r[c][0]=0,a[c][1]=e[o],r[c][1]=n[o];for(var i=2;i<256;i++)a[c][i]=Math.imul(a[c][i-1],e[o]),r[c][i]=Math.imul(r[c][i-1],e[o])+n[o]&4294967295}N.conCache={mulCache:a,addCache:r}}};var v=function(e){return g(e,1812433253,1)},C=function(e){return g(e>>>0,1103515245,12345)>>>16},y=[{mapName:"201\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c9\u30fc\u30c9\u30fc"},{mapName:"202\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b8\u30b0\u30b6\u30b0\u30de"},{mapName:"203\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e9\u30ab\u30e9"},{mapName:"206\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ce\u30ba\u30d1\u30b9"},{mapName:"207\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b4\u30de\u30be\u30a6"},{mapName:"208\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ce\u30b3\u30c3\u30c1"},{mapName:"209\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d6\u30eb\u30fc"},{mapName:"213\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a2\u30d6\u30bd\u30eb"},{mapName:"214\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d0\u30cd\u30d6\u30fc"},{mapName:"215\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b9\u30ea\u30fc\u30d7"},{mapName:"216\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c7\u30ea\u30d0\u30fc\u30c9"},{mapName:"217\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a6\u30ea\u30e0\u30fc"},{mapName:"218\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d3\u30ea\u30ea\u30c0\u30de"},{mapName:"221\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e2\u30cd\u30ae"},{mapName:"222\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a8\u30cd\u30b3"},{mapName:"224\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30cd\u30a4\u30c6\u30a3"},{mapName:"225\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30de\u30af\u30ce\u30b7\u30bf"},{mapName:"226\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30af\u30e9\u30d6"},{mapName:"227\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d1\u30c3\u30c1\u30fc\u30eb"},{mapName:"228\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c0\u30f3\u30d0\u30eb"},{mapName:"229\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30dd\u30c3\u30dd"},{mapName:"230\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30b5\u30cb\u30fc\u30b4"},{mapName:"\u305f\u306b\u307e\u306e\u306f\u3064\u3067\u3093\u3057\u3087",pokemon:"\u30e9\u30af\u30e9\u30a4"},{mapName:"\u30bf\u30bf\u30e9\u305b\u3044\u3066\u3064\u3058\u3087",pokemon:"\u30b3\u30a4\u30eb"},{mapName:"\u30cf\u30af\u30bf\u30a4\u306e\u3082\u308a",pokemon:"\u30ca\u30de\u30b1\u30ed"},{mapName:"\u30b7\u30f3\u30b8\u3053",pokemon:"\u30a2\u30e1\u30bf\u30de"},{mapName:"\u30ea\u30c3\u30b7\u3053",pokemon:"\u30d9\u30ed\u30ea\u30f3\u30ac"},{mapName:"\u30a8\u30a4\u30c1\u3053",pokemon:"\u30e0\u30c1\u30e5\u30fc\u30eb"}],w=[{mapName:"201\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c9\u30fc\u30c9\u30fc"},{mapName:"202\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b8\u30b0\u30b6\u30b0\u30de"},{mapName:"203\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e9\u30ab\u30e9"},{mapName:"206\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30e8\u30fc\u30ae\u30e9\u30b9"},{mapName:"207\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b4\u30de\u30be\u30a6"},{mapName:"208\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ce\u30b3\u30c3\u30c1"},{mapName:"209\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d6\u30eb\u30fc"},{mapName:"214\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d0\u30cd\u30d6\u30fc"},{mapName:"215\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b9\u30ea\u30fc\u30d7"},{mapName:"217\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c7\u30ea\u30d0\u30fc\u30c9"},{mapName:"218\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d3\u30ea\u30ea\u30c0\u30de"},{mapName:"221\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e2\u30cd\u30ae"},{mapName:"222\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a8\u30cd\u30b3"},{mapName:"224\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30cd\u30a4\u30c6\u30a3"},{mapName:"225\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30de\u30af\u30ce\u30b7\u30bf"},{mapName:"226\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30af\u30e9\u30d6"},{mapName:"227\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d1\u30c3\u30c1\u30fc\u30eb"},{mapName:"228\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c0\u30f3\u30d0\u30eb"},{mapName:"229\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30a4\u30ed\u30b9"},{mapName:"230\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30b5\u30cb\u30fc\u30b4"},{mapName:"\u305f\u306b\u307e\u306e\u306f\u3064\u3067\u3093\u3057\u3087",pokemon:"\u30e9\u30af\u30e9\u30a4"},{mapName:"\u30cf\u30af\u30bf\u30a4\u306e\u3082\u308a",pokemon:"\u30ca\u30de\u30b1\u30ed"}],S=function(e,n){return n[(e>>>0)%n.length]},B=function(e){return g(e,4005161829,4235699843)},I=function(e){var n=e.replace(/[\uff10-\uff19]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\D/g,"");return"0"===n?n:n.replace(/^0+/,"")},A=function(e){var n=o.a.useState(!1),t=Object(m.a)(n,2),a=t[0],r=t[1],c=o.a.useState(I(e)),i=Object(m.a)(c,2),s=i[0],u=i[1],j=o.a.useCallback((function(e){return u(a?e.target.value:I(e.target.value))}),[a]),p=o.a.useCallback((function(){return r(!0)}),[]),l=o.a.useCallback((function(){r(!1),u(I(s))}),[s]);return{value:s,onChange:j,onCompositionStart:p,onCompositionEnd:l}},D=t(3),F=["value"],M=["value"],R=function(e){return(e>>>0).toString(16)},E=function(e){return!(Number.isNaN(e)||!Number.isFinite(e))&&(!!Number.isInteger(e)&&(0<=e&&e<65536))},z=function(){var e=Object(b.a)(),n=A("65005"),t=n.value,a=Object(d.a)(n,F),r=A("14314"),c=r.value,i=Object(d.a)(r,M),j=o.a.useState([]),O=Object(m.a)(j,2),f=O[0],k=O[1],N=o.a.useCallback((function(){var n=Number(t),a=Number(c);""!==t&&""!==c&&E(n)&&E(a)?k(function(e,n){for(var t=[],a=0;a<65536;a++)g(e<<16|a,1812433253,3394631465)>>>16===n&&t.push(B(e<<16|a));return t}(n,a)):e({description:"\u3042\u307b\u3057\u306d",status:"error",duration:900})}),[t,c,e]);return Object(D.jsxs)(s.a,{children:[Object(D.jsx)(s.a,{marginBottom:"30px",children:"\u65e5\u66ff\u308f\u308aseed\u691c\u7d22"}),Object(D.jsxs)(u.a,{alignItems:"center",marginBottom:"10px",children:[Object(D.jsx)(s.a,{marginRight:"10px",children:"1\u65e5\u76ee"}),Object(D.jsx)(x.a,Object(l.a)({rounded:"sm",w:"150px",value:t},a))]}),Object(D.jsxs)(u.a,{alignItems:"center",marginBottom:"30px",children:[Object(D.jsx)(s.a,{marginRight:"10px",children:"2\u65e5\u76ee"}),Object(D.jsx)(x.a,Object(l.a)({rounded:"sm",w:"150px",value:c},i))]}),Object(D.jsx)(p.a,{marginBottom:"10px",variant:"ghost",w:"150px",border:"1px",borderColor:"gray.300",rounded:"sm",onClick:N,children:"\u8a08\u7b97"}),f.length>0&&Object(D.jsxs)(h.a,{size:"sm",children:[Object(D.jsx)(h.e,{children:Object(D.jsxs)(h.f,{children:[Object(D.jsx)(h.d,{w:"25%"}),Object(D.jsx)(h.d,{w:"25%",children:"seed"}),Object(D.jsx)(h.d,{w:"25%",children:"3\u65e5\u76ee"}),Object(D.jsx)(h.d,{w:"25%"})]})}),Object(D.jsx)(h.b,{children:f.map((function(n,t){return Object(D.jsxs)(h.f,{children:[Object(D.jsxs)(h.c,{userSelect:"none",children:["\u5019\u88dc",t]}),Object(D.jsx)(h.c,{children:R(n)}),Object(D.jsx)(h.c,{children:(a=n,C(v(v(a>>>0))))}),Object(D.jsx)(h.c,{children:Object(D.jsx)(p.a,{variant:"ghost",border:"1px",borderColor:"gray.300",rounded:"sm",onClick:function(){navigator.clipboard.writeText(R(n)),e({description:"\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",status:"success",duration:900})},children:"seed\u3092\u30b3\u30d4\u30fc"})})]},t);var a}))})]})]})},L=["##....*.............","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~x~~","##~~~x~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~x~~~~~~~~~~~","*.~~~~~~~~~~~~~~~~~~","..~~~~~~~~#######~~~","..~~~~~~~~#######~~~","..~~~~~~~~#######~~~","..~~##~~~~#######~~~","..~~##~~~~#######~~~","*.~~~~~~~~#######~~~","..~~~~~~~~#######~~~","..~~~~~~~~~~~~..~~~~","..~~~~~~~~~~~~..~~~~","..~~~~~~~~~~~~~~~~~~","..~~~~~~~~~~~~~~~~~~","..~~~~~~~~~~~~~###~~","..~~~~~~~~~~~~~###~~","..~~~~~~~~~~~~~###~~","..~~~~~~~~~~~~~~~~~~","..~~~~~~~~~~x~~~~~~~","*.~~~###~~~~~~~~~~~~","..~~~###~~~~~~~~~~~~","..~~~###~~~~~~##~~~~","..~~~~~~~~~~~~##~~~~","..~~x~~~~~~~~~~~~~~~","..~~~~~~~~~~~~~~~~~~","x.~~~~~~~~~~~~~~~~~~"].map((function(e){return e.split("")})),J=function(e){var n=e.bg,t=e.children;return Object(D.jsx)(u.a,{h:"20px",w:"20px",border:"1px",borderColor:"gray.200",bg:n,alignItems:"center",justifyContent:"center",userSelect:"none",children:t})},T={"#":{bg:"black"},"*":{bg:"#6B493D"},x:{bg:"white"},".":{bg:"#C5956B"},"~":{bg:"blue.200"}},W=function(e){var n=e.h,t=e.line,a=e.feebasIndexes;return Object(D.jsx)(u.a,{children:t.map((function(e,t){return Object(D.jsx)(J,Object(l.a)(Object(l.a)({},T[e]),{},{children:n>=0&&t>1&&a.includes(18*n+t-2)&&"@"}),t)}))})},X=function(e){var n=e.feebasIndexes;return Object(D.jsx)(D.Fragment,{children:L.map((function(e,t){return Object(D.jsx)(W,{line:e,h:t-1,feebasIndexes:n||[]},t)}))})},G=["children"],P=["children"],V=function(e){var n=e.children,t=Object(d.a)(e,G);return Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({variant:"ghost",border:"1px",borderColor:"gray.300",rounded:"sm",userSelect:"none"},t),{},{children:n}))},q=function(e){var n=e.children,t=Object(d.a)(e,P);return Object(D.jsx)(u.a,Object(l.a)(Object(l.a)({h:"40px",w:"100px",fontWeight:"bold",border:"1px",color:"white",bg:"gray.500",rounded:"sm",justifyContent:"center",alignItems:"center",userSelect:"none"},t),{},{children:n}))},H=function(e){var n=e.i,t=e.bg,a=e.seed,r=e.lottery,c=e.mapName,i=e.pokemon,m=e.points,s=e.onClick,u=o.a.useCallback((function(){s(n,m)}),[s,m]);return Object(D.jsxs)(h.f,{cursor:"pointer",onClick:u,bg:t,children:[Object(D.jsxs)(h.c,{userSelect:"none",children:[n+1,"\u65e5\u76ee"]}),Object(D.jsx)(h.c,{children:a}),Object(D.jsx)(h.c,{children:r}),Object(D.jsx)(h.c,{children:c}),Object(D.jsx)(h.c,{children:i})]})},K=function(){var e=Object(b.a)(),n=o.a.useRef(null),t=o.a.useState(void 0),a=Object(m.a)(t,2),r=a[0],c=a[1],i=o.a.useState("dp"),p=Object(m.a)(i,2),d=p[0],O=p[1],k=o.a.useState(void 0),g=Object(m.a)(k,2),N=g[0],B=g[1],I=o.a.useState([]),A=Object(m.a)(I,2),F=A[0],M=A[1],R=o.a.useCallback((function(){return O("dp")}),[]),E=o.a.useCallback((function(){return O("pt")}),[]),z=o.a.useCallback((function(){if(null===n||void 0===n?void 0:n.current){var t=n.current.value;if(function(e){return 0<e.length&&e.length<=8&&!/[^0-9A-Fa-f]/g.test(e)}(t)){for(var a,r=[],o=parseInt(t,16),i=0;i<20;i++,o=v(o))r.push(Object(l.a)(Object(l.a)({seed:(a=o,(a>>>0).toString(16)),lottery:C(o>>>0)},S(o>>>0,"dp"===d?y:w)),{},{points:f(o>>>0)}));c(r),B(void 0),M([])}else e({description:"\u3042\u307b\u3057\u306d",status:"error",duration:900})}}),[n,e,d]),L=o.a.useCallback((function(e,n){B(e),M(n)}),[]);return Object(D.jsxs)(s.a,{children:[Object(D.jsx)(s.a,{marginBottom:"30px",children:"\u65e5\u66ff\u308f\u308aseed\u30ea\u30b9\u30c8"}),Object(D.jsxs)(u.a,{w:"60%",alignItems:"center",marginBottom:"10px",children:[Object(D.jsx)(s.a,{marginRight:"10px",children:"seed"}),Object(D.jsx)(x.a,{ref:n,rounded:"sm",w:"150px",defaultValue:"8fe39a4b"})]}),Object(D.jsxs)(j.a,{marginBottom:"10px",children:["dp"===d?Object(D.jsx)(q,{children:"\u30c0\u30a4\u30d1"}):Object(D.jsx)(V,{w:"100px",onClick:R,children:"\u30c0\u30a4\u30d1"}),"pt"===d?Object(D.jsx)(q,{children:"\u30d7\u30e9\u30c1\u30ca"}):Object(D.jsx)(V,{w:"100px",onClick:E,children:"\u30d7\u30e9\u30c1\u30ca"})]}),Object(D.jsx)(V,{marginBottom:"10px",w:"150px",onClick:z,children:"\u8a08\u7b97"}),Object(D.jsxs)(u.a,{W:"100vw",children:[Object(D.jsx)(s.a,{w:"60%",paddingX:"10px",children:Object(D.jsxs)(h.a,{size:"sm",children:[Object(D.jsx)(h.e,{children:Object(D.jsxs)(h.f,{children:[Object(D.jsx)(h.d,{}),Object(D.jsx)(h.d,{children:"seed"}),Object(D.jsx)(h.d,{children:"\u304f\u3058\u756a\u53f7"}),Object(D.jsx)(h.d,{children:"\u5927\u91cf\u767a\u751f\u30de\u30c3\u30d7"}),Object(D.jsx)(h.d,{children:"\u5927\u91cf\u767a\u751f\u30dd\u30b1\u30e2\u30f3"})]})}),Object(D.jsx)(h.b,{children:r&&r.map((function(e,n){return Object(D.jsx)(H,Object(l.a)(Object(l.a)({i:n,onClick:L},r[n]),{},{bg:n===N?"gray.200":"transparent"}),e.seed)}))})]})}),Object(D.jsx)(s.a,{w:"40%",children:Object(D.jsx)(X,{feebasIndexes:F})})]})]})},Q=function(){var e=o.a.useState("DailySeedFinder"),n=Object(m.a)(e,2),t=n[0],a=n[1],r=o.a.useCallback((function(){return a("DailySeedFinder")}),[]),c=o.a.useCallback((function(){return a("DailySeedList")}),[]);return Object(D.jsxs)(s.a,{marginX:"150px",marginBottom:"50px",children:[Object(D.jsx)(u.a,{h:"80px",w:"100%",paddingLeft:"30px",justifyContent:"center",alignItems:"center",bg:"#29BEEF",marginBottom:"30px",children:Object(D.jsx)(s.a,{fontSize:"24px",color:"white",children:"Pokemon RNG Tools"})}),Object(D.jsx)(u.a,{justifyContent:"left",marginBottom:"30px",children:Object(D.jsxs)(j.a,{children:[Object(D.jsx)(p.a,{variant:"link",onClick:r,children:"\u691c\u7d22"}),Object(D.jsx)(p.a,{variant:"link",onClick:c,children:"\u30ea\u30b9\u30c8"})]})}),"DailySeedFinder"===t&&Object(D.jsx)(z,{}),"DailySeedList"===t&&Object(D.jsx)(K,{})]})},U=function(){return Object(D.jsx)(i.a,{children:Object(D.jsx)(Q,{})})};r.a.render(Object(D.jsx)(U,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.08deb1d0.chunk.js.map