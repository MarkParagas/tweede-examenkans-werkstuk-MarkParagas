"use strict";

function getNews() {
    console.log('Get the news (testing)')
    let test = '';
    fetch('https://thecrew.cc/news/read.php')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);
            test = data.news;
        
        });
        renderNews(test); //insertNews(test);
}

function renderNews(newsartikel) {
    document.getElementById("container").innerHTML = "";
    newsartikel.forEach(news => {
        let html = `
        <article>
        <div class="image_wrapper">
          <img
            src="${news[i].imageURI}">
        </div>
        <div class="article_content_wrapper">
          <div>
            <h3>${news[i].title}</h3> <!-- Title -->
          </div>
          <div>
          ${news[i].content}
          </div>
          <div class="likes"> likes: ${news[i].likes}</div>
          <div class="datum"> datum: ${news[i].publicationDate}</div>
        </div>
      </article>
        `;    document.getElementById("container").insertAdjacentHTML("beforeend", html);
    });
}

getNews();

