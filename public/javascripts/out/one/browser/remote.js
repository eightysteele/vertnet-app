goog.provide('one.browser.remote');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrManager');
one.browser.remote.responders = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
one.browser.remote.add_responders = (function add_responders(id,success,error){
if(cljs.core.truth_((function (){var or__3548__auto____5352 = success;

if(cljs.core.truth_(or__3548__auto____5352))
{return or__3548__auto____5352;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5353){
var vec__5354__5355 = p__5353;
var k__5356 = cljs.core.nth.call(null,vec__5354__5355,0,null);
var v__5357 = cljs.core.nth.call(null,vec__5354__5355,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5356.toLowerCase()),v__5357]);
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
var request__delegate = function (id,url,p__5358){
var map__5359__5360 = p__5358;
var map__5359__5361 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5359__5360))?cljs.core.apply.call(null,cljs.core.hash_map,map__5359__5360):map__5359__5360);
var on_error__5362 = cljs.core.get.call(null,map__5359__5361,"﷐'on-error");
var on_success__5363 = cljs.core.get.call(null,map__5359__5361,"﷐'on-success");
var retries__5364 = cljs.core.get.call(null,map__5359__5361,"﷐'retries",0);
var priority__5365 = cljs.core.get.call(null,map__5359__5361,"﷐'priority");
var headers__5366 = cljs.core.get.call(null,map__5359__5361,"﷐'headers");
var content__5367 = cljs.core.get.call(null,map__5359__5361,"﷐'content");
var method__5368 = cljs.core.get.call(null,map__5359__5361,"﷐'method","GET");

try{one.browser.remote.add_responders.call(null,id,on_success__5363,on_error__5362);
return one.browser.remote._STAR_xhr_manager_STAR_.send(id,url,method__5368,content__5367,headers__5366,priority__5365,null,retries__5364);
}catch (e5369){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e5369)))
{var e__5370 = e5369;

return null;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e5369;
} else
{return null;
}
}
}};
var request = function (id,url,var_args){
var p__5358 = null;
if (goog.isDef(var_args)) {
  p__5358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, url, p__5358);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__5371){
var id = cljs.core.first(arglist__5371);
var url = cljs.core.first(cljs.core.next(arglist__5371));
var p__5358 = cljs.core.rest(cljs.core.next(arglist__5371));
return request__delegate.call(this, id, url, p__5358);
});
return request;
})()
;
one.browser.remote.response_success = (function response_success(e){
var temp__3698__auto____5372 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____5372))
{var map__5373__5374 = temp__3698__auto____5372;
var map__5373__5375 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5373__5374))?cljs.core.apply.call(null,cljs.core.hash_map,map__5373__5374):map__5373__5374);
var success__5376 = cljs.core.get.call(null,map__5373__5375,"﷐'success");

success__5376.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_error = (function response_error(e){
var temp__3698__auto____5377 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____5377))
{var map__5378__5379 = temp__3698__auto____5377;
var map__5378__5380 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5378__5379))?cljs.core.apply.call(null,cljs.core.hash_map,map__5378__5379):map__5378__5379);
var error__5381 = cljs.core.get.call(null,map__5378__5380,"﷐'error");

error__5381.call(null,e);
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
