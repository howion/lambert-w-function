// LOGORITHM FUNCTION
function ln($x) { return Math.log($x); }

/**
 * Computes Y from X=Y*exp(Y)
 * 
 * @param $x
 * @param $iterations - Precision
 */
function W($x: number, $iterations: number = 10): number
{
    // CHECK GIVEN PARAMETERS
    if ( $x < Math.E ) throw new Error('This library cannot compute the W(x) value of numbers less than Euler\'s number.');
    if ( $iterations < 1 ) throw new Error('Iterations cannot be smaller than 1.');

    let $result = 1;

    // ln(x/ln(x/ln(x...))))
    do
    {
        $result = ln($x) - ln($result);
        $iterations--;
    }
    while ( $iterations > 0 )

    return $result;
}

export
{
    W,
    W as default
}
