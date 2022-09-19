import * as React from 'react';
import * as PerfectScrollbar from 'perfect-scrollbar';

export /*bundle*/
function Page(): JSX.Element {
    console.log('PerfectScrollbar ', PerfectScrollbar.default)
    return (
        <div>
            Content
            <ul>
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
                <li>option 4</li>
                <li>option 5</li>
                <li>option 6</li>
            </ul>
        </div>
    );
}