"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sāpate","Mōnite","Tūsite","Pulelulu","Tuʻapulelulu","Falaite","Tokonaki"],ERANAMES:["ki muʻa","taʻu ʻo Sīsū"],ERAS:["KM","TS"],MONTH:["Sānuali","Fēpueli","Maʻasi","ʻEpeleli","Mē","Sune","Siulai","ʻAokosi","Sepitema","ʻOkatopa","Nōvema","Tīsema"],SHORTDAY:["Sāp","Mōn","Tūs","Pul","Tuʻa","Fal","Tok"],SHORTMONTH:["Sān","Fēp","Maʻa","ʻEpe","Mē","Sun","Siu","ʻAok","Sep","ʻOka","Nōv","Tīs"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"T$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"to",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])