goog.provide('one.sample.history');
goog.require('cljs.core');
goog.require('one.dispatch');
goog.require('one.browser.history');
/**
* Handle navigation events by firing the appropriate view token.
*/
one.sample.history.nav_handler = (function nav_handler(p__5564){
var map__5565__5566 = p__5564;
var map__5565__5567 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5565__5566))?cljs.core.apply.call(null,cljs.core.hash_map,map__5565__5566):map__5565__5566);
var navigation_QMARK___5568 = cljs.core.get.call(null,map__5565__5567,"﷐'navigation?");
var token__5569 = cljs.core.get.call(null,map__5565__5567,"﷐'token");

if(cljs.core.truth_(navigation_QMARK___5568))
{return one.dispatch.fire.call(null,token__5569);
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
