goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9603){
var vec__9604__9605 = p__9603;
var k__9606 = cljs.core.nth.call(null,vec__9604__9605,0,null);
var v__9607 = cljs.core.nth.call(null,vec__9604__9605,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__9606.toLowerCase()),v__9607]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9638 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____9608 = this$;

if(cljs.core.truth_(and__3546__auto____9608))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9608;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____9609 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9609))
{return or__3548__auto____9609;
} else
{var or__3548__auto____9610 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9610))
{return or__3548__auto____9610;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9639 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____9611 = this$;

if(cljs.core.truth_(and__3546__auto____9611))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9611;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____9612 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9612))
{return or__3548__auto____9612;
} else
{var or__3548__auto____9613 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9613))
{return or__3548__auto____9613;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9640 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9614 = this$;

if(cljs.core.truth_(and__3546__auto____9614))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9614;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____9615 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9615))
{return or__3548__auto____9615;
} else
{var or__3548__auto____9616 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9616))
{return or__3548__auto____9616;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9641 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9617 = this$;

if(cljs.core.truth_(and__3546__auto____9617))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9617;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____9618 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9618))
{return or__3548__auto____9618;
} else
{var or__3548__auto____9619 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9619))
{return or__3548__auto____9619;
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
return connect__9638.call(this,this$);
case  2 :
return connect__9639.call(this,this$,opt1);
case  3 :
return connect__9640.call(this,this$,opt1,opt2);
case  4 :
return connect__9641.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9643 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____9620 = this$;

if(cljs.core.truth_(and__3546__auto____9620))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9620;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____9621 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9621))
{return or__3548__auto____9621;
} else
{var or__3548__auto____9622 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9622))
{return or__3548__auto____9622;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9644 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9623 = this$;

if(cljs.core.truth_(and__3546__auto____9623))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9623;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____9624 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9624))
{return or__3548__auto____9624;
} else
{var or__3548__auto____9625 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9625))
{return or__3548__auto____9625;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9645 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9626 = this$;

if(cljs.core.truth_(and__3546__auto____9626))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9626;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____9627 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9627))
{return or__3548__auto____9627;
} else
{var or__3548__auto____9628 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9628))
{return or__3548__auto____9628;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9646 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____9629 = this$;

if(cljs.core.truth_(and__3546__auto____9629))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9629;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____9630 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9630))
{return or__3548__auto____9630;
} else
{var or__3548__auto____9631 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9631))
{return or__3548__auto____9631;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9647 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____9632 = this$;

if(cljs.core.truth_(and__3546__auto____9632))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9632;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____9633 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9633))
{return or__3548__auto____9633;
} else
{var or__3548__auto____9634 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9634))
{return or__3548__auto____9634;
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
return transmit__9643.call(this,this$,opt);
case  3 :
return transmit__9644.call(this,this$,opt,opt2);
case  4 :
return transmit__9645.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9646.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9647.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____9635 = this$;

if(cljs.core.truth_(and__3546__auto____9635))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____9635;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____9636 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9636))
{return or__3548__auto____9636;
} else
{var or__3548__auto____9637 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____9637))
{return or__3548__auto____9637;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9649){
var vec__9650__9651 = p__9649;
var k__9652 = cljs.core.nth.call(null,vec__9650__9651,0,null);
var v__9653 = cljs.core.nth.call(null,vec__9650__9651,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__9652.toLowerCase()),v__9653]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9654 = null;
var G__9654__9655 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9654__9656 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9654__9657 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9654__9658 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9654__9659 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9654 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9654__9655.call(this,this$,uri);
case  3 :
return G__9654__9656.call(this,this$,uri,method);
case  4 :
return G__9654__9657.call(this,this$,uri,method,content);
case  5 :
return G__9654__9658.call(this,this$,uri,method,content,headers);
case  6 :
return G__9654__9659.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9654;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9661){
var vec__9662__9663 = p__9661;
var k__9664 = cljs.core.nth.call(null,vec__9662__9663,0,null);
var v__9665 = cljs.core.nth.call(null,vec__9662__9663,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__9664.toLowerCase()),v__9665]);
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
var register_service__9672 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____9666 = this$;

if(cljs.core.truth_(and__3546__auto____9666))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9666;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____9667 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9667))
{return or__3548__auto____9667;
} else
{var or__3548__auto____9668 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9668))
{return or__3548__auto____9668;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9673 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____9669 = this$;

if(cljs.core.truth_(and__3546__auto____9669))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9669;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____9670 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9670))
{return or__3548__auto____9670;
} else
{var or__3548__auto____9671 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9671))
{return or__3548__auto____9671;
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
return register_service__9672.call(this,this$,service_name,fn);
case  4 :
return register_service__9673.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9675 = null;
var G__9675__9676 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9675__9677 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9675__9678 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9675__9679 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9675 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9675__9676.call(this,this$);
case  2 :
return G__9675__9677.call(this,this$,on_connect_fn);
case  3 :
return G__9675__9678.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9675__9679.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9675;
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
var G__9681 = null;
var G__9681__9682 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9681__9683 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9681 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9681__9682.call(this,this$,service_name,fn);
case  4 :
return G__9681__9683.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9681;
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
var xpc_connection__9694 = (function (){
var temp__3698__auto____9685 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____9685))
{var config__9686 = temp__3698__auto____9685;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9686)));
} else
{return null;
}
});
var xpc_connection__9695 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9687){
var vec__9688__9689 = p__9687;
var k__9690 = cljs.core.nth.call(null,vec__9688__9689,0,null);
var v__9691 = cljs.core.nth.call(null,vec__9688__9689,1,null);

var temp__3698__auto____9692 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9690);

if(cljs.core.truth_(temp__3698__auto____9692))
{var field__9693 = temp__3698__auto____9692;

return cljs.core.assoc.call(null,sum,field__9693,v__9691);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__9694.call(this);
case  1 :
return xpc_connection__9695.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
