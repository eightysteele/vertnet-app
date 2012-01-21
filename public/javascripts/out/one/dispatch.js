goog.provide('one.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
one.dispatch.reactions = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
one.dispatch.react_to = (function() {
var react_to = null;
var react_to__15282 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__15283 = (function (max_count,event_pred,reactor){
var reaction__15281 = cljs.core.ObjMap.fromObject(["﷐'max-count","﷐'event-pred","﷐'reactor"],{"﷐'max-count":max_count,"﷐'event-pred":event_pred,"﷐'reactor":reactor});

cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__15281,0);
return reaction__15281;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__15282.call(this,max_count,event_pred);
case  3 :
return react_to__15283.call(this,max_count,event_pred,reactor);
}
throw('Invalid arity: ' + arguments.length);
};
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
one.dispatch.delete_reaction = (function delete_reaction(reaction){
return cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
one.dispatch.fire = (function() {
var fire = null;
var fire__15326 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__15327 = (function (event_id,event_data){
var matching_reactions__15299 = cljs.core.filter.call(null,(function (p__15291){
var vec__15292__15294 = p__15291;
var map__15293__15295 = cljs.core.nth.call(null,vec__15292__15294,0,null);
var map__15293__15296 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15293__15295))?cljs.core.apply.call(null,cljs.core.hash_map,map__15293__15295):map__15293__15295);
var event_pred__15297 = cljs.core.get.call(null,map__15293__15296,"﷐'event-pred");
var run_count__15298 = cljs.core.nth.call(null,vec__15292__15294,1,null);

return event_pred__15297.call(null,event_id);
}),cljs.core.deref.call(null,one.dispatch.reactions));

var G__15300__15301 = cljs.core.seq.call(null,matching_reactions__15299);

if(cljs.core.truth_(G__15300__15301))
{var G__15303__15305 = cljs.core.first.call(null,G__15300__15301);
var vec__15304__15306 = G__15303__15305;
var reaction__15307 = cljs.core.nth.call(null,vec__15304__15306,0,null);
var run_count__15308 = cljs.core.nth.call(null,vec__15304__15306,1,null);
var G__15300__15309 = G__15300__15301;

var G__15303__15310 = G__15303__15305;
var G__15300__15311 = G__15300__15309;

while(true){
var vec__15312__15313 = G__15303__15310;
var reaction__15314 = cljs.core.nth.call(null,vec__15312__15313,0,null);
var run_count__15315 = cljs.core.nth.call(null,vec__15312__15313,1,null);
var G__15300__15316 = G__15300__15311;

var map__15317__15318 = reaction__15314;
var map__15317__15319 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15317__15318))?cljs.core.apply.call(null,cljs.core.hash_map,map__15317__15318):map__15317__15318);
var reactor__15320 = cljs.core.get.call(null,map__15317__15319,"﷐'reactor");
var max_count__15321 = cljs.core.get.call(null,map__15317__15319,"﷐'max-count");
var run_count__15322 = (run_count__15315 + 1);

reactor__15320.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____15323 = max_count__15321;

if(cljs.core.truth_(and__3546__auto____15323))
{return (max_count__15321 <= run_count__15322);
} else
{return and__3546__auto____15323;
}
})()))
{one.dispatch.delete_reaction.call(null,reaction__15314);
} else
{cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__15314,run_count__15322);
}
var temp__3698__auto____15324 = cljs.core.next.call(null,G__15300__15316);

if(cljs.core.truth_(temp__3698__auto____15324))
{var G__15300__15325 = temp__3698__auto____15324;

{
var G__15329 = cljs.core.first.call(null,G__15300__15325);
var G__15330 = G__15300__15325;
G__15303__15310 = G__15329;
G__15300__15311 = G__15330;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
fire = function(event_id,event_data){
switch(arguments.length){
case  1 :
return fire__15326.call(this,event_id);
case  2 :
return fire__15327.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
