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
var react_to__5729 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__5730 = (function (max_count,event_pred,reactor){
var reaction__5728 = cljs.core.ObjMap.fromObject(["﷐'max-count","﷐'event-pred","﷐'reactor"],{"﷐'max-count":max_count,"﷐'event-pred":event_pred,"﷐'reactor":reactor});

cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__5728,0);
return reaction__5728;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__5729.call(this,max_count,event_pred);
case  3 :
return react_to__5730.call(this,max_count,event_pred,reactor);
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
var fire__5773 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__5774 = (function (event_id,event_data){
var matching_reactions__5746 = cljs.core.filter.call(null,(function (p__5738){
var vec__5739__5741 = p__5738;
var map__5740__5742 = cljs.core.nth.call(null,vec__5739__5741,0,null);
var map__5740__5743 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5740__5742))?cljs.core.apply.call(null,cljs.core.hash_map,map__5740__5742):map__5740__5742);
var event_pred__5744 = cljs.core.get.call(null,map__5740__5743,"﷐'event-pred");
var run_count__5745 = cljs.core.nth.call(null,vec__5739__5741,1,null);

return event_pred__5744.call(null,event_id);
}),cljs.core.deref.call(null,one.dispatch.reactions));

var G__5747__5748 = cljs.core.seq.call(null,matching_reactions__5746);

if(cljs.core.truth_(G__5747__5748))
{var G__5750__5752 = cljs.core.first.call(null,G__5747__5748);
var vec__5751__5753 = G__5750__5752;
var reaction__5754 = cljs.core.nth.call(null,vec__5751__5753,0,null);
var run_count__5755 = cljs.core.nth.call(null,vec__5751__5753,1,null);
var G__5747__5756 = G__5747__5748;

var G__5750__5757 = G__5750__5752;
var G__5747__5758 = G__5747__5756;

while(true){
var vec__5759__5760 = G__5750__5757;
var reaction__5761 = cljs.core.nth.call(null,vec__5759__5760,0,null);
var run_count__5762 = cljs.core.nth.call(null,vec__5759__5760,1,null);
var G__5747__5763 = G__5747__5758;

var map__5764__5765 = reaction__5761;
var map__5764__5766 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5764__5765))?cljs.core.apply.call(null,cljs.core.hash_map,map__5764__5765):map__5764__5765);
var reactor__5767 = cljs.core.get.call(null,map__5764__5766,"﷐'reactor");
var max_count__5768 = cljs.core.get.call(null,map__5764__5766,"﷐'max-count");
var run_count__5769 = (run_count__5762 + 1);

reactor__5767.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____5770 = max_count__5768;

if(cljs.core.truth_(and__3546__auto____5770))
{return (max_count__5768 <= run_count__5769);
} else
{return and__3546__auto____5770;
}
})()))
{one.dispatch.delete_reaction.call(null,reaction__5761);
} else
{cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__5761,run_count__5769);
}
var temp__3698__auto____5771 = cljs.core.next.call(null,G__5747__5763);

if(cljs.core.truth_(temp__3698__auto____5771))
{var G__5747__5772 = temp__3698__auto____5771;

{
var G__5776 = cljs.core.first.call(null,G__5747__5772);
var G__5777 = G__5747__5772;
G__5750__5757 = G__5776;
G__5747__5758 = G__5777;
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
return fire__5773.call(this,event_id);
case  2 :
return fire__5774.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
