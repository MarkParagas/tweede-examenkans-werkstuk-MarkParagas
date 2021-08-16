"use strict";

const news = {
    // Start met int met add eventListener
    init()  {
        document.getElementById("form").addEventListener("submit", e => {
            e.preventDefault();
            let inputValue = document.getElementById("keyName").value;
            console.log("input value test", inputValue)
            this.dataApi(inputValue);
        });
    },
    // API ophalen
    dataApi() {

        // console.log("testing start loading");
        document.getElementById("container").innerHTML = "Start loading";
        fetch(`https://thecrew.cc/news/read.php`)
        .then(response => {
            console.log(response);
            return response.json(); 
        })
        .then(data => {
            console.log(data);
            const news = data.news;
            this.filterSearch(news); 
            // [ this. ] Link naar volgende (step by step)
            console.log("End loading");
        });
    },
    // Filter value on search
    filterSearch(news) {
        const filtersearch = news.filter(search => {
            //console.log("title",search.title);
            //console.log("content",search.content);
            // Filter search op title en content
            if(search.title || search.content)  {
                return search;
            }
        });
        console.log(filtersearch);
        this.sortlikes(filtersearch); 
    },
    // sorter by likes 
    sortlikes(likes) { 
        const sortlikes = likes.sort((a,b) =>  {
            return b.likes - a.likes;
        });

        this.newsTotal(sortlikes);
    },
    // Show total items (Articles)
    newsTotal(news) { // aantal news
        const newstotal = news.slice(0,5); // Total in API (max:10) articles
        console.log({newstotal});

        this.renderNews(newstotal);
    },
    renderNews(renderNews) { // end renderen
        document.getElementById("container").innerHTML = "";
        renderNews.forEach(news =>  {
            let html = `
            <article>
                <div class="image_wrapper">
                    <img src="${news.imageURI}">
                </div>
                <div class="article_content_wrapper">
                        <div class="title">
                            <div class="info">
                                <div class="datum"> Datum: ${Date(news.publicationDate)}</div>
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
        document.getElementById("container").innerHTML += html;
        });
    }
};

news.init();

/*

Start met init en addeventlister als start in form

1) API ophalen (fetchen | then | response & data)
2) Filter op title en content (API = news.title etc)
3) Filter op hoogste likes
4) Filter op aantal articles van API
5) Render (ForEach)
            let html = `
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


--------------------- Notes ---------------------

likes filter door op knop en schijden van searchbalk

Opslaan van value property
https://www.codegrepper.com/code-examples/javascript/how+to+save+values+to+a+property+javascript

*/