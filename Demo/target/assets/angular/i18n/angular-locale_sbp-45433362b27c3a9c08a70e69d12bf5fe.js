"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Lwamilawu","Pashamihe"],DAY:["Mulungu","Jumatatu","Jumanne","Jumatano","Alahamisi","Ijumaa","Jumamosi"],ERANAMES:["Ashanali uKilisito","Pamwandi ya Kilisto"],ERAS:["AK","PK"],MONTH:["Mupalangulwa","Mwitope","Mushende","Munyi","Mushende Magali","Mujimbi","Mushipepo","Mupuguto","Munyense","Mokhu","Musongandembwe","Muhaano"],SHORTDAY:["Mul","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Mup","Mwi","Msh","Mun","Mag","Muj","Msp","Mpg","Mye","Mok","Mus","Muh"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"sbp",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])