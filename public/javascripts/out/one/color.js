goog.provide('one.color');
goog.require('cljs.core');
goog.require('one.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.color');
goog.require('goog.color.alpha');
one.color.IColor = {};
one.color.rgb = (function rgb(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15648 = this$;

if(cljs.core.truth_(and__3546__auto____15648))
{return this$.one$color$IColor$rgb;
} else
{return and__3546__auto____15648;
}
})()))
{return this$.one$color$IColor$rgb(this$);
} else
{return (function (){var or__3548__auto____15649 = (one.color.rgb[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15649))
{return or__3548__auto____15649;
} else
{var or__3548__auto____15650 = (one.color.rgb["_"]);

if(cljs.core.truth_(or__3548__auto____15650))
{return or__3548__auto____15650;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgb",this$);
}
}
})().call(null,this$);
}
});
one.color.rgba = (function rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15651 = this$;

if(cljs.core.truth_(and__3546__auto____15651))
{return this$.one$color$IColor$rgba;
} else
{return and__3546__auto____15651;
}
})()))
{return this$.one$color$IColor$rgba(this$);
} else
{return (function (){var or__3548__auto____15652 = (one.color.rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15652))
{return or__3548__auto____15652;
} else
{var or__3548__auto____15653 = (one.color.rgba["_"]);

if(cljs.core.truth_(or__3548__auto____15653))
{return or__3548__auto____15653;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.hex = (function hex(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15654 = this$;

if(cljs.core.truth_(and__3546__auto____15654))
{return this$.one$color$IColor$hex;
} else
{return and__3546__auto____15654;
}
})()))
{return this$.one$color$IColor$hex(this$);
} else
{return (function (){var or__3548__auto____15655 = (one.color.hex[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15655))
{return or__3548__auto____15655;
} else
{var or__3548__auto____15656 = (one.color.hex["_"]);

if(cljs.core.truth_(or__3548__auto____15656))
{return or__3548__auto____15656;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex",this$);
}
}
})().call(null,this$);
}
});
one.color.hex_rgba = (function hex_rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15657 = this$;

if(cljs.core.truth_(and__3546__auto____15657))
{return this$.one$color$IColor$hex_rgba;
} else
{return and__3546__auto____15657;
}
})()))
{return this$.one$color$IColor$hex_rgba(this$);
} else
{return (function (){var or__3548__auto____15658 = (one.color.hex_rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15658))
{return or__3548__auto____15658;
} else
{var or__3548__auto____15659 = (one.color.hex_rgba["_"]);

if(cljs.core.truth_(or__3548__auto____15659))
{return or__3548__auto____15659;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex-rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.alpha = (function alpha(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15660 = this$;

if(cljs.core.truth_(and__3546__auto____15660))
{return this$.one$color$IColor$alpha;
} else
{return and__3546__auto____15660;
}
})()))
{return this$.one$color$IColor$alpha(this$);
} else
{return (function (){var or__3548__auto____15661 = (one.color.alpha[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15661))
{return or__3548__auto____15661;
} else
{var or__3548__auto____15662 = (one.color.alpha["_"]);

if(cljs.core.truth_(or__3548__auto____15662))
{return or__3548__auto____15662;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.alpha",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} r
* @param {*} g
* @param {*} b
* @param {*} a
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.color.Color = (function (r,g,b,a, __meta, __extmap){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.color.Color.prototype.cljs$core$IHash$ = true;
one.color.Color.prototype.cljs$core$IHash$_hash = (function (this__1337__auto__){
var this__15665 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.color.Color.prototype.cljs$core$ILookup$ = true;
one.color.Color.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15689 = null;
var G__15689__15690 = (function (this__1342__auto__,k__1343__auto__){
var this__15666 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__15689__15691 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__15667 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'r",this__15667.r,"﷐'g",this__15667.g,"﷐'b",this__15667.b,"﷐'a",this__15667.a),this__15667.__extmap),k__1345__auto__,else__1346__auto__);
});
G__15689 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__15689__15690.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__15689__15691.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15689;
})()
;
one.color.Color.prototype.cljs$core$IAssociative$ = true;
one.color.Color.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__15663){
var this__15668 = this;
var pred__15669__15672 = cljs.core.identical_QMARK_;
var expr__15670__15673 = k__1351__auto__;

if(cljs.core.truth_(pred__15669__15672.call(null,"﷐'r",expr__15670__15673)))
{return (new one.color.Color(G__15663,this__15668.g,this__15668.b,this__15668.a,this__15668.__meta,this__15668.__extmap));
} else
{if(cljs.core.truth_(pred__15669__15672.call(null,"﷐'g",expr__15670__15673)))
{return (new one.color.Color(this__15668.r,G__15663,this__15668.b,this__15668.a,this__15668.__meta,this__15668.__extmap));
} else
{if(cljs.core.truth_(pred__15669__15672.call(null,"﷐'b",expr__15670__15673)))
{return (new one.color.Color(this__15668.r,this__15668.g,G__15663,this__15668.a,this__15668.__meta,this__15668.__extmap));
} else
{if(cljs.core.truth_(pred__15669__15672.call(null,"﷐'a",expr__15670__15673)))
{return (new one.color.Color(this__15668.r,this__15668.g,this__15668.b,G__15663,this__15668.__meta,this__15668.__extmap));
} else
{return (new one.color.Color(this__15668.r,this__15668.g,this__15668.b,this__15668.a,this__15668.__meta,cljs.core.assoc.call(null,this__15668.__extmap,k__1351__auto__,G__15663)));
}
}
}
}
});
one.color.Color.prototype.one$color$IColor$ = true;
one.color.Color.prototype.one$color$IColor$rgb = (function (_){
var this__15674 = this;
return cljs.core.Vector.fromArray([this__15674.r,this__15674.g,this__15674.b]);
});
one.color.Color.prototype.one$color$IColor$rgba = (function (_){
var this__15675 = this;
return cljs.core.Vector.fromArray([this__15675.r,this__15675.g,this__15675.b,this__15675.a]);
});
one.color.Color.prototype.one$color$IColor$hex = (function (_){
var this__15676 = this;
return goog.color.rgbArrayToHex.call(null,cljs.core.array.call(null,this__15676.r,this__15676.g,this__15676.b));
});
one.color.Color.prototype.one$color$IColor$hex_rgba = (function (_){
var this__15677 = this;
return goog.color.alpha.rgbaArrayToHex.call(null,cljs.core.array.call(null,this__15677.r,this__15677.g,this__15677.b,this__15677.a));
});
one.color.Color.prototype.one$color$IColor$alpha = (function (_){
var this__15678 = this;
return this__15678.a;
});
one.color.Color.prototype.cljs$core$IRecord$ = true;
one.color.Color.prototype.cljs$core$ICollection$ = true;
one.color.Color.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__15679 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.color.Color.prototype.cljs$core$ISeqable$ = true;
one.color.Color.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__15680 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__15680.r),cljs.core.vector.call(null,"﷐'g",this__15680.g),cljs.core.vector.call(null,"﷐'b",this__15680.b),cljs.core.vector.call(null,"﷐'a",this__15680.a)]),this__15680.__extmap));
});
one.color.Color.prototype.cljs$core$IPrintable$ = true;
one.color.Color.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__15681 = this;
var pr_pair__1359__auto____15682 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____15682,cljs.core.str.call(null,"#","one.color.Color","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__15681.r),cljs.core.vector.call(null,"﷐'g",this__15681.g),cljs.core.vector.call(null,"﷐'b",this__15681.b),cljs.core.vector.call(null,"﷐'a",this__15681.a)]),this__15681.__extmap));
});
one.color.Color.prototype.cljs$core$ICounted$ = true;
one.color.Color.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__15683 = this;
return (4 + cljs.core.count.call(null,this__15683.__extmap));
});
one.color.Color.prototype.cljs$core$IEquiv$ = true;
one.color.Color.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__15684 = this;
var and__3546__auto____15685 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____15685))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____15685;
}
});
one.color.Color.prototype.cljs$core$IWithMeta$ = true;
one.color.Color.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__15663){
var this__15686 = this;
return (new one.color.Color(this__15686.r,this__15686.g,this__15686.b,this__15686.a,G__15663,this__15686.__extmap));
});
one.color.Color.prototype.cljs$core$IMeta$ = true;
one.color.Color.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__15687 = this;
return this__15687.__meta;
});
one.color.Color.prototype.cljs$core$IMap$ = true;
one.color.Color.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__15688 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'r","﷐'a","﷐'b","﷐'g"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__15688.__meta),k__1353__auto__);
} else
{return (new one.color.Color(this__15688.r,this__15688.g,this__15688.b,this__15688.a,this__15688.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__15688.__extmap,k__1353__auto__))));
}
});
one.color.__GT_Color = (function __GT_Color(r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
one.color.map__GT_Color = (function map__GT_Color(G__15664){
return (new one.color.Color("﷐'r".call(null,G__15664),"﷐'g".call(null,G__15664),"﷐'b".call(null,G__15664),"﷐'a".call(null,G__15664),null,cljs.core.dissoc.call(null,G__15664,"﷐'r","﷐'g","﷐'b","﷐'a")));
});
one.color.make_color = (function() {
var make_color = null;
var make_color__15693 = (function (r,g,b){
return make_color.call(null,r,g,b,1);
});
var make_color__15694 = (function (r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
make_color = function(r,g,b,a){
switch(arguments.length){
case  3 :
return make_color__15693.call(this,r,g,b);
case  4 :
return make_color__15694.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return make_color;
})()
;
one.color.IColorSource = {};
one.color.color = (function color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15696 = this$;

if(cljs.core.truth_(and__3546__auto____15696))
{return this$.one$color$IColorSource$color;
} else
{return and__3546__auto____15696;
}
})()))
{return this$.one$color$IColorSource$color(this$);
} else
{return (function (){var or__3548__auto____15697 = (one.color.color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15697))
{return or__3548__auto____15697;
} else
{var or__3548__auto____15698 = (one.color.color["_"]);

if(cljs.core.truth_(or__3548__auto____15698))
{return or__3548__auto____15698;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.color",this$);
}
}
})().call(null,this$);
}
});
one.color.bg_color = (function bg_color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15699 = this$;

if(cljs.core.truth_(and__3546__auto____15699))
{return this$.one$color$IColorSource$bg_color;
} else
{return and__3546__auto____15699;
}
})()))
{return this$.one$color$IColorSource$bg_color(this$);
} else
{return (function (){var or__3548__auto____15700 = (one.color.bg_color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15700))
{return or__3548__auto____15700;
} else
{var or__3548__auto____15701 = (one.color.bg_color["_"]);

if(cljs.core.truth_(or__3548__auto____15701))
{return or__3548__auto____15701;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.bg-color",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$color$IColorSource$ = true;
Element.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,goog.color.parse.call(null,one.core.get_style.call(null,this$,"color")),"﷐'keywordize-keys",true));
});
Element.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(function (){var c__15702 = goog.style.getBackgroundColor.call(null,this$);

try{return goog.color.parse.call(null,c__15702);
}catch (e15703){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e15703)))
{var e__15704 = e15703;

return goog.color.alpha.parse.call(null,c__15702);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e15703;
} else
{return null;
}
}
}})(),"﷐'keywordize-keys",true));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$ = true;
cljs.core.ObjMap.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,"﷐'hex".call(null,this$));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
String.prototype.one$color$IColorSource$ = true;
String.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(cljs.core.truth_(goog.string.startsWith.call(null,this$,"#"))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),7))?goog.color.hexToRgb.call(null,this$):(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),9))?goog.color.alpha.hexToRgba.call(null,this$):null)):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgba("))?goog.color.alpha.parse.call(null,this$):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgb("))?goog.color.parseRgb.call(null,this$):null))),"﷐'keywordize-keys",true));
});
String.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
Array.prototype.one$color$IColorSource$ = true;
Array.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
Array.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
cljs.core.Vector.prototype.one$color$IColorSource$ = true;
cljs.core.Vector.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
cljs.core.Vector.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
one.color.Color.prototype.one$color$IColorSource$ = true;
one.color.Color.prototype.one$color$IColorSource$color = (function (this$){
return this$;
});
one.color.Color.prototype.one$color$IColorSource$bg_color = (function (this$){
return this$;
});
(one.color.IColorSource["null"] = true);
(one.color.color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
(one.color.bg_color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
