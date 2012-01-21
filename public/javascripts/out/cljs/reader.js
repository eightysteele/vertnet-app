goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9698 = reader;

if(cljs.core.truth_(and__3546__auto____9698))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9698;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9699 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9699))
{return or__3548__auto____9699;
} else
{var or__3548__auto____9700 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9700))
{return or__3548__auto____9700;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9701 = reader;

if(cljs.core.truth_(and__3546__auto____9701))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9701;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9702 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9702))
{return or__3548__auto____9702;
} else
{var or__3548__auto____9703 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9703))
{return or__3548__auto____9703;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__9704 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9704.buffer_atom))))
{var idx__9705 = cljs.core.deref.call(null,this__9704.index_atom);

cljs.core.swap_BANG_.call(null,this__9704.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9704.s,idx__9705);
} else
{var buf__9706 = cljs.core.deref.call(null,this__9704.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9704.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9706);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9707 = this;
return cljs.core.swap_BANG_.call(null,this__9707.buffer_atom,(function (p1__9697_SHARP_){
return cljs.core.cons.call(null,ch,p1__9697_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____9708 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9708))
{return or__3548__auto____9708;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____9709 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9709))
{return or__3548__auto____9709;
} else
{var and__3546__auto____9711 = (function (){var or__3548__auto____9710 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9710))
{return or__3548__auto____9710;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9711))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__9712 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__9712);
return next_ch__9712;
})());
} else
{return and__3546__auto____9711;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__9713){
var rdr = cljs.core.first(arglist__9713);
var msg = cljs.core.rest(arglist__9713);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____9714 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____9714))
{var and__3546__auto____9715 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____9715))
{var and__3546__auto____9716 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____9716))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____9716;
}
} else
{return and__3546__auto____9715;
}
} else
{return and__3546__auto____9714;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__9717 = (new goog.string.StringBuffer(initch));
var ch__9718 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9719 = cljs.core.nil_QMARK_.call(null,ch__9718);

if(cljs.core.truth_(or__3548__auto____9719))
{return or__3548__auto____9719;
} else
{var or__3548__auto____9720 = cljs.reader.whitespace_QMARK_.call(null,ch__9718);

if(cljs.core.truth_(or__3548__auto____9720))
{return or__3548__auto____9720;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__9718);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__9718);
return sb__9717.toString();
} else
{{
var G__9721 = (function (){sb__9717.append(ch__9718);
return sb__9717;
})();
var G__9722 = cljs.reader.read_char.call(null,rdr);
sb__9717 = G__9721;
ch__9718 = G__9722;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__9723 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____9724 = cljs.core._EQ_.call(null,ch__9723,"n");

if(cljs.core.truth_(or__3548__auto____9724))
{return or__3548__auto____9724;
} else
{var or__3548__auto____9725 = cljs.core._EQ_.call(null,ch__9723,"r");

if(cljs.core.truth_(or__3548__auto____9725))
{return or__3548__auto____9725;
} else
{return cljs.core.nil_QMARK_.call(null,ch__9723);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__9726 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__9727 = cljs.core.nth.call(null,groups__9726,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9728 = cljs.core.undefined_QMARK_.call(null,group3__9727);

if(cljs.core.truth_(or__3548__auto____9728))
{return or__3548__auto____9728;
} else
{return (group3__9727.length < 1);
}
})())))
{return 0;
} else
{var negate__9730 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__9726,1)))?-1:1);
var vec__9729__9731 = (cljs.core.truth_(cljs.core.nth.call(null,groups__9726,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__9726,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9726,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__9726,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9726,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__9726,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9726,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__9726,7),parseInt.call(null,cljs.core.nth.call(null,groups__9726,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__9732 = cljs.core.nth.call(null,vec__9729__9731,0,null);
var radix__9733 = cljs.core.nth.call(null,vec__9729__9731,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__9732)))
{return null;
} else
{return (negate__9730 * parseInt.call(null,n__9732,radix__9733));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9734 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9735 = cljs.core.nth.call(null,groups__9734,1);
var denominator__9736 = cljs.core.nth.call(null,groups__9734,2);

return (parseInt.call(null,numinator__9735) / parseInt.call(null,denominator__9736));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__9737 = cljs.reader.read_char.call(null,reader);
var mapresult__9738 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9737);

if(cljs.core.truth_(mapresult__9738))
{return mapresult__9738;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9739 = cljs.core._EQ_.call(null,"u",ch__9737);

if(cljs.core.truth_(or__3548__auto____9739))
{return or__3548__auto____9739;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9737);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9737);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9737);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9740 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9740)))
{{
var G__9741 = cljs.reader.read_char.call(null,rdr);
ch__9740 = G__9741;
continue;
}
} else
{return ch__9740;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9742 = cljs.core.Vector.fromArray([]);

while(true){
var ch__9743 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9743))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9743)))
{return a__9742;
} else
{var temp__3695__auto____9744 = cljs.core.get.call(null,cljs.reader.macros,ch__9743);

if(cljs.core.truth_(temp__3695__auto____9744))
{var macrofn__9745 = temp__3695__auto____9744;

var mret__9746 = macrofn__9745.call(null,rdr,ch__9743);

{
var G__9748 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9746,rdr))?a__9742:cljs.core.conj.call(null,a__9742,mret__9746));
a__9742 = G__9748;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9743);
var o__9747 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9749 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9747,rdr))?a__9742:cljs.core.conj.call(null,a__9742,o__9747));
a__9742 = G__9749;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__9750 = cljs.reader.read_char.call(null,rdr);
var dm__9751 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9750);

if(cljs.core.truth_(dm__9751))
{return dm__9751.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9750);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__9752 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9752))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9752);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9753 = (new goog.string.StringBuffer(initch));
var ch__9754 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9755 = cljs.core.nil_QMARK_.call(null,ch__9754);

if(cljs.core.truth_(or__3548__auto____9755))
{return or__3548__auto____9755;
} else
{var or__3548__auto____9756 = cljs.reader.whitespace_QMARK_.call(null,ch__9754);

if(cljs.core.truth_(or__3548__auto____9756))
{return or__3548__auto____9756;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9754);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9754);
var s__9757 = buffer__9753.toString();

var or__3548__auto____9758 = cljs.reader.match_number.call(null,s__9757);

if(cljs.core.truth_(or__3548__auto____9758))
{return or__3548__auto____9758;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9757,"]");
}
} else
{{
var G__9759 = (function (){buffer__9753.append(ch__9754);
return buffer__9753;
})();
var G__9760 = cljs.reader.read_char.call(null,reader);
buffer__9753 = G__9759;
ch__9754 = G__9760;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9761 = (new goog.string.StringBuffer());
var ch__9762 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__9762)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9762)))
{{
var G__9763 = (function (){buffer__9761.append(cljs.reader.escape_char.call(null,buffer__9761,reader));
return buffer__9761;
})();
var G__9764 = cljs.reader.read_char.call(null,reader);
buffer__9761 = G__9763;
ch__9762 = G__9764;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9762)))
{return buffer__9761.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__9765 = (function (){buffer__9761.append(ch__9762);
return buffer__9761;
})();
var G__9766 = cljs.reader.read_char.call(null,reader);
buffer__9761 = G__9765;
ch__9762 = G__9766;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__9767 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9767,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9767,0,token__9767.indexOf("/")),cljs.core.subs.call(null,(token__9767.indexOf("/") + 1),token__9767.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9767,cljs.core.symbol.call(null,token__9767));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9769 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9768__9770 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9769);
var token__9771 = cljs.core.nth.call(null,vec__9768__9770,0,null);
var ns__9772 = cljs.core.nth.call(null,vec__9768__9770,1,null);
var name__9773 = cljs.core.nth.call(null,vec__9768__9770,2,null);
var ns_QMARK___9775 = (function (){var and__3546__auto____9774 = cljs.core.not.call(null,cljs.core.undefined_QMARK_.call(null,ns__9772));

if(cljs.core.truth_(and__3546__auto____9774))
{return (ns__9772.length > 0);
} else
{return and__3546__auto____9774;
}
})();

if(cljs.core.truth_((function (){var or__3548__auto____9777 = (function (){var and__3546__auto____9776 = ns_QMARK___9775;

if(cljs.core.truth_(and__3546__auto____9776))
{return (ns__9772.substring((ns__9772.length - 2),ns__9772.length) === ":/");
} else
{return and__3546__auto____9776;
}
})();

if(cljs.core.truth_(or__3548__auto____9777))
{return or__3548__auto____9777;
} else
{var or__3548__auto____9778 = ((name__9773[(name__9773.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9778))
{return or__3548__auto____9778;
} else
{return cljs.core.not.call(null,(token__9771.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9771);
} else
{if(cljs.core.truth_(ns_QMARK___9775))
{return cljs.core.keyword.call(null,ns__9772.substring(0,ns__9772.indexOf("/")),name__9773);
} else
{return cljs.core.keyword.call(null,token__9771);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__9779 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9779)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9780 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__1405__auto____9781 = o__9780;

if(cljs.core.truth_((function (){var and__3546__auto____9782 = x__1405__auto____9781;

if(cljs.core.truth_(and__3546__auto____9782))
{var and__3546__auto____9783 = x__1405__auto____9781.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9783))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____9781));
} else
{return and__3546__auto____9783;
}
} else
{return and__3546__auto____9782;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__1405__auto____9781);
}
})()))
{return cljs.core.with_meta.call(null,o__9780,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9780),m__9779));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__9784 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__9784)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9784)))
{{
var G__9786 = reader;
var G__9787 = eof_is_error;
var G__9788 = sentinel;
var G__9789 = is_recursive;
reader = G__9786;
eof_is_error = G__9787;
sentinel = G__9788;
is_recursive = G__9789;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9784)))
{{
var G__9790 = cljs.reader.read_comment.call(null,reader,ch__9784);
var G__9791 = eof_is_error;
var G__9792 = sentinel;
var G__9793 = is_recursive;
reader = G__9790;
eof_is_error = G__9791;
sentinel = G__9792;
is_recursive = G__9793;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__9785 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9784))?cljs.reader.macros.call(null,ch__9784).call(null,reader,ch__9784):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9784))?cljs.reader.read_number.call(null,reader,ch__9784):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__9784):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9785,reader)))
{{
var G__9794 = reader;
var G__9795 = eof_is_error;
var G__9796 = sentinel;
var G__9797 = is_recursive;
reader = G__9794;
eof_is_error = G__9795;
sentinel = G__9796;
is_recursive = G__9797;
continue;
}
} else
{return res__9785;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__9798 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9798,true,null,false);
});
