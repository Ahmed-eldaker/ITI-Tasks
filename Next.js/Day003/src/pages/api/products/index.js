import { products } from "../../../../Data/ProductsData"

export default function handler(req,res){
    
    if(req.method === "GET")
    {
       return res.status(200).json(products)
    }

    if(req.method === "POST")
    {
        const product = req.body.product;
        product.images=["null.jpg"];
        product.id=Date.now()
        products.push(product);
        console.log(product);
        return res.status(200).json({message:"Add Successfully"})

    }


}
