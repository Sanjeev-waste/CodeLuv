let btn_stop_time = document.querySelector("#stop_time");

function dispalyTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs > 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

let time_interval = setInterval(dispalyTime,1000);


btn_stop_time.addEventListener('click',()=>{
    if(btn_stop_time.innerHTML == "Stop Time"){
        clearInterval(time_interval);
        btn_stop_time.innerHTML = "Start Time";
        btn_stop_time.style.color = "green";
    }else{
        time_interval = setInterval(dispalyTime,1000);
        btn_stop_time.innerHTML = "Stop Time";
        btn_stop_time.style.color = "red";
    }

})