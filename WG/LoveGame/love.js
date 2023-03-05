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

    let percent = 0;
    if(partner1.value.toUpperCase() == partner2.value.toUpperCase())
    {
        percent = 100;
    }
    else if(partner1.value.toUpperCase() == "PIYUSH" && (partner2.value.toUpperCase() == "SONAL")){
        percent = 100;

    }
    else if(partner1.value.toUpperCase() == "SHREY" && partner2.value.toUpperCase() == "BUSHRA"){
        percent = 100;
    }
    else if(partner1.value.toUpperCase() == "NEETU" && partner2.value.toUpperCase() == "NEHA"){
        percent = 100;
    }
    else if(partner1.value.toUpperCase() == "RAJAT" && partner2.value.toUpperCase() == "HARSHA"){
        percent = 100;
    }
    else if(partner1.value.toUpperCase() == "RAJAT" && partner2.value.toUpperCase() == "VARDA"){
        percent = 100;
    }
    else{
        percent = Math.floor(Math.random()*100);
    }

    result.innerHTML = `${percent}%`;
    result.style.setProperty('--percent',percent+"%");

    if(percent == 100) result.classList.add('hundred');
    else result.classList.remove('hundred');

    if(percent === 100){
        result.innerHTML += "<br>Perfect Match! <br> You are made for each other";
    }
    else if(percent >= 90){
        result.innerHTML += "<br>Your Partner loves you <br>Keep Going! one day you will be a <br>Perfect Match! <br> You are made for each other";
    }else if(percent >= 80){
        result.innerHTML += "<br>Your Partner is trustful but still need your support.";
    }
    
    // document.write("Hello");

})
