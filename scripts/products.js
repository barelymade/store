const productContainers = document.querySelectorAll('.product');
const productDisplaySec = document.querySelector('.product-display-sec');
const closingButton = document.querySelector('.product-closing-button');
const productDisplayImg = productDisplaySec.querySelector('.product-pic-img');
const productDisplayName = productDisplaySec.querySelector('.display-product-name');
const productDisplayDescription = productDisplaySec.querySelector('.display-product-description');
const pImg2 = productDisplaySec.querySelector('.p-img-2 img');
const pImg1 = productDisplaySec.querySelector('.p-img-1 img');


productContainers.forEach((container) => {
    container.addEventListener('click', () => {
        const productImg = container.querySelector('img');

        if (productImg) {

        
        const productImgSrc = productImg.src;
        productDisplayImg.src = productImgSrc;
        pImg1.src = productImgSrc;

        }
       
        const productBackImg = container.querySelector('.image-back');
        if (productBackImg) {
            const productBackImgSrc = productBackImg.src;
            pImg2.src = productBackImgSrc;
        }

        const productPrice = container.querySelector('.p-price').textContent;
        const productDisplayPrice = productDisplaySec.querySelector('.product-price');
        productDisplayPrice.textContent = productPrice;

        const productName = container.querySelector('.p-title').textContent;
        productDisplayName.textContent = productName;

        const productDescription = container.querySelector('.product-description').textContent;
        productDisplayDescription.textContent = productDescription;
        
        productDisplaySec.classList.add('show');

    });
});

pImg2.addEventListener('click', () => {
    const tempSrc = productDisplayImg.src;
    productDisplayImg.src = pImg2.src;
    pImg2.src = tempSrc;
});

pImg1.addEventListener('click', () => {
    const tempSrc = productDisplayImg.src;
    productDisplayImg.src = pImg1.src;
    pImg1.src = tempSrc;
})

closingButton.addEventListener('click', () => {
    productDisplaySec.classList.remove('show');
});


