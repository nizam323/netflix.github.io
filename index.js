// FAQ btn logic

function clk(elements) {
    let qe = elements.lastElementChild;
    let answ = elements.nextElementSibling;
    
    let unHide = document.querySelector(".d-block");
    
    let reslt = answ.classList.contains("d-block");
    
    if (reslt == false) {
        answ.classList.toggle("d-block");
        qe.classList.add("btn-animation")
    }
    
    unHide.classList.remove("d-block")
    qe.classList.remove("btn-animation")
    
    
};
