let activePage = 0
let name = []
const page = document.querySelector('#page')

const DEAD = 3

const pages = [
    {// Scene 0 - Start Page
        content:/*html*/ `
    <div class="fadein centerContainer">
        <h1>Woodlands</h1>
        <button onclick="changeScene(1)" class="blink">ENTER</button>
    </div>
    `,
        nextScenes: [1]
    },
    {// Scene 1 (with information about the scenario)
        content: /*html*/ `
    <div class="centerContainer">
        <div class="box">
            <p>In the land of "woodlands" a horrible force has taken the grip of the once lush and happy villagers.<br>
            To beat evil and bla bla blablablablablablabla you must take on an adventure and fight for the future of
            all little critters.
            Will you take up on the challenge, stranger?</p>
        </div>
        <div class="dualButtons">
            <button onclick="changeScene(2)">I AM BRAVE</button>
            <button onclick="changeScene(DEAD)">NOPE</button>
        </div>
    </div>
    `
    },
    {// Scene 2 (Chosen "I AM BRAVE" show Hero-info)
        content: /*html*/`
    <div class="centerContainer">
        <div class="box">
            <p class="biggerFont">Wow!</p>
            <p> Now it's really time to shine!<br>
            Could you please tell me your name?</p>
            <input placeholder="Write your name...">
        </div>
        <button onclick="changeScene(4)">LET'S DO THIS!</button>
    </div>
    `
    },
    {// Scene 3 (Chosen "NOPE" or dead in fight show Tombstone + Play Again? btn)
        content:/*html*/ `
    <div class="centerContainer dead">
        <img class="tombstone" src="/media/tombstone.png">    
        <p>Oh no! Yet another "hero" has failed to take upon the quest.</p>
        <button onclick="changeScene(0)">PLAY AGAIN?</button>
    </div>
    `
    }
    ,
    {// Scene 4 (Chosen "LETS DO THIS")
        content:/*html*/ `
    <div class="centerContainer cardBox">   
        <div class="card">
            <img src="/media/cat.png" class="charImg">
            <p>Well then NAME!<br>
            The task at hand is simple...<br>
            You just have to defeat the evil forces, can't be that hard... right?<br>
            Luckily you have your sword and som PAWSitive energy!</p>
        
        <!-- <button onclick="changeScene(0)">PLAY AGAIN?</button> -->
    </div>
    `
    }
]

changeScene = function (nextPage) {
    activePage = nextPage
    page.innerHTML = pages[activePage].content


}

changeScene(0)