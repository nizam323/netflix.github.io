// FAQ btn logic

function clk(elements) {
    let btnAnima = elements.lastElementChild;
    let ans = elements.nextElementSibling;
    let unHide = document.querySelector(".d-block");
    let unHideBtn = document.querySelector(".btn-animation");

    let result = ans.classList.contains("d-block");

    if (result == false) {
        ans.classList.toggle("d-block");
        btnAnima.classList.toggle("btn-animation");
    }

    if (unHide) {
        unHideBtn.classList.remove("btn-animation");
        unHide.classList.remove("d-block");
    }
};