(function(e,t,n){"use strict";function s(){function e(e,n){return t.extend(Object.create(e),n)}function r(e,t){var n=t.caseInsensitiveMatch,r={originalPath:e,regexp:e},i=r.keys=[];e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,t,n,r){var s=r==="?"?r:null;var o=r==="*"?r:null;i.push({name:n,optional:!!s});t=t||"";return""+(s?"":t)+"(?:"+(s?t:"")+(o&&"(.+?)"||"([^/]+)")+(s||"")+")"+(s||"")}).replace(/([\/$\*])/g,"\\$1");r.regexp=new RegExp("^"+e+"$",n?"i":"");return r}var n={};this.when=function(e,i){var s=t.copy(i);if(t.isUndefined(s.reloadOnSearch)){s.reloadOnSearch=true}if(t.isUndefined(s.caseInsensitiveMatch)){s.caseInsensitiveMatch=this.caseInsensitiveMatch}n[e]=t.extend(s,e&&r(e,s));if(e){var o=e[e.length-1]=="/"?e.substr(0,e.length-1):e+"/";n[o]=t.extend({redirectTo:e},r(o,s))}return this};this.caseInsensitiveMatch=false;this.otherwise=function(e){if(typeof e==="string"){e={redirectTo:e}}this.when(null,e);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(r,s,o,u,a,f,l){function v(e,t){var n=t.keys,r={};if(!t.regexp)return null;var i=t.regexp.exec(e);if(!i)return null;for(var s=1,o=i.length;s<o;++s){var u=n[s-1];var a=i[s];if(u&&a){r[u.name]=a}}return r}function m(e){var n=d.current;h=y();p=h&&n&&h.$$route===n.$$route&&t.equals(h.pathParams,n.pathParams)&&!h.reloadOnSearch&&!c;if(!p&&(n||h)){if(r.$broadcast("$routeChangeStart",h,n).defaultPrevented){if(e){e.preventDefault()}}}}function g(){var e=d.current;var n=h;if(p){e.params=n.params;t.copy(e.params,o);r.$broadcast("$routeUpdate",e)}else if(n||e){c=false;d.current=n;if(n){if(n.redirectTo){if(t.isString(n.redirectTo)){s.path(b(n.redirectTo,n.params)).search(n.params).replace()}else{s.url(n.redirectTo(n.pathParams,s.path(),s.search())).replace()}}}u.when(n).then(function(){if(n){var e=t.extend({},n.resolve),r,i;t.forEach(e,function(n,r){e[r]=t.isString(n)?a.get(n):a.invoke(n,null,null,r)});if(t.isDefined(r=n.template)){if(t.isFunction(r)){r=r(n.params)}}else if(t.isDefined(i=n.templateUrl)){if(t.isFunction(i)){i=i(n.params)}i=l.getTrustedResourceUrl(i);if(t.isDefined(i)){n.loadedTemplateUrl=i;r=f(i)}}if(t.isDefined(r)){e["$template"]=r}return u.all(e)}}).then(function(i){if(n==d.current){if(n){n.locals=i;t.copy(n.params,o)}r.$broadcast("$routeChangeSuccess",n,e)}},function(t){if(n==d.current){r.$broadcast("$routeChangeError",n,e,t)}})}}function y(){var r,i;t.forEach(n,function(n,o){if(!i&&(r=v(s.path(),n))){i=e(n,{params:t.extend({},s.search(),r),pathParams:r});i.$$route=n}});return i||n[null]&&e(n[null],{params:{},pathParams:{}})}function b(e,n){var r=[];t.forEach((e||"").split(":"),function(e,t){if(t===0){r.push(e)}else{var i=e.match(/(\w+)(?:[?*])?(.*)/);var s=i[1];r.push(n[s]);r.push(i[2]||"");delete n[s]}});return r.join("")}var c=false,h,p,d={routes:n,reload:function(){c=true;r.$evalAsync(function(){m();g()})},updateParams:function(e){if(this.current&&this.current.$$route){e=t.extend({},this.current.params,e);s.path(b(this.current.$$route.originalPath,e));s.search(e)}else{throw i("norout","Tried updating route when with no current route")}}};r.$on("$locationChangeStart",m);r.$on("$locationChangeSuccess",g);return d}]}function o(){this.$get=function(){return{}}}function u(e,n,r){return{restrict:"ECA",terminal:true,priority:400,transclude:"element",link:function(i,s,o,u,a){function d(){if(c){r.cancel(c);c=null}if(f){f.$destroy();f=null}if(l){c=r.leave(l);c.then(function(){c=null});l=null}}function v(){var o=e.current&&e.current.locals,u=o&&o.$template;if(t.isDefined(u)){var c=i.$new();var v=e.current;var m=a(c,function(e){r.enter(e,null,l||s).then(function(){if(t.isDefined(h)&&(!h||i.$eval(h))){n()}});d()});l=m;f=v.scope=c;f.$emit("$viewContentLoaded");f.$eval(p)}else{d()}}var f,l,c,h=o.autoscroll,p=o.onload||"";i.$on("$routeChangeSuccess",v);v()}}}function a(e,t,n){return{restrict:"ECA",priority:-400,link:function(r,i){var s=n.current,o=s.locals;i.html(o.$template);var u=e(i.contents());if(s.controller){o.$scope=r;var a=t(s.controller,o);if(s.controllerAs){r[s.controllerAs]=a}i.data("$ngControllerController",a);i.children().data("$ngControllerController",a)}u(r)}}}var r=t.module("ngRoute",["ng"]).provider("$route",s),i=t.$$minErr("ngRoute");r.provider("$routeParams",o);r.directive("ngView",u);r.directive("ngView",a);u.$inject=["$route","$anchorScroll","$animate"];a.$inject=["$compile","$controller","$route"]})(window,window.angular)