import {ReactWidgetController} from '@beyond-js/react-widgets/base';

export /*bundle*/
class Controller extends ReactWidgetController {
    // ciclo de vida del widget
    /**
     * Todos los widgets de beyond tienen un codigo unico
     * que se encarga de cargar el bandle del widget e instancia
     * el controlador que maneja al componente.
     */



    initialise() {
        super.initialise();
        window.setTimeout(() => {
            const css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
            this.component.shadowRoot.append(css);
        }, 1000);

    }
}
