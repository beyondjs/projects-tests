import * as React from 'react';

import {
    Options,
    Highlighter,

    // import basic APIs
    registerLanguages,
    htmlRender,
    init,
    process,
    TypeScript,
    JavaScript,
    Markdown
} from 'highlight-ts';

export function Code({language, children}) {


    const options: Options = {
        classPrefix: '',
        /* other options */
    };
    const highlighter: Highlighter<string>
        = init(htmlRender, options);
    const html = process(highlighter, 'function () {}', ['ts']);
    console.log(html)
    return (
        <pre>
            {html.value}
        </pre>
    )
}
