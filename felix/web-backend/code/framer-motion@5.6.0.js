define(["tslib@2.4.0","react@18.2.0","hey-listen@1.0.8","framesync@6.0.1","style-value-types@5.0.0","popmotion@11.0.3"], (dep_0, dep_1, dep_2, dep_3, dep_4, dep_5) => {

const bimport = specifier => {
	const dependencies = new Map([["tslib","2.4.0"],["react","18.2.0"],["framer-motion","5.6.0"],["hey-listen","1.0.8"],["framesync","6.0.1"],["popmotion","11.0.3"],["style-value-types","5.0.0"],["@emotion/memoize","0.7.4"],["@emotion/is-prop-valid","0.8.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["tslib@2.4.0", dep_0],["react@18.2.0", dep_1],["hey-listen@1.0.8", dep_2],["framesync@6.0.1", dep_3],["style-value-types@5.0.0", dep_4],["popmotion@11.0.3", dep_5]]);
const require = dependency => dependencies.get(dependency);
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }

  return target;
};

var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};

var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // node_modules/@emotion/memoize/dist/memoize.browser.cjs.js


var require_memoize_browser_cjs = __commonJS({
  "node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    exports.default = memoize;
  }

}); // node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js


var require_is_prop_valid_browser_cjs = __commonJS({
  "node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }

    var memoize = _interopDefault(require_memoize_browser_cjs());

    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var index = memoize(function (prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    exports.default = index;
  }

}); // .beyond/uimport/temp/framer-motion.5.6.0.js


var framer_motion_5_6_0_exports = {};

__export(framer_motion_5_6_0_exports, {
  AnimatePresence: () => AnimatePresence,
  AnimateSharedLayout: () => AnimateSharedLayout,
  DeprecatedLayoutGroupContext: () => DeprecatedLayoutGroupContext,
  DragControls: () => DragControls,
  FlatTree: () => FlatTree,
  LayoutGroup: () => LayoutGroup,
  LayoutGroupContext: () => LayoutGroupContext,
  LazyMotion: () => LazyMotion,
  MotionConfig: () => MotionConfig,
  MotionConfigContext: () => MotionConfigContext,
  MotionContext: () => MotionContext,
  MotionValue: () => MotionValue,
  PresenceContext: () => PresenceContext,
  Reorder: () => Reorder,
  SwitchLayoutGroupContext: () => SwitchLayoutGroupContext,
  addScaleCorrector: () => addScaleCorrector,
  animate: () => animate2,
  animateVisualElement: () => animateVisualElement,
  animationControls: () => animationControls,
  createDomMotionComponent: () => createDomMotionComponent,
  createMotionComponent: () => createMotionComponent,
  domAnimation: () => domAnimation,
  domMax: () => domMax,
  isValidMotionProp: () => isValidMotionProp,
  m: () => m,
  motion: () => motion,
  motionValue: () => motionValue,
  resolveMotionValue: () => resolveMotionValue,
  transform: () => transform,
  useAnimation: () => useAnimation,
  useAnimationFrame: () => useAnimationFrame,
  useCycle: () => useCycle,
  useDeprecatedAnimatedState: () => useAnimatedState,
  useDeprecatedInvertedScale: () => useInvertedScale,
  useDomEvent: () => useDomEvent,
  useDragControls: () => useDragControls,
  useElementScroll: () => useElementScroll,
  useInstantLayoutTransition: () => useInstantLayoutTransition,
  useInstantTransition: () => useInstantTransition,
  useIsPresent: () => useIsPresent,
  useMotionTemplate: () => useMotionTemplate,
  useMotionValue: () => useMotionValue,
  usePresence: () => usePresence,
  useReducedMotion: () => useReducedMotion,
  useResetProjection: () => useResetProjection,
  useSpring: () => useSpring,
  useTime: () => useTime,
  useTransform: () => useTransform,
  useVelocity: () => useVelocity,
  useViewportScroll: () => useViewportScroll,
  visualElement: () => visualElement
}); // node_modules/framer-motion/dist/es/motion/features/definitions.mjs


var createDefinition = function (propNames) {
  return {
    isEnabled: function (props) {
      return propNames.some(function (name) {
        return !!props[name];
      });
    }
  };
};

var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
  inView: createDefinition(["whileInView", "onViewportEnter", "onViewportLeave"])
};

function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null) continue;

    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
} // node_modules/framer-motion/dist/es/context/LazyContext.mjs


var import_react = require("react@18.2.0");

var LazyContext = (0, import_react.createContext)({
  strict: false
}); // node_modules/framer-motion/dist/es/motion/features/use-features.mjs

var import_tslib = require("tslib@2.4.0");

var React = __toESM(require("react@18.2.0"), 0);

var import_react2 = require("react@18.2.0");

var import_hey_listen = require("hey-listen@1.0.8");

var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;

function useFeatures(props, visualElement2, preloadedFeatures) {
  var features = [];
  var lazyContext = (0, import_react2.useContext)(LazyContext);
  if (!visualElement2) return null;

  if (preloadedFeatures && lazyContext.strict) {
    (0, import_hey_listen.invariant)(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  }

  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = featureDefinitions[name_1],
        isEnabled = _a.isEnabled,
        Component = _a.Component;

    if (isEnabled(props) && Component) {
      features.push(React.createElement(Component, (0, import_tslib.__assign)({
        key: name_1
      }, props, {
        visualElement: visualElement2
      })));
    }
  }

  return features;
} // node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs


var import_react3 = require("react@18.2.0");

var MotionConfigContext = (0, import_react3.createContext)({
  transformPagePoint: function (p) {
    return p;
  },
  isStatic: false
}); // node_modules/framer-motion/dist/es/context/MotionContext/index.mjs

var import_react4 = require("react@18.2.0");

var MotionContext = (0, import_react4.createContext)({});

function useVisualElementContext() {
  return (0, import_react4.useContext)(MotionContext).visualElement;
} // node_modules/framer-motion/dist/es/context/PresenceContext.mjs


var import_react5 = require("react@18.2.0");

var PresenceContext = (0, import_react5.createContext)(null); // node_modules/framer-motion/dist/es/utils/is-browser.mjs

var isBrowser = typeof window !== "undefined"; // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs

var import_react6 = require("react@18.2.0");

var useIsomorphicLayoutEffect = isBrowser ? import_react6.useLayoutEffect : import_react6.useEffect; // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs

var import_react7 = require("react@18.2.0");

function useVisualElement(Component, visualState, props, createVisualElement) {
  var lazyContext = (0, import_react7.useContext)(LazyContext);
  var parent = useVisualElementContext();
  var presenceContext = (0, import_react7.useContext)(PresenceContext);
  var visualElementRef = (0, import_react7.useRef)(void 0);
  if (!createVisualElement) createVisualElement = lazyContext.renderer;

  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false
    });
  }

  var visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect(function () {
    visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
  });
  (0, import_react7.useEffect)(function () {
    var _a;

    (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect(function () {
    return function () {
      return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
    };
  }, []);
  return visualElement2;
} // node_modules/framer-motion/dist/es/utils/is-ref-object.mjs


function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
} // node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs


var import_react8 = require("react@18.2.0");

function useMotionRef(visualState, visualElement2, externalRef) {
  return (0, import_react8.useCallback)(function (instance) {
    var _a;

    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));

    if (visualElement2) {
      instance ? visualElement2.mount(instance) : visualElement2.unmount();
    }

    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement2]);
} // node_modules/framer-motion/dist/es/render/utils/variants.mjs


function isVariantLabels(v) {
  return Array.isArray(v);
}

function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}

function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function (value, key) {
    return current[key] = value.get();
  });
  return current;
}

function getVelocity(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function (value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}

function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;

  if (currentValues === void 0) {
    currentValues = {};
  }

  if (currentVelocity === void 0) {
    currentVelocity = {};
  }

  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }

  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }

  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }

  return definition;
}

function resolveVariant(visualElement2, definition, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity(visualElement2));
}

function checkIfControllingVariants(props) {
  var _a;

  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}

function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
} // node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs


function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial,
        animate4 = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate4) ? animate4 : void 0
    };
  }

  return props.inherit !== false ? context : {};
} // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs


var import_react9 = require("react@18.2.0");

function useCreateMotionContext(props) {
  var _a = getCurrentTreeVariants(props, (0, import_react9.useContext)(MotionContext)),
      initial = _a.initial,
      animate4 = _a.animate;

  return (0, import_react9.useMemo)(function () {
    return {
      initial,
      animate: animate4
    };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate4)]);
}

function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
} // node_modules/framer-motion/dist/es/utils/use-constant.mjs


var import_react10 = require("react@18.2.0");

function useConstant(init) {
  var ref = (0, import_react10.useRef)(null);

  if (ref.current === null) {
    ref.current = init();
  }

  return ref.current;
} // node_modules/framer-motion/dist/es/utils/array.mjs


var import_tslib2 = require("tslib@2.4.0");

function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}

function removeItem(arr, item) {
  var index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}

function moveItem(_a, fromIndex, toIndex) {
  var _b = (0, import_tslib2.__read)(_a),
      arr = _b.slice(0);

  var startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < arr.length) {
    var endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;

    var _c = (0, import_tslib2.__read)(arr.splice(fromIndex, 1), 1),
        item = _c[0];

    arr.splice(endIndex, 0, item);
  }

  return arr;
} // node_modules/framer-motion/dist/es/utils/subscription-manager.mjs


var SubscriptionManager = function () {
  function SubscriptionManager2() {
    this.subscriptions = [];
  }

  SubscriptionManager2.prototype.add = function (handler) {
    var _this = this;

    addUniqueItem(this.subscriptions, handler);
    return function () {
      return removeItem(_this.subscriptions, handler);
    };
  };

  SubscriptionManager2.prototype.notify = function (a, b, c) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;

    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        var handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  };

  SubscriptionManager2.prototype.getSize = function () {
    return this.subscriptions.length;
  };

  SubscriptionManager2.prototype.clear = function () {
    this.subscriptions.length = 0;
  };

  return SubscriptionManager2;
}(); // node_modules/framer-motion/dist/es/value/index.mjs


var import_framesync = __toESM(require("framesync@6.0.1"), 0);

var import_popmotion = require("popmotion@11.0.3");

var isFloat = function (value) {
  return !isNaN(parseFloat(value));
};

var MotionValue = function () {
  function MotionValue2(init) {
    var _this = this;

    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;

    this.updateAndNotify = function (v, render) {
      if (render === void 0) {
        render = true;
      }

      _this.prev = _this.current;
      _this.current = v;

      var _a = (0, import_framesync.getFrameData)(),
          delta = _a.delta,
          timestamp = _a.timestamp;

      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        import_framesync.default.postRender(_this.scheduleVelocityCheck);
      }

      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }

      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }

      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };

    this.scheduleVelocityCheck = function () {
      return import_framesync.default.postRender(_this.velocityCheck);
    };

    this.velocityCheck = function (_a) {
      var timestamp = _a.timestamp;

      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;

        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };

    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }

  MotionValue2.prototype.onChange = function (subscription) {
    return this.updateSubscribers.add(subscription);
  };

  MotionValue2.prototype.clearListeners = function () {
    this.updateSubscribers.clear();
  };

  MotionValue2.prototype.onRenderRequest = function (subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };

  MotionValue2.prototype.attach = function (passiveEffect) {
    this.passiveEffect = passiveEffect;
  };

  MotionValue2.prototype.set = function (v, render) {
    if (render === void 0) {
      render = true;
    }

    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };

  MotionValue2.prototype.get = function () {
    return this.current;
  };

  MotionValue2.prototype.getPrevious = function () {
    return this.prev;
  };

  MotionValue2.prototype.getVelocity = function () {
    return this.canTrackVelocity ? (0, import_popmotion.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };

  MotionValue2.prototype.start = function (animation) {
    var _this = this;

    this.stop();
    return new Promise(function (resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function () {
      return _this.clearAnimation();
    });
  };

  MotionValue2.prototype.stop = function () {
    if (this.stopAnimation) this.stopAnimation();
    this.clearAnimation();
  };

  MotionValue2.prototype.isAnimating = function () {
    return !!this.stopAnimation;
  };

  MotionValue2.prototype.clearAnimation = function () {
    this.stopAnimation = null;
  };

  MotionValue2.prototype.destroy = function () {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };

  return MotionValue2;
}();

function motionValue(init) {
  return new MotionValue(init);
} // node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs


var isMotionValue = function (value) {
  return Boolean(value !== null && typeof value === "object" && value.getVelocity);
}; // node_modules/framer-motion/dist/es/utils/time-conversion.mjs


var secondsToMilliseconds = function (seconds) {
  return seconds * 1e3;
}; // node_modules/framer-motion/dist/es/animation/utils/easing.mjs


var import_tslib3 = require("tslib@2.4.0");

var import_hey_listen2 = require("hey-listen@1.0.8");

var import_popmotion2 = require("popmotion@11.0.3");

var easingLookup = {
  linear: import_popmotion2.linear,
  easeIn: import_popmotion2.easeIn,
  easeInOut: import_popmotion2.easeInOut,
  easeOut: import_popmotion2.easeOut,
  circIn: import_popmotion2.circIn,
  circInOut: import_popmotion2.circInOut,
  circOut: import_popmotion2.circOut,
  backIn: import_popmotion2.backIn,
  backInOut: import_popmotion2.backInOut,
  backOut: import_popmotion2.backOut,
  anticipate: import_popmotion2.anticipate,
  bounceIn: import_popmotion2.bounceIn,
  bounceInOut: import_popmotion2.bounceInOut,
  bounceOut: import_popmotion2.bounceOut
};

var easingDefinitionToFunction = function (definition) {
  if (Array.isArray(definition)) {
    (0, import_hey_listen2.invariant)(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");

    var _a = (0, import_tslib3.__read)(definition, 4),
        x1 = _a[0],
        y1 = _a[1],
        x2 = _a[2],
        y2 = _a[3];

    return (0, import_popmotion2.cubicBezier)(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    (0, import_hey_listen2.invariant)(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
    return easingLookup[definition];
  }

  return definition;
};

var isEasingArray = function (ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
}; // node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs


var import_style_value_types = require("style-value-types@5.0.0");

var isAnimatable = function (key, value) {
  if (key === "zIndex") return false;
  if (typeof value === "number" || Array.isArray(value)) return true;

  if (typeof value === "string" && import_style_value_types.complex.test(value) && !value.startsWith("url(")) {
    return true;
  }

  return false;
}; // node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs


var isKeyframesTarget = function (v) {
  return Array.isArray(v);
}; // node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs


var import_tslib4 = require("tslib@2.4.0");

var underDampedSpring = function () {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
};

var criticallyDampedSpring = function (to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};

var linearTween = function () {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};

var keyframes = function (values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};

var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};

var getDefaultTransition = function (valueKey, to) {
  var transitionFactory;

  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }

  return (0, import_tslib4.__assign)({
    to
  }, transitionFactory(to));
}; // node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs


var import_tslib5 = require("tslib@2.4.0");

var import_style_value_types2 = require("style-value-types@5.0.0");

var int = (0, import_tslib5.__assign)((0, import_tslib5.__assign)({}, import_style_value_types2.number), {
  transform: Math.round
}); // node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs

var import_style_value_types3 = require("style-value-types@5.0.0");

var numberValueTypes = {
  borderWidth: import_style_value_types3.px,
  borderTopWidth: import_style_value_types3.px,
  borderRightWidth: import_style_value_types3.px,
  borderBottomWidth: import_style_value_types3.px,
  borderLeftWidth: import_style_value_types3.px,
  borderRadius: import_style_value_types3.px,
  radius: import_style_value_types3.px,
  borderTopLeftRadius: import_style_value_types3.px,
  borderTopRightRadius: import_style_value_types3.px,
  borderBottomRightRadius: import_style_value_types3.px,
  borderBottomLeftRadius: import_style_value_types3.px,
  width: import_style_value_types3.px,
  maxWidth: import_style_value_types3.px,
  height: import_style_value_types3.px,
  maxHeight: import_style_value_types3.px,
  size: import_style_value_types3.px,
  top: import_style_value_types3.px,
  right: import_style_value_types3.px,
  bottom: import_style_value_types3.px,
  left: import_style_value_types3.px,
  padding: import_style_value_types3.px,
  paddingTop: import_style_value_types3.px,
  paddingRight: import_style_value_types3.px,
  paddingBottom: import_style_value_types3.px,
  paddingLeft: import_style_value_types3.px,
  margin: import_style_value_types3.px,
  marginTop: import_style_value_types3.px,
  marginRight: import_style_value_types3.px,
  marginBottom: import_style_value_types3.px,
  marginLeft: import_style_value_types3.px,
  rotate: import_style_value_types3.degrees,
  rotateX: import_style_value_types3.degrees,
  rotateY: import_style_value_types3.degrees,
  rotateZ: import_style_value_types3.degrees,
  scale: import_style_value_types3.scale,
  scaleX: import_style_value_types3.scale,
  scaleY: import_style_value_types3.scale,
  scaleZ: import_style_value_types3.scale,
  skew: import_style_value_types3.degrees,
  skewX: import_style_value_types3.degrees,
  skewY: import_style_value_types3.degrees,
  distance: import_style_value_types3.px,
  translateX: import_style_value_types3.px,
  translateY: import_style_value_types3.px,
  translateZ: import_style_value_types3.px,
  x: import_style_value_types3.px,
  y: import_style_value_types3.px,
  z: import_style_value_types3.px,
  perspective: import_style_value_types3.px,
  transformPerspective: import_style_value_types3.px,
  opacity: import_style_value_types3.alpha,
  originX: import_style_value_types3.progressPercentage,
  originY: import_style_value_types3.progressPercentage,
  originZ: import_style_value_types3.px,
  zIndex: int,
  fillOpacity: import_style_value_types3.alpha,
  strokeOpacity: import_style_value_types3.alpha,
  numOctaves: int
}; // node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs

var import_tslib6 = require("tslib@2.4.0");

var import_style_value_types4 = require("style-value-types@5.0.0");

var defaultValueTypes = (0, import_tslib6.__assign)((0, import_tslib6.__assign)({}, numberValueTypes), {
  color: import_style_value_types4.color,
  backgroundColor: import_style_value_types4.color,
  outlineColor: import_style_value_types4.color,
  fill: import_style_value_types4.color,
  stroke: import_style_value_types4.color,
  borderColor: import_style_value_types4.color,
  borderTopColor: import_style_value_types4.color,
  borderRightColor: import_style_value_types4.color,
  borderBottomColor: import_style_value_types4.color,
  borderLeftColor: import_style_value_types4.color,
  filter: import_style_value_types4.filter,
  WebkitFilter: import_style_value_types4.filter
});

var getDefaultValueType = function (key) {
  return defaultValueTypes[key];
}; // node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs


var import_style_value_types5 = require("style-value-types@5.0.0");

function getAnimatableNone(key, value) {
  var _a;

  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== import_style_value_types5.filter) defaultValueType = import_style_value_types5.complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
} // node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs


var instantAnimationState = {
  current: false
}; // node_modules/framer-motion/dist/es/utils/resolve-value.mjs

var isCustomValue = function (v) {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};

var resolveFinalValueInKeyframes = function (v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}; // node_modules/framer-motion/dist/es/animation/utils/transitions.mjs


var import_tslib7 = require("tslib@2.4.0");

var import_popmotion3 = require("popmotion@11.0.3");

var import_hey_listen3 = require("hey-listen@1.0.8");

function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = (0, import_tslib7.__rest)(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}

var legacyRepeatWarning = false;

function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease,
      times = _a.times,
      yoyo = _a.yoyo,
      flip = _a.flip,
      loop = _a.loop,
      transition = (0, import_tslib7.__rest)(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = (0, import_tslib7.__assign)({}, transition);
  if (times) options["offset"] = times;
  if (transition.duration) options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay) options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);

  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }

  if (transition.type === "tween") options.type = "keyframes";

  if (yoyo || loop || flip) {
    (0, import_hey_listen3.warning)(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;

    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }

    options.repeat = loop || yoyo || flip || transition.repeat;
  }

  if (transition.type !== "spring") options.type = "keyframes";
  return options;
}

function getDelayFromTransition(transition, key) {
  var _a, _b;

  var valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}

function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = (0, import_tslib7.__spreadArray)([], (0, import_tslib7.__read)(options.to), false);
    options.to[0] = options.from;
  }

  return options;
}

function getPopmotionAnimationOptions(transition, options, key) {
  var _a;

  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }

  hydrateKeyframes(options);

  if (!isTransitionDefined(transition)) {
    transition = (0, import_tslib7.__assign)((0, import_tslib7.__assign)({}, transition), getDefaultTransition(key, options.to));
  }

  return (0, import_tslib7.__assign)((0, import_tslib7.__assign)({}, options), convertTransitionToAnimationOptions(transition));
}

function getAnimation(key, value, target, transition, onComplete) {
  var _a;

  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);

  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }

  var isOriginAnimatable = isAnimatable(key, origin);
  (0, import_hey_listen3.warning)(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, ' from "').concat(origin, '" to "').concat(target, '". ').concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));

  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function (v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? (0, import_popmotion3.inertia)((0, import_tslib7.__assign)((0, import_tslib7.__assign)({}, options), valueTransition)) : (0, import_popmotion3.animate)((0, import_tslib7.__assign)((0, import_tslib7.__assign)({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
      onUpdate: function (v) {
        var _a2;

        options.onUpdate(v);
        (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
      },
      onComplete: function () {
        var _a2;

        options.onComplete();
        (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
      }
    }));
  }

  function set() {
    var _a2, _b;

    var finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return {
      stop: function () {}
    };
  }

  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}

function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}

function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}

function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }

  if (instantAnimationState.current) {
    transition = {
      type: false
    };
  }

  return value.start(function (onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);

    var start = function () {
      return controls = animation();
    };

    if (delay) {
      delayTimer = setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }

    return function () {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
} // node_modules/framer-motion/dist/es/animation/animate.mjs


function animate2(from, to, transition) {
  if (transition === void 0) {
    transition = {};
  }

  var value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition);
  return {
    stop: function () {
      return value.stop();
    },
    isAnimating: function () {
      return value.isAnimating();
    }
  };
} // node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs


var import_popmotion4 = require("popmotion@11.0.3");

var import_style_value_types6 = require("style-value-types@5.0.0");

var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;

var asNumber = function (value) {
  return typeof value === "string" ? parseFloat(value) : value;
};

var isPx = function (value) {
  return typeof value === "number" || import_style_value_types6.px.test(value);
};

function mixValues(target, follow, lead, progress3, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;

  if (shouldCrossfadeOpacity) {
    target.opacity = (0, import_popmotion4.mix)(0, (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress3));
    target.opacityExit = (0, import_popmotion4.mix)((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress3));
  } else if (isOnlyMember) {
    target.opacity = (0, import_popmotion4.mix)((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress3);
  }

  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border".concat(borders[i], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);

    if (canMix) {
      target[borderLabel] = Math.max((0, import_popmotion4.mix)(asNumber(followRadius), asNumber(leadRadius), progress3), 0);

      if (import_style_value_types6.percent.test(leadRadius) || import_style_value_types6.percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }

  if (follow.rotate || lead.rotate) {
    target.rotate = (0, import_popmotion4.mix)(follow.rotate || 0, lead.rotate || 0, progress3);
  }
}

function getRadius(values, radiusName) {
  var _a;

  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}

var easeCrossfadeIn = compress(0, 0.5, import_popmotion4.circOut);
var easeCrossfadeOut = compress(0.5, 0.95, import_popmotion4.linear);

function compress(min, max, easing) {
  return function (p) {
    if (p < min) return 0;
    if (p > max) return 1;
    return easing((0, import_popmotion4.progress)(min, max, p));
  };
} // node_modules/framer-motion/dist/es/projection/geometry/copy.mjs


function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}

function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
} // node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs


function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}

function hasScale(_a) {
  var scale2 = _a.scale,
      scaleX = _a.scaleX,
      scaleY = _a.scaleY;
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}

function hasTransform(values) {
  return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
}

function hasTranslate(value) {
  return value && value !== "0%";
} // node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs


var import_tslib8 = require("tslib@2.4.0");

var import_popmotion5 = require("popmotion@11.0.3");

function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}

function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }

  return scalePoint(point, scale2, originPoint) + translate;
}

function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }

  if (scale2 === void 0) {
    scale2 = 1;
  }

  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}

function applyBoxDelta(box, _a) {
  var x = _a.x,
      y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}

function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;

  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }

  var treeLength = treePath.length;
  if (!treeLength) return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;

  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents") continue;

    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.x,
        y: -node.scroll.y
      });
    }

    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }

    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}

function translateAxis(axis, distance3) {
  axis.min = axis.min + distance3;
  axis.max = axis.max + distance3;
}

function transformAxis(axis, transforms, _a) {
  var _b = (0, import_tslib8.__read)(_a, 3),
      key = _b[0],
      scaleKey = _b[1],
      originKey = _b[2];

  var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  var originPoint = (0, import_popmotion5.mix)(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}

var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];

function transformBox(box, transform2) {
  transformAxis(box.x, transform2, xKeys);
  transformAxis(box.y, transform2, yKeys);
} // node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs


var import_popmotion6 = require("popmotion@11.0.3");

function calcLength(axis) {
  return axis.max - axis.min;
}

function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }

  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }

  return (0, import_popmotion6.distance)(value, target) < maxDistance;
}

function calcAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }

  delta.origin = origin;
  delta.originPoint = (0, import_popmotion6.mix)(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = (0, import_popmotion6.mix)(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}

function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}

function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}

function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}

function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}

function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
} // node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs


var import_tslib9 = require("tslib@2.4.0");

var import_popmotion7 = require("popmotion@11.0.3");

var import_style_value_types7 = require("style-value-types@5.0.0");

function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);

  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }

  return point;
}

function removeAxisDelta(axis, translate, scale2, origin, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }

  if (scale2 === void 0) {
    scale2 = 1;
  }

  if (origin === void 0) {
    origin = 0.5;
  }

  if (originAxis === void 0) {
    originAxis = axis;
  }

  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }

  if (import_style_value_types7.percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = (0, import_popmotion7.mix)(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }

  if (typeof translate !== "number") return;
  var originPoint = (0, import_popmotion7.mix)(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}

function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
  var _b = (0, import_tslib9.__read)(_a, 3),
      key = _b[0],
      scaleKey = _b[1],
      originKey = _b[2];

  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}

var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];

function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
} // node_modules/framer-motion/dist/es/projection/geometry/models.mjs


var createAxisDelta = function () {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};

var createDelta = function () {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};

var createAxis = function () {
  return {
    min: 0,
    max: 0
  };
};

var createBox = function () {
  return {
    x: createAxis(),
    y: createAxis()
  };
}; // node_modules/framer-motion/dist/es/projection/geometry/utils.mjs


function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}

function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}

function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
} // node_modules/framer-motion/dist/es/projection/shared/stack.mjs


var NodeStack = function () {
  function NodeStack2() {
    this.members = [];
  }

  NodeStack2.prototype.add = function (node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };

  NodeStack2.prototype.remove = function (node) {
    removeItem(this.members, node);

    if (node === this.prevLead) {
      this.prevLead = void 0;
    }

    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];

      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };

  NodeStack2.prototype.relegate = function (node) {
    var indexOfNode = this.members.findIndex(function (member2) {
      return node === member2;
    });
    if (indexOfNode === 0) return false;
    var prevLead;

    for (var i = indexOfNode; i >= 0; i--) {
      var member = this.members[i];

      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }

    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };

  NodeStack2.prototype.promote = function (node, preserveFollowOpacity) {
    var _a;

    var prevLead = this.lead;
    if (node === prevLead) return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();

    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;

      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }

      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }

      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }

      var crossfade = node.options.crossfade;

      if (crossfade === false) {
        prevLead.hide();
      }
    }
  };

  NodeStack2.prototype.exitAnimationComplete = function () {
    this.members.forEach(function (node) {
      var _a, _b, _c, _d, _e;

      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  };

  NodeStack2.prototype.scheduleRender = function () {
    this.members.forEach(function (node) {
      node.instance && node.scheduleRender(false);
    });
  };

  NodeStack2.prototype.removeLeadSnapshot = function () {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  };

  return NodeStack2;
}(); // node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs


var scaleCorrectors = {};

function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
} // node_modules/framer-motion/dist/es/projection/styles/transform.mjs


var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1)";

function buildProjectionTransform(delta, treeScale, latestTransform) {
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform2 = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");

  if (latestTransform) {
    var rotate = latestTransform.rotate,
        rotateX = latestTransform.rotateX,
        rotateY = latestTransform.rotateY;
    if (rotate) transform2 += "rotate(".concat(rotate, "deg) ");
    if (rotateX) transform2 += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY) transform2 += "rotateY(".concat(rotateY, "deg) ");
  }

  transform2 += "scale(".concat(delta.x.scale, ", ").concat(delta.y.scale, ")");
  return transform2 === identityProjection ? "none" : transform2;
} // node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs


function eachAxis(callback) {
  return [callback("x"), callback("y")];
} // node_modules/framer-motion/dist/es/render/html/utils/transform.mjs


var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
  return transformAxes.forEach(function (axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});

function sortTransformProps(a, b) {
  return transformProps.indexOf(a) - transformProps.indexOf(b);
}

var transformPropSet = new Set(transformProps);

function isTransformProp(key) {
  return transformPropSet.has(key);
}

var transformOriginProps = /* @__PURE__ */new Set(["originX", "originY", "originZ"]);

function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
} // node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs


var compareByDepth = function (a, b) {
  return a.depth - b.depth;
}; // node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs


var FlatTree = function () {
  function FlatTree2() {
    this.children = [];
    this.isDirty = false;
  }

  FlatTree2.prototype.add = function (child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };

  FlatTree2.prototype.remove = function (child) {
    removeItem(this.children, child);
    this.isDirty = true;
  };

  FlatTree2.prototype.forEach = function (callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };

  return FlatTree2;
}(); // node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs


function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
} // node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs


var import_tslib10 = require("tslib@2.4.0");

var import_framesync2 = __toESM(require("framesync@6.0.1"), 0);

var import_popmotion8 = require("popmotion@11.0.3");

var animationTarget = 1e3;
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener,
      defaultParent = _a.defaultParent,
      measureScroll = _a.measureScroll,
      resetTransform = _a.resetTransform;
  return function () {
    function ProjectionNode(id3, latestValues, parent) {
      var _this = this;

      if (latestValues === void 0) {
        latestValues = {};
      }

      if (parent === void 0) {
        parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      }

      this.children = /* @__PURE__ */new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = /* @__PURE__ */new Map();
      this.potentialNodes = /* @__PURE__ */new Map();

      this.checkUpdateFailed = function () {
        if (_this.isUpdating) {
          _this.isUpdating = false;

          _this.clearAllSnapshots();
        }
      };

      this.updateProjection = function () {
        _this.nodes.forEach(resolveTargetDelta);

        _this.nodes.forEach(calcProjection);
      };

      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */new Map();
      this.id = id3;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? (0, import_tslib10.__spreadArray)((0, import_tslib10.__spreadArray)([], (0, import_tslib10.__read)(parent.path), false), [parent], false) : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      id3 && this.root.registerPotentialNode(id3, this);

      for (var i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }

      if (this.root === this) this.nodes = new FlatTree();
    }

    ProjectionNode.prototype.addEventListener = function (name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }

      return this.eventHandlers.get(name).add(handler);
    };

    ProjectionNode.prototype.notifyListeners = function (name) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      var subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, (0, import_tslib10.__spreadArray)([], (0, import_tslib10.__read)(args), false));
    };

    ProjectionNode.prototype.hasListeners = function (name) {
      return this.eventHandlers.has(name);
    };

    ProjectionNode.prototype.registerPotentialNode = function (id3, node) {
      this.potentialNodes.set(id3, node);
    };

    ProjectionNode.prototype.mount = function (instance, isLayoutDirty) {
      var _this = this;

      var _a2;

      if (isLayoutDirty === void 0) {
        isLayoutDirty = false;
      }

      if (this.instance) return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      var _b = this.options,
          layoutId = _b.layoutId,
          layout = _b.layout,
          visualElement2 = _b.visualElement;

      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }

      this.root.nodes.add(this);
      (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);

      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }

      if (attachResizeListener) {
        var unblockTimeout_1;

        var resizeUnblockUpdate_1 = function () {
          return _this.root.updateBlockedByResize = false;
        };

        attachResizeListener(instance, function () {
          _this.root.updateBlockedByResize = true;
          clearTimeout(unblockTimeout_1);
          unblockTimeout_1 = setTimeout(resizeUnblockUpdate_1, 250);

          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;

            _this.nodes.forEach(finishAnimation);
          }
        });
      }

      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }

      if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
        this.addEventListener("didUpdate", function (_a3) {
          var _b2, _c, _d, _e, _f;

          var delta = _a3.delta,
              hasLayoutChanged = _a3.hasLayoutChanged,
              hasRelativeTargetChanged = _a3.hasRelativeTargetChanged,
              newLayout = _a3.layout;

          if (_this.isTreeAnimationBlocked()) {
            _this.target = void 0;
            _this.relativeTarget = void 0;
            return;
          }

          var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
          var onLayoutAnimationComplete = visualElement2.getProps().onLayoutAnimationComplete;
          var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
          var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;

          if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
            if (_this.resumeFrom) {
              _this.resumingFrom = _this.resumeFrom;
              _this.resumingFrom.resumingFrom = void 0;
            }

            _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);

            _this.startAnimation((0, import_tslib10.__assign)((0, import_tslib10.__assign)({}, getValueTransition(layoutTransition, "layout")), {
              onComplete: onLayoutAnimationComplete
            }));
          } else {
            _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
          }

          _this.targetLayout = newLayout;
        });
      }
    };

    ProjectionNode.prototype.unmount = function () {
      var _a2, _b;

      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      import_framesync2.cancelSync.preRender(this.updateProjection);
    };

    ProjectionNode.prototype.blockUpdate = function () {
      this.updateManuallyBlocked = true;
    };

    ProjectionNode.prototype.unblockUpdate = function () {
      this.updateManuallyBlocked = false;
    };

    ProjectionNode.prototype.isUpdateBlocked = function () {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    };

    ProjectionNode.prototype.isTreeAnimationBlocked = function () {
      var _a2;

      return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
    };

    ProjectionNode.prototype.startUpdate = function () {
      var _a2;

      if (this.isUpdateBlocked()) return;
      this.isUpdating = true;
      (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
    };

    ProjectionNode.prototype.willUpdate = function (shouldNotifyListeners) {
      var _a2, _b, _c;

      if (shouldNotifyListeners === void 0) {
        shouldNotifyListeners = true;
      }

      if (this.root.isUpdateBlocked()) {
        (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
        return;
      }

      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty) return;
      this.isLayoutDirty = true;

      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll();
      }

      var _d = this.options,
          layoutId = _d.layoutId,
          layout = _d.layout;
      if (layoutId === void 0 && !layout) return;
      var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    };

    ProjectionNode.prototype.didUpdate = function () {
      var updateWasBlocked = this.isUpdateBlocked();

      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }

      if (!this.isUpdating) return;
      this.isUpdating = false;

      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }

      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      import_framesync2.flushSync.update();
      import_framesync2.flushSync.preRender();
      import_framesync2.flushSync.render();
    };

    ProjectionNode.prototype.clearAllSnapshots = function () {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    };

    ProjectionNode.prototype.scheduleUpdateProjection = function () {
      import_framesync2.default.preRender(this.updateProjection, false, true);
    };

    ProjectionNode.prototype.scheduleCheckAfterUnmount = function () {
      var _this = this;

      import_framesync2.default.postRender(function () {
        if (_this.isLayoutDirty) {
          _this.root.didUpdate();
        } else {
          _this.root.checkUpdateFailed();
        }
      });
    };

    ProjectionNode.prototype.updateSnapshot = function () {
      if (this.snapshot || !this.instance) return;
      var measured = this.measure();
      var layout = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout);
      this.snapshot = {
        measured,
        layout,
        latestValues: {}
      };
    };

    ProjectionNode.prototype.updateLayout = function () {
      var _a2;

      if (!this.instance) return;
      this.updateScroll();

      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }

      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.updateScroll();
        }
      }

      var measured = this.measure();
      roundBox(measured);
      var prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    };

    ProjectionNode.prototype.updateScroll = function () {
      if (this.options.layoutScroll && this.instance) {
        this.scroll = measureScroll(this.instance);
      }
    };

    ProjectionNode.prototype.resetTransform = function () {
      var _a2;

      if (!resetTransform) return;
      var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;

      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    };

    ProjectionNode.prototype.measure = function () {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2) return createBox();
      var box = visualElement2.measureViewportBox();
      var scroll = this.root.scroll;

      if (scroll) {
        translateAxis(box.x, scroll.x);
        translateAxis(box.y, scroll.y);
      }

      return box;
    };

    ProjectionNode.prototype.removeElementScroll = function (box) {
      var boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);

      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        var scroll_1 = node.scroll,
            options = node.options;

        if (node !== this.root && scroll_1 && options.layoutScroll) {
          translateAxis(boxWithoutScroll.x, scroll_1.x);
          translateAxis(boxWithoutScroll.y, scroll_1.y);
        }
      }

      return boxWithoutScroll;
    };

    ProjectionNode.prototype.applyTransform = function (box, transformOnly) {
      if (transformOnly === void 0) {
        transformOnly = false;
      }

      var withTransforms = createBox();
      copyBoxInto(withTransforms, box);

      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];

        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }

        if (!hasTransform(node.latestValues)) continue;
        transformBox(withTransforms, node.latestValues);
      }

      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }

      return withTransforms;
    };

    ProjectionNode.prototype.removeTransform = function (box) {
      var _a2;

      var boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);

      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!node.instance) continue;
        if (!hasTransform(node.latestValues)) continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        var sourceBox = createBox();
        var nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
      }

      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }

      return boxWithoutTransform;
    };

    ProjectionNode.prototype.setTargetDelta = function (delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    };

    ProjectionNode.prototype.setOptions = function (options) {
      var _a2;

      this.options = (0, import_tslib10.__assign)((0, import_tslib10.__assign)((0, import_tslib10.__assign)({}, this.options), options), {
        crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true
      });
    };

    ProjectionNode.prototype.clearMeasurements = function () {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    };

    ProjectionNode.prototype.resolveTargetDelta = function () {
      var _a2;

      var _b = this.options,
          layout = _b.layout,
          layoutId = _b.layoutId;
      if (!this.layout || !(layout || layoutId)) return;

      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();

        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }

      if (!this.relativeTarget && !this.targetDelta) return;

      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }

      if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }

        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }

      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();

        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    };

    ProjectionNode.prototype.getClosestProjectingParent = function () {
      if (!this.parent || hasTransform(this.parent.latestValues)) return void 0;

      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    };

    ProjectionNode.prototype.calcProjection = function () {
      var _a2;

      var _b = this.options,
          layout = _b.layout,
          layoutId = _b.layoutId;
      this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);

      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }

      if (!this.layout || !(layout || layoutId)) return;
      var lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      var target = lead.target;
      if (!target) return;

      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }

      var prevTreeScaleX = this.treeScale.x;
      var prevTreeScaleY = this.treeScale.y;
      var prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);

      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    };

    ProjectionNode.prototype.hide = function () {
      this.isVisible = false;
    };

    ProjectionNode.prototype.show = function () {
      this.isVisible = true;
    };

    ProjectionNode.prototype.scheduleRender = function (notifyAll) {
      var _a2, _b, _c;

      if (notifyAll === void 0) {
        notifyAll = true;
      }

      (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
      notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());

      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    };

    ProjectionNode.prototype.setAnimationOrigin = function (delta, hasOnlyRelativeTargetChanged) {
      var _this = this;

      var _a2;

      if (hasOnlyRelativeTargetChanged === void 0) {
        hasOnlyRelativeTargetChanged = false;
      }

      var snapshot = this.snapshot;
      var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      var mixedValues = (0, import_tslib10.__assign)({}, this.latestValues);
      var targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      var relativeLayout = createBox();
      var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
      var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));

      this.mixTargetDelta = function (latest) {
        var _a3;

        var progress3 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress3);
        mixAxisDelta(targetDelta.y, delta.y, progress3);

        _this.setTargetDelta(targetDelta);

        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
          calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
          mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress3);
        }

        if (isSharedLayoutAnimation) {
          _this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress3, shouldCrossfadeOpacity, isOnlyMember);
        }

        _this.root.scheduleUpdateProjection();

        _this.scheduleRender();
      };

      this.mixTargetDelta(0);
    };

    ProjectionNode.prototype.startAnimation = function (options) {
      var _this = this;

      var _a2, _b;

      (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();

      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }

      if (this.pendingAnimation) {
        import_framesync2.cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }

      this.pendingAnimation = import_framesync2.default.update(function () {
        globalProjectionState.hasAnimatedSinceResize = true;
        _this.currentAnimation = animate2(0, animationTarget, (0, import_tslib10.__assign)((0, import_tslib10.__assign)({}, options), {
          onUpdate: function (latest) {
            var _a3;

            _this.mixTargetDelta(latest);

            (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
          },
          onComplete: function () {
            var _a3;

            (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);

            _this.completeAnimation();
          }
        }));

        if (_this.resumingFrom) {
          _this.resumingFrom.currentAnimation = _this.currentAnimation;
        }

        _this.pendingAnimation = void 0;
      });
    };

    ProjectionNode.prototype.completeAnimation = function () {
      var _a2;

      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }

      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    };

    ProjectionNode.prototype.finishAnimation = function () {
      var _a2;

      if (this.currentAnimation) {
        (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
        this.currentAnimation.stop();
      }

      this.completeAnimation();
    };

    ProjectionNode.prototype.applyTransformsToTarget = function () {
      var _a2 = this.getLead(),
          targetWithTransforms = _a2.targetWithTransforms,
          target = _a2.target,
          layout = _a2.layout,
          latestValues = _a2.latestValues;

      if (!targetWithTransforms || !target || !layout) return;
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    };

    ProjectionNode.prototype.registerSharedNode = function (layoutId, node) {
      var _a2, _b, _c;

      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }

      var stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    };

    ProjectionNode.prototype.isLead = function () {
      var stack = this.getStack();
      return stack ? stack.lead === this : true;
    };

    ProjectionNode.prototype.getLead = function () {
      var _a2;

      var layoutId = this.options.layoutId;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    };

    ProjectionNode.prototype.getPrevLead = function () {
      var _a2;

      var layoutId = this.options.layoutId;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    };

    ProjectionNode.prototype.getStack = function () {
      var layoutId = this.options.layoutId;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    };

    ProjectionNode.prototype.promote = function (_a2) {
      var _b = _a2 === void 0 ? {} : _a2,
          needsReset = _b.needsReset,
          transition = _b.transition,
          preserveFollowOpacity = _b.preserveFollowOpacity;

      var stack = this.getStack();
      if (stack) stack.promote(this, preserveFollowOpacity);

      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }

      if (transition) this.setOptions({
        transition
      });
    };

    ProjectionNode.prototype.relegate = function () {
      var stack = this.getStack();

      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    };

    ProjectionNode.prototype.resetRotation = function () {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2) return;
      var hasRotate = false;
      var resetValues = {};

      for (var i = 0; i < transformAxes.length; i++) {
        var axis = transformAxes[i];
        var key = "rotate" + axis;

        if (!visualElement2.getStaticValue(key)) {
          continue;
        }

        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }

      if (!hasRotate) return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();

      for (var key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }

      visualElement2.scheduleRender();
    };

    ProjectionNode.prototype.getProjectionStyles = function (styleProp) {
      var _a2, _b, _c, _d, _e, _f;

      if (styleProp === void 0) {
        styleProp = {};
      }

      var styles = {};
      if (!this.instance || this.isSVG) return styles;

      if (!this.isVisible) {
        return {
          visibility: "hidden"
        };
      } else {
        styles.visibility = "";
      }

      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;

      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }

      var lead = this.getLead();

      if (!this.projectionDelta || !this.layout || !lead.target) {
        var emptyStyles = {};

        if (this.options.layoutId) {
          emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }

        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }

        return emptyStyles;
      }

      var valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);

      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }

      var _g = this.projectionDelta,
          x = _g.x,
          y = _g.y;
      styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");

      if (lead.animationValues) {
        styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
      }

      for (var key in scaleCorrectors) {
        if (valuesToRender[key] === void 0) continue;
        var _h = scaleCorrectors[key],
            correct = _h.correct,
            applyTo = _h.applyTo;
        var corrected = correct(valuesToRender[key], lead);

        if (applyTo) {
          var num = applyTo.length;

          for (var i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }

      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }

      return styles;
    };

    ProjectionNode.prototype.clearSnapshot = function () {
      this.resumeFrom = this.snapshot = void 0;
    };

    ProjectionNode.prototype.resetTree = function () {
      this.root.nodes.forEach(function (node) {
        var _a2;

        return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    };

    return ProjectionNode;
  }();
}

function updateLayout(node) {
  node.updateLayout();
}

function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;

  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;

  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e = node.layout,
        layout_1 = _e.actual,
        measuredLayout = _e.measured;

    if (node.options.animationType === "size") {
      eachAxis(function (axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function (axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }

    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();

    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }

    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;

    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();

      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent,
            parentSnapshot = _f.snapshot,
            parentLayout = _f.layout;

        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);

          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }

    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }

  node.options.transition = void 0;
}

function clearSnapshot(node) {
  node.clearSnapshot();
}

function clearMeasurements(node) {
  node.clearMeasurements();
}

function resetTransformStyle(node) {
  node.resetTransform();
}

function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}

function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}

function calcProjection(node) {
  node.calcProjection();
}

function resetRotation(node) {
  node.resetRotation();
}

function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}

function mixAxisDelta(output, delta, p) {
  output.translate = (0, import_popmotion8.mix)(delta.translate, 0, p);
  output.scale = (0, import_popmotion8.mix)(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}

function mixAxis(output, from, to, p) {
  output.min = (0, import_popmotion8.mix)(from.min, to.min, p);
  output.max = (0, import_popmotion8.mix)(from.max, to.max, p);
}

function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}

function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}

var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};

function mountNodeEarly(node, id3) {
  var searchNode = node.root;

  for (var i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }

  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element = searchElement.querySelector('[data-projection-id="'.concat(id3, '"]'));
  if (element) node.mount(element, true);
}

function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}

function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
} // node_modules/framer-motion/dist/es/projection/node/id.mjs


var id = 1;

function useProjectionId() {
  return useConstant(function () {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
} // node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs


var import_react11 = require("react@18.2.0");

var LayoutGroupContext = (0, import_react11.createContext)({}); // node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs

var import_react12 = require("react@18.2.0");

var SwitchLayoutGroupContext = (0, import_react12.createContext)({}); // node_modules/framer-motion/dist/es/motion/features/use-projection.mjs

var import_react13 = require("react@18.2.0");

function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
  var _b;

  var layoutId = _a.layoutId,
      layout = _a.layout,
      drag2 = _a.drag,
      dragConstraints = _a.dragConstraints,
      layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = (0, import_react13.useContext)(SwitchLayoutGroupContext);

  if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
    return;
  }

  visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement2.projection.setOptions({
    layoutId,
    layout,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement: visualElement2,
    scheduleRender: function () {
      return visualElement2.scheduleRender();
    },
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig,
    layoutScroll
  });
} // node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs


var import_tslib11 = require("tslib@2.4.0");

var import_react14 = __toESM(require("react@18.2.0"), 0);

var VisualElementHandler = function (_super) {
  (0, import_tslib11.__extends)(VisualElementHandler2, _super);

  function VisualElementHandler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function () {
    this.updateProps();
    return null;
  };

  VisualElementHandler2.prototype.componentDidUpdate = function () {};

  VisualElementHandler2.prototype.updateProps = function () {
    var _a = this.props,
        visualElement2 = _a.visualElement,
        props = _a.props;
    if (visualElement2) visualElement2.setProps(props);
  };

  VisualElementHandler2.prototype.render = function () {
    return this.props.children;
  };

  return VisualElementHandler2;
}(import_react14.default.Component); // node_modules/framer-motion/dist/es/motion/index.mjs


var import_tslib12 = require("tslib@2.4.0");

var React2 = __toESM(require("react@18.2.0"), 0);

var import_react15 = require("react@18.2.0");

function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures,
      createVisualElement = _a.createVisualElement,
      projectionNodeConstructor = _a.projectionNodeConstructor,
      useRender = _a.useRender,
      useVisualState2 = _a.useVisualState,
      Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);

  function MotionComponent(props, externalRef) {
    var layoutId = useLayoutId(props);
    props = (0, import_tslib12.__assign)((0, import_tslib12.__assign)({}, props), {
      layoutId
    });
    var config = (0, import_react15.useContext)(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props);
    var projectionId = config.isStatic ? void 0 : useProjectionId();
    var visualState = useVisualState2(props, config.isStatic);

    if (!config.isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component, visualState, (0, import_tslib12.__assign)((0, import_tslib12.__assign)({}, config), props), createVisualElement);
      useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      features = useFeatures(props, context.visualElement, preloadedFeatures);
    }

    return React2.createElement(VisualElementHandler, {
      visualElement: context.visualElement,
      props: (0, import_tslib12.__assign)((0, import_tslib12.__assign)({}, config), props)
    }, features, React2.createElement(MotionContext.Provider, {
      value: context
    }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config.isStatic, context.visualElement)));
  }

  return (0, import_react15.forwardRef)(MotionComponent);
}

function useLayoutId(_a) {
  var _b;

  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = (0, import_react15.useContext)(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
} // node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs


function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }

    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }

  if (typeof Proxy === "undefined") {
    return custom;
  }

  var componentCache = /* @__PURE__ */new Map();
  return new Proxy(custom, {
    get: function (_target, key) {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }

      return componentCache.get(key);
    }
  });
} // node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs


var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"]; // node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs

function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }

  return false;
} // node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs


function isForcedMotionValue(key, _a) {
  var layout = _a.layout,
      layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
} // node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs


var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};

function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform2 = _a.transform,
      transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration,
      enableHardwareAcceleration = _c === void 0 ? true : _c,
      _d = _b.allowTransformNone,
      allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;

  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys2[i];
    transformString += "".concat(translateAlias[key] || key, "(").concat(transform2[key], ") ");
    if (key === "z") transformHasZ = true;
  }

  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }

  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }

  return transformString;
}

function buildTransformOrigin(_a) {
  var _b = _a.originX,
      originX = _b === void 0 ? "50%" : _b,
      _c = _a.originY,
      originY = _c === void 0 ? "50%" : _c,
      _d = _a.originZ,
      originZ = _d === void 0 ? 0 : _d;
  return "".concat(originX, " ").concat(originY, " ").concat(originZ);
} // node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs


function isCSSVariable(key) {
  return key.startsWith("--");
} // node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs


var getValueAsType = function (value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
}; // node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs


function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var _a;

  var style = state.style,
      vars = state.vars,
      transform2 = state.transform,
      transformKeys2 = state.transformKeys,
      transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform2 = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;

  for (var key in latestValues) {
    var value = latestValues[key];

    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }

    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);

    if (isTransformProp(key)) {
      hasTransform2 = true;
      transform2[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone) continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0)) transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      style[key] = valueAsType;
    }
  }

  if (hasTransform2) {
    style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
  } else if (transformTemplate) {
    style.transform = transformTemplate({}, "");
  } else if (!latestValues.transform && style.transform) {
    style.transform = "none";
  }

  if (hasTransformOrigin) {
    style.transformOrigin = buildTransformOrigin(transformOrigin);
  }
} // node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs


var createHtmlRenderState = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
}; // node_modules/framer-motion/dist/es/render/html/use-props.mjs


var import_tslib13 = require("tslib@2.4.0");

var import_react16 = require("react@18.2.0");

function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}

function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return (0, import_react16.useMemo)(function () {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    var vars = state.vars,
        style = state.style;
    return (0, import_tslib13.__assign)((0, import_tslib13.__assign)({}, vars), style);
  }, [visualState]);
}

function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));

  if (props.transformValues) {
    style = props.transformValues(style);
  }

  return style;
}

function useHTMLProps(props, visualState, isStatic) {
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);

  if (Boolean(props.drag) && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
  }

  htmlProps.style = style;
  return htmlProps;
} // node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs


var validMotionProps = /* @__PURE__ */new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

function isValidMotionProp(key) {
  return validMotionProps.has(key);
} // node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs


var shouldForward = function (key) {
  return !isValidMotionProp(key);
};

function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;

  shouldForward = function (key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}

try {
  loadExternalIsValidProp(require_is_prop_valid_browser_cjs().default);
} catch (_a) {}

function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};

  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }

  return filteredProps;
} // node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs


var import_style_value_types8 = require("style-value-types@5.0.0");

function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : import_style_value_types8.px.transform(offset + size * origin);
}

function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
} // node_modules/framer-motion/dist/es/render/svg/utils/path.mjs


var import_style_value_types9 = require("style-value-types@5.0.0");

var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};

function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }

  if (offset === void 0) {
    offset = 0;
  }

  if (useDashCase === void 0) {
    useDashCase = true;
  }

  attrs.pathLength = 1;
  var keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = import_style_value_types9.px.transform(-offset);
  var pathLength = import_style_value_types9.px.transform(length);
  var pathSpacing = import_style_value_types9.px.transform(spacing);
  attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
} // node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs


var import_tslib14 = require("tslib@2.4.0");

function buildSVGAttrs(state, _a, options, transformTemplate) {
  var attrX = _a.attrX,
      attrY = _a.attrY,
      originX = _a.originX,
      originY = _a.originY,
      pathLength = _a.pathLength,
      _b = _a.pathSpacing,
      pathSpacing = _b === void 0 ? 1 : _b,
      _c = _a.pathOffset,
      pathOffset = _c === void 0 ? 0 : _c,
      latest = (0, import_tslib14.__rest)(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs,
      style = state.style,
      dimensions = state.dimensions;

  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }

  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }

  if (attrX !== void 0) attrs.x = attrX;
  if (attrY !== void 0) attrs.y = attrY;

  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
} // node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs


var import_tslib15 = require("tslib@2.4.0");

var createSvgRenderState = function () {
  return (0, import_tslib15.__assign)((0, import_tslib15.__assign)({}, createHtmlRenderState()), {
    attrs: {}
  });
}; // node_modules/framer-motion/dist/es/render/svg/use-props.mjs


var import_tslib16 = require("tslib@2.4.0");

var import_react17 = require("react@18.2.0");

function useSVGProps(props, visualState) {
  var visualProps = (0, import_react17.useMemo)(function () {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, props.transformTemplate);
    return (0, import_tslib16.__assign)((0, import_tslib16.__assign)({}, state.attrs), {
      style: (0, import_tslib16.__assign)({}, state.style)
    });
  }, [visualState]);

  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = (0, import_tslib16.__assign)((0, import_tslib16.__assign)({}, rawStyles), visualProps.style);
  }

  return visualProps;
} // node_modules/framer-motion/dist/es/render/dom/use-render.mjs


var import_tslib17 = require("tslib@2.4.0");

var import_react18 = require("react@18.2.0");

function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }

  var useRender = function (Component, props, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    var elementProps = (0, import_tslib17.__assign)((0, import_tslib17.__assign)((0, import_tslib17.__assign)({}, filteredProps), visualProps), {
      ref
    });

    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }

    return (0, import_react18.createElement)(Component, elementProps);
  };

  return useRender;
} // node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs


var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";

var camelToDash = function (str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
}; // node_modules/framer-motion/dist/es/render/html/utils/render.mjs


function renderHTML(element, _a, styleProp, projection) {
  var style = _a.style,
      vars = _a.vars;
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));

  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
} // node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs


var camelCaseAttributes = /* @__PURE__ */new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]); // node_modules/framer-motion/dist/es/render/svg/utils/render.mjs

function renderSVG(element, renderState) {
  renderHTML(element, renderState);

  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
} // node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs


function scrapeMotionValuesFromProps(props) {
  var style = props.style;
  var newValues = {};

  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }

  return newValues;
} // node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs


function scrapeMotionValuesFromProps2(props) {
  var newValues = scrapeMotionValuesFromProps(props);

  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }

  return newValues;
} // node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs


function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
} // node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs


var import_tslib18 = require("tslib@2.4.0");

var import_react19 = require("react@18.2.0");

function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps,
      createRenderState = _a.createRenderState,
      onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };

  if (onMount) {
    state.mount = function (instance) {
      return onMount(props, instance, state);
    };
  }

  return state;
}

var makeUseVisualState = function (config) {
  return function (props, isStatic) {
    var context = (0, import_react19.useContext)(MotionContext);
    var presenceContext = (0, import_react19.useContext)(PresenceContext);
    return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function () {
      return makeState(config, props, context, presenceContext);
    });
  };
};

function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);

  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }

  var initial = props.initial,
      animate4 = props.animate;
  var isControllingVariants = checkIfControllingVariants(props);
  var isVariantNode = checkIfVariantNode(props);

  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate4 !== null && animate4 !== void 0 ? animate4 : animate4 = context.animate;
  }

  var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
  var variantToSet = initialAnimationIsBlocked ? animate4 : initial;

  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function (definition) {
      var resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = (0, import_tslib18.__rest)(resolved, ["transitionEnd", "transition"]);

      for (var key2 in target) {
        var valueTarget = target[key2];

        if (Array.isArray(valueTarget)) {
          var index = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }

        if (valueTarget !== null) {
          values[key2] = valueTarget;
        }
      }

      for (var key2 in transitionEnd) values[key2] = transitionEnd[key2];
    });
  }

  return values;
} // node_modules/framer-motion/dist/es/render/svg/config-motion.mjs


var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: function (props, instance, _a) {
      var renderState = _a.renderState,
          latestValues = _a.latestValues;

      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      buildSVGAttrs(renderState, latestValues, {
        enableHardwareAcceleration: false
      }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
}; // node_modules/framer-motion/dist/es/render/html/config-motion.mjs

var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
}; // node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs

var import_tslib19 = require("tslib@2.4.0");

function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps,
      forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return (0, import_tslib19.__assign)((0, import_tslib19.__assign)({}, baseConfig), {
    preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    projectionNodeConstructor,
    Component
  });
} // node_modules/framer-motion/dist/es/render/utils/types.mjs


var AnimationType;

(function (AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {})); // node_modules/framer-motion/dist/es/events/use-dom-event.mjs


var import_react20 = require("react@18.2.0");

function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function () {
    return target.removeEventListener(eventName, handler, options);
  };
}

function useDomEvent(ref, eventName, handler, options) {
  (0, import_react20.useEffect)(function () {
    var element = ref.current;

    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
} // node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs


function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus,
      visualElement2 = _a.visualElement;

  var onFocus = function () {
    var _a2;

    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
  };

  var onBlur = function () {
    var _a2;

    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
  };

  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
} // node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs


function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }

  return event instanceof MouseEvent;
}

function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
} // node_modules/framer-motion/dist/es/events/event-info.mjs


function filterPrimaryPointer(eventHandler) {
  return function (event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;

    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}

var defaultPagePoint = {
  pageX: 0,
  pageY: 0
};

function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}

function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}

function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}

var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }

  var listener = function (event) {
    return handler(event, extractEventInfo(event));
  };

  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
}; // node_modules/framer-motion/dist/es/events/utils.mjs


var supportsPointerEvents = function () {
  return isBrowser && window.onpointerdown === null;
};

var supportsTouchEvents = function () {
  return isBrowser && window.ontouchstart === null;
};

var supportsMouseEvents = function () {
  return isBrowser && window.onmousedown === null;
}; // node_modules/framer-motion/dist/es/events/use-pointer-event.mjs


var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};

function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }

  return name;
}

function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}

function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
} // node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs


function createLock(name) {
  var lock = null;
  return function () {
    var openLock = function () {
      lock = null;
    };

    if (lock === null) {
      lock = name;
      return openLock;
    }

    return false;
  };
}

var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");

function getGlobalLock(drag2) {
  var lock = false;

  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();

    if (openHorizontal_1 && openVertical_1) {
      lock = function () {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1) openHorizontal_1();
      if (openVertical_1) openVertical_1();
    }
  }

  return lock;
}

function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
} // node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs


function createHoverEvent(visualElement2, isActive, callback) {
  return function (event, info) {
    var _a;

    if (!isMouseEvent(event) || isDragActive()) return;
    (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    callback === null || callback === void 0 ? void 0 : callback(event, info);
  };
}

function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart,
      onHoverEnd = _a.onHoverEnd,
      whileHover = _a.whileHover,
      visualElement2 = _a.visualElement;
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0);
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0);
} // node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs


var isNodeOrChild = function (parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
}; // node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs


var import_react21 = require("react@18.2.0");

function useUnmountEffect(callback) {
  return (0, import_react21.useEffect)(function () {
    return function () {
      return callback();
    };
  }, []);
} // node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs


var import_react22 = require("react@18.2.0");

var import_popmotion9 = require("popmotion@11.0.3");

function useTapGesture(_a) {
  var onTap = _a.onTap,
      onTapStart = _a.onTapStart,
      onTapCancel = _a.onTapCancel,
      whileTap = _a.whileTap,
      visualElement2 = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = (0, import_react22.useRef)(false);
  var cancelPointerEndListeners = (0, import_react22.useRef)(null);

  function removePointerEndListener() {
    var _a2;

    (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }

  function checkPointerEnd() {
    var _a2;

    removePointerEndListener();
    isPressing.current = false;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }

  function onPointerUp(event, info) {
    if (!checkPointerEnd()) return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }

  function onPointerCancel(event, info) {
    if (!checkPointerEnd()) return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }

  function onPointerDown(event, info) {
    var _a2;

    removePointerEndListener();
    if (isPressing.current) return;
    isPressing.current = true;
    cancelPointerEndListeners.current = (0, import_popmotion9.pipe)(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
  }

  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0);
  useUnmountEffect(removePointerEndListener);
} // node_modules/framer-motion/dist/es/utils/warn-once.mjs


var warned = /* @__PURE__ */new Set();

function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
} // node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs


var import_tslib20 = require("tslib@2.4.0");

var observerCallbacks = /* @__PURE__ */new WeakMap();
var observers = /* @__PURE__ */new WeakMap();

var fireObserverCallback = function (entry) {
  var _a;

  (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};

var fireAllObserverCallbacks = function (entries) {
  entries.forEach(fireObserverCallback);
};

function initIntersectionObserver(_a) {
  var root = _a.root,
      options = (0, import_tslib20.__rest)(_a, ["root"]);
  var lookupRoot = root || document;

  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }

  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);

  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, (0, import_tslib20.__assign)({
      root
    }, options));
  }

  return rootObservers[key];
}

function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function () {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
} // node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs


var import_react23 = require("react@18.2.0");

function useViewport(_a) {
  var visualElement2 = _a.visualElement,
      whileInView = _a.whileInView,
      onViewportEnter = _a.onViewportEnter,
      onViewportLeave = _a.onViewportLeave,
      _b = _a.viewport,
      viewport = _b === void 0 ? {} : _b;
  var state = (0, import_react23.useRef)({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView) shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement2, viewport);
}

var thresholdNames = {
  some: 0,
  all: 1
};

function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var root = _a.root,
      rootMargin = _a.margin,
      _b = _a.amount,
      amount = _b === void 0 ? "some" : _b,
      once = _a.once;
  (0, import_react23.useEffect)(function () {
    if (!shouldObserve) return;
    var options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };

    var intersectionCallback = function (entry) {
      var _a2;

      var isIntersecting = entry.isIntersecting;
      if (state.isInView === isIntersecting) return;
      state.isInView = isIntersecting;

      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }

      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
      var props = visualElement2.getProps();
      var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback(entry);
    };

    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}

function useMissingIntersectionObserver(shouldObserve, state, visualElement2) {
  (0, import_react23.useEffect)(function () {
    if (!shouldObserve) return;

    if (true) {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }

    requestAnimationFrame(function () {
      var _a;

      state.hasEnteredView = true;
      var onViewportEnter = visualElement2.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
      (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
} // node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs


var makeRenderlessComponent = function (hook) {
  return function (props) {
    hook(props);
    return null;
  };
}; // node_modules/framer-motion/dist/es/motion/features/gestures.mjs


var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
}; // node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs

var import_react24 = require("react@18.2.0");

function usePresence() {
  var context = (0, import_react24.useContext)(PresenceContext);
  if (context === null) return [true, null];
  var isPresent2 = context.isPresent,
      onExitComplete = context.onExitComplete,
      register = context.register;
  var id3 = useUniqueId();
  (0, import_react24.useEffect)(function () {
    return register(id3);
  }, []);

  var safeToRemove = function () {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id3);
  };

  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}

function useIsPresent() {
  return isPresent((0, import_react24.useContext)(PresenceContext));
}

function isPresent(context) {
  return context === null ? true : context.isPresent;
}

var counter = 0;

var incrementId = function () {
  return counter++;
};

var useUniqueId = function () {
  return useConstant(incrementId);
}; // node_modules/framer-motion/dist/es/utils/shallow-compare.mjs


function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  var prevLength = prev.length;
  if (prevLength !== next.length) return false;

  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }

  return true;
} // node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs


var isNumericalString = function (v) {
  return /^\-?\d*\.?\d+$/.test(v);
}; // node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs


var isZeroValueString = function (v) {
  return /^0[^.\s]+$/.test(v);
}; // node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs


var testValueType = function (v) {
  return function (type) {
    return type.test(v);
  };
}; // node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs


var auto = {
  test: function (v) {
    return v === "auto";
  },
  parse: function (v) {
    return v;
  }
}; // node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs

var import_style_value_types10 = require("style-value-types@5.0.0");

var dimensionValueTypes = [import_style_value_types10.number, import_style_value_types10.px, import_style_value_types10.percent, import_style_value_types10.degrees, import_style_value_types10.vw, import_style_value_types10.vh, auto];

var findDimensionValueType = function (v) {
  return dimensionValueTypes.find(testValueType(v));
}; // node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs


var import_tslib21 = require("tslib@2.4.0");

var import_style_value_types11 = require("style-value-types@5.0.0");

var valueTypes = (0, import_tslib21.__spreadArray)((0, import_tslib21.__spreadArray)([], (0, import_tslib21.__read)(dimensionValueTypes), false), [import_style_value_types11.color, import_style_value_types11.complex], false);

var findValueType = function (v) {
  return valueTypes.find(testValueType(v));
}; // node_modules/framer-motion/dist/es/render/utils/setters.mjs


var import_tslib22 = require("tslib@2.4.0");

var import_style_value_types12 = require("style-value-types@5.0.0");

function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}

function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);

  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {},
      _b = _a.transitionEnd,
      transitionEnd = _b === void 0 ? {} : _b;

  _a.transition;
  var target = (0, import_tslib22.__rest)(_a, ["transitionEnd", "transition"]);
  target = (0, import_tslib22.__assign)((0, import_tslib22.__assign)({}, target), transitionEnd);

  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}

function setVariants(visualElement2, variantLabels) {
  var reversedLabels = (0, import_tslib22.__spreadArray)([], (0, import_tslib22.__read)(variantLabels), false).reverse();
  reversedLabels.forEach(function (key) {
    var _a;

    var variant = visualElement2.getVariant(key);
    variant && setTarget(visualElement2, variant);
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      setVariants(child, variantLabels);
    });
  });
}

function setValues(visualElement2, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement2, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement2, [definition]);
  } else {
    setTarget(visualElement2, definition);
  }
}

function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;

  var _d;

  var newValueKeys = Object.keys(target).filter(function (key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues) return;

  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;

    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }

    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }

    if (value === void 0 || value === null) continue;

    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && import_style_value_types12.complex.test(targetValue)) {
      value = getAnimatableNone(key, targetValue);
    }

    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}

function getOriginFromTransition(key, transition) {
  if (!transition) return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}

function getOrigin(target, transition, visualElement2) {
  var _a, _b;

  var origin = {};

  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }

  return origin;
} // node_modules/framer-motion/dist/es/render/utils/animation.mjs


var import_tslib23 = require("tslib@2.4.0");

function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }

  visualElement2.notifyAnimationStart(definition);
  var animation;

  if (Array.isArray(definition)) {
    var animations2 = definition.map(function (variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }

  return animation.then(function () {
    return visualElement2.notifyAnimationComplete(definition);
  });
}

function animateVariant(visualElement2, variant, options) {
  var _a;

  if (options === void 0) {
    options = {};
  }

  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition,
      transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;

  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }

  var getAnimation2 = resolved ? function () {
    return animateTarget(visualElement2, resolved, options);
  } : function () {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function (forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }

    var _a2 = transition.delayChildren,
        delayChildren = _a2 === void 0 ? 0 : _a2,
        staggerChildren = transition.staggerChildren,
        staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function () {
    return Promise.resolve();
  };
  var when = transition.when;

  if (when) {
    var _c = (0, import_tslib23.__read)(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2),
        first = _c[0],
        last = _c[1];

    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}

function animateTarget(visualElement2, definition, _a) {
  var _b;

  var _c = _a === void 0 ? {} : _a,
      _d = _c.delay,
      delay = _d === void 0 ? 0 : _d,
      transitionOverride = _c.transitionOverride,
      type = _c.type;

  var _e = visualElement2.makeTargetAnimatable(definition),
      _f = _e.transition,
      transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f,
      transitionEnd = _e.transitionEnd,
      target = (0, import_tslib23.__rest)(_e, ["transition", "transitionEnd"]);

  if (transitionOverride) transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);

  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];

    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }

    var animation = startAnimation(key, value, valueTarget, (0, import_tslib23.__assign)({
      delay
    }, transition));
    animations2.push(animation);
  }

  return Promise.all(animations2).then(function () {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}

function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }

  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }

  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }

  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function (i) {
    if (i === void 0) {
      i = 0;
    }

    return i * staggerChildren;
  } : function (i) {
    if (i === void 0) {
      i = 0;
    }

    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function (child, i) {
    animations2.push(animateVariant(child, variant, (0, import_tslib23.__assign)((0, import_tslib23.__assign)({}, options), {
      delay: delayChildren + generateStaggerDuration(i)
    })).then(function () {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}

function stopAnimation(visualElement2) {
  visualElement2.forEachValue(function (value) {
    return value.stop();
  });
}

function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys,
      needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
} // node_modules/framer-motion/dist/es/render/utils/animation-state.mjs


var import_tslib24 = require("tslib@2.4.0");

var variantPriorityOrder = [AnimationType.Animate, AnimationType.InView, AnimationType.Focus, AnimationType.Hover, AnimationType.Tap, AnimationType.Drag, AnimationType.Exit];
var reversePriorityOrder = (0, import_tslib24.__spreadArray)([], (0, import_tslib24.__read)(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;

function animateList(visualElement2) {
  return function (animations2) {
    return Promise.all(animations2.map(function (_a) {
      var animation = _a.animation,
          options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}

function createAnimationState(visualElement2) {
  var animate4 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;

  var buildResolvedTypeValues = function (acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);

    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd,
          target = (0, import_tslib24.__rest)(resolved, ["transition", "transitionEnd"]);
      acc = (0, import_tslib24.__assign)((0, import_tslib24.__assign)((0, import_tslib24.__assign)({}, acc), target), transitionEnd);
    }

    return acc;
  };

  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }

  function setAnimateFunction(makeAnimator) {
    animate4 = makeAnimator(visualElement2);
  }

  function animateChanges(options, changedActiveType) {
    var _a;

    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;

    var _loop_1 = function (i2) {
      var type = reversePriorityOrder[i2];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i2;
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;

      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }

      typeState.protectedKeys = (0, import_tslib24.__assign)({}, encounteredKeys);

      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return "continue";
      }

      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false) resolvedValues = {};
      var _b = typeState.prevResolvedValues,
          prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = (0, import_tslib24.__assign)((0, import_tslib24.__assign)({}, prevResolvedValues), resolvedValues);

      var markToAnimate = function (key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };

      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key)) continue;

        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }

      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;

      if (typeState.isActive) {
        encounteredKeys = (0, import_tslib24.__assign)((0, import_tslib24.__assign)({}, encounteredKeys), resolvedValues);
      }

      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }

      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, (0, import_tslib24.__spreadArray)([], (0, import_tslib24.__read)(definitionList.map(function (animation) {
          return {
            animation,
            options: (0, import_tslib24.__assign)({
              type
            }, options)
          };
        })), false));
      }
    };

    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }

    allAnimatedKeys = (0, import_tslib24.__assign)({}, encounteredKeys);

    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function (key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);

        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({
        animation: fallbackAnimation_1
      });
    }

    var shouldAnimate = Boolean(animations2.length);

    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }

    isInitialRender = false;
    return shouldAnimate ? animate4(animations2) : Promise.resolve();
  }

  function setActive(type, isActive, options) {
    var _a;

    if (state[type].isActive === isActive) return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      var _a2;

      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    return animateChanges(options, type);
  }

  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function () {
      return state;
    }
  };
}

function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }

  return false;
}

function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }

  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}

function createState() {
  var _a;

  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
} // node_modules/framer-motion/dist/es/motion/features/animations.mjs


var import_tslib25 = require("tslib@2.4.0");

var import_react25 = require("react@18.2.0");

var animations = {
  animation: makeRenderlessComponent(function (_a) {
    var visualElement2 = _a.visualElement,
        animate4 = _a.animate;
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));

    if (isAnimationControls(animate4)) {
      (0, import_react25.useEffect)(function () {
        return animate4.subscribe(visualElement2);
      }, [animate4]);
    }
  }),
  exit: makeRenderlessComponent(function (props) {
    var custom = props.custom,
        visualElement2 = props.visualElement;

    var _a = (0, import_tslib25.__read)(usePresence(), 2),
        isPresent2 = _a[0],
        safeToRemove = _a[1];

    var presenceContext = (0, import_react25.useContext)(PresenceContext);
    (0, import_react25.useEffect)(function () {
      var _a2, _b;

      visualElement2.isPresent = isPresent2;
      var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent2, {
        custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom
      });
      !isPresent2 && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
    }, [isPresent2]);
  })
}; // node_modules/framer-motion/dist/es/gestures/PanSession.mjs

var import_tslib26 = require("tslib@2.4.0");

var import_framesync3 = __toESM(require("framesync@6.0.1"), 0);

var import_popmotion10 = require("popmotion@11.0.3");

var PanSession = function () {
  function PanSession2(event, handlers, _a) {
    var _this = this;

    var _b = _a === void 0 ? {} : _a,
        transformPagePoint = _b.transformPagePoint;

    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};

    this.updatePoint = function () {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = (0, import_popmotion10.distance)(info2.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      var point2 = info2.point;
      var timestamp2 = (0, import_framesync3.getFrameData)().timestamp;

      _this.history.push((0, import_tslib26.__assign)((0, import_tslib26.__assign)({}, point2), {
        timestamp: timestamp2
      }));

      var _a2 = _this.handlers,
          onStart = _a2.onStart,
          onMove = _a2.onMove;

      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }

      onMove && onMove(_this.lastMoveEvent, info2);
    };

    this.handlePointerMove = function (event2, info2) {
      _this.lastMoveEvent = event2;
      _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);

      if (isMouseEvent(event2) && event2.buttons === 0) {
        _this.handlePointerUp(event2, info2);

        return;
      }

      import_framesync3.default.update(_this.updatePoint, true);
    };

    this.handlePointerUp = function (event2, info2) {
      _this.end();

      var _a2 = _this.handlers,
          onEnd = _a2.onEnd,
          onSessionEnd = _a2.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);

      if (_this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }

      onSessionEnd && onSessionEnd(event2, panInfo);
    };

    if (isTouchEvent(event) && event.touches.length > 1) return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = (0, import_framesync3.getFrameData)().timestamp;
    this.history = [(0, import_tslib26.__assign)((0, import_tslib26.__assign)({}, point), {
      timestamp
    })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = (0, import_popmotion10.pipe)(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }

  PanSession2.prototype.updateHandlers = function (handlers) {
    this.handlers = handlers;
  };

  PanSession2.prototype.end = function () {
    this.removeListeners && this.removeListeners();
    import_framesync3.cancelSync.update(this.updatePoint);
  };

  return PanSession2;
}();

function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}

function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}

function startDevicePoint(history) {
  return history[0];
}

function lastDevicePoint(history) {
  return history[history.length - 1];
}

function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }

  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);

  while (i >= 0) {
    timestampedPoint = history[i];

    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }

    i--;
  }

  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }

  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;

  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }

  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };

  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }

  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }

  return currentVelocity;
} // node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs


var import_tslib27 = require("tslib@2.4.0");

var import_popmotion11 = require("popmotion@11.0.3");

function applyConstraints(point, _a, elastic) {
  var min = _a.min,
      max = _a.max;

  if (min !== void 0 && point < min) {
    point = elastic ? (0, import_popmotion11.mix)(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? (0, import_popmotion11.mix)(max, point, elastic.max) : Math.min(point, max);
  }

  return point;
}

function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}

function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top,
      left = _a.left,
      bottom = _a.bottom,
      right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}

function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;

  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;

  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = (0, import_tslib27.__read)([max, min], 2), min = _a[0], max = _a[1];
  }

  return {
    min,
    max
  };
}

function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}

function calcOrigin2(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);

  if (targetLength > sourceLength) {
    origin = (0, import_popmotion11.progress)(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = (0, import_popmotion11.progress)(source.min, source.max - targetLength, target.min);
  }

  return (0, import_popmotion11.clamp)(0, 1, origin);
}

function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};

  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }

  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }

  return relativeConstraints;
}

var defaultElastic = 0.35;

function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }

  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }

  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}

function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}

function resolvePointElastic(dragElastic, label) {
  var _a;

  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
} // node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs


function convertBoundingBoxToBox(_a) {
  var top = _a.top,
      left = _a.left,
      right = _a.right,
      bottom = _a.bottom;
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}

function convertBoxToBoundingBox(_a) {
  var x = _a.x,
      y = _a.y;
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}

function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2) return point;
  var topLeft = transformPoint2({
    x: point.left,
    y: point.top
  });
  var bottomRight = transformPoint2({
    x: point.right,
    y: point.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
} // node_modules/framer-motion/dist/es/projection/utils/measure.mjs


function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}

function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll = rootProjectionNode2.scroll;

  if (scroll) {
    translateAxis(viewportBox.x, scroll.x);
    translateAxis(viewportBox.y, scroll.y);
  }

  return viewportBox;
} // node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs


var import_tslib28 = require("tslib@2.4.0");

var import_hey_listen4 = require("hey-listen@1.0.8");

var import_popmotion12 = require("popmotion@11.0.3");

var import_style_value_types13 = require("style-value-types@5.0.0");

var elementDragControls = /* @__PURE__ */new WeakMap();

var VisualElementDragControls = function () {
  function VisualElementDragControls2(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement2;
  }

  VisualElementDragControls2.prototype.start = function (originEvent, _a) {
    var _this = this;

    var _b = _a === void 0 ? {} : _a,
        _c = _b.snapToCursor,
        snapToCursor = _c === void 0 ? false : _c;

    if (this.visualElement.isPresent === false) return;

    var onSessionStart = function (event) {
      _this.stopAnimation();

      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };

    var onStart = function (event, info) {
      var _a2;

      var _b2 = _this.getProps(),
          drag2 = _b2.drag,
          dragPropagation = _b2.dragPropagation,
          onDragStart = _b2.onDragStart;

      if (drag2 && !dragPropagation) {
        if (_this.openGlobalLock) _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag2);
        if (!_this.openGlobalLock) return;
      }

      _this.isDragging = true;
      _this.currentDirection = null;

      _this.resolveConstraints();

      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = void 0;
      }

      eachAxis(function (axis) {
        var _a3, _b3;

        var current = _this.getAxisMotionValue(axis).get() || 0;

        if (import_style_value_types13.percent.test(current)) {
          var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];

          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }

        _this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
    };

    var onMove = function (event, info) {
      var _a2 = _this.getProps(),
          dragPropagation = _a2.dragPropagation,
          dragDirectionLock = _a2.dragDirectionLock,
          onDirectionLock = _a2.onDirectionLock,
          onDrag = _a2.onDrag;

      if (!dragPropagation && !_this.openGlobalLock) return;
      var offset = info.offset;

      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset);

        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }

        return;
      }

      _this.updateAxis("x", info.point, offset);

      _this.updateAxis("y", info.point, offset);

      _this.visualElement.syncRender();

      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };

    var onSessionEnd = function (event, info) {
      return _this.stop(event, info);
    };

    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint()
    });
  };

  VisualElementDragControls2.prototype.stop = function (event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd = this.getProps().onDragEnd;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  };

  VisualElementDragControls2.prototype.cancel = function () {
    var _a, _b;

    this.isDragging = false;

    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }

    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    var dragPropagation = this.getProps().dragPropagation;

    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }

    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };

  VisualElementDragControls2.prototype.updateAxis = function (axis, _point, offset) {
    var drag2 = this.getProps().drag;
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection)) return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset[axis];

    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }

    axisValue.set(next);
  };

  VisualElementDragControls2.prototype.resolveConstraints = function () {
    var _this = this;

    var _a = this.getProps(),
        dragConstraints = _a.dragConstraints,
        dragElastic = _a.dragElastic;

    var layout = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;

    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }

    this.elastic = resolveDragElastic(dragElastic);

    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function (axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };

  VisualElementDragControls2.prototype.resolveRefConstraints = function () {
    var _a = this.getProps(),
        constraints = _a.dragConstraints,
        onMeasureDragConstraints = _a.onMeasureDragConstraints;

    if (!constraints || !isRefObject(constraints)) return false;
    var constraintsElement = constraints.current;
    (0, import_hey_listen4.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var projection = this.visualElement.projection;
    if (!projection || !projection.layout) return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);

    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;

      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }

    return measuredConstraints;
  };

  VisualElementDragControls2.prototype.startAnimation = function (velocity) {
    var _this = this;

    var _a = this.getProps(),
        drag2 = _a.drag,
        dragMomentum = _a.dragMomentum,
        dragElastic = _a.dragElastic,
        dragTransition = _a.dragTransition,
        dragSnapToOrigin = _a.dragSnapToOrigin,
        onDragTransitionEnd = _a.onDragTransitionEnd;

    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function (axis) {
      var _a2;

      if (!shouldDrag(axis, drag2, _this.currentDirection)) {
        return;
      }

      var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
      if (dragSnapToOrigin) transition = {
        min: 0,
        max: 0
      };
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var inertia2 = (0, import_tslib28.__assign)((0, import_tslib28.__assign)({
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10
      }, dragTransition), transition);
      return _this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };

  VisualElementDragControls2.prototype.startAxisValueAnimation = function (axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  };

  VisualElementDragControls2.prototype.stopAnimation = function () {
    var _this = this;

    eachAxis(function (axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };

  VisualElementDragControls2.prototype.getAxisMotionValue = function (axis) {
    var _a, _b;

    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };

  VisualElementDragControls2.prototype.snapToCursor = function (point) {
    var _this = this;

    eachAxis(function (axis) {
      var drag2 = _this.getProps().drag;

      if (!shouldDrag(axis, drag2, _this.currentDirection)) return;
      var projection = _this.visualElement.projection;

      var axisValue = _this.getAxisMotionValue(axis);

      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis],
            min = _a.min,
            max = _a.max;
        axisValue.set(point[axis] - (0, import_popmotion12.mix)(min, max, 0.5));
      }
    });
  };

  VisualElementDragControls2.prototype.scalePositionWithinConstraints = function () {
    var _this = this;

    var _a;

    var _b = this.getProps(),
        drag2 = _b.drag,
        dragConstraints = _b.dragConstraints;

    var projection = this.visualElement.projection;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
    this.stopAnimation();
    var boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(function (axis) {
      var axisValue = _this.getAxisMotionValue(axis);

      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({
          min: latest,
          max: latest
        }, _this.constraints[axis]);
      }
    });
    var transformTemplate = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(function (axis) {
      if (!shouldDrag(axis, drag2, null)) return;

      var axisValue = _this.getAxisMotionValue(axis);

      var _a2 = _this.constraints[axis],
          min = _a2.min,
          max = _a2.max;
      axisValue.set((0, import_popmotion12.mix)(min, max, boxProgress[axis]));
    });
  };

  VisualElementDragControls2.prototype.addListeners = function () {
    var _this = this;

    var _a;

    elementDragControls.set(this.visualElement, this);
    var element = this.visualElement.getInstance();
    var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
      var _a2 = _this.getProps(),
          drag2 = _a2.drag,
          _b = _a2.dragListener,
          dragListener = _b === void 0 ? true : _b;

      drag2 && dragListener && _this.start(event);
    });

    var measureDragConstraints = function () {
      var dragConstraints = _this.getProps().dragConstraints;

      if (isRefObject(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };

    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);

    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }

    measureDragConstraints();
    var stopResizeListener = addDomEvent(window, "resize", function () {
      _this.scalePositionWithinConstraints();
    });
    projection.addEventListener("didUpdate", function (_a2) {
      var delta = _a2.delta,
          hasLayoutChanged = _a2.hasLayoutChanged;

      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function (axis) {
          var motionValue2 = _this.getAxisMotionValue(axis);

          if (!motionValue2) return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });

        _this.visualElement.syncRender();
      }
    });
    return function () {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };

  VisualElementDragControls2.prototype.getProps = function () {
    var props = this.visualElement.getProps();
    var _a = props.drag,
        drag2 = _a === void 0 ? false : _a,
        _b = props.dragDirectionLock,
        dragDirectionLock = _b === void 0 ? false : _b,
        _c = props.dragPropagation,
        dragPropagation = _c === void 0 ? false : _c,
        _d = props.dragConstraints,
        dragConstraints = _d === void 0 ? false : _d,
        _e = props.dragElastic,
        dragElastic = _e === void 0 ? defaultElastic : _e,
        _f = props.dragMomentum,
        dragMomentum = _f === void 0 ? true : _f;
    return (0, import_tslib28.__assign)((0, import_tslib28.__assign)({}, props), {
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    });
  };

  return VisualElementDragControls2;
}();

function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}

function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }

  var direction = null;

  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }

  return direction;
} // node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs


var import_react26 = require("react@18.2.0");

function useDrag(props) {
  var groupDragControls = props.dragControls,
      visualElement2 = props.visualElement;
  var dragControls = useConstant(function () {
    return new VisualElementDragControls(visualElement2);
  });
  (0, import_react26.useEffect)(function () {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]);
  (0, import_react26.useEffect)(function () {
    return dragControls.addListeners();
  }, [dragControls]);
} // node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs


var import_react27 = require("react@18.2.0");

function usePanGesture(_a) {
  var onPan = _a.onPan,
      onPanStart = _a.onPanStart,
      onPanEnd = _a.onPanEnd,
      onPanSessionStart = _a.onPanSessionStart,
      visualElement2 = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = (0, import_react27.useRef)(null);
  var transformPagePoint = (0, import_react27.useContext)(MotionConfigContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function (event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  (0, import_react27.useEffect)(function () {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });

  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }

  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function () {
    return panSession.current && panSession.current.end();
  });
} // node_modules/framer-motion/dist/es/motion/features/drag.mjs


var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
}; // node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs

var import_tslib29 = require("tslib@2.4.0");

var names = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];

function createLifecycles() {
  var managers = names.map(function () {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function () {
      return managers.forEach(function (manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function (props) {
      names.forEach(function (name) {
        var _a;

        var on = "on" + name;
        var propListener = props[on];
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);

        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function (manager, i) {
    lifecycles["on" + names[i]] = function (handler) {
      return manager.add(handler);
    };

    lifecycles["notify" + names[i]] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      manager.notify.apply(manager, (0, import_tslib29.__spreadArray)([], (0, import_tslib29.__read)(args), false));
    };
  });
  return lifecycles;
} // node_modules/framer-motion/dist/es/render/utils/motion-values.mjs


function updateMotionValuesFromProps(element, next, prev) {
  var _a;

  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];

    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }

  for (var key in prev) {
    if (next[key] === void 0) element.removeValue(key);
  }

  return next;
} // node_modules/framer-motion/dist/es/render/index.mjs


var import_tslib30 = require("tslib@2.4.0");

var import_framesync4 = __toESM(require("framesync@6.0.1"), 0);

var visualElement = function (_a) {
  var _b = _a.treeType,
      treeType = _b === void 0 ? "" : _b,
      build = _a.build,
      getBaseTarget = _a.getBaseTarget,
      makeTargetAnimatable = _a.makeTargetAnimatable,
      measureViewportBox2 = _a.measureViewportBox,
      renderInstance = _a.render,
      readValueFromInstance = _a.readValueFromInstance,
      removeValueFromRenderState = _a.removeValueFromRenderState,
      sortNodePosition = _a.sortNodePosition,
      scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps;
  return function (_a2, options) {
    var parent = _a2.parent,
        props = _a2.props,
        presenceId2 = _a2.presenceId,
        blockInitialAnimation = _a2.blockInitialAnimation,
        visualState = _a2.visualState;

    if (options === void 0) {
      options = {};
    }

    var isMounted = false;
    var latestValues = visualState.latestValues,
        renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var values = /* @__PURE__ */new Map();
    var valueSubscriptions = /* @__PURE__ */new Map();
    var prevMotionValues = {};
    var baseTarget = (0, import_tslib30.__assign)({}, latestValues);
    var removeFromVariantTree;

    function render() {
      if (!instance || !isMounted) return;
      triggerBuild();
      renderInstance(instance, renderState, props.style, element.projection);
    }

    function triggerBuild() {
      build(element, renderState, latestValues, options, props);
    }

    function update() {
      lifecycles.notifyUpdate(latestValues);
    }

    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function (latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && import_framesync4.default.update(update, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key2, function () {
        removeOnChange();
        removeOnRenderRequest();
      });
    }

    var initialMotionValues = scrapeMotionValuesFromProps3(props);

    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];

      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }

    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element = (0, import_tslib30.__assign)((0, import_tslib30.__assign)({
      treeType,
      current: null,
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */new Set(),
      presenceId: presenceId2,
      variantChildren: isVariantNode ? /* @__PURE__ */new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      blockInitialAnimation,
      isMounted: function () {
        return Boolean(instance);
      },
      mount: function (newInstance) {
        isMounted = true;
        instance = element.current = newInstance;

        if (element.projection) {
          element.projection.mount(newInstance);
        }

        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }

        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
        element.setProps(props);
      },
      unmount: function () {
        var _a3;

        (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
        import_framesync4.cancelSync.update(update);
        import_framesync4.cancelSync.render(render);
        valueSubscriptions.forEach(function (remove) {
          return remove();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
        lifecycles.clearAllListeners();
        instance = void 0;
        isMounted = false;
      },
      addVariantChild: function (child) {
        var _a3;

        var closestVariantNode = element.getClosestVariantNode();

        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function () {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function (other) {
        if (!sortNodePosition || treeType !== other.treeType) return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },
      getClosestVariantNode: function () {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      getLayoutId: function () {
        return props.layoutId;
      },
      getInstance: function () {
        return instance;
      },
      getStaticValue: function (key2) {
        return latestValues[key2];
      },
      setStaticValue: function (key2, value2) {
        return latestValues[key2] = value2;
      },
      getLatestValues: function () {
        return latestValues;
      },
      setVisibility: function (visibility) {
        if (element.isVisible === visibility) return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      makeTargetAnimatable: function (target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }

        return makeTargetAnimatable(element, target, props, canMutate);
      },
      measureViewportBox: function () {
        return measureViewportBox2(instance, props);
      },
      addValue: function (key2, value2) {
        if (element.hasValue(key2)) element.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      removeValue: function (key2) {
        var _a3;

        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      hasValue: function (key2) {
        return values.has(key2);
      },
      getValue: function (key2, defaultValue) {
        var value2 = values.get(key2);

        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element.addValue(key2, value2);
        }

        return value2;
      },
      forEachValue: function (callback) {
        return values.forEach(callback);
      },
      readValue: function (key2) {
        var _a3;

        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      setBaseTarget: function (key2, value2) {
        baseTarget[key2] = value2;
      },
      getBaseTarget: function (key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target)) return target;
        }

        return baseTarget[key2];
      }
    }, lifecycles), {
      build: function () {
        triggerBuild();
        return renderState;
      },
      scheduleRender: function () {
        import_framesync4.default.render(render, false, true);
      },
      syncRender: render,
      setProps: function (newProps) {
        if (newProps.transformTemplate || props.transformTemplate) {
          element.scheduleRender();
        }

        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps3(props), prevMotionValues);
      },
      getProps: function () {
        return props;
      },
      getVariant: function (name) {
        var _a3;

        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      getDefaultTransition: function () {
        return props.transition;
      },
      getTransformPagePoint: function () {
        return props.transformPagePoint;
      },
      getVariantContext: function (startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }

        if (startAtParent) return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();

        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};

          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }

          return context_1;
        }

        var context = {};

        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];

          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }

        return context;
      }
    });
    return element;
  };
};

var variantProps = (0, import_tslib30.__spreadArray)(["initial"], (0, import_tslib30.__read)(variantPriorityOrder), false);
var numVariantProps = variantProps.length; // node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs

var import_tslib31 = require("tslib@2.4.0");

var import_hey_listen5 = require("hey-listen@1.0.8");

function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}

var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match) return [,];

  var _a = (0, import_tslib31.__read)(match, 3),
      token = _a[1],
      fallback = _a[2];

  return [token, fallback];
}

var maxDepth = 4;

function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }

  (0, import_hey_listen5.invariant)(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));

  var _a = (0, import_tslib31.__read)(parseCSSVariable(current), 2),
      token = _a[0],
      fallback = _a[1];

  if (!token) return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);

  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}

function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;

  var target = (0, import_tslib31.__rest)(_a, []);
  var element = visualElement2.getInstance();
  if (!(element instanceof Element)) return {
    target,
    transitionEnd
  };

  if (transitionEnd) {
    transitionEnd = (0, import_tslib31.__assign)({}, transitionEnd);
  }

  visualElement2.forEachValue(function (value) {
    var current2 = value.get();
    if (!isCSSVariable2(current2)) return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2) value.set(resolved2);
  });

  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable2(current)) continue;
    var resolved = getVariableValue(current, element);
    if (!resolved) continue;
    target[key] = resolved;
    if (transitionEnd) (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }

  return {
    target,
    transitionEnd
  };
} // node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs


var import_tslib32 = require("tslib@2.4.0");

var import_style_value_types14 = require("style-value-types@5.0.0");

var import_hey_listen6 = require("hey-listen@1.0.8");

var positionalKeys = /* @__PURE__ */new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]);

var isPositionalKey = function (key) {
  return positionalKeys.has(key);
};

var hasPositionalKey = function (target) {
  return Object.keys(target).some(isPositionalKey);
};

var setAndResetVelocity = function (value, to) {
  value.set(to, false);
  value.set(to);
};

var isNumOrPxType = function (v) {
  return v === import_style_value_types14.number || v === import_style_value_types14.px;
};

var BoundingBoxDimension;

(function (BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));

var getPosFromMatrix = function (matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};

var getTranslateFromMatrix = function (pos2, pos3) {
  return function (_bbox, _a) {
    var transform2 = _a.transform;
    if (transform2 === "none" || !transform2) return 0;
    var matrix3d = transform2.match(/^matrix3d\((.+)\)$/);

    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform2.match(/^matrix\((.+)\)$/);

      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};

var transformKeys = /* @__PURE__ */new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function (key) {
  return !transformKeys.has(key);
});

function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function (key) {
    var value = visualElement2.getValue(key);

    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length) visualElement2.syncRender();
  return removedTransforms;
}

var positionalValues = {
  width: function (_a, _b) {
    var x = _a.x;
    var _c = _b.paddingLeft,
        paddingLeft = _c === void 0 ? "0" : _c,
        _d = _b.paddingRight,
        paddingRight = _d === void 0 ? "0" : _d;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function (_a, _b) {
    var y = _a.y;
    var _c = _b.paddingTop,
        paddingTop = _c === void 0 ? "0" : _c,
        _d = _b.paddingBottom,
        paddingBottom = _d === void 0 ? "0" : _d;
    return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function (_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function (_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function (_a, _b) {
    var y = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function (_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};

var convertChangedValueTypes = function (target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display;
  var origin = {};

  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }

  changedKeys.forEach(function (key) {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function (key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};

var checkAndConvertChangedValueTypes = function (visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }

  if (transitionEnd === void 0) {
    transitionEnd = {};
  }

  target = (0, import_tslib32.__assign)({}, target);
  transitionEnd = (0, import_tslib32.__assign)({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function (key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key)) return;
    var from = origin[key];
    var fromType = findDimensionValueType(from);
    var to = target[key];
    var toType;

    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);

      for (var i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          (0, import_hey_listen6.invariant)(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          (0, import_hey_listen6.invariant)(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }

    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();

        if (typeof current === "string") {
          value.set(parseFloat(current));
        }

        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === import_style_value_types14.px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }

        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });

  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);

    if (removedTransformValues.length) {
      removedTransformValues.forEach(function (_a) {
        var _b = (0, import_tslib32.__read)(_a, 2),
            key = _b[0],
            value = _b[1];

        visualElement2.getValue(key).set(value);
      });
    }

    visualElement2.syncRender();
    return {
      target: convertedTarget,
      transitionEnd
    };
  } else {
    return {
      target,
      transitionEnd
    };
  }
};

function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : {
    target,
    transitionEnd
  };
} // node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs


var parseDomVariant = function (visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
}; // node_modules/framer-motion/dist/es/render/html/visual-element.mjs


var import_tslib33 = require("tslib@2.4.0");

function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}

var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function (domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle2(domElement);
      return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function (a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  },
  getBaseTarget: function (props, key) {
    var _a;

    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function (element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element, transformPagePoint);
  },
  resetTransform: function (element, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform: function (instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function (key, _a) {
    var vars = _a.vars,
        style = _a.style;
    delete vars[key];
    delete style[key];
  },
  makeTargetAnimatable: function (element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;

    if (isMounted === void 0) {
      isMounted = true;
    }

    var transition = _a.transition,
        transitionEnd = _a.transitionEnd,
        target = (0, import_tslib33.__rest)(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element);

    if (transformValues) {
      if (transitionEnd) transitionEnd = transformValues(transitionEnd);
      if (target) target = transformValues(target);
      if (origin) origin = transformValues(origin);
    }

    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      var parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }

    return (0, import_tslib33.__assign)({
      transition,
      transitionEnd
    }, target);
  },
  scrapeMotionValuesFromProps,
  build: function (element, renderState, latestValues, options, props) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }

    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig); // node_modules/framer-motion/dist/es/render/svg/visual-element.mjs

var import_tslib34 = require("tslib@2.4.0");

var svgVisualElement = visualElement((0, import_tslib34.__assign)((0, import_tslib34.__assign)({}, htmlConfig), {
  getBaseTarget: function (props, key) {
    return props[key];
  },
  readValueFromInstance: function (domElement, key) {
    var _a;

    if (isTransformProp(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }

    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
  build: function (_element, renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderSVG
})); // node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs

var createDomVisualElement = function (Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, {
    enableHardwareAcceleration: false
  }) : htmlVisualElement(options, {
    enableHardwareAcceleration: true
  });
}; // node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs


var import_style_value_types15 = require("style-value-types@5.0.0");

function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}

var correctBorderRadius = {
  correct: function (latest, node) {
    if (!node.target) return latest;

    if (typeof latest === "string") {
      if (import_style_value_types15.px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }

    var x = pixelsToPercent(latest, node.target.x);
    var y = pixelsToPercent(latest, node.target.y);
    return "".concat(x, "% ").concat(y, "%");
  }
}; // node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs

var import_popmotion13 = require("popmotion@11.0.3");

var import_style_value_types16 = require("style-value-types@5.0.0");

var varToken = "_$css";
var correctBoxShadow = {
  correct: function (latest, _a) {
    var treeScale = _a.treeScale,
        projectionDelta = _a.projectionDelta;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];

    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function (match) {
        cssVariables.push(match);
        return varToken;
      });
    }

    var shadow = import_style_value_types16.complex.parse(latest);
    if (shadow.length > 5) return original;
    var template = import_style_value_types16.complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    var averageScale = (0, import_popmotion13.mix)(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    var output = template(shadow);

    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function () {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }

    return output;
  }
}; // node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs

var import_tslib35 = require("tslib@2.4.0");

var import_framesync5 = __toESM(require("framesync@6.0.1"), 0);

var import_react28 = __toESM(require("react@18.2.0"), 0);

var MeasureLayoutWithContext = function (_super) {
  (0, import_tslib35.__extends)(MeasureLayoutWithContext2, _super);

  function MeasureLayoutWithContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MeasureLayoutWithContext2.prototype.componentDidMount = function () {
    var _this = this;

    var _a = this.props,
        visualElement2 = _a.visualElement,
        layoutGroup = _a.layoutGroup,
        switchLayoutGroup = _a.switchLayoutGroup,
        layoutId = _a.layoutId;
    var projection = visualElement2.projection;
    addScaleCorrector(defaultScaleCorrectors);

    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group) layoutGroup.group.add(projection);

      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }

      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function () {
        _this.safeToRemove();
      });
      projection.setOptions((0, import_tslib35.__assign)((0, import_tslib35.__assign)({}, projection.options), {
        onExitComplete: function () {
          return _this.safeToRemove();
        }
      }));
    }

    globalProjectionState.hasEverUpdated = true;
  };

  MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function (prevProps) {
    var _this = this;

    var _a = this.props,
        layoutDependency = _a.layoutDependency,
        visualElement2 = _a.visualElement,
        drag2 = _a.drag,
        isPresent2 = _a.isPresent;
    var projection = visualElement2.projection;
    if (!projection) return null;
    projection.isPresent = isPresent2;

    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }

    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        import_framesync5.default.postRender(function () {
          var _a2;

          if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }

    return null;
  };

  MeasureLayoutWithContext2.prototype.componentDidUpdate = function () {
    var projection = this.props.visualElement.projection;

    if (projection) {
      projection.root.didUpdate();

      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };

  MeasureLayoutWithContext2.prototype.componentWillUnmount = function () {
    var _a = this.props,
        visualElement2 = _a.visualElement,
        layoutGroup = _a.layoutGroup,
        promoteContext = _a.switchLayoutGroup;
    var projection = visualElement2.projection;

    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister) promoteContext.deregister(projection);
    }
  };

  MeasureLayoutWithContext2.prototype.safeToRemove = function () {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };

  MeasureLayoutWithContext2.prototype.render = function () {
    return null;
  };

  return MeasureLayoutWithContext2;
}(import_react28.default.Component);

function MeasureLayout(props) {
  var _a = (0, import_tslib35.__read)(usePresence(), 2),
      isPresent2 = _a[0],
      safeToRemove = _a[1];

  var layoutGroup = (0, import_react28.useContext)(LayoutGroupContext);
  return import_react28.default.createElement(MeasureLayoutWithContext, (0, import_tslib35.__assign)({}, props, {
    layoutGroup,
    switchLayoutGroup: (0, import_react28.useContext)(SwitchLayoutGroupContext),
    isPresent: isPresent2,
    safeToRemove
  }));
}

var defaultScaleCorrectors = {
  borderRadius: (0, import_tslib35.__assign)((0, import_tslib35.__assign)({}, correctBorderRadius), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
}; // node_modules/framer-motion/dist/es/motion/features/layout/index.mjs

var layoutFeatures = {
  measureLayout: MeasureLayout
}; // node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs

var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function (ref, notify2) {
    ref.addEventListener("resize", notify2, {
      passive: true
    });
    return function () {
      return ref.removeEventListener("resize", notify2);
    };
  },
  measureScroll: function () {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
}); // node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs

var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function (instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function () {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }

    return rootProjectionNode.current;
  },
  resetTransform: function (instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  }
}); // node_modules/framer-motion/dist/es/render/dom/motion.mjs

var import_tslib36 = require("tslib@2.4.0");

var featureBundle = (0, import_tslib36.__assign)((0, import_tslib36.__assign)((0, import_tslib36.__assign)((0, import_tslib36.__assign)({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */createMotionProxy(function (Component, config) {
  return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode);
});

function createDomMotionComponent(key) {
  return createMotionComponent(createDomMotionConfig(key, {
    forwardMotionProps: false
  }, featureBundle, createDomVisualElement, HTMLProjectionNode));
} // node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs


var m = createMotionProxy(createDomMotionConfig); // node_modules/framer-motion/dist/es/utils/use-force-update.mjs

var import_tslib37 = require("tslib@2.4.0");

var import_framesync6 = __toESM(require("framesync@6.0.1"), 0);

var import_react29 = require("react@18.2.0");

function useForceUpdate() {
  var isUnmountingRef = (0, import_react29.useRef)(false);

  var _a = (0, import_tslib37.__read)((0, import_react29.useState)(0), 2),
      forcedRenderCount = _a[0],
      setForcedRenderCount = _a[1];

  useUnmountEffect(function () {
    return isUnmountingRef.current = true;
  });
  var forceRender = (0, import_react29.useCallback)(function () {
    !isUnmountingRef.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  var deferredForceRender = (0, import_react29.useCallback)(function () {
    return import_framesync6.default.postRender(forceRender);
  }, [forceRender]);
  return [deferredForceRender, forcedRenderCount];
} // node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs


var import_tslib38 = require("tslib@2.4.0");

var React3 = __toESM(require("react@18.2.0"), 0);

var import_react30 = require("react@18.2.0");

var presenceId = 0;

function getPresenceId() {
  var id3 = presenceId;
  presenceId++;
  return id3;
}

var PresenceChild = function (_a) {
  var children = _a.children,
      initial = _a.initial,
      isPresent2 = _a.isPresent,
      onExitComplete = _a.onExitComplete,
      custom = _a.custom,
      presenceAffectsLayout = _a.presenceAffectsLayout;
  var presenceChildren = useConstant(newChildrenMap);
  var id3 = useConstant(getPresenceId);
  var context = (0, import_react30.useMemo)(function () {
    return {
      id: id3,
      initial,
      isPresent: isPresent2,
      custom,
      onExitComplete: function (childId) {
        var e_1, _a2;

        presenceChildren.set(childId, true);

        try {
          for (var _b = (0, import_tslib38.__values)(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var isComplete = _c.value;
            if (!isComplete) return;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
      },
      register: function (childId) {
        presenceChildren.set(childId, false);
        return function () {
          return presenceChildren.delete(childId);
        };
      }
    };
  }, presenceAffectsLayout ? void 0 : [isPresent2]);
  (0, import_react30.useMemo)(function () {
    presenceChildren.forEach(function (_, key) {
      return presenceChildren.set(key, false);
    });
  }, [isPresent2]);
  React3.useEffect(function () {
    !isPresent2 && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
  }, [isPresent2]);
  return React3.createElement(PresenceContext.Provider, {
    value: context
  }, children);
};

function newChildrenMap() {
  return /* @__PURE__ */new Map();
} // node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs


var import_tslib39 = require("tslib@2.4.0");

var React4 = __toESM(require("react@18.2.0"), 0);

var import_react31 = require("react@18.2.0");

function getChildKey(child) {
  return child.key || "";
}

function updateChildLookup(children, allChildren) {
  var seenChildren = true ? /* @__PURE__ */new Set() : null;
  children.forEach(function (child) {
    var key = getChildKey(child);

    if (seenChildren) {
      if (seenChildren.has(key)) {
        console.warn('Children of AnimatePresence require unique keys. "'.concat(key, '" is a duplicate.'));
      }

      seenChildren.add(key);
    }

    allChildren.set(key, child);
  });
}

function onlyElements(children) {
  var filtered = [];
  import_react31.Children.forEach(children, function (child) {
    if ((0, import_react31.isValidElement)(child)) filtered.push(child);
  });
  return filtered;
}

var AnimatePresence = function (_a) {
  var children = _a.children,
      custom = _a.custom,
      _b = _a.initial,
      initial = _b === void 0 ? true : _b,
      onExitComplete = _a.onExitComplete,
      exitBeforeEnter = _a.exitBeforeEnter,
      _c = _a.presenceAffectsLayout,
      presenceAffectsLayout = _c === void 0 ? true : _c;

  var _d = (0, import_tslib39.__read)(useForceUpdate(), 1),
      forceRender = _d[0];

  var forceRenderLayoutGroup = (0, import_react31.useContext)(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup) forceRender = forceRenderLayoutGroup;
  var isInitialRender = (0, import_react31.useRef)(true);
  var isMounted = (0, import_react31.useRef)(true);
  (0, import_react31.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  var filteredChildren = onlyElements(children);
  var presentChildren = (0, import_react31.useRef)(filteredChildren);
  var allChildren = (0, import_react31.useRef)( /* @__PURE__ */new Map()).current;
  var exiting = (0, import_react31.useRef)( /* @__PURE__ */new Set()).current;
  updateChildLookup(filteredChildren, allChildren);

  if (isInitialRender.current) {
    isInitialRender.current = false;
    return React4.createElement(React4.Fragment, null, filteredChildren.map(function (child) {
      return React4.createElement(PresenceChild, {
        key: getChildKey(child),
        isPresent: true,
        initial: initial ? void 0 : false,
        presenceAffectsLayout
      }, child);
    }));
  }

  var childrenToRender = (0, import_tslib39.__spreadArray)([], (0, import_tslib39.__read)(filteredChildren), false);
  var presentKeys = presentChildren.current.map(getChildKey);
  var targetKeys = filteredChildren.map(getChildKey);
  var numPresent = presentKeys.length;

  for (var i = 0; i < numPresent; i++) {
    var key = presentKeys[i];

    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    } else {
      exiting.delete(key);
    }
  }

  if (exitBeforeEnter && exiting.size) {
    childrenToRender = [];
  }

  exiting.forEach(function (key2) {
    if (targetKeys.indexOf(key2) !== -1) return;
    var child = allChildren.get(key2);
    if (!child) return;
    var insertionIndex = presentKeys.indexOf(key2);

    var onExit = function () {
      allChildren.delete(key2);
      exiting.delete(key2);
      var removeIndex = presentChildren.current.findIndex(function (presentChild) {
        return presentChild.key === key2;
      });
      presentChildren.current.splice(removeIndex, 1);

      if (!exiting.size) {
        presentChildren.current = filteredChildren;

        if (isMounted.current === false) {
          return;
        }

        forceRender();
        onExitComplete && onExitComplete();
      }
    };

    childrenToRender.splice(insertionIndex, 0, React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: false,
      onExitComplete: onExit,
      custom,
      presenceAffectsLayout
    }, child));
  });
  childrenToRender = childrenToRender.map(function (child) {
    var key2 = child.key;
    return exiting.has(key2) ? child : React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      presenceAffectsLayout
    }, child);
  });
  presentChildren.current = childrenToRender;

  if (exitBeforeEnter && childrenToRender.length > 1) {
    console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
  }

  return React4.createElement(React4.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map(function (child) {
    return (0, import_react31.cloneElement)(child);
  }));
}; // node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs


var import_react32 = require("react@18.2.0");

var DeprecatedLayoutGroupContext = (0, import_react32.createContext)(null); // node_modules/framer-motion/dist/es/projection/node/group.mjs

var notify = function (node) {
  return !node.isLayoutDirty && node.willUpdate(false);
};

function nodeGroup() {
  var nodes = /* @__PURE__ */new Set();
  var subscriptions = /* @__PURE__ */new WeakMap();

  var dirtyAll = function () {
    return nodes.forEach(notify);
  };

  return {
    add: function (node) {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: function (node) {
      var _a;

      nodes.delete(node);
      (_a = subscriptions.get(node)) === null || _a === void 0 ? void 0 : _a();
      subscriptions.delete(node);
      dirtyAll();
    },
    dirty: dirtyAll
  };
} // node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs


var import_tslib40 = require("tslib@2.4.0");

var React5 = __toESM(require("react@18.2.0"), 0);

var import_react33 = require("react@18.2.0");

var LayoutGroup = function (_a) {
  var _b, _c;

  var children = _a.children,
      id3 = _a.id,
      _d = _a.inheritId,
      inheritId = _d === void 0 ? true : _d;
  var layoutGroupContext = (0, import_react33.useContext)(LayoutGroupContext);
  var deprecatedLayoutGroupContext = (0, import_react33.useContext)(DeprecatedLayoutGroupContext);

  var _e = (0, import_tslib40.__read)(useForceUpdate(), 2),
      forceRender = _e[0],
      key = _e[1];

  var context = (0, import_react33.useRef)(null);
  var upstreamId = (_b = layoutGroupContext.id) !== null && _b !== void 0 ? _b : deprecatedLayoutGroupContext;

  if (context.current === null) {
    if (inheritId && upstreamId) {
      id3 = id3 ? upstreamId + "-" + id3 : upstreamId;
    }

    context.current = {
      id: id3,
      group: inheritId ? (_c = layoutGroupContext === null || layoutGroupContext === void 0 ? void 0 : layoutGroupContext.group) !== null && _c !== void 0 ? _c : nodeGroup() : nodeGroup()
    };
  }

  var memoizedContext = (0, import_react33.useMemo)(function () {
    return (0, import_tslib40.__assign)((0, import_tslib40.__assign)({}, context.current), {
      forceRender
    });
  }, [key]);
  return React5.createElement(LayoutGroupContext.Provider, {
    value: memoizedContext
  }, children);
}; // node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs


var React6 = __toESM(require("react@18.2.0"), 0);

var id2 = 0;

var AnimateSharedLayout = function (_a) {
  var children = _a.children;
  return React6.createElement(LayoutGroup, {
    id: useConstant(function () {
      return "asl-".concat(id2++);
    })
  }, children);
}; // node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs


var import_tslib41 = require("tslib@2.4.0");

var React7 = __toESM(require("react@18.2.0"), 0);

var import_react34 = require("react@18.2.0");

function MotionConfig(_a) {
  var children = _a.children,
      isValidProp = _a.isValidProp,
      config = (0, import_tslib41.__rest)(_a, ["children", "isValidProp"]);
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = (0, import_tslib41.__assign)((0, import_tslib41.__assign)({}, (0, import_react34.useContext)(MotionConfigContext)), config);
  config.isStatic = useConstant(function () {
    return config.isStatic;
  });
  var context = (0, import_react34.useMemo)(function () {
    return config;
  }, [JSON.stringify(config.transition), config.transformPagePoint]);
  return React7.createElement(MotionConfigContext.Provider, {
    value: context
  }, children);
} // node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs


var import_tslib42 = require("tslib@2.4.0");

var React8 = __toESM(require("react@18.2.0"), 0);

var import_react35 = require("react@18.2.0");

function LazyMotion(_a) {
  var children = _a.children,
      features = _a.features,
      _b = _a.strict,
      strict = _b === void 0 ? false : _b;

  var _c = (0, import_tslib42.__read)((0, import_react35.useState)(!isLazyBundle(features)), 2),
      setIsLoaded = _c[1];

  var loadedRenderer = (0, import_react35.useRef)(void 0);

  if (!isLazyBundle(features)) {
    var renderer = features.renderer,
        loadedFeatures = (0, import_tslib42.__rest)(features, ["renderer"]);
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }

  (0, import_react35.useEffect)(function () {
    if (isLazyBundle(features)) {
      features().then(function (_a2) {
        var renderer2 = _a2.renderer,
            loadedFeatures2 = (0, import_tslib42.__rest)(_a2, ["renderer"]);
        loadFeatures(loadedFeatures2);
        loadedRenderer.current = renderer2;
        setIsLoaded(true);
      });
    }
  }, []);
  return React8.createElement(LazyContext.Provider, {
    value: {
      renderer: loadedRenderer.current,
      strict
    }
  }, children);
}

function isLazyBundle(features) {
  return typeof features === "function";
} // node_modules/framer-motion/dist/es/context/ReorderContext.mjs


var import_react36 = require("react@18.2.0");

var ReorderContext = (0, import_react36.createContext)(null); // node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs

var import_popmotion14 = require("popmotion@11.0.3");

function checkReorder(order2, value, offset, velocity) {
  if (!velocity) return order2;
  var index = order2.findIndex(function (item2) {
    return item2.value === value;
  });
  if (index === -1) return order2;
  var nextOffset = velocity > 0 ? 1 : -1;
  var nextItem = order2[index + nextOffset];
  if (!nextItem) return order2;
  var item = order2[index];
  var nextLayout = nextItem.layout;
  var nextItemCenter = (0, import_popmotion14.mix)(nextLayout.min, nextLayout.max, 0.5);

  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order2, index, index + nextOffset);
  }

  return order2;
} // node_modules/framer-motion/dist/es/components/Reorder/Group.mjs


var import_tslib43 = require("tslib@2.4.0");

var import_hey_listen7 = require("hey-listen@1.0.8");

var React9 = __toESM(require("react@18.2.0"), 0);

var import_react37 = require("react@18.2.0");

function ReorderGroup(_a, externalRef) {
  var children = _a.children,
      _b = _a.as,
      as = _b === void 0 ? "ul" : _b,
      _c = _a.axis,
      axis = _c === void 0 ? "y" : _c,
      onReorder = _a.onReorder,
      values = _a.values,
      props = (0, import_tslib43.__rest)(_a, ["children", "as", "axis", "onReorder", "values"]);
  var Component = useConstant(function () {
    return motion(as);
  });
  var order2 = [];
  var isReordering = (0, import_react37.useRef)(false);
  (0, import_hey_listen7.invariant)(Boolean(values), "Reorder.Group must be provided a values prop");
  var context = {
    axis,
    registerItem: function (value, layout) {
      if (layout && order2.findIndex(function (entry) {
        return value === entry.value;
      }) === -1) {
        order2.push({
          value,
          layout: layout[axis]
        });
        order2.sort(compareMin);
      }
    },
    updateOrder: function (id3, offset, velocity) {
      if (isReordering.current) return;
      var newOrder = checkReorder(order2, id3, offset, velocity);

      if (order2 !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter(function (value) {
          return values.indexOf(value) !== -1;
        }));
      }
    }
  };
  (0, import_react37.useEffect)(function () {
    isReordering.current = false;
  });
  return React9.createElement(Component, (0, import_tslib43.__assign)({}, props, {
    ref: externalRef
  }), React9.createElement(ReorderContext.Provider, {
    value: context
  }, children));
}

var Group = (0, import_react37.forwardRef)(ReorderGroup);

function getValue(item) {
  return item.value;
}

function compareMin(a, b) {
  return a.layout.min - b.layout.min;
} // node_modules/framer-motion/dist/es/value/use-motion-value.mjs


var import_tslib44 = require("tslib@2.4.0");

var import_react38 = require("react@18.2.0");

function useMotionValue(initial) {
  var value = useConstant(function () {
    return motionValue(initial);
  });
  var isStatic = (0, import_react38.useContext)(MotionConfigContext).isStatic;

  if (isStatic) {
    var _a = (0, import_tslib44.__read)((0, import_react38.useState)(initial), 2),
        setLatest_1 = _a[1];

    (0, import_react38.useEffect)(function () {
      return value.onChange(setLatest_1);
    }, []);
  }

  return value;
} // node_modules/framer-motion/dist/es/utils/transform.mjs


var import_tslib45 = require("tslib@2.4.0");

var import_popmotion15 = require("popmotion@11.0.3");

var isCustomValueType = function (v) {
  return typeof v === "object" && v.mix;
};

var getMixer = function (v) {
  return isCustomValueType(v) ? v.mix : void 0;
};

function transform() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var useImmediate = !Array.isArray(args[0]);
  var argOffset = useImmediate ? 0 : -1;
  var inputValue = args[0 + argOffset];
  var inputRange = args[1 + argOffset];
  var outputRange = args[2 + argOffset];
  var options = args[3 + argOffset];
  var interpolator = (0, import_popmotion15.interpolate)(inputRange, outputRange, (0, import_tslib45.__assign)({
    mixer: getMixer(outputRange[0])
  }, options));
  return useImmediate ? interpolator(inputValue) : interpolator;
} // node_modules/framer-motion/dist/es/value/use-on-change.mjs


var import_react39 = require("react@18.2.0");

function useOnChange(value, callback) {
  (0, import_react39.useEffect)(function () {
    if (isMotionValue(value)) return value.onChange(callback);
  }, [callback]);
}

function useMultiOnChange(values, handler) {
  (0, import_react39.useEffect)(function () {
    var subscriptions = values.map(function (value) {
      return value.onChange(handler);
    });
    return function () {
      return subscriptions.forEach(function (unsubscribe) {
        return unsubscribe();
      });
    };
  });
} // node_modules/framer-motion/dist/es/value/use-combine-values.mjs


var import_framesync7 = __toESM(require("framesync@6.0.1"), 0);

function useCombineMotionValues(values, combineValues) {
  var value = useMotionValue(combineValues());

  var updateValue = function () {
    return value.set(combineValues());
  };

  updateValue();
  useMultiOnChange(values, function () {
    return import_framesync7.default.update(updateValue, false, true);
  });
  return value;
} // node_modules/framer-motion/dist/es/value/use-transform.mjs


var import_tslib46 = require("tslib@2.4.0");

function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  var transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], function (_a) {
    var _b = (0, import_tslib46.__read)(_a, 1),
        latest = _b[0];

    return transformer(latest);
  });
}

function useListTransform(values, transformer) {
  var latest = useConstant(function () {
    return [];
  });
  return useCombineMotionValues(values, function () {
    latest.length = 0;
    var numValues = values.length;

    for (var i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }

    return transformer(latest);
  });
} // node_modules/framer-motion/dist/es/components/Reorder/Item.mjs


var import_tslib47 = require("tslib@2.4.0");

var import_hey_listen8 = require("hey-listen@1.0.8");

var React10 = __toESM(require("react@18.2.0"), 0);

var import_react40 = require("react@18.2.0");

function useDefaultMotionValue(value, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = 0;
  }

  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}

function ReorderItem(_a, externalRef) {
  var children = _a.children,
      style = _a.style,
      value = _a.value,
      _b = _a.as,
      as = _b === void 0 ? "li" : _b,
      onDrag = _a.onDrag,
      props = (0, import_tslib47.__rest)(_a, ["children", "style", "value", "as", "onDrag"]);
  var Component = useConstant(function () {
    return motion(as);
  });
  var context = (0, import_react40.useContext)(ReorderContext);
  var point = {
    x: useDefaultMotionValue(style === null || style === void 0 ? void 0 : style.x),
    y: useDefaultMotionValue(style === null || style === void 0 ? void 0 : style.y)
  };
  var zIndex = useTransform([point.x, point.y], function (_a2) {
    var _b2 = (0, import_tslib47.__read)(_a2, 2),
        latestX = _b2[0],
        latestY = _b2[1];

    return latestX || latestY ? 1 : "unset";
  });
  var layout = (0, import_react40.useRef)(null);
  (0, import_hey_listen8.invariant)(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  var _c = context,
      axis = _c.axis,
      registerItem = _c.registerItem,
      updateOrder = _c.updateOrder;
  (0, import_react40.useEffect)(function () {
    registerItem(value, layout.current);
  }, [context]);
  return React10.createElement(Component, (0, import_tslib47.__assign)({
    drag: axis
  }, props, {
    dragSnapToOrigin: true,
    style: (0, import_tslib47.__assign)((0, import_tslib47.__assign)({}, style), {
      x: point.x,
      y: point.y,
      zIndex
    }),
    layout: true,
    onDrag: function (event, gesturePoint) {
      var velocity = gesturePoint.velocity;
      velocity[axis] && updateOrder(value, point[axis].get(), velocity[axis]);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, gesturePoint);
    },
    onLayoutMeasure: function (measured) {
      layout.current = measured;
    },
    ref: externalRef
  }), children);
}

var Item = (0, import_react40.forwardRef)(ReorderItem); // node_modules/framer-motion/dist/es/components/Reorder/index.mjs

var Reorder = {
  Group,
  Item
}; // node_modules/framer-motion/dist/es/render/dom/features-animation.mjs

var import_tslib48 = require("tslib@2.4.0");

var domAnimation = (0, import_tslib48.__assign)((0, import_tslib48.__assign)({
  renderer: createDomVisualElement
}, animations), gestureAnimations); // node_modules/framer-motion/dist/es/render/dom/features-max.mjs

var import_tslib49 = require("tslib@2.4.0");

var domMax = (0, import_tslib49.__assign)((0, import_tslib49.__assign)((0, import_tslib49.__assign)((0, import_tslib49.__assign)({}, domAnimation), drag), layoutFeatures), {
  projectionNodeConstructor: HTMLProjectionNode
}); // node_modules/framer-motion/dist/es/value/use-motion-template.mjs

function useMotionTemplate(fragments) {
  var values = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }

  var numFragments = fragments.length;

  function buildValue() {
    var output = "";

    for (var i = 0; i < numFragments; i++) {
      output += fragments[i];
      var value = values[i];
      if (value) output += values[i].get();
    }

    return output;
  }

  return useCombineMotionValues(values, buildValue);
} // node_modules/framer-motion/dist/es/value/use-spring.mjs


var import_tslib50 = require("tslib@2.4.0");

var import_react41 = require("react@18.2.0");

var import_popmotion16 = require("popmotion@11.0.3");

function useSpring(source, config) {
  if (config === void 0) {
    config = {};
  }

  var isStatic = (0, import_react41.useContext)(MotionConfigContext).isStatic;
  var activeSpringAnimation = (0, import_react41.useRef)(null);
  var value = useMotionValue(isMotionValue(source) ? source.get() : source);
  (0, import_react41.useMemo)(function () {
    return value.attach(function (v, set) {
      if (isStatic) return set(v);

      if (activeSpringAnimation.current) {
        activeSpringAnimation.current.stop();
      }

      activeSpringAnimation.current = (0, import_popmotion16.animate)((0, import_tslib50.__assign)((0, import_tslib50.__assign)({
        from: value.get(),
        to: v,
        velocity: value.getVelocity()
      }, config), {
        onUpdate: set
      }));
      return value.get();
    });
  }, Object.values(config));
  useOnChange(source, function (v) {
    return value.set(parseFloat(v));
  });
  return value;
} // node_modules/framer-motion/dist/es/value/use-velocity.mjs


var import_react42 = require("react@18.2.0");

function useVelocity(value) {
  var velocity = useMotionValue(value.getVelocity());
  (0, import_react42.useEffect)(function () {
    return value.velocityUpdateSubscribers.add(function (newVelocity) {
      velocity.set(newVelocity);
    });
  }, [value]);
  return velocity;
} // node_modules/framer-motion/dist/es/value/scroll/utils.mjs


function createScrollMotionValues() {
  return {
    scrollX: motionValue(0),
    scrollY: motionValue(0),
    scrollXProgress: motionValue(0),
    scrollYProgress: motionValue(0)
  };
}

function setProgress(offset, maxOffset, value) {
  value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
}

function createScrollUpdater(values, getOffsets) {
  var update = function () {
    var _a = getOffsets(),
        xOffset = _a.xOffset,
        yOffset = _a.yOffset,
        xMaxOffset = _a.xMaxOffset,
        yMaxOffset = _a.yMaxOffset;

    values.scrollX.set(xOffset);
    values.scrollY.set(yOffset);
    setProgress(xOffset, xMaxOffset, values.scrollXProgress);
    setProgress(yOffset, yMaxOffset, values.scrollYProgress);
  };

  update();
  return update;
} // node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs


var import_hey_listen9 = require("hey-listen@1.0.8");

var getElementScrollOffsets = function (element) {
  return function () {
    return {
      xOffset: element.scrollLeft,
      yOffset: element.scrollTop,
      xMaxOffset: element.scrollWidth - element.offsetWidth,
      yMaxOffset: element.scrollHeight - element.offsetHeight
    };
  };
};

function useElementScroll(ref) {
  var values = useConstant(createScrollMotionValues);
  useIsomorphicLayoutEffect(function () {
    var element = ref.current;
    (0, import_hey_listen9.invariant)(!!element, "ref provided to useScroll must be passed into a HTML element.");
    if (!element) return;
    var updateScrollValues = createScrollUpdater(values, getElementScrollOffsets(element));
    var scrollListener = addDomEvent(element, "scroll", updateScrollValues, {
      passive: true
    });
    var resizeListener = addDomEvent(element, "resize", updateScrollValues);
    return function () {
      scrollListener && scrollListener();
      resizeListener && resizeListener();
    };
  }, []);
  return values;
} // node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs


var viewportScrollValues;

function getViewportScrollOffsets() {
  return {
    xOffset: window.pageXOffset,
    yOffset: window.pageYOffset,
    xMaxOffset: document.body.clientWidth - window.innerWidth,
    yMaxOffset: document.body.clientHeight - window.innerHeight
  };
}

var hasListeners = false;

function addEventListeners() {
  hasListeners = true;
  if (typeof window === "undefined") return;
  var updateScrollValues = createScrollUpdater(viewportScrollValues, getViewportScrollOffsets);
  addDomEvent(window, "scroll", updateScrollValues, {
    passive: true
  });
  addDomEvent(window, "resize", updateScrollValues);
}

function useViewportScroll() {
  if (!viewportScrollValues) {
    viewportScrollValues = createScrollMotionValues();
  }

  useIsomorphicLayoutEffect(function () {
    !hasListeners && addEventListeners();
  }, []);
  return viewportScrollValues;
} // node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs


var import_framesync8 = __toESM(require("framesync@6.0.1"), 0);

var import_react43 = require("react@18.2.0");

var getCurrentTime = typeof performance !== "undefined" ? function () {
  return performance.now();
} : function () {
  return Date.now();
};

function useAnimationFrame(callback) {
  var initialTimestamp = useConstant(getCurrentTime);
  (0, import_react43.useEffect)(function () {
    var provideTimeSinceStart = function (_a) {
      var timestamp = _a.timestamp;
      callback(timestamp - initialTimestamp);
    };

    import_framesync8.default.update(provideTimeSinceStart, true);
    return function () {
      return import_framesync8.cancelSync.update(provideTimeSinceStart);
    };
  }, [callback]);
} // node_modules/framer-motion/dist/es/value/use-time.mjs


function useTime() {
  var time = useMotionValue(0);
  useAnimationFrame(function (t) {
    return time.set(t);
  });
  return time;
} // node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs


var import_tslib51 = require("tslib@2.4.0");

var import_react44 = require("react@18.2.0");

var prefersReducedMotion;

function initPrefersReducedMotion() {
  prefersReducedMotion = motionValue(null);
  if (typeof window === "undefined") return;

  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");

    var setReducedMotionPreferences = function () {
      return prefersReducedMotion.set(motionMediaQuery_1.matches);
    };

    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.set(false);
  }
}

function useReducedMotion() {
  !prefersReducedMotion && initPrefersReducedMotion();

  var _a = (0, import_tslib51.__read)((0, import_react44.useState)(prefersReducedMotion.get()), 2),
      shouldReduceMotion = _a[0],
      setShouldReduceMotion = _a[1];

  useOnChange(prefersReducedMotion, setShouldReduceMotion);
  return shouldReduceMotion;
} // node_modules/framer-motion/dist/es/animation/animation-controls.mjs


var import_tslib52 = require("tslib@2.4.0");

var import_hey_listen10 = require("hey-listen@1.0.8");

function animationControls() {
  var hasMounted = false;
  var pendingAnimations = [];
  var subscribers = /* @__PURE__ */new Set();
  var controls = {
    subscribe: function (visualElement2) {
      subscribers.add(visualElement2);
      return function () {
        return void subscribers.delete(visualElement2);
      };
    },
    start: function (definition, transitionOverride) {
      if (hasMounted) {
        var animations_1 = [];
        subscribers.forEach(function (visualElement2) {
          animations_1.push(animateVisualElement(visualElement2, definition, {
            transitionOverride
          }));
        });
        return Promise.all(animations_1);
      } else {
        return new Promise(function (resolve) {
          pendingAnimations.push({
            animation: [definition, transitionOverride],
            resolve
          });
        });
      }
    },
    set: function (definition) {
      (0, import_hey_listen10.invariant)(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(function (visualElement2) {
        setValues(visualElement2, definition);
      });
    },
    stop: function () {
      subscribers.forEach(function (visualElement2) {
        stopAnimation(visualElement2);
      });
    },
    mount: function () {
      hasMounted = true;
      pendingAnimations.forEach(function (_a) {
        var animation = _a.animation,
            resolve = _a.resolve;
        controls.start.apply(controls, (0, import_tslib52.__spreadArray)([], (0, import_tslib52.__read)(animation), false)).then(resolve);
      });
      return function () {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
} // node_modules/framer-motion/dist/es/animation/use-animation.mjs


var import_react45 = require("react@18.2.0");

function useAnimation() {
  var controls = useConstant(animationControls);
  (0, import_react45.useEffect)(controls.mount, []);
  return controls;
} // node_modules/framer-motion/dist/es/utils/use-cycle.mjs


var import_tslib53 = require("tslib@2.4.0");

var import_react46 = require("react@18.2.0");

var import_popmotion17 = require("popmotion@11.0.3");

function useCycle() {
  var items = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    items[_i] = arguments[_i];
  }

  var index = (0, import_react46.useRef)(0);

  var _a = (0, import_tslib53.__read)((0, import_react46.useState)(items[index.current]), 2),
      item = _a[0],
      setItem = _a[1];

  return [item, function (next) {
    index.current = typeof next !== "number" ? (0, import_popmotion17.wrap)(0, items.length, index.current + 1) : next;
    setItem(items[index.current]);
  }];
} // node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs


var DragControls = function () {
  function DragControls2() {
    this.componentControls = /* @__PURE__ */new Set();
  }

  DragControls2.prototype.subscribe = function (controls) {
    var _this = this;

    this.componentControls.add(controls);
    return function () {
      return _this.componentControls.delete(controls);
    };
  };

  DragControls2.prototype.start = function (event, options) {
    this.componentControls.forEach(function (controls) {
      controls.start(event.nativeEvent || event, options);
    });
  };

  return DragControls2;
}();

var createDragControls = function () {
  return new DragControls();
};

function useDragControls() {
  return useConstant(createDragControls);
} // node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs


function useInstantLayoutTransition() {
  return startTransition;
}

function startTransition(cb) {
  if (!rootProjectionNode.current) return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  cb === null || cb === void 0 ? void 0 : cb();
} // node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs


var import_tslib54 = require("tslib@2.4.0");

var import_framesync9 = __toESM(require("framesync@6.0.1"), 0);

var import_react47 = require("react@18.2.0");

function useInstantTransition() {
  var _a = (0, import_tslib54.__read)(useForceUpdate(), 2),
      forceUpdate = _a[0],
      forcedRenderCount = _a[1];

  var startInstantLayoutTransition = useInstantLayoutTransition();
  (0, import_react47.useEffect)(function () {
    import_framesync9.default.postRender(function () {
      return import_framesync9.default.postRender(function () {
        return instantAnimationState.current = false;
      });
    });
  }, [forcedRenderCount]);
  return function (callback) {
    startInstantLayoutTransition(function () {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
    });
  };
} // node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs


var React11 = __toESM(require("react@18.2.0"), 0);

function useResetProjection() {
  var reset = React11.useCallback(function () {
    var root = rootProjectionNode.current;
    if (!root) return;
    root.resetTree();
  }, []);
  return reset;
} // node_modules/framer-motion/dist/es/animation/use-animated-state.mjs


var import_tslib55 = require("tslib@2.4.0");

var import_react48 = require("react@18.2.0");

var createObject = function () {
  return {};
};

var stateVisualElement = visualElement({
  build: function () {},
  measureViewportBox: createBox,
  resetTransform: function () {},
  restoreTransform: function () {},
  removeValueFromRenderState: function () {},
  render: function () {},
  scrapeMotionValuesFromProps: createObject,
  readValueFromInstance: function (_state, key, options) {
    return options.initialState[key] || 0;
  },
  makeTargetAnimatable: function (element, _a) {
    var transition = _a.transition,
        transitionEnd = _a.transitionEnd,
        target = (0, import_tslib55.__rest)(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element);
    checkTargetForNewValues(element, target, origin);
    return (0, import_tslib55.__assign)({
      transition,
      transitionEnd
    }, target);
  }
});
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});

function useAnimatedState(initialState) {
  var _a = (0, import_tslib55.__read)((0, import_react48.useState)(initialState), 2),
      animationState = _a[0],
      setAnimationState = _a[1];

  var visualState = useVisualState({}, false);
  var element = useConstant(function () {
    return stateVisualElement({
      props: {},
      visualState
    }, {
      initialState
    });
  });
  (0, import_react48.useEffect)(function () {
    element.mount({});
    return element.unmount();
  }, []);
  (0, import_react48.useEffect)(function () {
    element.setProps({
      onUpdate: function (v) {
        return setAnimationState((0, import_tslib55.__assign)({}, v));
      }
    });
  });
  var startAnimation2 = useConstant(function () {
    return function (animationDefinition) {
      return animateVisualElement(element, animationDefinition);
    };
  });
  return [animationState, startAnimation2];
} // node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs


var import_hey_listen11 = require("hey-listen@1.0.8");

var maxScale = 1e5;

var invertScale = function (scale2) {
  return scale2 > 1e-3 ? 1 / scale2 : maxScale;
};

var hasWarned = false;

function useInvertedScale(scale2) {
  var parentScaleX = useMotionValue(1);
  var parentScaleY = useMotionValue(1);
  var visualElement2 = useVisualElementContext();
  (0, import_hey_listen11.invariant)(!!(scale2 || visualElement2), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  (0, import_hey_listen11.warning)(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;

  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement2) {
    parentScaleX = visualElement2.getValue("scaleX", 1);
    parentScaleY = visualElement2.getValue("scaleY", 1);
  }

  var scaleX = useTransform(parentScaleX, invertScale);
  var scaleY = useTransform(parentScaleY, invertScale);
  return {
    scaleX,
    scaleY
  };
}

module.exports = __toCommonJS(framer_motion_5_6_0_exports);
};

code(module, require);
return module.exports;
});

