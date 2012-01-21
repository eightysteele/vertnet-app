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
if(cljs.core.truth_((function (){var and__3546__auto____6208 = content;

if(cljs.core.truth_(and__3546__auto____6208))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____6208;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____6209 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____6209))
{return or__3548__auto____6209;
} else
{var or__3548__auto____6210 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____6210))
{return or__3548__auto____6210;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____6211 = nodeseq;

if(cljs.core.truth_(and__3546__auto____6211))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____6211;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____6212 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____6212))
{return or__3548__auto____6212;
} else
{var or__3548__auto____6213 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____6213))
{return or__3548__auto____6213;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t6214)))
{
/**
* @constructor
*/
domina.t6214 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t6214.prototype.domina$DomContent$ = true;
domina.t6214.prototype.domina$DomContent$nodes = (function (_){
var this__6215 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__6215.class_name));
});
domina.t6214.prototype.domina$DomContent$single_node = (function (_){
var this__6216 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__6216.class_name));
});
} else
{}
return (new domina.t6214(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__6217_SHARP_){
return p1__6217_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__6218_SHARP_,p2__6219_SHARP_){
return goog.dom.insertChildAt.call(null,p1__6218_SHARP_,p2__6219_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__6221_SHARP_,p2__6220_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__6220_SHARP_,p1__6221_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6223_SHARP_,p2__6222_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__6222_SHARP_,p1__6223_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6225_SHARP_,p2__6224_SHARP_){
return goog.dom.replaceNode.call(null,p2__6224_SHARP_,p1__6225_SHARP_);
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
var s__6226 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__6226))))
{return s__6226;
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
var G__6227__6228 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6227__6228))
{var n__6229 = cljs.core.first.call(null,G__6227__6228);
var G__6227__6230 = G__6227__6228;

while(true){
goog.style.setStyle.call(null,n__6229,cljs.core.name.call(null,name),value);
var temp__3698__auto____6231 = cljs.core.next.call(null,G__6227__6230);

if(cljs.core.truth_(temp__3698__auto____6231))
{var G__6227__6232 = temp__3698__auto____6231;

{
var G__6233 = cljs.core.first.call(null,G__6227__6232);
var G__6234 = G__6227__6232;
n__6229 = G__6233;
G__6227__6230 = G__6234;
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
var G__6235__6236 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6235__6236))
{var n__6237 = cljs.core.first.call(null,G__6235__6236);
var G__6235__6238 = G__6235__6236;

while(true){
n__6237.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____6239 = cljs.core.next.call(null,G__6235__6238);

if(cljs.core.truth_(temp__3698__auto____6239))
{var G__6235__6240 = temp__3698__auto____6239;

{
var G__6241 = cljs.core.first.call(null,G__6235__6240);
var G__6242 = G__6235__6240;
n__6237 = G__6241;
G__6235__6238 = G__6242;
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
var vec__6243__6244 = pair.split(/\s*:\s*/);
var k__6245 = cljs.core.nth.call(null,vec__6243__6244,0,null);
var v__6246 = cljs.core.nth.call(null,vec__6243__6244,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____6247 = k__6245;

if(cljs.core.truth_(and__3546__auto____6247))
{return v__6246;
} else
{return and__3546__auto____6247;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__6245.toLowerCase()),v__6246);
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
var node__6249 = domina.single_node.call(null,content);
var attrs__6250 = node__6249.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__6248_SHARP_){
var attr__6251 = attrs__6250.item(p1__6248_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__6251.nodeName.toLowerCase())],[attr__6251.nodeValue]);
}),cljs.core.range.call(null,attrs__6250.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__6252__6253 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__6252__6253))
{var G__6255__6257 = cljs.core.first.call(null,G__6252__6253);
var vec__6256__6258 = G__6255__6257;
var name__6259 = cljs.core.nth.call(null,vec__6256__6258,0,null);
var value__6260 = cljs.core.nth.call(null,vec__6256__6258,1,null);
var G__6252__6261 = G__6252__6253;

var G__6255__6262 = G__6255__6257;
var G__6252__6263 = G__6252__6261;

while(true){
var vec__6264__6265 = G__6255__6262;
var name__6266 = cljs.core.nth.call(null,vec__6264__6265,0,null);
var value__6267 = cljs.core.nth.call(null,vec__6264__6265,1,null);
var G__6252__6268 = G__6252__6263;

domina.set_style_BANG_.call(null,content,name__6266,value__6267);
var temp__3698__auto____6269 = cljs.core.next.call(null,G__6252__6268);

if(cljs.core.truth_(temp__3698__auto____6269))
{var G__6252__6270 = temp__3698__auto____6269;

{
var G__6271 = cljs.core.first.call(null,G__6252__6270);
var G__6272 = G__6252__6270;
G__6255__6262 = G__6271;
G__6252__6263 = G__6272;
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
var G__6273__6274 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__6273__6274))
{var G__6276__6278 = cljs.core.first.call(null,G__6273__6274);
var vec__6277__6279 = G__6276__6278;
var name__6280 = cljs.core.nth.call(null,vec__6277__6279,0,null);
var value__6281 = cljs.core.nth.call(null,vec__6277__6279,1,null);
var G__6273__6282 = G__6273__6274;

var G__6276__6283 = G__6276__6278;
var G__6273__6284 = G__6273__6282;

while(true){
var vec__6285__6286 = G__6276__6283;
var name__6287 = cljs.core.nth.call(null,vec__6285__6286,0,null);
var value__6288 = cljs.core.nth.call(null,vec__6285__6286,1,null);
var G__6273__6289 = G__6273__6284;

domina.set_attr_BANG_.call(null,content,name__6287,value__6288);
var temp__3698__auto____6290 = cljs.core.next.call(null,G__6273__6289);

if(cljs.core.truth_(temp__3698__auto____6290))
{var G__6273__6291 = temp__3698__auto____6290;

{
var G__6292 = cljs.core.first.call(null,G__6273__6291);
var G__6293 = G__6273__6291;
G__6276__6283 = G__6292;
G__6273__6284 = G__6293;
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
var G__6294__6295 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6294__6295))
{var node__6296 = cljs.core.first.call(null,G__6294__6295);
var G__6294__6297 = G__6294__6295;

while(true){
goog.dom.classes.add.call(null,node__6296,class$);
var temp__3698__auto____6298 = cljs.core.next.call(null,G__6294__6297);

if(cljs.core.truth_(temp__3698__auto____6298))
{var G__6294__6299 = temp__3698__auto____6298;

{
var G__6300 = cljs.core.first.call(null,G__6294__6299);
var G__6301 = G__6294__6299;
node__6296 = G__6300;
G__6294__6297 = G__6301;
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
var G__6302__6303 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6302__6303))
{var node__6304 = cljs.core.first.call(null,G__6302__6303);
var G__6302__6305 = G__6302__6303;

while(true){
goog.dom.classes.remove.call(null,node__6304,class$);
var temp__3698__auto____6306 = cljs.core.next.call(null,G__6302__6305);

if(cljs.core.truth_(temp__3698__auto____6306))
{var G__6302__6307 = temp__3698__auto____6306;

{
var G__6308 = cljs.core.first.call(null,G__6302__6307);
var G__6309 = G__6302__6307;
node__6304 = G__6308;
G__6302__6305 = G__6309;
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
var text__6310 = (function (content){
return text.call(null,content,true);
});
var text__6311 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__6310.call(this,content);
case  2 :
return text__6311.call(this,content,normalize);
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
var G__6313__6314 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6313__6314))
{var node__6315 = cljs.core.first.call(null,G__6313__6314);
var G__6313__6316 = G__6313__6314;

while(true){
goog.dom.setTextContent.call(null,node__6315,value);
var temp__3698__auto____6317 = cljs.core.next.call(null,G__6313__6316);

if(cljs.core.truth_(temp__3698__auto____6317))
{var G__6313__6318 = temp__3698__auto____6317;

{
var G__6319 = cljs.core.first.call(null,G__6313__6318);
var G__6320 = G__6313__6318;
node__6315 = G__6319;
G__6313__6316 = G__6320;
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
var G__6321__6322 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6321__6322))
{var node__6323 = cljs.core.first.call(null,G__6321__6322);
var G__6321__6324 = G__6321__6322;

while(true){
goog.dom.forms.setValue.call(null,node__6323,value);
var temp__3698__auto____6325 = cljs.core.next.call(null,G__6321__6324);

if(cljs.core.truth_(temp__3698__auto____6325))
{var G__6321__6326 = temp__3698__auto____6325;

{
var G__6327 = cljs.core.first.call(null,G__6321__6326);
var G__6328 = G__6321__6326;
node__6323 = G__6327;
G__6321__6324 = G__6328;
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
var G__6329__6330 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__6329__6330))
{var node__6331 = cljs.core.first.call(null,G__6329__6330);
var G__6329__6332 = G__6329__6330;

while(true){
node__6331.innerHTML = value;
var temp__3698__auto____6333 = cljs.core.next.call(null,G__6329__6332);

if(cljs.core.truth_(temp__3698__auto____6333))
{var G__6329__6334 = temp__3698__auto____6333;

{
var G__6335 = cljs.core.first.call(null,G__6329__6334);
var G__6336 = G__6329__6334;
node__6331 = G__6335;
G__6329__6332 = G__6336;
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
var parents__6337 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__6337))))
{var G__6338__6339 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__6338__6339))
{var child__6340 = cljs.core.first.call(null,G__6338__6339);
var G__6338__6341 = G__6338__6339;

while(true){
f.call(null,cljs.core.first.call(null,parents__6337),child__6340);
var temp__3698__auto____6342 = cljs.core.next.call(null,G__6338__6341);

if(cljs.core.truth_(temp__3698__auto____6342))
{var G__6338__6343 = temp__3698__auto____6342;

{
var G__6356 = cljs.core.first.call(null,G__6338__6343);
var G__6357 = G__6338__6343;
child__6340 = G__6356;
G__6338__6341 = G__6357;
continue;
}
} else
{}
break;
}
} else
{}
var G__6344__6346 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__6337));

if(cljs.core.truth_(G__6344__6346))
{var parent__6347 = cljs.core.first.call(null,G__6344__6346);
var G__6344__6348 = G__6344__6346;

while(true){
var G__6345__6349 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__6345__6349))
{var child__6350 = cljs.core.first.call(null,G__6345__6349);
var G__6345__6351 = G__6345__6349;

while(true){
f.call(null,parent__6347,child__6350);
var temp__3698__auto____6352 = cljs.core.next.call(null,G__6345__6351);

if(cljs.core.truth_(temp__3698__auto____6352))
{var G__6345__6353 = temp__3698__auto____6352;

{
var G__6358 = cljs.core.first.call(null,G__6345__6353);
var G__6359 = G__6345__6353;
child__6350 = G__6358;
G__6345__6351 = G__6359;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6354 = cljs.core.next.call(null,G__6344__6348);

if(cljs.core.truth_(temp__3698__auto____6354))
{var G__6344__6355 = temp__3698__auto____6354;

{
var G__6360 = cljs.core.first.call(null,G__6344__6355);
var G__6361 = G__6344__6355;
parent__6347 = G__6360;
G__6344__6348 = G__6361;
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
var lazy_nodelist__6362 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__6363 = (function (nl,n){
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
return lazy_nodelist__6362.call(this,nl);
case  2 :
return lazy_nodelist__6363.call(this,nl,n);
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
var G__6365 = null;
var G__6365__6366 = (function (nodelist,n){
return nodelist.item(n);
});
var G__6365__6367 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__6365 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__6365__6366.call(this,nodelist,n);
case  3 :
return G__6365__6367.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6365;
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
var G__6369 = null;
var G__6369__6370 = (function (nodelist,n){
return nodelist.item(n);
});
var G__6369__6371 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__6369 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__6369__6370.call(this,nodelist,n);
case  3 :
return G__6369__6371.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6369;
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
var G__6373 = null;
var G__6373__6374 = (function (coll,n){
return coll.item(n);
});
var G__6373__6375 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__6373 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6373__6374.call(this,coll,n);
case  3 :
return G__6373__6375.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6373;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
