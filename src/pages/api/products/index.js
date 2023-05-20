import { Pool, pool } from "../../../../config/db";

export default async function handler(req, res){
    // console.log(req.method);
    
    const getProducts = async (req, res)=>{
        try {
            const [result] = await pool.query('SELECT * FROM product')
            // console.log(result);
            return res.status(200).json(result)
        }   catch (error) {
            return res.status(500).json({error})
        }
    }

    const saveProduct = async (req, res)=>{
    try {
        const {name, description, price} = req.body
        console.log('creating a product');
        console.log(req.body);
        const [result] = await pool.query('INSERT INTO product SET ?', {
            name,
            description,
            price,
        });
        console.log(result);
        return res.status(200).json({name, price, description, id: result.insertId})
        // return res.status(200).json('Creating products')
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
    }

    switch(req.method){
        case 'GET':
            return await getProducts(req, res);
        case 'POST':{
            return await saveProduct(req, res);
        }
    }

    

 
    }

    // if(req.method === 'POST'){
    //     // console.log('creating a product');
    //     console.log(req.body);
    //     return res.status(200).json('creating products')
    // }else {
       
    // }
