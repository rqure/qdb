(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.findIndex",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).i}},"es6","es3");
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"endsWith");a+="";void 0===c&&(c=b.length);c=Math.max(0,Math.min(c|0,b.length));for(var e=a.length;0<e&&0<c;)if(b[--c]!=a[--e])return!1;return 0>=e}},"es6","es3");$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";var e=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var g=0;g<f&&c<e;)if(b[c++]!=a[g++])return!1;return g>=f}},"es6","es3");
$jscomp.polyfill("String.prototype.repeat",function(a){return a?a:function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}},"es6","es3");var COMPILED=!0,goog=goog||{};goog.global=this||self;
goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};
goog.define=function(a,b){if(!COMPILED){var c=goog.global.CLOSURE_UNCOMPILED_DEFINES,d=goog.global.CLOSURE_DEFINES;c&&void 0===c.nodeType&&Object.prototype.hasOwnProperty.call(c,a)?b=c[a]:d&&void 0===d.nodeType&&Object.prototype.hasOwnProperty.call(d,a)&&(b=d[a])}return b};goog.FEATURESET_YEAR=2012;goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG;goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;
goog.provide=function(a){if(goog.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};
goog.getScriptNonce=function(a){if(a&&a!=goog.global)return goog.getScriptNonce_(a.document);null===goog.cspNonce_&&(goog.cspNonce_=goog.getScriptNonce_(goog.global.document));return goog.cspNonce_};goog.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/;goog.cspNonce_=null;goog.getScriptNonce_=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&goog.NONCE_PATTERN_.test(a)?a:""};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(a){if("string"!==typeof a||!a||-1==a.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInGoogModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};
goog.module.getInternal_=function(a){if(!COMPILED){if(a in goog.loadedModules_)return goog.loadedModules_[a].exports;if(!goog.implicitNamespaces_[a])return a=goog.getObjectByName(a),null!=a?a:null}return null};goog.ModuleType={ES6:"es6",GOOG:"goog"};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return goog.isInGoogModuleLoader_()||goog.isInEs6ModuleLoader_()};goog.isInGoogModuleLoader_=function(){return!!goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.GOOG};
goog.isInEs6ModuleLoader_=function(){if(goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.ES6)return!0;var a=goog.global.$jscomp;return a?"function"!=typeof a.getCurrentModulePath?!1:!!a.getCurrentModulePath():!1};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInGoogModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.declareModuleId=function(a){if(!COMPILED){if(!goog.isInEs6ModuleLoader_())throw Error("goog.declareModuleId may only be called from within an ES6 module");if(goog.moduleLoaderState_&&goog.moduleLoaderState_.moduleName)throw Error("goog.declareModuleId may only be called once per module.");if(a in goog.loadedModules_)throw Error('Module with namespace "'+a+'" already exists.');}if(goog.moduleLoaderState_)goog.moduleLoaderState_.moduleName=a;else{var b=goog.global.$jscomp;if(!b||"function"!=typeof b.getCurrentModulePath)throw Error('Module with namespace "'+
a+'" has been loaded incorrectly.');b=b.require(b.getCurrentModulePath());goog.loadedModules_[a]={exports:b,type:goog.ModuleType.ES6,moduleId:a}}};goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&null!=goog.getObjectByName(a)},goog.implicitNamespaces_={"goog.module":!0});
goog.getObjectByName=function(a,b){a=a.split(".");b=b||goog.global;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};goog.globalize=function(a,b){b=b||goog.global;for(var c in a)b[c]=a[c]};goog.addDependency=function(a,b,c,d){!COMPILED&&goog.DEPENDENCIES_ENABLED&&goog.debugLoader_.addDependency(a,b,c,d)};goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};
goog.require=function(a){if(!COMPILED){goog.ENABLE_DEBUG_LOADER&&goog.debugLoader_.requested(a);if(goog.isProvided_(a)){if(goog.isInModuleLoader_())return goog.module.getInternal_(a)}else if(goog.ENABLE_DEBUG_LOADER){var b=goog.moduleLoaderState_;goog.moduleLoaderState_=null;try{goog.debugLoader_.load_(a)}finally{goog.moduleLoaderState_=b}}return null}};goog.requireType=function(a){return{}};goog.basePath="";goog.nullFunction=function(){};
goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.instance_=void 0;a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;goog.TRANSPILE="detect";
goog.ASSUME_ES_MODULES_TRANSPILED=!1;goog.TRANSPILE_TO_LANGUAGE="";goog.TRANSPILER="transpile.js";goog.hasBadLetScoping=null;goog.useSafari10Workaround=function(){if(null==goog.hasBadLetScoping){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(b){a=!1}goog.hasBadLetScoping=a}return goog.hasBadLetScoping};goog.workaroundSafari10EvalBug=function(a){return"(function(){"+a+"\n;})();\n"};
goog.loadModule=function(a){var b=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:goog.ModuleType.GOOG};if(goog.isFunction(a))var c=a.call(void 0,{});else if("string"===typeof a)goog.useSafari10Workaround()&&(a=goog.workaroundSafari10EvalBug(a)),c=goog.loadModuleFromSource_.call(void 0,a);else throw Error("Invalid module definition");var d=goog.moduleLoaderState_.moduleName;if("string"===typeof d&&d)goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(d,
c):goog.SEAL_MODULE_EXPORTS&&Object.seal&&"object"==typeof c&&null!=c&&Object.seal(c),goog.loadedModules_[d]={exports:c,type:goog.ModuleType.GOOG,moduleId:goog.moduleLoaderState_.moduleName};else throw Error('Invalid module name "'+d+'"');}finally{goog.moduleLoaderState_=b}};goog.loadModuleFromSource_=function(a){eval(a);return{}};goog.normalizePath_=function(a){a=a.split("/");for(var b=0;b<a.length;)"."==a[b]?a.splice(b,1):b&&".."==a[b]&&a[b-1]&&".."!=a[b-1]?a.splice(--b,2):b++;return a.join("/")};
goog.loadFileSync_=function(a){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(a);try{var b=new goog.global.XMLHttpRequest;b.open("get",a,!1);b.send();return 0==b.status||200==b.status?b.responseText:null}catch(c){return null}};
goog.transpile_=function(a,b,c){var d=goog.global.$jscomp;d||(goog.global.$jscomp=d={});var e=d.transpile;if(!e){var f=goog.basePath+goog.TRANSPILER,g=goog.loadFileSync_(f);if(g){(function(){(0,eval)(g+"\n//# sourceURL="+f)}).call(goog.global);if(goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=
goog.global.$gwtExport.$jscomp.transpile;d=goog.global.$jscomp;e=d.transpile}}e||(e=d.transpile=function(a,b){goog.logToConsole_(b+" requires transpilation but no transpiler was found.");return a});return e(a,b,c)};
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
goog.getUid=function(a){return Object.prototype.hasOwnProperty.call(a,goog.UID_PROPERTY_)&&a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};goog.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;
goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if("function"===typeof a.clone)return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(null==goog.evalWorksForGlobals_){try{goog.global.eval("var _evalTest_ = 1;")}catch(d){}if("undefined"!=typeof goog.global._evalTest_){try{delete goog.global._evalTest_}catch(d){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=
!1;c.appendChild(b.createTextNode(a));b.head.appendChild(c);b.head.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;
goog.getCssName=function(a,b){if("."==String(a).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+a);var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")};d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};a=b?a+"-"+d(b):d(a);return goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(a):a};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b,c){c&&c.html&&(a=a.replace(/</g,"&lt;"));b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,c){return null!=b&&c in b?b[c]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};
goog.exportProperty=function(a,b,c){a[b]=c};goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};goog.scope=function(a){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");a.call(goog.global)};COMPILED||(goog.global.COMPILED=COMPILED);
goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;
goog.defineClass.createSealingConstructor_=function(a,b){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return a;var c=!goog.defineClass.isUnsealable_(b),d=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===d&&c&&Object.seal instanceof Function&&Object.seal(b);return b};return d};goog.defineClass.isUnsealable_=function(a){return a&&a.prototype&&a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";
!COMPILED&&goog.DEPENDENCIES_ENABLED&&(goog.inHtmlDocument_=function(){var a=goog.global.document;return null!=a&&"write"in a},goog.isDocumentLoading_=function(){var a=goog.global.document;return a.attachEvent?"complete"!=a.readyState:"loading"==a.readyState},goog.findBasePath_=function(){if(void 0!=goog.global.CLOSURE_BASE_PATH&&"string"===typeof goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_()){var a=goog.global.document,b=a.currentScript;
a=b?[b]:a.getElementsByTagName("SCRIPT");for(b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?");d=-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}}},goog.findBasePath_(),goog.Transpiler=function(){this.requiresTranspilation_=null;this.transpilationTarget_=goog.TRANSPILE_TO_LANGUAGE},goog.Transpiler.prototype.createRequiresTranspilation_=function(){function a(a,b){e?d[a]=!0:b()?(c=a,d[a]=!1):e=d[a]=!0}function b(a){try{return!!eval(a)}catch(h){return!1}}
var c="es3",d={es3:!1},e=!1,f=goog.global.navigator&&goog.global.navigator.userAgent?goog.global.navigator.userAgent:"";a("es5",function(){return b("[1,].length==1")});a("es6",function(){return f.match(/Edge\/(\d+)(\.\d)*/i)?!1:b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')});
a("es7",function(){return b("2 ** 2 == 4")});a("es8",function(){return b("async () => 1, true")});a("es9",function(){return b("({...rest} = {}), true")});a("es_next",function(){return!1});return{target:c,map:d}},goog.Transpiler.prototype.needsTranspile=function(a,b){if("always"==goog.TRANSPILE)return!0;if("never"==goog.TRANSPILE)return!1;if(!this.requiresTranspilation_){var c=this.createRequiresTranspilation_();this.requiresTranspilation_=c.map;this.transpilationTarget_=this.transpilationTarget_||
c.target}if(a in this.requiresTranspilation_)return this.requiresTranspilation_[a]?!0:!goog.inHtmlDocument_()||"es6"!=b||"noModule"in goog.global.document.createElement("script")?!1:!0;throw Error("Unknown language mode: "+a);},goog.Transpiler.prototype.transpile=function(a,b){return goog.transpile_(a,b,this.transpilationTarget_)},goog.transpiler_=new goog.Transpiler,goog.protectScriptTag_=function(a){return a.replace(/<\/(SCRIPT)/ig,"\\x3c/$1")},goog.DebugLoader_=function(){this.dependencies_={};
this.idToPath_={};this.written_={};this.loadingDeps_=[];this.depsToLoad_=[];this.paused_=!1;this.factory_=new goog.DependencyFactory(goog.transpiler_);this.deferredCallbacks_={};this.deferredQueue_=[]},goog.DebugLoader_.prototype.bootstrap=function(a,b){function c(){d&&(goog.global.setTimeout(d,0),d=null)}var d=b;if(a.length){b=[];for(var e=0;e<a.length;e++){var f=this.getPathFromDeps_(a[e]);if(!f)throw Error("Unregonized namespace: "+a[e]);b.push(this.dependencies_[f])}f=goog.require;var g=0;for(e=
0;e<a.length;e++)f(a[e]),b[e].onLoad(function(){++g==a.length&&c()})}else c()},goog.DebugLoader_.prototype.loadClosureDeps=function(){this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath+"deps.js"),"deps.js",[],[],{},!1));this.loadDeps_()},goog.DebugLoader_.prototype.requested=function(a,b){(a=this.getPathFromDeps_(a))&&(b||this.areDepsLoaded_(this.dependencies_[a].requires))&&(b=this.deferredCallbacks_[a])&&(delete this.deferredCallbacks_[a],b())},goog.DebugLoader_.prototype.setDependencyFactory=
function(a){this.factory_=a},goog.DebugLoader_.prototype.load_=function(a){if(this.getPathFromDeps_(a)){var b=this,c=[],d=function(a){var e=b.getPathFromDeps_(a);if(!e)throw Error("Bad dependency path or symbol: "+a);if(!b.written_[e]){b.written_[e]=!0;a=b.dependencies_[e];for(e=0;e<a.requires.length;e++)goog.isProvided_(a.requires[e])||d(a.requires[e]);c.push(a)}};d(a);a=!!this.depsToLoad_.length;this.depsToLoad_=this.depsToLoad_.concat(c);this.paused_||a||this.loadDeps_()}else throw a="goog.require could not find: "+
a,goog.logToConsole_(a),Error(a);},goog.DebugLoader_.prototype.loadDeps_=function(){for(var a=this,b=this.paused_;this.depsToLoad_.length&&!b;)(function(){var c=!1,d=a.depsToLoad_.shift(),e=!1;a.loading_(d);var f={pause:function(){if(c)throw Error("Cannot call pause after the call to load.");b=!0},resume:function(){c?a.resume_():b=!1},loaded:function(){if(e)throw Error("Double call to loaded.");e=!0;a.loaded_(d)},pending:function(){for(var b=[],c=0;c<a.loadingDeps_.length;c++)b.push(a.loadingDeps_[c]);
return b},setModuleState:function(a){goog.moduleLoaderState_={type:a,moduleName:"",declareLegacyNamespace:!1}},registerEs6ModuleExports:function(a,b,c){c&&(goog.loadedModules_[c]={exports:b,type:goog.ModuleType.ES6,moduleId:c||""})},registerGoogModuleExports:function(a,b){goog.loadedModules_[a]={exports:b,type:goog.ModuleType.GOOG,moduleId:a}},clearModuleState:function(){goog.moduleLoaderState_=null},defer:function(b){if(c)throw Error("Cannot register with defer after the call to load.");a.defer_(d,
b)},areDepsLoaded:function(){return a.areDepsLoaded_(d.requires)}};try{d.load(f)}finally{c=!0}})();b&&this.pause_()},goog.DebugLoader_.prototype.pause_=function(){this.paused_=!0},goog.DebugLoader_.prototype.resume_=function(){this.paused_&&(this.paused_=!1,this.loadDeps_())},goog.DebugLoader_.prototype.loading_=function(a){this.loadingDeps_.push(a)},goog.DebugLoader_.prototype.loaded_=function(a){for(var b=0;b<this.loadingDeps_.length;b++)if(this.loadingDeps_[b]==a){this.loadingDeps_.splice(b,1);
break}for(b=0;b<this.deferredQueue_.length;b++)if(this.deferredQueue_[b]==a.path){this.deferredQueue_.splice(b,1);break}if(this.loadingDeps_.length==this.deferredQueue_.length&&!this.depsToLoad_.length)for(;this.deferredQueue_.length;)this.requested(this.deferredQueue_.shift(),!0);a.loaded()},goog.DebugLoader_.prototype.areDepsLoaded_=function(a){for(var b=0;b<a.length;b++){var c=this.getPathFromDeps_(a[b]);if(!c||!(c in this.deferredCallbacks_||goog.isProvided_(a[b])))return!1}return!0},goog.DebugLoader_.prototype.getPathFromDeps_=
function(a){return a in this.idToPath_?this.idToPath_[a]:a in this.dependencies_?a:null},goog.DebugLoader_.prototype.defer_=function(a,b){this.deferredCallbacks_[a.path]=b;this.deferredQueue_.push(a.path)},goog.LoadController=function(){},goog.LoadController.prototype.pause=function(){},goog.LoadController.prototype.resume=function(){},goog.LoadController.prototype.loaded=function(){},goog.LoadController.prototype.pending=function(){},goog.LoadController.prototype.registerEs6ModuleExports=function(a,
b,c){},goog.LoadController.prototype.setModuleState=function(a){},goog.LoadController.prototype.clearModuleState=function(){},goog.LoadController.prototype.defer=function(a){},goog.LoadController.prototype.areDepsLoaded=function(){},goog.Dependency=function(a,b,c,d,e){this.path=a;this.relativePath=b;this.provides=c;this.requires=d;this.loadFlags=e;this.loaded_=!1;this.loadCallbacks_=[]},goog.Dependency.prototype.getPathName=function(){var a=this.path,b=a.indexOf("://");0<=b&&(a=a.substring(b+3),b=
a.indexOf("/"),0<=b&&(a=a.substring(b+1)));return a},goog.Dependency.prototype.onLoad=function(a){this.loaded_?a():this.loadCallbacks_.push(a)},goog.Dependency.prototype.loaded=function(){this.loaded_=!0;var a=this.loadCallbacks_;this.loadCallbacks_=[];for(var b=0;b<a.length;b++)a[b]()},goog.Dependency.defer_=!1,goog.Dependency.callbackMap_={},goog.Dependency.registerCallback_=function(a){var b=Math.random().toString(32);goog.Dependency.callbackMap_[b]=a;return b},goog.Dependency.unregisterCallback_=
function(a){delete goog.Dependency.callbackMap_[a]},goog.Dependency.callback_=function(a,b){if(a in goog.Dependency.callbackMap_){for(var c=goog.Dependency.callbackMap_[a],d=[],e=1;e<arguments.length;e++)d.push(arguments[e]);c.apply(void 0,d)}else throw Error("Callback key "+a+" does not exist (was base.js loaded more than once?).");},goog.Dependency.prototype.load=function(a){if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?a.loaded():a.pause();else if(goog.inHtmlDocument_()){var b=
goog.global.document;if("complete"==b.readyState&&!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING){if(/\bdeps.js$/.test(this.path)){a.loaded();return}throw Error('Cannot write "'+this.path+'" after document load');}if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&goog.isDocumentLoading_()){var c=goog.Dependency.registerCallback_(function(b){goog.DebugLoader_.IS_OLD_IE_&&"complete"!=b.readyState||(goog.Dependency.unregisterCallback_(c),a.loaded())}),d=!goog.DebugLoader_.IS_OLD_IE_&&goog.getScriptNonce()?
' nonce="'+goog.getScriptNonce()+'"':"";d='<script src="'+this.path+'" '+(goog.DebugLoader_.IS_OLD_IE_?"onreadystatechange":"onload")+"=\"goog.Dependency.callback_('"+c+'\', this)" type="text/javascript" '+(goog.Dependency.defer_?"defer":"")+d+">\x3c/script>";b.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(d):d)}else{var e=b.createElement("script");e.defer=goog.Dependency.defer_;e.async=!1;e.type="text/javascript";(d=goog.getScriptNonce())&&e.setAttribute("nonce",d);goog.DebugLoader_.IS_OLD_IE_?
(a.pause(),e.onreadystatechange=function(){if("loaded"==e.readyState||"complete"==e.readyState)a.loaded(),a.resume()}):e.onload=function(){e.onload=null;a.loaded()};e.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path):this.path;b.head.appendChild(e)}}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),"deps.js"==this.relativePath?(goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),
a.loaded()):a.pause()},goog.Es6ModuleDependency=function(a,b,c,d,e){goog.Dependency.call(this,a,b,c,d,e)},goog.inherits(goog.Es6ModuleDependency,goog.Dependency),goog.Es6ModuleDependency.prototype.load=function(a){function b(a,b){a=b?'<script type="module" crossorigin>'+b+"\x3c/script>":'<script type="module" crossorigin src="'+a+'">\x3c/script>';d.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(a):a)}function c(a,b){var c=d.createElement("script");c.defer=!0;c.async=!1;c.type=
"module";c.setAttribute("crossorigin",!0);var e=goog.getScriptNonce();e&&c.setAttribute("nonce",e);b?c.textContent=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScript(b):b:c.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(a):a;d.head.appendChild(c)}if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?a.loaded():a.pause();else if(goog.inHtmlDocument_()){var d=goog.global.document,e=this;if(goog.isDocumentLoading_()){var f=b;goog.Dependency.defer_=
!0}else f=c;var g=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(g);a.setModuleState(goog.ModuleType.ES6)});f(void 0,'goog.Dependency.callback_("'+g+'")');f(this.path,void 0);var h=goog.Dependency.registerCallback_(function(b){goog.Dependency.unregisterCallback_(h);a.registerEs6ModuleExports(e.path,b,goog.moduleLoaderState_.moduleName)});f(void 0,'import * as m from "'+this.path+'"; goog.Dependency.callback_("'+h+'", m)');var k=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(k);
a.clearModuleState();a.loaded()});f(void 0,'goog.Dependency.callback_("'+k+'")')}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),a.pause()},goog.TransformedDependency=function(a,b,c,d,e){goog.Dependency.call(this,a,b,c,d,e);this.contents_=null;this.lazyFetch_=!goog.inHtmlDocument_()||!("noModule"in goog.global.document.createElement("script"))},goog.inherits(goog.TransformedDependency,goog.Dependency),goog.TransformedDependency.prototype.load=function(a){function b(){e.contents_=
goog.loadFileSync_(e.path);e.contents_&&(e.contents_=e.transform(e.contents_),e.contents_&&(e.contents_+="\n//# sourceURL="+e.path))}function c(){e.lazyFetch_&&b();if(e.contents_){f&&a.setModuleState(goog.ModuleType.ES6);try{var c=e.contents_;e.contents_=null;goog.globalEval(c);if(f)var d=goog.moduleLoaderState_.moduleName}finally{f&&a.clearModuleState()}f&&goog.global.$jscomp.require.ensure([e.getPathName()],function(){a.registerEs6ModuleExports(e.path,goog.global.$jscomp.require(e.getPathName()),
d)});a.loaded()}}function d(){var a=goog.global.document,b=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(b);c()}),d='<script type="text/javascript">'+goog.protectScriptTag_('goog.Dependency.callback_("'+b+'");')+"\x3c/script>";a.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(d):d)}var e=this;if(goog.global.CLOSURE_IMPORT_SCRIPT)b(),this.contents_&&goog.global.CLOSURE_IMPORT_SCRIPT("",this.contents_)?(this.contents_=null,a.loaded()):a.pause();
else{var f=this.loadFlags.module==goog.ModuleType.ES6;this.lazyFetch_||b();var g=1<a.pending().length,h=g&&goog.DebugLoader_.IS_OLD_IE_;g=goog.Dependency.defer_&&(g||goog.isDocumentLoading_());if(h||g)a.defer(function(){c()});else{var k=goog.global.document;h=goog.inHtmlDocument_()&&"ActiveXObject"in goog.global;if(f&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()&&!h){goog.Dependency.defer_=!0;a.pause();var l=k.onreadystatechange;k.onreadystatechange=function(){"interactive"==k.readyState&&(k.onreadystatechange=
l,c(),a.resume());goog.isFunction(l)&&l.apply(void 0,arguments)}}else!goog.DebugLoader_.IS_OLD_IE_&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()?d():c()}}},goog.TransformedDependency.prototype.transform=function(a){},goog.TranspiledDependency=function(a,b,c,d,e,f){goog.TransformedDependency.call(this,a,b,c,d,e);this.transpiler=f},goog.inherits(goog.TranspiledDependency,goog.TransformedDependency),goog.TranspiledDependency.prototype.transform=function(a){return this.transpiler.transpile(a,this.getPathName())},
goog.PreTranspiledEs6ModuleDependency=function(a,b,c,d,e){goog.TransformedDependency.call(this,a,b,c,d,e)},goog.inherits(goog.PreTranspiledEs6ModuleDependency,goog.TransformedDependency),goog.PreTranspiledEs6ModuleDependency.prototype.transform=function(a){return a},goog.GoogModuleDependency=function(a,b,c,d,e,f,g){goog.TransformedDependency.call(this,a,b,c,d,e);this.needsTranspile_=f;this.transpiler_=g},goog.inherits(goog.GoogModuleDependency,goog.TransformedDependency),goog.GoogModuleDependency.prototype.transform=
function(a){this.needsTranspile_&&(a=this.transpiler_.transpile(a,this.getPathName()));return goog.LOAD_MODULE_USING_EVAL&&void 0!==goog.global.JSON?"goog.loadModule("+goog.global.JSON.stringify(a+"\n//# sourceURL="+this.path+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+a+"\n;return exports});\n//# sourceURL="+this.path+"\n"},goog.DebugLoader_.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.DebugLoader_.prototype.addDependency=function(a,b,c,
d){b=b||[];a=a.replace(/\\/g,"/");var e=goog.normalizePath_(goog.basePath+a);d&&"boolean"!==typeof d||(d=d?{module:goog.ModuleType.GOOG}:{});c=this.factory_.createDependency(e,a,b,c,d,goog.transpiler_.needsTranspile(d.lang||"es3",d.module));this.dependencies_[e]=c;for(c=0;c<b.length;c++)this.idToPath_[b[c]]=e;this.idToPath_[a]=e},goog.DependencyFactory=function(a){this.transpiler=a},goog.DependencyFactory.prototype.createDependency=function(a,b,c,d,e,f){return e.module==goog.ModuleType.GOOG?new goog.GoogModuleDependency(a,
b,c,d,e,f,this.transpiler):f?new goog.TranspiledDependency(a,b,c,d,e,this.transpiler):e.module==goog.ModuleType.ES6?"never"==goog.TRANSPILE&&goog.ASSUME_ES_MODULES_TRANSPILED?new goog.PreTranspiledEs6ModuleDependency(a,b,c,d,e):new goog.Es6ModuleDependency(a,b,c,d,e):new goog.Dependency(a,b,c,d,e)},goog.debugLoader_=new goog.DebugLoader_,goog.loadClosureDeps=function(){goog.debugLoader_.loadClosureDeps()},goog.setDependencyFactory=function(a){goog.debugLoader_.setDependencyFactory(a)},goog.global.CLOSURE_NO_DEPS||
goog.debugLoader_.loadClosureDeps(),goog.bootstrap=function(a,b){goog.debugLoader_.bootstrap(a,b)});goog.TRUSTED_TYPES_POLICY_NAME="";goog.identity_=function(a){return a};goog.createTrustedTypesPolicy=function(a){var b=null,c=goog.global.trustedTypes||goog.global.TrustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:goog.identity_,createScript:goog.identity_,createScriptURL:goog.identity_,createURL:goog.identity_})}catch(d){goog.logToConsole_(d.message)}return b};
goog.TRUSTED_TYPES_POLICY_=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#base"):null;goog.object={};goog.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};goog.object.getValueByKeys=function(a,b){var c=goog.isArrayLike(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};goog.object.containsKey=function(a,b){return null!==a&&b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return null!==a&&b in a?a[b]:c};
goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};goog.object.setWithReturnValueIfNotSet=function(a,b,c){if(b in a)return a[b];c=c();return a[b]=c};goog.object.equals=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(goog.isFunction(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};
goog.object.getAllPropertyNames=function(a,b,c){if(!a)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return goog.object.getKeys(a);for(var d={};a&&(a!==Object.prototype||b)&&(a!==Function.prototype||c);){for(var e=Object.getOwnPropertyNames(a),f=0;f<e.length;f++)d[e[f]]=!0;a=Object.getPrototypeOf(a)}return goog.object.getKeys(d)};goog.object.getSuperClass=function(a){return(a=Object.getPrototypeOf(a.prototype))&&a.constructor};var jspb={asserts:{}};jspb.asserts.doAssertFailure=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw Error(""+e,f||[]);};jspb.asserts.assert=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];a||jspb.asserts.doAssertFailure("",null,b,d);return a};
jspb.asserts.assertString=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];"string"!==typeof a&&jspb.asserts.doAssertFailure("Expected string but got %s: %s.",[goog.typeOf(a),a],b,d);return a};jspb.asserts.assertArray=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];Array.isArray(a)||jspb.asserts.doAssertFailure("Expected array but got %s: %s.",[goog.typeOf(a),a],b,d);return a};
jspb.asserts.fail=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];throw Error("Failure"+(a?": "+a:""),c);};jspb.asserts.assertInstanceof=function(a,b,c,d){for(var e=[],f=3;f<arguments.length;++f)e[f-3]=arguments[f];a instanceof b||jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.",[jspb.asserts.getType(b),jspb.asserts.getType(a)],c,e);return a};
jspb.asserts.getType=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};jspb.BinaryConstants={};jspb.ConstBinaryMessage=function(){};jspb.BinaryMessage=function(){};jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31};jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5};
jspb.BinaryConstants.FieldTypeToWireType=function(a){var b=jspb.BinaryConstants.FieldType,c=jspb.BinaryConstants.WireType;switch(a){case b.INT32:case b.INT64:case b.UINT32:case b.UINT64:case b.SINT32:case b.SINT64:case b.BOOL:case b.ENUM:case b.VHASH64:return c.VARINT;case b.DOUBLE:case b.FIXED64:case b.SFIXED64:case b.FHASH64:return c.FIXED64;case b.STRING:case b.MESSAGE:case b.BYTES:return c.DELIMITED;case b.FLOAT:case b.FIXED32:case b.SFIXED32:return c.FIXED32;default:return c.INVALID}};
jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1;jspb.BinaryConstants.FLOAT32_EPS=1.401298464324817E-45;jspb.BinaryConstants.FLOAT32_MIN=1.1754943508222875E-38;jspb.BinaryConstants.FLOAT32_MAX=3.4028234663852886E38;jspb.BinaryConstants.FLOAT64_EPS=4.9E-324;jspb.BinaryConstants.FLOAT64_MIN=2.2250738585072014E-308;jspb.BinaryConstants.FLOAT64_MAX=1.7976931348623157E308;jspb.BinaryConstants.TWO_TO_20=1048576;jspb.BinaryConstants.TWO_TO_23=8388608;jspb.BinaryConstants.TWO_TO_31=2147483648;
jspb.BinaryConstants.TWO_TO_32=4294967296;jspb.BinaryConstants.TWO_TO_52=4503599627370496;jspb.BinaryConstants.TWO_TO_63=0x7fffffffffffffff;jspb.BinaryConstants.TWO_TO_64=1.8446744073709552E19;jspb.BinaryConstants.ZERO_HASH="\x00\x00\x00\x00\x00\x00\x00\x00";goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a));this.reportErrorToServer=!0};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){goog.debug.Error.call(this,goog.asserts.subs_(a,b));this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.DEFAULT_ERROR_HANDLER=function(a){throw a;};goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");return c+a[d]};goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);a=new goog.asserts.AssertionError(""+e,f||[]);goog.asserts.errorHandler_(a)};goog.asserts.setErrorHandler=function(a){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=a)};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertExists=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&null==a&&goog.asserts.doAssertFailure_("Expected to exist: %s.",[a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.fail=function(a,b){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&"number"!==typeof a&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&"string"!==typeof a&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!Array.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&"boolean"!==typeof a&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(b),goog.asserts.getType_(a)],c,Array.prototype.slice.call(arguments,3));return a};goog.asserts.assertFinite=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||"number"==typeof a&&isFinite(a)||goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.",[a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};goog.asserts.getType_=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=2012<goog.FEATURESET_YEAR;goog.array.peek=function(a){return a[a.length-1]};goog.array.last=goog.array.peek;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);goog.asserts.assert(null!=b);d&&(b=goog.bind(b,d));return Array.prototype.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){b=goog.array.indexOf(a,b);var c;(c=0<=b)&&goog.array.removeAt(a,b);return c};
goog.array.removeLast=function(a,b){b=goog.array.lastIndexOf(a,b);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAllIf=function(a,b,c){var d=0;goog.array.forEachRight(a,function(e,f){b.call(c,e,f,a)&&goog.array.removeAt(a,f)&&d++});return d};
goog.array.concat=function(a){return Array.prototype.concat.apply([],arguments)};goog.array.join=function(a){return Array.prototype.concat.apply([],arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(goog.isArrayLike(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};
goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return Array.prototype.splice.apply(a,goog.array.slice(arguments,1))};goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(a)?"o"+goog.getUid(a):(typeof a).charAt(0)+a};c=c||d;d={};for(var e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};
goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+(g-f>>>1);var l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:-f-1};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};goog.array.stableSort=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]={index:d,value:a[d]};var e=b||goog.array.defaultCompare;goog.array.sort(c,function(a,b){return e(a.value,b.value)||a.index-b.index});for(d=0;d<a.length;d++)a[d]=c[d].value};
goog.array.sortByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(b(a),b(c))})};goog.array.sortObjectsByKey=function(a,b,c){goog.array.sortByKey(a,function(a){return a[b]},c)};goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};
goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};
goog.array.inverseDefaultCompare=function(a,b){return-goog.array.defaultCompare(a,b)};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};
goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);void 0!==g&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};
goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=goog.array.slice(d,e,e+8192);f=goog.array.flatten.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b};goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a};
goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,c,0,b[0])};goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);b.push(e)}return b};
goog.array.shuffle=function(a,b){b=b||Math.random;for(var c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}};goog.array.copyByIndex=function(a,b){var c=[];goog.array.forEach(b,function(b){c.push(a[b])});return c};goog.array.concatMap=function(a,b,c){return goog.array.concat.apply([],goog.array.map(a,b,c))};goog.crypt={};goog.crypt.stringToByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};goog.crypt.byteArrayToString=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192){var d=goog.array.slice(a,c,c+8192);b+=String.fromCharCode.apply(null,d)}return b};
goog.crypt.byteArrayToHex=function(a,b){return goog.array.map(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join(b||"")};goog.crypt.hexToByteArray=function(a){goog.asserts.assert(0==a.length%2,"Key string length must be multiple of 2");for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
goog.crypt.stringToUtf8ByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
goog.crypt.utf8ByteArrayToString=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var g=a[c++],h=a[c++];e=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],g=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return b.join("")};
goog.crypt.xorByteArray=function(a,b){goog.asserts.assert(a.length==b.length,"XOR array lengths must match");for(var c=[],d=0;d<a.length;d++)c.push(a[d]^b[d]);return c};goog.dom.asserts={};goog.dom.asserts.assertIsLocation=function(a){if(goog.asserts.ENABLE_ASSERTS){var b=goog.dom.asserts.getWindow_(a);b&&(!a||!(a instanceof b.Location)&&a instanceof b.Element)&&goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s",goog.dom.asserts.debugStringForType_(a))}return a};
goog.dom.asserts.assertIsElementType_=function(a,b){if(goog.asserts.ENABLE_ASSERTS){var c=goog.dom.asserts.getWindow_(a);c&&"undefined"!=typeof c[b]&&(a&&(a instanceof c[b]||!(a instanceof c.Location||a instanceof c.Element))||goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s",b,goog.dom.asserts.debugStringForType_(a)))}return a};goog.dom.asserts.assertIsHTMLAnchorElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLAnchorElement")};
goog.dom.asserts.assertIsHTMLButtonElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLButtonElement")};goog.dom.asserts.assertIsHTMLLinkElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLLinkElement")};goog.dom.asserts.assertIsHTMLImageElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLImageElement")};goog.dom.asserts.assertIsHTMLAudioElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLAudioElement")};
goog.dom.asserts.assertIsHTMLVideoElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLVideoElement")};goog.dom.asserts.assertIsHTMLInputElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLInputElement")};goog.dom.asserts.assertIsHTMLTextAreaElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLTextAreaElement")};goog.dom.asserts.assertIsHTMLCanvasElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLCanvasElement")};
goog.dom.asserts.assertIsHTMLEmbedElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLEmbedElement")};goog.dom.asserts.assertIsHTMLFormElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLFormElement")};goog.dom.asserts.assertIsHTMLFrameElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLFrameElement")};goog.dom.asserts.assertIsHTMLIFrameElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLIFrameElement")};
goog.dom.asserts.assertIsHTMLObjectElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLObjectElement")};goog.dom.asserts.assertIsHTMLScriptElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLScriptElement")};
goog.dom.asserts.debugStringForType_=function(a){if(goog.isObject(a))try{return a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(b){return"<object could not be stringified>"}else return void 0===a?"undefined":null===a?"null":typeof a};goog.dom.asserts.getWindow_=function(a){try{var b=a&&a.ownerDocument,c=b&&(b.defaultView||b.parentWindow);c=c||goog.global;if(c.Element&&c.Location)return c}catch(d){}return null};goog.functions={};goog.functions.constant=function(a){return function(){return a}};goog.functions.FALSE=function(){return!1};goog.functions.TRUE=function(){return!0};goog.functions.NULL=function(){return null};goog.functions.identity=function(a,b){return a};goog.functions.error=function(a){return function(){throw Error(a);}};goog.functions.fail=function(a){return function(){throw a;}};
goog.functions.lock=function(a,b){b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};goog.functions.nth=function(a){return function(){return arguments[a]}};goog.functions.partialRight=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.push.apply(b,c);return a.apply(this,b)}};goog.functions.withReturnValue=function(a,b){return goog.functions.sequence(a,goog.functions.constant(b))};
goog.functions.equalTo=function(a,b){return function(c){return b?a==c:a===c}};goog.functions.compose=function(a,b){var c=arguments,d=c.length;return function(){var a;d&&(a=c[d-1].apply(this,arguments));for(var b=d-2;0<=b;b--)a=c[b].call(this,a);return a}};goog.functions.sequence=function(a){var b=arguments,c=b.length;return function(){for(var a,e=0;e<c;e++)a=b[e].apply(this,arguments);return a}};
goog.functions.and=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(!b[a].apply(this,arguments))return!1;return!0}};goog.functions.or=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(b[a].apply(this,arguments))return!0;return!1}};goog.functions.not=function(a){return function(){return!a.apply(this,arguments)}};
goog.functions.create=function(a,b){var c=function(){};c.prototype=a.prototype;c=new c;a.apply(c,Array.prototype.slice.call(arguments,1));return c};goog.functions.CACHE_RETURN_VALUE=!0;goog.functions.cacheReturnValue=function(a){var b=!1,c;return function(){if(!goog.functions.CACHE_RETURN_VALUE)return a();b||(c=a(),b=!0);return c}};goog.functions.once=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
goog.functions.debounce=function(a,b,c){var d=0;return function(e){goog.global.clearTimeout(d);var f=arguments;d=goog.global.setTimeout(function(){a.apply(c,f)},b)}};goog.functions.throttle=function(a,b,c){var d=0,e=!1,f=[],g=function(){d=0;e&&(e=!1,h())},h=function(){d=goog.global.setTimeout(g,b);a.apply(c,f)};return function(a){f=arguments;d?e=!0:h()}};goog.functions.rateLimit=function(a,b,c){var d=0,e=function(){d=0};return function(f){d||(d=goog.global.setTimeout(e,b),a.apply(c,arguments))}};goog.dom.HtmlElement=function(){};goog.dom.TagName=function(a){this.tagName_=a};goog.dom.TagName.prototype.toString=function(){return this.tagName_};goog.dom.TagName.A=new goog.dom.TagName("A");goog.dom.TagName.ABBR=new goog.dom.TagName("ABBR");goog.dom.TagName.ACRONYM=new goog.dom.TagName("ACRONYM");goog.dom.TagName.ADDRESS=new goog.dom.TagName("ADDRESS");goog.dom.TagName.APPLET=new goog.dom.TagName("APPLET");goog.dom.TagName.AREA=new goog.dom.TagName("AREA");goog.dom.TagName.ARTICLE=new goog.dom.TagName("ARTICLE");
goog.dom.TagName.ASIDE=new goog.dom.TagName("ASIDE");goog.dom.TagName.AUDIO=new goog.dom.TagName("AUDIO");goog.dom.TagName.B=new goog.dom.TagName("B");goog.dom.TagName.BASE=new goog.dom.TagName("BASE");goog.dom.TagName.BASEFONT=new goog.dom.TagName("BASEFONT");goog.dom.TagName.BDI=new goog.dom.TagName("BDI");goog.dom.TagName.BDO=new goog.dom.TagName("BDO");goog.dom.TagName.BIG=new goog.dom.TagName("BIG");goog.dom.TagName.BLOCKQUOTE=new goog.dom.TagName("BLOCKQUOTE");goog.dom.TagName.BODY=new goog.dom.TagName("BODY");
goog.dom.TagName.BR=new goog.dom.TagName("BR");goog.dom.TagName.BUTTON=new goog.dom.TagName("BUTTON");goog.dom.TagName.CANVAS=new goog.dom.TagName("CANVAS");goog.dom.TagName.CAPTION=new goog.dom.TagName("CAPTION");goog.dom.TagName.CENTER=new goog.dom.TagName("CENTER");goog.dom.TagName.CITE=new goog.dom.TagName("CITE");goog.dom.TagName.CODE=new goog.dom.TagName("CODE");goog.dom.TagName.COL=new goog.dom.TagName("COL");goog.dom.TagName.COLGROUP=new goog.dom.TagName("COLGROUP");
goog.dom.TagName.COMMAND=new goog.dom.TagName("COMMAND");goog.dom.TagName.DATA=new goog.dom.TagName("DATA");goog.dom.TagName.DATALIST=new goog.dom.TagName("DATALIST");goog.dom.TagName.DD=new goog.dom.TagName("DD");goog.dom.TagName.DEL=new goog.dom.TagName("DEL");goog.dom.TagName.DETAILS=new goog.dom.TagName("DETAILS");goog.dom.TagName.DFN=new goog.dom.TagName("DFN");goog.dom.TagName.DIALOG=new goog.dom.TagName("DIALOG");goog.dom.TagName.DIR=new goog.dom.TagName("DIR");goog.dom.TagName.DIV=new goog.dom.TagName("DIV");
goog.dom.TagName.DL=new goog.dom.TagName("DL");goog.dom.TagName.DT=new goog.dom.TagName("DT");goog.dom.TagName.EM=new goog.dom.TagName("EM");goog.dom.TagName.EMBED=new goog.dom.TagName("EMBED");goog.dom.TagName.FIELDSET=new goog.dom.TagName("FIELDSET");goog.dom.TagName.FIGCAPTION=new goog.dom.TagName("FIGCAPTION");goog.dom.TagName.FIGURE=new goog.dom.TagName("FIGURE");goog.dom.TagName.FONT=new goog.dom.TagName("FONT");goog.dom.TagName.FOOTER=new goog.dom.TagName("FOOTER");goog.dom.TagName.FORM=new goog.dom.TagName("FORM");
goog.dom.TagName.FRAME=new goog.dom.TagName("FRAME");goog.dom.TagName.FRAMESET=new goog.dom.TagName("FRAMESET");goog.dom.TagName.H1=new goog.dom.TagName("H1");goog.dom.TagName.H2=new goog.dom.TagName("H2");goog.dom.TagName.H3=new goog.dom.TagName("H3");goog.dom.TagName.H4=new goog.dom.TagName("H4");goog.dom.TagName.H5=new goog.dom.TagName("H5");goog.dom.TagName.H6=new goog.dom.TagName("H6");goog.dom.TagName.HEAD=new goog.dom.TagName("HEAD");goog.dom.TagName.HEADER=new goog.dom.TagName("HEADER");
goog.dom.TagName.HGROUP=new goog.dom.TagName("HGROUP");goog.dom.TagName.HR=new goog.dom.TagName("HR");goog.dom.TagName.HTML=new goog.dom.TagName("HTML");goog.dom.TagName.I=new goog.dom.TagName("I");goog.dom.TagName.IFRAME=new goog.dom.TagName("IFRAME");goog.dom.TagName.IMG=new goog.dom.TagName("IMG");goog.dom.TagName.INPUT=new goog.dom.TagName("INPUT");goog.dom.TagName.INS=new goog.dom.TagName("INS");goog.dom.TagName.ISINDEX=new goog.dom.TagName("ISINDEX");goog.dom.TagName.KBD=new goog.dom.TagName("KBD");
goog.dom.TagName.KEYGEN=new goog.dom.TagName("KEYGEN");goog.dom.TagName.LABEL=new goog.dom.TagName("LABEL");goog.dom.TagName.LEGEND=new goog.dom.TagName("LEGEND");goog.dom.TagName.LI=new goog.dom.TagName("LI");goog.dom.TagName.LINK=new goog.dom.TagName("LINK");goog.dom.TagName.MAIN=new goog.dom.TagName("MAIN");goog.dom.TagName.MAP=new goog.dom.TagName("MAP");goog.dom.TagName.MARK=new goog.dom.TagName("MARK");goog.dom.TagName.MATH=new goog.dom.TagName("MATH");goog.dom.TagName.MENU=new goog.dom.TagName("MENU");
goog.dom.TagName.MENUITEM=new goog.dom.TagName("MENUITEM");goog.dom.TagName.META=new goog.dom.TagName("META");goog.dom.TagName.METER=new goog.dom.TagName("METER");goog.dom.TagName.NAV=new goog.dom.TagName("NAV");goog.dom.TagName.NOFRAMES=new goog.dom.TagName("NOFRAMES");goog.dom.TagName.NOSCRIPT=new goog.dom.TagName("NOSCRIPT");goog.dom.TagName.OBJECT=new goog.dom.TagName("OBJECT");goog.dom.TagName.OL=new goog.dom.TagName("OL");goog.dom.TagName.OPTGROUP=new goog.dom.TagName("OPTGROUP");
goog.dom.TagName.OPTION=new goog.dom.TagName("OPTION");goog.dom.TagName.OUTPUT=new goog.dom.TagName("OUTPUT");goog.dom.TagName.P=new goog.dom.TagName("P");goog.dom.TagName.PARAM=new goog.dom.TagName("PARAM");goog.dom.TagName.PICTURE=new goog.dom.TagName("PICTURE");goog.dom.TagName.PRE=new goog.dom.TagName("PRE");goog.dom.TagName.PROGRESS=new goog.dom.TagName("PROGRESS");goog.dom.TagName.Q=new goog.dom.TagName("Q");goog.dom.TagName.RP=new goog.dom.TagName("RP");goog.dom.TagName.RT=new goog.dom.TagName("RT");
goog.dom.TagName.RTC=new goog.dom.TagName("RTC");goog.dom.TagName.RUBY=new goog.dom.TagName("RUBY");goog.dom.TagName.S=new goog.dom.TagName("S");goog.dom.TagName.SAMP=new goog.dom.TagName("SAMP");goog.dom.TagName.SCRIPT=new goog.dom.TagName("SCRIPT");goog.dom.TagName.SECTION=new goog.dom.TagName("SECTION");goog.dom.TagName.SELECT=new goog.dom.TagName("SELECT");goog.dom.TagName.SMALL=new goog.dom.TagName("SMALL");goog.dom.TagName.SOURCE=new goog.dom.TagName("SOURCE");goog.dom.TagName.SPAN=new goog.dom.TagName("SPAN");
goog.dom.TagName.STRIKE=new goog.dom.TagName("STRIKE");goog.dom.TagName.STRONG=new goog.dom.TagName("STRONG");goog.dom.TagName.STYLE=new goog.dom.TagName("STYLE");goog.dom.TagName.SUB=new goog.dom.TagName("SUB");goog.dom.TagName.SUMMARY=new goog.dom.TagName("SUMMARY");goog.dom.TagName.SUP=new goog.dom.TagName("SUP");goog.dom.TagName.SVG=new goog.dom.TagName("SVG");goog.dom.TagName.TABLE=new goog.dom.TagName("TABLE");goog.dom.TagName.TBODY=new goog.dom.TagName("TBODY");goog.dom.TagName.TD=new goog.dom.TagName("TD");
goog.dom.TagName.TEMPLATE=new goog.dom.TagName("TEMPLATE");goog.dom.TagName.TEXTAREA=new goog.dom.TagName("TEXTAREA");goog.dom.TagName.TFOOT=new goog.dom.TagName("TFOOT");goog.dom.TagName.TH=new goog.dom.TagName("TH");goog.dom.TagName.THEAD=new goog.dom.TagName("THEAD");goog.dom.TagName.TIME=new goog.dom.TagName("TIME");goog.dom.TagName.TITLE=new goog.dom.TagName("TITLE");goog.dom.TagName.TR=new goog.dom.TagName("TR");goog.dom.TagName.TRACK=new goog.dom.TagName("TRACK");goog.dom.TagName.TT=new goog.dom.TagName("TT");
goog.dom.TagName.U=new goog.dom.TagName("U");goog.dom.TagName.UL=new goog.dom.TagName("UL");goog.dom.TagName.VAR=new goog.dom.TagName("VAR");goog.dom.TagName.VIDEO=new goog.dom.TagName("VIDEO");goog.dom.TagName.WBR=new goog.dom.TagName("WBR");goog.dom.tags={};goog.dom.tags.VOID_TAGS_={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};goog.dom.tags.isVoidTag=function(a){return!0===goog.dom.tags.VOID_TAGS_[a]};goog.html={};goog.html.trustedtypes={};goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#html"):null;goog.string={};goog.string.TypedString=function(){};goog.string.Const=function(a,b){this.stringConstValueWithSecurityContract__googStringSecurityPrivate_=a===goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_&&b||"";this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_=goog.string.Const.TYPE_MARKER_};goog.string.Const.prototype.implementsGoogStringTypedString=!0;goog.string.Const.prototype.getTypedStringValue=function(){return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_};
goog.DEBUG&&(goog.string.Const.prototype.toString=function(){return"Const{"+this.stringConstValueWithSecurityContract__googStringSecurityPrivate_+"}"});goog.string.Const.unwrap=function(a){if(a instanceof goog.string.Const&&a.constructor===goog.string.Const&&a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_===goog.string.Const.TYPE_MARKER_)return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;goog.asserts.fail("expected object of type Const, got '"+a+"'");return"type_error:Const"};
goog.string.Const.from=function(a){return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,a)};goog.string.Const.TYPE_MARKER_={};goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_={};goog.string.Const.EMPTY=goog.string.Const.from("");goog.html.SafeScript=function(){this.privateDoNotAccessOrElseSafeScriptWrappedValue_="";this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeScript.prototype.implementsGoogStringTypedString=!0;goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeScript.fromConstant=function(a){a=goog.string.Const.unwrap(a);return 0===a.length?goog.html.SafeScript.EMPTY:goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeScript.fromConstantAndArgs=function(a,b){for(var c=[],d=1;d<arguments.length;d++)c.push(goog.html.SafeScript.stringify_(arguments[d]));return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("("+goog.string.Const.unwrap(a)+")("+c.join(", ")+");")};goog.html.SafeScript.fromJson=function(a){return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a))};goog.html.SafeScript.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()};
goog.DEBUG&&(goog.html.SafeScript.prototype.toString=function(){return"SafeScript{"+this.privateDoNotAccessOrElseSafeScriptWrappedValue_+"}"});goog.html.SafeScript.unwrap=function(a){return goog.html.SafeScript.unwrapTrustedScript(a).toString()};
goog.html.SafeScript.unwrapTrustedScript=function(a){if(a instanceof goog.html.SafeScript&&a.constructor===goog.html.SafeScript&&a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;goog.asserts.fail("expected object of type SafeScript, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeScript"};
goog.html.SafeScript.stringify_=function(a){return JSON.stringify(a).replace(/</g,"\\x3c")};goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(a)};
goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeScriptWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a):a;return this};goog.html.SafeScript.EMPTY=goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");goog.fs={};goog.fs.url={};goog.fs.url.createObjectUrl=function(a){return goog.fs.url.getUrlObject_().createObjectURL(a)};goog.fs.url.revokeObjectUrl=function(a){goog.fs.url.getUrlObject_().revokeObjectURL(a)};goog.fs.url.UrlObject_=function(){};goog.fs.url.UrlObject_.prototype.createObjectURL=function(a){};goog.fs.url.UrlObject_.prototype.revokeObjectURL=function(a){};
goog.fs.url.getUrlObject_=function(){var a=goog.fs.url.findUrlObject_();if(null!=a)return a;throw Error("This browser doesn't seem to support blob URLs");};goog.fs.url.findUrlObject_=function(){return void 0!==goog.global.URL&&void 0!==goog.global.URL.createObjectURL?goog.global.URL:void 0!==goog.global.webkitURL&&void 0!==goog.global.webkitURL.createObjectURL?goog.global.webkitURL:void 0!==goog.global.createObjectURL?goog.global:null};
goog.fs.url.browserSupportsObjectUrls=function(){return null!=goog.fs.url.findUrlObject_()};goog.fs.blob={};goog.fs.blob.getBlob=function(a){var b=goog.global.BlobBuilder||goog.global.WebKitBlobBuilder;if(void 0!==b){b=new b;for(var c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments))};
goog.fs.blob.getBlobWithProperties=function(a,b,c){var d=goog.global.BlobBuilder||goog.global.WebKitBlobBuilder;if(void 0!==d){d=new d;for(var e=0;e<a.length;e++)d.append(a[e],c);return d.getBlob(b)}if(void 0!==goog.global.Blob)return d={},b&&(d.type=b),c&&(d.endings=c),new Blob(a,d);throw Error("This browser doesn't seem to support creating Blobs");};goog.i18n={};goog.i18n.bidi={};goog.i18n.bidi.FORCE_RTL=!1;
goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||("ar"==goog.LOCALE.substring(0,2).toLowerCase()||"fa"==goog.LOCALE.substring(0,2).toLowerCase()||"he"==goog.LOCALE.substring(0,2).toLowerCase()||"iw"==goog.LOCALE.substring(0,2).toLowerCase()||"ps"==goog.LOCALE.substring(0,2).toLowerCase()||"sd"==goog.LOCALE.substring(0,2).toLowerCase()||"ug"==goog.LOCALE.substring(0,2).toLowerCase()||"ur"==goog.LOCALE.substring(0,2).toLowerCase()||"yi"==goog.LOCALE.substring(0,2).toLowerCase())&&(2==goog.LOCALE.length||
"-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))||3<=goog.LOCALE.length&&"ckb"==goog.LOCALE.substring(0,3).toLowerCase()&&(3==goog.LOCALE.length||"-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))||7<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))&&("adlm"==goog.LOCALE.substring(3,7).toLowerCase()||"arab"==goog.LOCALE.substring(3,7).toLowerCase()||"hebr"==goog.LOCALE.substring(3,7).toLowerCase()||"nkoo"==goog.LOCALE.substring(3,
7).toLowerCase()||"rohg"==goog.LOCALE.substring(3,7).toLowerCase()||"thaa"==goog.LOCALE.substring(3,7).toLowerCase())||8<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))&&("adlm"==goog.LOCALE.substring(4,8).toLowerCase()||"arab"==goog.LOCALE.substring(4,8).toLowerCase()||"hebr"==goog.LOCALE.substring(4,8).toLowerCase()||"nkoo"==goog.LOCALE.substring(4,8).toLowerCase()||"rohg"==goog.LOCALE.substring(4,8).toLowerCase()||"thaa"==goog.LOCALE.substring(4,8).toLowerCase());
goog.i18n.bidi.Format={LRE:"\u202a",RLE:"\u202b",PDF:"\u202c",LRM:"\u200e",RLM:"\u200f"};goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0};goog.i18n.bidi.RIGHT="right";goog.i18n.bidi.LEFT="left";goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT;goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir=function(a,b){return"number"==typeof a?0<a?goog.i18n.bidi.Dir.LTR:0>a?goog.i18n.bidi.Dir.RTL:b?null:goog.i18n.bidi.Dir.NEUTRAL:null==a?null:a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};goog.i18n.bidi.ltrChars_="A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";goog.i18n.bidi.rtlChars_="\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g;goog.i18n.bidi.stripHtmlIfNeeded_=function(a,b){return b?a.replace(goog.i18n.bidi.htmlSkipReg_,""):a};goog.i18n.bidi.rtlCharReg_=new RegExp("["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.ltrCharReg_=new RegExp("["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.hasAnyRtl=function(a,b){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr=function(a,b){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.ltrRe_=new RegExp("^["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlRe_=new RegExp("^["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.isRtlChar=function(a){return goog.i18n.bidi.rtlRe_.test(a)};goog.i18n.bidi.isLtrChar=function(a){return goog.i18n.bidi.ltrRe_.test(a)};goog.i18n.bidi.isNeutralChar=function(a){return!goog.i18n.bidi.isLtrChar(a)&&!goog.i18n.bidi.isRtlChar(a)};
goog.i18n.bidi.ltrDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.startsWithRtl=function(a,b){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr=function(a,b){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr;goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/;goog.i18n.bidi.isNeutralText=function(a,b){a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b);return goog.i18n.bidi.isRequiredLtrRe_.test(a)||!goog.i18n.bidi.hasAnyLtr(a)&&!goog.i18n.bidi.hasAnyRtl(a)};
goog.i18n.bidi.ltrExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$");goog.i18n.bidi.rtlExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$");goog.i18n.bidi.endsWithLtr=function(a,b){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl=function(a,b){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl;goog.i18n.bidi.rtlLocalesRe_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;goog.i18n.bidi.isRtlLanguage=function(a){return goog.i18n.bidi.rtlLocalesRe_.test(a)};goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText=function(a,b){b=(void 0===b?goog.i18n.bidi.hasAnyRtl(a):b)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM;return a.replace(goog.i18n.bidi.bracketGuardTextRe_,b+"$&"+b)};goog.i18n.bidi.enforceRtlInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=rtl"):"\n<span dir=rtl>"+a+"</span>"};goog.i18n.bidi.enforceRtlInText=function(a){return goog.i18n.bidi.Format.RLE+a+goog.i18n.bidi.Format.PDF};
goog.i18n.bidi.enforceLtrInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=ltr"):"\n<span dir=ltr>"+a+"</span>"};goog.i18n.bidi.enforceLtrInText=function(a){return goog.i18n.bidi.Format.LRE+a+goog.i18n.bidi.Format.PDF};goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;goog.i18n.bidi.leftRe_=/left/gi;goog.i18n.bidi.rightRe_=/right/gi;goog.i18n.bidi.tempRe_=/%%%%/g;
goog.i18n.bidi.mirrorCSS=function(a){return a.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)};goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g;goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote=function(a){return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1\u05f3")};goog.i18n.bidi.wordSeparatorRe_=/\s+/;goog.i18n.bidi.hasNumeralsRe_=/[\d\u06f0-\u06f9]/;goog.i18n.bidi.rtlDetectionThreshold_=.4;
goog.i18n.bidi.estimateDirection=function(a,b){var c=0,d=0,e=!1;a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b).split(goog.i18n.bidi.wordSeparatorRe_);for(b=0;b<a.length;b++){var f=a[b];goog.i18n.bidi.startsWithRtl(f)?(c++,d++):goog.i18n.bidi.isRequiredLtrRe_.test(f)?e=!0:goog.i18n.bidi.hasAnyLtr(f)?d++:goog.i18n.bidi.hasNumeralsRe_.test(f)&&(e=!0)}return 0==d?e?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL:c/d>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};
goog.i18n.bidi.detectRtlDirectionality=function(a,b){return goog.i18n.bidi.estimateDirection(a,b)==goog.i18n.bidi.Dir.RTL};goog.i18n.bidi.setElementDirAndAlign=function(a,b){a&&(b=goog.i18n.bidi.toDir(b))&&(a.style.textAlign=b==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,a.dir=b==goog.i18n.bidi.Dir.RTL?"rtl":"ltr")};
goog.i18n.bidi.setElementDirByTextDirectionality=function(a,b){switch(goog.i18n.bidi.estimateDirection(b)){case goog.i18n.bidi.Dir.LTR:a.dir="ltr";break;case goog.i18n.bidi.Dir.RTL:a.dir="rtl";break;default:a.removeAttribute("dir")}};goog.i18n.bidi.DirectionalString=function(){};goog.html.TrustedResourceUrl=function(a,b){this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_=a===goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_&&b||"";this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString=!0;goog.html.TrustedResourceUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.TrustedResourceUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR};
goog.html.TrustedResourceUrl.prototype.cloneWithParams=function(a,b){var c=goog.html.TrustedResourceUrl.unwrap(this);c=goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c);var d=c[3]||"";return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c[1]+goog.html.TrustedResourceUrl.stringifyParams_("?",c[2]||"",a)+goog.html.TrustedResourceUrl.stringifyParams_("#",d,b))};
goog.DEBUG&&(goog.html.TrustedResourceUrl.prototype.toString=function(){return"TrustedResourceUrl{"+this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_+"}"});goog.html.TrustedResourceUrl.unwrap=function(a){return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString()};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL=function(a){if(a instanceof goog.html.TrustedResourceUrl&&a.constructor===goog.html.TrustedResourceUrl&&a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;goog.asserts.fail("expected object of type TrustedResourceUrl, got '"+a+"' of type "+goog.typeOf(a));return"type_error:TrustedResourceUrl"};
goog.html.TrustedResourceUrl.format=function(a,b){var c=goog.string.Const.unwrap(a);if(!goog.html.TrustedResourceUrl.BASE_URL_.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof goog.string.Const?goog.string.Const.unwrap(a):
encodeURIComponent(String(a))});return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.TrustedResourceUrl.FORMAT_MARKER_=/%{(\w+)}/g;goog.html.TrustedResourceUrl.BASE_URL_=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;goog.html.TrustedResourceUrl.URL_PARAM_PARSER_=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams=function(a,b,c,d){return goog.html.TrustedResourceUrl.format(a,b).cloneWithParams(c,d)};goog.html.TrustedResourceUrl.fromConstant=function(a){return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))};goog.html.TrustedResourceUrl.fromConstants=function(a){for(var b="",c=0;c<a.length;c++)b+=goog.string.Const.unwrap(a[c]);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)};
goog.html.TrustedResourceUrl.fromSafeScript=function(a){a=goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(a)],"text/javascript");a=goog.fs.url.createObjectUrl(a);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse=function(a){a=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a):a;return new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,a)};
goog.html.TrustedResourceUrl.stringifyParams_=function(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c){var e=c[d];e=Array.isArray(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b};goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_={};goog.string.internal={};goog.string.internal.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.internal.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.internal.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.internal.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.internal.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.internal.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.internal.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.internal.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.internal.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};goog.string.internal.caseInsensitiveCompare=function(a,b){a=String(a).toLowerCase();b=String(b).toLowerCase();return a<b?-1:a==b?0:1};
goog.string.internal.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.internal.htmlEscape=function(a,b){if(b)a=a.replace(goog.string.internal.AMP_RE_,"&amp;").replace(goog.string.internal.LT_RE_,"&lt;").replace(goog.string.internal.GT_RE_,"&gt;").replace(goog.string.internal.QUOT_RE_,"&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.internal.NULL_RE_,"&#0;");else{if(!goog.string.internal.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.internal.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.internal.LT_RE_,
"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.internal.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.internal.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(goog.string.internal.NULL_RE_,"&#0;"))}return a};goog.string.internal.AMP_RE_=/&/g;goog.string.internal.LT_RE_=/</g;goog.string.internal.GT_RE_=/>/g;goog.string.internal.QUOT_RE_=/"/g;goog.string.internal.SINGLE_QUOTE_RE_=/'/g;
goog.string.internal.NULL_RE_=/\x00/g;goog.string.internal.ALL_RE_=/[\x00&<>"']/;goog.string.internal.whitespaceEscape=function(a,b){return goog.string.internal.newLineToBr(a.replace(/  /g," &#160;"),b)};goog.string.internal.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.internal.caseInsensitiveContains=function(a,b){return goog.string.internal.contains(a.toLowerCase(),b.toLowerCase())};
goog.string.internal.compareVersions=function(a,b){var c=0;a=goog.string.internal.trim(String(a)).split(".");b=goog.string.internal.trim(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=0==f[1].length?0:parseInt(f[1],10);var h=0==g[1].length?0:parseInt(g[1],10);c=goog.string.internal.compareElements_(c,h)||goog.string.internal.compareElements_(0==
f[2].length,0==g[2].length)||goog.string.internal.compareElements_(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};goog.string.internal.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.html.SafeUrl=function(a,b){this.privateDoNotAccessOrElseSafeUrlWrappedValue_=a===goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_&&b||"";this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeUrl.INNOCUOUS_STRING="about:invalid#zClosurez";goog.html.SafeUrl.prototype.implementsGoogStringTypedString=!0;goog.html.SafeUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.SafeUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR};goog.DEBUG&&(goog.html.SafeUrl.prototype.toString=function(){return"SafeUrl{"+this.privateDoNotAccessOrElseSafeUrlWrappedValue_+"}"});
goog.html.SafeUrl.unwrap=function(a){if(a instanceof goog.html.SafeUrl&&a.constructor===goog.html.SafeUrl&&a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;goog.asserts.fail("expected object of type SafeUrl, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeUrl"};goog.html.SafeUrl.fromConstant=function(a){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))};
goog.html.SAFE_MIME_TYPE_PATTERN_=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;goog.html.SafeUrl.isSafeMimeType=function(a){return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a)};
goog.html.SafeUrl.fromBlob=function(a){a=goog.html.SafeUrl.isSafeMimeType(a.type)?goog.fs.url.createObjectUrl(a):goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromMediaSource=function(a){goog.asserts.assert("MediaSource"in goog.global,"No support for MediaSource");a=a instanceof MediaSource?goog.fs.url.createObjectUrl(a):goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.DATA_URL_PATTERN_=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;goog.html.SafeUrl.fromDataUrl=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(goog.html.DATA_URL_PATTERN_);b=b&&goog.html.SafeUrl.isSafeMimeType(b[1]);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b?a:goog.html.SafeUrl.INNOCUOUS_STRING)};goog.html.SafeUrl.fromTelUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"tel:")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SIP_URL_PATTERN_=/^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;goog.html.SafeUrl.fromSipUrl=function(a){goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a))||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromFacebookMessengerUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"fb-messenger://share")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.fromWhatsAppUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"whatsapp://send")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromSmsUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"sms:")&&goog.html.SafeUrl.isSmsUrlBodyValid_(a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.isSmsUrlBodyValid_=function(a){var b=a.indexOf("#");0<b&&(a=a.substring(0,b));b=a.match(/[?&]body=/gi);if(!b)return!0;if(1<b.length)return!1;a=a.match(/[?&]body=([^&]*)/)[1];if(!a)return!0;try{decodeURIComponent(a)}catch(c){return!1}return/^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a)};goog.html.SafeUrl.fromSshUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"ssh://")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.sanitizeChromeExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//,a,b)};goog.html.SafeUrl.sanitizeFirefoxExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//,a,b)};goog.html.SafeUrl.sanitizeEdgeExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//,a,b)};
goog.html.SafeUrl.sanitizeExtensionUrl_=function(a,b,c){(a=a.exec(b))?(a=a[1],-1==(c instanceof goog.string.Const?[goog.string.Const.unwrap(c)]:c.map(function(a){return goog.string.Const.unwrap(a)})).indexOf(a)&&(b=goog.html.SafeUrl.INNOCUOUS_STRING)):b=goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)};goog.html.SafeUrl.fromTrustedResourceUrl=function(a){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a))};
goog.html.SAFE_URL_PATTERN_=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;goog.html.SafeUrl.SAFE_URL_PATTERN=goog.html.SAFE_URL_PATTERN_;goog.html.SafeUrl.sanitize=function(a){if(a instanceof goog.html.SafeUrl)return a;a="object"==typeof a&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);goog.html.SAFE_URL_PATTERN_.test(a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.sanitizeAssertUnchanged=function(a,b){if(a instanceof goog.html.SafeUrl)return a;a="object"==typeof a&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);if(b&&/^data:/i.test(a)&&(b=goog.html.SafeUrl.fromDataUrl(a),b.getTypedStringValue()==a))return b;goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a),"%s does not match the safe URL pattern",a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse=function(a){return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,a)};goog.html.SafeUrl.ABOUT_BLANK=goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_={};goog.html.SafeStyle=function(){this.privateDoNotAccessOrElseSafeStyleWrappedValue_="";this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeStyle.prototype.implementsGoogStringTypedString=!0;goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.SafeStyle.fromConstant=function(a){a=goog.string.Const.unwrap(a);if(0===a.length)return goog.html.SafeStyle.EMPTY;goog.asserts.assert(goog.string.internal.endsWith(a,";"),"Last character of style string is not ';': "+a);goog.asserts.assert(goog.string.internal.contains(a,":"),"Style string must contain at least one ':', to specify a \"name: value\" pair: "+a);return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeStyle.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_};goog.DEBUG&&(goog.html.SafeStyle.prototype.toString=function(){return"SafeStyle{"+this.privateDoNotAccessOrElseSafeStyleWrappedValue_+"}"});
goog.html.SafeStyle.unwrap=function(a){if(a instanceof goog.html.SafeStyle&&a.constructor===goog.html.SafeStyle&&a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;goog.asserts.fail("expected object of type SafeStyle, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeStyle"};goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(a)};
goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeStyleWrappedValue_=a;return this};goog.html.SafeStyle.EMPTY=goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");goog.html.SafeStyle.INNOCUOUS_STRING="zClosurez";
goog.html.SafeStyle.create=function(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=Array.isArray(d)?goog.array.map(d,goog.html.SafeStyle.sanitizePropertyValue_).join(" "):goog.html.SafeStyle.sanitizePropertyValue_(d),b+=c+":"+d+";")}return b?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b):goog.html.SafeStyle.EMPTY};
goog.html.SafeStyle.sanitizePropertyValue_=function(a){if(a instanceof goog.html.SafeUrl)return'url("'+goog.html.SafeUrl.unwrap(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof goog.string.Const?goog.string.Const.unwrap(a):goog.html.SafeStyle.sanitizePropertyValueString_(String(a));if(/[{;}]/.test(a))throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[a]);return a};
goog.html.SafeStyle.sanitizePropertyValueString_=function(a){var b=a.replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.URL_RE_,"url");if(goog.html.SafeStyle.VALUE_RE_.test(b)){if(goog.html.SafeStyle.COMMENT_RE_.test(a))return goog.asserts.fail("String value disallows comments, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING;if(!goog.html.SafeStyle.hasBalancedQuotes_(a))return goog.asserts.fail("String value requires balanced quotes, got: "+
a),goog.html.SafeStyle.INNOCUOUS_STRING;if(!goog.html.SafeStyle.hasBalancedSquareBrackets_(a))return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING}else return goog.asserts.fail("String value allows only "+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+" and simple functions, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING;return goog.html.SafeStyle.sanitizeUrl_(a)};
goog.html.SafeStyle.hasBalancedQuotes_=function(a){for(var b=!0,c=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}return b&&c};goog.html.SafeStyle.hasBalancedSquareBrackets_=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};goog.html.SafeStyle.VALUE_ALLOWED_CHARS_="[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
goog.html.SafeStyle.VALUE_RE_=new RegExp("^"+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+"+$");goog.html.SafeStyle.URL_RE_=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;goog.html.SafeStyle.ALLOWED_FUNCTIONS_="calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
goog.html.SafeStyle.FUNCTIONS_RE_=new RegExp("\\b("+goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|")+")\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");goog.html.SafeStyle.COMMENT_RE_=/\/\*/;goog.html.SafeStyle.sanitizeUrl_=function(a){return a.replace(goog.html.SafeStyle.URL_RE_,function(a,c,d,e){var b="";d=d.replace(/^(['"])(.*)\1$/,function(a,c,d){b=c;return d});a=goog.html.SafeUrl.sanitize(d).getTypedStringValue();return c+b+a+b+e})};
goog.html.SafeStyle.concat=function(a){var b="",c=function(a){Array.isArray(a)?goog.array.forEach(a,c):b+=goog.html.SafeStyle.unwrap(a)};goog.array.forEach(arguments,c);return b?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b):goog.html.SafeStyle.EMPTY};goog.html.SafeStyleSheet=function(){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_="";this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString=!0;goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.SafeStyleSheet.createRule=function(a,b){if(goog.string.internal.contains(a,"<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);if(!goog.html.SafeStyleSheet.hasBalancedBrackets_(c))throw Error("() and [] in selector must be balanced, got: "+a);b instanceof goog.html.SafeStyle||(b=goog.html.SafeStyle.create(b));
a=a+"{"+goog.html.SafeStyle.unwrap(b).replace(/</g,"\\3C ")+"}";return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeStyleSheet.hasBalancedBrackets_=function(a){for(var b={"(":")","[":"]"},c=[],d=0;d<a.length;d++){var e=a[d];if(b[e])c.push(b[e]);else if(goog.object.contains(b,e)&&c.pop()!=e)return!1}return 0==c.length};
goog.html.SafeStyleSheet.concat=function(a){var b="",c=function(a){Array.isArray(a)?goog.array.forEach(a,c):b+=goog.html.SafeStyleSheet.unwrap(a)};goog.array.forEach(arguments,c);return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)};
goog.html.SafeStyleSheet.fromConstant=function(a){a=goog.string.Const.unwrap(a);if(0===a.length)return goog.html.SafeStyleSheet.EMPTY;goog.asserts.assert(!goog.string.internal.contains(a,"<"),"Forbidden '<' character in style sheet string: "+a);return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeStyleSheet.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_};
goog.DEBUG&&(goog.html.SafeStyleSheet.prototype.toString=function(){return"SafeStyleSheet{"+this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_+"}"});
goog.html.SafeStyleSheet.unwrap=function(a){if(a instanceof goog.html.SafeStyleSheet&&a.constructor===goog.html.SafeStyleSheet&&a.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;goog.asserts.fail("expected object of type SafeStyleSheet, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeStyleSheet"};
goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(a)};goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_=a;return this};goog.html.SafeStyleSheet.EMPTY=goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");goog.labs={};goog.labs.userAgent={};goog.labs.userAgent.util={};goog.labs.userAgent.util.getNativeUserAgentString_=function(){var a=goog.labs.userAgent.util.getNavigator_();return a&&(a=a.userAgent)?a:""};goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator};goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_();goog.labs.userAgent.util.setUserAgent=function(a){goog.labs.userAgent.util.userAgent_=a||goog.labs.userAgent.util.getNativeUserAgentString_()};
goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_};goog.labs.userAgent.util.matchUserAgent=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.contains(b,a)};goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.caseInsensitiveContains(b,a)};
goog.labs.userAgent.util.extractVersionTuples=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};goog.labs.userAgent.browser={};goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")};goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.browser.matchEdgeHtml_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};goog.labs.userAgent.browser.matchEdgeChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("Edg/")};
goog.labs.userAgent.browser.matchOperaChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("OPR")};goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")||goog.labs.userAgent.util.matchUserAgent("FxiOS")};
goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdgeHtml_()||goog.labs.userAgent.browser.matchEdgeChromium_()||goog.labs.userAgent.browser.matchOperaChromium_()||goog.labs.userAgent.browser.matchFirefox_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))};
goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")};goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&!goog.labs.userAgent.browser.matchFirefox_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")};
goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchEdgeHtml_()};goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())};
goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_;goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_;goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdgeHtml_;goog.labs.userAgent.browser.isEdgeChromium=goog.labs.userAgent.browser.matchEdgeChromium_;goog.labs.userAgent.browser.isOperaChromium=goog.labs.userAgent.browser.matchOperaChromium_;goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_;goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_;goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_;goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_;goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_;goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")};
goog.labs.userAgent.browser.getVersion=function(){function a(a){a=goog.array.find(a,d);return c[a]||""}var b=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(b);b=goog.labs.userAgent.util.extractVersionTuples(b);var c={};goog.array.forEach(b,function(a){c[a[0]]=a[1]});var d=goog.partial(goog.object.containsKey,c);return goog.labs.userAgent.browser.isOpera()?a(["Version","Opera"]):goog.labs.userAgent.browser.isEdge()?a(["Edge"]):
goog.labs.userAgent.browser.isEdgeChromium()?a(["Edg"]):goog.labs.userAgent.browser.isChrome()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""};goog.labs.userAgent.browser.isVersionOrHigher=function(a){return 0<=goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(),a)};
goog.labs.userAgent.browser.getIEVersion_=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};goog.html.SafeHtml=function(){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_="";this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;this.dir_=null};goog.html.SafeHtml.ENABLE_ERROR_MESSAGES=goog.DEBUG;goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE=!0;goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.SafeHtml.prototype.getDirection=function(){return this.dir_};
goog.html.SafeHtml.prototype.implementsGoogStringTypedString=!0;goog.html.SafeHtml.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()};goog.DEBUG&&(goog.html.SafeHtml.prototype.toString=function(){return"SafeHtml{"+this.privateDoNotAccessOrElseSafeHtmlWrappedValue_+"}"});goog.html.SafeHtml.unwrap=function(a){return goog.html.SafeHtml.unwrapTrustedHTML(a).toString()};
goog.html.SafeHtml.unwrapTrustedHTML=function(a){if(a instanceof goog.html.SafeHtml&&a.constructor===goog.html.SafeHtml&&a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;goog.asserts.fail("expected object of type SafeHtml, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeHtml"};
goog.html.SafeHtml.htmlEscape=function(a){if(a instanceof goog.html.SafeHtml)return a;var b="object"==typeof a,c=null;b&&a.implementsGoogI18nBidiDirectionalString&&(c=a.getDirection());a=b&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a),c)};
goog.html.SafeHtml.htmlEscapePreservingNewlines=function(a){if(a instanceof goog.html.SafeHtml)return a;a=goog.html.SafeHtml.htmlEscape(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a)),a.getDirection())};
goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces=function(a){if(a instanceof goog.html.SafeHtml)return a;a=goog.html.SafeHtml.htmlEscape(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a)),a.getDirection())};goog.html.SafeHtml.from=goog.html.SafeHtml.htmlEscape;
goog.html.SafeHtml.comment=function(a){return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--"+goog.string.internal.htmlEscape(a)+"--\x3e",null)};goog.html.SafeHtml.VALID_NAMES_IN_TAG_=/^[a-zA-Z0-9-]+$/;goog.html.SafeHtml.URL_ATTRIBUTES_={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
goog.html.SafeHtml.create=function(a,b,c){goog.html.SafeHtml.verifyTagName(String(a));return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a),b,c)};
goog.html.SafeHtml.verifyTagName=function(a){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"Invalid tag name <"+a+">.":"");if(a.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"Tag name <"+a+"> is not allowed for SafeHtml.":"");};
goog.html.SafeHtml.createIframe=function(a,b,c,d){a&&goog.html.TrustedResourceUrl.unwrap(a);var e={};e.src=a||null;e.srcdoc=b&&goog.html.SafeHtml.unwrap(b);a=goog.html.SafeHtml.combineAttributes(e,{sandbox:""},c);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",a,d)};
goog.html.SafeHtml.createSandboxIframe=function(a,b,c,d){if(!goog.html.SafeHtml.canUseSandboxIframe())throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"The browser does not support sandboxed iframes.":"");var e={};e.src=a?goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)):null;e.srcdoc=b||null;e.sandbox="";a=goog.html.SafeHtml.combineAttributes(e,{},c);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",a,d)};
goog.html.SafeHtml.canUseSandboxIframe=function(){return goog.global.HTMLIFrameElement&&"sandbox"in goog.global.HTMLIFrameElement.prototype};goog.html.SafeHtml.createScriptSrc=function(a,b){goog.html.TrustedResourceUrl.unwrap(a);a=goog.html.SafeHtml.combineAttributes({src:a},{},b);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",a)};
goog.html.SafeHtml.createScript=function(a,b){for(var c in b){var d=c.toLowerCase();if("language"==d||"src"==d||"text"==d||"type"==d)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Cannot set "'+d+'" attribute':"");}c="";a=goog.array.concat(a);for(d=0;d<a.length;d++)c+=goog.html.SafeScript.unwrap(a[d]);a=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c,goog.i18n.bidi.Dir.NEUTRAL);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",b,a)};
goog.html.SafeHtml.createStyle=function(a,b){b=goog.html.SafeHtml.combineAttributes({type:"text/css"},{},b);var c="";a=goog.array.concat(a);for(var d=0;d<a.length;d++)c+=goog.html.SafeStyleSheet.unwrap(a[d]);a=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c,goog.i18n.bidi.Dir.NEUTRAL);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",b,a)};
goog.html.SafeHtml.createMetaRefresh=function(a,b){a=goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a));(goog.labs.userAgent.browser.isIE()||goog.labs.userAgent.browser.isEdge())&&goog.string.internal.contains(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'");return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta",{"http-equiv":"refresh",content:(b||0)+"; url="+a})};
goog.html.SafeHtml.getAttrNameAndValue_=function(a,b,c){if(c instanceof goog.string.Const)c=goog.string.Const.unwrap(c);else if("style"==b.toLowerCase())if(goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)c=goog.html.SafeHtml.getStyleValue_(c);else throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "style" not supported.':"");else{if(/^on/i.test(b))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "'+b+'" requires goog.string.Const value, "'+c+'" given.':"");if(b.toLowerCase()in
goog.html.SafeHtml.URL_ATTRIBUTES_)if(c instanceof goog.html.TrustedResourceUrl)c=goog.html.TrustedResourceUrl.unwrap(c);else if(c instanceof goog.html.SafeUrl)c=goog.html.SafeUrl.unwrap(c);else if("string"===typeof c)c=goog.html.SafeUrl.sanitize(c).getTypedStringValue();else throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "'+b+'" on tag "'+a+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+c+'" given.':"");}c.implementsGoogStringTypedString&&(c=c.getTypedStringValue());
goog.asserts.assert("string"===typeof c||"number"===typeof c,"String or number value expected, got "+typeof c+" with value: "+c);return b+'="'+goog.string.internal.htmlEscape(String(c))+'"'};goog.html.SafeHtml.getStyleValue_=function(a){if(!goog.isObject(a))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof a+" given: "+a:"");a instanceof goog.html.SafeStyle||(a=goog.html.SafeStyle.create(a));return goog.html.SafeStyle.unwrap(a)};
goog.html.SafeHtml.createWithDir=function(a,b,c,d){b=goog.html.SafeHtml.create(b,c,d);b.dir_=a;return b};
goog.html.SafeHtml.join=function(a,b){a=goog.html.SafeHtml.htmlEscape(a);var c=a.getDirection(),d=[],e=function(a){Array.isArray(a)?goog.array.forEach(a,e):(a=goog.html.SafeHtml.htmlEscape(a),d.push(goog.html.SafeHtml.unwrap(a)),a=a.getDirection(),c==goog.i18n.bidi.Dir.NEUTRAL?c=a:a!=goog.i18n.bidi.Dir.NEUTRAL&&c!=a&&(c=null))};goog.array.forEach(b,e);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(goog.html.SafeHtml.unwrap(a)),c)};
goog.html.SafeHtml.concat=function(a){return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY,Array.prototype.slice.call(arguments))};goog.html.SafeHtml.concatWithDir=function(a,b){var c=goog.html.SafeHtml.concat(goog.array.slice(arguments,1));c.dir_=a;return c};goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse=function(a,b){return(new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(a,b)};
goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a,b){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a):a;this.dir_=b;return this};
goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse=function(a,b,c){var d=null;var e="<"+a+goog.html.SafeHtml.stringifyAttributes(a,b);null==c?c=[]:Array.isArray(c)||(c=[c]);goog.dom.tags.isVoidTag(a.toLowerCase())?(goog.asserts.assert(!c.length,"Void tag <"+a+"> does not allow content."),e+=">"):(d=goog.html.SafeHtml.concat(c),e+=">"+goog.html.SafeHtml.unwrap(d)+"</"+a+">",d=d.getDirection());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?goog.i18n.bidi.Dir.NEUTRAL:null);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e,
d)};goog.html.SafeHtml.stringifyAttributes=function(a,b){var c="";if(b)for(var d in b){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Invalid attribute name "'+d+'".':"");var e=b[d];null!=e&&(c+=" "+goog.html.SafeHtml.getAttrNameAndValue_(a,d,e))}return c};
goog.html.SafeHtml.combineAttributes=function(a,b,c){var d={},e;for(e in a)goog.asserts.assert(e.toLowerCase()==e,"Must be lower case"),d[e]=a[e];for(e in b)goog.asserts.assert(e.toLowerCase()==e,"Must be lower case"),d[e]=b[e];if(c)for(e in c){var f=e.toLowerCase();if(f in a)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Cannot override "'+f+'" attribute, got "'+e+'" with value "'+c[e]+'"':"");f in b&&delete d[f];d[e]=c[e]}return d};
goog.html.SafeHtml.DOCTYPE_HTML=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>",goog.i18n.bidi.Dir.NEUTRAL);goog.html.SafeHtml.EMPTY=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("",goog.i18n.bidi.Dir.NEUTRAL);goog.html.SafeHtml.BR=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>",goog.i18n.bidi.Dir.NEUTRAL);goog.html.uncheckedconversions={};goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract=function(a,b,c){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b,c||null)};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)};goog.dom.safe={};goog.dom.safe.InsertAdjacentHtmlPosition={AFTERBEGIN:"afterbegin",AFTEREND:"afterend",BEFOREBEGIN:"beforebegin",BEFOREEND:"beforeend"};goog.dom.safe.insertAdjacentHtml=function(a,b,c){a.insertAdjacentHTML(b,goog.html.SafeHtml.unwrapTrustedHTML(c))};goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
goog.dom.safe.isInnerHtmlCleanupRecursive_=goog.functions.cacheReturnValue(function(){if(goog.DEBUG&&"undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(goog.DEBUG&&!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);return!b.parentElement});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse=function(a,b){if(goog.dom.safe.isInnerHtmlCleanupRecursive_())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setInnerHtml=function(a,b){if(goog.asserts.ENABLE_ASSERTS){var c=a.tagName.toUpperCase();if(goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+a.tagName+".");}goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a,b)};goog.dom.safe.setOuterHtml=function(a,b){a.outerHTML=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setFormElementAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLFormElement(a).action=goog.html.SafeUrl.unwrap(b)};goog.dom.safe.setButtonFormAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLButtonElement(a).formAction=goog.html.SafeUrl.unwrap(b)};
goog.dom.safe.setInputFormAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLInputElement(a).formAction=goog.html.SafeUrl.unwrap(b)};goog.dom.safe.setStyle=function(a,b){a.style.cssText=goog.html.SafeStyle.unwrap(b)};goog.dom.safe.documentWrite=function(a,b){a.write(goog.html.SafeHtml.unwrapTrustedHTML(b))};
goog.dom.safe.setAnchorHref=function(a,b){goog.dom.asserts.assertIsHTMLAnchorElement(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.href=goog.html.SafeUrl.unwrap(b)};goog.dom.safe.setImageSrc=function(a,b){goog.dom.asserts.assertIsHTMLImageElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:image\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrap(b)};
goog.dom.safe.setAudioSrc=function(a,b){goog.dom.asserts.assertIsHTMLAudioElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:audio\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrap(b)};goog.dom.safe.setVideoSrc=function(a,b){goog.dom.asserts.assertIsHTMLVideoElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:video\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrap(b)};
goog.dom.safe.setEmbedSrc=function(a,b){goog.dom.asserts.assertIsHTMLEmbedElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b)};goog.dom.safe.setFrameSrc=function(a,b){goog.dom.asserts.assertIsHTMLFrameElement(a);a.src=goog.html.TrustedResourceUrl.unwrap(b)};goog.dom.safe.setIframeSrc=function(a,b){goog.dom.asserts.assertIsHTMLIFrameElement(a);a.src=goog.html.TrustedResourceUrl.unwrap(b)};
goog.dom.safe.setIframeSrcdoc=function(a,b){goog.dom.asserts.assertIsHTMLIFrameElement(a);a.srcdoc=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setLinkHrefAndRel=function(a,b,c){goog.dom.asserts.assertIsHTMLLinkElement(a);a.rel=c;goog.string.internal.caseInsensitiveContains(c,"stylesheet")?(goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),a.href=goog.html.TrustedResourceUrl.unwrap(b)):a.href=b instanceof goog.html.TrustedResourceUrl?goog.html.TrustedResourceUrl.unwrap(b):b instanceof goog.html.SafeUrl?goog.html.SafeUrl.unwrap(b):goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(b))};
goog.dom.safe.setObjectData=function(a,b){goog.dom.asserts.assertIsHTMLObjectElement(a);a.data=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b)};goog.dom.safe.setScriptSrc=function(a,b){goog.dom.asserts.assertIsHTMLScriptElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);(b=goog.getScriptNonce())&&a.setAttribute("nonce",b)};
goog.dom.safe.setScriptContent=function(a,b){goog.dom.asserts.assertIsHTMLScriptElement(a);a.text=goog.html.SafeScript.unwrapTrustedScript(b);(b=goog.getScriptNonce())&&a.setAttribute("nonce",b)};goog.dom.safe.setLocationHref=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.href=goog.html.SafeUrl.unwrap(b)};
goog.dom.safe.assignLocation=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.assign(goog.html.SafeUrl.unwrap(b))};goog.dom.safe.replaceLocation=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.replace(goog.html.SafeUrl.unwrap(b))};
goog.dom.safe.openInWindow=function(a,b,c,d,e){a=a instanceof goog.html.SafeUrl?a:goog.html.SafeUrl.sanitizeAssertUnchanged(a);b=b||goog.global;c=c instanceof goog.string.Const?goog.string.Const.unwrap(c):c||"";return b.open(goog.html.SafeUrl.unwrap(a),c,d,e)};goog.dom.safe.parseFromStringHtml=function(a,b){return goog.dom.safe.parseFromString(a,b,"text/html")};goog.dom.safe.parseFromString=function(a,b,c){return a.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b),c)};
goog.dom.safe.createImageFromBlob=function(a){if(!/^image\/.*/g.test(a.type))throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");var b=goog.global.URL.createObjectURL(a);a=new goog.global.Image;a.onload=function(){goog.global.URL.revokeObjectURL(b)};goog.dom.safe.setImageSrc(a,goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."),b));return a};goog.string.DETECT_DOUBLE_ESCAPING=!1;goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1;goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=goog.string.internal.startsWith;goog.string.endsWith=goog.string.internal.endsWith;goog.string.caseInsensitiveStartsWith=goog.string.internal.caseInsensitiveStartsWith;goog.string.caseInsensitiveEndsWith=goog.string.internal.caseInsensitiveEndsWith;goog.string.caseInsensitiveEquals=goog.string.internal.caseInsensitiveEquals;
goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmptyOrWhitespace=goog.string.internal.isEmptyOrWhitespace;goog.string.isEmptyString=function(a){return 0==a.length};goog.string.isEmpty=goog.string.isEmptyOrWhitespace;goog.string.isEmptyOrWhitespaceSafe=function(a){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a))};
goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe;goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};
goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=goog.string.internal.trim;
goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};goog.string.caseInsensitiveCompare=goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_=function(a,b,c){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var d=a.toLowerCase().match(c),e=b.toLowerCase().match(c),f=Math.min(d.length,e.length),g=0;g<f;g++){c=d[g];var h=e[g];if(c!=h)return a=parseInt(c,10),!isNaN(a)&&(b=parseInt(h,10),!isNaN(b)&&a-b)?a-b:c<h?-1:1}return d.length!=e.length?d.length-e.length:a<b?-1:1};goog.string.intAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\D+/g)};
goog.string.floatAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\.\d+|\D+/g)};goog.string.numerateCompare=goog.string.floatAwareCompare;goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=goog.string.internal.newLineToBr;
goog.string.htmlEscape=function(a,b){a=goog.string.internal.htmlEscape(a,b);goog.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(goog.string.E_RE_,"&#101;"));return a};goog.string.E_RE_=/e/g;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?!goog.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"&")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var d=b?b.createElement("div"):goog.global.document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var e=c[a];if(e)return e;"#"==b.charAt(0)&&(b=Number("0"+b.substr(1)),isNaN(b)||(e=String.fromCharCode(b)));e||(goog.dom.safe.setInnerHtml(d,goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."),
a+" ")),e=d.firstChild.nodeValue.slice(0,-1));return c[a]=e})};goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=c.charAt(0)||(c=Number("0"+c.substr(1)),isNaN(c))?a:String.fromCharCode(c)}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)};goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a.charCodeAt(0);if(31<b&&127>b)var c=a;else{if(256>b){if(c="\\x",16>b||256<b)c+="0"}else c="\\u",4096>b&&(c+="0");c+=b.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=c};goog.string.contains=goog.string.internal.contains;goog.string.caseInsensitiveContains=goog.string.internal.caseInsensitiveContains;
goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){return a.replace(b,"")};goog.string.removeAll=function(a,b){b=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(b,"")};goog.string.replaceAll=function(a,b,c){b=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(b,c.replace(/\$/g,"$$$$"))};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};
goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};goog.string.compareVersions=goog.string.internal.compareVersions;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;
goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmptyOrWhitespace(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){b="string"===typeof b?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};goog.string.capitalize=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};
goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return"string"===typeof a?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.string.lastComponent=function(a,b){if(b)"string"==typeof b&&(b=[b]);else return a;for(var c=-1,d=0;d<b.length;d++)if(""!=b[d]){var e=a.lastIndexOf(b[d]);e>c&&(c=e)}return-1==c?a:a.slice(c+1)};
goog.string.editDistance=function(a,b){var c=[],d=[];if(a==b)return 0;if(!a.length||!b.length)return Math.max(a.length,b.length);for(var e=0;e<b.length+1;e++)c[e]=e;for(e=0;e<a.length;e++){d[0]=e+1;for(var f=0;f<b.length;f++)d[f+1]=Math.min(d[f]+1,c[f+1]+1,c[f]+Number(a[e]!=b[f]));for(f=0;f<c.length;f++)c[f]=d[f]}return d[b.length]};goog.labs.userAgent.engine={};goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")};goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.engine.isEdge=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};
goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")&&!goog.labs.userAgent.engine.isEdge()};goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()&&!goog.labs.userAgent.engine.isEdge()};
goog.labs.userAgent.engine.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent();if(a){a=goog.labs.userAgent.util.extractVersionTuples(a);var b=goog.labs.userAgent.engine.getEngineTuple_(a);if(b)return"Gecko"==b[0]?goog.labs.userAgent.engine.getVersionForKey_(a,"Firefox"):b[1];a=a[0];var c;if(a&&(c=a[2])&&(c=/Trident\/([^\s;]+)/.exec(c)))return c[1]}return""};
goog.labs.userAgent.engine.getEngineTuple_=function(a){if(!goog.labs.userAgent.engine.isEdge())return a[1];for(var b=0;b<a.length;b++){var c=a[b];if("Edge"==c[0])return c}};goog.labs.userAgent.engine.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),a)};goog.labs.userAgent.engine.getVersionForKey_=function(a,b){return(a=goog.array.find(a,function(a){return b==a[0]}))&&a[1]||""};goog.labs.userAgent.platform={};goog.labs.userAgent.platform.isAndroid=function(){return goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.platform.isIpod=function(){return goog.labs.userAgent.util.matchUserAgent("iPod")};goog.labs.userAgent.platform.isIphone=function(){return goog.labs.userAgent.util.matchUserAgent("iPhone")&&!goog.labs.userAgent.util.matchUserAgent("iPod")&&!goog.labs.userAgent.util.matchUserAgent("iPad")};goog.labs.userAgent.platform.isIpad=function(){return goog.labs.userAgent.util.matchUserAgent("iPad")};
goog.labs.userAgent.platform.isIos=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpad()||goog.labs.userAgent.platform.isIpod()};goog.labs.userAgent.platform.isMacintosh=function(){return goog.labs.userAgent.util.matchUserAgent("Macintosh")};goog.labs.userAgent.platform.isLinux=function(){return goog.labs.userAgent.util.matchUserAgent("Linux")};goog.labs.userAgent.platform.isWindows=function(){return goog.labs.userAgent.util.matchUserAgent("Windows")};
goog.labs.userAgent.platform.isChromeOS=function(){return goog.labs.userAgent.util.matchUserAgent("CrOS")};goog.labs.userAgent.platform.isChromecast=function(){return goog.labs.userAgent.util.matchUserAgent("CrKey")};goog.labs.userAgent.platform.isKaiOS=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")};
goog.labs.userAgent.platform.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent(),b="";goog.labs.userAgent.platform.isWindows()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):goog.labs.userAgent.platform.isIos()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):goog.labs.userAgent.platform.isMacintosh()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):goog.labs.userAgent.platform.isKaiOS()?(b=/(?:KaiOS)\/(\S+)/i,
b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isAndroid()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isChromeOS()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);return b||""};goog.labs.userAgent.platform.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(),a)};goog.reflect={};goog.reflect.object=function(a,b){return b};goog.reflect.objectProperty=function(a,b){return a};goog.reflect.sinkValue=function(a){goog.reflect.sinkValue[" "](a);return a};goog.reflect.sinkValue[" "]=goog.nullFunction;goog.reflect.canAccessProperty=function(a,b){try{return goog.reflect.sinkValue(a[b]),!0}catch(c){}return!1};goog.reflect.cache=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_EDGE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()};
goog.userAgent.getNavigatorTyped=function(){return goog.global.navigator||null};goog.userAgent.getNavigator=function(){return goog.userAgent.getNavigatorTyped()};goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera();goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE();goog.userAgent.EDGE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_EDGE:goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE=goog.userAgent.EDGE||goog.userAgent.IE;goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit();goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")};
goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_();goog.userAgent.SAFARI=goog.userAgent.WEBKIT;goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigatorTyped();return a&&a.platform||""};goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;
goog.userAgent.ASSUME_IPAD=!1;goog.userAgent.ASSUME_IPOD=!1;goog.userAgent.ASSUME_KAIOS=!1;goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD;goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.labs.userAgent.platform.isWindows();goog.userAgent.isLegacyLinux_=function(){return goog.labs.userAgent.platform.isLinux()||goog.labs.userAgent.platform.isChromeOS()};goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.isLegacyLinux_();goog.userAgent.isX11_=function(){var a=goog.userAgent.getNavigatorTyped();return!!a&&goog.string.contains(a.appVersion||"","X11")};
goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_();goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.labs.userAgent.platform.isAndroid();goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.labs.userAgent.platform.isIphone();goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIpod();goog.userAgent.IOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIos();goog.userAgent.KAIOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_KAIOS:goog.labs.userAgent.platform.isKaiOS();
goog.userAgent.determineVersion_=function(){var a="",b=goog.userAgent.getVersionRegexResult_();b&&(a=b?b[1]:"");return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),null!=b&&b>parseFloat(a))?String(b):a};
goog.userAgent.getVersionRegexResult_=function(){var a=goog.userAgent.getUserAgentString();if(goog.userAgent.GECKO)return/rv:([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.EDGE)return/Edge\/([\d\.]+)/.exec(a);if(goog.userAgent.IE)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.WEBKIT)return/WebKit\/(\S+)/.exec(a);if(goog.userAgent.OPERA)return/(?:Version)[ \/]?(\S+)/.exec(a)};goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};
goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionOrHigherCache_={};goog.userAgent.isVersionOrHigher=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_,a,function(){return 0<=goog.string.compareVersions(goog.userAgent.VERSION,a)})};goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher=function(a){return Number(goog.userAgent.DOCUMENT_MODE)>=a};goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher;goog.userAgent.DOCUMENT_MODE=function(){if(goog.global.document&&goog.userAgent.IE){var a=goog.userAgent.getDocumentMode_();return a?a:parseInt(goog.userAgent.VERSION,10)||void 0}}();goog.userAgent.product={};goog.userAgent.product.ASSUME_FIREFOX=!1;goog.userAgent.product.ASSUME_IPHONE=!1;goog.userAgent.product.ASSUME_IPAD=!1;goog.userAgent.product.ASSUME_ANDROID=!1;goog.userAgent.product.ASSUME_CHROME=!1;goog.userAgent.product.ASSUME_SAFARI=!1;
goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI;goog.userAgent.product.OPERA=goog.userAgent.OPERA;goog.userAgent.product.IE=goog.userAgent.IE;goog.userAgent.product.EDGE=goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.labs.userAgent.browser.isFirefox();goog.userAgent.product.isIphoneOrIpod_=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpod()};goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.labs.userAgent.browser.isAndroidBrowser();goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_=function(){return goog.labs.userAgent.browser.isSafari()&&!goog.labs.userAgent.platform.isIos()};goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.isSafariDesktop_();goog.crypt.base64={};goog.crypt.base64.DEFAULT_ALPHABET_COMMON_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";goog.crypt.base64.ENCODED_VALS=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"+/=";goog.crypt.base64.ENCODED_VALS_WEBSAFE=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"-_.";goog.crypt.base64.Alphabet={DEFAULT:0,NO_PADDING:1,WEBSAFE:2,WEBSAFE_DOT_PADDING:3,WEBSAFE_NO_PADDING:4};goog.crypt.base64.paddingChars_="=.";
goog.crypt.base64.isPadding_=function(a){return goog.string.contains(goog.crypt.base64.paddingChars_,a)};goog.crypt.base64.byteToCharMaps_={};goog.crypt.base64.charToByteMap_=null;goog.crypt.base64.ASSUME_NATIVE_SUPPORT_=goog.userAgent.GECKO||goog.userAgent.WEBKIT&&!goog.userAgent.product.SAFARI||goog.userAgent.OPERA;goog.crypt.base64.HAS_NATIVE_ENCODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||"function"==typeof goog.global.btoa;
goog.crypt.base64.HAS_NATIVE_DECODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||!goog.userAgent.product.SAFARI&&!goog.userAgent.IE&&"function"==typeof goog.global.atob;
goog.crypt.base64.encodeByteArray=function(a,b){goog.asserts.assert(goog.isArrayLike(a),"encodeByteArray takes an array as a parameter");void 0===b&&(b=goog.crypt.base64.Alphabet.DEFAULT);goog.crypt.base64.init_();b=goog.crypt.base64.byteToCharMaps_[b];for(var c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,g=f?a[d+1]:0,h=d+2<a.length,k=h?a[d+2]:0,l=e>>2;e=(e&3)<<4|g>>4;g=(g&15)<<2|k>>6;k&=63;h||(k=64,f||(g=64));c.push(b[l],b[e],b[g]||"",b[k]||"")}return c.join("")};
goog.crypt.base64.encodeString=function(a,b){return goog.crypt.base64.HAS_NATIVE_ENCODE_&&!b?goog.global.btoa(a):goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a),b)};goog.crypt.base64.decodeString=function(a,b){if(goog.crypt.base64.HAS_NATIVE_DECODE_&&!b)return goog.global.atob(a);var c="";goog.crypt.base64.decodeStringInternal_(a,function(a){c+=String.fromCharCode(a)});return c};
goog.crypt.base64.decodeStringToByteArray=function(a,b){var c=[];goog.crypt.base64.decodeStringInternal_(a,function(a){c.push(a)});return c};
goog.crypt.base64.decodeStringToUint8Array=function(a){goog.asserts.assert(!goog.userAgent.IE||goog.userAgent.isVersionOrHigher("10"),"Browser does not support typed arrays");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):goog.crypt.base64.isPadding_(a[b-1])&&(c=goog.crypt.base64.isPadding_(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;goog.crypt.base64.decodeStringInternal_(a,function(a){d[e++]=a});return d.subarray(0,e)};
goog.crypt.base64.decodeStringInternal_=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=goog.crypt.base64.charToByteMap_[c];if(null!=e)return e;if(!goog.string.isEmptyOrWhitespace(c))throw Error("Unknown base64 encoding at char: "+c);}return b}goog.crypt.base64.init_();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}};
goog.crypt.base64.init_=function(){if(!goog.crypt.base64.charToByteMap_){goog.crypt.base64.charToByteMap_={};for(var a=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));goog.crypt.base64.byteToCharMaps_[c]=d;for(var e=0;e<d.length;e++){var f=d[e],g=goog.crypt.base64.charToByteMap_[f];void 0===g?goog.crypt.base64.charToByteMap_[f]=e:goog.asserts.assert(g===e)}}}};jspb.utils={};jspb.utils.split64Low=0;jspb.utils.split64High=0;jspb.utils.splitUint64=function(a){var b=a>>>0;a=Math.floor((a-b)/jspb.BinaryConstants.TWO_TO_32)>>>0;jspb.utils.split64Low=b;jspb.utils.split64High=a};jspb.utils.splitInt64=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/jspb.BinaryConstants.TWO_TO_32);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));jspb.utils.split64Low=c;jspb.utils.split64High=a};
jspb.utils.splitZigzag64=function(a){var b=0>a;a=2*Math.abs(a);jspb.utils.splitUint64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);jspb.utils.split64Low=a;jspb.utils.split64High=c};
jspb.utils.splitFloat32=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?(jspb.utils.split64High=0,jspb.utils.split64Low=0):(jspb.utils.split64High=0,jspb.utils.split64Low=2147483648);else if(isNaN(a))jspb.utils.split64High=0,jspb.utils.split64Low=2147483647;else if(a>jspb.BinaryConstants.FLOAT32_MAX)jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|2139095040)>>>0;else if(a<jspb.BinaryConstants.FLOAT32_MIN)a=Math.round(a/Math.pow(2,-149)),jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|
a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(a*jspb.BinaryConstants.TWO_TO_23);16777216<=a&&++c;jspb.utils.split64High=0;jspb.utils.split64Low=(b<<31|c+127<<23|a&8388607)>>>0}};
jspb.utils.splitFloat64=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)jspb.utils.split64High=0<1/a?0:2147483648,jspb.utils.split64Low=0;else if(isNaN(a))jspb.utils.split64High=2147483647,jspb.utils.split64Low=4294967295;else if(a>jspb.BinaryConstants.FLOAT64_MAX)jspb.utils.split64High=(b<<31|2146435072)>>>0,jspb.utils.split64Low=0;else if(a<jspb.BinaryConstants.FLOAT64_MIN){var c=a/Math.pow(2,-1074);a=c/jspb.BinaryConstants.TWO_TO_32;jspb.utils.split64High=(b<<31|a)>>>0;jspb.utils.split64Low=c>>>0}else{c=
a;var d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;c=a*Math.pow(2,-d);a=c*jspb.BinaryConstants.TWO_TO_20&1048575;c=c*jspb.BinaryConstants.TWO_TO_52>>>0;jspb.utils.split64High=(b<<31|d+1023<<20|a)>>>0;jspb.utils.split64Low=c}};
jspb.utils.splitHash64=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=a.charCodeAt(4),g=a.charCodeAt(5),h=a.charCodeAt(6);a=a.charCodeAt(7);jspb.utils.split64Low=b+(c<<8)+(d<<16)+(e<<24)>>>0;jspb.utils.split64High=f+(g<<8)+(h<<16)+(a<<24)>>>0};jspb.utils.joinUint64=function(a,b){return b*jspb.BinaryConstants.TWO_TO_32+(a>>>0)};
jspb.utils.joinInt64=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=jspb.utils.joinUint64(a,b);return c?-a:a};jspb.utils.toZigzag64=function(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)};jspb.utils.joinZigzag64=function(a,b){return jspb.utils.fromZigzag64(a,b,jspb.utils.joinInt64)};jspb.utils.fromZigzag64=function(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)};
jspb.utils.joinFloat32=function(a,b){b=2*(a>>31)+1;var c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))};jspb.utils.joinFloat64=function(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=jspb.BinaryConstants.TWO_TO_32*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+jspb.BinaryConstants.TWO_TO_52)};
jspb.utils.joinHash64=function(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)};jspb.utils.DIGITS="0123456789abcdef".split("");jspb.utils.ZERO_CHAR_CODE_=48;jspb.utils.A_CHAR_CODE_=97;
jspb.utils.joinUnsignedDecimalString=function(a,b){function c(a,b){a=a?String(a):"";return b?"0000000".slice(a.length)+a:a}if(2097151>=b)return""+jspb.utils.joinUint64(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)};
jspb.utils.joinSignedDecimalString=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=jspb.utils.joinUnsignedDecimalString(a,b);return c?"-"+a:a};jspb.utils.hash64ToDecimalString=function(a,b){jspb.utils.splitHash64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;return b?jspb.utils.joinSignedDecimalString(a,c):jspb.utils.joinUnsignedDecimalString(a,c)};
jspb.utils.hash64ArrayToDecimalStrings=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=jspb.utils.hash64ToDecimalString(a[d],b);return c};
jspb.utils.decimalStringToHash64=function(a){function b(a,b){for(var c=0;8>c&&(1!==a||0<b);c++)b=a*e[c]+b,e[c]=b&255,b>>>=8}function c(){for(var a=0;8>a;a++)e[a]=~e[a]&255}jspb.asserts.assert(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var e=[0,0,0,0,0,0,0,0],f=0;f<a.length;f++)b(10,a.charCodeAt(f)-jspb.utils.ZERO_CHAR_CODE_);d&&(c(),b(1,1));return goog.crypt.byteArrayToString(e)};jspb.utils.splitDecimalString=function(a){jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a))};
jspb.utils.toHexDigit_=function(a){return String.fromCharCode(10>a?jspb.utils.ZERO_CHAR_CODE_+a:jspb.utils.A_CHAR_CODE_-10+a)};jspb.utils.fromHexCharCode_=function(a){return a>=jspb.utils.A_CHAR_CODE_?a-jspb.utils.A_CHAR_CODE_+10:a-jspb.utils.ZERO_CHAR_CODE_};jspb.utils.hash64ToHexString=function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=jspb.utils.toHexDigit_(d>>4);b[2*c+3]=jspb.utils.toHexDigit_(d&15)}return b.join("")};
jspb.utils.hexStringToHash64=function(a){a=a.toLowerCase();jspb.asserts.assert(18==a.length);jspb.asserts.assert("0"==a[0]);jspb.asserts.assert("x"==a[1]);for(var b="",c=0;8>c;c++){var d=jspb.utils.fromHexCharCode_(a.charCodeAt(2*c+2)),e=jspb.utils.fromHexCharCode_(a.charCodeAt(2*c+3));b=String.fromCharCode(16*d+e)+b}return b};
jspb.utils.hash64ToNumber=function(a,b){jspb.utils.splitHash64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;return b?jspb.utils.joinInt64(a,c):jspb.utils.joinUint64(a,c)};jspb.utils.numberToHash64=function(a){jspb.utils.splitInt64(a);return jspb.utils.joinHash64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.utils.countVarints=function(a,b,c){for(var d=0,e=b;e<c;e++)d+=a[e]>>7;return c-b-d};
jspb.utils.countVarintFields=function(a,b,c,d){var e=0;d=8*d+jspb.BinaryConstants.WireType.VARINT;if(128>d)for(;b<c&&a[b++]==d;)for(e++;;){var f=a[b++];if(0==(f&128))break}else for(;b<c;){for(f=d;128<f;){if(a[b]!=(f&127|128))return e;b++;f>>=7}if(a[b++]!=f)break;for(e++;f=a[b++],0!=(f&128););}return e};jspb.utils.countFixedFields_=function(a,b,c,d,e){var f=0;if(128>d)for(;b<c&&a[b++]==d;)f++,b+=e;else for(;b<c;){for(var g=d;128<g;){if(a[b++]!=(g&127|128))return f;g>>=7}if(a[b++]!=g)break;f++;b+=e}return f};
jspb.utils.countFixed32Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED32,4)};jspb.utils.countFixed64Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED64,8)};
jspb.utils.countDelimitedFields=function(a,b,c,d){var e=0;for(d=8*d+jspb.BinaryConstants.WireType.DELIMITED;b<c;){for(var f=d;128<f;){if(a[b++]!=(f&127|128))return e;f>>=7}if(a[b++]!=f)break;e++;for(var g=0,h=1;f=a[b++],g+=(f&127)*h,h*=128,0!=(f&128););b+=g}return e};jspb.utils.debugBytesToTextFormat=function(a){var b='"';if(a){a=jspb.utils.byteSourceToUint8Array(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'};
jspb.utils.debugScalarToTextFormat=function(a){return"string"===typeof a?goog.string.quote(a):a.toString()};jspb.utils.stringToByteArray=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b};
jspb.utils.byteSourceToUint8Array=function(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer||a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return goog.crypt.base64.decodeStringToUint8Array(a);if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);jspb.asserts.fail("Type not convertible to Uint8Array.");return new Uint8Array(0)};jspb.BinaryDecoder=function(a,b,c){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1;a&&this.setBlock(a,b,c)};jspb.BinaryDecoder.instanceCache_=[];jspb.BinaryDecoder.alloc=function(a,b,c){if(jspb.BinaryDecoder.instanceCache_.length){var d=jspb.BinaryDecoder.instanceCache_.pop();a&&d.setBlock(a,b,c);return d}return new jspb.BinaryDecoder(a,b,c)};jspb.BinaryDecoder.prototype.free=function(){this.clear();100>jspb.BinaryDecoder.instanceCache_.length&&jspb.BinaryDecoder.instanceCache_.push(this)};
jspb.BinaryDecoder.prototype.clone=function(){return jspb.BinaryDecoder.alloc(this.bytes_,this.start_,this.end_-this.start_)};jspb.BinaryDecoder.prototype.clear=function(){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1};jspb.BinaryDecoder.prototype.getBuffer=function(){return this.bytes_};
jspb.BinaryDecoder.prototype.setBlock=function(a,b,c){this.bytes_=jspb.utils.byteSourceToUint8Array(a);this.start_=void 0!==b?b:0;this.end_=void 0!==c?this.start_+c:this.bytes_.length;this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getEnd=function(){return this.end_};jspb.BinaryDecoder.prototype.setEnd=function(a){this.end_=a};jspb.BinaryDecoder.prototype.reset=function(){this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getCursor=function(){return this.cursor_};
jspb.BinaryDecoder.prototype.setCursor=function(a){this.cursor_=a};jspb.BinaryDecoder.prototype.advance=function(a){this.cursor_+=a;jspb.asserts.assert(this.cursor_<=this.end_)};jspb.BinaryDecoder.prototype.atEnd=function(){return this.cursor_==this.end_};jspb.BinaryDecoder.prototype.pastEnd=function(){return this.cursor_>this.end_};jspb.BinaryDecoder.prototype.getError=function(){return this.error_||0>this.cursor_||this.cursor_>this.end_};
jspb.BinaryDecoder.prototype.readSplitVarint64=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=this.bytes_[this.cursor_++],c|=(b&127)<<7*e;128<=b&&(b=this.bytes_[this.cursor_++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=this.bytes_[this.cursor_++],d|=(b&127)<<7*e+3;if(128>b)return a(c>>>0,d>>>0);jspb.asserts.fail("Failed to read varint, encoding is invalid.");this.error_=!0};
jspb.BinaryDecoder.prototype.readSplitZigzagVarint64=function(a){return this.readSplitVarint64(function(b,c){return jspb.utils.fromZigzag64(b,c,a)})};jspb.BinaryDecoder.prototype.readSplitFixed64=function(a){var b=this.bytes_,c=this.cursor_;this.cursor_+=8;for(var d=0,e=0,f=c+7;f>=c;f--)d=d<<8|b[f],e=e<<8|b[f+4];return a(d,e)};jspb.BinaryDecoder.prototype.skipVarint=function(){for(;this.bytes_[this.cursor_]&128;)this.cursor_++;this.cursor_++};
jspb.BinaryDecoder.prototype.unskipVarint=function(a){for(;128<a;)this.cursor_--,a>>>=7;this.cursor_--};
jspb.BinaryDecoder.prototype.readUnsignedVarint32=function(){var a=this.bytes_;var b=a[this.cursor_+0];var c=b&127;if(128>b)return this.cursor_+=1,jspb.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+1];c|=(b&127)<<7;if(128>b)return this.cursor_+=2,jspb.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+2];c|=(b&127)<<14;if(128>b)return this.cursor_+=3,jspb.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+3];c|=(b&127)<<21;if(128>b)return this.cursor_+=4,jspb.asserts.assert(this.cursor_<=
this.end_),c;b=a[this.cursor_+4];c|=(b&15)<<28;if(128>b)return this.cursor_+=5,jspb.asserts.assert(this.cursor_<=this.end_),c>>>0;this.cursor_+=5;128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&jspb.asserts.assert(!1);jspb.asserts.assert(this.cursor_<=this.end_);return c};jspb.BinaryDecoder.prototype.readSignedVarint32=function(){return~~this.readUnsignedVarint32()};jspb.BinaryDecoder.prototype.readUnsignedVarint32String=function(){return this.readUnsignedVarint32().toString()};
jspb.BinaryDecoder.prototype.readSignedVarint32String=function(){return this.readSignedVarint32().toString()};jspb.BinaryDecoder.prototype.readZigzagVarint32=function(){var a=this.readUnsignedVarint32();return a>>>1^-(a&1)};jspb.BinaryDecoder.prototype.readUnsignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinUint64)};jspb.BinaryDecoder.prototype.readUnsignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)};
jspb.BinaryDecoder.prototype.readSignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinInt64)};jspb.BinaryDecoder.prototype.readSignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)};jspb.BinaryDecoder.prototype.readZigzagVarint64=function(){return this.readSplitVarint64(jspb.utils.joinZigzag64)};jspb.BinaryDecoder.prototype.readZigzagVarintHash64=function(){return this.readSplitZigzagVarint64(jspb.utils.joinHash64)};
jspb.BinaryDecoder.prototype.readZigzagVarint64String=function(){return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)};jspb.BinaryDecoder.prototype.readUint8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;jspb.asserts.assert(this.cursor_<=this.end_);return a};jspb.BinaryDecoder.prototype.readUint16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;jspb.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8};
jspb.BinaryDecoder.prototype.readUint32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;jspb.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8|c<<16|d<<24)>>>0};jspb.BinaryDecoder.prototype.readUint64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUint64(a,b)};
jspb.BinaryDecoder.prototype.readUint64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUnsignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readInt8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;jspb.asserts.assert(this.cursor_<=this.end_);return a<<24>>24};
jspb.BinaryDecoder.prototype.readInt16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;jspb.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8)<<16>>16};jspb.BinaryDecoder.prototype.readInt32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;jspb.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8|c<<16|d<<24};
jspb.BinaryDecoder.prototype.readInt64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinInt64(a,b)};jspb.BinaryDecoder.prototype.readInt64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinSignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readFloat=function(){var a=this.readUint32();return jspb.utils.joinFloat32(a,0)};
jspb.BinaryDecoder.prototype.readDouble=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinFloat64(a,b)};jspb.BinaryDecoder.prototype.readBool=function(){return!!this.bytes_[this.cursor_++]};jspb.BinaryDecoder.prototype.readEnum=function(){return this.readSignedVarint32()};
jspb.BinaryDecoder.prototype.readString=function(a){var b=this.bytes_,c=this.cursor_;a=c+a;for(var d=[],e="";c<a;){var f=b[c++];if(128>f)d.push(f);else if(192>f)continue;else if(224>f){var g=b[c++];d.push((f&31)<<6|g&63)}else if(240>f){g=b[c++];var h=b[c++];d.push((f&15)<<12|(g&63)<<6|h&63)}else if(248>f){g=b[c++];h=b[c++];var k=b[c++];f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63;f-=65536;d.push((f>>10&1023)+55296,(f&1023)+56320)}8192<=d.length&&(e+=String.fromCharCode.apply(null,d),d.length=0)}e+=goog.crypt.byteArrayToString(d);
this.cursor_=c;return e};jspb.BinaryDecoder.prototype.readStringWithLength=function(){var a=this.readUnsignedVarint32();return this.readString(a)};jspb.BinaryDecoder.prototype.readBytes=function(a){if(0>a||this.cursor_+a>this.bytes_.length)return this.error_=!0,jspb.asserts.fail("Invalid byte length!"),new Uint8Array(0);var b=this.bytes_.subarray(this.cursor_,this.cursor_+a);this.cursor_+=a;jspb.asserts.assert(this.cursor_<=this.end_);return b};jspb.BinaryDecoder.prototype.readVarintHash64=function(){return this.readSplitVarint64(jspb.utils.joinHash64)};
jspb.BinaryDecoder.prototype.readFixedHash64=function(){var a=this.bytes_,b=this.cursor_,c=a[b+0],d=a[b+1],e=a[b+2],f=a[b+3],g=a[b+4],h=a[b+5],k=a[b+6];a=a[b+7];this.cursor_+=8;return String.fromCharCode(c,d,e,f,g,h,k,a)};jspb.BinaryReader=function(a,b,c){this.decoder_=jspb.BinaryDecoder.alloc(a,b,c);this.fieldCursor_=this.decoder_.getCursor();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null};jspb.BinaryReader.instanceCache_=[];
jspb.BinaryReader.alloc=function(a,b,c){if(jspb.BinaryReader.instanceCache_.length){var d=jspb.BinaryReader.instanceCache_.pop();a&&d.decoder_.setBlock(a,b,c);return d}return new jspb.BinaryReader(a,b,c)};jspb.BinaryReader.prototype.alloc=jspb.BinaryReader.alloc;
jspb.BinaryReader.prototype.free=function(){this.decoder_.clear();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null;100>jspb.BinaryReader.instanceCache_.length&&jspb.BinaryReader.instanceCache_.push(this)};jspb.BinaryReader.prototype.getFieldCursor=function(){return this.fieldCursor_};jspb.BinaryReader.prototype.getCursor=function(){return this.decoder_.getCursor()};
jspb.BinaryReader.prototype.getBuffer=function(){return this.decoder_.getBuffer()};jspb.BinaryReader.prototype.getFieldNumber=function(){return this.nextField_};goog.exportProperty(jspb.BinaryReader.prototype,"getFieldNumber",jspb.BinaryReader.prototype.getFieldNumber);jspb.BinaryReader.prototype.getWireType=function(){return this.nextWireType_};jspb.BinaryReader.prototype.isDelimited=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED};
goog.exportProperty(jspb.BinaryReader.prototype,"isDelimited",jspb.BinaryReader.prototype.isDelimited);jspb.BinaryReader.prototype.isEndGroup=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP};goog.exportProperty(jspb.BinaryReader.prototype,"isEndGroup",jspb.BinaryReader.prototype.isEndGroup);jspb.BinaryReader.prototype.getError=function(){return this.error_||this.decoder_.getError()};
jspb.BinaryReader.prototype.setBlock=function(a,b,c){this.decoder_.setBlock(a,b,c);this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.reset=function(){this.decoder_.reset();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.advance=function(a){this.decoder_.advance(a)};
jspb.BinaryReader.prototype.nextField=function(){if(this.decoder_.atEnd())return!1;if(this.getError())return jspb.asserts.fail("Decoder hit an error"),!1;this.fieldCursor_=this.decoder_.getCursor();var a=this.decoder_.readUnsignedVarint32(),b=a>>>3;a&=7;if(a!=jspb.BinaryConstants.WireType.VARINT&&a!=jspb.BinaryConstants.WireType.FIXED32&&a!=jspb.BinaryConstants.WireType.FIXED64&&a!=jspb.BinaryConstants.WireType.DELIMITED&&a!=jspb.BinaryConstants.WireType.START_GROUP&&a!=jspb.BinaryConstants.WireType.END_GROUP)return jspb.asserts.fail("Invalid wire type: %s (at position %s)",
a,this.fieldCursor_),this.error_=!0,!1;this.nextField_=b;this.nextWireType_=a;return!0};goog.exportProperty(jspb.BinaryReader.prototype,"nextField",jspb.BinaryReader.prototype.nextField);jspb.BinaryReader.prototype.unskipHeader=function(){this.decoder_.unskipVarint(this.nextField_<<3|this.nextWireType_)};jspb.BinaryReader.prototype.skipMatchingFields=function(){var a=this.nextField_;for(this.unskipHeader();this.nextField()&&this.getFieldNumber()==a;)this.skipField();this.decoder_.atEnd()||this.unskipHeader()};
jspb.BinaryReader.prototype.skipVarintField=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.VARINT?(jspb.asserts.fail("Invalid wire type for skipVarintField"),this.skipField()):this.decoder_.skipVarint()};jspb.BinaryReader.prototype.skipDelimitedField=function(){if(this.nextWireType_!=jspb.BinaryConstants.WireType.DELIMITED)jspb.asserts.fail("Invalid wire type for skipDelimitedField"),this.skipField();else{var a=this.decoder_.readUnsignedVarint32();this.decoder_.advance(a)}};
jspb.BinaryReader.prototype.skipFixed32Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED32?(jspb.asserts.fail("Invalid wire type for skipFixed32Field"),this.skipField()):this.decoder_.advance(4)};jspb.BinaryReader.prototype.skipFixed64Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED64?(jspb.asserts.fail("Invalid wire type for skipFixed64Field"),this.skipField()):this.decoder_.advance(8)};
jspb.BinaryReader.prototype.skipGroup=function(){var a=this.nextField_;do{if(!this.nextField()){jspb.asserts.fail("Unmatched start-group tag: stream EOF");this.error_=!0;break}if(this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP){this.nextField_!=a&&(jspb.asserts.fail("Unmatched end-group tag"),this.error_=!0);break}this.skipField()}while(1)};
jspb.BinaryReader.prototype.skipField=function(){switch(this.nextWireType_){case jspb.BinaryConstants.WireType.VARINT:this.skipVarintField();break;case jspb.BinaryConstants.WireType.FIXED64:this.skipFixed64Field();break;case jspb.BinaryConstants.WireType.DELIMITED:this.skipDelimitedField();break;case jspb.BinaryConstants.WireType.FIXED32:this.skipFixed32Field();break;case jspb.BinaryConstants.WireType.START_GROUP:this.skipGroup();break;default:jspb.asserts.fail("Invalid wire encoding for field.")}};
jspb.BinaryReader.prototype.registerReadCallback=function(a,b){null===this.readCallbacks_&&(this.readCallbacks_={});jspb.asserts.assert(!this.readCallbacks_[a]);this.readCallbacks_[a]=b};jspb.BinaryReader.prototype.runReadCallback=function(a){jspb.asserts.assert(null!==this.readCallbacks_);a=this.readCallbacks_[a];jspb.asserts.assert(a);return a(this)};
jspb.BinaryReader.prototype.readAny=function(a){this.nextWireType_=jspb.BinaryConstants.FieldTypeToWireType(a);var b=jspb.BinaryConstants.FieldType;switch(a){case b.DOUBLE:return this.readDouble();case b.FLOAT:return this.readFloat();case b.INT64:return this.readInt64();case b.UINT64:return this.readUint64();case b.INT32:return this.readInt32();case b.FIXED64:return this.readFixed64();case b.FIXED32:return this.readFixed32();case b.BOOL:return this.readBool();case b.STRING:return this.readString();
case b.GROUP:jspb.asserts.fail("Group field type not supported in readAny()");case b.MESSAGE:jspb.asserts.fail("Message field type not supported in readAny()");case b.BYTES:return this.readBytes();case b.UINT32:return this.readUint32();case b.ENUM:return this.readEnum();case b.SFIXED32:return this.readSfixed32();case b.SFIXED64:return this.readSfixed64();case b.SINT32:return this.readSint32();case b.SINT64:return this.readSint64();case b.FHASH64:return this.readFixedHash64();case b.VHASH64:return this.readVarintHash64();
default:jspb.asserts.fail("Invalid field type in readAny()")}return 0};jspb.BinaryReader.prototype.readMessage=function(a,b){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var c=this.decoder_.getEnd(),d=this.decoder_.readUnsignedVarint32();d=this.decoder_.getCursor()+d;this.decoder_.setEnd(d);b(a,this);this.decoder_.setCursor(d);this.decoder_.setEnd(c)};goog.exportProperty(jspb.BinaryReader.prototype,"readMessage",jspb.BinaryReader.prototype.readMessage);
jspb.BinaryReader.prototype.readGroup=function(a,b,c){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP);jspb.asserts.assert(this.nextField_==a);c(b,this);this.error_||this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP||(jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"),this.error_=!0)};goog.exportProperty(jspb.BinaryReader.prototype,"readGroup",jspb.BinaryReader.prototype.readGroup);
jspb.BinaryReader.prototype.getFieldDecoder=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor(),c=b+a;a=jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(),b,a);this.decoder_.setCursor(c);return a};jspb.BinaryReader.prototype.readInt32=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32()};
goog.exportProperty(jspb.BinaryReader.prototype,"readInt32",jspb.BinaryReader.prototype.readInt32);jspb.BinaryReader.prototype.readInt32String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32String()};jspb.BinaryReader.prototype.readInt64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};
goog.exportProperty(jspb.BinaryReader.prototype,"readInt64",jspb.BinaryReader.prototype.readInt64);jspb.BinaryReader.prototype.readInt64String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64String()};jspb.BinaryReader.prototype.readUint32=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32()};
goog.exportProperty(jspb.BinaryReader.prototype,"readUint32",jspb.BinaryReader.prototype.readUint32);jspb.BinaryReader.prototype.readUint32String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32String()};jspb.BinaryReader.prototype.readUint64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64()};
goog.exportProperty(jspb.BinaryReader.prototype,"readUint64",jspb.BinaryReader.prototype.readUint64);jspb.BinaryReader.prototype.readUint64String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64String()};jspb.BinaryReader.prototype.readSint32=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint32()};
goog.exportProperty(jspb.BinaryReader.prototype,"readSint32",jspb.BinaryReader.prototype.readSint32);jspb.BinaryReader.prototype.readSint64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64()};goog.exportProperty(jspb.BinaryReader.prototype,"readSint64",jspb.BinaryReader.prototype.readSint64);
jspb.BinaryReader.prototype.readSint64String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64String()};jspb.BinaryReader.prototype.readFixed32=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readUint32()};goog.exportProperty(jspb.BinaryReader.prototype,"readFixed32",jspb.BinaryReader.prototype.readFixed32);
jspb.BinaryReader.prototype.readFixed64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64()};goog.exportProperty(jspb.BinaryReader.prototype,"readFixed64",jspb.BinaryReader.prototype.readFixed64);jspb.BinaryReader.prototype.readFixed64String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64String()};
jspb.BinaryReader.prototype.readSfixed32=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32()};goog.exportProperty(jspb.BinaryReader.prototype,"readSfixed32",jspb.BinaryReader.prototype.readSfixed32);jspb.BinaryReader.prototype.readSfixed32String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32().toString()};
jspb.BinaryReader.prototype.readSfixed64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64()};goog.exportProperty(jspb.BinaryReader.prototype,"readSfixed64",jspb.BinaryReader.prototype.readSfixed64);jspb.BinaryReader.prototype.readSfixed64String=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64String()};
jspb.BinaryReader.prototype.readFloat=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readFloat()};goog.exportProperty(jspb.BinaryReader.prototype,"readFloat",jspb.BinaryReader.prototype.readFloat);jspb.BinaryReader.prototype.readDouble=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readDouble()};goog.exportProperty(jspb.BinaryReader.prototype,"readDouble",jspb.BinaryReader.prototype.readDouble);
jspb.BinaryReader.prototype.readBool=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return!!this.decoder_.readUnsignedVarint32()};goog.exportProperty(jspb.BinaryReader.prototype,"readBool",jspb.BinaryReader.prototype.readBool);jspb.BinaryReader.prototype.readEnum=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};goog.exportProperty(jspb.BinaryReader.prototype,"readEnum",jspb.BinaryReader.prototype.readEnum);
jspb.BinaryReader.prototype.readString=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readString(a)};goog.exportProperty(jspb.BinaryReader.prototype,"readString",jspb.BinaryReader.prototype.readString);jspb.BinaryReader.prototype.readBytes=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readBytes(a)};
goog.exportProperty(jspb.BinaryReader.prototype,"readBytes",jspb.BinaryReader.prototype.readBytes);jspb.BinaryReader.prototype.readVarintHash64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readVarintHash64()};jspb.BinaryReader.prototype.readSintHash64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarintHash64()};
jspb.BinaryReader.prototype.readSplitVarint64=function(a){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSplitVarint64(a)};jspb.BinaryReader.prototype.readSplitZigzagVarint64=function(a){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSplitVarint64(function(b,c){return jspb.utils.fromZigzag64(b,c,a)})};
jspb.BinaryReader.prototype.readFixedHash64=function(){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readFixedHash64()};jspb.BinaryReader.prototype.readSplitFixed64=function(a){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readSplitFixed64(a)};
jspb.BinaryReader.prototype.readPackedField_=function(a){jspb.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var b=this.decoder_.readUnsignedVarint32();b=this.decoder_.getCursor()+b;for(var c=[];this.decoder_.getCursor()<b;)c.push(a.call(this.decoder_));return c};jspb.BinaryReader.prototype.readPackedInt32=function(){return this.readPackedField_(this.decoder_.readSignedVarint32)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedInt32",jspb.BinaryReader.prototype.readPackedInt32);
jspb.BinaryReader.prototype.readPackedInt32String=function(){return this.readPackedField_(this.decoder_.readSignedVarint32String)};jspb.BinaryReader.prototype.readPackedInt64=function(){return this.readPackedField_(this.decoder_.readSignedVarint64)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedInt64",jspb.BinaryReader.prototype.readPackedInt64);jspb.BinaryReader.prototype.readPackedInt64String=function(){return this.readPackedField_(this.decoder_.readSignedVarint64String)};
jspb.BinaryReader.prototype.readPackedUint32=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedUint32",jspb.BinaryReader.prototype.readPackedUint32);jspb.BinaryReader.prototype.readPackedUint32String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32String)};jspb.BinaryReader.prototype.readPackedUint64=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64)};
goog.exportProperty(jspb.BinaryReader.prototype,"readPackedUint64",jspb.BinaryReader.prototype.readPackedUint64);jspb.BinaryReader.prototype.readPackedUint64String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64String)};jspb.BinaryReader.prototype.readPackedSint32=function(){return this.readPackedField_(this.decoder_.readZigzagVarint32)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedSint32",jspb.BinaryReader.prototype.readPackedSint32);
jspb.BinaryReader.prototype.readPackedSint64=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedSint64",jspb.BinaryReader.prototype.readPackedSint64);jspb.BinaryReader.prototype.readPackedSint64String=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64String)};jspb.BinaryReader.prototype.readPackedFixed32=function(){return this.readPackedField_(this.decoder_.readUint32)};
goog.exportProperty(jspb.BinaryReader.prototype,"readPackedFixed32",jspb.BinaryReader.prototype.readPackedFixed32);jspb.BinaryReader.prototype.readPackedFixed64=function(){return this.readPackedField_(this.decoder_.readUint64)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedFixed64",jspb.BinaryReader.prototype.readPackedFixed64);jspb.BinaryReader.prototype.readPackedFixed64String=function(){return this.readPackedField_(this.decoder_.readUint64String)};
jspb.BinaryReader.prototype.readPackedSfixed32=function(){return this.readPackedField_(this.decoder_.readInt32)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedSfixed32",jspb.BinaryReader.prototype.readPackedSfixed32);jspb.BinaryReader.prototype.readPackedSfixed64=function(){return this.readPackedField_(this.decoder_.readInt64)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedSfixed64",jspb.BinaryReader.prototype.readPackedSfixed64);
jspb.BinaryReader.prototype.readPackedSfixed64String=function(){return this.readPackedField_(this.decoder_.readInt64String)};jspb.BinaryReader.prototype.readPackedFloat=function(){return this.readPackedField_(this.decoder_.readFloat)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedFloat",jspb.BinaryReader.prototype.readPackedFloat);jspb.BinaryReader.prototype.readPackedDouble=function(){return this.readPackedField_(this.decoder_.readDouble)};
goog.exportProperty(jspb.BinaryReader.prototype,"readPackedDouble",jspb.BinaryReader.prototype.readPackedDouble);jspb.BinaryReader.prototype.readPackedBool=function(){return this.readPackedField_(this.decoder_.readBool)};goog.exportProperty(jspb.BinaryReader.prototype,"readPackedBool",jspb.BinaryReader.prototype.readPackedBool);jspb.BinaryReader.prototype.readPackedEnum=function(){return this.readPackedField_(this.decoder_.readEnum)};
goog.exportProperty(jspb.BinaryReader.prototype,"readPackedEnum",jspb.BinaryReader.prototype.readPackedEnum);jspb.BinaryReader.prototype.readPackedVarintHash64=function(){return this.readPackedField_(this.decoder_.readVarintHash64)};jspb.BinaryReader.prototype.readPackedFixedHash64=function(){return this.readPackedField_(this.decoder_.readFixedHash64)};jspb.BinaryEncoder=function(){this.buffer_=[]};jspb.BinaryEncoder.prototype.length=function(){return this.buffer_.length};jspb.BinaryEncoder.prototype.end=function(){var a=this.buffer_;this.buffer_=[];return a};
jspb.BinaryEncoder.prototype.writeSplitVarint64=function(a,b){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(b==Math.floor(b));jspb.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);for(jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);0<b||127<a;)this.buffer_.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSplitFixed64=function(a,b){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(b==Math.floor(b));jspb.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);this.writeUint32(a);this.writeUint32(b)};
jspb.BinaryEncoder.prototype.writeUnsignedVarint32=function(a){jspb.asserts.assert(a==Math.floor(a));for(jspb.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);127<a;)this.buffer_.push(a&127|128),a>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSignedVarint32=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);if(0<=a)this.writeUnsignedVarint32(a);else{for(var b=0;9>b;b++)this.buffer_.push(a&127|128),a>>=7;this.buffer_.push(1)}};
jspb.BinaryEncoder.prototype.writeUnsignedVarint64=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeSignedVarint64=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint32=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeUnsignedVarint32((a<<1^a>>31)>>>0)};jspb.BinaryEncoder.prototype.writeZigzagVarint64=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitZigzag64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint64String=function(a){this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a))};jspb.BinaryEncoder.prototype.writeZigzagVarintHash64=function(a){var b=this;jspb.utils.splitHash64(a);jspb.utils.toZigzag64(jspb.utils.split64Low,jspb.utils.split64High,function(a,d){b.writeSplitVarint64(a>>>0,d>>>0)})};
jspb.BinaryEncoder.prototype.writeUint8=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(0<=a&&256>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeUint16=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(0<=a&&65536>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeUint32=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};jspb.BinaryEncoder.prototype.writeUint64=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitUint64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt8=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(-128<=a&&128>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeInt16=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(-32768<=a&&32768>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeInt32=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};
jspb.BinaryEncoder.prototype.writeInt64=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt64String=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(+a>=-jspb.BinaryConstants.TWO_TO_63&&+a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFloat=function(a){jspb.asserts.assert(Infinity===a||-Infinity===a||isNaN(a)||a>=-jspb.BinaryConstants.FLOAT32_MAX&&a<=jspb.BinaryConstants.FLOAT32_MAX);jspb.utils.splitFloat32(a);this.writeUint32(jspb.utils.split64Low)};
jspb.BinaryEncoder.prototype.writeDouble=function(a){jspb.asserts.assert(Infinity===a||-Infinity===a||isNaN(a)||a>=-jspb.BinaryConstants.FLOAT64_MAX&&a<=jspb.BinaryConstants.FLOAT64_MAX);jspb.utils.splitFloat64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeBool=function(a){jspb.asserts.assert("boolean"===typeof a||"number"===typeof a);this.buffer_.push(a?1:0)};
jspb.BinaryEncoder.prototype.writeEnum=function(a){jspb.asserts.assert(a==Math.floor(a));jspb.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32(a)};jspb.BinaryEncoder.prototype.writeBytes=function(a){this.buffer_.push.apply(this.buffer_,a)};jspb.BinaryEncoder.prototype.writeVarintHash64=function(a){jspb.utils.splitHash64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFixedHash64=function(a){jspb.utils.splitHash64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeString=function(a){var b=this.buffer_.length;jspb.asserts.assertString(a);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.buffer_.push(d);else if(2048>d)this.buffer_.push(d>>6|192),this.buffer_.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var e=a.charCodeAt(c+1);56320<=e&&57343>=e&&(d=1024*(d-55296)+e-56320+65536,this.buffer_.push(d>>18|240),this.buffer_.push(d>>12&63|128),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|
128),c++)}else this.buffer_.push(d>>12|224),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128)}return this.buffer_.length-b};jspb.arith={};jspb.arith.UInt64=function(a,b){this.lo=a;this.hi=b};jspb.arith.UInt64.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};jspb.arith.UInt64.prototype.rightShift=function(){return new jspb.arith.UInt64((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};jspb.arith.UInt64.prototype.leftShift=function(){return new jspb.arith.UInt64(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};
jspb.arith.UInt64.prototype.msb=function(){return!!(this.hi&2147483648)};jspb.arith.UInt64.prototype.lsb=function(){return!!(this.lo&1)};jspb.arith.UInt64.prototype.zero=function(){return 0==this.lo&&0==this.hi};jspb.arith.UInt64.prototype.add=function(a){return new jspb.arith.UInt64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};
jspb.arith.UInt64.prototype.sub=function(a){return new jspb.arith.UInt64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.UInt64.mul32x32=function(a,b){var c=a&65535;a>>>=16;var d=b&65535,e=b>>>16;b=c*d+65536*(c*e&65535)+65536*(a*d&65535);for(c=a*e+(c*e>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new jspb.arith.UInt64(b>>>0,c>>>0)};
jspb.arith.UInt64.prototype.mul=function(a){var b=jspb.arith.UInt64.mul32x32(this.lo,a);a=jspb.arith.UInt64.mul32x32(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};
jspb.arith.UInt64.prototype.div=function(a){if(0==a)return[];var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(this.lo,this.hi);a=new jspb.arith.UInt64(a,0);for(var d=new jspb.arith.UInt64(1,0);!a.msb();)a=a.leftShift(),d=d.leftShift();for(;!d.zero();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.rightShift(),d=d.rightShift();return[b,c]};jspb.arith.UInt64.prototype.toString=function(){for(var a="",b=this;!b.zero();){b=b.div(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};
jspb.arith.UInt64.fromString=function(a){for(var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;var e=parseInt(a[d],10);c.lo=e;b=b.mul(10).add(c)}return b};jspb.arith.UInt64.prototype.clone=function(){return new jspb.arith.UInt64(this.lo,this.hi)};jspb.arith.Int64=function(a,b){this.lo=a;this.hi=b};
jspb.arith.Int64.prototype.add=function(a){return new jspb.arith.Int64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.sub=function(a){return new jspb.arith.Int64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.clone=function(){return new jspb.arith.Int64(this.lo,this.hi)};
jspb.arith.Int64.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new jspb.arith.UInt64(this.lo,this.hi);a&&(b=(new jspb.arith.UInt64(0,0)).sub(b));return(a?"-":"")+b.toString()};jspb.arith.Int64.fromString=function(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=jspb.arith.UInt64.fromString(a);if(null===a)return null;b&&(a=(new jspb.arith.UInt64(0,0)).sub(a));return new jspb.arith.Int64(a.lo,a.hi)};jspb.BinaryWriter=function(){this.blocks_=[];this.totalLength_=0;this.encoder_=new jspb.BinaryEncoder;this.bookmarks_=[]};jspb.BinaryWriter.prototype.appendUint8Array_=function(a){var b=this.encoder_.end();this.blocks_.push(b);this.blocks_.push(a);this.totalLength_+=b.length+a.length};
jspb.BinaryWriter.prototype.beginDelimited_=function(a){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);a=this.encoder_.end();this.blocks_.push(a);this.totalLength_+=a.length;a.push(this.totalLength_);return a};jspb.BinaryWriter.prototype.endDelimited_=function(a){var b=a.pop();b=this.totalLength_+this.encoder_.length()-b;for(jspb.asserts.assert(0<=b);127<b;)a.push(b&127|128),b>>>=7,this.totalLength_++;a.push(b);this.totalLength_++};
jspb.BinaryWriter.prototype.writeSerializedMessage=function(a,b,c){this.appendUint8Array_(a.subarray(b,c))};jspb.BinaryWriter.prototype.maybeWriteSerializedMessage=function(a,b,c){null!=a&&null!=b&&null!=c&&this.writeSerializedMessage(a,b,c)};jspb.BinaryWriter.prototype.reset=function(){this.blocks_=[];this.encoder_.end();this.totalLength_=0;this.bookmarks_=[]};
jspb.BinaryWriter.prototype.getResultBuffer=function(){jspb.asserts.assert(0==this.bookmarks_.length);for(var a=new Uint8Array(this.totalLength_+this.encoder_.length()),b=this.blocks_,c=b.length,d=0,e=0;e<c;e++){var f=b[e];a.set(f,d);d+=f.length}b=this.encoder_.end();a.set(b,d);d+=b.length;jspb.asserts.assert(d==a.length);this.blocks_=[a];return a};goog.exportProperty(jspb.BinaryWriter.prototype,"getResultBuffer",jspb.BinaryWriter.prototype.getResultBuffer);
jspb.BinaryWriter.prototype.getResultBase64String=function(a){return goog.crypt.base64.encodeByteArray(this.getResultBuffer(),a)};jspb.BinaryWriter.prototype.beginSubMessage=function(a){this.bookmarks_.push(this.beginDelimited_(a))};jspb.BinaryWriter.prototype.endSubMessage=function(){jspb.asserts.assert(0<=this.bookmarks_.length);this.endDelimited_(this.bookmarks_.pop())};
jspb.BinaryWriter.prototype.writeFieldHeader_=function(a,b){jspb.asserts.assert(1<=a&&a==Math.floor(a));this.encoder_.writeUnsignedVarint32(8*a+b)};
jspb.BinaryWriter.prototype.writeAny=function(a,b,c){var d=jspb.BinaryConstants.FieldType;switch(a){case d.DOUBLE:this.writeDouble(b,c);break;case d.FLOAT:this.writeFloat(b,c);break;case d.INT64:this.writeInt64(b,c);break;case d.UINT64:this.writeUint64(b,c);break;case d.INT32:this.writeInt32(b,c);break;case d.FIXED64:this.writeFixed64(b,c);break;case d.FIXED32:this.writeFixed32(b,c);break;case d.BOOL:this.writeBool(b,c);break;case d.STRING:this.writeString(b,c);break;case d.GROUP:jspb.asserts.fail("Group field type not supported in writeAny()");
break;case d.MESSAGE:jspb.asserts.fail("Message field type not supported in writeAny()");break;case d.BYTES:this.writeBytes(b,c);break;case d.UINT32:this.writeUint32(b,c);break;case d.ENUM:this.writeEnum(b,c);break;case d.SFIXED32:this.writeSfixed32(b,c);break;case d.SFIXED64:this.writeSfixed64(b,c);break;case d.SINT32:this.writeSint32(b,c);break;case d.SINT64:this.writeSint64(b,c);break;case d.FHASH64:this.writeFixedHash64(b,c);break;case d.VHASH64:this.writeVarintHash64(b,c);break;default:jspb.asserts.fail("Invalid field type in writeAny()")}};
jspb.BinaryWriter.prototype.writeUnsignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint32(b))};jspb.BinaryWriter.prototype.writeSignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeUnsignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint64(b))};
jspb.BinaryWriter.prototype.writeSignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint64(b))};jspb.BinaryWriter.prototype.writeZigzagVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint32(b))};jspb.BinaryWriter.prototype.writeZigzagVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64(b))};
jspb.BinaryWriter.prototype.writeZigzagVarint64String_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64String(b))};jspb.BinaryWriter.prototype.writeZigzagVarintHash64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarintHash64(b))};
jspb.BinaryWriter.prototype.writeInt32=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeInt32",jspb.BinaryWriter.prototype.writeInt32);jspb.BinaryWriter.prototype.writeInt32String=function(a,b){null!=b&&(b=parseInt(b,10),jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeInt64=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeSignedVarint64_(a,b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeInt64",jspb.BinaryWriter.prototype.writeInt64);jspb.BinaryWriter.prototype.writeInt64String=function(a,b){null!=b&&(b=jspb.arith.Int64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(b.lo,b.hi))};
jspb.BinaryWriter.prototype.writeUint32=function(a,b){null!=b&&(jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeUint32",jspb.BinaryWriter.prototype.writeUint32);jspb.BinaryWriter.prototype.writeUint32String=function(a,b){null!=b&&(b=parseInt(b,10),jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeUint64=function(a,b){null!=b&&(jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeUnsignedVarint64_(a,b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeUint64",jspb.BinaryWriter.prototype.writeUint64);jspb.BinaryWriter.prototype.writeUint64String=function(a,b){null!=b&&(b=jspb.arith.UInt64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(b.lo,b.hi))};
jspb.BinaryWriter.prototype.writeSint32=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeZigzagVarint32_(a,b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeSint32",jspb.BinaryWriter.prototype.writeSint32);jspb.BinaryWriter.prototype.writeSint64=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64_(a,b))};
goog.exportProperty(jspb.BinaryWriter.prototype,"writeSint64",jspb.BinaryWriter.prototype.writeSint64);jspb.BinaryWriter.prototype.writeSintHash64=function(a,b){null!=b&&this.writeZigzagVarintHash64_(a,b)};jspb.BinaryWriter.prototype.writeSint64String=function(a,b){null!=b&&this.writeZigzagVarint64String_(a,b)};
jspb.BinaryWriter.prototype.writeFixed32=function(a,b){null!=b&&(jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeUint32(b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeFixed32",jspb.BinaryWriter.prototype.writeFixed32);
jspb.BinaryWriter.prototype.writeFixed64=function(a,b){null!=b&&(jspb.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeUint64(b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeFixed64",jspb.BinaryWriter.prototype.writeFixed64);
jspb.BinaryWriter.prototype.writeFixed64String=function(a,b){null!=b&&(b=jspb.arith.UInt64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(b.lo,b.hi))};jspb.BinaryWriter.prototype.writeSfixed32=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeInt32(b))};
goog.exportProperty(jspb.BinaryWriter.prototype,"writeSfixed32",jspb.BinaryWriter.prototype.writeSfixed32);jspb.BinaryWriter.prototype.writeSfixed64=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeInt64(b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeSfixed64",jspb.BinaryWriter.prototype.writeSfixed64);
jspb.BinaryWriter.prototype.writeSfixed64String=function(a,b){null!=b&&(b=jspb.arith.Int64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(b.lo,b.hi))};jspb.BinaryWriter.prototype.writeFloat=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeFloat(b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeFloat",jspb.BinaryWriter.prototype.writeFloat);
jspb.BinaryWriter.prototype.writeDouble=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeDouble(b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeDouble",jspb.BinaryWriter.prototype.writeDouble);jspb.BinaryWriter.prototype.writeBool=function(a,b){null!=b&&(jspb.asserts.assert("boolean"===typeof b||"number"===typeof b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeBool(b))};
goog.exportProperty(jspb.BinaryWriter.prototype,"writeBool",jspb.BinaryWriter.prototype.writeBool);jspb.BinaryWriter.prototype.writeEnum=function(a,b){null!=b&&(jspb.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeEnum",jspb.BinaryWriter.prototype.writeEnum);
jspb.BinaryWriter.prototype.writeString=function(a,b){null!=b&&(a=this.beginDelimited_(a),this.encoder_.writeString(b),this.endDelimited_(a))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeString",jspb.BinaryWriter.prototype.writeString);jspb.BinaryWriter.prototype.writeBytes=function(a,b){null!=b&&(b=jspb.utils.byteSourceToUint8Array(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(b.length),this.appendUint8Array_(b))};
goog.exportProperty(jspb.BinaryWriter.prototype,"writeBytes",jspb.BinaryWriter.prototype.writeBytes);jspb.BinaryWriter.prototype.writeMessage=function(a,b,c){null!=b&&(a=this.beginDelimited_(a),c(b,this),this.endDelimited_(a))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeMessage",jspb.BinaryWriter.prototype.writeMessage);
jspb.BinaryWriter.prototype.writeMessageSet=function(a,b,c){null!=b&&(this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.START_GROUP),this.writeFieldHeader_(2,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(a),a=this.beginDelimited_(3),c(b,this),this.endDelimited_(a),this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.END_GROUP))};
jspb.BinaryWriter.prototype.writeGroup=function(a,b,c){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b,this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP))};goog.exportProperty(jspb.BinaryWriter.prototype,"writeGroup",jspb.BinaryWriter.prototype.writeGroup);jspb.BinaryWriter.prototype.writeFixedHash64=function(a,b){null!=b&&(jspb.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeFixedHash64(b))};
jspb.BinaryWriter.prototype.writeVarintHash64=function(a,b){null!=b&&(jspb.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeVarintHash64(b))};jspb.BinaryWriter.prototype.writeSplitFixed64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(b,c)};
jspb.BinaryWriter.prototype.writeSplitVarint64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(b,c)};jspb.BinaryWriter.prototype.writeSplitZigzagVarint64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);var d=this.encoder_;jspb.utils.toZigzag64(b,c,function(a,b){d.writeSplitVarint64(a>>>0,b>>>0)})};
jspb.BinaryWriter.prototype.writeRepeatedInt32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint32_(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedInt32",jspb.BinaryWriter.prototype.writeRepeatedInt32);jspb.BinaryWriter.prototype.writeRepeatedInt32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt32String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedInt64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint64_(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedInt64",jspb.BinaryWriter.prototype.writeRepeatedInt64);jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitFixed64(a,c(b[e]),d(b[e]))};
jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitVarint64(a,c(b[e]),d(b[e]))};jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitZigzagVarint64(a,c(b[e]),d(b[e]))};jspb.BinaryWriter.prototype.writeRepeatedInt64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedUint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint32_(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedUint32",jspb.BinaryWriter.prototype.writeRepeatedUint32);jspb.BinaryWriter.prototype.writeRepeatedUint32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint32String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedUint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint64_(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedUint64",jspb.BinaryWriter.prototype.writeRepeatedUint64);jspb.BinaryWriter.prototype.writeRepeatedUint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint32_(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedSint32",jspb.BinaryWriter.prototype.writeRepeatedSint32);jspb.BinaryWriter.prototype.writeRepeatedSint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64_(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedSint64",jspb.BinaryWriter.prototype.writeRepeatedSint64);
jspb.BinaryWriter.prototype.writeRepeatedSint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64String_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarintHash64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed32(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedFixed32",jspb.BinaryWriter.prototype.writeRepeatedFixed32);
jspb.BinaryWriter.prototype.writeRepeatedFixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedFixed64",jspb.BinaryWriter.prototype.writeRepeatedFixed64);jspb.BinaryWriter.prototype.writeRepeatedFixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64String(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedFixed64String",jspb.BinaryWriter.prototype.writeRepeatedFixed64String);
jspb.BinaryWriter.prototype.writeRepeatedSfixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed32(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedSfixed32",jspb.BinaryWriter.prototype.writeRepeatedSfixed32);jspb.BinaryWriter.prototype.writeRepeatedSfixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedSfixed64",jspb.BinaryWriter.prototype.writeRepeatedSfixed64);
jspb.BinaryWriter.prototype.writeRepeatedSfixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFloat=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFloat(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedFloat",jspb.BinaryWriter.prototype.writeRepeatedFloat);
jspb.BinaryWriter.prototype.writeRepeatedDouble=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeDouble(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedDouble",jspb.BinaryWriter.prototype.writeRepeatedDouble);jspb.BinaryWriter.prototype.writeRepeatedBool=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBool(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedBool",jspb.BinaryWriter.prototype.writeRepeatedBool);
jspb.BinaryWriter.prototype.writeRepeatedEnum=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeEnum(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedEnum",jspb.BinaryWriter.prototype.writeRepeatedEnum);jspb.BinaryWriter.prototype.writeRepeatedString=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeString(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedString",jspb.BinaryWriter.prototype.writeRepeatedString);
jspb.BinaryWriter.prototype.writeRepeatedBytes=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBytes(a,b[c])};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedBytes",jspb.BinaryWriter.prototype.writeRepeatedBytes);jspb.BinaryWriter.prototype.writeRepeatedMessage=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var e=this.beginDelimited_(a);c(b[d],this);this.endDelimited_(e)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedMessage",jspb.BinaryWriter.prototype.writeRepeatedMessage);
jspb.BinaryWriter.prototype.writeRepeatedGroup=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b[d],this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP)};goog.exportProperty(jspb.BinaryWriter.prototype,"writeRepeatedGroup",jspb.BinaryWriter.prototype.writeRepeatedGroup);jspb.BinaryWriter.prototype.writeRepeatedFixedHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixedHash64(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedVarintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeVarintHash64(a,b[c])};jspb.BinaryWriter.prototype.writePackedInt32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint32(b[c]);this.endDelimited_(a)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedInt32",jspb.BinaryWriter.prototype.writePackedInt32);
jspb.BinaryWriter.prototype.writePackedInt32String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint32(parseInt(b[c],10));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedInt64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint64(b[c]);this.endDelimited_(a)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedInt64",jspb.BinaryWriter.prototype.writePackedInt64);
jspb.BinaryWriter.prototype.writePackedSplitFixed64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=0;e<b.length;e++)this.encoder_.writeSplitFixed64(c(b[e]),d(b[e]));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSplitVarint64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=0;e<b.length;e++)this.encoder_.writeSplitVarint64(c(b[e]),d(b[e]));this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=this.encoder_,f=0;f<b.length;f++)jspb.utils.toZigzag64(c(b[f]),d(b[f]),function(a,b){e.writeSplitVarint64(a>>>0,b>>>0)});this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedInt64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++){var d=jspb.arith.Int64.fromString(b[c]);this.encoder_.writeSplitVarint64(d.lo,d.hi)}this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedUint32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint32(b[c]);this.endDelimited_(a)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedUint32",jspb.BinaryWriter.prototype.writePackedUint32);
jspb.BinaryWriter.prototype.writePackedUint32String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint32(parseInt(b[c],10));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedUint64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint64(b[c]);this.endDelimited_(a)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedUint64",jspb.BinaryWriter.prototype.writePackedUint64);
jspb.BinaryWriter.prototype.writePackedUint64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++){var d=jspb.arith.UInt64.fromString(b[c]);this.encoder_.writeSplitVarint64(d.lo,d.hi)}this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSint32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarint32(b[c]);this.endDelimited_(a)}};
goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedSint32",jspb.BinaryWriter.prototype.writePackedSint32);jspb.BinaryWriter.prototype.writePackedSint64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarint64(b[c]);this.endDelimited_(a)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedSint64",jspb.BinaryWriter.prototype.writePackedSint64);
jspb.BinaryWriter.prototype.writePackedSint64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b[c]));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSintHash64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarintHash64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedFixed32=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeUint32(b[a])};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedFixed32",jspb.BinaryWriter.prototype.writePackedFixed32);
jspb.BinaryWriter.prototype.writePackedFixed64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeUint64(b[a])};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedFixed64",jspb.BinaryWriter.prototype.writePackedFixed64);
jspb.BinaryWriter.prototype.writePackedFixed64String=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++){var c=jspb.arith.UInt64.fromString(b[a]);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};
jspb.BinaryWriter.prototype.writePackedSfixed32=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeInt32(b[a])};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedSfixed32",jspb.BinaryWriter.prototype.writePackedSfixed32);
jspb.BinaryWriter.prototype.writePackedSfixed64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeInt64(b[a])};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedSfixed64",jspb.BinaryWriter.prototype.writePackedSfixed64);
jspb.BinaryWriter.prototype.writePackedSfixed64String=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeInt64String(b[a])};jspb.BinaryWriter.prototype.writePackedFloat=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeFloat(b[a])};
goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedFloat",jspb.BinaryWriter.prototype.writePackedFloat);jspb.BinaryWriter.prototype.writePackedDouble=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeDouble(b[a])};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedDouble",jspb.BinaryWriter.prototype.writePackedDouble);
jspb.BinaryWriter.prototype.writePackedBool=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(b.length),a=0;a<b.length;a++)this.encoder_.writeBool(b[a])};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedBool",jspb.BinaryWriter.prototype.writePackedBool);
jspb.BinaryWriter.prototype.writePackedEnum=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeEnum(b[c]);this.endDelimited_(a)}};goog.exportProperty(jspb.BinaryWriter.prototype,"writePackedEnum",jspb.BinaryWriter.prototype.writePackedEnum);
jspb.BinaryWriter.prototype.writePackedFixedHash64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeFixedHash64(b[a])};jspb.BinaryWriter.prototype.writePackedVarintHash64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeVarintHash64(b[c]);this.endDelimited_(a)}};jspb.Map=function(a,b){this.arr_=a;this.valueCtor_=b;this.map_={};this.arrClean=!0;0<this.arr_.length&&this.loadFromArray_()};goog.exportSymbol("jspb.Map",jspb.Map);jspb.Map.prototype.loadFromArray_=function(){for(var a=0;a<this.arr_.length;a++){var b=this.arr_[a],c=b[0];this.map_[c.toString()]=new jspb.Map.Entry_(c,b[1])}this.arrClean=!0};
jspb.Map.prototype.toArray=function(){if(this.arrClean){if(this.valueCtor_){var a=this.map_,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].valueWrapper;c&&c.toArray()}}}else{this.arr_.length=0;a=this.stringKeys_();a.sort();for(b=0;b<a.length;b++){var d=this.map_[a[b]];(c=d.valueWrapper)&&c.toArray();this.arr_.push([d.key,d.value])}this.arrClean=!0}return this.arr_};goog.exportProperty(jspb.Map.prototype,"toArray",jspb.Map.prototype.toArray);
jspb.Map.prototype.toObject=function(a,b){for(var c=this.toArray(),d=[],e=0;e<c.length;e++){var f=this.map_[c[e][0].toString()];this.wrapEntry_(f);var g=f.valueWrapper;g?(jspb.asserts.assert(b),d.push([f.key,b(a,g)])):d.push([f.key,f.value])}return d};goog.exportProperty(jspb.Map.prototype,"toObject",jspb.Map.prototype.toObject);jspb.Map.fromObject=function(a,b,c){b=new jspb.Map([],b);for(var d=0;d<a.length;d++){var e=a[d][0],f=c(a[d][1]);b.set(e,f)}return b};
goog.exportProperty(jspb.Map,"fromObject",jspb.Map.fromObject);jspb.Map.ArrayIteratorIterable_=function(a){this.idx_=0;this.arr_=a};jspb.Map.ArrayIteratorIterable_.prototype.next=function(){return this.idx_<this.arr_.length?{done:!1,value:this.arr_[this.idx_++]}:{done:!0,value:void 0}};"undefined"!=typeof Symbol&&(jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator]=function(){return this});jspb.Map.prototype.getLength=function(){return this.stringKeys_().length};
goog.exportProperty(jspb.Map.prototype,"getLength",jspb.Map.prototype.getLength);jspb.Map.prototype.clear=function(){this.map_={};this.arrClean=!1};goog.exportProperty(jspb.Map.prototype,"clear",jspb.Map.prototype.clear);jspb.Map.prototype.del=function(a){a=a.toString();var b=this.map_.hasOwnProperty(a);delete this.map_[a];this.arrClean=!1;return b};goog.exportProperty(jspb.Map.prototype,"del",jspb.Map.prototype.del);
jspb.Map.prototype.getEntryList=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,d.value])}return a};goog.exportProperty(jspb.Map.prototype,"getEntryList",jspb.Map.prototype.getEntryList);jspb.Map.prototype.entries=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,this.wrapEntry_(d)])}return new jspb.Map.ArrayIteratorIterable_(a)};
goog.exportProperty(jspb.Map.prototype,"entries",jspb.Map.prototype.entries);jspb.Map.prototype.keys=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.map_[b[c]].key);return new jspb.Map.ArrayIteratorIterable_(a)};goog.exportProperty(jspb.Map.prototype,"keys",jspb.Map.prototype.keys);jspb.Map.prototype.values=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.wrapEntry_(this.map_[b[c]]));return new jspb.Map.ArrayIteratorIterable_(a)};
goog.exportProperty(jspb.Map.prototype,"values",jspb.Map.prototype.values);jspb.Map.prototype.forEach=function(a,b){var c=this.stringKeys_();c.sort();for(var d=0;d<c.length;d++){var e=this.map_[c[d]];a.call(b,this.wrapEntry_(e),e.key,this)}};goog.exportProperty(jspb.Map.prototype,"forEach",jspb.Map.prototype.forEach);jspb.Map.prototype.set=function(a,b){var c=new jspb.Map.Entry_(a);this.valueCtor_?(c.valueWrapper=b,c.value=b.toArray()):c.value=b;this.map_[a.toString()]=c;this.arrClean=!1;return this};
goog.exportProperty(jspb.Map.prototype,"set",jspb.Map.prototype.set);jspb.Map.prototype.wrapEntry_=function(a){return this.valueCtor_?(a.valueWrapper||(a.valueWrapper=new this.valueCtor_(a.value)),a.valueWrapper):a.value};jspb.Map.prototype.get=function(a){if(a=this.map_[a.toString()])return this.wrapEntry_(a)};goog.exportProperty(jspb.Map.prototype,"get",jspb.Map.prototype.get);jspb.Map.prototype.has=function(a){return a.toString()in this.map_};goog.exportProperty(jspb.Map.prototype,"has",jspb.Map.prototype.has);
jspb.Map.prototype.serializeBinary=function(a,b,c,d,e){var f=this.stringKeys_();f.sort();for(var g=0;g<f.length;g++){var h=this.map_[f[g]];b.beginSubMessage(a);c.call(b,1,h.key);this.valueCtor_?d.call(b,2,this.wrapEntry_(h),e):d.call(b,2,h.value);b.endSubMessage()}};goog.exportProperty(jspb.Map.prototype,"serializeBinary",jspb.Map.prototype.serializeBinary);
jspb.Map.deserializeBinary=function(a,b,c,d,e,f,g){for(;b.nextField()&&!b.isEndGroup();){var h=b.getFieldNumber();1==h?f=c.call(b):2==h&&(a.valueCtor_?(jspb.asserts.assert(e),g||(g=new a.valueCtor_),d.call(b,g,e)):g=d.call(b))}jspb.asserts.assert(void 0!=f);jspb.asserts.assert(void 0!=g);a.set(f,g)};goog.exportProperty(jspb.Map,"deserializeBinary",jspb.Map.deserializeBinary);
jspb.Map.prototype.stringKeys_=function(){var a=this.map_,b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b};jspb.Map.Entry_=function(a,b){this.key=a;this.value=b;this.valueWrapper=void 0};jspb.ExtensionFieldInfo=function(a,b,c,d,e){this.fieldIndex=a;this.fieldName=b;this.ctor=c;this.toObjectFn=d;this.isRepeated=e};goog.exportSymbol("jspb.ExtensionFieldInfo",jspb.ExtensionFieldInfo);jspb.ExtensionFieldBinaryInfo=function(a,b,c,d,e,f){this.fieldInfo=a;this.binaryReaderFn=b;this.binaryWriterFn=c;this.binaryMessageSerializeFn=d;this.binaryMessageDeserializeFn=e;this.isPacked=f};goog.exportSymbol("jspb.ExtensionFieldBinaryInfo",jspb.ExtensionFieldBinaryInfo);
jspb.ExtensionFieldInfo.prototype.isMessageType=function(){return!!this.ctor};goog.exportProperty(jspb.ExtensionFieldInfo.prototype,"isMessageType",jspb.ExtensionFieldInfo.prototype.isMessageType);jspb.Message=function(){};goog.exportSymbol("jspb.Message",jspb.Message);jspb.Message.GENERATE_TO_OBJECT=!0;goog.exportProperty(jspb.Message,"GENERATE_TO_OBJECT",jspb.Message.GENERATE_TO_OBJECT);jspb.Message.GENERATE_FROM_OBJECT=!goog.DISALLOW_TEST_ONLY_CODE;
goog.exportProperty(jspb.Message,"GENERATE_FROM_OBJECT",jspb.Message.GENERATE_FROM_OBJECT);jspb.Message.GENERATE_TO_STRING=!0;jspb.Message.ASSUME_LOCAL_ARRAYS=!1;jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS=!0;jspb.Message.SUPPORTS_UINT8ARRAY_="function"==typeof Uint8Array;jspb.Message.prototype.getJsPbMessageId=function(){return this.messageId_};goog.exportProperty(jspb.Message.prototype,"getJsPbMessageId",jspb.Message.prototype.getJsPbMessageId);jspb.Message.getIndex_=function(a,b){return b+a.arrayIndexOffset_};
jspb.Message.hiddenES6Property_=function(){};jspb.Message.getFieldNumber_=function(a,b){return b-a.arrayIndexOffset_};
jspb.Message.initialize=function(a,b,c,d,e,f){a.wrappers_=null;b||(b=c?[c]:[]);a.messageId_=c?String(c):void 0;a.arrayIndexOffset_=0===c?-1:0;a.array=b;jspb.Message.initPivotAndExtensionObject_(a,d);a.convertedPrimitiveFields_={};jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS||(a.repeatedFields=e);if(e)for(b=0;b<e.length;b++)c=e[b],c<a.pivot_?(c=jspb.Message.getIndex_(a,c),a.array[c]=a.array[c]||jspb.Message.EMPTY_LIST_SENTINEL_):(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[c]=
a.extensionObject_[c]||jspb.Message.EMPTY_LIST_SENTINEL_);if(f&&f.length)for(b=0;b<f.length;b++)jspb.Message.computeOneofCase(a,f[b])};goog.exportProperty(jspb.Message,"initialize",jspb.Message.initialize);jspb.Message.EMPTY_LIST_SENTINEL_=goog.DEBUG&&Object.freeze?Object.freeze([]):[];jspb.Message.isArray_=function(a){return jspb.Message.ASSUME_LOCAL_ARRAYS?a instanceof Array:Array.isArray(a)};
jspb.Message.isExtensionObject_=function(a){return null!==a&&"object"==typeof a&&!jspb.Message.isArray_(a)&&!(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)};jspb.Message.initPivotAndExtensionObject_=function(a,b){var c=a.array.length,d=-1;if(c&&(d=c-1,c=a.array[d],jspb.Message.isExtensionObject_(c))){a.pivot_=jspb.Message.getFieldNumber_(a,d);a.extensionObject_=c;return}-1<b?(a.pivot_=Math.max(b,jspb.Message.getFieldNumber_(a,d+1)),a.extensionObject_=null):a.pivot_=Number.MAX_VALUE};
jspb.Message.maybeInitEmptyExtensionObject_=function(a){var b=jspb.Message.getIndex_(a,a.pivot_);a.array[b]||(a.extensionObject_=a.array[b]={})};jspb.Message.toObjectList=function(a,b,c){for(var d=[],e=0;e<a.length;e++)d[e]=b.call(a[e],c,a[e]);return d};goog.exportProperty(jspb.Message,"toObjectList",jspb.Message.toObjectList);
jspb.Message.toObjectExtension=function(a,b,c,d,e){for(var f in c){var g=c[f],h=d.call(a,g);if(null!=h){for(var k in g.fieldName)if(g.fieldName.hasOwnProperty(k))break;b[k]=g.toObjectFn?g.isRepeated?jspb.Message.toObjectList(h,g.toObjectFn,e):g.toObjectFn(e,h):h}}};goog.exportProperty(jspb.Message,"toObjectExtension",jspb.Message.toObjectExtension);
jspb.Message.serializeBinaryExtensions=function(a,b,c,d){for(var e in c){var f=c[e],g=f.fieldInfo;if(!f.binaryWriterFn)throw Error("Message extension present that was generated without binary serialization support");var h=d.call(a,g);if(null!=h)if(g.isMessageType())if(f.binaryMessageSerializeFn)f.binaryWriterFn.call(b,g.fieldIndex,h,f.binaryMessageSerializeFn);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
else f.binaryWriterFn.call(b,g.fieldIndex,h)}};goog.exportProperty(jspb.Message,"serializeBinaryExtensions",jspb.Message.serializeBinaryExtensions);
jspb.Message.readBinaryExtension=function(a,b,c,d,e){var f=c[b.getFieldNumber()];if(f){c=f.fieldInfo;if(!f.binaryReaderFn)throw Error("Deserializing extension whose generated code does not support binary format");if(c.isMessageType()){var g=new c.ctor;f.binaryReaderFn.call(b,g,f.binaryMessageDeserializeFn)}else g=f.binaryReaderFn.call(b);c.isRepeated&&!f.isPacked?(b=d.call(a,c))?b.push(g):e.call(a,c,[g]):e.call(a,c,g)}else b.skipField()};goog.exportProperty(jspb.Message,"readBinaryExtension",jspb.Message.readBinaryExtension);
jspb.Message.getField=function(a,b){if(b<a.pivot_){b=jspb.Message.getIndex_(a,b);var c=a.array[b];return c===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[b]=[]:c}if(a.extensionObject_)return c=a.extensionObject_[b],c===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:c};goog.exportProperty(jspb.Message,"getField",jspb.Message.getField);jspb.Message.getRepeatedField=function(a,b){return jspb.Message.getField(a,b)};goog.exportProperty(jspb.Message,"getRepeatedField",jspb.Message.getRepeatedField);
jspb.Message.getOptionalFloatingPointField=function(a,b){a=jspb.Message.getField(a,b);return null==a?a:+a};goog.exportProperty(jspb.Message,"getOptionalFloatingPointField",jspb.Message.getOptionalFloatingPointField);jspb.Message.getBooleanField=function(a,b){a=jspb.Message.getField(a,b);return null==a?a:!!a};goog.exportProperty(jspb.Message,"getBooleanField",jspb.Message.getBooleanField);
jspb.Message.getRepeatedFloatingPointField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedPrimitiveFields_||(a.convertedPrimitiveFields_={});if(!a.convertedPrimitiveFields_[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.convertedPrimitiveFields_[b]=!0}return c};goog.exportProperty(jspb.Message,"getRepeatedFloatingPointField",jspb.Message.getRepeatedFloatingPointField);
jspb.Message.getRepeatedBooleanField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedPrimitiveFields_||(a.convertedPrimitiveFields_={});if(!a.convertedPrimitiveFields_[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.convertedPrimitiveFields_[b]=!0}return c};goog.exportProperty(jspb.Message,"getRepeatedBooleanField",jspb.Message.getRepeatedBooleanField);
jspb.Message.bytesAsB64=function(a){if(null==a||"string"===typeof a)return a;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return goog.crypt.base64.encodeByteArray(a);jspb.asserts.fail("Cannot coerce to b64 string: "+goog.typeOf(a));return null};goog.exportProperty(jspb.Message,"bytesAsB64",jspb.Message.bytesAsB64);
jspb.Message.bytesAsU8=function(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return goog.crypt.base64.decodeStringToUint8Array(a);jspb.asserts.fail("Cannot coerce to Uint8Array: "+goog.typeOf(a));return null};goog.exportProperty(jspb.Message,"bytesAsU8",jspb.Message.bytesAsU8);jspb.Message.bytesListAsB64=function(a){jspb.Message.assertConsistentTypes_(a);return a.length&&"string"!==typeof a[0]?goog.array.map(a,jspb.Message.bytesAsB64):a};
goog.exportProperty(jspb.Message,"bytesListAsB64",jspb.Message.bytesListAsB64);jspb.Message.bytesListAsU8=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||a[0]instanceof Uint8Array?a:goog.array.map(a,jspb.Message.bytesAsU8)};goog.exportProperty(jspb.Message,"bytesListAsU8",jspb.Message.bytesListAsU8);
jspb.Message.assertConsistentTypes_=function(a){if(goog.DEBUG&&a&&1<a.length){var b=goog.typeOf(a[0]);goog.array.forEach(a,function(a){goog.typeOf(a)!=b&&jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got "+goog.typeOf(a)+" expected "+b)})}};jspb.Message.getFieldWithDefault=function(a,b,c){a=jspb.Message.getField(a,b);return null==a?c:a};goog.exportProperty(jspb.Message,"getFieldWithDefault",jspb.Message.getFieldWithDefault);
jspb.Message.getBooleanFieldWithDefault=function(a,b,c){a=jspb.Message.getBooleanField(a,b);return null==a?c:a};goog.exportProperty(jspb.Message,"getBooleanFieldWithDefault",jspb.Message.getBooleanFieldWithDefault);jspb.Message.getFloatingPointFieldWithDefault=function(a,b,c){a=jspb.Message.getOptionalFloatingPointField(a,b);return null==a?c:a};goog.exportProperty(jspb.Message,"getFloatingPointFieldWithDefault",jspb.Message.getFloatingPointFieldWithDefault);jspb.Message.getFieldProto3=jspb.Message.getFieldWithDefault;
goog.exportProperty(jspb.Message,"getFieldProto3",jspb.Message.getFieldProto3);jspb.Message.getMapField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(b in a.wrappers_)return a.wrappers_[b];var e=jspb.Message.getField(a,b);if(!e){if(c)return;e=[];jspb.Message.setField(a,b,e)}return a.wrappers_[b]=new jspb.Map(e,d)};goog.exportProperty(jspb.Message,"getMapField",jspb.Message.getMapField);
jspb.Message.setField=function(a,b,c){jspb.asserts.assertInstanceof(a,jspb.Message);b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=c:(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[b]=c);return a};goog.exportProperty(jspb.Message,"setField",jspb.Message.setField);jspb.Message.setProto3IntField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};goog.exportProperty(jspb.Message,"setProto3IntField",jspb.Message.setProto3IntField);
jspb.Message.setProto3FloatField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};goog.exportProperty(jspb.Message,"setProto3FloatField",jspb.Message.setProto3FloatField);jspb.Message.setProto3BooleanField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,!1)};goog.exportProperty(jspb.Message,"setProto3BooleanField",jspb.Message.setProto3BooleanField);jspb.Message.setProto3StringField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};
goog.exportProperty(jspb.Message,"setProto3StringField",jspb.Message.setProto3StringField);jspb.Message.setProto3BytesField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};goog.exportProperty(jspb.Message,"setProto3BytesField",jspb.Message.setProto3BytesField);jspb.Message.setProto3EnumField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};goog.exportProperty(jspb.Message,"setProto3EnumField",jspb.Message.setProto3EnumField);
jspb.Message.setProto3StringIntField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"0")};goog.exportProperty(jspb.Message,"setProto3StringIntField",jspb.Message.setProto3StringIntField);jspb.Message.setFieldIgnoringDefault_=function(a,b,c,d){jspb.asserts.assertInstanceof(a,jspb.Message);c!==d?jspb.Message.setField(a,b,c):b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=null:(jspb.Message.maybeInitEmptyExtensionObject_(a),delete a.extensionObject_[b]);return a};
jspb.Message.addToRepeatedField=function(a,b,c,d){jspb.asserts.assertInstanceof(a,jspb.Message);b=jspb.Message.getRepeatedField(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};goog.exportProperty(jspb.Message,"addToRepeatedField",jspb.Message.addToRepeatedField);
jspb.Message.setOneofField=function(a,b,c,d){jspb.asserts.assertInstanceof(a,jspb.Message);(c=jspb.Message.computeOneofCase(a,c))&&c!==b&&void 0!==d&&(a.wrappers_&&c in a.wrappers_&&(a.wrappers_[c]=void 0),jspb.Message.setField(a,c,void 0));return jspb.Message.setField(a,b,d)};goog.exportProperty(jspb.Message,"setOneofField",jspb.Message.setOneofField);
jspb.Message.computeOneofCase=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=jspb.Message.getField(a,f);null!=g&&(c=f,d=g,jspb.Message.setField(a,f,void 0))}return c?(jspb.Message.setField(a,c,d),c):0};goog.exportProperty(jspb.Message,"computeOneofCase",jspb.Message.computeOneofCase);jspb.Message.getWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){var e=jspb.Message.getField(a,c);if(d||e)a.wrappers_[c]=new b(e)}return a.wrappers_[c]};
goog.exportProperty(jspb.Message,"getWrapperField",jspb.Message.getWrapperField);jspb.Message.getRepeatedWrapperField=function(a,b,c){jspb.Message.wrapRepeatedField_(a,b,c);b=a.wrappers_[c];b==jspb.Message.EMPTY_LIST_SENTINEL_&&(b=a.wrappers_[c]=[]);return b};goog.exportProperty(jspb.Message,"getRepeatedWrapperField",jspb.Message.getRepeatedWrapperField);
jspb.Message.wrapRepeatedField_=function(a,b,c){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){for(var d=jspb.Message.getRepeatedField(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.wrappers_[c]=e}};jspb.Message.setWrapperField=function(a,b,c){jspb.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});var d=c?c.toArray():c;a.wrappers_[b]=c;return jspb.Message.setField(a,b,d)};goog.exportProperty(jspb.Message,"setWrapperField",jspb.Message.setWrapperField);
jspb.Message.setOneofWrapperField=function(a,b,c,d){jspb.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});var e=d?d.toArray():d;a.wrappers_[b]=d;return jspb.Message.setOneofField(a,b,c,e)};goog.exportProperty(jspb.Message,"setOneofWrapperField",jspb.Message.setOneofWrapperField);
jspb.Message.setRepeatedWrapperField=function(a,b,c){jspb.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].toArray();a.wrappers_[b]=c;return jspb.Message.setField(a,b,d)};goog.exportProperty(jspb.Message,"setRepeatedWrapperField",jspb.Message.setRepeatedWrapperField);
jspb.Message.addToRepeatedWrapperField=function(a,b,c,d,e){jspb.Message.wrapRepeatedField_(a,d,b);var f=a.wrappers_[b];f||(f=a.wrappers_[b]=[]);c=c?c:new d;a=jspb.Message.getRepeatedField(a,b);void 0!=e?(f.splice(e,0,c),a.splice(e,0,c.toArray())):(f.push(c),a.push(c.toArray()));return c};goog.exportProperty(jspb.Message,"addToRepeatedWrapperField",jspb.Message.addToRepeatedWrapperField);
jspb.Message.toMap=function(a,b,c,d){for(var e={},f=0;f<a.length;f++)e[b.call(a[f])]=c?c.call(a[f],d,a[f]):a[f];return e};goog.exportProperty(jspb.Message,"toMap",jspb.Message.toMap);jspb.Message.prototype.syncMapFields_=function(){if(this.wrappers_)for(var a in this.wrappers_){var b=this.wrappers_[a];if(Array.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].toArray();else b&&b.toArray()}};jspb.Message.prototype.toArray=function(){this.syncMapFields_();return this.array};
goog.exportProperty(jspb.Message.prototype,"toArray",jspb.Message.prototype.toArray);jspb.Message.GENERATE_TO_STRING&&(jspb.Message.prototype.toString=function(){this.syncMapFields_();return this.array.toString()});
jspb.Message.prototype.getExtension=function(a){if(this.extensionObject_){this.wrappers_||(this.wrappers_={});var b=a.fieldIndex;if(a.isRepeated){if(a.isMessageType())return this.wrappers_[b]||(this.wrappers_[b]=goog.array.map(this.extensionObject_[b]||[],function(b){return new a.ctor(b)})),this.wrappers_[b]}else if(a.isMessageType())return!this.wrappers_[b]&&this.extensionObject_[b]&&(this.wrappers_[b]=new a.ctor(this.extensionObject_[b])),this.wrappers_[b];return this.extensionObject_[b]}};
goog.exportProperty(jspb.Message.prototype,"getExtension",jspb.Message.prototype.getExtension);
jspb.Message.prototype.setExtension=function(a,b){this.wrappers_||(this.wrappers_={});jspb.Message.maybeInitEmptyExtensionObject_(this);var c=a.fieldIndex;a.isRepeated?(b=b||[],a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=goog.array.map(b,function(a){return a.toArray()})):this.extensionObject_[c]=b):a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=b?b.toArray():b):this.extensionObject_[c]=b;return this};goog.exportProperty(jspb.Message.prototype,"setExtension",jspb.Message.prototype.setExtension);
jspb.Message.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.toArray();b=b.toArray();var d=[],e=0,f=c.length>b.length?c.length:b.length;a.getJsPbMessageId()&&(d[0]=a.getJsPbMessageId(),e=1);for(;e<f;e++)jspb.Message.compareFields(c[e],b[e])||(d[e]=b[e]);return new a.constructor(d)};goog.exportProperty(jspb.Message,"difference",jspb.Message.difference);
jspb.Message.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&jspb.Message.compareFields(a.toArray(),b.toArray())};goog.exportProperty(jspb.Message,"equals",jspb.Message.equals);jspb.Message.compareExtensions=function(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!jspb.Message.compareFields(a[d],b[d]))return!1;return!0};goog.exportProperty(jspb.Message,"compareExtensions",jspb.Message.compareExtensions);
jspb.Message.compareFields=function(a,b){if(a==b)return!0;if(!goog.isObject(a)||!goog.isObject(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,e=void 0,f=Math.max(a.length,b.length);for(c=0;c<f;c++){var g=a[c],h=b[c];g&&
g.constructor==Object&&(jspb.asserts.assert(void 0===d),jspb.asserts.assert(c===a.length-1),d=g,g=void 0);h&&h.constructor==Object&&(jspb.asserts.assert(void 0===e),jspb.asserts.assert(c===b.length-1),e=h,h=void 0);if(!jspb.Message.compareFields(g,h))return!1}return d||e?(d=d||{},e=e||{},jspb.Message.compareExtensions(d,e)):!0}if(a.constructor===Object)return jspb.Message.compareExtensions(a,b);throw Error("Invalid type in JSPB array");};goog.exportProperty(jspb.Message,"compareFields",jspb.Message.compareFields);
jspb.Message.prototype.cloneMessage=function(){return jspb.Message.cloneMessage(this)};goog.exportProperty(jspb.Message.prototype,"cloneMessage",jspb.Message.prototype.cloneMessage);jspb.Message.prototype.clone=function(){return jspb.Message.cloneMessage(this)};goog.exportProperty(jspb.Message.prototype,"clone",jspb.Message.prototype.clone);jspb.Message.clone=function(a){return jspb.Message.cloneMessage(a)};goog.exportProperty(jspb.Message,"clone",jspb.Message.clone);jspb.Message.cloneMessage=function(a){return new a.constructor(jspb.Message.clone_(a.toArray()))};
jspb.Message.copyInto=function(a,b){jspb.asserts.assertInstanceof(a,jspb.Message);jspb.asserts.assertInstanceof(b,jspb.Message);jspb.asserts.assert(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=jspb.Message.clone(a);for(var c=b.toArray(),d=a.toArray(),e=c.length=0;e<d.length;e++)c[e]=d[e];b.wrappers_=a.wrappers_;b.extensionObject_=a.extensionObject_};goog.exportProperty(jspb.Message,"copyInto",jspb.Message.copyInto);
jspb.Message.clone_=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?jspb.Message.clone_(jspb.asserts.assert(d)):d)}return b}if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?jspb.Message.clone_(jspb.asserts.assert(d)):d);return b};jspb.Message.registerMessageType=function(a,b){b.messageId=a};
goog.exportProperty(jspb.Message,"registerMessageType",jspb.Message.registerMessageType);jspb.Message.messageSetExtensions={};jspb.Message.messageSetExtensionsBinary={};jspb.Export={};"object"===typeof exports&&(exports.Map=jspb.Map,exports.Message=jspb.Message,exports.BinaryReader=jspb.BinaryReader,exports.BinaryWriter=jspb.BinaryWriter,exports.ExtensionFieldInfo=jspb.ExtensionFieldInfo,exports.ExtensionFieldBinaryInfo=jspb.ExtensionFieldBinaryInfo,exports.exportSymbol=goog.exportSymbol,exports.inherits=goog.inherits,exports.object={extend:goog.object.extend},exports.typeOf=goog.typeOf);

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
goog.exportSymbol('proto.qmq.BinaryFile', null, global);
goog.exportSymbol('proto.qmq.Bool', null, global);
goog.exportSymbol('proto.qmq.ConnectionState', null, global);
goog.exportSymbol('proto.qmq.ConnectionState.ConnectionStateEnum', null, global);
goog.exportSymbol('proto.qmq.DatabaseEntity', null, global);
goog.exportSymbol('proto.qmq.DatabaseEntitySchema', null, global);
goog.exportSymbol('proto.qmq.DatabaseField', null, global);
goog.exportSymbol('proto.qmq.DatabaseFieldSchema', null, global);
goog.exportSymbol('proto.qmq.DatabaseNotification', null, global);
goog.exportSymbol('proto.qmq.DatabaseNotificationConfig', null, global);
goog.exportSymbol('proto.qmq.DatabaseRequest', null, global);
goog.exportSymbol('proto.qmq.DatabaseSnapshot', null, global);
goog.exportSymbol('proto.qmq.EntityReference', null, global);
goog.exportSymbol('proto.qmq.Float', null, global);
goog.exportSymbol('proto.qmq.GarageDoorState', null, global);
goog.exportSymbol('proto.qmq.GarageDoorState.GarageDoorStateEnum', null, global);
goog.exportSymbol('proto.qmq.Int', null, global);
goog.exportSymbol('proto.qmq.LogMessage', null, global);
goog.exportSymbol('proto.qmq.LogMessage.LogLevelEnum', null, global);
goog.exportSymbol('proto.qmq.String', null, global);
goog.exportSymbol('proto.qmq.Timestamp', null, global);
goog.exportSymbol('proto.qmq.WebConfigCreateEntityRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigCreateEntityResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigCreateEntityResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigCreateSnapshotRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigCreateSnapshotResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigCreateSnapshotResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigDeleteEntityRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigDeleteEntityResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigDeleteEntityResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetAllFieldsRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetAllFieldsResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntityRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntityResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntityResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntitySchemaRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntitySchemaResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntitySchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntityTypesRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetEntityTypesResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetFieldSchemaRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetFieldSchemaResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetFieldSchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetRootRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigGetRootResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigRestoreSnapshotRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigRestoreSnapshotResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigRestoreSnapshotResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigSetEntitySchemaRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigSetEntitySchemaResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigSetEntitySchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebConfigSetFieldSchemaRequest', null, global);
goog.exportSymbol('proto.qmq.WebConfigSetFieldSchemaResponse', null, global);
goog.exportSymbol('proto.qmq.WebConfigSetFieldSchemaResponse.StatusEnum', null, global);
goog.exportSymbol('proto.qmq.WebHeader', null, global);
goog.exportSymbol('proto.qmq.WebMessage', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeDatabaseRequest', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeDatabaseRequest.RequestTypeEnum', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeDatabaseResponse', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeGetNotificationsRequest', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeGetNotificationsResponse', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeRegisterNotificationRequest', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeRegisterNotificationResponse', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeUnregisterNotificationRequest', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeUnregisterNotificationResponse', null, global);
goog.exportSymbol('proto.qmq.WebRuntimeUnregisterNotificationResponse.StatusEnum', null, global);
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
proto.qmq.WebHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebHeader.displayName = 'proto.qmq.WebHeader';
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
proto.qmq.WebMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebMessage.displayName = 'proto.qmq.WebMessage';
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
proto.qmq.WebConfigCreateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigCreateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigCreateEntityRequest.displayName = 'proto.qmq.WebConfigCreateEntityRequest';
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
proto.qmq.WebConfigCreateEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigCreateEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigCreateEntityResponse.displayName = 'proto.qmq.WebConfigCreateEntityResponse';
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
proto.qmq.WebConfigDeleteEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigDeleteEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigDeleteEntityRequest.displayName = 'proto.qmq.WebConfigDeleteEntityRequest';
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
proto.qmq.WebConfigDeleteEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigDeleteEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigDeleteEntityResponse.displayName = 'proto.qmq.WebConfigDeleteEntityResponse';
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
proto.qmq.WebConfigGetEntityTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetEntityTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetEntityTypesRequest.displayName = 'proto.qmq.WebConfigGetEntityTypesRequest';
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
proto.qmq.WebConfigGetEntityTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebConfigGetEntityTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebConfigGetEntityTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetEntityTypesResponse.displayName = 'proto.qmq.WebConfigGetEntityTypesResponse';
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
proto.qmq.WebConfigGetEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetEntityRequest.displayName = 'proto.qmq.WebConfigGetEntityRequest';
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
proto.qmq.WebConfigGetEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetEntityResponse.displayName = 'proto.qmq.WebConfigGetEntityResponse';
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
proto.qmq.WebConfigGetFieldSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetFieldSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetFieldSchemaRequest.displayName = 'proto.qmq.WebConfigGetFieldSchemaRequest';
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
proto.qmq.WebConfigGetFieldSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetFieldSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetFieldSchemaResponse.displayName = 'proto.qmq.WebConfigGetFieldSchemaResponse';
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
proto.qmq.WebConfigSetFieldSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigSetFieldSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigSetFieldSchemaRequest.displayName = 'proto.qmq.WebConfigSetFieldSchemaRequest';
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
proto.qmq.WebConfigSetFieldSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigSetFieldSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigSetFieldSchemaResponse.displayName = 'proto.qmq.WebConfigSetFieldSchemaResponse';
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
proto.qmq.WebConfigGetEntitySchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetEntitySchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetEntitySchemaRequest.displayName = 'proto.qmq.WebConfigGetEntitySchemaRequest';
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
proto.qmq.WebConfigGetEntitySchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetEntitySchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetEntitySchemaResponse.displayName = 'proto.qmq.WebConfigGetEntitySchemaResponse';
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
proto.qmq.WebConfigSetEntitySchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebConfigSetEntitySchemaRequest.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebConfigSetEntitySchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigSetEntitySchemaRequest.displayName = 'proto.qmq.WebConfigSetEntitySchemaRequest';
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
proto.qmq.WebConfigSetEntitySchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigSetEntitySchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigSetEntitySchemaResponse.displayName = 'proto.qmq.WebConfigSetEntitySchemaResponse';
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
proto.qmq.WebConfigCreateSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigCreateSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigCreateSnapshotRequest.displayName = 'proto.qmq.WebConfigCreateSnapshotRequest';
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
proto.qmq.WebConfigCreateSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigCreateSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigCreateSnapshotResponse.displayName = 'proto.qmq.WebConfigCreateSnapshotResponse';
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
proto.qmq.WebConfigRestoreSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigRestoreSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigRestoreSnapshotRequest.displayName = 'proto.qmq.WebConfigRestoreSnapshotRequest';
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
proto.qmq.WebConfigRestoreSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigRestoreSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigRestoreSnapshotResponse.displayName = 'proto.qmq.WebConfigRestoreSnapshotResponse';
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
proto.qmq.WebConfigGetRootRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetRootRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetRootRequest.displayName = 'proto.qmq.WebConfigGetRootRequest';
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
proto.qmq.WebConfigGetRootResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetRootResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetRootResponse.displayName = 'proto.qmq.WebConfigGetRootResponse';
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
proto.qmq.WebConfigGetAllFieldsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebConfigGetAllFieldsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetAllFieldsRequest.displayName = 'proto.qmq.WebConfigGetAllFieldsRequest';
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
proto.qmq.WebConfigGetAllFieldsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebConfigGetAllFieldsResponse.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebConfigGetAllFieldsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebConfigGetAllFieldsResponse.displayName = 'proto.qmq.WebConfigGetAllFieldsResponse';
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
proto.qmq.WebRuntimeDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebRuntimeDatabaseRequest.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebRuntimeDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeDatabaseRequest.displayName = 'proto.qmq.WebRuntimeDatabaseRequest';
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
proto.qmq.WebRuntimeDatabaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebRuntimeDatabaseResponse.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebRuntimeDatabaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeDatabaseResponse.displayName = 'proto.qmq.WebRuntimeDatabaseResponse';
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
proto.qmq.WebRuntimeRegisterNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebRuntimeRegisterNotificationRequest.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebRuntimeRegisterNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeRegisterNotificationRequest.displayName = 'proto.qmq.WebRuntimeRegisterNotificationRequest';
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
proto.qmq.WebRuntimeRegisterNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebRuntimeRegisterNotificationResponse.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebRuntimeRegisterNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeRegisterNotificationResponse.displayName = 'proto.qmq.WebRuntimeRegisterNotificationResponse';
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
proto.qmq.WebRuntimeGetNotificationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebRuntimeGetNotificationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeGetNotificationsRequest.displayName = 'proto.qmq.WebRuntimeGetNotificationsRequest';
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
proto.qmq.WebRuntimeGetNotificationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebRuntimeGetNotificationsResponse.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebRuntimeGetNotificationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeGetNotificationsResponse.displayName = 'proto.qmq.WebRuntimeGetNotificationsResponse';
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
proto.qmq.WebRuntimeUnregisterNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.WebRuntimeUnregisterNotificationRequest.repeatedFields_, null);
};
goog.inherits(proto.qmq.WebRuntimeUnregisterNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeUnregisterNotificationRequest.displayName = 'proto.qmq.WebRuntimeUnregisterNotificationRequest';
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
proto.qmq.WebRuntimeUnregisterNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebRuntimeUnregisterNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeUnregisterNotificationResponse.displayName = 'proto.qmq.WebRuntimeUnregisterNotificationResponse';
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
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.displayName = 'proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest';
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
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.displayName = 'proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse';
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
proto.qmq.DatabaseEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.DatabaseEntity.repeatedFields_, null);
};
goog.inherits(proto.qmq.DatabaseEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseEntity.displayName = 'proto.qmq.DatabaseEntity';
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
proto.qmq.DatabaseField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.DatabaseField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseField.displayName = 'proto.qmq.DatabaseField';
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
proto.qmq.DatabaseNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.DatabaseNotificationConfig.repeatedFields_, null);
};
goog.inherits(proto.qmq.DatabaseNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseNotificationConfig.displayName = 'proto.qmq.DatabaseNotificationConfig';
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
proto.qmq.DatabaseNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.DatabaseNotification.repeatedFields_, null);
};
goog.inherits(proto.qmq.DatabaseNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseNotification.displayName = 'proto.qmq.DatabaseNotification';
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
proto.qmq.DatabaseEntitySchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.DatabaseEntitySchema.repeatedFields_, null);
};
goog.inherits(proto.qmq.DatabaseEntitySchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseEntitySchema.displayName = 'proto.qmq.DatabaseEntitySchema';
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
proto.qmq.DatabaseFieldSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.DatabaseFieldSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseFieldSchema.displayName = 'proto.qmq.DatabaseFieldSchema';
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
proto.qmq.DatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.DatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseRequest.displayName = 'proto.qmq.DatabaseRequest';
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
proto.qmq.DatabaseSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qmq.DatabaseSnapshot.repeatedFields_, null);
};
goog.inherits(proto.qmq.DatabaseSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.DatabaseSnapshot.displayName = 'proto.qmq.DatabaseSnapshot';
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
proto.qmq.Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.Int.displayName = 'proto.qmq.Int';
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
proto.qmq.String = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.String, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.String.displayName = 'proto.qmq.String';
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
proto.qmq.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.Timestamp.displayName = 'proto.qmq.Timestamp';
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
proto.qmq.Float = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.Float, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.Float.displayName = 'proto.qmq.Float';
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
proto.qmq.Bool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.Bool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.Bool.displayName = 'proto.qmq.Bool';
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
proto.qmq.EntityReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.EntityReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.EntityReference.displayName = 'proto.qmq.EntityReference';
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
proto.qmq.BinaryFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.BinaryFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.BinaryFile.displayName = 'proto.qmq.BinaryFile';
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
proto.qmq.LogMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.LogMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.LogMessage.displayName = 'proto.qmq.LogMessage';
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
proto.qmq.GarageDoorState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.GarageDoorState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.GarageDoorState.displayName = 'proto.qmq.GarageDoorState';
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
proto.qmq.ConnectionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qmq.ConnectionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qmq.ConnectionState.displayName = 'proto.qmq.ConnectionState';
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
proto.qmq.WebHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.qmq.WebHeader}
 */
proto.qmq.WebHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebHeader;
  return proto.qmq.WebHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebHeader}
 */
proto.qmq.WebHeader.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebHeader.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qmq.WebHeader.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebHeader} returns this
 */
proto.qmq.WebHeader.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qmq.WebHeader.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qmq.WebHeader} returns this
*/
proto.qmq.WebHeader.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebHeader} returns this
 */
proto.qmq.WebHeader.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebHeader.prototype.hasTimestamp = function() {
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
proto.qmq.WebMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.qmq.WebHeader.toObject(includeInstance, f),
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
 * @return {!proto.qmq.WebMessage}
 */
proto.qmq.WebMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebMessage;
  return proto.qmq.WebMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebMessage}
 */
proto.qmq.WebMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qmq.WebHeader;
      reader.readMessage(value,proto.qmq.WebHeader.deserializeBinaryFromReader);
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
proto.qmq.WebMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qmq.WebHeader.serializeBinaryToWriter
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
 * @return {?proto.qmq.WebHeader}
 */
proto.qmq.WebMessage.prototype.getHeader = function() {
  return /** @type{?proto.qmq.WebHeader} */ (
    jspb.Message.getWrapperField(this, proto.qmq.WebHeader, 1));
};


/**
 * @param {?proto.qmq.WebHeader|undefined} value
 * @return {!proto.qmq.WebMessage} returns this
*/
proto.qmq.WebMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebMessage} returns this
 */
proto.qmq.WebMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Any payload = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.qmq.WebMessage.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.qmq.WebMessage} returns this
*/
proto.qmq.WebMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebMessage} returns this
 */
proto.qmq.WebMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebMessage.prototype.hasPayload = function() {
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
proto.qmq.WebConfigCreateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigCreateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigCreateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateEntityRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigCreateEntityRequest}
 */
proto.qmq.WebConfigCreateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigCreateEntityRequest;
  return proto.qmq.WebConfigCreateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigCreateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigCreateEntityRequest}
 */
proto.qmq.WebConfigCreateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigCreateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigCreateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigCreateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateEntityRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigCreateEntityRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigCreateEntityRequest} returns this
 */
proto.qmq.WebConfigCreateEntityRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.qmq.WebConfigCreateEntityRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigCreateEntityRequest} returns this
 */
proto.qmq.WebConfigCreateEntityRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parentId = 3;
 * @return {string}
 */
proto.qmq.WebConfigCreateEntityRequest.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigCreateEntityRequest} returns this
 */
proto.qmq.WebConfigCreateEntityRequest.prototype.setParentid = function(value) {
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
proto.qmq.WebConfigCreateEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigCreateEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigCreateEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateEntityResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigCreateEntityResponse}
 */
proto.qmq.WebConfigCreateEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigCreateEntityResponse;
  return proto.qmq.WebConfigCreateEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigCreateEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigCreateEntityResponse}
 */
proto.qmq.WebConfigCreateEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigCreateEntityResponse.StatusEnum} */ (reader.readEnum());
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
proto.qmq.WebConfigCreateEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigCreateEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigCreateEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateEntityResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigCreateEntityResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigCreateEntityResponse.StatusEnum}
 */
proto.qmq.WebConfigCreateEntityResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigCreateEntityResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigCreateEntityResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigCreateEntityResponse} returns this
 */
proto.qmq.WebConfigCreateEntityResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.qmq.WebConfigCreateEntityResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigCreateEntityResponse} returns this
 */
proto.qmq.WebConfigCreateEntityResponse.prototype.setId = function(value) {
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
proto.qmq.WebConfigDeleteEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigDeleteEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigDeleteEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigDeleteEntityRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigDeleteEntityRequest}
 */
proto.qmq.WebConfigDeleteEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigDeleteEntityRequest;
  return proto.qmq.WebConfigDeleteEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigDeleteEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigDeleteEntityRequest}
 */
proto.qmq.WebConfigDeleteEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigDeleteEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigDeleteEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigDeleteEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigDeleteEntityRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigDeleteEntityRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigDeleteEntityRequest} returns this
 */
proto.qmq.WebConfigDeleteEntityRequest.prototype.setId = function(value) {
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
proto.qmq.WebConfigDeleteEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigDeleteEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigDeleteEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigDeleteEntityResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigDeleteEntityResponse}
 */
proto.qmq.WebConfigDeleteEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigDeleteEntityResponse;
  return proto.qmq.WebConfigDeleteEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigDeleteEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigDeleteEntityResponse}
 */
proto.qmq.WebConfigDeleteEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigDeleteEntityResponse.StatusEnum} */ (reader.readEnum());
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
proto.qmq.WebConfigDeleteEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigDeleteEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigDeleteEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigDeleteEntityResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigDeleteEntityResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigDeleteEntityResponse.StatusEnum}
 */
proto.qmq.WebConfigDeleteEntityResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigDeleteEntityResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigDeleteEntityResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigDeleteEntityResponse} returns this
 */
proto.qmq.WebConfigDeleteEntityResponse.prototype.setStatus = function(value) {
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
proto.qmq.WebConfigGetEntityTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetEntityTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetEntityTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityTypesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetEntityTypesRequest}
 */
proto.qmq.WebConfigGetEntityTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetEntityTypesRequest;
  return proto.qmq.WebConfigGetEntityTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetEntityTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetEntityTypesRequest}
 */
proto.qmq.WebConfigGetEntityTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetEntityTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetEntityTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetEntityTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebConfigGetEntityTypesResponse.repeatedFields_ = [1];



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
proto.qmq.WebConfigGetEntityTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetEntityTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetEntityTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityTypesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetEntityTypesResponse}
 */
proto.qmq.WebConfigGetEntityTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetEntityTypesResponse;
  return proto.qmq.WebConfigGetEntityTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetEntityTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetEntityTypesResponse}
 */
proto.qmq.WebConfigGetEntityTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetEntityTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetEntityTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetEntityTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityTypesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetEntityTypesResponse.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.WebConfigGetEntityTypesResponse} returns this
 */
proto.qmq.WebConfigGetEntityTypesResponse.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.WebConfigGetEntityTypesResponse} returns this
 */
proto.qmq.WebConfigGetEntityTypesResponse.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebConfigGetEntityTypesResponse} returns this
 */
proto.qmq.WebConfigGetEntityTypesResponse.prototype.clearTypesList = function() {
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
proto.qmq.WebConfigGetEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetEntityRequest}
 */
proto.qmq.WebConfigGetEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetEntityRequest;
  return proto.qmq.WebConfigGetEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetEntityRequest}
 */
proto.qmq.WebConfigGetEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetEntityRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigGetEntityRequest} returns this
 */
proto.qmq.WebConfigGetEntityRequest.prototype.setId = function(value) {
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
proto.qmq.WebConfigGetEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entity: (f = msg.getEntity()) && proto.qmq.DatabaseEntity.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebConfigGetEntityResponse}
 */
proto.qmq.WebConfigGetEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetEntityResponse;
  return proto.qmq.WebConfigGetEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetEntityResponse}
 */
proto.qmq.WebConfigGetEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigGetEntityResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qmq.DatabaseEntity;
      reader.readMessage(value,proto.qmq.DatabaseEntity.deserializeBinaryFromReader);
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
proto.qmq.WebConfigGetEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntityResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseEntity.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qmq.WebConfigGetEntityResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigGetEntityResponse.StatusEnum}
 */
proto.qmq.WebConfigGetEntityResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigGetEntityResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigGetEntityResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigGetEntityResponse} returns this
 */
proto.qmq.WebConfigGetEntityResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseEntity entity = 2;
 * @return {?proto.qmq.DatabaseEntity}
 */
proto.qmq.WebConfigGetEntityResponse.prototype.getEntity = function() {
  return /** @type{?proto.qmq.DatabaseEntity} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseEntity, 2));
};


/**
 * @param {?proto.qmq.DatabaseEntity|undefined} value
 * @return {!proto.qmq.WebConfigGetEntityResponse} returns this
*/
proto.qmq.WebConfigGetEntityResponse.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebConfigGetEntityResponse} returns this
 */
proto.qmq.WebConfigGetEntityResponse.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebConfigGetEntityResponse.prototype.hasEntity = function() {
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
proto.qmq.WebConfigGetFieldSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetFieldSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetFieldSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetFieldSchemaRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetFieldSchemaRequest}
 */
proto.qmq.WebConfigGetFieldSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetFieldSchemaRequest;
  return proto.qmq.WebConfigGetFieldSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetFieldSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetFieldSchemaRequest}
 */
proto.qmq.WebConfigGetFieldSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetFieldSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetFieldSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetFieldSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetFieldSchemaRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetFieldSchemaRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigGetFieldSchemaRequest} returns this
 */
proto.qmq.WebConfigGetFieldSchemaRequest.prototype.setField = function(value) {
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
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetFieldSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetFieldSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetFieldSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    schema: (f = msg.getSchema()) && proto.qmq.DatabaseFieldSchema.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebConfigGetFieldSchemaResponse}
 */
proto.qmq.WebConfigGetFieldSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetFieldSchemaResponse;
  return proto.qmq.WebConfigGetFieldSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetFieldSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetFieldSchemaResponse}
 */
proto.qmq.WebConfigGetFieldSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigGetFieldSchemaResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qmq.DatabaseFieldSchema;
      reader.readMessage(value,proto.qmq.DatabaseFieldSchema.deserializeBinaryFromReader);
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
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetFieldSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetFieldSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetFieldSchemaResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseFieldSchema.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qmq.WebConfigGetFieldSchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigGetFieldSchemaResponse.StatusEnum}
 */
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigGetFieldSchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigGetFieldSchemaResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigGetFieldSchemaResponse} returns this
 */
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseFieldSchema schema = 2;
 * @return {?proto.qmq.DatabaseFieldSchema}
 */
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.getSchema = function() {
  return /** @type{?proto.qmq.DatabaseFieldSchema} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseFieldSchema, 2));
};


/**
 * @param {?proto.qmq.DatabaseFieldSchema|undefined} value
 * @return {!proto.qmq.WebConfigGetFieldSchemaResponse} returns this
*/
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebConfigGetFieldSchemaResponse} returns this
 */
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebConfigGetFieldSchemaResponse.prototype.hasSchema = function() {
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
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigSetFieldSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigSetFieldSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetFieldSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    schema: (f = msg.getSchema()) && proto.qmq.DatabaseFieldSchema.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebConfigSetFieldSchemaRequest}
 */
proto.qmq.WebConfigSetFieldSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigSetFieldSchemaRequest;
  return proto.qmq.WebConfigSetFieldSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigSetFieldSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigSetFieldSchemaRequest}
 */
proto.qmq.WebConfigSetFieldSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.qmq.DatabaseFieldSchema;
      reader.readMessage(value,proto.qmq.DatabaseFieldSchema.deserializeBinaryFromReader);
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
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigSetFieldSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigSetFieldSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetFieldSchemaRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseFieldSchema.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigSetFieldSchemaRequest} returns this
 */
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatabaseFieldSchema schema = 2;
 * @return {?proto.qmq.DatabaseFieldSchema}
 */
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.getSchema = function() {
  return /** @type{?proto.qmq.DatabaseFieldSchema} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseFieldSchema, 2));
};


/**
 * @param {?proto.qmq.DatabaseFieldSchema|undefined} value
 * @return {!proto.qmq.WebConfigSetFieldSchemaRequest} returns this
*/
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebConfigSetFieldSchemaRequest} returns this
 */
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebConfigSetFieldSchemaRequest.prototype.hasSchema = function() {
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
proto.qmq.WebConfigSetFieldSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigSetFieldSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigSetFieldSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetFieldSchemaResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigSetFieldSchemaResponse}
 */
proto.qmq.WebConfigSetFieldSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigSetFieldSchemaResponse;
  return proto.qmq.WebConfigSetFieldSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigSetFieldSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigSetFieldSchemaResponse}
 */
proto.qmq.WebConfigSetFieldSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigSetFieldSchemaResponse.StatusEnum} */ (reader.readEnum());
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
proto.qmq.WebConfigSetFieldSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigSetFieldSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigSetFieldSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetFieldSchemaResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigSetFieldSchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigSetFieldSchemaResponse.StatusEnum}
 */
proto.qmq.WebConfigSetFieldSchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigSetFieldSchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigSetFieldSchemaResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigSetFieldSchemaResponse} returns this
 */
proto.qmq.WebConfigSetFieldSchemaResponse.prototype.setStatus = function(value) {
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
proto.qmq.WebConfigGetEntitySchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetEntitySchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetEntitySchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntitySchemaRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetEntitySchemaRequest}
 */
proto.qmq.WebConfigGetEntitySchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetEntitySchemaRequest;
  return proto.qmq.WebConfigGetEntitySchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetEntitySchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetEntitySchemaRequest}
 */
proto.qmq.WebConfigGetEntitySchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetEntitySchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetEntitySchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetEntitySchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntitySchemaRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetEntitySchemaRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigGetEntitySchemaRequest} returns this
 */
proto.qmq.WebConfigGetEntitySchemaRequest.prototype.setType = function(value) {
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
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetEntitySchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetEntitySchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntitySchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    schema: (f = msg.getSchema()) && proto.qmq.DatabaseEntitySchema.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebConfigGetEntitySchemaResponse}
 */
proto.qmq.WebConfigGetEntitySchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetEntitySchemaResponse;
  return proto.qmq.WebConfigGetEntitySchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetEntitySchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetEntitySchemaResponse}
 */
proto.qmq.WebConfigGetEntitySchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigGetEntitySchemaResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qmq.DatabaseEntitySchema;
      reader.readMessage(value,proto.qmq.DatabaseEntitySchema.deserializeBinaryFromReader);
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
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetEntitySchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetEntitySchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetEntitySchemaResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseEntitySchema.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qmq.WebConfigGetEntitySchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigGetEntitySchemaResponse.StatusEnum}
 */
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigGetEntitySchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigGetEntitySchemaResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigGetEntitySchemaResponse} returns this
 */
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseEntitySchema schema = 2;
 * @return {?proto.qmq.DatabaseEntitySchema}
 */
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.getSchema = function() {
  return /** @type{?proto.qmq.DatabaseEntitySchema} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseEntitySchema, 2));
};


/**
 * @param {?proto.qmq.DatabaseEntitySchema|undefined} value
 * @return {!proto.qmq.WebConfigGetEntitySchemaResponse} returns this
*/
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebConfigGetEntitySchemaResponse} returns this
 */
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebConfigGetEntitySchemaResponse.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebConfigSetEntitySchemaRequest.repeatedFields_ = [2];



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
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigSetEntitySchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigSetEntitySchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetEntitySchemaRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigSetEntitySchemaRequest}
 */
proto.qmq.WebConfigSetEntitySchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigSetEntitySchemaRequest;
  return proto.qmq.WebConfigSetEntitySchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigSetEntitySchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigSetEntitySchemaRequest}
 */
proto.qmq.WebConfigSetEntitySchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigSetEntitySchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigSetEntitySchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetEntitySchemaRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string fields = 2;
 * @return {!Array<string>}
 */
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebConfigSetEntitySchemaRequest} returns this
 */
proto.qmq.WebConfigSetEntitySchemaRequest.prototype.clearFieldsList = function() {
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
proto.qmq.WebConfigSetEntitySchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigSetEntitySchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigSetEntitySchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetEntitySchemaResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigSetEntitySchemaResponse}
 */
proto.qmq.WebConfigSetEntitySchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigSetEntitySchemaResponse;
  return proto.qmq.WebConfigSetEntitySchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigSetEntitySchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigSetEntitySchemaResponse}
 */
proto.qmq.WebConfigSetEntitySchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigSetEntitySchemaResponse.StatusEnum} */ (reader.readEnum());
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
proto.qmq.WebConfigSetEntitySchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigSetEntitySchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigSetEntitySchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigSetEntitySchemaResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigSetEntitySchemaResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigSetEntitySchemaResponse.StatusEnum}
 */
proto.qmq.WebConfigSetEntitySchemaResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigSetEntitySchemaResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigSetEntitySchemaResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigSetEntitySchemaResponse} returns this
 */
proto.qmq.WebConfigSetEntitySchemaResponse.prototype.setStatus = function(value) {
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
proto.qmq.WebConfigCreateSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigCreateSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigCreateSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateSnapshotRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigCreateSnapshotRequest}
 */
proto.qmq.WebConfigCreateSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigCreateSnapshotRequest;
  return proto.qmq.WebConfigCreateSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigCreateSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigCreateSnapshotRequest}
 */
proto.qmq.WebConfigCreateSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigCreateSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigCreateSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigCreateSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigCreateSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigCreateSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigCreateSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    snapshot: (f = msg.getSnapshot()) && proto.qmq.DatabaseSnapshot.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebConfigCreateSnapshotResponse}
 */
proto.qmq.WebConfigCreateSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigCreateSnapshotResponse;
  return proto.qmq.WebConfigCreateSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigCreateSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigCreateSnapshotResponse}
 */
proto.qmq.WebConfigCreateSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigCreateSnapshotResponse.StatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.qmq.DatabaseSnapshot;
      reader.readMessage(value,proto.qmq.DatabaseSnapshot.deserializeBinaryFromReader);
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
proto.qmq.WebConfigCreateSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigCreateSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigCreateSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigCreateSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qmq.WebConfigCreateSnapshotResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigCreateSnapshotResponse.StatusEnum}
 */
proto.qmq.WebConfigCreateSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigCreateSnapshotResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigCreateSnapshotResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigCreateSnapshotResponse} returns this
 */
proto.qmq.WebConfigCreateSnapshotResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DatabaseSnapshot snapshot = 2;
 * @return {?proto.qmq.DatabaseSnapshot}
 */
proto.qmq.WebConfigCreateSnapshotResponse.prototype.getSnapshot = function() {
  return /** @type{?proto.qmq.DatabaseSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseSnapshot, 2));
};


/**
 * @param {?proto.qmq.DatabaseSnapshot|undefined} value
 * @return {!proto.qmq.WebConfigCreateSnapshotResponse} returns this
*/
proto.qmq.WebConfigCreateSnapshotResponse.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebConfigCreateSnapshotResponse} returns this
 */
proto.qmq.WebConfigCreateSnapshotResponse.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebConfigCreateSnapshotResponse.prototype.hasSnapshot = function() {
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
proto.qmq.WebConfigRestoreSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigRestoreSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigRestoreSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigRestoreSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.qmq.DatabaseSnapshot.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebConfigRestoreSnapshotRequest}
 */
proto.qmq.WebConfigRestoreSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigRestoreSnapshotRequest;
  return proto.qmq.WebConfigRestoreSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigRestoreSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigRestoreSnapshotRequest}
 */
proto.qmq.WebConfigRestoreSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qmq.DatabaseSnapshot;
      reader.readMessage(value,proto.qmq.DatabaseSnapshot.deserializeBinaryFromReader);
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
proto.qmq.WebConfigRestoreSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigRestoreSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigRestoreSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigRestoreSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qmq.DatabaseSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * optional DatabaseSnapshot snapshot = 1;
 * @return {?proto.qmq.DatabaseSnapshot}
 */
proto.qmq.WebConfigRestoreSnapshotRequest.prototype.getSnapshot = function() {
  return /** @type{?proto.qmq.DatabaseSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseSnapshot, 1));
};


/**
 * @param {?proto.qmq.DatabaseSnapshot|undefined} value
 * @return {!proto.qmq.WebConfigRestoreSnapshotRequest} returns this
*/
proto.qmq.WebConfigRestoreSnapshotRequest.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebConfigRestoreSnapshotRequest} returns this
 */
proto.qmq.WebConfigRestoreSnapshotRequest.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebConfigRestoreSnapshotRequest.prototype.hasSnapshot = function() {
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
proto.qmq.WebConfigRestoreSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigRestoreSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigRestoreSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigRestoreSnapshotResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigRestoreSnapshotResponse}
 */
proto.qmq.WebConfigRestoreSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigRestoreSnapshotResponse;
  return proto.qmq.WebConfigRestoreSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigRestoreSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigRestoreSnapshotResponse}
 */
proto.qmq.WebConfigRestoreSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebConfigRestoreSnapshotResponse.StatusEnum} */ (reader.readEnum());
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
proto.qmq.WebConfigRestoreSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigRestoreSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigRestoreSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigRestoreSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigRestoreSnapshotResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebConfigRestoreSnapshotResponse.StatusEnum}
 */
proto.qmq.WebConfigRestoreSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebConfigRestoreSnapshotResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebConfigRestoreSnapshotResponse.StatusEnum} value
 * @return {!proto.qmq.WebConfigRestoreSnapshotResponse} returns this
 */
proto.qmq.WebConfigRestoreSnapshotResponse.prototype.setStatus = function(value) {
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
proto.qmq.WebConfigGetRootRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetRootRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetRootRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetRootRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetRootRequest}
 */
proto.qmq.WebConfigGetRootRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetRootRequest;
  return proto.qmq.WebConfigGetRootRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetRootRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetRootRequest}
 */
proto.qmq.WebConfigGetRootRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetRootRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetRootRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetRootRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetRootRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetRootResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetRootResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetRootResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetRootResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetRootResponse}
 */
proto.qmq.WebConfigGetRootResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetRootResponse;
  return proto.qmq.WebConfigGetRootResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetRootResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetRootResponse}
 */
proto.qmq.WebConfigGetRootResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetRootResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetRootResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetRootResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetRootResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetRootResponse.prototype.getRootid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.WebConfigGetRootResponse} returns this
 */
proto.qmq.WebConfigGetRootResponse.prototype.setRootid = function(value) {
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
proto.qmq.WebConfigGetAllFieldsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetAllFieldsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetAllFieldsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetAllFieldsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetAllFieldsRequest}
 */
proto.qmq.WebConfigGetAllFieldsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetAllFieldsRequest;
  return proto.qmq.WebConfigGetAllFieldsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetAllFieldsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetAllFieldsRequest}
 */
proto.qmq.WebConfigGetAllFieldsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetAllFieldsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetAllFieldsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetAllFieldsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetAllFieldsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebConfigGetAllFieldsResponse.repeatedFields_ = [1];



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
proto.qmq.WebConfigGetAllFieldsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebConfigGetAllFieldsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebConfigGetAllFieldsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetAllFieldsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebConfigGetAllFieldsResponse}
 */
proto.qmq.WebConfigGetAllFieldsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebConfigGetAllFieldsResponse;
  return proto.qmq.WebConfigGetAllFieldsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebConfigGetAllFieldsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebConfigGetAllFieldsResponse}
 */
proto.qmq.WebConfigGetAllFieldsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebConfigGetAllFieldsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebConfigGetAllFieldsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebConfigGetAllFieldsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebConfigGetAllFieldsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebConfigGetAllFieldsResponse.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.WebConfigGetAllFieldsResponse} returns this
 */
proto.qmq.WebConfigGetAllFieldsResponse.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.WebConfigGetAllFieldsResponse} returns this
 */
proto.qmq.WebConfigGetAllFieldsResponse.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebConfigGetAllFieldsResponse} returns this
 */
proto.qmq.WebConfigGetAllFieldsResponse.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebRuntimeDatabaseRequest.repeatedFields_ = [2];



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
proto.qmq.WebRuntimeDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesttype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.qmq.DatabaseRequest.toObject, includeInstance)
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
 * @return {!proto.qmq.WebRuntimeDatabaseRequest}
 */
proto.qmq.WebRuntimeDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeDatabaseRequest;
  return proto.qmq.WebRuntimeDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeDatabaseRequest}
 */
proto.qmq.WebRuntimeDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebRuntimeDatabaseRequest.RequestTypeEnum} */ (reader.readEnum());
      msg.setRequesttype(value);
      break;
    case 2:
      var value = new proto.qmq.DatabaseRequest;
      reader.readMessage(value,proto.qmq.DatabaseRequest.deserializeBinaryFromReader);
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
proto.qmq.WebRuntimeDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseRequest.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.qmq.WebRuntimeDatabaseRequest.RequestTypeEnum = {
  UNSPECIFIED: 0,
  READ: 1,
  WRITE: 2
};

/**
 * optional RequestTypeEnum requestType = 1;
 * @return {!proto.qmq.WebRuntimeDatabaseRequest.RequestTypeEnum}
 */
proto.qmq.WebRuntimeDatabaseRequest.prototype.getRequesttype = function() {
  return /** @type {!proto.qmq.WebRuntimeDatabaseRequest.RequestTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebRuntimeDatabaseRequest.RequestTypeEnum} value
 * @return {!proto.qmq.WebRuntimeDatabaseRequest} returns this
 */
proto.qmq.WebRuntimeDatabaseRequest.prototype.setRequesttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated DatabaseRequest requests = 2;
 * @return {!Array<!proto.qmq.DatabaseRequest>}
 */
proto.qmq.WebRuntimeDatabaseRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseRequest, 2));
};


/**
 * @param {!Array<!proto.qmq.DatabaseRequest>} value
 * @return {!proto.qmq.WebRuntimeDatabaseRequest} returns this
*/
proto.qmq.WebRuntimeDatabaseRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qmq.DatabaseRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseRequest}
 */
proto.qmq.WebRuntimeDatabaseRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qmq.DatabaseRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebRuntimeDatabaseRequest} returns this
 */
proto.qmq.WebRuntimeDatabaseRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebRuntimeDatabaseResponse.repeatedFields_ = [2];



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
proto.qmq.WebRuntimeDatabaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeDatabaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeDatabaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeDatabaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseList: jspb.Message.toObjectList(msg.getResponseList(),
    proto.qmq.DatabaseRequest.toObject, includeInstance)
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
 * @return {!proto.qmq.WebRuntimeDatabaseResponse}
 */
proto.qmq.WebRuntimeDatabaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeDatabaseResponse;
  return proto.qmq.WebRuntimeDatabaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeDatabaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeDatabaseResponse}
 */
proto.qmq.WebRuntimeDatabaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.qmq.DatabaseRequest;
      reader.readMessage(value,proto.qmq.DatabaseRequest.deserializeBinaryFromReader);
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
proto.qmq.WebRuntimeDatabaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeDatabaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeDatabaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeDatabaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.qmq.DatabaseRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseRequest response = 2;
 * @return {!Array<!proto.qmq.DatabaseRequest>}
 */
proto.qmq.WebRuntimeDatabaseResponse.prototype.getResponseList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseRequest, 2));
};


/**
 * @param {!Array<!proto.qmq.DatabaseRequest>} value
 * @return {!proto.qmq.WebRuntimeDatabaseResponse} returns this
*/
proto.qmq.WebRuntimeDatabaseResponse.prototype.setResponseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qmq.DatabaseRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseRequest}
 */
proto.qmq.WebRuntimeDatabaseResponse.prototype.addResponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qmq.DatabaseRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebRuntimeDatabaseResponse} returns this
 */
proto.qmq.WebRuntimeDatabaseResponse.prototype.clearResponseList = function() {
  return this.setResponseList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.repeatedFields_ = [1];



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
proto.qmq.WebRuntimeRegisterNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeRegisterNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeRegisterNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.qmq.DatabaseNotificationConfig.toObject, includeInstance)
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
 * @return {!proto.qmq.WebRuntimeRegisterNotificationRequest}
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeRegisterNotificationRequest;
  return proto.qmq.WebRuntimeRegisterNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeRegisterNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeRegisterNotificationRequest}
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qmq.DatabaseNotificationConfig;
      reader.readMessage(value,proto.qmq.DatabaseNotificationConfig.deserializeBinaryFromReader);
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
proto.qmq.WebRuntimeRegisterNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeRegisterNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeRegisterNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qmq.DatabaseNotificationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseNotificationConfig requests = 1;
 * @return {!Array<!proto.qmq.DatabaseNotificationConfig>}
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseNotificationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseNotificationConfig, 1));
};


/**
 * @param {!Array<!proto.qmq.DatabaseNotificationConfig>} value
 * @return {!proto.qmq.WebRuntimeRegisterNotificationRequest} returns this
*/
proto.qmq.WebRuntimeRegisterNotificationRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qmq.DatabaseNotificationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseNotificationConfig}
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qmq.DatabaseNotificationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebRuntimeRegisterNotificationRequest} returns this
 */
proto.qmq.WebRuntimeRegisterNotificationRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.repeatedFields_ = [1];



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
proto.qmq.WebRuntimeRegisterNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeRegisterNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeRegisterNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebRuntimeRegisterNotificationResponse}
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeRegisterNotificationResponse;
  return proto.qmq.WebRuntimeRegisterNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeRegisterNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeRegisterNotificationResponse}
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebRuntimeRegisterNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeRegisterNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeRegisterNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebRuntimeRegisterNotificationResponse.prototype.getTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.WebRuntimeRegisterNotificationResponse} returns this
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.prototype.setTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.WebRuntimeRegisterNotificationResponse} returns this
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.prototype.addTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebRuntimeRegisterNotificationResponse} returns this
 */
proto.qmq.WebRuntimeRegisterNotificationResponse.prototype.clearTokensList = function() {
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
proto.qmq.WebRuntimeGetNotificationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeGetNotificationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeGetNotificationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetNotificationsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebRuntimeGetNotificationsRequest}
 */
proto.qmq.WebRuntimeGetNotificationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeGetNotificationsRequest;
  return proto.qmq.WebRuntimeGetNotificationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeGetNotificationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeGetNotificationsRequest}
 */
proto.qmq.WebRuntimeGetNotificationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebRuntimeGetNotificationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeGetNotificationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeGetNotificationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetNotificationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebRuntimeGetNotificationsResponse.repeatedFields_ = [1];



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
proto.qmq.WebRuntimeGetNotificationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeGetNotificationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeGetNotificationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetNotificationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    notificationsList: jspb.Message.toObjectList(msg.getNotificationsList(),
    proto.qmq.DatabaseNotification.toObject, includeInstance)
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
 * @return {!proto.qmq.WebRuntimeGetNotificationsResponse}
 */
proto.qmq.WebRuntimeGetNotificationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeGetNotificationsResponse;
  return proto.qmq.WebRuntimeGetNotificationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeGetNotificationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeGetNotificationsResponse}
 */
proto.qmq.WebRuntimeGetNotificationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qmq.DatabaseNotification;
      reader.readMessage(value,proto.qmq.DatabaseNotification.deserializeBinaryFromReader);
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
proto.qmq.WebRuntimeGetNotificationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeGetNotificationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeGetNotificationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetNotificationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qmq.DatabaseNotification.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseNotification notifications = 1;
 * @return {!Array<!proto.qmq.DatabaseNotification>}
 */
proto.qmq.WebRuntimeGetNotificationsResponse.prototype.getNotificationsList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseNotification>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseNotification, 1));
};


/**
 * @param {!Array<!proto.qmq.DatabaseNotification>} value
 * @return {!proto.qmq.WebRuntimeGetNotificationsResponse} returns this
*/
proto.qmq.WebRuntimeGetNotificationsResponse.prototype.setNotificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qmq.DatabaseNotification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseNotification}
 */
proto.qmq.WebRuntimeGetNotificationsResponse.prototype.addNotifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qmq.DatabaseNotification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebRuntimeGetNotificationsResponse} returns this
 */
proto.qmq.WebRuntimeGetNotificationsResponse.prototype.clearNotificationsList = function() {
  return this.setNotificationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.repeatedFields_ = [1];



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
proto.qmq.WebRuntimeUnregisterNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeUnregisterNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationRequest}
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeUnregisterNotificationRequest;
  return proto.qmq.WebRuntimeUnregisterNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationRequest}
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebRuntimeUnregisterNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeUnregisterNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebRuntimeUnregisterNotificationRequest.prototype.getTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationRequest} returns this
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.prototype.setTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationRequest} returns this
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.prototype.addTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationRequest} returns this
 */
proto.qmq.WebRuntimeUnregisterNotificationRequest.prototype.clearTokensList = function() {
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
proto.qmq.WebRuntimeUnregisterNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeUnregisterNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeUnregisterNotificationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationResponse}
 */
proto.qmq.WebRuntimeUnregisterNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeUnregisterNotificationResponse;
  return proto.qmq.WebRuntimeUnregisterNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationResponse}
 */
proto.qmq.WebRuntimeUnregisterNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.WebRuntimeUnregisterNotificationResponse.StatusEnum} */ (reader.readEnum());
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
proto.qmq.WebRuntimeUnregisterNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeUnregisterNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeUnregisterNotificationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebRuntimeUnregisterNotificationResponse.StatusEnum = {
  UNSPECIFIED: 0,
  SUCCESS: 1,
  FAILURE: 2
};

/**
 * optional StatusEnum status = 1;
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationResponse.StatusEnum}
 */
proto.qmq.WebRuntimeUnregisterNotificationResponse.prototype.getStatus = function() {
  return /** @type {!proto.qmq.WebRuntimeUnregisterNotificationResponse.StatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.WebRuntimeUnregisterNotificationResponse.StatusEnum} value
 * @return {!proto.qmq.WebRuntimeUnregisterNotificationResponse} returns this
 */
proto.qmq.WebRuntimeUnregisterNotificationResponse.prototype.setStatus = function(value) {
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
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest}
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest;
  return proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest}
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.qmq.ConnectionState.toObject(includeInstance, f)
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
 * @return {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse}
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse;
  return proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse}
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qmq.ConnectionState;
      reader.readMessage(value,proto.qmq.ConnectionState.deserializeBinaryFromReader);
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
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qmq.ConnectionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConnectionState status = 1;
 * @return {?proto.qmq.ConnectionState}
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.qmq.ConnectionState} */ (
    jspb.Message.getWrapperField(this, proto.qmq.ConnectionState, 1));
};


/**
 * @param {?proto.qmq.ConnectionState|undefined} value
 * @return {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse} returns this
*/
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse} returns this
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.WebRuntimeGetDatabaseConnectionStatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.DatabaseEntity.repeatedFields_ = [5];



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
proto.qmq.DatabaseEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parent: (f = msg.getParent()) && proto.qmq.EntityReference.toObject(includeInstance, f),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.qmq.EntityReference.toObject, includeInstance)
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
 * @return {!proto.qmq.DatabaseEntity}
 */
proto.qmq.DatabaseEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseEntity;
  return proto.qmq.DatabaseEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseEntity}
 */
proto.qmq.DatabaseEntity.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.qmq.EntityReference;
      reader.readMessage(value,proto.qmq.EntityReference.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    case 5:
      var value = new proto.qmq.EntityReference;
      reader.readMessage(value,proto.qmq.EntityReference.deserializeBinaryFromReader);
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
proto.qmq.DatabaseEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseEntity.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.EntityReference.serializeBinaryToWriter
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.qmq.EntityReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qmq.DatabaseEntity.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseEntity} returns this
 */
proto.qmq.DatabaseEntity.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.qmq.DatabaseEntity.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseEntity} returns this
 */
proto.qmq.DatabaseEntity.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.qmq.DatabaseEntity.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseEntity} returns this
 */
proto.qmq.DatabaseEntity.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EntityReference parent = 4;
 * @return {?proto.qmq.EntityReference}
 */
proto.qmq.DatabaseEntity.prototype.getParent = function() {
  return /** @type{?proto.qmq.EntityReference} */ (
    jspb.Message.getWrapperField(this, proto.qmq.EntityReference, 4));
};


/**
 * @param {?proto.qmq.EntityReference|undefined} value
 * @return {!proto.qmq.DatabaseEntity} returns this
*/
proto.qmq.DatabaseEntity.prototype.setParent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseEntity} returns this
 */
proto.qmq.DatabaseEntity.prototype.clearParent = function() {
  return this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseEntity.prototype.hasParent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated EntityReference children = 5;
 * @return {!Array<!proto.qmq.EntityReference>}
 */
proto.qmq.DatabaseEntity.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.qmq.EntityReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.EntityReference, 5));
};


/**
 * @param {!Array<!proto.qmq.EntityReference>} value
 * @return {!proto.qmq.DatabaseEntity} returns this
*/
proto.qmq.DatabaseEntity.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.qmq.EntityReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.EntityReference}
 */
proto.qmq.DatabaseEntity.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.qmq.EntityReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseEntity} returns this
 */
proto.qmq.DatabaseEntity.prototype.clearChildrenList = function() {
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
proto.qmq.DatabaseField.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseField.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.DatabaseField}
 */
proto.qmq.DatabaseField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseField;
  return proto.qmq.DatabaseField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseField}
 */
proto.qmq.DatabaseField.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.DatabaseField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseField.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.DatabaseField.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseField} returns this
 */
proto.qmq.DatabaseField.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.qmq.DatabaseField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseField} returns this
 */
proto.qmq.DatabaseField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any value = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.qmq.DatabaseField.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.qmq.DatabaseField} returns this
*/
proto.qmq.DatabaseField.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseField} returns this
 */
proto.qmq.DatabaseField.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseField.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp writeTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qmq.DatabaseField.prototype.getWritetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qmq.DatabaseField} returns this
*/
proto.qmq.DatabaseField.prototype.setWritetime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseField} returns this
 */
proto.qmq.DatabaseField.prototype.clearWritetime = function() {
  return this.setWritetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseField.prototype.hasWritetime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string writerId = 5;
 * @return {string}
 */
proto.qmq.DatabaseField.prototype.getWriterid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseField} returns this
 */
proto.qmq.DatabaseField.prototype.setWriterid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.DatabaseNotificationConfig.repeatedFields_ = [4];



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
proto.qmq.DatabaseNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    field: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contextfieldsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    notifyonchange: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.qmq.DatabaseNotificationConfig}
 */
proto.qmq.DatabaseNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseNotificationConfig;
  return proto.qmq.DatabaseNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseNotificationConfig}
 */
proto.qmq.DatabaseNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.DatabaseNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseNotificationConfig.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qmq.DatabaseNotificationConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.qmq.DatabaseNotificationConfig.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field = 3;
 * @return {string}
 */
proto.qmq.DatabaseNotificationConfig.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string contextFields = 4;
 * @return {!Array<string>}
 */
proto.qmq.DatabaseNotificationConfig.prototype.getContextfieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.setContextfieldsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.addContextfields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.clearContextfieldsList = function() {
  return this.setContextfieldsList([]);
};


/**
 * optional bool notifyOnChange = 5;
 * @return {boolean}
 */
proto.qmq.DatabaseNotificationConfig.prototype.getNotifyonchange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.qmq.DatabaseNotificationConfig} returns this
 */
proto.qmq.DatabaseNotificationConfig.prototype.setNotifyonchange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.DatabaseNotification.repeatedFields_ = [4];



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
proto.qmq.DatabaseNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    current: (f = msg.getCurrent()) && proto.qmq.DatabaseField.toObject(includeInstance, f),
    previous: (f = msg.getPrevious()) && proto.qmq.DatabaseField.toObject(includeInstance, f),
    contextList: jspb.Message.toObjectList(msg.getContextList(),
    proto.qmq.DatabaseField.toObject, includeInstance)
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
 * @return {!proto.qmq.DatabaseNotification}
 */
proto.qmq.DatabaseNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseNotification;
  return proto.qmq.DatabaseNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseNotification}
 */
proto.qmq.DatabaseNotification.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.qmq.DatabaseField;
      reader.readMessage(value,proto.qmq.DatabaseField.deserializeBinaryFromReader);
      msg.setCurrent(value);
      break;
    case 3:
      var value = new proto.qmq.DatabaseField;
      reader.readMessage(value,proto.qmq.DatabaseField.deserializeBinaryFromReader);
      msg.setPrevious(value);
      break;
    case 4:
      var value = new proto.qmq.DatabaseField;
      reader.readMessage(value,proto.qmq.DatabaseField.deserializeBinaryFromReader);
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
proto.qmq.DatabaseNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseNotification.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.DatabaseField.serializeBinaryToWriter
    );
  }
  f = message.getPrevious();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.qmq.DatabaseField.serializeBinaryToWriter
    );
  }
  f = message.getContextList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.qmq.DatabaseField.serializeBinaryToWriter
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.qmq.DatabaseNotification.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseNotification} returns this
 */
proto.qmq.DatabaseNotification.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatabaseField current = 2;
 * @return {?proto.qmq.DatabaseField}
 */
proto.qmq.DatabaseNotification.prototype.getCurrent = function() {
  return /** @type{?proto.qmq.DatabaseField} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseField, 2));
};


/**
 * @param {?proto.qmq.DatabaseField|undefined} value
 * @return {!proto.qmq.DatabaseNotification} returns this
*/
proto.qmq.DatabaseNotification.prototype.setCurrent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseNotification} returns this
 */
proto.qmq.DatabaseNotification.prototype.clearCurrent = function() {
  return this.setCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseNotification.prototype.hasCurrent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DatabaseField previous = 3;
 * @return {?proto.qmq.DatabaseField}
 */
proto.qmq.DatabaseNotification.prototype.getPrevious = function() {
  return /** @type{?proto.qmq.DatabaseField} */ (
    jspb.Message.getWrapperField(this, proto.qmq.DatabaseField, 3));
};


/**
 * @param {?proto.qmq.DatabaseField|undefined} value
 * @return {!proto.qmq.DatabaseNotification} returns this
*/
proto.qmq.DatabaseNotification.prototype.setPrevious = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseNotification} returns this
 */
proto.qmq.DatabaseNotification.prototype.clearPrevious = function() {
  return this.setPrevious(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseNotification.prototype.hasPrevious = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated DatabaseField context = 4;
 * @return {!Array<!proto.qmq.DatabaseField>}
 */
proto.qmq.DatabaseNotification.prototype.getContextList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseField, 4));
};


/**
 * @param {!Array<!proto.qmq.DatabaseField>} value
 * @return {!proto.qmq.DatabaseNotification} returns this
*/
proto.qmq.DatabaseNotification.prototype.setContextList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.qmq.DatabaseField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseField}
 */
proto.qmq.DatabaseNotification.prototype.addContext = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.qmq.DatabaseField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseNotification} returns this
 */
proto.qmq.DatabaseNotification.prototype.clearContextList = function() {
  return this.setContextList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.DatabaseEntitySchema.repeatedFields_ = [2];



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
proto.qmq.DatabaseEntitySchema.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseEntitySchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseEntitySchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseEntitySchema.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.DatabaseEntitySchema}
 */
proto.qmq.DatabaseEntitySchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseEntitySchema;
  return proto.qmq.DatabaseEntitySchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseEntitySchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseEntitySchema}
 */
proto.qmq.DatabaseEntitySchema.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.DatabaseEntitySchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseEntitySchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseEntitySchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseEntitySchema.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.DatabaseEntitySchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseEntitySchema} returns this
 */
proto.qmq.DatabaseEntitySchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string fields = 2;
 * @return {!Array<string>}
 */
proto.qmq.DatabaseEntitySchema.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.qmq.DatabaseEntitySchema} returns this
 */
proto.qmq.DatabaseEntitySchema.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseEntitySchema} returns this
 */
proto.qmq.DatabaseEntitySchema.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseEntitySchema} returns this
 */
proto.qmq.DatabaseEntitySchema.prototype.clearFieldsList = function() {
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
proto.qmq.DatabaseFieldSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseFieldSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseFieldSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseFieldSchema.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.DatabaseFieldSchema}
 */
proto.qmq.DatabaseFieldSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseFieldSchema;
  return proto.qmq.DatabaseFieldSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseFieldSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseFieldSchema}
 */
proto.qmq.DatabaseFieldSchema.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.DatabaseFieldSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseFieldSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseFieldSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseFieldSchema.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.DatabaseFieldSchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseFieldSchema} returns this
 */
proto.qmq.DatabaseFieldSchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.qmq.DatabaseFieldSchema.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseFieldSchema} returns this
 */
proto.qmq.DatabaseFieldSchema.prototype.setType = function(value) {
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
proto.qmq.DatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: (f = msg.getValue()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    writetime: (f = msg.getWritetime()) && proto.qmq.Timestamp.toObject(includeInstance, f),
    writerid: (f = msg.getWriterid()) && proto.qmq.String.toObject(includeInstance, f),
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
 * @return {!proto.qmq.DatabaseRequest}
 */
proto.qmq.DatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseRequest;
  return proto.qmq.DatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseRequest}
 */
proto.qmq.DatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.qmq.Timestamp;
      reader.readMessage(value,proto.qmq.Timestamp.deserializeBinaryFromReader);
      msg.setWritetime(value);
      break;
    case 5:
      var value = new proto.qmq.String;
      reader.readMessage(value,proto.qmq.String.deserializeBinaryFromReader);
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
proto.qmq.DatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.qmq.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWriterid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.qmq.String.serializeBinaryToWriter
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
proto.qmq.DatabaseRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseRequest} returns this
 */
proto.qmq.DatabaseRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.qmq.DatabaseRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.DatabaseRequest} returns this
 */
proto.qmq.DatabaseRequest.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any value = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.qmq.DatabaseRequest.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.qmq.DatabaseRequest} returns this
*/
proto.qmq.DatabaseRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseRequest} returns this
 */
proto.qmq.DatabaseRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Timestamp writeTime = 4;
 * @return {?proto.qmq.Timestamp}
 */
proto.qmq.DatabaseRequest.prototype.getWritetime = function() {
  return /** @type{?proto.qmq.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.qmq.Timestamp, 4));
};


/**
 * @param {?proto.qmq.Timestamp|undefined} value
 * @return {!proto.qmq.DatabaseRequest} returns this
*/
proto.qmq.DatabaseRequest.prototype.setWritetime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseRequest} returns this
 */
proto.qmq.DatabaseRequest.prototype.clearWritetime = function() {
  return this.setWritetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseRequest.prototype.hasWritetime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional String writerId = 5;
 * @return {?proto.qmq.String}
 */
proto.qmq.DatabaseRequest.prototype.getWriterid = function() {
  return /** @type{?proto.qmq.String} */ (
    jspb.Message.getWrapperField(this, proto.qmq.String, 5));
};


/**
 * @param {?proto.qmq.String|undefined} value
 * @return {!proto.qmq.DatabaseRequest} returns this
*/
proto.qmq.DatabaseRequest.prototype.setWriterid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.DatabaseRequest} returns this
 */
proto.qmq.DatabaseRequest.prototype.clearWriterid = function() {
  return this.setWriterid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.DatabaseRequest.prototype.hasWriterid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool success = 6;
 * @return {boolean}
 */
proto.qmq.DatabaseRequest.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.qmq.DatabaseRequest} returns this
 */
proto.qmq.DatabaseRequest.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qmq.DatabaseSnapshot.repeatedFields_ = [1,2,3,4];



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
proto.qmq.DatabaseSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.DatabaseSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.DatabaseSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.qmq.DatabaseEntity.toObject, includeInstance),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.qmq.DatabaseField.toObject, includeInstance),
    entityschemasList: jspb.Message.toObjectList(msg.getEntityschemasList(),
    proto.qmq.DatabaseEntitySchema.toObject, includeInstance),
    fieldschemasList: jspb.Message.toObjectList(msg.getFieldschemasList(),
    proto.qmq.DatabaseFieldSchema.toObject, includeInstance)
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
 * @return {!proto.qmq.DatabaseSnapshot}
 */
proto.qmq.DatabaseSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.DatabaseSnapshot;
  return proto.qmq.DatabaseSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.DatabaseSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.DatabaseSnapshot}
 */
proto.qmq.DatabaseSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qmq.DatabaseEntity;
      reader.readMessage(value,proto.qmq.DatabaseEntity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 2:
      var value = new proto.qmq.DatabaseField;
      reader.readMessage(value,proto.qmq.DatabaseField.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 3:
      var value = new proto.qmq.DatabaseEntitySchema;
      reader.readMessage(value,proto.qmq.DatabaseEntitySchema.deserializeBinaryFromReader);
      msg.addEntityschemas(value);
      break;
    case 4:
      var value = new proto.qmq.DatabaseFieldSchema;
      reader.readMessage(value,proto.qmq.DatabaseFieldSchema.deserializeBinaryFromReader);
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
proto.qmq.DatabaseSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.DatabaseSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.DatabaseSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.DatabaseSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qmq.DatabaseEntity.serializeBinaryToWriter
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.qmq.DatabaseField.serializeBinaryToWriter
    );
  }
  f = message.getEntityschemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.qmq.DatabaseEntitySchema.serializeBinaryToWriter
    );
  }
  f = message.getFieldschemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.qmq.DatabaseFieldSchema.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DatabaseEntity entities = 1;
 * @return {!Array<!proto.qmq.DatabaseEntity>}
 */
proto.qmq.DatabaseSnapshot.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseEntity, 1));
};


/**
 * @param {!Array<!proto.qmq.DatabaseEntity>} value
 * @return {!proto.qmq.DatabaseSnapshot} returns this
*/
proto.qmq.DatabaseSnapshot.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qmq.DatabaseEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseEntity}
 */
proto.qmq.DatabaseSnapshot.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qmq.DatabaseEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseSnapshot} returns this
 */
proto.qmq.DatabaseSnapshot.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * repeated DatabaseField fields = 2;
 * @return {!Array<!proto.qmq.DatabaseField>}
 */
proto.qmq.DatabaseSnapshot.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseField, 2));
};


/**
 * @param {!Array<!proto.qmq.DatabaseField>} value
 * @return {!proto.qmq.DatabaseSnapshot} returns this
*/
proto.qmq.DatabaseSnapshot.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qmq.DatabaseField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseField}
 */
proto.qmq.DatabaseSnapshot.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qmq.DatabaseField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseSnapshot} returns this
 */
proto.qmq.DatabaseSnapshot.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * repeated DatabaseEntitySchema entitySchemas = 3;
 * @return {!Array<!proto.qmq.DatabaseEntitySchema>}
 */
proto.qmq.DatabaseSnapshot.prototype.getEntityschemasList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseEntitySchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseEntitySchema, 3));
};


/**
 * @param {!Array<!proto.qmq.DatabaseEntitySchema>} value
 * @return {!proto.qmq.DatabaseSnapshot} returns this
*/
proto.qmq.DatabaseSnapshot.prototype.setEntityschemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.qmq.DatabaseEntitySchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseEntitySchema}
 */
proto.qmq.DatabaseSnapshot.prototype.addEntityschemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.qmq.DatabaseEntitySchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseSnapshot} returns this
 */
proto.qmq.DatabaseSnapshot.prototype.clearEntityschemasList = function() {
  return this.setEntityschemasList([]);
};


/**
 * repeated DatabaseFieldSchema fieldSchemas = 4;
 * @return {!Array<!proto.qmq.DatabaseFieldSchema>}
 */
proto.qmq.DatabaseSnapshot.prototype.getFieldschemasList = function() {
  return /** @type{!Array<!proto.qmq.DatabaseFieldSchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qmq.DatabaseFieldSchema, 4));
};


/**
 * @param {!Array<!proto.qmq.DatabaseFieldSchema>} value
 * @return {!proto.qmq.DatabaseSnapshot} returns this
*/
proto.qmq.DatabaseSnapshot.prototype.setFieldschemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.qmq.DatabaseFieldSchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qmq.DatabaseFieldSchema}
 */
proto.qmq.DatabaseSnapshot.prototype.addFieldschemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.qmq.DatabaseFieldSchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qmq.DatabaseSnapshot} returns this
 */
proto.qmq.DatabaseSnapshot.prototype.clearFieldschemasList = function() {
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
proto.qmq.Int.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Int.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.Int}
 */
proto.qmq.Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.Int;
  return proto.qmq.Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.Int}
 */
proto.qmq.Int.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Int.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.Int.prototype.getRaw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.qmq.Int} returns this
 */
proto.qmq.Int.prototype.setRaw = function(value) {
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
proto.qmq.String.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.String.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.String} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.String.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.String}
 */
proto.qmq.String.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.String;
  return proto.qmq.String.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.String} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.String}
 */
proto.qmq.String.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.String.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.String.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.String} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.String.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.String.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.String} returns this
 */
proto.qmq.String.prototype.setRaw = function(value) {
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
proto.qmq.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Timestamp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.Timestamp}
 */
proto.qmq.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.Timestamp;
  return proto.qmq.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.Timestamp}
 */
proto.qmq.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Timestamp.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.Timestamp.prototype.getRaw = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qmq.Timestamp} returns this
*/
proto.qmq.Timestamp.prototype.setRaw = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.Timestamp} returns this
 */
proto.qmq.Timestamp.prototype.clearRaw = function() {
  return this.setRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.Timestamp.prototype.hasRaw = function() {
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
proto.qmq.Float.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.Float.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.Float} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Float.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.Float}
 */
proto.qmq.Float.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.Float;
  return proto.qmq.Float.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.Float} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.Float}
 */
proto.qmq.Float.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.Float.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.Float.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.Float} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Float.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.Float.prototype.getRaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.qmq.Float} returns this
 */
proto.qmq.Float.prototype.setRaw = function(value) {
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
proto.qmq.Bool.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.Bool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.Bool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Bool.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.Bool}
 */
proto.qmq.Bool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.Bool;
  return proto.qmq.Bool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.Bool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.Bool}
 */
proto.qmq.Bool.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.Bool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.Bool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.Bool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.Bool.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.Bool.prototype.getRaw = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.qmq.Bool} returns this
 */
proto.qmq.Bool.prototype.setRaw = function(value) {
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
proto.qmq.EntityReference.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.EntityReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.EntityReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.EntityReference.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.EntityReference}
 */
proto.qmq.EntityReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.EntityReference;
  return proto.qmq.EntityReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.EntityReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.EntityReference}
 */
proto.qmq.EntityReference.deserializeBinaryFromReader = function(msg, reader) {
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
proto.qmq.EntityReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.EntityReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.EntityReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.EntityReference.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.EntityReference.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.EntityReference} returns this
 */
proto.qmq.EntityReference.prototype.setId = function(value) {
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
proto.qmq.BinaryFile.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.BinaryFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.BinaryFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.BinaryFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.qmq.BinaryFile}
 */
proto.qmq.BinaryFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.BinaryFile;
  return proto.qmq.BinaryFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.BinaryFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.BinaryFile}
 */
proto.qmq.BinaryFile.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContent(value);
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
proto.qmq.BinaryFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.BinaryFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.BinaryFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.BinaryFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
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
proto.qmq.BinaryFile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.BinaryFile} returns this
 */
proto.qmq.BinaryFile.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.qmq.BinaryFile.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.BinaryFile} returns this
 */
proto.qmq.BinaryFile.prototype.setContent = function(value) {
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
proto.qmq.LogMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.LogMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.LogMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.LogMessage.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.LogMessage}
 */
proto.qmq.LogMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.LogMessage;
  return proto.qmq.LogMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.LogMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.LogMessage}
 */
proto.qmq.LogMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.qmq.LogMessage.LogLevelEnum} */ (reader.readEnum());
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
proto.qmq.LogMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.LogMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.LogMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.LogMessage.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.LogMessage.LogLevelEnum = {
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
proto.qmq.LogMessage.prototype.getApplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.LogMessage} returns this
 */
proto.qmq.LogMessage.prototype.setApplication = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogLevelEnum level = 2;
 * @return {!proto.qmq.LogMessage.LogLevelEnum}
 */
proto.qmq.LogMessage.prototype.getLevel = function() {
  return /** @type {!proto.qmq.LogMessage.LogLevelEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.qmq.LogMessage.LogLevelEnum} value
 * @return {!proto.qmq.LogMessage} returns this
 */
proto.qmq.LogMessage.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.qmq.LogMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.qmq.LogMessage} returns this
 */
proto.qmq.LogMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.qmq.LogMessage.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.qmq.LogMessage} returns this
*/
proto.qmq.LogMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.qmq.LogMessage} returns this
 */
proto.qmq.LogMessage.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.qmq.LogMessage.prototype.hasTimestamp = function() {
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
proto.qmq.GarageDoorState.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.GarageDoorState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.GarageDoorState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.GarageDoorState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.GarageDoorState}
 */
proto.qmq.GarageDoorState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.GarageDoorState;
  return proto.qmq.GarageDoorState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.GarageDoorState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.GarageDoorState}
 */
proto.qmq.GarageDoorState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.GarageDoorState.GarageDoorStateEnum} */ (reader.readEnum());
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
proto.qmq.GarageDoorState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.GarageDoorState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.GarageDoorState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.GarageDoorState.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.GarageDoorState.GarageDoorStateEnum = {
  UNSPECIFIED: 0,
  OPENED: 1,
  CLOSED: 2
};

/**
 * optional GarageDoorStateEnum raw = 1;
 * @return {!proto.qmq.GarageDoorState.GarageDoorStateEnum}
 */
proto.qmq.GarageDoorState.prototype.getRaw = function() {
  return /** @type {!proto.qmq.GarageDoorState.GarageDoorStateEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.GarageDoorState.GarageDoorStateEnum} value
 * @return {!proto.qmq.GarageDoorState} returns this
 */
proto.qmq.GarageDoorState.prototype.setRaw = function(value) {
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
proto.qmq.ConnectionState.prototype.toObject = function(opt_includeInstance) {
  return proto.qmq.ConnectionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qmq.ConnectionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.ConnectionState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.qmq.ConnectionState}
 */
proto.qmq.ConnectionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qmq.ConnectionState;
  return proto.qmq.ConnectionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qmq.ConnectionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qmq.ConnectionState}
 */
proto.qmq.ConnectionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.qmq.ConnectionState.ConnectionStateEnum} */ (reader.readEnum());
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
proto.qmq.ConnectionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qmq.ConnectionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qmq.ConnectionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qmq.ConnectionState.serializeBinaryToWriter = function(message, writer) {
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
proto.qmq.ConnectionState.ConnectionStateEnum = {
  UNSPECIFIED: 0,
  CONNECTED: 1,
  DISCONNECTED: 2
};

/**
 * optional ConnectionStateEnum raw = 1;
 * @return {!proto.qmq.ConnectionState.ConnectionStateEnum}
 */
proto.qmq.ConnectionState.prototype.getRaw = function() {
  return /** @type {!proto.qmq.ConnectionState.ConnectionStateEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.qmq.ConnectionState.ConnectionStateEnum} value
 * @return {!proto.qmq.ConnectionState} returns this
 */
proto.qmq.ConnectionState.prototype.setRaw = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


goog.object.extend(exports, proto.qmq);

},{"google-protobuf":1,"google-protobuf/google/protobuf/any_pb.js":2,"google-protobuf/google/protobuf/timestamp_pb.js":3}]},{},[4]);
