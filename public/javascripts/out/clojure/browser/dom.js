goog.provide('clojure.browser.dom');
goog.require('cljs.core');
goog.require('goog.dom');
/**
* @param {...*} var_args
*/
clojure.browser.dom.append = (function() { 
var append__delegate = function (parent,children){
cljs.core.apply.call(null,goog.dom.append,parent,children);
return parent;
};
var append = function (parent,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return append__delegate.call(this, parent, children);
};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__6152){
var parent = cljs.core.first(arglist__6152);
var children = cljs.core.rest(arglist__6152);
return append__delegate.call(this, parent, children);
});
return append;
})()
;
clojure.browser.dom.DOMBuilder = {};
clojure.browser.dom._element = (function() {
var _element = null;
var _element__6162 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6153 = this$;

if(cljs.core.truth_(and__3546__auto____6153))
{return this$.clojure$browser$dom$DOMBuilder$_element;
} else
{return and__3546__auto____6153;
}
})()))
{return this$.clojure$browser$dom$DOMBuilder$_element(this$);
} else
{return (function (){var or__3548__auto____6154 = (clojure.browser.dom._element[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6154))
{return or__3548__auto____6154;
} else
{var or__3548__auto____6155 = (clojure.browser.dom._element["_"]);

if(cljs.core.truth_(or__3548__auto____6155))
{return or__3548__auto____6155;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$);
}
});
var _element__6163 = (function (this$,attrs_or_children){
if(cljs.core.truth_((function (){var and__3546__auto____6156 = this$;

if(cljs.core.truth_(and__3546__auto____6156))
{return this$.clojure$browser$dom$DOMBuilder$_element;
} else
{return and__3546__auto____6156;
}
})()))
{return this$.clojure$browser$dom$DOMBuilder$_element(this$,attrs_or_children);
} else
{return (function (){var or__3548__auto____6157 = (clojure.browser.dom._element[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6157))
{return or__3548__auto____6157;
} else
{var or__3548__auto____6158 = (clojure.browser.dom._element["_"]);

if(cljs.core.truth_(or__3548__auto____6158))
{return or__3548__auto____6158;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs_or_children);
}
});
var _element__6164 = (function (this$,attrs,children){
if(cljs.core.truth_((function (){var and__3546__auto____6159 = this$;

if(cljs.core.truth_(and__3546__auto____6159))
{return this$.clojure$browser$dom$DOMBuilder$_element;
} else
{return and__3546__auto____6159;
}
})()))
{return this$.clojure$browser$dom$DOMBuilder$_element(this$,attrs,children);
} else
{return (function (){var or__3548__auto____6160 = (clojure.browser.dom._element[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6160))
{return or__3548__auto____6160;
} else
{var or__3548__auto____6161 = (clojure.browser.dom._element["_"]);

if(cljs.core.truth_(or__3548__auto____6161))
{return or__3548__auto____6161;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs,children);
}
});
_element = function(this$,attrs,children){
switch(arguments.length){
case  1 :
return _element__6162.call(this,this$);
case  2 :
return _element__6163.call(this,this$,attrs);
case  3 :
return _element__6164.call(this,this$,attrs,children);
}
throw('Invalid arity: ' + arguments.length);
};
return _element;
})()
;
/**
* @param {...*} var_args
*/
clojure.browser.dom.log = (function() { 
var log__delegate = function (args){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var log = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, args);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6166){
var args = cljs.core.seq( arglist__6166 );;
return log__delegate.call(this, args);
});
return log;
})()
;
clojure.browser.dom.log_obj = (function log_obj(obj){
return console.log(obj);
});
Element.prototype.clojure$browser$dom$DOMBuilder$ = true;
Element.prototype.clojure$browser$dom$DOMBuilder$_element = (function (this$){
clojure.browser.dom.log.call(null,"js/Element (-element ",this$,")");
return this$;
});
cljs.core.Vector.prototype.clojure$browser$dom$DOMBuilder$ = true;
cljs.core.Vector.prototype.clojure$browser$dom$DOMBuilder$_element = (function (this$){
clojure.browser.dom.log.call(null,"Vector (-element ",this$,")");
var tag__6167 = cljs.core.first.call(null,this$);
var attrs__6168 = cljs.core.second.call(null,this$);
var children__6169 = cljs.core.drop.call(null,2,this$);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__6168)))
{return clojure.browser.dom._element.call(null,tag__6167,attrs__6168,children__6169);
} else
{return clojure.browser.dom._element.call(null,tag__6167,null,cljs.core.rest.call(null,this$));
}
});
(clojure.browser.dom.DOMBuilder["string"] = true);
(clojure.browser.dom._element["string"] = (function() {
var G__6179 = null;
var G__6179__6180 = (function (this$){
clojure.browser.dom.log.call(null,"string (-element ",this$,")");
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,this$)))
{return goog.dom.createElement.call(null,cljs.core.name.call(null,this$));
} else
{if(cljs.core.truth_("﷐'else"))
{return goog.dom.createTextNode.call(null,cljs.core.name.call(null,this$));
} else
{return null;
}
}
});
var G__6179__6181 = (function (this$,attrs_or_children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs_or_children,")");
var attrs__6170 = cljs.core.first.call(null,attrs_or_children);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__6170)))
{return clojure.browser.dom._element.call(null,this$,attrs__6170,cljs.core.rest.call(null,attrs_or_children));
} else
{return clojure.browser.dom._element.call(null,this$,null,attrs_or_children);
}
});
var G__6179__6182 = (function (this$,attrs,children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs," ",children,")");
var str_attrs__6178 = (cljs.core.truth_((function (){var and__3546__auto____6171 = cljs.core.map_QMARK_.call(null,attrs);

if(cljs.core.truth_(and__3546__auto____6171))
{return cljs.core.seq.call(null,attrs);
} else
{return and__3546__auto____6171;
}
})())?cljs.core.reduce.call(null,(function (m,p__6172){
var vec__6173__6174 = p__6172;
var k__6175 = cljs.core.nth.call(null,vec__6173__6174,0,null);
var v__6176 = cljs.core.nth.call(null,vec__6173__6174,1,null);

clojure.browser.dom.log.call(null,"m = ",m);
clojure.browser.dom.log.call(null,"k = ",k__6175);
clojure.browser.dom.log.call(null,"v = ",v__6176);
if(cljs.core.truth_((function (){var or__3548__auto____6177 = cljs.core.keyword_QMARK_.call(null,k__6175);

if(cljs.core.truth_(or__3548__auto____6177))
{return or__3548__auto____6177;
} else
{return cljs.core.string_QMARK_.call(null,k__6175);
}
})()))
{return cljs.core.assoc.call(null,m,cljs.core.name.call(null,k__6175),v__6176);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),attrs).strobj:null);

clojure.browser.dom.log_obj.call(null,str_attrs__6178);
if(cljs.core.truth_(cljs.core.seq.call(null,children)))
{return cljs.core.apply.call(null,goog.dom.createDom,cljs.core.name.call(null,this$),str_attrs__6178,cljs.core.map.call(null,clojure.browser.dom._element,children));
} else
{return goog.dom.createDom.call(null,cljs.core.name.call(null,this$),str_attrs__6178);
}
});
G__6179 = function(this$,attrs,children){
switch(arguments.length){
case  1 :
return G__6179__6180.call(this,this$);
case  2 :
return G__6179__6181.call(this,this$,attrs);
case  3 :
return G__6179__6182.call(this,this$,attrs,children);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6179;
})()
);
/**
* @param {...*} var_args
*/
clojure.browser.dom.element = (function() {
var element = null;
var element__6185 = (function (tag_or_text){
clojure.browser.dom.log.call(null,"(element ",tag_or_text,")");
return clojure.browser.dom._element.call(null,tag_or_text);
});
var element__6186 = (function() { 
var G__6188__delegate = function (tag,children){
clojure.browser.dom.log.call(null,"(element ",tag," ",children,")");
var attrs__6184 = cljs.core.first.call(null,children);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__6184)))
{return clojure.browser.dom._element.call(null,tag,attrs__6184,cljs.core.rest.call(null,children));
} else
{return clojure.browser.dom._element.call(null,tag,null,children);
}
};
var G__6188 = function (tag,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6188__delegate.call(this, tag, children);
};
G__6188.cljs$lang$maxFixedArity = 1;
G__6188.cljs$lang$applyTo = (function (arglist__6189){
var tag = cljs.core.first(arglist__6189);
var children = cljs.core.rest(arglist__6189);
return G__6188__delegate.call(this, tag, children);
});
return G__6188;
})()
;
element = function(tag,var_args){
var children = var_args;
switch(arguments.length){
case  1 :
return element__6185.call(this,tag);
default:
return element__6186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = element__6186.cljs$lang$applyTo;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
clojure.browser.dom.remove_children = (function remove_children(id){
var parent__6190 = goog.dom.getElement.call(null,cljs.core.name.call(null,id));

return goog.dom.removeChildren.call(null,parent__6190);
});
clojure.browser.dom.get_element = (function get_element(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
clojure.browser.dom.html__GT_dom = (function html__GT_dom(s){
return goog.dom.htmlToDocumentFragment.call(null,s);
});
clojure.browser.dom.insert_at = (function insert_at(parent,child,index){
return goog.dom.insertChildAt.call(null,parent,child,index);
});
/**
* Coerce the argument to a dom element if possible.
*/
clojure.browser.dom.ensure_element = (function ensure_element(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return clojure.browser.dom.get_element.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,e)))
{return clojure.browser.dom.html__GT_dom.call(null,e);
} else
{if(cljs.core.truth_("﷐'else"))
{return e;
} else
{return null;
}
}
}
});
/**
* Replace old-node with new-node. old-node can be an element or a
* keyword which is the id of the node to replace.  new-node can be an
* element or an html string.
*/
clojure.browser.dom.replace_node = (function replace_node(old_node,new_node){
var old_node__6191 = clojure.browser.dom.ensure_element.call(null,old_node);
var new_node__6192 = clojure.browser.dom.ensure_element.call(null,new_node);

goog.dom.replaceNode.call(null,new_node__6192,old_node__6191);
return new_node__6192;
});
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
clojure.browser.dom.set_text = (function set_text(e,s){
return goog.dom.setTextContent.call(null,clojure.browser.dom.ensure_element.call(null,e),s);
});
/**
* Get the value of an element.
*/
clojure.browser.dom.get_value = (function get_value(e){
return clojure.browser.dom.ensure_element.call(null,e).value;
});
/**
* Set properties on an element
*/
clojure.browser.dom.set_properties = (function set_properties(e,m){
return goog.dom.setProperties.call(null,clojure.browser.dom.ensure_element.call(null,e),m.strobj);
});
/**
* Set the value property for an element.
*/
clojure.browser.dom.set_value = (function set_value(e,v){
return clojure.browser.dom.set_properties.call(null,e,cljs.core.ObjMap.fromObject(["value"],{"value":v}));
});
clojure.browser.dom.click_element = (function click_element(e){
return clojure.browser.dom.ensure_element.call(null,e).click(cljs.core.List.EMPTY);
});
