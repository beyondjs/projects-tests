import {Events} from "@beyond-js/events/events";

export /*bundle*/
class YourClass extends Events {
    funny() {
        console.log('funny.event')
        this.trigger("funny.event");
    }

    executeChange() {
        this.trigger();
    }
}