goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6963){
var vec__6964__6965 = p__6963;
var k__6966 = cljs.core.nth.call(null,vec__6964__6965,0,null);
var v__6967 = cljs.core.nth.call(null,vec__6964__6965,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6966.toLowerCase()),v__6967]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__6998 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6968 = this$;

if(cljs.core.truth_(and__3546__auto____6968))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6968;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____6969 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6969))
{return or__3548__auto____6969;
} else
{var or__3548__auto____6970 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6970))
{return or__3548__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__6999 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____6971 = this$;

if(cljs.core.truth_(and__3546__auto____6971))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6971;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____6972 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6972))
{return or__3548__auto____6972;
} else
{var or__3548__auto____6973 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6973))
{return or__3548__auto____6973;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__7000 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____6974 = this$;

if(cljs.core.truth_(and__3546__auto____6974))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6974;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____6975 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6975))
{return or__3548__auto____6975;
} else
{var or__3548__auto____6976 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6976))
{return or__3548__auto____6976;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__7001 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____6977 = this$;

if(cljs.core.truth_(and__3546__auto____6977))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6977;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____6978 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6978))
{return or__3548__auto____6978;
} else
{var or__3548__auto____6979 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6979))
{return or__3548__auto____6979;
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
return connect__6998.call(this,this$);
case  2 :
return connect__6999.call(this,this$,opt1);
case  3 :
return connect__7000.call(this,this$,opt1,opt2);
case  4 :
return connect__7001.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__7003 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____6980 = this$;

if(cljs.core.truth_(and__3546__auto____6980))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6980;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____6981 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6981))
{return or__3548__auto____6981;
} else
{var or__3548__auto____6982 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6982))
{return or__3548__auto____6982;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__7004 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____6983 = this$;

if(cljs.core.truth_(and__3546__auto____6983))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6983;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____6984 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6984))
{return or__3548__auto____6984;
} else
{var or__3548__auto____6985 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6985))
{return or__3548__auto____6985;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__7005 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____6986 = this$;

if(cljs.core.truth_(and__3546__auto____6986))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6986;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____6987 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6987))
{return or__3548__auto____6987;
} else
{var or__3548__auto____6988 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6988))
{return or__3548__auto____6988;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__7006 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____6989 = this$;

if(cljs.core.truth_(and__3546__auto____6989))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6989;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____6990 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6990))
{return or__3548__auto____6990;
} else
{var or__3548__auto____6991 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6991))
{return or__3548__auto____6991;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__7007 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____6992 = this$;

if(cljs.core.truth_(and__3546__auto____6992))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6992;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____6993 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6993))
{return or__3548__auto____6993;
} else
{var or__3548__auto____6994 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6994))
{return or__3548__auto____6994;
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
return transmit__7003.call(this,this$,opt);
case  3 :
return transmit__7004.call(this,this$,opt,opt2);
case  4 :
return transmit__7005.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__7006.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__7007.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6995 = this$;

if(cljs.core.truth_(and__3546__auto____6995))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____6995;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____6996 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6996))
{return or__3548__auto____6996;
} else
{var or__3548__auto____6997 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____6997))
{return or__3548__auto____6997;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7009){
var vec__7010__7011 = p__7009;
var k__7012 = cljs.core.nth.call(null,vec__7010__7011,0,null);
var v__7013 = cljs.core.nth.call(null,vec__7010__7011,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7012.toLowerCase()),v__7013]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__7014 = null;
var G__7014__7015 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7014__7016 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7014__7017 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7014__7018 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7014__7019 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__7014 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__7014__7015.call(this,this$,uri);
case  3 :
return G__7014__7016.call(this,this$,uri,method);
case  4 :
return G__7014__7017.call(this,this$,uri,method,content);
case  5 :
return G__7014__7018.call(this,this$,uri,method,content,headers);
case  6 :
return G__7014__7019.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7014;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7021){
var vec__7022__7023 = p__7021;
var k__7024 = cljs.core.nth.call(null,vec__7022__7023,0,null);
var v__7025 = cljs.core.nth.call(null,vec__7022__7023,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7024.toLowerCase()),v__7025]);
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
var register_service__7032 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____7026 = this$;

if(cljs.core.truth_(and__3546__auto____7026))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____7026;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____7027 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7027))
{return or__3548__auto____7027;
} else
{var or__3548__auto____7028 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____7028))
{return or__3548__auto____7028;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__7033 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____7029 = this$;

if(cljs.core.truth_(and__3546__auto____7029))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____7029;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____7030 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7030))
{return or__3548__auto____7030;
} else
{var or__3548__auto____7031 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____7031))
{return or__3548__auto____7031;
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
return register_service__7032.call(this,this$,service_name,fn);
case  4 :
return register_service__7033.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__7035 = null;
var G__7035__7036 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__7035__7037 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__7035__7038 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__7035__7039 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__7035 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__7035__7036.call(this,this$);
case  2 :
return G__7035__7037.call(this,this$,on_connect_fn);
case  3 :
return G__7035__7038.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__7035__7039.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7035;
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
var G__7041 = null;
var G__7041__7042 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__7041__7043 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__7041 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__7041__7042.call(this,this$,service_name,fn);
case  4 :
return G__7041__7043.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7041;
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
var xpc_connection__7054 = (function (){
var temp__3698__auto____7045 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____7045))
{var config__7046 = temp__3698__auto____7045;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__7046)));
} else
{return null;
}
});
var xpc_connection__7055 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__7047){
var vec__7048__7049 = p__7047;
var k__7050 = cljs.core.nth.call(null,vec__7048__7049,0,null);
var v__7051 = cljs.core.nth.call(null,vec__7048__7049,1,null);

var temp__3698__auto____7052 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__7050);

if(cljs.core.truth_(temp__3698__auto____7052))
{var field__7053 = temp__3698__auto____7052;

return cljs.core.assoc.call(null,sum,field__7053,v__7051);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__7054.call(this);
case  1 :
return xpc_connection__7055.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
