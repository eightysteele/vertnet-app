goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____9399 = content;

if(cljs.core.truth_(and__3546__auto____9399))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____9399;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____9400 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____9400))
{return or__3548__auto____9400;
} else
{var or__3548__auto____9401 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____9401))
{return or__3548__auto____9401;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____9402 = nodeseq;

if(cljs.core.truth_(and__3546__auto____9402))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____9402;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____9403 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____9403))
{return or__3548__auto____9403;
} else
{var or__3548__auto____9404 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____9404))
{return or__3548__auto____9404;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t9405)))
{
/**
* @constructor
*/
domina.t9405 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t9405.prototype.domina$DomContent$ = true;
domina.t9405.prototype.domina$DomContent$nodes = (function (_){
var this__9406 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__9406.class_name));
});
domina.t9405.prototype.domina$DomContent$single_node = (function (_){
var this__9407 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__9407.class_name));
});
} else
{}
return (new domina.t9405(class_name,by_class));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__9408_SHARP_){
return p1__9408_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__9409_SHARP_,p2__9410_SHARP_){
return goog.dom.insertChildAt.call(null,p1__9409_SHARP_,p2__9410_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9412_SHARP_,p2__9411_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__9411_SHARP_,p1__9412_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9414_SHARP_,p2__9413_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__9413_SHARP_,p1__9414_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9416_SHARP_,p2__9415_SHARP_){
return goog.dom.replaceNode.call(null,p2__9415_SHARP_,p1__9416_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__9417 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__9417))))
{return s__9417;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__9418__9419 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9418__9419))
{var n__9420 = cljs.core.first.call(null,G__9418__9419);
var G__9418__9421 = G__9418__9419;

while(true){
goog.style.setStyle.call(null,n__9420,cljs.core.name.call(null,name),value);
var temp__3698__auto____9422 = cljs.core.next.call(null,G__9418__9421);

if(cljs.core.truth_(temp__3698__auto____9422))
{var G__9418__9423 = temp__3698__auto____9422;

{
var G__9424 = cljs.core.first.call(null,G__9418__9423);
var G__9425 = G__9418__9423;
n__9420 = G__9424;
G__9418__9421 = G__9425;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__9426__9427 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9426__9427))
{var n__9428 = cljs.core.first.call(null,G__9426__9427);
var G__9426__9429 = G__9426__9427;

while(true){
n__9428.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____9430 = cljs.core.next.call(null,G__9426__9429);

if(cljs.core.truth_(temp__3698__auto____9430))
{var G__9426__9431 = temp__3698__auto____9430;

{
var G__9432 = cljs.core.first.call(null,G__9426__9431);
var G__9433 = G__9426__9431;
n__9428 = G__9432;
G__9426__9429 = G__9433;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__9434__9435 = pair.split(/\s*:\s*/);
var k__9436 = cljs.core.nth.call(null,vec__9434__9435,0,null);
var v__9437 = cljs.core.nth.call(null,vec__9434__9435,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____9438 = k__9436;

if(cljs.core.truth_(and__3546__auto____9438))
{return v__9437;
} else
{return and__3546__auto____9438;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__9436.toLowerCase()),v__9437);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
return domina.parse_style_attributes.call(null,domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__9440 = domina.single_node.call(null,content);
var attrs__9441 = node__9440.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__9439_SHARP_){
var attr__9442 = attrs__9441.item(p1__9439_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__9442.nodeName.toLowerCase())],[attr__9442.nodeValue]);
}),cljs.core.range.call(null,attrs__9441.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__9443__9444 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__9443__9444))
{var G__9446__9448 = cljs.core.first.call(null,G__9443__9444);
var vec__9447__9449 = G__9446__9448;
var name__9450 = cljs.core.nth.call(null,vec__9447__9449,0,null);
var value__9451 = cljs.core.nth.call(null,vec__9447__9449,1,null);
var G__9443__9452 = G__9443__9444;

var G__9446__9453 = G__9446__9448;
var G__9443__9454 = G__9443__9452;

while(true){
var vec__9455__9456 = G__9446__9453;
var name__9457 = cljs.core.nth.call(null,vec__9455__9456,0,null);
var value__9458 = cljs.core.nth.call(null,vec__9455__9456,1,null);
var G__9443__9459 = G__9443__9454;

domina.set_style_BANG_.call(null,content,name__9457,value__9458);
var temp__3698__auto____9460 = cljs.core.next.call(null,G__9443__9459);

if(cljs.core.truth_(temp__3698__auto____9460))
{var G__9443__9461 = temp__3698__auto____9460;

{
var G__9462 = cljs.core.first.call(null,G__9443__9461);
var G__9463 = G__9443__9461;
G__9446__9453 = G__9462;
G__9443__9454 = G__9463;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__9464__9465 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9464__9465))
{var G__9467__9469 = cljs.core.first.call(null,G__9464__9465);
var vec__9468__9470 = G__9467__9469;
var name__9471 = cljs.core.nth.call(null,vec__9468__9470,0,null);
var value__9472 = cljs.core.nth.call(null,vec__9468__9470,1,null);
var G__9464__9473 = G__9464__9465;

var G__9467__9474 = G__9467__9469;
var G__9464__9475 = G__9464__9473;

while(true){
var vec__9476__9477 = G__9467__9474;
var name__9478 = cljs.core.nth.call(null,vec__9476__9477,0,null);
var value__9479 = cljs.core.nth.call(null,vec__9476__9477,1,null);
var G__9464__9480 = G__9464__9475;

domina.set_attr_BANG_.call(null,content,name__9478,value__9479);
var temp__3698__auto____9481 = cljs.core.next.call(null,G__9464__9480);

if(cljs.core.truth_(temp__3698__auto____9481))
{var G__9464__9482 = temp__3698__auto____9481;

{
var G__9483 = cljs.core.first.call(null,G__9464__9482);
var G__9484 = G__9464__9482;
G__9467__9474 = G__9483;
G__9464__9475 = G__9484;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has.call(null,domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__9485__9486 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9485__9486))
{var node__9487 = cljs.core.first.call(null,G__9485__9486);
var G__9485__9488 = G__9485__9486;

while(true){
goog.dom.classes.add.call(null,node__9487,class$);
var temp__3698__auto____9489 = cljs.core.next.call(null,G__9485__9488);

if(cljs.core.truth_(temp__3698__auto____9489))
{var G__9485__9490 = temp__3698__auto____9489;

{
var G__9491 = cljs.core.first.call(null,G__9485__9490);
var G__9492 = G__9485__9490;
node__9487 = G__9491;
G__9485__9488 = G__9492;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__9493__9494 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9493__9494))
{var node__9495 = cljs.core.first.call(null,G__9493__9494);
var G__9493__9496 = G__9493__9494;

while(true){
goog.dom.classes.remove.call(null,node__9495,class$);
var temp__3698__auto____9497 = cljs.core.next.call(null,G__9493__9496);

if(cljs.core.truth_(temp__3698__auto____9497))
{var G__9493__9498 = temp__3698__auto____9497;

{
var G__9499 = cljs.core.first.call(null,G__9493__9498);
var G__9500 = G__9493__9498;
node__9495 = G__9499;
G__9493__9496 = G__9500;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get.call(null,domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__9501 = (function (content){
return text.call(null,content,true);
});
var text__9502 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__9501.call(this,content);
case  2 :
return text__9502.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__9504__9505 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9504__9505))
{var node__9506 = cljs.core.first.call(null,G__9504__9505);
var G__9504__9507 = G__9504__9505;

while(true){
goog.dom.setTextContent.call(null,node__9506,value);
var temp__3698__auto____9508 = cljs.core.next.call(null,G__9504__9507);

if(cljs.core.truth_(temp__3698__auto____9508))
{var G__9504__9509 = temp__3698__auto____9508;

{
var G__9510 = cljs.core.first.call(null,G__9504__9509);
var G__9511 = G__9504__9509;
node__9506 = G__9510;
G__9504__9507 = G__9511;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue.call(null,domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__9512__9513 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9512__9513))
{var node__9514 = cljs.core.first.call(null,G__9512__9513);
var G__9512__9515 = G__9512__9513;

while(true){
goog.dom.forms.setValue.call(null,node__9514,value);
var temp__3698__auto____9516 = cljs.core.next.call(null,G__9512__9515);

if(cljs.core.truth_(temp__3698__auto____9516))
{var G__9512__9517 = temp__3698__auto____9516;

{
var G__9518 = cljs.core.first.call(null,G__9512__9517);
var G__9519 = G__9512__9517;
node__9514 = G__9518;
G__9512__9515 = G__9519;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,value){
var G__9520__9521 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9520__9521))
{var node__9522 = cljs.core.first.call(null,G__9520__9521);
var G__9520__9523 = G__9520__9521;

while(true){
node__9522.innerHTML = value;
var temp__3698__auto____9524 = cljs.core.next.call(null,G__9520__9523);

if(cljs.core.truth_(temp__3698__auto____9524))
{var G__9520__9525 = temp__3698__auto____9524;

{
var G__9526 = cljs.core.first.call(null,G__9520__9525);
var G__9527 = G__9520__9525;
node__9522 = G__9526;
G__9520__9523 = G__9527;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__9528 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__9528))))
{var G__9529__9530 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__9529__9530))
{var child__9531 = cljs.core.first.call(null,G__9529__9530);
var G__9529__9532 = G__9529__9530;

while(true){
f.call(null,cljs.core.first.call(null,parents__9528),child__9531);
var temp__3698__auto____9533 = cljs.core.next.call(null,G__9529__9532);

if(cljs.core.truth_(temp__3698__auto____9533))
{var G__9529__9534 = temp__3698__auto____9533;

{
var G__9547 = cljs.core.first.call(null,G__9529__9534);
var G__9548 = G__9529__9534;
child__9531 = G__9547;
G__9529__9532 = G__9548;
continue;
}
} else
{}
break;
}
} else
{}
var G__9535__9537 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__9528));

if(cljs.core.truth_(G__9535__9537))
{var parent__9538 = cljs.core.first.call(null,G__9535__9537);
var G__9535__9539 = G__9535__9537;

while(true){
var G__9536__9540 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__9536__9540))
{var child__9541 = cljs.core.first.call(null,G__9536__9540);
var G__9536__9542 = G__9536__9540;

while(true){
f.call(null,parent__9538,child__9541);
var temp__3698__auto____9543 = cljs.core.next.call(null,G__9536__9542);

if(cljs.core.truth_(temp__3698__auto____9543))
{var G__9536__9544 = temp__3698__auto____9543;

{
var G__9549 = cljs.core.first.call(null,G__9536__9544);
var G__9550 = G__9536__9544;
child__9541 = G__9549;
G__9536__9542 = G__9550;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9545 = cljs.core.next.call(null,G__9535__9539);

if(cljs.core.truth_(temp__3698__auto____9545))
{var G__9535__9546 = temp__3698__auto____9545;

{
var G__9551 = cljs.core.first.call(null,G__9535__9546);
var G__9552 = G__9535__9546;
parent__9538 = G__9551;
G__9535__9539 = G__9552;
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
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__9553 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__9554 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nodelist__9553.call(this,nl);
case  2 :
return lazy_nodelist__9554.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
return cljs.core.seq.call(null,content);
}));
(domina.single_node["_"] = (function (content){
return cljs.core.first.call(null,content);
}));
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Element.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.cons.call(null,goog.dom.htmlToDocumentFragment.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return goog.dom.htmlToDocumentFragment.call(null,s);
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9556 = null;
var G__9556__9557 = (function (nodelist,n){
return nodelist.item(n);
});
var G__9556__9558 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__9556 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__9556__9557.call(this,nodelist,n);
case  3 :
return G__9556__9558.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9556;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9560 = null;
var G__9560__9561 = (function (nodelist,n){
return nodelist.item(n);
});
var G__9560__9562 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__9560 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__9560__9561.call(this,nodelist,n);
case  3 :
return G__9560__9562.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9560;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9564 = null;
var G__9564__9565 = (function (coll,n){
return coll.item(n);
});
var G__9564__9566 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__9564 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9564__9565.call(this,coll,n);
case  3 :
return G__9564__9566.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9564;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
