"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],ERANAMES:["př. n. l.","n. l."],ERAS:["př. n. l.","n. l."],MONTH:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],SHORTDAY:["ne","po","út","st","čt","pá","so"],SHORTMONTH:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],fullDate:"EEEE d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",mediumDate:"d. M. y",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Kč",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"cs",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}if(i>=2&&i<=4&&s.v==0){return t.FEW}if(s.v!=0){return t.MANY}return t.OTHER}})}])