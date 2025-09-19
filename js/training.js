import { EXERCISES_KEYS } from './exercises.js'

// плечи, спина и грудь
export const EXERCISES_TOP_LIST = [
    // 1. Подтягивания (выполняем ОДНО)
    [
        [EXERCISES_KEYS.PULL_UPS],
        [EXERCISES_KEYS.PULL_UPS_WIDE_GRIP],
        [EXERCISES_KEYS.PULL_UPS_UNDERHAND_GRIP],
        [EXERCISES_KEYS.PULL_UPS_CLOSE_GRIP],
        [EXERCISES_KEYS.PULL_UPS],
        [EXERCISES_KEYS.PULL_UPS_WIDE_GRIP],
        [EXERCISES_KEYS.PULL_UPS_CLOSE_GRIP]
    ],

    // 2. Основное упражнение на спину (выполняем ОДНО)
    [
        [EXERCISES_KEYS.BENT_OVER_BARBELL_ROW],
        [EXERCISES_KEYS.ONE_ARM_DUMBBELL_ROW],
        [EXERCISES_KEYS.BENT_OVER_BARBELL_ROW],
        [EXERCISES_KEYS.TWO_ARMS_DUMBBELL_ROW]
    ],

    // 3. Суперсет — Грудь (выполняем ОДНУ ПАРУ)
    [
        [EXERCISES_KEYS.FLOOR_BARBELL_PRESS, EXERCISES_KEYS.DUMBBELL_FLY],
        [EXERCISES_KEYS.DUMBBELL_FLY, EXERCISES_KEYS.DUMBBELL_SQUEEZE_PRESS],
        [EXERCISES_KEYS.DUMBBELL_SQUEEZE_PRESS, EXERCISES_KEYS.FLOOR_DUMBBELL_PRESS]
    ],

    // 4. Суперсет — Плечи (выполняем ОДНУ ПАРУ — всегда с махами в стороны)
    [
        [EXERCISES_KEYS.SEATED_DUMBBELL_PRESS, EXERCISES_KEYS.SEATED_LATERAL_RAISES],
        [EXERCISES_KEYS.ARNOLD_PRESS, EXERCISES_KEYS.STANDING_LATERAL_RAISES],
        [EXERCISES_KEYS.FRONT_DUMBBELL_RAISES, EXERCISES_KEYS.SEATED_LATERAL_RAISES],
        [EXERCISES_KEYS.SEATED_DUMBBELL_PRESS, EXERCISES_KEYS.STANDING_LATERAL_RAISES],
        [EXERCISES_KEYS.ARNOLD_PRESS, EXERCISES_KEYS.SEATED_LATERAL_RAISES],
        [EXERCISES_KEYS.FRONT_DUMBBELL_RAISES, EXERCISES_KEYS.STANDING_LATERAL_RAISES]
    ],

    // 5. Задние дельты + добивка (выполняем ОДНУ ПАРУ — разводка всегда + гипер или пуловер)
    [
        [EXERCISES_KEYS.BENT_OVER_LATERAL_RAISES, EXERCISES_KEYS.FLOOR_HYPEREXTENSION],
        [EXERCISES_KEYS.SEATED_BENT_OVER_LATERAL_RAISES, EXERCISES_KEYS.DUMBBELL_PULLOVER]
    ],

    // 6. Добивка груди/трицепса (выполняем ОДНО — по желанию)
    [
        [EXERCISES_KEYS.BENCH_DIP],
        [EXERCISES_KEYS.DECLINE_PUSH_UPS],
        [EXERCISES_KEYS.CLOSE_GRIP_PUSH_UPS]
    ]
]

// ноги, руки и пресс
export const EXERCISES_BOTTOM_LIST = [
    // 1. Основное упражнение на ноги (выполняем ОДНО)
    [
        [EXERCISES_KEYS.FRONT_SQUATS],
        [EXERCISES_KEYS.BULGARIAN_SPLIT_SQUATS],
        [EXERCISES_KEYS.FORWARD_LUNGES]
    ],

    // 2. Суперсет — Задняя поверхность бедра + Ягодицы (выполняем ОБА — всегда)
    [
        [EXERCISES_KEYS.ROMANIAN_DEADLIFT, EXERCISES_KEYS.GLUTE_BRIDGE]
    ],

    // 3. Икры — ОБЯЗАТЕЛЬНО 1–2 раза в неделю (выполняем ОДНО)
    [
        [EXERCISES_KEYS.STANDING_CALF_RAISES],
        [EXERCISES_KEYS.SEATED_CALF_RAISES]
    ],

    // 4. Суперсет — Бицепс + Трицепс (выполняем ОДНУ ПАРУ — с интегрированной добивкой)
    [
        [EXERCISES_KEYS.BARBELL_BICEP_CURL, EXERCISES_KEYS.OVERHEAD_DUMBBELL_EXTENSION],
        [EXERCISES_KEYS.HAMMER_CURLS, EXERCISES_KEYS.LYING_TRICEPS_EXTENSION],
        [EXERCISES_KEYS.BARBELL_BICEP_CURL, EXERCISES_KEYS.BENCH_DIP],
        [EXERCISES_KEYS.HAMMER_CURLS, EXERCISES_KEYS.BENCH_DIP]
    ],

    // 5. Пресс (выполняем ОДНУ ПАРУ)
    [
        [EXERCISES_KEYS.CRUNCHES, EXERCISES_KEYS.PLANK],
        [EXERCISES_KEYS.LEG_RAISES, EXERCISES_KEYS.BICYCLE_CRUNCHES],
        [EXERCISES_KEYS.RUSSIAN_TWISTS, EXERCISES_KEYS.PLANK],
        [EXERCISES_KEYS.CRUNCHES, EXERCISES_KEYS.BICYCLE_CRUNCHES],
        [EXERCISES_KEYS.LEG_RAISES, EXERCISES_KEYS.RUSSIAN_TWISTS]
    ]
]