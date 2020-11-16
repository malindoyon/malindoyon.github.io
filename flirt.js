//comment form//
// Depending the answers of the user the story/flow/quiz goes different ways
// Hide all steps that isn't the current one

// Start can go to middle and finish

// Middle can go to start and finish

// Finish can to start

function goToStep(idOfStep, currentStep) {
    console.log(
      "Go to step with the id " +
        idOfStep +
      " from the step with the id " +
        currentStep
    );
  
    let step = document.getElementById(idOfStep);
    let oldStep = document.getElementById(currentStep);
  
    step.classList.toggle("hidden");
    oldStep.classList.toggle("hidden");
  }



  //Pick up line generator//
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let pickuplines = 
[
    '"People are catching Coronavirus but the only thing I’m catching is feelings for you."',
    '"If you were a vegetable, you’d be a ‘cute-cumber.’"',
    '"If you were a Transformer, you’d be ‘Optimus Fine."',
    '"Is your name Google? Because you have everything I’m searching for."',
    '"Are you a time traveler? Because I absolutely see you in my future."',
    '"I seem to have lost my number—can I have yours?"',
    '"Do you like Sea World? Because you’re about to be in my splash zone."',
    '"Girl, if you were a dinosaur, you’d be a Gorgeousaurus."',
    '"Your pussy is in more danger than a seal during Shark Week."',
];

btn.addEventListener('click', function(){
    var randomPickuplines = pickuplines[Math.floor(Math.random() * pickuplines.length)]
    output.innerHTML = randomPickuplines;
})