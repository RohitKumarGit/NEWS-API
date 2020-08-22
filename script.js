new Vue({
    el:'#app',
    data:{
        n:-1,
        newsURL:["https://newsapi.org/v2/top-headlines?country=us&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?q=trump&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=921c834598874e29956fdc23d1ececbc"],
        news:"",
        tags:["US NEWS","BBC NEWS","TRUMP NEWS","GERMANY NEWS"],
        idx:0,
    },
    
})