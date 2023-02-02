System.register(["engine.io-parser@5.0.4","@socket.io/component-emitter@3.1.0","engine.io-client@6.2.3","socket.io-parser@4.2.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.4"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"],["socket.io-client","4.5.3"],["socket.io-parser","4.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.4', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.2.3', dep), dep => dependencies.set('socket.io-parser@4.2.1', dep)],
execute: function() {
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

var __toCommonJS = /* @__PURE__ */(cache2 => {
  return (module2, temp) => {
    return cache2 && cache2.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache2 && cache2.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/socket.io-client.4.5.3.js


var socket_io_client_4_5_3_exports = {};

__export(socket_io_client_4_5_3_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_5_3_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
}); // node_modules/socket.io-client/build/esm/url.js


var import_engine = require("engine.io-client@6.2.3");

function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (uri == null) uri = loc.protocol + "//" + loc.host;

  if (typeof uri === "string") {
    if (uri.charAt(0) === "/") {
      if (uri.charAt(1) === "/") {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      if (typeof loc !== "undefined") {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }

    obj = (0, import_engine.parse)(uri);
  }

  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
} // node_modules/socket.io-client/build/esm/on.js


function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
} // node_modules/socket.io-client/build/esm/socket.js


var import_socket = require("socket.io-parser@4.2.1");

var import_component_emitter = require("@socket.io/component-emitter@3.1.0");

var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;

    if (opts && opts.auth) {
      this.auth = opts.auth;
    }

    if (this.io._autoConnect) this.open();
  }

  get disconnected() {
    return !this.connected;
  }

  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }

  get active() {
    return !!this.subs;
  }

  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if (this.io._readyState === "open") this.onopen();
    return this;
  }

  open() {
    return this.connect();
  }

  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }

  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }

    args.unshift(ev);
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;

    if (typeof args[args.length - 1] === "function") {
      const id = this.ids++;
      const ack = args.pop();

      this._registerAckCallback(id, ack);

      packet.id = id;
    }

    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }

    this.flags = {};
    return this;
  }

  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;

    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }

    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];

      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }

      ack.call(this, new Error("operation has timed out"));
    }, timeout);

    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }

  packet(packet) {
    packet.nsp = this.nsp;

    this.io._packet(packet);
  }

  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this.packet({
          type: import_socket.PacketType.CONNECT,
          data
        });
      });
    } else {
      this.packet({
        type: import_socket.PacketType.CONNECT,
        data: this.auth
      });
    }
  }

  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }

  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }

  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;

    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }

        break;

      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;

      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;

      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;

      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }

  onevent(packet) {
    const args = packet.data || [];

    if (packet.id != null) {
      args.push(this.ack(packet.id));
    }

    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }

  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }

    super.emit.apply(this, args);
  }

  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }

  onack(packet) {
    const ack = this.acks[packet.id];

    if (typeof ack === "function") {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }

  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }

  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }

  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }

  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }

    this.io["_destroy"](this);
  }

  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }

    this.destroy();

    if (this.connected) {
      this.onclose("io client disconnect");
    }

    return this;
  }

  close() {
    return this.disconnect();
  }

  compress(compress) {
    this.flags.compress = compress;
    return this;
  }

  get volatile() {
    this.flags.volatile = true;
    return this;
  }

  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }

  onAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.push(listener);

    return this;
  }

  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.unshift(listener);

    return this;
  }

  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }

    return this;
  }

  listenersAny() {
    return this._anyListeners || [];
  }

  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.push(listener);

    return this;
  }

  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.unshift(listener);

    return this;
  }

  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyOutgoingListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }

    return this;
  }

  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }

  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }

}; // node_modules/socket.io-client/build/esm/contrib/backo2.js

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};

Backoff.prototype.reset = function () {
  this.attempts = 0;
};

Backoff.prototype.setMin = function (min) {
  this.ms = min;
};

Backoff.prototype.setMax = function (max) {
  this.max = max;
};

Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
}; // node_modules/socket.io-client/build/esm/manager.js


var import_engine2 = require("engine.io-client@6.2.3");

var parser = __toESM(require("socket.io-parser@4.2.1"), 0);

var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");

var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;

    super();
    this.nsps = {};
    this.subs = [];

    if (uri && typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;

    const _parser = opts.parser || parser;

    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }

  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }

  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }

  reconnectionDelay(v) {
    var _a;

    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }

  randomizationFactor(v) {
    var _a;

    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }

  reconnectionDelayMax(v) {
    var _a;

    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }

  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }

  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }

  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);

      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });

    if (this._timeout !== false) {
      const timeout = this._timeout;

      if (timeout === 0) {
        openSubDestroy();
      }

      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }

    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }

  connect(fn) {
    return this.open(fn);
  }

  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }

  onping() {
    this.emitReserved("ping");
  }

  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }

  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }

  onerror(err) {
    this.emitReserved("error", err);
  }

  socket(nsp, opts) {
    let socket = this.nsps[nsp];

    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }

    return socket;
  }

  _destroy(socket) {
    const nsps = Object.keys(this.nsps);

    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];

      if (socket2.active) {
        return;
      }
    }

    this._close();
  }

  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);

    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }

  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }

  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }

  disconnect() {
    return this._close();
  }

  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);

    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }

  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;

    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }

  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }

}; // node_modules/socket.io-client/build/esm/index.js

var import_socket4 = require("socket.io-parser@4.2.1");

var cache = {};

function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }

  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
  let io;

  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }

  return io.socket(parsed.path, opts);
}

Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
}); // .beyond/uimport/socket.io-client.4.5.3.js

var socket_io_client_4_5_3_default = lookup;
module.exports = __toCommonJS(socket_io_client_4_5_3_exports);
};

code(module, require);
_exports(module.exports);
}}});

