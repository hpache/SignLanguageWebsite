"use strict";

// Function is responsible for the record button actions
// For now it is doing some dumb stuff in vanilla js
function record_button(){

    let timerID;

    let record_area = document.getElementsByClassName("video")[0];
    let text = record_area.getElementsByTagName("p")[0];

    let n = 5;
    text.innerHTML = "Recording will start in " + n + " seconds";
    timerID = setInterval(countdown, 1000);

    // Countdown function
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

    // Function simulating the recording process
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


// Function responsible for what happens when the restart button is pressed
function restart_button(){
    let record_area = document.getElementsByClassName("video")[0];
    let text = record_area.getElementsByTagName("p")[0];

    text.innerHTML = "Restarting recording";

    // Calls on the record_button function
    record_button();
}


// Function responsible for the submit button actions
function submit_button(){

    // Picks the active prompt
    let incomplete_item = document.getElementsByClassName("stepper-item active")[0];

    // If there is still an active prompt..
    if (incomplete_item != null){

        // Mark the prompt completed
        incomplete_item.className = "stepper-item completed";

        // If there is still more incompleted prompts..
        if ($(".stepper-item.active > .step-counter")[0]){

            // Start file name creation for prompt video
            let fileName = "ASL_";
            // Get the inner html for the active step, append to that the .mp4 file type
            fileName += $(".stepper-item.active > .step-counter")[0].innerHTML + "\.mp4";
            // Get the full directory to the asset
            fileName = "./assets/ASL/" + fileName;
            // Remove the current prompt
            $('video').remove();
            // Add a new video tag with the new prompt video
            $("<video controls />").attr('src',fileName).attr('type','video/mp4').prependTo($('.prompt'));
        }
    }
    // If there aren't anymore active prompts then you are done!
    else{
        alert("You are finished!");
    }

    // Resetting the recording process
    let record_area = document.getElementsByClassName("video")[0];
    let text = record_area.getElementsByTagName("p")[0];

    text.innerHTML = "I am a Video";
}

// Load the first prompt when the webpage is ready
$(document).ready(function(){

    let fileName = "ASL_";
    fileName += $(".step-counter")[0].innerHTML + "\.mp4";
    fileName = "./assets/ASL/" + fileName;
    
    $("<video controls />").attr('src',fileName).attr('type','video/mp4').prependTo($('.prompt'));
});
