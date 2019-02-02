import { html } from '../../lib/lit-html/lit-html.js';

import Component from '../../lib/Component.js'
import { setImageError } from './actions.js';

const colors = ['#64AF8C','#76C3E7','#FDBE4C','#694C9E','#6A4D9F','#6e55e0','#4c8264','#bf9654','#f28500'];
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function getNewDepartmentColor(DepartmentId){
    const newColor =  DepartmentId ? colors.pop() || getRandomColor() : '#000000';
    departmentColors[DepartmentId] = newColor;

    return newColor;
}
const departmentColors = {};

export default class User extends Component {
    constructor(className) {
        super(className);
    }
    
    get departmentColor(){
        const myDepartment = this.props.user && this.props.user.DepartmentId;
        return departmentColors[myDepartment] || getNewDepartmentColor(myDepartment)
    }
    
    get UserId(){
        return this.domProps.id;
    }

    stateToprops(state){
        const user = {...(state.users || {})[this.UserId]} || {};
        return ({
            user
        })
    }
    
    onImageError(ev){
        const UserId = this.UserId;
        setImageError(UserId);
    }

    render() {
        const {user} = {...this.props}
        const {ImageURL,imageError,Acronym='',FirstName='',LastName='',JobTitleId='···',DepartmentId='···',_startTime=0,_freeTime} = {...user};
        
        const name = `${FirstName} ${LastName}`;
        const startDay = new Date(_startTime).toLocaleString('es-ES', {
            day: "2-digit",
            month: "2-digit",
            year:'numeric'
        }).split(' ')[0];

        return(html`
            <div class="User__info">
                <div class="User__avatar" style="background-color:${this.departmentColor}">
                    ${ImageURL && !imageError ? html`
                        <img src="${ImageURL}" 
                            class="avatar__image" 
                            alt="${name}"
                            @error="${(ev)=> this.onImageError(ev)}"
                        />
                    ` : html`
                        <div class="avatar__Acronym">${Acronym}</div>
                    `}    
                </div>
                <div class="User__data">
                    <div class="User__name">${name}</div>
                    <div class="User__profession">${JobTitleId} | ${DepartmentId}</div>
                </div>
            </div>
            <div class="User__id">${this.UserId}</div>
            <div class="User__freeTime">
                <div class="freeTime__bar">
                    <div class="freeTime__out" style="width:${_freeTime}%"></div>
                </div>
            </div>
            <div class="User__startTime">${startDay}</div>
        `)
    }
}

