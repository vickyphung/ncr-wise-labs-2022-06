import { useState } from 'react';

export default (props) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 100);
      };
       
      const handleDecrement = () => {
        setCount(count - 100);
      };
      
    return (
        <>
            <h2>Score: {count}</h2>
            <section>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </section>
        </>
    )
}
