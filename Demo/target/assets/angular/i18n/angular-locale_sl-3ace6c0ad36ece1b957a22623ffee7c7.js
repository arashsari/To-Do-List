"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["dop.","pop."],DAY:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],ERANAMES:["pred našim štetjem","naše štetje"],ERAS:["pr. n. št.","po Kr."],MONTH:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],SHORTDAY:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],fullDate:"EEEE, dd. MMMM y",longDate:"dd. MMMM y",medium:"d. MMM y HH.mm.ss",mediumDate:"d. MMM y",mediumTime:"HH.mm.ss","short":"d. MM. yy HH.mm",shortDate:"d. MM. yy",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sl",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(s.v==0&&i%100==1){return t.ONE}if(s.v==0&&i%100==2){return t.TWO}if(s.v==0&&i%100>=3&&i%100<=4||s.v!=0){return t.FEW}return t.OTHER}})}])