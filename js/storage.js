
function getToday() {
    const now = new Date();
    const today = {
        dayOfWeek: now.toLocaleDateString('ru-RU', { weekday: 'short' }),
        date: now.getDate(), // 1–31
        month: now.getMonth() + 1, // 1–12 (getMonth() возвращает 0–11!)
        year: now.getFullYear()
    }
    return today
}


export function getStoredDay() {
    const storedDay = localStorage.getItem('day')
    if (storedDay === null) return
    else {
        try {
            const today = JSON.parse(storedDay)
        } catch {
            console.error("cant to parse localStorage data from key 'day'")
        }
    }
    return TODAY
}

export function setStoredDay() {
    const storedDay = localStorage.getItem('day')
    if (storedDay === null) return DEFAULT_DAY
    else {
        try {
            return JSON.parse(storedDay)
        } catch {
            return DEFAULT_DAY
        }
    }
}