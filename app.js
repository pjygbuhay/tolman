

var pics = [
    "Tolmans/tolman4.bmp" ,
    "Tolmans/celso Sr1.jpg" ,
    "Tolmans/celso sr2.jpg" ,
    "Tolmans/gloria-dorothy.jpg" ,
    "Tolmans/gloria1.jpg" ,
    "Tolmans/gloria2.jpg" ,
    "Tolmans/gloria3.jpg" ,
    "Tolmans/tolmans.jpg" ,
    "Tolmans/cpt tolman.jpg" ,
    "Tolmans/cpt tolman1.jpg" ,
    "Tolmans/ygbuhay.jpg" ,
    "Tolmans/aunt vicky.jpg" 

];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function() {
    if(counter === 12){
        counter = 0;
    }    
   img.src = pics[counter]
    counter = counter + 1;

    });

   





    



