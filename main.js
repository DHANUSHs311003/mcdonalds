let display= document.getElementById("status");
let foodItems = document.querySelectorAll("#food-items input"); 
let imgSec = document.getElementById("img-sec");
let demo = document.getElementById("demo");
let orderNo = document.getElementById("orderid");
let mainH1 = document.getElementById("Mh1");
function orderFood() {

    mainH1.textContent = "Your food order in process";
    

    promiseCreate().then((res) => {
        demo.style.display="none";
        console.log(res);
        mainH1.textContent = `${res} ordered successfully`;
    })
}

function promiseCreate (){

    let images = [
        {
            food: "Burger",
            url:"https://midwestexplored.com/wp-content/uploads/2022/01/restaurants-in-Mackinac-burger.jpg",
        },

        {
            food:"Sausage Burrito",
            url:"https://fthmb.tqn.com/z00PbmBV5TdY3Bnr8p3J-6C0HOg=/2000x1333/filters:fill(auto,1)/132295319-58a72c7e5f9b58a3c95f807f.jpg",
            
        },

        {
            food:"Hot-wings",
            url:"https://cdn.abcotvs.com/dip/images/498024_013015-cc-chicken-wings-img.jpg?w=1600",

        },

        {
            food:"Pizza",
            url:"https://images2.alphacoders.com/796/thumb-1920-796169.jpg",
        }

    
    ];

    let items = Array.from(foodItems)

    let checkedItems = items.filter((ele) => {
        return ele.checked;
       })

    let imageFilter = images.filter((ele) => {
        return ele.food === checkedItems[0].value
    })
    
    

   
    let img = document.createElement("img");
    img.setAttribute("Id", "food-img")
    img.src = imageFilter[0].url;
    img.style.width = "100%";
    img.style.height = "70vh";
    img.style.borderRadius = "20px";
    

  

console.log(imageFilter)

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(checkedItems[0].value);
           
           imgSec.append(img);
           orderNo.textContent = `Your order ID : ${Math.floor(Math.random()*100)}`;
        },2000)
    });
    

    
    return promise;
}
