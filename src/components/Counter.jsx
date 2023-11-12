import { useState } from "react";

function Counter() {

    // useState(dafault_value) - create state data
    // returns arr[0] - value
    // returns arr[1] - setter

    const [count, setCount] = useState(10);
    // const count = arr[0];
    // const setter = arr[1];

    // ... logic ...
    //let count = 10;

    const increment = () => {
        console.log(`${count} -> ${count + 1}`);

        //++count;           // does not affect DOM
        setCount(count + 1); // affects DOM
    }
    const reset = () => setCount(0);

    return (
        <>
            <h2>Counter</h2>
            <p>Current value: [{count == 0 ? "-" : count}]</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Counter;