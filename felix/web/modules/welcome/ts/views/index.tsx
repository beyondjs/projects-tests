import React from 'react';
import {module} from "beyond_context";
import {useTexts} from "@tests/web-app/use-texts";

export /*bundle*/
function Page(): JSX.Element {
    const [ready, texts] = useTexts(module.specifier);

    // console.log(123, ready, texts)

    return (
        <>
            <div className="page__container">
                <h1 className="beyond">Welcome!</h1>
            </div>
        </>
    );
}
