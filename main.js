const menuEmail = document.querySelector('.navbar-email');
const menuDes = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.product-shopping');
const productDetailCard = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.card-container');
const productDetailBody = document.querySelector('.product-detail-body');

menuEmail.addEventListener('click', toggleMenuDes);

function toggleMenuDes() {
    const isAsideClosed = shoppingCar.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCar.classList.add('inactive');
    }

    menuDes.classList.toggle('inactive');
    closeProductDetail();
}

menuBurger.addEventListener('click', toggleMenuMov);

function toggleMenuMov() {
    const isAsideClosed = shoppingCar.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCar.classList.add('inactive');
    }

    menuMovil.classList.toggle('inactive');
    closeProductDetail();
};

menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleMenuCarrito() {
    const isMovilMenuClosed = menuMovil.classList.contains('inactive');
    const isMenuDesClosed = menuDes.classList.contains('inactive');
    if(!isMovilMenuClosed || !isMenuDesClosed) {
        menuMovil.classList.add('inactive');
        menuDes.classList.add('inactive');
    }
    shoppingCar.classList.toggle('inactive');

    const isProductDetailClosed = productDetailCard.classList.contains('inactive');
    if(!isProductDetailClosed) {
        productDetailCard.classList.add('inactive');
    }
}



const productList = [];

productList.push({
    id: 1,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    id: 2,
    name: 'Moto',
    price: 400,
    image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg'
})

productList.push({
    id: 3,
    name: 'Carro',
    price: 600,
    image: 'https://cdn.motor1.com/images/mgl/X48rl/s1/1967-shelby-gt500cr-mustang-by-classic-recreations.jpg'
})

// for(let i = 0; productList.lenght; i++) es lo mismo

function ordenProduct(arr) {
    
    for (product of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('product-img');
    productImg.addEventListener('click', openProductDetailAside);
    productImg.addEventListener('click', hola);
    function hola() {
        const productDetail = [...productList];
        productDetail.find(element => {
            if(productImg.getAttribute('src') == element.image) {
                console.log(element.id)
                
                    const productElement = 
                    `
                    <img src="${element.image}" alt="${element.name}" class="product-detail-img">
    
                    <div class="product-detail-info">
                        <p>$${element.price}</p>
                        <p class="info-name">${element.name}</p>
                        <p class="info-description">With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                
                        <button class="primary-button add-to-cart-button">
                            <img src="./icons/bt_add_to_cart.svg" alt="add-cart">Add cart
                        </button>
                    </div> `;
                    
                    

                     productDetailBody.innerHTML  = productElement;

            }
    

        }) 
            
        
        
    }
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
    }
    
}

ordenProduct(productList);


 function openProductDetailAside() {
    
     productDetailCard.classList.remove('inactive');
    shoppingCar.classList.add('inactive');
    const isMenuDesClosed = menuDes.classList.contains('inactive');
    if(!isMenuDesClosed) {
        menuDes.classList.add('inactive');
    }
}
const productDetailCloseIcon = document.querySelector('.product-detail-close');
    
productDetailCloseIcon.addEventListener('click', closeProductDetail);
console.log(productDetailCloseIcon);


function openProductDetailAside() {
    
    productDetailCard.classList.remove('inactive');
   shoppingCar.classList.add('inactive');
   const isMenuDesClosed = menuDes.classList.contains('inactive');
   if(!isMenuDesClosed) {
       menuDes.classList.add('inactive');
   }
 }

 function closeProductDetail() {
    console.log("hola");
    productDetailCard.classList.add('inactive');
}