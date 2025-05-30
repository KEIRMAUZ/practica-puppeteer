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
        path:"./screenshoots/ejemplo.png",
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

navegarEntrePaginas()