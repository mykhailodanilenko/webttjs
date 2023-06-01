const continueBtn = document.querySelector('#continue');
const form = document.querySelector('form');
const correctAnswersCount = document.querySelector('#correctAnswersCount');
const incorrectAnswersCount = document.querySelector('#incorrectAnswersCount');
const testPassed = document.querySelector('#passed');

const stepsFlow = [
    'step1',
    'step2',
    'step3',
    'results',
];

function checkAnswers(answers) {
    let correct = 0;
    if (answers.step1 === '9') correct++;
    if (answers.step2 === 'opt2') correct++;
    if (answers['step3-2020'] && answers['step3-2019']) correct++;

    correctAnswersCount.textContent = String(correct);
    incorrectAnswersCount.textContent = String(3 - correct);

    if (correct > 1) {
        testPassed.textContent = 'пройдено'
    } else {
        testPassed.textContent = 'не пройдено'
    }
}

function* navigation() {
    let count = 0;
    while (true) {
        if (stepsFlow[count] === 'step2') {
            continueBtn.textContent = 'Показати результати'
        }

        if (stepsFlow[count] === 'step3') {
            continueBtn.style.display = 'none';
            const formData = Object.fromEntries(new FormData(form).entries());
            checkAnswers(formData);
        }

        const currentStep = document.querySelector(`#${stepsFlow[count]}`);
        const nextStep = document.querySelector(`#${stepsFlow[count + 1]}`);

        if (currentStep && nextStep) {
            currentStep.classList.remove('visible');
            nextStep.classList.add('visible');
        }

        yield count;
        count++;
    }
}

const navigationInstance = navigation();

continueBtn.addEventListener('click', (_event) => {
    navigationInstance.next();
})
