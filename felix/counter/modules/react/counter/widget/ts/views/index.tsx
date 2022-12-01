import * as React from "react";

export /*bundle*/
function Widget({store: counter}) {
    const [state, setState] = React.useState({counter: counter.value.count});
    counter.bind('change', () => setState({counter: counter.value.count}));
    const add = () => counter.set(counter.value.count);

    return (
        <div className="main">
            <h1>{state.counter}</h1>
            <button onClick={add}>click</button>
        </div>
    );
}