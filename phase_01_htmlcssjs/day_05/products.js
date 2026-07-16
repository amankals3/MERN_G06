// fetch --> It will pull response from an api

// fetch("url" , [get,post,put,patch,delete])

let container = document.getElementById("container")


let response = fetch("https://dummyjson.com/products").then(function(res){
    return res.json();
}).then(function(data){

    for(el of data.products){
        container.innerHTML += ` 
            <div id="cards">
                <img src="${el.images[0]}" alt="">
                <h3>${el.title}</h3>
                <p>${el.brand}</p>
                <p>${el.price}</p>
                <button id ="cart">Add to Cart</button>
            </div>
        `
    }

    let cartBtns = document.querySelectorAll("#cart")
    let cartS = document.getElementById("cartSize")
    let counter = 0

    for(let el of cartBtns){
        el.addEventListener("click",function(){
            alert("The Button is Triggered") 
            counter++
            cartS.innerHTML = "Cart:" + counter
        })
    }
    
    let deleteBtns=document.querySelectorAll("#delete")
    for(let el of deleteBtns){
        el.addEventListener("click",)
    }


    

})




// fetch --> you will require two times then method
// res --> raw json format data , we need to convert them into objects