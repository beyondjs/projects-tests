import * as React from "react";
import {City} from "@test/testing-app/weather";

export /*bundle*/
class Widget extends React.Component {
    render() {
        console.log('City is imported', City);
        (window as any).City = City;
        return (<>Backend test Page</>);
    }
}
