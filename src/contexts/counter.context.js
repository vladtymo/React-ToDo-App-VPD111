import { createContext, useState } from "react";

const initialCount = 10;

export const CounterContext = createContext({
    // properties
    count: initialCount,
    // methods (setters)
    increment: () => null,
    decrement: () => null,
    reset: () => null
});

export const ContextProvider = ({ children }) => {

    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    const value = { count, decrement, increment, reset };

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}