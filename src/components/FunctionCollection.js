export function m1 (id) {
    console.log(document.getElementById(id).style.marginTop,id);
    // var style = document.getElementById(id).style.transform;
    // if(style !== ""){
    // }
    var x = document.getElementById(id).style.marginLeft;
    var y = document.getElementById(id).style.marginTop;
    if(x === ""){
        x = 0;
    }else{
        x = x.substr(0, x.length - 2);
    }
    if(y === ""){
        y = 0;
    }
    else{
        y = y.substr(0, y.length - 2);
    }

    var deg = getRotateVal(document.getElementById(id).style.transform);
    
    x = getPosX(+x, deg);
    y = getPosY(+y, deg);

    console.log(x,y);

    document.getElementById(id).style.marginLeft = `${x}px`;
    document.getElementById(id).style.marginTop = `${y}px`;
}

export function m2 (id) {
    let val = getRotateVal(document.getElementById(id).style.transform);
    val -= 15;
    document.getElementById(id).style.transform = `rotate(${val}deg)`;
}

export function m3 (id) {
    
    let val = getRotateVal(document.getElementById(id).style.transform);
    val += 15;
    document.getElementById(id).style.transform = `rotate(${val}deg)`;
}

export function l1 (id) {
    document.getElementById(id).nextElementSibling.innerHTML = "Hi";
}

export function l2(id) {
    document.getElementById(id).nextElementSibling.innerHTML = "Hmmmm";
}

export function c1() {
    setTimeout(() => {
        
    }, 1000);
}

function getRotateVal(rotate){
    if(rotate !== '')
    {
        try{
            rotate = rotate.split('rotate(')[1];
            rotate = rotate.substr(0, rotate.indexOf(')'));
            rotate = rotate.substr(0, rotate.length - 3);
            console.log("Run", rotate);
            return +rotate;
        }catch{
            return 0;
        }
    }
    else{
        return 0;
    }
}

function getPosX(val, deg){
    // console.log("X", val, deg+90 , Math.sin((deg+90)*Math.PI/180))
    return val +  (20 * (Math.cos((deg)*Math.PI/180)))
}
function getPosY(val, deg){
    // console.log("Y", val, deg+90 , Math.cos((deg+90)*Math.PI/180))
    return val + (20 * (Math.sin((deg)*Math.PI/180)))
}