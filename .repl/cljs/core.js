goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____5419 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5419))
{return or__3548__auto____5419;
} else
{var or__3548__auto____5420 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5420))
{return or__3548__auto____5420;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5421 = coll;

if(cljs.core.truth_(and__3546__auto____5421))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5421;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5422 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5422))
{return or__3548__auto____5422;
} else
{var or__3548__auto____5423 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5423))
{return or__3548__auto____5423;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5424 = coll;

if(cljs.core.truth_(and__3546__auto____5424))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5424;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5425 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5425))
{return or__3548__auto____5425;
} else
{var or__3548__auto____5426 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5426))
{return or__3548__auto____5426;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____5427 = coll;

if(cljs.core.truth_(and__3546__auto____5427))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____5427;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____5428 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5428))
{return or__3548__auto____5428;
} else
{var or__3548__auto____5429 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____5429))
{return or__3548__auto____5429;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__5436 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____5430 = coll;

if(cljs.core.truth_(and__3546__auto____5430))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5430;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____5431 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5431))
{return or__3548__auto____5431;
} else
{var or__3548__auto____5432 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5432))
{return or__3548__auto____5432;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5437 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5433 = coll;

if(cljs.core.truth_(and__3546__auto____5433))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5433;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____5434 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5434))
{return or__3548__auto____5434;
} else
{var or__3548__auto____5435 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5435))
{return or__3548__auto____5435;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__5436.call(this,coll,n);
case  3 :
return _nth__5437.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5439 = coll;

if(cljs.core.truth_(and__3546__auto____5439))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____5439;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____5440 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5440))
{return or__3548__auto____5440;
} else
{var or__3548__auto____5441 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____5441))
{return or__3548__auto____5441;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5442 = coll;

if(cljs.core.truth_(and__3546__auto____5442))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____5442;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____5443 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5443))
{return or__3548__auto____5443;
} else
{var or__3548__auto____5444 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____5444))
{return or__3548__auto____5444;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__5451 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____5445 = o;

if(cljs.core.truth_(and__3546__auto____5445))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5445;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____5446 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5446))
{return or__3548__auto____5446;
} else
{var or__3548__auto____5447 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5447))
{return or__3548__auto____5447;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5452 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5448 = o;

if(cljs.core.truth_(and__3546__auto____5448))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5448;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____5449 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5449))
{return or__3548__auto____5449;
} else
{var or__3548__auto____5450 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5450))
{return or__3548__auto____5450;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__5451.call(this,o,k);
case  3 :
return _lookup__5452.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5454 = coll;

if(cljs.core.truth_(and__3546__auto____5454))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____5454;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____5455 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5455))
{return or__3548__auto____5455;
} else
{var or__3548__auto____5456 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5456))
{return or__3548__auto____5456;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____5457 = coll;

if(cljs.core.truth_(and__3546__auto____5457))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____5457;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____5458 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5458))
{return or__3548__auto____5458;
} else
{var or__3548__auto____5459 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____5459))
{return or__3548__auto____5459;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5460 = coll;

if(cljs.core.truth_(and__3546__auto____5460))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____5460;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____5461 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5461))
{return or__3548__auto____5461;
} else
{var or__3548__auto____5462 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____5462))
{return or__3548__auto____5462;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____5463 = coll;

if(cljs.core.truth_(and__3546__auto____5463))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____5463;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____5464 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5464))
{return or__3548__auto____5464;
} else
{var or__3548__auto____5465 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____5465))
{return or__3548__auto____5465;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5466 = coll;

if(cljs.core.truth_(and__3546__auto____5466))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____5466;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____5467 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5467))
{return or__3548__auto____5467;
} else
{var or__3548__auto____5468 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____5468))
{return or__3548__auto____5468;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5469 = coll;

if(cljs.core.truth_(and__3546__auto____5469))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____5469;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____5470 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5470))
{return or__3548__auto____5470;
} else
{var or__3548__auto____5471 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____5471))
{return or__3548__auto____5471;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____5472 = coll;

if(cljs.core.truth_(and__3546__auto____5472))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____5472;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____5473 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5473))
{return or__3548__auto____5473;
} else
{var or__3548__auto____5474 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____5474))
{return or__3548__auto____5474;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____5475 = o;

if(cljs.core.truth_(and__3546__auto____5475))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____5475;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____5476 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5476))
{return or__3548__auto____5476;
} else
{var or__3548__auto____5477 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____5477))
{return or__3548__auto____5477;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____5478 = o;

if(cljs.core.truth_(and__3546__auto____5478))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____5478;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____5479 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5479))
{return or__3548__auto____5479;
} else
{var or__3548__auto____5480 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____5480))
{return or__3548__auto____5480;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____5481 = o;

if(cljs.core.truth_(and__3546__auto____5481))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____5481;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____5482 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5482))
{return or__3548__auto____5482;
} else
{var or__3548__auto____5483 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____5483))
{return or__3548__auto____5483;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____5484 = o;

if(cljs.core.truth_(and__3546__auto____5484))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____5484;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____5485 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5485))
{return or__3548__auto____5485;
} else
{var or__3548__auto____5486 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____5486))
{return or__3548__auto____5486;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__5493 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____5487 = coll;

if(cljs.core.truth_(and__3546__auto____5487))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5487;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____5488 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5488))
{return or__3548__auto____5488;
} else
{var or__3548__auto____5489 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5489))
{return or__3548__auto____5489;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__5494 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____5490 = coll;

if(cljs.core.truth_(and__3546__auto____5490))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5490;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____5491 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5491))
{return or__3548__auto____5491;
} else
{var or__3548__auto____5492 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5492))
{return or__3548__auto____5492;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__5493.call(this,coll,f);
case  3 :
return _reduce__5494.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____5496 = o;

if(cljs.core.truth_(and__3546__auto____5496))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____5496;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____5497 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5497))
{return or__3548__auto____5497;
} else
{var or__3548__auto____5498 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____5498))
{return or__3548__auto____5498;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____5499 = o;

if(cljs.core.truth_(and__3546__auto____5499))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____5499;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____5500 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5500))
{return or__3548__auto____5500;
} else
{var or__3548__auto____5501 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____5501))
{return or__3548__auto____5501;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____5502 = o;

if(cljs.core.truth_(and__3546__auto____5502))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____5502;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____5503 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5503))
{return or__3548__auto____5503;
} else
{var or__3548__auto____5504 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____5504))
{return or__3548__auto____5504;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____5505 = o;

if(cljs.core.truth_(and__3546__auto____5505))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____5505;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____5506 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5506))
{return or__3548__auto____5506;
} else
{var or__3548__auto____5507 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____5507))
{return or__3548__auto____5507;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____5508 = d;

if(cljs.core.truth_(and__3546__auto____5508))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____5508;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____5509 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____5509))
{return or__3548__auto____5509;
} else
{var or__3548__auto____5510 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5510))
{return or__3548__auto____5510;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____5511 = this$;

if(cljs.core.truth_(and__3546__auto____5511))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____5511;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____5512 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5512))
{return or__3548__auto____5512;
} else
{var or__3548__auto____5513 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____5513))
{return or__3548__auto____5513;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____5514 = this$;

if(cljs.core.truth_(and__3546__auto____5514))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____5514;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____5515 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5515))
{return or__3548__auto____5515;
} else
{var or__3548__auto____5516 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5516))
{return or__3548__auto____5516;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____5517 = this$;

if(cljs.core.truth_(and__3546__auto____5517))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____5517;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____5518 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5518))
{return or__3548__auto____5518;
} else
{var or__3548__auto____5519 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5519))
{return or__3548__auto____5519;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__5520 = null;
var G__5520__5521 = (function (o,k){
return null;
});
var G__5520__5522 = (function (o,k,not_found){
return not_found;
});
G__5520 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5520__5521.call(this,o,k);
case  3 :
return G__5520__5522.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5520;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__5524 = null;
var G__5524__5525 = (function (_,f){
return f.call(null);
});
var G__5524__5526 = (function (_,f,start){
return start;
});
G__5524 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5524__5525.call(this,_,f);
case  3 :
return G__5524__5526.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5524;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__5528 = null;
var G__5528__5529 = (function (_,n){
return null;
});
var G__5528__5530 = (function (_,n,not_found){
return not_found;
});
G__5528 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5528__5529.call(this,_,n);
case  3 :
return G__5528__5530.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5528;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__5538 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5532 = cljs.core._nth.call(null,cicoll,0);
var n__5533 = 1;

while(true){
if(cljs.core.truth_((n__5533 < cljs.core._count.call(null,cicoll))))
{{
var G__5542 = f.call(null,val__5532,cljs.core._nth.call(null,cicoll,n__5533));
var G__5543 = (n__5533 + 1);
val__5532 = G__5542;
n__5533 = G__5543;
continue;
}
} else
{return val__5532;
}
break;
}
}
});
var ci_reduce__5539 = (function (cicoll,f,val){
var val__5534 = val;
var n__5535 = 0;

while(true){
if(cljs.core.truth_((n__5535 < cljs.core._count.call(null,cicoll))))
{{
var G__5544 = f.call(null,val__5534,cljs.core._nth.call(null,cicoll,n__5535));
var G__5545 = (n__5535 + 1);
val__5534 = G__5544;
n__5535 = G__5545;
continue;
}
} else
{return val__5534;
}
break;
}
});
var ci_reduce__5540 = (function (cicoll,f,val,idx){
var val__5536 = val;
var n__5537 = idx;

while(true){
if(cljs.core.truth_((n__5537 < cljs.core._count.call(null,cicoll))))
{{
var G__5546 = f.call(null,val__5536,cljs.core._nth.call(null,cicoll,n__5537));
var G__5547 = (n__5537 + 1);
val__5536 = G__5546;
n__5537 = G__5547;
continue;
}
} else
{return val__5536;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5538.call(this,cicoll,f);
case  3 :
return ci_reduce__5539.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5540.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5548 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5561 = null;
var G__5561__5562 = (function (coll,f){
var this__5549 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__5549.a[this__5549.i]),(this__5549.i + 1));
});
var G__5561__5563 = (function (coll,f,start){
var this__5550 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__5550.i);
});
G__5561 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5561__5562.call(this,coll,f);
case  3 :
return G__5561__5563.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5561;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5551 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5552 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5565 = null;
var G__5565__5566 = (function (coll,n){
var this__5553 = this;
var i__5554 = (n + this__5553.i);

if(cljs.core.truth_((i__5554 < this__5553.a.length)))
{return (this__5553.a[i__5554]);
} else
{return null;
}
});
var G__5565__5567 = (function (coll,n,not_found){
var this__5555 = this;
var i__5556 = (n + this__5555.i);

if(cljs.core.truth_((i__5556 < this__5555.a.length)))
{return (this__5555.a[i__5556]);
} else
{return not_found;
}
});
G__5565 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5565__5566.call(this,coll,n);
case  3 :
return G__5565__5567.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5565;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__5557 = this;
return (this__5557.a.length - this__5557.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5558 = this;
return (this__5558.a[this__5558.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5559 = this;
if(cljs.core.truth_(((this__5559.i + 1) < this__5559.a.length)))
{return (new cljs.core.IndexedSeq(this__5559.a,(this__5559.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5560 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__5569 = null;
var G__5569__5570 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5569__5571 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5569 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5569__5570.call(this,array,f);
case  3 :
return G__5569__5571.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5569;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5573 = null;
var G__5573__5574 = (function (array,k){
return (array[k]);
});
var G__5573__5575 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5573 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5573__5574.call(this,array,k);
case  3 :
return G__5573__5575.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5573;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5577 = null;
var G__5577__5578 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5577__5579 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5577 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5577__5578.call(this,array,n);
case  3 :
return G__5577__5579.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5577;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____5581 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5581))
{var s__5582 = temp__3698__auto____5581;

return cljs.core._first.call(null,s__5582);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__5583 = cljs.core.next.call(null,s);
s = G__5583;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__5584 = cljs.core.seq.call(null,x);
var n__5585 = 0;

while(true){
if(cljs.core.truth_(s__5584))
{{
var G__5586 = cljs.core.next.call(null,s__5584);
var G__5587 = (n__5585 + 1);
s__5584 = G__5586;
n__5585 = G__5587;
continue;
}
} else
{return n__5585;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__5588 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5589 = (function() { 
var G__5591__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5592 = conj.call(null,coll,x);
var G__5593 = cljs.core.first.call(null,xs);
var G__5594 = cljs.core.next.call(null,xs);
coll = G__5592;
x = G__5593;
xs = G__5594;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5591 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5591__delegate.call(this, coll, x, xs);
};
G__5591.cljs$lang$maxFixedArity = 2;
G__5591.cljs$lang$applyTo = (function (arglist__5595){
var coll = cljs.core.first(arglist__5595);
var x = cljs.core.first(cljs.core.next(arglist__5595));
var xs = cljs.core.rest(cljs.core.next(arglist__5595));
return G__5591__delegate.call(this, coll, x, xs);
});
return G__5591;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5588.call(this,coll,x);
default:
return conj__5589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5589.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__5596 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__5597 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5596.call(this,coll,n);
case  3 :
return nth__5597.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__5599 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5600 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5599.call(this,o,k);
case  3 :
return get__5600.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__5603 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5604 = (function() { 
var G__5606__delegate = function (coll,k,v,kvs){
while(true){
var ret__5602 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5607 = ret__5602;
var G__5608 = cljs.core.first.call(null,kvs);
var G__5609 = cljs.core.second.call(null,kvs);
var G__5610 = cljs.core.nnext.call(null,kvs);
coll = G__5607;
k = G__5608;
v = G__5609;
kvs = G__5610;
continue;
}
} else
{return ret__5602;
}
break;
}
};
var G__5606 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5606__delegate.call(this, coll, k, v, kvs);
};
G__5606.cljs$lang$maxFixedArity = 3;
G__5606.cljs$lang$applyTo = (function (arglist__5611){
var coll = cljs.core.first(arglist__5611);
var k = cljs.core.first(cljs.core.next(arglist__5611));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5611)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5611)));
return G__5606__delegate.call(this, coll, k, v, kvs);
});
return G__5606;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5603.call(this,coll,k,v);
default:
return assoc__5604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5604.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__5613 = (function (coll){
return coll;
});
var dissoc__5614 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5615 = (function() { 
var G__5617__delegate = function (coll,k,ks){
while(true){
var ret__5612 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5618 = ret__5612;
var G__5619 = cljs.core.first.call(null,ks);
var G__5620 = cljs.core.next.call(null,ks);
coll = G__5618;
k = G__5619;
ks = G__5620;
continue;
}
} else
{return ret__5612;
}
break;
}
};
var G__5617 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5617__delegate.call(this, coll, k, ks);
};
G__5617.cljs$lang$maxFixedArity = 2;
G__5617.cljs$lang$applyTo = (function (arglist__5621){
var coll = cljs.core.first(arglist__5621);
var k = cljs.core.first(cljs.core.next(arglist__5621));
var ks = cljs.core.rest(cljs.core.next(arglist__5621));
return G__5617__delegate.call(this, coll, k, ks);
});
return G__5617;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5613.call(this,coll);
case  2 :
return dissoc__5614.call(this,coll,k);
default:
return dissoc__5615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5615.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__1405__auto____5622 = o;

if(cljs.core.truth_((function (){var and__3546__auto____5623 = x__1405__auto____5622;

if(cljs.core.truth_(and__3546__auto____5623))
{var and__3546__auto____5624 = x__1405__auto____5622.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____5624))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5622));
} else
{return and__3546__auto____5624;
}
} else
{return and__3546__auto____5623;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__1405__auto____5622);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__5626 = (function (coll){
return coll;
});
var disj__5627 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5628 = (function() { 
var G__5630__delegate = function (coll,k,ks){
while(true){
var ret__5625 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5631 = ret__5625;
var G__5632 = cljs.core.first.call(null,ks);
var G__5633 = cljs.core.next.call(null,ks);
coll = G__5631;
k = G__5632;
ks = G__5633;
continue;
}
} else
{return ret__5625;
}
break;
}
};
var G__5630 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5630__delegate.call(this, coll, k, ks);
};
G__5630.cljs$lang$maxFixedArity = 2;
G__5630.cljs$lang$applyTo = (function (arglist__5634){
var coll = cljs.core.first(arglist__5634);
var k = cljs.core.first(cljs.core.next(arglist__5634));
var ks = cljs.core.rest(cljs.core.next(arglist__5634));
return G__5630__delegate.call(this, coll, k, ks);
});
return G__5630;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5626.call(this,coll);
case  2 :
return disj__5627.call(this,coll,k);
default:
return disj__5628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5628.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__1405__auto____5635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5636 = x__1405__auto____5635;

if(cljs.core.truth_(and__3546__auto____5636))
{var and__3546__auto____5637 = x__1405__auto____5635.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____5637))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5635));
} else
{return and__3546__auto____5637;
}
} else
{return and__3546__auto____5636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__1405__auto____5635);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__1405__auto____5638 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5639 = x__1405__auto____5638;

if(cljs.core.truth_(and__3546__auto____5639))
{var and__3546__auto____5640 = x__1405__auto____5638.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____5640))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5638));
} else
{return and__3546__auto____5640;
}
} else
{return and__3546__auto____5639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__1405__auto____5638);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__1405__auto____5641 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5642 = x__1405__auto____5641;

if(cljs.core.truth_(and__3546__auto____5642))
{var and__3546__auto____5643 = x__1405__auto____5641.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____5643))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5641));
} else
{return and__3546__auto____5643;
}
} else
{return and__3546__auto____5642;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__1405__auto____5641);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__1405__auto____5644 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5645 = x__1405__auto____5644;

if(cljs.core.truth_(and__3546__auto____5645))
{var and__3546__auto____5646 = x__1405__auto____5644.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____5646))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5644));
} else
{return and__3546__auto____5646;
}
} else
{return and__3546__auto____5645;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__1405__auto____5644);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__1405__auto____5647 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5648 = x__1405__auto____5647;

if(cljs.core.truth_(and__3546__auto____5648))
{var and__3546__auto____5649 = x__1405__auto____5647.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____5649))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5647));
} else
{return and__3546__auto____5649;
}
} else
{return and__3546__auto____5648;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__1405__auto____5647);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__1405__auto____5650 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5651 = x__1405__auto____5650;

if(cljs.core.truth_(and__3546__auto____5651))
{var and__3546__auto____5652 = x__1405__auto____5650.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____5652))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5650));
} else
{return and__3546__auto____5652;
}
} else
{return and__3546__auto____5651;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__1405__auto____5650);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__1405__auto____5653 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5654 = x__1405__auto____5653;

if(cljs.core.truth_(and__3546__auto____5654))
{var and__3546__auto____5655 = x__1405__auto____5653.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____5655))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5653));
} else
{return and__3546__auto____5655;
}
} else
{return and__3546__auto____5654;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__1405__auto____5653);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5656 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5656.push(key);
}));
return keys__5656;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__1405__auto____5657 = s;

if(cljs.core.truth_((function (){var and__3546__auto____5658 = x__1405__auto____5657;

if(cljs.core.truth_(and__3546__auto____5658))
{var and__3546__auto____5659 = x__1405__auto____5657.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____5659))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____5657));
} else
{return and__3546__auto____5659;
}
} else
{return and__3546__auto____5658;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__1405__auto____5657);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____5660 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5660))
{return cljs.core.not.call(null,(function (){var or__3548__auto____5661 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____5661))
{return or__3548__auto____5661;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____5660;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____5662 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5662))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____5662;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____5663 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5663))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____5663;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____5664 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____5664))
{return (n == n.toFixed());
} else
{return and__3546__auto____5664;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5665 = coll;

if(cljs.core.truth_(and__3546__auto____5665))
{var and__3546__auto____5666 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____5666))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____5666;
}
} else
{return and__3546__auto____5665;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___5671 = (function (x){
return true;
});
var distinct_QMARK___5672 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5673 = (function() { 
var G__5675__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5667 = cljs.core.set([y,x]);
var xs__5668 = more;

while(true){
var x__5669 = cljs.core.first.call(null,xs__5668);
var etc__5670 = cljs.core.next.call(null,xs__5668);

if(cljs.core.truth_(xs__5668))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5667,x__5669)))
{return false;
} else
{{
var G__5676 = cljs.core.conj.call(null,s__5667,x__5669);
var G__5677 = etc__5670;
s__5667 = G__5676;
xs__5668 = G__5677;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__5675 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5675__delegate.call(this, x, y, more);
};
G__5675.cljs$lang$maxFixedArity = 2;
G__5675.cljs$lang$applyTo = (function (arglist__5678){
var x = cljs.core.first(arglist__5678);
var y = cljs.core.first(cljs.core.next(arglist__5678));
var more = cljs.core.rest(cljs.core.next(arglist__5678));
return G__5675__delegate.call(this, x, y, more);
});
return G__5675;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5671.call(this,x);
case  2 :
return distinct_QMARK___5672.call(this,x,y);
default:
return distinct_QMARK___5673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5673.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__5679 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__5679)))
{return r__5679;
} else
{if(cljs.core.truth_(r__5679))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__5681 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__5682 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__5680 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__5680,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5680);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__5681.call(this,comp);
case  2 :
return sort__5682.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__5684 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__5685 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__5684.call(this,keyfn,comp);
case  3 :
return sort_by__5685.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__5687 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__5688 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__5687.call(this,f,val);
case  3 :
return reduce__5688.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__5694 = (function (f,coll){
var temp__3695__auto____5690 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____5690))
{var s__5691 = temp__3695__auto____5690;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5691),cljs.core.next.call(null,s__5691));
} else
{return f.call(null);
}
});
var seq_reduce__5695 = (function (f,val,coll){
var val__5692 = val;
var coll__5693 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__5693))
{{
var G__5697 = f.call(null,val__5692,cljs.core.first.call(null,coll__5693));
var G__5698 = cljs.core.next.call(null,coll__5693);
val__5692 = G__5697;
coll__5693 = G__5698;
continue;
}
} else
{return val__5692;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__5694.call(this,f,val);
case  3 :
return seq_reduce__5695.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__5699 = null;
var G__5699__5700 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__5699__5701 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__5699 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5699__5700.call(this,coll,f);
case  3 :
return G__5699__5701.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5699;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___5703 = (function (){
return 0;
});
var _PLUS___5704 = (function (x){
return x;
});
var _PLUS___5705 = (function (x,y){
return (x + y);
});
var _PLUS___5706 = (function() { 
var G__5708__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__5708 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5708__delegate.call(this, x, y, more);
};
G__5708.cljs$lang$maxFixedArity = 2;
G__5708.cljs$lang$applyTo = (function (arglist__5709){
var x = cljs.core.first(arglist__5709);
var y = cljs.core.first(cljs.core.next(arglist__5709));
var more = cljs.core.rest(cljs.core.next(arglist__5709));
return G__5708__delegate.call(this, x, y, more);
});
return G__5708;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___5703.call(this);
case  1 :
return _PLUS___5704.call(this,x);
case  2 :
return _PLUS___5705.call(this,x,y);
default:
return _PLUS___5706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___5706.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___5710 = (function (x){
return (- x);
});
var ___5711 = (function (x,y){
return (x - y);
});
var ___5712 = (function() { 
var G__5714__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__5714 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5714__delegate.call(this, x, y, more);
};
G__5714.cljs$lang$maxFixedArity = 2;
G__5714.cljs$lang$applyTo = (function (arglist__5715){
var x = cljs.core.first(arglist__5715);
var y = cljs.core.first(cljs.core.next(arglist__5715));
var more = cljs.core.rest(cljs.core.next(arglist__5715));
return G__5714__delegate.call(this, x, y, more);
});
return G__5714;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___5710.call(this,x);
case  2 :
return ___5711.call(this,x,y);
default:
return ___5712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___5712.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___5716 = (function (){
return 1;
});
var _STAR___5717 = (function (x){
return x;
});
var _STAR___5718 = (function (x,y){
return (x * y);
});
var _STAR___5719 = (function() { 
var G__5721__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__5721 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5721__delegate.call(this, x, y, more);
};
G__5721.cljs$lang$maxFixedArity = 2;
G__5721.cljs$lang$applyTo = (function (arglist__5722){
var x = cljs.core.first(arglist__5722);
var y = cljs.core.first(cljs.core.next(arglist__5722));
var more = cljs.core.rest(cljs.core.next(arglist__5722));
return G__5721__delegate.call(this, x, y, more);
});
return G__5721;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___5716.call(this);
case  1 :
return _STAR___5717.call(this,x);
case  2 :
return _STAR___5718.call(this,x,y);
default:
return _STAR___5719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___5719.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___5723 = (function (x){
return (1 / x);
});
var _SLASH___5724 = (function (x,y){
return (x / y);
});
var _SLASH___5725 = (function() { 
var G__5727__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5727 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5727__delegate.call(this, x, y, more);
};
G__5727.cljs$lang$maxFixedArity = 2;
G__5727.cljs$lang$applyTo = (function (arglist__5728){
var x = cljs.core.first(arglist__5728);
var y = cljs.core.first(cljs.core.next(arglist__5728));
var more = cljs.core.rest(cljs.core.next(arglist__5728));
return G__5727__delegate.call(this, x, y, more);
});
return G__5727;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___5723.call(this,x);
case  2 :
return _SLASH___5724.call(this,x,y);
default:
return _SLASH___5725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___5725.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___5729 = (function (x){
return true;
});
var _LT___5730 = (function (x,y){
return (x < y);
});
var _LT___5731 = (function() { 
var G__5733__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5734 = y;
var G__5735 = cljs.core.first.call(null,more);
var G__5736 = cljs.core.next.call(null,more);
x = G__5734;
y = G__5735;
more = G__5736;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5733 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5733__delegate.call(this, x, y, more);
};
G__5733.cljs$lang$maxFixedArity = 2;
G__5733.cljs$lang$applyTo = (function (arglist__5737){
var x = cljs.core.first(arglist__5737);
var y = cljs.core.first(cljs.core.next(arglist__5737));
var more = cljs.core.rest(cljs.core.next(arglist__5737));
return G__5733__delegate.call(this, x, y, more);
});
return G__5733;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___5729.call(this,x);
case  2 :
return _LT___5730.call(this,x,y);
default:
return _LT___5731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___5731.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___5738 = (function (x){
return true;
});
var _LT__EQ___5739 = (function (x,y){
return (x <= y);
});
var _LT__EQ___5740 = (function() { 
var G__5742__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5743 = y;
var G__5744 = cljs.core.first.call(null,more);
var G__5745 = cljs.core.next.call(null,more);
x = G__5743;
y = G__5744;
more = G__5745;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5742 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5742__delegate.call(this, x, y, more);
};
G__5742.cljs$lang$maxFixedArity = 2;
G__5742.cljs$lang$applyTo = (function (arglist__5746){
var x = cljs.core.first(arglist__5746);
var y = cljs.core.first(cljs.core.next(arglist__5746));
var more = cljs.core.rest(cljs.core.next(arglist__5746));
return G__5742__delegate.call(this, x, y, more);
});
return G__5742;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___5738.call(this,x);
case  2 :
return _LT__EQ___5739.call(this,x,y);
default:
return _LT__EQ___5740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___5740.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___5747 = (function (x){
return true;
});
var _GT___5748 = (function (x,y){
return (x > y);
});
var _GT___5749 = (function() { 
var G__5751__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5752 = y;
var G__5753 = cljs.core.first.call(null,more);
var G__5754 = cljs.core.next.call(null,more);
x = G__5752;
y = G__5753;
more = G__5754;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5751 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5751__delegate.call(this, x, y, more);
};
G__5751.cljs$lang$maxFixedArity = 2;
G__5751.cljs$lang$applyTo = (function (arglist__5755){
var x = cljs.core.first(arglist__5755);
var y = cljs.core.first(cljs.core.next(arglist__5755));
var more = cljs.core.rest(cljs.core.next(arglist__5755));
return G__5751__delegate.call(this, x, y, more);
});
return G__5751;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___5747.call(this,x);
case  2 :
return _GT___5748.call(this,x,y);
default:
return _GT___5749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___5749.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___5756 = (function (x){
return true;
});
var _GT__EQ___5757 = (function (x,y){
return (x >= y);
});
var _GT__EQ___5758 = (function() { 
var G__5760__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5761 = y;
var G__5762 = cljs.core.first.call(null,more);
var G__5763 = cljs.core.next.call(null,more);
x = G__5761;
y = G__5762;
more = G__5763;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5760 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5760__delegate.call(this, x, y, more);
};
G__5760.cljs$lang$maxFixedArity = 2;
G__5760.cljs$lang$applyTo = (function (arglist__5764){
var x = cljs.core.first(arglist__5764);
var y = cljs.core.first(cljs.core.next(arglist__5764));
var more = cljs.core.rest(cljs.core.next(arglist__5764));
return G__5760__delegate.call(this, x, y, more);
});
return G__5760;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___5756.call(this,x);
case  2 :
return _GT__EQ___5757.call(this,x,y);
default:
return _GT__EQ___5758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___5758.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__5765 = (function (x){
return x;
});
var max__5766 = (function (x,y){
return ((x > y) ? x : y);
});
var max__5767 = (function() { 
var G__5769__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__5769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5769__delegate.call(this, x, y, more);
};
G__5769.cljs$lang$maxFixedArity = 2;
G__5769.cljs$lang$applyTo = (function (arglist__5770){
var x = cljs.core.first(arglist__5770);
var y = cljs.core.first(cljs.core.next(arglist__5770));
var more = cljs.core.rest(cljs.core.next(arglist__5770));
return G__5769__delegate.call(this, x, y, more);
});
return G__5769;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__5765.call(this,x);
case  2 :
return max__5766.call(this,x,y);
default:
return max__5767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__5767.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__5771 = (function (x){
return x;
});
var min__5772 = (function (x,y){
return ((x < y) ? x : y);
});
var min__5773 = (function() { 
var G__5775__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__5775 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5775__delegate.call(this, x, y, more);
};
G__5775.cljs$lang$maxFixedArity = 2;
G__5775.cljs$lang$applyTo = (function (arglist__5776){
var x = cljs.core.first(arglist__5776);
var y = cljs.core.first(cljs.core.next(arglist__5776));
var more = cljs.core.rest(cljs.core.next(arglist__5776));
return G__5775__delegate.call(this, x, y, more);
});
return G__5775;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__5771.call(this,x);
case  2 :
return min__5772.call(this,x,y);
default:
return min__5773.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__5773.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__5777 = (n % d);

return cljs.core.fix.call(null,((n - rem__5777) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5778 = cljs.core.quot.call(null,n,d);

return (n - (d * q__5778));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5779 = (function (){
return Math.random.call(null);
});
var rand__5780 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5779.call(this);
case  1 :
return rand__5780.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___5782 = (function (x){
return true;
});
var _EQ__EQ___5783 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___5784 = (function() { 
var G__5786__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5787 = y;
var G__5788 = cljs.core.first.call(null,more);
var G__5789 = cljs.core.next.call(null,more);
x = G__5787;
y = G__5788;
more = G__5789;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5786 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5786__delegate.call(this, x, y, more);
};
G__5786.cljs$lang$maxFixedArity = 2;
G__5786.cljs$lang$applyTo = (function (arglist__5790){
var x = cljs.core.first(arglist__5790);
var y = cljs.core.first(cljs.core.next(arglist__5790));
var more = cljs.core.rest(cljs.core.next(arglist__5790));
return G__5786__delegate.call(this, x, y, more);
});
return G__5786;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___5782.call(this,x);
case  2 :
return _EQ__EQ___5783.call(this,x,y);
default:
return _EQ__EQ___5784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___5784.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__5791 = n;
var xs__5792 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5793 = xs__5792;

if(cljs.core.truth_(and__3546__auto____5793))
{return (n__5791 > 0);
} else
{return and__3546__auto____5793;
}
})()))
{{
var G__5794 = (n__5791 - 1);
var G__5795 = cljs.core.next.call(null,xs__5792);
n__5791 = G__5794;
xs__5792 = G__5795;
continue;
}
} else
{return xs__5792;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__5800 = null;
var G__5800__5801 = (function (coll,n){
var temp__3695__auto____5796 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5796))
{var xs__5797 = temp__3695__auto____5796;

return cljs.core.first.call(null,xs__5797);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__5800__5802 = (function (coll,n,not_found){
var temp__3695__auto____5798 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5798))
{var xs__5799 = temp__3695__auto____5798;

return cljs.core.first.call(null,xs__5799);
} else
{return not_found;
}
});
G__5800 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5800__5801.call(this,coll,n);
case  3 :
return G__5800__5802.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5800;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___5804 = (function (){
return "";
});
var str_STAR___5805 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___5806 = (function() { 
var G__5808__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5809 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__5810 = cljs.core.next.call(null,more);
sb = G__5809;
more = G__5810;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__5808 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5808__delegate.call(this, x, ys);
};
G__5808.cljs$lang$maxFixedArity = 1;
G__5808.cljs$lang$applyTo = (function (arglist__5811){
var x = cljs.core.first(arglist__5811);
var ys = cljs.core.rest(arglist__5811);
return G__5808__delegate.call(this, x, ys);
});
return G__5808;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___5804.call(this);
case  1 :
return str_STAR___5805.call(this,x);
default:
return str_STAR___5806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___5806.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__5812 = (function (){
return "";
});
var str__5813 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__5814 = (function() { 
var G__5816__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__5816 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5816__delegate.call(this, x, ys);
};
G__5816.cljs$lang$maxFixedArity = 1;
G__5816.cljs$lang$applyTo = (function (arglist__5817){
var x = cljs.core.first(arglist__5817);
var ys = cljs.core.rest(arglist__5817);
return G__5816__delegate.call(this, x, ys);
});
return G__5816;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__5812.call(this);
case  1 :
return str__5813.call(this,x);
default:
return str__5814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__5814.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__5818 = (function (s,start){
return s.substring(start);
});
var subs__5819 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__5818.call(this,s,start);
case  3 :
return subs__5819.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__5821 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__5822 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__5821.call(this,ns);
case  2 :
return symbol__5822.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__5824 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__5825 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__5824.call(this,ns);
case  2 :
return keyword__5825.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5827 = cljs.core.seq.call(null,x);
var ys__5828 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__5827)))
{return cljs.core.nil_QMARK_.call(null,ys__5828);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__5828)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5827),cljs.core.first.call(null,ys__5828))))
{{
var G__5829 = cljs.core.next.call(null,xs__5827);
var G__5830 = cljs.core.next.call(null,ys__5828);
xs__5827 = G__5829;
ys__5828 = G__5830;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__5831_SHARP_,p2__5832_SHARP_){
return cljs.core.hash_combine.call(null,p1__5831_SHARP_,cljs.core.hash.call(null,p2__5832_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__5833__5834 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__5833__5834))
{var G__5836__5838 = cljs.core.first.call(null,G__5833__5834);
var vec__5837__5839 = G__5836__5838;
var key_name__5840 = cljs.core.nth.call(null,vec__5837__5839,0,null);
var f__5841 = cljs.core.nth.call(null,vec__5837__5839,1,null);
var G__5833__5842 = G__5833__5834;

var G__5836__5843 = G__5836__5838;
var G__5833__5844 = G__5833__5842;

while(true){
var vec__5845__5846 = G__5836__5843;
var key_name__5847 = cljs.core.nth.call(null,vec__5845__5846,0,null);
var f__5848 = cljs.core.nth.call(null,vec__5845__5846,1,null);
var G__5833__5849 = G__5833__5844;

var str_name__5850 = cljs.core.name.call(null,key_name__5847);

obj[str_name__5850] = f__5848;
var temp__3698__auto____5851 = cljs.core.next.call(null,G__5833__5849);

if(cljs.core.truth_(temp__3698__auto____5851))
{var G__5833__5852 = temp__3698__auto____5851;

{
var G__5853 = cljs.core.first.call(null,G__5833__5852);
var G__5854 = G__5833__5852;
G__5836__5843 = G__5853;
G__5833__5844 = G__5854;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5855 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5856 = this;
return (new cljs.core.List(this__5856.meta,o,coll,(this__5856.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5857 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5858 = this;
return this__5858.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5859 = this;
return this__5859.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5860 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5861 = this;
return this__5861.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5862 = this;
return this__5862.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5863 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5864 = this;
return (new cljs.core.List(meta,this__5864.first,this__5864.rest,this__5864.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5865 = this;
return this__5865.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5866 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5867 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5868 = this;
return (new cljs.core.List(this__5868.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5869 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5870 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5871 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5872 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5873 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5874 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5875 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5876 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5877 = this;
return this__5877.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5878 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__5879){
var items = cljs.core.seq( arglist__5879 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5880 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5881 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5882 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5883 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5883.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5884 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5885 = this;
return this__5885.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5886 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__5886.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__5886.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5887 = this;
return this__5887.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5888 = this;
return (new cljs.core.Cons(meta,this__5888.first,this__5888.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__5889 = null;
var G__5889__5890 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5889__5891 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5889 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__5889__5890.call(this,string,f);
case  3 :
return G__5889__5891.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5889;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5893 = null;
var G__5893__5894 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5893__5895 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5893 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__5893__5894.call(this,string,k);
case  3 :
return G__5893__5895.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5893;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5897 = null;
var G__5897__5898 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__5897__5899 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5897 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__5897__5898.call(this,string,n);
case  3 :
return G__5897__5899.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5897;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__5901 = null;
var G__5901__5902 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__5901__5903 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__5901 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__5901__5902.call(this,_,coll);
case  3 :
return G__5901__5903.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5901;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__5905 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__5905;
} else
{lazy_seq.x = x__5905.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5906 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5907 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5908 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5909 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5909.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5910 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5911 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5912 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5913 = this;
return this__5913.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5914 = this;
return (new cljs.core.LazySeq(meta,this__5914.realized,this__5914.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5915 = cljs.core.array.call(null);

var s__5916 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5916)))
{ary__5915.push(cljs.core.first.call(null,s__5916));
{
var G__5917 = cljs.core.next.call(null,s__5916);
s__5916 = G__5917;
continue;
}
} else
{return ary__5915;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__5918 = s;
var i__5919 = n;
var sum__5920 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5921 = (i__5919 > 0);

if(cljs.core.truth_(and__3546__auto____5921))
{return cljs.core.seq.call(null,s__5918);
} else
{return and__3546__auto____5921;
}
})()))
{{
var G__5922 = cljs.core.next.call(null,s__5918);
var G__5923 = (i__5919 - 1);
var G__5924 = (sum__5920 + 1);
s__5918 = G__5922;
i__5919 = G__5923;
sum__5920 = G__5924;
continue;
}
} else
{return sum__5920;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__5928 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__5929 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__5930 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5925 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__5925))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5925),concat.call(null,cljs.core.rest.call(null,s__5925),y));
} else
{return y;
}
})));
});
var concat__5931 = (function() { 
var G__5933__delegate = function (x,y,zs){
var cat__5927 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5926 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__5926))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5926),cat.call(null,cljs.core.rest.call(null,xys__5926),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__5927.call(null,concat.call(null,x,y),zs);
};
var G__5933 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5933__delegate.call(this, x, y, zs);
};
G__5933.cljs$lang$maxFixedArity = 2;
G__5933.cljs$lang$applyTo = (function (arglist__5934){
var x = cljs.core.first(arglist__5934);
var y = cljs.core.first(cljs.core.next(arglist__5934));
var zs = cljs.core.rest(cljs.core.next(arglist__5934));
return G__5933__delegate.call(this, x, y, zs);
});
return G__5933;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__5928.call(this);
case  1 :
return concat__5929.call(this,x);
case  2 :
return concat__5930.call(this,x,y);
default:
return concat__5931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__5931.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___5935 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___5936 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___5937 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___5938 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5939 = (function() { 
var G__5941__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__5941 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5941__delegate.call(this, a, b, c, d, more);
};
G__5941.cljs$lang$maxFixedArity = 4;
G__5941.cljs$lang$applyTo = (function (arglist__5942){
var a = cljs.core.first(arglist__5942);
var b = cljs.core.first(cljs.core.next(arglist__5942));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5942)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5942))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5942))));
return G__5941__delegate.call(this, a, b, c, d, more);
});
return G__5941;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___5935.call(this,a);
case  2 :
return list_STAR___5936.call(this,a,b);
case  3 :
return list_STAR___5937.call(this,a,b,c);
case  4 :
return list_STAR___5938.call(this,a,b,c,d);
default:
return list_STAR___5939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5939.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__5952 = (function (f,args){
var fixed_arity__5943 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__5943 + 1)) <= fixed_arity__5943)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__5953 = (function (f,x,args){
var arglist__5944 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__5945 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5944,fixed_arity__5945) <= fixed_arity__5945)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5944));
} else
{return f.cljs$lang$applyTo(arglist__5944);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5944));
}
});
var apply__5954 = (function (f,x,y,args){
var arglist__5946 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__5947 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5946,fixed_arity__5947) <= fixed_arity__5947)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5946));
} else
{return f.cljs$lang$applyTo(arglist__5946);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5946));
}
});
var apply__5955 = (function (f,x,y,z,args){
var arglist__5948 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__5949 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5948,fixed_arity__5949) <= fixed_arity__5949)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5948));
} else
{return f.cljs$lang$applyTo(arglist__5948);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5948));
}
});
var apply__5956 = (function() { 
var G__5958__delegate = function (f,a,b,c,d,args){
var arglist__5950 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__5951 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5950,fixed_arity__5951) <= fixed_arity__5951)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5950));
} else
{return f.cljs$lang$applyTo(arglist__5950);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5950));
}
};
var G__5958 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5958__delegate.call(this, f, a, b, c, d, args);
};
G__5958.cljs$lang$maxFixedArity = 5;
G__5958.cljs$lang$applyTo = (function (arglist__5959){
var f = cljs.core.first(arglist__5959);
var a = cljs.core.first(cljs.core.next(arglist__5959));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5959)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5959))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5959)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5959)))));
return G__5958__delegate.call(this, f, a, b, c, d, args);
});
return G__5958;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__5952.call(this,f,a);
case  3 :
return apply__5953.call(this,f,a,b);
case  4 :
return apply__5954.call(this,f,a,b,c);
case  5 :
return apply__5955.call(this,f,a,b,c,d);
default:
return apply__5956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__5956.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__5960){
var obj = cljs.core.first(arglist__5960);
var f = cljs.core.first(cljs.core.next(arglist__5960));
var args = cljs.core.rest(cljs.core.next(arglist__5960));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___5961 = (function (x){
return false;
});
var not_EQ___5962 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___5963 = (function() { 
var G__5965__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__5965 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5965__delegate.call(this, x, y, more);
};
G__5965.cljs$lang$maxFixedArity = 2;
G__5965.cljs$lang$applyTo = (function (arglist__5966){
var x = cljs.core.first(arglist__5966);
var y = cljs.core.first(cljs.core.next(arglist__5966));
var more = cljs.core.rest(cljs.core.next(arglist__5966));
return G__5965__delegate.call(this, x, y, more);
});
return G__5965;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___5961.call(this,x);
case  2 :
return not_EQ___5962.call(this,x,y);
default:
return not_EQ___5963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___5963.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__5967 = pred;
var G__5968 = cljs.core.next.call(null,coll);
pred = G__5967;
coll = G__5968;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____5969 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____5969))
{return or__3548__auto____5969;
} else
{{
var G__5970 = pred;
var G__5971 = cljs.core.next.call(null,coll);
pred = G__5970;
coll = G__5971;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__5972 = null;
var G__5972__5973 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__5972__5974 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__5972__5975 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__5972__5976 = (function() { 
var G__5978__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__5978 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5978__delegate.call(this, x, y, zs);
};
G__5978.cljs$lang$maxFixedArity = 2;
G__5978.cljs$lang$applyTo = (function (arglist__5979){
var x = cljs.core.first(arglist__5979);
var y = cljs.core.first(cljs.core.next(arglist__5979));
var zs = cljs.core.rest(cljs.core.next(arglist__5979));
return G__5978__delegate.call(this, x, y, zs);
});
return G__5978;
})()
;
G__5972 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__5972__5973.call(this);
case  1 :
return G__5972__5974.call(this,x);
case  2 :
return G__5972__5975.call(this,x,y);
default:
return G__5972__5976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5972.cljs$lang$maxFixedArity = 2;
G__5972.cljs$lang$applyTo = G__5972__5976.cljs$lang$applyTo;
return G__5972;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__5980__delegate = function (args){
return x;
};
var G__5980 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5980__delegate.call(this, args);
};
G__5980.cljs$lang$maxFixedArity = 0;
G__5980.cljs$lang$applyTo = (function (arglist__5981){
var args = cljs.core.seq( arglist__5981 );;
return G__5980__delegate.call(this, args);
});
return G__5980;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__5985 = (function (){
return cljs.core.identity;
});
var comp__5986 = (function (f){
return f;
});
var comp__5987 = (function (f,g){
return (function() {
var G__5991 = null;
var G__5991__5992 = (function (){
return f.call(null,g.call(null));
});
var G__5991__5993 = (function (x){
return f.call(null,g.call(null,x));
});
var G__5991__5994 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__5991__5995 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__5991__5996 = (function() { 
var G__5998__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5998 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5998__delegate.call(this, x, y, z, args);
};
G__5998.cljs$lang$maxFixedArity = 3;
G__5998.cljs$lang$applyTo = (function (arglist__5999){
var x = cljs.core.first(arglist__5999);
var y = cljs.core.first(cljs.core.next(arglist__5999));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5999)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5999)));
return G__5998__delegate.call(this, x, y, z, args);
});
return G__5998;
})()
;
G__5991 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5991__5992.call(this);
case  1 :
return G__5991__5993.call(this,x);
case  2 :
return G__5991__5994.call(this,x,y);
case  3 :
return G__5991__5995.call(this,x,y,z);
default:
return G__5991__5996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5991.cljs$lang$maxFixedArity = 3;
G__5991.cljs$lang$applyTo = G__5991__5996.cljs$lang$applyTo;
return G__5991;
})()
});
var comp__5988 = (function (f,g,h){
return (function() {
var G__6000 = null;
var G__6000__6001 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__6000__6002 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__6000__6003 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__6000__6004 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__6000__6005 = (function() { 
var G__6007__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__6007 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6007__delegate.call(this, x, y, z, args);
};
G__6007.cljs$lang$maxFixedArity = 3;
G__6007.cljs$lang$applyTo = (function (arglist__6008){
var x = cljs.core.first(arglist__6008);
var y = cljs.core.first(cljs.core.next(arglist__6008));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6008)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6008)));
return G__6007__delegate.call(this, x, y, z, args);
});
return G__6007;
})()
;
G__6000 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6000__6001.call(this);
case  1 :
return G__6000__6002.call(this,x);
case  2 :
return G__6000__6003.call(this,x,y);
case  3 :
return G__6000__6004.call(this,x,y,z);
default:
return G__6000__6005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6000.cljs$lang$maxFixedArity = 3;
G__6000.cljs$lang$applyTo = G__6000__6005.cljs$lang$applyTo;
return G__6000;
})()
});
var comp__5989 = (function() { 
var G__6009__delegate = function (f1,f2,f3,fs){
var fs__5982 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__6010__delegate = function (args){
var ret__5983 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__5982),args);
var fs__5984 = cljs.core.next.call(null,fs__5982);

while(true){
if(cljs.core.truth_(fs__5984))
{{
var G__6011 = cljs.core.first.call(null,fs__5984).call(null,ret__5983);
var G__6012 = cljs.core.next.call(null,fs__5984);
ret__5983 = G__6011;
fs__5984 = G__6012;
continue;
}
} else
{return ret__5983;
}
break;
}
};
var G__6010 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6010__delegate.call(this, args);
};
G__6010.cljs$lang$maxFixedArity = 0;
G__6010.cljs$lang$applyTo = (function (arglist__6013){
var args = cljs.core.seq( arglist__6013 );;
return G__6010__delegate.call(this, args);
});
return G__6010;
})()
;
};
var G__6009 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6009__delegate.call(this, f1, f2, f3, fs);
};
G__6009.cljs$lang$maxFixedArity = 3;
G__6009.cljs$lang$applyTo = (function (arglist__6014){
var f1 = cljs.core.first(arglist__6014);
var f2 = cljs.core.first(cljs.core.next(arglist__6014));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6014)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6014)));
return G__6009__delegate.call(this, f1, f2, f3, fs);
});
return G__6009;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__5985.call(this);
case  1 :
return comp__5986.call(this,f1);
case  2 :
return comp__5987.call(this,f1,f2);
case  3 :
return comp__5988.call(this,f1,f2,f3);
default:
return comp__5989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__5989.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__6015 = (function (f,arg1){
return (function() { 
var G__6020__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__6020 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6020__delegate.call(this, args);
};
G__6020.cljs$lang$maxFixedArity = 0;
G__6020.cljs$lang$applyTo = (function (arglist__6021){
var args = cljs.core.seq( arglist__6021 );;
return G__6020__delegate.call(this, args);
});
return G__6020;
})()
;
});
var partial__6016 = (function (f,arg1,arg2){
return (function() { 
var G__6022__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__6022 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6022__delegate.call(this, args);
};
G__6022.cljs$lang$maxFixedArity = 0;
G__6022.cljs$lang$applyTo = (function (arglist__6023){
var args = cljs.core.seq( arglist__6023 );;
return G__6022__delegate.call(this, args);
});
return G__6022;
})()
;
});
var partial__6017 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__6024__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__6024 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6024__delegate.call(this, args);
};
G__6024.cljs$lang$maxFixedArity = 0;
G__6024.cljs$lang$applyTo = (function (arglist__6025){
var args = cljs.core.seq( arglist__6025 );;
return G__6024__delegate.call(this, args);
});
return G__6024;
})()
;
});
var partial__6018 = (function() { 
var G__6026__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__6027__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__6027 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6027__delegate.call(this, args);
};
G__6027.cljs$lang$maxFixedArity = 0;
G__6027.cljs$lang$applyTo = (function (arglist__6028){
var args = cljs.core.seq( arglist__6028 );;
return G__6027__delegate.call(this, args);
});
return G__6027;
})()
;
};
var G__6026 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6026__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__6026.cljs$lang$maxFixedArity = 4;
G__6026.cljs$lang$applyTo = (function (arglist__6029){
var f = cljs.core.first(arglist__6029);
var arg1 = cljs.core.first(cljs.core.next(arglist__6029));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6029)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6029))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6029))));
return G__6026__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__6026;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__6015.call(this,f,arg1);
case  3 :
return partial__6016.call(this,f,arg1,arg2);
case  4 :
return partial__6017.call(this,f,arg1,arg2,arg3);
default:
return partial__6018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__6018.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__6030 = (function (f,x){
return (function() {
var G__6034 = null;
var G__6034__6035 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__6034__6036 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__6034__6037 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__6034__6038 = (function() { 
var G__6040__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__6040 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6040__delegate.call(this, a, b, c, ds);
};
G__6040.cljs$lang$maxFixedArity = 3;
G__6040.cljs$lang$applyTo = (function (arglist__6041){
var a = cljs.core.first(arglist__6041);
var b = cljs.core.first(cljs.core.next(arglist__6041));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6041)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6041)));
return G__6040__delegate.call(this, a, b, c, ds);
});
return G__6040;
})()
;
G__6034 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__6034__6035.call(this,a);
case  2 :
return G__6034__6036.call(this,a,b);
case  3 :
return G__6034__6037.call(this,a,b,c);
default:
return G__6034__6038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6034.cljs$lang$maxFixedArity = 3;
G__6034.cljs$lang$applyTo = G__6034__6038.cljs$lang$applyTo;
return G__6034;
})()
});
var fnil__6031 = (function (f,x,y){
return (function() {
var G__6042 = null;
var G__6042__6043 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__6042__6044 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__6042__6045 = (function() { 
var G__6047__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__6047 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6047__delegate.call(this, a, b, c, ds);
};
G__6047.cljs$lang$maxFixedArity = 3;
G__6047.cljs$lang$applyTo = (function (arglist__6048){
var a = cljs.core.first(arglist__6048);
var b = cljs.core.first(cljs.core.next(arglist__6048));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6048)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6048)));
return G__6047__delegate.call(this, a, b, c, ds);
});
return G__6047;
})()
;
G__6042 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6042__6043.call(this,a,b);
case  3 :
return G__6042__6044.call(this,a,b,c);
default:
return G__6042__6045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6042.cljs$lang$maxFixedArity = 3;
G__6042.cljs$lang$applyTo = G__6042__6045.cljs$lang$applyTo;
return G__6042;
})()
});
var fnil__6032 = (function (f,x,y,z){
return (function() {
var G__6049 = null;
var G__6049__6050 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__6049__6051 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__6049__6052 = (function() { 
var G__6054__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__6054 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6054__delegate.call(this, a, b, c, ds);
};
G__6054.cljs$lang$maxFixedArity = 3;
G__6054.cljs$lang$applyTo = (function (arglist__6055){
var a = cljs.core.first(arglist__6055);
var b = cljs.core.first(cljs.core.next(arglist__6055));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6055)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6055)));
return G__6054__delegate.call(this, a, b, c, ds);
});
return G__6054;
})()
;
G__6049 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6049__6050.call(this,a,b);
case  3 :
return G__6049__6051.call(this,a,b,c);
default:
return G__6049__6052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6049.cljs$lang$maxFixedArity = 3;
G__6049.cljs$lang$applyTo = G__6049__6052.cljs$lang$applyTo;
return G__6049;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__6030.call(this,f,x);
case  3 :
return fnil__6031.call(this,f,x,y);
case  4 :
return fnil__6032.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__6058 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6056))
{var s__6057 = temp__3698__auto____6056;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__6057)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6057)));
} else
{return null;
}
})));
});

return mapi__6058.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6059 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6059))
{var s__6060 = temp__3698__auto____6059;

var x__6061 = f.call(null,cljs.core.first.call(null,s__6060));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__6061)))
{return keep.call(null,f,cljs.core.rest.call(null,s__6060));
} else
{return cljs.core.cons.call(null,x__6061,keep.call(null,f,cljs.core.rest.call(null,s__6060)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__6071 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6068 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6068))
{var s__6069 = temp__3698__auto____6068;

var x__6070 = f.call(null,idx,cljs.core.first.call(null,s__6069));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__6070)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6069));
} else
{return cljs.core.cons.call(null,x__6070,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6069)));
}
} else
{return null;
}
})));
});

return keepi__6071.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__6116 = (function (p){
return (function() {
var ep1 = null;
var ep1__6121 = (function (){
return true;
});
var ep1__6122 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__6123 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6078 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____6078))
{return p.call(null,y);
} else
{return and__3546__auto____6078;
}
})());
});
var ep1__6124 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6079 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____6079))
{var and__3546__auto____6080 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____6080))
{return p.call(null,z);
} else
{return and__3546__auto____6080;
}
} else
{return and__3546__auto____6079;
}
})());
});
var ep1__6125 = (function() { 
var G__6127__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6081 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6081))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____6081;
}
})());
};
var G__6127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6127__delegate.call(this, x, y, z, args);
};
G__6127.cljs$lang$maxFixedArity = 3;
G__6127.cljs$lang$applyTo = (function (arglist__6128){
var x = cljs.core.first(arglist__6128);
var y = cljs.core.first(cljs.core.next(arglist__6128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6128)));
return G__6127__delegate.call(this, x, y, z, args);
});
return G__6127;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__6121.call(this);
case  1 :
return ep1__6122.call(this,x);
case  2 :
return ep1__6123.call(this,x,y);
case  3 :
return ep1__6124.call(this,x,y,z);
default:
return ep1__6125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__6125.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__6117 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__6129 = (function (){
return true;
});
var ep2__6130 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6082 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6082))
{return p2.call(null,x);
} else
{return and__3546__auto____6082;
}
})());
});
var ep2__6131 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6083 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6083))
{var and__3546__auto____6084 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6084))
{var and__3546__auto____6085 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6085))
{return p2.call(null,y);
} else
{return and__3546__auto____6085;
}
} else
{return and__3546__auto____6084;
}
} else
{return and__3546__auto____6083;
}
})());
});
var ep2__6132 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6086 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6086))
{var and__3546__auto____6087 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6087))
{var and__3546__auto____6088 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____6088))
{var and__3546__auto____6089 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6089))
{var and__3546__auto____6090 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6090))
{return p2.call(null,z);
} else
{return and__3546__auto____6090;
}
} else
{return and__3546__auto____6089;
}
} else
{return and__3546__auto____6088;
}
} else
{return and__3546__auto____6087;
}
} else
{return and__3546__auto____6086;
}
})());
});
var ep2__6133 = (function() { 
var G__6135__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6091 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6091))
{return cljs.core.every_QMARK_.call(null,(function (p1__6062_SHARP_){
var and__3546__auto____6092 = p1.call(null,p1__6062_SHARP_);

if(cljs.core.truth_(and__3546__auto____6092))
{return p2.call(null,p1__6062_SHARP_);
} else
{return and__3546__auto____6092;
}
}),args);
} else
{return and__3546__auto____6091;
}
})());
};
var G__6135 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6135__delegate.call(this, x, y, z, args);
};
G__6135.cljs$lang$maxFixedArity = 3;
G__6135.cljs$lang$applyTo = (function (arglist__6136){
var x = cljs.core.first(arglist__6136);
var y = cljs.core.first(cljs.core.next(arglist__6136));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6136)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6136)));
return G__6135__delegate.call(this, x, y, z, args);
});
return G__6135;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__6129.call(this);
case  1 :
return ep2__6130.call(this,x);
case  2 :
return ep2__6131.call(this,x,y);
case  3 :
return ep2__6132.call(this,x,y,z);
default:
return ep2__6133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__6133.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__6118 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__6137 = (function (){
return true;
});
var ep3__6138 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6093 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6093))
{var and__3546__auto____6094 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6094))
{return p3.call(null,x);
} else
{return and__3546__auto____6094;
}
} else
{return and__3546__auto____6093;
}
})());
});
var ep3__6139 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6095 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6095))
{var and__3546__auto____6096 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6096))
{var and__3546__auto____6097 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____6097))
{var and__3546__auto____6098 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6098))
{var and__3546__auto____6099 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6099))
{return p3.call(null,y);
} else
{return and__3546__auto____6099;
}
} else
{return and__3546__auto____6098;
}
} else
{return and__3546__auto____6097;
}
} else
{return and__3546__auto____6096;
}
} else
{return and__3546__auto____6095;
}
})());
});
var ep3__6140 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6100 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6100))
{var and__3546__auto____6101 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6101))
{var and__3546__auto____6102 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____6102))
{var and__3546__auto____6103 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6103))
{var and__3546__auto____6104 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6104))
{var and__3546__auto____6105 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____6105))
{var and__3546__auto____6106 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____6106))
{var and__3546__auto____6107 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____6107))
{return p3.call(null,z);
} else
{return and__3546__auto____6107;
}
} else
{return and__3546__auto____6106;
}
} else
{return and__3546__auto____6105;
}
} else
{return and__3546__auto____6104;
}
} else
{return and__3546__auto____6103;
}
} else
{return and__3546__auto____6102;
}
} else
{return and__3546__auto____6101;
}
} else
{return and__3546__auto____6100;
}
})());
});
var ep3__6141 = (function() { 
var G__6143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6108 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6108))
{return cljs.core.every_QMARK_.call(null,(function (p1__6063_SHARP_){
var and__3546__auto____6109 = p1.call(null,p1__6063_SHARP_);

if(cljs.core.truth_(and__3546__auto____6109))
{var and__3546__auto____6110 = p2.call(null,p1__6063_SHARP_);

if(cljs.core.truth_(and__3546__auto____6110))
{return p3.call(null,p1__6063_SHARP_);
} else
{return and__3546__auto____6110;
}
} else
{return and__3546__auto____6109;
}
}),args);
} else
{return and__3546__auto____6108;
}
})());
};
var G__6143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6143__delegate.call(this, x, y, z, args);
};
G__6143.cljs$lang$maxFixedArity = 3;
G__6143.cljs$lang$applyTo = (function (arglist__6144){
var x = cljs.core.first(arglist__6144);
var y = cljs.core.first(cljs.core.next(arglist__6144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6144)));
return G__6143__delegate.call(this, x, y, z, args);
});
return G__6143;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__6137.call(this);
case  1 :
return ep3__6138.call(this,x);
case  2 :
return ep3__6139.call(this,x,y);
case  3 :
return ep3__6140.call(this,x,y,z);
default:
return ep3__6141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__6141.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__6119 = (function() { 
var G__6145__delegate = function (p1,p2,p3,ps){
var ps__6111 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__6146 = (function (){
return true;
});
var epn__6147 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__6064_SHARP_){
return p1__6064_SHARP_.call(null,x);
}),ps__6111);
});
var epn__6148 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__6065_SHARP_){
var and__3546__auto____6112 = p1__6065_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____6112))
{return p1__6065_SHARP_.call(null,y);
} else
{return and__3546__auto____6112;
}
}),ps__6111);
});
var epn__6149 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__6066_SHARP_){
var and__3546__auto____6113 = p1__6066_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____6113))
{var and__3546__auto____6114 = p1__6066_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____6114))
{return p1__6066_SHARP_.call(null,z);
} else
{return and__3546__auto____6114;
}
} else
{return and__3546__auto____6113;
}
}),ps__6111);
});
var epn__6150 = (function() { 
var G__6152__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6115 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6115))
{return cljs.core.every_QMARK_.call(null,(function (p1__6067_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__6067_SHARP_,args);
}),ps__6111);
} else
{return and__3546__auto____6115;
}
})());
};
var G__6152 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6152__delegate.call(this, x, y, z, args);
};
G__6152.cljs$lang$maxFixedArity = 3;
G__6152.cljs$lang$applyTo = (function (arglist__6153){
var x = cljs.core.first(arglist__6153);
var y = cljs.core.first(cljs.core.next(arglist__6153));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6153)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6153)));
return G__6152__delegate.call(this, x, y, z, args);
});
return G__6152;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__6146.call(this);
case  1 :
return epn__6147.call(this,x);
case  2 :
return epn__6148.call(this,x,y);
case  3 :
return epn__6149.call(this,x,y,z);
default:
return epn__6150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__6150.cljs$lang$applyTo;
return epn;
})()
};
var G__6145 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6145__delegate.call(this, p1, p2, p3, ps);
};
G__6145.cljs$lang$maxFixedArity = 3;
G__6145.cljs$lang$applyTo = (function (arglist__6154){
var p1 = cljs.core.first(arglist__6154);
var p2 = cljs.core.first(cljs.core.next(arglist__6154));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6154)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6154)));
return G__6145__delegate.call(this, p1, p2, p3, ps);
});
return G__6145;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__6116.call(this,p1);
case  2 :
return every_pred__6117.call(this,p1,p2);
case  3 :
return every_pred__6118.call(this,p1,p2,p3);
default:
return every_pred__6119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__6119.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__6194 = (function (p){
return (function() {
var sp1 = null;
var sp1__6199 = (function (){
return null;
});
var sp1__6200 = (function (x){
return p.call(null,x);
});
var sp1__6201 = (function (x,y){
var or__3548__auto____6156 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6156))
{return or__3548__auto____6156;
} else
{return p.call(null,y);
}
});
var sp1__6202 = (function (x,y,z){
var or__3548__auto____6157 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6157))
{return or__3548__auto____6157;
} else
{var or__3548__auto____6158 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____6158))
{return or__3548__auto____6158;
} else
{return p.call(null,z);
}
}
});
var sp1__6203 = (function() { 
var G__6205__delegate = function (x,y,z,args){
var or__3548__auto____6159 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6159))
{return or__3548__auto____6159;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__6205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6205__delegate.call(this, x, y, z, args);
};
G__6205.cljs$lang$maxFixedArity = 3;
G__6205.cljs$lang$applyTo = (function (arglist__6206){
var x = cljs.core.first(arglist__6206);
var y = cljs.core.first(cljs.core.next(arglist__6206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6206)));
return G__6205__delegate.call(this, x, y, z, args);
});
return G__6205;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__6199.call(this);
case  1 :
return sp1__6200.call(this,x);
case  2 :
return sp1__6201.call(this,x,y);
case  3 :
return sp1__6202.call(this,x,y,z);
default:
return sp1__6203.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__6203.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__6195 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__6207 = (function (){
return null;
});
var sp2__6208 = (function (x){
var or__3548__auto____6160 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6160))
{return or__3548__auto____6160;
} else
{return p2.call(null,x);
}
});
var sp2__6209 = (function (x,y){
var or__3548__auto____6161 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6161))
{return or__3548__auto____6161;
} else
{var or__3548__auto____6162 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6162))
{return or__3548__auto____6162;
} else
{var or__3548__auto____6163 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6163))
{return or__3548__auto____6163;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__6210 = (function (x,y,z){
var or__3548__auto____6164 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6164))
{return or__3548__auto____6164;
} else
{var or__3548__auto____6165 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6165))
{return or__3548__auto____6165;
} else
{var or__3548__auto____6166 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6166))
{return or__3548__auto____6166;
} else
{var or__3548__auto____6167 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6167))
{return or__3548__auto____6167;
} else
{var or__3548__auto____6168 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6168))
{return or__3548__auto____6168;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__6211 = (function() { 
var G__6213__delegate = function (x,y,z,args){
var or__3548__auto____6169 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6169))
{return or__3548__auto____6169;
} else
{return cljs.core.some.call(null,(function (p1__6072_SHARP_){
var or__3548__auto____6170 = p1.call(null,p1__6072_SHARP_);

if(cljs.core.truth_(or__3548__auto____6170))
{return or__3548__auto____6170;
} else
{return p2.call(null,p1__6072_SHARP_);
}
}),args);
}
};
var G__6213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6213__delegate.call(this, x, y, z, args);
};
G__6213.cljs$lang$maxFixedArity = 3;
G__6213.cljs$lang$applyTo = (function (arglist__6214){
var x = cljs.core.first(arglist__6214);
var y = cljs.core.first(cljs.core.next(arglist__6214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6214)));
return G__6213__delegate.call(this, x, y, z, args);
});
return G__6213;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__6207.call(this);
case  1 :
return sp2__6208.call(this,x);
case  2 :
return sp2__6209.call(this,x,y);
case  3 :
return sp2__6210.call(this,x,y,z);
default:
return sp2__6211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__6211.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__6196 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__6215 = (function (){
return null;
});
var sp3__6216 = (function (x){
var or__3548__auto____6171 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6171))
{return or__3548__auto____6171;
} else
{var or__3548__auto____6172 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6172))
{return or__3548__auto____6172;
} else
{return p3.call(null,x);
}
}
});
var sp3__6217 = (function (x,y){
var or__3548__auto____6173 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6173))
{return or__3548__auto____6173;
} else
{var or__3548__auto____6174 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6174))
{return or__3548__auto____6174;
} else
{var or__3548__auto____6175 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6175))
{return or__3548__auto____6175;
} else
{var or__3548__auto____6176 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6176))
{return or__3548__auto____6176;
} else
{var or__3548__auto____6177 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6177))
{return or__3548__auto____6177;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__6218 = (function (x,y,z){
var or__3548__auto____6178 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6178))
{return or__3548__auto____6178;
} else
{var or__3548__auto____6179 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6179))
{return or__3548__auto____6179;
} else
{var or__3548__auto____6180 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6180))
{return or__3548__auto____6180;
} else
{var or__3548__auto____6181 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6181))
{return or__3548__auto____6181;
} else
{var or__3548__auto____6182 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6182))
{return or__3548__auto____6182;
} else
{var or__3548__auto____6183 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____6183))
{return or__3548__auto____6183;
} else
{var or__3548__auto____6184 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6184))
{return or__3548__auto____6184;
} else
{var or__3548__auto____6185 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____6185))
{return or__3548__auto____6185;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__6219 = (function() { 
var G__6221__delegate = function (x,y,z,args){
var or__3548__auto____6186 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6186))
{return or__3548__auto____6186;
} else
{return cljs.core.some.call(null,(function (p1__6073_SHARP_){
var or__3548__auto____6187 = p1.call(null,p1__6073_SHARP_);

if(cljs.core.truth_(or__3548__auto____6187))
{return or__3548__auto____6187;
} else
{var or__3548__auto____6188 = p2.call(null,p1__6073_SHARP_);

if(cljs.core.truth_(or__3548__auto____6188))
{return or__3548__auto____6188;
} else
{return p3.call(null,p1__6073_SHARP_);
}
}
}),args);
}
};
var G__6221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6221__delegate.call(this, x, y, z, args);
};
G__6221.cljs$lang$maxFixedArity = 3;
G__6221.cljs$lang$applyTo = (function (arglist__6222){
var x = cljs.core.first(arglist__6222);
var y = cljs.core.first(cljs.core.next(arglist__6222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6222)));
return G__6221__delegate.call(this, x, y, z, args);
});
return G__6221;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__6215.call(this);
case  1 :
return sp3__6216.call(this,x);
case  2 :
return sp3__6217.call(this,x,y);
case  3 :
return sp3__6218.call(this,x,y,z);
default:
return sp3__6219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__6219.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__6197 = (function() { 
var G__6223__delegate = function (p1,p2,p3,ps){
var ps__6189 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__6224 = (function (){
return null;
});
var spn__6225 = (function (x){
return cljs.core.some.call(null,(function (p1__6074_SHARP_){
return p1__6074_SHARP_.call(null,x);
}),ps__6189);
});
var spn__6226 = (function (x,y){
return cljs.core.some.call(null,(function (p1__6075_SHARP_){
var or__3548__auto____6190 = p1__6075_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6190))
{return or__3548__auto____6190;
} else
{return p1__6075_SHARP_.call(null,y);
}
}),ps__6189);
});
var spn__6227 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__6076_SHARP_){
var or__3548__auto____6191 = p1__6076_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6191))
{return or__3548__auto____6191;
} else
{var or__3548__auto____6192 = p1__6076_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____6192))
{return or__3548__auto____6192;
} else
{return p1__6076_SHARP_.call(null,z);
}
}
}),ps__6189);
});
var spn__6228 = (function() { 
var G__6230__delegate = function (x,y,z,args){
var or__3548__auto____6193 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6193))
{return or__3548__auto____6193;
} else
{return cljs.core.some.call(null,(function (p1__6077_SHARP_){
return cljs.core.some.call(null,p1__6077_SHARP_,args);
}),ps__6189);
}
};
var G__6230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6230__delegate.call(this, x, y, z, args);
};
G__6230.cljs$lang$maxFixedArity = 3;
G__6230.cljs$lang$applyTo = (function (arglist__6231){
var x = cljs.core.first(arglist__6231);
var y = cljs.core.first(cljs.core.next(arglist__6231));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6231)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6231)));
return G__6230__delegate.call(this, x, y, z, args);
});
return G__6230;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__6224.call(this);
case  1 :
return spn__6225.call(this,x);
case  2 :
return spn__6226.call(this,x,y);
case  3 :
return spn__6227.call(this,x,y,z);
default:
return spn__6228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__6228.cljs$lang$applyTo;
return spn;
})()
};
var G__6223 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6223__delegate.call(this, p1, p2, p3, ps);
};
G__6223.cljs$lang$maxFixedArity = 3;
G__6223.cljs$lang$applyTo = (function (arglist__6232){
var p1 = cljs.core.first(arglist__6232);
var p2 = cljs.core.first(cljs.core.next(arglist__6232));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6232)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6232)));
return G__6223__delegate.call(this, p1, p2, p3, ps);
});
return G__6223;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__6194.call(this,p1);
case  2 :
return some_fn__6195.call(this,p1,p2);
case  3 :
return some_fn__6196.call(this,p1,p2,p3);
default:
return some_fn__6197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__6197.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__6245 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6233 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6233))
{var s__6234 = temp__3698__auto____6233;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__6234)),map.call(null,f,cljs.core.rest.call(null,s__6234)));
} else
{return null;
}
})));
});
var map__6246 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6235 = cljs.core.seq.call(null,c1);
var s2__6236 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6237 = s1__6235;

if(cljs.core.truth_(and__3546__auto____6237))
{return s2__6236;
} else
{return and__3546__auto____6237;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6235),cljs.core.first.call(null,s2__6236)),map.call(null,f,cljs.core.rest.call(null,s1__6235),cljs.core.rest.call(null,s2__6236)));
} else
{return null;
}
})));
});
var map__6247 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6238 = cljs.core.seq.call(null,c1);
var s2__6239 = cljs.core.seq.call(null,c2);
var s3__6240 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____6241 = s1__6238;

if(cljs.core.truth_(and__3546__auto____6241))
{var and__3546__auto____6242 = s2__6239;

if(cljs.core.truth_(and__3546__auto____6242))
{return s3__6240;
} else
{return and__3546__auto____6242;
}
} else
{return and__3546__auto____6241;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6238),cljs.core.first.call(null,s2__6239),cljs.core.first.call(null,s3__6240)),map.call(null,f,cljs.core.rest.call(null,s1__6238),cljs.core.rest.call(null,s2__6239),cljs.core.rest.call(null,s3__6240)));
} else
{return null;
}
})));
});
var map__6248 = (function() { 
var G__6250__delegate = function (f,c1,c2,c3,colls){
var step__6244 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6243 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6243)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__6243),step.call(null,map.call(null,cljs.core.rest,ss__6243)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__6155_SHARP_){
return cljs.core.apply.call(null,f,p1__6155_SHARP_);
}),step__6244.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__6250 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6250__delegate.call(this, f, c1, c2, c3, colls);
};
G__6250.cljs$lang$maxFixedArity = 4;
G__6250.cljs$lang$applyTo = (function (arglist__6251){
var f = cljs.core.first(arglist__6251);
var c1 = cljs.core.first(cljs.core.next(arglist__6251));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6251)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6251))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6251))));
return G__6250__delegate.call(this, f, c1, c2, c3, colls);
});
return G__6250;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__6245.call(this,f,c1);
case  3 :
return map__6246.call(this,f,c1,c2);
case  4 :
return map__6247.call(this,f,c1,c2,c3);
default:
return map__6248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__6248.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____6252 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6252))
{var s__6253 = temp__3698__auto____6252;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6253),take.call(null,(n - 1),cljs.core.rest.call(null,s__6253)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__6256 = (function (n,coll){
while(true){
var s__6254 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6255 = (n > 0);

if(cljs.core.truth_(and__3546__auto____6255))
{return s__6254;
} else
{return and__3546__auto____6255;
}
})()))
{{
var G__6257 = (n - 1);
var G__6258 = cljs.core.rest.call(null,s__6254);
n = G__6257;
coll = G__6258;
continue;
}
} else
{return s__6254;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6256.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__6259 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__6260 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__6259.call(this,n);
case  2 :
return drop_last__6260.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__6262 = cljs.core.seq.call(null,coll);
var lead__6263 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__6263))
{{
var G__6264 = cljs.core.next.call(null,s__6262);
var G__6265 = cljs.core.next.call(null,lead__6263);
s__6262 = G__6264;
lead__6263 = G__6265;
continue;
}
} else
{return s__6262;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__6268 = (function (pred,coll){
while(true){
var s__6266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6267 = s__6266;

if(cljs.core.truth_(and__3546__auto____6267))
{return pred.call(null,cljs.core.first.call(null,s__6266));
} else
{return and__3546__auto____6267;
}
})()))
{{
var G__6269 = pred;
var G__6270 = cljs.core.rest.call(null,s__6266);
pred = G__6269;
coll = G__6270;
continue;
}
} else
{return s__6266;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6268.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6271 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6271))
{var s__6272 = temp__3698__auto____6271;

return cljs.core.concat.call(null,s__6272,cycle.call(null,s__6272));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__6273 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__6274 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__6273.call(this,n);
case  2 :
return repeat__6274.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__6276 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__6277 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__6276.call(this,n);
case  2 :
return repeatedly__6277.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__6283 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6279 = cljs.core.seq.call(null,c1);
var s2__6280 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6281 = s1__6279;

if(cljs.core.truth_(and__3546__auto____6281))
{return s2__6280;
} else
{return and__3546__auto____6281;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__6279),cljs.core.cons.call(null,cljs.core.first.call(null,s2__6280),interleave.call(null,cljs.core.rest.call(null,s1__6279),cljs.core.rest.call(null,s2__6280))));
} else
{return null;
}
})));
});
var interleave__6284 = (function() { 
var G__6286__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6282 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6282)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__6282),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__6282)));
} else
{return null;
}
})));
};
var G__6286 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6286__delegate.call(this, c1, c2, colls);
};
G__6286.cljs$lang$maxFixedArity = 2;
G__6286.cljs$lang$applyTo = (function (arglist__6287){
var c1 = cljs.core.first(arglist__6287);
var c2 = cljs.core.first(cljs.core.next(arglist__6287));
var colls = cljs.core.rest(cljs.core.next(arglist__6287));
return G__6286__delegate.call(this, c1, c2, colls);
});
return G__6286;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__6283.call(this,c1,c2);
default:
return interleave__6284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__6284.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__6290 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6288 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6288))
{var coll__6289 = temp__3695__auto____6288;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6289),cat.call(null,cljs.core.rest.call(null,coll__6289),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6290.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6291 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6292 = (function() { 
var G__6294__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6294 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6294__delegate.call(this, f, coll, colls);
};
G__6294.cljs$lang$maxFixedArity = 2;
G__6294.cljs$lang$applyTo = (function (arglist__6295){
var f = cljs.core.first(arglist__6295);
var coll = cljs.core.first(cljs.core.next(arglist__6295));
var colls = cljs.core.rest(cljs.core.next(arglist__6295));
return G__6294__delegate.call(this, f, coll, colls);
});
return G__6294;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6291.call(this,f,coll);
default:
return mapcat__6292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6292.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6296))
{var s__6297 = temp__3698__auto____6296;

var f__6298 = cljs.core.first.call(null,s__6297);
var r__6299 = cljs.core.rest.call(null,s__6297);

if(cljs.core.truth_(pred.call(null,f__6298)))
{return cljs.core.cons.call(null,f__6298,filter.call(null,pred,r__6299));
} else
{return filter.call(null,pred,r__6299);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__6301 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6301.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6300_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6300_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__6308 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6309 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6302 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6302))
{var s__6303 = temp__3698__auto____6302;

var p__6304 = cljs.core.take.call(null,n,s__6303);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6304))))
{return cljs.core.cons.call(null,p__6304,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6303)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6310 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6305 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6305))
{var s__6306 = temp__3698__auto____6305;

var p__6307 = cljs.core.take.call(null,n,s__6306);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6307))))
{return cljs.core.cons.call(null,p__6307,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6306)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6307,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6308.call(this,n,step);
case  3 :
return partition__6309.call(this,n,step,pad);
case  4 :
return partition__6310.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__6316 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6317 = (function (m,ks,not_found){
var sentinel__6312 = cljs.core.lookup_sentinel;
var m__6313 = m;
var ks__6314 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6314))
{var m__6315 = cljs.core.get.call(null,m__6313,cljs.core.first.call(null,ks__6314),sentinel__6312);

if(cljs.core.truth_((sentinel__6312 === m__6315)))
{return not_found;
} else
{{
var G__6319 = sentinel__6312;
var G__6320 = m__6315;
var G__6321 = cljs.core.next.call(null,ks__6314);
sentinel__6312 = G__6319;
m__6313 = G__6320;
ks__6314 = G__6321;
continue;
}
}
} else
{return m__6313;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6316.call(this,m,ks);
case  3 :
return get_in__6317.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__6322,v){
var vec__6323__6324 = p__6322;
var k__6325 = cljs.core.nth.call(null,vec__6323__6324,0,null);
var ks__6326 = cljs.core.nthnext.call(null,vec__6323__6324,1);

if(cljs.core.truth_(ks__6326))
{return cljs.core.assoc.call(null,m,k__6325,assoc_in.call(null,cljs.core.get.call(null,m,k__6325),ks__6326,v));
} else
{return cljs.core.assoc.call(null,m,k__6325,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__6327,f,args){
var vec__6328__6329 = p__6327;
var k__6330 = cljs.core.nth.call(null,vec__6328__6329,0,null);
var ks__6331 = cljs.core.nthnext.call(null,vec__6328__6329,1);

if(cljs.core.truth_(ks__6331))
{return cljs.core.assoc.call(null,m,k__6330,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6330),ks__6331,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6330,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6330),args));
}
};
var update_in = function (m,p__6327,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6327, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6332){
var m = cljs.core.first(arglist__6332);
var p__6327 = cljs.core.first(cljs.core.next(arglist__6332));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6332)));
return update_in__delegate.call(this, m, p__6327, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6333 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6358 = null;
var G__6358__6359 = (function (coll,k){
var this__6334 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6358__6360 = (function (coll,k,not_found){
var this__6335 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6358 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6358__6359.call(this,coll,k);
case  3 :
return G__6358__6360.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6358;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6336 = this;
var new_array__6337 = cljs.core.aclone.call(null,this__6336.array);

(new_array__6337[k] = v);
return (new cljs.core.Vector(this__6336.meta,new_array__6337));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6338 = this;
var new_array__6339 = cljs.core.aclone.call(null,this__6338.array);

new_array__6339.push(o);
return (new cljs.core.Vector(this__6338.meta,new_array__6339));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6362 = null;
var G__6362__6363 = (function (v,f){
var this__6340 = this;
return cljs.core.ci_reduce.call(null,this__6340.array,f);
});
var G__6362__6364 = (function (v,f,start){
var this__6341 = this;
return cljs.core.ci_reduce.call(null,this__6341.array,f,start);
});
G__6362 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6362__6363.call(this,v,f);
case  3 :
return G__6362__6364.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6362;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6342 = this;
if(cljs.core.truth_((this__6342.array.length > 0)))
{var vector_seq__6343 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6342.array.length)))
{return cljs.core.cons.call(null,(this__6342.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6343.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6344 = this;
return this__6344.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6345 = this;
var count__6346 = this__6345.array.length;

if(cljs.core.truth_((count__6346 > 0)))
{return (this__6345.array[(count__6346 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6347 = this;
if(cljs.core.truth_((this__6347.array.length > 0)))
{var new_array__6348 = cljs.core.aclone.call(null,this__6347.array);

new_array__6348.pop();
return (new cljs.core.Vector(this__6347.meta,new_array__6348));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6349 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6350 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6351 = this;
return (new cljs.core.Vector(meta,this__6351.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6352 = this;
return this__6352.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6366 = null;
var G__6366__6367 = (function (coll,n){
var this__6353 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6354 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6354))
{return (n < this__6353.array.length);
} else
{return and__3546__auto____6354;
}
})()))
{return (this__6353.array[n]);
} else
{return null;
}
});
var G__6366__6368 = (function (coll,n,not_found){
var this__6355 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6356 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6356))
{return (n < this__6355.array.length);
} else
{return and__3546__auto____6356;
}
})()))
{return (this__6355.array[n]);
} else
{return not_found;
}
});
G__6366 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6366__6367.call(this,coll,n);
case  3 :
return G__6366__6368.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6366;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6357 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6357.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__6370 = null;
var G__6370__6371 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6370__6372 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6370 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6370__6371.call(this,_,k);
case  3 :
return G__6370__6372.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6370;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__6374){
var args = cljs.core.seq( arglist__6374 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6375 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6395 = null;
var G__6395__6396 = (function (coll,k){
var this__6376 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6395__6397 = (function (coll,k,not_found){
var this__6377 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6395 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6395__6396.call(this,coll,k);
case  3 :
return G__6395__6397.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6395;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__6378 = this;
var v_pos__6379 = (this__6378.start + key);

return (new cljs.core.Subvec(this__6378.meta,cljs.core._assoc.call(null,this__6378.v,v_pos__6379,val),this__6378.start,((this__6378.end > (v_pos__6379 + 1)) ? this__6378.end : (v_pos__6379 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6380 = this;
return (new cljs.core.Subvec(this__6380.meta,cljs.core._assoc_n.call(null,this__6380.v,this__6380.end,o),this__6380.start,(this__6380.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6399 = null;
var G__6399__6400 = (function (coll,f){
var this__6381 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__6399__6401 = (function (coll,f,start){
var this__6382 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__6399 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6399__6400.call(this,coll,f);
case  3 :
return G__6399__6401.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6399;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6383 = this;
var subvec_seq__6384 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__6383.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__6383.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__6384.call(null,this__6383.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6385 = this;
return (this__6385.end - this__6385.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6386 = this;
return cljs.core._nth.call(null,this__6386.v,(this__6386.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6387 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__6387.start,this__6387.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__6387.meta,this__6387.v,this__6387.start,(this__6387.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6388 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6389 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6390 = this;
return (new cljs.core.Subvec(meta,this__6390.v,this__6390.start,this__6390.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6391 = this;
return this__6391.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6403 = null;
var G__6403__6404 = (function (coll,n){
var this__6392 = this;
return cljs.core._nth.call(null,this__6392.v,(this__6392.start + n));
});
var G__6403__6405 = (function (coll,n,not_found){
var this__6393 = this;
return cljs.core._nth.call(null,this__6393.v,(this__6393.start + n),not_found);
});
G__6403 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6403__6404.call(this,coll,n);
case  3 :
return G__6403__6405.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6403;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6394 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6394.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__6407 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__6408 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__6407.call(this,v,start);
case  3 :
return subvec__6408.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__6410 = null;
var G__6410__6411 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6410__6412 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6410 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6410__6411.call(this,_,k);
case  3 :
return G__6410__6412.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6410;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6414 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__6415 = array.length;

var i__6416 = 0;

while(true){
if(cljs.core.truth_((i__6416 < len__6415)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6416]))))
{return i__6416;
} else
{{
var G__6417 = (i__6416 + incr);
i__6416 = G__6417;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___6419 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___6420 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____6418 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6418))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6418;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___6419.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___6420.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6423 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6442 = null;
var G__6442__6443 = (function (coll,k){
var this__6424 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6442__6444 = (function (coll,k,not_found){
var this__6425 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6425.strobj,(this__6425.strobj[k]),not_found);
});
G__6442 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6442__6443.call(this,coll,k);
case  3 :
return G__6442__6444.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6442;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6426 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__6427 = goog.object.clone.call(null,this__6426.strobj);
var overwrite_QMARK___6428 = new_strobj__6427.hasOwnProperty(k);

(new_strobj__6427[k] = v);
if(cljs.core.truth_(overwrite_QMARK___6428))
{return (new cljs.core.ObjMap(this__6426.meta,this__6426.keys,new_strobj__6427));
} else
{var new_keys__6429 = cljs.core.aclone.call(null,this__6426.keys);

new_keys__6429.push(k);
return (new cljs.core.ObjMap(this__6426.meta,new_keys__6429,new_strobj__6427));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__6426.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6430 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6430.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6431 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6432 = this;
if(cljs.core.truth_((this__6432.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__6422_SHARP_){
return cljs.core.vector.call(null,p1__6422_SHARP_,(this__6432.strobj[p1__6422_SHARP_]));
}),this__6432.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6433 = this;
return this__6433.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6434 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6435 = this;
return (new cljs.core.ObjMap(meta,this__6435.keys,this__6435.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6436 = this;
return this__6436.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6437 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6437.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6438 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6439 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6439))
{return this__6438.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6439;
}
})()))
{var new_keys__6440 = cljs.core.aclone.call(null,this__6438.keys);
var new_strobj__6441 = goog.object.clone.call(null,this__6438.strobj);

new_keys__6440.splice(cljs.core.scan_array.call(null,1,k,new_keys__6440),1);
cljs.core.js_delete.call(null,new_strobj__6441,k);
return (new cljs.core.ObjMap(this__6438.meta,new_keys__6440,new_strobj__6441));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__6447 = null;
var G__6447__6448 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6447__6449 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6447 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6447__6448.call(this,_,k);
case  3 :
return G__6447__6449.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6447;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6451 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6481 = null;
var G__6481__6482 = (function (coll,k){
var this__6452 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6481__6483 = (function (coll,k,not_found){
var this__6453 = this;
var bucket__6454 = (this__6453.hashobj[cljs.core.hash.call(null,k)]);
var i__6455 = (cljs.core.truth_(bucket__6454)?cljs.core.scan_array.call(null,2,k,bucket__6454):null);

if(cljs.core.truth_(i__6455))
{return (bucket__6454[(i__6455 + 1)]);
} else
{return not_found;
}
});
G__6481 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6481__6482.call(this,coll,k);
case  3 :
return G__6481__6483.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6481;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6456 = this;
var h__6457 = cljs.core.hash.call(null,k);
var bucket__6458 = (this__6456.hashobj[h__6457]);

if(cljs.core.truth_(bucket__6458))
{var new_bucket__6459 = cljs.core.aclone.call(null,bucket__6458);
var new_hashobj__6460 = goog.object.clone.call(null,this__6456.hashobj);

(new_hashobj__6460[h__6457] = new_bucket__6459);
var temp__3695__auto____6461 = cljs.core.scan_array.call(null,2,k,new_bucket__6459);

if(cljs.core.truth_(temp__3695__auto____6461))
{var i__6462 = temp__3695__auto____6461;

(new_bucket__6459[(i__6462 + 1)] = v);
return (new cljs.core.HashMap(this__6456.meta,this__6456.count,new_hashobj__6460));
} else
{new_bucket__6459.push(k,v);
return (new cljs.core.HashMap(this__6456.meta,(this__6456.count + 1),new_hashobj__6460));
}
} else
{var new_hashobj__6463 = goog.object.clone.call(null,this__6456.hashobj);

(new_hashobj__6463[h__6457] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__6456.meta,(this__6456.count + 1),new_hashobj__6463));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6464 = this;
var bucket__6465 = (this__6464.hashobj[cljs.core.hash.call(null,k)]);
var i__6466 = (cljs.core.truth_(bucket__6465)?cljs.core.scan_array.call(null,2,k,bucket__6465):null);

if(cljs.core.truth_(i__6466))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6467 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6468 = this;
if(cljs.core.truth_((this__6468.count > 0)))
{var hashes__6469 = cljs.core.js_keys.call(null,this__6468.hashobj);

return cljs.core.mapcat.call(null,(function (p1__6446_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6468.hashobj[p1__6446_SHARP_])));
}),hashes__6469);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6470 = this;
return this__6470.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6471 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6472 = this;
return (new cljs.core.HashMap(meta,this__6472.count,this__6472.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6473 = this;
return this__6473.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6474 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6474.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6475 = this;
var h__6476 = cljs.core.hash.call(null,k);
var bucket__6477 = (this__6475.hashobj[h__6476]);
var i__6478 = (cljs.core.truth_(bucket__6477)?cljs.core.scan_array.call(null,2,k,bucket__6477):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6478)))
{return coll;
} else
{var new_hashobj__6479 = goog.object.clone.call(null,this__6475.hashobj);

if(cljs.core.truth_((3 > bucket__6477.length)))
{cljs.core.js_delete.call(null,new_hashobj__6479,h__6476);
} else
{var new_bucket__6480 = cljs.core.aclone.call(null,bucket__6477);

new_bucket__6480.splice(i__6478,2);
(new_hashobj__6479[h__6476] = new_bucket__6480);
}
return (new cljs.core.HashMap(this__6475.meta,(this__6475.count - 1),new_hashobj__6479));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6485 = ks.length;

var i__6486 = 0;
var out__6487 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__6486 < len__6485)))
{{
var G__6488 = (i__6486 + 1);
var G__6489 = cljs.core.assoc.call(null,out__6487,(ks[i__6486]),(vs[i__6486]));
i__6486 = G__6488;
out__6487 = G__6489;
continue;
}
} else
{return out__6487;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__6490 = null;
var G__6490__6491 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6490__6492 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6490 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6490__6491.call(this,_,k);
case  3 :
return G__6490__6492.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6490;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__6494 = cljs.core.seq.call(null,keyvals);
var out__6495 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6494))
{{
var G__6496 = cljs.core.nnext.call(null,in$__6494);
var G__6497 = cljs.core.assoc.call(null,out__6495,cljs.core.first.call(null,in$__6494),cljs.core.second.call(null,in$__6494));
in$__6494 = G__6496;
out__6495 = G__6497;
continue;
}
} else
{return out__6495;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__6498){
var keyvals = cljs.core.seq( arglist__6498 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__6499_SHARP_,p2__6500_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____6501 = p1__6499_SHARP_;

if(cljs.core.truth_(or__3548__auto____6501))
{return or__3548__auto____6501;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6500_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__6502){
var maps = cljs.core.seq( arglist__6502 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__6505 = (function (m,e){
var k__6503 = cljs.core.first.call(null,e);
var v__6504 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6503)))
{return cljs.core.assoc.call(null,m,k__6503,f.call(null,cljs.core.get.call(null,m,k__6503),v__6504));
} else
{return cljs.core.assoc.call(null,m,k__6503,v__6504);
}
});
var merge2__6507 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6505,(function (){var or__3548__auto____6506 = m1;

if(cljs.core.truth_(or__3548__auto____6506))
{return or__3548__auto____6506;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6507,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__6508){
var f = cljs.core.first(arglist__6508);
var maps = cljs.core.rest(arglist__6508);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6510 = cljs.core.ObjMap.fromObject([],{});
var keys__6511 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6511))
{var key__6512 = cljs.core.first.call(null,keys__6511);
var entry__6513 = cljs.core.get.call(null,map,key__6512,"﷐'user/not-found");

{
var G__6514 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__6513,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__6510,key__6512,entry__6513):ret__6510);
var G__6515 = cljs.core.next.call(null,keys__6511);
ret__6510 = G__6514;
keys__6511 = G__6515;
continue;
}
} else
{return ret__6510;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6516 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6529 = null;
var G__6529__6530 = (function (coll,v){
var this__6517 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6529__6531 = (function (coll,v,not_found){
var this__6518 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6518.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6529 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6529__6530.call(this,coll,v);
case  3 :
return G__6529__6531.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6529;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6519 = this;
return (new cljs.core.Set(this__6519.meta,cljs.core.assoc.call(null,this__6519.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6520 = this;
return cljs.core.keys.call(null,this__6520.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6521 = this;
return (new cljs.core.Set(this__6521.meta,cljs.core.dissoc.call(null,this__6521.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6522 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6523 = this;
var and__3546__auto____6524 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____6524))
{var and__3546__auto____6525 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____6525))
{return cljs.core.every_QMARK_.call(null,(function (p1__6509_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6509_SHARP_);
}),other);
} else
{return and__3546__auto____6525;
}
} else
{return and__3546__auto____6524;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6526 = this;
return (new cljs.core.Set(meta,this__6526.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6527 = this;
return this__6527.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6528 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6528.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__6533 = null;
var G__6533__6534 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6533__6535 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6533 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6533__6534.call(this,_,k);
case  3 :
return G__6533__6535.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6533;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6538 = cljs.core.seq.call(null,coll);
var out__6539 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6538))))
{{
var G__6540 = cljs.core.rest.call(null,in$__6538);
var G__6541 = cljs.core.conj.call(null,out__6539,cljs.core.first.call(null,in$__6538));
in$__6538 = G__6540;
out__6539 = G__6541;
continue;
}
} else
{return out__6539;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__6542 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____6543 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____6543))
{var e__6544 = temp__3695__auto____6543;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6544));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6542,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6537_SHARP_){
var temp__3695__auto____6545 = cljs.core.find.call(null,smap,p1__6537_SHARP_);

if(cljs.core.truth_(temp__3695__auto____6545))
{var e__6546 = temp__3695__auto____6545;

return cljs.core.second.call(null,e__6546);
} else
{return p1__6537_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6554 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6547,seen){
while(true){
var vec__6548__6549 = p__6547;
var f__6550 = cljs.core.nth.call(null,vec__6548__6549,0,null);
var xs__6551 = vec__6548__6549;

var temp__3698__auto____6552 = cljs.core.seq.call(null,xs__6551);

if(cljs.core.truth_(temp__3698__auto____6552))
{var s__6553 = temp__3698__auto____6552;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6550)))
{{
var G__6555 = cljs.core.rest.call(null,s__6553);
var G__6556 = seen;
p__6547 = G__6555;
seen = G__6556;
continue;
}
} else
{return cljs.core.cons.call(null,f__6550,step.call(null,cljs.core.rest.call(null,s__6553),cljs.core.conj.call(null,seen,f__6550)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6554.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6557 = cljs.core.Vector.fromArray([]);
var s__6558 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6558)))
{{
var G__6559 = cljs.core.conj.call(null,ret__6557,cljs.core.first.call(null,s__6558));
var G__6560 = cljs.core.next.call(null,s__6558);
ret__6557 = G__6559;
s__6558 = G__6560;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6557);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____6561 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6561))
{return or__3548__auto____6561;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6562 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6562 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6562 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____6563 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6563))
{return or__3548__auto____6563;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6564 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6564 > -1)))
{return cljs.core.subs.call(null,x,2,i__6564);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__6567 = cljs.core.ObjMap.fromObject([],{});
var ks__6568 = cljs.core.seq.call(null,keys);
var vs__6569 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6570 = ks__6568;

if(cljs.core.truth_(and__3546__auto____6570))
{return vs__6569;
} else
{return and__3546__auto____6570;
}
})()))
{{
var G__6571 = cljs.core.assoc.call(null,map__6567,cljs.core.first.call(null,ks__6568),cljs.core.first.call(null,vs__6569));
var G__6572 = cljs.core.next.call(null,ks__6568);
var G__6573 = cljs.core.next.call(null,vs__6569);
map__6567 = G__6571;
ks__6568 = G__6572;
vs__6569 = G__6573;
continue;
}
} else
{return map__6567;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__6576 = (function (k,x){
return x;
});
var max_key__6577 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6578 = (function() { 
var G__6580__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6565_SHARP_,p2__6566_SHARP_){
return max_key.call(null,k,p1__6565_SHARP_,p2__6566_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6580 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6580__delegate.call(this, k, x, y, more);
};
G__6580.cljs$lang$maxFixedArity = 3;
G__6580.cljs$lang$applyTo = (function (arglist__6581){
var k = cljs.core.first(arglist__6581);
var x = cljs.core.first(cljs.core.next(arglist__6581));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6581)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6581)));
return G__6580__delegate.call(this, k, x, y, more);
});
return G__6580;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6576.call(this,k,x);
case  3 :
return max_key__6577.call(this,k,x,y);
default:
return max_key__6578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6578.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6582 = (function (k,x){
return x;
});
var min_key__6583 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6584 = (function() { 
var G__6586__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6574_SHARP_,p2__6575_SHARP_){
return min_key.call(null,k,p1__6574_SHARP_,p2__6575_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6586 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6586__delegate.call(this, k, x, y, more);
};
G__6586.cljs$lang$maxFixedArity = 3;
G__6586.cljs$lang$applyTo = (function (arglist__6587){
var k = cljs.core.first(arglist__6587);
var x = cljs.core.first(cljs.core.next(arglist__6587));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6587)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6587)));
return G__6586__delegate.call(this, k, x, y, more);
});
return G__6586;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6582.call(this,k,x);
case  3 :
return min_key__6583.call(this,k,x,y);
default:
return min_key__6584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6584.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6590 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6591 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6588 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6588))
{var s__6589 = temp__3698__auto____6588;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6589),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6589)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6590.call(this,n,step);
case  3 :
return partition_all__6591.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6593 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6593))
{var s__6594 = temp__3698__auto____6593;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6594))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6594),take_while.call(null,pred,cljs.core.rest.call(null,s__6594)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__6595 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__6596 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6612 = null;
var G__6612__6613 = (function (rng,f){
var this__6597 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__6612__6614 = (function (rng,f,s){
var this__6598 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__6612 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__6612__6613.call(this,rng,f);
case  3 :
return G__6612__6614.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6612;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__6599 = this;
var comp__6600 = (cljs.core.truth_((this__6599.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__6600.call(null,this__6599.start,this__6599.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__6601 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__6601.end - this__6601.start) / this__6601.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__6602 = this;
return this__6602.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__6603 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6603.meta,(this__6603.start + this__6603.step),this__6603.end,this__6603.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__6604 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__6605 = this;
return (new cljs.core.Range(meta,this__6605.start,this__6605.end,this__6605.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__6606 = this;
return this__6606.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6616 = null;
var G__6616__6617 = (function (rng,n){
var this__6607 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6607.start + (n * this__6607.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6608 = (this__6607.start > this__6607.end);

if(cljs.core.truth_(and__3546__auto____6608))
{return cljs.core._EQ_.call(null,this__6607.step,0);
} else
{return and__3546__auto____6608;
}
})()))
{return this__6607.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__6616__6618 = (function (rng,n,not_found){
var this__6609 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6609.start + (n * this__6609.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6610 = (this__6609.start > this__6609.end);

if(cljs.core.truth_(and__3546__auto____6610))
{return cljs.core._EQ_.call(null,this__6609.step,0);
} else
{return and__3546__auto____6610;
}
})()))
{return this__6609.start;
} else
{return not_found;
}
}
});
G__6616 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__6616__6617.call(this,rng,n);
case  3 :
return G__6616__6618.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6616;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__6611 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6611.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__6620 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__6621 = (function (end){
return range.call(null,0,end,1);
});
var range__6622 = (function (start,end){
return range.call(null,start,end,1);
});
var range__6623 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__6620.call(this);
case  1 :
return range__6621.call(this,start);
case  2 :
return range__6622.call(this,start,end);
case  3 :
return range__6623.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6625))
{var s__6626 = temp__3698__auto____6625;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6626),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6626)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6628))
{var s__6629 = temp__3698__auto____6628;

var fst__6630 = cljs.core.first.call(null,s__6629);
var fv__6631 = f.call(null,fst__6630);
var run__6632 = cljs.core.cons.call(null,fst__6630,cljs.core.take_while.call(null,(function (p1__6627_SHARP_){
return cljs.core._EQ_.call(null,fv__6631,f.call(null,p1__6627_SHARP_));
}),cljs.core.next.call(null,s__6629)));

return cljs.core.cons.call(null,run__6632,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6632),s__6629))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__6647 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6643 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6643))
{var s__6644 = temp__3695__auto____6643;

return reductions.call(null,f,cljs.core.first.call(null,s__6644),cljs.core.rest.call(null,s__6644));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__6648 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6645 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6645))
{var s__6646 = temp__3698__auto____6645;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6646)),cljs.core.rest.call(null,s__6646));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__6647.call(this,f,init);
case  3 :
return reductions__6648.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__6651 = (function (f){
return (function() {
var G__6656 = null;
var G__6656__6657 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6656__6658 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6656__6659 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6656__6660 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6656__6661 = (function() { 
var G__6663__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6663__delegate.call(this, x, y, z, args);
};
G__6663.cljs$lang$maxFixedArity = 3;
G__6663.cljs$lang$applyTo = (function (arglist__6664){
var x = cljs.core.first(arglist__6664);
var y = cljs.core.first(cljs.core.next(arglist__6664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6664)));
return G__6663__delegate.call(this, x, y, z, args);
});
return G__6663;
})()
;
G__6656 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6656__6657.call(this);
case  1 :
return G__6656__6658.call(this,x);
case  2 :
return G__6656__6659.call(this,x,y);
case  3 :
return G__6656__6660.call(this,x,y,z);
default:
return G__6656__6661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6656.cljs$lang$maxFixedArity = 3;
G__6656.cljs$lang$applyTo = G__6656__6661.cljs$lang$applyTo;
return G__6656;
})()
});
var juxt__6652 = (function (f,g){
return (function() {
var G__6665 = null;
var G__6665__6666 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6665__6667 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6665__6668 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6665__6669 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6665__6670 = (function() { 
var G__6672__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6672__delegate.call(this, x, y, z, args);
};
G__6672.cljs$lang$maxFixedArity = 3;
G__6672.cljs$lang$applyTo = (function (arglist__6673){
var x = cljs.core.first(arglist__6673);
var y = cljs.core.first(cljs.core.next(arglist__6673));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6673)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6673)));
return G__6672__delegate.call(this, x, y, z, args);
});
return G__6672;
})()
;
G__6665 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6665__6666.call(this);
case  1 :
return G__6665__6667.call(this,x);
case  2 :
return G__6665__6668.call(this,x,y);
case  3 :
return G__6665__6669.call(this,x,y,z);
default:
return G__6665__6670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6665.cljs$lang$maxFixedArity = 3;
G__6665.cljs$lang$applyTo = G__6665__6670.cljs$lang$applyTo;
return G__6665;
})()
});
var juxt__6653 = (function (f,g,h){
return (function() {
var G__6674 = null;
var G__6674__6675 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6674__6676 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6674__6677 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6674__6678 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6674__6679 = (function() { 
var G__6681__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6681 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6681__delegate.call(this, x, y, z, args);
};
G__6681.cljs$lang$maxFixedArity = 3;
G__6681.cljs$lang$applyTo = (function (arglist__6682){
var x = cljs.core.first(arglist__6682);
var y = cljs.core.first(cljs.core.next(arglist__6682));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6682)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6682)));
return G__6681__delegate.call(this, x, y, z, args);
});
return G__6681;
})()
;
G__6674 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6674__6675.call(this);
case  1 :
return G__6674__6676.call(this,x);
case  2 :
return G__6674__6677.call(this,x,y);
case  3 :
return G__6674__6678.call(this,x,y,z);
default:
return G__6674__6679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6674.cljs$lang$maxFixedArity = 3;
G__6674.cljs$lang$applyTo = G__6674__6679.cljs$lang$applyTo;
return G__6674;
})()
});
var juxt__6654 = (function() { 
var G__6683__delegate = function (f,g,h,fs){
var fs__6650 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__6684 = null;
var G__6684__6685 = (function (){
return cljs.core.reduce.call(null,(function (p1__6633_SHARP_,p2__6634_SHARP_){
return cljs.core.conj.call(null,p1__6633_SHARP_,p2__6634_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__6650);
});
var G__6684__6686 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6635_SHARP_,p2__6636_SHARP_){
return cljs.core.conj.call(null,p1__6635_SHARP_,p2__6636_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__6650);
});
var G__6684__6687 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6637_SHARP_,p2__6638_SHARP_){
return cljs.core.conj.call(null,p1__6637_SHARP_,p2__6638_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__6650);
});
var G__6684__6688 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6639_SHARP_,p2__6640_SHARP_){
return cljs.core.conj.call(null,p1__6639_SHARP_,p2__6640_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__6650);
});
var G__6684__6689 = (function() { 
var G__6691__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6641_SHARP_,p2__6642_SHARP_){
return cljs.core.conj.call(null,p1__6641_SHARP_,cljs.core.apply.call(null,p2__6642_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__6650);
};
var G__6691 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6691__delegate.call(this, x, y, z, args);
};
G__6691.cljs$lang$maxFixedArity = 3;
G__6691.cljs$lang$applyTo = (function (arglist__6692){
var x = cljs.core.first(arglist__6692);
var y = cljs.core.first(cljs.core.next(arglist__6692));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6692)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6692)));
return G__6691__delegate.call(this, x, y, z, args);
});
return G__6691;
})()
;
G__6684 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6684__6685.call(this);
case  1 :
return G__6684__6686.call(this,x);
case  2 :
return G__6684__6687.call(this,x,y);
case  3 :
return G__6684__6688.call(this,x,y,z);
default:
return G__6684__6689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6684.cljs$lang$maxFixedArity = 3;
G__6684.cljs$lang$applyTo = G__6684__6689.cljs$lang$applyTo;
return G__6684;
})()
};
var G__6683 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6683__delegate.call(this, f, g, h, fs);
};
G__6683.cljs$lang$maxFixedArity = 3;
G__6683.cljs$lang$applyTo = (function (arglist__6693){
var f = cljs.core.first(arglist__6693);
var g = cljs.core.first(cljs.core.next(arglist__6693));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6693)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6693)));
return G__6683__delegate.call(this, f, g, h, fs);
});
return G__6683;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__6651.call(this,f);
case  2 :
return juxt__6652.call(this,f,g);
case  3 :
return juxt__6653.call(this,f,g,h);
default:
return juxt__6654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__6654.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__6695 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6698 = cljs.core.next.call(null,coll);
coll = G__6698;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__6696 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____6694))
{return (n > 0);
} else
{return and__3546__auto____6694;
}
})()))
{{
var G__6699 = (n - 1);
var G__6700 = cljs.core.next.call(null,coll);
n = G__6699;
coll = G__6700;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__6695.call(this,n);
case  2 :
return dorun__6696.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__6701 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__6702 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__6701.call(this,n);
case  2 :
return doall__6702.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__6704 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6704),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6704),1)))
{return cljs.core.first.call(null,matches__6704);
} else
{return cljs.core.vec.call(null,matches__6704);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__6705 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__6705)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6705),1)))
{return cljs.core.first.call(null,matches__6705);
} else
{return cljs.core.vec.call(null,matches__6705);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6706 = cljs.core.re_find.call(null,re,s);
var match_idx__6707 = s.search(re);
var match_str__6708 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__6706))?cljs.core.first.call(null,match_data__6706):match_data__6706);
var post_match__6709 = cljs.core.subs.call(null,s,(match_idx__6707 + cljs.core.count.call(null,match_str__6708)));

if(cljs.core.truth_(match_data__6706))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6706,re_seq.call(null,re,post_match__6709));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6710_SHARP_){
return print_one.call(null,p1__6710_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____6711 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____6711))
{var and__3546__auto____6715 = (function (){var x__1405__auto____6712 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6713 = x__1405__auto____6712;

if(cljs.core.truth_(and__3546__auto____6713))
{var and__3546__auto____6714 = x__1405__auto____6712.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6714))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____6712));
} else
{return and__3546__auto____6714;
}
} else
{return and__3546__auto____6713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__1405__auto____6712);
}
})();

if(cljs.core.truth_(and__3546__auto____6715))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____6715;
}
} else
{return and__3546__auto____6711;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__1405__auto____6716 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6717 = x__1405__auto____6716;

if(cljs.core.truth_(and__3546__auto____6717))
{var and__3546__auto____6718 = x__1405__auto____6716.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____6718))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____6716));
} else
{return and__3546__auto____6718;
}
} else
{return and__3546__auto____6717;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__1405__auto____6716);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__6719 = cljs.core.first.call(null,objs);
var sb__6720 = (new goog.string.StringBuffer());

var G__6721__6722 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6721__6722))
{var obj__6723 = cljs.core.first.call(null,G__6721__6722);
var G__6721__6724 = G__6721__6722;

while(true){
if(cljs.core.truth_((obj__6723 === first_obj__6719)))
{} else
{sb__6720.append(" ");
}
var G__6725__6726 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6723,opts));

if(cljs.core.truth_(G__6725__6726))
{var string__6727 = cljs.core.first.call(null,G__6725__6726);
var G__6725__6728 = G__6725__6726;

while(true){
sb__6720.append(string__6727);
var temp__3698__auto____6729 = cljs.core.next.call(null,G__6725__6728);

if(cljs.core.truth_(temp__3698__auto____6729))
{var G__6725__6730 = temp__3698__auto____6729;

{
var G__6733 = cljs.core.first.call(null,G__6725__6730);
var G__6734 = G__6725__6730;
string__6727 = G__6733;
G__6725__6728 = G__6734;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6731 = cljs.core.next.call(null,G__6721__6724);

if(cljs.core.truth_(temp__3698__auto____6731))
{var G__6721__6732 = temp__3698__auto____6731;

{
var G__6735 = cljs.core.first.call(null,G__6721__6732);
var G__6736 = G__6721__6732;
obj__6723 = G__6735;
G__6721__6724 = G__6736;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__6720);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6737 = cljs.core.first.call(null,objs);

var G__6738__6739 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6738__6739))
{var obj__6740 = cljs.core.first.call(null,G__6738__6739);
var G__6738__6741 = G__6738__6739;

while(true){
if(cljs.core.truth_((obj__6740 === first_obj__6737)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6742__6743 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6740,opts));

if(cljs.core.truth_(G__6742__6743))
{var string__6744 = cljs.core.first.call(null,G__6742__6743);
var G__6742__6745 = G__6742__6743;

while(true){
cljs.core.string_print.call(null,string__6744);
var temp__3698__auto____6746 = cljs.core.next.call(null,G__6742__6745);

if(cljs.core.truth_(temp__3698__auto____6746))
{var G__6742__6747 = temp__3698__auto____6746;

{
var G__6750 = cljs.core.first.call(null,G__6742__6747);
var G__6751 = G__6742__6747;
string__6744 = G__6750;
G__6742__6745 = G__6751;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6748 = cljs.core.next.call(null,G__6738__6741);

if(cljs.core.truth_(temp__3698__auto____6748))
{var G__6738__6749 = temp__3698__auto____6748;

{
var G__6752 = cljs.core.first.call(null,G__6738__6749);
var G__6753 = G__6738__6749;
obj__6740 = G__6752;
G__6738__6741 = G__6753;
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
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__6754){
var objs = cljs.core.seq( arglist__6754 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__6755){
var objs = cljs.core.seq( arglist__6755 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__6756){
var objs = cljs.core.seq( arglist__6756 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__6757){
var objs = cljs.core.seq( arglist__6757 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__6758){
var objs = cljs.core.seq( arglist__6758 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6759 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6759,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____6760 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6760))
{var nspc__6761 = temp__3698__auto____6760;

return cljs.core.str.call(null,nspc__6761,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____6762 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6762))
{var nspc__6763 = temp__3698__auto____6762;

return cljs.core.str.call(null,nspc__6763,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6764 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6764,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__6765 = this;
var G__6766__6767 = cljs.core.seq.call(null,this__6765.watches);

if(cljs.core.truth_(G__6766__6767))
{var G__6769__6771 = cljs.core.first.call(null,G__6766__6767);
var vec__6770__6772 = G__6769__6771;
var key__6773 = cljs.core.nth.call(null,vec__6770__6772,0,null);
var f__6774 = cljs.core.nth.call(null,vec__6770__6772,1,null);
var G__6766__6775 = G__6766__6767;

var G__6769__6776 = G__6769__6771;
var G__6766__6777 = G__6766__6775;

while(true){
var vec__6778__6779 = G__6769__6776;
var key__6780 = cljs.core.nth.call(null,vec__6778__6779,0,null);
var f__6781 = cljs.core.nth.call(null,vec__6778__6779,1,null);
var G__6766__6782 = G__6766__6777;

f__6781.call(null,key__6780,this$,oldval,newval);
var temp__3698__auto____6783 = cljs.core.next.call(null,G__6766__6782);

if(cljs.core.truth_(temp__3698__auto____6783))
{var G__6766__6784 = temp__3698__auto____6783;

{
var G__6791 = cljs.core.first.call(null,G__6766__6784);
var G__6792 = G__6766__6784;
G__6769__6776 = G__6791;
G__6766__6777 = G__6792;
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
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__6785 = this;
return this$.watches = cljs.core.assoc.call(null,this__6785.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__6786 = this;
return this$.watches = cljs.core.dissoc.call(null,this__6786.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__6787 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6787.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__6788 = this;
return this__6788.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6789 = this;
return this__6789.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6790 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__6799 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__6800 = (function() { 
var G__6802__delegate = function (x,p__6793){
var map__6794__6795 = p__6793;
var map__6794__6796 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6794__6795))?cljs.core.apply.call(null,cljs.core.hash_map,map__6794__6795):map__6794__6795);
var validator__6797 = cljs.core.get.call(null,map__6794__6796,"﷐'validator");
var meta__6798 = cljs.core.get.call(null,map__6794__6796,"﷐'meta");

return (new cljs.core.Atom(x,meta__6798,validator__6797,null));
};
var G__6802 = function (x,var_args){
var p__6793 = null;
if (goog.isDef(var_args)) {
  p__6793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6802__delegate.call(this, x, p__6793);
};
G__6802.cljs$lang$maxFixedArity = 1;
G__6802.cljs$lang$applyTo = (function (arglist__6803){
var x = cljs.core.first(arglist__6803);
var p__6793 = cljs.core.rest(arglist__6803);
return G__6802__delegate.call(this, x, p__6793);
});
return G__6802;
})()
;
atom = function(x,var_args){
var p__6793 = var_args;
switch(arguments.length){
case  1 :
return atom__6799.call(this,x);
default:
return atom__6800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__6800.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____6804 = a.validator;

if(cljs.core.truth_(temp__3698__auto____6804))
{var validate__6805 = temp__3698__auto____6804;

if(cljs.core.truth_(validate__6805.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__6806 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__6806,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___6807 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___6808 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___6809 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___6810 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6811 = (function() { 
var G__6813__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6813 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6813__delegate.call(this, a, f, x, y, z, more);
};
G__6813.cljs$lang$maxFixedArity = 5;
G__6813.cljs$lang$applyTo = (function (arglist__6814){
var a = cljs.core.first(arglist__6814);
var f = cljs.core.first(cljs.core.next(arglist__6814));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6814)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6814))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6814)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6814)))));
return G__6813__delegate.call(this, a, f, x, y, z, more);
});
return G__6813;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___6807.call(this,a,f);
case  3 :
return swap_BANG___6808.call(this,a,f,x);
case  4 :
return swap_BANG___6809.call(this,a,f,x,y);
case  5 :
return swap_BANG___6810.call(this,a,f,x,y,z);
default:
return swap_BANG___6811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6811.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6815){
var iref = cljs.core.first(arglist__6815);
var f = cljs.core.first(cljs.core.next(arglist__6815));
var args = cljs.core.rest(cljs.core.next(arglist__6815));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__6816 = (function (){
return gensym.call(null,"G__");
});
var gensym__6817 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__6816.call(this);
case  1 :
return gensym__6817.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__6819 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__6819.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6820 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__6820.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__6820.state,this__6820.f);
}
return cljs.core.deref.call(null,this__6820.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__6821){
var body = cljs.core.seq( arglist__6821 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__6822__6823 = options;
var map__6822__6824 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6822__6823))?cljs.core.apply.call(null,cljs.core.hash_map,map__6822__6823):map__6822__6823);
var keywordize_keys__6825 = cljs.core.get.call(null,map__6822__6824,"﷐'keywordize-keys");
var keyfn__6826 = (cljs.core.truth_(keywordize_keys__6825)?cljs.core.keyword:cljs.core.str);
var f__6832 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__1469__auto____6831 = (function iter__6827(s__6828){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6828__6829 = s__6828;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6828__6829)))
{var k__6830 = cljs.core.first.call(null,s__6828__6829);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__6826.call(null,k__6830),thisfn.call(null,(x[k__6830]))]),iter__6827.call(null,cljs.core.rest.call(null,s__6828__6829)));
} else
{return null;
}
break;
}
})));
});

return iter__1469__auto____6831.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__6832.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6833){
var x = cljs.core.first(arglist__6833);
var options = cljs.core.rest(arglist__6833);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__6834 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__6838__delegate = function (args){
var temp__3695__auto____6835 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6834),args);

if(cljs.core.truth_(temp__3695__auto____6835))
{var v__6836 = temp__3695__auto____6835;

return v__6836;
} else
{var ret__6837 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__6834,cljs.core.assoc,args,ret__6837);
return ret__6837;
}
};
var G__6838 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6838__delegate.call(this, args);
};
G__6838.cljs$lang$maxFixedArity = 0;
G__6838.cljs$lang$applyTo = (function (arglist__6839){
var args = cljs.core.seq( arglist__6839 );;
return G__6838__delegate.call(this, args);
});
return G__6838;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__6841 = (function (f){
while(true){
var ret__6840 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__6840)))
{{
var G__6844 = ret__6840;
f = G__6844;
continue;
}
} else
{return ret__6840;
}
break;
}
});
var trampoline__6842 = (function() { 
var G__6845__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6845 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6845__delegate.call(this, f, args);
};
G__6845.cljs$lang$maxFixedArity = 1;
G__6845.cljs$lang$applyTo = (function (arglist__6846){
var f = cljs.core.first(arglist__6846);
var args = cljs.core.rest(arglist__6846);
return G__6845__delegate.call(this, f, args);
});
return G__6845;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__6841.call(this,f);
default:
return trampoline__6842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__6842.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6847 = (function (){
return rand.call(null,1);
});
var rand__6848 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6847.call(this);
case  1 :
return rand__6848.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__6850 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6850,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6850,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___6859 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6860 = (function (h,child,parent){
var or__3548__auto____6851 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____6851))
{return or__3548__auto____6851;
} else
{var or__3548__auto____6852 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____6852))
{return or__3548__auto____6852;
} else
{var and__3546__auto____6853 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____6853))
{var and__3546__auto____6854 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____6854))
{var and__3546__auto____6855 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____6855))
{var ret__6856 = true;
var i__6857 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6858 = cljs.core.not.call(null,ret__6856);

if(cljs.core.truth_(or__3548__auto____6858))
{return or__3548__auto____6858;
} else
{return cljs.core._EQ_.call(null,i__6857,cljs.core.count.call(null,parent));
}
})()))
{return ret__6856;
} else
{{
var G__6862 = isa_QMARK_.call(null,h,child.call(null,i__6857),parent.call(null,i__6857));
var G__6863 = (i__6857 + 1);
ret__6856 = G__6862;
i__6857 = G__6863;
continue;
}
}
break;
}
} else
{return and__3546__auto____6855;
}
} else
{return and__3546__auto____6854;
}
} else
{return and__3546__auto____6853;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6859.call(this,h,child);
case  3 :
return isa_QMARK___6860.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__6864 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6865 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6864.call(this,h);
case  2 :
return parents__6865.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__6867 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6868 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6867.call(this,h);
case  2 :
return ancestors__6868.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__6870 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6871 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6870.call(this,h);
case  2 :
return descendants__6871.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__6881 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6882 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__6876 = "﷐'parents".call(null,h);
var td__6877 = "﷐'descendants".call(null,h);
var ta__6878 = "﷐'ancestors".call(null,h);
var tf__6879 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____6880 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6876.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6878.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6878.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6876,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__6879.call(null,"﷐'ancestors".call(null,h),tag,td__6877,parent,ta__6878),"﷐'descendants":tf__6879.call(null,"﷐'descendants".call(null,h),parent,ta__6878,tag,td__6877)});
})());

if(cljs.core.truth_(or__3548__auto____6880))
{return or__3548__auto____6880;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6881.call(this,h,tag);
case  3 :
return derive__6882.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__6888 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6889 = (function (h,tag,parent){
var parentMap__6884 = "﷐'parents".call(null,h);
var childsParents__6885 = (cljs.core.truth_(parentMap__6884.call(null,tag))?cljs.core.disj.call(null,parentMap__6884.call(null,tag),parent):cljs.core.set([]));
var newParents__6886 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6885))?cljs.core.assoc.call(null,parentMap__6884,tag,childsParents__6885):cljs.core.dissoc.call(null,parentMap__6884,tag));
var deriv_seq__6887 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6873_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6873_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6873_SHARP_),cljs.core.second.call(null,p1__6873_SHARP_)));
}),cljs.core.seq.call(null,newParents__6886)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6884.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6874_SHARP_,p2__6875_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6874_SHARP_,p2__6875_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6887));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6888.call(this,h,tag);
case  3 :
return underive__6889.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__6891 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____6893 = (cljs.core.truth_((function (){var and__3546__auto____6892 = xprefs__6891;

if(cljs.core.truth_(and__3546__auto____6892))
{return xprefs__6891.call(null,y);
} else
{return and__3546__auto____6892;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____6893))
{return or__3548__auto____6893;
} else
{var or__3548__auto____6895 = (function (){var ps__6894 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6894) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6894),prefer_table)))
{} else
{}
{
var G__6898 = cljs.core.rest.call(null,ps__6894);
ps__6894 = G__6898;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6895))
{return or__3548__auto____6895;
} else
{var or__3548__auto____6897 = (function (){var ps__6896 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6896) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6896),y,prefer_table)))
{} else
{}
{
var G__6899 = cljs.core.rest.call(null,ps__6896);
ps__6896 = G__6899;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6897))
{return or__3548__auto____6897;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____6900 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____6900))
{return or__3548__auto____6900;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6909 = cljs.core.reduce.call(null,(function (be,p__6901){
var vec__6902__6903 = p__6901;
var k__6904 = cljs.core.nth.call(null,vec__6902__6903,0,null);
var ___6905 = cljs.core.nth.call(null,vec__6902__6903,1,null);
var e__6906 = vec__6902__6903;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6904)))
{var be2__6908 = (cljs.core.truth_((function (){var or__3548__auto____6907 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____6907))
{return or__3548__auto____6907;
} else
{return cljs.core.dominates.call(null,k__6904,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6906:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6908),k__6904,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6904," and ",cljs.core.first.call(null,be2__6908),", and neither is preferred")));
}
return be2__6908;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6909))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6909));
return cljs.core.second.call(null,best_entry__6909);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6910 = mf;

if(cljs.core.truth_(and__3546__auto____6910))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____6910;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____6911 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6911))
{return or__3548__auto____6911;
} else
{var or__3548__auto____6912 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____6912))
{return or__3548__auto____6912;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____6913 = mf;

if(cljs.core.truth_(and__3546__auto____6913))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____6913;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____6914 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6914))
{return or__3548__auto____6914;
} else
{var or__3548__auto____6915 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____6915))
{return or__3548__auto____6915;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6916 = mf;

if(cljs.core.truth_(and__3546__auto____6916))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____6916;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6917 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6917))
{return or__3548__auto____6917;
} else
{var or__3548__auto____6918 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____6918))
{return or__3548__auto____6918;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____6919 = mf;

if(cljs.core.truth_(and__3546__auto____6919))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____6919;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____6920 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6920))
{return or__3548__auto____6920;
} else
{var or__3548__auto____6921 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____6921))
{return or__3548__auto____6921;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6922 = mf;

if(cljs.core.truth_(and__3546__auto____6922))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____6922;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6923 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6923))
{return or__3548__auto____6923;
} else
{var or__3548__auto____6924 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____6924))
{return or__3548__auto____6924;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6925 = mf;

if(cljs.core.truth_(and__3546__auto____6925))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____6925;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____6926 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6926))
{return or__3548__auto____6926;
} else
{var or__3548__auto____6927 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____6927))
{return or__3548__auto____6927;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6928 = mf;

if(cljs.core.truth_(and__3546__auto____6928))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____6928;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____6929 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6929))
{return or__3548__auto____6929;
} else
{var or__3548__auto____6930 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____6930))
{return or__3548__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____6931 = mf;

if(cljs.core.truth_(and__3546__auto____6931))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____6931;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____6932 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6932))
{return or__3548__auto____6932;
} else
{var or__3548__auto____6933 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6933))
{return or__3548__auto____6933;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__6934 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6935 = cljs.core._get_method.call(null,mf,dispatch_val__6934);

if(cljs.core.truth_(target_fn__6935))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6934)));
}
return cljs.core.apply.call(null,target_fn__6935,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__6936 = this;
cljs.core.swap_BANG_.call(null,this__6936.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6936.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6936.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6936.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__6937 = this;
cljs.core.swap_BANG_.call(null,this__6937.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6937.method_cache,this__6937.method_table,this__6937.cached_hierarchy,this__6937.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__6938 = this;
cljs.core.swap_BANG_.call(null,this__6938.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6938.method_cache,this__6938.method_table,this__6938.cached_hierarchy,this__6938.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__6939 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6939.cached_hierarchy),cljs.core.deref.call(null,this__6939.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__6939.method_cache,this__6939.method_table,this__6939.cached_hierarchy,this__6939.hierarchy);
}
var temp__3695__auto____6940 = cljs.core.deref.call(null,this__6939.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____6940))
{var target_fn__6941 = temp__3695__auto____6940;

return target_fn__6941;
} else
{var temp__3695__auto____6942 = cljs.core.find_and_cache_best_method.call(null,this__6939.name,dispatch_val,this__6939.hierarchy,this__6939.method_table,this__6939.prefer_table,this__6939.method_cache,this__6939.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____6942))
{var target_fn__6943 = temp__3695__auto____6942;

return target_fn__6943;
} else
{return cljs.core.deref.call(null,this__6939.method_table).call(null,this__6939.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__6944 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__6944.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__6944.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__6944.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__6944.method_cache,this__6944.method_table,this__6944.cached_hierarchy,this__6944.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__6945 = this;
return cljs.core.deref.call(null,this__6945.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__6946 = this;
return cljs.core.deref.call(null,this__6946.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__6947 = this;
return cljs.core.do_invoke.call(null,mf,this__6947.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__6948__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__6948 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6948__delegate.call(this, _, args);
};
G__6948.cljs$lang$maxFixedArity = 1;
G__6948.cljs$lang$applyTo = (function (arglist__6949){
var _ = cljs.core.first(arglist__6949);
var args = cljs.core.rest(arglist__6949);
return G__6948__delegate.call(this, _, args);
});
return G__6948;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
