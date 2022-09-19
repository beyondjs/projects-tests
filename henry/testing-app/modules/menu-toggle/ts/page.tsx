import * as React from "react";

export /*bundle*/
const Widget = (props): JSX.Element => {
    const ref = React.useRef();
    const [toggle, setToggle] = React.useState(false);
    const handleToggle = () => setToggle(!toggle);


    React.useEffect(() => {
        const clickOutside = (e: React.SyntheticEvent): void => {
            const isSameNode = ref.current === e.target || ref.current === e.currentTarget;
            const isAChildren = ref.current.contains(e.target) || ref.current.contains(e.currentTarget);


            if (!isSameNode && isAChildren && toggle) setToggle(false);
        };

        props.component.shadowRoot.addEventListener('click', clickOutside);
        return () => props.component.shadowRoot.removeEventListener('click', clickOutside);
    });

    return (
        <div ref={ref} className="content-toolbar justify-between">
            <h1 className="title-toolbar fadeIn">TITLE</h1>
            <h3 onClick={handleToggle} className="right-icon">open</h3>
            {toggle &&
            <nav className="nav content">
                <ul>
                    <a>Opcion 1</a>
                    <a>Opcion 2</a>
                </ul>
            </nav>
            }
        </div>
    );
}
