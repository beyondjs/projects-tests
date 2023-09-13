# General errors 


1. Error in 'styles.scss' of 'template/application': It attempts to import an SCSS file from 'modules/styles,' resulting in an error.

2. The `widget` property is not being recognized inside the controller.
    - modules\layouts\main\ts\controller.ts

3. TypeScript reports an error (TS_ERROR) because "beyond-layout-children" is not recognized in JSX.IntrinsicElements.
    The idea is 

    - example file: \modules\layouts\main\ts\views\index.tsx
    - [github issue](https://github.com/beyondjs/widgets/issues/2)




3. Cache error related to tsconfig location: In the 'error-tsconfig' module, the '.tsconfig' file is currently located in the wrong position, causing a Babel error. To resolve this issue, move the '.tsconfig' file to the correct location, which is the same directory as the 'module.json' file. Note that BeyondJS may not recognize this fix immediately and may require cache clearing."
    - modules\layouts\error-tsconfig

