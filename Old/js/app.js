const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

var mainlogo = document.getElementById("main-logo");

window.onscroll = function() {scrollFunctions()};

function scrollFunctions() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mainlogo.classList.add('small')
        mainlogo.classList.remove('large')
    }
    else {
        mainlogo.classList.remove('small')
        mainlogo.classList.add('large')
    }
}

function PageTransitions(){
    //Button click active class
    for(let i=0;i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Activator
    allSections[0].addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
    
}

PageTransitions();