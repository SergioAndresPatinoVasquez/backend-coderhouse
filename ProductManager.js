

class ProductManager{

    

    constructor(){
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }        

        //Validaciones
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Por favor ingrese todos los parámetros del producto");
            return;
        }else if(this.products.length==0){
            this.products.push(product);
            product.id=1;
        }else if(this.products.length>0){
            const validarCodigo = this.products.find((producto)=> producto.code === code)
            if(validarCodigo == undefined){
                this.products.push(product);
                product.id = this.products.length;
            }else{
                console.log(`¡El producto con codigo ${product.code} ya existe, por favor verifique!`)
            }
        }

    }

    getProductById (idProducto){

        const idProduct = this.products.findIndex(producto=> producto.id === idProducto)

        if (idProduct === -1){
            console.log(`NOT FOUND, El producto con id: ${idProducto} no ha sido encontrado, por favor verifique el id`);
            return; 
        } else {
            console.log(`El producto correspondiente al id : ${idProducto} es:`,this.products[idProduct])
        }
    }

}

//creando instancia
const manejadorProductos = new ProductManager();
// Productos vacio
console.log("ARREGLO VACIO")
console.log(manejadorProductos.getProducts());
console.log("METODO ADDPRODUCT")
manejadorProductos.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
console.log("METODO GETPRODUCTS")
console.log(manejadorProductos.getProducts());
console.log("VALIDACIONES")
//Validación Producto con codigo repetido
manejadorProductos.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
manejadorProductos.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'bc123', 25);
manejadorProductos.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc23', 25);
manejadorProductos.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'bc123', 25);
console.log(manejadorProductos.getProducts());
console.log("METODO GETPRODUCTBYID")
manejadorProductos.getProductById(2);





