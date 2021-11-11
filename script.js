let activeScene = 0
// const inventory = [2]
// let inventory = 1
// const activeScene  = []


// let displayScene1 = function () {
//     activeScene= 0 
// }

let displayScene2 = function () {
    activeScene= 1
    const pageInfo = document.querySelector('#pageInfo')
    pageInfo.classList.toggle("active")
    const pageStart = document.querySelector('#pageStart')
    pageStart.classList.toggle("active")    
}

let displayScene3 = function () {
    activeScene= 2
    const pageHero = document.querySelector('#pageHero')
    pageHero.classList.toggle("active")
    const pageInfo = document.querySelector('#pageInfo')
    pageInfo.classList.toggle("active")
    
}

nextScene = function () {
    if (activeScene === 0) {
        displayScene2()
    }
    
    else if (activeScene === 1) {
        displayScene3()
    }
    else if (activeScene === 2) {
        // displayScene4()
    }
}




// 
// // STATE  Olika scenes/rum/miljö
// 

// const scenes = [{
//     nextScene:[1,4,6()]
// }, {
//     //First room with info
//     element.classList.toggle("infoPage")
//     activeScene = 1
//     nextScene: [2]
// }];

// //     

// function nextScene() {
//     element.classList.toggle("infoPage");
//     activeScene = 1;
// }

// function renderScene () {}
