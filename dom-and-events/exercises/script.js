function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', function (event) {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("mouseover", function (event) {
        button.style.backgroundColor = "red" //am I also supposed to be coding in the style.css?  Otherwise, I don't understand how to set this color.
     });
}
 //when the button is clicked, the <p id="statusReport">The shuttle is on the ground</p> changes to <p id="statusReport">Houston, we have liftoff!</p>
 //when the curson goes over id="abortMission" the button background turns red