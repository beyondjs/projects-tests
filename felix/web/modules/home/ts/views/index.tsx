import React from 'react';
import {useBinder} from '@beyond-js/react-18-widgets/hooks';
import * as Bundle from '@beyond-js/kernel/bundle';
declare const bimport: (module: string) => any;

export /*bundle*/
function Page(): JSX.Element {
    const test = async () => console.log(12345, await bimport('@beyond-js/react-18-widgets/hooks'))
    test();

    console.log(12, Bundle)
    console.log('test sourcemaps', useBinder)
    const change = (): void => console.log('actualizamos')
    useBinder([], change, 'change');

    return (
        <>
            <div className="page__container">
                <h1>Home<span className="beyond">BeyondJS</span>!</h1>
                <input type="text" onChange={change}/>
            </div>
        </>
    );
}
