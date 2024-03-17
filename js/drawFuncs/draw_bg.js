





function draw_bg(object) {

    // console.log("draw_bg")

    

    let [hue,sat,lit] = [object.hue,object.sat,object.lit];
    let alpha = object.alpha;
    // let [hue,sat,lit] = [233,69,60];

    // 0.65	0.69	0.60

    // let alpha = 255;

    drawRect(-artboardWo2, 0, artboardWo2*2, 1, lineWidth=0.005, hue, sat, lit, alpha, 0);

}