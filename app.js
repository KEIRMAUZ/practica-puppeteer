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
        fullPage:true
    })
    navegador.close();

    console.log('::Termine')
}

capturarScreen()