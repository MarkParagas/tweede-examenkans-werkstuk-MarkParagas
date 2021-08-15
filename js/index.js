"use strict";

let html = '';
let search = document.getElementById("keyName");

window.onload = () => {
    fetch('https://thecrew.cc/news/read.php')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);
            data.news.forEach(news => {

                if (search.value == news.title.search(search.value)) {
                    valueNumber = string.slice((a,b) => a.min < b.max); // 3)
                } else {
                    return html = `Geen resultaat`;
                }
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

let sortLikes = [];

// 4) Progress...

for (let i = 0; i < 11; i++) {
    if (news[i].likes > news[i + 1].likes) {
        sortLikes.push(news[i].likes);
    }
}

/*

Error:
Vorige code waren niet alles in bepaalde functie worden gedefineerd

Succeed:
1) Api ophalen
2) Alles laten weergeven inner html
3) Zoekbalk toevoegen
4) sorteren van likes toevoegen

progress:
value opslaan
'4)'

*/
