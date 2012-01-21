goog.provide('one.sample.controller');
goog.require('cljs.core');
goog.require('one.sample.model');
goog.require('one.browser.remote');
goog.require('cljs.reader');
goog.require('clojure.browser.event');
goog.require('one.dispatch');
goog.require('goog.uri.utils');
/**
* Accepts a map containing information about an action to perform.
* 
* Actions may cause state changes on the client or the server. This
* function dispatches on the value of the `:type` key and currently
* supports `:init`, `:form`, and `:greeting` actions.
* 
* The `:init` action will initialize the appliation's state.
* 
* The `:form` action will only update the status atom, setting its state
* to `:from`.
* 
* The `:greeting` action will send the entered name to the server and
* update the state to `:greeting` while adding `:name` and `:exists`
* values to the application's state.
*/
one.sample.controller.action = (function (){var method_table__1524__auto____5675 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5676 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5677 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5678 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5679 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","﷐'type","﷐'default",hierarchy__1528__auto____5679,method_table__1524__auto____5675,prefer_table__1525__auto____5676,method_cache__1526__auto____5677,cached_hierarchy__1527__auto____5678));
})();
cljs.core._add_method.call(null,one.sample.controller.action,"﷐'init",(function (_){
return cljs.core.reset_BANG_.call(null,one.sample.model.state,cljs.core.ObjMap.fromObject(["﷐'state"],{"﷐'state":"﷐'init"}));
}));
cljs.core._add_method.call(null,one.sample.controller.action,"﷐'form",(function (_){
if(cljs.core.truth_(cljs.core.set(["﷐'init","﷐'form"]).call(null,"﷐'state".call(null,cljs.core.deref.call(null,one.sample.model.state)))))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,one.sample.model.state,cljs.core.assoc,"﷐'state","﷐'form");
}
}));
/**
* Get the name of the host which served this script.
*/
one.sample.controller.host = (function host(){
return goog.uri.utils.getHost.call(null,window.location.toString(cljs.core.List.EMPTY));
});
/**
* Accepts a function id (an identifier for this request), data (the
* data to send to the server) and a callback function which will be
* called if the transmission is successful. Perform an Ajax `POST`
* request to the backend API which sends the passed data to the
* server.
* 
* A tranmission error will add an error message to the application's
* state.
*/
one.sample.controller.remote = (function remote(f,data,on_success){
return one.browser.remote.request.call(null,f,cljs.core.str.call(null,one.sample.controller.host.call(null),"/remote"),"﷐'method","POST","﷐'on-success",(function (p1__5680_SHARP_){
return on_success.call(null,cljs.reader.read_string.call(null,"﷐'body".call(null,p1__5680_SHARP_)));
}),"﷐'on-error",(function (){
return cljs.core.swap_BANG_.call(null,one.sample.model.state,cljs.core.assoc,"﷐'error","Error communicating with server.");
}),"﷐'content",cljs.core.str.call(null,"data=",cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["﷐'fn","﷐'args"],{"﷐'fn":f,"﷐'args":data}))));
});
/**
* This is the success callback function which will be called when a
* request is successful. Accepts a name and a map of response data.
* Sets the current state to `:greeting` and adds the `:name` and
* `:exists` values to the application's state.
*/
one.sample.controller.add_name_callback = (function add_name_callback(name,response){
return cljs.core.swap_BANG_.call(null,one.sample.model.state,(function (old){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,old,"﷐'state","﷐'greeting","﷐'name",name),"﷐'exists",cljs.core.boolean$.call(null,"﷐'exists".call(null,response)));
}));
});
cljs.core._add_method.call(null,one.sample.controller.action,"﷐'greeting",(function (p__5682){
var map__5683__5684 = p__5682;
var map__5683__5685 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5683__5684))?cljs.core.apply.call(null,cljs.core.hash_map,map__5683__5684):map__5683__5684);
var name__5686 = cljs.core.get.call(null,map__5683__5685,"﷐'name");

return one.sample.controller.remote.call(null,"﷐'add-name",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":name__5686}),(function (p1__5681_SHARP_){
return one.sample.controller.add_name_callback.call(null,name__5686,p1__5681_SHARP_);
}));
}));
one.dispatch.react_to.call(null,cljs.core.set(["﷐'init","﷐'form","﷐'greeting"]),(function (t,d){
return one.sample.controller.action.call(null,cljs.core.assoc.call(null,d,"﷐'type",t));
}));
