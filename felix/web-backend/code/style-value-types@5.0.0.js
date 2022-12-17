define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["style-value-types","5.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};
const require = () => void 0;
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/style-value-types.5.0.0.js


var style_value_types_5_0_0_exports = {};

__export(style_value_types_5_0_0_exports, {
  alpha: () => alpha,
  color: () => color,
  complex: () => complex,
  degrees: () => degrees,
  filter: () => filter,
  hex: () => hex,
  hsla: () => hsla,
  number: () => number,
  percent: () => percent,
  progressPercentage: () => progressPercentage,
  px: () => px,
  rgbUnit: () => rgbUnit,
  rgba: () => rgba,
  scale: () => scale,
  vh: () => vh,
  vw: () => vw
}); // node_modules/style-value-types/dist/es/utils.mjs


var clamp = (min, max) => v => Math.max(Math.min(v, max), min);

var sanitize = v => v % 1 ? Number(v.toFixed(5)) : v;

var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

function isString(v) {
  return typeof v === "string";
} // node_modules/style-value-types/dist/es/numbers/index.mjs


var number = {
  test: v => typeof v === "number",
  parse: parseFloat,
  transform: v => v
};
var alpha = Object.assign(Object.assign({}, number), {
  transform: clamp(0, 1)
});
var scale = Object.assign(Object.assign({}, number), {
  default: 1
}); // node_modules/style-value-types/dist/es/numbers/units.mjs

var createUnitType = unit => ({
  test: v => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});

var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), {
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
}); // node_modules/style-value-types/dist/es/color/utils.mjs

var isColorString = (type, testProp) => v => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};

var splitColor = (aName, bName, cName) => v => {
  if (!isString(v)) return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
}; // node_modules/style-value-types/dist/es/color/hsla.mjs


var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
}; // node_modules/style-value-types/dist/es/color/rgba.mjs

var clampRgbUnit = clamp(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), {
  transform: v => Math.round(clampRgbUnit(v))
});
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
}; // node_modules/style-value-types/dist/es/color/hex.mjs

function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";

  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}

var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
}; // node_modules/style-value-types/dist/es/color/index.mjs

var color = {
  test: v => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: v => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
}; // node_modules/style-value-types/dist/es/complex/index.mjs

var colorToken = "${c}";
var numberToken = "${n}";

function test(v) {
  var _a, _b, _c, _d;

  return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}

function analyse(v) {
  if (typeof v === "number") v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);

  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }

  const numbers = v.match(floatRegex);

  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }

  return {
    values,
    numColors,
    tokenised: v
  };
}

function parse(v) {
  return analyse(v).values;
}

function createTransformer(v) {
  const {
    values,
    numColors,
    tokenised
  } = analyse(v);
  const numValues = values.length;
  return v2 => {
    let output = tokenised;

    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
    }

    return output;
  };
}

var convertNumbersToZero = v => typeof v === "number" ? 0 : v;

function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}

var complex = {
  test,
  parse,
  createTransformer,
  getAnimatableNone
}; // node_modules/style-value-types/dist/es/complex/filter.mjs

var maxDefaults = /* @__PURE__ */new Set(["brightness", "contrast", "saturate", "opacity"]);

function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow") return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2) return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}

var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object.assign(Object.assign({}, complex), {
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
});
module.exports = __toCommonJS(style_value_types_5_0_0_exports);
};

code(module, require);
return module.exports;
});

