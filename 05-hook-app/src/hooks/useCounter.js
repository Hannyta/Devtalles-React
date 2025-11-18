import { useState } from 'react';

export const useCounter = ( initiaValue = 10 ) => {

    const [counter, setCounter] = useState(initiaValue)

    const increment = ( value = 1) => {
        setCounter( counter + value );
    }

    const reset = () => {
        setCounter( initiaValue );
    }

    const decrement = (value = 1) => {
        if ( counter === 0) return;

        setCounter( counter - value );
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}