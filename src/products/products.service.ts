import { Injectable,NotFoundException } from "@nestjs/common";
import {Product} from './products.model'
@Injectable()
export class ProductsService{
    products: Product[]=[];

    insertProduct(title:string,desc:string,price:number){
         const prodId= Math.random().toString();
        const newProduct=new Product(prodId,title,desc,price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];  //data is being fetched from product and stored in a new array using spread operator 
    }
    getSingleProduct(productId: string ){
        const product = this.products.find((prod)=> prod.id===productId)
        if(!product){
            throw new NotFoundException('Could not find product');
        }
        return{...product}
    }
}