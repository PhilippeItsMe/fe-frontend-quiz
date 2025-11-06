// ---------------- Toogle Btn & Color Mgt ---------------- //

const background = document.getElementsByClassName('body-wrapper')[0];
const surtitle = document.getElementsByClassName('surtitle')[0];
const title = document.getElementsByTagName('h1')[0];
const subtitle = document.getElementsByClassName('subtitle')[0];
const buttons = document.getElementsByTagName('button');
const subjects = document.getElementsByClassName('subject');

const toggle = document.getElementById('monToggle');

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        background.style.backgroundImage = 'url(assets/images/pattern-background-desktop-light.svg)';
        background.style.backgroundColor = 'var(--grey50)';
        surtitle.style.color = 'var(--blue900)';
        title.style.color = 'var(--blue900)';
        subtitle.style.color = 'var(--grey500)';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'var(--white)';
            buttons[i].style.border = '2px solid var(--white)';
        }
        for (let i = 0; i < subjects.length; i++) {
            subjects[i].style.color = 'var(--blue900)';
        }
    }
    else {
        background.style.backgroundImage = 'url(assets/images/pattern-background-desktop-dark.svg)'
        background.style.backgroundColor = 'var(--blue900)';
        surtitle.style.color = 'var(--white)';
        title.style.color = 'var(--white)';
        subtitle.style.color = 'var(--blue300)';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'var(--blue850)';
            buttons[i].style.border = '2px solid var(--blue850)';
        }
        for (let i = 0; i < subjects.length; i++) {
            subjects[i].style.color = 'var(--white)';
            
        }
    }
});


// ---------------- Load Data ---------------- //

async function loadData() {
    try {
        const response = await fetch('assets/data/data.json');
        const data = await response.json();
        quizData = data;
        
        // Start with default data
        updateDataDisplay(weeklyElement);
        selectButton(weeklyElement);
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
    }
}





// ---------------- Quizz ---------------- //

const buttonOne = document.getElementsByTagName('button')[0];
const buttonTwo = document.getElementsByTagName('button')[1];
const buttonThree = document.getElementsByTagName('button')[2];
const buttonFour = document.getElementsByTagName('button')[3];

