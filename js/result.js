const tabBtn = document.querySelectorAll(".btn");

for (var i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function () {
        var tabName = this.dataset.btn;
        var showtab = document.getElementById(tabName);

        var allShowTab = document.querySelectorAll('.show-tab');
        var allTabBtn = document.querySelectorAll(".btn");

        for (var j = 0; j < allShowTab.length; j++) {
            allShowTab[j].style.display = "none";
        }

        for (var k = 0; k < allTabBtn.length; k++) {
            allTabBtn[k].classList.remove('active');
        }



        showtab.style.display = 'block';
        this.classList.add('active');
    });
}
document.querySelector('.btn').click();


// const slider = document.querySelector('.btns');
// const slides = document.querySelectorAll('.btn');
// const prevBtn = document.querySelector('.prev-btn');
// const nxtBtn = document.querySelector('.nxt-btn');

// let slidesIndex = 0;

// prevBtn.addEventListener('click', prevbtn);
// nxtBtn.addEventListener('click', nxtbtn);

// function prevbtn() {
//     slides[slidesIndex].classList.remove('active');

//     slidesIndex = (slidesIndex === 0) ? slides.length - 1 : slidesIndex - 1;
//     slides[slidesIndex].classList.add('active');
    
// }

// function nxtbtn() {
//     slides[slidesIndex].classList.remove('active');

//     slidesIndex = (slidesIndex === slides.length - 1) ? 0 : slidesIndex + 1;
//     slides[slidesIndex].classList.add('active');
   
// }