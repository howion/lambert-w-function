# lambert-w-function

[![GitHub last commit](https://img.shields.io/github/last-commit/howion/lambert-w-function)](https://github.com/howion/lambert-w-function/commits/master)
[![npm](https://img.shields.io/npm/v/lambert-w-function)](https://www.npmjs.com/package/lambert-w-function)
[![npm](https://img.shields.io/npm/dt/lambert-w-function?label=npm%20downloads)](https://www.npmjs.com/package/lambert-w-function)
[![npm](https://img.shields.io/npm/dw/lambert-w-function?label=npm%20downloads%20weekly)](https://www.npmjs.com/package/lambert-w-function)
[![License](https://img.shields.io/npm/l/lambert-w-function)](https://github.com/howion/lambert-w-function/blob/master/LICENSE)

This is **efficient** and **zero-dependency** JavaScript implementations for the [**Lambert W function**](https://en.wikipedia.org/wiki/Lambert_W_function) on the principal branch `W_0`.

Please note that this library does **not** support **complex** numbers and only supports the **principal branch**.

Currently there are three implementations:

* Naive implementation ([**desmos**](https://www.desmos.com/calculator/rhbaludwth)) that make use of iterative method to furnish (relatively poor) approximate solution.
* The [**work**](https://link.springer.com/content/pdf/10.1007/s10444-017-9530-3.pdf) of Roberto Iacono and John P. Boyd with a maximum relative error 5E-3. This is the **default** and the one you should use.
* Implementation provided by [**xmodar**](https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687) for `log(x)` as input.

## Installation

From [**npm**](https://www.npmjs.com/package/lambert-w-function) via npm

```bash
npm install lambert-w-function
yarn add lambert-w-function
bun add lambert-w-function
pnpm add lambert-w-function
```

## Import

For CommonJS

```js
const {
    lambertW0, // same as lambertW0_IaconoBoyd
    lambertW0_IaconoBoyd,
    lambertW0Log, // same as lambertW0Log_xmodar
    lambertW0Log_xmodar,
    lambertW0_SimpleIteration_LT_E,
    lambertW0_SimpleIteration_GT_E,
    W0_LIMIT_POINT
} = require('lambert-w-function')
```

otherwise

```js
import { ... } from 'lambert-w-function'
```

## Usage / Documentation

### `lambertW0`

An approximation with a maximum relative error 5E-3. Same as `lambertW0Log` if `is_x_log` set to true.

```js
lambertW0(x: number, is_x_log = false): number
```

### `lambertW0Log`

Computes W(y) where y is of the form log(x).

```js
// See: https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687
lambertW0Log(logX: number): number
```

### `lambertW0_SimpleIteration_LT_E`

Simple iterative Lambert W function approximation for (x <= Math.E). Note that it won't raise an error if x is greater than E.

```js
lambertW0_SimpleIteration_LT_E(x: number, iterations = 10): number
```

### `lambertW0_SimpleIteration_GT_E`

Simple iterative Lambert W function approximation for (x > Math.E). Note that it won't raise an error if x is less than E.

```js
lambertW0_SimpleIteration_GT_E(x: number, iterations = 10): number
```

## License

This project is licensed under the [**MIT**](https://github.com/howion/lambert-w-function/blob/master/LICENSE) License meaning you're free to use, modify, and distribute it however you like. Go build something awesome.
