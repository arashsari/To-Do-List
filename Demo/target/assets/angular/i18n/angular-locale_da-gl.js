"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}function i(e,t){if(t===0){return{w:0,t:0}}while(t%10===0){t/=10;e--}return{w:e,t:t}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ERANAMES:["f.Kr.","e.Kr."],ERAS:["f.Kr.","e.Kr."],MONTH:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],SHORTDAY:["søn.","man.","tir.","ons.","tor.","fre.","lør."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],fullDate:"EEEE 'den' d. MMMM y",longDate:"d. MMMM y",medium:"dd/MM/y HH.mm.ss",mediumDate:"dd/MM/y",mediumTime:"HH.mm.ss","short":"dd/MM/yy HH.mm",shortDate:"dd/MM/yy",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"da-gl",pluralCat:function(e,n){var s=e|0;var o=r(e,n);var u=i(o.v,o.f);if(e==1||u.t!=0&&(s==0||s==1)){return t.ONE}return t.OTHER}})}])