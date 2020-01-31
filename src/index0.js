"use strict";
console.log("Hola desde index0.TS !!!!!!!");
class Calculadora {
    //    private lista:any[];
    constructor(Elems) {
        this.Elems = Elems;
    }
    get getElems() {
        return this.Elems;
    }
    getLength() {
        return this.Elems.length;
    }
    filterElemsbyClass(clase) {
        let filtro = this.Elems.filter(elem => {
            return elem.classList.contains(clase);
        });
        return filtro;
    }
    filterElemsNotByClass(clase) {
        let filtro = this.Elems.filter(elem => {
            return !elem.classList.contains(clase);
        });
        return filtro;
    }
}
;
let coche1;
coche1 = {
    motor: 4,
    encendido: false,
    ruedas: 2,
    arrancar: function () {
        this.encendido = true;
        console.log(this.encendido);
    },
    apagar: function () {
        this.encendido = false;
        console.log(this.encendido);
    }
};
coche1.arrancar();
coche1.apagar();
