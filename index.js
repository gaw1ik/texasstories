// Copyright © 2022 Brian Gawlik
// See LICENSE.txt for license information

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// addIdToAllScripts();


// Settings
xCenterOffset = 0;
yCenterOffset = 0;
xOrigin = 0.5;
yOrigin = 0.0;
canvasPad = 0.10;







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Global Variables

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SEED




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PROJECT PARAMS





// finalBlur = 0;
showSpline = 0;
complexityThreshForBlurPixBez = 2;




////////////////////////////////// GLOBAL VARS
batchRun = 0;
maxComplexity = 1;














// Initialize the IMAGES array to hold the image bitmaps
IMAGES = [];


// canvas
canvas0 = document.getElementById("canvas0");
ctx0 = canvas0.getContext("2d");



auxCanvas01 = document.getElementById("auxCanvas01");
ctx_aux01 = auxCanvas01.getContext('2d');

// ctx_aux01 = auxCanvas01.getContext('2d', {willReadFrequently: true});
// ctx_aux01.willReadFrequently = true;

auxCanvas02 = document.getElementById("auxCanvas02");
ctx_aux02 = auxCanvas02.getContext('2d');
// ctx_aux02 = auxCanvas02.getContext('2d', {willReadFrequently: true});


IMAGES[0] = auxCanvas02; // initially this just gets set to the blank auxCanvas02 so when handleResize() is initially called it has something to draw



auxCanvas03 = document.getElementById("auxCanvas03");
ctx_aux03 = auxCanvas03.getContext('2d');

// ctx_aux03 = auxCanvas03.getContext('2d', {willReadFrequently: true});

auxCanvas04 = document.getElementById("auxCanvas04");
ctx_aux04 = auxCanvas04.getContext('2d');


// nLayers = 1;
// CTX = [];
// CANVASES = [];
// // IMAGES_2 = [];

// for(let i=0; i<nLayers; i++) {

//   // create the new canvas element
//   let canvasElement = document.createElement("canvas");
//   canvasElement.id = "layerCanvas" + i;


//   let pageContainer = document.getElementById("pageContainer");

//   pageContainer.appendChild(canvasElement);

//   // let canvas = document.getElementById("auxCanvas01");
//   let ctx = canvasElement.getContext('2d');

//   CTX[i] = ctx;

//   CANVASES[i] = canvasElement;

// }





window.addEventListener('resize', handleResize);











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Mag Stuff...
// canvasMag = document.getElementById("canvasMag");
// ctxMag = canvasMag.getContext("2d");

canvasWindow = document.getElementById("canvasWindow");
ctxWindow = canvasWindow.getContext("2d");

zoomOn = -1;
zoom = 1; // default setting
canvasMagSize = 1.3;
offsetX = 0;
offsetY = 0;
inOrOut = "out";





// window.onload = run();

document.addEventListener("DOMContentLoaded", run);



function run() {

    if(screen.height/screen.width > 1) {
        console.log("Device is Mobile")
        deviceType = "Mobile";
        trigDist = 50;
        pinRad = 0.015;
        canvasWindow.addEventListener('click', on_mouseclick_canvasWindow);
    } else {
        console.log("Device is Desktop")
        deviceType = "Desktop";
        trigDist = 10;
        pinRad = 0.010;
        canvasWindow.addEventListener('mousemove', on_mousemove_canvasWindow);
        canvasWindow.addEventListener('click', on_mouseclick_canvasWindow);
    }




    buildScene(); 




    setup_auxCanvases();
    handleResize();

       
    currentLayerIndex = 0;

    drawAll();



    // // KEY PRESSES AND ZOOM TOOL
    // document.addEventListener('keypress', on_keyPress);


   
  

    console.log("DONE");

    

    
}





function doNothing() {}
















