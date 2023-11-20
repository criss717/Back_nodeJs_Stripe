import express from 'express'   
import paymentRoutes from './routes/payment.routes.js'
import { PORT } from './routes/config.js';
import path from 'path' 
const app=express();

app.use(express.json())
app.use(paymentRoutes)

//express.static sirve para redireccionar a rutas estaticas de HTML y mostrar codigo HTML, en este caso usaremos los archivos q esten dentro de esa carpetas
app.use(express.static(path.resolve('src/public'))) //resolve sirve para q cuando se ejecute el proyecto se pone en el inicio del proyecto, no en la carpeta src

app.listen(PORT,()=>{
    console.log(`server raised in port: ${PORT}`);
})