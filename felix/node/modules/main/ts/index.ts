console.log("sourcemap internal node");

import * as bundle from "@beyond-js/kernel/bundle";
const b = new bundle.Bundle();

export /*bundle*/
class Main {
  print(message) {
    console.log(message);
  }
}
