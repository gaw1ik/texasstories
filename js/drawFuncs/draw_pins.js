





function draw_pins(object) {

    // console.log("draw_pins")

    

    // let nPins = PINS.length;
    


    for(let i=0; i<N_PINS; i++) {

        let pin_object = {};
        pin_object.x = PINS[i].x;
        pin_object.y = PINS[i].y;
        pin_object.rad = 0.01;

        


        if( PINS[i].isHover ){
            pin_object.pinNum = i;
            draw_pin_hover(pin_object);
        } else {
            draw_pin(pin_object);
        }

        if( PINS[i].isActive ){
            pin_object.pinNum = i;
            // console.log("pin ",i," was active")
            draw_pin_active(pin_object);
        }


        



    }

}