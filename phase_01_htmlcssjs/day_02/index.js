var btn=document.getElementById("submit")
btn.addEventListener("click",handleClick)
function handleClick(){
    alert("buttom is triggred")
    var imageInout=document.getElementById("url").value
    var titleInput=document.getElementById("title").value
    var ratingInput=document.getElementById("rating").value
    console.log(imageInout)
    var cardDiv=document.getElementById("cardDiv")
    cardDiv.innerHTML=`
    <div class="card">
                <img src="${imageInout}" alt="">
                <p>Movie : ${titleInput}</p>
                <h3>Rating: ${ratingInput}</h3>
            </div>
    `
}