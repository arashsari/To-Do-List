"use strict";angular.module("ngLocale",[],["$provide",function(e){var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["пр.об.","сл.об."],DAY:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],ERANAMES:["преди Христа","след Христа"],ERAS:["пр.Хр.","сл.Хр."],MONTH:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],SHORTDAY:["нд","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["ян.","февр.","март","апр.","май","юни","юли","авг.","септ.","окт.","ноем.","дек."],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d.MM.y 'г'. H:mm:ss",mediumDate:"d.MM.y 'г'.",mediumTime:"H:mm:ss","short":"d.MM.yy 'г'. H:mm",shortDate:"d.MM.yy 'г'.",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"lev",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"bg",pluralCat:function(e,n){if(e==1){return t.ONE}return t.OTHER}})}])