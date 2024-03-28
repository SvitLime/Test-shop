const getProducts = async () => {
    const response = await fetch('json/decor.json');
    const products = await response.json();
    return products
}

const renderProductsDecor = async () => {
    const products = await getProducts();
    const container = document.querySelector('.decor__list')
    for (let item of products) {
        const listItem = document.createElement('li');
        listItem.classList.add('decor__item');
        const listA = document.createElement('a');

        const cardImgContainer = document.createElement('div');
        cardImgContainer.classList.add('card__img');

        const cardImg = document.createElement('img');
        cardImg.classList.add('cardImg')
        cardImg.src = item.image;

        const cardHover = document.createElement('div');
        cardHover.classList.add('card-hover');
        cardHover.classList.add('hidden');

        const cardHoverDiv = document.createElement('div');
        cardHoverDiv.classList.add('card-hover__div');

        const addToCaratBtn = document.createElement('button');
        addToCaratBtn.classList.add('add-to-carat');

        const addToCaratBtnImg = document.createElement('img');
        addToCaratBtnImg.src = './assets/svg/carat.svg';

        const likeBtn = document.createElement('button');

        const likeBtnImg = document.createElement('img');
        likeBtnImg.src = './assets/svg/like-heart.svg';

        const cardInfoContainer = document.createElement('div');
        cardInfoContainer.classList.add('card__info');

        const infoText = document.createElement('h4');
        infoText.innerHTML = item.name;

        const ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('id', 'rating');
        ratingDiv.setAttribute('data-rating', '0');

        const starElement = document.createElement("span");
        starElement.classList.add("star");
        starElement.setAttribute("data-value", item.rating);
        starElement.innerHTML = "&#9733;";

        const infoPrice = document.createElement('p');
        infoPrice.innerHTML = item.price + ' $';



        addToCaratBtn.append(addToCaratBtnImg);
        likeBtn.append(likeBtnImg);
        cardHoverDiv.append(addToCaratBtn, likeBtn);
        cardHover.append(cardHoverDiv);
        cardImgContainer.append(cardImg, cardHover);
        ratingDiv.append(starElement);
        cardInfoContainer.append(infoText, ratingDiv, infoPrice);
        listA.append(cardImgContainer, cardInfoContainer);
        listItem.append(listA);
        container.append(listItem);

    }
}

renderProductsDecor();

const getProductsSecond = async () => {
    const response = await fetch('json/decorSecond.json');
    const products = await response.json();
    return products
};

const renderProductsDecorSecond = async () => {
    const products = await getProductsSecond();
    const container = document.querySelector('.decor-second')
    for (let item of products) {
        const listItem = document.createElement('li');
        listItem.classList.add('decor__item');
        const listA = document.createElement('a');

        const cardImgContainer = document.createElement('div');
        cardImgContainer.classList.add('card__img');

        const cardImg = document.createElement('img');
        cardImg.classList.add('cardImg')
        cardImg.src = item.image;

        const cardHover = document.createElement('div');
        cardHover.classList.add('card-hover');
        cardHover.classList.add('hidden');

        const cardHoverDiv = document.createElement('div');
        cardHoverDiv.classList.add('card-hover__div');

        const addToCaratBtn = document.createElement('button');
        addToCaratBtn.classList.add('add-to-carat');

        const addToCaratBtnImg = document.createElement('img');
        addToCaratBtnImg.src = './assets/svg/carat.svg';

        const likeBtn = document.createElement('button');

        const likeBtnImg = document.createElement('img');
        likeBtnImg.src = './assets/svg/like-heart.svg';

        const cardInfoContainer = document.createElement('div');
        cardInfoContainer.classList.add('card__info');

        const infoText = document.createElement('h4');
        infoText.innerHTML = item.name;

        const ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('id', 'rating');
        ratingDiv.setAttribute('data-rating', '0');

        const starElement = document.createElement("span");
        starElement.classList.add("star");
        starElement.setAttribute("data-value", item.rating);
        starElement.innerHTML = "&#9733;";

        const infoPrice = document.createElement('p');
        infoPrice.innerHTML = item.price + ' $';



        addToCaratBtn.append(addToCaratBtnImg);
        likeBtn.append(likeBtnImg);
        cardHoverDiv.append(addToCaratBtn, likeBtn);
        cardHover.append(cardHoverDiv);
        cardImgContainer.append(cardImg, cardHover);
        ratingDiv.append(starElement);
        cardInfoContainer.append(infoText, ratingDiv, infoPrice);
        listA.append(cardImgContainer, cardInfoContainer);
        listItem.append(listA);
        container.append(listItem);

    }
}

renderProductsDecorSecond();

const getProductsSlider = async () => {
    const response = await fetch('json/allDecor.json');
    const products = await response.json();
    return products
};

const renderProductsMobile = async () => {
    const products = await getProductsSlider();
    const container = document.querySelector('.swiper-mobile__ul')
    for (let item of products) {
        const listItem = document.createElement('li');
        listItem.classList.add('decor__item');
        listItem.classList.add('swiper-slide');
        
        const listA = document.createElement('a');
        listA.classList.add('listA');

        const cardImgContainer = document.createElement('div');
        cardImgContainer.classList.add('card__img');

        const cardImg = document.createElement('img');
        cardImg.classList.add('cardImg')
        cardImg.src = item.image;

        const cardHover = document.createElement('div');
        cardHover.classList.add('card-hover');
        cardHover.classList.add('hidden');

        const cardHoverDiv = document.createElement('div');
        cardHoverDiv.classList.add('card-hover__div');

        const addToCaratBtn = document.createElement('button');
        addToCaratBtn.classList.add('add-to-carat');

        const addToCaratBtnImg = document.createElement('img');
        addToCaratBtnImg.src = './assets/svg/carat.svg';

        const likeBtn = document.createElement('button');

        const likeBtnImg = document.createElement('img');
        likeBtnImg.src = './assets/svg/like-heart.svg';

        const cardInfoContainer = document.createElement('div');
        cardInfoContainer.classList.add('card__info');

        const infoText = document.createElement('h4');
        infoText.innerHTML = item.name;

        const ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('id', 'rating');
        ratingDiv.setAttribute('data-rating', '0');

        const starElement = document.createElement("span");
        starElement.classList.add("star");
        starElement.setAttribute("data-value", item.rating);
        starElement.innerHTML = "&#9733;";

        const infoPrice = document.createElement('p');
        infoPrice.innerHTML = item.price + ' $';



        addToCaratBtn.append(addToCaratBtnImg);
        likeBtn.append(likeBtnImg);
        cardHoverDiv.append(addToCaratBtn, likeBtn);
        cardHover.append(cardHoverDiv);
        cardImgContainer.append(cardImg, cardHover);
        ratingDiv.append(starElement);
        cardInfoContainer.append(infoText, ratingDiv, infoPrice);
        listA.append(cardImgContainer, cardInfoContainer);
        listItem.append(listA);
        container.append(listItem);

    }
}

renderProductsMobile()