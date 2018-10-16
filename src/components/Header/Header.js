
import Component from '../../lib/Component.js'
import { goOut } from '../../lib/router.js'
import { getPackage, setLangsMenuState } from './actions.js';
import { getAssetsFolder, getOffset } from '../../utils.js';
import GPButton from '../common/GPButton.js';

export default class Header extends Component {
    constructor(className) {
        super(className, [GPButton]);
        getPackage();
    }
    
    stateToprops(state){
        return ({ 
            package: state.package || {},
            langs: (state.literals && state.literals.Langs) || {},
            actLang: window.lang || 'en',
            langsOpened: (state.App && state.App.langsOpened) || false,
            winW: state.App && state.App.winW
         })
    }

    onClickActLang(ev){
        setLangsMenuState(!this.props.langsOpened)
    }

    onClickLang(ev){
        const motogpurl = window.base_url || 'http://www.motogp.com';
        const lang = ev.target.getAttribute('langId') || 'en';

        goOut(`${motogpurl}/${lang}/videopass-help`);
    }

    onClickPackageButton(ev) {
        goOut(this.props.package.url);
    }
    
    onClickLogo(ev) {
        goOut(this.props.package.motogpUrl);
    }
    
    render() {
        const listClass = `menu--${this.props.langsOpened ? 'opened' : 'closed'}`;
        const iconClass = `fa-angle-${this.props.langsOpened ? 'up' : 'down'}`;
        const logoFile = this.props.winW > 767 ? 'videopass_white' : 'logo-marca-videopass-mobile';
        const title = `${this.props.package.title || ''} ${this.props.package.price !== 0 ? `${this.props.package.by} ${this.props.package.price_to_show}` : ''}`;
        const button = this.props.package.button;

        return(`
            <div class="Header__slimbar">
                <div class="slimbar__logo" onClick="onClickLogo">
                    <img src="${getAssetsFolder()}img/logo_motogp-com.svg" alt="motogp.com">
                </div>
                <div class="slimbar__langs">
                    <div class="slimbar__langs__actLang gptxt-footnote" onClick="onClickActLang">
                        <span>${this.props.actLang}</span>
                        <i class="fa ${iconClass}"></i>
                    </div>
                    <div class="slimbar__langs__list ${listClass}">
                        ${ Object.keys(this.props.langs).map(langId => `
                            <div class="slimbar__langs__lang" langId="${langId}" onClick="onClickLang">
                                ${this.props.langs[langId]}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="Header__package">
                <div class="package__logo">
                    <img src="${getAssetsFolder()}img/${logoFile}.svg" alt="videopass">
                </div>
                <div class="package__title gptxt--headLabel">${title}</div>
                ${button ? `
                    <GPButton id="package__button"
                        class="gpbutton gpbutton--green package__button"
                        onClick="onClickPackageButton"
                        label="${button.toLowerCase()}"
                    ></GPButton>
                ` : ''}
            </div>
        `)
    }
}

