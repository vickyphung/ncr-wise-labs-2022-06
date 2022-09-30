import { useState } from 'react';
import CountSpan from './CountSpan';

export default (props) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
      };
       
      const handleDecrement = () => {
        setCount(count - 1);
      };
      
    return (
        <>
            {/* <CountSpan count={count} /> */}
            <span>Current Count: {count}</span>
            <section>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </section>
        </>
    )
}



// const countState = useState(0);
// console.log('countState -', countState);

// const count = countState[0];
// const setCount = countState[1];

// const handleIncrement = () => {};
// const handleDecrement = () => {};


// <span>Current Count: 0</span>
// <section>
    //  <button>+</button>
    // <button>-</button>
// </section>

// <button onClick={() => setCount(count + 1)}>+</button>
//  <button onClick={() => setCount(count - 1)}>-</button> 