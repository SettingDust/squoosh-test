require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 275:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));var worker_threads=__nccwpck_require__(13);var os=__nccwpck_require__(87);var fs=__nccwpck_require__(747);var url=__nccwpck_require__(835);var webStreamsPolyfill=__nccwpck_require__(608);function pathify(path){if(path.startsWith("file://")){path=url.fileURLToPath(path)}return path}function instantiateEmscriptenWasm(factory,path){return factory({locateFile(){return pathify(path)}})}var Module$4=function(){return function(Module){Module=Module||{};var f;f||(f=typeof Module!=="undefined"?Module:{});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in f)f.hasOwnProperty(t)&&(r[t]=f[t]);var da="./this.program";function ea(a,b){throw b}var fa="",ha,ia,ja,ka;fa=__dirname+"/";ha=function(a){ja||(ja=__nccwpck_require__(747));ka||(ka=__nccwpck_require__(622));a=ka.normalize(a);return ja.readFileSync(a,null)};ia=function(a){a=ha(a);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof la))throw a});process.on("unhandledRejection",u);ea=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"};var ma=f.print||console.log.bind(console),v=f.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(f[t]=r[t]);r=null;f.thisProgram&&(da=f.thisProgram);f.quit&&(ea=f.quit);var w;f.wasmBinary&&(w=f.wasmBinary);var noExitRuntime;f.noExitRuntime&&(noExitRuntime=f.noExitRuntime);"object"!==typeof WebAssembly&&u("no native wasm support detected");var A,na=!1,oa=new TextDecoder("utf8");function pa(a,b,c){var d=B;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var m=a.charCodeAt(++e);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var qa=new TextDecoder("utf-16le");function ra(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&C[c];)++c;return qa.decode(B.subarray(a,c<<1))}function sa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)D[b>>1]=a.charCodeAt(e),b+=2;D[b>>1]=0;return b-d}function ta(a){return 2*a.length}function ua(a,b){for(var c=0,d="";!(c>=b/4);){var e=F[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function va(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var m=a.charCodeAt(++e);g=65536+((g&1023)<<10)|m&1023}F[b>>2]=g;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}function wa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var G,H,B,D,C,F,I,xa,ya;function za(a){G=a;f.HEAP8=H=new Int8Array(a);f.HEAP16=D=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=C=new Uint16Array(a);f.HEAPU32=I=new Uint32Array(a);f.HEAPF32=xa=new Float32Array(a);f.HEAPF64=ya=new Float64Array(a)}var Aa=f.INITIAL_MEMORY||16777216;f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});A&&(G=A.buffer);Aa=G.byteLength;za(G);var J,Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=f.preRun.shift();Ba.unshift(a)}var K=0,L=null;f.preloadedImages={};f.preloadedAudios={};function u(a){if(f.onAbort)f.onAbort(a);v(a);na=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Ha(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="mozjpeg_node_enc.wasm";if(!Ha()){var Ia=M;M=f.locateFile?f.locateFile(Ia,fa):fa+Ia}function Ja(){try{if(w)return new Uint8Array(w);if(ia)return ia(M);throw"both async and sync fetching of the wasm failed"}catch(a){u(a)}}function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.R;"number"===typeof c?void 0===b.L?J.get(c)():J.get(c)(b.L):c(void 0===b.L?null:b.L)}}}var O={};function Ka(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function P(a){return this.fromWireType(I[a>>2])}var Q={},R={},S={};function La(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ma(a,b){a=La(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Na(a){var b=Error,c=Ma(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Oa=void 0;function Pa(a,b,c){function d(h){h=c(h);if(h.length!==a.length)throw new Oa("Mismatched type converter count");for(var k=0;k<a.length;++k)U(a[k],h[k])}a.forEach(function(h){S[h]=b});var e=Array(b.length),g=[],m=0;b.forEach(function(h,k){R.hasOwnProperty(h)?e[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){e[k]=R[h];++m;m===g.length&&d(e)}))});0===g.length&&d(e)}function Qa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ra=void 0;function V(a){for(var b="";B[a];)b+=Ra[B[a++]];return b}var Sa=void 0;function W(a){throw new Sa(a)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.V)return;W("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(e){e()}))}var Ta=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ua(a){4<a&&0===--X[a].M&&(X[a]=void 0,Ta.push(a))}function Va(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Ta.length?Ta.pop():X.length;X[b]={M:1,value:a};return b;}}function Wa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Xa(a,b){switch(b){case 2:return function(c){return this.fromWireType(xa[c>>2])};case 3:return function(c){return this.fromWireType(ya[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ya(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ma(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Za(a,b){var c=f;if(void 0===c[a].J){var d=c[a];c[a]=function(){c[a].J.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].J+")!");return c[a].J[arguments.length].apply(this,arguments)};c[a].J=[];c[a].J[d.O]=d}}function $a(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].J&&void 0!==f[a].J[c])&&W("Cannot register public name '"+a+"' twice"),Za(a,a),f.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].J[c]=b):(f[a]=b,void 0!==c&&(f[a].ba=c))}function ab(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}function bb(a,b){0<=a.indexOf("j")||u("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=J.get(b).apply(null,c);return e}}function Y(a,b){a=V(a);var c=-1!=a.indexOf("j")?bb(a,b):J.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var cb=void 0;function db(a){a=eb(a);var b=V(a);Z(a);return b}function fb(a,b){function c(g){e[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new cb(a+": "+d.map(db).join([", "]))}function gb(a,b,c){switch(b){case 0:return c?function(d){return H[d]}:function(d){return B[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return C[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var hb={};function ib(){return"object"===typeof globalThis?globalThis:Function("return this")()}function jb(a,b){var c=R[a];void 0===c&&W(b+" has unknown type "+db(a));return c}var kb={},lb={};function mb(){if(!nb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:da||"./this.program"},b;for(b in lb)a[b]=lb[b];var c=[];for(b in a)c.push(b+"="+a[b]);nb=c}return nb}var nb,ob=[null,[],[]];Oa=f.InternalError=Na("InternalError");for(var pb=Array(256),qb=0;256>qb;++qb)pb[qb]=String.fromCharCode(qb);Ra=pb;Sa=f.BindingError=Na("BindingError");f.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};cb=f.UnboundTypeError=Na("UnboundTypeError");Ca.push({R:function(){rb()}});var tb={B:function(){},n:function(a){var b=O[a];delete O[a];var c=b.W,d=b.X,e=b.N,g=e.map(function(m){return m.U}).concat(e.map(function(m){return m.Z}));Pa([a],g,function(m){var h={};e.forEach(function(k,n){var l=m[n],p=k.S,x=k.T,y=m[n+e.length],q=k.Y,ca=k.$;h[k.P]={read:function(z){return l.fromWireType(p(x,z))},write:function(z,E){var T=[];q(ca,z,y.toWireType(T,E));Ka(T)}}});return[{name:b.name,fromWireType:function(k){var n={},l;for(l in h)n[l]=h[l].read(k);d(k);return n},toWireType:function(k,n){for(var l in h)if(!(l in n))throw new TypeError("Missing field:  \""+l+"\"");var p=c();for(l in h)h[l].write(p,n[l]);null!==k&&k.push(d,p);return p},argPackAdvance:8,readValueFromPointer:P,K:d}]})},y:function(a,b,c,d,e){var g=Qa(c);b=V(b);U(a,{name:b,fromWireType:function(m){return!!m},toWireType:function(m,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(m){if(1===c)var h=H;else if(2===c)h=D;else if(4===c)h=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[m>>g])},K:null})},x:function(a,b){b=V(b);U(a,{name:b,fromWireType:function(c){var d=X[c].value;Ua(c);return d},toWireType:function(c,d){return Va(d)},argPackAdvance:8,readValueFromPointer:P,K:null})},k:function(a,b,c){c=Qa(c);b=V(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError("Cannot convert \""+Wa(e)+"\" to "+this.name);return e},argPackAdvance:8,readValueFromPointer:Xa(b,c),K:null})},g:function(a,b,c,d,e,g){var m=ab(b,c);a=V(a);e=Y(d,e);$a(a,function(){fb("Cannot call "+a+" due to unbound types",m)},b-1);Pa([],m,function(h){var k=[h[0],null].concat(h.slice(1)),n=h=a,l=e,p=k.length;2>p&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,y=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].K){y=!0;break}var ca="void"!==k[0].name,z="",E="";for(q=0;q<p-2;++q)z+=(0!==q?", ":"")+"arg"+q,E+=(0!==q?", ":"")+"arg"+q+"Wired";n="return function "+La(n)+"("+z+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";y&&(n+="var destructors = [];\n");var T=y?"destructors":"null";z="throwBindingError invoker fn runDestructors retType classParam".split(" ");l=[W,l,g,Ka,k[0],k[1]];x&&(n+="var thisWired = classParam.toWireType("+T+", this);\n");for(q=0;q<p-2;++q)n+="var arg"+q+"Wired = argType"+q+".toWireType("+T+", arg"+q+"); // "+k[q+2].name+"\n",z.push("argType"+q),l.push(k[q+2]);x&&(E="thisWired"+(0<E.length?", ":"")+E);n+=(ca?"var rv = ":"")+"invoker(fn"+(0<E.length?", ":"")+E+");\n";if(y)n+="runDestructors(destructors);\n";else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].K&&(n+=p+"_dtor("+p+"); // "+k[q].name+"\n",z.push(p+"_dtor"),l.push(k[q].K));ca&&(n+="var ret = retType.fromWireType(rv);\nreturn ret;\n");z.push(n+"}\n");k=Ya(z).apply(null,l);q=b-1;if(!f.hasOwnProperty(h))throw new Oa("Replacing nonexistant public symbol");void 0!==f[h].J&&void 0!==q?f[h].J[q]=k:(f[h]=k,f[h].O=q);return[]})},d:function(a,b,c,d,e){function g(n){return n}b=V(b);-1===e&&(e=4294967295);var m=Qa(c);if(0===d){var h=32-8*c;g=function(n){return n<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(n,l){if("number"!==typeof l&&"boolean"!==typeof l)throw new TypeError("Cannot convert \""+Wa(l)+"\" to "+this.name);if(l<d||l>e)throw new TypeError("Passing a number \""+Wa(l)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+e+"]!");return k?l>>>0:l|0},argPackAdvance:8,readValueFromPointer:gb(b,m,0!==d),K:null})},c:function(a,b,c){function d(g){g>>=2;var m=I;return new e(G,m[g+1],m[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=V(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{V:!0})},l:function(a,b){b=V(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var e=I[d>>2];if(c)for(var g=d+4,m=0;m<=e;++m){var h=d+4+m;if(m==e||0==B[h]){if(g){for(var k=g+(h-g),n=g;!(n>=k)&&B[n];)++n;g=oa.decode(B.subarray(g,n))}else g="";if(void 0===l)var l=g;else l+=String.fromCharCode(0),l+=g;g=h+1}}else{l=Array(e);for(m=0;m<e;++m)l[m]=String.fromCharCode(B[d+4+m]);l=l.join("")}Z(d);return l},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||W("Cannot pass non-string to std::string");var m=(c&&g?function(){for(var n=0,l=0;l<e.length;++l){var p=e.charCodeAt(l);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|e.charCodeAt(++l)&1023);127>=p?++n:n=2047>=p?n+2:65535>=p?n+3:n+4}return n}:function(){return e.length})(),h=sb(4+m+1);I[h>>2]=m;if(c&&g)pa(e,h+4,m+1);else if(g)for(g=0;g<m;++g){var k=e.charCodeAt(g);255<k&&(Z(h),W("String has UTF-16 code units that do not fit in 8 bits"));B[h+4+g]=k}else for(g=0;g<m;++g)B[h+4+g]=e[g];null!==d&&d.push(Z,h);return h},argPackAdvance:8,readValueFromPointer:P,K:function(d){Z(d)}})},f:function(a,b,c){c=V(c);if(2===b){var d=ra;var e=sa;var g=ta;var m=function(){return C};var h=1}else 4===b&&(d=ua,e=va,g=wa,m=function(){return I},h=2);U(a,{name:c,fromWireType:function(k){for(var n=I[k>>2],l=m(),p,x=k+4,y=0;y<=n;++y){var q=k+4+y*b;if(y==n||0==l[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}Z(k);return p},toWireType:function(k,n){"string"!==typeof n&&W("Cannot pass non-string to C++ string type "+c);var l=g(n),p=sb(4+l+b);I[p>>2]=l>>h;e(n,p+4,l+b);null!==k&&k.push(Z,p);return p},argPackAdvance:8,readValueFromPointer:P,K:function(k){Z(k)}})},o:function(a,b,c,d,e,g){O[a]={name:V(b),W:Y(c,d),X:Y(e,g),N:[]}},b:function(a,b,c,d,e,g,m,h,k,n){O[a].N.push({P:V(b),U:c,S:Y(d,e),T:g,Z:m,Y:Y(h,k),$:n})},z:function(a,b){b=V(b);U(a,{aa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},h:Ua,v:function(a){if(0===a)return Va(ib());var b=hb[a];a=void 0===b?V(a):b;return Va(ib()[a])},m:function(a){4<a&&(X[a].M+=1)},p:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=X[a].value;var e=kb[b];if(!e){e="";for(var g=0;g<b;++g)e+=(0!==g?", ":"")+"arg"+g;var m="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)m+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";e=new Function("requireRegisteredType","Module","__emval_register",m+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n"))(jb,f,Va);kb[b]=e}return e(a,c,d)},i:function(){u()},s:function(a,b,c){B.copyWithin(a,b,b+c)},e:function(a){a>>>=0;var b=B.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);za(A.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},t:function(a,b){var c=0;mb().forEach(function(d,e){var g=b+c;e=F[a+4*e>>2]=g;for(g=0;g<d.length;++g)H[e++>>0]=d.charCodeAt(g);H[e>>0]=0;c+=d.length+1});return 0},u:function(a,b){var c=mb();F[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});F[b>>2]=d;return 0},A:function(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);na=!0}ea(a,new la(a))},w:function(){return 0},q:function(){},j:function(a,b,c,d){for(var e=0,g=0;g<c;g++){for(var m=F[b+8*g>>2],h=F[b+(8*g+4)>>2],k=0;k<h;k++){var n=B[m+k],l=ob[a];if(0===n||10===n){n=1===a?ma:v;var p;for(p=0;l[p]&&!(NaN<=p);)++p;p=oa.decode(l.subarray?l.subarray(0,p):new Uint8Array(l.slice(0,p)));n(p);l.length=0}else l.push(n)}e+=h}F[d>>2]=e;return 0},a:A,r:function(){}};(function(){function a(e){f.asm=e.exports;J=f.asm.C;K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&L&&(e=L,L=null,e())}function b(e){a(e.instance)}function c(e){return Promise.resolve().then(Ja).then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){v("failed to asynchronously prepare wasm: "+g);u(g)})}var d={a:tb};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){v("wasm streaming compile failed: "+g);v("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var rb=f.___wasm_call_ctors=function(){return(rb=f.___wasm_call_ctors=f.asm.D).apply(null,arguments)},sb=f._malloc=function(){return(sb=f._malloc=f.asm.E).apply(null,arguments)},Z=f._free=function(){return(Z=f._free=f.asm.F).apply(null,arguments)},eb=f.___getTypeName=function(){return(eb=f.___getTypeName=f.asm.G).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.H).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.I).apply(null,arguments)};var ub;function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function vb(){ub||wb();ub||(L=vb)};function wb(){function a(){if(!ub&&(ub=!0,f.calledRun=!0,!na)){N(Ca);N(Da);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Ea.unshift(b)}N(Ea)}}if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();N(Ba);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();noExitRuntime=!0;wb();return Module.ready}}();var mozEncWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "mozjpeg_node_enc-13aa762d.wasm").href:new URL("mozjpeg_node_enc-13aa762d.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var Module$3=function(){return function(Module){Module=Module||{};var e;e||(e=typeof Module!=="undefined"?Module:{});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var ba="./this.program";function ca(a,b){throw b}var da="",ea,fa,ha,ia;da=__dirname+"/";ea=function(a){ha||(ha=__nccwpck_require__(747));ia||(ia=__nccwpck_require__(622));a=ia.normalize(a);return ha.readFileSync(a,null)};fa=function(a){a=ea(a);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a});process.on("unhandledRejection",v);ca=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"};var ka=e.print||console.log.bind(console),w=e.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;e.thisProgram&&(ba=e.thisProgram);e.quit&&(ca=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&v("no native wasm support detected");var z,la=!1,ma=new TextDecoder("utf8");function na(a,b,c){var d=A;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var oa=new TextDecoder("utf-16le");function pa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&C[c];)++c;return oa.decode(A.subarray(a,c<<1))}function qa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)D[b>>1]=a.charCodeAt(f),b+=2;D[b>>1]=0;return b-d}function ra(a){return 2*a.length}function sa(a,b){for(var c=0,d="";!(c>=b/4);){var f=E[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function ta(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}E[b>>2]=g;b+=4;if(b+4>c)break}E[b>>2]=0;return b-d}function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var F,G,A,D,C,E,I,va,wa;function xa(a){F=a;e.HEAP8=G=new Int8Array(a);e.HEAP16=D=new Int16Array(a);e.HEAP32=E=new Int32Array(a);e.HEAPU8=A=new Uint8Array(a);e.HEAPU16=C=new Uint16Array(a);e.HEAPU32=I=new Uint32Array(a);e.HEAPF32=va=new Float32Array(a);e.HEAPF64=wa=new Float64Array(a)}var ya=e.INITIAL_MEMORY||16777216;e.wasmMemory?z=e.wasmMemory:z=new WebAssembly.Memory({initial:ya/65536,maximum:32768});z&&(F=z.buffer);ya=F.byteLength;xa(F);var J,za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=e.preRun.shift();za.unshift(a)}var K=0,M=null;e.preloadedImages={};e.preloadedAudios={};function v(a){if(e.onAbort)e.onAbort(a);w(a);la=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a}function Fa(){var a=N;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var N="mozjpeg_node_dec.wasm";if(!Fa()){var Ga=N;N=e.locateFile?e.locateFile(Ga,da):da+Ga}function Ha(){try{if(y)return new Uint8Array(y);if(fa)return fa(N);throw"both async and sync fetching of the wasm failed"}catch(a){v(a)}}function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.L;"number"===typeof c?void 0===b.I?J.get(c)():J.get(c)(b.I):c(void 0===b.I?null:b.I)}}}function Ia(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ja=void 0;function P(a){for(var b="";A[a];)b+=Ja[A[a++]];return b}var Q={},R={},S={};function Ka(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function La(a,b){a=Ka(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Ma(a){var b=Error,c=La(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Na=void 0;function T(a){throw new Na(a)}var Oa=void 0;function Pa(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Oa("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.M)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Qa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ra(a){4<a&&0===--V[a].J&&(V[a]=void 0,Qa.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Qa.length?Qa.pop():V.length;V[b]={J:1,value:a};return b;}}function Sa(a){return this.fromWireType(I[a>>2])}function Va(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Wa(a,b){switch(b){case 2:return function(c){return this.fromWireType(va[c>>2])};case 3:return function(c){return this.fromWireType(wa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Xa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=La(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Ya(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Za(a,b){var c=e;if(void 0===c[a].G){var d=c[a];c[a]=function(){c[a].G.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].G+")!");return c[a].G[arguments.length].apply(this,arguments)};c[a].G=[];c[a].G[d.K]=d}}function $a(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].G&&void 0!==e[a].G[c])&&T("Cannot register public name '"+a+"' twice"),Za(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].G[c]=b):(e[a]=b,void 0!==c&&(e[a].O=c))}function ab(a,b){for(var c=[],d=0;d<a;d++)c.push(E[(b>>2)+d]);return c}function bb(a,b){0<=a.indexOf("j")||v("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=J.get(b).apply(null,c);return f}}function cb(a,b){a=P(a);var c=-1!=a.indexOf("j")?bb(a,b):J.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var db=void 0;function eb(a){a=fb(a);var b=P(a);X(a);return b}function gb(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new db(a+": "+d.map(eb).join([", "]))}function hb(a,b,c){switch(b){case 0:return c?function(d){return G[d]}:function(d){return A[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return C[d>>1]};case 2:return c?function(d){return E[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var ib={};function jb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function kb(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+eb(a));return c}var lb={},mb={};function nb(){if(!ob){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in mb)a[b]=mb[b];var c=[];for(b in a)c.push(b+"="+a[b]);ob=c}return ob}for(var ob,pb=[null,[],[]],qb=Array(256),Y=0;256>Y;++Y)qb[Y]=String.fromCharCode(Y);Ja=qb;Na=e.BindingError=Ma("BindingError");Oa=e.InternalError=Ma("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};db=e.UnboundTypeError=Ma("UnboundTypeError");Aa.push({L:function(){rb()}});var tb={g:function(){},o:function(a,b,c,d,f){var g=Ia(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=G;else if(2===c)h=D;else if(4===c)h=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},H:null})},x:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Ra(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:Sa,H:null})},n:function(a,b,c){c=Ia(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError("Cannot convert \""+Va(f)+"\" to "+this.name);return f},argPackAdvance:8,readValueFromPointer:Wa(b,c),H:null})},q:function(a,b,c,d,f,g){var l=ab(b,c);a=P(a);f=cb(d,f);$a(a,function(){gb("Cannot call "+a+" due to unbound types",l)},b-1);Pa(l,function(h){var k=[h[0],null].concat(h.slice(1)),m=h=a,n=f,p=k.length;2>p&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,B=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].H){B=!0;break}var Ta="void"!==k[0].name,H="",L="";for(q=0;q<p-2;++q)H+=(0!==q?", ":"")+"arg"+q,L+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Ka(m)+"("+H+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";B&&(m+="var destructors = [];\n");var Ua=B?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Ya,k[0],k[1]];x&&(m+="var thisWired = classParam.toWireType("+Ua+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Ua+", arg"+q+"); // "+k[q+2].name+"\n",H.push("argType"+q),n.push(k[q+2]);x&&(L="thisWired"+(0<L.length?", ":"")+L);m+=(Ta?"var rv = ":"")+"invoker(fn"+(0<L.length?", ":"")+L+");\n";if(B)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].H&&(m+=p+"_dtor("+p+"); // "+k[q].name+"\n",H.push(p+"_dtor"),n.push(k[q].H));Ta&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(m+"}\n");k=Xa(H).apply(null,n);q=b-1;if(!e.hasOwnProperty(h))throw new Oa("Replacing nonexistant public symbol");void 0!==e[h].G&&void 0!==q?e[h].G[q]=k:(e[h]=k,e[h].K=q);return[]})},c:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var l=Ia(c);if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Va(n)+"\" to "+this.name);if(n<d||n>f)throw new TypeError("Passing a number \""+Va(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:hb(b,l,0!==d),H:null})},b:function(a,b,c){function d(g){g>>=2;var l=I;return new f(F,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{M:!0})},i:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=I[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;if(l==f||0==A[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&A[m];)++m;g=ma.decode(A.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(l=0;l<f;++l)n[l]=String.fromCharCode(A[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),h=sb(4+l+1);I[h>>2]=l;if(c&&g)na(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));A[h+4+g]=k}else for(g=0;g<l;++g)A[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Sa,H:function(d){X(d)}})},h:function(a,b,c){c=P(c);if(2===b){var d=pa;var f=qa;var g=ra;var l=function(){return C};var h=1}else 4===b&&(d=sa,f=ta,g=ua,l=function(){return I},h=2);U(a,{name:c,fromWireType:function(k){for(var m=I[k>>2],n=l(),p,x=k+4,B=0;B<=m;++B){var q=k+4+B*b;if(B==m||0==n[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}X(k);return p},toWireType:function(k,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),p=sb(4+n+b);I[p>>2]=n>>h;f(m,p+4,n+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Sa,H:function(k){X(k)}})},p:function(a,b){b=P(b);U(a,{N:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},e:Ra,f:function(a){if(0===a)return W(jb());var b=ib[a];a=void 0===b?P(a):b;return W(jb()[a])},j:function(a){4<a&&(V[a].J+=1)},k:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=lb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n"))(kb,e,W);lb[b]=f}return f(a,c,d)},l:function(){v()},t:function(a,b,c){A.copyWithin(a,b,b+c)},d:function(a){a>>>=0;var b=A.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{z.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);xa(z.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},u:function(a,b){var c=0;nb().forEach(function(d,f){var g=b+c;f=E[a+4*f>>2]=g;for(g=0;g<d.length;++g)G[f++>>0]=d.charCodeAt(g);G[f>>0]=0;c+=d.length+1});return 0},v:function(a,b){var c=nb();E[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});E[b>>2]=d;return 0},y:function(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);la=!0}ca(a,new ja(a))},w:function(){return 0},r:function(){},m:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var l=E[b+8*g>>2],h=E[b+(8*g+4)>>2],k=0;k<h;k++){var m=A[l+k],n=pb[a];if(0===m||10===m){m=1===a?ka:w;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=ma.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=h}E[d>>2]=f;return 0},a:z,s:function(){}};(function(){function a(f){e.asm=f.exports;J=e.asm.z;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&M&&(f=M,M=null,f())}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Ha).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){w("failed to asynchronously prepare wasm: "+g);v(g)})}var d={a:tb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return w("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){w("wasm streaming compile failed: "+g);w("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();var rb=e.___wasm_call_ctors=function(){return(rb=e.___wasm_call_ctors=e.asm.A).apply(null,arguments)},sb=e._malloc=function(){return(sb=e._malloc=e.asm.B).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.C).apply(null,arguments)},fb=e.___getTypeName=function(){return(fb=e.___getTypeName=e.asm.D).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.E).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.F).apply(null,arguments)};var Z;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function ub(){Z||vb();Z||(M=ub)};function vb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!la)){O(Aa);O(Ba);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ca.unshift(b)}O(Ca)}}if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();O(za);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=vb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();noExitRuntime=!0;vb();return Module.ready}}();var mozDecWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "mozjpeg_node_dec-db559e8d.wasm").href:new URL("mozjpeg_node_dec-db559e8d.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var Module$2=function(){return function(Module){Module=Module||{};var f;f||(f=typeof Module!=="undefined"?Module:{});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in f)f.hasOwnProperty(t)&&(r[t]=f[t]);var ca="",ea,fa,ha,ia;ca=__dirname+"/";ea=function(a){ha||(ha=__nccwpck_require__(747));ia||(ia=__nccwpck_require__(622));a=ia.normalize(a);return ha.readFileSync(a,null)};fa=function(a){a=ea(a);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",u);f.inspect=function(){return"[Emscripten Module object]"};f.print||console.log.bind(console);var v=f.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(f[t]=r[t]);r=null;var z;f.wasmBinary&&(z=f.wasmBinary);f.noExitRuntime&&f.noExitRuntime;"object"!==typeof WebAssembly&&u("no native wasm support detected");var A,ja=!1,ka=new TextDecoder("utf8");function la(a,b,c){var d=B;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ma=new TextDecoder("utf-16le");function na(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&C[c];)++c;return ma.decode(B.subarray(a,c<<1))}function oa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)D[b>>1]=a.charCodeAt(e),b+=2;D[b>>1]=0;return b-d}function pa(a){return 2*a.length}function qa(a,b){for(var c=0,d="";!(c>=b/4);){var e=F[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function ra(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}F[b>>2]=g;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var G,H,B,D,C,F,I,ta,ua;function va(a){G=a;f.HEAP8=H=new Int8Array(a);f.HEAP16=D=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=C=new Uint16Array(a);f.HEAPU32=I=new Uint32Array(a);f.HEAPF32=ta=new Float32Array(a);f.HEAPF64=ua=new Float64Array(a)}var wa=f.INITIAL_MEMORY||16777216;f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:wa/65536,maximum:32768});A&&(G=A.buffer);wa=G.byteLength;va(G);var J,xa=[],ya=[],za=[],Aa=[];function Ba(){var a=f.preRun.shift();xa.unshift(a)}var K=0,L=null;f.preloadedImages={};f.preloadedAudios={};function u(a){if(f.onAbort)f.onAbort(a);v(a);ja=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Da(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="webp_node_enc.wasm";if(!Da()){var Ea=M;M=f.locateFile?f.locateFile(Ea,ca):ca+Ea}function Fa(){try{if(z)return new Uint8Array(z);if(fa)return fa(M);throw"both async and sync fetching of the wasm failed"}catch(a){u(a)}}function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.L;"number"===typeof c?void 0===b.G?J.get(c)():J.get(c)(b.G):c(void 0===b.G?null:b.G)}}}var O={};function Ga(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function P(a){return this.fromWireType(I[a>>2])}var Q={},R={},S={};function Ha(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ia(a,b){a=Ha(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Ja(a){var b=Error,c=Ia(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ka=void 0;function La(a,b,c){function d(h){h=c(h);if(h.length!==a.length)throw new Ka("Mismatched type converter count");for(var k=0;k<a.length;++k)U(a[k],h[k])}a.forEach(function(h){S[h]=b});var e=Array(b.length),g=[],l=0;b.forEach(function(h,k){R.hasOwnProperty(h)?e[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){e[k]=R[h];++l;l===g.length&&d(e)}))});0===g.length&&d(e)}function Ma(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Na=void 0;function V(a){for(var b="";B[a];)b+=Na[B[a++]];return b}var Oa=void 0;function W(a){throw new Oa(a)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.P)return;W("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(e){e()}))}var Pa=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Qa(a){4<a&&0===--X[a].H&&(X[a]=void 0,Pa.push(a))}function Ra(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Pa.length?Pa.pop():X.length;X[b]={H:1,value:a};return b;}}function Sa(a,b){var c=f;if(void 0===c[a].F){var d=c[a];c[a]=function(){c[a].F.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].F+")!");return c[a].F[arguments.length].apply(this,arguments)};c[a].F=[];c[a].F[d.J]=d}}function Ta(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].F&&void 0!==f[a].F[c])&&W("Cannot register public name '"+a+"' twice"),Sa(a,a),f.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].F[c]=b):(f[a]=b,void 0!==c&&(f[a].X=c))}function Ua(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?H:B)[d])};case 1:return function(d){return this.fromWireType((c?D:C)[d>>1])};case 2:return function(d){return this.fromWireType((c?F:I)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function Va(a){a=Wa(a);var b=V(a);Y(a);return b}function Xa(a,b){var c=R[a];void 0===c&&W(b+" has unknown type "+Va(a));return c}function Ya(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Za(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function $a(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ia(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function ab(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}function bb(a,b){0<=a.indexOf("j")||u("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=J.get(b).apply(null,c);return e}}function Z(a,b){a=V(a);var c=-1!=a.indexOf("j")?bb(a,b):J.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var cb=void 0;function db(a,b){function c(g){e[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new cb(a+": "+d.map(Va).join([", "]))}function eb(a,b,c){switch(b){case 0:return c?function(d){return H[d]}:function(d){return B[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return C[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var fb={};function gb(){return"object"===typeof globalThis?globalThis:Function("return this")()}var hb={};Ka=f.InternalError=Ja("InternalError");for(var ib=Array(256),jb=0;256>jb;++jb)ib[jb]=String.fromCharCode(jb);Na=ib;Oa=f.BindingError=Ja("BindingError");f.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};cb=f.UnboundTypeError=Ja("UnboundTypeError");ya.push({L:function(){kb()}});var mb={w:function(){},m:function(a){var b=O[a];delete O[a];var c=b.R,d=b.S,e=b.I,g=e.map(function(l){return l.O}).concat(e.map(function(l){return l.U}));La([a],g,function(l){var h={};e.forEach(function(k,m){var n=l[m],q=k.M,w=k.N,x=l[m+e.length],p=k.T,da=k.V;h[k.K]={read:function(y){return n.fromWireType(q(w,y))},write:function(y,E){var T=[];p(da,y,x.toWireType(T,E));Ga(T)}}});return[{name:b.name,fromWireType:function(k){var m={},n;for(n in h)m[n]=h[n].read(k);d(k);return m},toWireType:function(k,m){for(var n in h)if(!(n in m))throw new TypeError("Missing field:  \""+n+"\"");var q=c();for(n in h)h[n].write(q,m[n]);null!==k&&k.push(d,q);return q},argPackAdvance:8,readValueFromPointer:P,D:d}]})},s:function(a,b,c,d,e){var g=Ma(c);b=V(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=H;else if(2===c)h=D;else if(4===c)h=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},D:null})},r:function(a,b){b=V(b);U(a,{name:b,fromWireType:function(c){var d=X[c].value;Qa(c);return d},toWireType:function(c,d){return Ra(d)},argPackAdvance:8,readValueFromPointer:P,D:null})},o:function(a,b,c,d){function e(){}c=Ma(c);b=V(b);e.values={};U(a,{name:b,constructor:e,fromWireType:function(g){return this.constructor.values[g]},toWireType:function(g,l){return l.value},argPackAdvance:8,readValueFromPointer:Ua(b,c,d),D:null});Ta(b,e)},f:function(a,b,c){var d=Xa(a,"enum");b=V(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Ia(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},k:function(a,b,c){c=Ma(c);b=V(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError("Cannot convert \""+Ya(e)+"\" to "+this.name);return e},argPackAdvance:8,readValueFromPointer:Za(b,c),D:null})},i:function(a,b,c,d,e,g){var l=ab(b,c);a=V(a);e=Z(d,e);Ta(a,function(){db("Cannot call "+a+" due to unbound types",l)},b-1);La([],l,function(h){var k=[h[0],null].concat(h.slice(1)),m=h=a,n=e,q=k.length;2>q&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var w=null!==k[1]&&!1,x=!1,p=1;p<k.length;++p)if(null!==k[p]&&void 0===k[p].D){x=!0;break}var da="void"!==k[0].name,y="",E="";for(p=0;p<q-2;++p)y+=(0!==p?", ":"")+"arg"+p,E+=(0!==p?", ":"")+"arg"+p+"Wired";m="return function "+Ha(m)+"("+y+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(q-2)+" args!');\n}\n";x&&(m+="var destructors = [];\n");var T=x?"destructors":"null";y="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[W,n,g,Ga,k[0],k[1]];w&&(m+="var thisWired = classParam.toWireType("+T+", this);\n");for(p=0;p<q-2;++p)m+="var arg"+p+"Wired = argType"+p+".toWireType("+T+", arg"+p+"); // "+k[p+2].name+"\n",y.push("argType"+p),n.push(k[p+2]);w&&(E="thisWired"+(0<E.length?", ":"")+E);m+=(da?"var rv = ":"")+"invoker(fn"+(0<E.length?", ":"")+E+");\n";if(x)m+="runDestructors(destructors);\n";else for(p=w?1:2;p<k.length;++p)q=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==k[p].D&&(m+=q+"_dtor("+q+"); // "+k[p].name+"\n",y.push(q+"_dtor"),n.push(k[p].D));da&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");y.push(m+"}\n");k=$a(y).apply(null,n);p=b-1;if(!f.hasOwnProperty(h))throw new Ka("Replacing nonexistant public symbol");void 0!==f[h].F&&void 0!==p?f[h].F[p]=k:(f[h]=k,f[h].J=p);return[]})},d:function(a,b,c,d,e){function g(m){return m}b=V(b);-1===e&&(e=4294967295);var l=Ma(c);if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Ya(n)+"\" to "+this.name);if(n<d||n>e)throw new TypeError("Passing a number \""+Ya(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+e+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:eb(b,l,0!==d),D:null})},c:function(a,b,c){function d(g){g>>=2;var l=I;return new e(G,l[g+1],l[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=V(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{P:!0})},l:function(a,b){b=V(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var e=I[d>>2];if(c)for(var g=d+4,l=0;l<=e;++l){var h=d+4+l;if(l==e||0==B[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&B[m];)++m;g=ka.decode(B.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(e);for(l=0;l<e;++l)n[l]=String.fromCharCode(B[d+4+l]);n=n.join("")}Y(d);return n},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||W("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<e.length;++n){var q=e.charCodeAt(n);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|e.charCodeAt(++n)&1023);127>=q?++m:m=2047>=q?m+2:65535>=q?m+3:m+4}return m}:function(){return e.length})(),h=lb(4+l+1);I[h>>2]=l;if(c&&g)la(e,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=e.charCodeAt(g);255<k&&(Y(h),W("String has UTF-16 code units that do not fit in 8 bits"));B[h+4+g]=k}else for(g=0;g<l;++g)B[h+4+g]=e[g];null!==d&&d.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:P,D:function(d){Y(d)}})},h:function(a,b,c){c=V(c);if(2===b){var d=na;var e=oa;var g=pa;var l=function(){return C};var h=1}else 4===b&&(d=qa,e=ra,g=sa,l=function(){return I},h=2);U(a,{name:c,fromWireType:function(k){for(var m=I[k>>2],n=l(),q,w=k+4,x=0;x<=m;++x){var p=k+4+x*b;if(x==m||0==n[p>>h])w=d(w,p-w),void 0===q?q=w:(q+=String.fromCharCode(0),q+=w),w=p+b}Y(k);return q},toWireType:function(k,m){"string"!==typeof m&&W("Cannot pass non-string to C++ string type "+c);var n=g(m),q=lb(4+n+b);I[q>>2]=n>>h;e(m,q+4,n+b);null!==k&&k.push(Y,q);return q},argPackAdvance:8,readValueFromPointer:P,D:function(k){Y(k)}})},n:function(a,b,c,d,e,g){O[a]={name:V(b),R:Z(c,d),S:Z(e,g),I:[]}},b:function(a,b,c,d,e,g,l,h,k,m){O[a].I.push({K:V(b),O:c,M:Z(d,e),N:g,U:l,T:Z(h,k),V:m})},t:function(a,b){b=V(b);U(a,{W:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},g:Qa,v:function(a){if(0===a)return Ra(gb());var b=fb[a];a=void 0===b?V(a):b;return Ra(gb()[a])},u:function(a){4<a&&(X[a].H+=1)},p:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=X[a].value;var e=hb[b];if(!e){e="";for(var g=0;g<b;++g)e+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";e=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n"))(Xa,f,Ra);hb[b]=e}return e(a,c,d)},j:function(){u()},q:function(a,b,c){B.copyWithin(a,b,b+c)},e:function(a){a>>>=0;var b=B.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);va(A.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},a:A};(function(){function a(e){f.asm=e.exports;J=f.asm.x;K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&L&&(e=L,L=null,e())}function b(e){a(e.instance)}function c(e){return Promise.resolve().then(Fa).then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){v("failed to asynchronously prepare wasm: "+g);u(g)})}var d={a:mb};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){v("wasm streaming compile failed: "+g);v("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var kb=f.___wasm_call_ctors=function(){return(kb=f.___wasm_call_ctors=f.asm.y).apply(null,arguments)},lb=f._malloc=function(){return(lb=f._malloc=f.asm.z).apply(null,arguments)},Y=f._free=function(){return(Y=f._free=f.asm.A).apply(null,arguments)},Wa=f.___getTypeName=function(){return(Wa=f.___getTypeName=f.asm.B).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.C).apply(null,arguments)};var nb;L=function ob(){nb||pb();nb||(L=ob)};function pb(){function a(){if(!nb&&(nb=!0,f.calledRun=!0,!ja)){N(ya);N(za);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Aa.unshift(b)}N(Aa)}}if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ba();N(xa);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=pb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();pb();return Module.ready}}();var webpEncWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "webp_node_enc-ddf13aae.wasm").href:new URL("webp_node_enc-ddf13aae.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var Module$1=function(){return function(Module){Module=Module||{};var e;e||(e=typeof Module!=="undefined"?Module:{});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var v="",ba,ca,da,ea;v=__dirname+"/";ba=function(a){da||(da=__nccwpck_require__(747));ea||(ea=__nccwpck_require__(622));a=ea.normalize(a);return da.readFileSync(a,null)};ca=function(a){a=ba(a);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",x);e.inspect=function(){return"[Emscripten Module object]"};e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;var z;e.wasmBinary&&(z=e.wasmBinary);e.noExitRuntime&&e.noExitRuntime;"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,fa=!1,ha=new TextDecoder("utf8");function ia(a,b,c){var d=C;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ja=new TextDecoder("utf-16le");function ka(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&D[c];)++c;return ja.decode(C.subarray(a,c<<1))}function la(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)E[b>>1]=a.charCodeAt(f),b+=2;E[b>>1]=0;return b-d}function ma(a){return 2*a.length}function na(a,b){for(var c=0,d="";!(c>=b/4);){var f=F[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function oa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}F[b>>2]=g;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var G,qa,C,E,D,F,I,ra,sa;function ta(a){G=a;e.HEAP8=qa=new Int8Array(a);e.HEAP16=E=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=D=new Uint16Array(a);e.HEAPU32=I=new Uint32Array(a);e.HEAPF32=ra=new Float32Array(a);e.HEAPF64=sa=new Float64Array(a)}var ua=e.INITIAL_MEMORY||16777216;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:ua/65536,maximum:32768});B&&(G=B.buffer);ua=G.byteLength;ta(G);var J,va=[],wa=[],xa=[],ya=[];function za(){var a=e.preRun.shift();va.unshift(a)}var L=0,M=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);fa=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a}function Ba(){var a=N;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var N="webp_node_dec.wasm";if(!Ba()){var Ca=N;N=e.locateFile?e.locateFile(Ca,v):v+Ca}function Da(){try{if(z)return new Uint8Array(z);if(ca)return ca(N);throw"both async and sync fetching of the wasm failed"}catch(a){x(a)}}function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.G;"number"===typeof c?void 0===b.C?J.get(c)():J.get(c)(b.C):c(void 0===b.C?null:b.C)}}}function Ea(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Fa=void 0;function P(a){for(var b="";C[a];)b+=Fa[C[a++]];return b}var Q={},R={},S={};function Ga(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ha(a,b){a=Ga(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Ia(a){var b=Error,c=Ha(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ja=void 0;function T(a){throw new Ja(a)}var Ka=void 0;function La(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Ka("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.H)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Oa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Pa(a){4<a&&0===--V[a].D&&(V[a]=void 0,Oa.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Oa.length?Oa.pop():V.length;V[b]={D:1,value:a};return b;}}function Qa(a){return this.fromWireType(I[a>>2])}function Ra(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Sa(a,b){switch(b){case 2:return function(c){return this.fromWireType(ra[c>>2])};case 3:return function(c){return this.fromWireType(sa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ta(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ha(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Ua(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Va(a,b){var c=e;if(void 0===c[a].A){var d=c[a];c[a]=function(){c[a].A.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].A+")!");return c[a].A[arguments.length].apply(this,arguments)};c[a].A=[];c[a].A[d.F]=d}}function Wa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].A&&void 0!==e[a].A[c])&&T("Cannot register public name '"+a+"' twice"),Va(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].A[c]=b):(e[a]=b,void 0!==c&&(e[a].J=c))}function Xa(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}function Ya(a,b){0<=a.indexOf("j")||x("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=J.get(b).apply(null,c);return f}}function Za(a,b){a=P(a);var c=-1!=a.indexOf("j")?Ya(a,b):J.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var $a=void 0;function ab(a){a=bb(a);var b=P(a);X(a);return b}function cb(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new $a(a+": "+d.map(ab).join([", "]))}function db(a,b,c){switch(b){case 0:return c?function(d){return qa[d]}:function(d){return C[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return D[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var eb={};function fb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function gb(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+ab(a));return c}for(var hb={},ib=Array(256),Y=0;256>Y;++Y)ib[Y]=String.fromCharCode(Y);Fa=ib;Ja=e.BindingError=Ia("BindingError");Ka=e.InternalError=Ia("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};$a=e.UnboundTypeError=Ia("UnboundTypeError");wa.push({G:function(){jb()}});var lb={g:function(){},o:function(a,b,c,d,f){var g=Ea(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=qa;else if(2===c)h=E;else if(4===c)h=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},B:null})},r:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Pa(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:Qa,B:null})},n:function(a,b,c){c=Ea(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError("Cannot convert \""+Ra(f)+"\" to "+this.name);return f},argPackAdvance:8,readValueFromPointer:Sa(b,c),B:null})},j:function(a,b,c,d,f,g){var l=Xa(b,c);a=P(a);f=Za(d,f);Wa(a,function(){cb("Cannot call "+a+" due to unbound types",l)},b-1);La(l,function(h){var k=[h[0],null].concat(h.slice(1)),n=h=a,p=f,q=k.length;2>q&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var w=null!==k[1]&&!1,A=!1,m=1;m<k.length;++m)if(null!==k[m]&&void 0===k[m].B){A=!0;break}var Ma="void"!==k[0].name,H="",K="";for(m=0;m<q-2;++m)H+=(0!==m?", ":"")+"arg"+m,K+=(0!==m?", ":"")+"arg"+m+"Wired";n="return function "+Ga(n)+"("+H+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(q-2)+" args!');\n}\n";A&&(n+="var destructors = [];\n");var Na=A?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");p=[T,p,g,Ua,k[0],k[1]];w&&(n+="var thisWired = classParam.toWireType("+Na+", this);\n");for(m=0;m<q-2;++m)n+="var arg"+m+"Wired = argType"+m+".toWireType("+Na+", arg"+m+"); // "+k[m+2].name+"\n",H.push("argType"+m),p.push(k[m+2]);w&&(K="thisWired"+(0<K.length?", ":"")+K);n+=(Ma?"var rv = ":"")+"invoker(fn"+(0<K.length?", ":"")+K+");\n";if(A)n+="runDestructors(destructors);\n";else for(m=w?1:2;m<k.length;++m)q=1===m?"thisWired":"arg"+(m-2)+"Wired",null!==k[m].B&&(n+=q+"_dtor("+q+"); // "+k[m].name+"\n",H.push(q+"_dtor"),p.push(k[m].B));Ma&&(n+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(n+"}\n");k=Ta(H).apply(null,p);m=b-1;if(!e.hasOwnProperty(h))throw new Ka("Replacing nonexistant public symbol");void 0!==e[h].A&&void 0!==m?e[h].A[m]=k:(e[h]=k,e[h].F=m);return[]})},c:function(a,b,c,d,f){function g(n){return n}b=P(b);-1===f&&(f=4294967295);var l=Ea(c);if(0===d){var h=32-8*c;g=function(n){return n<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(n,p){if("number"!==typeof p&&"boolean"!==typeof p)throw new TypeError("Cannot convert \""+Ra(p)+"\" to "+this.name);if(p<d||p>f)throw new TypeError("Passing a number \""+Ra(p)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+f+"]!");return k?p>>>0:p|0},argPackAdvance:8,readValueFromPointer:db(b,l,0!==d),B:null})},b:function(a,b,c){function d(g){g>>=2;var l=I;return new f(G,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{H:!0})},i:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=I[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;if(l==f||0==C[h]){if(g){for(var k=g+(h-g),n=g;!(n>=k)&&C[n];)++n;g=ha.decode(C.subarray(g,n))}else g="";if(void 0===p)var p=g;else p+=String.fromCharCode(0),p+=g;g=h+1}}else{p=Array(f);for(l=0;l<f;++l)p[l]=String.fromCharCode(C[d+4+l]);p=p.join("")}X(d);return p},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var n=0,p=0;p<f.length;++p){var q=f.charCodeAt(p);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|f.charCodeAt(++p)&1023);127>=q?++n:n=2047>=q?n+2:65535>=q?n+3:n+4}return n}:function(){return f.length})(),h=kb(4+l+1);I[h>>2]=l;if(c&&g)ia(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));C[h+4+g]=k}else for(g=0;g<l;++g)C[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Qa,B:function(d){X(d)}})},h:function(a,b,c){c=P(c);if(2===b){var d=ka;var f=la;var g=ma;var l=function(){return D};var h=1}else 4===b&&(d=na,f=oa,g=pa,l=function(){return I},h=2);U(a,{name:c,fromWireType:function(k){for(var n=I[k>>2],p=l(),q,w=k+4,A=0;A<=n;++A){var m=k+4+A*b;if(A==n||0==p[m>>h])w=d(w,m-w),void 0===q?q=w:(q+=String.fromCharCode(0),q+=w),w=m+b}X(k);return q},toWireType:function(k,n){"string"!==typeof n&&T("Cannot pass non-string to C++ string type "+c);var p=g(n),q=kb(4+p+b);I[q>>2]=p>>h;f(n,q+4,p+b);null!==k&&k.push(X,q);return q},argPackAdvance:8,readValueFromPointer:Qa,B:function(k){X(k)}})},p:function(a,b){b=P(b);U(a,{I:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},e:Pa,f:function(a){if(0===a)return W(fb());var b=eb[a];a=void 0===b?P(a):b;return W(fb()[a])},k:function(a){4<a&&(V[a].D+=1)},l:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=hb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n"))(gb,e,W);hb[b]=f}return f(a,c,d)},m:function(){x()},q:function(a,b,c){C.copyWithin(a,b,b+c)},d:function(a){a>>>=0;var b=C.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);ta(B.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},a:B};(function(){function a(f){e.asm=f.exports;J=e.asm.s;L--;e.monitorRunDependencies&&e.monitorRunDependencies(L);0==L&&M&&(f=M,M=null,f())}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Da).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){y("failed to asynchronously prepare wasm: "+g);x(g)})}var d={a:lb};L++;e.monitorRunDependencies&&e.monitorRunDependencies(L);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ba()||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){y("wasm streaming compile failed: "+g);y("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();var jb=e.___wasm_call_ctors=function(){return(jb=e.___wasm_call_ctors=e.asm.t).apply(null,arguments)},kb=e._malloc=function(){return(kb=e._malloc=e.asm.u).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.v).apply(null,arguments)},bb=e.___getTypeName=function(){return(bb=e.___getTypeName=e.asm.w).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.x).apply(null,arguments)};var Z;M=function mb(){Z||nb();Z||(M=mb)};function nb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!fa)){O(wa);O(xa);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();ya.unshift(b)}O(ya)}}if(!(0<L)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)za();O(va);0<L||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=nb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();nb();return Module.ready}}();var webpDecWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "webp_node_dec-8c86a38b.wasm").href:new URL("webp_node_dec-8c86a38b.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var avif_node_enc=function(){return function(avif_node_enc){avif_node_enc=avif_node_enc||{};var f;f||(f=typeof avif_node_enc!=="undefined"?avif_node_enc:{});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var t={},u;for(u in f)f.hasOwnProperty(u)&&(t[u]=f[u]);var ca="",da,fa,ha,ia;ca=__dirname+"/";da=function(a){ha||(ha=__nccwpck_require__(747));ia||(ia=__nccwpck_require__(622));a=ia.normalize(a);return ha.readFileSync(a,null)};fa=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",v);f.inspect=function(){return"[Emscripten Module object]"};var ja=f.print||console.log.bind(console),w=f.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(f[u]=t[u]);t=null;var ka=0,x;f.wasmBinary&&(x=f.wasmBinary);f.noExitRuntime&&f.noExitRuntime;"object"!==typeof WebAssembly&&v("no native wasm support detected");var y,la=!1,ma=new TextDecoder("utf8");function na(a,b,c){var d=B;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var h=a.charCodeAt(++e);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var oa=new TextDecoder("utf-16le");function pa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&C[c];)++c;return oa.decode(B.subarray(a,c<<1))}function qa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)D[b>>1]=a.charCodeAt(e),b+=2;D[b>>1]=0;return b-d}function ra(a){return 2*a.length}function sa(a,b){for(var c=0,d="";!(c>=b/4);){var e=E[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function ta(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var h=a.charCodeAt(++e);g=65536+((g&1023)<<10)|h&1023}E[b>>2]=g;b+=4;if(b+4>c)break}E[b>>2]=0;return b-d}function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var F,va,B,D,C,E,G,wa,xa;function ya(a){F=a;f.HEAP8=va=new Int8Array(a);f.HEAP16=D=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=C=new Uint16Array(a);f.HEAPU32=G=new Uint32Array(a);f.HEAPF32=wa=new Float32Array(a);f.HEAPF64=xa=new Float64Array(a)}var za=f.INITIAL_MEMORY||16777216;f.wasmMemory?y=f.wasmMemory:y=new WebAssembly.Memory({initial:za/65536,maximum:32768});y&&(F=y.buffer);za=F.byteLength;ya(F);var H,Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();Aa.unshift(a)}var J=0,K=null;f.preloadedImages={};f.preloadedAudios={};function v(a){if(f.onAbort)f.onAbort(a);w(a);la=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Ga(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="avif_node_enc.wasm";if(!Ga()){var Ha=L;L=f.locateFile?f.locateFile(Ha,ca):ca+Ha}function Ia(){try{if(x)return new Uint8Array(x);if(fa)return fa(L);throw"both async and sync fetching of the wasm failed"}catch(a){v(a)}}function M(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.ja;"number"===typeof c?void 0===b.ea?H.get(c)():H.get(c)(b.ea):c(void 0===b.ea?null:b.ea)}}}var Ja=[null,[],[]],Ka={},N={};function La(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ma(a){return this.fromWireType(G[a>>2])}var O={},P={},Na={};function Oa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Pa(a,b){a=Oa(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Qa(a){var b=Error,c=Pa(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ra=void 0;function Sa(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new Ra("Mismatched type converter count");for(var l=0;l<a.length;++l)Q(a[l],k[l])}a.forEach(function(k){Na[k]=b});var e=Array(b.length),g=[],h=0;b.forEach(function(k,l){P.hasOwnProperty(k)?e[l]=P[k]:(g.push(k),O.hasOwnProperty(k)||(O[k]=[]),O[k].push(function(){e[l]=P[k];++h;h===g.length&&d(e)}))});0===g.length&&d(e)}function Ta(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ua=void 0;function R(a){for(var b="";B[a];)b+=Ua[B[a++]];return b}var Va=void 0;function S(a){throw new Va(a)}function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||S("type \""+d+"\" must have a positive integer typeid pointer");if(P.hasOwnProperty(a)){if(c.na)return;S("Cannot register type '"+d+"' twice")}P[a]=b;delete Na[a];O.hasOwnProperty(a)&&(b=O[a],delete O[a],b.forEach(function(e){e()}))}var Wa=[],T=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Xa(a){4<a&&0===--T[a].fa&&(T[a]=void 0,Wa.push(a))}function Ya(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Wa.length?Wa.pop():T.length;T[b]={fa:1,value:a};return b;}}function Za(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function $a(a,b){switch(b){case 2:return function(c){return this.fromWireType(wa[c>>2])};case 3:return function(c){return this.fromWireType(xa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function ab(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Pa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function bb(a,b){var c=f;if(void 0===c[a].ba){var d=c[a];c[a]=function(){c[a].ba.hasOwnProperty(arguments.length)||S("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].ba+")!");return c[a].ba[arguments.length].apply(this,arguments)};c[a].ba=[];c[a].ba[d.ha]=d}}function cb(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].ba&&void 0!==f[a].ba[c])&&S("Cannot register public name '"+a+"' twice"),bb(a,a),f.hasOwnProperty(c)&&S("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].ba[c]=b):(f[a]=b,void 0!==c&&(f[a].wa=c))}function db(a,b){for(var c=[],d=0;d<a;d++)c.push(E[(b>>2)+d]);return c}function eb(a,b){0<=a.indexOf("j")||v("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=H.get(b).apply(null,c);return e}}function U(a,b){a=R(a);var c=-1!=a.indexOf("j")?eb(a,b):H.get(b);"function"!==typeof c&&S("unknown function pointer with signature "+a+": "+b);return c}var fb=void 0;function gb(a){a=hb(a);var b=R(a);W(a);return b}function ib(a,b){function c(g){e[g]||P[g]||(Na[g]?Na[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new fb(a+": "+d.map(gb).join([", "]))}function jb(a,b,c){switch(b){case 0:return c?function(d){return va[d]}:function(d){return B[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return C[d>>1]};case 2:return c?function(d){return E[d>>2]}:function(d){return G[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var kb={};function lb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function mb(a,b){var c=P[a];void 0===c&&S(b+" has unknown type "+gb(a));return c}var nb={};Ra=f.InternalError=Qa("InternalError");for(var ob=Array(256),pb=0;256>pb;++pb)ob[pb]=String.fromCharCode(pb);Ua=ob;Va=f.BindingError=Qa("BindingError");f.count_emval_handles=function(){for(var a=0,b=5;b<T.length;++b)void 0!==T[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<T.length;++a)if(void 0!==T[a])return T[a];return null};fb=f.UnboundTypeError=Qa("UnboundTypeError");Ba.push({ja:function(){qb()}});var Ab={N:function(){},t:function(){return 0},G:function(){return 0},H:function(){},A:function(a){var b=N[a];delete N[a];var c=b.oa,d=b.pa,e=b.ga,g=e.map(function(h){return h.ma}).concat(e.map(function(h){return h.ra}));Sa([a],g,function(h){var k={};e.forEach(function(l,n){var m=h[n],p=l.ka,r=l.la,z=h[n+e.length],q=l.qa,ea=l.sa;k[l.ia]={read:function(A){return m.fromWireType(p(r,A))},write:function(A,I){var V=[];q(ea,A,z.toWireType(V,I));La(V)}}});return[{name:b.name,fromWireType:function(l){var n={},m;for(m in k)n[m]=k[m].read(l);d(l);return n},toWireType:function(l,n){for(var m in k)if(!(m in n))throw new TypeError("Missing field:  \""+m+"\"");var p=c();for(m in k)k[m].write(p,n[m]);null!==l&&l.push(d,p);return p},argPackAdvance:8,readValueFromPointer:Ma,da:d}]})},J:function(a,b,c,d,e){var g=Ta(c);b=R(b);Q(a,{name:b,fromWireType:function(h){return!!h},toWireType:function(h,k){return k?d:e},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var k=va;else if(2===c)k=D;else if(4===c)k=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[h>>g])},da:null})},I:function(a,b){b=R(b);Q(a,{name:b,fromWireType:function(c){var d=T[c].value;Xa(c);return d},toWireType:function(c,d){return Ya(d)},argPackAdvance:8,readValueFromPointer:Ma,da:null})},w:function(a,b,c){c=Ta(c);b=R(b);Q(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError("Cannot convert \""+Za(e)+"\" to "+this.name);return e},argPackAdvance:8,readValueFromPointer:$a(b,c),da:null})},z:function(a,b,c,d,e,g){var h=db(b,c);a=R(a);e=U(d,e);cb(a,function(){ib("Cannot call "+a+" due to unbound types",h)},b-1);Sa([],h,function(k){var l=[k[0],null].concat(k.slice(1)),n=k=a,m=e,p=l.length;2>p&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var r=null!==l[1]&&!1,z=!1,q=1;q<l.length;++q)if(null!==l[q]&&void 0===l[q].da){z=!0;break}var ea="void"!==l[0].name,A="",I="";for(q=0;q<p-2;++q)A+=(0!==q?", ":"")+"arg"+q,I+=(0!==q?", ":"")+"arg"+q+"Wired";n="return function "+Oa(n)+"("+A+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";z&&(n+="var destructors = [];\n");var V=z?"destructors":"null";A="throwBindingError invoker fn runDestructors retType classParam".split(" ");m=[S,m,g,La,l[0],l[1]];r&&(n+="var thisWired = classParam.toWireType("+V+", this);\n");for(q=0;q<p-2;++q)n+="var arg"+q+"Wired = argType"+q+".toWireType("+V+", arg"+q+"); // "+l[q+2].name+"\n",A.push("argType"+q),m.push(l[q+2]);r&&(I="thisWired"+(0<I.length?", ":"")+I);n+=(ea?"var rv = ":"")+"invoker(fn"+(0<I.length?", ":"")+I+");\n";if(z)n+="runDestructors(destructors);\n";else for(q=r?1:2;q<l.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==l[q].da&&(n+=p+"_dtor("+p+"); // "+l[q].name+"\n",A.push(p+"_dtor"),m.push(l[q].da));ea&&(n+="var ret = retType.fromWireType(rv);\nreturn ret;\n");A.push(n+"}\n");l=ab(A).apply(null,m);q=b-1;if(!f.hasOwnProperty(k))throw new Ra("Replacing nonexistant public symbol");void 0!==f[k].ba&&void 0!==q?f[k].ba[q]=l:(f[k]=l,f[k].ha=q);return[]})},j:function(a,b,c,d,e){function g(n){return n}b=R(b);-1===e&&(e=4294967295);var h=Ta(c);if(0===d){var k=32-8*c;g=function(n){return n<<k>>>k}}var l=-1!=b.indexOf("unsigned");Q(a,{name:b,fromWireType:g,toWireType:function(n,m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError("Cannot convert \""+Za(m)+"\" to "+this.name);if(m<d||m>e)throw new TypeError("Passing a number \""+Za(m)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+e+"]!");return l?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:jb(b,h,0!==d),da:null})},f:function(a,b,c){function d(g){g>>=2;var h=G;return new e(F,h[g+1],h[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=R(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{na:!0})},x:function(a,b){b=R(b);var c="std::string"===b;Q(a,{name:b,fromWireType:function(d){var e=G[d>>2];if(c)for(var g=d+4,h=0;h<=e;++h){var k=d+4+h;if(h==e||0==B[k]){if(g){for(var l=g+(k-g),n=g;!(n>=l)&&B[n];)++n;g=ma.decode(B.subarray(g,n))}else g="";if(void 0===m)var m=g;else m+=String.fromCharCode(0),m+=g;g=k+1}}else{m=Array(e);for(h=0;h<e;++h)m[h]=String.fromCharCode(B[d+4+h]);m=m.join("")}W(d);return m},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||S("Cannot pass non-string to std::string");var h=(c&&g?function(){for(var n=0,m=0;m<e.length;++m){var p=e.charCodeAt(m);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|e.charCodeAt(++m)&1023);127>=p?++n:n=2047>=p?n+2:65535>=p?n+3:n+4}return n}:function(){return e.length})(),k=rb(4+h+1);G[k>>2]=h;if(c&&g)na(e,k+4,h+1);else if(g)for(g=0;g<h;++g){var l=e.charCodeAt(g);255<l&&(W(k),S("String has UTF-16 code units that do not fit in 8 bits"));B[k+4+g]=l}else for(g=0;g<h;++g)B[k+4+g]=e[g];null!==d&&d.push(W,k);return k},argPackAdvance:8,readValueFromPointer:Ma,da:function(d){W(d)}})},q:function(a,b,c){c=R(c);if(2===b){var d=pa;var e=qa;var g=ra;var h=function(){return C};var k=1}else 4===b&&(d=sa,e=ta,g=ua,h=function(){return G},k=2);Q(a,{name:c,fromWireType:function(l){for(var n=G[l>>2],m=h(),p,r=l+4,z=0;z<=n;++z){var q=l+4+z*b;if(z==n||0==m[q>>k])r=d(r,q-r),void 0===p?p=r:(p+=String.fromCharCode(0),p+=r),r=q+b}W(l);return p},toWireType:function(l,n){"string"!==typeof n&&S("Cannot pass non-string to C++ string type "+c);var m=g(n),p=rb(4+m+b);G[p>>2]=m>>k;e(n,p+4,m+b);null!==l&&l.push(W,p);return p},argPackAdvance:8,readValueFromPointer:Ma,da:function(l){W(l)}})},B:function(a,b,c,d,e,g){N[a]={name:R(b),oa:U(c,d),pa:U(e,g),ga:[]}},g:function(a,b,c,d,e,g,h,k,l,n){N[a].ga.push({ia:R(b),ma:c,ka:U(d,e),la:g,ra:h,qa:U(k,l),sa:n})},K:function(a,b){b=R(b);Q(a,{va:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},l:Xa,M:function(a){if(0===a)return Ya(lb());var b=kb[a];a=void 0===b?R(a):b;return Ya(lb()[a])},y:function(a){4<a&&(T[a].fa+=1)},D:function(a,b,c,d){a||S("Cannot use deleted val. handle = "+a);a=T[a].value;var e=nb[b];if(!e){e="";for(var g=0;g<b;++g)e+=(0!==g?", ":"")+"arg"+g;var h="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)h+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";e=new Function("requireRegisteredType","Module","__emval_register",h+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n"))(mb,f,Ya);nb[b]=e}return e(a,c,d)},i:function(){v()},e:function(a,b){X(a,b||1);throw"longjmp"},E:function(a,b,c){B.copyWithin(a,b,b+c)},k:function(a){a>>>=0;var b=B.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{y.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);ya(y.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},v:function(){return 0},F:function(a,b,c,d){a=Ka.ua(a);b=Ka.ta(a,b,c);E[d>>2]=b;return 0},C:function(){},u:function(a,b,c,d){for(var e=0,g=0;g<c;g++){for(var h=E[b+8*g>>2],k=E[b+(8*g+4)>>2],l=0;l<k;l++){var n=B[h+l],m=Ja[a];if(0===n||10===n){n=1===a?ja:w;var p;for(p=0;m[p]&&!(NaN<=p);)++p;p=ma.decode(m.subarray?m.subarray(0,p):new Uint8Array(m.slice(0,p)));n(p);m.length=0}else m.push(n)}e+=k}E[d>>2]=e;return 0},c:function(){return ka|0},s:sb,n:tb,r:ub,o:vb,p:wb,h:xb,d:yb,m:zb,a:y,b:function(a){ka=a|0},L:function(a){var b=Date.now()/1E3|0;a&&(E[a>>2]=b);return b}};(function(){function a(e){f.asm=e.exports;H=f.asm.O;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&K&&(e=K,K=null,e())}function b(e){a(e.instance)}function c(e){return Promise.resolve().then(Ia).then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){w("failed to asynchronously prepare wasm: "+g);v(g)})}var d={a:Ab};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return w("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){w("wasm streaming compile failed: "+g);w("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var qb=f.___wasm_call_ctors=function(){return(qb=f.___wasm_call_ctors=f.asm.P).apply(null,arguments)},rb=f._malloc=function(){return(rb=f._malloc=f.asm.Q).apply(null,arguments)},W=f._free=function(){return(W=f._free=f.asm.R).apply(null,arguments)},hb=f.___getTypeName=function(){return(hb=f.___getTypeName=f.asm.S).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.T).apply(null,arguments)};var Y=f.stackSave=function(){return(Y=f.stackSave=f.asm.U).apply(null,arguments)},Z=f.stackRestore=function(){return(Z=f.stackRestore=f.asm.V).apply(null,arguments)},X=f._setThrew=function(){return(X=f._setThrew=f.asm.W).apply(null,arguments)};f.dynCall_jiiiiiiiii=function(){return(f.dynCall_jiiiiiiiii=f.asm.X).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.Y).apply(null,arguments)};f.dynCall_jiiiiiiii=function(){return(f.dynCall_jiiiiiiii=f.asm.Z).apply(null,arguments)};f.dynCall_jiiiiii=function(){return(f.dynCall_jiiiiii=f.asm._).apply(null,arguments)};f.dynCall_jiiiii=function(){return(f.dynCall_jiiiii=f.asm.$).apply(null,arguments)};f.dynCall_iiijii=function(){return(f.dynCall_iiijii=f.asm.aa).apply(null,arguments)};function wb(a,b){var c=Y();try{H.get(a)(b)}catch(d){Z(c);if(d!==d+0&&"longjmp"!==d)throw d;X(1,0)}}function yb(a,b,c,d,e){var g=Y();try{H.get(a)(b,c,d,e)}catch(h){Z(g);if(h!==h+0&&"longjmp"!==h)throw h;X(1,0)}}function xb(a,b,c){var d=Y();try{H.get(a)(b,c)}catch(e){Z(d);if(e!==e+0&&"longjmp"!==e)throw e;X(1,0)}}function vb(a,b,c,d,e,g,h,k,l,n){var m=Y();try{return H.get(a)(b,c,d,e,g,h,k,l,n)}catch(p){Z(m);if(p!==p+0&&"longjmp"!==p)throw p;X(1,0)}}function sb(a,b,c){var d=Y();try{return H.get(a)(b,c)}catch(e){Z(d);if(e!==e+0&&"longjmp"!==e)throw e;X(1,0)}}function tb(a,b,c,d,e){var g=Y();try{return H.get(a)(b,c,d,e)}catch(h){Z(g);if(h!==h+0&&"longjmp"!==h)throw h;X(1,0)}}function zb(a,b,c,d,e,g,h,k,l,n,m){var p=Y();try{H.get(a)(b,c,d,e,g,h,k,l,n,m)}catch(r){Z(p);if(r!==r+0&&"longjmp"!==r)throw r;X(1,0)}}function ub(a,b,c,d,e,g,h,k,l){var n=Y();try{return H.get(a)(b,c,d,e,g,h,k,l)}catch(m){Z(n);if(m!==m+0&&"longjmp"!==m)throw m;X(1,0)}}var Bb;K=function Cb(){Bb||Db();Bb||(K=Cb)};function Db(){function a(){if(!Bb&&(Bb=!0,f.calledRun=!0,!la)){M(Ba);M(Ca);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Da.unshift(b)}M(Da)}}if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();M(Aa);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=Db;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();Db();return avif_node_enc.ready}}();var avifEncWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "avif_node_enc-9eaca1bc.wasm").href:new URL("avif_node_enc-9eaca1bc.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var avif_node_dec=function(){return function(avif_node_dec){avif_node_dec=avif_node_dec||{};var e;e||(e=typeof avif_node_dec!=="undefined"?avif_node_dec:{});var aa,ba;e.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);var ca="",da,ea,fa,ha;ca=__dirname+"/";da=function(a){fa||(fa=__nccwpck_require__(747));ha||(ha=__nccwpck_require__(622));a=ha.normalize(a);return fa.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",u);e.inspect=function(){return"[Emscripten Module object]"};var ia=e.print||console.log.bind(console),v=e.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);r=null;var ja=0,w;e.wasmBinary&&(w=e.wasmBinary);e.noExitRuntime&&e.noExitRuntime;"object"!==typeof WebAssembly&&u("no native wasm support detected");var y,ka=!1,la=new TextDecoder("utf8");function ma(a,b,c){var d=z;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var na=new TextDecoder("utf-16le");function oa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&A[c];)++c;return na.decode(z.subarray(a,c<<1))}function pa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)B[b>>1]=a.charCodeAt(f),b+=2;B[b>>1]=0;return b-d}function qa(a){return 2*a.length}function ra(a,b){for(var c=0,d="";!(c>=b/4);){var f=D[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function sa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}D[b>>2]=g;b+=4;if(b+4>c)break}D[b>>2]=0;return b-d}function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var E,ua,z,B,A,D,F,va,wa;function xa(a){E=a;e.HEAP8=ua=new Int8Array(a);e.HEAP16=B=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=z=new Uint8Array(a);e.HEAPU16=A=new Uint16Array(a);e.HEAPU32=F=new Uint32Array(a);e.HEAPF32=va=new Float32Array(a);e.HEAPF64=wa=new Float64Array(a)}var ya=e.INITIAL_MEMORY||16777216;e.wasmMemory?y=e.wasmMemory:y=new WebAssembly.Memory({initial:ya/65536,maximum:32768});y&&(E=y.buffer);ya=E.byteLength;xa(E);var G,za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=e.preRun.shift();za.unshift(a)}var H=0,J=null;e.preloadedImages={};e.preloadedAudios={};function u(a){if(e.onAbort)e.onAbort(a);v(a);ka=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Fa(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="avif_node_dec.wasm";if(!Fa()){var Ga=K;K=e.locateFile?e.locateFile(Ga,ca):ca+Ga}function Ha(){try{if(w)return new Uint8Array(w);if(ea)return ea(K);throw"both async and sync fetching of the wasm failed"}catch(a){u(a)}}function L(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.T;"number"===typeof c?void 0===b.P?G.get(c)():G.get(c)(b.P):c(void 0===b.P?null:b.P)}}}function Ia(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ja=void 0;function N(a){for(var b="";z[a];)b+=Ja[z[a++]];return b}var O={},P={},Q={};function Ka(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function La(a,b){a=Ka(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Ma(a){var b=Error,c=La(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Na=void 0;function R(a){throw new Na(a)}var Oa=void 0;function Pa(a,b){function c(k){k=b(k);if(k.length!==d.length)throw new Oa("Mismatched type converter count");for(var l=0;l<d.length;++l)S(d[l],k[l])}var d=[];d.forEach(function(k){Q[k]=a});var f=Array(a.length),g=[],h=0;a.forEach(function(k,l){P.hasOwnProperty(k)?f[l]=P[k]:(g.push(k),O.hasOwnProperty(k)||(O[k]=[]),O[k].push(function(){f[l]=P[k];++h;h===g.length&&c(f)}))});0===g.length&&c(f)}function S(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||R("type \""+d+"\" must have a positive integer typeid pointer");if(P.hasOwnProperty(a)){if(c.U)return;R("Cannot register type '"+d+"' twice")}P[a]=b;delete Q[a];O.hasOwnProperty(a)&&(b=O[a],delete O[a],b.forEach(function(f){f()}))}var Qa=[],T=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ta(a){4<a&&0===--T[a].R&&(T[a]=void 0,Qa.push(a))}function U(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Qa.length?Qa.pop():T.length;T[b]={R:1,value:a};return b;}}function Ua(a){return this.fromWireType(F[a>>2])}function Va(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Wa(a,b){switch(b){case 2:return function(c){return this.fromWireType(va[c>>2])};case 3:return function(c){return this.fromWireType(wa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Xa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=La(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Ya(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Za(a,b){var c=e;if(void 0===c[a].N){var d=c[a];c[a]=function(){c[a].N.hasOwnProperty(arguments.length)||R("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].N+")!");return c[a].N[arguments.length].apply(this,arguments)};c[a].N=[];c[a].N[d.S]=d}}function $a(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].N&&void 0!==e[a].N[c])&&R("Cannot register public name '"+a+"' twice"),Za(a,a),e.hasOwnProperty(c)&&R("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].N[c]=b):(e[a]=b,void 0!==c&&(e[a].W=c))}function ab(a,b){for(var c=[],d=0;d<a;d++)c.push(D[(b>>2)+d]);return c}function bb(a,b){0<=a.indexOf("j")||u("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=G.get(b).apply(null,c);return f}}function cb(a,b){a=N(a);var c=-1!=a.indexOf("j")?bb(a,b):G.get(b);"function"!==typeof c&&R("unknown function pointer with signature "+a+": "+b);return c}var db=void 0;function eb(a){a=fb(a);var b=N(a);V(a);return b}function gb(a,b){function c(g){f[g]||P[g]||(Q[g]?Q[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new db(a+": "+d.map(eb).join([", "]))}function hb(a,b,c){switch(b){case 0:return c?function(d){return ua[d]}:function(d){return z[d]};case 1:return c?function(d){return B[d>>1]}:function(d){return A[d>>1]};case 2:return c?function(d){return D[d>>2]}:function(d){return F[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var ib={};function jb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function kb(a,b){var c=P[a];void 0===c&&R(b+" has unknown type "+eb(a));return c}for(var lb={},mb=[null,[],[]],nb=Array(256),W=0;256>W;++W)nb[W]=String.fromCharCode(W);Ja=nb;Na=e.BindingError=Ma("BindingError");Oa=e.InternalError=Ma("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<T.length;++b)void 0!==T[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<T.length;++a)if(void 0!==T[a])return T[a];return null};db=e.UnboundTypeError=Ma("UnboundTypeError");Aa.push({T:function(){ob()}});var ub={l:function(){},t:function(a,b,c,d,f){var g=Ia(c);b=N(b);S(a,{name:b,fromWireType:function(h){return!!h},toWireType:function(h,k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var k=ua;else if(2===c)k=B;else if(4===c)k=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[h>>g])},O:null})},B:function(a,b){b=N(b);S(a,{name:b,fromWireType:function(c){var d=T[c].value;Ta(c);return d},toWireType:function(c,d){return U(d)},argPackAdvance:8,readValueFromPointer:Ua,O:null})},s:function(a,b,c){c=Ia(c);b=N(b);S(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError("Cannot convert \""+Va(f)+"\" to "+this.name);return f},argPackAdvance:8,readValueFromPointer:Wa(b,c),O:null})},v:function(a,b,c,d,f,g){var h=ab(b,c);a=N(a);f=cb(d,f);$a(a,function(){gb("Cannot call "+a+" due to unbound types",h)},b-1);Pa(h,function(k){var l=[k[0],null].concat(k.slice(1)),m=k=a,n=f,p=l.length;2>p&&R("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==l[1]&&!1,C=!1,q=1;q<l.length;++q)if(null!==l[q]&&void 0===l[q].O){C=!0;break}var Ra="void"!==l[0].name,I="",M="";for(q=0;q<p-2;++q)I+=(0!==q?", ":"")+"arg"+q,M+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Ka(m)+"("+I+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";C&&(m+="var destructors = [];\n");var Sa=C?"destructors":"null";I="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[R,n,g,Ya,l[0],l[1]];x&&(m+="var thisWired = classParam.toWireType("+Sa+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Sa+", arg"+q+"); // "+l[q+2].name+"\n",I.push("argType"+q),n.push(l[q+2]);x&&(M="thisWired"+(0<M.length?", ":"")+M);m+=(Ra?"var rv = ":"")+"invoker(fn"+(0<M.length?", ":"")+M+");\n";if(C)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<l.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==l[q].O&&(m+=p+"_dtor("+p+"); // "+l[q].name+"\n",I.push(p+"_dtor"),n.push(l[q].O));Ra&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");I.push(m+"}\n");l=Xa(I).apply(null,n);q=b-1;if(!e.hasOwnProperty(k))throw new Oa("Replacing nonexistant public symbol");void 0!==e[k].N&&void 0!==q?e[k].N[q]=l:(e[k]=l,e[k].S=q);return[]})},f:function(a,b,c,d,f){function g(m){return m}b=N(b);-1===f&&(f=4294967295);var h=Ia(c);if(0===d){var k=32-8*c;g=function(m){return m<<k>>>k}}var l=-1!=b.indexOf("unsigned");S(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Va(n)+"\" to "+this.name);if(n<d||n>f)throw new TypeError("Passing a number \""+Va(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+f+"]!");return l?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:hb(b,h,0!==d),O:null})},e:function(a,b,c){function d(g){g>>=2;var h=F;return new f(E,h[g+1],h[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=N(c);S(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{U:!0})},n:function(a,b){b=N(b);var c="std::string"===b;S(a,{name:b,fromWireType:function(d){var f=F[d>>2];if(c)for(var g=d+4,h=0;h<=f;++h){var k=d+4+h;if(h==f||0==z[k]){if(g){for(var l=g+(k-g),m=g;!(m>=l)&&z[m];)++m;g=la.decode(z.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=k+1}}else{n=Array(f);for(h=0;h<f;++h)n[h]=String.fromCharCode(z[d+4+h]);n=n.join("")}V(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||R("Cannot pass non-string to std::string");var h=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),k=pb(4+h+1);F[k>>2]=h;if(c&&g)ma(f,k+4,h+1);else if(g)for(g=0;g<h;++g){var l=f.charCodeAt(g);255<l&&(V(k),R("String has UTF-16 code units that do not fit in 8 bits"));z[k+4+g]=l}else for(g=0;g<h;++g)z[k+4+g]=f[g];null!==d&&d.push(V,k);return k},argPackAdvance:8,readValueFromPointer:Ua,O:function(d){V(d)}})},m:function(a,b,c){c=N(c);if(2===b){var d=oa;var f=pa;var g=qa;var h=function(){return A};var k=1}else 4===b&&(d=ra,f=sa,g=ta,h=function(){return F},k=2);S(a,{name:c,fromWireType:function(l){for(var m=F[l>>2],n=h(),p,x=l+4,C=0;C<=m;++C){var q=l+4+C*b;if(C==m||0==n[q>>k])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}V(l);return p},toWireType:function(l,m){"string"!==typeof m&&R("Cannot pass non-string to C++ string type "+c);var n=g(m),p=pb(4+n+b);F[p>>2]=n>>k;f(m,p+4,n+b);null!==l&&l.push(V,p);return p},argPackAdvance:8,readValueFromPointer:Ua,O:function(l){V(l)}})},u:function(a,b){b=N(b);S(a,{V:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},j:Ta,k:function(a){if(0===a)return U(jb());var b=ib[a];a=void 0===b?N(a):b;return U(jb()[a])},o:function(a){4<a&&(T[a].R+=1)},p:function(a,b,c,d){a||R("Cannot use deleted val. handle = "+a);a=T[a].value;var f=lb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var h="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)h+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=new Function("requireRegisteredType","Module","__emval_register",h+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n"))(kb,e,U);lb[b]=f}return f(a,c,d)},d:function(){u()},i:function(a,b){X(a,b||1);throw"longjmp"},z:function(a,b,c){z.copyWithin(a,b,b+c)},h:function(a){a>>>=0;var b=z.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{y.grow(Math.min(2147483648,d)-E.byteLength+65535>>>16);xa(y.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},A:function(){return 0},w:function(){},r:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var h=D[b+8*g>>2],k=D[b+(8*g+4)>>2],l=0;l<k;l++){var m=z[h+l],n=mb[a];if(0===m||10===m){m=1===a?ia:v;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=la.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=k}D[d>>2]=f;return 0},b:function(){return ja|0},g:qb,x:rb,q:sb,y:tb,a:y,c:function(a){ja=a|0}};(function(){function a(f){e.asm=f.exports;G=e.asm.C;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&J&&(f=J,J=null,f())}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Ha).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){v("failed to asynchronously prepare wasm: "+g);u(g)})}var d={a:ub};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return v("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){v("wasm streaming compile failed: "+g);v("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var ob=e.___wasm_call_ctors=function(){return(ob=e.___wasm_call_ctors=e.asm.D).apply(null,arguments)},pb=e._malloc=function(){return(pb=e._malloc=e.asm.E).apply(null,arguments)},V=e._free=function(){return(V=e._free=e.asm.F).apply(null,arguments)},fb=e.___getTypeName=function(){return(fb=e.___getTypeName=e.asm.G).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.H).apply(null,arguments)};var Y=e.stackSave=function(){return(Y=e.stackSave=e.asm.I).apply(null,arguments)},Z=e.stackRestore=function(){return(Z=e.stackRestore=e.asm.J).apply(null,arguments)},X=e._setThrew=function(){return(X=e._setThrew=e.asm.K).apply(null,arguments)};e.dynCall_iiijii=function(){return(e.dynCall_iiijii=e.asm.L).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.M).apply(null,arguments)};function tb(a,b,c,d,f,g,h,k){var l=Y();try{G.get(a)(b,c,d,f,g,h,k)}catch(m){Z(l);if(m!==m+0&&"longjmp"!==m)throw m;X(1,0)}}function sb(a,b,c,d,f){var g=Y();try{G.get(a)(b,c,d,f)}catch(h){Z(g);if(h!==h+0&&"longjmp"!==h)throw h;X(1,0)}}function qb(a,b,c){var d=Y();try{return G.get(a)(b,c)}catch(f){Z(d);if(f!==f+0&&"longjmp"!==f)throw f;X(1,0)}}function rb(a,b,c,d,f){var g=Y();try{return G.get(a)(b,c,d,f)}catch(h){Z(g);if(h!==h+0&&"longjmp"!==h)throw h;X(1,0)}}var vb;J=function wb(){vb||xb();vb||(J=wb)};function xb(){function a(){if(!vb&&(vb=!0,e.calledRun=!0,!ka)){L(Aa);L(Ba);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ca.unshift(b)}L(Ca)}}if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();L(za);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=xb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();xb();return avif_node_dec.ready}}();var avifDecWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "avif_node_dec-fff3a363.wasm").href:new URL("avif_node_dec-fff3a363.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var jxl_node_enc=function(){return function(jxl_node_enc){jxl_node_enc=jxl_node_enc||{};var f;f||(f=typeof jxl_node_enc!=="undefined"?jxl_node_enc:{});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var t={},w;for(w in f)f.hasOwnProperty(w)&&(t[w]=f[w]);var ca="./this.program",da="",ea,fa,ha,ia;da=__dirname+"/";ea=function(a){ha||(ha=__nccwpck_require__(747));ia||(ia=__nccwpck_require__(622));a=ia.normalize(a);return ha.readFileSync(a,null)};fa=function(a){a=ea(a);a.buffer||(a=new Uint8Array(a));a.buffer||y("Assertion failed: undefined");return a};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",y);f.inspect=function(){return"[Emscripten Module object]"};var ja=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(w in t)t.hasOwnProperty(w)&&(f[w]=t[w]);t=null;f.thisProgram&&(ca=f.thisProgram);var A;f.wasmBinary&&(A=f.wasmBinary);f.noExitRuntime&&f.noExitRuntime;"object"!==typeof WebAssembly&&y("no native wasm support detected");var C,ka=!1,la=new TextDecoder("utf8");function ma(a,b){if(!a)return"";b=a+b;for(var c=a;!(c>=b)&&D[c];)++c;return la.decode(D.subarray(a,c))}function na(a,b,c,d){if(0<d){d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var n=a.charCodeAt(++g);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var pa=new TextDecoder("utf-16le");function qa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&E[c];)++c;return pa.decode(D.subarray(a,c<<1))}function ra(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var g=0;g<c;++g)F[b>>1]=a.charCodeAt(g),b+=2;F[b>>1]=0;return b-d}function sa(a){return 2*a.length}function ta(a,b){for(var c=0,d="";!(c>=b/4);){var g=G[a+4*c>>2];if(0==g)break;++c;65536<=g?(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023)):d+=String.fromCharCode(g)}return d}function ua(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var n=a.charCodeAt(++g);h=65536+((h&1023)<<10)|n&1023}G[b>>2]=h;b+=4;if(b+4>c)break}G[b>>2]=0;return b-d}function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var H,I,D,F,E,G,J,wa,xa;function ya(a){H=a;f.HEAP8=I=new Int8Array(a);f.HEAP16=F=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=E=new Uint16Array(a);f.HEAPU32=J=new Uint32Array(a);f.HEAPF32=wa=new Float32Array(a);f.HEAPF64=xa=new Float64Array(a)}var za=f.INITIAL_MEMORY||16777216;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:za/65536,maximum:32768});C&&(H=C.buffer);za=H.byteLength;ya(H);var K,Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();Aa.unshift(a)}var L=0,M=null;f.preloadedImages={};f.preloadedAudios={};function y(a){if(f.onAbort)f.onAbort(a);z(a);ka=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Ga(){var a=N;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var N="jxl_node_enc.wasm";if(!Ga()){var Ha=N;N=f.locateFile?f.locateFile(Ha,da):da+Ha}function Ia(){try{if(A)return new Uint8Array(A);if(fa)return fa(N);throw"both async and sync fetching of the wasm failed"}catch(a){y(a)}}function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.ga;"number"===typeof c?void 0===b.$?K.get(c)():K.get(c)(b.$):c(void 0===b.$?null:b.$)}}}function Ja(a){this.V=a-16;this.sa=function(b){G[this.V+8>>2]=b};this.pa=function(b){G[this.V+0>>2]=b};this.qa=function(){G[this.V+4>>2]=0};this.oa=function(){I[this.V+12>>0]=0};this.ra=function(){I[this.V+13>>0]=0};this.la=function(b,c){this.sa(b);this.pa(c);this.qa();this.oa();this.ra()}}var Q={};function Ka(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function La(a){return this.fromWireType(J[a>>2])}var R={},S={},Ma={};function Na(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Oa(a,b){a=Na(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Pa(a){var b=Error,c=Oa(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Qa=void 0;function Ra(a,b,c){function d(m){m=c(m);if(m.length!==a.length)throw new Qa("Mismatched type converter count");for(var k=0;k<a.length;++k)T(a[k],m[k])}a.forEach(function(m){Ma[m]=b});var g=Array(b.length),h=[],n=0;b.forEach(function(m,k){S.hasOwnProperty(m)?g[k]=S[m]:(h.push(m),R.hasOwnProperty(m)||(R[m]=[]),R[m].push(function(){g[k]=S[m];++n;n===h.length&&d(g)}))});0===h.length&&d(g)}function Sa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ta=void 0;function V(a){for(var b="";D[a];)b+=Ta[D[a++]];return b}var Ua=void 0;function W(a){throw new Ua(a)}function T(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W("type \""+d+"\" must have a positive integer typeid pointer");if(S.hasOwnProperty(a)){if(c.ka)return;W("Cannot register type '"+d+"' twice")}S[a]=b;delete Ma[a];R.hasOwnProperty(a)&&(b=R[a],delete R[a],b.forEach(function(g){g()}))}var Va=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Wa(a){4<a&&0===--X[a].aa&&(X[a]=void 0,Va.push(a))}function Xa(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Va.length?Va.pop():X.length;X[b]={aa:1,value:a};return b;}}function Ya(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Za(a,b){switch(b){case 2:return function(c){return this.fromWireType(wa[c>>2])};case 3:return function(c){return this.fromWireType(xa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function $a(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Oa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function ab(a,b){var c=f;if(void 0===c[a].S){var d=c[a];c[a]=function(){c[a].S.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].S+")!");return c[a].S[arguments.length].apply(this,arguments)};c[a].S=[];c[a].S[d.ea]=d}}function bb(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].S&&void 0!==f[a].S[c])&&W("Cannot register public name '"+a+"' twice"),ab(a,a),f.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].S[c]=b):(f[a]=b,void 0!==c&&(f[a].Ba=c))}function cb(a,b){for(var c=[],d=0;d<a;d++)c.push(G[(b>>2)+d]);return c}function db(a,b){0<=a.indexOf("j")||y("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var g;-1!=a.indexOf("j")?g=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):g=K.get(b).apply(null,c);return g}}function Y(a,b){a=V(a);var c=-1!=a.indexOf("j")?db(a,b):K.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var eb=void 0;function fb(a){a=gb(a);var b=V(a);Z(a);return b}function hb(a,b){function c(h){g[h]||S[h]||(Ma[h]?Ma[h].forEach(c):(d.push(h),g[h]=!0))}var d=[],g={};b.forEach(c);throw new eb(a+": "+d.map(fb).join([", "]))}function ib(a,b,c){switch(b){case 0:return c?function(d){return I[d]}:function(d){return D[d]};case 1:return c?function(d){return F[d>>1]}:function(d){return E[d>>1]};case 2:return c?function(d){return G[d>>2]}:function(d){return J[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var jb={};function kb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function lb(a,b){var c=S[a];void 0===c&&W(b+" has unknown type "+fb(a));return c}var mb={},nb={};function ob(){if(!pb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in nb)a[b]=nb[b];var c=[];for(b in a)c.push(b+"="+a[b]);pb=c}return pb}var pb,qb=[null,[],[]];function rb(a){return 0===a%4&&(0!==a%100||0===a%400)}function sb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var tb=[31,29,31,30,31,30,31,31,30,31,30,31],ub=[31,28,31,30,31,30,31,31,30,31,30,31];function vb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(rb(a.getFullYear())?tb:ub)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}function wb(a,b,c,d){function g(e,l,u){for(e="number"===typeof e?e.toString():e||"";e.length<l;)e=u[0]+e;return e}function h(e,l){return g(e,l,"0")}function n(e,l){function u(B){return 0>B?-1:0<B?1:0}var v;0===(v=u(e.getFullYear()-l.getFullYear()))&&0===(v=u(e.getMonth()-l.getMonth()))&&(v=u(e.getDate()-l.getDate()));return v}function m(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30);}}function k(e){e=vb(new Date(e.R+1900,0,1),e.Z);var l=new Date(e.getFullYear()+1,0,4),u=m(new Date(e.getFullYear(),0,4));l=m(l);return 0>=n(u,e)?0>=n(l,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var q=G[d+40>>2];d={ya:G[d>>2],xa:G[d+4>>2],X:G[d+8>>2],W:G[d+12>>2],U:G[d+16>>2],R:G[d+20>>2],Y:G[d+24>>2],Z:G[d+28>>2],Ca:G[d+32>>2],wa:G[d+36>>2],za:q?ma(q):""};c=ma(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var p in q)c=c.replace(new RegExp(p,"g"),q[p]);var r="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),x="January February March April May June July August September October November December".split(" ");q={"%a":function(e){return r[e.Y].substring(0,3)},"%A":function(e){return r[e.Y]},"%b":function(e){return x[e.U].substring(0,3)},"%B":function(e){return x[e.U]},"%C":function(e){return h((e.R+1900)/100|0,2)},"%d":function(e){return h(e.W,2)},"%e":function(e){return g(e.W,2," ")},"%g":function(e){return k(e).toString().substring(2)},"%G":function(e){return k(e)},"%H":function(e){return h(e.X,2)},"%I":function(e){e=e.X;0==e?e=12:12<e&&(e-=12);return h(e,2)},"%j":function(e){return h(e.W+sb(rb(e.R+1900)?tb:ub,e.U-1),3)},"%m":function(e){return h(e.U+1,2)},"%M":function(e){return h(e.xa,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=e.X&&12>e.X?"AM":"PM"},"%S":function(e){return h(e.ya,2)},"%t":function(){return"\t"},"%u":function(e){return e.Y||7},"%U":function(e){var l=new Date(e.R+1900,0,1),u=0===l.getDay()?l:vb(l,7-l.getDay());e=new Date(e.R+1900,e.U,e.W);return 0>n(u,e)?h(Math.ceil((31-u.getDate()+(sb(rb(e.getFullYear())?tb:ub,e.getMonth()-1)-31)+e.getDate())/7),2):0===n(u,l)?"01":"00"},"%V":function(e){var l=new Date(e.R+1901,0,4),u=m(new Date(e.R+1900,0,4));l=m(l);var v=vb(new Date(e.R+1900,0,1),e.Z);return 0>n(v,u)?"53":0>=n(l,v)?"01":h(Math.ceil((u.getFullYear()<e.R+1900?e.Z+32-u.getDate():e.Z+1-u.getDate())/7),2)},"%w":function(e){return e.Y},"%W":function(e){var l=new Date(e.R,0,1),u=1===l.getDay()?l:vb(l,0===l.getDay()?1:7-l.getDay()+1);e=new Date(e.R+1900,e.U,e.W);return 0>n(u,e)?h(Math.ceil((31-u.getDate()+(sb(rb(e.getFullYear())?tb:ub,e.getMonth()-1)-31)+e.getDate())/7),2):0===n(u,l)?"01":"00"},"%y":function(e){return(e.R+1900).toString().substring(2)},"%Y":function(e){return e.R+1900},"%z":function(e){e=e.wa;var l=0<=e;e=Math.abs(e)/60;return(l?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.za},"%%":function(){return"%"}};for(p in q)0<=c.indexOf(p)&&(c=c.replace(new RegExp(p,"g"),q[p](d)));p=xb(c);if(p.length>b)return 0;I.set(p,a);return p.length-1}Qa=f.InternalError=Pa("InternalError");for(var yb=Array(256),zb=0;256>zb;++zb)yb[zb]=String.fromCharCode(zb);Ta=yb;Ua=f.BindingError=Pa("BindingError");f.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};eb=f.UnboundTypeError=Pa("UnboundTypeError");function xb(a){var b=Array(oa(a)+1);na(a,b,0,b.length);return b}Ba.push({ga:function(){Ab()}});var Cb={q:function(a){return Bb(a+16)+16},D:function(){},p:function(a,b,c){new Ja(a).la(b,c);throw a},m:function(a){var b=Q[a];delete Q[a];var c=b.ma,d=b.na,g=b.ba,h=g.map(function(n){return n.ja}).concat(g.map(function(n){return n.ua}));Ra([a],h,function(n){var m={};g.forEach(function(k,q){var p=n[q],r=k.ha,x=k.ia,e=n[q+g.length],l=k.ta,u=k.va;m[k.fa]={read:function(v){return p.fromWireType(r(x,v))},write:function(v,B){var U=[];l(u,v,e.toWireType(U,B));Ka(U)}}});return[{name:b.name,fromWireType:function(k){var q={},p;for(p in m)q[p]=m[p].read(k);d(k);return q},toWireType:function(k,q){for(var p in m)if(!(p in q))throw new TypeError("Missing field:  \""+p+"\"");var r=c();for(p in m)m[p].write(r,q[p]);null!==k&&k.push(d,r);return r},argPackAdvance:8,readValueFromPointer:La,T:d}]})},z:function(a,b,c,d,g){var h=Sa(c);b=V(b);T(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,m){return m?d:g},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var m=I;else if(2===c)m=F;else if(4===c)m=G;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(m[n>>h])},T:null})},y:function(a,b){b=V(b);T(a,{name:b,fromWireType:function(c){var d=X[c].value;Wa(c);return d},toWireType:function(c,d){return Xa(d)},argPackAdvance:8,readValueFromPointer:La,T:null})},j:function(a,b,c){c=Sa(c);b=V(b);T(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,g){if("number"!==typeof g&&"boolean"!==typeof g)throw new TypeError("Cannot convert \""+Ya(g)+"\" to "+this.name);return g},argPackAdvance:8,readValueFromPointer:Za(b,c),T:null})},l:function(a,b,c,d,g,h){var n=cb(b,c);a=V(a);g=Y(d,g);bb(a,function(){hb("Cannot call "+a+" due to unbound types",n)},b-1);Ra([],n,function(m){var k=[m[0],null].concat(m.slice(1)),q=m=a,p=g,r=k.length;2>r&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,e=!1,l=1;l<k.length;++l)if(null!==k[l]&&void 0===k[l].T){e=!0;break}var u="void"!==k[0].name,v="",B="";for(l=0;l<r-2;++l)v+=(0!==l?", ":"")+"arg"+l,B+=(0!==l?", ":"")+"arg"+l+"Wired";q="return function "+Na(q)+"("+v+") {\nif (arguments.length !== "+(r-2)+") {\nthrowBindingError('function "+q+" called with ' + arguments.length + ' arguments, expected "+(r-2)+" args!');\n}\n";e&&(q+="var destructors = [];\n");var U=e?"destructors":"null";v="throwBindingError invoker fn runDestructors retType classParam".split(" ");p=[W,p,h,Ka,k[0],k[1]];x&&(q+="var thisWired = classParam.toWireType("+U+", this);\n");for(l=0;l<r-2;++l)q+="var arg"+l+"Wired = argType"+l+".toWireType("+U+", arg"+l+"); // "+k[l+2].name+"\n",v.push("argType"+l),p.push(k[l+2]);x&&(B="thisWired"+(0<B.length?", ":"")+B);q+=(u?"var rv = ":"")+"invoker(fn"+(0<B.length?", ":"")+B+");\n";if(e)q+="runDestructors(destructors);\n";else for(l=x?1:2;l<k.length;++l)r=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==k[l].T&&(q+=r+"_dtor("+r+"); // "+k[l].name+"\n",v.push(r+"_dtor"),p.push(k[l].T));u&&(q+="var ret = retType.fromWireType(rv);\nreturn ret;\n");v.push(q+"}\n");k=$a(v).apply(null,p);l=b-1;if(!f.hasOwnProperty(m))throw new Qa("Replacing nonexistant public symbol");void 0!==f[m].S&&void 0!==l?f[m].S[l]=k:(f[m]=k,f[m].ea=l);return[]})},d:function(a,b,c,d,g){function h(q){return q}b=V(b);-1===g&&(g=4294967295);var n=Sa(c);if(0===d){var m=32-8*c;h=function(q){return q<<m>>>m}}var k=-1!=b.indexOf("unsigned");T(a,{name:b,fromWireType:h,toWireType:function(q,p){if("number"!==typeof p&&"boolean"!==typeof p)throw new TypeError("Cannot convert \""+Ya(p)+"\" to "+this.name);if(p<d||p>g)throw new TypeError("Passing a number \""+Ya(p)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+g+"]!");return k?p>>>0:p|0},argPackAdvance:8,readValueFromPointer:ib(b,n,0!==d),T:null})},c:function(a,b,c){function d(h){h>>=2;var n=J;return new g(H,n[h+1],n[h])}var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=V(c);T(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ka:!0})},k:function(a,b){b=V(b);var c="std::string"===b;T(a,{name:b,fromWireType:function(d){var g=J[d>>2];if(c)for(var h=d+4,n=0;n<=g;++n){var m=d+4+n;if(n==g||0==D[m]){h=ma(h,m-h);if(void 0===k)var k=h;else k+=String.fromCharCode(0),k+=h;h=m+1}}else{k=Array(g);for(n=0;n<g;++n)k[n]=String.fromCharCode(D[d+4+n]);k=k.join("")}Z(d);return k},toWireType:function(d,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var h="string"===typeof g;h||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||W("Cannot pass non-string to std::string");var n=(c&&h?function(){return oa(g)}:function(){return g.length})(),m=Bb(4+n+1);J[m>>2]=n;if(c&&h)na(g,D,m+4,n+1);else if(h)for(h=0;h<n;++h){var k=g.charCodeAt(h);255<k&&(Z(m),W("String has UTF-16 code units that do not fit in 8 bits"));D[m+4+h]=k}else for(h=0;h<n;++h)D[m+4+h]=g[h];null!==d&&d.push(Z,m);return m},argPackAdvance:8,readValueFromPointer:La,T:function(d){Z(d)}})},h:function(a,b,c){c=V(c);if(2===b){var d=qa;var g=ra;var h=sa;var n=function(){return E};var m=1}else 4===b&&(d=ta,g=ua,h=va,n=function(){return J},m=2);T(a,{name:c,fromWireType:function(k){for(var q=J[k>>2],p=n(),r,x=k+4,e=0;e<=q;++e){var l=k+4+e*b;if(e==q||0==p[l>>m])x=d(x,l-x),void 0===r?r=x:(r+=String.fromCharCode(0),r+=x),x=l+b}Z(k);return r},toWireType:function(k,q){"string"!==typeof q&&W("Cannot pass non-string to C++ string type "+c);var p=h(q),r=Bb(4+p+b);J[r>>2]=p>>m;g(q,r+4,p+b);null!==k&&k.push(Z,r);return r},argPackAdvance:8,readValueFromPointer:La,T:function(k){Z(k)}})},n:function(a,b,c,d,g,h){Q[a]={name:V(b),ma:Y(c,d),na:Y(g,h),ba:[]}},e:function(a,b,c,d,g,h,n,m,k,q){Q[a].ba.push({fa:V(b),ja:c,ha:Y(d,g),ia:h,ua:n,ta:Y(m,k),va:q})},A:function(a,b){b=V(b);T(a,{Aa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},g:Wa,C:function(a){if(0===a)return Xa(kb());var b=jb[a];a=void 0===b?V(a):b;return Xa(kb()[a])},B:function(a){4<a&&(X[a].aa+=1)},o:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=X[a].value;var g=mb[b];if(!g){g="";for(var h=0;h<b;++h)g+=(0!==h?", ":"")+"arg"+h;var n="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(h=0;h<b;++h)n+="var argType"+h+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+h+"], \"parameter "+h+"\");\nvar arg"+h+" = argType"+h+".readValueFromPointer(args);\nargs += argType"+h+"['argPackAdvance'];\n";g=new Function("requireRegisteredType","Module","__emval_register",n+("var obj = new constructor("+g+");\nreturn __emval_register(obj);\n}\n"))(lb,f,Xa);mb[b]=g}return g(a,c,d)},b:function(){y()},t:function(a,b,c){D.copyWithin(a,b,b+c)},f:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{C.grow(Math.min(2147483648,d)-H.byteLength+65535>>>16);ya(C.buffer);var g=1;break a}catch(h){}g=void 0}if(g)return!0}return!1},v:function(a,b){var c=0;ob().forEach(function(d,g){var h=b+c;g=G[a+4*g>>2]=h;for(h=0;h<d.length;++h)I[g++>>0]=d.charCodeAt(h);I[g>>0]=0;c+=d.length+1});return 0},w:function(a,b){var c=ob();G[a>>2]=c.length;var d=0;c.forEach(function(g){d+=g.length+1});G[b>>2]=d;return 0},x:function(){return 0},r:function(){},i:function(a,b,c,d){for(var g=0,h=0;h<c;h++){for(var n=G[b+8*h>>2],m=G[b+(8*h+4)>>2],k=0;k<m;k++){var q=D[n+k],p=qb[a];if(0===q||10===q){q=1===a?ja:z;var r;for(r=0;p[r]&&!(NaN<=r);)++r;r=la.decode(p.subarray?p.subarray(0,r):new Uint8Array(p.slice(0,r)));q(r);p.length=0}else p.push(q)}g+=m}G[d>>2]=g;return 0},a:C,s:function(){},u:function(a,b,c,d){return wb(a,b,c,d)}};(function(){function a(g){f.asm=g.exports;K=f.asm.E;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&M&&(g=M,M=null,g())}function b(g){a(g.instance)}function c(g){return Promise.resolve().then(Ia).then(function(h){return WebAssembly.instantiate(h,d)}).then(g,function(h){z("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Cb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(g){return z("Module.instantiateWasm callback failed with error: "+g),!1}(function(){return A||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var Ab=f.___wasm_call_ctors=function(){return(Ab=f.___wasm_call_ctors=f.asm.F).apply(null,arguments)},Bb=f._malloc=function(){return(Bb=f._malloc=f.asm.G).apply(null,arguments)},Z=f._free=function(){return(Z=f._free=f.asm.H).apply(null,arguments)},gb=f.___getTypeName=function(){return(gb=f.___getTypeName=f.asm.I).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.J).apply(null,arguments)};f.dynCall_viijii=function(){return(f.dynCall_viijii=f.asm.K).apply(null,arguments)};f.dynCall_iiji=function(){return(f.dynCall_iiji=f.asm.L).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.M).apply(null,arguments)};f.dynCall_iiiiiijj=function(){return(f.dynCall_iiiiiijj=f.asm.N).apply(null,arguments)};f.dynCall_iiiiij=function(){return(f.dynCall_iiiiij=f.asm.O).apply(null,arguments)};f.dynCall_iiiiijj=function(){return(f.dynCall_iiiiijj=f.asm.P).apply(null,arguments)};var Db;M=function Eb(){Db||Fb();Db||(M=Eb)};function Fb(){function a(){if(!Db&&(Db=!0,f.calledRun=!0,!ka)){O(Ba);O(Ca);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Da.unshift(b)}O(Da)}}if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();O(Aa);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=Fb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();Fb();return jxl_node_enc.ready}}();var jxlEncWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "jxl_node_enc-7da19149.wasm").href:new URL("jxl_node_enc-7da19149.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var jxl_node_dec=function(){return function(jxl_node_dec){jxl_node_dec=jxl_node_dec||{};var e;e||(e=typeof jxl_node_dec!=="undefined"?jxl_node_dec:{});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var ba="./this.program",ca="",da,ea,fa,ha;ca=__dirname+"/";da=function(a){fa||(fa=__nccwpck_require__(747));ha||(ha=__nccwpck_require__(622));a=ha.normalize(a);return fa.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",v);e.inspect=function(){return"[Emscripten Module object]"};var ia=e.print||console.log.bind(console),w=e.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;e.thisProgram&&(ba=e.thisProgram);var y;e.wasmBinary&&(y=e.wasmBinary);e.noExitRuntime&&e.noExitRuntime;"object"!==typeof WebAssembly&&v("no native wasm support detected");var z,ja=!1,ka=new TextDecoder("utf8");function la(a,b,c){var d=A;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ma=new TextDecoder("utf-16le");function na(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&C[c];)++c;return ma.decode(A.subarray(a,c<<1))}function oa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)D[b>>1]=a.charCodeAt(f),b+=2;D[b>>1]=0;return b-d}function pa(a){return 2*a.length}function qa(a,b){for(var c=0,d="";!(c>=b/4);){var f=E[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function ra(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}E[b>>2]=g;b+=4;if(b+4>c)break}E[b>>2]=0;return b-d}function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var F,G,A,D,C,E,I,ta,ua;function va(a){F=a;e.HEAP8=G=new Int8Array(a);e.HEAP16=D=new Int16Array(a);e.HEAP32=E=new Int32Array(a);e.HEAPU8=A=new Uint8Array(a);e.HEAPU16=C=new Uint16Array(a);e.HEAPU32=I=new Uint32Array(a);e.HEAPF32=ta=new Float32Array(a);e.HEAPF64=ua=new Float64Array(a)}var wa=e.INITIAL_MEMORY||16777216;e.wasmMemory?z=e.wasmMemory:z=new WebAssembly.Memory({initial:wa/65536,maximum:32768});z&&(F=z.buffer);wa=F.byteLength;va(F);var J,xa=[],ya=[],za=[],Aa=[];function Ba(){var a=e.preRun.shift();xa.unshift(a)}var K=0,M=null;e.preloadedImages={};e.preloadedAudios={};function v(a){if(e.onAbort)e.onAbort(a);w(a);ja=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a}function Da(){var a=N;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var N="jxl_node_dec.wasm";if(!Da()){var Ea=N;N=e.locateFile?e.locateFile(Ea,ca):ca+Ea}function Fa(){try{if(y)return new Uint8Array(y);if(ea)return ea(N);throw"both async and sync fetching of the wasm failed"}catch(a){v(a)}}function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.L;"number"===typeof c?void 0===b.I?J.get(c)():J.get(c)(b.I):c(void 0===b.I?null:b.I)}}}function Ga(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ha=void 0;function P(a){for(var b="";A[a];)b+=Ha[A[a++]];return b}var Q={},R={},S={};function Ia(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ja(a,b){a=Ia(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Ka(a){var b=Error,c=Ja(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var La=void 0;function T(a){throw new La(a)}var Ma=void 0;function Na(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Ma("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.M)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Oa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Pa(a){4<a&&0===--V[a].J&&(V[a]=void 0,Oa.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Oa.length?Oa.pop():V.length;V[b]={J:1,value:a};return b;}}function Qa(a){return this.fromWireType(I[a>>2])}function Ta(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Ua(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Va(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ja(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Wa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Xa(a,b){var c=e;if(void 0===c[a].G){var d=c[a];c[a]=function(){c[a].G.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].G+")!");return c[a].G[arguments.length].apply(this,arguments)};c[a].G=[];c[a].G[d.K]=d}}function Ya(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].G&&void 0!==e[a].G[c])&&T("Cannot register public name '"+a+"' twice"),Xa(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].G[c]=b):(e[a]=b,void 0!==c&&(e[a].O=c))}function Za(a,b){for(var c=[],d=0;d<a;d++)c.push(E[(b>>2)+d]);return c}function $a(a,b){0<=a.indexOf("j")||v("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=J.get(b).apply(null,c);return f}}function ab(a,b){a=P(a);var c=-1!=a.indexOf("j")?$a(a,b):J.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var bb=void 0;function cb(a){a=db(a);var b=P(a);X(a);return b}function eb(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new bb(a+": "+d.map(cb).join([", "]))}function fb(a,b,c){switch(b){case 0:return c?function(d){return G[d]}:function(d){return A[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return C[d>>1]};case 2:return c?function(d){return E[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var gb={};function hb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function ib(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+cb(a));return c}var jb={},kb={};function lb(){if(!mb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in kb)a[b]=kb[b];var c=[];for(b in a)c.push(b+"="+a[b]);mb=c}return mb}for(var mb,nb=[null,[],[]],ob=Array(256),Y=0;256>Y;++Y)ob[Y]=String.fromCharCode(Y);Ha=ob;La=e.BindingError=Ka("BindingError");Ma=e.InternalError=Ka("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};bb=e.UnboundTypeError=Ka("UnboundTypeError");ya.push({L:function(){pb()}});var rb={h:function(){},o:function(a,b,c,d,f){var g=Ga(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=G;else if(2===c)h=D;else if(4===c)h=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},H:null})},x:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Pa(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:Qa,H:null})},n:function(a,b,c){c=Ga(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError("Cannot convert \""+Ta(f)+"\" to "+this.name);return f},argPackAdvance:8,readValueFromPointer:Ua(b,c),H:null})},q:function(a,b,c,d,f,g){var l=Za(b,c);a=P(a);f=ab(d,f);Ya(a,function(){eb("Cannot call "+a+" due to unbound types",l)},b-1);Na(l,function(h){var k=[h[0],null].concat(h.slice(1)),m=h=a,n=f,p=k.length;2>p&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,B=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].H){B=!0;break}var Ra="void"!==k[0].name,H="",L="";for(q=0;q<p-2;++q)H+=(0!==q?", ":"")+"arg"+q,L+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Ia(m)+"("+H+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";B&&(m+="var destructors = [];\n");var Sa=B?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Wa,k[0],k[1]];x&&(m+="var thisWired = classParam.toWireType("+Sa+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Sa+", arg"+q+"); // "+k[q+2].name+"\n",H.push("argType"+q),n.push(k[q+2]);x&&(L="thisWired"+(0<L.length?", ":"")+L);m+=(Ra?"var rv = ":"")+"invoker(fn"+(0<L.length?", ":"")+L+");\n";if(B)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].H&&(m+=p+"_dtor("+p+"); // "+k[q].name+"\n",H.push(p+"_dtor"),n.push(k[q].H));Ra&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(m+"}\n");k=Va(H).apply(null,n);q=b-1;if(!e.hasOwnProperty(h))throw new Ma("Replacing nonexistant public symbol");void 0!==e[h].G&&void 0!==q?e[h].G[q]=k:(e[h]=k,e[h].K=q);return[]})},d:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var l=Ga(c);if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Ta(n)+"\" to "+this.name);if(n<d||n>f)throw new TypeError("Passing a number \""+Ta(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:fb(b,l,0!==d),H:null})},c:function(a,b,c){function d(g){g>>=2;var l=I;return new f(F,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{M:!0})},j:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=I[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;if(l==f||0==A[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&A[m];)++m;g=ka.decode(A.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(l=0;l<f;++l)n[l]=String.fromCharCode(A[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),h=qb(4+l+1);I[h>>2]=l;if(c&&g)la(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));A[h+4+g]=k}else for(g=0;g<l;++g)A[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Qa,H:function(d){X(d)}})},i:function(a,b,c){c=P(c);if(2===b){var d=na;var f=oa;var g=pa;var l=function(){return C};var h=1}else 4===b&&(d=qa,f=ra,g=sa,l=function(){return I},h=2);U(a,{name:c,fromWireType:function(k){for(var m=I[k>>2],n=l(),p,x=k+4,B=0;B<=m;++B){var q=k+4+B*b;if(B==m||0==n[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}X(k);return p},toWireType:function(k,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),p=qb(4+n+b);I[p>>2]=n>>h;f(m,p+4,n+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Qa,H:function(k){X(k)}})},p:function(a,b){b=P(b);U(a,{N:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},f:Pa,g:function(a){if(0===a)return W(hb());var b=gb[a];a=void 0===b?P(a):b;return W(hb()[a])},k:function(a){4<a&&(V[a].J+=1)},l:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=jb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n"))(ib,e,W);jb[b]=f}return f(a,c,d)},b:function(){v()},t:function(a,b,c){A.copyWithin(a,b,b+c)},e:function(a){a>>>=0;var b=A.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{z.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);va(z.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},u:function(a,b){var c=0;lb().forEach(function(d,f){var g=b+c;f=E[a+4*f>>2]=g;for(g=0;g<d.length;++g)G[f++>>0]=d.charCodeAt(g);G[f>>0]=0;c+=d.length+1});return 0},v:function(a,b){var c=lb();E[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});E[b>>2]=d;return 0},w:function(){return 0},r:function(){},m:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var l=E[b+8*g>>2],h=E[b+(8*g+4)>>2],k=0;k<h;k++){var m=A[l+k],n=nb[a];if(0===m||10===m){m=1===a?ia:w;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=ka.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=h}E[d>>2]=f;return 0},a:z,s:function(){}};(function(){function a(f){e.asm=f.exports;J=e.asm.y;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&M&&(f=M,M=null,f())}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Fa).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){w("failed to asynchronously prepare wasm: "+g);v(g)})}var d={a:rb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return w("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){w("wasm streaming compile failed: "+g);w("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();var pb=e.___wasm_call_ctors=function(){return(pb=e.___wasm_call_ctors=e.asm.z).apply(null,arguments)},qb=e._malloc=function(){return(qb=e._malloc=e.asm.A).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.B).apply(null,arguments)},db=e.___getTypeName=function(){return(db=e.___getTypeName=e.asm.C).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.D).apply(null,arguments)};e.dynCall_iiji=function(){return(e.dynCall_iiji=e.asm.E).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.F).apply(null,arguments)};var Z;M=function sb(){Z||tb();Z||(M=sb)};function tb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!ja)){O(ya);O(za);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Aa.unshift(b)}O(Aa)}}if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();O(xa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=tb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();tb();return jxl_node_dec.ready}}();var jxlDecWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "jxl_node_dec-ee420d36.wasm").href:new URL("jxl_node_dec-ee420d36.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var wp2_node_enc=function(){return function(wp2_node_enc){wp2_node_enc=wp2_node_enc||{};var f;f||(f=typeof wp2_node_enc!=="undefined"?wp2_node_enc:{});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in f)f.hasOwnProperty(t)&&(r[t]=f[t]);var ca="",da,ea,ha,ia;ca=__dirname+"/";da=function(a){ha||(ha=__nccwpck_require__(747));ia||(ia=__nccwpck_require__(622));a=ia.normalize(a);return ha.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",u);f.inspect=function(){return"[Emscripten Module object]"};var ja=f.print||console.log.bind(console),v=f.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(f[t]=r[t]);r=null;var w;f.wasmBinary&&(w=f.wasmBinary);f.noExitRuntime&&f.noExitRuntime;"object"!==typeof WebAssembly&&u("no native wasm support detected");var A,ka=!1,la=new TextDecoder("utf8");function B(a,b){if(!a)return"";b=a+b;for(var c=a;!(c>=b)&&C[c];)++c;return la.decode(C.subarray(a,c))}function ma(a,b,c){var d=C;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var na=new TextDecoder("utf-16le");function oa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&D[c];)++c;return na.decode(C.subarray(a,c<<1))}function pa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)E[b>>1]=a.charCodeAt(e),b+=2;E[b>>1]=0;return b-d}function qa(a){return 2*a.length}function ra(a,b){for(var c=0,d="";!(c>=b/4);){var e=G[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function sa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}G[b>>2]=g;b+=4;if(b+4>c)break}G[b>>2]=0;return b-d}function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var H,I,C,E,D,G,J,ua,va;function wa(a){H=a;f.HEAP8=I=new Int8Array(a);f.HEAP16=E=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=D=new Uint16Array(a);f.HEAPU32=J=new Uint32Array(a);f.HEAPF32=ua=new Float32Array(a);f.HEAPF64=va=new Float64Array(a)}var xa=f.INITIAL_MEMORY||16777216;f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:32768});A&&(H=A.buffer);xa=H.byteLength;wa(H);var K,ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=f.preRun.shift();ya.unshift(a)}var L=0,M=null;f.preloadedImages={};f.preloadedAudios={};function u(a){if(f.onAbort)f.onAbort(a);v(a);ka=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Ea(){var a=N;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var N="wp2_node_enc.wasm";if(!Ea()){var Fa=N;N=f.locateFile?f.locateFile(Fa,ca):ca+Fa}function Ga(){try{if(w)return new Uint8Array(w);if(ea)return ea(N);throw"both async and sync fetching of the wasm failed"}catch(a){u(a)}}function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.T;"number"===typeof c?void 0===b.M?K.get(c)():K.get(c)(b.M):c(void 0===b.M?null:b.M)}}}function Ha(a){this.L=a-16;this.fa=function(b){G[this.L+8>>2]=b};this.ba=function(b){G[this.L+0>>2]=b};this.da=function(){G[this.L+4>>2]=0};this.aa=function(){I[this.L+12>>0]=0};this.ea=function(){I[this.L+13>>0]=0};this.Y=function(b,c){this.fa(b);this.ba(c);this.da();this.aa();this.ea()}}var Q={};function Ia(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ja(a){return this.fromWireType(J[a>>2])}var R={},S={},Ka={};function La(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ma(a,b){a=La(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Na(a){var b=Error,c=Ma(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Oa=void 0;function Pa(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new Oa("Mismatched type converter count");for(var h=0;h<a.length;++h)U(a[h],k[h])}a.forEach(function(k){Ka[k]=b});var e=Array(b.length),g=[],l=0;b.forEach(function(k,h){S.hasOwnProperty(k)?e[h]=S[k]:(g.push(k),R.hasOwnProperty(k)||(R[k]=[]),R[k].push(function(){e[h]=S[k];++l;l===g.length&&d(e)}))});0===g.length&&d(e)}function Qa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ra=void 0;function V(a){for(var b="";C[a];)b+=Ra[C[a++]];return b}var Sa=void 0;function W(a){throw new Sa(a)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W("type \""+d+"\" must have a positive integer typeid pointer");if(S.hasOwnProperty(a)){if(c.X)return;W("Cannot register type '"+d+"' twice")}S[a]=b;delete Ka[a];R.hasOwnProperty(a)&&(b=R[a],delete R[a],b.forEach(function(e){e()}))}var Ta=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ua(a){4<a&&0===--X[a].N&&(X[a]=void 0,Ta.push(a))}function Va(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Ta.length?Ta.pop():X.length;X[b]={N:1,value:a};return b;}}function Wa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Xa(a,b){switch(b){case 2:return function(c){return this.fromWireType(ua[c>>2])};case 3:return function(c){return this.fromWireType(va[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ya(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ma(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Za(a,b){var c=f;if(void 0===c[a].J){var d=c[a];c[a]=function(){c[a].J.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].J+")!");return c[a].J[arguments.length].apply(this,arguments)};c[a].J=[];c[a].J[d.R]=d}}function $a(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].J&&void 0!==f[a].J[c])&&W("Cannot register public name '"+a+"' twice"),Za(a,a),f.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].J[c]=b):(f[a]=b,void 0!==c&&(f[a].ka=c))}function ab(a,b){for(var c=[],d=0;d<a;d++)c.push(G[(b>>2)+d]);return c}function bb(a,b){0<=a.indexOf("j")||u("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=K.get(b).apply(null,c);return e}}function Y(a,b){a=V(a);var c=-1!=a.indexOf("j")?bb(a,b):K.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var cb=void 0;function db(a){a=eb(a);var b=V(a);Z(a);return b}function fb(a,b){function c(g){e[g]||S[g]||(Ka[g]?Ka[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new cb(a+": "+d.map(db).join([", "]))}function gb(a,b,c){switch(b){case 0:return c?function(d){return I[d]}:function(d){return C[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return D[d>>1]};case 2:return c?function(d){return G[d>>2]}:function(d){return J[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var hb={};function ib(){return"object"===typeof globalThis?globalThis:Function("return this")()}function jb(a,b){var c=S[a];void 0===c&&W(b+" has unknown type "+db(a));return c}var kb={},lb=[null,[],[]];Oa=f.InternalError=Na("InternalError");for(var mb=Array(256),nb=0;256>nb;++nb)mb[nb]=String.fromCharCode(nb);Ra=mb;Sa=f.BindingError=Na("BindingError");f.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};cb=f.UnboundTypeError=Na("UnboundTypeError");za.push({T:function(){ob()}});var qb={q:function(a,b,c,d){u("Assertion failed: "+B(a)+", at: "+[b?B(b):"unknown filename",c,d?B(d):"unknown function"])},z:function(a){return pb(a+16)+16},B:function(){},y:function(a,b,c){new Ha(a).Y(b,c);throw a},n:function(a){var b=Q[a];delete Q[a];var c=b.Z,d=b.$,e=b.O,g=e.map(function(l){return l.W}).concat(e.map(function(l){return l.ha}));Pa([a],g,function(l){var k={};e.forEach(function(h,m){var n=l[m],p=h.U,x=h.V,y=l[m+e.length],q=h.ga,fa=h.ia;k[h.S]={read:function(z){return n.fromWireType(p(x,z))},write:function(z,F){var T=[];q(fa,z,y.toWireType(T,F));Ia(T)}}});return[{name:b.name,fromWireType:function(h){var m={},n;for(n in k)m[n]=k[n].read(h);d(h);return m},toWireType:function(h,m){for(var n in k)if(!(n in m))throw new TypeError("Missing field:  \""+n+"\"");var p=c();for(n in k)k[n].write(p,m[n]);null!==h&&h.push(d,p);return p},argPackAdvance:8,readValueFromPointer:Ja,K:d}]})},w:function(a,b,c,d,e){var g=Qa(c);b=V(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var k=I;else if(2===c)k=E;else if(4===c)k=G;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>g])},K:null})},v:function(a,b){b=V(b);U(a,{name:b,fromWireType:function(c){var d=X[c].value;Ua(c);return d},toWireType:function(c,d){return Va(d)},argPackAdvance:8,readValueFromPointer:Ja,K:null})},j:function(a,b,c){c=Qa(c);b=V(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError("Cannot convert \""+Wa(e)+"\" to "+this.name);return e},argPackAdvance:8,readValueFromPointer:Xa(b,c),K:null})},m:function(a,b,c,d,e,g){var l=ab(b,c);a=V(a);e=Y(d,e);$a(a,function(){fb("Cannot call "+a+" due to unbound types",l)},b-1);Pa([],l,function(k){var h=[k[0],null].concat(k.slice(1)),m=k=a,n=e,p=h.length;2>p&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==h[1]&&!1,y=!1,q=1;q<h.length;++q)if(null!==h[q]&&void 0===h[q].K){y=!0;break}var fa="void"!==h[0].name,z="",F="";for(q=0;q<p-2;++q)z+=(0!==q?", ":"")+"arg"+q,F+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+La(m)+"("+z+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";y&&(m+="var destructors = [];\n");var T=y?"destructors":"null";z="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[W,n,g,Ia,h[0],h[1]];x&&(m+="var thisWired = classParam.toWireType("+T+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+T+", arg"+q+"); // "+h[q+2].name+"\n",z.push("argType"+q),n.push(h[q+2]);x&&(F="thisWired"+(0<F.length?", ":"")+F);m+=(fa?"var rv = ":"")+"invoker(fn"+(0<F.length?", ":"")+F+");\n";if(y)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<h.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==h[q].K&&(m+=p+"_dtor("+p+"); // "+h[q].name+"\n",z.push(p+"_dtor"),n.push(h[q].K));fa&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");z.push(m+"}\n");h=Ya(z).apply(null,n);q=b-1;if(!f.hasOwnProperty(k))throw new Oa("Replacing nonexistant public symbol");void 0!==f[k].J&&void 0!==q?f[k].J[q]=h:(f[k]=h,f[k].R=q);return[]})},d:function(a,b,c,d,e){function g(m){return m}b=V(b);-1===e&&(e=4294967295);var l=Qa(c);if(0===d){var k=32-8*c;g=function(m){return m<<k>>>k}}var h=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Wa(n)+"\" to "+this.name);if(n<d||n>e)throw new TypeError("Passing a number \""+Wa(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+e+"]!");return h?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:gb(b,l,0!==d),K:null})},b:function(a,b,c){function d(g){g>>=2;var l=J;return new e(H,l[g+1],l[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=V(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{X:!0})},k:function(a,b){b=V(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var e=J[d>>2];if(c)for(var g=d+4,l=0;l<=e;++l){var k=d+4+l;if(l==e||0==C[k]){g=B(g,k-g);if(void 0===h)var h=g;else h+=String.fromCharCode(0),h+=g;g=k+1}}else{h=Array(e);for(l=0;l<e;++l)h[l]=String.fromCharCode(C[d+4+l]);h=h.join("")}Z(d);return h},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||W("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<e.length;++n){var p=e.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|e.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return e.length})(),k=pb(4+l+1);J[k>>2]=l;if(c&&g)ma(e,k+4,l+1);else if(g)for(g=0;g<l;++g){var h=e.charCodeAt(g);255<h&&(Z(k),W("String has UTF-16 code units that do not fit in 8 bits"));C[k+4+g]=h}else for(g=0;g<l;++g)C[k+4+g]=e[g];null!==d&&d.push(Z,k);return k},argPackAdvance:8,readValueFromPointer:Ja,K:function(d){Z(d)}})},f:function(a,b,c){c=V(c);if(2===b){var d=oa;var e=pa;var g=qa;var l=function(){return D};var k=1}else 4===b&&(d=ra,e=sa,g=ta,l=function(){return J},k=2);U(a,{name:c,fromWireType:function(h){for(var m=J[h>>2],n=l(),p,x=h+4,y=0;y<=m;++y){var q=h+4+y*b;if(y==m||0==n[q>>k])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}Z(h);return p},toWireType:function(h,m){"string"!==typeof m&&W("Cannot pass non-string to C++ string type "+c);var n=g(m),p=pb(4+n+b);J[p>>2]=n>>k;e(m,p+4,n+b);null!==h&&h.push(Z,p);return p},argPackAdvance:8,readValueFromPointer:Ja,K:function(h){Z(h)}})},o:function(a,b,c,d,e,g){Q[a]={name:V(b),Z:Y(c,d),$:Y(e,g),O:[]}},c:function(a,b,c,d,e,g,l,k,h,m){Q[a].O.push({S:V(b),W:c,U:Y(d,e),V:g,ha:l,ga:Y(k,h),ia:m})},x:function(a,b){b=V(b);U(a,{ja:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},i:Ua,A:function(a){if(0===a)return Va(ib());var b=hb[a];a=void 0===b?V(a):b;return Va(ib()[a])},l:function(a){4<a&&(X[a].N+=1)},p:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=X[a].value;var e=kb[b];if(!e){e="";for(var g=0;g<b;++g)e+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";e=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n"))(jb,f,Va);kb[b]=e}return e(a,c,d)},g:function(){u()},t:function(a,b,c){C.copyWithin(a,b,b+c)},e:function(a){a>>>=0;var b=C.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-H.byteLength+65535>>>16);wa(A.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},u:function(){return 0},r:function(){},h:function(a,b,c,d){for(var e=0,g=0;g<c;g++){for(var l=G[b+8*g>>2],k=G[b+(8*g+4)>>2],h=0;h<k;h++){var m=C[l+h],n=lb[a];if(0===m||10===m){m=1===a?ja:v;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=la.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}e+=k}G[d>>2]=e;return 0},a:A,s:function(){}};(function(){function a(e){f.asm=e.exports;K=f.asm.C;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&M&&(e=M,M=null,e())}function b(e){a(e.instance)}function c(e){return Promise.resolve().then(Ga).then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){v("failed to asynchronously prepare wasm: "+g);u(g)})}var d={a:qb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){v("wasm streaming compile failed: "+g);v("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var ob=f.___wasm_call_ctors=function(){return(ob=f.___wasm_call_ctors=f.asm.D).apply(null,arguments)},Z=f._free=function(){return(Z=f._free=f.asm.E).apply(null,arguments)},pb=f._malloc=function(){return(pb=f._malloc=f.asm.F).apply(null,arguments)},eb=f.___getTypeName=function(){return(eb=f.___getTypeName=f.asm.G).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.H).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.I).apply(null,arguments)};var rb;M=function sb(){rb||tb();rb||(M=sb)};function tb(){function a(){if(!rb&&(rb=!0,f.calledRun=!0,!ka)){O(za);O(Aa);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Ba.unshift(b)}O(Ba)}}if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ca();O(ya);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();tb();return wp2_node_enc.ready}}();var wp2EncWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "wp2_node_enc-975cb8fc.wasm").href:new URL("wp2_node_enc-975cb8fc.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var wp2_node_dec=function(){return function(wp2_node_dec){wp2_node_dec=wp2_node_dec||{};var e;e||(e=typeof wp2_node_dec!=="undefined"?wp2_node_dec:{});var aa,ba;e.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);var ca="",da,ea,fa,ha;ca=__dirname+"/";da=function(a){fa||(fa=__nccwpck_require__(747));ha||(ha=__nccwpck_require__(622));a=ha.normalize(a);return fa.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",u);e.inspect=function(){return"[Emscripten Module object]"};var ia=e.print||console.log.bind(console),v=e.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);r=null;var w;e.wasmBinary&&(w=e.wasmBinary);e.noExitRuntime&&e.noExitRuntime;"object"!==typeof WebAssembly&&u("no native wasm support detected");var y,ja=!1,ka=new TextDecoder("utf8");function la(a,b,c){var d=z;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ma=new TextDecoder("utf-16le");function na(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&A[c];)++c;return ma.decode(z.subarray(a,c<<1))}function oa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)C[b>>1]=a.charCodeAt(f),b+=2;C[b>>1]=0;return b-d}function pa(a){return 2*a.length}function qa(a,b){for(var c=0,d="";!(c>=b/4);){var f=D[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function ra(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}D[b>>2]=g;b+=4;if(b+4>c)break}D[b>>2]=0;return b-d}function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var E,F,z,C,A,D,G,ta,ua;function va(a){E=a;e.HEAP8=F=new Int8Array(a);e.HEAP16=C=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=z=new Uint8Array(a);e.HEAPU16=A=new Uint16Array(a);e.HEAPU32=G=new Uint32Array(a);e.HEAPF32=ta=new Float32Array(a);e.HEAPF64=ua=new Float64Array(a)}var wa=e.INITIAL_MEMORY||16777216;e.wasmMemory?y=e.wasmMemory:y=new WebAssembly.Memory({initial:wa/65536,maximum:32768});y&&(E=y.buffer);wa=E.byteLength;va(E);var I,xa=[],ya=[],za=[],Aa=[];function Ba(){var a=e.preRun.shift();xa.unshift(a)}var J=0,K=null;e.preloadedImages={};e.preloadedAudios={};function u(a){if(e.onAbort)e.onAbort(a);v(a);ja=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a}function Da(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="wp2_node_dec.wasm";if(!Da()){var Ea=M;M=e.locateFile?e.locateFile(Ea,ca):ca+Ea}function Fa(){try{if(w)return new Uint8Array(w);if(ea)return ea(M);throw"both async and sync fetching of the wasm failed"}catch(a){u(a)}}function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.L;"number"===typeof c?void 0===b.H?I.get(c)():I.get(c)(b.H):c(void 0===b.H?null:b.H)}}}function Ga(a){this.G=a-16;this.T=function(b){D[this.G+8>>2]=b};this.P=function(b){D[this.G+0>>2]=b};this.R=function(){D[this.G+4>>2]=0};this.O=function(){F[this.G+12>>0]=0};this.S=function(){F[this.G+13>>0]=0};this.N=function(b,c){this.T(b);this.P(c);this.R();this.O();this.S()}}function Ha(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ia=void 0;function P(a){for(var b="";z[a];)b+=Ia[z[a++]];return b}var Q={},R={},S={};function Ja(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ka(a,b){a=Ja(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function La(a){var b=Error,c=Ka(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ma=void 0;function T(a){throw new Ma(a)}var Na=void 0;function Qa(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Na("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.M)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Ra=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Sa(a){4<a&&0===--V[a].I&&(V[a]=void 0,Ra.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Ra.length?Ra.pop():V.length;V[b]={I:1,value:a};return b;}}function Ta(a){return this.fromWireType(G[a>>2])}function Ua(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Va(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Wa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ka(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Xa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ya(a,b){var c=e;if(void 0===c[a].D){var d=c[a];c[a]=function(){c[a].D.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].D+")!");return c[a].D[arguments.length].apply(this,arguments)};c[a].D=[];c[a].D[d.K]=d}}function Za(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].D&&void 0!==e[a].D[c])&&T("Cannot register public name '"+a+"' twice"),Ya(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].D[c]=b):(e[a]=b,void 0!==c&&(e[a].V=c))}function $a(a,b){for(var c=[],d=0;d<a;d++)c.push(D[(b>>2)+d]);return c}function ab(a,b){0<=a.indexOf("j")||u("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=I.get(b).apply(null,c);return f}}function bb(a,b){a=P(a);var c=-1!=a.indexOf("j")?ab(a,b):I.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var cb=void 0;function db(a){a=eb(a);var b=P(a);X(a);return b}function fb(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new cb(a+": "+d.map(db).join([", "]))}function gb(a,b,c){switch(b){case 0:return c?function(d){return F[d]}:function(d){return z[d]};case 1:return c?function(d){return C[d>>1]}:function(d){return A[d>>1]};case 2:return c?function(d){return D[d>>2]}:function(d){return G[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var hb={};function ib(){return"object"===typeof globalThis?globalThis:Function("return this")()}function jb(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+db(a));return c}for(var kb={},lb=[null,[],[]],mb=Array(256),Y=0;256>Y;++Y)mb[Y]=String.fromCharCode(Y);Ia=mb;Ma=e.BindingError=La("BindingError");Na=e.InternalError=La("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};cb=e.UnboundTypeError=La("UnboundTypeError");ya.push({L:function(){nb()}});var ob={r:function(a){return Z(a+16)+16},g:function(){},q:function(a,b,c){new Ga(a).N(b,c);throw a},o:function(a,b,c,d,f){var g=Ha(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=F;else if(2===c)h=C;else if(4===c)h=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},F:null})},v:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Sa(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:Ta,F:null})},m:function(a,b,c){c=Ha(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError("Cannot convert \""+Ua(f)+"\" to "+this.name);return f},argPackAdvance:8,readValueFromPointer:Va(b,c),F:null})},s:function(a,b,c,d,f,g){var l=$a(b,c);a=P(a);f=bb(d,f);Za(a,function(){fb("Cannot call "+a+" due to unbound types",l)},b-1);Qa(l,function(h){var k=[h[0],null].concat(h.slice(1)),m=h=a,n=f,p=k.length;2>p&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,B=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].F){B=!0;break}var Oa="void"!==k[0].name,H="",L="";for(q=0;q<p-2;++q)H+=(0!==q?", ":"")+"arg"+q,L+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Ja(m)+"("+H+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";B&&(m+="var destructors = [];\n");var Pa=B?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Xa,k[0],k[1]];x&&(m+="var thisWired = classParam.toWireType("+Pa+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Pa+", arg"+q+"); // "+k[q+2].name+"\n",H.push("argType"+q),n.push(k[q+2]);x&&(L="thisWired"+(0<L.length?", ":"")+L);m+=(Oa?"var rv = ":"")+"invoker(fn"+(0<L.length?", ":"")+L+");\n";if(B)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].F&&(m+=p+"_dtor("+p+"); // "+k[q].name+"\n",H.push(p+"_dtor"),n.push(k[q].F));Oa&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(m+"}\n");k=Wa(H).apply(null,n);q=b-1;if(!e.hasOwnProperty(h))throw new Na("Replacing nonexistant public symbol");void 0!==e[h].D&&void 0!==q?e[h].D[q]=k:(e[h]=k,e[h].K=q);return[]})},c:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var l=Ha(c);if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Ua(n)+"\" to "+this.name);if(n<d||n>f)throw new TypeError("Passing a number \""+Ua(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:gb(b,l,0!==d),F:null})},b:function(a,b,c){function d(g){g>>=2;var l=G;return new f(E,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{M:!0})},n:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=G[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;if(l==f||0==z[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&z[m];)++m;g=ka.decode(z.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(l=0;l<f;++l)n[l]=String.fromCharCode(z[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),h=Z(4+l+1);G[h>>2]=l;if(c&&g)la(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));z[h+4+g]=k}else for(g=0;g<l;++g)z[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Ta,F:function(d){X(d)}})},h:function(a,b,c){c=P(c);if(2===b){var d=na;var f=oa;var g=pa;var l=function(){return A};var h=1}else 4===b&&(d=qa,f=ra,g=sa,l=function(){return G},h=2);U(a,{name:c,fromWireType:function(k){for(var m=G[k>>2],n=l(),p,x=k+4,B=0;B<=m;++B){var q=k+4+B*b;if(B==m||0==n[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}X(k);return p},toWireType:function(k,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),p=Z(4+n+b);G[p>>2]=n>>h;f(m,p+4,n+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Ta,F:function(k){X(k)}})},p:function(a,b){b=P(b);U(a,{U:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},e:Sa,f:function(a){if(0===a)return W(ib());var b=hb[a];a=void 0===b?P(a):b;return W(ib()[a])},i:function(a){4<a&&(V[a].I+=1)},j:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=kb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n"))(jb,e,W);kb[b]=f}return f(a,c,d)},k:function(){u()},u:function(a,b,c){z.copyWithin(a,b,b+c)},d:function(a){a>>>=0;var b=z.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{y.grow(Math.min(2147483648,d)-E.byteLength+65535>>>16);va(y.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},l:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var l=D[b+8*g>>2],h=D[b+(8*g+4)>>2],k=0;k<h;k++){var m=z[l+k],n=lb[a];if(0===m||10===m){m=1===a?ia:v;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=ka.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=h}D[d>>2]=f;return 0},a:y,t:function(){}};(function(){function a(f){e.asm=f.exports;I=e.asm.w;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&K&&(f=K,K=null,f())}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Fa).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){v("failed to asynchronously prepare wasm: "+g);u(g)})}var d={a:ob};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return v("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){v("wasm streaming compile failed: "+g);v("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();var nb=e.___wasm_call_ctors=function(){return(nb=e.___wasm_call_ctors=e.asm.x).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.y).apply(null,arguments)},Z=e._malloc=function(){return(Z=e._malloc=e.asm.z).apply(null,arguments)},eb=e.___getTypeName=function(){return(eb=e.___getTypeName=e.asm.A).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.B).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.C).apply(null,arguments)};var pb;K=function qb(){pb||rb();pb||(K=qb)};function rb(){function a(){if(!pb&&(pb=!0,e.calledRun=!0,!ja)){N(ya);N(za);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Aa.unshift(b)}N(Aa)}}if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();N(xa);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();rb();return wp2_node_dec.ready}}();var wp2DecWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "wp2_node_dec-6120e1d9.wasm").href:new URL("wp2_node_dec-6120e1d9.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;let wasm$2;let cachedTextDecoder$1=new TextDecoder("utf-8",{ignoreBOM:true,fatal:true});cachedTextDecoder$1.decode();let cachegetUint8Memory0$2=null;function getUint8Memory0$2(){if(cachegetUint8Memory0$2===null||cachegetUint8Memory0$2.buffer!==wasm$2.memory.buffer){cachegetUint8Memory0$2=new Uint8Array(wasm$2.memory.buffer)}return cachegetUint8Memory0$2}function getStringFromWasm0$1(ptr,len){return cachedTextDecoder$1.decode(getUint8Memory0$2().subarray(ptr,ptr+len))}let cachegetUint8ClampedMemory0=null;function getUint8ClampedMemory0(){if(cachegetUint8ClampedMemory0===null||cachegetUint8ClampedMemory0.buffer!==wasm$2.memory.buffer){cachegetUint8ClampedMemory0=new Uint8ClampedArray(wasm$2.memory.buffer)}return cachegetUint8ClampedMemory0}function getClampedArrayU8FromWasm0(ptr,len){return getUint8ClampedMemory0().subarray(ptr/1,ptr/1+len)}const heap=new Array(32).fill(undefined);heap.push(undefined,null,true,false);let heap_next=heap.length;function addHeapObject(obj){if(heap_next===heap.length)heap.push(heap.length+1);const idx=heap_next;heap_next=heap[idx];heap[idx]=obj;return idx}let WASM_VECTOR_LEN$2=0;function passArray8ToWasm0$2(arg,malloc){const ptr=malloc(arg.length*1);getUint8Memory0$2().set(arg,ptr/1);WASM_VECTOR_LEN$2=arg.length;return ptr}let cachegetInt32Memory0$2=null;function getInt32Memory0$2(){if(cachegetInt32Memory0$2===null||cachegetInt32Memory0$2.buffer!==wasm$2.memory.buffer){cachegetInt32Memory0$2=new Int32Array(wasm$2.memory.buffer)}return cachegetInt32Memory0$2}function getArrayU8FromWasm0$2(ptr,len){return getUint8Memory0$2().subarray(ptr/1,ptr/1+len)}/**
* @param {Uint8Array} data
* @param {number} width
* @param {number} height
* @returns {Uint8Array}
*/function encode(data,width,height){try{const retptr=wasm$2.__wbindgen_export_1.value-16;wasm$2.__wbindgen_export_1.value=retptr;var ptr0=passArray8ToWasm0$2(data,wasm$2.__wbindgen_malloc);var len0=WASM_VECTOR_LEN$2;wasm$2.encode(retptr,ptr0,len0,width,height);var r0=getInt32Memory0$2()[retptr/4+0];var r1=getInt32Memory0$2()[retptr/4+1];var v1=getArrayU8FromWasm0$2(r0,r1).slice();wasm$2.__wbindgen_free(r0,r1*1);return v1}finally{wasm$2.__wbindgen_export_1.value+=16}}function getObject(idx){return heap[idx]}function dropObject(idx){if(idx<36)return;heap[idx]=heap_next;heap_next=idx}function takeObject(idx){const ret=getObject(idx);dropObject(idx);return ret}/**
* @param {Uint8Array} data
* @returns {ImageData}
*/function decode(data){var ptr0=passArray8ToWasm0$2(data,wasm$2.__wbindgen_malloc);var len0=WASM_VECTOR_LEN$2;var ret=wasm$2.decode(ptr0,len0);return takeObject(ret)}async function load$2(module,imports){if(typeof Response==="function"&&module instanceof Response){if(typeof WebAssembly.instantiateStreaming==="function"){try{return await WebAssembly.instantiateStreaming(module,imports)}catch(e){if(module.headers.get("Content-Type")!="application/wasm"){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}else{throw e}}}const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports)}else{const instance=await WebAssembly.instantiate(module,imports);if(instance instanceof WebAssembly.Instance){return{instance,module}}else{return instance}}}async function init$2(input){if(typeof input==="undefined"){input=(typeof document==="undefined"?new(__nccwpck_require__(835).URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("index.js",document.baseURI).href).replace(/\.js$/,"_bg.wasm")}const imports={};imports.wbg={};imports.wbg.__wbg_newwithownedu8clampedarrayandsh_787b2db8ea6bfd62=function(arg0,arg1,arg2,arg3){var v0=getClampedArrayU8FromWasm0(arg0,arg1).slice();wasm$2.__wbindgen_free(arg0,arg1*1);var ret=new ImageData(v0,arg2>>>0,arg3>>>0);return addHeapObject(ret)};imports.wbg.__wbindgen_throw=function(arg0,arg1){throw new Error(getStringFromWasm0$1(arg0,arg1))};if(typeof input==="string"||typeof Request==="function"&&input instanceof Request||typeof URL==="function"&&input instanceof URL){input=fetch(input)}const{instance,module}=await load$2(await input,imports);wasm$2=instance.exports;init$2.__wbindgen_wasm_module=module;return wasm$2}var pngEncDecWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "squoosh_png_bg-29e36628.wasm").href:new URL("squoosh_png_bg-29e36628.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;let wasm$1;let cachedTextDecoder=new TextDecoder("utf-8",{ignoreBOM:true,fatal:true});cachedTextDecoder.decode();let cachegetUint8Memory0$1=null;function getUint8Memory0$1(){if(cachegetUint8Memory0$1===null||cachegetUint8Memory0$1.buffer!==wasm$1.memory.buffer){cachegetUint8Memory0$1=new Uint8Array(wasm$1.memory.buffer)}return cachegetUint8Memory0$1}function getStringFromWasm0(ptr,len){return cachedTextDecoder.decode(getUint8Memory0$1().subarray(ptr,ptr+len))}let WASM_VECTOR_LEN$1=0;function passArray8ToWasm0$1(arg,malloc){const ptr=malloc(arg.length*1);getUint8Memory0$1().set(arg,ptr/1);WASM_VECTOR_LEN$1=arg.length;return ptr}let cachegetInt32Memory0$1=null;function getInt32Memory0$1(){if(cachegetInt32Memory0$1===null||cachegetInt32Memory0$1.buffer!==wasm$1.memory.buffer){cachegetInt32Memory0$1=new Int32Array(wasm$1.memory.buffer)}return cachegetInt32Memory0$1}function getArrayU8FromWasm0$1(ptr,len){return getUint8Memory0$1().subarray(ptr/1,ptr/1+len)}/**
* @param {Uint8Array} data
* @param {number} level
* @param {boolean} interlace
* @returns {Uint8Array}
*/function optimise(data,level,interlace){try{const retptr=wasm$1.__wbindgen_add_to_stack_pointer(-16);var ptr0=passArray8ToWasm0$1(data,wasm$1.__wbindgen_malloc);var len0=WASM_VECTOR_LEN$1;wasm$1.optimise(retptr,ptr0,len0,level,interlace);var r0=getInt32Memory0$1()[retptr/4+0];var r1=getInt32Memory0$1()[retptr/4+1];var v1=getArrayU8FromWasm0$1(r0,r1).slice();wasm$1.__wbindgen_free(r0,r1*1);return v1}finally{wasm$1.__wbindgen_add_to_stack_pointer(16)}}async function load$1(module,imports){if(typeof Response==="function"&&module instanceof Response){if(typeof WebAssembly.instantiateStreaming==="function"){try{return await WebAssembly.instantiateStreaming(module,imports)}catch(e){if(module.headers.get("Content-Type")!="application/wasm"){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}else{throw e}}}const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports)}else{const instance=await WebAssembly.instantiate(module,imports);if(instance instanceof WebAssembly.Instance){return{instance,module}}else{return instance}}}async function init$1(input){if(typeof input==="undefined"){input=new URL("squoosh_oxipng_bg.wasm",typeof document==="undefined"?new(__nccwpck_require__(835).URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("index.js",document.baseURI).href)}const imports={};imports.wbg={};imports.wbg.__wbindgen_throw=function(arg0,arg1){throw new Error(getStringFromWasm0(arg0,arg1))};if(typeof input==="string"||typeof Request==="function"&&input instanceof Request||typeof URL==="function"&&input instanceof URL){input=fetch(input)}const{instance,module}=await load$1(await input,imports);wasm$1=instance.exports;init$1.__wbindgen_wasm_module=module;return wasm$1}var oxipngWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "squoosh_oxipng_bg-0069d4f6.wasm").href:new URL("squoosh_oxipng_bg-0069d4f6.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;let wasm;let cachegetUint8Memory0=null;function getUint8Memory0(){if(cachegetUint8Memory0===null||cachegetUint8Memory0.buffer!==wasm.memory.buffer){cachegetUint8Memory0=new Uint8Array(wasm.memory.buffer)}return cachegetUint8Memory0}let WASM_VECTOR_LEN=0;function passArray8ToWasm0(arg,malloc){const ptr=malloc(arg.length*1);getUint8Memory0().set(arg,ptr/1);WASM_VECTOR_LEN=arg.length;return ptr}let cachegetInt32Memory0=null;function getInt32Memory0(){if(cachegetInt32Memory0===null||cachegetInt32Memory0.buffer!==wasm.memory.buffer){cachegetInt32Memory0=new Int32Array(wasm.memory.buffer)}return cachegetInt32Memory0}function getArrayU8FromWasm0(ptr,len){return getUint8Memory0().subarray(ptr/1,ptr/1+len)}/**
* @param {Uint8Array} input_image
* @param {number} input_width
* @param {number} input_height
* @param {number} output_width
* @param {number} output_height
* @param {number} typ_idx
* @param {boolean} premultiply
* @param {boolean} color_space_conversion
* @returns {Uint8Array}
*/function resize(input_image,input_width,input_height,output_width,output_height,typ_idx,premultiply,color_space_conversion){var ptr0=passArray8ToWasm0(input_image,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.resize(8,ptr0,len0,input_width,input_height,output_width,output_height,typ_idx,premultiply,color_space_conversion);var r0=getInt32Memory0()[8/4+0];var r1=getInt32Memory0()[8/4+1];var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1}async function load(module,imports){if(typeof Response==="function"&&module instanceof Response){if(typeof WebAssembly.instantiateStreaming==="function"){try{return await WebAssembly.instantiateStreaming(module,imports)}catch(e){if(module.headers.get("Content-Type")!="application/wasm"){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}else{throw e}}}const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports)}else{const instance=await WebAssembly.instantiate(module,imports);if(instance instanceof WebAssembly.Instance){return{instance,module}}else{return instance}}}async function init(input){if(typeof input==="undefined"){input=(typeof document==="undefined"?new(__nccwpck_require__(835).URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("index.js",document.baseURI).href).replace(/\.js$/,"_bg.wasm")}const imports={};if(typeof input==="string"||typeof Request==="function"&&input instanceof Request||typeof URL==="function"&&input instanceof URL){input=fetch(input)}const{instance,module}=await load(await input,imports);wasm=instance.exports;init.__wbindgen_wasm_module=module;return wasm}var resizeWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "squoosh_resize_bg-74a0d71f.wasm").href:new URL("squoosh_resize_bg-74a0d71f.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var rotateWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "rotate-e8fb6784.wasm").href:new URL("rotate-e8fb6784.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;var Module=function(){return function(Module){Module=Module||{};var e;e||(e=typeof Module!=="undefined"?Module:{});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var v="",ba,ca,da,ea;v=__dirname+"/";ba=function(a){da||(da=__nccwpck_require__(747));ea||(ea=__nccwpck_require__(622));a=ea.normalize(a);return da.readFileSync(a,null)};ca=function(a){a=ba(a);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a});process.on("unhandledRejection",w);e.inspect=function(){return"[Emscripten Module object]"};var fa=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;var z;e.wasmBinary&&(z=e.wasmBinary);e.noExitRuntime&&e.noExitRuntime;"object"!==typeof WebAssembly&&w("no native wasm support detected");var A,ha=!1,ia=new TextDecoder("utf8");function ja(a,b,c){var d=C;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ka=new TextDecoder("utf-16le");function la(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&D[c];)++c;return ka.decode(C.subarray(a,c<<1))}function ma(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)E[b>>1]=a.charCodeAt(f),b+=2;E[b>>1]=0;return b-d}function na(a){return 2*a.length}function oa(a,b){for(var c=0,d="";!(c>=b/4);){var f=F[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function pa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}F[b>>2]=g;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var G,ra,C,E,D,F,I,sa,ta;function ua(a){G=a;e.HEAP8=ra=new Int8Array(a);e.HEAP16=E=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=D=new Uint16Array(a);e.HEAPU32=I=new Uint32Array(a);e.HEAPF32=sa=new Float32Array(a);e.HEAPF64=ta=new Float64Array(a)}var va=e.INITIAL_MEMORY||16777216;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:va/65536,maximum:32768});A&&(G=A.buffer);va=G.byteLength;ua(G);var J,wa=[],xa=[],ya=[],za=[];function Aa(){var a=e.preRun.shift();wa.unshift(a)}var K=0,M=null;e.preloadedImages={};e.preloadedAudios={};function w(a){if(e.onAbort)e.onAbort(a);y(a);ha=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a}function Ca(){var a=N;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var N="imagequant_node.wasm";if(!Ca()){var Da=N;N=e.locateFile?e.locateFile(Da,v):v+Da}function Ea(){try{if(z)return new Uint8Array(z);if(ca)return ca(N);throw"both async and sync fetching of the wasm failed"}catch(a){w(a)}}function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.J;"number"===typeof c?void 0===b.G?J.get(c)():J.get(c)(b.G):c(void 0===b.G?null:b.G)}}}function Fa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ga=void 0;function P(a){for(var b="";C[a];)b+=Ga[C[a++]];return b}var Q={},R={},S={};function Ha(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ia(a,b){a=Ha(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function Ja(a){var b=Error,c=Ia(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ka=void 0;function T(a){throw new Ka(a)}var La=void 0;function Ma(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new La("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T("type \""+d+"\" must have a positive integer typeid pointer");if(R.hasOwnProperty(a)){if(c.K)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Pa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Qa(a){4<a&&0===--V[a].H&&(V[a]=void 0,Pa.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Pa.length?Pa.pop():V.length;V[b]={H:1,value:a};return b;}}function Ra(a){return this.fromWireType(I[a>>2])}function Sa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Ta(a,b){switch(b){case 2:return function(c){return this.fromWireType(sa[c>>2])};case 3:return function(c){return this.fromWireType(ta[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ua(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ia(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Va(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Wa(a,b){var c=e;if(void 0===c[a].D){var d=c[a];c[a]=function(){c[a].D.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].D+")!");return c[a].D[arguments.length].apply(this,arguments)};c[a].D=[];c[a].D[d.I]=d}}function Xa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].D&&void 0!==e[a].D[c])&&T("Cannot register public name '"+a+"' twice"),Wa(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].D[c]=b):(e[a]=b,void 0!==c&&(e[a].M=c))}function Ya(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}function Za(a,b){0<=a.indexOf("j")||w("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=J.get(b).apply(null,c);return f}}function $a(a,b){a=P(a);var c=-1!=a.indexOf("j")?Za(a,b):J.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var ab=void 0;function bb(a){a=cb(a);var b=P(a);X(a);return b}function db(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new ab(a+": "+d.map(bb).join([", "]))}function eb(a,b,c){switch(b){case 0:return c?function(d){return ra[d]}:function(d){return C[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return D[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var fb={};function gb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function hb(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+bb(a));return c}for(var ib={},jb=[null,[],[]],kb=Array(256),Y=0;256>Y;++Y)kb[Y]=String.fromCharCode(Y);Ga=kb;Ka=e.BindingError=Ja("BindingError");La=e.InternalError=Ja("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};ab=e.UnboundTypeError=Ja("UnboundTypeError");xa.push({J:function(){lb()}});var nb={o:function(){},p:function(a,b,c,d,f){var g=Fa(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=ra;else if(2===c)h=E;else if(4===c)h=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},F:null})},v:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Qa(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:Ra,F:null})},n:function(a,b,c){c=Fa(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError("Cannot convert \""+Sa(f)+"\" to "+this.name);return f},argPackAdvance:8,readValueFromPointer:Ta(b,c),F:null})},e:function(a,b,c,d,f,g){var l=Ya(b,c);a=P(a);f=$a(d,f);Xa(a,function(){db("Cannot call "+a+" due to unbound types",l)},b-1);Ma(l,function(h){var k=[h[0],null].concat(h.slice(1)),m=h=a,n=f,p=k.length;2>p&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,B=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].F){B=!0;break}var Na="void"!==k[0].name,H="",L="";for(q=0;q<p-2;++q)H+=(0!==q?", ":"")+"arg"+q,L+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Ha(m)+"("+H+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";B&&(m+="var destructors = [];\n");var Oa=B?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Va,k[0],k[1]];x&&(m+="var thisWired = classParam.toWireType("+Oa+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Oa+", arg"+q+"); // "+k[q+2].name+"\n",H.push("argType"+q),n.push(k[q+2]);x&&(L="thisWired"+(0<L.length?", ":"")+L);m+=(Na?"var rv = ":"")+"invoker(fn"+(0<L.length?", ":"")+L+");\n";if(B)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].F&&(m+=p+"_dtor("+p+"); // "+k[q].name+"\n",H.push(p+"_dtor"),n.push(k[q].F));Na&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(m+"}\n");k=Ua(H).apply(null,n);q=b-1;if(!e.hasOwnProperty(h))throw new La("Replacing nonexistant public symbol");void 0!==e[h].D&&void 0!==q?e[h].D[q]=k:(e[h]=k,e[h].I=q);return[]})},c:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var l=Fa(c);if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+Sa(n)+"\" to "+this.name);if(n<d||n>f)throw new TypeError("Passing a number \""+Sa(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:eb(b,l,0!==d),F:null})},b:function(a,b,c){function d(g){g>>=2;var l=I;return new f(G,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{K:!0})},i:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=I[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;if(l==f||0==C[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&C[m];)++m;g=ia.decode(C.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(l=0;l<f;++l)n[l]=String.fromCharCode(C[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),h=mb(4+l+1);I[h>>2]=l;if(c&&g)ja(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));C[h+4+g]=k}else for(g=0;g<l;++g)C[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Ra,F:function(d){X(d)}})},g:function(a,b,c){c=P(c);if(2===b){var d=la;var f=ma;var g=na;var l=function(){return D};var h=1}else 4===b&&(d=oa,f=pa,g=qa,l=function(){return I},h=2);U(a,{name:c,fromWireType:function(k){for(var m=I[k>>2],n=l(),p,x=k+4,B=0;B<=m;++B){var q=k+4+B*b;if(B==m||0==n[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}X(k);return p},toWireType:function(k,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),p=mb(4+n+b);I[p>>2]=n>>h;f(m,p+4,n+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Ra,F:function(k){X(k)}})},q:function(a,b){b=P(b);U(a,{L:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},f:Qa,l:function(a){if(0===a)return W(gb());var b=fb[a];a=void 0===b?P(a):b;return W(gb()[a])},j:function(a){4<a&&(V[a].H+=1)},k:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=ib[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+"], \"parameter "+g+"\");\nvar arg"+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n"))(hb,e,W);ib[b]=f}return f(a,c,d)},h:function(){w()},t:function(a,b,c){C.copyWithin(a,b,b+c)},d:function(a){a>>>=0;var b=C.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);ua(A.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},u:function(){return 0},r:function(){},m:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var l=F[b+8*g>>2],h=F[b+(8*g+4)>>2],k=0;k<h;k++){var m=C[l+k],n=jb[a];if(0===m||10===m){m=1===a?fa:y;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=ia.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=h}F[d>>2]=f;return 0},a:A,s:function(){}};(function(){function a(f){e.asm=f.exports;J=e.asm.w;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&M&&(f=M,M=null,f())}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Ea).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){y("failed to asynchronously prepare wasm: "+g);w(g)})}var d={a:nb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){y("wasm streaming compile failed: "+g);y("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();var lb=e.___wasm_call_ctors=function(){return(lb=e.___wasm_call_ctors=e.asm.x).apply(null,arguments)},mb=e._malloc=function(){return(mb=e._malloc=e.asm.y).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.z).apply(null,arguments)},cb=e.___getTypeName=function(){return(cb=e.___getTypeName=e.asm.A).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.B).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.C).apply(null,arguments)};var Z;M=function ob(){Z||pb();Z||(M=ob)};function pb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!ha)){O(xa);O(ya);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();za.unshift(b)}O(za)}}if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();O(wa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=pb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();pb();return Module.ready}}();var imageQuantWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "imagequant_node-a308c591.wasm").href:new URL("imagequant_node-a308c591.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;class ImageData$1{constructor(data,width,height){this.data=data;this.width=width;this.height=height}}const pngEncDecPromise=init$2(fs.promises.readFile(pathify(pngEncDecWasm)));const oxipngPromise=init$1(fs.promises.readFile(pathify(oxipngWasm)));const resizePromise=init(fs.promises.readFile(pathify(resizeWasm)));const imageQuantPromise=instantiateEmscriptenWasm(Module,imageQuantWasm);globalThis.ImageData=ImageData$1;function resizeNameToIndex(name){switch(name){case"triangle":return 0;case"catrom":return 1;case"mitchell":return 2;case"lanczos3":return 3;default:throw Error(`Unknown resize algorithm "${name}"`);}}function resizeWithAspect({input_width,input_height,target_width,target_height}){if(!target_width&&!target_height){throw Error("Need to specify at least width or height when resizing")}if(target_width&&target_height){return{width:target_width,height:target_height}}if(!target_width){return{width:Math.round(input_width/input_height*target_height),height:target_height}}if(!target_height){return{width:target_width,height:Math.round(input_height/input_width*target_width)}}}const preprocessors={resize:{name:"Resize",description:"Resize the image before compressing",instantiate:async()=>{await resizePromise;return(buffer,input_width,input_height,{width,height,method,premultiply,linearRGB})=>{({width,height}=resizeWithAspect({input_width,input_height,target_width:width,target_height:height}));return new ImageData$1(resize(buffer,input_width,input_height,width,height,resizeNameToIndex(method),premultiply,linearRGB),width,height)}},defaultOptions:{method:"lanczos3",fitMethod:"stretch",premultiply:true,linearRGB:true}},// // TODO: Need to handle SVGs and HQX
quant:{name:"ImageQuant",description:"Reduce the number of colors used (aka. paletting)",instantiate:async()=>{const imageQuant=await imageQuantPromise;return(buffer,width,height,{numColors,dither})=>new ImageData$1(imageQuant.quantize(buffer,width,height,numColors,dither),width,height)},defaultOptions:{numColors:255,dither:1}},rotate:{name:"Rotate",description:"Rotate image",instantiate:async()=>{return async(buffer,width,height,{numRotations})=>{const degrees=numRotations*90%360;const sameDimensions=degrees==0||degrees==180;const size=width*height*4;const{instance}=await WebAssembly.instantiate(await fs.promises.readFile(pathify(rotateWasm)));const{memory}=instance.exports;const additionalPagesNeeded=Math.ceil((size*2-memory.buffer.byteLength+8)/(64*1024));if(additionalPagesNeeded>0){memory.grow(additionalPagesNeeded)}const view=new Uint8ClampedArray(memory.buffer);view.set(buffer,8);instance.exports.rotate(width,height,degrees);return new ImageData$1(view.slice(size+8,size*2+8),sameDimensions?width:height,sameDimensions?height:width)}},defaultOptions:{numRotations:0}}};const codecs={mozjpeg:{name:"MozJPEG",extension:"jpg",detectors:[/^\xFF\xD8\xFF/],dec:()=>instantiateEmscriptenWasm(Module$3,mozDecWasm),enc:()=>instantiateEmscriptenWasm(Module$4,mozEncWasm),defaultEncoderOptions:{quality:75,baseline:false,arithmetic:false,progressive:true,optimize_coding:true,smoothing:0,color_space:3/*YCbCr*/,quant_table:3,trellis_multipass:false,trellis_opt_zero:false,trellis_opt_table:false,trellis_loops:1,auto_subsample:true,chroma_subsample:2,separate_chroma_quality:false,chroma_quality:75},autoOptimize:{option:"quality",min:0,max:100}},webp:{name:"WebP",extension:"webp",detectors:[/^RIFF....WEBPVP8[LX ]/],dec:()=>instantiateEmscriptenWasm(Module$1,webpDecWasm),enc:()=>instantiateEmscriptenWasm(Module$2,webpEncWasm),defaultEncoderOptions:{quality:75,target_size:0,target_PSNR:0,method:4,sns_strength:50,filter_strength:60,filter_sharpness:0,filter_type:1,partitions:0,segments:4,pass:1,show_compressed:0,preprocessing:0,autofilter:0,partition_limit:0,alpha_compression:1,alpha_filtering:1,alpha_quality:100,lossless:0,exact:0,image_hint:0,emulate_jpeg_size:0,thread_level:0,low_memory:0,near_lossless:100,use_delta_palette:0,use_sharp_yuv:0},autoOptimize:{option:"quality",min:0,max:100}},avif:{name:"AVIF",extension:"avif",detectors:[/^\x00\x00\x00 ftypavif\x00\x00\x00\x00/],dec:()=>instantiateEmscriptenWasm(avif_node_dec,avifDecWasm),enc:()=>instantiateEmscriptenWasm(avif_node_enc,avifEncWasm),defaultEncoderOptions:{cqLevel:33,cqAlphaLevel:-1,denoiseLevel:0,tileColsLog2:0,tileRowsLog2:0,speed:6,subsample:1,chromaDeltaQ:false,sharpness:0,tune:0/* AVIFTune.auto */},autoOptimize:{option:"cqLevel",min:0,max:62}},jxl:{name:"JPEG-XL",extension:"jxl",detectors:[/^\xff\x0a/],dec:()=>instantiateEmscriptenWasm(jxl_node_dec,jxlDecWasm),enc:()=>instantiateEmscriptenWasm(jxl_node_enc,jxlEncWasm),defaultEncoderOptions:{speed:4,quality:75,progressive:false,epf:-1,nearLossless:0,lossyPalette:false,decodingSpeedTier:0},autoOptimize:{option:"quality",min:0,max:100}},wp2:{name:"WebP2",extension:"wp2",detectors:[/^\xF4\xFF\x6F/],dec:()=>instantiateEmscriptenWasm(wp2_node_dec,wp2DecWasm),enc:()=>instantiateEmscriptenWasm(wp2_node_enc,wp2EncWasm),defaultEncoderOptions:{quality:75,alpha_quality:75,effort:5,pass:1,sns:50,uv_mode:0/*UVMode.UVModeAuto*/,csp_type:0/*Csp.kYCoCg*/,error_diffusion:0,use_random_matrix:false},autoOptimize:{option:"quality",min:0,max:100}},oxipng:{name:"OxiPNG",extension:"png",detectors:[/^\x89PNG\x0D\x0A\x1A\x0A/],dec:async()=>{await pngEncDecPromise;return{decode:decode}},enc:async()=>{await pngEncDecPromise;await oxipngPromise;return{encode:(buffer,width,height,opts)=>{const simplePng=encode(new Uint8Array(buffer),width,height);return optimise(simplePng,opts.level)}}},defaultEncoderOptions:{level:2},autoOptimize:{option:"level",min:6,max:1}}};function uuid(){return Array.from({length:16},()=>Math.floor(Math.random()*256).toString(16)).join("")}function jobPromise(worker,msg){return new Promise((resolve,reject)=>{const id=uuid();worker.postMessage({msg,id});worker.on("message",function f({error,result,id:rid}){if(rid!==id){return}if(error){reject(error);return}worker.off("message",f);resolve(result)})})}class WorkerPool{constructor(numWorkers,workerFile){this.numWorkers=numWorkers;this.jobQueue=new webStreamsPolyfill.TransformStream;this.workerQueue=new webStreamsPolyfill.TransformStream;const writer=this.workerQueue.writable.getWriter();for(let i=0;i<numWorkers;i++){writer.write(new worker_threads.Worker(workerFile))}writer.releaseLock();this.done=this._readLoop()}async _readLoop(){const reader=this.jobQueue.readable.getReader();while(true){const{value,done}=await reader.read();if(done){await this._terminateAll();return}const{msg,resolve,reject}=value;const worker=await this._nextWorker();jobPromise(worker,msg).then(result=>resolve(result)).catch(reason=>reject(reason)).finally(()=>{// Return the worker to the pool
const writer=this.workerQueue.writable.getWriter();writer.write(worker);writer.releaseLock()})}}async _nextWorker(){const reader=this.workerQueue.readable.getReader();const{value,done}=await reader.read();reader.releaseLock();return value}async _terminateAll(){for(let n=0;n<this.numWorkers;n++){const worker=await this._nextWorker();worker.terminate()}this.workerQueue.writable.close()}async join(){this.jobQueue.writable.getWriter().close();await this.done}dispatchJob(msg){return new Promise((resolve,reject)=>{const writer=this.jobQueue.writable.getWriter();writer.write({msg,resolve,reject});writer.releaseLock()})}static useThisThreadAsWorker(cb){worker_threads.parentPort.on("message",async data=>{const{msg,id}=data;try{const result=await cb(msg);worker_threads.parentPort.postMessage({result,id})}catch(e){worker_threads.parentPort.postMessage({error:e.message,id})}})}}var visdif=function(){var _scriptDir=typeof document==="undefined"?new(__nccwpck_require__(835).URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("index.js",document.baseURI).href;return function(visdif){visdif=visdif||{};var f;f||(f=typeof visdif!=="undefined"?visdif:{});var ba,ca;f.ready=new Promise(function(a,b){ba=a;ca=b});var da={},q;for(q in f)f.hasOwnProperty(q)&&(da[q]=f[q]);var ea=!1,v=!1,fa=!1,ha=!1;ea="object"===typeof window;v="function"===typeof importScripts;fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ha=!ea&&!fa&&!v;var y="",ia,ja,ka,la;if(fa)y=v?__nccwpck_require__(622).dirname(y)+"/":__dirname+"/",ia=function(a,b){ka||(ka=__nccwpck_require__(747));la||(la=__nccwpck_require__(622));a=la.normalize(a);return ka.readFileSync(a,b?null:"utf8")},ja=function(a){a=ia(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a}),process.on("unhandledRejection",A),f.inspect=function(){return"[Emscripten Module object]"};else if(ha)"undefined"!=typeof read&&(ia=function(a){return read(a)}),ja=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ea||v)v?y=self.location.href:"undefined"!==typeof document&&document.currentScript&&(y=document.currentScript.src),_scriptDir&&(y=_scriptDir),0!==y.indexOf("blob:")?y=y.substr(0,y.lastIndexOf("/")+1):y="",ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(ja=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ma=f.print||console.log.bind(console),B=f.printErr||console.warn.bind(console);for(q in da)da.hasOwnProperty(q)&&(f[q]=da[q]);da=null;var na;f.wasmBinary&&(na=f.wasmBinary);f.noExitRuntime&&f.noExitRuntime;"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,oa=!1;function assert(a,b){a||A("Assertion failed: "+b)}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|k:(e&7)<<18|g<<12|k<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function ra(a,b,c){var d=D;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var k=a.charCodeAt(++e);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ta(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&ua[c];)++c;c<<=1;if(32<c-a&&sa)return sa.decode(D.subarray(a,c));c=0;for(d="";;){var e=E[a+2*c>>1];if(0==e||c==b/2)return d;++c;d+=String.fromCharCode(e)}}function va(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)E[b>>1]=a.charCodeAt(e),b+=2;E[b>>1]=0;return b-d}function wa(a){return 2*a.length}function xa(a,b){for(var c=0,d="";!(c>=b/4);){var e=F[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function ya(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var k=a.charCodeAt(++e);g=65536+((g&1023)<<10)|k&1023}F[b>>2]=g;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}function za(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var G,Aa,D,E,ua,F,I,Ba,Ca;function Da(a){G=a;f.HEAP8=Aa=new Int8Array(a);f.HEAP16=E=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=ua=new Uint16Array(a);f.HEAPU32=I=new Uint32Array(a);f.HEAPF32=Ba=new Float32Array(a);f.HEAPF64=Ca=new Float64Array(a)}var Ea=f.INITIAL_MEMORY||16777216;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:Ea/65536,maximum:32768});C&&(G=C.buffer);Ea=G.byteLength;Da(G);var Fa,Ga=[],Ha=[],Ia=[],Ja=[];function Ka(){var a=f.preRun.shift();Ga.unshift(a)}var J=0,Ma=null;f.preloadedImages={};f.preloadedAudios={};function A(a){if(f.onAbort)f.onAbort(a);B(a);oa=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ca(a);throw a}function Na(a){var b=K;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Oa(){return Na("data:application/octet-stream;base64,")}var K="visdif.wasm";if(!Oa()){var Pa=K;K=f.locateFile?f.locateFile(Pa,y):y+Pa}function Qa(){try{if(na)return new Uint8Array(na);if(ja)return ja(K);throw"both async and sync fetching of the wasm failed"}catch(a){A(a)}}function Ra(){return na||!ea&&!v||"function"!==typeof fetch||Na("file://")?Promise.resolve().then(Qa):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Qa()})}function Sa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.ba;"number"===typeof c?void 0===b.V?Fa.get(c)():Fa.get(c)(b.V):c(void 0===b.V?null:b.V)}}}function Ta(a){this.C=a-16;this.qa=function(b){F[this.C+8>>2]=b};this.na=function(b){F[this.C+0>>2]=b};this.oa=function(){F[this.C+4>>2]=0};this.ma=function(){Aa[this.C+12>>0]=0};this.pa=function(){Aa[this.C+13>>0]=0};this.ga=function(b,c){this.qa(b);this.na(c);this.oa();this.ma();this.pa()}}function Va(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Wa=void 0;function L(a){for(var b="";D[a];)b+=Wa[D[a++]];return b}var M={},N={},Xa={};function Ya(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Za(a,b){a=Ya(a);return new Function("body","return function "+a+"() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(b)}function $a(a){var b=Error,c=Za(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var O=void 0;function R(a){throw new O(a)}var ab=void 0;function bb(a){throw new ab(a)}function cb(a,b,c){function d(h){h=c(h);h.length!==a.length&&bb("Mismatched type converter count");for(var m=0;m<a.length;++m)S(a[m],h[m])}a.forEach(function(h){Xa[h]=b});var e=Array(b.length),g=[],k=0;b.forEach(function(h,m){N.hasOwnProperty(h)?e[m]=N[h]:(g.push(h),M.hasOwnProperty(h)||(M[h]=[]),M[h].push(function(){e[m]=N[h];++k;k===g.length&&d(e)}))});0===g.length&&d(e)}function S(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||R("type \""+d+"\" must have a positive integer typeid pointer");if(N.hasOwnProperty(a)){if(c.fa)return;R("Cannot register type '"+d+"' twice")}N[a]=b;delete Xa[a];M.hasOwnProperty(a)&&(b=M[a],delete M[a],b.forEach(function(e){e()}))}function db(a){return{count:a.count,N:a.N,P:a.P,C:a.C,F:a.F,G:a.G,H:a.H}}function eb(a){R(a.B.F.D.name+" instance already deleted")}var fb=!1;function gb(){}function hb(a){--a.count.value;0===a.count.value&&(a.G?a.H.M(a.G):a.F.D.M(a.C))}function ib(a){if("undefined"===typeof FinalizationGroup)return ib=function(b){return b},a;fb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.C?hb(c):console.warn("object already deleted: "+c.C)});ib=function(b){fb.register(b,b.B,b.B);return b};gb=function(b){fb.unregister(b.B)};return ib(a)}var jb=void 0,kb=[];function lb(){for(;kb.length;){var a=kb.pop();a.B.N=!1;a["delete"]()}}function T(){}var mb={};function nb(a,b,c){if(void 0===a[b].J){var d=a[b];a[b]=function(){a[b].J.hasOwnProperty(arguments.length)||R("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].J+")!");return a[b].J[arguments.length].apply(this,arguments)};a[b].J=[];a[b].J[d.S]=d}}function ob(a,b){f.hasOwnProperty(a)?(R("Cannot register public name '"+a+"' twice"),nb(f,a,a),f.hasOwnProperty(void 0)&&R("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),f[a].J[void 0]=b):f[a]=b}function pb(a,b,c,d,e,g,k,h){this.name=a;this.constructor=b;this.O=c;this.M=d;this.I=e;this.da=g;this.R=k;this.aa=h;this.ia=[]}function qb(a,b,c){for(;b!==c;)b.R||R("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.R(a),b=b.I;return a}function rb(a,b){if(null===b)return this.W&&R("null is not a valid "+this.name),0;b.B||R("Cannot pass \""+U(b)+"\" as a "+this.name);b.B.C||R("Cannot pass deleted object as a pointer of type "+this.name);return qb(b.B.C,b.B.F.D,this.D)}function sb(a,b){if(null===b){this.W&&R("null is not a valid "+this.name);if(this.U){var c=this.ja();null!==a&&a.push(this.M,c);return c}return 0}b.B||R("Cannot pass \""+U(b)+"\" as a "+this.name);b.B.C||R("Cannot pass deleted object as a pointer of type "+this.name);!this.T&&b.B.F.T&&R("Cannot convert argument of type "+(b.B.H?b.B.H.name:b.B.F.name)+" to parameter type "+this.name);c=qb(b.B.C,b.B.F.D,this.D);if(this.U)switch(void 0===b.B.G&&R("Passing raw pointer to smart pointer is illegal"),this.ra){case 0:b.B.H===this?c=b.B.G:R("Cannot convert argument of type "+(b.B.H?b.B.H.name:b.B.F.name)+" to parameter type "+this.name);break;case 1:c=b.B.G;break;case 2:if(b.B.H===this)c=b.B.G;else{var d=b.clone();c=this.ka(c,vb(function(){d["delete"]()}));null!==a&&a.push(this.M,c)}break;default:R("Unsupporting sharing policy");}return c}function wb(a,b){if(null===b)return this.W&&R("null is not a valid "+this.name),0;b.B||R("Cannot pass \""+U(b)+"\" as a "+this.name);b.B.C||R("Cannot pass deleted object as a pointer of type "+this.name);b.B.F.T&&R("Cannot convert argument of type "+b.B.F.name+" to parameter type "+this.name);return qb(b.B.C,b.B.F.D,this.D)}function xb(a){return this.fromWireType(I[a>>2])}function yb(a,b,c){if(b===c)return a;if(void 0===c.I)return null;a=yb(a,b,c.I);return null===a?null:c.aa(a)}var zb={};function Ab(a,b){for(void 0===b&&R("ptr should not be undefined");a.I;)b=a.R(b),a=a.I;return zb[b]}function Bb(a,b){b.F&&b.C||bb("makeClassHandle requires ptr and ptrType");!!b.H!==!!b.G&&bb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return ib(Object.create(a,{B:{value:b}}))}function V(a,b,c,d){this.name=a;this.D=b;this.W=c;this.T=d;this.U=!1;this.M=this.ka=this.ja=this.Y=this.ra=this.ha=void 0;void 0!==b.I?this.toWireType=sb:(this.toWireType=d?rb:wb,this.K=null)}function Cb(a,b){f.hasOwnProperty(a)||bb("Replacing nonexistant public symbol");f[a]=b;f[a].S=void 0}function Db(a,b){assert(0<=a.indexOf("j"),"getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=Fa.get(b).apply(null,c);return e}}function W(a,b){a=L(a);var c=-1!=a.indexOf("j")?Db(a,b):Fa.get(b);"function"!==typeof c&&R("unknown function pointer with signature "+a+": "+b);return c}var Eb=void 0;function Fb(a){a=Gb(a);var b=L(a);X(a);return b}function Hb(a,b){function c(g){e[g]||N[g]||(Xa[g]?Xa[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new Eb(a+": "+d.map(Fb).join([", "]))}function Ib(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}function Jb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Kb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Za(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}var Lb=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function vb(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Lb.length?Lb.pop():Y.length;Y[b]={la:1,value:a};return b;}}function U(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Mb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ba[c>>2])};case 3:return function(c){return this.fromWireType(Ca[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Nb(a,b,c){switch(b){case 0:return c?function(d){return Aa[d]}:function(d){return D[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return ua[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return I[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}for(var Ob=[null,[],[]],Pb=Array(256),Qb=0;256>Qb;++Qb)Pb[Qb]=String.fromCharCode(Qb);Wa=Pb;O=f.BindingError=$a("BindingError");ab=f.InternalError=$a("InternalError");T.prototype.isAliasOf=function(a){if(!(this instanceof T&&a instanceof T))return!1;var b=this.B.F.D,c=this.B.C,d=a.B.F.D;for(a=a.B.C;b.I;)c=b.R(c),b=b.I;for(;d.I;)a=d.R(a),d=d.I;return b===d&&c===a};T.prototype.clone=function(){this.B.C||eb(this);if(this.B.P)return this.B.count.value+=1,this;var a=ib(Object.create(Object.getPrototypeOf(this),{B:{value:db(this.B)}}));a.B.count.value+=1;a.B.N=!1;return a};T.prototype["delete"]=function(){this.B.C||eb(this);this.B.N&&!this.B.P&&R("Object already scheduled for deletion");gb(this);hb(this.B);this.B.P||(this.B.G=void 0,this.B.C=void 0)};T.prototype.isDeleted=function(){return!this.B.C};T.prototype.deleteLater=function(){this.B.C||eb(this);this.B.N&&!this.B.P&&R("Object already scheduled for deletion");kb.push(this);1===kb.length&&jb&&jb(lb);this.B.N=!0;return this};V.prototype.ea=function(a){this.Y&&(a=this.Y(a));return a};V.prototype.X=function(a){this.M&&this.M(a)};V.prototype.argPackAdvance=8;V.prototype.readValueFromPointer=xb;V.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};V.prototype.fromWireType=function(a){function b(){return this.U?Bb(this.D.O,{F:this.ha,C:c,H:this,G:a}):Bb(this.D.O,{F:this,C:a})}var c=this.ea(a);if(!c)return this.X(a),null;var d=Ab(this.D,c);if(void 0!==d){if(0===d.B.count.value)return d.B.C=c,d.B.G=a,d.clone();d=d.clone();this.X(a);return d}d=this.D.da(c);d=mb[d];if(!d)return b.call(this);d=this.T?d.$:d.pointerType;var e=yb(c,this.D,d.D);return null===e?b.call(this):this.U?Bb(d.D.O,{F:d,C:e,H:this,G:a}):Bb(d.D.O,{F:d,C:e})};f.getInheritedInstanceCount=function(){return Object.keys(zb).length};f.getLiveInheritedInstances=function(){var a=[],b;for(b in zb)zb.hasOwnProperty(b)&&a.push(zb[b]);return a};f.flushPendingDeletes=lb;f.setDelayFunction=function(a){jb=a;kb.length&&jb&&jb(lb)};Eb=f.UnboundTypeError=$a("UnboundTypeError");f.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};Ha.push({ba:function(){Rb()}});var Tb={c:function(a,b,c,d){A("Assertion failed: "+(a?qa(D,a,void 0):"")+", at: "+[b?b?qa(D,b,void 0):"":"unknown filename",c,d?d?qa(D,d,void 0):"":"unknown function"])},t:function(a){return Sb(a+16)+16},p:function(a,b,c){new Ta(a).ga(b,c);throw a},k:function(a,b,c,d,e){var g=Va(c);b=L(b);S(a,{name:b,fromWireType:function(k){return!!k},toWireType:function(k,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var h=Aa;else if(2===c)h=E;else if(4===c)h=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[k>>g])},K:null})},o:function(a,b,c,d,e,g,k,h,m,l,n,t,u){n=L(n);g=W(e,g);h&&(h=W(k,h));l&&(l=W(m,l));u=W(t,u);var z=Ya(n);ob(z,function(){Hb("Cannot construct "+n+" due to unbound types",[d])});cb([a,b,c],d?[d]:[],function(r){r=r[0];if(d){var w=r.D;var p=w.O}else p=T.prototype;r=Za(z,function(){if(Object.getPrototypeOf(this)!==H)throw new O("Use 'new' to construct "+n);if(void 0===x.L)throw new O(n+" has no accessible constructor");var P=x.L[arguments.length];if(void 0===P)throw new O("Tried to invoke ctor of "+n+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(x.L).toString()+") parameters instead!");return P.apply(this,arguments)});var H=Object.create(p,{constructor:{value:r}});r.prototype=H;var x=new pb(n,r,H,u,w,g,h,l);w=new V(n,x,!0,!1);p=new V(n+"*",x,!1,!1);var Z=new V(n+" const*",x,!1,!0);mb[a]={pointerType:p,$:Z};Cb(z,r);return[w,p,Z]})},n:function(a,b,c,d,e,g){assert(0<b);var k=Ib(b,c);e=W(d,e);var h=[g],m=[];cb([],[a],function(l){l=l[0];var n="constructor "+l.name;void 0===l.D.L&&(l.D.L=[]);if(void 0!==l.D.L[b-1])throw new O("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+l.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");l.D.L[b-1]=function(){Hb("Cannot construct "+l.name+" due to unbound types",k)};cb([],k,function(t){l.D.L[b-1]=function(){arguments.length!==b-1&&R(n+" called with "+arguments.length+" arguments, expected "+(b-1));m.length=0;h.length=b;for(var u=1;u<b;++u)h[u]=t[u].toWireType(m,arguments[u-1]);u=e.apply(null,h);Jb(m);return t[0].fromWireType(u)};return[]});return[]})},m:function(a,b,c,d,e,g,k,h){var m=Ib(c,d);b=L(b);g=W(e,g);cb([],[a],function(l){function n(){Hb("Cannot call "+t+" due to unbound types",m)}l=l[0];var t=l.name+"."+b;h&&l.D.ia.push(b);var u=l.D.O,z=u[b];void 0===z||void 0===z.J&&z.className!==l.name&&z.S===c-2?(n.S=c-2,n.className=l.name,u[b]=n):(nb(u,b,t),u[b].J[c-2]=n);cb([],m,function(r){var w=t,p=l,H=g,x=r.length;2>x&&R("argTypes array size mismatch! Must at least get return value and 'this' types!");var Z=null!==r[1]&&null!==p,P=!1;for(p=1;p<r.length;++p)if(null!==r[p]&&void 0===r[p].K){P=!0;break}var tb="void"!==r[0].name,Q="",aa="";for(p=0;p<x-2;++p)Q+=(0!==p?", ":"")+"arg"+p,aa+=(0!==p?", ":"")+"arg"+p+"Wired";w="return function "+Ya(w)+"("+Q+") {\nif (arguments.length !== "+(x-2)+") {\nthrowBindingError('function "+w+" called with ' + arguments.length + ' arguments, expected "+(x-2)+" args!');\n}\n";P&&(w+="var destructors = [];\n");var ub=P?"destructors":"null";Q="throwBindingError invoker fn runDestructors retType classParam".split(" ");H=[R,H,k,Jb,r[0],r[1]];Z&&(w+="var thisWired = classParam.toWireType("+ub+", this);\n");for(p=0;p<x-2;++p)w+="var arg"+p+"Wired = argType"+p+".toWireType("+ub+", arg"+p+"); // "+r[p+2].name+"\n",Q.push("argType"+p),H.push(r[p+2]);Z&&(aa="thisWired"+(0<aa.length?", ":"")+aa);w+=(tb?"var rv = ":"")+"invoker(fn"+(0<aa.length?", ":"")+aa+");\n";if(P)w+="runDestructors(destructors);\n";else for(p=Z?1:2;p<r.length;++p)x=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==r[p].K&&(w+=x+"_dtor("+x+"); // "+r[p].name+"\n",Q.push(x+"_dtor"),H.push(r[p].K));tb&&(w+="var ret = retType.fromWireType(rv);\nreturn ret;\n");Q.push(w+"}\n");r=Kb(Q).apply(null,H);void 0===u[b].J?(r.S=c-2,u[b]=r):u[b].J[c-2]=r;return[]});return[]})},s:function(a,b){b=L(b);S(a,{name:b,fromWireType:function(c){var d=Y[c].value;4<c&&0===--Y[c].la&&(Y[c]=void 0,Lb.push(c));return d},toWireType:function(c,d){return vb(d)},argPackAdvance:8,readValueFromPointer:xb,K:null})},j:function(a,b,c){c=Va(c);b=L(b);S(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError("Cannot convert \""+U(e)+"\" to "+this.name);return e},argPackAdvance:8,readValueFromPointer:Mb(b,c),K:null})},e:function(a,b,c,d,e){function g(l){return l}b=L(b);-1===e&&(e=4294967295);var k=Va(c);if(0===d){var h=32-8*c;g=function(l){return l<<h>>>h}}var m=-1!=b.indexOf("unsigned");S(a,{name:b,fromWireType:g,toWireType:function(l,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError("Cannot convert \""+U(n)+"\" to "+this.name);if(n<d||n>e)throw new TypeError("Passing a number \""+U(n)+"\" from JS side to C/C++ side to an argument of type \""+b+"\", which is outside the valid range ["+d+", "+e+"]!");return m?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:Nb(b,k,0!==d),K:null})},d:function(a,b,c){function d(g){g>>=2;var k=I;return new e(G,k[g+1],k[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=L(c);S(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{fa:!0})},h:function(a,b){b=L(b);var c="std::string"===b;S(a,{name:b,fromWireType:function(d){var e=I[d>>2];if(c)for(var g=d+4,k=0;k<=e;++k){var h=d+4+k;if(k==e||0==D[h]){g=g?qa(D,g,h-g):"";if(void 0===m)var m=g;else m+=String.fromCharCode(0),m+=g;g=h+1}}else{m=Array(e);for(k=0;k<e;++k)m[k]=String.fromCharCode(D[d+4+k]);m=m.join("")}X(d);return m},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||R("Cannot pass non-string to std::string");var k=(c&&g?function(){for(var l=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);55296<=t&&57343>=t&&(t=65536+((t&1023)<<10)|e.charCodeAt(++n)&1023);127>=t?++l:l=2047>=t?l+2:65535>=t?l+3:l+4}return l}:function(){return e.length})(),h=Sb(4+k+1);I[h>>2]=k;if(c&&g)ra(e,h+4,k+1);else if(g)for(g=0;g<k;++g){var m=e.charCodeAt(g);255<m&&(X(h),R("String has UTF-16 code units that do not fit in 8 bits"));D[h+4+g]=m}else for(g=0;g<k;++g)D[h+4+g]=e[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:xb,K:function(d){X(d)}})},g:function(a,b,c){c=L(c);if(2===b){var d=ta;var e=va;var g=wa;var k=function(){return ua};var h=1}else 4===b&&(d=xa,e=ya,g=za,k=function(){return I},h=2);S(a,{name:c,fromWireType:function(m){for(var l=I[m>>2],n=k(),t,u=m+4,z=0;z<=l;++z){var r=m+4+z*b;if(z==l||0==n[r>>h])u=d(u,r-u),void 0===t?t=u:(t+=String.fromCharCode(0),t+=u),u=r+b}X(m);return t},toWireType:function(m,l){"string"!==typeof l&&R("Cannot pass non-string to C++ string type "+c);var n=g(l),t=Sb(4+n+b);I[t>>2]=n>>h;e(l,t+4,n+b);null!==m&&m.push(X,t);return t},argPackAdvance:8,readValueFromPointer:xb,K:function(m){X(m)}})},l:function(a,b){b=L(b);S(a,{sa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},b:function(){A()},r:function(a,b,c){D.copyWithin(a,b,b+c)},f:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{C.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);Da(C.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},i:function(a,b,c,d){for(var e=0,g=0;g<c;g++){for(var k=F[b+8*g>>2],h=F[b+(8*g+4)>>2],m=0;m<h;m++){var l=D[k+m],n=Ob[a];0===l||10===l?((1===a?ma:B)(qa(n,0)),n.length=0):n.push(l)}e+=h}F[d>>2]=e;return 0},a:C,q:function(){}};(function(){function a(e){f.asm=e.exports;Fa=f.asm.u;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&Ma&&(e=Ma,Ma=null,e())}function b(e){a(e.instance)}function c(e){return Ra().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){B("failed to asynchronously prepare wasm: "+g);A(g)})}var d={a:Tb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return na||"function"!==typeof WebAssembly.instantiateStreaming||Oa()||Na("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){B("wasm streaming compile failed: "+g);B("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ca);return{}})();var Rb=f.___wasm_call_ctors=function(){return(Rb=f.___wasm_call_ctors=f.asm.v).apply(null,arguments)},Sb=f._malloc=function(){return(Sb=f._malloc=f.asm.w).apply(null,arguments)},X=f._free=function(){return(X=f._free=f.asm.x).apply(null,arguments)},Gb=f.___getTypeName=function(){return(Gb=f.___getTypeName=f.asm.y).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.z).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.A).apply(null,arguments)};var Ub;Ma=function Vb(){Ub||Wb();Ub||(Ma=Vb)};function Wb(){function a(){if(!Ub&&(Ub=!0,f.calledRun=!0,!oa)){Sa(Ha);Sa(Ia);ba(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Ja.unshift(b)}Sa(Ja)}}if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ka();Sa(Ga);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();Wb();return visdif.ready}}();var visdifWasm=typeof document==="undefined"?new(__nccwpck_require__(835).URL)(__nccwpck_require__.ab + "visdif-2d84f8c1.wasm").href:new URL("visdif-2d84f8c1.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href;// `measure` is a (async) function that takes exactly one numeric parameter and
// returns a value. The function is assumed to be monotonic (an increase in `parameter`
// will result in an increase in the return value. The function uses binary search
// to find `parameter` such that `measure` returns `measureGoal`, within an error
// of `epsilon`. It will use at most `maxRounds` attempts.
async function binarySearch(measureGoal,measure,{min=0,max=100,epsilon=0.1,maxRounds=8}={}){let parameter=(max-min)/2+min;let delta=(max-min)/4;let value;let round=1;while(true){value=await measure(parameter);if(Math.abs(value-measureGoal)<epsilon||round>=maxRounds){return{parameter,round,value}}if(value>measureGoal){parameter-=delta}else if(value<measureGoal){parameter+=delta}delta/=2;round++}}async function autoOptimize(bitmapIn,encode,decode,{butteraugliDistanceGoal=1.4,...otherOpts}={}){const{VisDiff}=await instantiateEmscriptenWasm(visdif,visdifWasm);const comparator=new VisDiff(bitmapIn.data,bitmapIn.width,bitmapIn.height);let bitmapOut;let binaryOut;// Increasing quality means _decrease_ in Butteraugli distance.
// `binarySearch` assumes that increasing `parameter` will
// increase the metric value. So multipliy Butteraugli values by -1.
const{parameter}=await binarySearch(-1*butteraugliDistanceGoal,async quality=>{binaryOut=await encode(bitmapIn,quality);bitmapOut=await decode(binaryOut);return-1*comparator.distance(bitmapOut.data)},otherOpts);comparator.delete();return{bitmap:bitmapOut,binary:binaryOut,quality:parameter}}async function decodeFile({file}){var _Object$entries$find;let buffer;if(ArrayBuffer.isView(file)){buffer=Buffer.from(file.buffer);file="Binary blob"}else if(file instanceof ArrayBuffer){buffer=Buffer.from(file);file="Binary blob"}else if(file instanceof Buffer){buffer=file;file="Binary blob"}else if(typeof file==="string"){buffer=await fs.promises.readFile(file)}else{throw Error("Unexpected input type")}const firstChunk=buffer.slice(0,16);const firstChunkString=Array.from(firstChunk).map(v=>String.fromCodePoint(v)).join("");const key=(_Object$entries$find=Object.entries(codecs).find(([name,{detectors}])=>detectors.some(detector=>detector.exec(firstChunkString))))==null?void 0:_Object$entries$find[0];if(!key){throw Error(`${file} has an unsupported format`)}const rgba=(await codecs[key].dec()).decode(new Uint8Array(buffer));return{bitmap:rgba,size:buffer.length}}async function preprocessImage({preprocessorName,options,image}){const preprocessor=await preprocessors[preprocessorName].instantiate();image.bitmap=await preprocessor(image.bitmap.data,image.bitmap.width,image.bitmap.height,options);return image}async function encodeImage({bitmap:bitmapIn,encName,encConfig,optimizerButteraugliTarget,maxOptimizerRounds}){let binary;let optionsUsed=encConfig;const encoder=await codecs[encName].enc();if(encConfig==="auto"){const optionToOptimize=codecs[encName].autoOptimize.option;const decoder=await codecs[encName].dec();const encode=(bitmapIn,quality)=>encoder.encode(bitmapIn.data,bitmapIn.width,bitmapIn.height,Object.assign({},codecs[encName].defaultEncoderOptions,{[optionToOptimize]:quality}));const decode=binary=>decoder.decode(binary);const{binary:optimizedBinary,quality}=await autoOptimize(bitmapIn,encode,decode,{min:codecs[encName].autoOptimize.min,max:codecs[encName].autoOptimize.max,butteraugliDistanceGoal:optimizerButteraugliTarget,maxRounds:maxOptimizerRounds});binary=optimizedBinary;optionsUsed={// 5 significant digits is enough
[optionToOptimize]:Math.round(quality*10000)/10000}}else{binary=encoder.encode(bitmapIn.data.buffer,bitmapIn.width,bitmapIn.height,encConfig)}return{optionsUsed,binary,extension:codecs[encName].extension,size:binary.length}}// both decoding and encoding go through the worker pool
function handleJob(params){const{operation}=params;switch(operation){case"encode":return encodeImage(params);case"decode":return decodeFile(params);case"preprocess":return preprocessImage(params);default:throw Error(`Invalid job "${operation}"`);}}/**
 * Represents an ingested image.
 */class Image{constructor(workerPool,file){this.file=file;this.workerPool=workerPool;this.decoded=workerPool.dispatchJob({operation:"decode",file});this.encodedWith={}}/**
   * Define one or several preprocessors to use on the image.
   * @param {object} preprocessOptions - An object with preprocessors to use, and their settings.
   * @returns {Promise<undefined>} - A promise that resolves when all preprocessors have completed their work.
   */async preprocess(preprocessOptions={}){for(const[name,options]of Object.entries(preprocessOptions)){if(!Object.keys(preprocessors).includes(name)){throw Error(`Invalid preprocessor "${name}"`)}const preprocessorOptions=Object.assign({},preprocessors[name].defaultOptions,options);this.decoded=this.workerPool.dispatchJob({operation:"preprocess",preprocessorName:name,image:await this.decoded,options:preprocessorOptions});await this.decoded}}/**
   * Define one or several encoders to use on the image.
   * @param {object} encodeOptions - An object with encoders to use, and their settings.
   * @returns {Promise<undefined>} - A promise that resolves when the image has been encoded with all the specified encoders.
   */async encode(encodeOptions={}){const{bitmap}=await this.decoded;for(const[encName,options]of Object.entries(encodeOptions)){if(!Object.keys(codecs).includes(encName)){continue}const encRef=codecs[encName];const encConfig=typeof options==="string"?options:Object.assign({},encRef.defaultEncoderOptions,options);this.encodedWith[encName]=this.workerPool.dispatchJob({operation:"encode",bitmap,encName,encConfig,optimizerButteraugliTarget:Number(encodeOptions.optimizerButteraugliTarget),maxOptimizerRounds:Number(encodeOptions.maxOptimizerRounds)})}await Promise.all(Object.values(this.encodedWith))}}/**
 * A pool where images can be ingested and squooshed.
 */class ImagePool{/**
   * Create a new pool.
   * @param {number} [threads] - Number of concurrent image processes to run in the pool. Defaults to the number of CPU cores in the system.
   */constructor(threads){this.workerPool=new WorkerPool(threads||os.cpus().length,__filename)}/**
   * Ingest an image into the image pool.
   * @param {string | Buffer | URL | object} image - The image or path to the image that should be ingested and decoded.
   * @returns {Image} - A custom class reference to the decoded image.
   */ingestImage(image){return new Image(this.workerPool,image)}/**
   * Closes the underlying image processing pipeline. The already processed images will still be there, but no new processing can start.
   * @returns {Promise<undefined>} - A promise that resolves when the underlying pipeline has closed.
   */async close(){await this.workerPool.join()}}if(!worker_threads.isMainThread){WorkerPool.useThisThreadAsWorker(handleJob)}exports.ImagePool=ImagePool;exports.encoders=codecs;exports.preprocessors=preprocessors;


/***/ }),

/***/ 608:
/***/ (function(__unused_webpack_module, exports) {

/**
 * web-streams-polyfill v3.0.3
 */
(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    /// <reference lib="es2015.symbol" />
    var SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ?
        Symbol :
        function (description) { return "Symbol(" + description + ")"; };

    /// <reference lib="dom" />
    function noop() {
        return undefined;
    }
    function getGlobals() {
        if (typeof self !== 'undefined') {
            return self;
        }
        else if (typeof window !== 'undefined') {
            return window;
        }
        else if (typeof global !== 'undefined') {
            return global;
        }
        return undefined;
    }
    var globals = getGlobals();

    function typeIsObject(x) {
        return (typeof x === 'object' && x !== null) || typeof x === 'function';
    }
    var rethrowAssertionErrorRejection = noop;

    var originalPromise = Promise;
    var originalPromiseThen = Promise.prototype.then;
    var originalPromiseResolve = Promise.resolve.bind(originalPromise);
    var originalPromiseReject = Promise.reject.bind(originalPromise);
    function newPromise(executor) {
        return new originalPromise(executor);
    }
    function promiseResolvedWith(value) {
        return originalPromiseResolve(value);
    }
    function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
    }
    function PerformPromiseThen(promise, onFulfilled, onRejected) {
        // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
        // approximation.
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
    }
    function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
    }
    function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
    }
    function uponRejection(promise, onRejected) {
        uponPromise(promise, undefined, onRejected);
    }
    function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
    }
    function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
    }
    var queueMicrotask = (function () {
        var globalQueueMicrotask = globals && globals.queueMicrotask;
        if (typeof globalQueueMicrotask === 'function') {
            return globalQueueMicrotask;
        }
        var resolvedPromise = promiseResolvedWith(undefined);
        return function (fn) { return PerformPromiseThen(resolvedPromise, fn); };
    })();
    function reflectCall(F, V, args) {
        if (typeof F !== 'function') {
            throw new TypeError('Argument is not a function');
        }
        return Function.prototype.apply.call(F, V, args);
    }
    function promiseCall(F, V, args) {
        try {
            return promiseResolvedWith(reflectCall(F, V, args));
        }
        catch (value) {
            return promiseRejectedWith(value);
        }
    }

    // Original from Chromium
    // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
    var QUEUE_MAX_ARRAY_SIZE = 16384;
    /**
     * Simple queue structure.
     *
     * Avoids scalability issues with using a packed array directly by using
     * multiple arrays in a linked list and keeping the array size bounded.
     */
    var SimpleQueue = /** @class */ (function () {
        function SimpleQueue() {
            this._cursor = 0;
            this._size = 0;
            // _front and _back are always defined.
            this._front = {
                _elements: [],
                _next: undefined
            };
            this._back = this._front;
            // The cursor is used to avoid calling Array.shift().
            // It contains the index of the front element of the array inside the
            // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
            this._cursor = 0;
            // When there is only one node, size === elements.length - cursor.
            this._size = 0;
        }
        Object.defineProperty(SimpleQueue.prototype, "length", {
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        // For exception safety, this method is structured in order:
        // 1. Read state
        // 2. Calculate required state mutations
        // 3. Perform state mutations
        SimpleQueue.prototype.push = function (element) {
            var oldBack = this._back;
            var newBack = oldBack;
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
                newBack = {
                    _elements: [],
                    _next: undefined
                };
            }
            // push() is the mutation most likely to throw an exception, so it
            // goes first.
            oldBack._elements.push(element);
            if (newBack !== oldBack) {
                this._back = newBack;
                oldBack._next = newBack;
            }
            ++this._size;
        };
        // Like push(), shift() follows the read -> calculate -> mutate pattern for
        // exception safety.
        SimpleQueue.prototype.shift = function () { // must not be called on an empty queue
            var oldFront = this._front;
            var newFront = oldFront;
            var oldCursor = this._cursor;
            var newCursor = oldCursor + 1;
            var elements = oldFront._elements;
            var element = elements[oldCursor];
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
                newFront = oldFront._next;
                newCursor = 0;
            }
            // No mutations before this point.
            --this._size;
            this._cursor = newCursor;
            if (oldFront !== newFront) {
                this._front = newFront;
            }
            // Permit shifted element to be garbage collected.
            elements[oldCursor] = undefined;
            return element;
        };
        // The tricky thing about forEach() is that it can be called
        // re-entrantly. The queue may be mutated inside the callback. It is easy to
        // see that push() within the callback has no negative effects since the end
        // of the queue is checked for on every iteration. If shift() is called
        // repeatedly within the callback then the next iteration may return an
        // element that has been removed. In this case the callback will be called
        // with undefined values until we either "catch up" with elements that still
        // exist or reach the back of the queue.
        SimpleQueue.prototype.forEach = function (callback) {
            var i = this._cursor;
            var node = this._front;
            var elements = node._elements;
            while (i !== elements.length || node._next !== undefined) {
                if (i === elements.length) {
                    node = node._next;
                    elements = node._elements;
                    i = 0;
                    if (elements.length === 0) {
                        break;
                    }
                }
                callback(elements[i]);
                ++i;
            }
        };
        // Return the element that would be returned if shift() was called now,
        // without modifying the queue.
        SimpleQueue.prototype.peek = function () { // must not be called on an empty queue
            var front = this._front;
            var cursor = this._cursor;
            return front._elements[cursor];
        };
        return SimpleQueue;
    }());

    function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === 'readable') {
            defaultReaderClosedPromiseInitialize(reader);
        }
        else if (stream._state === 'closed') {
            defaultReaderClosedPromiseInitializeAsResolved(reader);
        }
        else {
            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
        }
    }
    // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
    // check.
    function ReadableStreamReaderGenericCancel(reader, reason) {
        var stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
    }
    function ReadableStreamReaderGenericRelease(reader) {
        if (reader._ownerReadableStream._state === 'readable') {
            defaultReaderClosedPromiseReject(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
        }
        else {
            defaultReaderClosedPromiseResetToRejected(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
        }
        reader._ownerReadableStream._reader = undefined;
        reader._ownerReadableStream = undefined;
    }
    // Helper functions for the readers.
    function readerLockException(name) {
        return new TypeError('Cannot ' + name + ' a stream using a released reader');
    }
    // Helper functions for the ReadableStreamDefaultReader.
    function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise(function (resolve, reject) {
            reader._closedPromise_resolve = resolve;
            reader._closedPromise_reject = reject;
        });
    }
    function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
    }
    function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
    }
    function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = undefined;
        reader._closedPromise_reject = undefined;
    }
    function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
    }
    function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === undefined) {
            return;
        }
        reader._closedPromise_resolve(undefined);
        reader._closedPromise_resolve = undefined;
        reader._closedPromise_reject = undefined;
    }

    var AbortSteps = SymbolPolyfill('[[AbortSteps]]');
    var ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
    var CancelSteps = SymbolPolyfill('[[CancelSteps]]');
    var PullSteps = SymbolPolyfill('[[PullSteps]]');

    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
    var NumberIsFinite = Number.isFinite || function (x) {
        return typeof x === 'number' && isFinite(x);
    };

    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
    var MathTrunc = Math.trunc || function (v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
    };

    // https://heycam.github.io/webidl/#idl-dictionaries
    function isDictionary(x) {
        return typeof x === 'object' || typeof x === 'function';
    }
    function assertDictionary(obj, context) {
        if (obj !== undefined && !isDictionary(obj)) {
            throw new TypeError(context + " is not an object.");
        }
    }
    // https://heycam.github.io/webidl/#idl-callback-functions
    function assertFunction(x, context) {
        if (typeof x !== 'function') {
            throw new TypeError(context + " is not a function.");
        }
    }
    // https://heycam.github.io/webidl/#idl-object
    function isObject(x) {
        return (typeof x === 'object' && x !== null) || typeof x === 'function';
    }
    function assertObject(x, context) {
        if (!isObject(x)) {
            throw new TypeError(context + " is not an object.");
        }
    }
    function assertRequiredArgument(x, position, context) {
        if (x === undefined) {
            throw new TypeError("Parameter " + position + " is required in '" + context + "'.");
        }
    }
    function assertRequiredField(x, field, context) {
        if (x === undefined) {
            throw new TypeError(field + " is required in '" + context + "'.");
        }
    }
    // https://heycam.github.io/webidl/#idl-unrestricted-double
    function convertUnrestrictedDouble(value) {
        return Number(value);
    }
    function censorNegativeZero(x) {
        return x === 0 ? 0 : x;
    }
    function integerPart(x) {
        return censorNegativeZero(MathTrunc(x));
    }
    // https://heycam.github.io/webidl/#idl-unsigned-long-long
    function convertUnsignedLongLongWithEnforceRange(value, context) {
        var lowerBound = 0;
        var upperBound = Number.MAX_SAFE_INTEGER;
        var x = Number(value);
        x = censorNegativeZero(x);
        if (!NumberIsFinite(x)) {
            throw new TypeError(context + " is not a finite number");
        }
        x = integerPart(x);
        if (x < lowerBound || x > upperBound) {
            throw new TypeError(context + " is outside the accepted range of " + lowerBound + " to " + upperBound + ", inclusive");
        }
        if (!NumberIsFinite(x) || x === 0) {
            return 0;
        }
        // TODO Use BigInt if supported?
        // let xBigInt = BigInt(integerPart(x));
        // xBigInt = BigInt.asUintN(64, xBigInt);
        // return Number(xBigInt);
        return x;
    }

    function assertReadableStream(x, context) {
        if (!IsReadableStream(x)) {
            throw new TypeError(context + " is not a ReadableStream.");
        }
    }

    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
    }
    function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        var reader = stream._reader;
        var readRequest = reader._readRequests.shift();
        if (done) {
            readRequest._closeSteps();
        }
        else {
            readRequest._chunkSteps(chunk);
        }
    }
    function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
    }
    function ReadableStreamHasDefaultReader(stream) {
        var reader = stream._reader;
        if (reader === undefined) {
            return false;
        }
        if (!IsReadableStreamDefaultReader(reader)) {
            return false;
        }
        return true;
    }
    /**
     * A default reader vended by a {@link ReadableStream}.
     *
     * @public
     */
    var ReadableStreamDefaultReader = /** @class */ (function () {
        function ReadableStreamDefaultReader(stream) {
            assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
            assertReadableStream(stream, 'First parameter');
            if (IsReadableStreamLocked(stream)) {
                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = new SimpleQueue();
        }
        Object.defineProperty(ReadableStreamDefaultReader.prototype, "closed", {
            /**
             * Returns a promise that will be fulfilled when the stream becomes closed,
             * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
             */
            get: function () {
                if (!IsReadableStreamDefaultReader(this)) {
                    return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
                }
                return this._closedPromise;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        ReadableStreamDefaultReader.prototype.cancel = function (reason) {
            if (reason === void 0) { reason = undefined; }
            if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('cancel'));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
        };
        /**
         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */
        ReadableStreamDefaultReader.prototype.read = function () {
            if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException('read'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('read from'));
            }
            var resolvePromise;
            var rejectPromise;
            var promise = newPromise(function (resolve, reject) {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            var readRequest = {
                _chunkSteps: function (chunk) { return resolvePromise({ value: chunk, done: false }); },
                _closeSteps: function () { return resolvePromise({ value: undefined, done: true }); },
                _errorSteps: function (e) { return rejectPromise(e); }
            };
            ReadableStreamDefaultReaderRead(this, readRequest);
            return promise;
        };
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        ReadableStreamDefaultReader.prototype.releaseLock = function () {
            if (!IsReadableStreamDefaultReader(this)) {
                throw defaultReaderBrandCheckException('releaseLock');
            }
            if (this._ownerReadableStream === undefined) {
                return;
            }
            if (this._readRequests.length > 0) {
                throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
            }
            ReadableStreamReaderGenericRelease(this);
        };
        return ReadableStreamDefaultReader;
    }());
    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
            value: 'ReadableStreamDefaultReader',
            configurable: true
        });
    }
    // Abstract operations for the readers.
    function IsReadableStreamDefaultReader(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
            return false;
        }
        return true;
    }
    function ReadableStreamDefaultReaderRead(reader, readRequest) {
        var stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === 'closed') {
            readRequest._closeSteps();
        }
        else if (stream._state === 'errored') {
            readRequest._errorSteps(stream._storedError);
        }
        else {
            stream._readableStreamController[PullSteps](readRequest);
        }
    }
    // Helper functions for the ReadableStreamDefaultReader.
    function defaultReaderBrandCheckException(name) {
        return new TypeError("ReadableStreamDefaultReader.prototype." + name + " can only be used on a ReadableStreamDefaultReader");
    }

    /// <reference lib="es2018.asynciterable" />
    var _a;
    var AsyncIteratorPrototype;
    if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
        // We're running inside a ES2018+ environment, but we're compiling to an older syntax.
        // We cannot access %AsyncIteratorPrototype% without non-ES2018 syntax, but we can re-create it.
        AsyncIteratorPrototype = (_a = {},
            // 25.1.3.1 %AsyncIteratorPrototype% [ @@asyncIterator ] ( )
            // https://tc39.github.io/ecma262/#sec-asynciteratorprototype-asynciterator
            _a[SymbolPolyfill.asyncIterator] = function () {
                return this;
            },
            _a);
        Object.defineProperty(AsyncIteratorPrototype, SymbolPolyfill.asyncIterator, { enumerable: false });
    }

    /// <reference lib="es2018.asynciterable" />
    var ReadableStreamAsyncIteratorImpl = /** @class */ (function () {
        function ReadableStreamAsyncIteratorImpl(reader, preventCancel) {
            this._ongoingPromise = undefined;
            this._isFinished = false;
            this._reader = reader;
            this._preventCancel = preventCancel;
        }
        ReadableStreamAsyncIteratorImpl.prototype.next = function () {
            var _this = this;
            var nextSteps = function () { return _this._nextSteps(); };
            this._ongoingPromise = this._ongoingPromise ?
                transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
                nextSteps();
            return this._ongoingPromise;
        };
        ReadableStreamAsyncIteratorImpl.prototype.return = function (value) {
            var _this = this;
            var returnSteps = function () { return _this._returnSteps(value); };
            return this._ongoingPromise ?
                transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
                returnSteps();
        };
        ReadableStreamAsyncIteratorImpl.prototype._nextSteps = function () {
            var _this = this;
            if (this._isFinished) {
                return Promise.resolve({ value: undefined, done: true });
            }
            var reader = this._reader;
            if (reader._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('iterate'));
            }
            var resolvePromise;
            var rejectPromise;
            var promise = newPromise(function (resolve, reject) {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            var readRequest = {
                _chunkSteps: function (chunk) {
                    _this._ongoingPromise = undefined;
                    // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                    // FIXME Is this a bug in the specification, or in the test?
                    queueMicrotask(function () { return resolvePromise({ value: chunk, done: false }); });
                },
                _closeSteps: function () {
                    _this._ongoingPromise = undefined;
                    _this._isFinished = true;
                    ReadableStreamReaderGenericRelease(reader);
                    resolvePromise({ value: undefined, done: true });
                },
                _errorSteps: function (reason) {
                    _this._ongoingPromise = undefined;
                    _this._isFinished = true;
                    ReadableStreamReaderGenericRelease(reader);
                    rejectPromise(reason);
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promise;
        };
        ReadableStreamAsyncIteratorImpl.prototype._returnSteps = function (value) {
            if (this._isFinished) {
                return Promise.resolve({ value: value, done: true });
            }
            this._isFinished = true;
            var reader = this._reader;
            if (reader._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('finish iterating'));
            }
            if (!this._preventCancel) {
                var result = ReadableStreamReaderGenericCancel(reader, value);
                ReadableStreamReaderGenericRelease(reader);
                return transformPromiseWith(result, function () { return ({ value: value, done: true }); });
            }
            ReadableStreamReaderGenericRelease(reader);
            return promiseResolvedWith({ value: value, done: true });
        };
        return ReadableStreamAsyncIteratorImpl;
    }());
    var ReadableStreamAsyncIteratorPrototype = {
        next: function () {
            if (!IsReadableStreamAsyncIterator(this)) {
                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
            }
            return this._asyncIteratorImpl.next();
        },
        return: function (value) {
            if (!IsReadableStreamAsyncIterator(this)) {
                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
            }
            return this._asyncIteratorImpl.return(value);
        }
    };
    if (AsyncIteratorPrototype !== undefined) {
        Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
    }
    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        var reader = AcquireReadableStreamDefaultReader(stream);
        var impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
    }
    function IsReadableStreamAsyncIterator(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
            return false;
        }
        return true;
    }
    // Helper functions for the ReadableStream.
    function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError("ReadableStreamAsyncIterator." + name + " can only be used on a ReadableSteamAsyncIterator");
    }

    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
    var NumberIsNaN = Number.isNaN || function (x) {
        // eslint-disable-next-line no-self-compare
        return x !== x;
    };

    function IsFiniteNonNegativeNumber(v) {
        if (!IsNonNegativeNumber(v)) {
            return false;
        }
        if (v === Infinity) {
            return false;
        }
        return true;
    }
    function IsNonNegativeNumber(v) {
        if (typeof v !== 'number') {
            return false;
        }
        if (NumberIsNaN(v)) {
            return false;
        }
        if (v < 0) {
            return false;
        }
        return true;
    }

    function DequeueValue(container) {
        var pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0;
        }
        return pair.value;
    }
    function EnqueueValueWithSize(container, value, size) {
        size = Number(size);
        if (!IsFiniteNonNegativeNumber(size)) {
            throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
        }
        container._queue.push({ value: value, size: size });
        container._queueTotalSize += size;
    }
    function PeekQueueValue(container) {
        var pair = container._queue.peek();
        return pair.value;
    }
    function ResetQueue(container) {
        container._queue = new SimpleQueue();
        container._queueTotalSize = 0;
    }

    function CreateArrayFromList(elements) {
        // We use arrays to represent lists, so this is basically a no-op.
        // Do a slice though just in case we happen to depend on the unique-ness.
        return elements.slice();
    }
    function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
    }
    // Not implemented correctly
    function TransferArrayBuffer(O) {
        return O;
    }
    // Not implemented correctly
    function IsDetachedBuffer(O) {
        return false;
    }

    /**
     * A pull-into request in a {@link ReadableByteStreamController}.
     *
     * @public
     */
    var ReadableStreamBYOBRequest = /** @class */ (function () {
        function ReadableStreamBYOBRequest() {
            throw new TypeError('Illegal constructor');
        }
        Object.defineProperty(ReadableStreamBYOBRequest.prototype, "view", {
            /**
             * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
             */
            get: function () {
                if (!IsReadableStreamBYOBRequest(this)) {
                    throw byobRequestBrandCheckException('view');
                }
                return this._view;
            },
            enumerable: false,
            configurable: true
        });
        ReadableStreamBYOBRequest.prototype.respond = function (bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException('respond');
            }
            assertRequiredArgument(bytesWritten, 1, 'respond');
            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
            if (this._associatedReadableByteStreamController === undefined) {
                throw new TypeError('This BYOB request has been invalidated');
            }
            if (IsDetachedBuffer(this._view.buffer)) ;
            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        };
        ReadableStreamBYOBRequest.prototype.respondWithNewView = function (view) {
            if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException('respondWithNewView');
            }
            assertRequiredArgument(view, 1, 'respondWithNewView');
            if (!ArrayBuffer.isView(view)) {
                throw new TypeError('You can only respond with array buffer views');
            }
            if (view.byteLength === 0) {
                throw new TypeError('chunk must have non-zero byteLength');
            }
            if (view.buffer.byteLength === 0) {
                throw new TypeError("chunk's buffer must have non-zero byteLength");
            }
            if (this._associatedReadableByteStreamController === undefined) {
                throw new TypeError('This BYOB request has been invalidated');
            }
            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        };
        return ReadableStreamBYOBRequest;
    }());
    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
            value: 'ReadableStreamBYOBRequest',
            configurable: true
        });
    }
    /**
     * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
     *
     * @public
     */
    var ReadableByteStreamController = /** @class */ (function () {
        function ReadableByteStreamController() {
            throw new TypeError('Illegal constructor');
        }
        Object.defineProperty(ReadableByteStreamController.prototype, "byobRequest", {
            /**
             * Returns the current BYOB pull request, or `null` if there isn't one.
             */
            get: function () {
                if (!IsReadableByteStreamController(this)) {
                    throw byteStreamControllerBrandCheckException('byobRequest');
                }
                if (this._byobRequest === null && this._pendingPullIntos.length > 0) {
                    var firstDescriptor = this._pendingPullIntos.peek();
                    var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
                    var byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
                    SetUpReadableStreamBYOBRequest(byobRequest, this, view);
                    this._byobRequest = byobRequest;
                }
                return this._byobRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReadableByteStreamController.prototype, "desiredSize", {
            /**
             * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
             * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
             */
            get: function () {
                if (!IsReadableByteStreamController(this)) {
                    throw byteStreamControllerBrandCheckException('desiredSize');
                }
                return ReadableByteStreamControllerGetDesiredSize(this);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        ReadableByteStreamController.prototype.close = function () {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('close');
            }
            if (this._closeRequested) {
                throw new TypeError('The stream has already been closed; do not close it again!');
            }
            var state = this._controlledReadableByteStream._state;
            if (state !== 'readable') {
                throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be closed");
            }
            ReadableByteStreamControllerClose(this);
        };
        ReadableByteStreamController.prototype.enqueue = function (chunk) {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('enqueue');
            }
            assertRequiredArgument(chunk, 1, 'enqueue');
            if (!ArrayBuffer.isView(chunk)) {
                throw new TypeError('chunk must be an array buffer view');
            }
            if (chunk.byteLength === 0) {
                throw new TypeError('chunk must have non-zero byteLength');
            }
            if (chunk.buffer.byteLength === 0) {
                throw new TypeError("chunk's buffer must have non-zero byteLength");
            }
            if (this._closeRequested) {
                throw new TypeError('stream is closed or draining');
            }
            var state = this._controlledReadableByteStream._state;
            if (state !== 'readable') {
                throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be enqueued to");
            }
            ReadableByteStreamControllerEnqueue(this, chunk);
        };
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        ReadableByteStreamController.prototype.error = function (e) {
            if (e === void 0) { e = undefined; }
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('error');
            }
            ReadableByteStreamControllerError(this, e);
        };
        /** @internal */
        ReadableByteStreamController.prototype[CancelSteps] = function (reason) {
            if (this._pendingPullIntos.length > 0) {
                var firstDescriptor = this._pendingPullIntos.peek();
                firstDescriptor.bytesFilled = 0;
            }
            ResetQueue(this);
            var result = this._cancelAlgorithm(reason);
            ReadableByteStreamControllerClearAlgorithms(this);
            return result;
        };
        /** @internal */
        ReadableByteStreamController.prototype[PullSteps] = function (readRequest) {
            var stream = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
                var entry = this._queue.shift();
                this._queueTotalSize -= entry.byteLength;
                ReadableByteStreamControllerHandleQueueDrain(this);
                var view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
                readRequest._chunkSteps(view);
                return;
            }
            var autoAllocateChunkSize = this._autoAllocateChunkSize;
            if (autoAllocateChunkSize !== undefined) {
                var buffer = void 0;
                try {
                    buffer = new ArrayBuffer(autoAllocateChunkSize);
                }
                catch (bufferE) {
                    readRequest._errorSteps(bufferE);
                    return;
                }
                var pullIntoDescriptor = {
                    buffer: buffer,
                    byteOffset: 0,
                    byteLength: autoAllocateChunkSize,
                    bytesFilled: 0,
                    elementSize: 1,
                    viewConstructor: Uint8Array,
                    readerType: 'default'
                };
                this._pendingPullIntos.push(pullIntoDescriptor);
            }
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableByteStreamControllerCallPullIfNeeded(this);
        };
        return ReadableByteStreamController;
    }());
    Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
            value: 'ReadableByteStreamController',
            configurable: true
        });
    }
    // Abstract operations for the ReadableByteStreamController.
    function IsReadableByteStreamController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
            return false;
        }
        return true;
    }
    function IsReadableStreamBYOBRequest(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
            return false;
        }
        return true;
    }
    function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) {
            return;
        }
        if (controller._pulling) {
            controller._pullAgain = true;
            return;
        }
        controller._pulling = true;
        // TODO: Test controller argument
        var pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, function () {
            controller._pulling = false;
            if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
        }, function (e) {
            ReadableByteStreamControllerError(controller, e);
        });
    }
    function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
    }
    function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        var done = false;
        if (stream._state === 'closed') {
            done = true;
        }
        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === 'default') {
            ReadableStreamFulfillReadRequest(stream, filledView, done);
        }
        else {
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
        }
    }
    function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        var bytesFilled = pullIntoDescriptor.bytesFilled;
        var elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
    }
    function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer: buffer, byteOffset: byteOffset, byteLength: byteLength });
        controller._queueTotalSize += byteLength;
    }
    function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        var elementSize = pullIntoDescriptor.elementSize;
        var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
        var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
        var totalBytesToCopyRemaining = maxBytesToCopy;
        var ready = false;
        if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
        }
        var queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
            var headOfQueue = queue.peek();
            var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) {
                queue.shift();
            }
            else {
                headOfQueue.byteOffset += bytesToCopy;
                headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
    }
    function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        pullIntoDescriptor.bytesFilled += size;
    }
    function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(controller._controlledReadableByteStream);
        }
        else {
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
    }
    function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) {
            return;
        }
        controller._byobRequest._associatedReadableByteStreamController = undefined;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
    }
    function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
                return;
            }
            var pullIntoDescriptor = controller._pendingPullIntos.peek();
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            }
        }
    }
    function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
        var stream = controller._controlledReadableByteStream;
        var elementSize = 1;
        if (view.constructor !== DataView) {
            elementSize = view.constructor.BYTES_PER_ELEMENT;
        }
        var ctor = view.constructor;
        var buffer = TransferArrayBuffer(view.buffer);
        var pullIntoDescriptor = {
            buffer: buffer,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize: elementSize,
            viewConstructor: ctor,
            readerType: 'byob'
        };
        if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor);
            // No ReadableByteStreamControllerCallPullIfNeeded() call since:
            // - No change happens on desiredSize
            // - The source has already been notified of that there's at least 1 pending read(view)
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            return;
        }
        if (stream._state === 'closed') {
            var emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            readIntoRequest._closeSteps(emptyView);
            return;
        }
        if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                ReadableByteStreamControllerHandleQueueDrain(controller);
                readIntoRequest._chunkSteps(filledView);
                return;
            }
            if (controller._closeRequested) {
                var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                ReadableByteStreamControllerError(controller, e);
                readIntoRequest._errorSteps(e);
                return;
            }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        var stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
                var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
            }
        }
    }
    function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
            throw new RangeError('bytesWritten out of range');
        }
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
            // TODO: Figure out whether we should detach the buffer or not here.
            return;
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
            var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            var remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
        }
        pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        var firstDescriptor = controller._pendingPullIntos.peek();
        var state = controller._controlledReadableByteStream._state;
        if (state === 'closed') {
            if (bytesWritten !== 0) {
                throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
            }
            ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
        }
        else {
            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        var descriptor = controller._pendingPullIntos.shift();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        return descriptor;
    }
    function ReadableByteStreamControllerShouldCallPull(controller) {
        var stream = controller._controlledReadableByteStream;
        if (stream._state !== 'readable') {
            return false;
        }
        if (controller._closeRequested) {
            return false;
        }
        if (!controller._started) {
            return false;
        }
        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
        }
        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            return true;
        }
        var desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
            return true;
        }
        return false;
    }
    function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
    }
    // A client of ReadableByteStreamController may use these functions directly to bypass state check.
    function ReadableByteStreamControllerClose(controller) {
        var stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== 'readable') {
            return;
        }
        if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
        }
        if (controller._pendingPullIntos.length > 0) {
            var firstPendingPullInto = controller._pendingPullIntos.peek();
            if (firstPendingPullInto.bytesFilled > 0) {
                var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                ReadableByteStreamControllerError(controller, e);
                throw e;
            }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
    }
    function ReadableByteStreamControllerEnqueue(controller, chunk) {
        var stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== 'readable') {
            return;
        }
        var buffer = chunk.buffer;
        var byteOffset = chunk.byteOffset;
        var byteLength = chunk.byteLength;
        var transferredBuffer = TransferArrayBuffer(buffer);
        if (ReadableStreamHasDefaultReader(stream)) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
                ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            }
            else {
                var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
                ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
        }
        else if (ReadableStreamHasBYOBReader(stream)) {
            // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        }
        else {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerError(controller, e) {
        var stream = controller._controlledReadableByteStream;
        if (stream._state !== 'readable') {
            return;
        }
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e);
    }
    function ReadableByteStreamControllerGetDesiredSize(controller) {
        var state = controller._controlledReadableByteStream._state;
        if (state === 'errored') {
            return null;
        }
        if (state === 'closed') {
            return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
    }
    function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        bytesWritten = Number(bytesWritten);
        if (!IsFiniteNonNegativeNumber(bytesWritten)) {
            throw new RangeError('bytesWritten must be a finite');
        }
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
    }
    function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        var firstDescriptor = controller._pendingPullIntos.peek();
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
            throw new RangeError('The region specified by view does not match byobRequest');
        }
        if (firstDescriptor.byteLength !== view.byteLength) {
            throw new RangeError('The buffer of view has different capacity than byobRequest');
        }
        firstDescriptor.buffer = view.buffer;
        ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
    }
    function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
        controller._queue = controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        var startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), function () {
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }, function (r) {
            ReadableByteStreamControllerError(controller, r);
        });
    }
    function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        var controller = Object.create(ReadableByteStreamController.prototype);
        var startAlgorithm = function () { return undefined; };
        var pullAlgorithm = function () { return promiseResolvedWith(undefined); };
        var cancelAlgorithm = function () { return promiseResolvedWith(undefined); };
        if (underlyingByteSource.start !== undefined) {
            startAlgorithm = function () { return underlyingByteSource.start(controller); };
        }
        if (underlyingByteSource.pull !== undefined) {
            pullAlgorithm = function () { return underlyingByteSource.pull(controller); };
        }
        if (underlyingByteSource.cancel !== undefined) {
            cancelAlgorithm = function (reason) { return underlyingByteSource.cancel(reason); };
        }
        var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
            throw new TypeError('autoAllocateChunkSize must be greater than 0');
        }
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
    }
    function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
    }
    // Helper functions for the ReadableStreamBYOBRequest.
    function byobRequestBrandCheckException(name) {
        return new TypeError("ReadableStreamBYOBRequest.prototype." + name + " can only be used on a ReadableStreamBYOBRequest");
    }
    // Helper functions for the ReadableByteStreamController.
    function byteStreamControllerBrandCheckException(name) {
        return new TypeError("ReadableByteStreamController.prototype." + name + " can only be used on a ReadableByteStreamController");
    }

    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
    }
    function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        var reader = stream._reader;
        var readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
            readIntoRequest._closeSteps(chunk);
        }
        else {
            readIntoRequest._chunkSteps(chunk);
        }
    }
    function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
    }
    function ReadableStreamHasBYOBReader(stream) {
        var reader = stream._reader;
        if (reader === undefined) {
            return false;
        }
        if (!IsReadableStreamBYOBReader(reader)) {
            return false;
        }
        return true;
    }
    /**
     * A BYOB reader vended by a {@link ReadableStream}.
     *
     * @public
     */
    var ReadableStreamBYOBReader = /** @class */ (function () {
        function ReadableStreamBYOBReader(stream) {
            assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
            assertReadableStream(stream, 'First parameter');
            if (IsReadableStreamLocked(stream)) {
                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            }
            if (!IsReadableByteStreamController(stream._readableStreamController)) {
                throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
                    'source');
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = new SimpleQueue();
        }
        Object.defineProperty(ReadableStreamBYOBReader.prototype, "closed", {
            /**
             * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
             * the reader's lock is released before the stream finishes closing.
             */
            get: function () {
                if (!IsReadableStreamBYOBReader(this)) {
                    return promiseRejectedWith(byobReaderBrandCheckException('closed'));
                }
                return this._closedPromise;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        ReadableStreamBYOBReader.prototype.cancel = function (reason) {
            if (reason === void 0) { reason = undefined; }
            if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('cancel'));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
        };
        /**
         * Attempts to reads bytes into view, and returns a promise resolved with the result.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */
        ReadableStreamBYOBReader.prototype.read = function (view) {
            if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException('read'));
            }
            if (!ArrayBuffer.isView(view)) {
                return promiseRejectedWith(new TypeError('view must be an array buffer view'));
            }
            if (view.byteLength === 0) {
                return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
            }
            if (view.buffer.byteLength === 0) {
                return promiseRejectedWith(new TypeError("view's buffer must have non-zero byteLength"));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('read from'));
            }
            var resolvePromise;
            var rejectPromise;
            var promise = newPromise(function (resolve, reject) {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            var readIntoRequest = {
                _chunkSteps: function (chunk) { return resolvePromise({ value: chunk, done: false }); },
                _closeSteps: function (chunk) { return resolvePromise({ value: chunk, done: true }); },
                _errorSteps: function (e) { return rejectPromise(e); }
            };
            ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
            return promise;
        };
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        ReadableStreamBYOBReader.prototype.releaseLock = function () {
            if (!IsReadableStreamBYOBReader(this)) {
                throw byobReaderBrandCheckException('releaseLock');
            }
            if (this._ownerReadableStream === undefined) {
                return;
            }
            if (this._readIntoRequests.length > 0) {
                throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
            }
            ReadableStreamReaderGenericRelease(this);
        };
        return ReadableStreamBYOBReader;
    }());
    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
            value: 'ReadableStreamBYOBReader',
            configurable: true
        });
    }
    // Abstract operations for the readers.
    function IsReadableStreamBYOBReader(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
            return false;
        }
        return true;
    }
    function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
        var stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === 'errored') {
            readIntoRequest._errorSteps(stream._storedError);
        }
        else {
            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
        }
    }
    // Helper functions for the ReadableStreamBYOBReader.
    function byobReaderBrandCheckException(name) {
        return new TypeError("ReadableStreamBYOBReader.prototype." + name + " can only be used on a ReadableStreamBYOBReader");
    }

    function ExtractHighWaterMark(strategy, defaultHWM) {
        var highWaterMark = strategy.highWaterMark;
        if (highWaterMark === undefined) {
            return defaultHWM;
        }
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError('Invalid highWaterMark');
        }
        return highWaterMark;
    }
    function ExtractSizeAlgorithm(strategy) {
        var size = strategy.size;
        if (!size) {
            return function () { return 1; };
        }
        return size;
    }

    function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        var size = init === null || init === void 0 ? void 0 : init.size;
        return {
            highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
            size: size === undefined ? undefined : convertQueuingStrategySize(size, context + " has member 'size' that")
        };
    }
    function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return function (chunk) { return convertUnrestrictedDouble(fn(chunk)); };
    }

    function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        var abort = original === null || original === void 0 ? void 0 : original.abort;
        var close = original === null || original === void 0 ? void 0 : original.close;
        var start = original === null || original === void 0 ? void 0 : original.start;
        var type = original === null || original === void 0 ? void 0 : original.type;
        var write = original === null || original === void 0 ? void 0 : original.write;
        return {
            abort: abort === undefined ?
                undefined :
                convertUnderlyingSinkAbortCallback(abort, original, context + " has member 'abort' that"),
            close: close === undefined ?
                undefined :
                convertUnderlyingSinkCloseCallback(close, original, context + " has member 'close' that"),
            start: start === undefined ?
                undefined :
                convertUnderlyingSinkStartCallback(start, original, context + " has member 'start' that"),
            write: write === undefined ?
                undefined :
                convertUnderlyingSinkWriteCallback(write, original, context + " has member 'write' that"),
            type: type
        };
    }
    function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (reason) { return promiseCall(fn, original, [reason]); };
    }
    function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return function () { return promiseCall(fn, original, []); };
    }
    function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (controller) { return reflectCall(fn, original, [controller]); };
    }
    function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (chunk, controller) { return promiseCall(fn, original, [chunk, controller]); };
    }

    function assertWritableStream(x, context) {
        if (!IsWritableStream(x)) {
            throw new TypeError(context + " is not a WritableStream.");
        }
    }

    /**
     * A writable stream represents a destination for data, into which you can write.
     *
     * @public
     */
    var WritableStream = /** @class */ (function () {
        function WritableStream(rawUnderlyingSink, rawStrategy) {
            if (rawUnderlyingSink === void 0) { rawUnderlyingSink = {}; }
            if (rawStrategy === void 0) { rawStrategy = {}; }
            if (rawUnderlyingSink === undefined) {
                rawUnderlyingSink = null;
            }
            else {
                assertObject(rawUnderlyingSink, 'First parameter');
            }
            var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
            var underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
            InitializeWritableStream(this);
            var type = underlyingSink.type;
            if (type !== undefined) {
                throw new RangeError('Invalid type is specified');
            }
            var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            var highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        Object.defineProperty(WritableStream.prototype, "locked", {
            /**
             * Returns whether or not the writable stream is locked to a writer.
             */
            get: function () {
                if (!IsWritableStream(this)) {
                    throw streamBrandCheckException$2('locked');
                }
                return IsWritableStreamLocked(this);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
         * mechanism of the underlying sink.
         *
         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
         * the stream) if the stream is currently locked.
         */
        WritableStream.prototype.abort = function (reason) {
            if (reason === void 0) { reason = undefined; }
            if (!IsWritableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$2('abort'));
            }
            if (IsWritableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
            }
            return WritableStreamAbort(this, reason);
        };
        /**
         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
         *
         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
         */
        WritableStream.prototype.close = function () {
            if (!IsWritableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$2('close'));
            }
            if (IsWritableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
            }
            if (WritableStreamCloseQueuedOrInFlight(this)) {
                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
            }
            return WritableStreamClose(this);
        };
        /**
         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
         * is locked, no other writer can be acquired until this one is released.
         *
         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
         */
        WritableStream.prototype.getWriter = function () {
            if (!IsWritableStream(this)) {
                throw streamBrandCheckException$2('getWriter');
            }
            return AcquireWritableStreamDefaultWriter(this);
        };
        return WritableStream;
    }());
    Object.defineProperties(WritableStream.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
            value: 'WritableStream',
            configurable: true
        });
    }
    // Abstract operations for the WritableStream.
    function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
    }
    // Throws if and only if startAlgorithm throws.
    function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        if (highWaterMark === void 0) { highWaterMark = 1; }
        if (sizeAlgorithm === void 0) { sizeAlgorithm = function () { return 1; }; }
        var stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        var controller = Object.create(WritableStreamDefaultController.prototype);
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
    }
    function InitializeWritableStream(stream) {
        stream._state = 'writable';
        // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
        // 'erroring' or 'errored'. May be set to an undefined value.
        stream._storedError = undefined;
        stream._writer = undefined;
        // Initialize to undefined first because the constructor of the controller checks this
        // variable to validate the caller.
        stream._writableStreamController = undefined;
        // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
        // producer without waiting for the queued writes to finish.
        stream._writeRequests = new SimpleQueue();
        // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
        // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
        stream._inFlightWriteRequest = undefined;
        // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
        // has been detached.
        stream._closeRequest = undefined;
        // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
        // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
        stream._inFlightCloseRequest = undefined;
        // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
        stream._pendingAbortRequest = undefined;
        // The backpressure signal set by the controller.
        stream._backpressure = false;
    }
    function IsWritableStream(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
            return false;
        }
        return true;
    }
    function IsWritableStreamLocked(stream) {
        if (stream._writer === undefined) {
            return false;
        }
        return true;
    }
    function WritableStreamAbort(stream, reason) {
        var state = stream._state;
        if (state === 'closed' || state === 'errored') {
            return promiseResolvedWith(undefined);
        }
        if (stream._pendingAbortRequest !== undefined) {
            return stream._pendingAbortRequest._promise;
        }
        var wasAlreadyErroring = false;
        if (state === 'erroring') {
            wasAlreadyErroring = true;
            // reason will not be used, so don't keep a reference to it.
            reason = undefined;
        }
        var promise = newPromise(function (resolve, reject) {
            stream._pendingAbortRequest = {
                _promise: undefined,
                _resolve: resolve,
                _reject: reject,
                _reason: reason,
                _wasAlreadyErroring: wasAlreadyErroring
            };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
            WritableStreamStartErroring(stream, reason);
        }
        return promise;
    }
    function WritableStreamClose(stream) {
        var state = stream._state;
        if (state === 'closed' || state === 'errored') {
            return promiseRejectedWith(new TypeError("The stream (in " + state + " state) is not in the writable state and cannot be closed"));
        }
        var promise = newPromise(function (resolve, reject) {
            var closeRequest = {
                _resolve: resolve,
                _reject: reject
            };
            stream._closeRequest = closeRequest;
        });
        var writer = stream._writer;
        if (writer !== undefined && stream._backpressure && state === 'writable') {
            defaultWriterReadyPromiseResolve(writer);
        }
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
    }
    // WritableStream API exposed for controllers.
    function WritableStreamAddWriteRequest(stream) {
        var promise = newPromise(function (resolve, reject) {
            var writeRequest = {
                _resolve: resolve,
                _reject: reject
            };
            stream._writeRequests.push(writeRequest);
        });
        return promise;
    }
    function WritableStreamDealWithRejection(stream, error) {
        var state = stream._state;
        if (state === 'writable') {
            WritableStreamStartErroring(stream, error);
            return;
        }
        WritableStreamFinishErroring(stream);
    }
    function WritableStreamStartErroring(stream, reason) {
        var controller = stream._writableStreamController;
        stream._state = 'erroring';
        stream._storedError = reason;
        var writer = stream._writer;
        if (writer !== undefined) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        }
        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
            WritableStreamFinishErroring(stream);
        }
    }
    function WritableStreamFinishErroring(stream) {
        stream._state = 'errored';
        stream._writableStreamController[ErrorSteps]();
        var storedError = stream._storedError;
        stream._writeRequests.forEach(function (writeRequest) {
            writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === undefined) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
        }
        var abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = undefined;
        if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
        }
        var promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, function () {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        }, function (reason) {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        });
    }
    function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(undefined);
        stream._inFlightWriteRequest = undefined;
    }
    function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error);
        stream._inFlightWriteRequest = undefined;
        WritableStreamDealWithRejection(stream, error);
    }
    function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(undefined);
        stream._inFlightCloseRequest = undefined;
        var state = stream._state;
        if (state === 'erroring') {
            // The error was too late to do anything, so it is ignored.
            stream._storedError = undefined;
            if (stream._pendingAbortRequest !== undefined) {
                stream._pendingAbortRequest._resolve();
                stream._pendingAbortRequest = undefined;
            }
        }
        stream._state = 'closed';
        var writer = stream._writer;
        if (writer !== undefined) {
            defaultWriterClosedPromiseResolve(writer);
        }
    }
    function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error);
        stream._inFlightCloseRequest = undefined;
        // Never execute sink abort() after sink close().
        if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._reject(error);
            stream._pendingAbortRequest = undefined;
        }
        WritableStreamDealWithRejection(stream, error);
    }
    // TODO(ricea): Fix alphabetical order.
    function WritableStreamCloseQueuedOrInFlight(stream) {
        if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
            return false;
        }
        return true;
    }
    function WritableStreamHasOperationMarkedInFlight(stream) {
        if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
            return false;
        }
        return true;
    }
    function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = undefined;
    }
    function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
    }
    function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== undefined) {
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = undefined;
        }
        var writer = stream._writer;
        if (writer !== undefined) {
            defaultWriterClosedPromiseReject(writer, stream._storedError);
        }
    }
    function WritableStreamUpdateBackpressure(stream, backpressure) {
        var writer = stream._writer;
        if (writer !== undefined && backpressure !== stream._backpressure) {
            if (backpressure) {
                defaultWriterReadyPromiseReset(writer);
            }
            else {
                defaultWriterReadyPromiseResolve(writer);
            }
        }
        stream._backpressure = backpressure;
    }
    /**
     * A default writer vended by a {@link WritableStream}.
     *
     * @public
     */
    var WritableStreamDefaultWriter = /** @class */ (function () {
        function WritableStreamDefaultWriter(stream) {
            assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
            assertWritableStream(stream, 'First parameter');
            if (IsWritableStreamLocked(stream)) {
                throw new TypeError('This stream has already been locked for exclusive writing by another writer');
            }
            this._ownerWritableStream = stream;
            stream._writer = this;
            var state = stream._state;
            if (state === 'writable') {
                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                    defaultWriterReadyPromiseInitialize(this);
                }
                else {
                    defaultWriterReadyPromiseInitializeAsResolved(this);
                }
                defaultWriterClosedPromiseInitialize(this);
            }
            else if (state === 'erroring') {
                defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
                defaultWriterClosedPromiseInitialize(this);
            }
            else if (state === 'closed') {
                defaultWriterReadyPromiseInitializeAsResolved(this);
                defaultWriterClosedPromiseInitializeAsResolved(this);
            }
            else {
                var storedError = stream._storedError;
                defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
                defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
            }
        }
        Object.defineProperty(WritableStreamDefaultWriter.prototype, "closed", {
            /**
             * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
             * the writer’s lock is released before the stream finishes closing.
             */
            get: function () {
                if (!IsWritableStreamDefaultWriter(this)) {
                    return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
                }
                return this._closedPromise;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WritableStreamDefaultWriter.prototype, "desiredSize", {
            /**
             * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
             * A producer can use this information to determine the right amount of data to write.
             *
             * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
             * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
             * the writer’s lock is released.
             */
            get: function () {
                if (!IsWritableStreamDefaultWriter(this)) {
                    throw defaultWriterBrandCheckException('desiredSize');
                }
                if (this._ownerWritableStream === undefined) {
                    throw defaultWriterLockException('desiredSize');
                }
                return WritableStreamDefaultWriterGetDesiredSize(this);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WritableStreamDefaultWriter.prototype, "ready", {
            /**
             * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
             * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
             * back to zero or below, the getter will return a new promise that stays pending until the next transition.
             *
             * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
             * rejected.
             */
            get: function () {
                if (!IsWritableStreamDefaultWriter(this)) {
                    return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
                }
                return this._readyPromise;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
         */
        WritableStreamDefaultWriter.prototype.abort = function (reason) {
            if (reason === void 0) { reason = undefined; }
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
            }
            if (this._ownerWritableStream === undefined) {
                return promiseRejectedWith(defaultWriterLockException('abort'));
            }
            return WritableStreamDefaultWriterAbort(this, reason);
        };
        /**
         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
         */
        WritableStreamDefaultWriter.prototype.close = function () {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('close'));
            }
            var stream = this._ownerWritableStream;
            if (stream === undefined) {
                return promiseRejectedWith(defaultWriterLockException('close'));
            }
            if (WritableStreamCloseQueuedOrInFlight(stream)) {
                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
            }
            return WritableStreamDefaultWriterClose(this);
        };
        /**
         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
         * now on; otherwise, the writer will appear closed.
         *
         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
         * other producers from writing in an interleaved manner.
         */
        WritableStreamDefaultWriter.prototype.releaseLock = function () {
            if (!IsWritableStreamDefaultWriter(this)) {
                throw defaultWriterBrandCheckException('releaseLock');
            }
            var stream = this._ownerWritableStream;
            if (stream === undefined) {
                return;
            }
            WritableStreamDefaultWriterRelease(this);
        };
        WritableStreamDefaultWriter.prototype.write = function (chunk) {
            if (chunk === void 0) { chunk = undefined; }
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('write'));
            }
            if (this._ownerWritableStream === undefined) {
                return promiseRejectedWith(defaultWriterLockException('write to'));
            }
            return WritableStreamDefaultWriterWrite(this, chunk);
        };
        return WritableStreamDefaultWriter;
    }());
    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
            value: 'WritableStreamDefaultWriter',
            configurable: true
        });
    }
    // Abstract operations for the WritableStreamDefaultWriter.
    function IsWritableStreamDefaultWriter(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
            return false;
        }
        return true;
    }
    // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
    function WritableStreamDefaultWriterAbort(writer, reason) {
        var stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
    }
    function WritableStreamDefaultWriterClose(writer) {
        var stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
    }
    function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        var stream = writer._ownerWritableStream;
        var state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
            return promiseResolvedWith(undefined);
        }
        if (state === 'errored') {
            return promiseRejectedWith(stream._storedError);
        }
        return WritableStreamDefaultWriterClose(writer);
    }
    function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
        if (writer._closedPromiseState === 'pending') {
            defaultWriterClosedPromiseReject(writer, error);
        }
        else {
            defaultWriterClosedPromiseResetToRejected(writer, error);
        }
    }
    function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
        if (writer._readyPromiseState === 'pending') {
            defaultWriterReadyPromiseReject(writer, error);
        }
        else {
            defaultWriterReadyPromiseResetToRejected(writer, error);
        }
    }
    function WritableStreamDefaultWriterGetDesiredSize(writer) {
        var stream = writer._ownerWritableStream;
        var state = stream._state;
        if (state === 'errored' || state === 'erroring') {
            return null;
        }
        if (state === 'closed') {
            return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
    }
    function WritableStreamDefaultWriterRelease(writer) {
        var stream = writer._ownerWritableStream;
        var releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
        // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
        // rejected until afterwards. This means that simply testing state will not work.
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
        stream._writer = undefined;
        writer._ownerWritableStream = undefined;
    }
    function WritableStreamDefaultWriterWrite(writer, chunk) {
        var stream = writer._ownerWritableStream;
        var controller = stream._writableStreamController;
        var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream) {
            return promiseRejectedWith(defaultWriterLockException('write to'));
        }
        var state = stream._state;
        if (state === 'errored') {
            return promiseRejectedWith(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
            return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
        }
        if (state === 'erroring') {
            return promiseRejectedWith(stream._storedError);
        }
        var promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
    }
    var closeSentinel = {};
    /**
     * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
     *
     * @public
     */
    var WritableStreamDefaultController = /** @class */ (function () {
        function WritableStreamDefaultController() {
            throw new TypeError('Illegal constructor');
        }
        /**
         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
         *
         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
         * normal lifecycle of interactions with the underlying sink.
         */
        WritableStreamDefaultController.prototype.error = function (e) {
            if (e === void 0) { e = undefined; }
            if (!IsWritableStreamDefaultController(this)) {
                throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
            }
            var state = this._controlledWritableStream._state;
            if (state !== 'writable') {
                // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
                // just treat it as a no-op.
                return;
            }
            WritableStreamDefaultControllerError(this, e);
        };
        /** @internal */
        WritableStreamDefaultController.prototype[AbortSteps] = function (reason) {
            var result = this._abortAlgorithm(reason);
            WritableStreamDefaultControllerClearAlgorithms(this);
            return result;
        };
        /** @internal */
        WritableStreamDefaultController.prototype[ErrorSteps] = function () {
            ResetQueue(this);
        };
        return WritableStreamDefaultController;
    }());
    Object.defineProperties(WritableStreamDefaultController.prototype, {
        error: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: 'WritableStreamDefaultController',
            configurable: true
        });
    }
    // Abstract operations implementing interface required by the WritableStream.
    function IsWritableStreamDefaultController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
            return false;
        }
        return true;
    }
    function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
        controller._queue = undefined;
        controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        var startResult = startAlgorithm();
        var startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, function () {
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, function (r) {
            controller._started = true;
            WritableStreamDealWithRejection(stream, r);
        });
    }
    function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        var controller = Object.create(WritableStreamDefaultController.prototype);
        var startAlgorithm = function () { return undefined; };
        var writeAlgorithm = function () { return promiseResolvedWith(undefined); };
        var closeAlgorithm = function () { return promiseResolvedWith(undefined); };
        var abortAlgorithm = function () { return promiseResolvedWith(undefined); };
        if (underlyingSink.start !== undefined) {
            startAlgorithm = function () { return underlyingSink.start(controller); };
        }
        if (underlyingSink.write !== undefined) {
            writeAlgorithm = function (chunk) { return underlyingSink.write(chunk, controller); };
        }
        if (underlyingSink.close !== undefined) {
            closeAlgorithm = function () { return underlyingSink.close(); };
        }
        if (underlyingSink.abort !== undefined) {
            abortAlgorithm = function (reason) { return underlyingSink.abort(reason); };
        }
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    }
    // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
    function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = undefined;
        controller._closeAlgorithm = undefined;
        controller._abortAlgorithm = undefined;
        controller._strategySizeAlgorithm = undefined;
    }
    function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
            return controller._strategySizeAlgorithm(chunk);
        }
        catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
        }
    }
    function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
    }
    function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
        }
        catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
        }
        var stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
            var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    // Abstract operations for the WritableStreamDefaultController.
    function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        var stream = controller._controlledWritableStream;
        if (!controller._started) {
            return;
        }
        if (stream._inFlightWriteRequest !== undefined) {
            return;
        }
        var state = stream._state;
        if (state === 'erroring') {
            WritableStreamFinishErroring(stream);
            return;
        }
        if (controller._queue.length === 0) {
            return;
        }
        var value = PeekQueueValue(controller);
        if (value === closeSentinel) {
            WritableStreamDefaultControllerProcessClose(controller);
        }
        else {
            WritableStreamDefaultControllerProcessWrite(controller, value);
        }
    }
    function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        if (controller._controlledWritableStream._state === 'writable') {
            WritableStreamDefaultControllerError(controller, error);
        }
    }
    function WritableStreamDefaultControllerProcessClose(controller) {
        var stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        var sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(sinkClosePromise, function () {
            WritableStreamFinishInFlightClose(stream);
        }, function (reason) {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
        });
    }
    function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        var stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        var sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, function () {
            WritableStreamFinishInFlightWrite(stream);
            var state = stream._state;
            DequeueValue(controller);
            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
                var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, function (reason) {
            if (stream._state === 'writable') {
                WritableStreamDefaultControllerClearAlgorithms(controller);
            }
            WritableStreamFinishInFlightWriteWithError(stream, reason);
        });
    }
    function WritableStreamDefaultControllerGetBackpressure(controller) {
        var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
    }
    // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
    function WritableStreamDefaultControllerError(controller, error) {
        var stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error);
    }
    // Helper functions for the WritableStream.
    function streamBrandCheckException$2(name) {
        return new TypeError("WritableStream.prototype." + name + " can only be used on a WritableStream");
    }
    // Helper functions for the WritableStreamDefaultWriter.
    function defaultWriterBrandCheckException(name) {
        return new TypeError("WritableStreamDefaultWriter.prototype." + name + " can only be used on a WritableStreamDefaultWriter");
    }
    function defaultWriterLockException(name) {
        return new TypeError('Cannot ' + name + ' a stream using a released writer');
    }
    function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise(function (resolve, reject) {
            writer._closedPromise_resolve = resolve;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = 'pending';
        });
    }
    function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
    }
    function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
    }
    function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = undefined;
        writer._closedPromise_reject = undefined;
        writer._closedPromiseState = 'rejected';
    }
    function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === undefined) {
            return;
        }
        writer._closedPromise_resolve(undefined);
        writer._closedPromise_resolve = undefined;
        writer._closedPromise_reject = undefined;
        writer._closedPromiseState = 'resolved';
    }
    function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise(function (resolve, reject) {
            writer._readyPromise_resolve = resolve;
            writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = 'pending';
    }
    function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
    }
    function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
    }
    function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = undefined;
        writer._readyPromise_reject = undefined;
        writer._readyPromiseState = 'rejected';
    }
    function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
    }
    function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === undefined) {
            return;
        }
        writer._readyPromise_resolve(undefined);
        writer._readyPromise_resolve = undefined;
        writer._readyPromise_reject = undefined;
        writer._readyPromiseState = 'fulfilled';
    }

    function isAbortSignal(value) {
        if (typeof value !== 'object' || value === null) {
            return false;
        }
        try {
            return typeof value.aborted === 'boolean';
        }
        catch (_a) {
            // AbortSignal.prototype.aborted throws if its brand check fails
            return false;
        }
    }

    /// <reference lib="dom" />
    var NativeDOMException = typeof DOMException !== 'undefined' ? DOMException : undefined;

    /// <reference types="node" />
    function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
            return false;
        }
        try {
            new ctor();
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    function createDOMExceptionPolyfill() {
        // eslint-disable-next-line no-shadow
        var ctor = function DOMException(message, name) {
            this.message = message || '';
            this.name = name || 'Error';
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            }
        };
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, 'constructor', { value: ctor, writable: true, configurable: true });
        return ctor;
    }
    // eslint-disable-next-line no-redeclare
    var DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();

    function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        var reader = AcquireReadableStreamDefaultReader(source);
        var writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        var shuttingDown = false;
        // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
        var currentWrite = promiseResolvedWith(undefined);
        return newPromise(function (resolve, reject) {
            var abortAlgorithm;
            if (signal !== undefined) {
                abortAlgorithm = function () {
                    var error = new DOMException$1('Aborted', 'AbortError');
                    var actions = [];
                    if (!preventAbort) {
                        actions.push(function () {
                            if (dest._state === 'writable') {
                                return WritableStreamAbort(dest, error);
                            }
                            return promiseResolvedWith(undefined);
                        });
                    }
                    if (!preventCancel) {
                        actions.push(function () {
                            if (source._state === 'readable') {
                                return ReadableStreamCancel(source, error);
                            }
                            return promiseResolvedWith(undefined);
                        });
                    }
                    shutdownWithAction(function () { return Promise.all(actions.map(function (action) { return action(); })); }, true, error);
                };
                if (signal.aborted) {
                    abortAlgorithm();
                    return;
                }
                signal.addEventListener('abort', abortAlgorithm);
            }
            // Using reader and writer, read all chunks from this and write them to dest
            // - Backpressure must be enforced
            // - Shutdown must stop all activity
            function pipeLoop() {
                return newPromise(function (resolveLoop, rejectLoop) {
                    function next(done) {
                        if (done) {
                            resolveLoop();
                        }
                        else {
                            // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                            // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                            PerformPromiseThen(pipeStep(), next, rejectLoop);
                        }
                    }
                    next(false);
                });
            }
            function pipeStep() {
                if (shuttingDown) {
                    return promiseResolvedWith(true);
                }
                return PerformPromiseThen(writer._readyPromise, function () {
                    return newPromise(function (resolveRead, rejectRead) {
                        ReadableStreamDefaultReaderRead(reader, {
                            _chunkSteps: function (chunk) {
                                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                                resolveRead(false);
                            },
                            _closeSteps: function () { return resolveRead(true); },
                            _errorSteps: rejectRead
                        });
                    });
                });
            }
            // Errors must be propagated forward
            isOrBecomesErrored(source, reader._closedPromise, function (storedError) {
                if (!preventAbort) {
                    shutdownWithAction(function () { return WritableStreamAbort(dest, storedError); }, true, storedError);
                }
                else {
                    shutdown(true, storedError);
                }
            });
            // Errors must be propagated backward
            isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
                if (!preventCancel) {
                    shutdownWithAction(function () { return ReadableStreamCancel(source, storedError); }, true, storedError);
                }
                else {
                    shutdown(true, storedError);
                }
            });
            // Closing must be propagated forward
            isOrBecomesClosed(source, reader._closedPromise, function () {
                if (!preventClose) {
                    shutdownWithAction(function () { return WritableStreamDefaultWriterCloseWithErrorPropagation(writer); });
                }
                else {
                    shutdown();
                }
            });
            // Closing must be propagated backward
            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
                var destClosed_1 = new TypeError('the destination writable stream closed before all data could be piped to it');
                if (!preventCancel) {
                    shutdownWithAction(function () { return ReadableStreamCancel(source, destClosed_1); }, true, destClosed_1);
                }
                else {
                    shutdown(true, destClosed_1);
                }
            }
            setPromiseIsHandledToTrue(pipeLoop());
            function waitForWritesToFinish() {
                // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
                // for that too.
                var oldCurrentWrite = currentWrite;
                return PerformPromiseThen(currentWrite, function () { return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined; });
            }
            function isOrBecomesErrored(stream, promise, action) {
                if (stream._state === 'errored') {
                    action(stream._storedError);
                }
                else {
                    uponRejection(promise, action);
                }
            }
            function isOrBecomesClosed(stream, promise, action) {
                if (stream._state === 'closed') {
                    action();
                }
                else {
                    uponFulfillment(promise, action);
                }
            }
            function shutdownWithAction(action, originalIsError, originalError) {
                if (shuttingDown) {
                    return;
                }
                shuttingDown = true;
                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                    uponFulfillment(waitForWritesToFinish(), doTheRest);
                }
                else {
                    doTheRest();
                }
                function doTheRest() {
                    uponPromise(action(), function () { return finalize(originalIsError, originalError); }, function (newError) { return finalize(true, newError); });
                }
            }
            function shutdown(isError, error) {
                if (shuttingDown) {
                    return;
                }
                shuttingDown = true;
                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                    uponFulfillment(waitForWritesToFinish(), function () { return finalize(isError, error); });
                }
                else {
                    finalize(isError, error);
                }
            }
            function finalize(isError, error) {
                WritableStreamDefaultWriterRelease(writer);
                ReadableStreamReaderGenericRelease(reader);
                if (signal !== undefined) {
                    signal.removeEventListener('abort', abortAlgorithm);
                }
                if (isError) {
                    reject(error);
                }
                else {
                    resolve(undefined);
                }
            }
        });
    }

    /**
     * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
     *
     * @public
     */
    var ReadableStreamDefaultController = /** @class */ (function () {
        function ReadableStreamDefaultController() {
            throw new TypeError('Illegal constructor');
        }
        Object.defineProperty(ReadableStreamDefaultController.prototype, "desiredSize", {
            /**
             * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
             * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
             */
            get: function () {
                if (!IsReadableStreamDefaultController(this)) {
                    throw defaultControllerBrandCheckException$1('desiredSize');
                }
                return ReadableStreamDefaultControllerGetDesiredSize(this);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        ReadableStreamDefaultController.prototype.close = function () {
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('close');
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                throw new TypeError('The stream is not in a state that permits close');
            }
            ReadableStreamDefaultControllerClose(this);
        };
        ReadableStreamDefaultController.prototype.enqueue = function (chunk) {
            if (chunk === void 0) { chunk = undefined; }
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('enqueue');
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                throw new TypeError('The stream is not in a state that permits enqueue');
            }
            return ReadableStreamDefaultControllerEnqueue(this, chunk);
        };
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        ReadableStreamDefaultController.prototype.error = function (e) {
            if (e === void 0) { e = undefined; }
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('error');
            }
            ReadableStreamDefaultControllerError(this, e);
        };
        /** @internal */
        ReadableStreamDefaultController.prototype[CancelSteps] = function (reason) {
            ResetQueue(this);
            var result = this._cancelAlgorithm(reason);
            ReadableStreamDefaultControllerClearAlgorithms(this);
            return result;
        };
        /** @internal */
        ReadableStreamDefaultController.prototype[PullSteps] = function (readRequest) {
            var stream = this._controlledReadableStream;
            if (this._queue.length > 0) {
                var chunk = DequeueValue(this);
                if (this._closeRequested && this._queue.length === 0) {
                    ReadableStreamDefaultControllerClearAlgorithms(this);
                    ReadableStreamClose(stream);
                }
                else {
                    ReadableStreamDefaultControllerCallPullIfNeeded(this);
                }
                readRequest._chunkSteps(chunk);
            }
            else {
                ReadableStreamAddReadRequest(stream, readRequest);
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
        };
        return ReadableStreamDefaultController;
    }());
    Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: 'ReadableStreamDefaultController',
            configurable: true
        });
    }
    // Abstract operations for the ReadableStreamDefaultController.
    function IsReadableStreamDefaultController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
            return false;
        }
        return true;
    }
    function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) {
            return;
        }
        if (controller._pulling) {
            controller._pullAgain = true;
            return;
        }
        controller._pulling = true;
        var pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, function () {
            controller._pulling = false;
            if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
        }, function (e) {
            ReadableStreamDefaultControllerError(controller, e);
        });
    }
    function ReadableStreamDefaultControllerShouldCallPull(controller) {
        var stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return false;
        }
        if (!controller._started) {
            return false;
        }
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
        }
        var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
            return true;
        }
        return false;
    }
    function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
        controller._strategySizeAlgorithm = undefined;
    }
    // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
    function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
        }
        var stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
        }
    }
    function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
        }
        var stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            ReadableStreamFulfillReadRequest(stream, chunk, false);
        }
        else {
            var chunkSize = void 0;
            try {
                chunkSize = controller._strategySizeAlgorithm(chunk);
            }
            catch (chunkSizeE) {
                ReadableStreamDefaultControllerError(controller, chunkSizeE);
                throw chunkSizeE;
            }
            try {
                EnqueueValueWithSize(controller, chunk, chunkSize);
            }
            catch (enqueueE) {
                ReadableStreamDefaultControllerError(controller, enqueueE);
                throw enqueueE;
            }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }
    function ReadableStreamDefaultControllerError(controller, e) {
        var stream = controller._controlledReadableStream;
        if (stream._state !== 'readable') {
            return;
        }
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e);
    }
    function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        var state = controller._controlledReadableStream._state;
        if (state === 'errored') {
            return null;
        }
        if (state === 'closed') {
            return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
    }
    // This is used in the implementation of TransformStream.
    function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
            return false;
        }
        return true;
    }
    function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        var state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === 'readable') {
            return true;
        }
        return false;
    }
    function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = undefined;
        controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        var startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), function () {
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }, function (r) {
            ReadableStreamDefaultControllerError(controller, r);
        });
    }
    function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        var controller = Object.create(ReadableStreamDefaultController.prototype);
        var startAlgorithm = function () { return undefined; };
        var pullAlgorithm = function () { return promiseResolvedWith(undefined); };
        var cancelAlgorithm = function () { return promiseResolvedWith(undefined); };
        if (underlyingSource.start !== undefined) {
            startAlgorithm = function () { return underlyingSource.start(controller); };
        }
        if (underlyingSource.pull !== undefined) {
            pullAlgorithm = function () { return underlyingSource.pull(controller); };
        }
        if (underlyingSource.cancel !== undefined) {
            cancelAlgorithm = function (reason) { return underlyingSource.cancel(reason); };
        }
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    }
    // Helper functions for the ReadableStreamDefaultController.
    function defaultControllerBrandCheckException$1(name) {
        return new TypeError("ReadableStreamDefaultController.prototype." + name + " can only be used on a ReadableStreamDefaultController");
    }

    function ReadableStreamTee(stream, cloneForBranch2) {
        var reader = AcquireReadableStreamDefaultReader(stream);
        var reading = false;
        var canceled1 = false;
        var canceled2 = false;
        var reason1;
        var reason2;
        var branch1;
        var branch2;
        var resolveCancelPromise;
        var cancelPromise = newPromise(function (resolve) {
            resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
            if (reading) {
                return promiseResolvedWith(undefined);
            }
            reading = true;
            var readRequest = {
                _chunkSteps: function (value) {
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    queueMicrotask(function () {
                        reading = false;
                        var value1 = value;
                        var value2 = value;
                        // There is no way to access the cloning code right now in the reference implementation.
                        // If we add one then we'll need an implementation for serializable objects.
                        // if (!canceled2 && cloneForBranch2) {
                        //   value2 = StructuredDeserialize(StructuredSerialize(value2));
                        // }
                        if (!canceled1) {
                            ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, value1);
                        }
                        if (!canceled2) {
                            ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, value2);
                        }
                    });
                },
                _closeSteps: function () {
                    reading = false;
                    if (!canceled1) {
                        ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                    }
                    if (!canceled2) {
                        ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                    }
                    if (!canceled1 || !canceled2) {
                        resolveCancelPromise(undefined);
                    }
                },
                _errorSteps: function () {
                    reading = false;
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promiseResolvedWith(undefined);
        }
        function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
                var compositeReason = CreateArrayFromList([reason1, reason2]);
                var cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
                var compositeReason = CreateArrayFromList([reason1, reason2]);
                var cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function startAlgorithm() {
            // do nothing
        }
        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection(reader._closedPromise, function (r) {
            ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
            ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
            if (!canceled1 || !canceled2) {
                resolveCancelPromise(undefined);
            }
        });
        return [branch1, branch2];
    }

    function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        var original = source;
        var autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        var cancel = original === null || original === void 0 ? void 0 : original.cancel;
        var pull = original === null || original === void 0 ? void 0 : original.pull;
        var start = original === null || original === void 0 ? void 0 : original.start;
        var type = original === null || original === void 0 ? void 0 : original.type;
        return {
            autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
                undefined :
                convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, context + " has member 'autoAllocateChunkSize' that"),
            cancel: cancel === undefined ?
                undefined :
                convertUnderlyingSourceCancelCallback(cancel, original, context + " has member 'cancel' that"),
            pull: pull === undefined ?
                undefined :
                convertUnderlyingSourcePullCallback(pull, original, context + " has member 'pull' that"),
            start: start === undefined ?
                undefined :
                convertUnderlyingSourceStartCallback(start, original, context + " has member 'start' that"),
            type: type === undefined ? undefined : convertReadableStreamType(type, context + " has member 'type' that")
        };
    }
    function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (reason) { return promiseCall(fn, original, [reason]); };
    }
    function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (controller) { return promiseCall(fn, original, [controller]); };
    }
    function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (controller) { return reflectCall(fn, original, [controller]); };
    }
    function convertReadableStreamType(type, context) {
        type = "" + type;
        if (type !== 'bytes') {
            throw new TypeError(context + " '" + type + "' is not a valid enumeration value for ReadableStreamType");
        }
        return type;
    }

    function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        var mode = options === null || options === void 0 ? void 0 : options.mode;
        return {
            mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, context + " has member 'mode' that")
        };
    }
    function convertReadableStreamReaderMode(mode, context) {
        mode = "" + mode;
        if (mode !== 'byob') {
            throw new TypeError(context + " '" + mode + "' is not a valid enumeration value for ReadableStreamReaderMode");
        }
        return mode;
    }

    function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
    }

    function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        var preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
        var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        var preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
        var signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== undefined) {
            assertAbortSignal(signal, context + " has member 'signal' that");
        }
        return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal: signal
        };
    }
    function assertAbortSignal(signal, context) {
        if (!isAbortSignal(signal)) {
            throw new TypeError(context + " is not an AbortSignal.");
        }
    }

    function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        var readable = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable, 'readable', 'ReadableWritablePair');
        assertReadableStream(readable, context + " has member 'readable' that");
        var writable = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable, 'writable', 'ReadableWritablePair');
        assertWritableStream(writable, context + " has member 'writable' that");
        return { readable: readable, writable: writable };
    }

    /**
     * A readable stream represents a source of data, from which you can read.
     *
     * @public
     */
    var ReadableStream = /** @class */ (function () {
        function ReadableStream(rawUnderlyingSource, rawStrategy) {
            if (rawUnderlyingSource === void 0) { rawUnderlyingSource = {}; }
            if (rawStrategy === void 0) { rawStrategy = {}; }
            if (rawUnderlyingSource === undefined) {
                rawUnderlyingSource = null;
            }
            else {
                assertObject(rawUnderlyingSource, 'First parameter');
            }
            var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
            var underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
            InitializeReadableStream(this);
            if (underlyingSource.type === 'bytes') {
                if (strategy.size !== undefined) {
                    throw new RangeError('The strategy for a byte stream cannot have a size function');
                }
                var highWaterMark = ExtractHighWaterMark(strategy, 0);
                SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
            }
            else {
                var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
                var highWaterMark = ExtractHighWaterMark(strategy, 1);
                SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
            }
        }
        Object.defineProperty(ReadableStream.prototype, "locked", {
            /**
             * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
             */
            get: function () {
                if (!IsReadableStream(this)) {
                    throw streamBrandCheckException$1('locked');
                }
                return IsReadableStreamLocked(this);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
         *
         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
         * method, which might or might not use it.
         */
        ReadableStream.prototype.cancel = function (reason) {
            if (reason === void 0) { reason = undefined; }
            if (!IsReadableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$1('cancel'));
            }
            if (IsReadableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
            }
            return ReadableStreamCancel(this, reason);
        };
        ReadableStream.prototype.getReader = function (rawOptions) {
            if (rawOptions === void 0) { rawOptions = undefined; }
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('getReader');
            }
            var options = convertReaderOptions(rawOptions, 'First parameter');
            if (options.mode === undefined) {
                return AcquireReadableStreamDefaultReader(this);
            }
            return AcquireReadableStreamBYOBReader(this);
        };
        ReadableStream.prototype.pipeThrough = function (rawTransform, rawOptions) {
            if (rawOptions === void 0) { rawOptions = {}; }
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('pipeThrough');
            }
            assertRequiredArgument(rawTransform, 1, 'pipeThrough');
            var transform = convertReadableWritablePair(rawTransform, 'First parameter');
            var options = convertPipeOptions(rawOptions, 'Second parameter');
            if (IsReadableStreamLocked(this)) {
                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
            }
            if (IsWritableStreamLocked(transform.writable)) {
                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
            }
            var promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            setPromiseIsHandledToTrue(promise);
            return transform.readable;
        };
        ReadableStream.prototype.pipeTo = function (destination, rawOptions) {
            if (rawOptions === void 0) { rawOptions = {}; }
            if (!IsReadableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
            }
            if (destination === undefined) {
                return promiseRejectedWith("Parameter 1 is required in 'pipeTo'.");
            }
            if (!IsWritableStream(destination)) {
                return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
            }
            var options;
            try {
                options = convertPipeOptions(rawOptions, 'Second parameter');
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            if (IsReadableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
            }
            if (IsWritableStreamLocked(destination)) {
                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
            }
            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        };
        /**
         * Tees this readable stream, returning a two-element array containing the two resulting branches as
         * new {@link ReadableStream} instances.
         *
         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
         * propagated to the stream's underlying source.
         *
         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
         * this could allow interference between the two branches.
         */
        ReadableStream.prototype.tee = function () {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('tee');
            }
            var branches = ReadableStreamTee(this);
            return CreateArrayFromList(branches);
        };
        ReadableStream.prototype.values = function (rawOptions) {
            if (rawOptions === void 0) { rawOptions = undefined; }
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('values');
            }
            var options = convertIteratorOptions(rawOptions, 'First parameter');
            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
        };
        return ReadableStream;
    }());
    Object.defineProperties(ReadableStream.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
            value: 'ReadableStream',
            configurable: true
        });
    }
    if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
        Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
            value: ReadableStream.prototype.values,
            writable: true,
            configurable: true
        });
    }
    // Abstract operations for the ReadableStream.
    // Throws if and only if startAlgorithm throws.
    function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        if (highWaterMark === void 0) { highWaterMark = 1; }
        if (sizeAlgorithm === void 0) { sizeAlgorithm = function () { return 1; }; }
        var stream = Object.create(ReadableStream.prototype);
        InitializeReadableStream(stream);
        var controller = Object.create(ReadableStreamDefaultController.prototype);
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
    }
    function InitializeReadableStream(stream) {
        stream._state = 'readable';
        stream._reader = undefined;
        stream._storedError = undefined;
        stream._disturbed = false;
    }
    function IsReadableStream(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
            return false;
        }
        return true;
    }
    function IsReadableStreamLocked(stream) {
        if (stream._reader === undefined) {
            return false;
        }
        return true;
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === 'closed') {
            return promiseResolvedWith(undefined);
        }
        if (stream._state === 'errored') {
            return promiseRejectedWith(stream._storedError);
        }
        ReadableStreamClose(stream);
        var sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop);
    }
    function ReadableStreamClose(stream) {
        stream._state = 'closed';
        var reader = stream._reader;
        if (reader === undefined) {
            return;
        }
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach(function (readRequest) {
                readRequest._closeSteps();
            });
            reader._readRequests = new SimpleQueue();
        }
    }
    function ReadableStreamError(stream, e) {
        stream._state = 'errored';
        stream._storedError = e;
        var reader = stream._reader;
        if (reader === undefined) {
            return;
        }
        defaultReaderClosedPromiseReject(reader, e);
        if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach(function (readRequest) {
                readRequest._errorSteps(e);
            });
            reader._readRequests = new SimpleQueue();
        }
        else {
            reader._readIntoRequests.forEach(function (readIntoRequest) {
                readIntoRequest._errorSteps(e);
            });
            reader._readIntoRequests = new SimpleQueue();
        }
    }
    // Helper functions for the ReadableStream.
    function streamBrandCheckException$1(name) {
        return new TypeError("ReadableStream.prototype." + name + " can only be used on a ReadableStream");
    }

    function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
        return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
    }

    var byteLengthSizeFunction = function size(chunk) {
        return chunk.byteLength;
    };
    /**
     * A queuing strategy that counts the number of bytes in each chunk.
     *
     * @public
     */
    var ByteLengthQueuingStrategy = /** @class */ (function () {
        function ByteLengthQueuingStrategy(options) {
            assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
            options = convertQueuingStrategyInit(options, 'First parameter');
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, "highWaterMark", {
            /**
             * Returns the high water mark provided to the constructor.
             */
            get: function () {
                if (!IsByteLengthQueuingStrategy(this)) {
                    throw byteLengthBrandCheckException('highWaterMark');
                }
                return this._byteLengthQueuingStrategyHighWaterMark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, "size", {
            /**
             * Measures the size of `chunk` by returning the value of its `byteLength` property.
             */
            get: function () {
                if (!IsByteLengthQueuingStrategy(this)) {
                    throw byteLengthBrandCheckException('size');
                }
                return byteLengthSizeFunction;
            },
            enumerable: false,
            configurable: true
        });
        return ByteLengthQueuingStrategy;
    }());
    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: 'ByteLengthQueuingStrategy',
            configurable: true
        });
    }
    // Helper functions for the ByteLengthQueuingStrategy.
    function byteLengthBrandCheckException(name) {
        return new TypeError("ByteLengthQueuingStrategy.prototype." + name + " can only be used on a ByteLengthQueuingStrategy");
    }
    function IsByteLengthQueuingStrategy(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
            return false;
        }
        return true;
    }

    var countSizeFunction = function size() {
        return 1;
    };
    /**
     * A queuing strategy that counts the number of chunks.
     *
     * @public
     */
    var CountQueuingStrategy = /** @class */ (function () {
        function CountQueuingStrategy(options) {
            assertRequiredArgument(options, 1, 'CountQueuingStrategy');
            options = convertQueuingStrategyInit(options, 'First parameter');
            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        Object.defineProperty(CountQueuingStrategy.prototype, "highWaterMark", {
            /**
             * Returns the high water mark provided to the constructor.
             */
            get: function () {
                if (!IsCountQueuingStrategy(this)) {
                    throw countBrandCheckException('highWaterMark');
                }
                return this._countQueuingStrategyHighWaterMark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CountQueuingStrategy.prototype, "size", {
            /**
             * Measures the size of `chunk` by always returning 1.
             * This ensures that the total queue size is a count of the number of chunks in the queue.
             */
            get: function () {
                if (!IsCountQueuingStrategy(this)) {
                    throw countBrandCheckException('size');
                }
                return countSizeFunction;
            },
            enumerable: false,
            configurable: true
        });
        return CountQueuingStrategy;
    }());
    Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: 'CountQueuingStrategy',
            configurable: true
        });
    }
    // Helper functions for the CountQueuingStrategy.
    function countBrandCheckException(name) {
        return new TypeError("CountQueuingStrategy.prototype." + name + " can only be used on a CountQueuingStrategy");
    }
    function IsCountQueuingStrategy(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
            return false;
        }
        return true;
    }

    function convertTransformer(original, context) {
        assertDictionary(original, context);
        var flush = original === null || original === void 0 ? void 0 : original.flush;
        var readableType = original === null || original === void 0 ? void 0 : original.readableType;
        var start = original === null || original === void 0 ? void 0 : original.start;
        var transform = original === null || original === void 0 ? void 0 : original.transform;
        var writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
            flush: flush === undefined ?
                undefined :
                convertTransformerFlushCallback(flush, original, context + " has member 'flush' that"),
            readableType: readableType,
            start: start === undefined ?
                undefined :
                convertTransformerStartCallback(start, original, context + " has member 'start' that"),
            transform: transform === undefined ?
                undefined :
                convertTransformerTransformCallback(transform, original, context + " has member 'transform' that"),
            writableType: writableType
        };
    }
    function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (controller) { return promiseCall(fn, original, [controller]); };
    }
    function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (controller) { return reflectCall(fn, original, [controller]); };
    }
    function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return function (chunk, controller) { return promiseCall(fn, original, [chunk, controller]); };
    }

    // Class TransformStream
    /**
     * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
     * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
     * In a manner specific to the transform stream in question, writes to the writable side result in new data being
     * made available for reading from the readable side.
     *
     * @public
     */
    var TransformStream = /** @class */ (function () {
        function TransformStream(rawTransformer, rawWritableStrategy, rawReadableStrategy) {
            if (rawTransformer === void 0) { rawTransformer = {}; }
            if (rawWritableStrategy === void 0) { rawWritableStrategy = {}; }
            if (rawReadableStrategy === void 0) { rawReadableStrategy = {}; }
            if (rawTransformer === undefined) {
                rawTransformer = null;
            }
            var writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
            var readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
            var transformer = convertTransformer(rawTransformer, 'First parameter');
            if (transformer.readableType !== undefined) {
                throw new RangeError('Invalid readableType specified');
            }
            if (transformer.writableType !== undefined) {
                throw new RangeError('Invalid writableType specified');
            }
            var readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
            var readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
            var writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
            var writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
            var startPromise_resolve;
            var startPromise = newPromise(function (resolve) {
                startPromise_resolve = resolve;
            });
            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
            if (transformer.start !== undefined) {
                startPromise_resolve(transformer.start(this._transformStreamController));
            }
            else {
                startPromise_resolve(undefined);
            }
        }
        Object.defineProperty(TransformStream.prototype, "readable", {
            /**
             * The readable side of the transform stream.
             */
            get: function () {
                if (!IsTransformStream(this)) {
                    throw streamBrandCheckException('readable');
                }
                return this._readable;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TransformStream.prototype, "writable", {
            /**
             * The writable side of the transform stream.
             */
            get: function () {
                if (!IsTransformStream(this)) {
                    throw streamBrandCheckException('writable');
                }
                return this._writable;
            },
            enumerable: false,
            configurable: true
        });
        return TransformStream;
    }());
    Object.defineProperties(TransformStream.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
            value: 'TransformStream',
            configurable: true
        });
    }
    function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
            return startPromise;
        }
        function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
            TransformStreamErrorWritableAndUnblockWrite(stream, reason);
            return promiseResolvedWith(undefined);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
        stream._backpressure = undefined;
        stream._backpressureChangePromise = undefined;
        stream._backpressureChangePromise_resolve = undefined;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = undefined;
    }
    function IsTransformStream(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
            return false;
        }
        return true;
    }
    // This is a no-op if both sides are already errored.
    function TransformStreamError(stream, e) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
    }
    function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
        if (stream._backpressure) {
            // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
            // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
            // _backpressure is set.
            TransformStreamSetBackpressure(stream, false);
        }
    }
    function TransformStreamSetBackpressure(stream, backpressure) {
        // Passes also when called during construction.
        if (stream._backpressureChangePromise !== undefined) {
            stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise(function (resolve) {
            stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
    }
    // Class TransformStreamDefaultController
    /**
     * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
     *
     * @public
     */
    var TransformStreamDefaultController = /** @class */ (function () {
        function TransformStreamDefaultController() {
            throw new TypeError('Illegal constructor');
        }
        Object.defineProperty(TransformStreamDefaultController.prototype, "desiredSize", {
            /**
             * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
             */
            get: function () {
                if (!IsTransformStreamDefaultController(this)) {
                    throw defaultControllerBrandCheckException('desiredSize');
                }
                var readableController = this._controlledTransformStream._readable._readableStreamController;
                return ReadableStreamDefaultControllerGetDesiredSize(readableController);
            },
            enumerable: false,
            configurable: true
        });
        TransformStreamDefaultController.prototype.enqueue = function (chunk) {
            if (chunk === void 0) { chunk = undefined; }
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('enqueue');
            }
            TransformStreamDefaultControllerEnqueue(this, chunk);
        };
        /**
         * Errors both the readable side and the writable side of the controlled transform stream, making all future
         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
         */
        TransformStreamDefaultController.prototype.error = function (reason) {
            if (reason === void 0) { reason = undefined; }
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('error');
            }
            TransformStreamDefaultControllerError(this, reason);
        };
        /**
         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
         * transformer only needs to consume a portion of the chunks written to the writable side.
         */
        TransformStreamDefaultController.prototype.terminate = function () {
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('terminate');
            }
            TransformStreamDefaultControllerTerminate(this);
        };
        return TransformStreamDefaultController;
    }());
    Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
        Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: 'TransformStreamDefaultController',
            configurable: true
        });
    }
    // Transform Stream Default Controller Abstract Operations
    function IsTransformStreamDefaultController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
            return false;
        }
        return true;
    }
    function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
    }
    function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        var controller = Object.create(TransformStreamDefaultController.prototype);
        var transformAlgorithm = function (chunk) {
            try {
                TransformStreamDefaultControllerEnqueue(controller, chunk);
                return promiseResolvedWith(undefined);
            }
            catch (transformResultE) {
                return promiseRejectedWith(transformResultE);
            }
        };
        var flushAlgorithm = function () { return promiseResolvedWith(undefined); };
        if (transformer.transform !== undefined) {
            transformAlgorithm = function (chunk) { return transformer.transform(chunk, controller); };
        }
        if (transformer.flush !== undefined) {
            flushAlgorithm = function () { return transformer.flush(controller); };
        }
        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
    }
    function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = undefined;
        controller._flushAlgorithm = undefined;
    }
    function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        var stream = controller._controlledTransformStream;
        var readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
            throw new TypeError('Readable side is not in a state that permits enqueue');
        }
        // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
        // accept TransformStreamDefaultControllerEnqueue() calls.
        try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        }
        catch (e) {
            // This happens when readableStrategy.size() throws.
            TransformStreamErrorWritableAndUnblockWrite(stream, e);
            throw stream._readable._storedError;
        }
        var backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) {
            TransformStreamSetBackpressure(stream, true);
        }
    }
    function TransformStreamDefaultControllerError(controller, e) {
        TransformStreamError(controller._controlledTransformStream, e);
    }
    function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        var transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, undefined, function (r) {
            TransformStreamError(controller._controlledTransformStream, r);
            throw r;
        });
    }
    function TransformStreamDefaultControllerTerminate(controller) {
        var stream = controller._controlledTransformStream;
        var readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        var error = new TypeError('TransformStream terminated');
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
    }
    // TransformStreamDefaultSink Algorithms
    function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        var controller = stream._transformStreamController;
        if (stream._backpressure) {
            var backpressureChangePromise = stream._backpressureChangePromise;
            return transformPromiseWith(backpressureChangePromise, function () {
                var writable = stream._writable;
                var state = writable._state;
                if (state === 'erroring') {
                    throw writable._storedError;
                }
                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    }
    function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
        // errored.
        TransformStreamError(stream, reason);
        return promiseResolvedWith(undefined);
    }
    function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
        var readable = stream._readable;
        var controller = stream._transformStreamController;
        var flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        // Return a promise that is fulfilled with undefined on success.
        return transformPromiseWith(flushPromise, function () {
            if (readable._state === 'errored') {
                throw readable._storedError;
            }
            ReadableStreamDefaultControllerClose(readable._readableStreamController);
        }, function (r) {
            TransformStreamError(stream, r);
            throw readable._storedError;
        });
    }
    // TransformStreamDefaultSource Algorithms
    function TransformStreamDefaultSourcePullAlgorithm(stream) {
        // Invariant. Enforced by the promises returned by start() and pull().
        TransformStreamSetBackpressure(stream, false);
        // Prevent the next pull() call until there is backpressure.
        return stream._backpressureChangePromise;
    }
    // Helper functions for the TransformStreamDefaultController.
    function defaultControllerBrandCheckException(name) {
        return new TypeError("TransformStreamDefaultController.prototype." + name + " can only be used on a TransformStreamDefaultController");
    }
    // Helper functions for the TransformStream.
    function streamBrandCheckException(name) {
        return new TypeError("TransformStream.prototype." + name + " can only be used on a TransformStream");
    }

    var exports$1 = {
        ReadableStream: ReadableStream,
        ReadableStreamDefaultController: ReadableStreamDefaultController,
        ReadableByteStreamController: ReadableByteStreamController,
        ReadableStreamBYOBRequest: ReadableStreamBYOBRequest,
        ReadableStreamDefaultReader: ReadableStreamDefaultReader,
        ReadableStreamBYOBReader: ReadableStreamBYOBReader,
        WritableStream: WritableStream,
        WritableStreamDefaultController: WritableStreamDefaultController,
        WritableStreamDefaultWriter: WritableStreamDefaultWriter,
        ByteLengthQueuingStrategy: ByteLengthQueuingStrategy,
        CountQueuingStrategy: CountQueuingStrategy,
        TransformStream: TransformStream,
        TransformStreamDefaultController: TransformStreamDefaultController
    };
    // Add classes to global scope
    if (typeof globals !== 'undefined') {
        for (var prop in exports$1) {
            if (Object.prototype.hasOwnProperty.call(exports$1, prop)) {
                Object.defineProperty(globals, prop, {
                    value: exports$1[prop],
                    writable: true,
                    configurable: true
                });
            }
        }
    }

    exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
    exports.CountQueuingStrategy = CountQueuingStrategy;
    exports.ReadableByteStreamController = ReadableByteStreamController;
    exports.ReadableStream = ReadableStream;
    exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
    exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
    exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
    exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
    exports.TransformStream = TransformStream;
    exports.TransformStreamDefaultController = TransformStreamDefaultController;
    exports.WritableStream = WritableStream;
    exports.WritableStreamDefaultController = WritableStreamDefaultController;
    exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polyfill.js.map


/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 87:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 835:
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 13:
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const { ImagePool } = __nccwpck_require__(275);
const path = __nccwpck_require__(622);
const fs = __nccwpck_require__(747);

const imagePool = new ImagePool();
const file = __nccwpck_require__.ab + "89993467_p0.jpg";
const image = imagePool.ingestImage(__nccwpck_require__.ab + "89993467_p0.jpg");
image
  .encode({
    mozjpeg: {
      quality: 90,
    },
  })
  .then(async () => {
    const encodedImage = await image.encodedWith["mozjpeg"];
    const filename =
      file.slice(0, file.lastIndexOf(".") + 1) +
      "compressed." +
      (await encodedImage).extension;
    fs.writeFileSync(filename, (await encodedImage).binary);
  });

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map