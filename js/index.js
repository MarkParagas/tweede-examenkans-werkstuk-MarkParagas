"use strict";

let html = '';

window.onload = () => {
    fetch('https://thecrew.cc/news/read.php')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);

            data.news.forEach(news => {

                html += `
            <article>
                <div class="image_wrapper">
                    <img src="${news.imageURI}">
                </div>
                <div class="article_content_wrapper">
                        <div class="title">
                            <div class="info">
                                <div class="datum"> Datum: ${news.publicationDate}</div>
                                <div class="likes"> Likes: ${news.likes}</div>
                            </div>
                            <h1>${news.title}</h1>
                        </div>
                    <div class="content">
                      ${news.content}
                    </div>
                </div>
            </article>
            `;

            })

            document.getElementById("container").innerHTML = html;

        });
}

/* 

Vorige code waren niet alles in bepaalde functie worden gedefineerd

1) Api ophalen
2) Alles laten weergeven inner html

*/
