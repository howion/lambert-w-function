# lambert-w-function

![GitHub last commit](https://img.shields.io/github/last-commit/howion/lambert-w-function) ![npm](https://img.shields.io/npm/dt/lambert-w-function?label=npm%20downloads) ![npm](https://img.shields.io/npm/dw/lambert-w-function?label=npm%20downloads%20weekly) ![NPM](https://img.shields.io/npm/l/lambert-w-function) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/lambert-w-function)

This is a JavaScript implementation for the [**Lambert W Function**](https://en.wikipedia.org/wiki/Lambert_W_function) which is also known as **Omega Function** on the principal branch `W_0`.

Please note that this library **does not** support **complex** numbers and only supports the **principal branch**.

## Installation

From [**npm**](https://www.npmjs.com/package/lambert-w-function) via npm

```bash
npm install lambert-w-function
```

or via yarn

```bash
yarn add lambert-w-function
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

```js
// A good approximation with a maximum relative error 5E-3
// Same as lambertW0Log(x) if is_x_log set to true.
// -
// See: https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687
// See: https://link.springer.com/content/pdf/10.1007/s10444-017-9530-3.pdf
lambertW0(x: number, is_x_log = false): number

// Computes W(y) where y of the form log(x)
// -
// See: https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687
lambertW0Log(logX: number): number

// Approximates W(X) with a straightforward algoritm for x <= E (respectively
// x > E) but it is highly recommended to use lambertW0 instead.
// -
// See: https://doi.org/10.1145%2F258726.258783
lambertW0_SimpleIteration_LT_E(x: number, iterations = 10): number
lambertW0_SimpleIteration_GT_E(x: number, iterations = 10): number
```

You can check out the [**Desmos Demo**](https://www.desmos.com/calculator/rhbaludwth) to preview simple iteration algorithm up to 20 iterations.

## License

This project is licensed under the [**MIT**](https://github.com/howion/lambert-w-function/blob/master/LICENSE) license so that you can just do whatever you want with it.
