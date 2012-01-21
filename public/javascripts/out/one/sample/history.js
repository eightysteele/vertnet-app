goog.provide('one.sample.history');
goog.require('cljs.core');
goog.require('one.dispatch');
goog.require('one.browser.history');
/**
* Handle navigation events by firing the appropriate view token.
*/
one.sample.history.nav_handler = (function nav_handler(p__15129){
var map__15130__15131 = p__15129;
var map__15130__15132 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15130__15131))?cljs.core.apply.call(null,cljs.core.hash_map,map__15130__15131):map__15130__15131);
var navigation_QMARK___15133 = cljs.core.get.call(null,map__15130__15132,"﷐'navigation?");
var token__15134 = cljs.core.get.call(null,map__15130__15132,"﷐'token");

if(cljs.core.truth_(navigation_QMARK___15133))
{return one.dispatch.fire.call(null,token__15134);
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
