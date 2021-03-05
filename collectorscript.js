var device;
var a;

function chrome() {

    var ischrome = window.chrome ? true : false;
    return ischrome;
};

async function collector() {

    if (chrome()) {

        console.log('Collecting data');
    };

    device = {};
    a = {};
    
    if(!window.screen){

        return;
    };

    device.window_screen_availWidth = window.screen.availWidth; 
    device.window_screen_availHeight = window.screen.availHeight;
    device.window_screen_height = window.screen.height;
    device.window_innerHeight = window.innerHeight;
    device.window_innerWidth = window.innerWidth;
    device.window_outerWidth = window.outerWidth;

    function generate_bmak_fpcf_rCFP(){

        var i = document.createElement('canvas');
        i.width = 16, i.height = 16;
        var c = i.getContext('2d');
        c.font = '6pt Arial', a.rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(a.rVal, 1, 12);
        for (var b = i.toDataURL(), d = 0, s = 0; s < b.length; s++) {
            d = (d << 5) - d + b.charCodeAt(s), d &= d;
        };
        a.rCFP = d.toString();
        return a.rCFP;
    };

    device.bmak_fpcf_rCFP = await generate_bmak_fpcf_rCFP();

    function gen_canvas(t){

        var n = document.createElement('canvas');
        n.width = 280, n.height = 60, n.style.display = 'none';
        var o = n.getContext('2d');
        o.fillStyle = 'rgb(102, 204, 0)', o.fillRect(100, 5, 80, 50), o.fillStyle = '#f60', o.font = '16pt Arial', o.fillText(t, 10, 40), o.strokeStyle = 'rgb(120, 186, 176)', o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
        var m = n.toDataURL();
        e = 0;
        for (var r = 0; r < m.length; r++) {
            e = (e << 5) - e + m.charCodeAt(r), e &= e;
        };
        e = e.toString();

        return e;
    };

    device.canvas_1 = await gen_canvas('<@nv45. F1n63r,Pr1n71n6!');
    device.canvas_2 = await gen_canvas('m,Ev!xV67BaU> eh2m<f3AG3@');
    device.navigator_plugins_length = navigator.plugins.length;
    device.navigator_productSub = navigator.productSub;

    fetch('http://localhost:3000/device_api', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(device)
    });
};

collector();