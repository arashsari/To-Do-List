"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Dinda","Dilolo"],DAY:["Lumingu","Nkodya","Ndàayà","Ndangù","Njòwa","Ngòvya","Lubingu"],ERANAMES:["Kumpala kwa Yezu Kli","Kunyima kwa Yezu Kli"],ERAS:["kmp. Y.K.","kny. Y. K."],MONTH:["Ciongo","Lùishi","Lusòlo","Mùuyà","Lumùngùlù","Lufuimi","Kabàlàshìpù","Lùshìkà","Lutongolo","Lungùdi","Kaswèkèsè","Ciswà"],SHORTDAY:["Lum","Nko","Ndy","Ndg","Njw","Ngv","Lub"],SHORTMONTH:["Cio","Lui","Lus","Muu","Lum","Luf","Kab","Lush","Lut","Lun","Kas","Cis"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FrCD",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"lu-cd",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])