"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["RŨ","ŨG"],DAY:["Kiumia","Muramuko","Wairi","Wethatu","Wena","Wetano","Jumamosi"],ERANAMES:["Mbere ya Kristũ","Nyuma ya Kristũ"],ERAS:["MK","NK"],MONTH:["Januarĩ","Feburuarĩ","Machi","Ĩpurũ","Mĩĩ","Njuni","Njuraĩ","Agasti","Septemba","Oktũba","Novemba","Dicemba"],SHORTDAY:["KIU","MRA","WAI","WET","WEN","WTN","JUM"],SHORTMONTH:["JAN","FEB","MAC","ĨPU","MĨĨ","NJU","NJR","AGA","SPT","OKT","NOV","DEC"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"mer-ke",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])