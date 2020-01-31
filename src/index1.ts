let {log:l}=console;

function info(target:object,name:string|symbol) {

    let titulo="El titulo cambiado";

    let Header=document.createElement("h1");
    Header.appendChild(document.createTextNode(titulo));
    l(Header)

    Object.defineProperty(target,name,{
        get() {
          return  Header
        }
            
    }) 

    l(target,name)

}

function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker()

function info2(target:object,name:string|symbol) {

    let titulo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam, accusamus velit perspiciatis commodi quos sapiente nesciunt magnam voluptatem id suscipit veritatis odio atque adipisci necessitatibus unde error aliquam nostrum totam assumenda impedit quidem in mollitia? Necessitatibus earum pariatur deleniti fugiat officiis qui minus esse repudiandae maxime? Sint, dicta aute";

    let Header=document.createElement("p");
    Header.appendChild(document.createTextNode(titulo));
    l(Header)

    Object.defineProperty(target,name,{
        value:Header
            
    }) 

    l(target,name)

}

// let count=0;

class htmlTemplate {
    template:HTMLTemplateElement;
    result:HTMLElement;
    // countID:number=0;

    // @info2
    // @info
    // seleccion:any;
    constructor() {
        // l(gen.next().value)
        this.template=document.querySelector("#template_html")! as HTMLTemplateElement;
        this.result=document.querySelector(".result")! as HTMLElement;
        // this.boton=document.querySelector("button[type='submit']")! as HTMLButtonElement;

        const elemTemplate=document.importNode(this.template.content,true) as DocumentFragment;
        const seleccionTemplate=elemTemplate.querySelector("#template")! as HTMLElement;

        seleccionTemplate.setAttribute("id",seleccionTemplate.id+(gen.next().value));

        const seleccionTemplateLabel=elemTemplate.querySelector("label[for='nombre']")! as HTMLElement;

        seleccionTemplateLabel.setAttribute("for","nombre-"+(seleccionTemplateLabel!.parentElement!.id.match(/.$/)!));
        const resultElem=document.querySelector(".result")! as HTMLElement;

        const seleccionTemplateInpText=elemTemplate.querySelector("input[type='text']")! as HTMLInputElement;
        l(seleccionTemplateInpText)

        seleccionTemplateInpText.setAttribute("id",(seleccionTemplateInpText!.parentElement!.getAttribute("for")! ));


        const seleccionTemplateLabelEmail=elemTemplate.querySelector("label[for='email']")! as HTMLElement;

        seleccionTemplateLabelEmail!.setAttribute("for","email-"+(seleccionTemplateLabelEmail!.parentElement!.id.match(/.$/))  );


        const seleccionTemplateInpTextEmail=elemTemplate.querySelector("input[type='email']")! as HTMLInputElement;
        l(seleccionTemplateInpTextEmail);

        seleccionTemplateInpTextEmail.setAttribute("id",(seleccionTemplateInpTextEmail!.parentElement!.getAttribute("for")!) );

        // enum forma={_i-nombre:"asdfasdf"} 

        let  {value:_nombre}=seleccionTemplateInpText;
        let {value:_email}=seleccionTemplateInpTextEmail;
        l(_nombre,_email)

        // enum forma { _inp_nombre=seleccionTemplateInpText.value,_inp_email=seleccionTemplateInpTextEmail.value}

        // const boton=seleccionTemplate.querySelector("button")! as HTMLElement;
        seleccionTemplate.addEventListener("submit",(e:Event)=>{
            e.preventDefault();
            l("Enviando forma!!!!",seleccionTemplate,seleccionTemplateInpText.value,seleccionTemplateInpTextEmail.value)
    }) 
        

        // const resultElem=document.querySelector(".result")! as HTMLElement;

        resultElem.insertAdjacentElement("beforeend",seleccionTemplate)
        // l( this.template, elemTemplate,this.result,seleccionTemplate,resultElem );

   /*      const boton=elemTemplate.querySelector(".btn")! as HTMLElement;
        l(boton) */



    }
/*             destroy() {
                l(Element)
                // this.result.remove();
            } */


/*             (document.querySelector("template button")! as HTMLButtonElement).addEventListener("submit",(e:Event)=>{
                    l("Enviando forma!!!!")
            }) */
};

let el=new htmlTemplate();
let el2=new htmlTemplate();
let el3=new htmlTemplate();
// let el3=new htmlTemplate();


