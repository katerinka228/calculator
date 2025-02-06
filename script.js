let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for (item of btn) {
    item.addEventListener("click", (e) => {
        btnText = e.target.textContent;
        if (btnText === "x") {
            btnText = '*';
        } else if (btnText === "÷") {
            btnText = '/';
        } else if (btnText === "–") {
            btnText = '-';
        }

        correctInput(btnText);
    })
}


let equal = function () {
    if (screen.value !== '') {
        if (screen.value.includes("/0") && !screen.value.includes("/0.")) {
            screen.value = 'Ошибка';
        } else {
            screen.value = eval(screen.value);
        }
    }
};

let sqrt = function () {
    if (screen.value >= 0) {
        screen.value = Math.sqrt(screen.value);
    }
    else {
        screen.value = 'Ошибка';
    }
};

let pow = function () {
    screen.value = Math.pow(screen.value, 2);
};

let backSpace = function () {
    screen.value = screen.value.substring(0, screen.value.length - 1);
};

let clearAll = function () {
    screen.value = "";
};

let correctInput = function (textBtn) {
    if (screen.value === '') {
        if (!(textBtn === '+' || textBtn === '*' || textBtn === '/' || textBtn === '.')) {
            screen.value += textBtn;
        }
    } else {
        let lastChar = screen.value.substring(screen.value.length - 1);
        let condition1 = lastChar === '+' || lastChar === '*' || lastChar === '/' || lastChar === '.' || lastChar === '-';
        let condition2 = textBtn === '+' || textBtn === '*' || textBtn === '/' || textBtn === '.' || textBtn === '-';
        if (!(condition1 && (condition2))) {
            screen.value += textBtn;
        }
    }
}





