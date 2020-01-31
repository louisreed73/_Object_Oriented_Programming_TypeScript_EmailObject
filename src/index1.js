"use strict";
let { log: l } = console;
function info(target, name) {
    let titulo = "El titulo cambiado";
    let Header = document.createElement("h1");
    Header.appendChild(document.createTextNode(titulo));
    l(Header);
    Object.defineProperty(target, name, {
        get() {
            return Header;
        }
    });
    l(target, name);
}
function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}
var gen = idMaker();
function info2(target, name) {
    let titulo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam, accusamus velit perspiciatis commodi quos sapiente nesciunt magnam voluptatem id suscipit veritatis odio atque adipisci necessitatibus unde error aliquam nostrum totam assumenda impedit quidem in mollitia? Necessitatibus earum pariatur deleniti fugiat officiis qui minus esse repudiandae maxime? Sint, dicta aute";
    let Header = document.createElement("p");
    Header.appendChild(document.createTextNode(titulo));
    l(Header);
    Object.defineProperty(target, name, {
        value: Header
    });
    l(target, name);
}
// let count=0;
class htmlTemplate {
    // countID:number=0;
    // @info2
    // @info
    // seleccion:any;
    constructor() {
        // l(gen.next().value)
        this.template = document.querySelector("#template_html");
        this.result = document.querySelector(".result");
        // this.boton=document.querySelector("button[type='submit']")! as HTMLButtonElement;
        const elemTemplate = document.importNode(this.template.content, true);
        const seleccionTemplate = elemTemplate.querySelector("#template");
        seleccionTemplate.setAttribute("id", seleccionTemplate.id + (gen.next().value));
        const seleccionTemplateLabel = elemTemplate.querySelector("label[for='nombre']");
        seleccionTemplateLabel.setAttribute("for", "nombre-" + (seleccionTemplateLabel.parentElement.id.match(/.$/)));
        const resultElem = document.querySelector(".result");
        const seleccionTemplateInpText = elemTemplate.querySelector("input[type='text']");
        l(seleccionTemplateInpText);
        seleccionTemplateInpText.setAttribute("id", (seleccionTemplateInpText.parentElement.getAttribute("for")));
        const seleccionTemplateLabelEmail = elemTemplate.querySelector("label[for='email']");
        seleccionTemplateLabelEmail.setAttribute("for", "email-" + (seleccionTemplateLabelEmail.parentElement.id.match(/.$/)));
        const seleccionTemplateInpTextEmail = elemTemplate.querySelector("input[type='email']");
        l(seleccionTemplateInpTextEmail);
        seleccionTemplateInpTextEmail.setAttribute("id", (seleccionTemplateInpTextEmail.parentElement.getAttribute("for")));
        // enum forma={_i-nombre:"asdfasdf"} 
        let { value: _nombre } = seleccionTemplateInpText;
        let { value: _email } = seleccionTemplateInpTextEmail;
        l(_nombre, _email);
        // enum forma { _inp_nombre=seleccionTemplateInpText.value,_inp_email=seleccionTemplateInpTextEmail.value}
        // const boton=seleccionTemplate.querySelector("button")! as HTMLElement;
        seleccionTemplate.addEventListener("submit", (e) => {
            e.preventDefault();
            l("Enviando forma!!!!", seleccionTemplate, seleccionTemplateInpText.value, seleccionTemplateInpTextEmail.value);
        });
        // const resultElem=document.querySelector(".result")! as HTMLElement;
        resultElem.insertAdjacentElement("beforeend", seleccionTemplate);
        // l( this.template, elemTemplate,this.result,seleccionTemplate,resultElem );
        /*      const boton=elemTemplate.querySelector(".btn")! as HTMLElement;
             l(boton) */
    }
}
;
let el = new htmlTemplate();
let el2 = new htmlTemplate();
let el3 = new htmlTemplate();
// let el3=new htmlTemplate();
