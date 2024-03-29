goog.provide('one.browser.remote');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrManager');
one.browser.remote.responders = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
one.browser.remote.add_responders = (function add_responders(id,success,error){
if(cljs.core.truth_((function (){var or__3548__auto____15705 = success;

if(cljs.core.truth_(or__3548__auto____15705))
{return or__3548__auto____15705;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__15706){
var vec__15707__15708 = p__15706;
var k__15709 = cljs.core.nth.call(null,vec__15707__15708,0,null);
var v__15710 = cljs.core.nth.call(null,vec__15707__15708,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__15709.toLowerCase()),v__15710]);
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
var request__delegate = function (id,url,p__15711){
var map__15712__15713 = p__15711;
var map__15712__15714 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15712__15713))?cljs.core.apply.call(null,cljs.core.hash_map,map__15712__15713):map__15712__15713);
var on_error__15715 = cljs.core.get.call(null,map__15712__15714,"﷐'on-error");
var on_success__15716 = cljs.core.get.call(null,map__15712__15714,"﷐'on-success");
var retries__15717 = cljs.core.get.call(null,map__15712__15714,"﷐'retries",0);
var priority__15718 = cljs.core.get.call(null,map__15712__15714,"﷐'priority");
var headers__15719 = cljs.core.get.call(null,map__15712__15714,"﷐'headers");
var content__15720 = cljs.core.get.call(null,map__15712__15714,"﷐'content");
var method__15721 = cljs.core.get.call(null,map__15712__15714,"﷐'method","GET");

try{one.browser.remote.add_responders.call(null,id,on_success__15716,on_error__15715);
return one.browser.remote._STAR_xhr_manager_STAR_.send(id,url,method__15721,content__15720,headers__15719,priority__15718,null,retries__15717);
}catch (e15722){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e15722)))
{var e__15723 = e15722;

return null;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e15722;
} else
{return null;
}
}
}};
var request = function (id,url,var_args){
var p__15711 = null;
if (goog.isDef(var_args)) {
  p__15711 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, url, p__15711);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__15724){
var id = cljs.core.first(arglist__15724);
var url = cljs.core.first(cljs.core.next(arglist__15724));
var p__15711 = cljs.core.rest(cljs.core.next(arglist__15724));
return request__delegate.call(this, id, url, p__15711);
});
return request;
})()
;
one.browser.remote.response_success = (function response_success(e){
var temp__3698__auto____15725 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____15725))
{var map__15726__15727 = temp__3698__auto____15725;
var map__15726__15728 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15726__15727))?cljs.core.apply.call(null,cljs.core.hash_map,map__15726__15727):map__15726__15727);
var success__15729 = cljs.core.get.call(null,map__15726__15728,"﷐'success");

success__15729.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_error = (function response_error(e){
var temp__3698__auto____15730 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____15730))
{var map__15731__15732 = temp__3698__auto____15730;
var map__15731__15733 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15731__15732))?cljs.core.apply.call(null,cljs.core.hash_map,map__15731__15732):map__15731__15732);
var error__15734 = cljs.core.get.call(null,map__15731__15733,"﷐'error");

error__15734.call(null,e);
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
