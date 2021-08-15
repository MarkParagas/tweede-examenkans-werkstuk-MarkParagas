"use strict";

function getNews() {
    console.log('Get the news (testing)')
    let test = '';
    fetch('https://thecrew.cc/news/read.php')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);
            test = data.value;
        });
    insertNews(test);
}

function insertNews(news) {
    const parent = document.getElementById('container');
    parent.innerHTML = `<p>${news[0].imageURI}</p>`;
    
}

getNews();

/*


 sortLikes(likes) {
        const sortedlikes = likes.sort((a,b) =>  {
            return a - b;
        });
        this.aantalLikes(sortedlikes);
    },




news[numbers (a > b)]
news[0].





Sorteren

let sortedLikes = numbers.sort(function(b,a) {
    console.log(a,b);
    if(a > b) {
        return -1;
    } else {
        return 1;
    }
})



*/

