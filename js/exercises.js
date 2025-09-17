import { MUSCLES_KEYS } from './muscles.js'

export const EXERCISES_KEYS = {
    PULL_UPS: 'PULL_UPS', // 'Подтягивания'
    BENT_OVER_BARBELL_ROW: 'BENT_OVER_BARBELL_ROW',
    ONE_ARM_DUMBBELL_ROW: 'ONE_ARM_DUMBBELL_ROW',
    TWO_ARMS_DUMBBELL_ROW: 'TWO_ARMS_DUMBBELL_ROW',
    FLOOR_BARBELL_PRESS: 'FLOOR_BARBELL_PRESS',
    FLOOR_DUMBBELL_PRESS: 'FLOOR_DUMBBELL_PRESS',
    DUMBBELL_FLY: 'DUMBBELL_FLY',
    DUMBBELL_SQUEEZE_PRESS: 'DUMBBELL_SQUEEZE_PRESS',
    SEATED_DUMBBELL_PRESS: 'SEATED_DUMBBELL_PRESS',
    ARNOLD_PRESS: 'ARNOLD_PRESS',
    FRONT_DUMBBELL_RAISES: 'FRONT_DUMBBELL_RAISES',
    SEATED_LATERAL_RAISES: 'SEATED_LATERAL_RAISES',
    BENT_OVER_LATERAL_RAISES: 'BENT_OVER_LATERAL_RAISES',
    SEATED_BENT_OVER_LATERAL_RAISES: 'SEATED_BENT_OVER_LATERAL_RAISES',
    FLOOR_HYPEREXTENSION: 'FLOOR_HYPEREXTENSION',
    DUMBBELL_PULLOVER: 'DUMBBELL_PULLOVER',
    BENCH_DIP: 'BENCH_DIP',
    DECLINE_PUSH_UPS: 'DECLINE_PUSH_UPS',
    CLOSE_GRIP_PUSH_UPS: 'CLOSE_GRIP_PUSH_UPS',
    FRONT_SQUATS: 'FRONT_SQUATS',
    BULGARIAN_SPLIT_SQUATS: 'BULGARIAN_SPLIT_SQUATS',
    FORWARD_LUNGES: 'FORWARD_LUNGES',
    ROMANIAN_DEADLIFT: 'ROMANIAN_DEADLIFT',
    GLUTE_BRIDGE: 'GLUTE_BRIDGE',
    STANDING_CALF_RAISES: 'STANDING_CALF_RAISES',
    SEATED_CALF_RAISES: 'SEATED_CALF_RAISES',
    BARBELL_BICEP_CURL: 'BARBELL_BICEP_CURL',
    HAMMER_CURLS: 'HAMMER_CURLS',
    LYING_TRICEPS_EXTENSION: 'LYING_TRICEPS_EXTENSION',
    CRUNCHES: 'CRUNCHES',
    LEG_RAISES: 'LEG_RAISES',
    PLANK: 'PLANK',
    BICYCLE_CRUNCHES: 'BICYCLE_CRUNCHES',
    RUSSIAN_TWISTS: 'RUSSIAN_TWISTS'
}

export const EXERCISES_DATA = {
    [EXERCISES_KEYS.PULL_UPS]: {
        name: 'Подтягивания',
        description:'💡 Слишком тяжело? — делай с подставкой/резинкой. Слишком легко? — добавь вес (рюкзак, гантель).',
        images: 2,
        sets: 4,
        reps: { min: 6, max: 10, current: 6, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.CHEST, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.LATS ]
        }
    },
    [EXERCISES_KEYS.BENT_OVER_BARBELL_ROW]: {
        name: 'Тяга штанги в наклоне',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 8, max: 10, current: 8, weight: 20, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS ],
            hi: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ]
        }
    },
    [EXERCISES_KEYS.ONE_ARM_DUMBBELL_ROW]: {
        name: 'Тяга гантели к поясу с упором',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 10, max: 12, current: 10, weight: 12, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS ],
            hi: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ]
        }
    },
    [EXERCISES_KEYS.TWO_ARMS_DUMBBELL_ROW]: {
        name: 'Тяга гантели к поясу в наклоне стоя',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 5, max: 7, current: 5, weight: 7, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS ],
            hi: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ]
        }
    },
    [EXERCISES_KEYS.FLOOR_BARBELL_PRESS]: {
        name: 'Жим штанги лежа на полу',
        description:'',
        images: 2,
        sets: 4,
        reps: { min: 6, max: 8, current: 6, weight: 30, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.CHEST, MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.FLOOR_DUMBBELL_PRESS]: {
        name: 'Жим гантелей лежа на полу',
        description:'',
        images: 2,
        sets: 4,
        reps: { min: 6, max: 8, current: 6, weight: 30, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.CHEST, MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.DUMBBELL_FLY]: {
        name: 'Сведение гантелей лежа',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 10, max: 12, current: 10, weight: 8, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.CHEST ]
        }
    },
    [EXERCISES_KEYS.DUMBBELL_SQUEEZE_PRESS]: {
        name: 'Жим сведённых гантелей лежа',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 8, max: 10, current: 8, weight: 15, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.CHEST, MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.SEATED_DUMBBELL_PRESS]: {
        name: 'Жим гантелей сидя',
        description:'',
        images: 2,
        sets: 4,
        reps: { min: 6, max: 10, current: 6, weight: 10, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.MID_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.ARNOLD_PRESS]: {
        name: 'Жим Арнольда',
        description:'',
        images: 4,
        sets: 4,
        reps: { min: 8, max: 10, current: 8, weight: 8, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.MID_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.FRONT_DUMBBELL_RAISES]: {
        name: 'Подъёмы гантелей перед собой',
        description:'',
        images: 4,
        sets: 4,
        reps: { min: 10, max: 12, current: 10, weight: 4, unit: 'кг Х 2' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.SEATED_LATERAL_RAISES]: {
        name: 'Махи гантелей в стороны (сидя)',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 3, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ],
            hi: [ MUSCLES_KEYS.MID_DELTS ]
        }
    },
    [EXERCISES_KEYS.BENT_OVER_LATERAL_RAISES]: {
        name: 'Разводка гантелей в наклоне',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 3, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.CHEST ],
            hi: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ]
        }
    },
    [EXERCISES_KEYS.SEATED_BENT_OVER_LATERAL_RAISES]: {
        name: 'Разводка гантелей в наклоне сидя',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 3, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.CHEST ],
            hi: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ]
        }
    },
    [EXERCISES_KEYS.FLOOR_HYPEREXTENSION]: {
        name: 'Гиперэкстензия на полу',
        description:'💡 Ляг животом на пол, ноги зафиксируй под диваном/табуретом, руки за головой или с гантелью на груди.',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.ABS ],
            hi: [ MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS, MUSCLES_KEYS.LOWER_BACK ]
        }
    },
    [EXERCISES_KEYS.DUMBBELL_PULLOVER]: {
        name: 'Пуловер с гантелью',
        description:'💡 Лёжа на полу, растягиваешь грудь и широчайшие — фокус на контроле, не на весе',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 10, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.FRONT_DELTS ],
            hi: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.CHEST, MUSCLES_KEYS.TRICEPS ]
        }
    },
    [EXERCISES_KEYS.BENCH_DIP]: {
        name: 'Обратные отжимания',
        description:'💡 Можно пропустить, если устал. Но если есть силы — отлично добьёт грудь и трицепс',
        images: 2,
        sets: 3,
        reps: { min: 8, max: 15, current: 8, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.CHEST ],
            hi: [ MUSCLES_KEYS.TRICEPS ]
        }
    },
    [EXERCISES_KEYS.DECLINE_PUSH_UPS]: {
        name: 'Отжимания с ногами на возвышении',
        description:'💡 Можно пропустить, если устал. Но если есть силы — отлично добьёт грудь и трицепс',
        images: 2,
        sets: 3,
        reps: { min: 8, max: 15, current: 8, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.CHEST, MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.CLOSE_GRIP_PUSH_UPS]: {
        name: 'Отжимания узко',
        description:'💡 Можно пропустить, если устал. Но если есть силы — отлично добьёт грудь и трицепс',
        images: 2,
        sets: 3,
        reps: { min: 8, max: 15, current: 8, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.CHEST ],
            hi: [ MUSCLES_KEYS.TRICEPS ]
        }
    },
    [EXERCISES_KEYS.FRONT_SQUATS]: {
        name: 'Фронтальные приседания',
        description:'💡 Меньше нагрузки на поясницу, больше на квадрицепс. Следи за локтями — держи их вперёд!',
        images: 2,
        sets: 4,
        reps: { min: 6, max: 10, current: 6, weight: 30, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS, MUSCLES_KEYS.ABS, MUSCLES_KEYS.CORE ],
            hi: [ MUSCLES_KEYS.QUADS ]
        }
    },
    [EXERCISES_KEYS.BULGARIAN_SPLIT_SQUATS]: {
        name: 'Болгарские выпады',
        description:'',
        images: 4,
        sets: 3,
        reps: { min: 8, max: 10, current: 8, weight: 12, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.ABS, MUSCLES_KEYS.CORE ],
            hi: [ MUSCLES_KEYS.QUADS, MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS ]
        }
    },
    [EXERCISES_KEYS.FORWARD_LUNGES]: {
        name: 'Выпады с шагом вперёд',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 10, max: 12, current: 10, weight: 10, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.ABS, MUSCLES_KEYS.CORE ],
            hi: [ MUSCLES_KEYS.QUADS, MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS ]
        }
    },
    [EXERCISES_KEYS.ROMANIAN_DEADLIFT]: {
        name: 'Румынская тяга штанги',
        description:'💡 Держи спину прямой, таз отводи назад, не сгибай колени сильно.',
        images: 4,
        sets: 4,
        reps: { min: 8, max: 10, current: 8, weight: 30, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.ABS, MUSCLES_KEYS.CORE ],
            hi: [ MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS, MUSCLES_KEYS.LOWER_BACK ]
        }
    },
    [EXERCISES_KEYS.GLUTE_BRIDGE]: {
        name: 'Ягодичный мостик',
        description:'💡 Поднимай таз до линии корпуса, зажимай ягодицы вверху.',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 20, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.HAMSTRINGS, MUSCLES_KEYS.ABS, MUSCLES_KEYS.CORE ],
            hi: [ MUSCLES_KEYS.GLUTES ]
        }
    },
    [EXERCISES_KEYS.STANDING_CALF_RAISES]: {
        name: 'Подъёмы на носки стоя',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 15, max: 20, current: 15, weight: 15, unit: 'кг' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.CALVES ]
        }
    },
    [EXERCISES_KEYS.SEATED_CALF_RAISES]: {
        name: 'Подъёмы на носки сидя',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 20, max: 30, current: 20, weight: 15, unit: 'кг' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.CALVES ]
        }
    },
    [EXERCISES_KEYS.BARBELL_BICEP_CURL]: {
        name: 'Подъём штанги на бицепс',
        description:'',
        images: 2,
        sets: 4,
        reps: { min: 8, max: 10, current: 8, weight: 15, unit: 'кг' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.BICEPS ]
        }
    },
    [EXERCISES_KEYS.HAMMER_CURLS]: {
        name: 'Молотки с гантелями',
        description:'',
        images: 2,
        sets: 4,
        reps: { min: 10, max: 12, current: 10, weight: 8, unit: 'кг Х 2' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.BICEPS ]
        }
    },
    [EXERCISES_KEYS.LYING_TRICEPS_EXTENSION]: {
        name: 'Гантель из за головы',
        description:'💡 Это упражнение хорошая заменяет "Французский жим лёжа".',
        images: 2,
        sets: 3,
        reps: { min: 10, max: 12, current: 10, weight: 10, unit: 'кг' },
        muscles: {
            low: [ MUSCLES_KEYS.LATS, MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.CHEST ],
            hi: [ MUSCLES_KEYS.TRICEPS ]
        }
    },
    [EXERCISES_KEYS.CRUNCHES]: {
        name: 'Скручивания лёжа',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 15, max: 20, current: 15, weight: 0, unit: 'раз' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.ABS ]
        }
    },
    [EXERCISES_KEYS.LEG_RAISES]: {
        name: 'Подъёмы ног лёжа',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.GLUTES ],
            hi: [ MUSCLES_KEYS.ABS ]
        }
    },
    [EXERCISES_KEYS.PLANK]: {
        name: 'Планка',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 30, max: 60, current: 30, unit: 'секунд' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.CHEST, MUSCLES_KEYS.TRICEPS, MUSCLES_KEYS.QUADS, MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS ],
            hi: [ MUSCLES_KEYS.ABS, MUSCLES_KEYS.CORE ]
        }
    },
    [EXERCISES_KEYS.BICYCLE_CRUNCHES]: {
        name: 'Велосипед',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 20, max: 30, current: 20, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.GLUTES, MUSCLES_KEYS.HAMSTRINGS, MUSCLES_KEYS.QUADS ],
            hi: [ MUSCLES_KEYS.ABS ]
        }
    },
    [EXERCISES_KEYS.RUSSIAN_TWISTS]: {
        name: 'Русские скручивания с гантелью',
        description:'',
        images: 2,
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 5, unit: 'кг' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.ABS ]
        }
    }
}