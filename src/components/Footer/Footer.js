import Component from '../../lib/Component.js';
import { getAssetsFolder } from '../../utils.js';
import { modes } from '../Landing/actions.js';

export default class Footer extends Component {
    constructor(clip) {
        super(clip);
    }

    stateToprops(state){
        return({
            literals: state.literals ? state.literals.Footer : {},
            mode: state.App && state.App.mode
        })
    }

    render() {
        return (`
            <div class="Footer__content">
            ${this.props.mode === modes.DESKTOP ? `
                <img class="Footer__logo" src="${getAssetsFolder()}img/comodo_icon_desktop.png" />
                <div class="Footer__info">
                    <div class="Footer__title gptxt--legal">${this.props.literals.title}</div>
                    <div class="Footer__description gptxt--legal">${this.props.literals.description}</div>
                </div>
            ` : `
                <div class="Footer__info">
                    <img class="Footer__logo" src="${getAssetsFolder()}img/comodo_icon_desktop.png" />
                    <div class="Footer__title gptxt--legal">${this.props.literals.title}</div>
                </div>
                <div class="Footer__description gptxt--legal">${this.props.literals.description}</div>
            `}
            </div>
        `)
    }
}

/*
            ${this.props.mode === modes.DESKTOP ? `
                <img class="Footer__logo" src="${getAssetsFolder()}img/comodo_icon_desktop.png" />
                <div class="Footer__info">
                    <div class="Footer__title gptxt--legal">${literals.title}</div>
                    <div class="Footer__description gptxt--legal">${literals.description}</div>
                </div>
            ` : `
                <div class="Footer__info">
                    <img class="Footer__logo" src="${getAssetsFolder()}img/comodo_icon_desktop.png" />
                    <div class="Footer__title gptxt--legal">${literals.title}</div>
                </div>
                <div class="Footer__description gptxt--legal">${literals.description}</div>
            `}
*/
