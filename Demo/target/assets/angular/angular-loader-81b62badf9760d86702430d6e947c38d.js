(function(){"use strict";function e(e,t){t=t||Error;return function(){var n=arguments[0],r="["+(e?e+":":"")+n+"] ",i=arguments[1],s=arguments,o,u;o=r+i.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1),n;if(t+2<s.length){return toDebugString(s[t+2])}return e});o=o+"\nhttp://errors.angularjs.org/1.3.15/"+(e?e+"/":"")+n;for(u=2;u<arguments.length;u++){o=o+(u==2?"?":"&")+"p"+(u-2)+"="+encodeURIComponent(toDebugString(arguments[u]))}return new t(o)}}function t(t){function i(e,t,n){return e[t]||(e[t]=n())}var n=e("$injector");var r=e("ng");var s=i(t,"angular",Object);s.$$minErr=s.$$minErr||e;return i(s,"module",function(){var e={};return function(s,o,u){var a=function(e,t){if(e==="hasOwnProperty"){throw r("badname","hasOwnProperty is not a valid {0} name",t)}};a(s,"module");if(o&&e.hasOwnProperty(s)){e[s]=null}return i(e,s,function(){function f(t,n,r,i){if(!i)i=e;return function(){i[r||"push"]([t,n,arguments]);return a}}if(!o){throw n("nomod","Module '{0}' is not available! You either misspelled "+"the module name or forgot to load it. If registering a module ensure that you "+"specify the dependencies as the second argument.",s)}var e=[];var t=[];var r=[];var i=f("$injector","invoke","push",t);var a={_invokeQueue:e,_configBlocks:t,_runBlocks:r,requires:o,name:s,provider:f("$provide","provider"),factory:f("$provide","factory"),service:f("$provide","service"),value:f("$provide","value"),constant:f("$provide","constant","unshift"),animation:f("$animateProvider","register"),filter:f("$filterProvider","register"),controller:f("$controllerProvider","register"),directive:f("$compileProvider","directive"),config:i,run:function(e){r.push(e);return this}};if(u){i(u)}return a})}})}t(window)})(window);angular.Module