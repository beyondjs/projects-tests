define(["tslib@2.4.0","hey-listen@1.0.8","style-value-types@5.0.0","framesync@6.0.1"], (dep_0, dep_1, dep_2, dep_3) => {

const bimport = specifier => {
	const dependencies = new Map([["tslib","2.4.0"],["hey-listen","1.0.8"],["popmotion","11.0.3"],["style-value-types","5.0.0"],["framesync","6.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["tslib@2.4.0", dep_0],["hey-listen@1.0.8", dep_1],["style-value-types@5.0.0", dep_2],["framesync@6.0.1", dep_3]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/popmotion.11.0.3.js


var popmotion_11_0_3_exports = {};

__export(popmotion_11_0_3_exports, {
  angle: () => angle,
  animate: () => animate,
  anticipate: () => anticipate,
  applyOffset: () => applyOffset,
  attract: () => attract,
  attractExpo: () => attractExpo,
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  bounceIn: () => bounceIn,
  bounceInOut: () => bounceInOut,
  bounceOut: () => bounceOut,
  circIn: () => circIn,
  circInOut: () => circInOut,
  circOut: () => circOut,
  clamp: () => clamp,
  createAnticipate: () => createAnticipate,
  createAttractor: () => createAttractor,
  createBackIn: () => createBackIn,
  createExpoIn: () => createExpoIn,
  cubicBezier: () => cubicBezier,
  decay: () => decay,
  degreesToRadians: () => degreesToRadians,
  distance: () => distance,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  inertia: () => inertia,
  interpolate: () => interpolate,
  isPoint: () => isPoint,
  isPoint3D: () => isPoint3D,
  keyframes: () => keyframes,
  linear: () => linear,
  mirrorEasing: () => mirrorEasing,
  mix: () => mix,
  mixColor: () => mixColor,
  mixComplex: () => mixComplex,
  pipe: () => pipe,
  pointFromVector: () => pointFromVector,
  progress: () => progress,
  radiansToDegrees: () => radiansToDegrees,
  reverseEasing: () => reverseEasing,
  smooth: () => smooth,
  smoothFrame: () => smoothFrame,
  snap: () => snap,
  spring: () => spring,
  steps: () => steps,
  toDecimal: () => toDecimal,
  velocityPerFrame: () => velocityPerFrame,
  velocityPerSecond: () => velocityPerSecond,
  wrap: () => wrap
}); // node_modules/popmotion/dist/es/utils/clamp.mjs


var clamp = (min, max, v) => Math.min(Math.max(v, min), max); // node_modules/popmotion/dist/es/animations/utils/find-spring.mjs


var import_hey_listen = require("hey-listen@1.0.8");

var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;

function findSpring({
  duration = 800,
  bounce = 0.25,
  velocity = 0,
  mass = 1
}) {
  let envelope;
  let derivative;
  (0, import_hey_listen.warning)(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1e3);

  if (dampingRatio < 1) {
    envelope = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };

    derivative = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq2 => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };

    derivative = undampedFreq2 => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }

  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;

  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}

var rootIterations = 12;

function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;

  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }

  return result;
}

function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
} // node_modules/popmotion/dist/es/animations/generators/spring.mjs


var import_tslib = require("tslib@2.4.0");

var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];

function isSpringType(options, keys) {
  return keys.some(key => options[key] !== void 0);
}

function getSpringOptions(options) {
  let springOptions = Object.assign({
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false
  }, options);

  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), {
      velocity: 0,
      mass: 1
    });
    springOptions.isResolvedFromDuration = true;
  }

  return springOptions;
}

function spring(_a) {
  var {
    from = 0,
    to = 1,
    restSpeed = 2,
    restDelta
  } = _a,
      options = (0, import_tslib.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = {
    done: false,
    value: from
  };
  let {
    stiffness,
    damping,
    mass,
    velocity,
    duration,
    isResolvedFromDuration
  } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;

  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;

    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }

    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);

      resolveSpring = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };

      resolveVelocity = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = t => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);

      resolveSpring = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }

  createSpring();
  return {
    next: t => {
      const current = resolveSpring(t);

      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }

      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}

spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";

var zero = _t => 0; // node_modules/popmotion/dist/es/utils/progress.mjs


var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
}; // node_modules/popmotion/dist/es/utils/mix.mjs


var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from; // node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs


function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }

  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha
  };
} // node_modules/popmotion/dist/es/utils/mix-color.mjs


var import_style_value_types = require("style-value-types@5.0.0");

var import_hey_listen2 = require("hey-listen@1.0.8");

var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};

var colorTypes = [import_style_value_types.hex, import_style_value_types.rgba, import_style_value_types.hsla];

var getColorType = v => colorTypes.find(type => type.test(v));

var notAnimatable = color3 => `'${color3}' is not an animatable color. Use the equivalent color code instead.`;

var mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  (0, import_hey_listen2.invariant)(!!fromColorType, notAnimatable(from));
  (0, import_hey_listen2.invariant)(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);

  if (fromColorType === import_style_value_types.hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = import_style_value_types.rgba;
  }

  if (toColorType === import_style_value_types.hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = import_style_value_types.rgba;
  }

  const blended = Object.assign({}, fromColor);
  return v => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
}; // node_modules/popmotion/dist/es/utils/inc.mjs


var zeroPoint = {
  x: 0,
  y: 0,
  z: 0
};

var isNum = v => typeof v === "number"; // node_modules/popmotion/dist/es/utils/pipe.mjs


var combineFunctions = (a2, b2) => v => b2(a2(v));

var pipe = (...transformers) => transformers.reduce(combineFunctions); // node_modules/popmotion/dist/es/utils/mix-complex.mjs


var import_style_value_types2 = require("style-value-types@5.0.0");

var import_hey_listen3 = require("hey-listen@1.0.8");

function getMixer(origin, target) {
  if (isNum(origin)) {
    return v => mix(origin, target, v);
  } else if (import_style_value_types2.color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}

var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return v => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};

var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};

  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }

  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }

    return output;
  };
};

function analyse(value) {
  const parsed = import_style_value_types2.complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;

  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }

  return {
    parsed,
    numNumbers,
    numRGB,
    numHSL
  };
}

var mixComplex = (origin, target) => {
  const template = import_style_value_types2.complex.createTransformer(target);
  const originStats = analyse(origin);
  const targetStats = analyse(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;

  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    (0, import_hey_listen3.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return p => `${p > 0 ? target : origin}`;
  }
}; // node_modules/popmotion/dist/es/utils/interpolate.mjs


var import_style_value_types3 = require("style-value-types@5.0.0");

var import_hey_listen4 = require("hey-listen@1.0.8");

var mixNumber = (from, to) => p => mix(from, to, p);

function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (import_style_value_types3.color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}

function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;

  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);

    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }

    mixers.push(mixer);
  }

  return mixers;
}

function fastInterpolate([from, to], [mixer]) {
  return v => mixer(progress(from, to, v));
}

function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return v => {
    let mixerIndex = 0;
    let foundMixerIndex = false;

    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }

    if (!foundMixerIndex) {
      let i = 1;

      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }

      mixerIndex = i - 1;
    }

    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}

function interpolate(input, output, {
  clamp: isClamp = true,
  ease,
  mixer
} = {}) {
  const inputLength = input.length;
  (0, import_hey_listen4.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
  (0, import_hey_listen4.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");

  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }

  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
} // node_modules/popmotion/dist/es/easing/utils.mjs


var reverseEasing = easing => p => 1 - easing(1 - p);

var mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

var createExpoIn = power => p => Math.pow(p, power);

var createBackIn = power => p => p * p * ((power + 1) * p - power);

var createAnticipate = power => {
  const backEasing = createBackIn(power);
  return p => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
}; // node_modules/popmotion/dist/es/easing/index.mjs


var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;

var linear = p => p;

var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);

var circIn = p => 1 - Math.sin(Math.acos(p));

var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;

var bounceOut = p => {
  if (p === 1 || p === 0) return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};

var bounceIn = reverseEasing(bounceOut);

var bounceInOut = p => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5; // node_modules/popmotion/dist/es/animations/generators/keyframes.mjs


function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}

function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}

function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

function keyframes({
  from = 0,
  to = 1,
  ease,
  offset,
  duration = 300
}) {
  const state = {
    done: false,
    value: from
  };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);

  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }

  let interpolator = createInterpolator();
  return {
    next: t => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
} // node_modules/popmotion/dist/es/animations/generators/decay.mjs


function decay({
  velocity = 0,
  from = 0,
  power = 0.8,
  timeConstant = 350,
  restDelta = 0.5,
  modifyTarget
}) {
  const state = {
    done: false,
    value: from
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - from;
  return {
    next: t => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {}
  };
} // node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs


var types = {
  keyframes,
  spring,
  decay
};

function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }

  const keys = new Set(Object.keys(config));

  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return keyframes;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return spring;
  }

  return keyframes;
} // node_modules/popmotion/dist/es/animations/utils/elapsed.mjs


function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}

function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}

function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
} // node_modules/popmotion/dist/es/animations/index.mjs


var import_tslib2 = require("tslib@2.4.0");

var import_framesync = __toESM(require("framesync@6.0.1"), 0);

var framesync = update => {
  const passTimestamp = ({
    delta
  }) => update(delta);

  return {
    start: () => import_framesync.default.update(passTimestamp, true),
    stop: () => import_framesync.cancelSync.update(passTimestamp)
  };
};

function animate(_a) {
  var _b, _c;

  var {
    from,
    autoplay = true,
    driver = framesync,
    elapsed = 0,
    repeat: repeatMax = 0,
    repeatType = "loop",
    repeatDelay = 0,
    onPlay,
    onStop,
    onComplete,
    onRepeat,
    onUpdate
  } = _a,
      options = (0, import_tslib2.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let {
    to
  } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);

  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }

  const animation = animator(Object.assign(Object.assign({}, options), {
    from,
    to
  }));

  function repeat() {
    repeatCount++;

    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror") animation.flipTarget();
    }

    isComplete = false;
    onRepeat && onRepeat();
  }

  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }

  function update(delta) {
    if (!isForwardPlayback) delta = -delta;
    elapsed += delta;

    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber) latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }

    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);

    if (isComplete) {
      if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;

      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }

  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }

  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
} // node_modules/popmotion/dist/es/utils/velocity-per-second.mjs


function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
} // node_modules/popmotion/dist/es/animations/inertia.mjs


var import_framesync2 = require("framesync@6.0.1");

function inertia({
  from = 0,
  velocity = 0,
  min,
  max,
  power = 0.8,
  timeConstant = 750,
  bounceStiffness = 500,
  bounceDamping = 10,
  restDelta = 1,
  modifyTarget,
  driver,
  onUpdate,
  onComplete,
  onStop
}) {
  let currentAnimation;

  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }

  function boundaryNearest(v) {
    if (min === void 0) return max;
    if (max === void 0) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }

  function startAnimation(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: v => {
        var _a;

        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }

  function startSpring(options) {
    startAnimation(Object.assign({
      type: "spring",
      stiffness: bounceStiffness,
      damping: bounceDamping,
      restDelta
    }, options));
  }

  if (isOutOfBounds(from)) {
    startSpring({
      from,
      velocity,
      to: boundaryNearest(from)
    });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;

    const checkBoundary = v => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, (0, import_framesync2.getFrameData)().delta);

      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({
          from: v,
          to: boundary,
          velocity
        });
      }
    };

    startAnimation({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }

  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
} // node_modules/popmotion/dist/es/utils/radians-to-degrees.mjs


var radiansToDegrees = radians => radians * 180 / Math.PI; // node_modules/popmotion/dist/es/utils/angle.mjs


var angle = (a2, b2 = zeroPoint) => radiansToDegrees(Math.atan2(b2.y - a2.y, b2.x - a2.x)); // node_modules/popmotion/dist/es/utils/apply-offset.mjs


var applyOffset = (from, to) => {
  let hasReceivedFrom = true;

  if (to === void 0) {
    to = from;
    hasReceivedFrom = false;
  }

  return v => {
    if (hasReceivedFrom) {
      return v - from + to;
    } else {
      from = v;
      hasReceivedFrom = true;
      return to;
    }
  };
}; // node_modules/popmotion/dist/es/utils/attract.mjs


var identity = v => v;

var createAttractor = (alterDisplacement = identity) => (constant, origin, v) => {
  const displacement = origin - v;
  const springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
  return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
};

var attract = createAttractor();
var attractExpo = createAttractor(Math.sqrt); // node_modules/popmotion/dist/es/utils/degrees-to-radians.mjs

var degreesToRadians = degrees => degrees * Math.PI / 180; // node_modules/popmotion/dist/es/utils/is-point.mjs


var isPoint = point => point.hasOwnProperty("x") && point.hasOwnProperty("y"); // node_modules/popmotion/dist/es/utils/is-point-3d.mjs


var isPoint3D = point => isPoint(point) && point.hasOwnProperty("z"); // node_modules/popmotion/dist/es/utils/distance.mjs


var distance1D = (a2, b2) => Math.abs(a2 - b2);

function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
} // node_modules/popmotion/dist/es/utils/point-from-vector.mjs


var pointFromVector = (origin, angle2, distance2) => {
  angle2 = degreesToRadians(angle2);
  return {
    x: distance2 * Math.cos(angle2) + origin.x,
    y: distance2 * Math.sin(angle2) + origin.y
  };
}; // node_modules/popmotion/dist/es/utils/to-decimal.mjs


var toDecimal = (num, precision = 2) => {
  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
}; // node_modules/popmotion/dist/es/utils/smooth-frame.mjs


var smoothFrame = (prevValue, nextValue, duration, smoothing = 0) => toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration)); // node_modules/popmotion/dist/es/utils/smooth.mjs


var import_framesync3 = require("framesync@6.0.1");

var smooth = (strength = 50) => {
  let previousValue = 0;
  let lastUpdated = 0;
  return v => {
    const currentFramestamp = (0, import_framesync3.getFrameData)().timestamp;
    const timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    const newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
}; // node_modules/popmotion/dist/es/utils/snap.mjs


var snap = points => {
  if (typeof points === "number") {
    return v => Math.round(v / points) * points;
  } else {
    let i = 0;
    const numPoints = points.length;
    return v => {
      let lastDistance = Math.abs(points[0] - v);

      for (i = 1; i < numPoints; i++) {
        const point = points[i];
        const distance2 = Math.abs(point - v);
        if (distance2 === 0) return point;
        if (distance2 > lastDistance) return points[i - 1];
        if (i === numPoints - 1) return point;
        lastDistance = distance2;
      }
    };
  }
}; // node_modules/popmotion/dist/es/utils/velocity-per-frame.mjs


function velocityPerFrame(xps, frameDuration) {
  return xps / (1e3 / frameDuration);
} // node_modules/popmotion/dist/es/utils/wrap.mjs


var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
}; // node_modules/popmotion/dist/es/easing/cubic-bezier.mjs


var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;

var b = (a1, a2) => 3 * a2 - 6 * a1;

var c = a1 => 3 * a1;

var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;

var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);

var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;

  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);

  return currentT;
}

var newtonIterations = 8;
var newtonMinSlope = 1e-3;

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0) {
      return aGuessT;
    }

    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);

function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return linear;
  const sampleValues = new Float32Array(kSplineTableSize);

  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
} // node_modules/popmotion/dist/es/easing/steps.mjs


var steps = (steps2, direction = "end") => progress2 => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};

module.exports = __toCommonJS(popmotion_11_0_3_exports);
};

code(module, require);
return module.exports;
});

