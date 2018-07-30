function anotherPage(){
    document.location.href = "https://www.youtube.com/";
}


var count = 0;
function changeStyle(){
    count++;
    var st1 = document.getElementsByClassName('butContainer1');
    var st2 = document.getElementsByClassName('butContainer2');
    var st3 = document.getElementsByClassName('butContainer3');
    var st4 = document.getElementsByClassName('but');
    if(count % 2 != 0){
    for(var i = 1; i <= st1.length; i++){
            st1[i-1].style.background = "linear-gradient(to bottom, #000046, #1cb5e0)";
            st2[i-1].style.background = "#1cb5e0";
            st3[i-1].style.background = "linear-gradient(to top, #000046, #1cb5e0)";
                for(var a = 0; a < st4.length; a++){
                    st4[a].style.background = "linear-gradient(to right, #000046, #1cb5e0)";
                }
            // alert('lol');
        }
    }else{
        for(var i = 1; i <= st1.length; i++){
            st1[i-1].style.background = "linear-gradient(to top, #3F5EFB, #FC466B)";
            st2[i-1].style.background = "#3F5EFB";
            st3[i-1].style.background = "linear-gradient(to bottom, #3F5EFB, #FC466B)";
                for(var a = 0; a < st4.length; a++){
                    st4[a].style.background = "linear-gradient(to right, #ff5e62, #ff9966)";
                }
        }
    }   
}

function clearSky(){
    document.body.innerHTML = "";
    window.location = "./hw4_3.html";
}