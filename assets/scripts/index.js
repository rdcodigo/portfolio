const descriptions = document.querySelectorAll(".description");

console.log(descriptions)

descriptions.forEach(
    function(description){
        description.addEventListener(
            'click',
            function(event){
                const el = event.target
                console.log(el.id)
            }
        )
    }
)

function hidden(e){
    let id = e.target.id
    console.log(id)
    descriptions.forEach(
        description=>{
            if(id == description.id){
                description.style.display = "hidden";
            }else{
                description.style.display = "none";
            }
        }
    )
}