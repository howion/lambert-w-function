const { E, log, exp } = Math
const W0_LIMIT_POINT = -(1 / E)

/**
 * Lambert W function for the principal branch.
 *
 * {@link https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687}
 * {@link https://link.springer.com/content/pdf/10.1007/s10444-017-9530-3.pdf}
 *
 * @author xmodar
 *
 * @param x
 * @param is_x_log - if true, x is of the form log(x)
 * @returns W_0(x)
 */
function lambertW0_IaconoBoyd(x: number, is_x_log = false): number {
    if (is_x_log) return lambertW0Log_xmodar(x)
    if (x >= 0) return lambertW0Log_xmodar(log(x)) // handles [0, inf]
    const xE = x * E
    if (Number.isNaN(x) || xE < -1) return NaN // handles NaN and [-inf, -1 / E)
    const y = (1 + xE) ** 0.5
    const z = log(y + 1)
    const n = 1 + /* b= */ 1.1495613113577325 * y
    const d = 1 + /* c= */ 0.4549574005654461 * z
    let w = -1 + /* a= */ 2.036 * log(n / d)
    w *= log(xE / w) / (1 + w)
    w *= log(xE / w) / (1 + w)
    w *= log(xE / w) / (1 + w)
    return Number.isNaN(w) ? (xE < -0.5 ? -1 : x) : w // handles end points
}

/**
 * Lambert W function for log(x) for the principal branch.
 *
 * {@link https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687}
 *
 * @author xmodar
 *
 * @param logX
 * @returns
 */
function lambertW0Log_xmodar(logX: number): number {
    if (Number.isNaN(logX)) return NaN // handles NaN
    const logXE = +logX + 1
    const logY = 0.5 * log1Exp(logXE)
    const logZ = log(log1Exp(logY))
    const logN = log1Exp(/* log(b)= */ 0.13938040121300527 + logY)
    const logD = log1Exp(/* log(c)= */ -0.7875514895451805 + logZ)
    let w = -1 + /* a= */ 2.036 * (logN - logD)
    w *= (logXE - log(w)) / (1 + w)
    w *= (logXE - log(w)) / (1 + w)
    w *= (logXE - log(w)) / (1 + w)
    return Number.isNaN(w) ? (logXE < 0 ? 0 : Infinity) : w // handles end points
}

/**
 * Computes log(1 + exp(x)) without precision overflow.
 *
 * {@link https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687}
 * {@link https://en.wikipedia.org/wiki/LogSumExp}
 * @author xmodar
 *
 * @param x
 * @returns log(1 + exp(x))
 */
function log1Exp(x: number): number {
    return x <= 0 ? Math.log1p(Math.exp(x)) : x + log1Exp(-x)
}

/**
 * Simple iterative Lambert W function approximation for (x <= Math.E). Note that it won't raise an error if x is greater than E.
 *
 * @author howion
 *
 * @param x
 * @param iterations
 * @returns W(x)
 */
function lambertW0_SimpleIteration_LT_E(x: number, iterations = 10): number {
    let y = 1

    do {
        y = x / exp(y)
        iterations--
    } while (iterations > 0)

    return y
}

/**
 * Simple iterative Lambert W function approximation for (x > Math.E). Note that it won't raise an error if x is less than E.
 *
 * @author howion
 *
 * @param x
 * @param iterations
 * @returns W(x)
 */
function lambertW0_SimpleIteration_GT_E(x: number, iterations = 10): number {
    let y = 1

    do {
        y = log(x) - log(y)
        iterations--
    } while (iterations > 0)

    return y
}

export {
    lambertW0_IaconoBoyd as lambertW0,
    lambertW0_IaconoBoyd,
    lambertW0Log_xmodar as lambertW0Log,
    lambertW0Log_xmodar,
    lambertW0_SimpleIteration_LT_E,
    lambertW0_SimpleIteration_GT_E,
    W0_LIMIT_POINT
}
