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
one.sample.view.render_button = (function (){var method_table__1524__auto____5582 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5583 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5584 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5585 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5586 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-button",cljs.core.identity,"﷐'default",hierarchy__1528__auto____5586,method_table__1524__auto____5582,prefer_table__1525__auto____5583,method_cache__1526__auto____5584,cached_hierarchy__1527__auto____5585));
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
one.sample.view.render_form_field = (function (){var method_table__1524__auto____5587 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5588 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5589 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5590 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5591 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-form-field","﷐'transition","﷐'default",hierarchy__1528__auto____5591,method_table__1524__auto____5587,prefer_table__1525__auto____5588,method_cache__1526__auto____5589,cached_hierarchy__1527__auto____5590));
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
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'empty","﷐'editing"]),(function (p__5592){
var map__5593__5594 = p__5592;
var map__5593__5595 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5593__5594))?cljs.core.apply.call(null,cljs.core.hash_map,map__5593__5594):map__5593__5594);
var id__5596 = cljs.core.get.call(null,map__5593__5595,"﷐'id");

return one.sample.animation.label_move_up.call(null,one.sample.view.label_xpath.call(null,id__5596));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'empty"]),(function (p__5597){
var map__5598__5599 = p__5597;
var map__5598__5600 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5598__5599))?cljs.core.apply.call(null,cljs.core.hash_map,map__5598__5599):map__5598__5599);
var id__5601 = cljs.core.get.call(null,map__5598__5600,"﷐'id");

return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__5601));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'valid"]),(function (p__5602){
var map__5603__5604 = p__5602;
var map__5603__5605 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5603__5604))?cljs.core.apply.call(null,cljs.core.hash_map,map__5603__5604):map__5603__5604);
var id__5606 = cljs.core.get.call(null,map__5603__5605,"﷐'id");

return one.sample.animation.label_fade_out.call(null,one.sample.view.label_xpath.call(null,id__5606));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'valid","﷐'editing-valid"]),(function (p__5607){
var map__5608__5609 = p__5607;
var map__5608__5610 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5608__5609))?cljs.core.apply.call(null,cljs.core.hash_map,map__5608__5609):map__5608__5609);
var id__5611 = cljs.core.get.call(null,map__5608__5610,"﷐'id");

return one.browser.animation.play.call(null,one.sample.view.label_xpath.call(null,id__5611),one.sample.animation.fade_in);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'error"]),(function (p__5612){
var map__5613__5614 = p__5612;
var map__5613__5615 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5613__5614))?cljs.core.apply.call(null,cljs.core.hash_map,map__5613__5614):map__5613__5614);
var error__5616 = cljs.core.get.call(null,map__5613__5615,"﷐'error");
var id__5617 = cljs.core.get.call(null,map__5613__5615,"﷐'id");

var error_element__5618 = domina.by_id.call(null,cljs.core.str.call(null,id__5617,"-error"));

domina.set_style_BANG_.call(null,error_element__5618,"opacity","0");
domina.set_html_BANG_.call(null,error_element__5618,error__5616);
return one.browser.animation.play.call(null,error_element__5618,one.sample.animation.fade_in);
}));
/**
* Accepts an id and an error message and fades the old error message
* out and the new one in.
*/
one.sample.view.swap_error_messages = (function swap_error_messages(id,error){
var error_element__5619 = domina.by_id.call(null,cljs.core.str.call(null,id,"-error"));

one.browser.animation.play.call(null,error_element__5619,one.sample.animation.fade_out,cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"fade out error"}));
return one.browser.animation.play.call(null,error_element__5619,one.sample.animation.fade_in,cljs.core.ObjMap.fromObject(["﷐'before"],{"﷐'before":(function (){
return domina.set_html_BANG_.call(null,error_element__5619,error);
})}));
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'error","﷐'editing-error"]),(function (p__5620){
var map__5621__5622 = p__5620;
var map__5621__5623 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5621__5622))?cljs.core.apply.call(null,cljs.core.hash_map,map__5621__5622):map__5621__5622);
var error__5624 = cljs.core.get.call(null,map__5621__5623,"﷐'error");
var id__5625 = cljs.core.get.call(null,map__5621__5623,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__5625,error__5624);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'error"]),(function (p__5626){
var map__5627__5628 = p__5626;
var map__5627__5629 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5627__5628))?cljs.core.apply.call(null,cljs.core.hash_map,map__5627__5628):map__5627__5628);
var error__5630 = cljs.core.get.call(null,map__5627__5629,"﷐'error");
var id__5631 = cljs.core.get.call(null,map__5627__5629,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__5631,error__5630);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'editing-valid"]),(function (p__5632){
var map__5633__5634 = p__5632;
var map__5633__5635 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5633__5634))?cljs.core.apply.call(null,cljs.core.hash_map,map__5633__5634):map__5633__5634);
var id__5636 = cljs.core.get.call(null,map__5633__5635,"﷐'id");

var error_element__5637 = domina.by_id.call(null,cljs.core.str.call(null,id__5636,"-error"));

return one.browser.animation.play.call(null,error_element__5637,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'empty"]),(function (p__5638){
var map__5639__5640 = p__5638;
var map__5639__5641 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5639__5640))?cljs.core.apply.call(null,cljs.core.hash_map,map__5639__5640):map__5639__5640);
var id__5642 = cljs.core.get.call(null,map__5639__5641,"﷐'id");

var error_element__5643 = domina.by_id.call(null,cljs.core.str.call(null,id__5642,"-error"));

one.browser.animation.play.call(null,error_element__5643,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__5642));
}));
/**
* Accepts a field-id and creates listeners for blur and focus events which will then fire
* `:field-changed` and `:editing-field` events.
*/
one.sample.view.add_input_event_listeners = (function add_input_event_listeners(field_id){
var field__5644 = domina.by_id.call(null,field_id);
var keyboard__5645 = (new goog.events.KeyHandler(domina.by_id.call(null,"form")));

clojure.browser.event.listen.call(null,field__5644,"blur",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished",field_id]),domina.value.call(null,field__5644));
}));
clojure.browser.event.listen.call(null,field__5644,"focus",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'editing-field",field_id]));
}));
clojure.browser.event.listen.call(null,field__5644,"keyup",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-changed",field_id]),domina.value.call(null,field__5644));
}));
return clojure.browser.event.listen.call(null,keyboard__5645,"key",(function (e){
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
one.sample.view.render = (function (){var method_table__1524__auto____5646 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5647 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5648 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5649 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5650 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'state","﷐'default",hierarchy__1528__auto____5650,method_table__1524__auto____5646,prefer_table__1525__auto____5647,method_cache__1526__auto____5648,cached_hierarchy__1527__auto____5649));
})();
cljs.core._add_method.call(null,one.sample.view.render,"﷐'init",(function (_){
one.sample.animation.initialize_views.call(null,"﷐'form".call(null,one.sample.view.snippets),"﷐'greeting".call(null,one.sample.view.snippets));
one.sample.view.add_input_event_listeners.call(null,"name-input");
return clojure.browser.event.listen.call(null,domina.by_id.call(null,"greet-button"),"click",(function (){
return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":domina.value.call(null,domina.by_id.call(null,"name-input"))}));
}));
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'form",(function (p__5651){
var map__5652__5653 = p__5651;
var map__5652__5654 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5652__5653))?cljs.core.apply.call(null,cljs.core.hash_map,map__5652__5653):map__5652__5653);
var name__5655 = cljs.core.get.call(null,map__5652__5654,"﷐'name");
var error__5656 = cljs.core.get.call(null,map__5652__5654,"﷐'error");
var state__5657 = cljs.core.get.call(null,map__5652__5654,"﷐'state");

one.sample.animation.show_form.call(null);
domina.set_value_BANG_.call(null,domina.by_id.call(null,"name-input"),"");
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished","name-input"]),"");
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'greeting",(function (p__5658){
var map__5659__5660 = p__5658;
var map__5659__5661 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5659__5660))?cljs.core.apply.call(null,cljs.core.hash_map,map__5659__5660):map__5659__5660);
var exists__5662 = cljs.core.get.call(null,map__5659__5661,"﷐'exists");
var name__5663 = cljs.core.get.call(null,map__5659__5661,"﷐'name");
var state__5664 = cljs.core.get.call(null,map__5659__5661,"﷐'state");

domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"name")),name__5663);
domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"again")),(cljs.core.truth_(exists__5662)?"again":""));
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
return cljs.core.map.call(null,(function (p1__5665_SHARP_){
return cljs.core.hash_map.call(null,"﷐'id",p1__5665_SHARP_,"﷐'transition",cljs.core.Vector.fromArray([(function (){var or__3548__auto____5666 = "﷐'status".call(null,p1__5665_SHARP_.call(null,"﷐'fields".call(null,"﷐'old".call(null,m))));

if(cljs.core.truth_(or__3548__auto____5666))
{return or__3548__auto____5666;
} else
{return "﷐'empty";
}
})(),"﷐'status".call(null,p1__5665_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))))]),"﷐'error","﷐'error".call(null,p1__5665_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m)))));
}),cljs.core.keys.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))));
});
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-change"]),(function (_,m){
var G__5667__5668 = cljs.core.seq.call(null,one.sample.view.form_fields_status.call(null,m));

if(cljs.core.truth_(G__5667__5668))
{var s__5669 = cljs.core.first.call(null,G__5667__5668);
var G__5667__5670 = G__5667__5668;

while(true){
one.sample.view.render_form_field.call(null,s__5669);
var temp__3698__auto____5671 = cljs.core.next.call(null,G__5667__5670);

if(cljs.core.truth_(temp__3698__auto____5671))
{var G__5667__5672 = temp__3698__auto____5671;

{
var G__5673 = cljs.core.first.call(null,G__5667__5672);
var G__5674 = G__5667__5672;
s__5669 = G__5673;
G__5667__5670 = G__5674;
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
