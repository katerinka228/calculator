let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
let equal = document.querySelector('#equal');

for (item of btn)
{
    item.addEventListener("click", (e) => {
        btnText = e.target.textContent;
        if (btnText === "x")
        {
            btnText = '*';
        }
        if (btnText === "÷")
        {
            btnText = '/';
        }
        if (btnText === "–")
        {
            btnText = '-';
        }
        screen.value += btnText;

    })
}

equal.onclick = function () {
    screen.value = eval(screen.value);
};

