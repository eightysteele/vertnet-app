goog.provide('one.sample.view');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('one.browser.animation');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('clojure.browser.event');
goog.require('one.dispatch');
goog.require('one.sample.animation');
goog.require('jaki.couch');
/**
* A map which contains chunks of HTML which may be used
* when rendering views.
*/
one.sample.view.snippets = cljs.core.ObjMap.fromObject(["﷐'form","﷐'greeting"],{"﷐'form":"<div id=\"form\">\n      <h1 id=\"header\">Amazing</h1>\n      <div class=\"input\">\n        <label id=\"name-input-label\">\n          <span>Enter your name</span>\n          <input type=\"text\" size=\"30\" id=\"name-input\" />\n        </label>\n        <div class=\"small error\" id=\"name-input-error\"> </div>\n      </div>\n      <input value=\"Done!\" type=\"button\" class=\"button green\" id=\"greet-button\" />\n    </div>","﷐'greeting":"<div id=\"greeting\">\n      <h2>Welcome</h2>\n      <div class=\"break\"></div>\n      <h3><span class=\"again\">again</span> <span class=\"name\">Person</span></h3>\n    </div>"});
/**
* Render the submit button based on the current state of the
* form. The button is disabled while the user is editing the form and
* becomes enabled when the form is complete.
*/
one.sample.view.render_button = (function (){var method_table__1524__auto____12607 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____12608 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____12609 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____12610 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____12611 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-button",cljs.core.identity,"﷐'default",hierarchy__1528__auto____12611,method_table__1524__auto____12607,prefer_table__1525__auto____12608,method_cache__1526__auto____12609,cached_hierarchy__1527__auto____12610));
})();
cljs.core._add_method.call(null,one.sample.view.render_button,"﷐'default",(function (_){
return null;
}));
cljs.core._add_method.call(null,one.sample.view.render_button,cljs.core.Vector.fromArray(["﷐'finished","﷐'editing"]),(function (_){
return one.sample.animation.disable_button.call(null,"greet-button");
}));
cljs.core._add_method.call(null,one.sample.view.render_button,cljs.core.Vector.fromArray(["﷐'editing","﷐'finished"]),(function (_){
return one.sample.animation.enable_button.call(null,"greet-button");
}));
/**
* Render a form field based on the current state transition. Form
* fields are validated as soon as they lose focus. There are six
* transitions and each one has its own animation.
*/
one.sample.view.render_form_field = (function (){var method_table__1524__auto____12612 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____12613 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____12614 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____12615 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____12616 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-form-field","﷐'transition","﷐'default",hierarchy__1528__auto____12616,method_table__1524__auto____12612,prefer_table__1525__auto____12613,method_cache__1526__auto____12614,cached_hierarchy__1527__auto____12615));
})();
cljs.core._add_method.call(null,one.sample.view.render_form_field,"﷐'default",(function (_){
return null;
}));
/**
* Accepts an element id for an input field and return the xpath
* string to the label for that field.
*/
one.sample.view.label_xpath = (function label_xpath(id){
return cljs.core.str.call(null,"//label[@id='",id,"-label']/span");
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'empty","﷐'editing"]),(function (p__12617){
var map__12618__12619 = p__12617;
var map__12618__12620 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12618__12619))?cljs.core.apply.call(null,cljs.core.hash_map,map__12618__12619):map__12618__12619);
var id__12621 = cljs.core.get.call(null,map__12618__12620,"﷐'id");

return one.sample.animation.label_move_up.call(null,one.sample.view.label_xpath.call(null,id__12621));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'empty"]),(function (p__12622){
var map__12623__12624 = p__12622;
var map__12623__12625 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12623__12624))?cljs.core.apply.call(null,cljs.core.hash_map,map__12623__12624):map__12623__12624);
var id__12626 = cljs.core.get.call(null,map__12623__12625,"﷐'id");

return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__12626));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'valid"]),(function (p__12627){
var map__12628__12629 = p__12627;
var map__12628__12630 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12628__12629))?cljs.core.apply.call(null,cljs.core.hash_map,map__12628__12629):map__12628__12629);
var id__12631 = cljs.core.get.call(null,map__12628__12630,"﷐'id");

return one.sample.animation.label_fade_out.call(null,one.sample.view.label_xpath.call(null,id__12631));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'valid","﷐'editing-valid"]),(function (p__12632){
var map__12633__12634 = p__12632;
var map__12633__12635 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12633__12634))?cljs.core.apply.call(null,cljs.core.hash_map,map__12633__12634):map__12633__12634);
var id__12636 = cljs.core.get.call(null,map__12633__12635,"﷐'id");

return one.browser.animation.play.call(null,one.sample.view.label_xpath.call(null,id__12636),one.sample.animation.fade_in);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'error"]),(function (p__12637){
var map__12638__12639 = p__12637;
var map__12638__12640 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12638__12639))?cljs.core.apply.call(null,cljs.core.hash_map,map__12638__12639):map__12638__12639);
var error__12641 = cljs.core.get.call(null,map__12638__12640,"﷐'error");
var id__12642 = cljs.core.get.call(null,map__12638__12640,"﷐'id");

var error_element__12643 = domina.by_id.call(null,cljs.core.str.call(null,id__12642,"-error"));

domina.set_style_BANG_.call(null,error_element__12643,"opacity","0");
domina.set_html_BANG_.call(null,error_element__12643,error__12641);
return one.browser.animation.play.call(null,error_element__12643,one.sample.animation.fade_in);
}));
/**
* Accepts an id and an error message and fades the old error message
* out and the new one in.
*/
one.sample.view.swap_error_messages = (function swap_error_messages(id,error){
var error_element__12644 = domina.by_id.call(null,cljs.core.str.call(null,id,"-error"));

one.browser.animation.play.call(null,error_element__12644,one.sample.animation.fade_out,cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"fade out error"}));
return one.browser.animation.play.call(null,error_element__12644,one.sample.animation.fade_in,cljs.core.ObjMap.fromObject(["﷐'before"],{"﷐'before":(function (){
return domina.set_html_BANG_.call(null,error_element__12644,error);
})}));
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'error","﷐'editing-error"]),(function (p__12645){
var map__12646__12647 = p__12645;
var map__12646__12648 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12646__12647))?cljs.core.apply.call(null,cljs.core.hash_map,map__12646__12647):map__12646__12647);
var error__12649 = cljs.core.get.call(null,map__12646__12648,"﷐'error");
var id__12650 = cljs.core.get.call(null,map__12646__12648,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__12650,error__12649);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'error"]),(function (p__12651){
var map__12652__12653 = p__12651;
var map__12652__12654 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12652__12653))?cljs.core.apply.call(null,cljs.core.hash_map,map__12652__12653):map__12652__12653);
var error__12655 = cljs.core.get.call(null,map__12652__12654,"﷐'error");
var id__12656 = cljs.core.get.call(null,map__12652__12654,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__12656,error__12655);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'editing-valid"]),(function (p__12657){
var map__12658__12659 = p__12657;
var map__12658__12660 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12658__12659))?cljs.core.apply.call(null,cljs.core.hash_map,map__12658__12659):map__12658__12659);
var id__12661 = cljs.core.get.call(null,map__12658__12660,"﷐'id");

var error_element__12662 = domina.by_id.call(null,cljs.core.str.call(null,id__12661,"-error"));

return one.browser.animation.play.call(null,error_element__12662,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'empty"]),(function (p__12663){
var map__12664__12665 = p__12663;
var map__12664__12666 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12664__12665))?cljs.core.apply.call(null,cljs.core.hash_map,map__12664__12665):map__12664__12665);
var id__12667 = cljs.core.get.call(null,map__12664__12666,"﷐'id");

var error_element__12668 = domina.by_id.call(null,cljs.core.str.call(null,id__12667,"-error"));

one.browser.animation.play.call(null,error_element__12668,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__12667));
}));
/**
* Accepts a field-id and creates listeners for blur and focus events which will then fire
* `:field-changed` and `:editing-field` events.
*/
one.sample.view.add_input_event_listeners = (function add_input_event_listeners(field_id){
var field__12669 = domina.by_id.call(null,field_id);
var keyboard__12670 = (new goog.events.KeyHandler(domina.by_id.call(null,"form")));

clojure.browser.event.listen.call(null,field__12669,"blur",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished",field_id]),domina.value.call(null,field__12669));
}));
clojure.browser.event.listen.call(null,field__12669,"focus",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'editing-field",field_id]));
}));
clojure.browser.event.listen.call(null,field__12669,"keyup",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-changed",field_id]),domina.value.call(null,field__12669));
}));
return clojure.browser.event.listen.call(null,keyboard__12670,"key",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,goog.events.KeyCodes.ENTER)))
{domina.by_id.call(null,"name-input").blur(cljs.core.List.EMPTY);
return one.dispatch.fire.call(null,"﷐'form-submit");
} else
{return null;
}
}));
});
/**
* Accepts a map which represents the current state of the application
* and renders a view based on the value of the `:state` key.
*/
one.sample.view.render = (function (){var method_table__1524__auto____12671 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____12672 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____12673 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____12674 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____12675 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'state","﷐'default",hierarchy__1528__auto____12675,method_table__1524__auto____12671,prefer_table__1525__auto____12672,method_cache__1526__auto____12673,cached_hierarchy__1527__auto____12674));
})();
cljs.core._add_method.call(null,one.sample.view.render,"﷐'init",(function (_){
one.sample.animation.initialize_views.call(null,"﷐'form".call(null,one.sample.view.snippets),"﷐'greeting".call(null,one.sample.view.snippets));
one.sample.view.add_input_event_listeners.call(null,"name-input");
return clojure.browser.event.listen.call(null,domina.by_id.call(null,"greet-button"),"click",(function (){
return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":domina.value.call(null,domina.by_id.call(null,"name-input"))}));
}));
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'form",(function (p__12676){
var map__12677__12678 = p__12676;
var map__12677__12679 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12677__12678))?cljs.core.apply.call(null,cljs.core.hash_map,map__12677__12678):map__12677__12678);
var name__12680 = cljs.core.get.call(null,map__12677__12679,"﷐'name");
var error__12681 = cljs.core.get.call(null,map__12677__12679,"﷐'error");
var state__12682 = cljs.core.get.call(null,map__12677__12679,"﷐'state");

one.sample.animation.show_form.call(null);
domina.set_value_BANG_.call(null,domina.by_id.call(null,"name-input"),"");
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished","name-input"]),"");
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'greeting",(function (p__12683){
var map__12684__12685 = p__12683;
var map__12684__12686 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12684__12685))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684__12685):map__12684__12685);
var exists__12687 = cljs.core.get.call(null,map__12684__12686,"﷐'exists");
var name__12688 = cljs.core.get.call(null,map__12684__12686,"﷐'name");
var state__12689 = cljs.core.get.call(null,map__12684__12686,"﷐'state");

domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"name")),name__12688);
domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"again")),(cljs.core.truth_(exists__12687)?"again":""));
return one.sample.animation.show_greeting.call(null);
}));
one.dispatch.react_to.call(null,cljs.core.set(["﷐'state-change"]),(function (_,m){
return one.sample.view.render.call(null,m);
}));
/**
* Given a map of old and new form states, generate a map with `:id`,
* `:transition` and `:error` keys which can be passed to
* `render-form-field`.
*/
one.sample.view.form_fields_status = (function form_fields_status(m){
return cljs.core.map.call(null,(function (p1__12690_SHARP_){
return cljs.core.hash_map.call(null,"﷐'id",p1__12690_SHARP_,"﷐'transition",cljs.core.Vector.fromArray([(function (){var or__3548__auto____12691 = "﷐'status".call(null,p1__12690_SHARP_.call(null,"﷐'fields".call(null,"﷐'old".call(null,m))));

if(cljs.core.truth_(or__3548__auto____12691))
{return or__3548__auto____12691;
} else
{return "﷐'empty";
}
})(),"﷐'status".call(null,p1__12690_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))))]),"﷐'error","﷐'error".call(null,p1__12690_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m)))));
}),cljs.core.keys.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))));
});
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-change"]),(function (_,m){
var G__12692__12693 = cljs.core.seq.call(null,one.sample.view.form_fields_status.call(null,m));

if(cljs.core.truth_(G__12692__12693))
{var s__12694 = cljs.core.first.call(null,G__12692__12693);
var G__12692__12695 = G__12692__12693;

while(true){
one.sample.view.render_form_field.call(null,s__12694);
var temp__3698__auto____12696 = cljs.core.next.call(null,G__12692__12695);

if(cljs.core.truth_(temp__3698__auto____12696))
{var G__12692__12697 = temp__3698__auto____12696;

{
var G__12698 = cljs.core.first.call(null,G__12692__12697);
var G__12699 = G__12692__12697;
s__12694 = G__12698;
G__12692__12695 = G__12699;
continue;
}
} else
{}
break;
}
} else
{}
return one.sample.view.render_button.call(null,cljs.core.Vector.fromArray(["﷐'status".call(null,"﷐'old".call(null,m)),"﷐'status".call(null,"﷐'new".call(null,m))]));
}));
