import { EXERCISES_DATA } from './exercises.js'
import { MUSCLES_RU } from './muscles.js'
import { EXERCISES_TOP_LIST, EXERCISES_BOTTOM_LIST } from './training.js'

const dayCountSpan = document.querySelector('header').querySelector('h2').querySelector('span')
const dayNameH1 = document.querySelector('header').querySelector('h1')
const dayTypeH3 = document.querySelector('header').querySelector('h3')
const nextDayButton = document.getElementById('next-day-button')
nextDayButton.onclick = nextDay
const main = document.querySelector('main')

let currentDay = 0
let isSuperSetDay = false
let superSetData = {
    range: 5,
    isOnList:[1, 4]
}

let exerciseNumber = 0

const dayNameList = [
    'ноги, руки и пресс',
    'плечи, спина и грудь'
]

nextDay()

function nextDay() {
    currentDay++
    isSuperSetDay = superSetData.isOnList.includes( currentDay % superSetData.range )
    
    main.innerHTML = ''
    exerciseNumber = 0

    dayCountSpan.innerText = currentDay

    const typeIndex = currentDay % 2 === 0 ? 0 : 1
    dayNameH1.innerText = dayNameList[ typeIndex ].toUpperCase()

    dayTypeH3.innerText = isSuperSetDay ? 'День СуперСетов' : 'Одиночные упражнения'
    
    const type = typeIndex === 0 ? EXERCISES_BOTTOM_LIST : EXERCISES_TOP_LIST
    type.forEach( addExercise )
}

function addExercise(exercisesList) {
    const dayIndex = Math.ceil(currentDay * 0.5)

    const exercisesArr = exercisesList[dayIndex % exercisesList.length]
    if (exercisesArr.length === 1) addSingleExercise(exercisesArr[0])
    else {
        if (isSuperSetDay) addSetOfExercises(exercisesArr)
        else exercisesArr.forEach(addSingleExercise)
    }
}

function addSingleExercise(exercise) {
    exerciseNumber++
    main.innerHTML += `<h4>${exerciseNumber} упражнение</h4>`
    addExerciseData(exercise)
    main.innerHTML += '<hr>'
}

function addSetOfExercises(exercisesArr) {
    exerciseNumber++
    main.innerHTML += `<h4>${exerciseNumber} СуперСет</h4><h6>Чередуем упражнения без отдыха</h6><h5>Отдых между подходами 60 секунд</h5>`
    exercisesArr.forEach( addExerciseData )
    main.innerHTML += '<hr>'
}

function addExerciseData(exercise) {
    main.innerHTML += `<h2>${EXERCISES_DATA[exercise].name}</h2>`
    addImages(exercise)
    main.innerHTML += `<div>Подходы : ${EXERCISES_DATA[exercise].sets}</div>`
    main.innerHTML += `<div>Повторы : ${EXERCISES_DATA[exercise].reps.min} - ${EXERCISES_DATA[exercise].reps.max}</div>`
    
    if (EXERCISES_DATA[exercise].description) main.innerHTML += `<p>${EXERCISES_DATA[exercise].description}</p>`

    main.innerHTML += `<details><summary>мышцы:</summary>${addMuscles( EXERCISES_DATA[exercise].muscles )}</details>`
    main.innerHTML += '<hr>'
}

function addMuscles(muscles) {
    let html = ''
    if (muscles.hi.length) html += `<p>ОСНОВНЫЕ: <b>${muscles.hi.map(key => MUSCLES_RU[key]).join(', ')}</b></p>`
    if (muscles.low.length) html += `<p>Вспомогательные: <i>${muscles.low.map(key => MUSCLES_RU[key]).join(', ')}</i></p>`
    return html
}

function addImages(exercise) {
    const div = document.createElement('div')
    div.className = 'img-animation-container'
    main.append(div)

    const images = EXERCISES_DATA[exercise].images

    for( let i = 0; i < images; i++ ) {
        const img = new Image()
        img.src = `./assets/${exercise}_${i}.webp`
        img.className = `img${images}-${i + 1}`
        div.append(img)
    }
}

