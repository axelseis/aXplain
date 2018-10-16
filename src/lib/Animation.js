
export default class Animation {
    constructor(prop,element){
        this.prop = prop;
        this.element = element;
        this.endValue = null;
    }

    _animate(){
        if(Math.abs(this.endValue - this.element[this.prop]) > 1){
            this.element[this.prop] += (this.endValue - this.element[this.prop])/12;
            requestAnimationFrame(() => {
                this._animate()
            })
        }
        else {
            this.element[this.prop] = this.endValue;
        }
    }

    play(value){
        this.endValue = value;
        this._animate();
    }
}
