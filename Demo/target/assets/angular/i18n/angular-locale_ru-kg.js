"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],ERANAMES:["до н. э.","н. э."],ERAS:["до н. э.","н. э."],MONTH:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],SHORTDAY:["вс","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d MMM y 'г'. H:mm:ss",mediumDate:"d MMM y 'г'.",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"KGS",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ru-kg",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(s.v==0&&i%10==1&&i%100!=11){return t.ONE}if(s.v==0&&i%10>=2&&i%10<=4&&(i%100<12||i%100>14)){return t.FEW}if(s.v==0&&i%10==0||s.v==0&&i%10>=5&&i%10<=9||s.v==0&&i%100>=11&&i%100<=14){return t.MANY}return t.OTHER}})}])