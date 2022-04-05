"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.W0_LIMIT_POINT = exports.lambertW0_SimpleIteration_GT_E = exports.lambertW0_SimpleIteration_LT_E = exports.lambertW0Log_xmodar = exports.lambertW0Log = exports.lambertW0_IaconoBoyd = exports.lambertW0 = void 0;
var E = Math.E, PI = Math.PI, log = Math.log, exp = Math.exp;
var W0_LIMIT_POINT = -(1 / E);
exports.W0_LIMIT_POINT = W0_LIMIT_POINT;
function lambertW0_IaconoBoyd(x, is_x_log) {
    if (is_x_log === void 0) { is_x_log = false; }
    if (is_x_log)
        return lambertW0Log_xmodar(x);
    if (x >= 0)
        return lambertW0Log_xmodar(log(x));
    var xE = x * E;
    if (isNaN(x) || xE < -1)
        return NaN;
    var y = Math.pow((1 + xE), 0.5);
    var z = log(y + 1);
    var n = 1 + 1.1495613113577325 * y;
    var d = 1 + 0.4549574005654461 * z;
    var w = -1 + 2.036 * log(n / d);
    w *= log(xE / w) / (1 + w);
    w *= log(xE / w) / (1 + w);
    w *= log(xE / w) / (1 + w);
    return isNaN(w) ? (xE < -0.5 ? -1 : x) : w;
}
exports.lambertW0 = lambertW0_IaconoBoyd;
exports.lambertW0_IaconoBoyd = lambertW0_IaconoBoyd;
function lambertW0Log_xmodar(logX) {
    if (isNaN(logX))
        return NaN;
    var logXE = +logX + 1;
    var logY = 0.5 * log1Exp(logXE);
    var logZ = log(log1Exp(logY));
    var logN = log1Exp(0.13938040121300527 + logY);
    var logD = log1Exp(-0.7875514895451805 + logZ);
    var w = -1 + 2.036 * (logN - logD);
    w *= (logXE - log(w)) / (1 + w);
    w *= (logXE - log(w)) / (1 + w);
    w *= (logXE - log(w)) / (1 + w);
    return isNaN(w) ? (logXE < 0 ? 0 : Infinity) : w;
}
exports.lambertW0Log = lambertW0Log_xmodar;
exports.lambertW0Log_xmodar = lambertW0Log_xmodar;
function log1Exp(x) {
    return x <= 0 ? Math.log1p(Math.exp(x)) : x + log1Exp(-x);
}
function lambertW0_SimpleIteration_LT_E(x, iterations) {
    if (iterations === void 0) { iterations = 10; }
    var y = 1;
    do {
        y = x / exp(y);
        iterations--;
    } while (iterations > 0);
    return y;
}
exports.lambertW0_SimpleIteration_LT_E = lambertW0_SimpleIteration_LT_E;
function lambertW0_SimpleIteration_GT_E(x, iterations) {
    if (iterations === void 0) { iterations = 10; }
    var y = 1;
    do {
        y = log(x) - log(y);
        iterations--;
    } while (iterations > 0);
    return y;
}
exports.lambertW0_SimpleIteration_GT_E = lambertW0_SimpleIteration_GT_E;
