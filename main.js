var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;




function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier(modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults() {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255 + 1);
        random_number_g = Math.floor(Math.random() * 255 + 1);
        random_number_b = Math.floor(Math.random() * 255 + 1);

       document.getElementById("result_confidence").innerHTML = "Detected dog -"+dog+"Detected cat"+cat+"Detected lion"+lion+"Detected cow"+cow;
       document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       document.getElementById("result_label").innerHTML = "Detected voice is of -"+ results[0].label;
       document.getElementById("result.label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       img = document.getElementById("animal_images");

       if(results[0].label == "Barking") {
           img.src = "dog.gif"
           dog = dog + 1;
       }else if (results[0].label == "Meowing") {
           img.src = "200w.gif"
           cat = cat + 1;
       }else if (results[0].label == "Roaring") {
           img.src = "lion-smile.gif"
           lion = lion + 1;
       }else if (results[0].label == "Mooing") {
        img.src = "giphy.gif"
        cow = cow + 1;
    }

    
    }