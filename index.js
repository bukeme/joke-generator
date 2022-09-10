const btn = document.querySelector('button')
const joke = document.querySelector('.joke')

async function generateJoke() {
    const response = await fetch('https://backend-omega-seven.vercel.app/api/getjoke')
    const data = await response.json()
    const question = data[0].question
    const punchline = data[0].punchline
    joke.innerHTML = `<p>Question: ${question}</p><p>Punchline: ${punchline}</p>`
}

btn.addEventListener('click', generateJoke)