const IVA = 21
class Product {
    constructor(id, name, img, price) {
        this.id = id
        this.name = name
        this.img = img
        this.price = price
    }
}

const products = [
    new Product(1,'iPhoneXs Pink', 'https://upload.wikimedia.org/wikipedia/commons/3/33/IPhone_7_-_A1778_Rose_Gold_-_Back_Right_-_Transparent_BG_no_shadow.png', 600),
    new Product(2,'Xpres Glow', 'https://djgc3ak02fkyp.cloudfront.net/media/catalog/product/cache/1/small_image/672x/602f0fa2c1f0d1ba5e241f914e856ff9/x/p/xpress_glow_1_.png', 20),
]

function init() {
   // Añadir productos al carrito
}

function removeProduct(id) {
    // Quitar el producto del array
}

function actualizarIconoCarrito() {
    // Modificar el numero del carrito segun los productos que haya en el carrito
}

function total() {
    // Calcular el total de precio del todos los articulos del carrito
    let subtotal = 0

    let total_iva = subtotal * (IVA / 100)

    let total = subtotal + total_iva
}


window.addEventListener('load', () => init() )