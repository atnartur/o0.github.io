/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(86);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _set = __webpack_require__(2);

	var _set2 = _interopRequireDefault(_set);

	var _from = __webpack_require__(72);

	var _from2 = _interopRequireDefault(_from);

	var _map = __webpack_require__(77);

	var _map2 = _interopRequireDefault(_map);

	var _classCallCheck2 = __webpack_require__(81);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(82);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _welcome = __webpack_require__(86);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// TODO: Экран со статистикой
	// TODO: Сущность пользователя
	// TODO: Игрок
	// TODO: Обратный отсчет времени

	var GH = function () {
	  (0, _createClass3.default)(GH, [{
	    key: 'commonCommandAction',
	    get: function get() {
	      return new _map2.default([[_welcome.Command.HELP, new _welcome.ActionResult({
	        message: '\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B:\n          ' + (0, _from2.default)(this.currentView.commands.keys()).concat((0, _from2.default)(GH.commonCommands.values())).join('\n')
	      })], [_welcome.Command.STAT, new _welcome.ActionResult({
	        message: '\u0412\u0440\u0435\u043C\u044F? \u0418\u0434\u0435\u0442! \u0412\u044B \u043F\u043E\u043A\u0430 \u0436\u0438\u0432\u044B'
	      })], [_welcome.Command.RESTART, new _welcome.ActionResult({
	        message: '\u041D\u0443, \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430, \u043A\u043E\u043B\u044C \u043D\u0435 \u0448\u0443\u0442\u0438\u0442\u0435',
	        verdict: _welcome.Verdict.GOTO,
	        destination: _welcome.initialLevel
	      })], [_welcome.Command.UNKNOWN, new _welcome.ActionResult({
	        message: '\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E'
	      })], [_welcome.Command.INFO, new _welcome.ActionResult({
	        message: '(c) HTML Academy 1986\n\n\u0418\u0433\u0440\u0430 \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u0430, \u0441\u044E\u0434\u0430 \u0435\u0449\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u043E\u0442\u0441\u0447\u0435\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0436\u0438\u0437\u043D\u044F\u043C\u0438. \u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438, \u0441\u043A\u043E\u0440\u043E \u0432\u0441\u0435 \u044D\u0442\u043E \u0431\u0443\u0434\u0435\u0442.'
	      })]]);
	    }
	  }, {
	    key: 'viewMap',
	    get: function get() {
	      var _this = this;

	      return new _map2.default([[_welcome.Verdict.DIE, function (actionResult) {
	        return new _welcome.GameScreen('\u0412\u044B \u0443\u043C\u0435\u0440\u043B\u0438. \u0416\u0430\u043B\u044C');
	      }], [_welcome.Verdict.GOTO, function (actionResult) {
	        return actionResult.destination;
	      }], [_welcome.Verdict.NOOP, function (actionResult) {
	        return _this.currentView;
	      }], [_welcome.Verdict.WIN, function (actionResult) {
	        return new _welcome.GameScreen('\u0412\u044B \u043C\u043E\u043B\u043E\u0434\u0435\u0446');
	      }]]);
	    }
	  }], [{
	    key: 'isAllowedCommand',
	    value: function isAllowedCommand(screen, command) {
	      return screen.commands.has(command) || GH.commonCommands.has(command);
	    }
	  }, {
	    key: 'commonCommands',
	    get: function get() {
	      return new _set2.default([_welcome.Command.HELP, _welcome.Command.STAT, _welcome.Command.RESTART, _welcome.Command.INFO]);
	    }
	  }]);

	  function GH() {
	    (0, _classCallCheck3.default)(this, GH);

	    this.appContainer = document.querySelector('.container');
	    this.inputField = document.querySelector('input');
	    this.resultContainer = document.querySelector('.result');
	  }

	  /** @param {string} command */


	  (0, _createClass3.default)(GH, [{
	    key: 'handleView',
	    value: function handleView(command) {
	      var _this2 = this;

	      command = (GH.isAllowedCommand(this.currentView, command) ? command : _welcome.Command.UNKNOWN).toLowerCase();

	      var result = this.currentView.commands.has(command) ? this.currentView.commands.get(command) : this.commonCommandAction.get(command);

	      var switchView = function switchView() {
	        var dest = _this2.viewMap.get(result.verdict)(result);
	        _this2.renderView(dest);
	      };

	      if (result.message) {
	        this.resultContainer.innerHTML = result.message.concat('\n\n<small>\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 <i>Enter</i></small>').replace(/\n/g, '<br>');
	        this.inputField.disabled = true;
	        this.inputField.blur();

	        document.onkeydown = function (evt) {
	          if (evt.keyCode === 13) {
	            switchView();
	            document.onkeydown = null;
	          }
	        };
	      } else {
	        switchView();
	      }
	    }

	    /** @param {GameScreen} gameScreen */

	  }, {
	    key: 'renderView',
	    value: function renderView(gameScreen) {
	      var _this3 = this;

	      this.currentView = gameScreen;

	      this.resultContainer.innerHTML = '';
	      this.appContainer.innerHTML = gameScreen.disposition.replace(/\n/g, '<br>') + '<br><br><small>\u0414\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 <i>help</i></small>';
	      this.inputField.value = '';
	      this.inputField.disabled = false;
	      this.inputField.onkeydown = function (evt) {
	        if (evt.keyCode === 13) {
	          evt.stopPropagation();
	          _this3.handleView(evt.target.value);
	        }
	      };
	      this.inputField.focus();
	    }
	  }]);
	  return GH;
	}();

	new GH().renderView(_welcome.initialLevel);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(49);
	__webpack_require__(53);
	__webpack_require__(69);
	module.exports = __webpack_require__(13).Set;

/***/ },
/* 4 */
/***/ function(module, exports) {

	

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(6)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(9)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , defined   = __webpack_require__(8);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(10)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(26)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(27)
	  , Iterators      = __webpack_require__(28)
	  , $iterCreate    = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(45)
	  , getPrototypeOf = __webpack_require__(47)
	  , ITERATOR       = __webpack_require__(46)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , hide      = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(18)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , toPrimitive    = __webpack_require__(24)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
	  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },
/* 27 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(30)
	  , descriptor     = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(45)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(46)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(18)
	  , dPs         = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(23)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(44).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(17)
	  , anObject = __webpack_require__(18)
	  , getKeys  = __webpack_require__(32);

	module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(43);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(27)
	  , toIObject    = __webpack_require__(34)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(8);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(7)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(41)('keys')
	  , uid    = __webpack_require__(42);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(17).f
	  , has = __webpack_require__(27)
	  , TAG = __webpack_require__(46)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(41)('wks')
	  , uid        = __webpack_require__(42)
	  , Symbol     = __webpack_require__(12).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(27)
	  , toObject    = __webpack_require__(48)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(8);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	var global        = __webpack_require__(12)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(28)
	  , TO_STRING_TAG = __webpack_require__(46)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(51)
	  , step             = __webpack_require__(52)
	  , Iterators        = __webpack_require__(28)
	  , toIObject        = __webpack_require__(34);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(9)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(54);

	// 23.2 Set Objects
	module.exports = __webpack_require__(64)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(17).f
	  , create      = __webpack_require__(30)
	  , redefineAll = __webpack_require__(55)
	  , ctx         = __webpack_require__(14)
	  , anInstance  = __webpack_require__(56)
	  , defined     = __webpack_require__(8)
	  , forOf       = __webpack_require__(57)
	  , $iterDefine = __webpack_require__(9)
	  , step        = __webpack_require__(52)
	  , setSpecies  = __webpack_require__(62)
	  , DESCRIPTORS = __webpack_require__(21)
	  , fastKey     = __webpack_require__(63).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(16);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(58)
	  , isArrayIter = __webpack_require__(59)
	  , anObject    = __webpack_require__(18)
	  , toLength    = __webpack_require__(38)
	  , getIterFn   = __webpack_require__(60)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(18);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(28)
	  , ITERATOR   = __webpack_require__(46)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(61)
	  , ITERATOR  = __webpack_require__(46)('iterator')
	  , Iterators = __webpack_require__(28);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(36)
	  , TAG = __webpack_require__(46)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(12)
	  , core        = __webpack_require__(13)
	  , dP          = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(21)
	  , SPECIES     = __webpack_require__(46)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(42)('meta')
	  , isObject = __webpack_require__(19)
	  , has      = __webpack_require__(27)
	  , setDesc  = __webpack_require__(17).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(22)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(12)
	  , $export        = __webpack_require__(11)
	  , meta           = __webpack_require__(63)
	  , fails          = __webpack_require__(22)
	  , hide           = __webpack_require__(16)
	  , redefineAll    = __webpack_require__(55)
	  , forOf          = __webpack_require__(57)
	  , anInstance     = __webpack_require__(56)
	  , isObject       = __webpack_require__(19)
	  , setToStringTag = __webpack_require__(45)
	  , dP             = __webpack_require__(17).f
	  , each           = __webpack_require__(65)(0)
	  , DESCRIPTORS    = __webpack_require__(21);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(35)
	  , toObject = __webpack_require__(48)
	  , toLength = __webpack_require__(38)
	  , asc      = __webpack_require__(66);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(67);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , isArray  = __webpack_require__(68)
	  , SPECIES  = __webpack_require__(46)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(36);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(11);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(70)('Set')});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(61)
	  , from    = __webpack_require__(71);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(57);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(74);
	module.exports = __webpack_require__(13).Array.from;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(14)
	  , $export        = __webpack_require__(11)
	  , toObject       = __webpack_require__(48)
	  , call           = __webpack_require__(58)
	  , isArrayIter    = __webpack_require__(59)
	  , toLength       = __webpack_require__(38)
	  , createProperty = __webpack_require__(75)
	  , getIterFn      = __webpack_require__(60);

	$export($export.S + $export.F * !__webpack_require__(76)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(17)
	  , createDesc      = __webpack_require__(25);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(46)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(49);
	__webpack_require__(79);
	__webpack_require__(80);
	module.exports = __webpack_require__(13).Map;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(54);

	// 23.1 Map Objects
	module.exports = __webpack_require__(64)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(11);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(70)('Map')});

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(83);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	var $Object = __webpack_require__(13).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/** @enum {string} */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initialLevel = exports.GameScreen = exports.ActionResult = exports.Verdict = exports.Command = undefined;

	var _map = __webpack_require__(77);

	var _map2 = _interopRequireDefault(_map);

	var _classCallCheck2 = __webpack_require__(81);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Command = exports.Command = {
	  1: '1',
	  2: '2',
	  3: '3',
	  4: '4',
	  LEFT: 'left',
	  RIGHT: 'right',
	  JUMP: 'jump',
	  HELP: 'help',
	  RESTART: 'restart',
	  UNKNOWN: '',
	  STAT: 'stat',
	  INFO: 'info'
	};

	/** @enum {number} */
	var Verdict = exports.Verdict = {
	  NOOP: 0,
	  GOTO: 1,
	  DIE: 2,
	  WIN: 3
	};

	var ActionResult =
	/**
	 * @param {Verdict} verdict
	 * @param {string} message
	 * @param {number} time
	 * @param {GameScreen} destination
	 */
	exports.ActionResult = function ActionResult(_ref) {
	  var _ref$verdict = _ref.verdict,
	      verdict = _ref$verdict === undefined ? Verdict.NOOP : _ref$verdict,
	      _ref$message = _ref.message,
	      message = _ref$message === undefined ? '' : _ref$message,
	      _ref$time = _ref.time,
	      time = _ref$time === undefined ? 0 : _ref$time,
	      _ref$destination = _ref.destination,
	      destination = _ref$destination === undefined ? null : _ref$destination;
	  (0, _classCallCheck3.default)(this, ActionResult);

	  this.verdict = verdict;
	  this.message = message;
	  this.time = 0;
	  this.destination = destination;
	};

	var GameScreen =
	/**
	 * @param {string} disposition
	 * @param {Map.<Command, ActionResult>} commands
	 */
	exports.GameScreen = function GameScreen() {
	  var disposition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var commands = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _map2.default();
	  (0, _classCallCheck3.default)(this, GameScreen);

	  this.disposition = disposition;
	  this.commands = commands;
	};

	var levels = new _map2.default([]);

	//
	//  Ё  ЁЁ  ЁЁЁЁЁ  ЁЁЁЁЁ   ЁЁЁ
	//  Ё ЁЁЁ  ЁЁ     ЁЁ  Ё  ЁЁ ЁЁ
	//  ЁЁ ЁЁ  ЁЁ     ЁЁЁЁЁ  ЁЁЁЁЁ
	//  Ё  ЁЁ  ЁЁ     ЁЁ     ЁЁ ЁЁ
	//

	var initialLevel = exports.initialLevel = new GameScreen('\u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u0427\u0435\u0440\u043D\u043E\u0433\u043E \u043C\u043E\u0440\u044F. \u0412\u044B \u043B\u0435\u0436\u0438\u0442\u0435 \u043D\u0430 \u0433\u0430\u043B\u0435\u0447\u043D\u043E\u043C \u043F\u043B\u044F\u0436\u0435, \u043D\u0430\u0434 \u0432\u0430\u043C\u0438 \u043A\u0440\u0443\u0436\u0430\u0442 \u0447\u0430\u0439\u043A\u0438, \u043C\u0438\u043C\u043E \u043F\u0440\u043E\u0431\u0435\u0433\u0430\u044E\u0442 \u0442\u043E\u0440\u0433\u043E\u0432\u0446\u044B \u0447\u0443\u0440\u0447\u0445\u0435\u043B\u043E\u0439 \u0438 \u043F\u0430\u0445\u043B\u0430\u0432\u043E\u0439. \u0412\u044B \u043B\u0435\u0436\u0438\u0442\u0435 \u0443\u0436\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u0430\u0432\u043D\u043E \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0441\u0433\u043E\u0440\u0435\u043B\u0438 \u043D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435. \u0412\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0441\u043A\u043E\u0440\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043C\u0435\u0440\u0435\u0442\u044C \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0447\u0430\u0441. \u0427\u0442\u043E \u0432\u044B \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043C\u0435\u0442\u0435?\n\n1. \u041F\u043E\u0439\u043C\u0430\u0435\u0442\u0435 \u0447\u0430\u0439\u043A\u0443 \u0438 \u0441\u044A\u0435\u0434\u0438\u0442\u0435 \u0435\u0435\n2. \u041F\u043E\u0439\u0434\u0435\u0442\u0435 \u0438\u0441\u043A\u0443\u043F\u0430\u0435\u0442\u0435\u0441\u044C\n3. \u0412\u0441\u0442\u0430\u043D\u0435\u0442\u0435 \u0438 \u043F\u043E\u0439\u0434\u0435\u0442\u0435 \u0432 \u043E\u0442\u0435\u043B\u044C \u043A \u0441\u0435\u043C\u044C\u0435 \u0438 \u0434\u0435\u0442\u044F\u043C\n4. \u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430 \u0447\u0443\u0440\u0447\u0445\u0435\u043B\u044B \u0438 \u0441\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u043D\u0435\u0442 \u043B\u0438 \u0443 \u043D\u0435\u0433\u043E \u0441\u043C\u0435\u0442\u0430\u043D\u044B');

	levels.set('initial', initialLevel);

	levels.set('sea', new GameScreen('\u0412\u044B \u0437\u0430\u0448\u043B\u0438 \u0432 \u043F\u0440\u043E\u0445\u043B\u0430\u0434\u043D\u043E\u0435 \u0430\u043F\u0440\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u043C\u043E\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0441\u0432\u0435\u0436\u0438\u0442\u044C\u0441\u044F \u0438 \u0440\u0430\u0437\u0432\u0435\u044F\u0442\u044C \u0442\u043E\u0441\u043A\u0443. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0432\u0430\u043C \u0441\u0432\u043E\u0434\u0438\u0442 \u043D\u043E\u0433\u0438 \u0432\u0441\u0435 \u043D\u0435\u043F\u043B\u043E\u0445\u043E. \u041F\u0440\u0430\u0432\u0434\u0430 \u0432\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0432\u0441\u0435\u0433\u043E-\u043B\u0438\u0448\u044C \u043E\u0442\u043B\u043E\u0436\u0438\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0441 \u0438\u0437\u043B\u0438\u0448\u043D\u0438\u043C \u0437\u0430\u0433\u0430\u0440\u043E\u043C. \u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u0432\u0430\u043C \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u043F\u043B\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u0442\u043E, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043B\u0438 \u0441\u0435\u0431\u0435 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u0438\u0442\u044C\u0441\u044F, \u043D\u043E \u043F\u043E\u0437\u0436\u0435. \u0417\u0430\u0442\u043E \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0431\u043E\u0440\u043E\u0442\u044C\u0441\u044F \u0441 \u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0430\u044E\u0449\u0438\u043C\u0441\u044F \u0432\u043E\u0441\u043F\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043B\u0435\u0433\u043A\u0438\u0445 \u0438 \u0441\u0442\u0430\u0435\u0439 \u0434\u0435\u043B\u044C\u0444\u0438\u043D\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043B\u044B\u0432\u0443\u0442 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0432\u0430\u0441. \u0427\u0442\u043E \u0432\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435?\n\n1. \u0420\u0430\u0434\u043E\u0441\u0442\u043D\u043E \u043F\u043B\u044B\u0432\u0443 \u043D\u0430\u0432\u0441\u0442\u0440\u0435\u0447\u0443 \u0434\u0435\u043B\u044C\u0444\u0438\u043D\u0430\u043C, \u043E\u043D\u0438 \u0436\u0435 \u0434\u043E\u0431\u0440\u044B\u0435 \u0440\u0435\u0431\u044F\u0442\u0430\n2. \u0412\u044B\u0445\u043E\u0436\u0443 \u0438\u0437 \u0432\u043E\u0434\u044B \u0438 \u043F\u043B\u0435\u0442\u0443\u0441\u044C \u0432 \u043E\u0442\u0435\u043B\u044C, \u0432\u0441\u0435-\u0442\u0430\u043A\u0438 \u0442\u0430\u043C \u0436\u0435\u043D\u0430 \u0438 \u0434\u0435\u0442\u0438, \u0445\u043E\u0442\u044F \u0431\u044B \u043F\u043E\u043C\u0440\u0443 \u043D\u0435 \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u0435\u0441\u0442\u0432\u0435.\n3. \u041F\u043E\u0441\u0438\u0436\u0443 \u0432 \u0432\u043E\u0434\u0435 \u0435\u0449\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E, \u043F\u043E\u043F\u0440\u0430\u043A\u0440\u0430\u0441\u0442\u0438\u043D\u0438\u0440\u0443\u044E'));

	levels.set('hotel', new GameScreen('\u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u0432\u043E\u0435\u043C \u043E\u0442\u0435\u043B\u0435, \u0440\u044F\u0434\u043E\u043C \u0441 \u043B\u044E\u0431\u044F\u0449\u0435\u0439 \u0436\u0435\u043D\u043E\u0439 \u0438 \u0434\u0435\u0442\u044C\u043C\u0438. \u041D\u043E \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0441\u0435\u0431\u044F \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0445\u0440\u0435\u043D\u043E\u0432\u043E. \u0427\u0442\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C?\n\n1. \u0423\u043C\u0435\u0440\u0435\u0442\u044C'));

	levels.get('initial').commands.set(Command['1'], new ActionResult({
	  verdict: Verdict.DIE,
	  message: '\u0411\u0435\u0435. \u041A\u0430\u043A\u0430\u044F \u0433\u0430\u0434\u043E\u0441\u0442\u044C. \u041C\u0430\u043B\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0432 \u0421\u043E\u0447\u0438 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0441\u0435 \u043F\u043B\u043E\u0445\u043E \u0441 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0435\u0439, \u0447\u0442\u043E \u0432\u044B \u043E\u0442\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C, \u043F\u043E\u043A\u0430 \u0435\u043B\u0438 \u044D\u0442\u0443 \u0447\u0430\u0439\u043A\u0443, \u0442\u0430\u043A \u0435\u0449\u0435 \u0438 \u0432 \u0435\u0435 \u0436\u0435\u043B\u0443\u0434\u043A\u0435 \u0431\u044B\u043B\u043E \u0447\u044C\u0435-\u0442\u043E \u043A\u043E\u043B\u044C\u0446\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0441\u0442\u0430\u043B\u043E \u0432\u0430\u043C \u043F\u043E\u043F\u0435\u0440\u0435\u043A \u0433\u043E\u0440\u043B\u0430'
	})).set(Command['2'], new ActionResult({
	  verdict: Verdict.GOTO,
	  time: -60,
	  destination: levels.get('sea')
	})).set(Command['3'], new ActionResult({
	  verdict: Verdict.GOTO,
	  time: 30,
	  destination: levels.get('hotel'),
	  message: '\u0412\u044B \u043E\u0447\u0435\u043D\u044C \u0434\u043E\u043B\u0433\u043E \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442\u0435\u0441\u044C \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u043C\u0435\u0441\u0442\u0430, \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0432\u0435\u0449\u0438 \u0441\u043E\u0441\u0435\u0434\u043D\u0435\u0439 \u043F\u043E\u0436\u0438\u043B\u043E\u0439 \u043F\u0430\u0440\u044B, \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043E\u043D\u0438 \u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u0432\u0430\u0441 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u0443\u0445\u043E\u0434\u044F \u0432 \u043C\u043E\u0440\u0435 \u0438 \u043F\u043E\u043D\u0443\u0440\u043E \u0431\u0440\u0435\u0434\u0435\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u043E\u0442\u0435\u043B\u044C'
	})).set(Command['4'], new ActionResult({
	  verdict: Verdict.NOOP,
	  time: 0.5,
	  message: '\u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446 \u0447\u0443\u0440\u0447\u0445\u0435\u043B\u044B \u043C\u043E\u043B\u0447\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442 \u043D\u0430 \u0432\u0430\u0441 \u0441 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B, \u043F\u043E\u0442\u043E\u043C \u0447\u0442\u043E-\u0442\u043E \u0431\u043E\u0440\u043C\u043E\u0447\u0435\u0442 \u0441\u0435\u0431\u0435 \u043F\u043E\u0434 \u043D\u043E\u0441 \u0438 \u0443\u0445\u043E\u0434\u0438\u0442, \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043C\u043E\u043D\u043E\u0442\u043E\u043D\u043D\u044B\u043C\u0438 \u0437\u0430\u0432\u044B\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u0443-\u043D\u0438\u0431\u0443\u0434\u044C \u0441\u0432\u043E\u044E \u0432\u0438\u0434\u0430\u0432\u0448\u0443\u044E \u0432\u0438\u0434\u044B \u0447\u0443\u0440\u0447\u0445\u0435\u043B\u0443, \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u0448\u0435\u043B \u0443\u0436\u0435 \u0442\u0440\u0435\u0442\u0438\u0439 \u0441\u0435\u0437\u043E\u043D'
	}));

	levels.get('sea').commands.set(Command['1'], new ActionResult({
	  'verdict': Verdict.DIE,
	  'message': '\u041A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435 \u0432\u044B \u0441\u043B\u044B\u0448\u0430\u043B\u0438 \u043C\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0439 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0434\u0435\u043B\u044C\u0444\u0438\u043D\u044B \u0441\u043F\u0430\u0441\u0430\u043B\u0438 \u0442\u043E\u043D\u0443\u0449\u0438\u0445 \u043B\u044E\u0434\u0435\u0439,  \u0432\u044B\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u044F \u0438\u0445 \u043D\u0430 \u0441\u0443\u0448\u0443 \u0438 \u0434\u0443\u043C\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0434\u0435\u043B\u044C\u0444\u0438\u043D\u044B \u0434\u043E\u0431\u0440\u044B\u0435 \u0437\u0430\u0431\u043E\u0442\u043B\u0438\u0432\u044B\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0430. \u041D\u043E \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u0432\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u0441\u043B\u044B\u0448\u0430\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0442\u0435\u0445 \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0434\u0435\u043B\u044C\u0444\u0438\u043D\u044B \u0442\u043E\u0447\u043D\u043E \u0442\u0430\u043A \u0436\u0435 \u0443\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u043B\u0438 \u0434\u0430\u043B\u044C\u0448\u0435 \u0432 \u043C\u043E\u0440\u0435. \u041E\u043D\u0438 \u0438\u0433\u0440\u0430\u044E\u0442 \u0441 \u0432\u0430\u043C\u0438, \u0441\u043B\u043E\u0432\u043D\u043E \u0441 \u043C\u044F\u0447\u0438\u043A\u043E\u043C. \u0416\u0430\u043B\u044C, \u0447\u0442\u043E \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0443\u0441\u043B\u044B\u0448\u0438\u0442 \u0432\u0430\u0448\u0435\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438'
	})).set(Command['2'], new ActionResult({
	  'verdict': Verdict.GOTO,
	  'destination': levels.get('hotel'),
	  'time': 30
	})).set(Command['3'], new ActionResult({
	  'verdict': Verdict.DIE,
	  'message': '\u0421\u043C\u0435\u0440\u0442\u044C \u043E\u0442 \u043F\u0435\u0440\u0435\u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0442\u043E\u0436\u0435 \u043F\u043B\u043E\u0445\u043E!'
	}));

	levels.get('hotel').commands.set(Command['1'], new ActionResult({
	  'verdict': Verdict.DIE,
	  'message': '\u041E\u0447\u0435\u043D\u044C \u043C\u0435\u0442\u0430\u0444\u043E\u0440\u0438\u0447\u043D\u0430\u044F \u0438\u0433\u0440\u0430, \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u043D\u0438 \u0434\u0435\u043B\u0430\u0439, \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u0443\u043C\u0440\u0435\u0448\u044C!'
	}));

/***/ }
/******/ ]);