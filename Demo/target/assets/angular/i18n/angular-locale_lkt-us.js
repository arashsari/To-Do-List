"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],MONTH:["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"],SHORTDAY:["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"],SHORTMONTH:["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"lkt-us",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])