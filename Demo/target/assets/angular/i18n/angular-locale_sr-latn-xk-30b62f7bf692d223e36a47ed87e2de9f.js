"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["pre podne","po podne"],DAY:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],ERANAMES:["Pre nove ere","Nove ere"],ERAS:["p. n. e.","n. e."],MONTH:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],SHORTDAY:["ned","pon","uto","sre","čet","pet","sub"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH.mm.ss",mediumDate:"dd.MM.y.",mediumTime:"HH.mm.ss","short":"d.M.yy. HH.mm",shortDate:"d.M.yy.",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sr-latn-xk",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(s.v==0&&i%10==1&&i%100!=11||s.f%10==1&&s.f%100!=11){return t.ONE}if(s.v==0&&i%10>=2&&i%10<=4&&(i%100<12||i%100>14)||s.f%10>=2&&s.f%10<=4&&(s.f%100<12||s.f%100>14)){return t.FEW}return t.OTHER}})}])