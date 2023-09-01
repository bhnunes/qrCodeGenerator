async function genQr() {
    
    var gapi="https://chart.googleapis.com/chart?cht=qr&chs=";
    var myImg=document.getElementById("img");
    var myText=document.getElementById("qrtext").value;
    var mySize=document.getElementById("size").value;

    if (myText=="") {

        let errorMessage="Text Message Was not Set. Please verify."
        document.getElementById("qrtext").value=errorMessage
        await sleep(2000)
        document.getElementById("qrtext").value=""
        document.getElementById("img").src=""

        throw new Error(errorMessage);
    } else {
        myImg.src=gapi+mySize+"&chl="+myText+"&chf=bg,s,65432100"
    }


};


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};