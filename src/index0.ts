console.log("Hola desde index0.TS !!!!!!!");

class Calculadora {

//    private lista:any[];


    constructor(private readonly Elems:any[]) {



    }

    get getElems () {
        return this.Elems;
    }



    getLength():number {
        return this.Elems.length;
    }

    filterElemsbyClass(clase:string) {
        let filtro=this.Elems.filter(elem=>{
            return elem.classList.contains(clase)
        });

        return filtro;
    }
    filterElemsNotByClass(clase:string) {
        let filtro=this.Elems.filter(elem=>{
            return !elem.classList.contains(clase)
        });

        return filtro;
    }

}


interface Coche {
    motor:number;
    encendido:boolean;
    ruedas: number;

    arrancar ():void;
};

interface Coche2 extends Coche {
    apagar ():void;

}

let coche1:Coche2;

coche1={
    motor:4,
    encendido:false,
    ruedas:2,
    arrancar:function() {
        this.encendido=true;
        console.log(this.encendido);
    },
    apagar:function() {
        this.encendido=false;
        console.log(this.encendido);
    }
    
}
coche1.arrancar();
coche1.apagar();

