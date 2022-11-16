import * as React from "react";

export /*bundle*/
function Widget() {
    const [count, setCount] = React.useState(0);
    const add = () => setCount(count + 1);

    return (
        <div className="item" onClick={add}>
            <h3>React counter</h3>
            <span>clicks here: {count}</span>
        </div>
    );
}
