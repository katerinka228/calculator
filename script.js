let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
// let equal = document.querySelector('#equal');

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

// equal.onclick = function () {
//     screen.value = eval(screen.value);
// };
let equal = function ()
{
    screen.value = eval(screen.value);
};

let sqrt = function ()
{
    screen.value = Math.sqrt(screen.value);
};

let pow = function ()
{
    screen.value = Math.pow(screen.value, 2);
};

let backSpace = function () {
    screen.value = screen.value.substring(0, screen.value.length - 1);
};

let clearAll = function () {
    screen.value = "";
};