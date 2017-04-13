/*
 Highcharts JS v5.0.9 (2017-03-08)

 3D features for Highcharts JS

 @license: www.highcharts.com/license
*/
(function(t){"object"===typeof module&&module.exports?module.exports=t:t(Highcharts)})(function(t){(function(b){var r=b.deg2rad,d=b.pick;b.perspective=function(p,q,y){var h=q.options.chart.options3d,m=y?q.inverted:!1,l=q.plotWidth/2,e=q.plotHeight/2,f=h.depth/2,n=d(h.depth,1)*d(h.viewDistance,0),c=q.scale3d||1,a=r*h.beta*(m?-1:1),h=r*h.alpha*(m?-1:1),k=Math.cos(h),u=Math.cos(-a),z=Math.sin(h),A=Math.sin(-a);y||(l+=q.plotLeft,e+=q.plotTop);return b.map(p,function(a){var b,h;h=(m?a.y:a.x)-l;var d=(m?
a.x:a.y)-e,p=(a.z||0)-f;b=u*h-A*p;a=-z*A*h+k*d-u*z*p;h=k*A*h+z*d+k*u*p;d=0<n&&n<Number.POSITIVE_INFINITY?n/(h+f+n):1;b=b*d*c+l;a=a*d*c+e;return{x:m?a:b,y:m?b:a,z:h*c+f}})};b.pointCameraDistance=function(b,q){var p=q.options.chart.options3d,h=q.plotWidth/2;q=q.plotHeight/2;p=d(p.depth,1)*d(p.viewDistance,0)+p.depth;return Math.sqrt(Math.pow(h-b.plotX,2)+Math.pow(q-b.plotY,2)+Math.pow(p-b.plotZ,2))}})(t);(function(b){function r(a){var c=0,g,D;for(g=0;g<a.length;g++)D=(g+1)%a.length,c+=a[g].x*a[D].y-
a[D].x*a[g].y;return c/2}function d(a){var c=0,g;for(g=0;g<a.length;g++)c+=a[g].z;return a.length?c/a.length:0}function p(a,c,g,D,b,E,k,f){var e=[],G=E-b;return E>b&&E-b>Math.PI/2+.0001?(e=e.concat(p(a,c,g,D,b,b+Math.PI/2,k,f)),e=e.concat(p(a,c,g,D,b+Math.PI/2,E,k,f))):E<b&&b-E>Math.PI/2+.0001?(e=e.concat(p(a,c,g,D,b,b-Math.PI/2,k,f)),e=e.concat(p(a,c,g,D,b-Math.PI/2,E,k,f))):["C",a+g*Math.cos(b)-g*v*G*Math.sin(b)+k,c+D*Math.sin(b)+D*v*G*Math.cos(b)+f,a+g*Math.cos(E)+g*v*G*Math.sin(E)+k,c+D*Math.sin(E)-
D*v*G*Math.cos(E)+f,a+g*Math.cos(E)+k,c+D*Math.sin(E)+f]}var q=Math.cos,y=Math.PI,h=Math.sin,m=b.animObject,l=b.charts,e=b.color,f=b.defined,n=b.deg2rad,c=b.each,a=b.extend,k=b.inArray,u=b.map,z=b.merge,A=b.perspective,t=b.pick,H=b.SVGElement,C=b.SVGRenderer,w=b.wrap,v=4*(Math.sqrt(2)-1)/3/(y/2);w(C.prototype,"init",function(a){a.apply(this,[].slice.call(arguments,1));c([{name:"darker",slope:.6},{name:"brighter",slope:1.4}],function(a){this.definition({tagName:"filter",id:"highcharts-"+a.name,children:[{tagName:"feComponentTransfer",
children:[{tagName:"feFuncR",type:"linear",slope:a.slope},{tagName:"feFuncG",type:"linear",slope:a.slope},{tagName:"feFuncB",type:"linear",slope:a.slope}]}]})},this)});C.prototype.toLinePath=function(a,b){var g=[];c(a,function(a){g.push("L",a.x,a.y)});a.length&&(g[0]="M",b&&g.push("Z"));return g};C.prototype.cuboid=function(a){var c=this.g(),g=c.destroy;a=this.cuboidPath(a);c.front=this.path(a[0]).attr({"class":"highcharts-3d-front",zIndex:a[3]}).add(c);c.top=this.path(a[1]).attr({"class":"highcharts-3d-top",
zIndex:a[4]}).add(c);c.side=this.path(a[2]).attr({"class":"highcharts-3d-side",zIndex:a[5]}).add(c);c.fillSetter=function(a){this.front.attr({fill:a});this.top.attr({fill:e(a).brighten(.1).get()});this.side.attr({fill:e(a).brighten(-.1).get()});this.color=a;return this};c.opacitySetter=function(a){this.front.attr({opacity:a});this.top.attr({opacity:a});this.side.attr({opacity:a});return this};c.attr=function(a,c){if("string"===typeof a&&"undefined"!==typeof c){var g=a;a={};a[g]=c}if(a.shapeArgs||
f(a.x))a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0],zIndex:a[3]}),this.top.attr({d:a[1],zIndex:a[4]}),this.side.attr({d:a[2],zIndex:a[5]});else return b.SVGElement.prototype.attr.call(this,a);return this};c.animate=function(a,c,g){f(a.x)&&f(a.y)?(a=this.renderer.cuboidPath(a),this.front.attr({zIndex:a[3]}).animate({d:a[0]},c,g),this.top.attr({zIndex:a[4]}).animate({d:a[1]},c,g),this.side.attr({zIndex:a[5]}).animate({d:a[2]},c,g),this.attr({zIndex:-a[6]})):a.opacity?(this.front.animate(a,
c,g),this.top.animate(a,c,g),this.side.animate(a,c,g)):H.prototype.animate.call(this,a,c,g);return this};c.destroy=function(){this.front.destroy();this.top.destroy();this.side.destroy();return g.call(this)};c.attr({zIndex:-a[6]});return c};C.prototype.cuboidPath=function(a){function c(a){return n[a]}var g=a.x,b=a.y,k=a.z,f=a.height,e=a.width,h=a.depth,n=[{x:g,y:b,z:k},{x:g+e,y:b,z:k},{x:g+e,y:b+f,z:k},{x:g,y:b+f,z:k},{x:g,y:b+f,z:k+h},{x:g+e,y:b+f,z:k+h},{x:g+e,y:b,z:k+h},{x:g,y:b,z:k+h}],n=A(n,l[this.chartIndex],
a.insidePlotArea),k=function(a,b){var g=[];a=u(a,c);b=u(b,c);0>r(a)?g=a:0>r(b)&&(g=b);return g};a=k([3,2,1,0],[7,6,5,4]);g=[4,5,2,3];b=k([1,6,7,0],g);k=k([1,2,5,6],[0,7,4,3]);return[this.toLinePath(a,!0),this.toLinePath(b,!0),this.toLinePath(k,!0),d(a),d(b),d(k),9E9*d(u(g,c))]};b.SVGRenderer.prototype.arc3d=function(b){function f(a){var c=!1,b={},g;for(g in a)-1!==k(g,l)&&(b[g]=a[g],delete a[g],c=!0);return c?b:!1}var g=this.g(),h=g.renderer,l="x y r innerR start end".split(" ");b=z(b);b.alpha*=n;
b.beta*=n;g.top=h.path();g.side1=h.path();g.side2=h.path();g.inn=h.path();g.out=h.path();g.onAdd=function(){var a=g.parentGroup,b=g.attr("class");g.top.add(g);c(["out","inn","side1","side2"],function(c){g[c].addClass(b+" highcharts-3d-side").add(a)})};g.setPaths=function(a){var c=g.renderer.arc3dPath(a),b=100*c.zTop;g.attribs=a;g.top.attr({d:c.top,zIndex:c.zTop});g.inn.attr({d:c.inn,zIndex:c.zInn});g.out.attr({d:c.out,zIndex:c.zOut});g.side1.attr({d:c.side1,zIndex:c.zSide1});g.side2.attr({d:c.side2,
zIndex:c.zSide2});g.zIndex=b;g.attr({zIndex:b});a.center&&(g.top.setRadialReference(a.center),delete a.center)};g.setPaths(b);g.fillSetter=function(a){var c=e(a).brighten(-.1).get();this.fill=a;this.side1.attr({fill:c});this.side2.attr({fill:c});this.inn.attr({fill:c});this.out.attr({fill:c});this.top.attr({fill:a});return this};c(["opacity","translateX","translateY","visibility"],function(a){g[a+"Setter"]=function(a,b){g[b]=a;c(["out","inn","side1","side2","top"],function(c){g[c].attr(b,a)})}});
w(g,"attr",function(c,b){var k;"object"===typeof b&&(k=f(b))&&(a(g.attribs,k),g.setPaths(g.attribs));return c.apply(this,[].slice.call(arguments,1))});w(g,"animate",function(a,c,b,g){var k,e=this.attribs,h;delete c.center;delete c.z;delete c.depth;delete c.alpha;delete c.beta;h=m(t(b,this.renderer.globalAnimation));h.duration&&(c=z(c),k=f(c),c.dummy=1,k&&(h.step=function(a,c){function b(a){return e[a]+(t(k[a],e[a])-e[a])*c.pos}"dummy"===c.prop&&c.elem.setPaths(z(e,{x:b("x"),y:b("y"),r:b("r"),innerR:b("innerR"),
start:b("start"),end:b("end")}))}),b=h);return a.call(this,c,b,g)});g.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();H.prototype.destroy.call(this)};g.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};g.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();this.side2.show()};return g};C.prototype.arc3dPath=function(a){function c(a){a%=2*Math.PI;a>Math.PI&&
(a=2*Math.PI-a);return a}var b=a.x,k=a.y,f=a.start,e=a.end-.00001,n=a.r,l=a.innerR,m=a.depth,d=a.alpha,u=a.beta,z=Math.cos(f),r=Math.sin(f);a=Math.cos(e);var A=Math.sin(e),x=n*Math.cos(u),n=n*Math.cos(d),v=l*Math.cos(u),w=l*Math.cos(d),l=m*Math.sin(u),B=m*Math.sin(d),m=["M",b+x*z,k+n*r],m=m.concat(p(b,k,x,n,f,e,0,0)),m=m.concat(["L",b+v*a,k+w*A]),m=m.concat(p(b,k,v,w,e,f,0,0)),m=m.concat(["Z"]),C=0<u?Math.PI/2:0,u=0<d?0:Math.PI/2,C=f>-C?f:e>-C?-C:f,F=e<y-u?e:f<y-u?y-u:e,t=2*y-u,d=["M",b+x*q(C),k+
n*h(C)],d=d.concat(p(b,k,x,n,C,F,0,0));e>t&&f<t?(d=d.concat(["L",b+x*q(F)+l,k+n*h(F)+B]),d=d.concat(p(b,k,x,n,F,t,l,B)),d=d.concat(["L",b+x*q(t),k+n*h(t)]),d=d.concat(p(b,k,x,n,t,e,0,0)),d=d.concat(["L",b+x*q(e)+l,k+n*h(e)+B]),d=d.concat(p(b,k,x,n,e,t,l,B)),d=d.concat(["L",b+x*q(t),k+n*h(t)]),d=d.concat(p(b,k,x,n,t,F,0,0))):e>y-u&&f<y-u&&(d=d.concat(["L",b+x*Math.cos(F)+l,k+n*Math.sin(F)+B]),d=d.concat(p(b,k,x,n,F,e,l,B)),d=d.concat(["L",b+x*Math.cos(e),k+n*Math.sin(e)]),d=d.concat(p(b,k,x,n,e,F,
0,0)));d=d.concat(["L",b+x*Math.cos(F)+l,k+n*Math.sin(F)+B]);d=d.concat(p(b,k,x,n,F,C,l,B));d=d.concat(["Z"]);u=["M",b+v*z,k+w*r];u=u.concat(p(b,k,v,w,f,e,0,0));u=u.concat(["L",b+v*Math.cos(e)+l,k+w*Math.sin(e)+B]);u=u.concat(p(b,k,v,w,e,f,l,B));u=u.concat(["Z"]);z=["M",b+x*z,k+n*r,"L",b+x*z+l,k+n*r+B,"L",b+v*z+l,k+w*r+B,"L",b+v*z,k+w*r,"Z"];b=["M",b+x*a,k+n*A,"L",b+x*a+l,k+n*A+B,"L",b+v*a+l,k+w*A+B,"L",b+v*a,k+w*A,"Z"];A=Math.atan2(B,-l);k=Math.abs(e+A);a=Math.abs(f+A);f=Math.abs((f+e)/2+A);k=c(k);
a=c(a);f=c(f);f*=1E5;e=1E5*a;k*=1E5;return{top:m,zTop:1E5*Math.PI+1,out:d,zOut:Math.max(f,e,k),inn:u,zInn:Math.max(f,e,k),side1:z,zSide1:.99*k,side2:b,zSide2:.99*e}}})(t);(function(b){function r(b,f){var e=b.plotLeft,c=b.plotWidth+e,a=b.plotTop,k=b.plotHeight+a,d=e+b.plotWidth/2,h=a+b.plotHeight/2,l=Number.MAX_VALUE,m=-Number.MAX_VALUE,q=Number.MAX_VALUE,r=-Number.MAX_VALUE,w,v=1;w=[{x:e,y:a,z:0},{x:e,y:a,z:f}];p([0,1],function(a){w.push({x:c,y:w[a].y,z:w[a].z})});p([0,1,2,3],function(a){w.push({x:w[a].x,
y:k,z:w[a].z})});w=y(w,b,!1);p(w,function(a){l=Math.min(l,a.x);m=Math.max(m,a.x);q=Math.min(q,a.y);r=Math.max(r,a.y)});e>l&&(v=Math.min(v,1-Math.abs((e+d)/(l+d))%1));c<m&&(v=Math.min(v,(c-d)/(m-d)));a>q&&(v=0>q?Math.min(v,(a+h)/(-q+a+h)):Math.min(v,1-(a+h)/(q+h)%1));k<r&&(v=Math.min(v,Math.abs((k-h)/(r-h))));return v}var d=b.Chart,p=b.each,q=b.merge,y=b.perspective,h=b.pick,m=b.wrap;d.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};d.prototype.propsRequireDirtyBox.push("chart.options3d");
d.prototype.propsRequireUpdateSeries.push("chart.options3d");b.wrap(b.Chart.prototype,"isInsidePlot",function(b){return this.is3d()||b.apply(this,[].slice.call(arguments,1))});var l=b.getOptions();q(!0,l,{chart:{options3d:{enabled:!1,alpha:0,beta:0,depth:100,fitToPlot:!0,viewDistance:25,frame:{bottom:{size:1},side:{size:1},back:{size:1}}}}});m(d.prototype,"getContainer",function(b){b.apply(this,[].slice.call(arguments,1));this.renderer.definition({tagName:"style",textContent:".highcharts-3d-top{filter: url(#highcharts-brighter)}\n.highcharts-3d-side{filter: url(#highcharts-darker)}\n"})});
m(d.prototype,"setClassName",function(b){b.apply(this,[].slice.call(arguments,1));this.is3d()&&(this.container.className+=" highcharts-3d-chart")});b.wrap(b.Chart.prototype,"setChartSize",function(b){var f=this.options.chart.options3d;b.apply(this,[].slice.call(arguments,1));if(this.is3d()){var e=this.inverted,c=this.clipBox,a=this.margin;c[e?"y":"x"]=-(a[3]||0);c[e?"x":"y"]=-(a[0]||0);c[e?"height":"width"]=this.chartWidth+(a[3]||0)+(a[1]||0);c[e?"width":"height"]=this.chartHeight+(a[0]||0)+(a[2]||
0);this.scale3d=1;!0===f.fitToPlot&&(this.scale3d=r(this,f.depth))}});m(d.prototype,"redraw",function(b){this.is3d()&&(this.isDirtyBox=!0);b.apply(this,[].slice.call(arguments,1))});m(d.prototype,"renderSeries",function(b){var f=this.series.length;if(this.is3d())for(;f--;)b=this.series[f],b.translate(),b.render();else b.call(this)});d.prototype.retrieveStacks=function(b){var f=this.series,e={},c,a=1;p(this.series,function(k){c=h(k.options.stack,b?0:f.length-1-k.index);e[c]?e[c].series.push(k):(e[c]=
{series:[k],position:a},a++)});e.totalStacks=a+1;return e}})(t);(function(b){var r,d=b.Axis,p=b.Chart,q=b.each,y=b.extend,h=b.merge,m=b.perspective,l=b.pick,e=b.splat,f=b.Tick,n=b.wrap;n(d.prototype,"setOptions",function(b,a){b.call(this,a);this.chart.is3d()&&"colorAxis"!==this.coll&&(b=this.options,b.tickWidth=l(b.tickWidth,0),b.gridLineWidth=l(b.gridLineWidth,1))});n(d.prototype,"render",function(b){b.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()&&"colorAxis"!==this.coll){var a=this.chart,
c=a.renderer,f=a.options.chart.options3d,e=f.frame,d=e.bottom,h=e.back,e=e.side,l=f.depth,n=this.height,m=this.width,p=this.left,q=this.top;this.isZAxis||(this.horiz?(d={x:p,y:q+(a.xAxis[0].opposite?-d.size:n),z:0,width:m,height:d.size,depth:l,insidePlotArea:!1},this.bottomFrame?this.bottomFrame.animate(d):this.bottomFrame=c.cuboid(d).attr({"class":"highcharts-3d-frame highcharts-3d-frame-bottom",zIndex:a.yAxis[0].reversed&&0<f.alpha?4:-1}).add()):(f={x:p+(a.yAxis[0].opposite?0:-e.size),y:q+(a.xAxis[0].opposite?
-d.size:0),z:l,width:m+e.size,height:n+d.size,depth:h.size,insidePlotArea:!1},this.backFrame?this.backFrame.animate(f):this.backFrame=c.cuboid(f).attr({"class":"highcharts-3d-frame highcharts-3d-frame-back",zIndex:-3}).add(),a={x:p+(a.yAxis[0].opposite?m:-e.size),y:q+(a.xAxis[0].opposite?-d.size:0),z:0,width:e.size,height:n+d.size,depth:l,insidePlotArea:!1},this.sideFrame?this.sideFrame.animate(a):this.sideFrame=c.cuboid(a).attr({"class":"highcharts-3d-frame highcharts-3d-frame-side",zIndex:-2}).add()))}});
n(d.prototype,"getPlotLinePath",function(b){var a=b.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d()||"colorAxis"===this.coll||null===a)return a;var c=this.chart,e=c.options.chart.options3d,c=this.isZAxis?c.plotWidth:e.depth,e=this.opposite;this.horiz&&(e=!e);a=[this.swapZ({x:a[1],y:a[2],z:e?c:0}),this.swapZ({x:a[1],y:a[2],z:c}),this.swapZ({x:a[4],y:a[5],z:c}),this.swapZ({x:a[4],y:a[5],z:e?0:c})];a=m(a,this.chart,!1);return a=this.chart.renderer.toLinePath(a,!1)});n(d.prototype,"getLinePath",
function(b){return this.chart.is3d()?[]:b.apply(this,[].slice.call(arguments,1))});n(d.prototype,"getPlotBandPath",function(b){if(!this.chart.is3d()||"colorAxis"===this.coll)return b.apply(this,[].slice.call(arguments,1));var a=arguments,c=a[1],a=this.getPlotLinePath(a[2]);(c=this.getPlotLinePath(c))&&a?c.push("L",a[10],a[11],"L",a[7],a[8],"L",a[4],a[5],"L",a[1],a[2]):c=null;return c});n(f.prototype,"getMarkPath",function(b){var a=b.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d()||
"colorAxis"===this.coll)return a;a=[this.axis.swapZ({x:a[1],y:a[2],z:0}),this.axis.swapZ({x:a[4],y:a[5],z:0})];a=m(a,this.axis.chart,!1);return a=["M",a[0].x,a[0].y,"L",a[1].x,a[1].y]});n(f.prototype,"getLabelPosition",function(b){var a=b.apply(this,[].slice.call(arguments,1));this.axis.chart.is3d()&&"colorAxis"!==this.coll&&(a=m([this.axis.swapZ({x:a.x,y:a.y,z:0})],this.axis.chart,!1)[0]);return a});b.wrap(d.prototype,"getTitlePosition",function(b){var a=this.chart.is3d()&&"colorAxis"!==this.coll,
c,e;a&&(e=this.axisTitleMargin,this.axisTitleMargin=0);c=b.apply(this,[].slice.call(arguments,1));a&&(c=m([this.swapZ({x:c.x,y:c.y,z:0})],this.chart,!1)[0],c[this.horiz?"y":"x"]+=(this.horiz?1:-1)*(this.opposite?-1:1)*e,this.axisTitleMargin=e);return c});n(d.prototype,"drawCrosshair",function(b){var a=arguments;this.chart.is3d()&&a[2]&&(a[2]={plotX:a[2].plotXold||a[2].plotX,plotY:a[2].plotYold||a[2].plotY});b.apply(this,[].slice.call(a,1))});n(d.prototype,"destroy",function(b){q(["backFrame","bottomFrame",
"sideFrame"],function(a){this[a]&&(this[a]=this[a].destroy())},this);b.apply(this,[].slice.call(arguments,1))});d.prototype.swapZ=function(b,a){if(this.isZAxis){a=a?0:this.chart.plotLeft;var c=this.chart;return{x:a+(c.yAxis[0].opposite?b.z:c.xAxis[0].width-b.z),y:b.y,z:b.x-a}}return b};r=b.ZAxis=function(){this.init.apply(this,arguments)};y(r.prototype,d.prototype);y(r.prototype,{isZAxis:!0,setOptions:function(b){b=h({offset:0,lineWidth:0},b);d.prototype.setOptions.call(this,b);this.coll="zAxis"},
setAxisSize:function(){d.prototype.setAxisSize.call(this);this.width=this.len=this.chart.options.chart.options3d.depth;this.right=this.chart.chartWidth-this.width-this.left},getSeriesExtremes:function(){var b=this,a=b.chart;b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.ignoreMinPadding=b.ignoreMaxPadding=null;b.buildStacks&&b.buildStacks();q(b.series,function(c){if(c.visible||!a.options.chart.ignoreHiddenSeries)b.hasVisibleSeries=!0,c=c.zData,c.length&&(b.dataMin=Math.min(l(b.dataMin,c[0]),Math.min.apply(null,
c)),b.dataMax=Math.max(l(b.dataMax,c[0]),Math.max.apply(null,c)))})}});n(p.prototype,"getAxes",function(b){var a=this,c=this.options,c=c.zAxis=e(c.zAxis||{});b.call(this);a.is3d()&&(this.zAxis=[],q(c,function(b,c){b.index=c;b.isX=!0;(new r(a,b)).setScale()}))})})(t);(function(b){function r(b){if(this.chart.is3d()){var e=this.chart.options.plotOptions.column.grouping;void 0===e||e||void 0===this.group.zIndex||this.zIndexSet||(this.group.attr({zIndex:10*this.group.zIndex}),this.zIndexSet=!0)}b.apply(this,
[].slice.call(arguments,1))}var d=b.each,p=b.perspective,q=b.pick,y=b.Series,h=b.seriesTypes,m=b.svg;b=b.wrap;b(h.column.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var e=this.chart,f=this.options,h=f.depth||25,c=(f.stacking?f.stack||0:this._i)*(h+(f.groupZPadding||1));!1!==f.grouping&&(c=0);c+=f.groupZPadding||1;d(this.data,function(a){if(null!==a.y){var b=a.shapeArgs,f=a.tooltipPos;a.shapeType="cuboid";b.z=c;b.depth=h;b.insidePlotArea=!0;f=p([{x:f[0],
y:f[1],z:c}],e,!0)[0];a.tooltipPos=[f.x,f.y]}});this.z=c}});b(h.column.prototype,"animate",function(b){if(this.chart.is3d()){var e=arguments[1],f=this.yAxis,h=this,c=this.yAxis.reversed;m&&(e?d(h.data,function(a){null!==a.y&&(a.height=a.shapeArgs.height,a.shapey=a.shapeArgs.y,a.shapeArgs.height=1,c||(a.shapeArgs.y=a.stackY?a.plotY+f.translate(a.stackY):a.plotY+(a.negative?-a.height:a.height)))}):(d(h.data,function(a){null!==a.y&&(a.shapeArgs.height=a.height,a.shapeArgs.y=a.shapey,a.graphic&&a.graphic.animate(a.shapeArgs,
h.options.animation))}),this.drawDataLabels(),h.animate=null))}else b.apply(this,[].slice.call(arguments,1))});b(h.column.prototype,"init",function(b){b.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var e=this.options,f=e.grouping,d=e.stacking,c=q(this.yAxis.options.reversedStacks,!0),a=0;if(void 0===f||f){f=this.chart.retrieveStacks(d);a=e.stack||0;for(d=0;d<f[a].series.length&&f[a].series[d]!==this;d++);a=10*(f.totalStacks-f[a].position)+(c?d:-d);this.xAxis.reversed||(a=10*f.totalStacks-
a)}e.zIndex=a}});b(y.prototype,"alignDataLabel",function(b){if(this.chart.is3d()&&("column"===this.type||"columnrange"===this.type)){var e=arguments[4],f={x:e.x,y:e.y,z:this.z},f=p([f],this.chart,!0)[0];e.x=f.x;e.y=f.y}b.apply(this,[].slice.call(arguments,1))});h.columnrange&&b(h.columnrange.prototype,"drawPoints",r);b(h.column.prototype,"drawPoints",r)})(t);(function(b){var r=b.deg2rad,d=b.each,p=b.seriesTypes,q=b.svg;b=b.wrap;b(p.pie.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,
1));if(this.chart.is3d()){var h=this,m=h.options,l=m.depth||0,e=h.chart.options.chart.options3d,f=e.alpha,n=e.beta,c=m.stacking?(m.stack||0)*l:h._i*l,c=c+l/2;!1!==m.grouping&&(c=0);d(h.data,function(a){var b=a.shapeArgs;a.shapeType="arc3d";b.z=c;b.depth=.75*l;b.alpha=f;b.beta=n;b.center=h.center;b=(b.end+b.start)/2;a.slicedTranslation={translateX:Math.round(Math.cos(b)*m.slicedOffset*Math.cos(f*r)),translateY:Math.round(Math.sin(b)*m.slicedOffset*Math.cos(f*r))}})}});b(p.pie.prototype.pointClass.prototype,
"haloPath",function(b){var d=arguments;return this.series.chart.is3d()?[]:b.call(this,d[1])});b(p.pie.prototype,"drawPoints",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&d(this.points,function(b){var d=b.graphic;if(d)d[b.y&&b.visible?"show":"hide"]()})});b(p.pie.prototype,"drawDataLabels",function(b){if(this.chart.is3d()){var h=this.chart.options.chart.options3d;d(this.data,function(b){var l=b.shapeArgs,e=l.r,f=(l.start+l.end)/2,m=b.labelPos,c=-e*(1-Math.cos((l.alpha||h.alpha)*
r))*Math.sin(f),a=e*(Math.cos((l.beta||h.beta)*r)-1)*Math.cos(f);d([0,2,4],function(b){m[b]+=a;m[b+1]+=c})})}b.apply(this,[].slice.call(arguments,1))});b(p.pie.prototype,"addPoint",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update(this.userOptions,!0)});b(p.pie.prototype,"animate",function(b){if(this.chart.is3d()){var d=arguments[1],m=this.options.animation,l=this.center,e=this.group,f=this.markerGroup;q&&(!0===m&&(m={}),d?(e.oldtranslateX=e.translateX,e.oldtranslateY=
e.translateY,d={translateX:l[0],translateY:l[1],scaleX:.001,scaleY:.001},e.attr(d),f&&(f.attrSetters=e.attrSetters,f.attr(d))):(d={translateX:e.oldtranslateX,translateY:e.oldtranslateY,scaleX:1,scaleY:1},e.animate(d,m),f&&f.animate(d,m),this.animate=null))}else b.apply(this,[].slice.call(arguments,1))})})(t);(function(b){var r=b.perspective,d=b.pick,p=b.Point,q=b.seriesTypes,t=b.wrap;t(q.scatter.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var h=
this.chart,l=d(this.zAxis,h.options.zAxis[0]),e=[],f,n,c;for(c=0;c<this.data.length;c++)f=this.data[c],n=l.isLog&&l.val2lin?l.val2lin(f.z):f.z,f.plotZ=l.translate(n),f.isInside=f.isInside?n>=l.min&&n<=l.max:!1,e.push({x:f.plotX,y:f.plotY,z:f.plotZ});h=r(e,h,!0);for(c=0;c<this.data.length;c++)f=this.data[c],l=h[c],f.plotXold=f.plotX,f.plotYold=f.plotY,f.plotZold=f.plotZ,f.plotX=l.x,f.plotY=l.y,f.plotZ=l.z}});t(q.scatter.prototype,"init",function(b,d,l){d.is3d()&&(this.axisTypes=["xAxis","yAxis","zAxis"],
this.pointArrayMap=["x","y","z"],this.parallelArrays=["x","y","z"],this.directTouch=!0);b=b.apply(this,[d,l]);this.chart.is3d()&&(this.tooltipOptions.pointFormat=this.userOptions.tooltip?this.userOptions.tooltip.pointFormat||"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3ez: \x3cb\x3e{point.z}\x3c/b\x3e\x3cbr/\x3e":"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3ez: \x3cb\x3e{point.z}\x3c/b\x3e\x3cbr/\x3e");return b});t(q.scatter.prototype,
"pointAttribs",function(d,m){var h=d.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&m&&(h.zIndex=b.pointCameraDistance(m,this.chart));return h});t(p.prototype,"applyOptions",function(b){var d=b.apply(this,[].slice.call(arguments,1));this.series.chart.is3d()&&void 0===d.z&&(d.z=0);return d})})(t)});