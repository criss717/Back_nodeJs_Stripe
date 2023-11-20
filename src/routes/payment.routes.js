import { Router } from "express";
import { createSession } from "../controllers/payment.controllers.js";

const router=Router()

router.post('/create-checkout-session',createSession) // para validar orden de compra, por lo general seria con ruta post y recibir la lista de compra por body del front
router.get('/success', (req,res)=>res.redirect('/success.html'))// redicreccionamos a la direccion estatica
router.get('/cancel', (req,res)=>res.redirect('/')) // redicrecciona a el inicio

export default router;