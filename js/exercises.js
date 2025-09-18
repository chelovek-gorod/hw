import { MUSCLES_KEYS } from './muscles.js'

export const EXERCISES_KEYS = {
    PULL_UPS: 'PULL_UPS',
    PULL_UPS_WIDE_GRIP: 'PULL_UPS_WIDE_GRIP',
    PULL_UPS_CLOSE_GRIP: 'PULL_UPS_CLOSE_GRIP',
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
    STANDING_LATERAL_RAISES: 'STANDING_LATERAL_RAISES',
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

export const EXERCISES_LIST = Object.keys( EXERCISES_KEYS )

/* data in localStorage */

export const EXERCISES_DATA = {
    [EXERCISES_KEYS.PULL_UPS]: {
        name: 'Подтягивания (нормальный хват)',
        description:'💡 Слишком тяжело? — делай с подставкой/резинкой. Слишком легко? — добавь вес (рюкзак, гантель).',
        images: {
            srcs: ['PULL_UPS_0.webp', 'PULL_UPS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
        sets: 4,
        reps: { min: 6, max: 10, current: 6, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.CHEST, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.LATS ]
        }
    },
    [EXERCISES_KEYS.PULL_UPS_WIDE_GRIP]: {
        name: 'Подтягивания (широкий хват)',
        description:'💡 Слишком тяжело? — делай с подставкой/резинкой. Слишком легко? — добавь вес (рюкзак, гантель).',
        images: {
            srcs: ['PULL_UPS_0.webp', 'PULL_UPS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
        sets: 4,
        reps: { min: 6, max: 10, current: 6, unit: 'раз' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS, MUSCLES_KEYS.FRONT_DELTS, MUSCLES_KEYS.CHEST, MUSCLES_KEYS.TRICEPS ],
            hi: [ MUSCLES_KEYS.LATS ]
        }
    },
    [EXERCISES_KEYS.PULL_UPS_CLOSE_GRIP]: {
        name: 'Подтягивания (узкий хват)',
        description:'💡 Слишком тяжело? — делай с подставкой/резинкой. Слишком легко? — добавь вес (рюкзак, гантель).',
        images: {
            srcs: ['PULL_UPS_0.webp', 'PULL_UPS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['BENT_OVER_BARBELL_ROW_0.webp', 'BENT_OVER_BARBELL_ROW_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['ONE_ARM_DUMBBELL_ROW_0.webp', 'ONE_ARM_DUMBBELL_ROW_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['TWO_ARMS_DUMBBELL_ROW_0.webp', 'TWO_ARMS_DUMBBELL_ROW_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['FLOOR_BARBELL_PRESS_0.webp', 'FLOOR_BARBELL_PRESS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['FLOOR_DUMBBELL_PRESS_0.webp', 'FLOOR_DUMBBELL_PRESS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['DUMBBELL_FLY_0.webp', 'DUMBBELL_FLY_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['DUMBBELL_SQUEEZE_PRESS_0.webp', 'DUMBBELL_SQUEEZE_PRESS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['SEATED_DUMBBELL_PRESS_0.webp', 'SEATED_DUMBBELL_PRESS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['ARNOLD_PRESS_0.webp', 'ARNOLD_PRESS_1.webp', 'ARNOLD_PRESS_2.webp', 'ARNOLD_PRESS_1.webp'],
            classes: ['img4-1', 'img4-2', 'img4-3', 'img4-4'],
        },
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
        images: {
            srcs: ['FRONT_DUMBBELL_RAISES_0.webp', 'FRONT_DUMBBELL_RAISES_1.webp', 'FRONT_DUMBBELL_RAISES_0.webp', 'FRONT_DUMBBELL_RAISES_3.webp'],
            classes: ['img4-1', 'img4-2', 'img4-3', 'img4-4'],
        },
        sets: 4,
        reps: { min: 10, max: 12, current: 10, weight: 4, unit: 'кг Х 2' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.FRONT_DELTS ]
        }
    },
    [EXERCISES_KEYS.SEATED_LATERAL_RAISES]: {
        name: 'Махи гантелей в стороны сидя',
        description:'',
        images: {
            srcs: ['SEATED_LATERAL_RAISES_0.webp', 'SEATED_LATERAL_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 3, unit: 'кг Х 2' },
        muscles: {
            low: [ MUSCLES_KEYS.TRAPS, MUSCLES_KEYS.REAR_DELTS ],
            hi: [ MUSCLES_KEYS.MID_DELTS ]
        }
    },
    [EXERCISES_KEYS.STANDING_LATERAL_RAISES]: {
        name: 'Махи гантелей в стороны стоя',
        description:'',
        images: {
            srcs: ['STANDING_LATERAL_RAISES_0.webp', 'STANDING_LATERAL_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['BENT_OVER_LATERAL_RAISES_0.webp', 'BENT_OVER_LATERAL_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['SEATED_BENT_OVER_LATERAL_RAISES_0.webp', 'SEATED_BENT_OVER_LATERAL_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['FLOOR_HYPEREXTENSION_0.webp', 'FLOOR_HYPEREXTENSION_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['DUMBBELL_PULLOVER_0.webp', 'DUMBBELL_PULLOVER_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['BENCH_DIP_0.webp', 'BENCH_DIP_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['DECLINE_PUSH_UPS_0.webp', 'DECLINE_PUSH_UPS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['CLOSE_GRIP_PUSH_UPS_0.webp', 'CLOSE_GRIP_PUSH_UPS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['FRONT_SQUATS_0.webp', 'FRONT_SQUATS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['BULGARIAN_SPLIT_SQUATS_0.webp', 'BULGARIAN_SPLIT_SQUATS_1.webp', 'BULGARIAN_SPLIT_SQUATS_2.webp', 'BULGARIAN_SPLIT_SQUATS_1.webp'],
            classes: ['img4-1', 'img4-2', 'img4-3', 'img4-4'],
        },
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
        images: {
            srcs: ['FORWARD_LUNGES_0.webp', 'FORWARD_LUNGES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['ROMANIAN_DEADLIFT_0.webp', 'ROMANIAN_DEADLIFT_1.webp', 'ROMANIAN_DEADLIFT_2.webp', 'ROMANIAN_DEADLIFT_1.webp'],
            classes: ['img4-1', 'img4-2', 'img4-3', 'img4-4'],
        },
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
        images: {
            srcs: ['GLUTE_BRIDGE_0.webp', 'GLUTE_BRIDGE_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['STANDING_CALF_RAISES_0.webp', 'STANDING_CALF_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['SEATED_CALF_RAISES_0.webp', 'SEATED_CALF_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['BARBELL_BICEP_CURL_0.webp', 'BARBELL_BICEP_CURL_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['HAMMER_CURLS_0.webp', 'HAMMER_CURLS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['LYING_TRICEPS_EXTENSION_0.webp', 'LYING_TRICEPS_EXTENSION_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['CRUNCHES_0.webp', 'CRUNCHES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['LEG_RAISES_0.webp', 'LEG_RAISES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['PLANK_0.webp', 'PLANK_0.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['BICYCLE_CRUNCHES_0.webp', 'BICYCLE_CRUNCHES_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
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
        images: {
            srcs: ['RUSSIAN_TWISTS_0.webp', 'RUSSIAN_TWISTS_1.webp'],
            classes: ['img2-1', 'img2-2'],
        },
        sets: 3,
        reps: { min: 12, max: 15, current: 12, weight: 5, unit: 'кг' },
        muscles: {
            low: [],
            hi: [ MUSCLES_KEYS.ABS ]
        }
    }
}