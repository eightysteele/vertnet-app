goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6412){
var vec__6413__6414 = p__6412;
var k__6415 = cljs.core.nth.call(null,vec__6413__6414,0,null);
var v__6416 = cljs.core.nth.call(null,vec__6413__6414,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6415.toLowerCase()),v__6416]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__6447 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6417 = this$;

if(cljs.core.truth_(and__3546__auto____6417))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6417;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____6418 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6418))
{return or__3548__auto____6418;
} else
{var or__3548__auto____6419 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6419))
{return or__3548__auto____6419;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__6448 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____6420 = this$;

if(cljs.core.truth_(and__3546__auto____6420))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6420;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____6421 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6421))
{return or__3548__auto____6421;
} else
{var or__3548__auto____6422 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6422))
{return or__3548__auto____6422;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__6449 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____6423 = this$;

if(cljs.core.truth_(and__3546__auto____6423))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6423;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____6424 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6424))
{return or__3548__auto____6424;
} else
{var or__3548__auto____6425 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6425))
{return or__3548__auto____6425;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__6450 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____6426 = this$;

if(cljs.core.truth_(and__3546__auto____6426))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6426;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____6427 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6427))
{return or__3548__auto____6427;
} else
{var or__3548__auto____6428 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6428))
{return or__3548__auto____6428;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__6447.call(this,this$);
case  2 :
return connect__6448.call(this,this$,opt1);
case  3 :
return connect__6449.call(this,this$,opt1,opt2);
case  4 :
return connect__6450.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__6452 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____6429 = this$;

if(cljs.core.truth_(and__3546__auto____6429))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6429;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____6430 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6430))
{return or__3548__auto____6430;
} else
{var or__3548__auto____6431 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6431))
{return or__3548__auto____6431;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__6453 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____6432 = this$;

if(cljs.core.truth_(and__3546__auto____6432))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6432;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____6433 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6433))
{return or__3548__auto____6433;
} else
{var or__3548__auto____6434 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6434))
{return or__3548__auto____6434;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__6454 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____6435 = this$;

if(cljs.core.truth_(and__3546__auto____6435))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6435;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____6436 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6436))
{return or__3548__auto____6436;
} else
{var or__3548__auto____6437 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6437))
{return or__3548__auto____6437;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__6455 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____6438 = this$;

if(cljs.core.truth_(and__3546__auto____6438))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6438;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____6439 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6439))
{return or__3548__auto____6439;
} else
{var or__3548__auto____6440 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6440))
{return or__3548__auto____6440;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6456 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____6441 = this$;

if(cljs.core.truth_(and__3546__auto____6441))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6441;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____6442 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6442))
{return or__3548__auto____6442;
} else
{var or__3548__auto____6443 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6443))
{return or__3548__auto____6443;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__6452.call(this,this$,opt);
case  3 :
return transmit__6453.call(this,this$,opt,opt2);
case  4 :
return transmit__6454.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__6455.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__6456.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6444 = this$;

if(cljs.core.truth_(and__3546__auto____6444))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____6444;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____6445 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6445))
{return or__3548__auto____6445;
} else
{var or__3548__auto____6446 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____6446))
{return or__3548__auto____6446;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6458){
var vec__6459__6460 = p__6458;
var k__6461 = cljs.core.nth.call(null,vec__6459__6460,0,null);
var v__6462 = cljs.core.nth.call(null,vec__6459__6460,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6461.toLowerCase()),v__6462]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__6463 = null;
var G__6463__6464 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6463__6465 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6463__6466 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6463__6467 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6463__6468 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__6463 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__6463__6464.call(this,this$,uri);
case  3 :
return G__6463__6465.call(this,this$,uri,method);
case  4 :
return G__6463__6466.call(this,this$,uri,method,content);
case  5 :
return G__6463__6467.call(this,this$,uri,method,content,headers);
case  6 :
return G__6463__6468.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6463;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6470){
var vec__6471__6472 = p__6470;
var k__6473 = cljs.core.nth.call(null,vec__6471__6472,0,null);
var v__6474 = cljs.core.nth.call(null,vec__6471__6472,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6473.toLowerCase()),v__6474]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__6481 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____6475 = this$;

if(cljs.core.truth_(and__3546__auto____6475))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____6475;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____6476 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6476))
{return or__3548__auto____6476;
} else
{var or__3548__auto____6477 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____6477))
{return or__3548__auto____6477;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__6482 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____6478 = this$;

if(cljs.core.truth_(and__3546__auto____6478))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____6478;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____6479 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6479))
{return or__3548__auto____6479;
} else
{var or__3548__auto____6480 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____6480))
{return or__3548__auto____6480;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__6481.call(this,this$,service_name,fn);
case  4 :
return register_service__6482.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__6484 = null;
var G__6484__6485 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__6484__6486 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__6484__6487 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__6484__6488 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__6484 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__6484__6485.call(this,this$);
case  2 :
return G__6484__6486.call(this,this$,on_connect_fn);
case  3 :
return G__6484__6487.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__6484__6488.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6484;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__6490 = null;
var G__6490__6491 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__6490__6492 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__6490 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__6490__6491.call(this,this$,service_name,fn);
case  4 :
return G__6490__6492.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6490;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__6503 = (function (){
var temp__3698__auto____6494 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____6494))
{var config__6495 = temp__3698__auto____6494;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__6495)));
} else
{return null;
}
});
var xpc_connection__6504 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__6496){
var vec__6497__6498 = p__6496;
var k__6499 = cljs.core.nth.call(null,vec__6497__6498,0,null);
var v__6500 = cljs.core.nth.call(null,vec__6497__6498,1,null);

var temp__3698__auto____6501 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__6499);

if(cljs.core.truth_(temp__3698__auto____6501))
{var field__6502 = temp__3698__auto____6501;

return cljs.core.assoc.call(null,sum,field__6502,v__6500);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__6503.call(this);
case  1 :
return xpc_connection__6504.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
