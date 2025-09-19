const STORAGE_KEYS = {
    dayData: 'dayData',
    exercisesData: 'exercisesData'
}

export function getToday() {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('ru-RU', { weekday: 'short' })
    const date = now.getDate() // 1–31
    const month = now.getMonth() + 1 // 1–12 (getMonth() возвращает 0–11!)
    const year = now.getFullYear()
    return `${dayOfWeek.toUpperCase()} ${date}-${month}-${year}`
}


export function getStoredDay() {
    const storedDay = localStorage.getItem(STORAGE_KEYS.dayData)
    if (storedDay === null) return {day: 0, lastData: getToday()}
    return JSON.parse(storedDay)
}

export function setStoredDay(dayNumber) {
    const storedDay = JSON.stringify({day: dayNumber, lastData: getToday()})
    localStorage.setItem(STORAGE_KEYS.dayData, storedDay)
}

export function getStoredExercisesData() {
    const storedExercises = localStorage.getItem(STORAGE_KEYS.exercisesData)
    if (storedExercises === null) return null
    return JSON.parse(storedExercises)
}

export function setStoredExercisesData(exercisesData) {
    localStorage.setItem(STORAGE_KEYS.exercisesData, JSON.stringify(exercisesData))
}
