function calcNumbers(result) {
    document.querySelector('.area').value += result;
}


function percentage(result) {
    var result1 = String(result);
    if (result1.includes("%")) {
        var a, b, percent;
        var splitWord = [];
        a = Number(splitWord[0]);
        b = Number(splitWord[1]);
        percent = (a / 100 * b);
        document.querySelector('.area').value = percent;
    }
}


function makeNegative(result) {
    if (result.charAt(0) == '_') {
        document.querySelector('.area').value = result.replace('-', '');
    }
    else {
        document.querySelector('.area').value = '-' + result;
    }
}



const body = document.querySelector("body"),
modeToggle = document.querySelector(".drak-light");

modeToggle.addEventListener("click" ,() =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    if(!body.classList.contains("dark"))
    {
        localStorage.setItem("mode", "light-mode");
    }
    else
    {
        localStorage.setItem("mode", "dark-mode");
    }  
});


