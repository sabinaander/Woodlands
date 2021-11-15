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
    ,
    nextScenes: [2, DEAD]
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
,
nextScenes: [4]

    },
    {// Scene 3 (Chosen "NOPE" or dead in fight show Tombstone + Play Again? btn)
        content:/*html*/ `
    <div class="centerContainer dead">
        <img class="tombstone" src="/media/tombstone.png">    
        <p>Oh no! Yet another "hero" has failed to take upon the quest.</p>
        <button onclick="changeScene(0)">PLAY AGAIN?</button>
    </div>
    `
    ,
    nextScenes: [0]
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
    `} ,
    nextScenes: [5]
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
        ,
        nextScenes: [6, 7]
        
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
    ,
    nextScenes: [8]
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
                        <img onclick="changeScene(9)" class="nextArrow" src="/media/nextarrow.png"> 
                    </div>
                </div>
            </div>
    `
    ,
    nextScenes: [9]
    }
    ,
    {// Scene 8 (Ate the mushroom -> Enter fight)
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                        <h3>Strange encounter!</h3>
                        <p class="redText">"WHO ARE YOU?"</p>
                        <p class="smallText"> - says a funny looking creature in a silly tone.</p>
                        <p>Oh, my name is ${name}, I'm here to defeat all evil!</p><br>
                        <p class="smallText">(When I look at this creature I'm withholding the urge to laugh. He's got 4 eyes, a pink glowing aura and a hole in their stomache for ice cream.<br>
                         NO WAY he can be dangerous!)</p>
                        <p class="redText">"Defeat all evil huh? *laugh*<br> I would never let such a small critter like you defeat me!<br>
                        Are you gonna defend your honour with that plastic sword of yours? *laugh*"</p>             
                    </div>
                </div>
                    <div class="dualButtons">
                        <button onclick="changeScene(10)">COME AT ME!</button>
                    <button class ="redText" onclick="changeScene(11)">ESCAPE</button>
                    </div>
            </div>
    `
    }
    ,
    nextScenes: [10]
    }
    ,
    {// Scene 9 (Did not eat the mushroom -> Enter fight)
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                        <h3>Strange encounter!</h3>
                        <p class="redText">"WHO ARE YOU?"</p>
                        <p class="smallText smallText">- Says a stranger with a strong tone.</p>
                        <p>Oh, my name is ${name}, I'm here to defeat all evil!</p>
                        <p class="smallText redText">"Defeat all evil huh?"<br>
                        This land has been free from any evil forces for hundreds of years. Who told you this?</p>             
                        <p>Actually, coming to think of it, I have no idea...</p>
                        <p>I just ran across this weirdo in the vast area of Woodlands who told me I should take upon this quest.</p>
                        <p class="smallText redText">"Oh no...<br>
                        You must've met Jake. He's a crazy head eating lot's of poisonous mushrooms, he rambles on about quests and evil.</p>
                        <p class="smallText">I've seen those... Orange with pink spots... Close call...</p>
                    </div>
                    <img onclick="changeScene(12)" class="nextArrow" src="/media/nextarrow.png"> 
                </div>
            </div>
    `
    }
    ,
    nextScenes: [12]
    }
    ,
    {// Scene 10 (Pressed "Come At me!")
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                       <p class="smallText"> ${name} wakes up with a terrible pain in the back of the head.</p>
                        <p>"What? Where am I...? What theee?"<br><br>
                        Looking around ${name} notice nothing but woods, all regular boring woods.<br><br>
                        Was this all a dream?<br><br>
                        "Why am I covered in ice cream?"<br><br>
                    <h3 class="blink"> To be continued...</h3>
                    <button class ="redText" onclick="changeScene(0)">EXIT</button>
                </div>
            </div>
    `
    }
    }
    ,
    {// Scene 11 (Pressed "ESCAPE")
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                       <p class="smallText"> You try to run, but the nasty creature is following you.<br><br>
                       The whole world has taken a turn to worse, it's all covered in blood with dangers lurking behind every stone.<br><br>
                       You see a bright light, run towards it, the second you're about to enter there's a loud...<br>
                       <p class ="redText">BANG!</p>
                       <p>Silence...<br><br>
                        You can't see anything, feel anything.<br><br>
                         It's all... gone.</p><br>
                    <button class ="redText" onclick="changeScene(DEAD)">EXIT</button>

                </div>
            </div>
    `
    }
    },
    {// Scene 12 (Did not eat the mushroom -> Had encounter -> Next scene)
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                    <p class="smallText redText">"You look a bit tired."</p>
                    <p class="smallText">"Yeah, long night. I'm starving actually"</p>
                    <p class="smallText redText">"I know what you need, follow me, I don't live to far off from here."</p>
                    <p class="smallText"> The two strangers wander off through the forest until a small cabin appears. They enter and in the kitchen there's a big pot cooking some kind of stew.</p>
                    <p class="smallText redText">"Take a seat, I'll get you some food, heroes need energy to stay strong."</p>
                    <p class="smallText"> And there they sat, enjoying their meal, when ${name} noticed something odd.<br>
                    Pink spots in the stew. Many of them.</p><br>
                    <h3 class="blink"> To be continued...</h3>
                    
                </div>
                <button class ="redText" onclick="changeScene(0)">EXIT</button>
                </div>
            </div>
    `
    }
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