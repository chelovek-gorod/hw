import { EXERCISES_DATA, REPS_RANGES } from './exercises.js'
import { MUSCLES_RU } from './muscles.js'
import { EXERCISES_TOP_LIST, EXERCISES_BOTTOM_LIST } from './training.js'
import { getStoredDay, setStoredDay, setStoredExercisesData, getToday } from './storage.js'
import { getWormUpByStep } from './warm-up.js'

const headerTopH2 = document.querySelector('header').querySelector('h2')
const headerMiddleH1 = document.querySelector('header').querySelector('h1')
const headerBottomH3 = document.querySelector('header').querySelector('h3')

const exercisesButton = document.getElementById('button-exercises')
const settingsButton = document.getElementById('button-settings')
exercisesButton.onclick = () => alert('в разработке...')
settingsButton.onclick = () => {
    const confirmAnswer = confirm('СБРОСИТЬ ВЕСЬ ПРОГРЕСС И НАСТРОЙКИ ?')
    if(confirmAnswer) {
        localStorage.clear()
        alert('все очищено!')
        location.reload()
    }
}

const main = document.querySelector('main')

const lastDayFooter = document.querySelector('footer').querySelector('b')
const lastDateFooter = document.querySelector('footer').querySelector('span')

const modalDiv = document.getElementById('modal-shell')
const modalHeader = modalDiv.querySelector('h4')
const modalAnimationDiv = document.getElementById('modal-animation')
const modalRepsDiv = document.getElementById('modal-reps-editor')
const modalRepsSubButton = document.getElementById('modal-reps-sub-button')
modalRepsSubButton.onclick = () => changeReps(-1)
const modalRepsSpanValue = modalRepsDiv.querySelector('span')
const modalRepsAddButton = document.getElementById('modal-reps-add-button')
modalRepsAddButton.onclick = () => changeReps(1)
const modalWeightDiv = document.getElementById('modal-weight-editor')
const modalWeightInput = modalWeightDiv.querySelector('input')
modalWeightInput.onchange = changeWeight
const modalWeightSpan = modalWeightDiv.querySelector('span')
const modalButtonCancel = document.getElementById('modal-button-cancel')
modalButtonCancel.onclick = closeModal
const modalButtonSave = document.getElementById('modal-button-save')
modalButtonSave.onclick = saveRepsWeightChanges

const button = document.createElement('button')
button.className = 'app-button'

let currentDay = 0
let isSuperSetDay = false
let superSetData = {
    range: 5,
    isOnList:[1, 4]
}

let exerciseNumber = 0

startApp()

function clearMain() {
    main.replaceChildren()
    main.innerText = ''
}

function startApp() {
    // storedDay = {day: number 4, lastData: string 'ЧТ 12-01-2025'}
    const storedDay = getStoredDay()
    currentDay = storedDay.day + 1
    isSuperSetDay = superSetData.isOnList.includes( currentDay % superSetData.range )

    fillHeaderDayInfo()
    
    // fill footer
    const [dayOfWeek, lastDate] = storedDay.lastData.split(' ')
    lastDayFooter.innerText = dayOfWeek
    lastDateFooter.innerText = lastDate

    const animation = getImagesAnimation({
        srcs:['0-0.webp', '0-2.webp'],
        classes: ['main-animation-0', 'main-animation-1']
    })
    main.append(animation)

    button.innerText = 'НАЧАТЬ РАЗМИНКУ'
    button.onclick = startWarmUp
    main.append(button)
}

function fillHeaderDayInfo() {
    headerTopH2.innerText = 'день № ' + currentDay
    headerMiddleH1.innerText = currentDay % 2 === 0 ? 'НОГИ, РУКИ и ПРЕСС' : 'ПЛЕЧИ СПИНА и ГРУДЬ'
    headerBottomH3.innerText = isSuperSetDay ? 'День СуперСетов' : 'Одиночные упражнения'
}

function startWarmUp() {
    clearMain()

    const warmUpTitle = document.createElement('h2')
    warmUpTitle.className = 'warmUp-title'
    main.append(warmUpTitle)

    const warmUpDescription = document.createElement('h3')
    warmUpDescription.className = 'warmUp-description'
    main.append(warmUpDescription)

    const warmUpInfo = document.createElement('h4')
    warmUpInfo.className = 'warmUp-info'
    main.append(warmUpInfo)

    const warmUpName = document.createElement('h5')
    warmUpName.className = 'warmUp-name'
    main.append(warmUpName)

    const warmUpTimer = document.createElement('p')
    warmUpTimer.className = 'warmUp-timer'
    main.append(warmUpTimer)

    const warmUpAnimationContainer = document.createElement('div')
    warmUpAnimationContainer.className = 'warmUp-animation'
    main.append(warmUpAnimationContainer)

    button.innerText = 'пропустить'
    main.append(button)

    let warmUpStep = 0
    let warmUpTimeout = 0
    let timer = null
    let isLats = false

    nextWarmUpStep()
    function nextWarmUpStep() {
        
        const step = getWormUpByStep(warmUpStep)

        warmUpTitle.innerText = step.title
        warmUpDescription.innerText = step.description
        warmUpInfo.innerText = step.info
        warmUpName.innerText = step.name

        warmUpAnimationContainer.replaceChildren()
        warmUpAnimationContainer.innerText = ''
        const animation = getImagesAnimation(step.images)
        warmUpAnimationContainer.append(animation)

        warmUpTimeout = Math.ceil(step.time / 1000)
        warmUpTimer.innerText = 'Осталось: ' + warmUpTimeout + ' секунд'

        timer = setTimeout(warmUpTime, 1000)
        button.onclick = skipStep
        
        warmUpStep++
        isLats = warmUpStep > 13
        if (isLats) {
            button.innerText = 'начать тренировку'
            button.onclick = endWarmUp
        } else {
            button.innerText = 'пропустить'
            button.onclick = skipStep
        }
        
    }

    function skipStep() {
        clearTimeout(timer)
        nextWarmUpStep()
    }

    function endWarmUp() {
        clearTimeout(timer)
        clearMain()
        startTraining()
    }

    function warmUpTime() {
        warmUpTimeout--
        warmUpTimer.innerText = 'Осталось: ' + warmUpTimeout + ' секунд'

        if (warmUpTimeout > 0) timer = setTimeout(warmUpTime, 1000)
        else if (!isLats) button.innerText = 'дальше'
    }
}

function trainingDone() {
    clearMain()

    const title = document.createElement('h2')
    title.className = 'done-title'
    title.innerText = 'Тренировка окончена!'
    main.append(title)

    const animation = getImagesAnimation({
        srcs:['0-0.webp', '0-2.webp'],
        classes: ['main-animation-0', 'main-animation-1']
    })
    main.append(animation)
}

function startTraining() {
    clearMain()

    exerciseNumber = 0
    isSuperSetDay = superSetData.isOnList.includes( currentDay % superSetData.range )

    const typeIndex = currentDay % 2 === 0 ? 0 : 1
    const type = typeIndex === 0 ? EXERCISES_BOTTOM_LIST : EXERCISES_TOP_LIST
    type.forEach( addExercise )

    button.innerText = 'ЗАВЕРШИТЬ ТРЕНИРОВКУ'
    button.onclick = () => {
        setStoredDay(currentDay)
        trainingDone()
    }
    main.append(button)
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

    const exerciseH4 = document.createElement('h4')
    exerciseH4.innerText = exerciseNumber + ' упражнение'
    main.append(exerciseH4)

    addExerciseData(exercise)
    
    const exerciseHr = document.createElement('hr')
    main.append(exerciseHr)
}

function addSetOfExercises(exercisesArr) {
    exerciseNumber++

    const exerciseH4 = document.createElement('h4')
    exerciseH4.innerText = exerciseNumber + ' СуперСет'
    main.append(exerciseH4)

    const exerciseH6 = document.createElement('h6')
    exerciseH6.innerText = 'Чередуем два упражнения без отдыха'
    main.append(exerciseH6)

    const exerciseH5 = document.createElement('h5')
    exerciseH5.innerText = 'отдых после пары упражнений 60 секунд'
    main.append(exerciseH5)

    exercisesArr.forEach( addExerciseData )
    
    const exerciseHr = document.createElement('hr')
    main.append(exerciseHr)
}

function addExerciseData(exercise) {
    const exerciseDiv = document.createElement('div')
    exerciseDiv.className = 'exercise-container'

    const exerciseName = document.createElement('h2')
    exerciseName.innerText = EXERCISES_DATA[exercise].name
    exerciseDiv.append(exerciseName)

    const imagesAnimation = getImagesAnimation(EXERCISES_DATA[exercise].images)
    exerciseDiv.append(imagesAnimation)

    const setsDiv = document.createElement('div')
    setsDiv.className = 'exercise-sets'
    setsDiv.innerText = 'ПОДХОДЫ: ' + EXERCISES_DATA[exercise].sets
    exerciseDiv.append(setsDiv)

    const reps = EXERCISES_DATA[exercise].reps
    const repsMin = REPS_RANGES[reps.indexRR].min
    const repsMax = REPS_RANGES[reps.indexRR].max
    const repsDiv = document.createElement('div')
    repsDiv.className = 'exercise-reps'
    repsDiv.id = `${exercise}-reps` // уникальный id
    repsDiv.dataset.exerciseName = exercise
    repsDiv.dataset.indexRR = reps.indexRR
    repsDiv.append('Повторы: ')
    const bold = document.createElement('b')
    bold.textContent = `${repsMin} — ${repsMax}`
    repsDiv.append(bold)
    repsDiv.append(' ' + reps.unit + ' ')
    const editRepsSpan = document.createElement('span')
    editRepsSpan.className = 'edit-exercise-reps'
    editRepsSpan.dataset.exerciseName = exercise
    editRepsSpan.dataset.targetId = repsDiv.id
    editRepsSpan.dataset.type = 'reps'
    editRepsSpan.textContent = ' 🖉'
    editRepsSpan.onclick = editExercisesData
    repsDiv.append(editRepsSpan)
    exerciseDiv.append(repsDiv)

    const weight = EXERCISES_DATA[exercise].weight
    const weightDiv = document.createElement('div')
    weightDiv.className = 'exercise-weight'
    weightDiv.id = `${exercise}-weight`   // формируем id из имени упражнения
    const weightStart = document.createTextNode(weight.isExtra ? "Доп.вес: " : "ВЕС: ")
    const weightValue = document.createElement('b')
    weightValue.textContent = weight.value
    const weightUnit = document.createTextNode(' ' + weight.unit)
    const editWeightSpan = document.createElement('span')
    editWeightSpan.className = 'edit-exercise-weight'
    editWeightSpan.dataset.exerciseName = exercise
    editWeightSpan.dataset.targetId = weightDiv.id
    editWeightSpan.dataset.type = 'weight'
    editWeightSpan.textContent = ' 🖉'
    weightDiv.append(weightStart, weightValue, weightUnit, editWeightSpan)
    editWeightSpan.onclick = editExercisesData
    exerciseDiv.append(weightDiv)
    
    const descriptionDiv = document.createElement('p')
    descriptionDiv.className = 'exercise-description'
    descriptionDiv.innerText = EXERCISES_DATA[exercise].description
    exerciseDiv.append(descriptionDiv)

    const muscles = EXERCISES_DATA[exercise].muscles
    const musclesDetails = document.createElement('details')
    musclesDetails.className = 'exercise-muscles'

    const musclesSummary = document.createElement('summary')
    musclesSummary.innerText = 'Задействованы мышцы'
    musclesDetails.append(musclesSummary)

    // Основные
    const musclesHi = document.createElement('p')
    musclesHi.className = 'muscles-hi'
    if (muscles.hi.length) {
        musclesHi.append('ОСНОВНЫЕ: ')
        const strong = document.createElement('b')
        strong.textContent = muscles.hi.map(key => MUSCLES_RU[key]).join(', ')
        musclesHi.append(strong)
    }
    musclesDetails.append(musclesHi)

    // Вспомогательные
    const musclesLow = document.createElement('p')
    musclesLow.className = 'muscles-low'
    if (muscles.low.length) {
        musclesLow.append('Вспомогательные: ')
        const strong = document.createElement('b')
        strong.textContent = muscles.low.map(key => MUSCLES_RU[key]).join(', ')
        musclesLow.append(strong)
    }
    musclesDetails.append(musclesLow)

    exerciseDiv.append(musclesDetails)
    
    const hr = document.createElement('hr')
    exerciseDiv.append(hr)

    main.append(exerciseDiv)
}

function getImagesAnimation(images) {
    const animationDiv = document.createElement('div')
    animationDiv.className = 'img-animation-container'

    for( let i = 0; i < images.srcs.length; i++ ) {
        const img = new Image()
        img.src = './assets/' + images.srcs[i]
        img.className = images.classes[i]
        animationDiv.append(img)
    }
    return animationDiv
}

/* EDIT REPS AND WEIGHT */

const EDIT_STATE = {
    isActive: false, // is modal open
    exercise: '',
    isReps: false, // isReps ? reps : weight
    value: 0, // repsIndex or weight value
    targetId: null
}

function editExercisesData(event) {
    const exercise = event.currentTarget.dataset.exerciseName

    EDIT_STATE.isActive = true
    EDIT_STATE.exercise = exercise
    EDIT_STATE.isReps = event.currentTarget.dataset.type === 'reps'
    // EDIT_STATE.value filled in if/else block
    EDIT_STATE.targetId = event.currentTarget.dataset.targetId
    
    modalHeader.innerText = EXERCISES_DATA[exercise].name
    modalAnimationDiv.replaceChildren()
    modalAnimationDiv.append( getImagesAnimation(EXERCISES_DATA[exercise].images) )
    if (EDIT_STATE.isReps) {
        modalRepsDiv.style.display = 'block'
        modalWeightDiv.style.display = 'none'

        const reps = EXERCISES_DATA[exercise].reps
        const repsMin = REPS_RANGES[reps.indexRR].min
        const repsMax = REPS_RANGES[reps.indexRR].max
        modalRepsSpanValue.innerText = `${repsMin} — ${repsMax}`

        EDIT_STATE.value = reps.indexRR
    } else {
        modalRepsDiv.style.display = 'none'
        modalWeightDiv.style.display = 'block'
        const weight = EXERCISES_DATA[exercise].weight
        modalWeightInput.value = weight.value
        modalWeightSpan.innerText = weight.unit

        EDIT_STATE.value = weight.value
    }

    modalDiv.style.display = 'flex'
}

function changeReps(step) {
    if (!EDIT_STATE.isActive) return closeModal()

    EDIT_STATE.value += step
    if (EDIT_STATE.value >= REPS_RANGES.length ) EDIT_STATE.value = REPS_RANGES.length - 1
    else if (EDIT_STATE.value < 0) EDIT_STATE.value = 0

    const repsMin = REPS_RANGES[EDIT_STATE.value].min
    const repsMax = REPS_RANGES[EDIT_STATE.value].max
    modalRepsSpanValue.innerText = `${repsMin} — ${repsMax}`
}

function changeWeight() {
    if (!EDIT_STATE.isActive) return closeModal()
 
    EDIT_STATE.value = +( modalWeightInput.value.replace(/,/g, '.') )
    if ( isNaN(EDIT_STATE.value) || !isFinite(EDIT_STATE.value) || EDIT_STATE.value < 0 || EDIT_STATE.value > 500 ) {
        EDIT_STATE.value = EXERCISES_DATA[EDIT_STATE.exercise].weight.value
        modalWeightInput.value = EDIT_STATE.value
        return 
    }

    EDIT_STATE.value = Math.ceil(EDIT_STATE.value * 4) / 4
    modalWeightInput.value = EDIT_STATE.value
}

function closeModal() {
    EDIT_STATE.isActive = false
    modalDiv.style.display = 'none'
}

function saveRepsWeightChanges() {
    if (!EDIT_STATE.isActive) return closeModal()

    // save to EXERCISES_DATA
    if (EDIT_STATE.isReps) EXERCISES_DATA[EDIT_STATE.exercise].reps.indexRR = EDIT_STATE.value
    else EXERCISES_DATA[EDIT_STATE.exercise].weight.value = EDIT_STATE.value

    // save to localStorage
    setStoredExercisesData(EXERCISES_DATA)

    // insert in changed Div
    const targetB = document.getElementById(EDIT_STATE.targetId).querySelector('b')
    if (EDIT_STATE.isReps) {
        const repsMin = REPS_RANGES[EDIT_STATE.value].min
        const repsMax = REPS_RANGES[EDIT_STATE.value].max
        targetB.innerText = `${repsMin} — ${repsMax}`
    } else {
        targetB.innerText = EDIT_STATE.value
    }

    closeModal()
}

