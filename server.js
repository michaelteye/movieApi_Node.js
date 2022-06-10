const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const allmovies ={
    'title': [
        {
            'name':'The Godfather',
            'year': '1972',
            'movie_link': 'https://www.imdb.com/title/tt0068646/?ref_=ttls_li_tt'
        },
        {
            'name':"Schinder's List",
            'year':"1993",
            'movie_link': 'https://www.imdb.com/title/tt0108052/?ref_=ttls_li_tt'

        },
        {
            'name': "Angry Men",
            'year':"1997",
            'movie_link':'https://www.imdb.com/title/tt0050083/?ref_=ttls_li_i'
        },
        {
            'name': "Life Is Beautiful",
            'year':"1997",
            'movie_link':'https://www.imdb.com/title/tt0118799/?ref_=ttls_li_i'
        },
        {
            'name': "The Good, the Bad and the Ugly",
            'year':"1966",
            'movie_link':'https://www.imdb.com/title/tt0060196/?ref_=ttls_li_i'
        },
        {
            'name': "The Shawshank Redemption",
            'year':"1994",
            'movie_link':'https://www.imdb.com/title/tt0111161/?ref_=ttls_li_i'
        },
        {
            'name': "The Pursuit of Happyness",
            'year':"2006",
            'movie_link':'https://www.imdb.com/title/tt0454921/?ref_=ttls_li_i'
        },
        {
            'name': "Seven Samurai",
            'year':"1954",
            'movie_link':'https://www.imdb.com/title/tt0047478/?ref_=ttls_li_i'
        },
        {
            'name': "The Intouchables",
            'year':"2011",
            'movie_link':'https://www.imdb.com/title/tt1675434/?ref_=ttls_li_i'
        },
        {
            'name': "Central Station",
            'year':"1998",
            'movie_link':'https://www.imdb.com/title/tt0140888/?ref_=ttls_li_i'
        },
    ],

    'category':[
        {
            'status':'crime, Drama',
            'description':'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
            'Director':'Francis Ford Coppola',
            'movie_link': 'https://www.imdb.com/title/tt0068646/?ref_=ttls_li_tt',

        },
        {
            'status':'Biography, Drama, History',
            'description':'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis',
            'Director':'Steven Spielberg',
            'movie_link': 'https://www.imdb.com/title/tt0108052/?ref_=ttls_li_tt'


        },
        {
            'status':'Crime, Drama',
            'description':'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
            'Director':'Sidney Lumet',
            'movie_link':'https://www.imdb.com/title/tt0050083/?ref_=ttls_li_i'

        },
        {
            'status':'Comedy, Drama, Romance',
            'description':'When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.',
            'Director':'Roberto Benigni',
            'movie_link':'https://www.imdb.com/title/tt0118799/?ref_=ttls_li_i'
        },
        {
            'status':'Adventure, Western',
            'description':'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
            'Director':'Sergio Leone',
            'movie_link':'https://www.imdb.com/title/tt0060196/?ref_=ttls_li_i'
        }
    ],
    'Unknown':{
        'title':'unknown',
        'category':'unknown',
        'year':'unknown'
    }
        
    
    
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/about',(request, response)=>{
    response.sendFile(__dirname + '/about.html')
})

app.get('/api/:name', (request, response)=>{
    const movieName = request.params.name.toLowerCase()
    if(allmovies[movieName]){
        response.json(allmovies[movieName])

    }
    else{
        response.json(allmovies['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('It seems the port is working')
})
