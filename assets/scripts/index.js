const descriptions = document.querySelectorAll(".description");

const arrayOfDescriptions = [];
for (var i = 0; i < descriptions.length; i++) {
    var item = descriptions[i];
    arrayOfDescriptions.push(item);
}

const menuButtons = document.querySelectorAll(".menuButton");

const arrayOfMenuButtons = [];
for (var i = 0; i < menuButtons.length; i++) {
    var item = menuButtons[i];
    arrayOfMenuButtons.push(item);
}

const descriptionsId = [ 
    "home",
    "about",
    "skills",
    "portfolio",
    "contacts"
];

arrayOfMenuButtons.forEach(
    menuButton => {
        menuButton.addEventListener(
            'click',
            event=>{
                let index = arrayOfMenuButtons.indexOf(event.target);
                let descId = descriptionsId[index];
                console.log(descId);
                hidden(descId);
            }
        )
    }
)

function hidden(descId){
    arrayOfDescriptions.forEach(
        description =>{
            console.log(description.id);
            console.log(description);
            if(descId == description.id){
                description.style.display = "flex";
            }else{
                description.style.display = "none";
            }
        }
    )
}