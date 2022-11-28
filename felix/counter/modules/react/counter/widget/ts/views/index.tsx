import * as React from "react";

export /*bundle*/
function Widget({store: counter}) {
    console.log(1, counter.value)
    const [count, setCount] = React.useState(counter.value.count);
    const add = () => {
        counter.set(count + 1);
        setCount(counter.value.count);
    }

    return (
        <div className="item">
            <h1>{count}</h1>
            <button onClick={add}>click</button>
        </div>
    );
}