(function(){var a=function(){var a={absolute:false,rootUrl:"http://localhost",routes:[{"host":null,"methods":["GET","HEAD"],"uri":"home","name":"home","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"licenses","name":"licenses","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"skills","name":"skills","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"works","name":"works","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"accounts","name":"accounts","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"works\/{id}","name":"work_detail","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"tags\/{id}","name":"tag_detail","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin","name":"admin","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/licenses","name":"admin_licenses","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/skills","name":"admin_skills","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/skills\/categories","name":"admin_skill_categories","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/works","name":"admin_works","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/services","name":"admin_services","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/accounts","name":"admin_accounts","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/introduction","name":"admin_introduction","action":"Closure"}],prefix:"",route:function(a,b,c){if(c=c||this.getByName(a))return this.toRoute(c,b)},url:function(a,b){b=b||[];var c=a+"/"+b.join("/");return this.getCorrectUrl(c)},toRoute:function(a,b){var c=this.replaceNamedParameters(a.uri,b),d=this.getRouteQueryString(b);return this.absolute&&this.isOtherHost(a)?"//"+a.host+"/"+c+d:this.getCorrectUrl(c+d)},isOtherHost:function(a){return a.host&&a.host!=window.location.hostname},replaceNamedParameters:function(a,b){return a=a.replace(/\{(.*?)\??\}/g,function(a,c){if(b.hasOwnProperty(c)){var d=b[c];return delete b[c],d}return a}),a=a.replace(/\/\{.*?\?\}/g,"")},getRouteQueryString:function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+"="+a[c]);return b.length<1?"":"?"+b.join("&")},getByName:function(a){for(var b in this.routes)if(this.routes.hasOwnProperty(b)&&this.routes[b].name===a)return this.routes[b]},getByAction:function(a){for(var b in this.routes)if(this.routes.hasOwnProperty(b)&&this.routes[b].action===a)return this.routes[b]},getCorrectUrl:function(a){var b=this.prefix+"/"+a.replace(/^\/?/,"");return this.absolute?this.rootUrl.replace("//?$/","")+b:b}},b=function(a){if(!a)return"";var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+'="'+a[c]+'"');return b.join(" ")},c=function(a,c,d){return c=c||a,d=b(d),'<a href="'+a+'" '+d+">"+c+"</a>"};return{action:function(b,c){return c=c||{},a.route(b,c,a.getByAction(b))},route:function(b,c){return c=c||{},a.route(b,c)},url:function(b,c){return c=c||{},a.url(b,c)},link_to:function(a,b,d){return a=this.url(a),c(a,b,d)},link_to_route:function(a,b,d,e){var f=this.route(a,d);return c(f,b,e)},link_to_action:function(a,b,d,e){var f=this.action(a,d);return c(f,b,e)}}}.call(this);"function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:window.laroute=a}).call(this);