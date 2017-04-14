//>>built
define("esri/layers/rasterFormats/Raw",[],function(){return{decodeBIP:function(b,a){var f=a.pixelType,d=a.bandCount,k=[],e=a.width*a.height,c=this.getBandCount(b,a),d=d||c,h=b.byteLength-b.byteLength%(e*this._getPixelLength(f)),g=new f(b,0,e*c),m,l,p,n;for(m=0;m<d;m++){n=new f(e);for(l=0;l<e;l++)n[l]=g[l*c+m];k.push(n)}h<b.byteLength-1&&(p=this._decodeMask(b.slice(h),a));return{pixels:k,maskData:p}},decodeBSQ:function(b,a){var f=a.pixelType,d=a.bandCount;if(void 0===d||null===d)d=this.getBandCount(b,
a);for(var k=[],e=a.width*a.height,c=e*d,h=b.byteLength-b.byteLength%(e*this._getPixelLength(f)),f=new f(b,0,c),g,c=0;c<d;c++)k.push(f.subarray(c*e,(c+1)*e));h<b.byteLength-1&&(g=this._decodeMask(b.slice(h),a));return{pixels:k,maskData:g}},getBandCount:function(b,a){return Math.floor(b.byteLength/(a.width*a.height*this._getPixelLength(a.pixelType)))},_getPixelLength:function(b){var a=1;switch(b){case Uint8Array:case Int8Array:case Uint8ClampedArray:a=1;break;case Uint16Array:case Int16Array:a=2;break;
case Uint32Array:case Int32Array:case Float32Array:a=4;break;case Float64Array:a=8}return a},_decodeMask:function(b,a){var f=a.width*a.height;if(8*b.byteLength<f)return null;for(var d=new Uint8Array(b,0,Math.ceil(f/8)),k=new Uint8Array(a.width*a.height),e=0,c=0,h=0,g=0,h=0;h<d.length-1;h++){c=d[h];for(g=7;0<=g;g--)k[e++]=c>>g&1}for(g=7;e<f-1;)c=d[d.length-1],k[e++]=c>>g&1,g--;return k}}});