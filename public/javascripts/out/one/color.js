goog.provide('one.color');
goog.require('cljs.core');
goog.require('one.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.color');
goog.require('goog.color.alpha');
one.color.IColor = {};
one.color.rgb = (function rgb(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13120 = this$;

if(cljs.core.truth_(and__3546__auto____13120))
{return this$.one$color$IColor$rgb;
} else
{return and__3546__auto____13120;
}
})()))
{return this$.one$color$IColor$rgb(this$);
} else
{return (function (){var or__3548__auto____13121 = (one.color.rgb[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13121))
{return or__3548__auto____13121;
} else
{var or__3548__auto____13122 = (one.color.rgb["_"]);

if(cljs.core.truth_(or__3548__auto____13122))
{return or__3548__auto____13122;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgb",this$);
}
}
})().call(null,this$);
}
});
one.color.rgba = (function rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13123 = this$;

if(cljs.core.truth_(and__3546__auto____13123))
{return this$.one$color$IColor$rgba;
} else
{return and__3546__auto____13123;
}
})()))
{return this$.one$color$IColor$rgba(this$);
} else
{return (function (){var or__3548__auto____13124 = (one.color.rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13124))
{return or__3548__auto____13124;
} else
{var or__3548__auto____13125 = (one.color.rgba["_"]);

if(cljs.core.truth_(or__3548__auto____13125))
{return or__3548__auto____13125;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.hex = (function hex(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13126 = this$;

if(cljs.core.truth_(and__3546__auto____13126))
{return this$.one$color$IColor$hex;
} else
{return and__3546__auto____13126;
}
})()))
{return this$.one$color$IColor$hex(this$);
} else
{return (function (){var or__3548__auto____13127 = (one.color.hex[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13127))
{return or__3548__auto____13127;
} else
{var or__3548__auto____13128 = (one.color.hex["_"]);

if(cljs.core.truth_(or__3548__auto____13128))
{return or__3548__auto____13128;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex",this$);
}
}
})().call(null,this$);
}
});
one.color.hex_rgba = (function hex_rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13129 = this$;

if(cljs.core.truth_(and__3546__auto____13129))
{return this$.one$color$IColor$hex_rgba;
} else
{return and__3546__auto____13129;
}
})()))
{return this$.one$color$IColor$hex_rgba(this$);
} else
{return (function (){var or__3548__auto____13130 = (one.color.hex_rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13130))
{return or__3548__auto____13130;
} else
{var or__3548__auto____13131 = (one.color.hex_rgba["_"]);

if(cljs.core.truth_(or__3548__auto____13131))
{return or__3548__auto____13131;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex-rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.alpha = (function alpha(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13132 = this$;

if(cljs.core.truth_(and__3546__auto____13132))
{return this$.one$color$IColor$alpha;
} else
{return and__3546__auto____13132;
}
})()))
{return this$.one$color$IColor$alpha(this$);
} else
{return (function (){var or__3548__auto____13133 = (one.color.alpha[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13133))
{return or__3548__auto____13133;
} else
{var or__3548__auto____13134 = (one.color.alpha["_"]);

if(cljs.core.truth_(or__3548__auto____13134))
{return or__3548__auto____13134;
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
var this__13137 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.color.Color.prototype.cljs$core$ILookup$ = true;
one.color.Color.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13161 = null;
var G__13161__13162 = (function (this__1342__auto__,k__1343__auto__){
var this__13138 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__13161__13163 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__13139 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'r",this__13139.r,"﷐'g",this__13139.g,"﷐'b",this__13139.b,"﷐'a",this__13139.a),this__13139.__extmap),k__1345__auto__,else__1346__auto__);
});
G__13161 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__13161__13162.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__13161__13163.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13161;
})()
;
one.color.Color.prototype.cljs$core$IAssociative$ = true;
one.color.Color.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__13135){
var this__13140 = this;
var pred__13141__13144 = cljs.core.identical_QMARK_;
var expr__13142__13145 = k__1351__auto__;

if(cljs.core.truth_(pred__13141__13144.call(null,"﷐'r",expr__13142__13145)))
{return (new one.color.Color(G__13135,this__13140.g,this__13140.b,this__13140.a,this__13140.__meta,this__13140.__extmap));
} else
{if(cljs.core.truth_(pred__13141__13144.call(null,"﷐'g",expr__13142__13145)))
{return (new one.color.Color(this__13140.r,G__13135,this__13140.b,this__13140.a,this__13140.__meta,this__13140.__extmap));
} else
{if(cljs.core.truth_(pred__13141__13144.call(null,"﷐'b",expr__13142__13145)))
{return (new one.color.Color(this__13140.r,this__13140.g,G__13135,this__13140.a,this__13140.__meta,this__13140.__extmap));
} else
{if(cljs.core.truth_(pred__13141__13144.call(null,"﷐'a",expr__13142__13145)))
{return (new one.color.Color(this__13140.r,this__13140.g,this__13140.b,G__13135,this__13140.__meta,this__13140.__extmap));
} else
{return (new one.color.Color(this__13140.r,this__13140.g,this__13140.b,this__13140.a,this__13140.__meta,cljs.core.assoc.call(null,this__13140.__extmap,k__1351__auto__,G__13135)));
}
}
}
}
});
one.color.Color.prototype.one$color$IColor$ = true;
one.color.Color.prototype.one$color$IColor$rgb = (function (_){
var this__13146 = this;
return cljs.core.Vector.fromArray([this__13146.r,this__13146.g,this__13146.b]);
});
one.color.Color.prototype.one$color$IColor$rgba = (function (_){
var this__13147 = this;
return cljs.core.Vector.fromArray([this__13147.r,this__13147.g,this__13147.b,this__13147.a]);
});
one.color.Color.prototype.one$color$IColor$hex = (function (_){
var this__13148 = this;
return goog.color.rgbArrayToHex.call(null,cljs.core.array.call(null,this__13148.r,this__13148.g,this__13148.b));
});
one.color.Color.prototype.one$color$IColor$hex_rgba = (function (_){
var this__13149 = this;
return goog.color.alpha.rgbaArrayToHex.call(null,cljs.core.array.call(null,this__13149.r,this__13149.g,this__13149.b,this__13149.a));
});
one.color.Color.prototype.one$color$IColor$alpha = (function (_){
var this__13150 = this;
return this__13150.a;
});
one.color.Color.prototype.cljs$core$IRecord$ = true;
one.color.Color.prototype.cljs$core$ICollection$ = true;
one.color.Color.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__13151 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.color.Color.prototype.cljs$core$ISeqable$ = true;
one.color.Color.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__13152 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__13152.r),cljs.core.vector.call(null,"﷐'g",this__13152.g),cljs.core.vector.call(null,"﷐'b",this__13152.b),cljs.core.vector.call(null,"﷐'a",this__13152.a)]),this__13152.__extmap));
});
one.color.Color.prototype.cljs$core$IPrintable$ = true;
one.color.Color.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__13153 = this;
var pr_pair__1359__auto____13154 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____13154,cljs.core.str.call(null,"#","one.color.Color","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__13153.r),cljs.core.vector.call(null,"﷐'g",this__13153.g),cljs.core.vector.call(null,"﷐'b",this__13153.b),cljs.core.vector.call(null,"﷐'a",this__13153.a)]),this__13153.__extmap));
});
one.color.Color.prototype.cljs$core$ICounted$ = true;
one.color.Color.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__13155 = this;
return (4 + cljs.core.count.call(null,this__13155.__extmap));
});
one.color.Color.prototype.cljs$core$IEquiv$ = true;
one.color.Color.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__13156 = this;
var and__3546__auto____13157 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____13157))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____13157;
}
});
one.color.Color.prototype.cljs$core$IWithMeta$ = true;
one.color.Color.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__13135){
var this__13158 = this;
return (new one.color.Color(this__13158.r,this__13158.g,this__13158.b,this__13158.a,G__13135,this__13158.__extmap));
});
one.color.Color.prototype.cljs$core$IMeta$ = true;
one.color.Color.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__13159 = this;
return this__13159.__meta;
});
one.color.Color.prototype.cljs$core$IMap$ = true;
one.color.Color.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__13160 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'r","﷐'a","﷐'b","﷐'g"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__13160.__meta),k__1353__auto__);
} else
{return (new one.color.Color(this__13160.r,this__13160.g,this__13160.b,this__13160.a,this__13160.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__13160.__extmap,k__1353__auto__))));
}
});
one.color.__GT_Color = (function __GT_Color(r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
one.color.map__GT_Color = (function map__GT_Color(G__13136){
return (new one.color.Color("﷐'r".call(null,G__13136),"﷐'g".call(null,G__13136),"﷐'b".call(null,G__13136),"﷐'a".call(null,G__13136),null,cljs.core.dissoc.call(null,G__13136,"﷐'r","﷐'g","﷐'b","﷐'a")));
});
one.color.make_color = (function() {
var make_color = null;
var make_color__13165 = (function (r,g,b){
return make_color.call(null,r,g,b,1);
});
var make_color__13166 = (function (r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
make_color = function(r,g,b,a){
switch(arguments.length){
case  3 :
return make_color__13165.call(this,r,g,b);
case  4 :
return make_color__13166.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return make_color;
})()
;
one.color.IColorSource = {};
one.color.color = (function color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13168 = this$;

if(cljs.core.truth_(and__3546__auto____13168))
{return this$.one$color$IColorSource$color;
} else
{return and__3546__auto____13168;
}
})()))
{return this$.one$color$IColorSource$color(this$);
} else
{return (function (){var or__3548__auto____13169 = (one.color.color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13169))
{return or__3548__auto____13169;
} else
{var or__3548__auto____13170 = (one.color.color["_"]);

if(cljs.core.truth_(or__3548__auto____13170))
{return or__3548__auto____13170;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.color",this$);
}
}
})().call(null,this$);
}
});
one.color.bg_color = (function bg_color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13171 = this$;

if(cljs.core.truth_(and__3546__auto____13171))
{return this$.one$color$IColorSource$bg_color;
} else
{return and__3546__auto____13171;
}
})()))
{return this$.one$color$IColorSource$bg_color(this$);
} else
{return (function (){var or__3548__auto____13172 = (one.color.bg_color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13172))
{return or__3548__auto____13172;
} else
{var or__3548__auto____13173 = (one.color.bg_color["_"]);

if(cljs.core.truth_(or__3548__auto____13173))
{return or__3548__auto____13173;
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
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(function (){var c__13174 = goog.style.getBackgroundColor.call(null,this$);

try{return goog.color.parse.call(null,c__13174);
}catch (e13175){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e13175)))
{var e__13176 = e13175;

return goog.color.alpha.parse.call(null,c__13174);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e13175;
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
