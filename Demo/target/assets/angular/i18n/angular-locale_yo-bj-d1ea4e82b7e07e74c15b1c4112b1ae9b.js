"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Àárɔ̀","Ɔ̀sán"],DAY:["Ɔjɔ́ Àìkú","Ɔjɔ́ Ajé","Ɔjɔ́ Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɔjɔ́ Ɛtì","Ɔjɔ́ Àbámɛ́ta"],ERANAMES:["Saju Kristi","Lehin Kristi"],ERAS:["SK","LK"],MONTH:["Oshù Shɛ́rɛ́","Oshù Èrèlè","Oshù Ɛrɛ̀nà","Oshù Ìgbé","Oshù Ɛ̀bibi","Oshù Òkúdu","Oshù Agɛmɔ","Oshù Ògún","Oshù Owewe","Oshù Ɔ̀wàrà","Oshù Bélú","Oshù Ɔ̀pɛ̀"],SHORTDAY:["Àìkú","Ajé","Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɛtì","Àbámɛ́ta"],SHORTMONTH:["Shɛ́rɛ́","Èrèlè","Ɛrɛ̀nà","Ìgbé","Ɛ̀bibi","Òkúdu","Agɛmɔ","Ògún","Owewe","Ɔ̀wàrà","Bélú","Ɔ̀pɛ̀"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"yo-bj",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])