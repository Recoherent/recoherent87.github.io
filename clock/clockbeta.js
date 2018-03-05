var d, h, m, s, color;
function displayTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    bh = (h*10).toString(16);
    bm = (m*4).toString(16);
    bs = (s*4).toString(16);
    
    backgroundcolor = "#"+bh+bm+bs;
    
    //add zero to the left of the numbers if they are single digits
    if(h <= 9) h = '0'+h;
    if(m <= 9) m = '0'+m;
    if(s <= 9) s = '0'+s;

    displaycolor = "#"+h+m+s;
    
    //set background color
    document.body.style.background = backgroundcolor;
    //set time
    document.getElementById("hex").innerHTML = displaycolor;

    //retrigger the function every second
    setTimeout(displayTime, 1000);
}

displayTime();
