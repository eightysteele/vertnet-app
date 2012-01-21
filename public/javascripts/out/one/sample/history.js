goog.provide('one.sample.history');
goog.require('cljs.core');
goog.require('one.dispatch');
goog.require('one.browser.history');
/**
* Handle navigation events by firing the appropriate view token.
*/
one.sample.history.nav_handler = (function nav_handler(p__4764){
var map__4765__4766 = p__4764;
var map__4765__4767 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4765__4766))?cljs.core.apply.call(null,cljs.core.hash_map,map__4765__4766):map__4765__4766);
var navigation_QMARK___4768 = cljs.core.get.call(null,map__4765__4767,"﷐'navigation?");
var token__4769 = cljs.core.get.call(null,map__4765__4767,"﷐'token");

if(cljs.core.truth_(navigation_QMARK___4768))
{return one.dispatch.fire.call(null,token__4769);
} else
{return null;
}
});
/**
* The global history object for this application.
*/
one.sample.history.history = one.browser.history.history.call(null,one.sample.history.nav_handler);
one.dispatch.react_to.call(null,cljs.core.set(["﷐'init","﷐'form","﷐'greeting"]),(function (t,_){
return one.browser.history.set_token.call(null,one.sample.history.history,(cljs.core.truth_(cljs.core.set(["﷐'init"]).call(null,t))?"﷐'form":t));
}));
