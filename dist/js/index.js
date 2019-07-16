"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ln($x) { return Math.log($x); }
function W($x, $iterations) {
    if ($iterations === void 0) { $iterations = 10; }
    if ($x <= Math.E)
        throw new Error('This library cannot compute the W(x) value of numbers less than Euler\'s number.');
    if ($iterations < 1)
        throw new Error('Iterations cannot be smaller than 1.');
    var $result = ln($x);
    do {
        $result = ln($x) - ln($result);
        $iterations--;
    } while ($iterations > 0);
    return $result;
}
exports.W = W;
exports.default = W;
