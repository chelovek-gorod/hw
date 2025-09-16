import { EXERCISES_KEYS, EXERCISES_RU, EXERCISES_IMAGES, MUSCLES_KEYS, MUSCLES_RU, EXERCISES_MUSCLES, EXERCISES_DATA, EXERCISES_TOP_LIST, EXERCISES_BOTTOM_LIST } from './constants.js'

const dayCountSpan = document.querySelector('header').querySelector('h2').querySelector('span')
const dayNameH1 = document.querySelector('header').querySelector('h1')
const nextDayButton = document.getElementById('next-day-button')
nextDayButton.onclick = nextDay
const main = document.querySelector('main')

let currentDay = 0

const dayNameList = ['ноги, руки и пресс', 'плечи, спина и грудь']

nextDay()

function nextDay() {
    currentDay++
    setNewDay()
}

function setNewDay() {
    main.innerHTML = ''
    dayCountSpan.innerText = currentDay
    const typeIndex = currentDay % 2 === 0 ? 0 : 1
    dayNameH1.innerText = dayNameList[ typeIndex ].toUpperCase()
    
    const type = typeIndex === 0 ? EXERCISES_BOTTOM_LIST : EXERCISES_TOP_LIST
    type.forEach( addExercise )
}

function addExercise(exercisesList, index) {
    const dayIndex = Math.ceil(currentDay * 0.5)

    const exercisesArr = exercisesList[dayIndex % exercisesList.length]
    if (exercisesArr.length === 1) {
        const exercise = exercisesArr[0]
        main.innerHTML += `<h4>${index + 1} упражнение</h4><h2>${EXERCISES_RU[exercise]}</h2>`
        addImages(exercise)
        main.innerHTML += `<div>Подходы : ${EXERCISES_DATA[exercise].sets}</div>`
        main.innerHTML += `<div>Повторы : ${EXERCISES_DATA[exercise].reps.min} - ${EXERCISES_DATA[exercise].reps.max}</div>`
    } else {
        main.innerHTML += `<h4>${index + 1} СуперСет</h4>`
        exercisesArr.forEach( exercise => {
            main.innerHTML += `<h2>${EXERCISES_RU[exercise]}</h2>`
            addImages(exercise)
            main.innerHTML += `<div>Подходы : ${EXERCISES_DATA[exercise].sets}</div>`
            main.innerHTML += `<div>Повторы : ${EXERCISES_DATA[exercise].reps.min} - ${EXERCISES_DATA[exercise].reps.max}</div>`
        })
    }
    main.innerHTML += '<hr>'

    // main.append()
}

function addImages(exercise) {
    const div = document.createElement('div')
    div.className = 'img-animation-container'
    main.append(div)

    for( let i = 0; i < EXERCISES_IMAGES[exercise]; i++ ) {
        const img = new Image()
        img.src = `./assets/${exercise}/${i}.png`
        img.className = `img${EXERCISES_IMAGES[exercise]}-${i + 1}`
        div.append(img)
    }
}

