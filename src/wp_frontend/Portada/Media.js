import { positions } from '../App/App.js';

const Media = (props,state) => {

    const {thumb,info,title,nano,position} = {...props}
    const {nanoHover} = {...state};
    
    return(`
        <div id="bar" class="media__bar">
            <div class="media__nano" onClick="onClickNano" onMouseOver="onMouseOverNano" onMouseOut="onMouseOutNano">
                ${nano.name} ${plusAnim(position, nanoHover)}
            </div>
            <div class="media__thumbnail">
                <div class="media__thumbnail__selected" style="background-image:url(${thumb})"></div>
                <div class="media__thumbnail__default"></div>
                ${title ? `
                    <span>${title}</span>
                `: ''}
            </div>
            <div class="media__info">
                ${info || `
                    <p class="info__address">${nano.address}</p>
                    <a href="mailto:${nano.mail}" class="info__mail">${nano.mail}</a>
                    <div class="">${nano.phone.map(phone => `
                        <a href="tel:${phone.replace(/\s/g,'')}" class="info__phone">${phone}</a>
                    `).join('')}</div>
                    <div class="info__exhibitions" onClick="onClickNano">
                        exhibitions  ${plusAnim(position, nanoHover)}
                    </div>
                `}
            </div>
        </div>
    `)
}

const plusAnim = (position, hover) => {
    return(`
        <div class="plusAnim ${hover ? 'hover' : ''}">
            <div class="lineH"></div>
            <div class="lineV1 position--${position}"></div>
            <div class="lineV2 position--${position}"></div>
        </div>
    `)
}

export default Media;