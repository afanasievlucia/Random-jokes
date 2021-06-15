const url = "https://icanhazdadjoke.com/";
const jokes = document.getElementById('jokes');
const getJokes = document.getElementById('button').addEventListener('click', start);

async function start() {
    const response = await fetch(`${url}`, {
        headers: {Accept: "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
    jokes.innerHTML = data.joke;
}
/*start();*/ // without this line, the start page have no joke on it.