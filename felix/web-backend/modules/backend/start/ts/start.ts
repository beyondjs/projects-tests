/*
 * Initialize library beyondJS backend server
 */
import {listen} from '@beyond-js/backend/listen';

const specs = (<any>globalThis).__bee.specs;
// console.log('run listen web-backend-app', specs)
listen();