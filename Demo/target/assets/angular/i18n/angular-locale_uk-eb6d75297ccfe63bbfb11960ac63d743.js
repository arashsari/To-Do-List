"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["дп","пп"],DAY:["неділя","понеділок","вівторок","середа","четвер","пʼятниця","субота"],ERANAMES:["до нашої ери","нашої ери"],ERAS:["до н.е.","н.е."],MONTH:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],SHORTDAY:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],SHORTMONTH:["січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."],fullDate:"EEEE, d MMMM y 'р'.",longDate:"d MMMM y 'р'.",medium:"d MMM y 'р'. HH:mm:ss",mediumDate:"d MMM y 'р'.",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₴",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"uk",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(s.v==0&&i%10==1&&i%100!=11){return t.ONE}if(s.v==0&&i%10>=2&&i%10<=4&&(i%100<12||i%100>14)){return t.FEW}if(s.v==0&&i%10==0||s.v==0&&i%10>=5&&i%10<=9||s.v==0&&i%100>=11&&i%100<=14){return t.MANY}return t.OTHER}})}])