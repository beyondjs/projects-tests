import * as React from "react";

export /*bundle*/
class Layout extends React.Component {
    render() {
        return (
            <div className="main-widget">
                <div className="content">
                    <main>
                        <beyond-layout-children/>
                    </main>
                    <footer className="fixed-footer">
                        Layout de footer
                    </footer>
                </div>
            </div>
        );
    }
}
