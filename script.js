new Vue({
    el:'#app',
    data:{
        n:-1,
        newsURL:["https://newsapi.org/v2/top-headlines?country=us&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?q=trump&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=921c834598874e29956fdc23d1ececbc"],
        news:""
    },
    methods:{
        change:async function(){
           const p = this;
           
            p.n+=1;
            
            
        }
    },
    created(){
        this.n=0;
    },
    watch :{
        n : async function(val){
            const p = this;
            const res =await axios.get(p.newsURL[val % p.newsURL.length]);
            console.log(res.data)
            this.news = res.data
           
            
        }
    }
})