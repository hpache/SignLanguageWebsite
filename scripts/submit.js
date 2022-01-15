"use strict"

function record_button(){

    let timerID;

    let record_area = document.getElementsByClassName("video")[0];
    let text = record_area.getElementsByTagName("p")[0];

    let n = 5;
    text.innerHTML = "Recording will start in " + n + " seconds";
    timerID = setInterval(countdown, 1000);

    function countdown(){

        if (n == 0){
            clearInterval(timerID);
            timerID = null;
            record();
        }
        else{
            n -= 1;
            text.innerHTML = "Recording will start in " + n + " seconds";
        }
    }

    function record(){
        let recording_time = 16;
        text.innerHTML = "Recording time left: " + recording_time;

        timerID = setInterval(function(){
            if (recording_time == 0){
                clearInterval(timerID);
                timerID = null;
                text.innerHTML = "Done Recording!";
            }
            else{
                recording_time -= 1;
                text.innerHTML = "Recording time left: " + recording_time;
            }
        }, 1000);
    }

}

function restart_button(){
    let record_area = document.getElementsByClassName("video")[0];
    let text = record_area.getElementsByTagName("p")[0];

    text.innerHTML = "Restarting recording";

    record_button();
}

function submit_button(){

    let incomplete_item = document.getElementsByClassName("stepper-item active")[0];

    if (incomplete_item != null){

        incomplete_item.className = "stepper-item completed";
    }
    else{
        alert("You are finished!");
    }

    let record_area = document.getElementsByClassName("video")[0];
    let text = record_area.getElementsByTagName("p")[0];

    text.innerHTML = "I am a Video";
}

