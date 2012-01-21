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
var react_to__4929 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__4930 = (function (max_count,event_pred,reactor){
var reaction__4928 = cljs.core.ObjMap.fromObject(["﷐'max-count","﷐'event-pred","﷐'reactor"],{"﷐'max-count":max_count,"﷐'event-pred":event_pred,"﷐'reactor":reactor});

cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__4928,0);
return reaction__4928;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__4929.call(this,max_count,event_pred);
case  3 :
return react_to__4930.call(this,max_count,event_pred,reactor);
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
var fire__4973 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__4974 = (function (event_id,event_data){
var matching_reactions__4946 = cljs.core.filter.call(null,(function (p__4938){
var vec__4939__4941 = p__4938;
var map__4940__4942 = cljs.core.nth.call(null,vec__4939__4941,0,null);
var map__4940__4943 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4940__4942))?cljs.core.apply.call(null,cljs.core.hash_map,map__4940__4942):map__4940__4942);
var event_pred__4944 = cljs.core.get.call(null,map__4940__4943,"﷐'event-pred");
var run_count__4945 = cljs.core.nth.call(null,vec__4939__4941,1,null);

return event_pred__4944.call(null,event_id);
}),cljs.core.deref.call(null,one.dispatch.reactions));

var G__4947__4948 = cljs.core.seq.call(null,matching_reactions__4946);

if(cljs.core.truth_(G__4947__4948))
{var G__4950__4952 = cljs.core.first.call(null,G__4947__4948);
var vec__4951__4953 = G__4950__4952;
var reaction__4954 = cljs.core.nth.call(null,vec__4951__4953,0,null);
var run_count__4955 = cljs.core.nth.call(null,vec__4951__4953,1,null);
var G__4947__4956 = G__4947__4948;

var G__4950__4957 = G__4950__4952;
var G__4947__4958 = G__4947__4956;

while(true){
var vec__4959__4960 = G__4950__4957;
var reaction__4961 = cljs.core.nth.call(null,vec__4959__4960,0,null);
var run_count__4962 = cljs.core.nth.call(null,vec__4959__4960,1,null);
var G__4947__4963 = G__4947__4958;

var map__4964__4965 = reaction__4961;
var map__4964__4966 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4964__4965))?cljs.core.apply.call(null,cljs.core.hash_map,map__4964__4965):map__4964__4965);
var reactor__4967 = cljs.core.get.call(null,map__4964__4966,"﷐'reactor");
var max_count__4968 = cljs.core.get.call(null,map__4964__4966,"﷐'max-count");
var run_count__4969 = (run_count__4962 + 1);

reactor__4967.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____4970 = max_count__4968;

if(cljs.core.truth_(and__3546__auto____4970))
{return (max_count__4968 <= run_count__4969);
} else
{return and__3546__auto____4970;
}
})()))
{one.dispatch.delete_reaction.call(null,reaction__4961);
} else
{cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__4961,run_count__4969);
}
var temp__3698__auto____4971 = cljs.core.next.call(null,G__4947__4963);

if(cljs.core.truth_(temp__3698__auto____4971))
{var G__4947__4972 = temp__3698__auto____4971;

{
var G__4976 = cljs.core.first.call(null,G__4947__4972);
var G__4977 = G__4947__4972;
G__4950__4957 = G__4976;
G__4947__4958 = G__4977;
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
return fire__4973.call(this,event_id);
case  2 :
return fire__4974.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
