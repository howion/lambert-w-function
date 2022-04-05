declare const W0_LIMIT_POINT: number;
/**
 * Lambert W Function for the principal branch.
 *
 * @link https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687
 * @link https://link.springer.com/content/pdf/10.1007/s10444-017-9530-3.pdf
 *
 * @author xmodar
 *
 * @param x
 * @param is_x_log - if true, x is of the form log(x)
 * @returns W_0(x)
 */
declare function lambertW0_IaconoBoyd(x: number, is_x_log?: boolean): number;
/**
 * Lambert W Function for log(x) for the principal branch.
 *
 * {@link https://gist.github.com/xmodar/baa392fc2bec447d10c2c20bbdcaf687}
 *
 * @author xmodar
 *
 * @param logX
 * @returns
 */
declare function lambertW0Log_xmodar(logX: number): number;
/**
 * Simple Lambert W Function approximation for (x <= Math.E). Note that it won't raise an error if x is greater than E.
 *
 * @author howion
 *
 * @param x
 * @param iterations
 * @returns W(x)
 */
declare function lambertW0_SimpleIteration_LT_E(x: number, iterations?: number): number;
/**
 * Simple Lambert W Function approximation for (x > Math.E). Note that it won't raise an error if x is less than E.
 *
 * @author howion
 *
 * @param x
 * @param iterations
 * @returns W(x)
 */
declare function lambertW0_SimpleIteration_GT_E(x: number, iterations?: number): number;
export { lambertW0_IaconoBoyd as lambertW0, lambertW0_IaconoBoyd, lambertW0Log_xmodar as lambertW0Log, lambertW0Log_xmodar, lambertW0_SimpleIteration_LT_E, lambertW0_SimpleIteration_GT_E, W0_LIMIT_POINT };
