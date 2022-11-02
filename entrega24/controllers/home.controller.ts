import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const getHome = async (ctx: Context): Promise<void> => {

    ctx.response.status = 200;
    ctx.response.body =  `
    <!DOCTYPE html>
    <html>
      <head><title>Home</title><head>
      <body>
        <h1 style="color: blue;">Ruta principal de la pagina</h1>
      </body>
    </html>
    `;
  }


export default {getHome}
