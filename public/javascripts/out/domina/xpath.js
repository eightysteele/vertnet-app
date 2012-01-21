goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__9384 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____9385 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____9385))
{return doc__9384.setProperty;
} else
{return and__3546__auto____9385;
}
})()))
{doc__9384.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__9384.evaluate))
{return technique_2.call(null,null,doc__9384,node,path);
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
var result__9386 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__9386.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__9387 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__9388 = result__9387.snapshotLength;

var i__9389 = 0;
var acc__9390 = null;

while(true){
if(cljs.core.truth_((i__9389 < num_results__9388)))
{{
var G__9391 = (i__9389 + 1);
var G__9392 = cljs.core.cons.call(null,result__9387.snapshotItem(i__9389),acc__9390);
i__9389 = G__9391;
acc__9390 = G__9392;
continue;
}
} else
{return acc__9390;
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
var xpath__9396 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__9397 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t9393)))
{
/**
* @constructor
*/
domina.xpath.t9393 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.xpath.t9393.prototype.domina$DomContent$ = true;
domina.xpath.t9393.prototype.domina$DomContent$nodes = (function (_){
var this__9394 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__9394.expr),domina.nodes.call(null,this__9394.base));
});
domina.xpath.t9393.prototype.domina$DomContent$single_node = (function (_){
var this__9395 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__9395.expr),domina.nodes.call(null,this__9395.base))));
});
} else
{}
return (new domina.xpath.t9393(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__9396.call(this,base);
case  2 :
return xpath__9397.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
