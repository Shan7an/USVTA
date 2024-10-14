const tabBox = document.querySelectorAll('.box');

for (var i = 0; i < tabBox.length; i++) {
    tabBox[i].addEventListener('click', function () {
        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);



        var allTabCon = document.querySelectorAll('.content-box');
        var allTabBox = document.querySelectorAll('.box');

        for (var j = 0; j < allTabCon.length; j++) {
            allTabCon[j].style.display = "none";
        }

        for (var k = 0; k < allTabBox.length; k++) {
            allTabBox[k].classList.remove('active');
        }


        tabContent.style.display = 'block';
        this.classList.add('active');

    });
}

document.querySelector('.box').click();

/* 
function open() {
    document.querySelector('#list').style.left = '0p%';
}
function close() {
    document.querySelector('#list').style.left = '-100%';
} */