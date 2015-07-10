"use strict";angular.module("ngLocale",[],["$provide",function(e){var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"],ERANAMES:["Cyn Crist","Oed Crist"],ERAS:["CC","OC"],MONTH:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"],SHORTDAY:["Sul","Llun","Maw","Mer","Iau","Gwen","Sad"],SHORTMONTH:["Ion","Chwef","Mawrth","Ebrill","Mai","Meh","Gorff","Awst","Medi","Hyd","Tach","Rhag"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"cy-gb",pluralCat:function(e,n){if(e==0){return t.ZERO}if(e==1){return t.ONE}if(e==2){return t.TWO}if(e==3){return t.FEW}if(e==6){return t.MANY}return t.OTHER}})}])