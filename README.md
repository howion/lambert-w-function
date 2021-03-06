# lambert-w-function

Javascript implementation of [**Lambert W function**](https://en.wikipedia.org/wiki/Lambert_W_function) aka **Omega Function**.

### Notes
* This library **does not** support **complex** numbers.
* This implementation **does not** support inputs **smaller** than **Euler's number** ( 2.718... ). [See on Desmos.](https://www.desmos.com/calculator/5kf9gammls)

## Installation

From [**NPM**](https://www.npmjs.com/package/lambert-w-function)

```bash
$ npm install lambert-w-function
```

## Usage

#### Import

```js
const W = require('lambert-w-function') // COMMON JS
```

```js
import W from 'lambert-w-function' // ES6 OR TYPESCRIPT
```

#### Use

```js
W($x: number, $iterations: number = 10): number
```

## Method

```
W(x) = ln(x) - ln(ln(x) - ln(ln(x) - ...))
```

from

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/442ef6693fdf0589b4ec212a6f1e73d5ecbd610e)

## License

[**MIT**](https://github.com/howion/lambert-w-function/blob/master/LICENSE)
