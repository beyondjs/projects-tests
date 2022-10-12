/**
 * This file centralizes the imports from the beyond/engine repository required to
 * create tests cases of the builder.
 *
 * The imports are:
 * global engine
 *
 *
 * @type {string}
 */

const engine = `../../../../beyond/engine`;
const path = `${engine}/lib/inspect/service/builder/models`;
require(`${engine}/lib/global`);

module.exports = require(`${path}`);
