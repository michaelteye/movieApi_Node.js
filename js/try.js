document.querySelector('.button').addEventListener('click',apiResponse)

async function apiResponse(){
    const movieName = document.querySelector('.movie_input').value
    try{
        const response = await fetch(`link here${movieName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.year').innerHTML = data.name
        document.querySelector('.movie_link').innerText = data.name

    }
}