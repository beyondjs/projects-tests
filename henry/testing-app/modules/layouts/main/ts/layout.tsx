import * as React from "react";
import Header from './header';
// import type {} from '@testing/widgets';

export default class extends React.Component {
    render() {
        return (
            <div className="main-widget">
                <Header title="Testing App"/>
                <div className="content">
                    <div className="aside-panel">
                        <menu-layout title="Menu title">
                            <b>Welcome to the menu slot</b>
                            <br/>
                            This is the slot description where we say hello to the new generation front-end development!
                        </menu-layout>
                    </div>
                    <main>
                        <beyond-layout-children/>
                    </main>
                </div>
            </div>
        );
    }
}
