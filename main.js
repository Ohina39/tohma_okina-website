const drawCanvas = () => {
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "在庫切れです";
    canvas.style.color = '#00FF00';
    canvas.style.backgroundColor = 'red'; // 背景色変更
    canvas.style.padding = '10px'; // 領域を広くする
    console.log("a");
}

const myfunc1 = () => {

    console.log("a");
}




function togglePopup1() {
    var popup = document.getElementById("imgPopup1");
    if (popup.style.display === 'none') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
  }



function OnLinkClick() {
    var linkelem = document.getElementById("PopupLink1");
    var clientRect = linkelem.getBoundingClientRect();

    var elem = document.getElementById("PopupFrame1");
    elem.style.visibility = "visible"

    elem.style.left = "300px";
    elem.style.top = "10px";;
}

function OnCloseLinkClick() {
    var elem = document.getElementById("PopupFrame1");
    elem.style.visibility = "hidden";
}

