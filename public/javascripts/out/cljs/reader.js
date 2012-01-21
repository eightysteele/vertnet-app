goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____6507 = reader;

if(cljs.core.truth_(and__3546__auto____6507))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____6507;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____6508 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____6508))
{return or__3548__auto____6508;
} else
{var or__3548__auto____6509 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____6509))
{return or__3548__auto____6509;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____6510 = reader;

if(cljs.core.truth_(and__3546__auto____6510))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____6510;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____6511 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____6511))
{return or__3548__auto____6511;
} else
{var or__3548__auto____6512 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____6512))
{return or__3548__auto____6512;
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
var this__6513 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__6513.buffer_atom))))
{var idx__6514 = cljs.core.deref.call(null,this__6513.index_atom);

cljs.core.swap_BANG_.call(null,this__6513.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__6513.s,idx__6514);
} else
{var buf__6515 = cljs.core.deref.call(null,this__6513.buffer_atom);

cljs.core.swap_BANG_.call(null,this__6513.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__6515);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__6516 = this;
return cljs.core.swap_BANG_.call(null,this__6516.buffer_atom,(function (p1__6506_SHARP_){
return cljs.core.cons.call(null,ch,p1__6506_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____6517 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____6517))
{return or__3548__auto____6517;
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
var or__3548__auto____6518 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____6518))
{return or__3548__auto____6518;
} else
{var and__3546__auto____6520 = (function (){var or__3548__auto____6519 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____6519))
{return or__3548__auto____6519;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____6520))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__6521 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__6521);
return next_ch__6521;
})());
} else
{return and__3546__auto____6520;
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
reader_error.cljs$lang$applyTo = (function (arglist__6522){
var rdr = cljs.core.first(arglist__6522);
var msg = cljs.core.rest(arglist__6522);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____6523 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____6523))
{var and__3546__auto____6524 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____6524))
{var and__3546__auto____6525 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____6525))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____6525;
}
} else
{return and__3546__auto____6524;
}
} else
{return and__3546__auto____6523;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__6526 = (new goog.string.StringBuffer(initch));
var ch__6527 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6528 = cljs.core.nil_QMARK_.call(null,ch__6527);

if(cljs.core.truth_(or__3548__auto____6528))
{return or__3548__auto____6528;
} else
{var or__3548__auto____6529 = cljs.reader.whitespace_QMARK_.call(null,ch__6527);

if(cljs.core.truth_(or__3548__auto____6529))
{return or__3548__auto____6529;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__6527);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__6527);
return sb__6526.toString();
} else
{{
var G__6530 = (function (){sb__6526.append(ch__6527);
return sb__6526;
})();
var G__6531 = cljs.reader.read_char.call(null,rdr);
sb__6526 = G__6530;
ch__6527 = G__6531;
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
var ch__6532 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____6533 = cljs.core._EQ_.call(null,ch__6532,"n");

if(cljs.core.truth_(or__3548__auto____6533))
{return or__3548__auto____6533;
} else
{var or__3548__auto____6534 = cljs.core._EQ_.call(null,ch__6532,"r");

if(cljs.core.truth_(or__3548__auto____6534))
{return or__3548__auto____6534;
} else
{return cljs.core.nil_QMARK_.call(null,ch__6532);
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
var groups__6535 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__6536 = cljs.core.nth.call(null,groups__6535,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____6537 = cljs.core.undefined_QMARK_.call(null,group3__6536);

if(cljs.core.truth_(or__3548__auto____6537))
{return or__3548__auto____6537;
} else
{return (group3__6536.length < 1);
}
})())))
{return 0;
} else
{var negate__6539 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__6535,1)))?-1:1);
var vec__6538__6540 = (cljs.core.truth_(cljs.core.nth.call(null,groups__6535,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6535,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__6535,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6535,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__6535,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6535,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__6535,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6535,7),parseInt.call(null,cljs.core.nth.call(null,groups__6535,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__6541 = cljs.core.nth.call(null,vec__6538__6540,0,null);
var radix__6542 = cljs.core.nth.call(null,vec__6538__6540,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__6541)))
{return null;
} else
{return (negate__6539 * parseInt.call(null,n__6541,radix__6542));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__6543 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__6544 = cljs.core.nth.call(null,groups__6543,1);
var denominator__6545 = cljs.core.nth.call(null,groups__6543,2);

return (parseInt.call(null,numinator__6544) / parseInt.call(null,denominator__6545));
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
var ch__6546 = cljs.reader.read_char.call(null,reader);
var mapresult__6547 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__6546);

if(cljs.core.truth_(mapresult__6547))
{return mapresult__6547;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____6548 = cljs.core._EQ_.call(null,"u",ch__6546);

if(cljs.core.truth_(or__3548__auto____6548))
{return or__3548__auto____6548;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__6546);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__6546);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__6546);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__6549 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__6549)))
{{
var G__6550 = cljs.reader.read_char.call(null,rdr);
ch__6549 = G__6550;
continue;
}
} else
{return ch__6549;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__6551 = cljs.core.Vector.fromArray([]);

while(true){
var ch__6552 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__6552))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__6552)))
{return a__6551;
} else
{var temp__3695__auto____6553 = cljs.core.get.call(null,cljs.reader.macros,ch__6552);

if(cljs.core.truth_(temp__3695__auto____6553))
{var macrofn__6554 = temp__3695__auto____6553;

var mret__6555 = macrofn__6554.call(null,rdr,ch__6552);

{
var G__6557 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__6555,rdr))?a__6551:cljs.core.conj.call(null,a__6551,mret__6555));
a__6551 = G__6557;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__6552);
var o__6556 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__6558 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__6556,rdr))?a__6551:cljs.core.conj.call(null,a__6551,o__6556));
a__6551 = G__6558;
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
var ch__6559 = cljs.reader.read_char.call(null,rdr);
var dm__6560 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__6559);

if(cljs.core.truth_(dm__6560))
{return dm__6560.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__6559);
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
var l__6561 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__6561))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__6561);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__6562 = (new goog.string.StringBuffer(initch));
var ch__6563 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6564 = cljs.core.nil_QMARK_.call(null,ch__6563);

if(cljs.core.truth_(or__3548__auto____6564))
{return or__3548__auto____6564;
} else
{var or__3548__auto____6565 = cljs.reader.whitespace_QMARK_.call(null,ch__6563);

if(cljs.core.truth_(or__3548__auto____6565))
{return or__3548__auto____6565;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__6563);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__6563);
var s__6566 = buffer__6562.toString();

var or__3548__auto____6567 = cljs.reader.match_number.call(null,s__6566);

if(cljs.core.truth_(or__3548__auto____6567))
{return or__3548__auto____6567;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__6566,"]");
}
} else
{{
var G__6568 = (function (){buffer__6562.append(ch__6563);
return buffer__6562;
})();
var G__6569 = cljs.reader.read_char.call(null,reader);
buffer__6562 = G__6568;
ch__6563 = G__6569;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__6570 = (new goog.string.StringBuffer());
var ch__6571 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__6571)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__6571)))
{{
var G__6572 = (function (){buffer__6570.append(cljs.reader.escape_char.call(null,buffer__6570,reader));
return buffer__6570;
})();
var G__6573 = cljs.reader.read_char.call(null,reader);
buffer__6570 = G__6572;
ch__6571 = G__6573;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__6571)))
{return buffer__6570.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__6574 = (function (){buffer__6570.append(ch__6571);
return buffer__6570;
})();
var G__6575 = cljs.reader.read_char.call(null,reader);
buffer__6570 = G__6574;
ch__6571 = G__6575;
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
var token__6576 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__6576,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__6576,0,token__6576.indexOf("/")),cljs.core.subs.call(null,(token__6576.indexOf("/") + 1),token__6576.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__6576,cljs.core.symbol.call(null,token__6576));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__6578 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__6577__6579 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__6578);
var token__6580 = cljs.core.nth.call(null,vec__6577__6579,0,null);
var ns__6581 = cljs.core.nth.call(null,vec__6577__6579,1,null);
var name__6582 = cljs.core.nth.call(null,vec__6577__6579,2,null);
var ns_QMARK___6584 = (function (){var and__3546__auto____6583 = cljs.core.not.call(null,cljs.core.undefined_QMARK_.call(null,ns__6581));

if(cljs.core.truth_(and__3546__auto____6583))
{return (ns__6581.length > 0);
} else
{return and__3546__auto____6583;
}
})();

if(cljs.core.truth_((function (){var or__3548__auto____6586 = (function (){var and__3546__auto____6585 = ns_QMARK___6584;

if(cljs.core.truth_(and__3546__auto____6585))
{return (ns__6581.substring((ns__6581.length - 2),ns__6581.length) === ":/");
} else
{return and__3546__auto____6585;
}
})();

if(cljs.core.truth_(or__3548__auto____6586))
{return or__3548__auto____6586;
} else
{var or__3548__auto____6587 = ((name__6582[(name__6582.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____6587))
{return or__3548__auto____6587;
} else
{return cljs.core.not.call(null,(token__6580.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__6580);
} else
{if(cljs.core.truth_(ns_QMARK___6584))
{return cljs.core.keyword.call(null,ns__6581.substring(0,ns__6581.indexOf("/")),name__6582);
} else
{return cljs.core.keyword.call(null,token__6580);
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
var m__6588 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__6588)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__6589 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__1405__auto____6590 = o__6589;

if(cljs.core.truth_((function (){var and__3546__auto____6591 = x__1405__auto____6590;

if(cljs.core.truth_(and__3546__auto____6591))
{var and__3546__auto____6592 = x__1405__auto____6590.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____6592))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____6590));
} else
{return and__3546__auto____6592;
}
} else
{return and__3546__auto____6591;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__1405__auto____6590);
}
})()))
{return cljs.core.with_meta.call(null,o__6589,cljs.core.merge.call(null,cljs.core.meta.call(null,o__6589),m__6588));
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
var ch__6593 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__6593)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__6593)))
{{
var G__6595 = reader;
var G__6596 = eof_is_error;
var G__6597 = sentinel;
var G__6598 = is_recursive;
reader = G__6595;
eof_is_error = G__6596;
sentinel = G__6597;
is_recursive = G__6598;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__6593)))
{{
var G__6599 = cljs.reader.read_comment.call(null,reader,ch__6593);
var G__6600 = eof_is_error;
var G__6601 = sentinel;
var G__6602 = is_recursive;
reader = G__6599;
eof_is_error = G__6600;
sentinel = G__6601;
is_recursive = G__6602;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__6594 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__6593))?cljs.reader.macros.call(null,ch__6593).call(null,reader,ch__6593):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__6593))?cljs.reader.read_number.call(null,reader,ch__6593):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__6593):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__6594,reader)))
{{
var G__6603 = reader;
var G__6604 = eof_is_error;
var G__6605 = sentinel;
var G__6606 = is_recursive;
reader = G__6603;
eof_is_error = G__6604;
sentinel = G__6605;
is_recursive = G__6606;
continue;
}
} else
{return res__6594;
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
var r__6607 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__6607,true,null,false);
});
