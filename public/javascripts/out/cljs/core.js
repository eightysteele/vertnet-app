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
var or__3548__auto____7388 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{var or__3548__auto____7389 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
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
if(cljs.core.truth_((function (){var and__3546__auto____7390 = coll;

if(cljs.core.truth_(and__3546__auto____7390))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7390;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7391 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{var or__3548__auto____7392 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = coll;

if(cljs.core.truth_(and__3546__auto____7393))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7393;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7394 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{var or__3548__auto____7395 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7396 = coll;

if(cljs.core.truth_(and__3546__auto____7396))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7396;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7397 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{var or__3548__auto____7398 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
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
var _nth__7405 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = coll;

if(cljs.core.truth_(and__3546__auto____7399))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7399;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7400 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{var or__3548__auto____7401 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7406 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = coll;

if(cljs.core.truth_(and__3546__auto____7402))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7402;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7403 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{var or__3548__auto____7404 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
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
return _nth__7405.call(this,coll,n);
case  3 :
return _nth__7406.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7408 = coll;

if(cljs.core.truth_(and__3546__auto____7408))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7408;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7409 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{var or__3548__auto____7410 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7411 = coll;

if(cljs.core.truth_(and__3546__auto____7411))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7411;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7412 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{var or__3548__auto____7413 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
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
var _lookup__7420 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = o;

if(cljs.core.truth_(and__3546__auto____7414))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7414;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7415 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{var or__3548__auto____7416 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7421 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7417 = o;

if(cljs.core.truth_(and__3546__auto____7417))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7417;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7418 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{var or__3548__auto____7419 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
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
return _lookup__7420.call(this,o,k);
case  3 :
return _lookup__7421.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = coll;

if(cljs.core.truth_(and__3546__auto____7423))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7423;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7424 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7424))
{return or__3548__auto____7424;
} else
{var or__3548__auto____7425 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7426 = coll;

if(cljs.core.truth_(and__3546__auto____7426))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7426;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7427 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{var or__3548__auto____7428 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7429 = coll;

if(cljs.core.truth_(and__3546__auto____7429))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7429;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7430 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{var or__3548__auto____7431 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = coll;

if(cljs.core.truth_(and__3546__auto____7432))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7432;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7433 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7433))
{return or__3548__auto____7433;
} else
{var or__3548__auto____7434 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7434))
{return or__3548__auto____7434;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7435 = coll;

if(cljs.core.truth_(and__3546__auto____7435))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7435;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7436 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{var or__3548__auto____7437 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7438 = coll;

if(cljs.core.truth_(and__3546__auto____7438))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7438;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7440 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7441 = coll;

if(cljs.core.truth_(and__3546__auto____7441))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7441;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7442 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{var or__3548__auto____7443 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7443))
{return or__3548__auto____7443;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = o;

if(cljs.core.truth_(and__3546__auto____7444))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7444;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7445 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{var or__3548__auto____7446 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7447 = o;

if(cljs.core.truth_(and__3546__auto____7447))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7447;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7448 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{var or__3548__auto____7449 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7450 = o;

if(cljs.core.truth_(and__3546__auto____7450))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7450;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7452 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7453 = o;

if(cljs.core.truth_(and__3546__auto____7453))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7453;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7454 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{var or__3548__auto____7455 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7455))
{return or__3548__auto____7455;
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
var _reduce__7462 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = coll;

if(cljs.core.truth_(and__3546__auto____7456))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7456;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7457 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7457))
{return or__3548__auto____7457;
} else
{var or__3548__auto____7458 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7463 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7459 = coll;

if(cljs.core.truth_(and__3546__auto____7459))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7459;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7461 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
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
return _reduce__7462.call(this,coll,f);
case  3 :
return _reduce__7463.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7465 = o;

if(cljs.core.truth_(and__3546__auto____7465))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7465;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7466 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{var or__3548__auto____7467 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = o;

if(cljs.core.truth_(and__3546__auto____7468))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7468;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7469 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7469))
{return or__3548__auto____7469;
} else
{var or__3548__auto____7470 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7471 = o;

if(cljs.core.truth_(and__3546__auto____7471))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7471;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7473 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
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
if(cljs.core.truth_((function (){var and__3546__auto____7474 = o;

if(cljs.core.truth_(and__3546__auto____7474))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7474;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7475 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{var or__3548__auto____7476 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = d;

if(cljs.core.truth_(and__3546__auto____7477))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7477;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7478 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{var or__3548__auto____7479 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7480 = this$;

if(cljs.core.truth_(and__3546__auto____7480))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7480;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7481 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{var or__3548__auto____7482 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7484 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7484))
{return or__3548__auto____7484;
} else
{var or__3548__auto____7485 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7485))
{return or__3548__auto____7485;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7487 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{var or__3548__auto____7488 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
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
var G__7489 = null;
var G__7489__7490 = (function (o,k){
return null;
});
var G__7489__7491 = (function (o,k,not_found){
return not_found;
});
G__7489 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7489__7490.call(this,o,k);
case  3 :
return G__7489__7491.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7489;
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
var G__7493 = null;
var G__7493__7494 = (function (_,f){
return f.call(null);
});
var G__7493__7495 = (function (_,f,start){
return start;
});
G__7493 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7493__7494.call(this,_,f);
case  3 :
return G__7493__7495.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7493;
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
var G__7497 = null;
var G__7497__7498 = (function (_,n){
return null;
});
var G__7497__7499 = (function (_,n,not_found){
return not_found;
});
G__7497 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7497__7498.call(this,_,n);
case  3 :
return G__7497__7499.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7497;
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
var ci_reduce__7507 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7501 = cljs.core._nth.call(null,cicoll,0);
var n__7502 = 1;

while(true){
if(cljs.core.truth_((n__7502 < cljs.core._count.call(null,cicoll))))
{{
var G__7511 = f.call(null,val__7501,cljs.core._nth.call(null,cicoll,n__7502));
var G__7512 = (n__7502 + 1);
val__7501 = G__7511;
n__7502 = G__7512;
continue;
}
} else
{return val__7501;
}
break;
}
}
});
var ci_reduce__7508 = (function (cicoll,f,val){
var val__7503 = val;
var n__7504 = 0;

while(true){
if(cljs.core.truth_((n__7504 < cljs.core._count.call(null,cicoll))))
{{
var G__7513 = f.call(null,val__7503,cljs.core._nth.call(null,cicoll,n__7504));
var G__7514 = (n__7504 + 1);
val__7503 = G__7513;
n__7504 = G__7514;
continue;
}
} else
{return val__7503;
}
break;
}
});
var ci_reduce__7509 = (function (cicoll,f,val,idx){
var val__7505 = val;
var n__7506 = idx;

while(true){
if(cljs.core.truth_((n__7506 < cljs.core._count.call(null,cicoll))))
{{
var G__7515 = f.call(null,val__7505,cljs.core._nth.call(null,cicoll,n__7506));
var G__7516 = (n__7506 + 1);
val__7505 = G__7515;
n__7506 = G__7516;
continue;
}
} else
{return val__7505;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7507.call(this,cicoll,f);
case  3 :
return ci_reduce__7508.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7509.call(this,cicoll,f,val,idx);
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
var this__7517 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7530 = null;
var G__7530__7531 = (function (coll,f){
var this__7518 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7518.a[this__7518.i]),(this__7518.i + 1));
});
var G__7530__7532 = (function (coll,f,start){
var this__7519 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7519.i);
});
G__7530 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7530__7531.call(this,coll,f);
case  3 :
return G__7530__7532.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7530;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7520 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7534 = null;
var G__7534__7535 = (function (coll,n){
var this__7522 = this;
var i__7523 = (n + this__7522.i);

if(cljs.core.truth_((i__7523 < this__7522.a.length)))
{return (this__7522.a[i__7523]);
} else
{return null;
}
});
var G__7534__7536 = (function (coll,n,not_found){
var this__7524 = this;
var i__7525 = (n + this__7524.i);

if(cljs.core.truth_((i__7525 < this__7524.a.length)))
{return (this__7524.a[i__7525]);
} else
{return not_found;
}
});
G__7534 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7534__7535.call(this,coll,n);
case  3 :
return G__7534__7536.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7534;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7526 = this;
return (this__7526.a.length - this__7526.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7527 = this;
return (this__7527.a[this__7527.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7528 = this;
if(cljs.core.truth_(((this__7528.i + 1) < this__7528.a.length)))
{return (new cljs.core.IndexedSeq(this__7528.a,(this__7528.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7529 = this;
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
var G__7538 = null;
var G__7538__7539 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7538__7540 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7538 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7538__7539.call(this,array,f);
case  3 :
return G__7538__7540.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7538;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7542 = null;
var G__7542__7543 = (function (array,k){
return (array[k]);
});
var G__7542__7544 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7542 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7542__7543.call(this,array,k);
case  3 :
return G__7542__7544.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7542;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7546 = null;
var G__7546__7547 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7546__7548 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7546 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7546__7547.call(this,array,n);
case  3 :
return G__7546__7548.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7546;
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
var temp__3698__auto____7550 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7550))
{var s__7551 = temp__3698__auto____7550;

return cljs.core._first.call(null,s__7551);
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
var G__7552 = cljs.core.next.call(null,s);
s = G__7552;
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
var s__7553 = cljs.core.seq.call(null,x);
var n__7554 = 0;

while(true){
if(cljs.core.truth_(s__7553))
{{
var G__7555 = cljs.core.next.call(null,s__7553);
var G__7556 = (n__7554 + 1);
s__7553 = G__7555;
n__7554 = G__7556;
continue;
}
} else
{return n__7554;
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
var conj__7557 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7558 = (function() { 
var G__7560__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7561 = conj.call(null,coll,x);
var G__7562 = cljs.core.first.call(null,xs);
var G__7563 = cljs.core.next.call(null,xs);
coll = G__7561;
x = G__7562;
xs = G__7563;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7560 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7560__delegate.call(this, coll, x, xs);
};
G__7560.cljs$lang$maxFixedArity = 2;
G__7560.cljs$lang$applyTo = (function (arglist__7564){
var coll = cljs.core.first(arglist__7564);
var x = cljs.core.first(cljs.core.next(arglist__7564));
var xs = cljs.core.rest(cljs.core.next(arglist__7564));
return G__7560__delegate.call(this, coll, x, xs);
});
return G__7560;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7557.call(this,coll,x);
default:
return conj__7558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7558.cljs$lang$applyTo;
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
var nth__7565 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7566 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7565.call(this,coll,n);
case  3 :
return nth__7566.call(this,coll,n,not_found);
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
var get__7568 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7569 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7568.call(this,o,k);
case  3 :
return get__7569.call(this,o,k,not_found);
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
var assoc__7572 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7573 = (function() { 
var G__7575__delegate = function (coll,k,v,kvs){
while(true){
var ret__7571 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7576 = ret__7571;
var G__7577 = cljs.core.first.call(null,kvs);
var G__7578 = cljs.core.second.call(null,kvs);
var G__7579 = cljs.core.nnext.call(null,kvs);
coll = G__7576;
k = G__7577;
v = G__7578;
kvs = G__7579;
continue;
}
} else
{return ret__7571;
}
break;
}
};
var G__7575 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7575__delegate.call(this, coll, k, v, kvs);
};
G__7575.cljs$lang$maxFixedArity = 3;
G__7575.cljs$lang$applyTo = (function (arglist__7580){
var coll = cljs.core.first(arglist__7580);
var k = cljs.core.first(cljs.core.next(arglist__7580));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7580)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7580)));
return G__7575__delegate.call(this, coll, k, v, kvs);
});
return G__7575;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7572.call(this,coll,k,v);
default:
return assoc__7573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7573.cljs$lang$applyTo;
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
var dissoc__7582 = (function (coll){
return coll;
});
var dissoc__7583 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7584 = (function() { 
var G__7586__delegate = function (coll,k,ks){
while(true){
var ret__7581 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7587 = ret__7581;
var G__7588 = cljs.core.first.call(null,ks);
var G__7589 = cljs.core.next.call(null,ks);
coll = G__7587;
k = G__7588;
ks = G__7589;
continue;
}
} else
{return ret__7581;
}
break;
}
};
var G__7586 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7586__delegate.call(this, coll, k, ks);
};
G__7586.cljs$lang$maxFixedArity = 2;
G__7586.cljs$lang$applyTo = (function (arglist__7590){
var coll = cljs.core.first(arglist__7590);
var k = cljs.core.first(cljs.core.next(arglist__7590));
var ks = cljs.core.rest(cljs.core.next(arglist__7590));
return G__7586__delegate.call(this, coll, k, ks);
});
return G__7586;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7582.call(this,coll);
case  2 :
return dissoc__7583.call(this,coll,k);
default:
return dissoc__7584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7584.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__1405__auto____7591 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7592 = x__1405__auto____7591;

if(cljs.core.truth_(and__3546__auto____7592))
{var and__3546__auto____7593 = x__1405__auto____7591.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7593))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7591));
} else
{return and__3546__auto____7593;
}
} else
{return and__3546__auto____7592;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__1405__auto____7591);
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
var disj__7595 = (function (coll){
return coll;
});
var disj__7596 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7597 = (function() { 
var G__7599__delegate = function (coll,k,ks){
while(true){
var ret__7594 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7600 = ret__7594;
var G__7601 = cljs.core.first.call(null,ks);
var G__7602 = cljs.core.next.call(null,ks);
coll = G__7600;
k = G__7601;
ks = G__7602;
continue;
}
} else
{return ret__7594;
}
break;
}
};
var G__7599 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7599__delegate.call(this, coll, k, ks);
};
G__7599.cljs$lang$maxFixedArity = 2;
G__7599.cljs$lang$applyTo = (function (arglist__7603){
var coll = cljs.core.first(arglist__7603);
var k = cljs.core.first(cljs.core.next(arglist__7603));
var ks = cljs.core.rest(cljs.core.next(arglist__7603));
return G__7599__delegate.call(this, coll, k, ks);
});
return G__7599;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7595.call(this,coll);
case  2 :
return disj__7596.call(this,coll,k);
default:
return disj__7597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7597.cljs$lang$applyTo;
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
{var x__1405__auto____7604 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7605 = x__1405__auto____7604;

if(cljs.core.truth_(and__3546__auto____7605))
{var and__3546__auto____7606 = x__1405__auto____7604.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7606))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7604));
} else
{return and__3546__auto____7606;
}
} else
{return and__3546__auto____7605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__1405__auto____7604);
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
{var x__1405__auto____7607 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7608 = x__1405__auto____7607;

if(cljs.core.truth_(and__3546__auto____7608))
{var and__3546__auto____7609 = x__1405__auto____7607.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7609))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7607));
} else
{return and__3546__auto____7609;
}
} else
{return and__3546__auto____7608;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__1405__auto____7607);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__1405__auto____7610 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7611 = x__1405__auto____7610;

if(cljs.core.truth_(and__3546__auto____7611))
{var and__3546__auto____7612 = x__1405__auto____7610.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7612))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7610));
} else
{return and__3546__auto____7612;
}
} else
{return and__3546__auto____7611;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__1405__auto____7610);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__1405__auto____7613 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7614 = x__1405__auto____7613;

if(cljs.core.truth_(and__3546__auto____7614))
{var and__3546__auto____7615 = x__1405__auto____7613.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7615))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7613));
} else
{return and__3546__auto____7615;
}
} else
{return and__3546__auto____7614;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__1405__auto____7613);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__1405__auto____7616 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7617 = x__1405__auto____7616;

if(cljs.core.truth_(and__3546__auto____7617))
{var and__3546__auto____7618 = x__1405__auto____7616.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7618))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7616));
} else
{return and__3546__auto____7618;
}
} else
{return and__3546__auto____7617;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__1405__auto____7616);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__1405__auto____7619 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7620 = x__1405__auto____7619;

if(cljs.core.truth_(and__3546__auto____7620))
{var and__3546__auto____7621 = x__1405__auto____7619.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7621))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7619));
} else
{return and__3546__auto____7621;
}
} else
{return and__3546__auto____7620;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__1405__auto____7619);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__1405__auto____7622 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7623 = x__1405__auto____7622;

if(cljs.core.truth_(and__3546__auto____7623))
{var and__3546__auto____7624 = x__1405__auto____7622.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7624))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7622));
} else
{return and__3546__auto____7624;
}
} else
{return and__3546__auto____7623;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__1405__auto____7622);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7625 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7625.push(key);
}));
return keys__7625;
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
{var x__1405__auto____7626 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7627 = x__1405__auto____7626;

if(cljs.core.truth_(and__3546__auto____7627))
{var and__3546__auto____7628 = x__1405__auto____7626.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7628))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____7626));
} else
{return and__3546__auto____7628;
}
} else
{return and__3546__auto____7627;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__1405__auto____7626);
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
var and__3546__auto____7629 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7629))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7630 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____7629;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7631 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7631))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____7631;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7632 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7632))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____7632;
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
var and__3546__auto____7633 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7633))
{return (n == n.toFixed());
} else
{return and__3546__auto____7633;
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
if(cljs.core.truth_((function (){var and__3546__auto____7634 = coll;

if(cljs.core.truth_(and__3546__auto____7634))
{var and__3546__auto____7635 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7635))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7635;
}
} else
{return and__3546__auto____7634;
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
var distinct_QMARK___7640 = (function (x){
return true;
});
var distinct_QMARK___7641 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7642 = (function() { 
var G__7644__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7636 = cljs.core.set([y,x]);
var xs__7637 = more;

while(true){
var x__7638 = cljs.core.first.call(null,xs__7637);
var etc__7639 = cljs.core.next.call(null,xs__7637);

if(cljs.core.truth_(xs__7637))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7636,x__7638)))
{return false;
} else
{{
var G__7645 = cljs.core.conj.call(null,s__7636,x__7638);
var G__7646 = etc__7639;
s__7636 = G__7645;
xs__7637 = G__7646;
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
var G__7644 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7644__delegate.call(this, x, y, more);
};
G__7644.cljs$lang$maxFixedArity = 2;
G__7644.cljs$lang$applyTo = (function (arglist__7647){
var x = cljs.core.first(arglist__7647);
var y = cljs.core.first(cljs.core.next(arglist__7647));
var more = cljs.core.rest(cljs.core.next(arglist__7647));
return G__7644__delegate.call(this, x, y, more);
});
return G__7644;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7640.call(this,x);
case  2 :
return distinct_QMARK___7641.call(this,x,y);
default:
return distinct_QMARK___7642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7642.cljs$lang$applyTo;
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
var r__7648 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7648)))
{return r__7648;
} else
{if(cljs.core.truth_(r__7648))
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
var sort__7650 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7651 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7649 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7649,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7649);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7650.call(this,comp);
case  2 :
return sort__7651.call(this,comp,coll);
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
var sort_by__7653 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7654 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7653.call(this,keyfn,comp);
case  3 :
return sort_by__7654.call(this,keyfn,comp,coll);
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
var reduce__7656 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7657 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7656.call(this,f,val);
case  3 :
return reduce__7657.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7663 = (function (f,coll){
var temp__3695__auto____7659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7659))
{var s__7660 = temp__3695__auto____7659;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7660),cljs.core.next.call(null,s__7660));
} else
{return f.call(null);
}
});
var seq_reduce__7664 = (function (f,val,coll){
var val__7661 = val;
var coll__7662 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7662))
{{
var G__7666 = f.call(null,val__7661,cljs.core.first.call(null,coll__7662));
var G__7667 = cljs.core.next.call(null,coll__7662);
val__7661 = G__7666;
coll__7662 = G__7667;
continue;
}
} else
{return val__7661;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7663.call(this,f,val);
case  3 :
return seq_reduce__7664.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7668 = null;
var G__7668__7669 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7668__7670 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7668 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7668__7669.call(this,coll,f);
case  3 :
return G__7668__7670.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7668;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7672 = (function (){
return 0;
});
var _PLUS___7673 = (function (x){
return x;
});
var _PLUS___7674 = (function (x,y){
return (x + y);
});
var _PLUS___7675 = (function() { 
var G__7677__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__7677 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7677__delegate.call(this, x, y, more);
};
G__7677.cljs$lang$maxFixedArity = 2;
G__7677.cljs$lang$applyTo = (function (arglist__7678){
var x = cljs.core.first(arglist__7678);
var y = cljs.core.first(cljs.core.next(arglist__7678));
var more = cljs.core.rest(cljs.core.next(arglist__7678));
return G__7677__delegate.call(this, x, y, more);
});
return G__7677;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7672.call(this);
case  1 :
return _PLUS___7673.call(this,x);
case  2 :
return _PLUS___7674.call(this,x,y);
default:
return _PLUS___7675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7675.cljs$lang$applyTo;
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
var ___7679 = (function (x){
return (- x);
});
var ___7680 = (function (x,y){
return (x - y);
});
var ___7681 = (function() { 
var G__7683__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__7683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7683__delegate.call(this, x, y, more);
};
G__7683.cljs$lang$maxFixedArity = 2;
G__7683.cljs$lang$applyTo = (function (arglist__7684){
var x = cljs.core.first(arglist__7684);
var y = cljs.core.first(cljs.core.next(arglist__7684));
var more = cljs.core.rest(cljs.core.next(arglist__7684));
return G__7683__delegate.call(this, x, y, more);
});
return G__7683;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7679.call(this,x);
case  2 :
return ___7680.call(this,x,y);
default:
return ___7681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7681.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7685 = (function (){
return 1;
});
var _STAR___7686 = (function (x){
return x;
});
var _STAR___7687 = (function (x,y){
return (x * y);
});
var _STAR___7688 = (function() { 
var G__7690__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__7690 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7690__delegate.call(this, x, y, more);
};
G__7690.cljs$lang$maxFixedArity = 2;
G__7690.cljs$lang$applyTo = (function (arglist__7691){
var x = cljs.core.first(arglist__7691);
var y = cljs.core.first(cljs.core.next(arglist__7691));
var more = cljs.core.rest(cljs.core.next(arglist__7691));
return G__7690__delegate.call(this, x, y, more);
});
return G__7690;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7685.call(this);
case  1 :
return _STAR___7686.call(this,x);
case  2 :
return _STAR___7687.call(this,x,y);
default:
return _STAR___7688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7688.cljs$lang$applyTo;
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
var _SLASH___7692 = (function (x){
return (1 / x);
});
var _SLASH___7693 = (function (x,y){
return (x / y);
});
var _SLASH___7694 = (function() { 
var G__7696__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7696 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7696__delegate.call(this, x, y, more);
};
G__7696.cljs$lang$maxFixedArity = 2;
G__7696.cljs$lang$applyTo = (function (arglist__7697){
var x = cljs.core.first(arglist__7697);
var y = cljs.core.first(cljs.core.next(arglist__7697));
var more = cljs.core.rest(cljs.core.next(arglist__7697));
return G__7696__delegate.call(this, x, y, more);
});
return G__7696;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7692.call(this,x);
case  2 :
return _SLASH___7693.call(this,x,y);
default:
return _SLASH___7694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7694.cljs$lang$applyTo;
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
var _LT___7698 = (function (x){
return true;
});
var _LT___7699 = (function (x,y){
return (x < y);
});
var _LT___7700 = (function() { 
var G__7702__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7703 = y;
var G__7704 = cljs.core.first.call(null,more);
var G__7705 = cljs.core.next.call(null,more);
x = G__7703;
y = G__7704;
more = G__7705;
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
var G__7702 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7702__delegate.call(this, x, y, more);
};
G__7702.cljs$lang$maxFixedArity = 2;
G__7702.cljs$lang$applyTo = (function (arglist__7706){
var x = cljs.core.first(arglist__7706);
var y = cljs.core.first(cljs.core.next(arglist__7706));
var more = cljs.core.rest(cljs.core.next(arglist__7706));
return G__7702__delegate.call(this, x, y, more);
});
return G__7702;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7698.call(this,x);
case  2 :
return _LT___7699.call(this,x,y);
default:
return _LT___7700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7700.cljs$lang$applyTo;
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
var _LT__EQ___7707 = (function (x){
return true;
});
var _LT__EQ___7708 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7709 = (function() { 
var G__7711__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7712 = y;
var G__7713 = cljs.core.first.call(null,more);
var G__7714 = cljs.core.next.call(null,more);
x = G__7712;
y = G__7713;
more = G__7714;
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
var G__7711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7711__delegate.call(this, x, y, more);
};
G__7711.cljs$lang$maxFixedArity = 2;
G__7711.cljs$lang$applyTo = (function (arglist__7715){
var x = cljs.core.first(arglist__7715);
var y = cljs.core.first(cljs.core.next(arglist__7715));
var more = cljs.core.rest(cljs.core.next(arglist__7715));
return G__7711__delegate.call(this, x, y, more);
});
return G__7711;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7707.call(this,x);
case  2 :
return _LT__EQ___7708.call(this,x,y);
default:
return _LT__EQ___7709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7709.cljs$lang$applyTo;
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
var _GT___7716 = (function (x){
return true;
});
var _GT___7717 = (function (x,y){
return (x > y);
});
var _GT___7718 = (function() { 
var G__7720__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7721 = y;
var G__7722 = cljs.core.first.call(null,more);
var G__7723 = cljs.core.next.call(null,more);
x = G__7721;
y = G__7722;
more = G__7723;
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
var G__7720 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7720__delegate.call(this, x, y, more);
};
G__7720.cljs$lang$maxFixedArity = 2;
G__7720.cljs$lang$applyTo = (function (arglist__7724){
var x = cljs.core.first(arglist__7724);
var y = cljs.core.first(cljs.core.next(arglist__7724));
var more = cljs.core.rest(cljs.core.next(arglist__7724));
return G__7720__delegate.call(this, x, y, more);
});
return G__7720;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7716.call(this,x);
case  2 :
return _GT___7717.call(this,x,y);
default:
return _GT___7718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7718.cljs$lang$applyTo;
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
var _GT__EQ___7725 = (function (x){
return true;
});
var _GT__EQ___7726 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7727 = (function() { 
var G__7729__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7730 = y;
var G__7731 = cljs.core.first.call(null,more);
var G__7732 = cljs.core.next.call(null,more);
x = G__7730;
y = G__7731;
more = G__7732;
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
var G__7729 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7729__delegate.call(this, x, y, more);
};
G__7729.cljs$lang$maxFixedArity = 2;
G__7729.cljs$lang$applyTo = (function (arglist__7733){
var x = cljs.core.first(arglist__7733);
var y = cljs.core.first(cljs.core.next(arglist__7733));
var more = cljs.core.rest(cljs.core.next(arglist__7733));
return G__7729__delegate.call(this, x, y, more);
});
return G__7729;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7725.call(this,x);
case  2 :
return _GT__EQ___7726.call(this,x,y);
default:
return _GT__EQ___7727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7727.cljs$lang$applyTo;
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
var max__7734 = (function (x){
return x;
});
var max__7735 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7736 = (function() { 
var G__7738__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__7738 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7738__delegate.call(this, x, y, more);
};
G__7738.cljs$lang$maxFixedArity = 2;
G__7738.cljs$lang$applyTo = (function (arglist__7739){
var x = cljs.core.first(arglist__7739);
var y = cljs.core.first(cljs.core.next(arglist__7739));
var more = cljs.core.rest(cljs.core.next(arglist__7739));
return G__7738__delegate.call(this, x, y, more);
});
return G__7738;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7734.call(this,x);
case  2 :
return max__7735.call(this,x,y);
default:
return max__7736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7736.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7740 = (function (x){
return x;
});
var min__7741 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7742 = (function() { 
var G__7744__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__7744 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7744__delegate.call(this, x, y, more);
};
G__7744.cljs$lang$maxFixedArity = 2;
G__7744.cljs$lang$applyTo = (function (arglist__7745){
var x = cljs.core.first(arglist__7745);
var y = cljs.core.first(cljs.core.next(arglist__7745));
var more = cljs.core.rest(cljs.core.next(arglist__7745));
return G__7744__delegate.call(this, x, y, more);
});
return G__7744;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7740.call(this,x);
case  2 :
return min__7741.call(this,x,y);
default:
return min__7742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7742.cljs$lang$applyTo;
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
var rem__7746 = (n % d);

return cljs.core.fix.call(null,((n - rem__7746) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7747 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7747));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7748 = (function (){
return Math.random.call(null);
});
var rand__7749 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7748.call(this);
case  1 :
return rand__7749.call(this,n);
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
var _EQ__EQ___7751 = (function (x){
return true;
});
var _EQ__EQ___7752 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7753 = (function() { 
var G__7755__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7756 = y;
var G__7757 = cljs.core.first.call(null,more);
var G__7758 = cljs.core.next.call(null,more);
x = G__7756;
y = G__7757;
more = G__7758;
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
var G__7755 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7755__delegate.call(this, x, y, more);
};
G__7755.cljs$lang$maxFixedArity = 2;
G__7755.cljs$lang$applyTo = (function (arglist__7759){
var x = cljs.core.first(arglist__7759);
var y = cljs.core.first(cljs.core.next(arglist__7759));
var more = cljs.core.rest(cljs.core.next(arglist__7759));
return G__7755__delegate.call(this, x, y, more);
});
return G__7755;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7751.call(this,x);
case  2 :
return _EQ__EQ___7752.call(this,x,y);
default:
return _EQ__EQ___7753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7753.cljs$lang$applyTo;
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
var n__7760 = n;
var xs__7761 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7762 = xs__7761;

if(cljs.core.truth_(and__3546__auto____7762))
{return (n__7760 > 0);
} else
{return and__3546__auto____7762;
}
})()))
{{
var G__7763 = (n__7760 - 1);
var G__7764 = cljs.core.next.call(null,xs__7761);
n__7760 = G__7763;
xs__7761 = G__7764;
continue;
}
} else
{return xs__7761;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7769 = null;
var G__7769__7770 = (function (coll,n){
var temp__3695__auto____7765 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7765))
{var xs__7766 = temp__3695__auto____7765;

return cljs.core.first.call(null,xs__7766);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7769__7771 = (function (coll,n,not_found){
var temp__3695__auto____7767 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7767))
{var xs__7768 = temp__3695__auto____7767;

return cljs.core.first.call(null,xs__7768);
} else
{return not_found;
}
});
G__7769 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7769__7770.call(this,coll,n);
case  3 :
return G__7769__7771.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7769;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7773 = (function (){
return "";
});
var str_STAR___7774 = (function (x){
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
var str_STAR___7775 = (function() { 
var G__7777__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7778 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7779 = cljs.core.next.call(null,more);
sb = G__7778;
more = G__7779;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7777 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7777__delegate.call(this, x, ys);
};
G__7777.cljs$lang$maxFixedArity = 1;
G__7777.cljs$lang$applyTo = (function (arglist__7780){
var x = cljs.core.first(arglist__7780);
var ys = cljs.core.rest(arglist__7780);
return G__7777__delegate.call(this, x, ys);
});
return G__7777;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7773.call(this);
case  1 :
return str_STAR___7774.call(this,x);
default:
return str_STAR___7775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7775.cljs$lang$applyTo;
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
var str__7781 = (function (){
return "";
});
var str__7782 = (function (x){
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
var str__7783 = (function() { 
var G__7785__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__7785 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7785__delegate.call(this, x, ys);
};
G__7785.cljs$lang$maxFixedArity = 1;
G__7785.cljs$lang$applyTo = (function (arglist__7786){
var x = cljs.core.first(arglist__7786);
var ys = cljs.core.rest(arglist__7786);
return G__7785__delegate.call(this, x, ys);
});
return G__7785;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7781.call(this);
case  1 :
return str__7782.call(this,x);
default:
return str__7783.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7783.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7787 = (function (s,start){
return s.substring(start);
});
var subs__7788 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7787.call(this,s,start);
case  3 :
return subs__7788.call(this,s,start,end);
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
var symbol__7790 = (function (name){
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
var symbol__7791 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7790.call(this,ns);
case  2 :
return symbol__7791.call(this,ns,name);
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
var keyword__7793 = (function (name){
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
var keyword__7794 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7793.call(this,ns);
case  2 :
return keyword__7794.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7796 = cljs.core.seq.call(null,x);
var ys__7797 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__7796)))
{return cljs.core.nil_QMARK_.call(null,ys__7797);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__7797)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7796),cljs.core.first.call(null,ys__7797))))
{{
var G__7798 = cljs.core.next.call(null,xs__7796);
var G__7799 = cljs.core.next.call(null,ys__7797);
xs__7796 = G__7798;
ys__7797 = G__7799;
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
return cljs.core.reduce.call(null,(function (p1__7800_SHARP_,p2__7801_SHARP_){
return cljs.core.hash_combine.call(null,p1__7800_SHARP_,cljs.core.hash.call(null,p2__7801_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7802__7803 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7802__7803))
{var G__7805__7807 = cljs.core.first.call(null,G__7802__7803);
var vec__7806__7808 = G__7805__7807;
var key_name__7809 = cljs.core.nth.call(null,vec__7806__7808,0,null);
var f__7810 = cljs.core.nth.call(null,vec__7806__7808,1,null);
var G__7802__7811 = G__7802__7803;

var G__7805__7812 = G__7805__7807;
var G__7802__7813 = G__7802__7811;

while(true){
var vec__7814__7815 = G__7805__7812;
var key_name__7816 = cljs.core.nth.call(null,vec__7814__7815,0,null);
var f__7817 = cljs.core.nth.call(null,vec__7814__7815,1,null);
var G__7802__7818 = G__7802__7813;

var str_name__7819 = cljs.core.name.call(null,key_name__7816);

obj[str_name__7819] = f__7817;
var temp__3698__auto____7820 = cljs.core.next.call(null,G__7802__7818);

if(cljs.core.truth_(temp__3698__auto____7820))
{var G__7802__7821 = temp__3698__auto____7820;

{
var G__7822 = cljs.core.first.call(null,G__7802__7821);
var G__7823 = G__7802__7821;
G__7805__7812 = G__7822;
G__7802__7813 = G__7823;
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
var this__7824 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7825 = this;
return (new cljs.core.List(this__7825.meta,o,coll,(this__7825.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7826 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7827 = this;
return this__7827.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7828 = this;
return this__7828.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7829 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7830 = this;
return this__7830.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7831 = this;
return this__7831.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7832 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7833 = this;
return (new cljs.core.List(meta,this__7833.first,this__7833.rest,this__7833.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7834 = this;
return this__7834.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7835 = this;
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
var this__7836 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7837 = this;
return (new cljs.core.List(this__7837.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7838 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7839 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7840 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7841 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7842 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7843 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7844 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7845 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7846 = this;
return this__7846.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7847 = this;
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
list.cljs$lang$applyTo = (function (arglist__7848){
var items = cljs.core.seq( arglist__7848 );;
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
var this__7849 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7850 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7851 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7852 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7852.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7853 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7854 = this;
return this__7854.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7855 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__7855.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__7855.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7856 = this;
return this__7856.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7857 = this;
return (new cljs.core.Cons(meta,this__7857.first,this__7857.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7858 = null;
var G__7858__7859 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7858__7860 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7858 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7858__7859.call(this,string,f);
case  3 :
return G__7858__7860.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7858;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7862 = null;
var G__7862__7863 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7862__7864 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7862 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7862__7863.call(this,string,k);
case  3 :
return G__7862__7864.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7862;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7866 = null;
var G__7866__7867 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7866__7868 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7866 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7866__7867.call(this,string,n);
case  3 :
return G__7866__7868.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7866;
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
var G__7870 = null;
var G__7870__7871 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__7870__7872 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__7870 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__7870__7871.call(this,_,coll);
case  3 :
return G__7870__7872.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7870;
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
var x__7874 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7874;
} else
{lazy_seq.x = x__7874.call(null);
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
var this__7875 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7876 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7877 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7878 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7878.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7879 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7880 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7881 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7882 = this;
return this__7882.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7883 = this;
return (new cljs.core.LazySeq(meta,this__7883.realized,this__7883.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7884 = cljs.core.array.call(null);

var s__7885 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7885)))
{ary__7884.push(cljs.core.first.call(null,s__7885));
{
var G__7886 = cljs.core.next.call(null,s__7885);
s__7885 = G__7886;
continue;
}
} else
{return ary__7884;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7887 = s;
var i__7888 = n;
var sum__7889 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = (i__7888 > 0);

if(cljs.core.truth_(and__3546__auto____7890))
{return cljs.core.seq.call(null,s__7887);
} else
{return and__3546__auto____7890;
}
})()))
{{
var G__7891 = cljs.core.next.call(null,s__7887);
var G__7892 = (i__7888 - 1);
var G__7893 = (sum__7889 + 1);
s__7887 = G__7891;
i__7888 = G__7892;
sum__7889 = G__7893;
continue;
}
} else
{return sum__7889;
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
var concat__7897 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7898 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7899 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7894 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7894))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7894),concat.call(null,cljs.core.rest.call(null,s__7894),y));
} else
{return y;
}
})));
});
var concat__7900 = (function() { 
var G__7902__delegate = function (x,y,zs){
var cat__7896 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7895 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7895))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7895),cat.call(null,cljs.core.rest.call(null,xys__7895),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7896.call(null,concat.call(null,x,y),zs);
};
var G__7902 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7902__delegate.call(this, x, y, zs);
};
G__7902.cljs$lang$maxFixedArity = 2;
G__7902.cljs$lang$applyTo = (function (arglist__7903){
var x = cljs.core.first(arglist__7903);
var y = cljs.core.first(cljs.core.next(arglist__7903));
var zs = cljs.core.rest(cljs.core.next(arglist__7903));
return G__7902__delegate.call(this, x, y, zs);
});
return G__7902;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7897.call(this);
case  1 :
return concat__7898.call(this,x);
case  2 :
return concat__7899.call(this,x,y);
default:
return concat__7900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7900.cljs$lang$applyTo;
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
var list_STAR___7904 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7905 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7906 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7907 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7908 = (function() { 
var G__7910__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7910 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7910__delegate.call(this, a, b, c, d, more);
};
G__7910.cljs$lang$maxFixedArity = 4;
G__7910.cljs$lang$applyTo = (function (arglist__7911){
var a = cljs.core.first(arglist__7911);
var b = cljs.core.first(cljs.core.next(arglist__7911));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7911)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7911))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7911))));
return G__7910__delegate.call(this, a, b, c, d, more);
});
return G__7910;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7904.call(this,a);
case  2 :
return list_STAR___7905.call(this,a,b);
case  3 :
return list_STAR___7906.call(this,a,b,c);
case  4 :
return list_STAR___7907.call(this,a,b,c,d);
default:
return list_STAR___7908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7908.cljs$lang$applyTo;
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
var apply__7921 = (function (f,args){
var fixed_arity__7912 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7912 + 1)) <= fixed_arity__7912)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7922 = (function (f,x,args){
var arglist__7913 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7914 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7913,fixed_arity__7914) <= fixed_arity__7914)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7913));
} else
{return f.cljs$lang$applyTo(arglist__7913);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7913));
}
});
var apply__7923 = (function (f,x,y,args){
var arglist__7915 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7916 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7915,fixed_arity__7916) <= fixed_arity__7916)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7915));
} else
{return f.cljs$lang$applyTo(arglist__7915);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7915));
}
});
var apply__7924 = (function (f,x,y,z,args){
var arglist__7917 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7918 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7917,fixed_arity__7918) <= fixed_arity__7918)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7917));
} else
{return f.cljs$lang$applyTo(arglist__7917);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7917));
}
});
var apply__7925 = (function() { 
var G__7927__delegate = function (f,a,b,c,d,args){
var arglist__7919 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7920 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7919,fixed_arity__7920) <= fixed_arity__7920)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7919));
} else
{return f.cljs$lang$applyTo(arglist__7919);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7919));
}
};
var G__7927 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7927__delegate.call(this, f, a, b, c, d, args);
};
G__7927.cljs$lang$maxFixedArity = 5;
G__7927.cljs$lang$applyTo = (function (arglist__7928){
var f = cljs.core.first(arglist__7928);
var a = cljs.core.first(cljs.core.next(arglist__7928));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7928)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7928))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7928)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7928)))));
return G__7927__delegate.call(this, f, a, b, c, d, args);
});
return G__7927;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7921.call(this,f,a);
case  3 :
return apply__7922.call(this,f,a,b);
case  4 :
return apply__7923.call(this,f,a,b,c);
case  5 :
return apply__7924.call(this,f,a,b,c,d);
default:
return apply__7925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7925.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7929){
var obj = cljs.core.first(arglist__7929);
var f = cljs.core.first(cljs.core.next(arglist__7929));
var args = cljs.core.rest(cljs.core.next(arglist__7929));
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
var not_EQ___7930 = (function (x){
return false;
});
var not_EQ___7931 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7932 = (function() { 
var G__7934__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7934 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7934__delegate.call(this, x, y, more);
};
G__7934.cljs$lang$maxFixedArity = 2;
G__7934.cljs$lang$applyTo = (function (arglist__7935){
var x = cljs.core.first(arglist__7935);
var y = cljs.core.first(cljs.core.next(arglist__7935));
var more = cljs.core.rest(cljs.core.next(arglist__7935));
return G__7934__delegate.call(this, x, y, more);
});
return G__7934;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7930.call(this,x);
case  2 :
return not_EQ___7931.call(this,x,y);
default:
return not_EQ___7932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7932.cljs$lang$applyTo;
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
var G__7936 = pred;
var G__7937 = cljs.core.next.call(null,coll);
pred = G__7936;
coll = G__7937;
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
{var or__3548__auto____7938 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{{
var G__7939 = pred;
var G__7940 = cljs.core.next.call(null,coll);
pred = G__7939;
coll = G__7940;
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
var G__7941 = null;
var G__7941__7942 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7941__7943 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7941__7944 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7941__7945 = (function() { 
var G__7947__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7947 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7947__delegate.call(this, x, y, zs);
};
G__7947.cljs$lang$maxFixedArity = 2;
G__7947.cljs$lang$applyTo = (function (arglist__7948){
var x = cljs.core.first(arglist__7948);
var y = cljs.core.first(cljs.core.next(arglist__7948));
var zs = cljs.core.rest(cljs.core.next(arglist__7948));
return G__7947__delegate.call(this, x, y, zs);
});
return G__7947;
})()
;
G__7941 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7941__7942.call(this);
case  1 :
return G__7941__7943.call(this,x);
case  2 :
return G__7941__7944.call(this,x,y);
default:
return G__7941__7945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7941.cljs$lang$maxFixedArity = 2;
G__7941.cljs$lang$applyTo = G__7941__7945.cljs$lang$applyTo;
return G__7941;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7949__delegate = function (args){
return x;
};
var G__7949 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7949__delegate.call(this, args);
};
G__7949.cljs$lang$maxFixedArity = 0;
G__7949.cljs$lang$applyTo = (function (arglist__7950){
var args = cljs.core.seq( arglist__7950 );;
return G__7949__delegate.call(this, args);
});
return G__7949;
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
var comp__7954 = (function (){
return cljs.core.identity;
});
var comp__7955 = (function (f){
return f;
});
var comp__7956 = (function (f,g){
return (function() {
var G__7960 = null;
var G__7960__7961 = (function (){
return f.call(null,g.call(null));
});
var G__7960__7962 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7960__7963 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7960__7964 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7960__7965 = (function() { 
var G__7967__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7967 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7967__delegate.call(this, x, y, z, args);
};
G__7967.cljs$lang$maxFixedArity = 3;
G__7967.cljs$lang$applyTo = (function (arglist__7968){
var x = cljs.core.first(arglist__7968);
var y = cljs.core.first(cljs.core.next(arglist__7968));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7968)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7968)));
return G__7967__delegate.call(this, x, y, z, args);
});
return G__7967;
})()
;
G__7960 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7960__7961.call(this);
case  1 :
return G__7960__7962.call(this,x);
case  2 :
return G__7960__7963.call(this,x,y);
case  3 :
return G__7960__7964.call(this,x,y,z);
default:
return G__7960__7965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7960.cljs$lang$maxFixedArity = 3;
G__7960.cljs$lang$applyTo = G__7960__7965.cljs$lang$applyTo;
return G__7960;
})()
});
var comp__7957 = (function (f,g,h){
return (function() {
var G__7969 = null;
var G__7969__7970 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7969__7971 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7969__7972 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7969__7973 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7969__7974 = (function() { 
var G__7976__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7976 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7976__delegate.call(this, x, y, z, args);
};
G__7976.cljs$lang$maxFixedArity = 3;
G__7976.cljs$lang$applyTo = (function (arglist__7977){
var x = cljs.core.first(arglist__7977);
var y = cljs.core.first(cljs.core.next(arglist__7977));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7977)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7977)));
return G__7976__delegate.call(this, x, y, z, args);
});
return G__7976;
})()
;
G__7969 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7969__7970.call(this);
case  1 :
return G__7969__7971.call(this,x);
case  2 :
return G__7969__7972.call(this,x,y);
case  3 :
return G__7969__7973.call(this,x,y,z);
default:
return G__7969__7974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7969.cljs$lang$maxFixedArity = 3;
G__7969.cljs$lang$applyTo = G__7969__7974.cljs$lang$applyTo;
return G__7969;
})()
});
var comp__7958 = (function() { 
var G__7978__delegate = function (f1,f2,f3,fs){
var fs__7951 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7979__delegate = function (args){
var ret__7952 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7951),args);
var fs__7953 = cljs.core.next.call(null,fs__7951);

while(true){
if(cljs.core.truth_(fs__7953))
{{
var G__7980 = cljs.core.first.call(null,fs__7953).call(null,ret__7952);
var G__7981 = cljs.core.next.call(null,fs__7953);
ret__7952 = G__7980;
fs__7953 = G__7981;
continue;
}
} else
{return ret__7952;
}
break;
}
};
var G__7979 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7979__delegate.call(this, args);
};
G__7979.cljs$lang$maxFixedArity = 0;
G__7979.cljs$lang$applyTo = (function (arglist__7982){
var args = cljs.core.seq( arglist__7982 );;
return G__7979__delegate.call(this, args);
});
return G__7979;
})()
;
};
var G__7978 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7978__delegate.call(this, f1, f2, f3, fs);
};
G__7978.cljs$lang$maxFixedArity = 3;
G__7978.cljs$lang$applyTo = (function (arglist__7983){
var f1 = cljs.core.first(arglist__7983);
var f2 = cljs.core.first(cljs.core.next(arglist__7983));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7983)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7983)));
return G__7978__delegate.call(this, f1, f2, f3, fs);
});
return G__7978;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7954.call(this);
case  1 :
return comp__7955.call(this,f1);
case  2 :
return comp__7956.call(this,f1,f2);
case  3 :
return comp__7957.call(this,f1,f2,f3);
default:
return comp__7958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7958.cljs$lang$applyTo;
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
var partial__7984 = (function (f,arg1){
return (function() { 
var G__7989__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7989 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7989__delegate.call(this, args);
};
G__7989.cljs$lang$maxFixedArity = 0;
G__7989.cljs$lang$applyTo = (function (arglist__7990){
var args = cljs.core.seq( arglist__7990 );;
return G__7989__delegate.call(this, args);
});
return G__7989;
})()
;
});
var partial__7985 = (function (f,arg1,arg2){
return (function() { 
var G__7991__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7991 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7991__delegate.call(this, args);
};
G__7991.cljs$lang$maxFixedArity = 0;
G__7991.cljs$lang$applyTo = (function (arglist__7992){
var args = cljs.core.seq( arglist__7992 );;
return G__7991__delegate.call(this, args);
});
return G__7991;
})()
;
});
var partial__7986 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7993__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7993 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7993__delegate.call(this, args);
};
G__7993.cljs$lang$maxFixedArity = 0;
G__7993.cljs$lang$applyTo = (function (arglist__7994){
var args = cljs.core.seq( arglist__7994 );;
return G__7993__delegate.call(this, args);
});
return G__7993;
})()
;
});
var partial__7987 = (function() { 
var G__7995__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7996__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7996 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7996__delegate.call(this, args);
};
G__7996.cljs$lang$maxFixedArity = 0;
G__7996.cljs$lang$applyTo = (function (arglist__7997){
var args = cljs.core.seq( arglist__7997 );;
return G__7996__delegate.call(this, args);
});
return G__7996;
})()
;
};
var G__7995 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7995__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7995.cljs$lang$maxFixedArity = 4;
G__7995.cljs$lang$applyTo = (function (arglist__7998){
var f = cljs.core.first(arglist__7998);
var arg1 = cljs.core.first(cljs.core.next(arglist__7998));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7998)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7998))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7998))));
return G__7995__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7995;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7984.call(this,f,arg1);
case  3 :
return partial__7985.call(this,f,arg1,arg2);
case  4 :
return partial__7986.call(this,f,arg1,arg2,arg3);
default:
return partial__7987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7987.cljs$lang$applyTo;
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
var fnil__7999 = (function (f,x){
return (function() {
var G__8003 = null;
var G__8003__8004 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__8003__8005 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__8003__8006 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__8003__8007 = (function() { 
var G__8009__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__8009 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8009__delegate.call(this, a, b, c, ds);
};
G__8009.cljs$lang$maxFixedArity = 3;
G__8009.cljs$lang$applyTo = (function (arglist__8010){
var a = cljs.core.first(arglist__8010);
var b = cljs.core.first(cljs.core.next(arglist__8010));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8010)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8010)));
return G__8009__delegate.call(this, a, b, c, ds);
});
return G__8009;
})()
;
G__8003 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8003__8004.call(this,a);
case  2 :
return G__8003__8005.call(this,a,b);
case  3 :
return G__8003__8006.call(this,a,b,c);
default:
return G__8003__8007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8003.cljs$lang$maxFixedArity = 3;
G__8003.cljs$lang$applyTo = G__8003__8007.cljs$lang$applyTo;
return G__8003;
})()
});
var fnil__8000 = (function (f,x,y){
return (function() {
var G__8011 = null;
var G__8011__8012 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__8011__8013 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__8011__8014 = (function() { 
var G__8016__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__8016 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8016__delegate.call(this, a, b, c, ds);
};
G__8016.cljs$lang$maxFixedArity = 3;
G__8016.cljs$lang$applyTo = (function (arglist__8017){
var a = cljs.core.first(arglist__8017);
var b = cljs.core.first(cljs.core.next(arglist__8017));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8017)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8017)));
return G__8016__delegate.call(this, a, b, c, ds);
});
return G__8016;
})()
;
G__8011 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8011__8012.call(this,a,b);
case  3 :
return G__8011__8013.call(this,a,b,c);
default:
return G__8011__8014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8011.cljs$lang$maxFixedArity = 3;
G__8011.cljs$lang$applyTo = G__8011__8014.cljs$lang$applyTo;
return G__8011;
})()
});
var fnil__8001 = (function (f,x,y,z){
return (function() {
var G__8018 = null;
var G__8018__8019 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__8018__8020 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__8018__8021 = (function() { 
var G__8023__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__8023 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8023__delegate.call(this, a, b, c, ds);
};
G__8023.cljs$lang$maxFixedArity = 3;
G__8023.cljs$lang$applyTo = (function (arglist__8024){
var a = cljs.core.first(arglist__8024);
var b = cljs.core.first(cljs.core.next(arglist__8024));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8024)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8024)));
return G__8023__delegate.call(this, a, b, c, ds);
});
return G__8023;
})()
;
G__8018 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8018__8019.call(this,a,b);
case  3 :
return G__8018__8020.call(this,a,b,c);
default:
return G__8018__8021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8018.cljs$lang$maxFixedArity = 3;
G__8018.cljs$lang$applyTo = G__8018__8021.cljs$lang$applyTo;
return G__8018;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7999.call(this,f,x);
case  3 :
return fnil__8000.call(this,f,x,y);
case  4 :
return fnil__8001.call(this,f,x,y,z);
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
var mapi__8027 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8025 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8025))
{var s__8026 = temp__3698__auto____8025;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8026)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8026)));
} else
{return null;
}
})));
});

return mapi__8027.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8028 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8028))
{var s__8029 = temp__3698__auto____8028;

var x__8030 = f.call(null,cljs.core.first.call(null,s__8029));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__8030)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8029));
} else
{return cljs.core.cons.call(null,x__8030,keep.call(null,f,cljs.core.rest.call(null,s__8029)));
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
