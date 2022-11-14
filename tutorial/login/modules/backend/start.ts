/*
 * Initialize the @beyond-js/backend package server
 */
import {listen} from '@beyond-js/backend/listen';

console.log('backend port', 1234)
listen(1234);