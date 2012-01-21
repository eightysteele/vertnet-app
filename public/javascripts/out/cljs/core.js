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
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8040 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8037 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8037))
{var s__8038 = temp__3698__auto____8037;

var x__8039 = f.call(null,idx,cljs.core.first.call(null,s__8038));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__8039)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8038));
} else
{return cljs.core.cons.call(null,x__8039,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8038)));
}
} else
{return null;
}
})));
});

return keepi__8040.call(null,0,coll);
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
var every_pred__8085 = (function (p){
return (function() {
var ep1 = null;
var ep1__8090 = (function (){
return true;
});
var ep1__8091 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8092 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8047 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8047))
{return p.call(null,y);
} else
{return and__3546__auto____8047;
}
})());
});
var ep1__8093 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8048 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8048))
{var and__3546__auto____8049 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8049))
{return p.call(null,z);
} else
{return and__3546__auto____8049;
}
} else
{return and__3546__auto____8048;
}
})());
});
var ep1__8094 = (function() { 
var G__8096__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8050 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8050))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8050;
}
})());
};
var G__8096 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8096__delegate.call(this, x, y, z, args);
};
G__8096.cljs$lang$maxFixedArity = 3;
G__8096.cljs$lang$applyTo = (function (arglist__8097){
var x = cljs.core.first(arglist__8097);
var y = cljs.core.first(cljs.core.next(arglist__8097));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8097)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8097)));
return G__8096__delegate.call(this, x, y, z, args);
});
return G__8096;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8090.call(this);
case  1 :
return ep1__8091.call(this,x);
case  2 :
return ep1__8092.call(this,x,y);
case  3 :
return ep1__8093.call(this,x,y,z);
default:
return ep1__8094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8094.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8086 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8098 = (function (){
return true;
});
var ep2__8099 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8051 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8051))
{return p2.call(null,x);
} else
{return and__3546__auto____8051;
}
})());
});
var ep2__8100 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8052 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8052))
{var and__3546__auto____8053 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8053))
{var and__3546__auto____8054 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8054))
{return p2.call(null,y);
} else
{return and__3546__auto____8054;
}
} else
{return and__3546__auto____8053;
}
} else
{return and__3546__auto____8052;
}
})());
});
var ep2__8101 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8055 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8055))
{var and__3546__auto____8056 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8056))
{var and__3546__auto____8057 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8057))
{var and__3546__auto____8058 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8058))
{var and__3546__auto____8059 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8059))
{return p2.call(null,z);
} else
{return and__3546__auto____8059;
}
} else
{return and__3546__auto____8058;
}
} else
{return and__3546__auto____8057;
}
} else
{return and__3546__auto____8056;
}
} else
{return and__3546__auto____8055;
}
})());
});
var ep2__8102 = (function() { 
var G__8104__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8060 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8060))
{return cljs.core.every_QMARK_.call(null,(function (p1__8031_SHARP_){
var and__3546__auto____8061 = p1.call(null,p1__8031_SHARP_);

if(cljs.core.truth_(and__3546__auto____8061))
{return p2.call(null,p1__8031_SHARP_);
} else
{return and__3546__auto____8061;
}
}),args);
} else
{return and__3546__auto____8060;
}
})());
};
var G__8104 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8104__delegate.call(this, x, y, z, args);
};
G__8104.cljs$lang$maxFixedArity = 3;
G__8104.cljs$lang$applyTo = (function (arglist__8105){
var x = cljs.core.first(arglist__8105);
var y = cljs.core.first(cljs.core.next(arglist__8105));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8105)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8105)));
return G__8104__delegate.call(this, x, y, z, args);
});
return G__8104;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8098.call(this);
case  1 :
return ep2__8099.call(this,x);
case  2 :
return ep2__8100.call(this,x,y);
case  3 :
return ep2__8101.call(this,x,y,z);
default:
return ep2__8102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8102.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8087 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8106 = (function (){
return true;
});
var ep3__8107 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8062 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8062))
{var and__3546__auto____8063 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8063))
{return p3.call(null,x);
} else
{return and__3546__auto____8063;
}
} else
{return and__3546__auto____8062;
}
})());
});
var ep3__8108 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8064 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8064))
{var and__3546__auto____8065 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8065))
{var and__3546__auto____8066 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8066))
{var and__3546__auto____8067 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8067))
{var and__3546__auto____8068 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8068))
{return p3.call(null,y);
} else
{return and__3546__auto____8068;
}
} else
{return and__3546__auto____8067;
}
} else
{return and__3546__auto____8066;
}
} else
{return and__3546__auto____8065;
}
} else
{return and__3546__auto____8064;
}
})());
});
var ep3__8109 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8069 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8069))
{var and__3546__auto____8070 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8070))
{var and__3546__auto____8071 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8071))
{var and__3546__auto____8072 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8072))
{var and__3546__auto____8073 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8073))
{var and__3546__auto____8074 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8074))
{var and__3546__auto____8075 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8075))
{var and__3546__auto____8076 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8076))
{return p3.call(null,z);
} else
{return and__3546__auto____8076;
}
} else
{return and__3546__auto____8075;
}
} else
{return and__3546__auto____8074;
}
} else
{return and__3546__auto____8073;
}
} else
{return and__3546__auto____8072;
}
} else
{return and__3546__auto____8071;
}
} else
{return and__3546__auto____8070;
}
} else
{return and__3546__auto____8069;
}
})());
});
var ep3__8110 = (function() { 
var G__8112__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8077 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8077))
{return cljs.core.every_QMARK_.call(null,(function (p1__8032_SHARP_){
var and__3546__auto____8078 = p1.call(null,p1__8032_SHARP_);

if(cljs.core.truth_(and__3546__auto____8078))
{var and__3546__auto____8079 = p2.call(null,p1__8032_SHARP_);

if(cljs.core.truth_(and__3546__auto____8079))
{return p3.call(null,p1__8032_SHARP_);
} else
{return and__3546__auto____8079;
}
} else
{return and__3546__auto____8078;
}
}),args);
} else
{return and__3546__auto____8077;
}
})());
};
var G__8112 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8112__delegate.call(this, x, y, z, args);
};
G__8112.cljs$lang$maxFixedArity = 3;
G__8112.cljs$lang$applyTo = (function (arglist__8113){
var x = cljs.core.first(arglist__8113);
var y = cljs.core.first(cljs.core.next(arglist__8113));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8113)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8113)));
return G__8112__delegate.call(this, x, y, z, args);
});
return G__8112;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8106.call(this);
case  1 :
return ep3__8107.call(this,x);
case  2 :
return ep3__8108.call(this,x,y);
case  3 :
return ep3__8109.call(this,x,y,z);
default:
return ep3__8110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8110.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8088 = (function() { 
var G__8114__delegate = function (p1,p2,p3,ps){
var ps__8080 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8115 = (function (){
return true;
});
var epn__8116 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8033_SHARP_){
return p1__8033_SHARP_.call(null,x);
}),ps__8080);
});
var epn__8117 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8034_SHARP_){
var and__3546__auto____8081 = p1__8034_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8081))
{return p1__8034_SHARP_.call(null,y);
} else
{return and__3546__auto____8081;
}
}),ps__8080);
});
var epn__8118 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8035_SHARP_){
var and__3546__auto____8082 = p1__8035_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8082))
{var and__3546__auto____8083 = p1__8035_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8083))
{return p1__8035_SHARP_.call(null,z);
} else
{return and__3546__auto____8083;
}
} else
{return and__3546__auto____8082;
}
}),ps__8080);
});
var epn__8119 = (function() { 
var G__8121__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8084 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8084))
{return cljs.core.every_QMARK_.call(null,(function (p1__8036_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8036_SHARP_,args);
}),ps__8080);
} else
{return and__3546__auto____8084;
}
})());
};
var G__8121 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8121__delegate.call(this, x, y, z, args);
};
G__8121.cljs$lang$maxFixedArity = 3;
G__8121.cljs$lang$applyTo = (function (arglist__8122){
var x = cljs.core.first(arglist__8122);
var y = cljs.core.first(cljs.core.next(arglist__8122));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8122)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8122)));
return G__8121__delegate.call(this, x, y, z, args);
});
return G__8121;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8115.call(this);
case  1 :
return epn__8116.call(this,x);
case  2 :
return epn__8117.call(this,x,y);
case  3 :
return epn__8118.call(this,x,y,z);
default:
return epn__8119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8119.cljs$lang$applyTo;
return epn;
})()
};
var G__8114 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8114__delegate.call(this, p1, p2, p3, ps);
};
G__8114.cljs$lang$maxFixedArity = 3;
G__8114.cljs$lang$applyTo = (function (arglist__8123){
var p1 = cljs.core.first(arglist__8123);
var p2 = cljs.core.first(cljs.core.next(arglist__8123));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8123)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8123)));
return G__8114__delegate.call(this, p1, p2, p3, ps);
});
return G__8114;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8085.call(this,p1);
case  2 :
return every_pred__8086.call(this,p1,p2);
case  3 :
return every_pred__8087.call(this,p1,p2,p3);
default:
return every_pred__8088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8088.cljs$lang$applyTo;
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
var some_fn__8163 = (function (p){
return (function() {
var sp1 = null;
var sp1__8168 = (function (){
return null;
});
var sp1__8169 = (function (x){
return p.call(null,x);
});
var sp1__8170 = (function (x,y){
var or__3548__auto____8125 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{return p.call(null,y);
}
});
var sp1__8171 = (function (x,y,z){
var or__3548__auto____8126 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{var or__3548__auto____8127 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{return p.call(null,z);
}
}
});
var sp1__8172 = (function() { 
var G__8174__delegate = function (x,y,z,args){
var or__3548__auto____8128 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8174 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8174__delegate.call(this, x, y, z, args);
};
G__8174.cljs$lang$maxFixedArity = 3;
G__8174.cljs$lang$applyTo = (function (arglist__8175){
var x = cljs.core.first(arglist__8175);
var y = cljs.core.first(cljs.core.next(arglist__8175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8175)));
return G__8174__delegate.call(this, x, y, z, args);
});
return G__8174;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8168.call(this);
case  1 :
return sp1__8169.call(this,x);
case  2 :
return sp1__8170.call(this,x,y);
case  3 :
return sp1__8171.call(this,x,y,z);
default:
return sp1__8172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8172.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8164 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8176 = (function (){
return null;
});
var sp2__8177 = (function (x){
var or__3548__auto____8129 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{return p2.call(null,x);
}
});
var sp2__8178 = (function (x,y){
var or__3548__auto____8130 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{var or__3548__auto____8131 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8179 = (function (x,y,z){
var or__3548__auto____8133 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{var or__3548__auto____8134 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8135 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{var or__3548__auto____8136 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{var or__3548__auto____8137 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8180 = (function() { 
var G__8182__delegate = function (x,y,z,args){
var or__3548__auto____8138 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{return cljs.core.some.call(null,(function (p1__8041_SHARP_){
var or__3548__auto____8139 = p1.call(null,p1__8041_SHARP_);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
} else
{return p2.call(null,p1__8041_SHARP_);
}
}),args);
}
};
var G__8182 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8182__delegate.call(this, x, y, z, args);
};
G__8182.cljs$lang$maxFixedArity = 3;
G__8182.cljs$lang$applyTo = (function (arglist__8183){
var x = cljs.core.first(arglist__8183);
var y = cljs.core.first(cljs.core.next(arglist__8183));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8183)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8183)));
return G__8182__delegate.call(this, x, y, z, args);
});
return G__8182;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8176.call(this);
case  1 :
return sp2__8177.call(this,x);
case  2 :
return sp2__8178.call(this,x,y);
case  3 :
return sp2__8179.call(this,x,y,z);
default:
return sp2__8180.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8180.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8165 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8184 = (function (){
return null;
});
var sp3__8185 = (function (x){
var or__3548__auto____8140 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8141 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
} else
{return p3.call(null,x);
}
}
});
var sp3__8186 = (function (x,y){
var or__3548__auto____8142 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
} else
{var or__3548__auto____8143 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8145 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8146 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8187 = (function (x,y,z){
var or__3548__auto____8147 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{var or__3548__auto____8148 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{var or__3548__auto____8149 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8149))
{return or__3548__auto____8149;
} else
{var or__3548__auto____8150 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{var or__3548__auto____8151 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
} else
{var or__3548__auto____8152 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8152))
{return or__3548__auto____8152;
} else
{var or__3548__auto____8153 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{var or__3548__auto____8154 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
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
var sp3__8188 = (function() { 
var G__8190__delegate = function (x,y,z,args){
var or__3548__auto____8155 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{return cljs.core.some.call(null,(function (p1__8042_SHARP_){
var or__3548__auto____8156 = p1.call(null,p1__8042_SHARP_);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
} else
{var or__3548__auto____8157 = p2.call(null,p1__8042_SHARP_);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{return p3.call(null,p1__8042_SHARP_);
}
}
}),args);
}
};
var G__8190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8190__delegate.call(this, x, y, z, args);
};
G__8190.cljs$lang$maxFixedArity = 3;
G__8190.cljs$lang$applyTo = (function (arglist__8191){
var x = cljs.core.first(arglist__8191);
var y = cljs.core.first(cljs.core.next(arglist__8191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8191)));
return G__8190__delegate.call(this, x, y, z, args);
});
return G__8190;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8184.call(this);
case  1 :
return sp3__8185.call(this,x);
case  2 :
return sp3__8186.call(this,x,y);
case  3 :
return sp3__8187.call(this,x,y,z);
default:
return sp3__8188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8188.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8166 = (function() { 
var G__8192__delegate = function (p1,p2,p3,ps){
var ps__8158 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8193 = (function (){
return null;
});
var spn__8194 = (function (x){
return cljs.core.some.call(null,(function (p1__8043_SHARP_){
return p1__8043_SHARP_.call(null,x);
}),ps__8158);
});
var spn__8195 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8044_SHARP_){
var or__3548__auto____8159 = p1__8044_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{return p1__8044_SHARP_.call(null,y);
}
}),ps__8158);
});
var spn__8196 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8045_SHARP_){
var or__3548__auto____8160 = p1__8045_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
} else
{var or__3548__auto____8161 = p1__8045_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8161))
{return or__3548__auto____8161;
} else
{return p1__8045_SHARP_.call(null,z);
}
}
}),ps__8158);
});
var spn__8197 = (function() { 
var G__8199__delegate = function (x,y,z,args){
var or__3548__auto____8162 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{return cljs.core.some.call(null,(function (p1__8046_SHARP_){
return cljs.core.some.call(null,p1__8046_SHARP_,args);
}),ps__8158);
}
};
var G__8199 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8199__delegate.call(this, x, y, z, args);
};
G__8199.cljs$lang$maxFixedArity = 3;
G__8199.cljs$lang$applyTo = (function (arglist__8200){
var x = cljs.core.first(arglist__8200);
var y = cljs.core.first(cljs.core.next(arglist__8200));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8200)));
return G__8199__delegate.call(this, x, y, z, args);
});
return G__8199;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8193.call(this);
case  1 :
return spn__8194.call(this,x);
case  2 :
return spn__8195.call(this,x,y);
case  3 :
return spn__8196.call(this,x,y,z);
default:
return spn__8197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8197.cljs$lang$applyTo;
return spn;
})()
};
var G__8192 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8192__delegate.call(this, p1, p2, p3, ps);
};
G__8192.cljs$lang$maxFixedArity = 3;
G__8192.cljs$lang$applyTo = (function (arglist__8201){
var p1 = cljs.core.first(arglist__8201);
var p2 = cljs.core.first(cljs.core.next(arglist__8201));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8201)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8201)));
return G__8192__delegate.call(this, p1, p2, p3, ps);
});
return G__8192;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8163.call(this,p1);
case  2 :
return some_fn__8164.call(this,p1,p2);
case  3 :
return some_fn__8165.call(this,p1,p2,p3);
default:
return some_fn__8166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8166.cljs$lang$applyTo;
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
var map__8214 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8202 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8202))
{var s__8203 = temp__3698__auto____8202;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8203)),map.call(null,f,cljs.core.rest.call(null,s__8203)));
} else
{return null;
}
})));
});
var map__8215 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8204 = cljs.core.seq.call(null,c1);
var s2__8205 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8206 = s1__8204;

if(cljs.core.truth_(and__3546__auto____8206))
{return s2__8205;
} else
{return and__3546__auto____8206;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8204),cljs.core.first.call(null,s2__8205)),map.call(null,f,cljs.core.rest.call(null,s1__8204),cljs.core.rest.call(null,s2__8205)));
} else
{return null;
}
})));
});
var map__8216 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8207 = cljs.core.seq.call(null,c1);
var s2__8208 = cljs.core.seq.call(null,c2);
var s3__8209 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8210 = s1__8207;

if(cljs.core.truth_(and__3546__auto____8210))
{var and__3546__auto____8211 = s2__8208;

if(cljs.core.truth_(and__3546__auto____8211))
{return s3__8209;
} else
{return and__3546__auto____8211;
}
} else
{return and__3546__auto____8210;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8207),cljs.core.first.call(null,s2__8208),cljs.core.first.call(null,s3__8209)),map.call(null,f,cljs.core.rest.call(null,s1__8207),cljs.core.rest.call(null,s2__8208),cljs.core.rest.call(null,s3__8209)));
} else
{return null;
}
})));
});
var map__8217 = (function() { 
var G__8219__delegate = function (f,c1,c2,c3,colls){
var step__8213 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8212 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8212)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8212),step.call(null,map.call(null,cljs.core.rest,ss__8212)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8124_SHARP_){
return cljs.core.apply.call(null,f,p1__8124_SHARP_);
}),step__8213.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8219 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8219__delegate.call(this, f, c1, c2, c3, colls);
};
G__8219.cljs$lang$maxFixedArity = 4;
G__8219.cljs$lang$applyTo = (function (arglist__8220){
var f = cljs.core.first(arglist__8220);
var c1 = cljs.core.first(cljs.core.next(arglist__8220));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8220)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8220))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8220))));
return G__8219__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8219;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8214.call(this,f,c1);
case  3 :
return map__8215.call(this,f,c1,c2);
case  4 :
return map__8216.call(this,f,c1,c2,c3);
default:
return map__8217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8217.cljs$lang$applyTo;
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
{var temp__3698__auto____8221 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8221))
{var s__8222 = temp__3698__auto____8221;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8222),take.call(null,(n - 1),cljs.core.rest.call(null,s__8222)));
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
var step__8225 = (function (n,coll){
while(true){
var s__8223 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8224 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8224))
{return s__8223;
} else
{return and__3546__auto____8224;
}
})()))
{{
var G__8226 = (n - 1);
var G__8227 = cljs.core.rest.call(null,s__8223);
n = G__8226;
coll = G__8227;
continue;
}
} else
{return s__8223;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8225.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8228 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8229 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8228.call(this,n);
case  2 :
return drop_last__8229.call(this,n,s);
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
var s__8231 = cljs.core.seq.call(null,coll);
var lead__8232 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8232))
{{
var G__8233 = cljs.core.next.call(null,s__8231);
var G__8234 = cljs.core.next.call(null,lead__8232);
s__8231 = G__8233;
lead__8232 = G__8234;
continue;
}
} else
{return s__8231;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8237 = (function (pred,coll){
while(true){
var s__8235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8236 = s__8235;

if(cljs.core.truth_(and__3546__auto____8236))
{return pred.call(null,cljs.core.first.call(null,s__8235));
} else
{return and__3546__auto____8236;
}
})()))
{{
var G__8238 = pred;
var G__8239 = cljs.core.rest.call(null,s__8235);
pred = G__8238;
coll = G__8239;
continue;
}
} else
{return s__8235;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8237.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8240 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8240))
{var s__8241 = temp__3698__auto____8240;

return cljs.core.concat.call(null,s__8241,cycle.call(null,s__8241));
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
var repeat__8242 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8243 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8242.call(this,n);
case  2 :
return repeat__8243.call(this,n,x);
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
var repeatedly__8245 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8246 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8245.call(this,n);
case  2 :
return repeatedly__8246.call(this,n,f);
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
var interleave__8252 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8248 = cljs.core.seq.call(null,c1);
var s2__8249 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8250 = s1__8248;

if(cljs.core.truth_(and__3546__auto____8250))
{return s2__8249;
} else
{return and__3546__auto____8250;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8248),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8249),interleave.call(null,cljs.core.rest.call(null,s1__8248),cljs.core.rest.call(null,s2__8249))));
} else
{return null;
}
})));
});
var interleave__8253 = (function() { 
var G__8255__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8251 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8251)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8251),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8251)));
} else
{return null;
}
})));
};
var G__8255 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8255__delegate.call(this, c1, c2, colls);
};
G__8255.cljs$lang$maxFixedArity = 2;
G__8255.cljs$lang$applyTo = (function (arglist__8256){
var c1 = cljs.core.first(arglist__8256);
var c2 = cljs.core.first(cljs.core.next(arglist__8256));
var colls = cljs.core.rest(cljs.core.next(arglist__8256));
return G__8255__delegate.call(this, c1, c2, colls);
});
return G__8255;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8252.call(this,c1,c2);
default:
return interleave__8253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8253.cljs$lang$applyTo;
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
var cat__8259 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8257 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8257))
{var coll__8258 = temp__3695__auto____8257;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8258),cat.call(null,cljs.core.rest.call(null,coll__8258),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8259.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8260 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8261 = (function() { 
var G__8263__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8263 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8263__delegate.call(this, f, coll, colls);
};
G__8263.cljs$lang$maxFixedArity = 2;
G__8263.cljs$lang$applyTo = (function (arglist__8264){
var f = cljs.core.first(arglist__8264);
var coll = cljs.core.first(cljs.core.next(arglist__8264));
var colls = cljs.core.rest(cljs.core.next(arglist__8264));
return G__8263__delegate.call(this, f, coll, colls);
});
return G__8263;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8260.call(this,f,coll);
default:
return mapcat__8261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8261.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8265))
{var s__8266 = temp__3698__auto____8265;

var f__8267 = cljs.core.first.call(null,s__8266);
var r__8268 = cljs.core.rest.call(null,s__8266);

if(cljs.core.truth_(pred.call(null,f__8267)))
{return cljs.core.cons.call(null,f__8267,filter.call(null,pred,r__8268));
} else
{return filter.call(null,pred,r__8268);
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
var walk__8270 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8270.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8269_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8269_SHARP_));
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
var partition__8277 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8278 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8271 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8271))
{var s__8272 = temp__3698__auto____8271;

var p__8273 = cljs.core.take.call(null,n,s__8272);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8273))))
{return cljs.core.cons.call(null,p__8273,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8272)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8279 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8274 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8274))
{var s__8275 = temp__3698__auto____8274;

var p__8276 = cljs.core.take.call(null,n,s__8275);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8276))))
{return cljs.core.cons.call(null,p__8276,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8275)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8276,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8277.call(this,n,step);
case  3 :
return partition__8278.call(this,n,step,pad);
case  4 :
return partition__8279.call(this,n,step,pad,coll);
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
var get_in__8285 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8286 = (function (m,ks,not_found){
var sentinel__8281 = cljs.core.lookup_sentinel;
var m__8282 = m;
var ks__8283 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8283))
{var m__8284 = cljs.core.get.call(null,m__8282,cljs.core.first.call(null,ks__8283),sentinel__8281);

if(cljs.core.truth_((sentinel__8281 === m__8284)))
{return not_found;
} else
{{
var G__8288 = sentinel__8281;
var G__8289 = m__8284;
var G__8290 = cljs.core.next.call(null,ks__8283);
sentinel__8281 = G__8288;
m__8282 = G__8289;
ks__8283 = G__8290;
continue;
}
}
} else
{return m__8282;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8285.call(this,m,ks);
case  3 :
return get_in__8286.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8291,v){
var vec__8292__8293 = p__8291;
var k__8294 = cljs.core.nth.call(null,vec__8292__8293,0,null);
var ks__8295 = cljs.core.nthnext.call(null,vec__8292__8293,1);

if(cljs.core.truth_(ks__8295))
{return cljs.core.assoc.call(null,m,k__8294,assoc_in.call(null,cljs.core.get.call(null,m,k__8294),ks__8295,v));
} else
{return cljs.core.assoc.call(null,m,k__8294,v);
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
var update_in__delegate = function (m,p__8296,f,args){
var vec__8297__8298 = p__8296;
var k__8299 = cljs.core.nth.call(null,vec__8297__8298,0,null);
var ks__8300 = cljs.core.nthnext.call(null,vec__8297__8298,1);

if(cljs.core.truth_(ks__8300))
{return cljs.core.assoc.call(null,m,k__8299,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8299),ks__8300,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8299,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8299),args));
}
};
var update_in = function (m,p__8296,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8296, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8301){
var m = cljs.core.first(arglist__8301);
var p__8296 = cljs.core.first(cljs.core.next(arglist__8301));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8301)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8301)));
return update_in__delegate.call(this, m, p__8296, f, args);
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
var this__8302 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8327 = null;
var G__8327__8328 = (function (coll,k){
var this__8303 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8327__8329 = (function (coll,k,not_found){
var this__8304 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8327 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8327__8328.call(this,coll,k);
case  3 :
return G__8327__8329.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8327;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8305 = this;
var new_array__8306 = cljs.core.aclone.call(null,this__8305.array);

(new_array__8306[k] = v);
return (new cljs.core.Vector(this__8305.meta,new_array__8306));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8307 = this;
var new_array__8308 = cljs.core.aclone.call(null,this__8307.array);

new_array__8308.push(o);
return (new cljs.core.Vector(this__8307.meta,new_array__8308));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8331 = null;
var G__8331__8332 = (function (v,f){
var this__8309 = this;
return cljs.core.ci_reduce.call(null,this__8309.array,f);
});
var G__8331__8333 = (function (v,f,start){
var this__8310 = this;
return cljs.core.ci_reduce.call(null,this__8310.array,f,start);
});
G__8331 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8331__8332.call(this,v,f);
case  3 :
return G__8331__8333.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8331;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8311 = this;
if(cljs.core.truth_((this__8311.array.length > 0)))
{var vector_seq__8312 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8311.array.length)))
{return cljs.core.cons.call(null,(this__8311.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8312.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8313 = this;
return this__8313.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8314 = this;
var count__8315 = this__8314.array.length;

if(cljs.core.truth_((count__8315 > 0)))
{return (this__8314.array[(count__8315 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8316 = this;
if(cljs.core.truth_((this__8316.array.length > 0)))
{var new_array__8317 = cljs.core.aclone.call(null,this__8316.array);

new_array__8317.pop();
return (new cljs.core.Vector(this__8316.meta,new_array__8317));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8318 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8319 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8320 = this;
return (new cljs.core.Vector(meta,this__8320.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8321 = this;
return this__8321.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8335 = null;
var G__8335__8336 = (function (coll,n){
var this__8322 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8323 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8323))
{return (n < this__8322.array.length);
} else
{return and__3546__auto____8323;
}
})()))
{return (this__8322.array[n]);
} else
{return null;
}
});
var G__8335__8337 = (function (coll,n,not_found){
var this__8324 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8325 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8325))
{return (n < this__8324.array.length);
} else
{return and__3546__auto____8325;
}
})()))
{return (this__8324.array[n]);
} else
{return not_found;
}
});
G__8335 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8335__8336.call(this,coll,n);
case  3 :
return G__8335__8337.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8335;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8326 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8326.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__8339 = null;
var G__8339__8340 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8339__8341 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8339 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8339__8340.call(this,_,k);
case  3 :
return G__8339__8341.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8339;
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
vector.cljs$lang$applyTo = (function (arglist__8343){
var args = cljs.core.seq( arglist__8343 );;
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
var this__8344 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8364 = null;
var G__8364__8365 = (function (coll,k){
var this__8345 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8364__8366 = (function (coll,k,not_found){
var this__8346 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8364 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8364__8365.call(this,coll,k);
case  3 :
return G__8364__8366.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8364;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8347 = this;
var v_pos__8348 = (this__8347.start + key);

return (new cljs.core.Subvec(this__8347.meta,cljs.core._assoc.call(null,this__8347.v,v_pos__8348,val),this__8347.start,((this__8347.end > (v_pos__8348 + 1)) ? this__8347.end : (v_pos__8348 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8349 = this;
return (new cljs.core.Subvec(this__8349.meta,cljs.core._assoc_n.call(null,this__8349.v,this__8349.end,o),this__8349.start,(this__8349.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8368 = null;
var G__8368__8369 = (function (coll,f){
var this__8350 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8368__8370 = (function (coll,f,start){
var this__8351 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8368 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8368__8369.call(this,coll,f);
case  3 :
return G__8368__8370.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8368;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8352 = this;
var subvec_seq__8353 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8352.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8352.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8353.call(null,this__8352.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8354 = this;
return (this__8354.end - this__8354.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8355 = this;
return cljs.core._nth.call(null,this__8355.v,(this__8355.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8356 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8356.start,this__8356.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8356.meta,this__8356.v,this__8356.start,(this__8356.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8357 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8358 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8359 = this;
return (new cljs.core.Subvec(meta,this__8359.v,this__8359.start,this__8359.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8360 = this;
return this__8360.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8372 = null;
var G__8372__8373 = (function (coll,n){
var this__8361 = this;
return cljs.core._nth.call(null,this__8361.v,(this__8361.start + n));
});
var G__8372__8374 = (function (coll,n,not_found){
var this__8362 = this;
return cljs.core._nth.call(null,this__8362.v,(this__8362.start + n),not_found);
});
G__8372 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8372__8373.call(this,coll,n);
case  3 :
return G__8372__8374.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8372;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8363 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8363.meta);
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
var subvec__8376 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8377 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8376.call(this,v,start);
case  3 :
return subvec__8377.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__8379 = null;
var G__8379__8380 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8379__8381 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8379 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8379__8380.call(this,_,k);
case  3 :
return G__8379__8381.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8379;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8383 = this;
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
var len__8384 = array.length;

var i__8385 = 0;

while(true){
if(cljs.core.truth_((i__8385 < len__8384)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8385]))))
{return i__8385;
} else
{{
var G__8386 = (i__8385 + incr);
i__8385 = G__8386;
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
var obj_map_contains_key_QMARK___8388 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8389 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8387 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8387))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8387;
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
return obj_map_contains_key_QMARK___8388.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8389.call(this,k,strobj,true_val,false_val);
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
var this__8392 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8411 = null;
var G__8411__8412 = (function (coll,k){
var this__8393 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8411__8413 = (function (coll,k,not_found){
var this__8394 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8394.strobj,(this__8394.strobj[k]),not_found);
});
G__8411 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8411__8412.call(this,coll,k);
case  3 :
return G__8411__8413.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8411;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8395 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8396 = goog.object.clone.call(null,this__8395.strobj);
var overwrite_QMARK___8397 = new_strobj__8396.hasOwnProperty(k);

(new_strobj__8396[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8397))
{return (new cljs.core.ObjMap(this__8395.meta,this__8395.keys,new_strobj__8396));
} else
{var new_keys__8398 = cljs.core.aclone.call(null,this__8395.keys);

new_keys__8398.push(k);
return (new cljs.core.ObjMap(this__8395.meta,new_keys__8398,new_strobj__8396));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8395.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8399 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8399.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8400 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8401 = this;
if(cljs.core.truth_((this__8401.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8391_SHARP_){
return cljs.core.vector.call(null,p1__8391_SHARP_,(this__8401.strobj[p1__8391_SHARP_]));
}),this__8401.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8402 = this;
return this__8402.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8403 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8404 = this;
return (new cljs.core.ObjMap(meta,this__8404.keys,this__8404.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8405 = this;
return this__8405.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8406 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8406.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8407 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8408 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8408))
{return this__8407.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8408;
}
})()))
{var new_keys__8409 = cljs.core.aclone.call(null,this__8407.keys);
var new_strobj__8410 = goog.object.clone.call(null,this__8407.strobj);

new_keys__8409.splice(cljs.core.scan_array.call(null,1,k,new_keys__8409),1);
cljs.core.js_delete.call(null,new_strobj__8410,k);
return (new cljs.core.ObjMap(this__8407.meta,new_keys__8409,new_strobj__8410));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8416 = null;
var G__8416__8417 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8416__8418 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8416 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8416__8417.call(this,_,k);
case  3 :
return G__8416__8418.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8416;
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
var this__8420 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8450 = null;
var G__8450__8451 = (function (coll,k){
var this__8421 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8450__8452 = (function (coll,k,not_found){
var this__8422 = this;
var bucket__8423 = (this__8422.hashobj[cljs.core.hash.call(null,k)]);
var i__8424 = (cljs.core.truth_(bucket__8423)?cljs.core.scan_array.call(null,2,k,bucket__8423):null);

if(cljs.core.truth_(i__8424))
{return (bucket__8423[(i__8424 + 1)]);
} else
{return not_found;
}
});
G__8450 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8450__8451.call(this,coll,k);
case  3 :
return G__8450__8452.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8450;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8425 = this;
var h__8426 = cljs.core.hash.call(null,k);
var bucket__8427 = (this__8425.hashobj[h__8426]);

if(cljs.core.truth_(bucket__8427))
{var new_bucket__8428 = cljs.core.aclone.call(null,bucket__8427);
var new_hashobj__8429 = goog.object.clone.call(null,this__8425.hashobj);

(new_hashobj__8429[h__8426] = new_bucket__8428);
var temp__3695__auto____8430 = cljs.core.scan_array.call(null,2,k,new_bucket__8428);

if(cljs.core.truth_(temp__3695__auto____8430))
{var i__8431 = temp__3695__auto____8430;

(new_bucket__8428[(i__8431 + 1)] = v);
return (new cljs.core.HashMap(this__8425.meta,this__8425.count,new_hashobj__8429));
} else
{new_bucket__8428.push(k,v);
return (new cljs.core.HashMap(this__8425.meta,(this__8425.count + 1),new_hashobj__8429));
}
} else
{var new_hashobj__8432 = goog.object.clone.call(null,this__8425.hashobj);

(new_hashobj__8432[h__8426] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__8425.meta,(this__8425.count + 1),new_hashobj__8432));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8433 = this;
var bucket__8434 = (this__8433.hashobj[cljs.core.hash.call(null,k)]);
var i__8435 = (cljs.core.truth_(bucket__8434)?cljs.core.scan_array.call(null,2,k,bucket__8434):null);

if(cljs.core.truth_(i__8435))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8436 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8437 = this;
if(cljs.core.truth_((this__8437.count > 0)))
{var hashes__8438 = cljs.core.js_keys.call(null,this__8437.hashobj);

return cljs.core.mapcat.call(null,(function (p1__8415_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8437.hashobj[p1__8415_SHARP_])));
}),hashes__8438);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8439 = this;
return this__8439.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8440 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8441 = this;
return (new cljs.core.HashMap(meta,this__8441.count,this__8441.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8442 = this;
return this__8442.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8443 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8443.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8444 = this;
var h__8445 = cljs.core.hash.call(null,k);
var bucket__8446 = (this__8444.hashobj[h__8445]);
var i__8447 = (cljs.core.truth_(bucket__8446)?cljs.core.scan_array.call(null,2,k,bucket__8446):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8447)))
{return coll;
} else
{var new_hashobj__8448 = goog.object.clone.call(null,this__8444.hashobj);

if(cljs.core.truth_((3 > bucket__8446.length)))
{cljs.core.js_delete.call(null,new_hashobj__8448,h__8445);
} else
{var new_bucket__8449 = cljs.core.aclone.call(null,bucket__8446);

new_bucket__8449.splice(i__8447,2);
(new_hashobj__8448[h__8445] = new_bucket__8449);
}
return (new cljs.core.HashMap(this__8444.meta,(this__8444.count - 1),new_hashobj__8448));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8454 = ks.length;

var i__8455 = 0;
var out__8456 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8455 < len__8454)))
{{
var G__8457 = (i__8455 + 1);
var G__8458 = cljs.core.assoc.call(null,out__8456,(ks[i__8455]),(vs[i__8455]));
i__8455 = G__8457;
out__8456 = G__8458;
continue;
}
} else
{return out__8456;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8459 = null;
var G__8459__8460 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8459__8461 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8459 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8459__8460.call(this,_,k);
case  3 :
return G__8459__8461.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8459;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__8463 = cljs.core.seq.call(null,keyvals);
var out__8464 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8463))
{{
var G__8465 = cljs.core.nnext.call(null,in$__8463);
var G__8466 = cljs.core.assoc.call(null,out__8464,cljs.core.first.call(null,in$__8463),cljs.core.second.call(null,in$__8463));
in$__8463 = G__8465;
out__8464 = G__8466;
continue;
}
} else
{return out__8464;
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
hash_map.cljs$lang$applyTo = (function (arglist__8467){
var keyvals = cljs.core.seq( arglist__8467 );;
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
{return cljs.core.reduce.call(null,(function (p1__8468_SHARP_,p2__8469_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8470 = p1__8468_SHARP_;

if(cljs.core.truth_(or__3548__auto____8470))
{return or__3548__auto____8470;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8469_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8471){
var maps = cljs.core.seq( arglist__8471 );;
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
{var merge_entry__8474 = (function (m,e){
var k__8472 = cljs.core.first.call(null,e);
var v__8473 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8472)))
{return cljs.core.assoc.call(null,m,k__8472,f.call(null,cljs.core.get.call(null,m,k__8472),v__8473));
} else
{return cljs.core.assoc.call(null,m,k__8472,v__8473);
}
});
var merge2__8476 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8474,(function (){var or__3548__auto____8475 = m1;

if(cljs.core.truth_(or__3548__auto____8475))
{return or__3548__auto____8475;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8476,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8477){
var f = cljs.core.first(arglist__8477);
var maps = cljs.core.rest(arglist__8477);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8479 = cljs.core.ObjMap.fromObject([],{});
var keys__8480 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8480))
{var key__8481 = cljs.core.first.call(null,keys__8480);
var entry__8482 = cljs.core.get.call(null,map,key__8481,"﷐'clojure.core/not-found");

{
var G__8483 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8482,"﷐'clojure.core/not-found"))?cljs.core.assoc.call(null,ret__8479,key__8481,entry__8482):ret__8479);
var G__8484 = cljs.core.next.call(null,keys__8480);
ret__8479 = G__8483;
keys__8480 = G__8484;
continue;
}
} else
{return ret__8479;
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
var this__8485 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8498 = null;
var G__8498__8499 = (function (coll,v){
var this__8486 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8498__8500 = (function (coll,v,not_found){
var this__8487 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8487.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8498 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8498__8499.call(this,coll,v);
case  3 :
return G__8498__8500.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8498;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8488 = this;
return (new cljs.core.Set(this__8488.meta,cljs.core.assoc.call(null,this__8488.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8489 = this;
return cljs.core.keys.call(null,this__8489.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8490 = this;
return (new cljs.core.Set(this__8490.meta,cljs.core.dissoc.call(null,this__8490.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8491 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8492 = this;
var and__3546__auto____8493 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8493))
{var and__3546__auto____8494 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8494))
{return cljs.core.every_QMARK_.call(null,(function (p1__8478_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8478_SHARP_);
}),other);
} else
{return and__3546__auto____8494;
}
} else
{return and__3546__auto____8493;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8495 = this;
return (new cljs.core.Set(meta,this__8495.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8496 = this;
return this__8496.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8497 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8497.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__8502 = null;
var G__8502__8503 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8502__8504 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8502 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8502__8503.call(this,_,k);
case  3 :
return G__8502__8504.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8502;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8507 = cljs.core.seq.call(null,coll);
var out__8508 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8507))))
{{
var G__8509 = cljs.core.rest.call(null,in$__8507);
var G__8510 = cljs.core.conj.call(null,out__8508,cljs.core.first.call(null,in$__8507));
in$__8507 = G__8509;
out__8508 = G__8510;
continue;
}
} else
{return out__8508;
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
{var n__8511 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8512 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8512))
{var e__8513 = temp__3695__auto____8512;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8513));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8511,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8506_SHARP_){
var temp__3695__auto____8514 = cljs.core.find.call(null,smap,p1__8506_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8514))
{var e__8515 = temp__3695__auto____8514;

return cljs.core.second.call(null,e__8515);
} else
{return p1__8506_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8523 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8516,seen){
while(true){
var vec__8517__8518 = p__8516;
var f__8519 = cljs.core.nth.call(null,vec__8517__8518,0,null);
var xs__8520 = vec__8517__8518;

var temp__3698__auto____8521 = cljs.core.seq.call(null,xs__8520);

if(cljs.core.truth_(temp__3698__auto____8521))
{var s__8522 = temp__3698__auto____8521;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8519)))
{{
var G__8524 = cljs.core.rest.call(null,s__8522);
var G__8525 = seen;
p__8516 = G__8524;
seen = G__8525;
continue;
}
} else
{return cljs.core.cons.call(null,f__8519,step.call(null,cljs.core.rest.call(null,s__8522),cljs.core.conj.call(null,seen,f__8519)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8523.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8526 = cljs.core.Vector.fromArray([]);
var s__8527 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8527)))
{{
var G__8528 = cljs.core.conj.call(null,ret__8526,cljs.core.first.call(null,s__8527));
var G__8529 = cljs.core.next.call(null,s__8527);
ret__8526 = G__8528;
s__8527 = G__8529;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8526);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8530 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8530))
{return or__3548__auto____8530;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8531 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8531 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8531 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8532 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8532))
{return or__3548__auto____8532;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8533 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8533 > -1)))
{return cljs.core.subs.call(null,x,2,i__8533);
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
var map__8536 = cljs.core.ObjMap.fromObject([],{});
var ks__8537 = cljs.core.seq.call(null,keys);
var vs__8538 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8539 = ks__8537;

if(cljs.core.truth_(and__3546__auto____8539))
{return vs__8538;
} else
{return and__3546__auto____8539;
}
})()))
{{
var G__8540 = cljs.core.assoc.call(null,map__8536,cljs.core.first.call(null,ks__8537),cljs.core.first.call(null,vs__8538));
var G__8541 = cljs.core.next.call(null,ks__8537);
var G__8542 = cljs.core.next.call(null,vs__8538);
map__8536 = G__8540;
ks__8537 = G__8541;
vs__8538 = G__8542;
continue;
}
} else
{return map__8536;
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
var max_key__8545 = (function (k,x){
return x;
});
var max_key__8546 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8547 = (function() { 
var G__8549__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8534_SHARP_,p2__8535_SHARP_){
return max_key.call(null,k,p1__8534_SHARP_,p2__8535_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8549 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8549__delegate.call(this, k, x, y, more);
};
G__8549.cljs$lang$maxFixedArity = 3;
G__8549.cljs$lang$applyTo = (function (arglist__8550){
var k = cljs.core.first(arglist__8550);
var x = cljs.core.first(cljs.core.next(arglist__8550));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8550)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8550)));
return G__8549__delegate.call(this, k, x, y, more);
});
return G__8549;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8545.call(this,k,x);
case  3 :
return max_key__8546.call(this,k,x,y);
default:
return max_key__8547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8547.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8551 = (function (k,x){
return x;
});
var min_key__8552 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8553 = (function() { 
var G__8555__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8543_SHARP_,p2__8544_SHARP_){
return min_key.call(null,k,p1__8543_SHARP_,p2__8544_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8555 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8555__delegate.call(this, k, x, y, more);
};
G__8555.cljs$lang$maxFixedArity = 3;
G__8555.cljs$lang$applyTo = (function (arglist__8556){
var k = cljs.core.first(arglist__8556);
var x = cljs.core.first(cljs.core.next(arglist__8556));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8556)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8556)));
return G__8555__delegate.call(this, k, x, y, more);
});
return G__8555;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8551.call(this,k,x);
case  3 :
return min_key__8552.call(this,k,x,y);
default:
return min_key__8553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8553.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8559 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8560 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8557))
{var s__8558 = temp__3698__auto____8557;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8558),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8558)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8559.call(this,n,step);
case  3 :
return partition_all__8560.call(this,n,step,coll);
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
var temp__3698__auto____8562 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8562))
{var s__8563 = temp__3698__auto____8562;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8563))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8563),take_while.call(null,pred,cljs.core.rest.call(null,s__8563)));
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
var this__8564 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8565 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8581 = null;
var G__8581__8582 = (function (rng,f){
var this__8566 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8581__8583 = (function (rng,f,s){
var this__8567 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8581 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8581__8582.call(this,rng,f);
case  3 :
return G__8581__8583.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8581;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8568 = this;
var comp__8569 = (cljs.core.truth_((this__8568.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8569.call(null,this__8568.start,this__8568.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8570 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8570.end - this__8570.start) / this__8570.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8571 = this;
return this__8571.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8572 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8572.meta,(this__8572.start + this__8572.step),this__8572.end,this__8572.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8573 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8574 = this;
return (new cljs.core.Range(meta,this__8574.start,this__8574.end,this__8574.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8575 = this;
return this__8575.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8585 = null;
var G__8585__8586 = (function (rng,n){
var this__8576 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8576.start + (n * this__8576.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8577 = (this__8576.start > this__8576.end);

if(cljs.core.truth_(and__3546__auto____8577))
{return cljs.core._EQ_.call(null,this__8576.step,0);
} else
{return and__3546__auto____8577;
}
})()))
{return this__8576.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8585__8587 = (function (rng,n,not_found){
var this__8578 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8578.start + (n * this__8578.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8579 = (this__8578.start > this__8578.end);

if(cljs.core.truth_(and__3546__auto____8579))
{return cljs.core._EQ_.call(null,this__8578.step,0);
} else
{return and__3546__auto____8579;
}
})()))
{return this__8578.start;
} else
{return not_found;
}
}
});
G__8585 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8585__8586.call(this,rng,n);
case  3 :
return G__8585__8587.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8585;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8580 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8580.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8589 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8590 = (function (end){
return range.call(null,0,end,1);
});
var range__8591 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8592 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8589.call(this);
case  1 :
return range__8590.call(this,start);
case  2 :
return range__8591.call(this,start,end);
case  3 :
return range__8592.call(this,start,end,step);
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
var temp__3698__auto____8594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8594))
{var s__8595 = temp__3698__auto____8594;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8595),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8595)));
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
var temp__3698__auto____8597 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8597))
{var s__8598 = temp__3698__auto____8597;

var fst__8599 = cljs.core.first.call(null,s__8598);
var fv__8600 = f.call(null,fst__8599);
var run__8601 = cljs.core.cons.call(null,fst__8599,cljs.core.take_while.call(null,(function (p1__8596_SHARP_){
return cljs.core._EQ_.call(null,fv__8600,f.call(null,p1__8596_SHARP_));
}),cljs.core.next.call(null,s__8598)));

return cljs.core.cons.call(null,run__8601,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8601),s__8598))));
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
var reductions__8616 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8612 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8612))
{var s__8613 = temp__3695__auto____8612;

return reductions.call(null,f,cljs.core.first.call(null,s__8613),cljs.core.rest.call(null,s__8613));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8617 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8614 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8614))
{var s__8615 = temp__3698__auto____8614;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8615)),cljs.core.rest.call(null,s__8615));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8616.call(this,f,init);
case  3 :
return reductions__8617.call(this,f,init,coll);
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
var juxt__8620 = (function (f){
return (function() {
var G__8625 = null;
var G__8625__8626 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8625__8627 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8625__8628 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8625__8629 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8625__8630 = (function() { 
var G__8632__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8632 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8632__delegate.call(this, x, y, z, args);
};
G__8632.cljs$lang$maxFixedArity = 3;
G__8632.cljs$lang$applyTo = (function (arglist__8633){
var x = cljs.core.first(arglist__8633);
var y = cljs.core.first(cljs.core.next(arglist__8633));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8633)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8633)));
return G__8632__delegate.call(this, x, y, z, args);
});
return G__8632;
})()
;
G__8625 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8625__8626.call(this);
case  1 :
return G__8625__8627.call(this,x);
case  2 :
return G__8625__8628.call(this,x,y);
case  3 :
return G__8625__8629.call(this,x,y,z);
default:
return G__8625__8630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8625.cljs$lang$maxFixedArity = 3;
G__8625.cljs$lang$applyTo = G__8625__8630.cljs$lang$applyTo;
return G__8625;
})()
});
var juxt__8621 = (function (f,g){
return (function() {
var G__8634 = null;
var G__8634__8635 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8634__8636 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8634__8637 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8634__8638 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8634__8639 = (function() { 
var G__8641__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8641__delegate.call(this, x, y, z, args);
};
G__8641.cljs$lang$maxFixedArity = 3;
G__8641.cljs$lang$applyTo = (function (arglist__8642){
var x = cljs.core.first(arglist__8642);
var y = cljs.core.first(cljs.core.next(arglist__8642));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8642)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8642)));
return G__8641__delegate.call(this, x, y, z, args);
});
return G__8641;
})()
;
G__8634 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8634__8635.call(this);
case  1 :
return G__8634__8636.call(this,x);
case  2 :
return G__8634__8637.call(this,x,y);
case  3 :
return G__8634__8638.call(this,x,y,z);
default:
return G__8634__8639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8634.cljs$lang$maxFixedArity = 3;
G__8634.cljs$lang$applyTo = G__8634__8639.cljs$lang$applyTo;
return G__8634;
})()
});
var juxt__8622 = (function (f,g,h){
return (function() {
var G__8643 = null;
var G__8643__8644 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8643__8645 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8643__8646 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8643__8647 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8643__8648 = (function() { 
var G__8650__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8650 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8650__delegate.call(this, x, y, z, args);
};
G__8650.cljs$lang$maxFixedArity = 3;
G__8650.cljs$lang$applyTo = (function (arglist__8651){
var x = cljs.core.first(arglist__8651);
var y = cljs.core.first(cljs.core.next(arglist__8651));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8651)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8651)));
return G__8650__delegate.call(this, x, y, z, args);
});
return G__8650;
})()
;
G__8643 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8643__8644.call(this);
case  1 :
return G__8643__8645.call(this,x);
case  2 :
return G__8643__8646.call(this,x,y);
case  3 :
return G__8643__8647.call(this,x,y,z);
default:
return G__8643__8648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8643.cljs$lang$maxFixedArity = 3;
G__8643.cljs$lang$applyTo = G__8643__8648.cljs$lang$applyTo;
return G__8643;
})()
});
var juxt__8623 = (function() { 
var G__8652__delegate = function (f,g,h,fs){
var fs__8619 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8653 = null;
var G__8653__8654 = (function (){
return cljs.core.reduce.call(null,(function (p1__8602_SHARP_,p2__8603_SHARP_){
return cljs.core.conj.call(null,p1__8602_SHARP_,p2__8603_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__8619);
});
var G__8653__8655 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8604_SHARP_,p2__8605_SHARP_){
return cljs.core.conj.call(null,p1__8604_SHARP_,p2__8605_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__8619);
});
var G__8653__8656 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8606_SHARP_,p2__8607_SHARP_){
return cljs.core.conj.call(null,p1__8606_SHARP_,p2__8607_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__8619);
});
var G__8653__8657 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8608_SHARP_,p2__8609_SHARP_){
return cljs.core.conj.call(null,p1__8608_SHARP_,p2__8609_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__8619);
});
var G__8653__8658 = (function() { 
var G__8660__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8610_SHARP_,p2__8611_SHARP_){
return cljs.core.conj.call(null,p1__8610_SHARP_,cljs.core.apply.call(null,p2__8611_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__8619);
};
var G__8660 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8660__delegate.call(this, x, y, z, args);
};
G__8660.cljs$lang$maxFixedArity = 3;
G__8660.cljs$lang$applyTo = (function (arglist__8661){
var x = cljs.core.first(arglist__8661);
var y = cljs.core.first(cljs.core.next(arglist__8661));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8661)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8661)));
return G__8660__delegate.call(this, x, y, z, args);
});
return G__8660;
})()
;
G__8653 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8653__8654.call(this);
case  1 :
return G__8653__8655.call(this,x);
case  2 :
return G__8653__8656.call(this,x,y);
case  3 :
return G__8653__8657.call(this,x,y,z);
default:
return G__8653__8658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8653.cljs$lang$maxFixedArity = 3;
G__8653.cljs$lang$applyTo = G__8653__8658.cljs$lang$applyTo;
return G__8653;
})()
};
var G__8652 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8652__delegate.call(this, f, g, h, fs);
};
G__8652.cljs$lang$maxFixedArity = 3;
G__8652.cljs$lang$applyTo = (function (arglist__8662){
var f = cljs.core.first(arglist__8662);
var g = cljs.core.first(cljs.core.next(arglist__8662));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8662)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8662)));
return G__8652__delegate.call(this, f, g, h, fs);
});
return G__8652;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8620.call(this,f);
case  2 :
return juxt__8621.call(this,f,g);
case  3 :
return juxt__8622.call(this,f,g,h);
default:
return juxt__8623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8623.cljs$lang$applyTo;
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
var dorun__8664 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8667 = cljs.core.next.call(null,coll);
coll = G__8667;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8665 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8663 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8663))
{return (n > 0);
} else
{return and__3546__auto____8663;
}
})()))
{{
var G__8668 = (n - 1);
var G__8669 = cljs.core.next.call(null,coll);
n = G__8668;
coll = G__8669;
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
return dorun__8664.call(this,n);
case  2 :
return dorun__8665.call(this,n,coll);
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
var doall__8670 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8671 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8670.call(this,n);
case  2 :
return doall__8671.call(this,n,coll);
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
var matches__8673 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8673),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8673),1)))
{return cljs.core.first.call(null,matches__8673);
} else
{return cljs.core.vec.call(null,matches__8673);
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
var matches__8674 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__8674)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8674),1)))
{return cljs.core.first.call(null,matches__8674);
} else
{return cljs.core.vec.call(null,matches__8674);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8675 = cljs.core.re_find.call(null,re,s);
var match_idx__8676 = s.search(re);
var match_str__8677 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8675))?cljs.core.first.call(null,match_data__8675):match_data__8675);
var post_match__8678 = cljs.core.subs.call(null,s,(match_idx__8676 + cljs.core.count.call(null,match_str__8677)));

if(cljs.core.truth_(match_data__8675))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8675,re_seq.call(null,re,post_match__8678));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8679_SHARP_){
return print_one.call(null,p1__8679_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8680 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____8680))
{var and__3546__auto____8684 = (function (){var x__1405__auto____8681 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8682 = x__1405__auto____8681;

if(cljs.core.truth_(and__3546__auto____8682))
{var and__3546__auto____8683 = x__1405__auto____8681.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8683))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____8681));
} else
{return and__3546__auto____8683;
}
} else
{return and__3546__auto____8682;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__1405__auto____8681);
}
})();

if(cljs.core.truth_(and__3546__auto____8684))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8684;
}
} else
{return and__3546__auto____8680;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__1405__auto____8685 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__1405__auto____8685;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8687 = x__1405__auto____8685.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__1405__auto____8685));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__1405__auto____8685);
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
var first_obj__8688 = cljs.core.first.call(null,objs);
var sb__8689 = (new goog.string.StringBuffer());

var G__8690__8691 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8690__8691))
{var obj__8692 = cljs.core.first.call(null,G__8690__8691);
var G__8690__8693 = G__8690__8691;

while(true){
if(cljs.core.truth_((obj__8692 === first_obj__8688)))
{} else
{sb__8689.append(" ");
}
var G__8694__8695 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8692,opts));

if(cljs.core.truth_(G__8694__8695))
{var string__8696 = cljs.core.first.call(null,G__8694__8695);
var G__8694__8697 = G__8694__8695;

while(true){
sb__8689.append(string__8696);
var temp__3698__auto____8698 = cljs.core.next.call(null,G__8694__8697);

if(cljs.core.truth_(temp__3698__auto____8698))
{var G__8694__8699 = temp__3698__auto____8698;

{
var G__8702 = cljs.core.first.call(null,G__8694__8699);
var G__8703 = G__8694__8699;
string__8696 = G__8702;
G__8694__8697 = G__8703;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8700 = cljs.core.next.call(null,G__8690__8693);

if(cljs.core.truth_(temp__3698__auto____8700))
{var G__8690__8701 = temp__3698__auto____8700;

{
var G__8704 = cljs.core.first.call(null,G__8690__8701);
var G__8705 = G__8690__8701;
obj__8692 = G__8704;
G__8690__8693 = G__8705;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__8689);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8706 = cljs.core.first.call(null,objs);

var G__8707__8708 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8707__8708))
{var obj__8709 = cljs.core.first.call(null,G__8707__8708);
var G__8707__8710 = G__8707__8708;

while(true){
if(cljs.core.truth_((obj__8709 === first_obj__8706)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8711__8712 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8709,opts));

if(cljs.core.truth_(G__8711__8712))
{var string__8713 = cljs.core.first.call(null,G__8711__8712);
var G__8711__8714 = G__8711__8712;

while(true){
cljs.core.string_print.call(null,string__8713);
var temp__3698__auto____8715 = cljs.core.next.call(null,G__8711__8714);

if(cljs.core.truth_(temp__3698__auto____8715))
{var G__8711__8716 = temp__3698__auto____8715;

{
var G__8719 = cljs.core.first.call(null,G__8711__8716);
var G__8720 = G__8711__8716;
string__8713 = G__8719;
G__8711__8714 = G__8720;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8717 = cljs.core.next.call(null,G__8707__8710);

if(cljs.core.truth_(temp__3698__auto____8717))
{var G__8707__8718 = temp__3698__auto____8717;

{
var G__8721 = cljs.core.first.call(null,G__8707__8718);
var G__8722 = G__8707__8718;
obj__8709 = G__8721;
G__8707__8710 = G__8722;
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
pr_str.cljs$lang$applyTo = (function (arglist__8723){
var objs = cljs.core.seq( arglist__8723 );;
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
pr.cljs$lang$applyTo = (function (arglist__8724){
var objs = cljs.core.seq( arglist__8724 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8725){
var objs = cljs.core.seq( arglist__8725 );;
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
println.cljs$lang$applyTo = (function (arglist__8726){
var objs = cljs.core.seq( arglist__8726 );;
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
prn.cljs$lang$applyTo = (function (arglist__8727){
var objs = cljs.core.seq( arglist__8727 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8728 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8728,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8729 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8729))
{var nspc__8730 = temp__3698__auto____8729;

return cljs.core.str.call(null,nspc__8730,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8731 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8731))
{var nspc__8732 = temp__3698__auto____8731;

return cljs.core.str.call(null,nspc__8732,"/");
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
var pr_pair__8733 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8733,"{",", ","}",opts,coll);
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
var this__8734 = this;
var G__8735__8736 = cljs.core.seq.call(null,this__8734.watches);

if(cljs.core.truth_(G__8735__8736))
{var G__8738__8740 = cljs.core.first.call(null,G__8735__8736);
var vec__8739__8741 = G__8738__8740;
var key__8742 = cljs.core.nth.call(null,vec__8739__8741,0,null);
var f__8743 = cljs.core.nth.call(null,vec__8739__8741,1,null);
var G__8735__8744 = G__8735__8736;

var G__8738__8745 = G__8738__8740;
var G__8735__8746 = G__8735__8744;

while(true){
var vec__8747__8748 = G__8738__8745;
var key__8749 = cljs.core.nth.call(null,vec__8747__8748,0,null);
var f__8750 = cljs.core.nth.call(null,vec__8747__8748,1,null);
var G__8735__8751 = G__8735__8746;

f__8750.call(null,key__8749,this$,oldval,newval);
var temp__3698__auto____8752 = cljs.core.next.call(null,G__8735__8751);

if(cljs.core.truth_(temp__3698__auto____8752))
{var G__8735__8753 = temp__3698__auto____8752;

{
var G__8760 = cljs.core.first.call(null,G__8735__8753);
var G__8761 = G__8735__8753;
G__8738__8745 = G__8760;
G__8735__8746 = G__8761;
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
var this__8754 = this;
return this$.watches = cljs.core.assoc.call(null,this__8754.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8755 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8755.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8756 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8756.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8757 = this;
return this__8757.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8758 = this;
return this__8758.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8759 = this;
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
var atom__8768 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8769 = (function() { 
var G__8771__delegate = function (x,p__8762){
var map__8763__8764 = p__8762;
var map__8763__8765 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8763__8764))?cljs.core.apply.call(null,cljs.core.hash_map,map__8763__8764):map__8763__8764);
var validator__8766 = cljs.core.get.call(null,map__8763__8765,"﷐'validator");
var meta__8767 = cljs.core.get.call(null,map__8763__8765,"﷐'meta");

return (new cljs.core.Atom(x,meta__8767,validator__8766,null));
};
var G__8771 = function (x,var_args){
var p__8762 = null;
if (goog.isDef(var_args)) {
  p__8762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8771__delegate.call(this, x, p__8762);
};
G__8771.cljs$lang$maxFixedArity = 1;
G__8771.cljs$lang$applyTo = (function (arglist__8772){
var x = cljs.core.first(arglist__8772);
var p__8762 = cljs.core.rest(arglist__8772);
return G__8771__delegate.call(this, x, p__8762);
});
return G__8771;
})()
;
atom = function(x,var_args){
var p__8762 = var_args;
switch(arguments.length){
case  1 :
return atom__8768.call(this,x);
default:
return atom__8769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8769.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8773 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8773))
{var validate__8774 = temp__3698__auto____8773;

if(cljs.core.truth_(validate__8774.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__8775 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8775,new_value);
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
var swap_BANG___8776 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8777 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8778 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8779 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8780 = (function() { 
var G__8782__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8782 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8782__delegate.call(this, a, f, x, y, z, more);
};
G__8782.cljs$lang$maxFixedArity = 5;
G__8782.cljs$lang$applyTo = (function (arglist__8783){
var a = cljs.core.first(arglist__8783);
var f = cljs.core.first(cljs.core.next(arglist__8783));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8783)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8783))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8783)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8783)))));
return G__8782__delegate.call(this, a, f, x, y, z, more);
});
return G__8782;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8776.call(this,a,f);
case  3 :
return swap_BANG___8777.call(this,a,f,x);
case  4 :
return swap_BANG___8778.call(this,a,f,x,y);
case  5 :
return swap_BANG___8779.call(this,a,f,x,y,z);
default:
return swap_BANG___8780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8780.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8784){
var iref = cljs.core.first(arglist__8784);
var f = cljs.core.first(cljs.core.next(arglist__8784));
var args = cljs.core.rest(cljs.core.next(arglist__8784));
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
var gensym__8785 = (function (){
return gensym.call(null,"G__");
});
var gensym__8786 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8785.call(this);
case  1 :
return gensym__8786.call(this,prefix_string);
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
var this__8788 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__8788.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8789 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__8789.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__8789.state,this__8789.f);
}
return cljs.core.deref.call(null,this__8789.state);
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
delay.cljs$lang$applyTo = (function (arglist__8790){
var body = cljs.core.seq( arglist__8790 );;
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
var map__8791__8792 = options;
var map__8791__8793 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8791__8792))?cljs.core.apply.call(null,cljs.core.hash_map,map__8791__8792):map__8791__8792);
var keywordize_keys__8794 = cljs.core.get.call(null,map__8791__8793,"﷐'keywordize-keys");
var keyfn__8795 = (cljs.core.truth_(keywordize_keys__8794)?cljs.core.keyword:cljs.core.str);
var f__8801 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__1469__auto____8800 = (function iter__8796(s__8797){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8797__8798 = s__8797;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8797__8798)))
{var k__8799 = cljs.core.first.call(null,s__8797__8798);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__8795.call(null,k__8799),thisfn.call(null,(x[k__8799]))]),iter__8796.call(null,cljs.core.rest.call(null,s__8797__8798)));
} else
{return null;
}
break;
}
})));
});

return iter__1469__auto____8800.call(null,cljs.core.js_keys.call(null,x));
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

return f__8801.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8802){
var x = cljs.core.first(arglist__8802);
var options = cljs.core.rest(arglist__8802);
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
var mem__8803 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8807__delegate = function (args){
var temp__3695__auto____8804 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8803),args);

if(cljs.core.truth_(temp__3695__auto____8804))
{var v__8805 = temp__3695__auto____8804;

return v__8805;
} else
{var ret__8806 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8803,cljs.core.assoc,args,ret__8806);
return ret__8806;
}
};
var G__8807 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8807__delegate.call(this, args);
};
G__8807.cljs$lang$maxFixedArity = 0;
G__8807.cljs$lang$applyTo = (function (arglist__8808){
var args = cljs.core.seq( arglist__8808 );;
return G__8807__delegate.call(this, args);
});
return G__8807;
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
var trampoline__8810 = (function (f){
while(true){
var ret__8809 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8809)))
{{
var G__8813 = ret__8809;
f = G__8813;
continue;
}
} else
{return ret__8809;
}
break;
}
});
var trampoline__8811 = (function() { 
var G__8814__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8814 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8814__delegate.call(this, f, args);
};
G__8814.cljs$lang$maxFixedArity = 1;
G__8814.cljs$lang$applyTo = (function (arglist__8815){
var f = cljs.core.first(arglist__8815);
var args = cljs.core.rest(arglist__8815);
return G__8814__delegate.call(this, f, args);
});
return G__8814;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8810.call(this,f);
default:
return trampoline__8811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8811.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8816 = (function (){
return rand.call(null,1);
});
var rand__8817 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8816.call(this);
case  1 :
return rand__8817.call(this,n);
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
var k__8819 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8819,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8819,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___8828 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8829 = (function (h,child,parent){
var or__3548__auto____8820 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8820))
{return or__3548__auto____8820;
} else
{var or__3548__auto____8821 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8821))
{return or__3548__auto____8821;
} else
{var and__3546__auto____8822 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8822))
{var and__3546__auto____8823 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8823))
{var and__3546__auto____8824 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8824))
{var ret__8825 = true;
var i__8826 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8827 = cljs.core.not.call(null,ret__8825);

if(cljs.core.truth_(or__3548__auto____8827))
{return or__3548__auto____8827;
} else
{return cljs.core._EQ_.call(null,i__8826,cljs.core.count.call(null,parent));
}
})()))
{return ret__8825;
} else
{{
var G__8831 = isa_QMARK_.call(null,h,child.call(null,i__8826),parent.call(null,i__8826));
var G__8832 = (i__8826 + 1);
ret__8825 = G__8831;
i__8826 = G__8832;
continue;
}
}
break;
}
} else
{return and__3546__auto____8824;
}
} else
{return and__3546__auto____8823;
}
} else
{return and__3546__auto____8822;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8828.call(this,h,child);
case  3 :
return isa_QMARK___8829.call(this,h,child,parent);
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
var parents__8833 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8834 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8833.call(this,h);
case  2 :
return parents__8834.call(this,h,tag);
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
var ancestors__8836 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8837 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8836.call(this,h);
case  2 :
return ancestors__8837.call(this,h,tag);
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
var descendants__8839 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8840 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8839.call(this,h);
case  2 :
return descendants__8840.call(this,h,tag);
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
var derive__8850 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8851 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__8845 = "﷐'parents".call(null,h);
var td__8846 = "﷐'descendants".call(null,h);
var ta__8847 = "﷐'ancestors".call(null,h);
var tf__8848 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8849 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8845.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8847.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8847.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8845,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__8848.call(null,"﷐'ancestors".call(null,h),tag,td__8846,parent,ta__8847),"﷐'descendants":tf__8848.call(null,"﷐'descendants".call(null,h),parent,ta__8847,tag,td__8846)});
})());

if(cljs.core.truth_(or__3548__auto____8849))
{return or__3548__auto____8849;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8850.call(this,h,tag);
case  3 :
return derive__8851.call(this,h,tag,parent);
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
var underive__8857 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8858 = (function (h,tag,parent){
var parentMap__8853 = "﷐'parents".call(null,h);
var childsParents__8854 = (cljs.core.truth_(parentMap__8853.call(null,tag))?cljs.core.disj.call(null,parentMap__8853.call(null,tag),parent):cljs.core.set([]));
var newParents__8855 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8854))?cljs.core.assoc.call(null,parentMap__8853,tag,childsParents__8854):cljs.core.dissoc.call(null,parentMap__8853,tag));
var deriv_seq__8856 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8842_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8842_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8842_SHARP_),cljs.core.second.call(null,p1__8842_SHARP_)));
}),cljs.core.seq.call(null,newParents__8855)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8853.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8843_SHARP_,p2__8844_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8843_SHARP_,p2__8844_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8856));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8857.call(this,h,tag);
case  3 :
return underive__8858.call(this,h,tag,parent);
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
var xprefs__8860 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8862 = (cljs.core.truth_((function (){var and__3546__auto____8861 = xprefs__8860;

if(cljs.core.truth_(and__3546__auto____8861))
{return xprefs__8860.call(null,y);
} else
{return and__3546__auto____8861;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8862))
{return or__3548__auto____8862;
} else
{var or__3548__auto____8864 = (function (){var ps__8863 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8863) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8863),prefer_table)))
{} else
{}
{
var G__8867 = cljs.core.rest.call(null,ps__8863);
ps__8863 = G__8867;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8864))
{return or__3548__auto____8864;
} else
{var or__3548__auto____8866 = (function (){var ps__8865 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8865) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8865),y,prefer_table)))
{} else
{}
{
var G__8868 = cljs.core.rest.call(null,ps__8865);
ps__8865 = G__8868;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8866))
{return or__3548__auto____8866;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8869 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8869))
{return or__3548__auto____8869;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8878 = cljs.core.reduce.call(null,(function (be,p__8870){
var vec__8871__8872 = p__8870;
var k__8873 = cljs.core.nth.call(null,vec__8871__8872,0,null);
var ___8874 = cljs.core.nth.call(null,vec__8871__8872,1,null);
var e__8875 = vec__8871__8872;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8873)))
{var be2__8877 = (cljs.core.truth_((function (){var or__3548__auto____8876 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____8876))
{return or__3548__auto____8876;
} else
{return cljs.core.dominates.call(null,k__8873,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8875:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8877),k__8873,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8873," and ",cljs.core.first.call(null,be2__8877),", and neither is preferred")));
}
return be2__8877;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8878))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8878));
return cljs.core.second.call(null,best_entry__8878);
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
if(cljs.core.truth_((function (){var and__3546__auto____8879 = mf;

if(cljs.core.truth_(and__3546__auto____8879))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8879;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8880 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8880))
{return or__3548__auto____8880;
} else
{var or__3548__auto____8881 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8881))
{return or__3548__auto____8881;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8882 = mf;

if(cljs.core.truth_(and__3546__auto____8882))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8882;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8883 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8883))
{return or__3548__auto____8883;
} else
{var or__3548__auto____8884 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8884))
{return or__3548__auto____8884;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8885 = mf;

if(cljs.core.truth_(and__3546__auto____8885))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8885;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8886 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8886))
{return or__3548__auto____8886;
} else
{var or__3548__auto____8887 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8887))
{return or__3548__auto____8887;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8888 = mf;

if(cljs.core.truth_(and__3546__auto____8888))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8888;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8889 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8889))
{return or__3548__auto____8889;
} else
{var or__3548__auto____8890 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8890))
{return or__3548__auto____8890;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8891 = mf;

if(cljs.core.truth_(and__3546__auto____8891))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8891;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8892 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8892))
{return or__3548__auto____8892;
} else
{var or__3548__auto____8893 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8893))
{return or__3548__auto____8893;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8894 = mf;

if(cljs.core.truth_(and__3546__auto____8894))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8894;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8895 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8895))
{return or__3548__auto____8895;
} else
{var or__3548__auto____8896 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8896))
{return or__3548__auto____8896;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8897 = mf;

if(cljs.core.truth_(and__3546__auto____8897))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8897;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8898 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8898))
{return or__3548__auto____8898;
} else
{var or__3548__auto____8899 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8899))
{return or__3548__auto____8899;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8900 = mf;

if(cljs.core.truth_(and__3546__auto____8900))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____8900;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____8901 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8901))
{return or__3548__auto____8901;
} else
{var or__3548__auto____8902 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8902))
{return or__3548__auto____8902;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__8903 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8904 = cljs.core._get_method.call(null,mf,dispatch_val__8903);

if(cljs.core.truth_(target_fn__8904))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8903)));
}
return cljs.core.apply.call(null,target_fn__8904,args);
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
var this__8905 = this;
cljs.core.swap_BANG_.call(null,this__8905.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8905.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8905.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8905.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8906 = this;
cljs.core.swap_BANG_.call(null,this__8906.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8906.method_cache,this__8906.method_table,this__8906.cached_hierarchy,this__8906.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8907 = this;
cljs.core.swap_BANG_.call(null,this__8907.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8907.method_cache,this__8907.method_table,this__8907.cached_hierarchy,this__8907.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8908 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8908.cached_hierarchy),cljs.core.deref.call(null,this__8908.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8908.method_cache,this__8908.method_table,this__8908.cached_hierarchy,this__8908.hierarchy);
}
var temp__3695__auto____8909 = cljs.core.deref.call(null,this__8908.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____8909))
{var target_fn__8910 = temp__3695__auto____8909;

return target_fn__8910;
} else
{var temp__3695__auto____8911 = cljs.core.find_and_cache_best_method.call(null,this__8908.name,dispatch_val,this__8908.hierarchy,this__8908.method_table,this__8908.prefer_table,this__8908.method_cache,this__8908.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____8911))
{var target_fn__8912 = temp__3695__auto____8911;

return target_fn__8912;
} else
{return cljs.core.deref.call(null,this__8908.method_table).call(null,this__8908.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8913 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8913.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__8913.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__8913.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8913.method_cache,this__8913.method_table,this__8913.cached_hierarchy,this__8913.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__8914 = this;
return cljs.core.deref.call(null,this__8914.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__8915 = this;
return cljs.core.deref.call(null,this__8915.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__8916 = this;
return cljs.core.do_invoke.call(null,mf,this__8916.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__8917__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__8917 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8917__delegate.call(this, _, args);
};
G__8917.cljs$lang$maxFixedArity = 1;
G__8917.cljs$lang$applyTo = (function (arglist__8918){
var _ = cljs.core.first(arglist__8918);
var args = cljs.core.rest(arglist__8918);
return G__8917__delegate.call(this, _, args);
});
return G__8917;
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
