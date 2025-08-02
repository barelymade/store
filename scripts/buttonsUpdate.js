productContainers.forEach((container) => {
  container.addEventListener('click', () => {


    const addToCartButton = productDisplaySec.querySelector('.snipcart-add-item');
    const productId = container.querySelector('.snipcart-add-item').getAttribute('data-item-id');
    const productName = container.querySelector('.snipcart-add-item').getAttribute('data-item-name');
    const productPrice = container.querySelector('.snipcart-add-item').getAttribute('data-item-price');
    const productDescription = container.querySelector('.snipcart-add-item').getAttribute('data-item-description');
    const productImage = container.querySelector('.snipcart-add-item').getAttribute('data-item-image');
    const productColorOptions = container.querySelector('.snipcart-add-item').getAttribute('data-item-custom1-options');
    const productSizeOptions = container.querySelector('.snipcart-add-item').getAttribute('data-item-custom2-options');


     addToCartButton.setAttribute('data-item-id', productId);
    addToCartButton.setAttribute('data-item-name', productName);
    addToCartButton.setAttribute('data-item-price', productPrice);
    addToCartButton.setAttribute('data-item-description', productDescription);
    addToCartButton.setAttribute('data-item-image', productImage);
    addToCartButton.setAttribute('data-item-custom1-options', productColorOptions);
    addToCartButton.setAttribute('data-item-custom2-options', productSizeOptions);
  });
});
