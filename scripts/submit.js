"use strict";

// Function is responsible for the record button actions
// For now it is doing some dumb stuff in vanilla js


// Function responsible for the submit button actions
function submit_button(){

    // Picks the active prompt
    let incomplete_item = document.getElementsByClassName("stepper-item active")[0];
    let incomplete_tag = $(".stepper-item.active > .step-counter")[0].innerHTML;
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

    $.ajax({
        type: "POST",
        url: "storeImage.php",
        data: {image: $("#my_result > #image").attr('src'), tag: incomplete_tag}
    });

}

// Load the first prompt when the webpage is ready
$(document).ready(async function(){

    let fileName = "ASL_";
    fileName += $(".step-counter")[0].innerHTML + "\.mp4";
    fileName = "./assets/ASL/" + fileName;
    
    $("<video controls />").attr('src',fileName).attr('type','video/mp4').prependTo($('.prompt'));
});
