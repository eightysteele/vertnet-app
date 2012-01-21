goog.provide('one.core');
goog.require('cljs.core');
goog.require('goog.style');
one.core.Startable = {};
one.core.start = (function start(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12803 = this$;

if(cljs.core.truth_(and__3546__auto____12803))
{return this$.one$core$Startable$start;
} else
{return and__3546__auto____12803;
}
})()))
{return this$.one$core$Startable$start(this$);
} else
{return (function (){var or__3548__auto____12804 = (one.core.start[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12804))
{return or__3548__auto____12804;
} else
{var or__3548__auto____12805 = (one.core.start["_"]);

if(cljs.core.truth_(or__3548__auto____12805))
{return or__3548__auto____12805;
} else
{throw cljs.core.missing_protocol.call(null,"Startable.start",this$);
}
}
})().call(null,this$);
}
});
one.core.Disposable = {};
one.core.dispose = (function dispose(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12807 = this$;

if(cljs.core.truth_(and__3546__auto____12807))
{return this$.one$core$Disposable$dispose;
} else
{return and__3546__auto____12807;
}
})()))
{return this$.one$core$Disposable$dispose(this$);
} else
{return (function (){var or__3548__auto____12808 = (one.core.dispose[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12808))
{return or__3548__auto____12808;
} else
{var or__3548__auto____12809 = (one.core.dispose["_"]);

if(cljs.core.truth_(or__3548__auto____12809))
{return or__3548__auto____12809;
} else
{throw cljs.core.missing_protocol.call(null,"Disposable.dispose",this$);
}
}
})().call(null,this$);
}
});
/**
* Use alternate strategies to get around the fact that
* `goog.style.getComputedStyle` returns an empty string for IE8 and
* below.
*/
one.core.get_style = (function get_style(element,style){
return cljs.core.some.call(null,(function (p1__12806_SHARP_){
var v__12810 = p1__12806_SHARP_.call(null);

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,"",v__12810)))
{return v__12810;
} else
{return null;
}
}),cljs.core.Vector.fromArray([(function (){
return goog.style.getComputedStyle.call(null,element,style);
}),(function (){
return goog.style.getStyle.call(null,element,style);
}),(function (){
return (element.currentStyle[style]);
}),(function (){
throw (new Error(cljs.core.str.call(null,"Could not retrieve value for style ",style)));
})]));
});
