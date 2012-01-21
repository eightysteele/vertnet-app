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
one.sample.view.render_button = (function (){var method_table__1524__auto____4782 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____4783 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____4784 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____4785 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____4786 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-button",cljs.core.identity,"﷐'default",hierarchy__1528__auto____4786,method_table__1524__auto____4782,prefer_table__1525__auto____4783,method_cache__1526__auto____4784,cached_hierarchy__1527__auto____4785));
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
one.sample.view.render_form_field = (function (){var method_table__1524__auto____4787 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____4788 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____4789 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____4790 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____4791 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-form-field","﷐'transition","﷐'default",hierarchy__1528__auto____4791,method_table__1524__auto____4787,prefer_table__1525__auto____4788,method_cache__1526__auto____4789,cached_hierarchy__1527__auto____4790));
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
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'empty","﷐'editing"]),(function (p__4792){
var map__4793__4794 = p__4792;
var map__4793__4795 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4793__4794))?cljs.core.apply.call(null,cljs.core.hash_map,map__4793__4794):map__4793__4794);
var id__4796 = cljs.core.get.call(null,map__4793__4795,"﷐'id");

return one.sample.animation.label_move_up.call(null,one.sample.view.label_xpath.call(null,id__4796));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'empty"]),(function (p__4797){
var map__4798__4799 = p__4797;
var map__4798__4800 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4798__4799))?cljs.core.apply.call(null,cljs.core.hash_map,map__4798__4799):map__4798__4799);
var id__4801 = cljs.core.get.call(null,map__4798__4800,"﷐'id");

return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__4801));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'valid"]),(function (p__4802){
var map__4803__4804 = p__4802;
var map__4803__4805 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4803__4804))?cljs.core.apply.call(null,cljs.core.hash_map,map__4803__4804):map__4803__4804);
var id__4806 = cljs.core.get.call(null,map__4803__4805,"﷐'id");

return one.sample.animation.label_fade_out.call(null,one.sample.view.label_xpath.call(null,id__4806));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'valid","﷐'editing-valid"]),(function (p__4807){
var map__4808__4809 = p__4807;
var map__4808__4810 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4808__4809))?cljs.core.apply.call(null,cljs.core.hash_map,map__4808__4809):map__4808__4809);
var id__4811 = cljs.core.get.call(null,map__4808__4810,"﷐'id");

return one.browser.animation.play.call(null,one.sample.view.label_xpath.call(null,id__4811),one.sample.animation.fade_in);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'error"]),(function (p__4812){
var map__4813__4814 = p__4812;
var map__4813__4815 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4813__4814))?cljs.core.apply.call(null,cljs.core.hash_map,map__4813__4814):map__4813__4814);
var error__4816 = cljs.core.get.call(null,map__4813__4815,"﷐'error");
var id__4817 = cljs.core.get.call(null,map__4813__4815,"﷐'id");

var error_element__4818 = domina.by_id.call(null,cljs.core.str.call(null,id__4817,"-error"));

domina.set_style_BANG_.call(null,error_element__4818,"opacity","0");
domina.set_html_BANG_.call(null,error_element__4818,error__4816);
return one.browser.animation.play.call(null,error_element__4818,one.sample.animation.fade_in);
}));
/**
* Accepts an id and an error message and fades the old error message
* out and the new one in.
*/
one.sample.view.swap_error_messages = (function swap_error_messages(id,error){
var error_element__4819 = domina.by_id.call(null,cljs.core.str.call(null,id,"-error"));

one.browser.animation.play.call(null,error_element__4819,one.sample.animation.fade_out,cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"fade out error"}));
return one.browser.animation.play.call(null,error_element__4819,one.sample.animation.fade_in,cljs.core.ObjMap.fromObject(["﷐'before"],{"﷐'before":(function (){
return domina.set_html_BANG_.call(null,error_element__4819,error);
})}));
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'error","﷐'editing-error"]),(function (p__4820){
var map__4821__4822 = p__4820;
var map__4821__4823 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4821__4822))?cljs.core.apply.call(null,cljs.core.hash_map,map__4821__4822):map__4821__4822);
var error__4824 = cljs.core.get.call(null,map__4821__4823,"﷐'error");
var id__4825 = cljs.core.get.call(null,map__4821__4823,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__4825,error__4824);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'error"]),(function (p__4826){
var map__4827__4828 = p__4826;
var map__4827__4829 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4827__4828))?cljs.core.apply.call(null,cljs.core.hash_map,map__4827__4828):map__4827__4828);
var error__4830 = cljs.core.get.call(null,map__4827__4829,"﷐'error");
var id__4831 = cljs.core.get.call(null,map__4827__4829,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__4831,error__4830);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'editing-valid"]),(function (p__4832){
var map__4833__4834 = p__4832;
var map__4833__4835 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4833__4834))?cljs.core.apply.call(null,cljs.core.hash_map,map__4833__4834):map__4833__4834);
var id__4836 = cljs.core.get.call(null,map__4833__4835,"﷐'id");

var error_element__4837 = domina.by_id.call(null,cljs.core.str.call(null,id__4836,"-error"));

return one.browser.animation.play.call(null,error_element__4837,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'empty"]),(function (p__4838){
var map__4839__4840 = p__4838;
var map__4839__4841 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4839__4840))?cljs.core.apply.call(null,cljs.core.hash_map,map__4839__4840):map__4839__4840);
var id__4842 = cljs.core.get.call(null,map__4839__4841,"﷐'id");

var error_element__4843 = domina.by_id.call(null,cljs.core.str.call(null,id__4842,"-error"));

one.browser.animation.play.call(null,error_element__4843,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__4842));
}));
/**
* Accepts a field-id and creates listeners for blur and focus events which will then fire
* `:field-changed` and `:editing-field` events.
*/
one.sample.view.add_input_event_listeners = (function add_input_event_listeners(field_id){
var field__4844 = domina.by_id.call(null,field_id);
var keyboard__4845 = (new goog.events.KeyHandler(domina.by_id.call(null,"form")));

clojure.browser.event.listen.call(null,field__4844,"blur",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished",field_id]),domina.value.call(null,field__4844));
}));
clojure.browser.event.listen.call(null,field__4844,"focus",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'editing-field",field_id]));
}));
clojure.browser.event.listen.call(null,field__4844,"keyup",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-changed",field_id]),domina.value.call(null,field__4844));
}));
return clojure.browser.event.listen.call(null,keyboard__4845,"key",(function (e){
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
one.sample.view.render = (function (){var method_table__1524__auto____4846 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____4847 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____4848 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____4849 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____4850 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'state","﷐'default",hierarchy__1528__auto____4850,method_table__1524__auto____4846,prefer_table__1525__auto____4847,method_cache__1526__auto____4848,cached_hierarchy__1527__auto____4849));
})();
cljs.core._add_method.call(null,one.sample.view.render,"﷐'init",(function (_){
one.sample.animation.initialize_views.call(null,"﷐'form".call(null,one.sample.view.snippets),"﷐'greeting".call(null,one.sample.view.snippets));
one.sample.view.add_input_event_listeners.call(null,"name-input");
return clojure.browser.event.listen.call(null,domina.by_id.call(null,"greet-button"),"click",(function (){
return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":domina.value.call(null,domina.by_id.call(null,"name-input"))}));
}));
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'form",(function (p__4851){
var map__4852__4853 = p__4851;
var map__4852__4854 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4852__4853))?cljs.core.apply.call(null,cljs.core.hash_map,map__4852__4853):map__4852__4853);
var name__4855 = cljs.core.get.call(null,map__4852__4854,"﷐'name");
var error__4856 = cljs.core.get.call(null,map__4852__4854,"﷐'error");
var state__4857 = cljs.core.get.call(null,map__4852__4854,"﷐'state");

one.sample.animation.show_form.call(null);
domina.set_value_BANG_.call(null,domina.by_id.call(null,"name-input"),"");
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished","name-input"]),"");
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'greeting",(function (p__4858){
var map__4859__4860 = p__4858;
var map__4859__4861 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4859__4860))?cljs.core.apply.call(null,cljs.core.hash_map,map__4859__4860):map__4859__4860);
var exists__4862 = cljs.core.get.call(null,map__4859__4861,"﷐'exists");
var name__4863 = cljs.core.get.call(null,map__4859__4861,"﷐'name");
var state__4864 = cljs.core.get.call(null,map__4859__4861,"﷐'state");

domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"name")),name__4863);
domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"again")),(cljs.core.truth_(exists__4862)?"again":""));
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
return cljs.core.map.call(null,(function (p1__4865_SHARP_){
return cljs.core.hash_map.call(null,"﷐'id",p1__4865_SHARP_,"﷐'transition",cljs.core.Vector.fromArray([(function (){var or__3548__auto____4866 = "﷐'status".call(null,p1__4865_SHARP_.call(null,"﷐'fields".call(null,"﷐'old".call(null,m))));

if(cljs.core.truth_(or__3548__auto____4866))
{return or__3548__auto____4866;
} else
{return "﷐'empty";
}
})(),"﷐'status".call(null,p1__4865_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))))]),"﷐'error","﷐'error".call(null,p1__4865_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m)))));
}),cljs.core.keys.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))));
});
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-change"]),(function (_,m){
var G__4867__4868 = cljs.core.seq.call(null,one.sample.view.form_fields_status.call(null,m));

if(cljs.core.truth_(G__4867__4868))
{var s__4869 = cljs.core.first.call(null,G__4867__4868);
var G__4867__4870 = G__4867__4868;

while(true){
one.sample.view.render_form_field.call(null,s__4869);
var temp__3698__auto____4871 = cljs.core.next.call(null,G__4867__4870);

if(cljs.core.truth_(temp__3698__auto____4871))
{var G__4867__4872 = temp__3698__auto____4871;

{
var G__4873 = cljs.core.first.call(null,G__4867__4872);
var G__4874 = G__4867__4872;
s__4869 = G__4873;
G__4867__4870 = G__4874;
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
