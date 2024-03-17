



function draw_pin(object) {

    // console.log("draw_pin");

    let x = object.x;
    let y = object.y;
    let rad = object.rad;

    let lw = 0.005;
    let fillMode = 0;
    let [hue,sat,lit] = [0,35,35];
    let alpha = 255;



    drawCircle(x, y, rad, lw, hue, sat, lit, alpha, fillMode);


}



function draw_pin_hover(object) {

    // console.log("draw_pin");

    let x = object.x;
    let y = object.y;
    let rad = object.rad;

    let pinNum = object.pinNum;

    let lw = 0.003;
    let fillMode = 0;
    let [hue,sat,lit] = [0,35,35];
    let alpha = 255;

    drawCircle(x, y, rad, lw, hue, sat, lit, alpha, fillMode);



    let radOuter = rad + 0.01;

    drawCircle(x, y, radOuter, lw, hue, sat, lit, alpha, 1);

    draw_storyCard(pinNum);

}


function draw_pin_active(object) {

    // console.log("draw_pin");

    let x = object.x;
    let y = object.y;
    let rad = object.rad;

    let pinNum = object.pinNum;

    let lw = 0.003;
    let fillMode = 0;
    let [hue,sat,lit] = [210,35,35];
    let alpha = 255;

    drawCircle(x, y, rad, lw, hue, sat, lit, alpha, fillMode);



    // let radOuter = rad + 0.01;

    // drawCircle(x, y, radOuter, lw, hue, sat, lit, alpha, 1);

    draw_storyCard(pinNum);

}