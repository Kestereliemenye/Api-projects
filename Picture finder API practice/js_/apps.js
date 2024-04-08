// init pixabay
const pixa = new Pixabay
const maxPictures = 5


const search = document.querySelector("button").addEventListener("click", function(e){
    //took the user text from the input
    const userText = document.querySelector("input").value
    if(userText !== ''){
        console.log((userText));
        //make API call
        pixa.getPictures(userText)
        .then(data =>{
         console.log(data);
         //clear any existing image
         document.getElementById("main").innerHTML = "";
         //display returned pic from pixabay
         let placeForPicture = document.getElementById("main")
         let count = 0
         data.hits.forEach(hit =>{
            if(count < maxPictures){// loop for only 5 pictures to show
            let pic = document.createElement("img")
            pic.className = "pictures"
            pic.src = hit.webformatURL // uses the webformat of each url
            placeForPicture.appendChild(pic)
            count++
            } else{
                return;// exsits the loop
            }
            
         })
        
        }).catch(err=>{
            console.log("Not found", err);
        })
    } if(userText === ""){
        alert("Nothing Found")
    }
})