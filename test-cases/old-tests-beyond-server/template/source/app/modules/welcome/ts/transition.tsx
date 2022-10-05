import React from 'react'
import {Transition} from 'react-transition-group'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    padding: 20,
    display: 'inline-block',
    backgroundColor: '#8787d8'
};

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
};

const Fade = ({in: inProp}) => {
    return (<Transition in={inProp} timeout={duration}>
        {(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                I'm A fade Transition!
            </div>
        )}
    </Transition>);
};

export class Example extends React.Component {
    state = {show: false};

    handleToggle() {
        this.setState((state) => {
            const {show} = (state as any);
            return {
                show: !show
            }
        });
    }

    render() {
        const {show} = this.state;
        return (
            <div>
                <button onClick={() => this.handleToggle()}>
                    Click to toggle
                </button>
                <div>
                    <Fade in={!!show}/>
                </div>
            </div>
        )
    }
}
