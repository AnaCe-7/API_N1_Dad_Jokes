const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    }, 
  }

  const response = await fetch('https://icanhazdadjoke.com', config)

  const data = await response.json()

  jokeEl.innerHTML = data.joke
}

generateJoke();