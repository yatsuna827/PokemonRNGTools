(this["webpackJsonppokemon-rng-tools"]=this["webpackJsonppokemon-rng-tools"]||[]).push([[0],{117:function(e,n,t){"use strict";t.r(n);var a=t(53),r=t.n(a),c=t(0),o=t.n(c),i=t(145),s=t(5),l=t(136),j=t(137),m=t(147),u=t(144),d=t(11),b=t(24),p=t(143),x=t(146),h=t(139),O=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133],[134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,213,214,215,216,217,218,219,220,221,222,223,231,232,233,234,235,236,237,238,239,240,241,249,250,251,252,253,256,257,258,259,267,268,269,270,271,274,275,276,277,285,286,287,288,289,290,291,292,293,294,295,303,304,305,306,307,308,309,310,311,312],[313,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464],[465,466,467,468,469,470,471,472,473,474,475,476,477,479,480,481,482,483,484,485,486,487,488,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,528,529,530,531,532,533,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,554,555,556,557,558,559,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611]],f=function(e){var n=(e>>>16&255)%132,t=(e>>>8&255)%132,a=(255&e)%132;return[O[0][(e>>>24&255)%132],O[1][n],O[2][t],O[3][a]]},g=t(29);Math.imul||(Math.imul=function(e,n){var t=(4194303&e)*(n|=0);return 4290772992&e&&(t+=(4290772992&e)*n|0),0|t});var k=function(e,n,t){return Math.imul(e,n)+t&4294967295},v=function e(n){var t=this;Object(g.a)(this,e),this.seed=n,this.count=void 0,this.getCount=function(){return t.count>>>0},this.getSeed=function(){return t.seed>>>0},this.getRand=function(e){return e?(t.advance()>>>16)%e:t.advance()>>>16},this.advance=function(){return t.count++,(t.seed=function(e){return k(e,1103515245,24691)}(t.seed))>>>0},this.back=function(){return t.count--,(t.seed=function(e){return k(e,4005161829,171270561)}(t.seed))>>>0},this.count=0};v.conCache=void 0,v.createCache=function(){if(v.conCache){var e=Array(32),n=Array(32);e[0]=1103515245,n[0]=24691;for(var t=0;t<32;t++)e[t]=Math.imul(e[t-1],e[t-1]),n[t]=Math.imul(n[t-1],e[t-1]+1);for(var a=[Array(256),Array(256),Array(256),Array(256)],r=[Array(256),Array(256),Array(256),Array(256)],c=0;c<4;c++){var o=c<<3;a[c][0]=1,r[c][0]=0,a[c][1]=e[o],r[c][1]=n[o];for(var i=2;i<256;i++)a[c][i]=Math.imul(a[c][i-1],e[o]),r[c][i]=Math.imul(r[c][i-1],e[o])+n[o]&4294967295}v.conCache={mulCache:a,addCache:r}}};var C,N,y=function(e){return k(e,1812433253,1)},S=function(e){return k(e>>>0,1103515245,12345)>>>16},w=[{mapName:"201\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c9\u30fc\u30c9\u30fc"},{mapName:"202\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b8\u30b0\u30b6\u30b0\u30de"},{mapName:"203\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e9\u30ab\u30e9"},{mapName:"206\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ce\u30ba\u30d1\u30b9"},{mapName:"207\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b4\u30de\u30be\u30a6"},{mapName:"208\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ce\u30b3\u30c3\u30c1"},{mapName:"209\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d6\u30eb\u30fc"},{mapName:"213\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a2\u30d6\u30bd\u30eb"},{mapName:"214\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d0\u30cd\u30d6\u30fc"},{mapName:"215\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b9\u30ea\u30fc\u30d7"},{mapName:"216\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c7\u30ea\u30d0\u30fc\u30c9"},{mapName:"217\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a6\u30ea\u30e0\u30fc"},{mapName:"218\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d3\u30ea\u30ea\u30c0\u30de"},{mapName:"221\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e2\u30cd\u30ae"},{mapName:"222\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a8\u30cd\u30b3"},{mapName:"224\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30cd\u30a4\u30c6\u30a3"},{mapName:"225\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30de\u30af\u30ce\u30b7\u30bf"},{mapName:"226\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30af\u30e9\u30d6"},{mapName:"227\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d1\u30c3\u30c1\u30fc\u30eb"},{mapName:"228\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c0\u30f3\u30d0\u30eb"},{mapName:"229\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30dd\u30c3\u30dd"},{mapName:"230\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30b5\u30cb\u30fc\u30b4"},{mapName:"\u305f\u306b\u307e\u306e\u306f\u3064\u3067\u3093\u3057\u3087",pokemon:"\u30e9\u30af\u30e9\u30a4"},{mapName:"\u30bf\u30bf\u30e9\u305b\u3044\u3066\u3064\u3058\u3087",pokemon:"\u30b3\u30a4\u30eb"},{mapName:"\u30cf\u30af\u30bf\u30a4\u306e\u3082\u308a",pokemon:"\u30ca\u30de\u30b1\u30ed"},{mapName:"\u30b7\u30f3\u30b8\u3053",pokemon:"\u30a2\u30e1\u30bf\u30de"},{mapName:"\u30ea\u30c3\u30b7\u3053",pokemon:"\u30d9\u30ed\u30ea\u30f3\u30ac"},{mapName:"\u30a8\u30a4\u30c1\u3053",pokemon:"\u30e0\u30c1\u30e5\u30fc\u30eb"}],I=[{mapName:"201\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c9\u30fc\u30c9\u30fc"},{mapName:"202\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b8\u30b0\u30b6\u30b0\u30de"},{mapName:"203\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e9\u30ab\u30e9"},{mapName:"206\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30e8\u30fc\u30ae\u30e9\u30b9"},{mapName:"207\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b4\u30de\u30be\u30a6"},{mapName:"208\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ce\u30b3\u30c3\u30c1"},{mapName:"209\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d6\u30eb\u30fc"},{mapName:"214\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d0\u30cd\u30d6\u30fc"},{mapName:"215\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30b9\u30ea\u30fc\u30d7"},{mapName:"217\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c7\u30ea\u30d0\u30fc\u30c9"},{mapName:"218\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d3\u30ea\u30ea\u30c0\u30de"},{mapName:"221\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30e2\u30cd\u30ae"},{mapName:"222\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30a8\u30cd\u30b3"},{mapName:"224\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30cd\u30a4\u30c6\u30a3"},{mapName:"225\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30de\u30af\u30ce\u30b7\u30bf"},{mapName:"226\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30af\u30e9\u30d6"},{mapName:"227\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30d1\u30c3\u30c1\u30fc\u30eb"},{mapName:"228\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30c0\u30f3\u30d0\u30eb"},{mapName:"229\u3070\u3093\u3069\u3046\u308d",pokemon:"\u30ab\u30a4\u30ed\u30b9"},{mapName:"230\u3070\u3093\u3059\u3044\u3069\u3046",pokemon:"\u30b5\u30cb\u30fc\u30b4"},{mapName:"\u305f\u306b\u307e\u306e\u306f\u3064\u3067\u3093\u3057\u3087",pokemon:"\u30e9\u30af\u30e9\u30a4"},{mapName:"\u30cf\u30af\u30bf\u30a4\u306e\u3082\u308a",pokemon:"\u30ca\u30de\u30b1\u30ed"}],M=function(e,n){return n[(e>>>0)%n.length]},B=function(e){return k(e,4005161829,4235699843)},F=function(e){var n=e.replace(/[\uff10-\uff19]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\D/g,"");return"0"===n?n:n.replace(/^0+/,"")},A=function(e){var n=o.a.useState(!1),t=Object(s.a)(n,2),a=t[0],r=t[1],c=o.a.useState(F(e)),i=Object(s.a)(c,2),l=i[0],j=i[1],m=o.a.useCallback((function(e){return j(a?e.target.value:F(e.target.value))}),[a]),u=o.a.useCallback((function(){""===l&&j("0")}),[l]),d=o.a.useCallback((function(){return r(!0)}),[]),b=o.a.useCallback((function(){r(!1),j(F(l))}),[l]),p=o.a.useCallback((function(){return parseInt(l)}),[l]);return{value:l,onChange:m,onBlur:u,onCompositionStart:d,onCompositionEnd:b,getValue:p}},D=t(3),R=["getValue"],V=["getValue"],W=function(e){return(e>>>0).toString(16)},G=function(e){return!(Number.isNaN(e)||!Number.isFinite(e))&&(!!Number.isInteger(e)&&(0<=e&&e<65536))},z=function(){var e=Object(p.a)(),n=A("65005"),t=n.getValue,a=Object(b.a)(n,R),r=A("14314"),c=r.getValue,i=Object(b.a)(r,V),m=o.a.useState([]),O=Object(s.a)(m,2),f=O[0],g=O[1],v=o.a.useCallback((function(){var n=t(),a=c();G(n)&&G(a)?g(function(e,n){for(var t=[],a=0;a<65536;a++)k(e<<16|a,1812433253,3394631465)>>>16===n&&t.push(B(e<<16|a));return t}(n,a)):e({description:"\u3042\u307b\u3057\u306d",status:"error",duration:900})}),[t,c,e]);return Object(D.jsxs)(l.a,{children:[Object(D.jsx)(l.a,{marginBottom:"30px",children:"\u65e5\u66ff\u308f\u308aseed\u691c\u7d22"}),Object(D.jsxs)(j.a,{alignItems:"center",marginBottom:"10px",children:[Object(D.jsx)(l.a,{marginRight:"10px",children:"1\u65e5\u76ee"}),Object(D.jsx)(x.a,Object(d.a)({rounded:"sm",w:"150px"},a))]}),Object(D.jsxs)(j.a,{alignItems:"center",marginBottom:"30px",children:[Object(D.jsx)(l.a,{marginRight:"10px",children:"2\u65e5\u76ee"}),Object(D.jsx)(x.a,Object(d.a)({rounded:"sm",w:"150px"},i))]}),Object(D.jsx)(u.a,{marginBottom:"10px",variant:"ghost",w:"150px",border:"1px",borderColor:"gray.300",rounded:"sm",onClick:v,children:"\u8a08\u7b97"}),f.length>0&&Object(D.jsxs)(h.a,{size:"sm",children:[Object(D.jsx)(h.e,{children:Object(D.jsxs)(h.f,{children:[Object(D.jsx)(h.d,{w:"25%"}),Object(D.jsx)(h.d,{w:"25%",children:"seed"}),Object(D.jsx)(h.d,{w:"25%",children:"3\u65e5\u76ee"}),Object(D.jsx)(h.d,{w:"25%"})]})}),Object(D.jsx)(h.b,{children:f.map((function(n,t){return Object(D.jsxs)(h.f,{children:[Object(D.jsxs)(h.c,{userSelect:"none",children:["\u5019\u88dc",t]}),Object(D.jsx)(h.c,{children:W(n)}),Object(D.jsx)(h.c,{children:(a=n,S(y(y(a>>>0))))}),Object(D.jsx)(h.c,{children:Object(D.jsx)(u.a,{variant:"ghost",border:"1px",borderColor:"gray.300",rounded:"sm",onClick:function(){navigator.clipboard.writeText(W(n)),e({description:"\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",status:"success",duration:900})},children:"seed\u3092\u30b3\u30d4\u30fc"})})]},t);var a}))})]})]})},H=o.a.memo((function(e){var n=e.i,t=e.bg,a=e.seed,r=e.lottery,c=e.mapName,i=e.pokemon,s=e.points,l=e.onClick,j=o.a.useCallback((function(){l(n,s)}),[l,s,n]);return Object(D.jsxs)(h.f,{cursor:"pointer",onClick:j,bg:t,children:[Object(D.jsxs)(h.c,{userSelect:"none",children:[n+1,"\u65e5\u76ee"]}),Object(D.jsx)(h.c,{children:a}),Object(D.jsx)(h.c,{children:r}),Object(D.jsx)(h.c,{children:c}),Object(D.jsx)(h.c,{children:i})]})})),L=o.a.memo((function(e){var n=e.result,t=e.selectedRowIndex,a=e.onClickRow;return Object(D.jsxs)(h.a,{size:"sm",children:[Object(D.jsx)(h.e,{children:Object(D.jsxs)(h.f,{children:[Object(D.jsx)(h.d,{}),Object(D.jsx)(h.d,{children:"seed"}),Object(D.jsx)(h.d,{children:"\u304f\u3058\u756a\u53f7"}),Object(D.jsx)(h.d,{children:"\u5927\u91cf\u767a\u751f\u30de\u30c3\u30d7"}),Object(D.jsx)(h.d,{children:"\u5927\u91cf\u767a\u751f\u30dd\u30b1\u30e2\u30f3"})]})}),Object(D.jsx)(h.b,{children:n&&n.map((function(e,r){return Object(D.jsx)(H,Object(d.a)(Object(d.a)({i:r,onClick:a},n[r]),{},{bg:r===t?"gray.200":"transparent"}),e.seed)}))})]})})),T=function(e){return 0<e.length&&e.length<=8&&!/[^0-9A-Fa-f]/g.test(e)},E=function(e){return(e>>>0).toString(16)},J=["##....*.............","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~x~~","##~~~x~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~~~~~~~~~~~~~","##~~~~~~x~~~~~~~~~~~","*.~~~~~~~~~~~~~~~~~~","..~~~~~~~~#######~~~","..~~~~~~~~#######~~~","..~~~~~~~~#######~~~","..~~##~~~~#######~~~","..~~##~~~~#######~~~","*.~~~~~~~~#######~~~","..~~~~~~~~#######~~~","..~~~~~~~~~~~~..~~~~","..~~~~~~~~~~~~..~~~~","..~~~~~~~~~~~~~~~~~~","..~~~~~~~~~~~~~~~~~~","..~~~~~~~~~~~~~###~~","..~~~~~~~~~~~~~###~~","..~~~~~~~~~~~~~###~~","..~~~~~~~~~~~~~~~~~~","..~~~~~~~~~~x~~~~~~~","*.~~~###~~~~~~~~~~~~","..~~~###~~~~~~~~~~~~","..~~~###~~~~~~##~~~~","..~~~~~~~~~~~~##~~~~","..~~x~~~~~~~~~~~~~~~","..~~~~~~~~~~~~~~~~~~","x.~~~~~~~~~~~~~~~~~~"].map((function(e){return e.split("")})),P=function(e){var n=e.bg,t=e.children;return Object(D.jsx)(j.a,{h:"20px",w:"20px",border:"1px",borderColor:"gray.200",bg:n,alignItems:"center",justifyContent:"center",userSelect:"none",children:t})},X={"#":{bg:"black"},"*":{bg:"#6B493D"},x:{bg:"white"},".":{bg:"#C5956B"},"~":{bg:"blue.200"}},q=function(e){var n=e.h,t=e.line,a=e.feebasIndexes;return Object(D.jsx)(j.a,{children:t.map((function(e,t){return Object(D.jsx)(P,Object(d.a)(Object(d.a)({},X[e]),{},{children:n>=0&&t>1&&a.includes(18*n+t-2)&&"@"}),t)}))})},K=o.a.memo((function(e){var n=e.feebasIndexes;return Object(D.jsx)(D.Fragment,{children:J.map((function(e,t){return Object(D.jsx)(q,{line:e,h:t-1,feebasIndexes:n||[]},t)}))})})),Q=["children"],U=function(e){var n=e.children,t=Object(b.a)(e,Q);return Object(D.jsx)(u.a,Object(d.a)(Object(d.a)({variant:"ghost",border:"1px",borderColor:"gray.300",rounded:"sm",userSelect:"none"},t),{},{children:n}))},Y=["children"],Z=function(e){var n=e.children,t=Object(b.a)(e,Y);return Object(D.jsx)(j.a,Object(d.a)(Object(d.a)({h:"40px",w:"100px",fontWeight:"bold",border:"1px",color:"white",bg:"gray.500",rounded:"sm",justifyContent:"center",alignItems:"center",userSelect:"none"},t),{},{children:n}))},$=function(){var e=Object(p.a)(),n=o.a.useRef(null),t=o.a.useState(void 0),a=Object(s.a)(t,2),r=a[0],c=a[1],i=o.a.useState("dp"),u=Object(s.a)(i,2),b=u[0],h=u[1],O=o.a.useState(void 0),g=Object(s.a)(O,2),k=g[0],v=g[1],C=o.a.useState([]),N=Object(s.a)(C,2),B=N[0],F=N[1],A=o.a.useCallback((function(){return h("dp")}),[]),R=o.a.useCallback((function(){return h("pt")}),[]),V=o.a.useCallback((function(){if(null===n||void 0===n?void 0:n.current){var t=n.current.value;if(T(t)){for(var a=[],r=parseInt(t,16),o=0;o<20;o++,r=y(r))a.push(Object(d.a)(Object(d.a)({seed:E(r),lottery:S(r>>>0)},M(r>>>0,"dp"===b?w:I)),{},{points:f(r>>>0)}));c(a),v(void 0),F([])}else e({description:"\u3042\u307b\u3057\u306d",status:"error",duration:900})}}),[n,e,b]),W=o.a.useCallback((function(e,n){v(e),F(n)}),[]);return Object(D.jsxs)(l.a,{children:[Object(D.jsx)(l.a,{marginBottom:"30px",children:"\u65e5\u66ff\u308f\u308aseed\u30ea\u30b9\u30c8"}),Object(D.jsxs)(j.a,{w:"60%",alignItems:"center",marginBottom:"10px",children:[Object(D.jsx)(l.a,{marginRight:"10px",children:"seed"}),Object(D.jsx)(x.a,{ref:n,rounded:"sm",w:"150px",defaultValue:"8fe39a4b"})]}),Object(D.jsxs)(m.a,{marginBottom:"10px",children:["dp"===b?Object(D.jsx)(Z,{children:"\u30c0\u30a4\u30d1"}):Object(D.jsx)(U,{w:"100px",onClick:A,children:"\u30c0\u30a4\u30d1"}),"pt"===b?Object(D.jsx)(Z,{children:"\u30d7\u30e9\u30c1\u30ca"}):Object(D.jsx)(U,{w:"100px",onClick:R,children:"\u30d7\u30e9\u30c1\u30ca"})]}),Object(D.jsx)(U,{marginBottom:"10px",w:"150px",onClick:V,children:"\u8a08\u7b97"}),Object(D.jsxs)(j.a,{flexWrap:"wrap",children:[Object(D.jsx)(l.a,{w:"60%",paddingX:"10px",children:Object(D.jsx)(L,{result:r,selectedRowIndex:k,onClickRow:W})}),Object(D.jsx)(l.a,{children:Object(D.jsx)(K,{feebasIndexes:B})})]})]})},_=function(){var e=o.a.useState("DailySeedFinder"),n=Object(s.a)(e,2),t=n[0],a=n[1],r=o.a.useCallback((function(){return a("DailySeedFinder")}),[]),c=o.a.useCallback((function(){return a("DailySeedList")}),[]);return Object(D.jsxs)(l.a,{maxW:"1000px",margin:"0 auto",marginBottom:"50px",children:[Object(D.jsx)(j.a,{justifyContent:"left",marginBottom:"30px",children:Object(D.jsxs)(m.a,{children:[Object(D.jsx)(u.a,{variant:"link",onClick:r,children:"\u691c\u7d22"}),Object(D.jsx)(u.a,{variant:"link",onClick:c,children:"\u30ea\u30b9\u30c8"})]})}),"DailySeedFinder"===t&&Object(D.jsx)(z,{}),"DailySeedList"===t&&Object(D.jsx)($,{})]})},ee=t(49),ne=t(13),te=t(142),ae=["second","minute","hour"],re=86400,ce=36525,oe=[31,28,31,30,31,30,31,31,30,31,30,31],ie=[0,31,59,90,120,151,181,212,243,273,304,334],se=function(e){var n=e.year,t=e.month,a=t<3?n-1:n;return 365*a+(a+4>>>2)+(979*(t<3?t+12:t)-1033>>>5)+e.date-1},le=function(e){e%=ce,e+=1095;var n=Math.floor(e/1461);if(1460==(e-=1461*n))return{year:4*n,month:12,date:31};var t=Math.floor(e/365),a=t+4*n-3;if(e-=365*t,3==t&&59==e)return{year:a,month:2,date:29};if(e<31)return{year:a,month:1,date:e+1};if(e<59)return{year:a,month:2,date:e-30};3==t&&e--;var r=Math.floor(e/31),c=e-ie[r],o=r+1,i=c+1;return c<1?{year:a,month:o-1,date:i+ie[r-1]}:c>=oe[r]?{year:a,month:o+1,date:i-oe[r]}:{year:a,month:o,date:i}},je=function(e){var n=e.seed,t=e.blank,a=e.second,r=e.extendsFrame,c=n>>>24,o=16777215&n,i=o>1507328?23:o>>16,s=t+(o-=i<<16);s<65536&&(void 0!==r&&r)&&(0!=i?(i--,s+=65536):(0==c?c=255:c--,s+=16777216));var l=Math.floor(s/59.8261),j=s-Math.floor((598261*l+9999)/1e4);s-=j;var m=0==(c=c-(a+l)%60&255)?12:c<10?1:10,u=0==c?21:Math.floor(c/m),p=function(e,n){var t=e.second,a=e.minute,r=e.hour,c=Object(b.a)(e,ae),o=Math.floor(1e4*n/598261);n!=Math.floor((598261*o+9999)/1e4)&&o++;var i=Math.floor(o/re),s=t+60*a+3600*r-(o-=i*re);s<0&&(i++,s+=re);var l=Math.floor(s/60);s-=60*l;var j=Math.floor(l/60);l-=60*j;var m=se(c)-i;return m<0&&(m+=ce),Object(d.a)(Object(d.a)({},le(m)),{},{hour:j,minute:l,second:s})}({year:j,month:m,date:u,hour:i,minute:0==c?4:c-m*u,second:(a+l)%60},s);return{innerClock:p,waitFrames:s,blankFrames:t}},me=["result"],ue=function(e){return"".concat(e).padStart(2,"0")},de=function(e){var n=e.result,t=Object(b.a)(e,me),a=o.a.useMemo((function(){var e=n.innerClock,t=e.year,a=e.month,r=e.date;return"".concat(t+2e3,"\u5e74").concat(ue(a),"\u6708").concat(ue(r),"\u65e5")}),[n.innerClock]),r=o.a.useMemo((function(){var e=n.innerClock,t=e.hour,a=e.minute,r=e.second;return"".concat(ue(t),"\u6642").concat(ue(a),"\u5206").concat(ue(r),"\u79d2")}),[n.innerClock]),c=o.a.useMemo((function(){return"".concat(n.waitFrames,"F (").concat(Math.round(n.waitFrames/59.8261),"\u79d2) \u5f85\u6a5f")}),[n.waitFrames]);return Object(D.jsxs)(l.a,Object(d.a)(Object(d.a)({},t),{},{children:[Object(D.jsx)(l.a,{children:"".concat(a," ").concat(r," \u8d77\u52d5")}),Object(D.jsx)(l.a,{children:c})]}))},be=function(){var e=Object(p.a)(),n=o.a.useState("AC120FB2"),t=Object(s.a)(n,2),a=t[0],r=t[1],c=o.a.useCallback((function(e){return r(e.target.value)}),[]),i=o.a.useState(345),m=Object(s.a)(i,2),d=m[0],b=m[1],h=o.a.useCallback((function(e){return b(e.target.valueAsNumber)}),[]),O=o.a.useState(null),f=Object(s.a)(O,2),g=f[0],k=f[1],v=o.a.useCallback((function(){if(T(a)&&Number.isInteger(d)){var n=je({seed:parseInt(a,16),blank:d,second:10});k(n)}else e({description:"\u3042\u307b\u3057\u306d",status:"error"})}),[a,d,e]);return Object(D.jsxs)(l.a,{maxW:"1000px",margin:"0 auto",marginBottom:"50px",children:[Object(D.jsxs)(j.a,{w:"60%",alignItems:"center",marginBottom:"10px",children:[Object(D.jsx)(l.a,{marginRight:"10px",children:"seed"}),Object(D.jsx)(x.a,{rounded:"sm",w:"150px",value:a,onChange:c})]}),Object(D.jsxs)(j.a,{w:"60%",alignItems:"center",marginBottom:"10px",children:[Object(D.jsx)(l.a,{marginRight:"10px",children:"\u7a7a\u767d\u6642\u9593"}),Object(D.jsx)(x.a,{type:"number",min:"100",max:"999",rounded:"sm",w:"150px",value:d,onChange:h}),Object(D.jsxs)(te.a,{children:[Object(D.jsx)(te.b,{as:u.a,variant:"ghost",border:"1px",borderColor:"gray.300",rounded:"sm",userSelect:"none",marginLeft:"10px",children:"\u30d7\u30ea\u30bb\u30c3\u30c8"}),Object(D.jsxs)(te.d,{children:[Object(D.jsx)(te.c,{onClick:function(){return b(221)},children:"\u30c0\u30a4\u30d1"}),Object(D.jsx)(te.c,{onClick:function(){return b(249)},children:"\u30d7\u30e9\u30c1\u30ca"}),Object(D.jsx)(te.c,{onClick:function(){return b(345)},children:"HGSS"}),Object(D.jsx)(te.c,{onClick:function(){return b(212)},children:"\u30c0\u30a4\u30d1 ID\u8abf\u6574"}),Object(D.jsx)(te.c,{onClick:function(){return b(332)},children:"\u30d7\u30e9\u30c1\u30ca ID\u8abf\u6574"}),Object(D.jsx)(te.c,{onClick:function(){return b(184)},children:"HGSS ID\u8abf\u6574"})]})]})]}),Object(D.jsx)(U,{onClick:v,children:"\u8a08\u7b97"}),g&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(de,{result:g,marginTop:"20px",fontSize:"32px",color:"black"}),Object(D.jsxs)(l.a,{color:"gray.400",marginTop:"20px",children:[Object(D.jsx)("b",{children:"HGSS"}),"\u306e",Object(D.jsx)("b",{children:"ID\u8abf\u6574"}),"\u306e\u5834\u5408\u3001\u8868\u793a\u3055\u308c\u305f\u6642\u523b\u306e",Object(D.jsx)("b",{children:"3\u5206\u524d"}),"\u306e\u6642\u523b\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(D.jsx)("br",{}),"\u3053\u308c\u306fHGSS\u306eID\u6c7a\u5b9a\u306e\u51e6\u7406\u304c\u5b9f\u969b\u306b\u5b9f\u884c\u3055\u308c\u308b\u306e\u304c\u3001\u6700\u5f8c\u306bA\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304b\u3089\u7d043\u79d2\u5f8c\u3067\u3042\u308b\u305f\u3081\u3067\u3059\u3002",Object(D.jsx)("br",{}),"\u305d\u306e\u3046\u3061\u30c4\u30fc\u30eb\u5074\u3067\u5bfe\u5fdc\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]})]})]})},pe=function(){return Object(D.jsxs)(D.Fragment,{children:["\u3088\u304a\u3053\u305d",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(ee.b,{to:"/daily",children:"\u65e5\u66ff\u308f\u308a\u4e71\u6570"})}),Object(D.jsx)("li",{children:Object(D.jsx)(ee.b,{to:"/initial-seed",children:"\u8d77\u52d5\u6642\u523b\u8a08\u7b97"})})]})]})},xe=t(84),he=t(47),Oe=Object(he.b)(C||(C=Object(xe.a)(["\n0%{color:#ff0053;}\n12%{color:#ff5353;}\n24%{color:#ffcf53;}\n36%{color:#e8ff53;}\n48%{color:#53ff5d;}\n60%{color:#53ffbc;}\n72%{color:#5393ff;}\n84%{color:#ca53ff;}\n100%{color:#ff53bd;}\n"]))),fe=Object(he.b)(N||(N=Object(xe.a)(["\n  100% { background-position-x: 200%; }\n"]))),ge=function(){return Object(D.jsx)(j.a,{h:"80px",w:"100%",bg:"linear-gradient(to right, Magenta, yellow, Cyan, Magenta) 0% center/200%",animation:"".concat(fe," 2s linear infinite"),paddingLeft:"30px",justifyContent:"center",alignItems:"center",marginBottom:"30px",children:Object(D.jsx)(l.a,{fontSize:"36px",fontWeight:"bold",animation:"".concat(Oe," 2s linear infinite"),children:Object(D.jsx)(ee.b,{to:"/",children:"Pokemon RNG Tools"})})})},ke=function(e){var n=e.children;return Object(D.jsx)(l.a,{maxW:"1000px",margin:"0 auto",marginBottom:"50px",children:n})},ve=function(){return Object(D.jsx)(i.a,{children:Object(D.jsx)(ee.a,{children:Object(D.jsxs)(ke,{children:[Object(D.jsx)(ge,{}),Object(D.jsxs)(ne.c,{children:[Object(D.jsx)(ne.a,{path:"/daily",children:Object(D.jsx)(_,{})}),Object(D.jsx)(ne.a,{path:"/initial-seed",children:Object(D.jsx)(be,{})}),Object(D.jsx)(ne.a,{children:Object(D.jsx)(pe,{})})]})]})})})};r.a.render(Object(D.jsx)(ve,{}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.d2a20027.chunk.js.map