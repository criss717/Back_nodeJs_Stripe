import Stripe from "stripe";
import { SECRET_KEY } from "../routes/config.js";

const stripe= new Stripe(SECRET_KEY)

export const createSession = async (req,res)=>{
    try {
        const session= await stripe.checkout.sessions.create({
            line_items:[ //lista de compra
                {
                    price_data:{
                        product_data:{
                            name:'Laptop',
                            description:'gaming laptop'
                        },
                        currency:'usd',
                        unit_amount:20000, //equivale a $200, se debe poner en centavos
                    },
                    quantity:1,
                },
                {
                    price_data:{
                        product_data:{
                            name:'mouse',
                            description:'gaming mouse'
                        },
                        currency:'usd',
                        unit_amount:1000, //equivale a $10, se debe poner en centavos
                    },
                    quantity:1,
                }
                
            ],
            mode:'payment', // modo de pago de una sola vez
            success_url:'http://localhost:3001/success', //url direccionamineto si se aprueba
            cancel_url:'http://localhost:3001/cancel', //urle de direccionamiento si se cancela  el pago
    
        })
        return res.json(session) // retonramos la sesion q hemos generado
    } catch (error) {
        console.log(error);
    }
}