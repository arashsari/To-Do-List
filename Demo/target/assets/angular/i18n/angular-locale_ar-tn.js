"use strict";angular.module("ngLocale",[],["$provide",function(e){var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ص","م"],DAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],ERANAMES:["قبل الميلاد","ميلادي"],ERAS:["ق.م","م"],MONTH:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],SHORTDAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],SHORTMONTH:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],fullDate:"EEEE، d MMMM، y",longDate:"d MMMM، y",medium:"y/MM/dd h:mm:ss a",mediumDate:"y/MM/dd",mediumTime:"h:mm:ss a","short":"y/M/d h:mm a",shortDate:"y/M/d",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:0,lgSize:0,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"ar-tn",pluralCat:function(e,n){if(e==0){return t.ZERO}if(e==1){return t.ONE}if(e==2){return t.TWO}if(e%100>=3&&e%100<=10){return t.FEW}if(e%100>=11&&e%100<=99){return t.MANY}return t.OTHER}})}])