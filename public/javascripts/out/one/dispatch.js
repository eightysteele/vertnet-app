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
var react_to__12754 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__12755 = (function (max_count,event_pred,reactor){
var reaction__12753 = cljs.core.ObjMap.fromObject(["﷐'max-count","﷐'event-pred","﷐'reactor"],{"﷐'max-count":max_count,"﷐'event-pred":event_pred,"﷐'reactor":reactor});

cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__12753,0);
return reaction__12753;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__12754.call(this,max_count,event_pred);
case  3 :
return react_to__12755.call(this,max_count,event_pred,reactor);
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
var fire__12798 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__12799 = (function (event_id,event_data){
var matching_reactions__12771 = cljs.core.filter.call(null,(function (p__12763){
var vec__12764__12766 = p__12763;
var map__12765__12767 = cljs.core.nth.call(null,vec__12764__12766,0,null);
var map__12765__12768 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12765__12767))?cljs.core.apply.call(null,cljs.core.hash_map,map__12765__12767):map__12765__12767);
var event_pred__12769 = cljs.core.get.call(null,map__12765__12768,"﷐'event-pred");
var run_count__12770 = cljs.core.nth.call(null,vec__12764__12766,1,null);

return event_pred__12769.call(null,event_id);
}),cljs.core.deref.call(null,one.dispatch.reactions));

var G__12772__12773 = cljs.core.seq.call(null,matching_reactions__12771);

if(cljs.core.truth_(G__12772__12773))
{var G__12775__12777 = cljs.core.first.call(null,G__12772__12773);
var vec__12776__12778 = G__12775__12777;
var reaction__12779 = cljs.core.nth.call(null,vec__12776__12778,0,null);
var run_count__12780 = cljs.core.nth.call(null,vec__12776__12778,1,null);
var G__12772__12781 = G__12772__12773;

var G__12775__12782 = G__12775__12777;
var G__12772__12783 = G__12772__12781;

while(true){
var vec__12784__12785 = G__12775__12782;
var reaction__12786 = cljs.core.nth.call(null,vec__12784__12785,0,null);
var run_count__12787 = cljs.core.nth.call(null,vec__12784__12785,1,null);
var G__12772__12788 = G__12772__12783;

var map__12789__12790 = reaction__12786;
var map__12789__12791 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12789__12790))?cljs.core.apply.call(null,cljs.core.hash_map,map__12789__12790):map__12789__12790);
var reactor__12792 = cljs.core.get.call(null,map__12789__12791,"﷐'reactor");
var max_count__12793 = cljs.core.get.call(null,map__12789__12791,"﷐'max-count");
var run_count__12794 = (run_count__12787 + 1);

reactor__12792.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____12795 = max_count__12793;

if(cljs.core.truth_(and__3546__auto____12795))
{return (max_count__12793 <= run_count__12794);
} else
{return and__3546__auto____12795;
}
})()))
{one.dispatch.delete_reaction.call(null,reaction__12786);
} else
{cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__12786,run_count__12794);
}
var temp__3698__auto____12796 = cljs.core.next.call(null,G__12772__12788);

if(cljs.core.truth_(temp__3698__auto____12796))
{var G__12772__12797 = temp__3698__auto____12796;

{
var G__12801 = cljs.core.first.call(null,G__12772__12797);
var G__12802 = G__12772__12797;
G__12775__12782 = G__12801;
G__12772__12783 = G__12802;
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
return fire__12798.call(this,event_id);
case  2 :
return fire__12799.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
