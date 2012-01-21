goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = (function event_types(this$){
if(cljs.core.truth_((function (){var and__3546__auto____7057 = this$;

if(cljs.core.truth_(and__3546__auto____7057))
{return this$.clojure$browser$event$EventType$event_types;
} else
{return and__3546__auto____7057;
}
})()))
{return this$.clojure$browser$event$EventType$event_types(this$);
} else
{return (function (){var or__3548__auto____7058 = (clojure.browser.event.event_types[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7058))
{return or__3548__auto____7058;
} else
{var or__3548__auto____7059 = (clojure.browser.event.event_types["_"]);

if(cljs.core.truth_(or__3548__auto____7059))
{return or__3548__auto____7059;
} else
{throw cljs.core.missing_protocol.call(null,"EventType.event-types",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.clojure$browser$event$EventType$ = true;
Element.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7060){
var vec__7061__7062 = p__7060;
var k__7063 = cljs.core.nth.call(null,vec__7061__7062,0,null);
var v__7064 = cljs.core.nth.call(null,vec__7061__7062,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7063.toLowerCase()),v__7064]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = true;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7065){
var vec__7066__7067 = p__7065;
var k__7068 = cljs.core.nth.call(null,vec__7066__7067,0,null);
var v__7069 = cljs.core.nth.call(null,vec__7066__7067,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7068.toLowerCase()),v__7069]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
clojure.browser.event.listen = (function() {
var listen = null;
var listen__7070 = (function (src,type,fn){
return listen.call(null,src,type,fn,false);
});
var listen__7071 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return listen__7070.call(this,src,type,fn);
case  4 :
return listen__7071.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__7073 = (function (src,type,fn){
return listen_once.call(null,src,type,fn,false);
});
var listen_once__7074 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return listen_once__7073.call(this,src,type,fn);
case  4 :
return listen_once__7074.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__7076 = (function (src,type,fn){
return unlisten.call(null,src,type,fn,false);
});
var unlisten__7077 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return unlisten__7076.call(this,src,type,fn);
case  4 :
return unlisten__7077.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){
return goog.events.unlistenByKey.call(null,key);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){
return goog.events.dispatchEvent.call(null,src,event);
});
clojure.browser.event.expose = (function expose(e){
return goog.events.expose.call(null,e);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){
return goog.events.getTotalListenerCount.call(null);
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){
return null;
});
