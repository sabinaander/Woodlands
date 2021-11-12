let activePage = 0
const page = document.querySelector('#page')

const pages = [{
    content:`
    <div class="fadein centerContainer">
        <h1>Woodlands</h1>
        <button onclick="changeScene(1)" class="blink">ENTER</button>
    </div>
    `
},
{//1
    content:`
    <div class="centerContainer">
        <p>In the land of "woodlands" a horrible force has taken the grip of the once lush and happy villagers.<br>
        To beat evil and bla bla blablablablablablabla you must take on an adventure and fight for the future of
        all little critters.
        Will you take up on the challenge, stranger?</p>
        <div class="dualButtons">
            <button onclick="changeScene(2)">I AM BRAVE</button>
            <button onclick="changeScene(3)">NOPE</button>
        </div>
    </div>
    `
}
]

changeScene = function (nextPage) {
    activePage = nextPage
    page.innerHTML = pages[activePage].content
}

changeScene(0)