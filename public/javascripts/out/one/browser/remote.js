goog.provide('one.browser.remote');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrManager');
one.browser.remote.responders = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
one.browser.remote.add_responders = (function add_responders(id,success,error){
if(cljs.core.truth_((function (){var or__3548__auto____13200 = success;

if(cljs.core.truth_(or__3548__auto____13200))
{return or__3548__auto____13200;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13201){
var vec__13202__13203 = p__13201;
var k__13204 = cljs.core.nth.call(null,vec__13202__13203,0,null);
var v__13205 = cljs.core.nth.call(null,vec__13202__13203,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__13204.toLowerCase()),v__13205]);
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
var request__delegate = function (id,url,p__13206){
var map__13207__13208 = p__13206;
var map__13207__13209 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13207__13208))?cljs.core.apply.call(null,cljs.core.hash_map,map__13207__13208):map__13207__13208);
var on_error__13210 = cljs.core.get.call(null,map__13207__13209,"﷐'on-error");
var on_success__13211 = cljs.core.get.call(null,map__13207__13209,"﷐'on-success");
var retries__13212 = cljs.core.get.call(null,map__13207__13209,"﷐'retries",0);
var priority__13213 = cljs.core.get.call(null,map__13207__13209,"﷐'priority");
var headers__13214 = cljs.core.get.call(null,map__13207__13209,"﷐'headers");
var content__13215 = cljs.core.get.call(null,map__13207__13209,"﷐'content");
var method__13216 = cljs.core.get.call(null,map__13207__13209,"﷐'method","GET");

try{one.browser.remote.add_responders.call(null,id,on_success__13211,on_error__13210);
return one.browser.remote._STAR_xhr_manager_STAR_.send(id,url,method__13216,content__13215,headers__13214,priority__13213,null,retries__13212);
}catch (e13217){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e13217)))
{var e__13218 = e13217;

return null;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e13217;
} else
{return null;
}
}
}};
var request = function (id,url,var_args){
var p__13206 = null;
if (goog.isDef(var_args)) {
  p__13206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, url, p__13206);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__13219){
var id = cljs.core.first(arglist__13219);
var url = cljs.core.first(cljs.core.next(arglist__13219));
var p__13206 = cljs.core.rest(cljs.core.next(arglist__13219));
return request__delegate.call(this, id, url, p__13206);
});
return request;
})()
;
one.browser.remote.response_success = (function response_success(e){
var temp__3698__auto____13220 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____13220))
{var map__13221__13222 = temp__3698__auto____13220;
var map__13221__13223 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13221__13222))?cljs.core.apply.call(null,cljs.core.hash_map,map__13221__13222):map__13221__13222);
var success__13224 = cljs.core.get.call(null,map__13221__13223,"﷐'success");

success__13224.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_error = (function response_error(e){
var temp__3698__auto____13225 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____13225))
{var map__13226__13227 = temp__3698__auto____13225;
var map__13226__13228 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13226__13227))?cljs.core.apply.call(null,cljs.core.hash_map,map__13226__13227):map__13226__13227);
var error__13229 = cljs.core.get.call(null,map__13226__13228,"﷐'error");

error__13229.call(null,e);
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
