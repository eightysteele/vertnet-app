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
append.cljs$lang$applyTo = (function (arglist__9343){
var parent = cljs.core.first(arglist__9343);
var children = cljs.core.rest(arglist__9343);
return append__delegate.call(this, parent, children);
});
return append;
})()
;
clojure.browser.dom.DOMBuilder = {};
clojure.browser.dom._element = (function() {
var _element = null;
var _element__9353 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____9344 = this$;

if(cljs.core.truth_(and__3546__auto____9344))
{return this$.clojure$browser$dom$DOMBuilder$_element;
} else
{return and__3546__auto____9344;
}
})()))
{return this$.clojure$browser$dom$DOMBuilder$_element(this$);
} else
{return (function (){var or__3548__auto____9345 = (clojure.browser.dom._element[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9345))
{return or__3548__auto____9345;
} else
{var or__3548__auto____9346 = (clojure.browser.dom._element["_"]);

if(cljs.core.truth_(or__3548__auto____9346))
{return or__3548__auto____9346;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$);
}
});
var _element__9354 = (function (this$,attrs_or_children){
if(cljs.core.truth_((function (){var and__3546__auto____9347 = this$;

if(cljs.core.truth_(and__3546__auto____9347))
{return this$.clojure$browser$dom$DOMBuilder$_element;
} else
{return and__3546__auto____9347;
}
})()))
{return this$.clojure$browser$dom$DOMBuilder$_element(this$,attrs_or_children);
} else
{return (function (){var or__3548__auto____9348 = (clojure.browser.dom._element[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9348))
{return or__3548__auto____9348;
} else
{var or__3548__auto____9349 = (clojure.browser.dom._element["_"]);

if(cljs.core.truth_(or__3548__auto____9349))
{return or__3548__auto____9349;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs_or_children);
}
});
var _element__9355 = (function (this$,attrs,children){
if(cljs.core.truth_((function (){var and__3546__auto____9350 = this$;

if(cljs.core.truth_(and__3546__auto____9350))
{return this$.clojure$browser$dom$DOMBuilder$_element;
} else
{return and__3546__auto____9350;
}
})()))
{return this$.clojure$browser$dom$DOMBuilder$_element(this$,attrs,children);
} else
{return (function (){var or__3548__auto____9351 = (clojure.browser.dom._element[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9351))
{return or__3548__auto____9351;
} else
{var or__3548__auto____9352 = (clojure.browser.dom._element["_"]);

if(cljs.core.truth_(or__3548__auto____9352))
{return or__3548__auto____9352;
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
return _element__9353.call(this,this$);
case  2 :
return _element__9354.call(this,this$,attrs);
case  3 :
return _element__9355.call(this,this$,attrs,children);
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
log.cljs$lang$applyTo = (function (arglist__9357){
var args = cljs.core.seq( arglist__9357 );;
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
var tag__9358 = cljs.core.first.call(null,this$);
var attrs__9359 = cljs.core.second.call(null,this$);
var children__9360 = cljs.core.drop.call(null,2,this$);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9359)))
{return clojure.browser.dom._element.call(null,tag__9358,attrs__9359,children__9360);
} else
{return clojure.browser.dom._element.call(null,tag__9358,null,cljs.core.rest.call(null,this$));
}
});
(clojure.browser.dom.DOMBuilder["string"] = true);
(clojure.browser.dom._element["string"] = (function() {
var G__9370 = null;
var G__9370__9371 = (function (this$){
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
var G__9370__9372 = (function (this$,attrs_or_children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs_or_children,")");
var attrs__9361 = cljs.core.first.call(null,attrs_or_children);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9361)))
{return clojure.browser.dom._element.call(null,this$,attrs__9361,cljs.core.rest.call(null,attrs_or_children));
} else
{return clojure.browser.dom._element.call(null,this$,null,attrs_or_children);
}
});
var G__9370__9373 = (function (this$,attrs,children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs," ",children,")");
var str_attrs__9369 = (cljs.core.truth_((function (){var and__3546__auto____9362 = cljs.core.map_QMARK_.call(null,attrs);

if(cljs.core.truth_(and__3546__auto____9362))
{return cljs.core.seq.call(null,attrs);
} else
{return and__3546__auto____9362;
}
})())?cljs.core.reduce.call(null,(function (m,p__9363){
var vec__9364__9365 = p__9363;
var k__9366 = cljs.core.nth.call(null,vec__9364__9365,0,null);
var v__9367 = cljs.core.nth.call(null,vec__9364__9365,1,null);

clojure.browser.dom.log.call(null,"m = ",m);
clojure.browser.dom.log.call(null,"k = ",k__9366);
clojure.browser.dom.log.call(null,"v = ",v__9367);
if(cljs.core.truth_((function (){var or__3548__auto____9368 = cljs.core.keyword_QMARK_.call(null,k__9366);

if(cljs.core.truth_(or__3548__auto____9368))
{return or__3548__auto____9368;
} else
{return cljs.core.string_QMARK_.call(null,k__9366);
}
})()))
{return cljs.core.assoc.call(null,m,cljs.core.name.call(null,k__9366),v__9367);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),attrs).strobj:null);

clojure.browser.dom.log_obj.call(null,str_attrs__9369);
if(cljs.core.truth_(cljs.core.seq.call(null,children)))
{return cljs.core.apply.call(null,goog.dom.createDom,cljs.core.name.call(null,this$),str_attrs__9369,cljs.core.map.call(null,clojure.browser.dom._element,children));
} else
{return goog.dom.createDom.call(null,cljs.core.name.call(null,this$),str_attrs__9369);
}
});
G__9370 = function(this$,attrs,children){
switch(arguments.length){
case  1 :
return G__9370__9371.call(this,this$);
case  2 :
return G__9370__9372.call(this,this$,attrs);
case  3 :
return G__9370__9373.call(this,this$,attrs,children);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9370;
})()
);
/**
* @param {...*} var_args
*/
clojure.browser.dom.element = (function() {
var element = null;
var element__9376 = (function (tag_or_text){
clojure.browser.dom.log.call(null,"(element ",tag_or_text,")");
return clojure.browser.dom._element.call(null,tag_or_text);
});
var element__9377 = (function() { 
var G__9379__delegate = function (tag,children){
clojure.browser.dom.log.call(null,"(element ",tag," ",children,")");
var attrs__9375 = cljs.core.first.call(null,children);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9375)))
{return clojure.browser.dom._element.call(null,tag,attrs__9375,cljs.core.rest.call(null,children));
} else
{return clojure.browser.dom._element.call(null,tag,null,children);
}
};
var G__9379 = function (tag,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9379__delegate.call(this, tag, children);
};
G__9379.cljs$lang$maxFixedArity = 1;
G__9379.cljs$lang$applyTo = (function (arglist__9380){
var tag = cljs.core.first(arglist__9380);
var children = cljs.core.rest(arglist__9380);
return G__9379__delegate.call(this, tag, children);
});
return G__9379;
})()
;
element = function(tag,var_args){
var children = var_args;
switch(arguments.length){
case  1 :
return element__9376.call(this,tag);
default:
return element__9377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = element__9377.cljs$lang$applyTo;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
clojure.browser.dom.remove_children = (function remove_children(id){
var parent__9381 = goog.dom.getElement.call(null,cljs.core.name.call(null,id));

return goog.dom.removeChildren.call(null,parent__9381);
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
var old_node__9382 = clojure.browser.dom.ensure_element.call(null,old_node);
var new_node__9383 = clojure.browser.dom.ensure_element.call(null,new_node);

goog.dom.replaceNode.call(null,new_node__9383,old_node__9382);
return new_node__9383;
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
