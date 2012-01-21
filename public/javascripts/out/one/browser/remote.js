goog.provide('one.browser.remote');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrManager');
one.browser.remote.responders = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
one.browser.remote.add_responders = (function add_responders(id,success,error){
if(cljs.core.truth_((function (){var or__3548__auto____6608 = success;

if(cljs.core.truth_(or__3548__auto____6608))
{return or__3548__auto____6608;
} else
{return error;
}
})()))
{return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.assoc,id,cljs.core.ObjMap.fromObject(["﷐'success","﷐'error"],{"﷐'success":success,"﷐'error":error}));
} else
{return null;
}
});
goog.net.XhrManager.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrManager.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6609){
var vec__6610__6611 = p__6609;
var k__6612 = cljs.core.nth.call(null,vec__6610__6611,0,null);
var v__6613 = cljs.core.nth.call(null,vec__6610__6611,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6612.toLowerCase()),v__6613]);
}),cljs.core.js__GT_clj.call(null,goog.net.EventType)));
});
one.browser.remote._STAR_xhr_manager_STAR_ = (new goog.net.XhrManager(null,null,null,0,5000));
/**
* Asynchronously make a network request for the resource at url. If
* provided via the `:on-success` and `:on-error` keyword arguments, the
* appropriate one of `on-success` or `on-error` will be called on
* completion. They will be passed a map containing the keys `:id`,
* `:body`, `:status`, and `:event`. The entry for `:event` contains an
* instance of the `goog.net.XhrManager.Event`.
* 
* Other allowable keyword arguments are `:method`, `:content`, `:headers`,
* `:priority`, and `:retries`. `:method` defaults to "GET" and `:retries`
* defaults to `0`.
* @param {...*} var_args
*/
one.browser.remote.request = (function() { 
var request__delegate = function (id,url,p__6614){
var map__6615__6616 = p__6614;
var map__6615__6617 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6615__6616))?cljs.core.apply.call(null,cljs.core.hash_map,map__6615__6616):map__6615__6616);
var on_error__6618 = cljs.core.get.call(null,map__6615__6617,"﷐'on-error");
var on_success__6619 = cljs.core.get.call(null,map__6615__6617,"﷐'on-success");
var retries__6620 = cljs.core.get.call(null,map__6615__6617,"﷐'retries",0);
var priority__6621 = cljs.core.get.call(null,map__6615__6617,"﷐'priority");
var headers__6622 = cljs.core.get.call(null,map__6615__6617,"﷐'headers");
var content__6623 = cljs.core.get.call(null,map__6615__6617,"﷐'content");
var method__6624 = cljs.core.get.call(null,map__6615__6617,"﷐'method","GET");

try{one.browser.remote.add_responders.call(null,id,on_success__6619,on_error__6618);
return one.browser.remote._STAR_xhr_manager_STAR_.send(id,url,method__6624,content__6623,headers__6622,priority__6621,null,retries__6620);
}catch (e6625){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e6625)))
{var e__6626 = e6625;

return null;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e6625;
} else
{return null;
}
}
}};
var request = function (id,url,var_args){
var p__6614 = null;
if (goog.isDef(var_args)) {
  p__6614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, url, p__6614);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__6627){
var id = cljs.core.first(arglist__6627);
var url = cljs.core.first(cljs.core.next(arglist__6627));
var p__6614 = cljs.core.rest(cljs.core.next(arglist__6627));
return request__delegate.call(this, id, url, p__6614);
});
return request;
})()
;
one.browser.remote.response_success = (function response_success(e){
var temp__3698__auto____6628 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____6628))
{var map__6629__6630 = temp__3698__auto____6628;
var map__6629__6631 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6629__6630))?cljs.core.apply.call(null,cljs.core.hash_map,map__6629__6630):map__6629__6630);
var success__6632 = cljs.core.get.call(null,map__6629__6631,"﷐'success");

success__6632.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_error = (function response_error(e){
var temp__3698__auto____6633 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____6633))
{var map__6634__6635 = temp__3698__auto____6633;
var map__6634__6636 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6634__6635))?cljs.core.apply.call(null,cljs.core.hash_map,map__6634__6635):map__6634__6635);
var error__6637 = cljs.core.get.call(null,map__6634__6636,"﷐'error");

error__6637.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_received = (function response_received(f,e){
return f.call(null,cljs.core.ObjMap.fromObject(["﷐'id","﷐'body","﷐'status","﷐'event"],{"﷐'id":e.id,"﷐'body":e.xhrIo.getResponseText(),"﷐'status":e.xhrIo.getStatus(),"﷐'event":e}));
});
clojure.browser.event.listen.call(null,one.browser.remote._STAR_xhr_manager_STAR_,"success",cljs.core.partial.call(null,one.browser.remote.response_received,one.browser.remote.response_success));
clojure.browser.event.listen.call(null,one.browser.remote._STAR_xhr_manager_STAR_,"error",cljs.core.partial.call(null,one.browser.remote.response_received,one.browser.remote.response_error));
