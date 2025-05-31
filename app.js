import puppeteer from "puppeteer";
async function abrirPaginaWeb() {
    console.log('::Inicio')
    const navegador = await puppeteer.launch({
        headless:false,
        slowMo:800
    });

    const pagina = await navegador.newPage();
    await pagina.goto('https://example.com');
    navegador.close();

    console.log('::Termine')
}

//abrirPaginaWeb()

async function capturarScreen() {
    console.log('::Inicio')
    const navegador = await puppeteer.launch({
        headless:false,
        slowMo:800
    });
    const pagina = await navegador.newPage();
    await pagina.goto('https://utsh.edu.mx/');
    await pagina.screenshot({
        path:`./screenshoots/ejemplo-${Date.now}.png`,
        fullPage:false
    })
    navegador.close();

    console.log('::Termine')
}

//capturarScreen()

async function navegarEntrePaginas(){
    console.log('::Inicio')
    const navegador = await puppeteer.launch({
        headless:false,
        slowMo:800
    });

    const pagina = await navegador.newPage();
    await pagina.goto('https://example.com/');

    await pagina.click('div>p>a[href="https://www.iana.org/domains/example"]');

    await new Promise ((resolve)=>setTimeout(resolve,300))

    await pagina.screenshot({
        path:'./screenshoots/Pagina-visitada-Autom.png',
        fullPage:true,
    });
    navegador.close();

    console.log('::Termine')
}

//navegarEntrePaginas()

async function obtenerDatosAngular() {
    //1.- Iniciar Navegador
    console.log("Inicio de la funcion")
    const navegador = await puppeteer.launch({
        handless:false,
        slowMo:500
    })
    //2.- Crear nueva pestaña em navegador
    const pagina = await navegador.newPage()
    //3.- Visitar la pagina

    await pagina.goto('https://example.com/')
    const datos = await pagina.evaluate(()=>{
        const arregloResultados =[]
        const titulo = document.querySelector('div>h1')?.innerText;
        const parrafo = document.querySelector('div>p')?.innerText;
        const textoEnlace = document.querySelector('div>p:nth-child(3')?.innerText;

        const objetoResultado ={
            titulo:titulo,
            parrafo:parrafo,
            enlace:{
                textoEnlace:textoEnlace,
            }
        }

        arregloResultados.push(objetoResultado)
        return arregloResultados;
    })
    console.log('RESULTADOS', datos)
    navegador.close()
}

//obtenerDatosAngular()

