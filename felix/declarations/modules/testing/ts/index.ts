import {Otro} from "@playground/declarations/otro";
import config from "@playground/declarations/config";
import {module} from "beyond_context";

export /*bundle*/
class Testing {
    ursula() {
        console.log(1, config);
        console.log(2, module);
        console.log(3, Otro);
    }
}