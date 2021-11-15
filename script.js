let activePage = 0
let name = ''

function getName() {
    inputName = document.getElementById('inputName').value
    name = inputName
    // valid input, change the scene
    if (inputName) {
        changeScene(4)
    }
    // invalid input, display error message
    else {
        changeScene(2, "Whoops! That's not a real name, is it?")
    }
}

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
            <button class ="redText" onclick="changeScene(DEAD)">NOPE</button>
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
            <input id="inputName" placeholder="Write your name...">
        </div>
        <button onclick="getName()">LET'S DO THIS!</button>
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
    {// Scene 4 (Chosen "LETS DO THIS", function to be able to show name)
        content: function () {
            return /*html*/ `
    <div class="centerContainer cardBox">   
        <div class="card">
            <img src="/media/cat.png" class="charImg">
            <div class="nextContainer">
            <p>Well then ${name}!<br>
            The task at hand is simple...<br>
            You just have to defeat the evil forces, can't be that hard... right?<br>
            Luckily you have your sword and som PAWSitive energy!</p>  
            <img onclick="changeScene(5)" class="nextArrow" src="/media/nextarrow.png"> 
            </div>
    </div>
    `
        }
    }
    ,
    {// Scene 5 (Mushroom-scene. Make a cruicial choice!)
        content: /*html*/ `
    <div class="centerContainer">
        <div class="box card">
        <img src="/media/shroom.png" class="pixelImg">
            <p>You've been wandering through the woods for a long time.<br>
            Energy is running low, tummy's rumbling...<br>
            You come across a strange looking mushroom in the lands.<br>
            It looks delicious, but is it safe to eat something like this?
        </p>
        </div>
        <div class="dualButtons">
            <button onclick="changeScene(6)">TAKE THE<br> CHANCE!</button>
            <button class ="redText" onclick="changeScene(7)">STRANGER<br>DANGER!</button>
        </div>
    </div>
    `
    }
    ,
    {// Scene 6 (Ate the mushroom)
        content: /*html*/ `
    <div class="centerContainer cardBox">   
        <div class="card">
        <div class="nextContainer">
        <p>You feel energized!<br>
        What kind of mushroom was that even?!<br>
        Everything is looking beautiful... colors are more vibrant than ever. are the trees... breathing?<br><br>
        I feel like anything could happen now! This is for sure the best day of my life.<br>
         I'm glad I went on this trip!
        </p>  
            <img onclick="changeScene(8)" class="nextArrow" src="/media/nextarrow.png"> 
            </div>
    </div>
    </div>
    `
    }
    ,
    {// Scene 7 (Did not eat the mushroom)
        content: /*html*/ `
    <div class="centerContainer cardBox">   
        <div class="card">
        <div class="nextContainer">
        <p>It's not worth it... <br>
        I know there's some really messed up mushrooms, my mission is too important.<br>
        I feel awfully hungry and slow, but hopefully there'll be a tavern of sorts ahead.<br>
        I mean... even evil forces need to eat, right?
        </p>  
            <img onclick="changeScene(xxx)" class="nextArrow" src="/media/nextarrow.png"> 
            </div>
    </div>
    </div>
    `
    }

]

changeScene = function (nextPage, errorText) {
    activePage = nextPage
    // creates a second function to be able to store name before rendering new scene
    if (typeof pages[activePage].content === 'function') {
        page.innerHTML = pages[activePage].content()
    }
    else {
        page.innerHTML = pages[activePage].content
    }
    //displaying error message if invalid input
    if (errorText) {
        const box = document.querySelector('.box')
        box.innerHTML += `<p class="errorText">${errorText}</p>`
    }
}

changeScene(0)