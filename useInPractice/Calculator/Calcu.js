function get(value) {
    let display = document.getElementsByTagName('textarea')
    display.value += value; 
}

function clearText() {
    let display = document.getElementById('result')
    alert("进入clear")
    display.value = ""; 
}
