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

function toIconLinkedinHover(){
    let linkedinIcon = document.getElementById("linkedinIcon");
    linkedinIcon.innerHTML = `
    <a onmouseout="toIconLinkedin()" href="https://www.linkedin.com/in/diego-rodrigues-531170243/" target="_blank"><img class="contactImage" src="./assets/images/contacts/linkedinHover.png" alt=""></a>
    `;
}

function toIconLinkedin(){
    let linkedinIcon = document.getElementById("linkedinIcon");
    linkedinIcon.innerHTML = `
    <a onmouseover="toIconLinkedinHover()" href=""><img class="contactImage" src="./assets/images/contacts/linkedin.png" alt=""></a>
    `;
}

function toIconGitHubHover(){
    let gitHubIcon = document.getElementById("gitHubIcon");
    gitHubIcon.innerHTML = `
    <a onmouseout="toIconGitHub()" href="https://github.com/rdcodigo" target="_blank"><img class="contactImage" src="./assets/images/contacts/githubHover.png" alt=""></a>
    `;
}

function toIconGitHub(){
    let gitHubIcon = document.getElementById("gitHubIcon");
    gitHubIcon.innerHTML = `
    <a onmouseover="toIconGitHubHover()" href=""><img class="contactImage" src="./assets/images/contacts/github.png" alt=""></a>
    `;
}