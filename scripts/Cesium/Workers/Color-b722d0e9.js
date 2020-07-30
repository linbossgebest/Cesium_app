define(["exports","./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Transforms-23521d7e"],function(e,O,r,g,o){"use strict";function i(e,r,o){return o<0&&(o+=1),1<o&&--o,6*o<1?e+6*(r-e)*o:2*o<1?r:3*o<2?e+(r-e)*(2/3-o)*6:e}function S(e,r,o,t){this.red=O.defaultValue(e,1),this.green=O.defaultValue(r,1),this.blue=O.defaultValue(o,1),this.alpha=O.defaultValue(t,1)}var t,f,s;S.fromCartesian4=function(e,r){return O.defined(r)?(r.red=e.x,r.green=e.y,r.blue=e.z,r.alpha=e.w,r):new S(e.x,e.y,e.z,e.w)},S.fromBytes=function(e,r,o,t,f){return e=S.byteToFloat(O.defaultValue(e,255)),r=S.byteToFloat(O.defaultValue(r,255)),o=S.byteToFloat(O.defaultValue(o,255)),t=S.byteToFloat(O.defaultValue(t,255)),O.defined(f)?(f.red=e,f.green=r,f.blue=o,f.alpha=t,f):new S(e,r,o,t)},S.fromAlpha=function(e,r,o){return O.defined(o)?(o.red=e.red,o.green=e.green,o.blue=e.blue,o.alpha=r,o):new S(e.red,e.green,e.blue,r)},o.FeatureDetection.supportsTypedArrays()&&(t=new ArrayBuffer(4),f=new Uint32Array(t),s=new Uint8Array(t)),S.fromRgba=function(e,r){return f[0]=e,S.fromBytes(s[0],s[1],s[2],s[3],r)},S.fromHsl=function(e,r,o,t,f){e=O.defaultValue(e,0)%1,r=O.defaultValue(r,0),o=O.defaultValue(o,0),t=O.defaultValue(t,1);var s,n,l=o,C=o,a=o;return 0!==r&&(l=i(n=2*o-(s=o<.5?o*(1+r):o+r-o*r),s,e+1/3),C=i(n,s,e),a=i(n,s,e-1/3)),O.defined(f)?(f.red=l,f.green=C,f.blue=a,f.alpha=t,f):new S(l,C,a,t)},S.fromRandom=function(e,r){var o,t,f=(e=O.defaultValue(e,O.defaultValue.EMPTY_OBJECT)).red;O.defined(f)||(o=O.defaultValue(e.minimumRed,0),t=O.defaultValue(e.maximumRed,1),f=o+g.CesiumMath.nextRandomNumber()*(t-o));var s,n,l=e.green;O.defined(l)||(s=O.defaultValue(e.minimumGreen,0),n=O.defaultValue(e.maximumGreen,1),l=s+g.CesiumMath.nextRandomNumber()*(n-s));var C,a,i=e.blue;O.defined(i)||(C=O.defaultValue(e.minimumBlue,0),a=O.defaultValue(e.maximumBlue,1),i=C+g.CesiumMath.nextRandomNumber()*(a-C));var E,u,b=e.alpha;return O.defined(b)||(E=O.defaultValue(e.minimumAlpha,0),u=O.defaultValue(e.maximumAlpha,1),b=E+g.CesiumMath.nextRandomNumber()*(u-E)),O.defined(r)?(r.red=f,r.green=l,r.blue=i,r.alpha=b,r):new S(f,l,i,b)};var n=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,l=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,C=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,a=/^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;S.fromCssColorString=function(e,r){O.defined(r)||(r=new S);var o=S[e.toUpperCase()];if(O.defined(o))return S.clone(o,r),r;var t=n.exec(e);return null!==t?(r.red=parseInt(t[1],16)/15,r.green=parseInt(t[2],16)/15,r.blue=parseInt(t[3],16)/15,r.alpha=parseInt(O.defaultValue(t[4],"f"),16)/15,r):null!==(t=l.exec(e))?(r.red=parseInt(t[1],16)/255,r.green=parseInt(t[2],16)/255,r.blue=parseInt(t[3],16)/255,r.alpha=parseInt(O.defaultValue(t[4],"ff"),16)/255,r):null!==(t=C.exec(e))?(r.red=parseFloat(t[1])/("%"===t[1].substr(-1)?100:255),r.green=parseFloat(t[2])/("%"===t[2].substr(-1)?100:255),r.blue=parseFloat(t[3])/("%"===t[3].substr(-1)?100:255),r.alpha=parseFloat(O.defaultValue(t[4],"1.0")),r):null!==(t=a.exec(e))?S.fromHsl(parseFloat(t[1])/360,parseFloat(t[2])/100,parseFloat(t[3])/100,parseFloat(O.defaultValue(t[4],"1.0")),r):r=void 0},S.packedLength=4,S.pack=function(e,r,o){return o=O.defaultValue(o,0),r[o++]=e.red,r[o++]=e.green,r[o++]=e.blue,r[o]=e.alpha,r},S.unpack=function(e,r,o){return r=O.defaultValue(r,0),O.defined(o)||(o=new S),o.red=e[r++],o.green=e[r++],o.blue=e[r++],o.alpha=e[r],o},S.byteToFloat=function(e){return e/255},S.floatToByte=function(e){return 1===e?255:256*e|0},S.clone=function(e,r){if(O.defined(e))return O.defined(r)?(r.red=e.red,r.green=e.green,r.blue=e.blue,r.alpha=e.alpha,r):new S(e.red,e.green,e.blue,e.alpha)},S.equals=function(e,r){return e===r||O.defined(e)&&O.defined(r)&&e.red===r.red&&e.green===r.green&&e.blue===r.blue&&e.alpha===r.alpha},S.equalsArray=function(e,r,o){return e.red===r[o]&&e.green===r[o+1]&&e.blue===r[o+2]&&e.alpha===r[o+3]},S.prototype.clone=function(e){return S.clone(this,e)},S.prototype.equals=function(e){return S.equals(this,e)},S.prototype.equalsEpsilon=function(e,r){return this===e||O.defined(e)&&Math.abs(this.red-e.red)<=r&&Math.abs(this.green-e.green)<=r&&Math.abs(this.blue-e.blue)<=r&&Math.abs(this.alpha-e.alpha)<=r},S.prototype.toString=function(){return"("+this.red+", "+this.green+", "+this.blue+", "+this.alpha+")"},S.prototype.toCssColorString=function(){var e=S.floatToByte(this.red),r=S.floatToByte(this.green),o=S.floatToByte(this.blue);return 1===this.alpha?"rgb("+e+","+r+","+o+")":"rgba("+e+","+r+","+o+","+this.alpha+")"},S.prototype.toCssHexString=function(){var e=S.floatToByte(this.red).toString(16);e.length<2&&(e="0"+e);var r=S.floatToByte(this.green).toString(16);r.length<2&&(r="0"+r);var o=S.floatToByte(this.blue).toString(16);if(o.length<2&&(o="0"+o),this.alpha<1){var t=S.floatToByte(this.alpha).toString(16);return t.length<2&&(t="0"+t),"#"+e+r+o+t}return"#"+e+r+o},S.prototype.toBytes=function(e){var r=S.floatToByte(this.red),o=S.floatToByte(this.green),t=S.floatToByte(this.blue),f=S.floatToByte(this.alpha);return O.defined(e)?(e[0]=r,e[1]=o,e[2]=t,e[3]=f,e):[r,o,t,f]},S.prototype.toRgba=function(){return s[0]=S.floatToByte(this.red),s[1]=S.floatToByte(this.green),s[2]=S.floatToByte(this.blue),s[3]=S.floatToByte(this.alpha),f[0]},S.prototype.brighten=function(e,r){return e=1-e,r.red=1-(1-this.red)*e,r.green=1-(1-this.green)*e,r.blue=1-(1-this.blue)*e,r.alpha=this.alpha,r},S.prototype.darken=function(e,r){return e=1-e,r.red=this.red*e,r.green=this.green*e,r.blue=this.blue*e,r.alpha=this.alpha,r},S.prototype.withAlpha=function(e,r){return S.fromAlpha(this,e,r)},S.add=function(e,r,o){return o.red=e.red+r.red,o.green=e.green+r.green,o.blue=e.blue+r.blue,o.alpha=e.alpha+r.alpha,o},S.subtract=function(e,r,o){return o.red=e.red-r.red,o.green=e.green-r.green,o.blue=e.blue-r.blue,o.alpha=e.alpha-r.alpha,o},S.multiply=function(e,r,o){return o.red=e.red*r.red,o.green=e.green*r.green,o.blue=e.blue*r.blue,o.alpha=e.alpha*r.alpha,o},S.divide=function(e,r,o){return o.red=e.red/r.red,o.green=e.green/r.green,o.blue=e.blue/r.blue,o.alpha=e.alpha/r.alpha,o},S.mod=function(e,r,o){return o.red=e.red%r.red,o.green=e.green%r.green,o.blue=e.blue%r.blue,o.alpha=e.alpha%r.alpha,o},S.lerp=function(e,r,o,t){return t.red=g.CesiumMath.lerp(e.red,r.red,o),t.green=g.CesiumMath.lerp(e.green,r.green,o),t.blue=g.CesiumMath.lerp(e.blue,r.blue,o),t.alpha=g.CesiumMath.lerp(e.alpha,r.alpha,o),t},S.multiplyByScalar=function(e,r,o){return o.red=e.red*r,o.green=e.green*r,o.blue=e.blue*r,o.alpha=e.alpha*r,o},S.divideByScalar=function(e,r,o){return o.red=e.red/r,o.green=e.green/r,o.blue=e.blue/r,o.alpha=e.alpha/r,o},S.ALICEBLUE=Object.freeze(S.fromCssColorString("#F0F8FF")),S.ANTIQUEWHITE=Object.freeze(S.fromCssColorString("#FAEBD7")),S.AQUA=Object.freeze(S.fromCssColorString("#00FFFF")),S.AQUAMARINE=Object.freeze(S.fromCssColorString("#7FFFD4")),S.AZURE=Object.freeze(S.fromCssColorString("#F0FFFF")),S.BEIGE=Object.freeze(S.fromCssColorString("#F5F5DC")),S.BISQUE=Object.freeze(S.fromCssColorString("#FFE4C4")),S.BLACK=Object.freeze(S.fromCssColorString("#000000")),S.BLANCHEDALMOND=Object.freeze(S.fromCssColorString("#FFEBCD")),S.BLUE=Object.freeze(S.fromCssColorString("#0000FF")),S.BLUEVIOLET=Object.freeze(S.fromCssColorString("#8A2BE2")),S.BROWN=Object.freeze(S.fromCssColorString("#A52A2A")),S.BURLYWOOD=Object.freeze(S.fromCssColorString("#DEB887")),S.CADETBLUE=Object.freeze(S.fromCssColorString("#5F9EA0")),S.CHARTREUSE=Object.freeze(S.fromCssColorString("#7FFF00")),S.CHOCOLATE=Object.freeze(S.fromCssColorString("#D2691E")),S.CORAL=Object.freeze(S.fromCssColorString("#FF7F50")),S.CORNFLOWERBLUE=Object.freeze(S.fromCssColorString("#6495ED")),S.CORNSILK=Object.freeze(S.fromCssColorString("#FFF8DC")),S.CRIMSON=Object.freeze(S.fromCssColorString("#DC143C")),S.CYAN=Object.freeze(S.fromCssColorString("#00FFFF")),S.DARKBLUE=Object.freeze(S.fromCssColorString("#00008B")),S.DARKCYAN=Object.freeze(S.fromCssColorString("#008B8B")),S.DARKGOLDENROD=Object.freeze(S.fromCssColorString("#B8860B")),S.DARKGRAY=Object.freeze(S.fromCssColorString("#A9A9A9")),S.DARKGREEN=Object.freeze(S.fromCssColorString("#006400")),S.DARKGREY=S.DARKGRAY,S.DARKKHAKI=Object.freeze(S.fromCssColorString("#BDB76B")),S.DARKMAGENTA=Object.freeze(S.fromCssColorString("#8B008B")),S.DARKOLIVEGREEN=Object.freeze(S.fromCssColorString("#556B2F")),S.DARKORANGE=Object.freeze(S.fromCssColorString("#FF8C00")),S.DARKORCHID=Object.freeze(S.fromCssColorString("#9932CC")),S.DARKRED=Object.freeze(S.fromCssColorString("#8B0000")),S.DARKSALMON=Object.freeze(S.fromCssColorString("#E9967A")),S.DARKSEAGREEN=Object.freeze(S.fromCssColorString("#8FBC8F")),S.DARKSLATEBLUE=Object.freeze(S.fromCssColorString("#483D8B")),S.DARKSLATEGRAY=Object.freeze(S.fromCssColorString("#2F4F4F")),S.DARKSLATEGREY=S.DARKSLATEGRAY,S.DARKTURQUOISE=Object.freeze(S.fromCssColorString("#00CED1")),S.DARKVIOLET=Object.freeze(S.fromCssColorString("#9400D3")),S.DEEPPINK=Object.freeze(S.fromCssColorString("#FF1493")),S.DEEPSKYBLUE=Object.freeze(S.fromCssColorString("#00BFFF")),S.DIMGRAY=Object.freeze(S.fromCssColorString("#696969")),S.DIMGREY=S.DIMGRAY,S.DODGERBLUE=Object.freeze(S.fromCssColorString("#1E90FF")),S.FIREBRICK=Object.freeze(S.fromCssColorString("#B22222")),S.FLORALWHITE=Object.freeze(S.fromCssColorString("#FFFAF0")),S.FORESTGREEN=Object.freeze(S.fromCssColorString("#228B22")),S.FUCHSIA=Object.freeze(S.fromCssColorString("#FF00FF")),S.GAINSBORO=Object.freeze(S.fromCssColorString("#DCDCDC")),S.GHOSTWHITE=Object.freeze(S.fromCssColorString("#F8F8FF")),S.GOLD=Object.freeze(S.fromCssColorString("#FFD700")),S.GOLDENROD=Object.freeze(S.fromCssColorString("#DAA520")),S.GRAY=Object.freeze(S.fromCssColorString("#808080")),S.GREEN=Object.freeze(S.fromCssColorString("#008000")),S.GREENYELLOW=Object.freeze(S.fromCssColorString("#ADFF2F")),S.GREY=S.GRAY,S.HONEYDEW=Object.freeze(S.fromCssColorString("#F0FFF0")),S.HOTPINK=Object.freeze(S.fromCssColorString("#FF69B4")),S.INDIANRED=Object.freeze(S.fromCssColorString("#CD5C5C")),S.INDIGO=Object.freeze(S.fromCssColorString("#4B0082")),S.IVORY=Object.freeze(S.fromCssColorString("#FFFFF0")),S.KHAKI=Object.freeze(S.fromCssColorString("#F0E68C")),S.LAVENDER=Object.freeze(S.fromCssColorString("#E6E6FA")),S.LAVENDAR_BLUSH=Object.freeze(S.fromCssColorString("#FFF0F5")),S.LAWNGREEN=Object.freeze(S.fromCssColorString("#7CFC00")),S.LEMONCHIFFON=Object.freeze(S.fromCssColorString("#FFFACD")),S.LIGHTBLUE=Object.freeze(S.fromCssColorString("#ADD8E6")),S.LIGHTCORAL=Object.freeze(S.fromCssColorString("#F08080")),S.LIGHTCYAN=Object.freeze(S.fromCssColorString("#E0FFFF")),S.LIGHTGOLDENRODYELLOW=Object.freeze(S.fromCssColorString("#FAFAD2")),S.LIGHTGRAY=Object.freeze(S.fromCssColorString("#D3D3D3")),S.LIGHTGREEN=Object.freeze(S.fromCssColorString("#90EE90")),S.LIGHTGREY=S.LIGHTGRAY,S.LIGHTPINK=Object.freeze(S.fromCssColorString("#FFB6C1")),S.LIGHTSEAGREEN=Object.freeze(S.fromCssColorString("#20B2AA")),S.LIGHTSKYBLUE=Object.freeze(S.fromCssColorString("#87CEFA")),S.LIGHTSLATEGRAY=Object.freeze(S.fromCssColorString("#778899")),S.LIGHTSLATEGREY=S.LIGHTSLATEGRAY,S.LIGHTSTEELBLUE=Object.freeze(S.fromCssColorString("#B0C4DE")),S.LIGHTYELLOW=Object.freeze(S.fromCssColorString("#FFFFE0")),S.LIME=Object.freeze(S.fromCssColorString("#00FF00")),S.LIMEGREEN=Object.freeze(S.fromCssColorString("#32CD32")),S.LINEN=Object.freeze(S.fromCssColorString("#FAF0E6")),S.MAGENTA=Object.freeze(S.fromCssColorString("#FF00FF")),S.MAROON=Object.freeze(S.fromCssColorString("#800000")),S.MEDIUMAQUAMARINE=Object.freeze(S.fromCssColorString("#66CDAA")),S.MEDIUMBLUE=Object.freeze(S.fromCssColorString("#0000CD")),S.MEDIUMORCHID=Object.freeze(S.fromCssColorString("#BA55D3")),S.MEDIUMPURPLE=Object.freeze(S.fromCssColorString("#9370DB")),S.MEDIUMSEAGREEN=Object.freeze(S.fromCssColorString("#3CB371")),S.MEDIUMSLATEBLUE=Object.freeze(S.fromCssColorString("#7B68EE")),S.MEDIUMSPRINGGREEN=Object.freeze(S.fromCssColorString("#00FA9A")),S.MEDIUMTURQUOISE=Object.freeze(S.fromCssColorString("#48D1CC")),S.MEDIUMVIOLETRED=Object.freeze(S.fromCssColorString("#C71585")),S.MIDNIGHTBLUE=Object.freeze(S.fromCssColorString("#191970")),S.MINTCREAM=Object.freeze(S.fromCssColorString("#F5FFFA")),S.MISTYROSE=Object.freeze(S.fromCssColorString("#FFE4E1")),S.MOCCASIN=Object.freeze(S.fromCssColorString("#FFE4B5")),S.NAVAJOWHITE=Object.freeze(S.fromCssColorString("#FFDEAD")),S.NAVY=Object.freeze(S.fromCssColorString("#000080")),S.OLDLACE=Object.freeze(S.fromCssColorString("#FDF5E6")),S.OLIVE=Object.freeze(S.fromCssColorString("#808000")),S.OLIVEDRAB=Object.freeze(S.fromCssColorString("#6B8E23")),S.ORANGE=Object.freeze(S.fromCssColorString("#FFA500")),S.ORANGERED=Object.freeze(S.fromCssColorString("#FF4500")),S.ORCHID=Object.freeze(S.fromCssColorString("#DA70D6")),S.PALEGOLDENROD=Object.freeze(S.fromCssColorString("#EEE8AA")),S.PALEGREEN=Object.freeze(S.fromCssColorString("#98FB98")),S.PALETURQUOISE=Object.freeze(S.fromCssColorString("#AFEEEE")),S.PALEVIOLETRED=Object.freeze(S.fromCssColorString("#DB7093")),S.PAPAYAWHIP=Object.freeze(S.fromCssColorString("#FFEFD5")),S.PEACHPUFF=Object.freeze(S.fromCssColorString("#FFDAB9")),S.PERU=Object.freeze(S.fromCssColorString("#CD853F")),S.PINK=Object.freeze(S.fromCssColorString("#FFC0CB")),S.PLUM=Object.freeze(S.fromCssColorString("#DDA0DD")),S.POWDERBLUE=Object.freeze(S.fromCssColorString("#B0E0E6")),S.PURPLE=Object.freeze(S.fromCssColorString("#800080")),S.RED=Object.freeze(S.fromCssColorString("#FF0000")),S.ROSYBROWN=Object.freeze(S.fromCssColorString("#BC8F8F")),S.ROYALBLUE=Object.freeze(S.fromCssColorString("#4169E1")),S.SADDLEBROWN=Object.freeze(S.fromCssColorString("#8B4513")),S.SALMON=Object.freeze(S.fromCssColorString("#FA8072")),S.SANDYBROWN=Object.freeze(S.fromCssColorString("#F4A460")),S.SEAGREEN=Object.freeze(S.fromCssColorString("#2E8B57")),S.SEASHELL=Object.freeze(S.fromCssColorString("#FFF5EE")),S.SIENNA=Object.freeze(S.fromCssColorString("#A0522D")),S.SILVER=Object.freeze(S.fromCssColorString("#C0C0C0")),S.SKYBLUE=Object.freeze(S.fromCssColorString("#87CEEB")),S.SLATEBLUE=Object.freeze(S.fromCssColorString("#6A5ACD")),S.SLATEGRAY=Object.freeze(S.fromCssColorString("#708090")),S.SLATEGREY=S.SLATEGRAY,S.SNOW=Object.freeze(S.fromCssColorString("#FFFAFA")),S.SPRINGGREEN=Object.freeze(S.fromCssColorString("#00FF7F")),S.STEELBLUE=Object.freeze(S.fromCssColorString("#4682B4")),S.TAN=Object.freeze(S.fromCssColorString("#D2B48C")),S.TEAL=Object.freeze(S.fromCssColorString("#008080")),S.THISTLE=Object.freeze(S.fromCssColorString("#D8BFD8")),S.TOMATO=Object.freeze(S.fromCssColorString("#FF6347")),S.TURQUOISE=Object.freeze(S.fromCssColorString("#40E0D0")),S.VIOLET=Object.freeze(S.fromCssColorString("#EE82EE")),S.WHEAT=Object.freeze(S.fromCssColorString("#F5DEB3")),S.WHITE=Object.freeze(S.fromCssColorString("#FFFFFF")),S.WHITESMOKE=Object.freeze(S.fromCssColorString("#F5F5F5")),S.YELLOW=Object.freeze(S.fromCssColorString("#FFFF00")),S.YELLOWGREEN=Object.freeze(S.fromCssColorString("#9ACD32")),S.TRANSPARENT=Object.freeze(new S(0,0,0,0)),e.Color=S});
