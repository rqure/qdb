(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(a,b){if(b){var c=e;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function da(){da=function(){};e.Symbol||(e.Symbol=ea)}function fa(a,b){this.a=a;aa(this,"description",{configurable:!0,writable:!0,value:b})}fa.prototype.toString=function(){return this.a};var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function ha(){da();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});ha=function(){}}function ia(a){ha();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}
function ja(a,b){ha();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ba("Array.prototype.entries",function(a){return a?a:function(){return ja(this,function(b,c){return[b,c]})}});var ka=this||self;
function g(a,b,c){a=a.split(".");c=c||ka;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ma(a,b,c){g(a,b,c)}function na(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var h=0;h<oa.length;h++)c=oa[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},l=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f="string"===typeof a?a.split(""):a,h=0;h<c;h++)h in f&&(d[h]=b.call(void 0,f[h],h,a));return d};
function ra(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};function sa(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var h=d}else a&&(f+=": "+a,h=b);throw Error(f,h||[]);}function n(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];a||sa("",null,b,d);return a}function ta(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];"string"!==typeof a&&sa("Expected string but got %s: %s.",[k(a),a],b,d)}
function ua(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];Array.isArray(a)||sa("Expected array but got %s: %s.",[k(a),a],b,d)}function p(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];throw Error("Failure"+(a?": "+a:""),c);}function q(a,b,c,d){for(var f=[],h=3;h<arguments.length;++h)f[h-3]=arguments[h];a instanceof b||sa("Expected instanceof %s but got %s.",[va(b),va(a)],c,f)}
function va(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};function r(a,b){this.c=a;this.b=b;this.a={};this.arrClean=!0;if(0<this.c.length){for(a=0;a<this.c.length;a++){b=this.c[a];var c=b[0];this.a[c.toString()]=new wa(c,b[1])}this.arrClean=!0}}g("jspb.Map",r,void 0);
r.prototype.g=function(){if(this.arrClean){if(this.b){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.g()}}}else{this.c.length=0;a=u(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.g();this.c.push([d.key,d.value])}this.arrClean=!0}return this.c};r.prototype.toArray=r.prototype.g;
r.prototype.Mc=function(a,b){for(var c=this.g(),d=[],f=0;f<c.length;f++){var h=this.a[c[f][0].toString()];v(this,h);var m=h.a;m?(n(b),d.push([h.key,b(a,m)])):d.push([h.key,h.value])}return d};r.prototype.toObject=r.prototype.Mc;r.fromObject=function(a,b,c){b=new r([],b);for(var d=0;d<a.length;d++){var f=a[d][0],h=c(a[d][1]);b.set(f,h)}return b};function w(a){this.a=0;this.b=a}w.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(w.prototype[Symbol.iterator]=function(){return this});r.prototype.Jb=function(){return u(this).length};r.prototype.getLength=r.prototype.Jb;r.prototype.clear=function(){this.a={};this.arrClean=!1};r.prototype.clear=r.prototype.clear;r.prototype.Cb=function(a){a=a.toString();var b=this.a.hasOwnProperty(a);delete this.a[a];this.arrClean=!1;return b};r.prototype.del=r.prototype.Cb;
r.prototype.Eb=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,d.value])}return a};r.prototype.getEntryList=r.prototype.Eb;r.prototype.entries=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,v(this,d)])}return new w(a)};r.prototype.entries=r.prototype.entries;r.prototype.keys=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new w(a)};
r.prototype.keys=r.prototype.keys;r.prototype.values=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(v(this,this.a[b[c]]));return new w(a)};r.prototype.values=r.prototype.values;r.prototype.forEach=function(a,b){var c=u(this);c.sort();for(var d=0;d<c.length;d++){var f=this.a[c[d]];a.call(b,v(this,f),f.key,this)}};r.prototype.forEach=r.prototype.forEach;
r.prototype.set=function(a,b){var c=new wa(a);this.b?(c.a=b,c.value=b.g()):c.value=b;this.a[a.toString()]=c;this.arrClean=!1;return this};r.prototype.set=r.prototype.set;function v(a,b){return a.b?(b.a||(b.a=new a.b(b.value)),b.a):b.value}r.prototype.get=function(a){if(a=this.a[a.toString()])return v(this,a)};r.prototype.get=r.prototype.get;r.prototype.has=function(a){return a.toString()in this.a};r.prototype.has=r.prototype.has;
r.prototype.Jc=function(a,b,c,d,f){var h=u(this);h.sort();for(var m=0;m<h.length;m++){var t=this.a[h[m]];b.Va(a);c.call(b,1,t.key);this.b?d.call(b,2,v(this,t),f):d.call(b,2,t.value);b.Ya()}};r.prototype.serializeBinary=r.prototype.Jc;r.deserializeBinary=function(a,b,c,d,f,h,m){for(;b.oa()&&!b.bb();){var t=b.c;1==t?h=c.call(b):2==t&&(a.b?(n(f),m||(m=new a.b),d.call(b,m,f)):m=d.call(b))}n(void 0!=h);n(void 0!=m);a.set(h,m)};
function u(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function wa(a,b){this.key=a;this.value=b;this.a=void 0};function xa(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)b+=String.fromCharCode.apply(null,ra(a,c,c+8192));return b};var ya={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},za={"'":"\\'"};var Aa={},x=null;function Ba(a,b){void 0===b&&(b=0);Ca();b=Aa[b];for(var c=[],d=0;d<a.length;d+=3){var f=a[d],h=d+1<a.length,m=h?a[d+1]:0,t=d+2<a.length,B=t?a[d+2]:0,M=f>>2;f=(f&3)<<4|m>>4;m=(m&15)<<2|B>>6;B&=63;t||(B=64,h||(m=64));c.push(b[M],b[f],b[m]||"",b[B]||"")}return c.join("")}function Da(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Ea(a,function(h){d[f++]=h});return d.subarray(0,f)}
function Ea(a,b){function c(B){for(;d<a.length;){var M=a.charAt(d++),La=x[M];if(null!=La)return La;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M);}return B}Ca();for(var d=0;;){var f=c(-1),h=c(0),m=c(64),t=c(64);if(64===t&&-1===f)break;b(f<<2|h>>4);64!=m&&(b(h<<4&240|m>>2),64!=t&&b(m<<6&192|t))}}
function Ca(){if(!x){x={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Aa[c]=d;for(var f=0;f<d.length;f++){var h=d[f];void 0===x[h]&&(x[h]=f)}}}};g("jspb.ConstBinaryMessage",function(){},void 0);g("jspb.BinaryMessage",function(){},void 0);g("jspb.BinaryConstants.FieldType",{yb:-1,ee:1,FLOAT:2,ke:3,te:4,je:5,xb:6,wb:7,BOOL:8,re:9,ie:10,le:11,ce:12,se:13,ge:14,me:15,ne:16,oe:17,pe:18,he:30,ve:31},void 0);g("jspb.BinaryConstants.WireType",{yb:-1,ue:0,xb:1,de:2,qe:3,fe:4,wb:5},void 0);
g("jspb.BinaryConstants.FieldTypeToWireType",function(a){switch(a){case 5:case 3:case 13:case 4:case 17:case 18:case 8:case 14:case 31:return 0;case 1:case 6:case 16:case 30:return 1;case 9:case 11:case 12:return 2;case 2:case 7:case 15:return 5;default:return-1}},void 0);g("jspb.BinaryConstants.INVALID_FIELD_NUMBER",-1,void 0);g("jspb.BinaryConstants.FLOAT32_EPS",1.401298464324817E-45,void 0);g("jspb.BinaryConstants.FLOAT32_MIN",1.1754943508222875E-38,void 0);
g("jspb.BinaryConstants.FLOAT32_MAX",3.4028234663852886E38,void 0);g("jspb.BinaryConstants.FLOAT64_EPS",4.9E-324,void 0);g("jspb.BinaryConstants.FLOAT64_MIN",2.2250738585072014E-308,void 0);g("jspb.BinaryConstants.FLOAT64_MAX",1.7976931348623157E308,void 0);g("jspb.BinaryConstants.TWO_TO_20",1048576,void 0);g("jspb.BinaryConstants.TWO_TO_23",8388608,void 0);g("jspb.BinaryConstants.TWO_TO_31",2147483648,void 0);g("jspb.BinaryConstants.TWO_TO_32",4294967296,void 0);
g("jspb.BinaryConstants.TWO_TO_52",4503599627370496,void 0);g("jspb.BinaryConstants.TWO_TO_63",0x7fffffffffffffff,void 0);g("jspb.BinaryConstants.TWO_TO_64",1.8446744073709552E19,void 0);g("jspb.BinaryConstants.ZERO_HASH","\x00\x00\x00\x00\x00\x00\x00\x00",void 0);var y=0,z=0;g("jspb.utils.getSplit64Low",function(){return y},void 0);g("jspb.utils.getSplit64High",function(){return z},void 0);function Fa(a){var b=a>>>0;a=Math.floor((a-b)/4294967296)>>>0;y=b;z=a}g("jspb.utils.splitUint64",Fa,void 0);function A(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));y=c;z=a}g("jspb.utils.splitInt64",A,void 0);
function Ga(a){var b=0>a;a=2*Math.abs(a);Fa(a);a=y;var c=z;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);y=a;z=c}g("jspb.utils.splitZigzag64",Ga,void 0);
function Ha(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?y=z=0:(z=0,y=2147483648);else if(isNaN(a))z=0,y=2147483647;else if(3.4028234663852886E38<a)z=0,y=(b<<31|2139095040)>>>0;else if(1.1754943508222875E-38>a)a=Math.round(a/Math.pow(2,-149)),z=0,y=(b<<31|a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(8388608*a);16777216<=a&&++c;z=0;y=(b<<31|c+127<<23|a&8388607)>>>0}}g("jspb.utils.splitFloat32",Ha,void 0);
function Ia(a){var b=0>a?1:0;a=b?-a:a;if(0===a)z=0<1/a?0:2147483648,y=0;else if(isNaN(a))z=2147483647,y=4294967295;else if(1.7976931348623157E308<a)z=(b<<31|2146435072)>>>0,y=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),z=(b<<31|a/4294967296)>>>0,y=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);z=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;y=4503599627370496*a>>>0}}g("jspb.utils.splitFloat64",Ia,void 0);
function C(a){var b=a.charCodeAt(4),c=a.charCodeAt(5),d=a.charCodeAt(6),f=a.charCodeAt(7);y=a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)>>>0;z=b+(c<<8)+(d<<16)+(f<<24)>>>0}g("jspb.utils.splitHash64",C,void 0);function D(a,b){return 4294967296*b+(a>>>0)}g("jspb.utils.joinUint64",D,void 0);function E(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=D(a,b);return c?-a:a}g("jspb.utils.joinInt64",E,void 0);
function Ja(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)}g("jspb.utils.toZigzag64",Ja,void 0);function Ka(a,b){return Ma(a,b,E)}g("jspb.utils.joinZigzag64",Ka,void 0);function Ma(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)}g("jspb.utils.fromZigzag64",Ma,void 0);function Na(a){var b=2*(a>>31)+1,c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))}g("jspb.utils.joinFloat32",Na,void 0);
function Oa(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=4294967296*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+4503599627370496)}g("jspb.utils.joinFloat64",Oa,void 0);function Pa(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)}g("jspb.utils.joinHash64",Pa,void 0);g("jspb.utils.DIGITS","0123456789abcdef".split(""),void 0);
function F(a,b){function c(f,h){f=f?String(f):"";return h?"0000000".slice(f.length)+f:f}if(2097151>=b)return""+D(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)}g("jspb.utils.joinUnsignedDecimalString",F,void 0);function G(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=F(a,b);return c?"-"+a:a}
g("jspb.utils.joinSignedDecimalString",G,void 0);function Qa(a,b){C(a);a=y;var c=z;return b?G(a,c):F(a,c)}g("jspb.utils.hash64ToDecimalString",Qa,void 0);g("jspb.utils.hash64ArrayToDecimalStrings",function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Qa(a[d],b);return c},void 0);
function H(a){function b(m,t){for(var B=0;8>B&&(1!==m||0<t);B++)t=m*f[B]+t,f[B]=t&255,t>>>=8}function c(){for(var m=0;8>m;m++)f[m]=~f[m]&255}n(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var f=[0,0,0,0,0,0,0,0],h=0;h<a.length;h++)b(10,a.charCodeAt(h)-48);d&&(c(),b(1,1));return xa(f)}g("jspb.utils.decimalStringToHash64",H,void 0);g("jspb.utils.splitDecimalString",function(a){C(H(a))},void 0);function Ra(a){return String.fromCharCode(10>a?48+a:87+a)}
function Sa(a){return 97<=a?a-97+10:a-48}g("jspb.utils.hash64ToHexString",function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=Ra(d>>4);b[2*c+3]=Ra(d&15)}return b.join("")},void 0);g("jspb.utils.hexStringToHash64",function(a){a=a.toLowerCase();n(18==a.length);n("0"==a[0]);n("x"==a[1]);for(var b="",c=0;8>c;c++)b=String.fromCharCode(16*Sa(a.charCodeAt(2*c+2))+Sa(a.charCodeAt(2*c+3)))+b;return b},void 0);
g("jspb.utils.hash64ToNumber",function(a,b){C(a);a=y;var c=z;return b?E(a,c):D(a,c)},void 0);g("jspb.utils.numberToHash64",function(a){A(a);return Pa(y,z)},void 0);g("jspb.utils.countVarints",function(a,b,c){for(var d=0,f=b;f<c;f++)d+=a[f]>>7;return c-b-d},void 0);
g("jspb.utils.countVarintFields",function(a,b,c,d){var f=0;d*=8;if(128>d)for(;b<c&&a[b++]==d;)for(f++;;){var h=a[b++];if(0==(h&128))break}else for(;b<c;){for(h=d;128<h;){if(a[b]!=(h&127|128))return f;b++;h>>=7}if(a[b++]!=h)break;for(f++;h=a[b++],0!=(h&128););}return f},void 0);function Ta(a,b,c,d,f){var h=0;if(128>d)for(;b<c&&a[b++]==d;)h++,b+=f;else for(;b<c;){for(var m=d;128<m;){if(a[b++]!=(m&127|128))return h;m>>=7}if(a[b++]!=m)break;h++;b+=f}return h}
g("jspb.utils.countFixed32Fields",function(a,b,c,d){return Ta(a,b,c,8*d+5,4)},void 0);g("jspb.utils.countFixed64Fields",function(a,b,c,d){return Ta(a,b,c,8*d+1,8)},void 0);g("jspb.utils.countDelimitedFields",function(a,b,c,d){var f=0;for(d=8*d+2;b<c;){for(var h=d;128<h;){if(a[b++]!=(h&127|128))return f;h>>=7}if(a[b++]!=h)break;f++;for(var m=0,t=1;h=a[b++],m+=(h&127)*t,t*=128,0!=(h&128););b+=m}return f},void 0);
g("jspb.utils.debugBytesToTextFormat",function(a){var b='"';if(a){a=Ua(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'},void 0);
g("jspb.utils.debugScalarToTextFormat",function(a){if("string"===typeof a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),f=d.charCodeAt(0),h=c+1,m;if(!(m=ya[d])){if(!(31<f&&127>f))if(f=d,f in za)d=za[f];else if(f in ya)d=za[f]=ya[f];else{m=f.charCodeAt(0);if(31<m&&127>m)d=f;else{if(256>m){if(d="\\x",16>m||256<m)d+="0"}else d="\\u",4096>m&&(d+="0");d+=m.toString(16).toUpperCase()}d=za[f]=d}m=d}b[h]=m}b.push('"');a=b.join("")}else a=a.toString();return a},void 0);
g("jspb.utils.stringToByteArray",function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b},void 0);
function Ua(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return Da(a);if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);p("Type not convertible to Uint8Array.");return new Uint8Array(0)}g("jspb.utils.byteSourceToUint8Array",Ua,void 0);function I(a,b,c){this.b=null;this.a=this.c=this.h=0;this.v=!1;a&&this.H(a,b,c)}g("jspb.BinaryDecoder",I,void 0);var Va=[];I.getInstanceCacheLength=function(){return Va.length};function Wa(a,b,c){if(Va.length){var d=Va.pop();a&&d.H(a,b,c);return d}return new I(a,b,c)}I.alloc=Wa;I.prototype.Ca=function(){this.clear();100>Va.length&&Va.push(this)};I.prototype.free=I.prototype.Ca;I.prototype.clone=function(){return Wa(this.b,this.h,this.c-this.h)};I.prototype.clone=I.prototype.clone;
I.prototype.clear=function(){this.b=null;this.a=this.c=this.h=0;this.v=!1};I.prototype.clear=I.prototype.clear;I.prototype.Y=function(){return this.b};I.prototype.getBuffer=I.prototype.Y;I.prototype.H=function(a,b,c){this.b=Ua(a);this.h=void 0!==b?b:0;this.c=void 0!==c?this.h+c:this.b.length;this.a=this.h};I.prototype.setBlock=I.prototype.H;I.prototype.Db=function(){return this.c};I.prototype.getEnd=I.prototype.Db;I.prototype.setEnd=function(a){this.c=a};I.prototype.setEnd=I.prototype.setEnd;
I.prototype.reset=function(){this.a=this.h};I.prototype.reset=I.prototype.reset;I.prototype.B=function(){return this.a};I.prototype.getCursor=I.prototype.B;I.prototype.Ma=function(a){this.a=a};I.prototype.setCursor=I.prototype.Ma;I.prototype.advance=function(a){this.a+=a;n(this.a<=this.c)};I.prototype.advance=I.prototype.advance;I.prototype.ya=function(){return this.a==this.c};I.prototype.atEnd=I.prototype.ya;I.prototype.Qb=function(){return this.a>this.c};I.prototype.pastEnd=I.prototype.Qb;
I.prototype.getError=function(){return this.v||0>this.a||this.a>this.c};I.prototype.getError=I.prototype.getError;I.prototype.w=function(a){for(var b=128,c=0,d=0,f=0;4>f&&128<=b;f++)b=this.b[this.a++],c|=(b&127)<<7*f;128<=b&&(b=this.b[this.a++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(f=0;5>f&&128<=b;f++)b=this.b[this.a++],d|=(b&127)<<7*f+3;if(128>b)return a(c>>>0,d>>>0);p("Failed to read varint, encoding is invalid.");this.v=!0};I.prototype.readSplitVarint64=I.prototype.w;
I.prototype.ea=function(a){return this.w(function(b,c){return Ma(b,c,a)})};I.prototype.readSplitZigzagVarint64=I.prototype.ea;I.prototype.ta=function(a){var b=this.b,c=this.a;this.a+=8;for(var d=0,f=0,h=c+7;h>=c;h--)d=d<<8|b[h],f=f<<8|b[h+4];return a(d,f)};I.prototype.readSplitFixed64=I.prototype.ta;I.prototype.kb=function(){for(;this.b[this.a]&128;)this.a++;this.a++};I.prototype.skipVarint=I.prototype.kb;I.prototype.mb=function(a){for(;128<a;)this.a--,a>>>=7;this.a--};I.prototype.unskipVarint=I.prototype.mb;
I.prototype.o=function(){var a=this.b;var b=a[this.a];var c=b&127;if(128>b)return this.a+=1,n(this.a<=this.c),c;b=a[this.a+1];c|=(b&127)<<7;if(128>b)return this.a+=2,n(this.a<=this.c),c;b=a[this.a+2];c|=(b&127)<<14;if(128>b)return this.a+=3,n(this.a<=this.c),c;b=a[this.a+3];c|=(b&127)<<21;if(128>b)return this.a+=4,n(this.a<=this.c),c;b=a[this.a+4];c|=(b&15)<<28;if(128>b)return this.a+=5,n(this.a<=this.c),c>>>0;this.a+=5;128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=
a[this.a++]&&n(!1);n(this.a<=this.c);return c};I.prototype.readUnsignedVarint32=I.prototype.o;I.prototype.da=function(){return~~this.o()};I.prototype.readSignedVarint32=I.prototype.da;I.prototype.O=function(){return this.o().toString()};I.prototype.Ea=function(){return this.da().toString()};I.prototype.readSignedVarint32String=I.prototype.Ea;I.prototype.Ia=function(){var a=this.o();return a>>>1^-(a&1)};I.prototype.readZigzagVarint32=I.prototype.Ia;I.prototype.Ga=function(){return this.w(D)};
I.prototype.readUnsignedVarint64=I.prototype.Ga;I.prototype.Ha=function(){return this.w(F)};I.prototype.readUnsignedVarint64String=I.prototype.Ha;I.prototype.sa=function(){return this.w(E)};I.prototype.readSignedVarint64=I.prototype.sa;I.prototype.Fa=function(){return this.w(G)};I.prototype.readSignedVarint64String=I.prototype.Fa;I.prototype.Ja=function(){return this.w(Ka)};I.prototype.readZigzagVarint64=I.prototype.Ja;I.prototype.fb=function(){return this.ea(Pa)};
I.prototype.readZigzagVarintHash64=I.prototype.fb;I.prototype.Ka=function(){return this.ea(G)};I.prototype.readZigzagVarint64String=I.prototype.Ka;I.prototype.Gc=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a};I.prototype.readUint8=I.prototype.Gc;I.prototype.Ec=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return a<<0|b<<8};I.prototype.readUint16=I.prototype.Ec;
I.prototype.m=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return(a<<0|b<<8|c<<16|d<<24)>>>0};I.prototype.readUint32=I.prototype.m;I.prototype.ga=function(){var a=this.m(),b=this.m();return D(a,b)};I.prototype.readUint64=I.prototype.ga;I.prototype.ha=function(){var a=this.m(),b=this.m();return F(a,b)};I.prototype.readUint64String=I.prototype.ha;
I.prototype.Xb=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a<<24>>24};I.prototype.readInt8=I.prototype.Xb;I.prototype.Vb=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return(a<<0|b<<8)<<16>>16};I.prototype.readInt16=I.prototype.Vb;I.prototype.P=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return a<<0|b<<8|c<<16|d<<24};I.prototype.readInt32=I.prototype.P;
I.prototype.ba=function(){var a=this.m(),b=this.m();return E(a,b)};I.prototype.readInt64=I.prototype.ba;I.prototype.ca=function(){var a=this.m(),b=this.m();return G(a,b)};I.prototype.readInt64String=I.prototype.ca;I.prototype.aa=function(){var a=this.m();return Na(a,0)};I.prototype.readFloat=I.prototype.aa;I.prototype.Z=function(){var a=this.m(),b=this.m();return Oa(a,b)};I.prototype.readDouble=I.prototype.Z;I.prototype.pa=function(){return!!this.b[this.a++]};I.prototype.readBool=I.prototype.pa;
I.prototype.ra=function(){return this.da()};I.prototype.readEnum=I.prototype.ra;
I.prototype.fa=function(a){var b=this.b,c=this.a;a=c+a;for(var d=[],f="";c<a;){var h=b[c++];if(128>h)d.push(h);else if(192>h)continue;else if(224>h){var m=b[c++];d.push((h&31)<<6|m&63)}else if(240>h){m=b[c++];var t=b[c++];d.push((h&15)<<12|(m&63)<<6|t&63)}else if(248>h){m=b[c++];t=b[c++];var B=b[c++];h=(h&7)<<18|(m&63)<<12|(t&63)<<6|B&63;h-=65536;d.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=d.length&&(f+=String.fromCharCode.apply(null,d),d.length=0)}f+=xa(d);this.a=c;return f};
I.prototype.readString=I.prototype.fa;I.prototype.Dc=function(){var a=this.o();return this.fa(a)};I.prototype.readStringWithLength=I.prototype.Dc;I.prototype.qa=function(a){if(0>a||this.a+a>this.b.length)return this.v=!0,p("Invalid byte length!"),new Uint8Array(0);var b=this.b.subarray(this.a,this.a+a);this.a+=a;n(this.a<=this.c);return b};I.prototype.readBytes=I.prototype.qa;I.prototype.ia=function(){return this.w(Pa)};I.prototype.readVarintHash64=I.prototype.ia;
I.prototype.$=function(){var a=this.b,b=this.a,c=a[b],d=a[b+1],f=a[b+2],h=a[b+3],m=a[b+4],t=a[b+5],B=a[b+6];a=a[b+7];this.a+=8;return String.fromCharCode(c,d,f,h,m,t,B,a)};I.prototype.readFixedHash64=I.prototype.$;function J(a,b,c){this.a=Wa(a,b,c);this.O=this.a.B();this.b=this.c=-1;this.h=!1;this.v=null}g("jspb.BinaryReader",J,void 0);var K=[];J.clearInstanceCache=function(){K=[]};J.getInstanceCacheLength=function(){return K.length};function Xa(a,b,c){if(K.length){var d=K.pop();a&&d.a.H(a,b,c);return d}return new J(a,b,c)}J.alloc=Xa;J.prototype.zb=Xa;J.prototype.alloc=J.prototype.zb;J.prototype.Ca=function(){this.a.clear();this.b=this.c=-1;this.h=!1;this.v=null;100>K.length&&K.push(this)};
J.prototype.free=J.prototype.Ca;J.prototype.Fb=function(){return this.O};J.prototype.getFieldCursor=J.prototype.Fb;J.prototype.B=function(){return this.a.B()};J.prototype.getCursor=J.prototype.B;J.prototype.Y=function(){return this.a.Y()};J.prototype.getBuffer=J.prototype.Y;J.prototype.Hb=function(){return this.c};J.prototype.getFieldNumber=J.prototype.Hb;J.prototype.Lb=function(){return this.b};J.prototype.getWireType=J.prototype.Lb;J.prototype.Mb=function(){return 2==this.b};
J.prototype.isDelimited=J.prototype.Mb;J.prototype.bb=function(){return 4==this.b};J.prototype.isEndGroup=J.prototype.bb;J.prototype.getError=function(){return this.h||this.a.getError()};J.prototype.getError=J.prototype.getError;J.prototype.H=function(a,b,c){this.a.H(a,b,c);this.b=this.c=-1};J.prototype.setBlock=J.prototype.H;J.prototype.reset=function(){this.a.reset();this.b=this.c=-1};J.prototype.reset=J.prototype.reset;J.prototype.advance=function(a){this.a.advance(a)};J.prototype.advance=J.prototype.advance;
J.prototype.oa=function(){if(this.a.ya())return!1;if(this.getError())return p("Decoder hit an error"),!1;this.O=this.a.B();var a=this.a.o(),b=a>>>3;a&=7;if(0!=a&&5!=a&&1!=a&&2!=a&&3!=a&&4!=a)return p("Invalid wire type: %s (at position %s)",a,this.O),this.h=!0,!1;this.c=b;this.b=a;return!0};J.prototype.nextField=J.prototype.oa;J.prototype.Oa=function(){this.a.mb(this.c<<3|this.b)};J.prototype.unskipHeader=J.prototype.Oa;
J.prototype.Lc=function(){var a=this.c;for(this.Oa();this.oa()&&this.c==a;)this.C();this.a.ya()||this.Oa()};J.prototype.skipMatchingFields=J.prototype.Lc;J.prototype.lb=function(){0!=this.b?(p("Invalid wire type for skipVarintField"),this.C()):this.a.kb()};J.prototype.skipVarintField=J.prototype.lb;J.prototype.gb=function(){if(2!=this.b)p("Invalid wire type for skipDelimitedField"),this.C();else{var a=this.a.o();this.a.advance(a)}};J.prototype.skipDelimitedField=J.prototype.gb;
J.prototype.hb=function(){5!=this.b?(p("Invalid wire type for skipFixed32Field"),this.C()):this.a.advance(4)};J.prototype.skipFixed32Field=J.prototype.hb;J.prototype.ib=function(){1!=this.b?(p("Invalid wire type for skipFixed64Field"),this.C()):this.a.advance(8)};J.prototype.skipFixed64Field=J.prototype.ib;J.prototype.jb=function(){var a=this.c;do{if(!this.oa()){p("Unmatched start-group tag: stream EOF");this.h=!0;break}if(4==this.b){this.c!=a&&(p("Unmatched end-group tag"),this.h=!0);break}this.C()}while(1)};
J.prototype.skipGroup=J.prototype.jb;J.prototype.C=function(){switch(this.b){case 0:this.lb();break;case 1:this.ib();break;case 2:this.gb();break;case 5:this.hb();break;case 3:this.jb();break;default:p("Invalid wire encoding for field.")}};J.prototype.skipField=J.prototype.C;J.prototype.Hc=function(a,b){null===this.v&&(this.v={});n(!this.v[a]);this.v[a]=b};J.prototype.registerReadCallback=J.prototype.Hc;J.prototype.Ic=function(a){n(null!==this.v);a=this.v[a];n(a);return a(this)};
J.prototype.runReadCallback=J.prototype.Ic;J.prototype.Yb=function(a,b){n(2==this.b);var c=this.a.c,d=this.a.o();d=this.a.B()+d;this.a.setEnd(d);b(a,this);this.a.Ma(d);this.a.setEnd(c)};J.prototype.readMessage=J.prototype.Yb;J.prototype.Ub=function(a,b,c){n(3==this.b);n(this.c==a);c(b,this);this.h||4==this.b||(p("Group submessage did not end with an END_GROUP tag"),this.h=!0)};J.prototype.readGroup=J.prototype.Ub;
J.prototype.Gb=function(){n(2==this.b);var a=this.a.o(),b=this.a.B(),c=b+a;a=Wa(this.a.Y(),b,a);this.a.Ma(c);return a};J.prototype.getFieldDecoder=J.prototype.Gb;J.prototype.P=function(){n(0==this.b);return this.a.da()};J.prototype.readInt32=J.prototype.P;J.prototype.Wb=function(){n(0==this.b);return this.a.Ea()};J.prototype.readInt32String=J.prototype.Wb;J.prototype.ba=function(){n(0==this.b);return this.a.sa()};J.prototype.readInt64=J.prototype.ba;J.prototype.ca=function(){n(0==this.b);return this.a.Fa()};
J.prototype.readInt64String=J.prototype.ca;J.prototype.m=function(){n(0==this.b);return this.a.o()};J.prototype.readUint32=J.prototype.m;J.prototype.Fc=function(){n(0==this.b);return this.a.O()};J.prototype.readUint32String=J.prototype.Fc;J.prototype.ga=function(){n(0==this.b);return this.a.Ga()};J.prototype.readUint64=J.prototype.ga;J.prototype.ha=function(){n(0==this.b);return this.a.Ha()};J.prototype.readUint64String=J.prototype.ha;J.prototype.zc=function(){n(0==this.b);return this.a.Ia()};
J.prototype.readSint32=J.prototype.zc;J.prototype.Ac=function(){n(0==this.b);return this.a.Ja()};J.prototype.readSint64=J.prototype.Ac;J.prototype.Bc=function(){n(0==this.b);return this.a.Ka()};J.prototype.readSint64String=J.prototype.Bc;J.prototype.Rb=function(){n(5==this.b);return this.a.m()};J.prototype.readFixed32=J.prototype.Rb;J.prototype.Sb=function(){n(1==this.b);return this.a.ga()};J.prototype.readFixed64=J.prototype.Sb;J.prototype.Tb=function(){n(1==this.b);return this.a.ha()};
J.prototype.readFixed64String=J.prototype.Tb;J.prototype.vc=function(){n(5==this.b);return this.a.P()};J.prototype.readSfixed32=J.prototype.vc;J.prototype.wc=function(){n(5==this.b);return this.a.P().toString()};J.prototype.readSfixed32String=J.prototype.wc;J.prototype.xc=function(){n(1==this.b);return this.a.ba()};J.prototype.readSfixed64=J.prototype.xc;J.prototype.yc=function(){n(1==this.b);return this.a.ca()};J.prototype.readSfixed64String=J.prototype.yc;
J.prototype.aa=function(){n(5==this.b);return this.a.aa()};J.prototype.readFloat=J.prototype.aa;J.prototype.Z=function(){n(1==this.b);return this.a.Z()};J.prototype.readDouble=J.prototype.Z;J.prototype.pa=function(){n(0==this.b);return!!this.a.o()};J.prototype.readBool=J.prototype.pa;J.prototype.ra=function(){n(0==this.b);return this.a.sa()};J.prototype.readEnum=J.prototype.ra;J.prototype.fa=function(){n(2==this.b);var a=this.a.o();return this.a.fa(a)};J.prototype.readString=J.prototype.fa;
J.prototype.qa=function(){n(2==this.b);var a=this.a.o();return this.a.qa(a)};J.prototype.readBytes=J.prototype.qa;J.prototype.ia=function(){n(0==this.b);return this.a.ia()};J.prototype.readVarintHash64=J.prototype.ia;J.prototype.Cc=function(){n(0==this.b);return this.a.fb()};J.prototype.readSintHash64=J.prototype.Cc;J.prototype.w=function(a){n(0==this.b);return this.a.w(a)};J.prototype.readSplitVarint64=J.prototype.w;
J.prototype.ea=function(a){n(0==this.b);return this.a.w(function(b,c){return Ma(b,c,a)})};J.prototype.readSplitZigzagVarint64=J.prototype.ea;J.prototype.$=function(){n(1==this.b);return this.a.$()};J.prototype.readFixedHash64=J.prototype.$;J.prototype.ta=function(a){n(1==this.b);return this.a.ta(a)};J.prototype.readSplitFixed64=J.prototype.ta;function L(a,b){n(2==a.b);var c=a.a.o();c=a.a.B()+c;for(var d=[];a.a.B()<c;)d.push(b.call(a.a));return d}J.prototype.gc=function(){return L(this,this.a.da)};
J.prototype.readPackedInt32=J.prototype.gc;J.prototype.hc=function(){return L(this,this.a.Ea)};J.prototype.readPackedInt32String=J.prototype.hc;J.prototype.ic=function(){return L(this,this.a.sa)};J.prototype.readPackedInt64=J.prototype.ic;J.prototype.jc=function(){return L(this,this.a.Fa)};J.prototype.readPackedInt64String=J.prototype.jc;J.prototype.qc=function(){return L(this,this.a.o)};J.prototype.readPackedUint32=J.prototype.qc;J.prototype.rc=function(){return L(this,this.a.O)};
J.prototype.readPackedUint32String=J.prototype.rc;J.prototype.sc=function(){return L(this,this.a.Ga)};J.prototype.readPackedUint64=J.prototype.sc;J.prototype.tc=function(){return L(this,this.a.Ha)};J.prototype.readPackedUint64String=J.prototype.tc;J.prototype.nc=function(){return L(this,this.a.Ia)};J.prototype.readPackedSint32=J.prototype.nc;J.prototype.oc=function(){return L(this,this.a.Ja)};J.prototype.readPackedSint64=J.prototype.oc;J.prototype.pc=function(){return L(this,this.a.Ka)};
J.prototype.readPackedSint64String=J.prototype.pc;J.prototype.bc=function(){return L(this,this.a.m)};J.prototype.readPackedFixed32=J.prototype.bc;J.prototype.cc=function(){return L(this,this.a.ga)};J.prototype.readPackedFixed64=J.prototype.cc;J.prototype.dc=function(){return L(this,this.a.ha)};J.prototype.readPackedFixed64String=J.prototype.dc;J.prototype.kc=function(){return L(this,this.a.P)};J.prototype.readPackedSfixed32=J.prototype.kc;J.prototype.lc=function(){return L(this,this.a.ba)};
J.prototype.readPackedSfixed64=J.prototype.lc;J.prototype.mc=function(){return L(this,this.a.ca)};J.prototype.readPackedSfixed64String=J.prototype.mc;J.prototype.fc=function(){return L(this,this.a.aa)};J.prototype.readPackedFloat=J.prototype.fc;J.prototype.$b=function(){return L(this,this.a.Z)};J.prototype.readPackedDouble=J.prototype.$b;J.prototype.Zb=function(){return L(this,this.a.pa)};J.prototype.readPackedBool=J.prototype.Zb;J.prototype.ac=function(){return L(this,this.a.ra)};
J.prototype.readPackedEnum=J.prototype.ac;J.prototype.uc=function(){return L(this,this.a.ia)};J.prototype.readPackedVarintHash64=J.prototype.uc;J.prototype.ec=function(){return L(this,this.a.$)};J.prototype.readPackedFixedHash64=J.prototype.ec;function Ya(a,b,c,d,f){this.ma=a;this.Ba=b;this.la=c;this.Na=d;this.na=f}g("jspb.ExtensionFieldInfo",Ya,void 0);function Za(a,b,c,d,f,h){this.Za=a;this.za=b;this.Aa=c;this.Wa=d;this.Ab=f;this.Nb=h}g("jspb.ExtensionFieldBinaryInfo",Za,void 0);Ya.prototype.F=function(){return!!this.la};Ya.prototype.isMessageType=Ya.prototype.F;function N(){}g("jspb.Message",N,void 0);N.GENERATE_TO_OBJECT=!0;N.GENERATE_FROM_OBJECT=!0;var $a="function"==typeof Uint8Array;N.prototype.Ib=function(){return this.b};
N.prototype.getJsPbMessageId=N.prototype.Ib;
N.initialize=function(a,b,c,d,f,h){a.f=null;b||(b=c?[c]:[]);a.b=c?String(c):void 0;a.D=0===c?-1:0;a.u=b;a:{c=a.u.length;b=-1;if(c&&(b=c-1,c=a.u[b],!(null===c||"object"!=typeof c||Array.isArray(c)||$a&&c instanceof Uint8Array))){a.G=b-a.D;a.i=c;break a}-1<d?(a.G=Math.max(d,b+1-a.D),a.i=null):a.G=Number.MAX_VALUE}a.a={};if(f)for(d=0;d<f.length;d++)b=f[d],b<a.G?(b+=a.D,a.u[b]=a.u[b]||ab):(bb(a),a.i[b]=a.i[b]||ab);if(h&&h.length)for(d=0;d<h.length;d++)cb(a,h[d])};
var ab=Object.freeze?Object.freeze([]):[];function bb(a){var b=a.G+a.D;a.u[b]||(a.i=a.u[b]={})}function db(a,b,c){for(var d=[],f=0;f<a.length;f++)d[f]=b.call(a[f],c,a[f]);return d}N.toObjectList=db;N.toObjectExtension=function(a,b,c,d,f){for(var h in c){var m=c[h],t=d.call(a,m);if(null!=t){for(var B in m.Ba)if(m.Ba.hasOwnProperty(B))break;b[B]=m.Na?m.na?db(t,m.Na,f):m.Na(f,t):t}}};
N.serializeBinaryExtensions=function(a,b,c,d){for(var f in c){var h=c[f],m=h.Za;if(!h.Aa)throw Error("Message extension present that was generated without binary serialization support");var t=d.call(a,m);if(null!=t)if(m.F())if(h.Wa)h.Aa.call(b,m.ma,t,h.Wa);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");else h.Aa.call(b,m.ma,t)}};
N.readBinaryExtension=function(a,b,c,d,f){var h=c[b.c];if(h){c=h.Za;if(!h.za)throw Error("Deserializing extension whose generated code does not support binary format");if(c.F()){var m=new c.la;h.za.call(b,m,h.Ab)}else m=h.za.call(b);c.na&&!h.Nb?(b=d.call(a,c))?b.push(m):f.call(a,c,[m]):f.call(a,c,m)}else b.C()};function O(a,b){if(b<a.G){b+=a.D;var c=a.u[b];return c===ab?a.u[b]=[]:c}if(a.i)return c=a.i[b],c===ab?a.i[b]=[]:c}N.getField=O;N.getRepeatedField=function(a,b){return O(a,b)};
function eb(a,b){a=O(a,b);return null==a?a:+a}N.getOptionalFloatingPointField=eb;function fb(a,b){a=O(a,b);return null==a?a:!!a}N.getBooleanField=fb;N.getRepeatedFloatingPointField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.a[b]=!0}return c};N.getRepeatedBooleanField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.a[b]=!0}return c};
function gb(a){if(null==a||"string"===typeof a)return a;if($a&&a instanceof Uint8Array)return Ba(a);p("Cannot coerce to b64 string: "+k(a));return null}N.bytesAsB64=gb;function hb(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return Da(a);p("Cannot coerce to Uint8Array: "+k(a));return null}N.bytesAsU8=hb;N.bytesListAsB64=function(a){ib(a);return a.length&&"string"!==typeof a[0]?l(a,gb):a};N.bytesListAsU8=function(a){ib(a);return!a.length||a[0]instanceof Uint8Array?a:l(a,hb)};
function ib(a){if(a&&1<a.length){var b=k(a[0]);qa(a,function(c){k(c)!=b&&p("Inconsistent type in JSPB repeated field array. Got "+k(c)+" expected "+b)})}}function jb(a,b,c){a=O(a,b);return null==a?c:a}N.getFieldWithDefault=jb;N.getBooleanFieldWithDefault=function(a,b,c){a=fb(a,b);return null==a?c:a};N.getFloatingPointFieldWithDefault=function(a,b,c){a=eb(a,b);return null==a?c:a};N.getFieldProto3=jb;
N.getMapField=function(a,b,c,d){a.f||(a.f={});if(b in a.f)return a.f[b];var f=O(a,b);if(!f){if(c)return;f=[];P(a,b,f)}return a.f[b]=new r(f,d)};function P(a,b,c){q(a,N);b<a.G?a.u[b+a.D]=c:(bb(a),a.i[b]=c);return a}N.setField=P;N.setProto3IntField=function(a,b,c){return Q(a,b,c,0)};N.setProto3FloatField=function(a,b,c){return Q(a,b,c,0)};N.setProto3BooleanField=function(a,b,c){return Q(a,b,c,!1)};N.setProto3StringField=function(a,b,c){return Q(a,b,c,"")};
N.setProto3BytesField=function(a,b,c){return Q(a,b,c,"")};N.setProto3EnumField=function(a,b,c){return Q(a,b,c,0)};N.setProto3StringIntField=function(a,b,c){return Q(a,b,c,"0")};function Q(a,b,c,d){q(a,N);c!==d?P(a,b,c):b<a.G?a.u[b+a.D]=null:(bb(a),delete a.i[b]);return a}N.addToRepeatedField=function(a,b,c,d){q(a,N);b=O(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};function kb(a,b,c,d){q(a,N);(c=cb(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),P(a,c,void 0));return P(a,b,d)}
N.setOneofField=kb;function cb(a,b){for(var c,d,f=0;f<b.length;f++){var h=b[f],m=O(a,h);null!=m&&(c=h,d=m,P(a,h,void 0))}return c?(P(a,c,d),c):0}N.computeOneofCase=cb;N.getWrapperField=function(a,b,c,d){a.f||(a.f={});if(!a.f[c]){var f=O(a,c);if(d||f)a.f[c]=new b(f)}return a.f[c]};N.getRepeatedWrapperField=function(a,b,c){lb(a,b,c);b=a.f[c];b==ab&&(b=a.f[c]=[]);return b};function lb(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=O(a,c),f=[],h=0;h<d.length;h++)f[h]=new b(d[h]);a.f[c]=f}}
N.setWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});var d=c?c.g():c;a.f[b]=c;return P(a,b,d)};N.setOneofWrapperField=function(a,b,c,d){q(a,N);a.f||(a.f={});var f=d?d.g():d;a.f[b]=d;return kb(a,b,c,f)};N.setRepeatedWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});c=c||[];for(var d=[],f=0;f<c.length;f++)d[f]=c[f].g();a.f[b]=c;return P(a,b,d)};
N.addToRepeatedWrapperField=function(a,b,c,d,f){lb(a,d,b);var h=a.f[b];h||(h=a.f[b]=[]);c=c?c:new d;a=O(a,b);void 0!=f?(h.splice(f,0,c),a.splice(f,0,c.g())):(h.push(c),a.push(c.g()));return c};N.toMap=function(a,b,c,d){for(var f={},h=0;h<a.length;h++)f[b.call(a[h])]=c?c.call(a[h],d,a[h]):a[h];return f};function mb(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].g();else c&&c.g()}}N.prototype.g=function(){mb(this);return this.u};
N.prototype.toArray=N.prototype.g;N.prototype.toString=function(){mb(this);return this.u.toString()};N.prototype.getExtension=function(a){if(this.i){this.f||(this.f={});var b=a.ma;if(a.na){if(a.F())return this.f[b]||(this.f[b]=l(this.i[b]||[],function(c){return new a.la(c)})),this.f[b]}else if(a.F())return!this.f[b]&&this.i[b]&&(this.f[b]=new a.la(this.i[b])),this.f[b];return this.i[b]}};N.prototype.getExtension=N.prototype.getExtension;
N.prototype.Kc=function(a,b){this.f||(this.f={});bb(this);var c=a.ma;a.na?(b=b||[],a.F()?(this.f[c]=b,this.i[c]=l(b,function(d){return d.g()})):this.i[c]=b):a.F()?(this.f[c]=b,this.i[c]=b?b.g():b):this.i[c]=b;return this};N.prototype.setExtension=N.prototype.Kc;N.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.g();b=b.g();var d=[],f=0,h=c.length>b.length?c.length:b.length;a.b&&(d[0]=a.b,f=1);for(;f<h;f++)nb(c[f],b[f])||(d[f]=b[f]);return new a.constructor(d)};
N.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&nb(a.g(),b.g())};function ob(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!nb(a[d],b[d]))return!1;return!0}N.compareExtensions=ob;
function nb(a,b){if(a==b)return!0;if(!la(a)||!la(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if($a&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,f=void 0,h=Math.max(a.length,b.length);for(c=0;c<h;c++){var m=a[c],t=b[c];m&&m.constructor==Object&&(n(void 0===d),n(c===a.length-1),d=m,m=void 0);t&&t.constructor==
Object&&(n(void 0===f),n(c===b.length-1),f=t,t=void 0);if(!nb(m,t))return!1}return d||f?(d=d||{},f=f||{},ob(d,f)):!0}if(a.constructor===Object)return ob(a,b);throw Error("Invalid type in JSPB array");}N.compareFields=nb;N.prototype.Bb=function(){return pb(this)};N.prototype.cloneMessage=N.prototype.Bb;N.prototype.clone=function(){return pb(this)};N.prototype.clone=N.prototype.clone;N.clone=function(a){return pb(a)};function pb(a){return new a.constructor(qb(a.g()))}
N.copyInto=function(a,b){q(a,N);q(b,N);n(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=pb(a);for(var c=b.g(),d=a.g(),f=c.length=0;f<d.length;f++)c[f]=d[f];b.f=a.f;b.i=a.i};function qb(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?qb(n(d)):d)}return b}if($a&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?qb(n(d)):d);return b}
N.registerMessageType=function(a,b){b.we=a};var R={dump:function(a){q(a,N,"jspb.Message instance expected");n(a.getExtension,"Only unobfuscated and unoptimized compilation modes supported.");return R.X(a)}};g("jspb.debug.dump",R.dump,void 0);
R.X=function(a){var b=k(a);if("number"==b||"string"==b||"boolean"==b||"null"==b||"undefined"==b||"undefined"!==typeof Uint8Array&&a instanceof Uint8Array)return a;if("array"==b)return ua(a),l(a,R.X);if(a instanceof r){var c={};a=a.entries();for(var d=a.next();!d.done;d=a.next())c[d.value[0]]=R.X(d.value[1]);return c}q(a,N,"Only messages expected: "+a);b=a.constructor;var f={$name:b.name||b.displayName};for(t in b.prototype){var h=/^get([A-Z]\w*)/.exec(t);if(h&&"getExtension"!=t&&"getJsPbMessageId"!=
t){var m="has"+h[1];if(!a[m]||a[m]())m=a[t](),f[R.$a(h[1])]=R.X(m)}}if(a.extensionObject_)return f.$extensions="Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly",f;for(d in b.extensions)if(/^\d+$/.test(d)){m=b.extensions[d];var t=a.getExtension(m);h=void 0;m=m.Ba;var B=[],M=0;for(h in m)B[M++]=h;h=B[0];null!=t&&(c||(c=f.$extensions={}),c[R.$a(h)]=R.X(t))}return f};R.$a=function(a){return a.replace(/^[A-Z]/,function(b){return b.toLowerCase()})};function S(){this.a=[]}g("jspb.BinaryEncoder",S,void 0);S.prototype.length=function(){return this.a.length};S.prototype.length=S.prototype.length;S.prototype.end=function(){var a=this.a;this.a=[];return a};S.prototype.end=S.prototype.end;S.prototype.l=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);for(n(0<=b&&4294967296>b);0<b||127<a;)this.a.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.a.push(a)};S.prototype.writeSplitVarint64=S.prototype.l;
S.prototype.A=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);n(0<=b&&4294967296>b);this.s(a);this.s(b)};S.prototype.writeSplitFixed64=S.prototype.A;S.prototype.j=function(a){n(a==Math.floor(a));for(n(0<=a&&4294967296>a);127<a;)this.a.push(a&127|128),a>>>=7;this.a.push(a)};S.prototype.writeUnsignedVarint32=S.prototype.j;S.prototype.M=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);if(0<=a)this.j(a);else{for(var b=0;9>b;b++)this.a.push(a&127|128),a>>=7;this.a.push(1)}};
S.prototype.writeSignedVarint32=S.prototype.M;S.prototype.va=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);A(a);this.l(y,z)};S.prototype.writeUnsignedVarint64=S.prototype.va;S.prototype.ua=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.l(y,z)};S.prototype.writeSignedVarint64=S.prototype.ua;S.prototype.wa=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.j((a<<1^a>>31)>>>0)};S.prototype.writeZigzagVarint32=S.prototype.wa;
S.prototype.xa=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);Ga(a);this.l(y,z)};S.prototype.writeZigzagVarint64=S.prototype.xa;S.prototype.Ta=function(a){this.W(H(a))};S.prototype.writeZigzagVarint64String=S.prototype.Ta;S.prototype.W=function(a){var b=this;C(a);Ja(y,z,function(c,d){b.l(c>>>0,d>>>0)})};S.prototype.writeZigzagVarintHash64=S.prototype.W;S.prototype.be=function(a){n(a==Math.floor(a));n(0<=a&&256>a);this.a.push(a>>>0&255)};S.prototype.writeUint8=S.prototype.be;
S.prototype.ae=function(a){n(a==Math.floor(a));n(0<=a&&65536>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeUint16=S.prototype.ae;S.prototype.s=function(a){n(a==Math.floor(a));n(0<=a&&4294967296>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeUint32=S.prototype.s;S.prototype.V=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);Fa(a);this.s(y);this.s(z)};S.prototype.writeUint64=S.prototype.V;
S.prototype.Qc=function(a){n(a==Math.floor(a));n(-128<=a&&128>a);this.a.push(a>>>0&255)};S.prototype.writeInt8=S.prototype.Qc;S.prototype.Pc=function(a){n(a==Math.floor(a));n(-32768<=a&&32768>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeInt16=S.prototype.Pc;S.prototype.S=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeInt32=S.prototype.S;
S.prototype.T=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.A(y,z)};S.prototype.writeInt64=S.prototype.T;S.prototype.ka=function(a){n(a==Math.floor(a));n(-9223372036854775808<=+a&&0x7fffffffffffffff>+a);C(H(a));this.A(y,z)};S.prototype.writeInt64String=S.prototype.ka;S.prototype.L=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-3.4028234663852886E38<=a&&3.4028234663852886E38>=a);Ha(a);this.s(y)};S.prototype.writeFloat=S.prototype.L;
S.prototype.J=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-1.7976931348623157E308<=a&&1.7976931348623157E308>=a);Ia(a);this.s(y);this.s(z)};S.prototype.writeDouble=S.prototype.J;S.prototype.I=function(a){n("boolean"===typeof a||"number"===typeof a);this.a.push(a?1:0)};S.prototype.writeBool=S.prototype.I;S.prototype.R=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.M(a)};S.prototype.writeEnum=S.prototype.R;S.prototype.ja=function(a){this.a.push.apply(this.a,a)};
S.prototype.writeBytes=S.prototype.ja;S.prototype.N=function(a){C(a);this.l(y,z)};S.prototype.writeVarintHash64=S.prototype.N;S.prototype.K=function(a){C(a);this.s(y);this.s(z)};S.prototype.writeFixedHash64=S.prototype.K;
S.prototype.U=function(a){var b=this.a.length;ta(a);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.a.push(d);else if(2048>d)this.a.push(d>>6|192),this.a.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var f=a.charCodeAt(c+1);56320<=f&&57343>=f&&(d=1024*(d-55296)+f-56320+65536,this.a.push(d>>18|240),this.a.push(d>>12&63|128),this.a.push(d>>6&63|128),this.a.push(d&63|128),c++)}else this.a.push(d>>12|224),this.a.push(d>>6&63|128),this.a.push(d&63|128)}return this.a.length-
b};S.prototype.writeString=S.prototype.U;function T(a,b){this.lo=a;this.hi=b}g("jspb.arith.UInt64",T,void 0);T.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};T.prototype.cmp=T.prototype.cmp;T.prototype.La=function(){return new T((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};T.prototype.rightShift=T.prototype.La;T.prototype.Da=function(){return new T(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};T.prototype.leftShift=T.prototype.Da;
T.prototype.cb=function(){return!!(this.hi&2147483648)};T.prototype.msb=T.prototype.cb;T.prototype.Ob=function(){return!!(this.lo&1)};T.prototype.lsb=T.prototype.Ob;T.prototype.Ua=function(){return 0==this.lo&&0==this.hi};T.prototype.zero=T.prototype.Ua;T.prototype.add=function(a){return new T((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};T.prototype.add=T.prototype.add;
T.prototype.sub=function(a){return new T((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};T.prototype.sub=T.prototype.sub;function rb(a,b){var c=a&65535;a>>>=16;var d=b&65535,f=b>>>16;b=c*d+65536*(c*f&65535)+65536*(a*d&65535);for(c=a*f+(c*f>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new T(b>>>0,c>>>0)}T.mul32x32=rb;T.prototype.eb=function(a){var b=rb(this.lo,a);a=rb(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};T.prototype.mul=T.prototype.eb;
T.prototype.Xa=function(a){if(0==a)return[];var b=new T(0,0),c=new T(this.lo,this.hi);a=new T(a,0);for(var d=new T(1,0);!a.cb();)a=a.Da(),d=d.Da();for(;!d.Ua();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.La(),d=d.La();return[b,c]};T.prototype.div=T.prototype.Xa;T.prototype.toString=function(){for(var a="",b=this;!b.Ua();){b=b.Xa(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};T.prototype.toString=T.prototype.toString;
function U(a){for(var b=new T(0,0),c=new T(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;c.lo=parseInt(a[d],10);b=b.eb(10).add(c)}return b}T.fromString=U;T.prototype.clone=function(){return new T(this.lo,this.hi)};T.prototype.clone=T.prototype.clone;function V(a,b){this.lo=a;this.hi=b}g("jspb.arith.Int64",V,void 0);V.prototype.add=function(a){return new V((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};V.prototype.add=V.prototype.add;
V.prototype.sub=function(a){return new V((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};V.prototype.sub=V.prototype.sub;V.prototype.clone=function(){return new V(this.lo,this.hi)};V.prototype.clone=V.prototype.clone;V.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new T(this.lo,this.hi);a&&(b=(new T(0,0)).sub(b));return(a?"-":"")+b.toString()};V.prototype.toString=V.prototype.toString;
function sb(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=U(a);if(null===a)return null;b&&(a=(new T(0,0)).sub(a));return new V(a.lo,a.hi)}V.fromString=sb;function W(){this.c=[];this.b=0;this.a=new S;this.h=[]}g("jspb.BinaryWriter",W,void 0);function tb(a,b){var c=a.a.end();a.c.push(c);a.c.push(b);a.b+=c.length+b.length}function X(a,b){Y(a,b,2);b=a.a.end();a.c.push(b);a.b+=b.length;b.push(a.b);return b}function Z(a,b){var c=b.pop();c=a.b+a.a.length()-c;for(n(0<=c);127<c;)b.push(c&127|128),c>>>=7,a.b++;b.push(c);a.b++}W.prototype.pb=function(a,b,c){tb(this,a.subarray(b,c))};W.prototype.writeSerializedMessage=W.prototype.pb;
W.prototype.Pb=function(a,b,c){null!=a&&null!=b&&null!=c&&this.pb(a,b,c)};W.prototype.maybeWriteSerializedMessage=W.prototype.Pb;W.prototype.reset=function(){this.c=[];this.a.end();this.b=0;this.h=[]};W.prototype.reset=W.prototype.reset;W.prototype.ab=function(){n(0==this.h.length);for(var a=new Uint8Array(this.b+this.a.length()),b=this.c,c=b.length,d=0,f=0;f<c;f++){var h=b[f];a.set(h,d);d+=h.length}b=this.a.end();a.set(b,d);d+=b.length;n(d==a.length);this.c=[a];return a};
W.prototype.getResultBuffer=W.prototype.ab;W.prototype.Kb=function(a){return Ba(this.ab(),a)};W.prototype.getResultBase64String=W.prototype.Kb;W.prototype.Va=function(a){this.h.push(X(this,a))};W.prototype.beginSubMessage=W.prototype.Va;W.prototype.Ya=function(){n(0<=this.h.length);Z(this,this.h.pop())};W.prototype.endSubMessage=W.prototype.Ya;function Y(a,b,c){n(1<=b&&b==Math.floor(b));a.a.j(8*b+c)}
W.prototype.Nc=function(a,b,c){switch(a){case 1:this.J(b,c);break;case 2:this.L(b,c);break;case 3:this.T(b,c);break;case 4:this.V(b,c);break;case 5:this.S(b,c);break;case 6:this.Qa(b,c);break;case 7:this.Pa(b,c);break;case 8:this.I(b,c);break;case 9:this.U(b,c);break;case 10:p("Group field type not supported in writeAny()");break;case 11:p("Message field type not supported in writeAny()");break;case 12:this.ja(b,c);break;case 13:this.s(b,c);break;case 14:this.R(b,c);break;case 15:this.Ra(b,c);break;
case 16:this.Sa(b,c);break;case 17:this.rb(b,c);break;case 18:this.sb(b,c);break;case 30:this.K(b,c);break;case 31:this.N(b,c);break;default:p("Invalid field type in writeAny()")}};W.prototype.writeAny=W.prototype.Nc;function ub(a,b,c){null!=c&&(Y(a,b,0),a.a.j(c))}function vb(a,b,c){null!=c&&(Y(a,b,0),a.a.M(c))}W.prototype.S=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32=W.prototype.S;
W.prototype.ob=function(a,b){null!=b&&(b=parseInt(b,10),n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32String=W.prototype.ob;W.prototype.T=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.ua(b)))};W.prototype.writeInt64=W.prototype.T;W.prototype.ka=function(a,b){null!=b&&(b=sb(b),Y(this,a,0),this.a.l(b.lo,b.hi))};W.prototype.writeInt64String=W.prototype.ka;
W.prototype.s=function(a,b){null!=b&&(n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32=W.prototype.s;W.prototype.ub=function(a,b){null!=b&&(b=parseInt(b,10),n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32String=W.prototype.ub;W.prototype.V=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),null!=b&&(Y(this,a,0),this.a.va(b)))};W.prototype.writeUint64=W.prototype.V;W.prototype.vb=function(a,b){null!=b&&(b=U(b),Y(this,a,0),this.a.l(b.lo,b.hi))};
W.prototype.writeUint64String=W.prototype.vb;W.prototype.rb=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),null!=b&&(Y(this,a,0),this.a.wa(b)))};W.prototype.writeSint32=W.prototype.rb;W.prototype.sb=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.xa(b)))};W.prototype.writeSint64=W.prototype.sb;W.prototype.$d=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.W(b))};W.prototype.writeSintHash64=W.prototype.$d;
W.prototype.Zd=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.Ta(b))};W.prototype.writeSint64String=W.prototype.Zd;W.prototype.Pa=function(a,b){null!=b&&(n(0<=b&&4294967296>b),Y(this,a,5),this.a.s(b))};W.prototype.writeFixed32=W.prototype.Pa;W.prototype.Qa=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),Y(this,a,1),this.a.V(b))};W.prototype.writeFixed64=W.prototype.Qa;W.prototype.nb=function(a,b){null!=b&&(b=U(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeFixed64String=W.prototype.nb;
W.prototype.Ra=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,5),this.a.S(b))};W.prototype.writeSfixed32=W.prototype.Ra;W.prototype.Sa=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),Y(this,a,1),this.a.T(b))};W.prototype.writeSfixed64=W.prototype.Sa;W.prototype.qb=function(a,b){null!=b&&(b=sb(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeSfixed64String=W.prototype.qb;W.prototype.L=function(a,b){null!=b&&(Y(this,a,5),this.a.L(b))};
W.prototype.writeFloat=W.prototype.L;W.prototype.J=function(a,b){null!=b&&(Y(this,a,1),this.a.J(b))};W.prototype.writeDouble=W.prototype.J;W.prototype.I=function(a,b){null!=b&&(n("boolean"===typeof b||"number"===typeof b),Y(this,a,0),this.a.I(b))};W.prototype.writeBool=W.prototype.I;W.prototype.R=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,0),this.a.M(b))};W.prototype.writeEnum=W.prototype.R;W.prototype.U=function(a,b){null!=b&&(a=X(this,a),this.a.U(b),Z(this,a))};
W.prototype.writeString=W.prototype.U;W.prototype.ja=function(a,b){null!=b&&(b=Ua(b),Y(this,a,2),this.a.j(b.length),tb(this,b))};W.prototype.writeBytes=W.prototype.ja;W.prototype.Rc=function(a,b,c){null!=b&&(a=X(this,a),c(b,this),Z(this,a))};W.prototype.writeMessage=W.prototype.Rc;W.prototype.Sc=function(a,b,c){null!=b&&(Y(this,1,3),Y(this,2,0),this.a.M(a),a=X(this,3),c(b,this),Z(this,a),Y(this,1,4))};W.prototype.writeMessageSet=W.prototype.Sc;
W.prototype.Oc=function(a,b,c){null!=b&&(Y(this,a,3),c(b,this),Y(this,a,4))};W.prototype.writeGroup=W.prototype.Oc;W.prototype.K=function(a,b){null!=b&&(n(8==b.length),Y(this,a,1),this.a.K(b))};W.prototype.writeFixedHash64=W.prototype.K;W.prototype.N=function(a,b){null!=b&&(n(8==b.length),Y(this,a,0),this.a.N(b))};W.prototype.writeVarintHash64=W.prototype.N;W.prototype.A=function(a,b,c){Y(this,a,1);this.a.A(b,c)};W.prototype.writeSplitFixed64=W.prototype.A;
W.prototype.l=function(a,b,c){Y(this,a,0);this.a.l(b,c)};W.prototype.writeSplitVarint64=W.prototype.l;W.prototype.tb=function(a,b,c){Y(this,a,0);var d=this.a;Ja(b,c,function(f,h){d.l(f>>>0,h>>>0)})};W.prototype.writeSplitZigzagVarint64=W.prototype.tb;W.prototype.Ed=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)vb(this,a,b[c])};W.prototype.writeRepeatedInt32=W.prototype.Ed;W.prototype.Fd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ob(a,b[c])};
W.prototype.writeRepeatedInt32String=W.prototype.Fd;W.prototype.Gd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.ua(d))}};W.prototype.writeRepeatedInt64=W.prototype.Gd;W.prototype.Qd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.A(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitFixed64=W.prototype.Qd;W.prototype.Rd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.l(a,c(b[f]),d(b[f]))};
W.prototype.writeRepeatedSplitVarint64=W.prototype.Rd;W.prototype.Sd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.tb(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitZigzagVarint64=W.prototype.Sd;W.prototype.Hd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ka(a,b[c])};W.prototype.writeRepeatedInt64String=W.prototype.Hd;W.prototype.Ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)ub(this,a,b[c])};W.prototype.writeRepeatedUint32=W.prototype.Ud;
W.prototype.Vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ub(a,b[c])};W.prototype.writeRepeatedUint32String=W.prototype.Vd;W.prototype.Wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.va(d))}};W.prototype.writeRepeatedUint64=W.prototype.Wd;W.prototype.Xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.vb(a,b[c])};W.prototype.writeRepeatedUint64String=W.prototype.Xd;
W.prototype.Md=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.wa(d))}};W.prototype.writeRepeatedSint32=W.prototype.Md;W.prototype.Nd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.xa(d))}};W.prototype.writeRepeatedSint64=W.prototype.Nd;W.prototype.Od=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.Ta(d))}};W.prototype.writeRepeatedSint64String=W.prototype.Od;
W.prototype.Pd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.W(d))}};W.prototype.writeRepeatedSintHash64=W.prototype.Pd;W.prototype.yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Pa(a,b[c])};W.prototype.writeRepeatedFixed32=W.prototype.yd;W.prototype.zd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Qa(a,b[c])};W.prototype.writeRepeatedFixed64=W.prototype.zd;
W.prototype.Ad=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.nb(a,b[c])};W.prototype.writeRepeatedFixed64String=W.prototype.Ad;W.prototype.Jd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Ra(a,b[c])};W.prototype.writeRepeatedSfixed32=W.prototype.Jd;W.prototype.Kd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Sa(a,b[c])};W.prototype.writeRepeatedSfixed64=W.prototype.Kd;W.prototype.Ld=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.qb(a,b[c])};
W.prototype.writeRepeatedSfixed64String=W.prototype.Ld;W.prototype.Cd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.L(a,b[c])};W.prototype.writeRepeatedFloat=W.prototype.Cd;W.prototype.wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.J(a,b[c])};W.prototype.writeRepeatedDouble=W.prototype.wd;W.prototype.ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.I(a,b[c])};W.prototype.writeRepeatedBool=W.prototype.ud;
W.prototype.xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.R(a,b[c])};W.prototype.writeRepeatedEnum=W.prototype.xd;W.prototype.Td=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.U(a,b[c])};W.prototype.writeRepeatedString=W.prototype.Td;W.prototype.vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ja(a,b[c])};W.prototype.writeRepeatedBytes=W.prototype.vd;W.prototype.Id=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var f=X(this,a);c(b[d],this);Z(this,f)}};
W.prototype.writeRepeatedMessage=W.prototype.Id;W.prototype.Dd=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)Y(this,a,3),c(b[d],this),Y(this,a,4)};W.prototype.writeRepeatedGroup=W.prototype.Dd;W.prototype.Bd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.K(a,b[c])};W.prototype.writeRepeatedFixedHash64=W.prototype.Bd;W.prototype.Yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.N(a,b[c])};W.prototype.writeRepeatedVarintHash64=W.prototype.Yd;
W.prototype.ad=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(b[c]);Z(this,a)}};W.prototype.writePackedInt32=W.prototype.ad;W.prototype.bd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedInt32String=W.prototype.bd;W.prototype.cd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.ua(b[c]);Z(this,a)}};W.prototype.writePackedInt64=W.prototype.cd;
W.prototype.md=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.A(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitFixed64=W.prototype.md;W.prototype.nd=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.l(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitVarint64=W.prototype.nd;W.prototype.od=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=this.a,h=0;h<b.length;h++)Ja(c(b[h]),d(b[h]),function(m,t){f.l(m>>>0,t>>>0)});Z(this,a)}};
W.prototype.writePackedSplitZigzagVarint64=W.prototype.od;W.prototype.dd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=sb(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};W.prototype.writePackedInt64String=W.prototype.dd;W.prototype.pd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(b[c]);Z(this,a)}};W.prototype.writePackedUint32=W.prototype.pd;
W.prototype.qd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedUint32String=W.prototype.qd;W.prototype.rd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.va(b[c]);Z(this,a)}};W.prototype.writePackedUint64=W.prototype.rd;W.prototype.sd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=U(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};
W.prototype.writePackedUint64String=W.prototype.sd;W.prototype.hd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.wa(b[c]);Z(this,a)}};W.prototype.writePackedSint32=W.prototype.hd;W.prototype.jd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.xa(b[c]);Z(this,a)}};W.prototype.writePackedSint64=W.prototype.jd;W.prototype.kd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(H(b[c]));Z(this,a)}};
W.prototype.writePackedSint64String=W.prototype.kd;W.prototype.ld=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(b[c]);Z(this,a)}};W.prototype.writePackedSintHash64=W.prototype.ld;W.prototype.Wc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.s(b[a])};W.prototype.writePackedFixed32=W.prototype.Wc;W.prototype.Xc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.V(b[a])};
W.prototype.writePackedFixed64=W.prototype.Xc;W.prototype.Yc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++){var c=U(b[a]);this.a.A(c.lo,c.hi)}};W.prototype.writePackedFixed64String=W.prototype.Yc;W.prototype.ed=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.S(b[a])};W.prototype.writePackedSfixed32=W.prototype.ed;
W.prototype.fd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.T(b[a])};W.prototype.writePackedSfixed64=W.prototype.fd;W.prototype.gd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.ka(b[a])};W.prototype.writePackedSfixed64String=W.prototype.gd;W.prototype.$c=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.L(b[a])};W.prototype.writePackedFloat=W.prototype.$c;
W.prototype.Uc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.J(b[a])};W.prototype.writePackedDouble=W.prototype.Uc;W.prototype.Tc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(b.length),a=0;a<b.length;a++)this.a.I(b[a])};W.prototype.writePackedBool=W.prototype.Tc;W.prototype.Vc=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.R(b[c]);Z(this,a)}};W.prototype.writePackedEnum=W.prototype.Vc;
W.prototype.Zc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.K(b[a])};W.prototype.writePackedFixedHash64=W.prototype.Zc;W.prototype.td=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.N(b[c]);Z(this,a)}};W.prototype.writePackedVarintHash64=W.prototype.td;"object"===typeof exports&&(exports.debug=R,exports.Map=r,exports.Message=N,exports.BinaryReader=J,exports.BinaryWriter=W,exports.ExtensionFieldInfo=Ya,exports.ExtensionFieldBinaryInfo=Za,exports.exportSymbol=ma,exports.inherits=na,exports.object={extend:pa},exports.typeOf=k);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
// source: google/protobuf/any.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.google.protobuf.Any', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Any = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Any, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.Any.displayName = 'proto.google.protobuf.Any';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Any.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Any.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Any} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Any.toObject = function(includeInstance, msg) {
  var f, obj = {
typeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Any}
 */
proto.google.protobuf.Any.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Any;
  return proto.google.protobuf.Any.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Any} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Any}
 */
proto.google.protobuf.Any.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Any.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Any.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Any} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Any.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string type_url = 1;
 * @return {string}
 */
proto.google.protobuf.Any.prototype.getTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.Any} returns this
 */
proto.google.protobuf.Any.prototype.setTypeUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.google.protobuf.Any.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.google.protobuf.Any.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.google.protobuf.Any.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.protobuf.Any} returns this
 */
proto.google.protobuf.Any.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.google.protobuf);
/* This code will be inserted into generated code for
 * google/protobuf/any.proto. */

/**
 * Returns the type name contained in this instance, if any.
 * @return {string|undefined}
 */
proto.google.protobuf.Any.prototype.getTypeName = function() {
  return this.getTypeUrl().split('/').pop();
};


/**
 * Packs the given message instance into this Any.
 * For binary format usage only.
 * @param {!Uint8Array} serialized The serialized data to pack.
 * @param {string} name The type name of this message object.
 * @param {string=} opt_typeUrlPrefix the type URL prefix.
 */
proto.google.protobuf.Any.prototype.pack = function(serialized, name,
                                                    opt_typeUrlPrefix) {
  if (!opt_typeUrlPrefix) {
    opt_typeUrlPrefix = 'type.googleapis.com/';
  }

  if (opt_typeUrlPrefix.substr(-1) != '/') {
    this.setTypeUrl(opt_typeUrlPrefix + '/' + name);
  } else {
    this.setTypeUrl(opt_typeUrlPrefix + name);
  }

  this.setValue(serialized);
};


/**
 * @template T
 * Unpacks this Any into the given message object.
 * @param {function(Uint8Array):T} deserialize Function that will deserialize
 *     the binary data properly.
 * @param {string} name The expected type name of this message object.
 * @return {?T} If the name matched the expected name, returns the deserialized
 *     object, otherwise returns null.
 */
proto.google.protobuf.Any.prototype.unpack = function(deserialize, name) {
  if (this.getTypeName() == name) {
    return deserialize(this.getValue_asU8());
  } else {
    return null;
  }
};

},{"google-protobuf":1}],3:[function(require,module,exports){
// source: google/protobuf/timestamp.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.google.protobuf.Timestamp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.Timestamp.displayName = 'proto.google.protobuf.Timestamp';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.google.protobuf.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Timestamp;
  return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.google.protobuf.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.Timestamp} returns this
 */
proto.google.protobuf.Timestamp.prototype.setSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.google.protobuf.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.Timestamp} returns this
 */
proto.google.protobuf.Timestamp.prototype.setNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.google.protobuf);
/* This code will be inserted into generated code for
 * google/protobuf/timestamp.proto. */

/**
 * Returns a JavaScript 'Date' object corresponding to this Timestamp.
 * @return {!Date}
 */
proto.google.protobuf.Timestamp.prototype.toDate = function() {
  var seconds = this.getSeconds();
  var nanos = this.getNanos();

  return new Date((seconds * 1000) + (nanos / 1000000));
};


/**
 * Sets the value of this Timestamp object to be the given Date.
 * @param {!Date} value The value to set.
 */
proto.google.protobuf.Timestamp.prototype.fromDate = function(value) {
  this.setSeconds(Math.floor(value.getTime() / 1000));
  this.setNanos(value.getMilliseconds() * 1000000);
};


/**
 * Factory method that returns a Timestamp object with value equal to
 * the given Date.
 * @param {!Date} value The value to set.
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.google.protobuf.Timestamp.fromDate = function(value) {
  var timestamp = new proto.google.protobuf.Timestamp();
  timestamp.fromDate(value);
  return timestamp;
};

},{"google-protobuf":1}],4:[function(require,module,exports){
const pb = require('./protobufs_pb');
main();

},{"./protobufs_pb":5}],5:[function(require,module,exports){
// source: src/protobufs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.qdb.BinaryFile', null, global);
goog.exportSymbol('proto.qdb.Bool', null, global);
goog.exportSymbol('proto.qdb.ConnectionState', null, global);
goog.exportSymbol('proto.qdb.ConnectionState.ConnectionStateEnum', null, global);
goog.exportSymbol('proto.qdb.DatabaseEntity', null, global);
goog.exportSymbol('proto.qdb.DatabaseEntitySchema', null, global);
goog.exportSymbol('proto.qdb.DatabaseField', null, global);
goog.exportSymbol('proto.qdb.DatabaseFieldSchema', null, global);
goog.exportSymbol('proto.qdb.DatabaseNotification', null, global);
goog.exportSymbol('proto.qdb.DatabaseNotificationConfig', null, global);
goog.exportSymbol('proto.qdb.DatabaseRequest', null, global);
goog.exportSymbol('proto.qdb.DatabaseSnapshot', null, global);
goog.exportSymbol('proto.qdb.EntityReference', null, global);
goog.exportSymbol('proto.qdb.Float', null, global);
goog.exportSymbol('proto.qdb.GarageDoorState', null, global);
goog.exportSymbol('proto.qdb.GarageDoorState.GarageDoorStateEnum', null, global);
goog.exportSymbol('proto.qdb.Int', null, global);
goog.exportSymbol('proto.qdb.LogMessage', null, global);
goog.exportSymbol('proto.qdb.LogMessage.LogLevelEnum', null, global);
goog.exportSymbol('proto.qdb.String', null, global);
goog.exportSymbol('proto.qdb.Timestamp', null, global);
goog.exportSymbol('proto.qdb.WebConfigCreateEntityRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigCreateEntityResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigCreateEntityResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigCreateSnapshotRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigCreateSnapshotResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigCreateSnapshotResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigDeleteEntityRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigDeleteEntityResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigDeleteEntityResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetAllFieldsRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetAllFieldsResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntityRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntityResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntityResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntitySchemaRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntitySchemaResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntitySchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntityTypesRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetEntityTypesResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetFieldSchemaRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetFieldSchemaResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetFieldSchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetRootRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigGetRootResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigRestoreSnapshotRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigRestoreSnapshotResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigRestoreSnapshotResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigSetEntitySchemaRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigSetEntitySchemaResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigSetEntitySchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebConfigSetFieldSchemaRequest', null, global);
goog.exportSymbol('proto.qdb.WebConfigSetFieldSchemaResponse', null, global);
goog.exportSymbol('proto.qdb.WebConfigSetFieldSchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebHeader', null, global);
goog.exportSymbol('proto.qdb.WebHeader.AuthenticationStatusEnum', null, global);
goog.exportSymbol('proto.qdb.WebMessage', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeDatabaseRequest', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeDatabaseRequest.RequestTypeEnum', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeDatabaseResponse', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeGetEntitiesRequest', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeGetEntitiesResponse', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeGetNotificationsRequest', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeGetNotificationsResponse', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeRegisterNotificationRequest', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeRegisterNotificationResponse', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeUnregisterNotificationRequest', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeUnregisterNotificationResponse', null, global);
goog.exportSymbol('proto.qdb.WebRuntimeUnregisterNotificationResponse.StatusEnum', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebHeader.displayName = 'proto.qdb.WebHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebMessage.displayName = 'proto.qdb.WebMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigCreateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigCreateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigCreateEntityRequest.displayName = 'proto.qdb.WebConfigCreateEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigCreateEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigCreateEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigCreateEntityResponse.displayName = 'proto.qdb.WebConfigCreateEntityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigDeleteEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigDeleteEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigDeleteEntityRequest.displayName = 'proto.qdb.WebConfigDeleteEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigDeleteEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigDeleteEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigDeleteEntityResponse.displayName = 'proto.qdb.WebConfigDeleteEntityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetEntityTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetEntityTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetEntityTypesRequest.displayName = 'proto.qdb.WebConfigGetEntityTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetEntityTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebConfigGetEntityTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebConfigGetEntityTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetEntityTypesResponse.displayName = 'proto.qdb.WebConfigGetEntityTypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetEntityRequest.displayName = 'proto.qdb.WebConfigGetEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetEntityResponse.displayName = 'proto.qdb.WebConfigGetEntityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetFieldSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetFieldSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetFieldSchemaRequest.displayName = 'proto.qdb.WebConfigGetFieldSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetFieldSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetFieldSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetFieldSchemaResponse.displayName = 'proto.qdb.WebConfigGetFieldSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigSetFieldSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigSetFieldSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigSetFieldSchemaRequest.displayName = 'proto.qdb.WebConfigSetFieldSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigSetFieldSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigSetFieldSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigSetFieldSchemaResponse.displayName = 'proto.qdb.WebConfigSetFieldSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetEntitySchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetEntitySchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetEntitySchemaRequest.displayName = 'proto.qdb.WebConfigGetEntitySchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetEntitySchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetEntitySchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetEntitySchemaResponse.displayName = 'proto.qdb.WebConfigGetEntitySchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigSetEntitySchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebConfigSetEntitySchemaRequest.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebConfigSetEntitySchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigSetEntitySchemaRequest.displayName = 'proto.qdb.WebConfigSetEntitySchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigSetEntitySchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigSetEntitySchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigSetEntitySchemaResponse.displayName = 'proto.qdb.WebConfigSetEntitySchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigCreateSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigCreateSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigCreateSnapshotRequest.displayName = 'proto.qdb.WebConfigCreateSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigCreateSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigCreateSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigCreateSnapshotResponse.displayName = 'proto.qdb.WebConfigCreateSnapshotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigRestoreSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigRestoreSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigRestoreSnapshotRequest.displayName = 'proto.qdb.WebConfigRestoreSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigRestoreSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigRestoreSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigRestoreSnapshotResponse.displayName = 'proto.qdb.WebConfigRestoreSnapshotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetRootRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetRootRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetRootRequest.displayName = 'proto.qdb.WebConfigGetRootRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetRootResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetRootResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetRootResponse.displayName = 'proto.qdb.WebConfigGetRootResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetAllFieldsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebConfigGetAllFieldsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetAllFieldsRequest.displayName = 'proto.qdb.WebConfigGetAllFieldsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebConfigGetAllFieldsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebConfigGetAllFieldsResponse.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebConfigGetAllFieldsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebConfigGetAllFieldsResponse.displayName = 'proto.qdb.WebConfigGetAllFieldsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeDatabaseRequest.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeDatabaseRequest.displayName = 'proto.qdb.WebRuntimeDatabaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeDatabaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeDatabaseResponse.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeDatabaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeDatabaseResponse.displayName = 'proto.qdb.WebRuntimeDatabaseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeRegisterNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeRegisterNotificationRequest.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeRegisterNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeRegisterNotificationRequest.displayName = 'proto.qdb.WebRuntimeRegisterNotificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeRegisterNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeRegisterNotificationResponse.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeRegisterNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeRegisterNotificationResponse.displayName = 'proto.qdb.WebRuntimeRegisterNotificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeGetNotificationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebRuntimeGetNotificationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeGetNotificationsRequest.displayName = 'proto.qdb.WebRuntimeGetNotificationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeGetNotificationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeGetNotificationsResponse.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeGetNotificationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeGetNotificationsResponse.displayName = 'proto.qdb.WebRuntimeGetNotificationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeUnregisterNotificationRequest.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeUnregisterNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeUnregisterNotificationRequest.displayName = 'proto.qdb.WebRuntimeUnregisterNotificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebRuntimeUnregisterNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeUnregisterNotificationResponse.displayName = 'proto.qdb.WebRuntimeUnregisterNotificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.displayName = 'proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.displayName = 'proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeGetEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.WebRuntimeGetEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeGetEntitiesRequest.displayName = 'proto.qdb.WebRuntimeGetEntitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.WebRuntimeGetEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.WebRuntimeGetEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.qdb.WebRuntimeGetEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.WebRuntimeGetEntitiesResponse.displayName = 'proto.qdb.WebRuntimeGetEntitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.DatabaseEntity.repeatedFields_, null);
};
goog.inherits(proto.qdb.DatabaseEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseEntity.displayName = 'proto.qdb.DatabaseEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.DatabaseField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseField.displayName = 'proto.qdb.DatabaseField';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.DatabaseNotificationConfig.repeatedFields_, null);
};
goog.inherits(proto.qdb.DatabaseNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseNotificationConfig.displayName = 'proto.qdb.DatabaseNotificationConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.DatabaseNotification.repeatedFields_, null);
};
goog.inherits(proto.qdb.DatabaseNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseNotification.displayName = 'proto.qdb.DatabaseNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseEntitySchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.DatabaseEntitySchema.repeatedFields_, null);
};
goog.inherits(proto.qdb.DatabaseEntitySchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseEntitySchema.displayName = 'proto.qdb.DatabaseEntitySchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseFieldSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.DatabaseFieldSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseFieldSchema.displayName = 'proto.qdb.DatabaseFieldSchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.DatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseRequest.displayName = 'proto.qdb.DatabaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.DatabaseSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qdb.DatabaseSnapshot.repeatedFields_, null);
};
goog.inherits(proto.qdb.DatabaseSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.DatabaseSnapshot.displayName = 'proto.qdb.DatabaseSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.Int.displayName = 'proto.qdb.Int';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.String = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.String, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.String.displayName = 'proto.qdb.String';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.Timestamp.displayName = 'proto.qdb.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.Float = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.Float, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.Float.displayName = 'proto.qdb.Float';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.Bool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.Bool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.Bool.displayName = 'proto.qdb.Bool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.EntityReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.EntityReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.EntityReference.displayName = 'proto.qdb.EntityReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.BinaryFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.BinaryFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.BinaryFile.displayName = 'proto.qdb.BinaryFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.LogMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.LogMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.LogMessage.displayName = 'proto.qdb.LogMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.GarageDoorState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.GarageDoorState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.GarageDoorState.displayName = 'proto.qdb.GarageDoorState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qdb.ConnectionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qdb.ConnectionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qdb.ConnectionState.displayName = 'proto.qdb.ConnectionState';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    authenticationstatus: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebHeader}
 */
proto.qdb.WebHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebHeader;
  return proto.qdb.WebHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebHeader}
 */
proto.qdb.WebHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.qdb.WebHeader.AuthenticationStatusEnum} */ (reader.readEnum());
      msg.setAuthenticationstatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthenticationstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebHeader.AuthenticationStatusEnum = {
  UNSPECIFIED: 0,
  AUTHENTICATED: 1,
  UNAUTHENTICATED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.WebHeader.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebHeader} returns this
 */
proto.qdb.WebHeader.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qdb.WebHeader.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qdb.WebHeader} returns this
*/
proto.qdb.WebHeader.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebHeader} returns this
 */
proto.qdb.WebHeader.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebHeader.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuthenticationStatusEnum authenticationStatus = 3;
 * @return {!proto.qdb.WebHeader.AuthenticationStatusEnum}
 */
proto.qdb.WebHeader.prototype.getAuthenticationstatus = function() {
  return /** @type {!proto.qdb.WebHeader.AuthenticationStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.qdb.WebHeader.AuthenticationStatusEnum} value
 * @return {!proto.qdb.WebHeader} returns this
 */
proto.qdb.WebHeader.prototype.setAuthenticationstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.qdb.WebHeader.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebMessage}
 */
proto.qdb.WebMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebMessage;
  return proto.qdb.WebMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebMessage}
 */
proto.qdb.WebMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.WebHeader;
      reader.readMessage(value,proto.qdb.WebHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qdb.WebHeader.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional WebHeader header = 1;
 * @return {?proto.qdb.WebHeader}
 */
proto.qdb.WebMessage.prototype.getHeader = function() {
  return /** @type{?proto.qdb.WebHeader} */ (
    jspb.Message.getWrapperField(this, proto.qdb.WebHeader, 1));
};


/**
 * @param {?proto.qdb.WebHeader|undefined} value
 * @return {!proto.qdb.WebMessage} returns this
*/
proto.qdb.WebMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebMessage} returns this
 */
proto.qdb.WebMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Any payload = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.qdb.WebMessage.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.qdb.WebMessage} returns this
*/
proto.qdb.WebMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebMessage} returns this
 */
proto.qdb.WebMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigCreateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigCreateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigCreateEntityRequest}
 */
proto.qdb.WebConfigCreateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigCreateEntityRequest;
  return proto.qdb.WebConfigCreateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigCreateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigCreateEntityRequest}
 */
proto.qdb.WebConfigCreateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigCreateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigCreateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigCreateEntityRequest} returns this
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigCreateEntityRequest} returns this
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parentId = 3;
 * @return {string}
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigCreateEntityRequest} returns this
 */
proto.qdb.WebConfigCreateEntityRequest.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigCreateEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigCreateEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigCreateEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateEntityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigCreateEntityResponse}
 */
proto.qdb.WebConfigCreateEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigCreateEntityResponse;
  return proto.qdb.WebConfigCreateEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigCreateEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigCreateEntityResponse}
 */
proto.qdb.WebConfigCreateEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigCreateEntityResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigCreateEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigCreateEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigCreateEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateEntityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigCreateEntityResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigCreateEntityResponse.StatusEnum}
 */
proto.qdb.WebConfigCreateEntityResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigCreateEntityResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigCreateEntityResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigCreateEntityResponse} returns this
 */
proto.qdb.WebConfigCreateEntityResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.qdb.WebConfigCreateEntityResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigCreateEntityResponse} returns this
 */
proto.qdb.WebConfigCreateEntityResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigDeleteEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigDeleteEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigDeleteEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigDeleteEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigDeleteEntityRequest}
 */
proto.qdb.WebConfigDeleteEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigDeleteEntityRequest;
  return proto.qdb.WebConfigDeleteEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigDeleteEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigDeleteEntityRequest}
 */
proto.qdb.WebConfigDeleteEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigDeleteEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigDeleteEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigDeleteEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigDeleteEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.WebConfigDeleteEntityRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigDeleteEntityRequest} returns this
 */
proto.qdb.WebConfigDeleteEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigDeleteEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigDeleteEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigDeleteEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigDeleteEntityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigDeleteEntityResponse}
 */
proto.qdb.WebConfigDeleteEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigDeleteEntityResponse;
  return proto.qdb.WebConfigDeleteEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigDeleteEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigDeleteEntityResponse}
 */
proto.qdb.WebConfigDeleteEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigDeleteEntityResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigDeleteEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigDeleteEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigDeleteEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigDeleteEntityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigDeleteEntityResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigDeleteEntityResponse.StatusEnum}
 */
proto.qdb.WebConfigDeleteEntityResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigDeleteEntityResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigDeleteEntityResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigDeleteEntityResponse} returns this
 */
proto.qdb.WebConfigDeleteEntityResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetEntityTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetEntityTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetEntityTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetEntityTypesRequest}
 */
proto.qdb.WebConfigGetEntityTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetEntityTypesRequest;
  return proto.qdb.WebConfigGetEntityTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetEntityTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetEntityTypesRequest}
 */
proto.qdb.WebConfigGetEntityTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetEntityTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetEntityTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetEntityTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebConfigGetEntityTypesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetEntityTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetEntityTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetEntityTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    typesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetEntityTypesResponse}
 */
proto.qdb.WebConfigGetEntityTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetEntityTypesResponse;
  return proto.qdb.WebConfigGetEntityTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetEntityTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetEntityTypesResponse}
 */
proto.qdb.WebConfigGetEntityTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetEntityTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetEntityTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetEntityTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string types = 1;
 * @return {!Array<string>}
 */
proto.qdb.WebConfigGetEntityTypesResponse.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.WebConfigGetEntityTypesResponse} returns this
 */
proto.qdb.WebConfigGetEntityTypesResponse.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.WebConfigGetEntityTypesResponse} returns this
 */
proto.qdb.WebConfigGetEntityTypesResponse.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebConfigGetEntityTypesResponse} returns this
 */
proto.qdb.WebConfigGetEntityTypesResponse.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetEntityRequest}
 */
proto.qdb.WebConfigGetEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetEntityRequest;
  return proto.qdb.WebConfigGetEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetEntityRequest}
 */
proto.qdb.WebConfigGetEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.WebConfigGetEntityRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigGetEntityRequest} returns this
 */
proto.qdb.WebConfigGetEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entity: (f = msg.getEntity()) && proto.qdb.DatabaseEntity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetEntityResponse}
 */
proto.qdb.WebConfigGetEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetEntityResponse;
  return proto.qdb.WebConfigGetEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetEntityResponse}
 */
proto.qdb.WebConfigGetEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigGetEntityResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseEntity;
      reader.readMessage(value,proto.qdb.DatabaseEntity.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qdb.DatabaseEntity.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigGetEntityResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigGetEntityResponse.StatusEnum}
 */
proto.qdb.WebConfigGetEntityResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigGetEntityResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigGetEntityResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigGetEntityResponse} returns this
 */
proto.qdb.WebConfigGetEntityResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseEntity entity = 2;
 * @return {?proto.qdb.DatabaseEntity}
 */
proto.qdb.WebConfigGetEntityResponse.prototype.getEntity = function() {
  return /** @type{?proto.qdb.DatabaseEntity} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseEntity, 2));
};


/**
 * @param {?proto.qdb.DatabaseEntity|undefined} value
 * @return {!proto.qdb.WebConfigGetEntityResponse} returns this
*/
proto.qdb.WebConfigGetEntityResponse.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebConfigGetEntityResponse} returns this
 */
proto.qdb.WebConfigGetEntityResponse.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebConfigGetEntityResponse.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetFieldSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetFieldSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetFieldSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetFieldSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetFieldSchemaRequest}
 */
proto.qdb.WebConfigGetFieldSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetFieldSchemaRequest;
  return proto.qdb.WebConfigGetFieldSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetFieldSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetFieldSchemaRequest}
 */
proto.qdb.WebConfigGetFieldSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetFieldSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetFieldSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetFieldSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetFieldSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.qdb.WebConfigGetFieldSchemaRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigGetFieldSchemaRequest} returns this
 */
proto.qdb.WebConfigGetFieldSchemaRequest.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetFieldSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetFieldSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetFieldSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    schema: (f = msg.getSchema()) && proto.qdb.DatabaseFieldSchema.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetFieldSchemaResponse}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetFieldSchemaResponse;
  return proto.qdb.WebConfigGetFieldSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetFieldSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetFieldSchemaResponse}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigGetFieldSchemaResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseFieldSchema;
      reader.readMessage(value,proto.qdb.DatabaseFieldSchema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetFieldSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetFieldSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetFieldSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qdb.DatabaseFieldSchema.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigGetFieldSchemaResponse.StatusEnum}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigGetFieldSchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigGetFieldSchemaResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigGetFieldSchemaResponse} returns this
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseFieldSchema schema = 2;
 * @return {?proto.qdb.DatabaseFieldSchema}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.getSchema = function() {
  return /** @type{?proto.qdb.DatabaseFieldSchema} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseFieldSchema, 2));
};


/**
 * @param {?proto.qdb.DatabaseFieldSchema|undefined} value
 * @return {!proto.qdb.WebConfigGetFieldSchemaResponse} returns this
*/
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebConfigGetFieldSchemaResponse} returns this
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebConfigGetFieldSchemaResponse.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigSetFieldSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigSetFieldSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetFieldSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    schema: (f = msg.getSchema()) && proto.qdb.DatabaseFieldSchema.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigSetFieldSchemaRequest}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigSetFieldSchemaRequest;
  return proto.qdb.WebConfigSetFieldSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigSetFieldSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigSetFieldSchemaRequest}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseFieldSchema;
      reader.readMessage(value,proto.qdb.DatabaseFieldSchema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigSetFieldSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigSetFieldSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetFieldSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qdb.DatabaseFieldSchema.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigSetFieldSchemaRequest} returns this
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatabaseFieldSchema schema = 2;
 * @return {?proto.qdb.DatabaseFieldSchema}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.getSchema = function() {
  return /** @type{?proto.qdb.DatabaseFieldSchema} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseFieldSchema, 2));
};


/**
 * @param {?proto.qdb.DatabaseFieldSchema|undefined} value
 * @return {!proto.qdb.WebConfigSetFieldSchemaRequest} returns this
*/
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebConfigSetFieldSchemaRequest} returns this
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebConfigSetFieldSchemaRequest.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigSetFieldSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigSetFieldSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigSetFieldSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetFieldSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigSetFieldSchemaResponse}
 */
proto.qdb.WebConfigSetFieldSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigSetFieldSchemaResponse;
  return proto.qdb.WebConfigSetFieldSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigSetFieldSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigSetFieldSchemaResponse}
 */
proto.qdb.WebConfigSetFieldSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigSetFieldSchemaResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigSetFieldSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigSetFieldSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigSetFieldSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetFieldSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigSetFieldSchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigSetFieldSchemaResponse.StatusEnum}
 */
proto.qdb.WebConfigSetFieldSchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigSetFieldSchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigSetFieldSchemaResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigSetFieldSchemaResponse} returns this
 */
proto.qdb.WebConfigSetFieldSchemaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetEntitySchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetEntitySchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetEntitySchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntitySchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetEntitySchemaRequest}
 */
proto.qdb.WebConfigGetEntitySchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetEntitySchemaRequest;
  return proto.qdb.WebConfigGetEntitySchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetEntitySchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetEntitySchemaRequest}
 */
proto.qdb.WebConfigGetEntitySchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetEntitySchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetEntitySchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetEntitySchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntitySchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.qdb.WebConfigGetEntitySchemaRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigGetEntitySchemaRequest} returns this
 */
proto.qdb.WebConfigGetEntitySchemaRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetEntitySchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetEntitySchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntitySchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    schema: (f = msg.getSchema()) && proto.qdb.DatabaseEntitySchema.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetEntitySchemaResponse}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetEntitySchemaResponse;
  return proto.qdb.WebConfigGetEntitySchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetEntitySchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetEntitySchemaResponse}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigGetEntitySchemaResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseEntitySchema;
      reader.readMessage(value,proto.qdb.DatabaseEntitySchema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetEntitySchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetEntitySchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetEntitySchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qdb.DatabaseEntitySchema.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigGetEntitySchemaResponse.StatusEnum}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigGetEntitySchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigGetEntitySchemaResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigGetEntitySchemaResponse} returns this
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseEntitySchema schema = 2;
 * @return {?proto.qdb.DatabaseEntitySchema}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.getSchema = function() {
  return /** @type{?proto.qdb.DatabaseEntitySchema} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseEntitySchema, 2));
};


/**
 * @param {?proto.qdb.DatabaseEntitySchema|undefined} value
 * @return {!proto.qdb.WebConfigGetEntitySchemaResponse} returns this
*/
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebConfigGetEntitySchemaResponse} returns this
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebConfigGetEntitySchemaResponse.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebConfigSetEntitySchemaRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigSetEntitySchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigSetEntitySchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetEntitySchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigSetEntitySchemaRequest}
 */
proto.qdb.WebConfigSetEntitySchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigSetEntitySchemaRequest;
  return proto.qdb.WebConfigSetEntitySchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigSetEntitySchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigSetEntitySchemaRequest}
 */
proto.qdb.WebConfigSetEntitySchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigSetEntitySchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigSetEntitySchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetEntitySchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string fields = 2;
 * @return {!Array<string>}
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qdb.WebConfigSetEntitySchemaRequest.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigSetEntitySchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigSetEntitySchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigSetEntitySchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetEntitySchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigSetEntitySchemaResponse}
 */
proto.qdb.WebConfigSetEntitySchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigSetEntitySchemaResponse;
  return proto.qdb.WebConfigSetEntitySchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigSetEntitySchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigSetEntitySchemaResponse}
 */
proto.qdb.WebConfigSetEntitySchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigSetEntitySchemaResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigSetEntitySchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigSetEntitySchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigSetEntitySchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigSetEntitySchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigSetEntitySchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigSetEntitySchemaResponse.StatusEnum}
 */
proto.qdb.WebConfigSetEntitySchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigSetEntitySchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigSetEntitySchemaResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigSetEntitySchemaResponse} returns this
 */
proto.qdb.WebConfigSetEntitySchemaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigCreateSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigCreateSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigCreateSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigCreateSnapshotRequest}
 */
proto.qdb.WebConfigCreateSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigCreateSnapshotRequest;
  return proto.qdb.WebConfigCreateSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigCreateSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigCreateSnapshotRequest}
 */
proto.qdb.WebConfigCreateSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigCreateSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigCreateSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigCreateSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigCreateSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigCreateSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    snapshot: (f = msg.getSnapshot()) && proto.qdb.DatabaseSnapshot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigCreateSnapshotResponse}
 */
proto.qdb.WebConfigCreateSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigCreateSnapshotResponse;
  return proto.qdb.WebConfigCreateSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigCreateSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigCreateSnapshotResponse}
 */
proto.qdb.WebConfigCreateSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigCreateSnapshotResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseSnapshot;
      reader.readMessage(value,proto.qdb.DatabaseSnapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigCreateSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigCreateSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigCreateSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qdb.DatabaseSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigCreateSnapshotResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigCreateSnapshotResponse.StatusEnum}
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigCreateSnapshotResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigCreateSnapshotResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigCreateSnapshotResponse} returns this
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseSnapshot snapshot = 2;
 * @return {?proto.qdb.DatabaseSnapshot}
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.getSnapshot = function() {
  return /** @type{?proto.qdb.DatabaseSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseSnapshot, 2));
};


/**
 * @param {?proto.qdb.DatabaseSnapshot|undefined} value
 * @return {!proto.qdb.WebConfigCreateSnapshotResponse} returns this
*/
proto.qdb.WebConfigCreateSnapshotResponse.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebConfigCreateSnapshotResponse} returns this
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebConfigCreateSnapshotResponse.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigRestoreSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigRestoreSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigRestoreSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigRestoreSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.qdb.DatabaseSnapshot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigRestoreSnapshotRequest}
 */
proto.qdb.WebConfigRestoreSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigRestoreSnapshotRequest;
  return proto.qdb.WebConfigRestoreSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigRestoreSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigRestoreSnapshotRequest}
 */
proto.qdb.WebConfigRestoreSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.DatabaseSnapshot;
      reader.readMessage(value,proto.qdb.DatabaseSnapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigRestoreSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigRestoreSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigRestoreSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigRestoreSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qdb.DatabaseSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * optional DatabaseSnapshot snapshot = 1;
 * @return {?proto.qdb.DatabaseSnapshot}
 */
proto.qdb.WebConfigRestoreSnapshotRequest.prototype.getSnapshot = function() {
  return /** @type{?proto.qdb.DatabaseSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseSnapshot, 1));
};


/**
 * @param {?proto.qdb.DatabaseSnapshot|undefined} value
 * @return {!proto.qdb.WebConfigRestoreSnapshotRequest} returns this
*/
proto.qdb.WebConfigRestoreSnapshotRequest.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebConfigRestoreSnapshotRequest} returns this
 */
proto.qdb.WebConfigRestoreSnapshotRequest.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebConfigRestoreSnapshotRequest.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigRestoreSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigRestoreSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigRestoreSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigRestoreSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigRestoreSnapshotResponse}
 */
proto.qdb.WebConfigRestoreSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigRestoreSnapshotResponse;
  return proto.qdb.WebConfigRestoreSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigRestoreSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigRestoreSnapshotResponse}
 */
proto.qdb.WebConfigRestoreSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebConfigRestoreSnapshotResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigRestoreSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigRestoreSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigRestoreSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigRestoreSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebConfigRestoreSnapshotResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebConfigRestoreSnapshotResponse.StatusEnum}
 */
proto.qdb.WebConfigRestoreSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebConfigRestoreSnapshotResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebConfigRestoreSnapshotResponse.StatusEnum} value
 * @return {!proto.qdb.WebConfigRestoreSnapshotResponse} returns this
 */
proto.qdb.WebConfigRestoreSnapshotResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetRootRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetRootRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetRootRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetRootRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetRootRequest}
 */
proto.qdb.WebConfigGetRootRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetRootRequest;
  return proto.qdb.WebConfigGetRootRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetRootRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetRootRequest}
 */
proto.qdb.WebConfigGetRootRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetRootRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetRootRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetRootRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetRootRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetRootResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetRootResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetRootResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetRootResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetRootResponse}
 */
proto.qdb.WebConfigGetRootResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetRootResponse;
  return proto.qdb.WebConfigGetRootResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetRootResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetRootResponse}
 */
proto.qdb.WebConfigGetRootResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetRootResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetRootResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetRootResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetRootResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rootId = 1;
 * @return {string}
 */
proto.qdb.WebConfigGetRootResponse.prototype.getRootid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebConfigGetRootResponse} returns this
 */
proto.qdb.WebConfigGetRootResponse.prototype.setRootid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetAllFieldsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetAllFieldsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetAllFieldsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetAllFieldsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetAllFieldsRequest}
 */
proto.qdb.WebConfigGetAllFieldsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetAllFieldsRequest;
  return proto.qdb.WebConfigGetAllFieldsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetAllFieldsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetAllFieldsRequest}
 */
proto.qdb.WebConfigGetAllFieldsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetAllFieldsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetAllFieldsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetAllFieldsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetAllFieldsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebConfigGetAllFieldsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebConfigGetAllFieldsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebConfigGetAllFieldsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebConfigGetAllFieldsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetAllFieldsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebConfigGetAllFieldsResponse}
 */
proto.qdb.WebConfigGetAllFieldsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebConfigGetAllFieldsResponse;
  return proto.qdb.WebConfigGetAllFieldsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebConfigGetAllFieldsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebConfigGetAllFieldsResponse}
 */
proto.qdb.WebConfigGetAllFieldsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebConfigGetAllFieldsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebConfigGetAllFieldsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebConfigGetAllFieldsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebConfigGetAllFieldsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string fields = 1;
 * @return {!Array<string>}
 */
proto.qdb.WebConfigGetAllFieldsResponse.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.WebConfigGetAllFieldsResponse} returns this
 */
proto.qdb.WebConfigGetAllFieldsResponse.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.WebConfigGetAllFieldsResponse} returns this
 */
proto.qdb.WebConfigGetAllFieldsResponse.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebConfigGetAllFieldsResponse} returns this
 */
proto.qdb.WebConfigGetAllFieldsResponse.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeDatabaseRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesttype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.qdb.DatabaseRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeDatabaseRequest}
 */
proto.qdb.WebRuntimeDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeDatabaseRequest;
  return proto.qdb.WebRuntimeDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeDatabaseRequest}
 */
proto.qdb.WebRuntimeDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebRuntimeDatabaseRequest.RequestTypeEnum} */ (reader.readEnum());
      msg.setRequesttype(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseRequest;
      reader.readMessage(value,proto.qdb.DatabaseRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesttype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.qdb.DatabaseRequest.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebRuntimeDatabaseRequest.RequestTypeEnum = {
  UNSPECIFIED: 0,
  READ: 1,
  WRITE: 2
};

/**
 * optional RequestTypeEnum requestType = 1;
 * @return {!proto.qdb.WebRuntimeDatabaseRequest.RequestTypeEnum}
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.getRequesttype = function() {
  return /** @type {!proto.qdb.WebRuntimeDatabaseRequest.RequestTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebRuntimeDatabaseRequest.RequestTypeEnum} value
 * @return {!proto.qdb.WebRuntimeDatabaseRequest} returns this
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.setRequesttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated DatabaseRequest requests = 2;
 * @return {!Array<!proto.qdb.DatabaseRequest>}
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseRequest, 2));
};


/**
 * @param {!Array<!proto.qdb.DatabaseRequest>} value
 * @return {!proto.qdb.WebRuntimeDatabaseRequest} returns this
*/
proto.qdb.WebRuntimeDatabaseRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qdb.DatabaseRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseRequest}
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qdb.DatabaseRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeDatabaseRequest} returns this
 */
proto.qdb.WebRuntimeDatabaseRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeDatabaseResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeDatabaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeDatabaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeDatabaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeDatabaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseList: jspb.Message.toObjectList(msg.getResponseList(),
    proto.qdb.DatabaseRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeDatabaseResponse}
 */
proto.qdb.WebRuntimeDatabaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeDatabaseResponse;
  return proto.qdb.WebRuntimeDatabaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeDatabaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeDatabaseResponse}
 */
proto.qdb.WebRuntimeDatabaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.qdb.DatabaseRequest;
      reader.readMessage(value,proto.qdb.DatabaseRequest.deserializeBinaryFromReader);
      msg.addResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeDatabaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeDatabaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeDatabaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeDatabaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.qdb.DatabaseRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseRequest response = 2;
 * @return {!Array<!proto.qdb.DatabaseRequest>}
 */
proto.qdb.WebRuntimeDatabaseResponse.prototype.getResponseList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseRequest, 2));
};


/**
 * @param {!Array<!proto.qdb.DatabaseRequest>} value
 * @return {!proto.qdb.WebRuntimeDatabaseResponse} returns this
*/
proto.qdb.WebRuntimeDatabaseResponse.prototype.setResponseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qdb.DatabaseRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseRequest}
 */
proto.qdb.WebRuntimeDatabaseResponse.prototype.addResponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qdb.DatabaseRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeDatabaseResponse} returns this
 */
proto.qdb.WebRuntimeDatabaseResponse.prototype.clearResponseList = function() {
  return this.setResponseList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeRegisterNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeRegisterNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.qdb.DatabaseNotificationConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeRegisterNotificationRequest}
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeRegisterNotificationRequest;
  return proto.qdb.WebRuntimeRegisterNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeRegisterNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeRegisterNotificationRequest}
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.DatabaseNotificationConfig;
      reader.readMessage(value,proto.qdb.DatabaseNotificationConfig.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeRegisterNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeRegisterNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qdb.DatabaseNotificationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseNotificationConfig requests = 1;
 * @return {!Array<!proto.qdb.DatabaseNotificationConfig>}
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseNotificationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseNotificationConfig, 1));
};


/**
 * @param {!Array<!proto.qdb.DatabaseNotificationConfig>} value
 * @return {!proto.qdb.WebRuntimeRegisterNotificationRequest} returns this
*/
proto.qdb.WebRuntimeRegisterNotificationRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qdb.DatabaseNotificationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseNotificationConfig}
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qdb.DatabaseNotificationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeRegisterNotificationRequest} returns this
 */
proto.qdb.WebRuntimeRegisterNotificationRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeRegisterNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeRegisterNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeRegisterNotificationResponse}
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeRegisterNotificationResponse;
  return proto.qdb.WebRuntimeRegisterNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeRegisterNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeRegisterNotificationResponse}
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeRegisterNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeRegisterNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tokens = 1;
 * @return {!Array<string>}
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.prototype.getTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.WebRuntimeRegisterNotificationResponse} returns this
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.prototype.setTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.WebRuntimeRegisterNotificationResponse} returns this
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.prototype.addTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeRegisterNotificationResponse} returns this
 */
proto.qdb.WebRuntimeRegisterNotificationResponse.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeGetNotificationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeGetNotificationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeGetNotificationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetNotificationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeGetNotificationsRequest}
 */
proto.qdb.WebRuntimeGetNotificationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeGetNotificationsRequest;
  return proto.qdb.WebRuntimeGetNotificationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeGetNotificationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeGetNotificationsRequest}
 */
proto.qdb.WebRuntimeGetNotificationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeGetNotificationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeGetNotificationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeGetNotificationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetNotificationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeGetNotificationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeGetNotificationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeGetNotificationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeGetNotificationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetNotificationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    notificationsList: jspb.Message.toObjectList(msg.getNotificationsList(),
    proto.qdb.DatabaseNotification.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeGetNotificationsResponse}
 */
proto.qdb.WebRuntimeGetNotificationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeGetNotificationsResponse;
  return proto.qdb.WebRuntimeGetNotificationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeGetNotificationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeGetNotificationsResponse}
 */
proto.qdb.WebRuntimeGetNotificationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.DatabaseNotification;
      reader.readMessage(value,proto.qdb.DatabaseNotification.deserializeBinaryFromReader);
      msg.addNotifications(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeGetNotificationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeGetNotificationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeGetNotificationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetNotificationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qdb.DatabaseNotification.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseNotification notifications = 1;
 * @return {!Array<!proto.qdb.DatabaseNotification>}
 */
proto.qdb.WebRuntimeGetNotificationsResponse.prototype.getNotificationsList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseNotification>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseNotification, 1));
};


/**
 * @param {!Array<!proto.qdb.DatabaseNotification>} value
 * @return {!proto.qdb.WebRuntimeGetNotificationsResponse} returns this
*/
proto.qdb.WebRuntimeGetNotificationsResponse.prototype.setNotificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qdb.DatabaseNotification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseNotification}
 */
proto.qdb.WebRuntimeGetNotificationsResponse.prototype.addNotifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qdb.DatabaseNotification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeGetNotificationsResponse} returns this
 */
proto.qdb.WebRuntimeGetNotificationsResponse.prototype.clearNotificationsList = function() {
  return this.setNotificationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeUnregisterNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationRequest}
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeUnregisterNotificationRequest;
  return proto.qdb.WebRuntimeUnregisterNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationRequest}
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeUnregisterNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tokens = 1;
 * @return {!Array<string>}
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.prototype.getTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationRequest} returns this
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.prototype.setTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationRequest} returns this
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.prototype.addTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationRequest} returns this
 */
proto.qdb.WebRuntimeUnregisterNotificationRequest.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeUnregisterNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationResponse}
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeUnregisterNotificationResponse;
  return proto.qdb.WebRuntimeUnregisterNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationResponse}
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.WebRuntimeUnregisterNotificationResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeUnregisterNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationResponse.StatusEnum}
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.prototype.getStatus = function() {
  return /** @type {!proto.qdb.WebRuntimeUnregisterNotificationResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.WebRuntimeUnregisterNotificationResponse.StatusEnum} value
 * @return {!proto.qdb.WebRuntimeUnregisterNotificationResponse} returns this
 */
proto.qdb.WebRuntimeUnregisterNotificationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest;
  return proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.qdb.ConnectionState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse;
  return proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.ConnectionState;
      reader.readMessage(value,proto.qdb.ConnectionState.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qdb.ConnectionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConnectionState status = 1;
 * @return {?proto.qdb.ConnectionState}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.qdb.ConnectionState} */ (
    jspb.Message.getWrapperField(this, proto.qdb.ConnectionState, 1));
};


/**
 * @param {?proto.qdb.ConnectionState|undefined} value
 * @return {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse} returns this
*/
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse} returns this
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeGetEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeGetEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeGetEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitytype: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeGetEntitiesRequest}
 */
proto.qdb.WebRuntimeGetEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeGetEntitiesRequest;
  return proto.qdb.WebRuntimeGetEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeGetEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeGetEntitiesRequest}
 */
proto.qdb.WebRuntimeGetEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntitytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeGetEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeGetEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeGetEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitytype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string entityType = 1;
 * @return {string}
 */
proto.qdb.WebRuntimeGetEntitiesRequest.prototype.getEntitytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.WebRuntimeGetEntitiesRequest} returns this
 */
proto.qdb.WebRuntimeGetEntitiesRequest.prototype.setEntitytype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.WebRuntimeGetEntitiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.WebRuntimeGetEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.WebRuntimeGetEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.WebRuntimeGetEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.qdb.DatabaseEntity.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.WebRuntimeGetEntitiesResponse}
 */
proto.qdb.WebRuntimeGetEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.WebRuntimeGetEntitiesResponse;
  return proto.qdb.WebRuntimeGetEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.WebRuntimeGetEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.WebRuntimeGetEntitiesResponse}
 */
proto.qdb.WebRuntimeGetEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.DatabaseEntity;
      reader.readMessage(value,proto.qdb.DatabaseEntity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.WebRuntimeGetEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.WebRuntimeGetEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.WebRuntimeGetEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.WebRuntimeGetEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qdb.DatabaseEntity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseEntity entities = 1;
 * @return {!Array<!proto.qdb.DatabaseEntity>}
 */
proto.qdb.WebRuntimeGetEntitiesResponse.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseEntity, 1));
};


/**
 * @param {!Array<!proto.qdb.DatabaseEntity>} value
 * @return {!proto.qdb.WebRuntimeGetEntitiesResponse} returns this
*/
proto.qdb.WebRuntimeGetEntitiesResponse.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qdb.DatabaseEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseEntity}
 */
proto.qdb.WebRuntimeGetEntitiesResponse.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qdb.DatabaseEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.WebRuntimeGetEntitiesResponse} returns this
 */
proto.qdb.WebRuntimeGetEntitiesResponse.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.DatabaseEntity.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parent: (f = msg.getParent()) && proto.qdb.EntityReference.toObject(includeInstance, f),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.qdb.EntityReference.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseEntity}
 */
proto.qdb.DatabaseEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseEntity;
  return proto.qdb.DatabaseEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseEntity}
 */
proto.qdb.DatabaseEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.qdb.EntityReference;
      reader.readMessage(value,proto.qdb.EntityReference.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    case 5:
      var value = new proto.qdb.EntityReference;
      reader.readMessage(value,proto.qdb.EntityReference.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.qdb.EntityReference.serializeBinaryToWriter
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.qdb.EntityReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.DatabaseEntity.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseEntity} returns this
 */
proto.qdb.DatabaseEntity.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.qdb.DatabaseEntity.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseEntity} returns this
 */
proto.qdb.DatabaseEntity.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.qdb.DatabaseEntity.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseEntity} returns this
 */
proto.qdb.DatabaseEntity.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EntityReference parent = 4;
 * @return {?proto.qdb.EntityReference}
 */
proto.qdb.DatabaseEntity.prototype.getParent = function() {
  return /** @type{?proto.qdb.EntityReference} */ (
    jspb.Message.getWrapperField(this, proto.qdb.EntityReference, 4));
};


/**
 * @param {?proto.qdb.EntityReference|undefined} value
 * @return {!proto.qdb.DatabaseEntity} returns this
*/
proto.qdb.DatabaseEntity.prototype.setParent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseEntity} returns this
 */
proto.qdb.DatabaseEntity.prototype.clearParent = function() {
  return this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseEntity.prototype.hasParent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated EntityReference children = 5;
 * @return {!Array<!proto.qdb.EntityReference>}
 */
proto.qdb.DatabaseEntity.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.qdb.EntityReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.EntityReference, 5));
};


/**
 * @param {!Array<!proto.qdb.EntityReference>} value
 * @return {!proto.qdb.DatabaseEntity} returns this
*/
proto.qdb.DatabaseEntity.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.qdb.EntityReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.EntityReference}
 */
proto.qdb.DatabaseEntity.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.qdb.EntityReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseEntity} returns this
 */
proto.qdb.DatabaseEntity.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseField.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseField.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: (f = msg.getValue()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    writetime: (f = msg.getWritetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    writerid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseField}
 */
proto.qdb.DatabaseField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseField;
  return proto.qdb.DatabaseField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseField}
 */
proto.qdb.DatabaseField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setWritetime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWriterid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getWritetime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWriterid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.DatabaseField.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseField} returns this
 */
proto.qdb.DatabaseField.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.qdb.DatabaseField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseField} returns this
 */
proto.qdb.DatabaseField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any value = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.qdb.DatabaseField.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.qdb.DatabaseField} returns this
*/
proto.qdb.DatabaseField.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseField} returns this
 */
proto.qdb.DatabaseField.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseField.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp writeTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qdb.DatabaseField.prototype.getWritetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qdb.DatabaseField} returns this
*/
proto.qdb.DatabaseField.prototype.setWritetime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseField} returns this
 */
proto.qdb.DatabaseField.prototype.clearWritetime = function() {
  return this.setWritetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseField.prototype.hasWritetime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string writerId = 5;
 * @return {string}
 */
proto.qdb.DatabaseField.prototype.getWriterid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseField} returns this
 */
proto.qdb.DatabaseField.prototype.setWriterid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.DatabaseNotificationConfig.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    field: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contextfieldsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    notifyonchange: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    serviceid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseNotificationConfig}
 */
proto.qdb.DatabaseNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseNotificationConfig;
  return proto.qdb.DatabaseNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseNotificationConfig}
 */
proto.qdb.DatabaseNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addContextfields(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNotifyonchange(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseNotificationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContextfieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getNotifyonchange();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.DatabaseNotificationConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.qdb.DatabaseNotificationConfig.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field = 3;
 * @return {string}
 */
proto.qdb.DatabaseNotificationConfig.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string contextFields = 4;
 * @return {!Array<string>}
 */
proto.qdb.DatabaseNotificationConfig.prototype.getContextfieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.setContextfieldsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.addContextfields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.clearContextfieldsList = function() {
  return this.setContextfieldsList([]);
};


/**
 * optional bool notifyOnChange = 5;
 * @return {boolean}
 */
proto.qdb.DatabaseNotificationConfig.prototype.getNotifyonchange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.setNotifyonchange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string serviceId = 6;
 * @return {string}
 */
proto.qdb.DatabaseNotificationConfig.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseNotificationConfig} returns this
 */
proto.qdb.DatabaseNotificationConfig.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.DatabaseNotification.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    current: (f = msg.getCurrent()) && proto.qdb.DatabaseField.toObject(includeInstance, f),
    previous: (f = msg.getPrevious()) && proto.qdb.DatabaseField.toObject(includeInstance, f),
    contextList: jspb.Message.toObjectList(msg.getContextList(),
    proto.qdb.DatabaseField.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseNotification}
 */
proto.qdb.DatabaseNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseNotification;
  return proto.qdb.DatabaseNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseNotification}
 */
proto.qdb.DatabaseNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseField;
      reader.readMessage(value,proto.qdb.DatabaseField.deserializeBinaryFromReader);
      msg.setCurrent(value);
      break;
    case 3:
      var value = new proto.qdb.DatabaseField;
      reader.readMessage(value,proto.qdb.DatabaseField.deserializeBinaryFromReader);
      msg.setPrevious(value);
      break;
    case 4:
      var value = new proto.qdb.DatabaseField;
      reader.readMessage(value,proto.qdb.DatabaseField.deserializeBinaryFromReader);
      msg.addContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qdb.DatabaseField.serializeBinaryToWriter
    );
  }
  f = message.getPrevious();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.qdb.DatabaseField.serializeBinaryToWriter
    );
  }
  f = message.getContextList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.qdb.DatabaseField.serializeBinaryToWriter
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.qdb.DatabaseNotification.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseNotification} returns this
 */
proto.qdb.DatabaseNotification.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatabaseField current = 2;
 * @return {?proto.qdb.DatabaseField}
 */
proto.qdb.DatabaseNotification.prototype.getCurrent = function() {
  return /** @type{?proto.qdb.DatabaseField} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseField, 2));
};


/**
 * @param {?proto.qdb.DatabaseField|undefined} value
 * @return {!proto.qdb.DatabaseNotification} returns this
*/
proto.qdb.DatabaseNotification.prototype.setCurrent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseNotification} returns this
 */
proto.qdb.DatabaseNotification.prototype.clearCurrent = function() {
  return this.setCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseNotification.prototype.hasCurrent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DatabaseField previous = 3;
 * @return {?proto.qdb.DatabaseField}
 */
proto.qdb.DatabaseNotification.prototype.getPrevious = function() {
  return /** @type{?proto.qdb.DatabaseField} */ (
    jspb.Message.getWrapperField(this, proto.qdb.DatabaseField, 3));
};


/**
 * @param {?proto.qdb.DatabaseField|undefined} value
 * @return {!proto.qdb.DatabaseNotification} returns this
*/
proto.qdb.DatabaseNotification.prototype.setPrevious = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseNotification} returns this
 */
proto.qdb.DatabaseNotification.prototype.clearPrevious = function() {
  return this.setPrevious(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseNotification.prototype.hasPrevious = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated DatabaseField context = 4;
 * @return {!Array<!proto.qdb.DatabaseField>}
 */
proto.qdb.DatabaseNotification.prototype.getContextList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseField, 4));
};


/**
 * @param {!Array<!proto.qdb.DatabaseField>} value
 * @return {!proto.qdb.DatabaseNotification} returns this
*/
proto.qdb.DatabaseNotification.prototype.setContextList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.qdb.DatabaseField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseField}
 */
proto.qdb.DatabaseNotification.prototype.addContext = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.qdb.DatabaseField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseNotification} returns this
 */
proto.qdb.DatabaseNotification.prototype.clearContextList = function() {
  return this.setContextList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.DatabaseEntitySchema.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseEntitySchema.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseEntitySchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseEntitySchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseEntitySchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseEntitySchema}
 */
proto.qdb.DatabaseEntitySchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseEntitySchema;
  return proto.qdb.DatabaseEntitySchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseEntitySchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseEntitySchema}
 */
proto.qdb.DatabaseEntitySchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseEntitySchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseEntitySchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseEntitySchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseEntitySchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.qdb.DatabaseEntitySchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseEntitySchema} returns this
 */
proto.qdb.DatabaseEntitySchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string fields = 2;
 * @return {!Array<string>}
 */
proto.qdb.DatabaseEntitySchema.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qdb.DatabaseEntitySchema} returns this
 */
proto.qdb.DatabaseEntitySchema.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseEntitySchema} returns this
 */
proto.qdb.DatabaseEntitySchema.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseEntitySchema} returns this
 */
proto.qdb.DatabaseEntitySchema.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseFieldSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseFieldSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseFieldSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseFieldSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseFieldSchema}
 */
proto.qdb.DatabaseFieldSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseFieldSchema;
  return proto.qdb.DatabaseFieldSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseFieldSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseFieldSchema}
 */
proto.qdb.DatabaseFieldSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseFieldSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseFieldSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseFieldSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseFieldSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.qdb.DatabaseFieldSchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseFieldSchema} returns this
 */
proto.qdb.DatabaseFieldSchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.qdb.DatabaseFieldSchema.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseFieldSchema} returns this
 */
proto.qdb.DatabaseFieldSchema.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: (f = msg.getValue()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    writetime: (f = msg.getWritetime()) && proto.qdb.Timestamp.toObject(includeInstance, f),
    writerid: (f = msg.getWriterid()) && proto.qdb.String.toObject(includeInstance, f),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseRequest}
 */
proto.qdb.DatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseRequest;
  return proto.qdb.DatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseRequest}
 */
proto.qdb.DatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 4:
      var value = new proto.qdb.Timestamp;
      reader.readMessage(value,proto.qdb.Timestamp.deserializeBinaryFromReader);
      msg.setWritetime(value);
      break;
    case 5:
      var value = new proto.qdb.String;
      reader.readMessage(value,proto.qdb.String.deserializeBinaryFromReader);
      msg.setWriterid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getWritetime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.qdb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWriterid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.qdb.String.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qdb.DatabaseRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseRequest} returns this
 */
proto.qdb.DatabaseRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.qdb.DatabaseRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.DatabaseRequest} returns this
 */
proto.qdb.DatabaseRequest.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any value = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.qdb.DatabaseRequest.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.qdb.DatabaseRequest} returns this
*/
proto.qdb.DatabaseRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseRequest} returns this
 */
proto.qdb.DatabaseRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Timestamp writeTime = 4;
 * @return {?proto.qdb.Timestamp}
 */
proto.qdb.DatabaseRequest.prototype.getWritetime = function() {
  return /** @type{?proto.qdb.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.qdb.Timestamp, 4));
};


/**
 * @param {?proto.qdb.Timestamp|undefined} value
 * @return {!proto.qdb.DatabaseRequest} returns this
*/
proto.qdb.DatabaseRequest.prototype.setWritetime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseRequest} returns this
 */
proto.qdb.DatabaseRequest.prototype.clearWritetime = function() {
  return this.setWritetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseRequest.prototype.hasWritetime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional String writerId = 5;
 * @return {?proto.qdb.String}
 */
proto.qdb.DatabaseRequest.prototype.getWriterid = function() {
  return /** @type{?proto.qdb.String} */ (
    jspb.Message.getWrapperField(this, proto.qdb.String, 5));
};


/**
 * @param {?proto.qdb.String|undefined} value
 * @return {!proto.qdb.DatabaseRequest} returns this
*/
proto.qdb.DatabaseRequest.prototype.setWriterid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.DatabaseRequest} returns this
 */
proto.qdb.DatabaseRequest.prototype.clearWriterid = function() {
  return this.setWriterid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.DatabaseRequest.prototype.hasWriterid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool success = 6;
 * @return {boolean}
 */
proto.qdb.DatabaseRequest.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.qdb.DatabaseRequest} returns this
 */
proto.qdb.DatabaseRequest.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qdb.DatabaseSnapshot.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.DatabaseSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.DatabaseSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.DatabaseSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.qdb.DatabaseEntity.toObject, includeInstance),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.qdb.DatabaseField.toObject, includeInstance),
    entityschemasList: jspb.Message.toObjectList(msg.getEntityschemasList(),
    proto.qdb.DatabaseEntitySchema.toObject, includeInstance),
    fieldschemasList: jspb.Message.toObjectList(msg.getFieldschemasList(),
    proto.qdb.DatabaseFieldSchema.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.DatabaseSnapshot}
 */
proto.qdb.DatabaseSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.DatabaseSnapshot;
  return proto.qdb.DatabaseSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.DatabaseSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.DatabaseSnapshot}
 */
proto.qdb.DatabaseSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qdb.DatabaseEntity;
      reader.readMessage(value,proto.qdb.DatabaseEntity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 2:
      var value = new proto.qdb.DatabaseField;
      reader.readMessage(value,proto.qdb.DatabaseField.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 3:
      var value = new proto.qdb.DatabaseEntitySchema;
      reader.readMessage(value,proto.qdb.DatabaseEntitySchema.deserializeBinaryFromReader);
      msg.addEntityschemas(value);
      break;
    case 4:
      var value = new proto.qdb.DatabaseFieldSchema;
      reader.readMessage(value,proto.qdb.DatabaseFieldSchema.deserializeBinaryFromReader);
      msg.addFieldschemas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.DatabaseSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.DatabaseSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.DatabaseSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.DatabaseSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qdb.DatabaseEntity.serializeBinaryToWriter
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.qdb.DatabaseField.serializeBinaryToWriter
    );
  }
  f = message.getEntityschemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.qdb.DatabaseEntitySchema.serializeBinaryToWriter
    );
  }
  f = message.getFieldschemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.qdb.DatabaseFieldSchema.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseEntity entities = 1;
 * @return {!Array<!proto.qdb.DatabaseEntity>}
 */
proto.qdb.DatabaseSnapshot.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseEntity, 1));
};


/**
 * @param {!Array<!proto.qdb.DatabaseEntity>} value
 * @return {!proto.qdb.DatabaseSnapshot} returns this
*/
proto.qdb.DatabaseSnapshot.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qdb.DatabaseEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseEntity}
 */
proto.qdb.DatabaseSnapshot.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qdb.DatabaseEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseSnapshot} returns this
 */
proto.qdb.DatabaseSnapshot.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * repeated DatabaseField fields = 2;
 * @return {!Array<!proto.qdb.DatabaseField>}
 */
proto.qdb.DatabaseSnapshot.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseField, 2));
};


/**
 * @param {!Array<!proto.qdb.DatabaseField>} value
 * @return {!proto.qdb.DatabaseSnapshot} returns this
*/
proto.qdb.DatabaseSnapshot.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qdb.DatabaseField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseField}
 */
proto.qdb.DatabaseSnapshot.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qdb.DatabaseField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseSnapshot} returns this
 */
proto.qdb.DatabaseSnapshot.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * repeated DatabaseEntitySchema entitySchemas = 3;
 * @return {!Array<!proto.qdb.DatabaseEntitySchema>}
 */
proto.qdb.DatabaseSnapshot.prototype.getEntityschemasList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseEntitySchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseEntitySchema, 3));
};


/**
 * @param {!Array<!proto.qdb.DatabaseEntitySchema>} value
 * @return {!proto.qdb.DatabaseSnapshot} returns this
*/
proto.qdb.DatabaseSnapshot.prototype.setEntityschemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.qdb.DatabaseEntitySchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseEntitySchema}
 */
proto.qdb.DatabaseSnapshot.prototype.addEntityschemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.qdb.DatabaseEntitySchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseSnapshot} returns this
 */
proto.qdb.DatabaseSnapshot.prototype.clearEntityschemasList = function() {
  return this.setEntityschemasList([]);
};


/**
 * repeated DatabaseFieldSchema fieldSchemas = 4;
 * @return {!Array<!proto.qdb.DatabaseFieldSchema>}
 */
proto.qdb.DatabaseSnapshot.prototype.getFieldschemasList = function() {
  return /** @type{!Array<!proto.qdb.DatabaseFieldSchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qdb.DatabaseFieldSchema, 4));
};


/**
 * @param {!Array<!proto.qdb.DatabaseFieldSchema>} value
 * @return {!proto.qdb.DatabaseSnapshot} returns this
*/
proto.qdb.DatabaseSnapshot.prototype.setFieldschemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.qdb.DatabaseFieldSchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qdb.DatabaseFieldSchema}
 */
proto.qdb.DatabaseSnapshot.prototype.addFieldschemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.qdb.DatabaseFieldSchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qdb.DatabaseSnapshot} returns this
 */
proto.qdb.DatabaseSnapshot.prototype.clearFieldschemasList = function() {
  return this.setFieldschemasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.Int.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.Int}
 */
proto.qdb.Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.Int;
  return proto.qdb.Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.Int}
 */
proto.qdb.Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 raw = 1;
 * @return {number}
 */
proto.qdb.Int.prototype.getRaw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.qdb.Int} returns this
 */
proto.qdb.Int.prototype.setRaw = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.String.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.String.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.String} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.String.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.String}
 */
proto.qdb.String.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.String;
  return proto.qdb.String.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.String} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.String}
 */
proto.qdb.String.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.String.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.String.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.String} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.String.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string raw = 1;
 * @return {string}
 */
proto.qdb.String.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.String} returns this
 */
proto.qdb.String.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: (f = msg.getRaw()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.Timestamp}
 */
proto.qdb.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.Timestamp;
  return proto.qdb.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.Timestamp}
 */
proto.qdb.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp raw = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qdb.Timestamp.prototype.getRaw = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qdb.Timestamp} returns this
*/
proto.qdb.Timestamp.prototype.setRaw = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.Timestamp} returns this
 */
proto.qdb.Timestamp.prototype.clearRaw = function() {
  return this.setRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.Timestamp.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.Float.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.Float.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.Float} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Float.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.Float}
 */
proto.qdb.Float.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.Float;
  return proto.qdb.Float.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.Float} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.Float}
 */
proto.qdb.Float.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.Float.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.Float.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.Float} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Float.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double raw = 1;
 * @return {number}
 */
proto.qdb.Float.prototype.getRaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.qdb.Float} returns this
 */
proto.qdb.Float.prototype.setRaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.Bool.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.Bool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.Bool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Bool.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.Bool}
 */
proto.qdb.Bool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.Bool;
  return proto.qdb.Bool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.Bool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.Bool}
 */
proto.qdb.Bool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.Bool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.Bool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.Bool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.Bool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool raw = 1;
 * @return {boolean}
 */
proto.qdb.Bool.prototype.getRaw = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.qdb.Bool} returns this
 */
proto.qdb.Bool.prototype.setRaw = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.EntityReference.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.EntityReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.EntityReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.EntityReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.EntityReference}
 */
proto.qdb.EntityReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.EntityReference;
  return proto.qdb.EntityReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.EntityReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.EntityReference}
 */
proto.qdb.EntityReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.EntityReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.EntityReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.EntityReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.EntityReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string raw = 1;
 * @return {string}
 */
proto.qdb.EntityReference.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.EntityReference} returns this
 */
proto.qdb.EntityReference.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.BinaryFile.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.BinaryFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.BinaryFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.BinaryFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.BinaryFile}
 */
proto.qdb.BinaryFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.BinaryFile;
  return proto.qdb.BinaryFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.BinaryFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.BinaryFile}
 */
proto.qdb.BinaryFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.BinaryFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.BinaryFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.BinaryFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.BinaryFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string raw = 1;
 * @return {string}
 */
proto.qdb.BinaryFile.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.BinaryFile} returns this
 */
proto.qdb.BinaryFile.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.LogMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.LogMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.LogMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.LogMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: jspb.Message.getFieldWithDefault(msg, 1, ""),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.LogMessage}
 */
proto.qdb.LogMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.LogMessage;
  return proto.qdb.LogMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.LogMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.LogMessage}
 */
proto.qdb.LogMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplication(value);
      break;
    case 2:
      var value = /** @type {!proto.qdb.LogMessage.LogLevelEnum} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.LogMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.LogMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.LogMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.LogMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplication();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.LogMessage.LogLevelEnum = {
  UNSPECIFIED: 0,
  TRACE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5,
  PANIC: 6
};

/**
 * optional string application = 1;
 * @return {string}
 */
proto.qdb.LogMessage.prototype.getApplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.LogMessage} returns this
 */
proto.qdb.LogMessage.prototype.setApplication = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogLevelEnum level = 2;
 * @return {!proto.qdb.LogMessage.LogLevelEnum}
 */
proto.qdb.LogMessage.prototype.getLevel = function() {
  return /** @type {!proto.qdb.LogMessage.LogLevelEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.qdb.LogMessage.LogLevelEnum} value
 * @return {!proto.qdb.LogMessage} returns this
 */
proto.qdb.LogMessage.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.qdb.LogMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qdb.LogMessage} returns this
 */
proto.qdb.LogMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qdb.LogMessage.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qdb.LogMessage} returns this
*/
proto.qdb.LogMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qdb.LogMessage} returns this
 */
proto.qdb.LogMessage.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qdb.LogMessage.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.GarageDoorState.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.GarageDoorState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.GarageDoorState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.GarageDoorState.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.GarageDoorState}
 */
proto.qdb.GarageDoorState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.GarageDoorState;
  return proto.qdb.GarageDoorState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.GarageDoorState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.GarageDoorState}
 */
proto.qdb.GarageDoorState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.GarageDoorState.GarageDoorStateEnum} */ (reader.readEnum());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.GarageDoorState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.GarageDoorState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.GarageDoorState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.GarageDoorState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.GarageDoorState.GarageDoorStateEnum = {
  UNSPECIFIED: 0,
  OPENED: 1,
  CLOSED: 2
};

/**
 * optional GarageDoorStateEnum raw = 1;
 * @return {!proto.qdb.GarageDoorState.GarageDoorStateEnum}
 */
proto.qdb.GarageDoorState.prototype.getRaw = function() {
  return /** @type {!proto.qdb.GarageDoorState.GarageDoorStateEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.GarageDoorState.GarageDoorStateEnum} value
 * @return {!proto.qdb.GarageDoorState} returns this
 */
proto.qdb.GarageDoorState.prototype.setRaw = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qdb.ConnectionState.prototype.toObject = function(opt_includeInstance) {
  return proto.qdb.ConnectionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qdb.ConnectionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.ConnectionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qdb.ConnectionState}
 */
proto.qdb.ConnectionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qdb.ConnectionState;
  return proto.qdb.ConnectionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qdb.ConnectionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qdb.ConnectionState}
 */
proto.qdb.ConnectionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qdb.ConnectionState.ConnectionStateEnum} */ (reader.readEnum());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qdb.ConnectionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qdb.ConnectionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qdb.ConnectionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qdb.ConnectionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.qdb.ConnectionState.ConnectionStateEnum = {
  UNSPECIFIED: 0,
  CONNECTED: 1,
  DISCONNECTED: 2
};

/**
 * optional ConnectionStateEnum raw = 1;
 * @return {!proto.qdb.ConnectionState.ConnectionStateEnum}
 */
proto.qdb.ConnectionState.prototype.getRaw = function() {
  return /** @type {!proto.qdb.ConnectionState.ConnectionStateEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qdb.ConnectionState.ConnectionStateEnum} value
 * @return {!proto.qdb.ConnectionState} returns this
 */
proto.qdb.ConnectionState.prototype.setRaw = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


goog.object.extend(exports, proto.qdb);

},{"google-protobuf":1,"google-protobuf/google/protobuf/any_pb.js":2,"google-protobuf/google/protobuf/timestamp_pb.js":3}]},{},[4]);
