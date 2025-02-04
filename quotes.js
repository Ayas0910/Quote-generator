let button = document.getElementById('button');
button.addEventListener('click', showQuotes);

function showQuotes() {
   document.querySelector('.show').innerHTML = "Today's quote is :"; 
   fetch("https://qapi.vercel.app/api/random")
.then(response => response.json())
.then(data => {
    document.querySelector('#author').innerHTML = data.author
    document.querySelector('#quote').innerHTML = data.quote
})
.catch(error => console.log("Error fetching quote: ",error))
}

