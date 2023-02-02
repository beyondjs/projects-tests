import {listen} from '@beyond-js/ssr/listen';

const port = process.env.PORT || 6553;
listen('@beyond-playground/counter-rendering', port);