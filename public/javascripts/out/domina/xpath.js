goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__6193 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____6194 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____6194))
{return doc__6193.setProperty;
} else
{return and__3546__auto____6194;
}
})()))
{doc__6193.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__6193.evaluate))
{return technique_2.call(null,null,doc__6193,node,path);
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectSingleNode(expr);
}),(function (resolver,doc,node,expr){
var result__6195 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__6195.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__6196 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__6197 = result__6196.snapshotLength;

var i__6198 = 0;
var acc__6199 = null;

while(true){
if(cljs.core.truth_((i__6198 < num_results__6197)))
{{
var G__6200 = (i__6198 + 1);
var G__6201 = cljs.core.cons.call(null,result__6196.snapshotItem(i__6198),acc__6199);
i__6198 = G__6200;
acc__6199 = G__6201;
continue;
}
} else
{return acc__6199;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass.call(null,"html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__6205 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__6206 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t6202)))
{
/**
* @constructor
*/
domina.xpath.t6202 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.xpath.t6202.prototype.domina$DomContent$ = true;
domina.xpath.t6202.prototype.domina$DomContent$nodes = (function (_){
var this__6203 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__6203.expr),domina.nodes.call(null,this__6203.base));
});
domina.xpath.t6202.prototype.domina$DomContent$single_node = (function (_){
var this__6204 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__6204.expr),domina.nodes.call(null,this__6204.base))));
});
} else
{}
return (new domina.xpath.t6202(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__6205.call(this,base);
case  2 :
return xpath__6206.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
