"use strict";

function getNews() {
    console.log('Get the news (testing)')
    let test = '';
    fetch('https://thecrew.cc/news/read.php')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            test = data.value;
        });
    console.log('End News');
    insertNews(news);
}

function insertNews(news) {
    const parent = document.getElementById('container');
    parent.innerHTML = `<p>${news}</p>`;
}

getNews();

/*
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

