const partner1 = document.querySelector("#partner1");
const partner2 = document.querySelector("#partner2");
const calc = document.querySelector("#calc");
const result = document.querySelector("#result");
const suggestion = document.querySelector("#suggestion");

calc.addEventListener('click',()=>{
    if(partner1.value == "" || partner2.value == ""){
        result.innerHTML = "Please enter both partner's name"; 
        return;
    }

    if(partner1.value.toUpperCase() == partner2.value.toUpperCase())
    {
        result.innerHTML = "100%";
    }
    else if(partner1.value.toUpperCase() == "PIYUSH" && partner2.value.toUpperCase() == "SONAL"){
        result.innerHTML = "100%";

    }
    else if(partner1.value.toUpperCase() == "SHREY" && partner2.value.toUpperCase() == "BUSHRA"){
        result.innerHTML = "100%";

    }
    else{
        result.innerHTML = Math.round(Math.random()*100) + "%";
    }

    if(result.innerHTML == "100%"){
        console.log("hello");
        result.innerHTML += "<br>Perfect Match! <br> You are made for each other";
    }
    // else if(result.innerHTML >= "90%"){
    //     result.innerHTML += "<br>Your Partner loves <br>Keep Going! one day you will be a <br>Perfect Match! <br> You are made for each other";
    // }
    
    // document.write("Hello");

})
