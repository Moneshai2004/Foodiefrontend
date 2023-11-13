export function populateCards(mockData){
    for(let i = 0;i <mockData.length;i++){
        var cardContainer = document.createElement('div');
        cardContainer.setAttribute('class','dish-container');
        console.log(cardContainer);

        var imgElement = document.createElement('img');
        imgElement.setAttribute('class','dish-image');
        imgElement.setAttribute('src',mockData[i].feature_image);
        imgElement.setAttribute('alt','Restaurant Image');

        var restaurantName = document.createElement('div')
        restaurantName.setAttribute('class','dish-name');
        restaurantName.appendChild(document.createTextNode(mockData[i].name))
        console.log(restaurantName);

        var restaurantDescription = document.createElement('div')
        restaurantDescription.setAttribute('class','dish-description');
        restaurantDescription.appendChild(document.createTextNode(mockData[i].cuisines));

        var rating = document.createElement('div')
        rating.setAttribute('class','rating');
        rating.appendChild(document.createTextNode(mockData[i].rating));

        var iElement = document.createElement('i');
        iElement.setAttribute('class','fa fa-star');
        iElement.appendChild(document.createTextNode(mockData[i].iElement));

        var review = document.createElement('div')
        review.setAttribute('class','reviews');
        review.appendChild(document.createTextNode(mockData[i].reviews+" Reviews"));
        
        cardContainer.appendChild(imgElement);
        cardContainer.appendChild(restaurantName);
        cardContainer.appendChild(restaurantDescription);
        cardContainer.appendChild(rating);
        cardContainer.appendChild(review);
        
        console.log(cardContainer);

        document.getElementById('menu-container').appendChild(cardContainer);
    }
}

//monesh S 