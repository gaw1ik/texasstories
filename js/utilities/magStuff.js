// Copyright © 2022 Brian Gawlik
// See LICENSE.txt for license information


// function on_keyPress(e) {

//     let keyCode = e.code;
    
//     if(keyCode=="KeyZ") {

//         zoomOn = zoomOn*-1;

//         // console.log("zoomOn",zoomOn)
//         // console.log("inOrOut",inOrOut)

//         if(zoomOn==1) {
//             if(inOrOut=="in"){
//                 doMagnify(offsetX,offsetY);
//                 return;
//             } else if (inOrOut=="out") {
//                 return;
//             }
//         }

//         if(zoomOn==-1) {
//             document.body.style.cursor = "default";
//             ctxMag.clearRect(0,0,screenW,screenH);
//             handleResize(); // i added this in here to make things work. kinda a hack up. it was fuckin up with tall aspect ratio for some reason.
//             return;
//         }
//     }

//     if(keyCode=="KeyS") {
//         saveImg();
//         return;
//     }

//     if(keyCode=="KeyR") {
//         location.reload();
//         return;
//     }
  
//     // console.log(keyCode)

//     if(keyCode.substr(0,5)=="Digit") {
  
//         if(keyCode=="Digit1") {zoom=1}
//         if(keyCode=="Digit2") {zoom=2}
//         if(keyCode=="Digit3") {zoom=4}
//         if(keyCode=="Digit4") {zoom=8}
    
//         if(inOrOut=="in"){
//             doMagnify(offsetX,offsetY);
//         }

//     }
  
// }




function on_mouseclick_canvasWindow(e) {

    console.log("click");

    let trigDist = 10;


    for(let i=0; i<N_PINS; i++) {

        let [pinProx_X, pinProx_Y] = calcProx(PINS[i]);


        if( pinProx_X<trigDist && pinProx_Y<trigDist ) {
            PINS[i].wasClicked = 1;
            // console.log("clicked PIN ",i);
            // drawAll();
        } else {
            // PINS[i].wasClicked = 0;
            // drawAll();
        }

    }

    //// assume initially there was not a click
    var wasThereAPinClick = 0;

    //// check all the pins to see if any were clicked
    for(let i=0; i<N_PINS; i++) { 

        if( PINS[i].wasClicked ) {
            wasThereAPinClick = 1;
            pinNumClicked = i;
        }
        
    }

    //// if there was a Pin Click set that Pin's state to Active and Update Text
    if( wasThereAPinClick ) {

        for(let i=0; i<N_PINS; i++) { 
            PINS[i].isActive = 0;

            let story_id = "story" + i; 
            let story = document.getElementById(story_id);
            story.style.display = "none"
            story.style.opacity = 0;
        }

        PINS[pinNumClicked].isActive = 1;

        // let story_header = document.getElementById("story_header");
        let story_id = "story" + pinNumClicked; 
        story = document.getElementById(story_id);

        story.style.display = "block";

        t = 0;
        dur = 1000;
        interval = 1000/30;
        fadeInterval = setInterval(fadeStoryIn,interval);
        // story.style.opacity = 1;
    }

    function fadeStoryIn() {

        // console.log("t",t)

        if(t>dur){
            clearInterval(fadeInterval);
        }
        
        story.style.opacity = t / dur;

        t = t + interval;

    }



    //// Reset pin clicked states
    for(let i=0; i<N_PINS; i++) {
        PINS[i].wasClicked = 0;
    }

    drawAll();




}



function on_mousemove_canvasWindow(e) {
    
    inOrOut = "in";


    offsetX = e.offsetX;
    offsetY = e.offsetY;

    let trigDist = 10;

    // console.log("[offsetX,offsetY]",[offsetX,offsetY]);

    console.clear();


    for(let i=0; i<N_PINS; i++) {

        let [pinProx_X, pinProx_Y] = calcProx(PINS[i]);


        if( pinProx_X<trigDist && pinProx_Y<trigDist ) {
            PINS[i].isHover = 1;
            drawAll();
        } else {
            PINS[i].isHover = 0;
            drawAll();
        }

    }

}



function calcProx(thisPIN) {

    let pinX = thisPIN.x; 
    let pinY = thisPIN.y;

    let pinX_px = (0.5+pinX)*canvas0.clientWidth;
    let pinY_px = (1-pinY)*canvas0.clientHeight;

    // if(i==4) {
        // console.log("[offsetX,offsetY]",[offsetX,offsetY]);
    // }

    // if(i==4) {
        // console.log("[pinX_px,pinY_px]",[pinX_px,pinY_px]);
    // }


    let pinProx_X = Math.abs(offsetX-pinX_px);
    let pinProx_Y = Math.abs(offsetY-pinY_px);

    // if(i==4) {
        // console.log("[pinProx_X,pinProx_Y]",[pinProx_X,pinProx_Y]);
    // }

    



    return [pinProx_X, pinProx_Y];

}






