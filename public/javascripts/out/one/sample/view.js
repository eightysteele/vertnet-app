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
one.sample.view.snippets = cljs.core.ObjMap.fromObject(["﷐'form","﷐'greeting"],{"﷐'form":"<div id=\"form\">\n      <h1 id=\"header\">Form!</h1>\n      <div class=\"input\">\n        <label id=\"name-input-label\">\n          <span>Enter your name</span>\n          <input type=\"text\" size=\"30\" id=\"name-input\" />\n        </label>\n        <div class=\"small error\" id=\"name-input-error\"> </div>\n      </div>\n      <input value=\"Done!\" type=\"button\" class=\"button green\" id=\"greet-button\" />\n    </div>","﷐'greeting":"<div id=\"greeting\">\n      <h2>Internets</h2>\n      <div class=\"break\"></div>\n      <h3><span class=\"again\">again</span> <span class=\"name\">Person</span></h3>\n    </div>"});
/**
* Render the submit button based on the current state of the
* form. The button is disabled while the user is editing the form and
* becomes enabled when the form is complete.
*/
one.sample.view.render_button = (function (){var method_table__1524__auto____15135 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____15136 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____15137 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____15138 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____15139 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-button",cljs.core.identity,"﷐'default",hierarchy__1528__auto____15139,method_table__1524__auto____15135,prefer_table__1525__auto____15136,method_cache__1526__auto____15137,cached_hierarchy__1527__auto____15138));
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
one.sample.view.render_form_field = (function (){var method_table__1524__auto____15140 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____15141 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____15142 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____15143 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____15144 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-form-field","﷐'transition","﷐'default",hierarchy__1528__auto____15144,method_table__1524__auto____15140,prefer_table__1525__auto____15141,method_cache__1526__auto____15142,cached_hierarchy__1527__auto____15143));
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
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'empty","﷐'editing"]),(function (p__15145){
var map__15146__15147 = p__15145;
var map__15146__15148 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15146__15147))?cljs.core.apply.call(null,cljs.core.hash_map,map__15146__15147):map__15146__15147);
var id__15149 = cljs.core.get.call(null,map__15146__15148,"﷐'id");

return one.sample.animation.label_move_up.call(null,one.sample.view.label_xpath.call(null,id__15149));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'empty"]),(function (p__15150){
var map__15151__15152 = p__15150;
var map__15151__15153 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15151__15152))?cljs.core.apply.call(null,cljs.core.hash_map,map__15151__15152):map__15151__15152);
var id__15154 = cljs.core.get.call(null,map__15151__15153,"﷐'id");

return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__15154));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'valid"]),(function (p__15155){
var map__15156__15157 = p__15155;
var map__15156__15158 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15156__15157))?cljs.core.apply.call(null,cljs.core.hash_map,map__15156__15157):map__15156__15157);
var id__15159 = cljs.core.get.call(null,map__15156__15158,"﷐'id");

return one.sample.animation.label_fade_out.call(null,one.sample.view.label_xpath.call(null,id__15159));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'valid","﷐'editing-valid"]),(function (p__15160){
var map__15161__15162 = p__15160;
var map__15161__15163 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15161__15162))?cljs.core.apply.call(null,cljs.core.hash_map,map__15161__15162):map__15161__15162);
var id__15164 = cljs.core.get.call(null,map__15161__15163,"﷐'id");

return one.browser.animation.play.call(null,one.sample.view.label_xpath.call(null,id__15164),one.sample.animation.fade_in);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'error"]),(function (p__15165){
var map__15166__15167 = p__15165;
var map__15166__15168 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15166__15167))?cljs.core.apply.call(null,cljs.core.hash_map,map__15166__15167):map__15166__15167);
var error__15169 = cljs.core.get.call(null,map__15166__15168,"﷐'error");
var id__15170 = cljs.core.get.call(null,map__15166__15168,"﷐'id");

var error_element__15171 = domina.by_id.call(null,cljs.core.str.call(null,id__15170,"-error"));

domina.set_style_BANG_.call(null,error_element__15171,"opacity","0");
domina.set_html_BANG_.call(null,error_element__15171,error__15169);
return one.browser.animation.play.call(null,error_element__15171,one.sample.animation.fade_in);
}));
/**
* Accepts an id and an error message and fades the old error message
* out and the new one in.
*/
one.sample.view.swap_error_messages = (function swap_error_messages(id,error){
var error_element__15172 = domina.by_id.call(null,cljs.core.str.call(null,id,"-error"));

one.browser.animation.play.call(null,error_element__15172,one.sample.animation.fade_out,cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"fade out error"}));
return one.browser.animation.play.call(null,error_element__15172,one.sample.animation.fade_in,cljs.core.ObjMap.fromObject(["﷐'before"],{"﷐'before":(function (){
return domina.set_html_BANG_.call(null,error_element__15172,error);
})}));
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'error","﷐'editing-error"]),(function (p__15173){
var map__15174__15175 = p__15173;
var map__15174__15176 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15174__15175))?cljs.core.apply.call(null,cljs.core.hash_map,map__15174__15175):map__15174__15175);
var error__15177 = cljs.core.get.call(null,map__15174__15176,"﷐'error");
var id__15178 = cljs.core.get.call(null,map__15174__15176,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__15178,error__15177);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'error"]),(function (p__15179){
var map__15180__15181 = p__15179;
var map__15180__15182 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15180__15181))?cljs.core.apply.call(null,cljs.core.hash_map,map__15180__15181):map__15180__15181);
var error__15183 = cljs.core.get.call(null,map__15180__15182,"﷐'error");
var id__15184 = cljs.core.get.call(null,map__15180__15182,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__15184,error__15183);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'editing-valid"]),(function (p__15185){
var map__15186__15187 = p__15185;
var map__15186__15188 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15186__15187))?cljs.core.apply.call(null,cljs.core.hash_map,map__15186__15187):map__15186__15187);
var id__15189 = cljs.core.get.call(null,map__15186__15188,"﷐'id");

var error_element__15190 = domina.by_id.call(null,cljs.core.str.call(null,id__15189,"-error"));

return one.browser.animation.play.call(null,error_element__15190,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'empty"]),(function (p__15191){
var map__15192__15193 = p__15191;
var map__15192__15194 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15192__15193))?cljs.core.apply.call(null,cljs.core.hash_map,map__15192__15193):map__15192__15193);
var id__15195 = cljs.core.get.call(null,map__15192__15194,"﷐'id");

var error_element__15196 = domina.by_id.call(null,cljs.core.str.call(null,id__15195,"-error"));

one.browser.animation.play.call(null,error_element__15196,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__15195));
}));
/**
* Accepts a field-id and creates listeners for blur and focus events which will then fire
* `:field-changed` and `:editing-field` events.
*/
one.sample.view.add_input_event_listeners = (function add_input_event_listeners(field_id){
var field__15197 = domina.by_id.call(null,field_id);
var keyboard__15198 = (new goog.events.KeyHandler(domina.by_id.call(null,"form")));

clojure.browser.event.listen.call(null,field__15197,"blur",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished",field_id]),domina.value.call(null,field__15197));
}));
clojure.browser.event.listen.call(null,field__15197,"focus",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'editing-field",field_id]));
}));
clojure.browser.event.listen.call(null,field__15197,"keyup",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-changed",field_id]),domina.value.call(null,field__15197));
}));
return clojure.browser.event.listen.call(null,keyboard__15198,"key",(function (e){
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
one.sample.view.render = (function (){var method_table__1524__auto____15199 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____15200 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____15201 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____15202 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____15203 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'state","﷐'default",hierarchy__1528__auto____15203,method_table__1524__auto____15199,prefer_table__1525__auto____15200,method_cache__1526__auto____15201,cached_hierarchy__1527__auto____15202));
})();
cljs.core._add_method.call(null,one.sample.view.render,"﷐'init",(function (_){
one.sample.animation.initialize_views.call(null,"﷐'form".call(null,one.sample.view.snippets),"﷐'greeting".call(null,one.sample.view.snippets));
one.sample.view.add_input_event_listeners.call(null,"name-input");
return clojure.browser.event.listen.call(null,domina.by_id.call(null,"greet-button"),"click",(function (){
return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":domina.value.call(null,domina.by_id.call(null,"name-input"))}));
}));
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'form",(function (p__15204){
var map__15205__15206 = p__15204;
var map__15205__15207 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15205__15206))?cljs.core.apply.call(null,cljs.core.hash_map,map__15205__15206):map__15205__15206);
var name__15208 = cljs.core.get.call(null,map__15205__15207,"﷐'name");
var error__15209 = cljs.core.get.call(null,map__15205__15207,"﷐'error");
var state__15210 = cljs.core.get.call(null,map__15205__15207,"﷐'state");

one.sample.animation.show_form.call(null);
domina.set_value_BANG_.call(null,domina.by_id.call(null,"name-input"),"");
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished","name-input"]),"");
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'greeting",(function (p__15211){
var map__15212__15213 = p__15211;
var map__15212__15214 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15212__15213))?cljs.core.apply.call(null,cljs.core.hash_map,map__15212__15213):map__15212__15213);
var exists__15215 = cljs.core.get.call(null,map__15212__15214,"﷐'exists");
var name__15216 = cljs.core.get.call(null,map__15212__15214,"﷐'name");
var state__15217 = cljs.core.get.call(null,map__15212__15214,"﷐'state");

domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"name")),name__15216);
domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"again")),(cljs.core.truth_(exists__15215)?"again":""));
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
return cljs.core.map.call(null,(function (p1__15218_SHARP_){
return cljs.core.hash_map.call(null,"﷐'id",p1__15218_SHARP_,"﷐'transition",cljs.core.Vector.fromArray([(function (){var or__3548__auto____15219 = "﷐'status".call(null,p1__15218_SHARP_.call(null,"﷐'fields".call(null,"﷐'old".call(null,m))));

if(cljs.core.truth_(or__3548__auto____15219))
{return or__3548__auto____15219;
} else
{return "﷐'empty";
}
})(),"﷐'status".call(null,p1__15218_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))))]),"﷐'error","﷐'error".call(null,p1__15218_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m)))));
}),cljs.core.keys.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))));
});
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-change"]),(function (_,m){
var G__15220__15221 = cljs.core.seq.call(null,one.sample.view.form_fields_status.call(null,m));

if(cljs.core.truth_(G__15220__15221))
{var s__15222 = cljs.core.first.call(null,G__15220__15221);
var G__15220__15223 = G__15220__15221;

while(true){
one.sample.view.render_form_field.call(null,s__15222);
var temp__3698__auto____15224 = cljs.core.next.call(null,G__15220__15223);

if(cljs.core.truth_(temp__3698__auto____15224))
{var G__15220__15225 = temp__3698__auto____15224;

{
var G__15226 = cljs.core.first.call(null,G__15220__15225);
var G__15227 = G__15220__15225;
s__15222 = G__15226;
G__15220__15223 = G__15227;
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
