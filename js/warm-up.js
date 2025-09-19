`🏆 ⏱️`

const wormUpSteps = [
    {
        title: "Кардио-динамический блок",
        description: "1 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Бег на месте с высоким подъёмом колен',
        info: 'активация ног, таза, сердца',
        images: {
            srcs: ['1-0.webp', '1-1.webp'],
            classes: ['imgWarmUp2-1', 'imgWarmUp2-2'],
        }
    },
    {
        title: "Кардио-динамический блок",
        description: "2 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Прыжки “звёздочка”',
        info: 'включение всего тела, координация',
        images: {
            srcs: ['2-0.webp', '2-1.webp', '2-2.webp', '2-1.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },
    {
        title: "Кардио-динамический блок",
        description: "3 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Бег с захлёстом голени',
        info: 'разогрев задней поверхности бедра',
        images: {
            srcs: ['3-0.webp', '3-1.webp'],
            classes: ['img2-1', 'img2-2'],
        }
    },
    {
        title: "Кардио-динамический блок",
        description: "4 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Приседания без веса (медленно вниз, резко вверх)',
        info: 'активация квадрицепсов, ягодиц, кора',
        images: {
            srcs: ['4-0.webp', '4-1.webp'],
            classes: ['img2-1', 'img2-2'],
        }
    },
    {
        title: "Кардио-динамический блок",
        description: "5 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Выпады шагом вперёд (поочерёдно, без веса)',
        info: 'подвижность ТБС, стабилизация',
        images: {
            srcs: ['5-0.webp', '5-1.webp', '5-2.webp', '5-1.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },
    {
        title: "Кардио-динамический блок",
        description: "6 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Вращения руками',
        info: 'разогрев плечевых суставов, активация дельт, вращательной манжеты',
        images: {
            srcs: ['6-0.webp', '6-1.webp', '6-2.webp', '6-3.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },
    {
        title: "Кардио-динамический блок",
        description: "7 из 7 упражнений по 45 сек",
        time: 45000,
        name: 'Круговые движения тазом',
        info: 'разогрев тазобедренных суставов, поясницы, активация кора',
        images: {
            srcs: ['7-0.webp', '7-1.webp', '7-2.webp', '7-3.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },

    {   // 8
        title: "Суставная гимнастика",
        description: "1 из 5 упражнений по 15 сек",
        time: 15000,
        name: 'вращения шеей (в каждую сторону)',
        info: '',
        images: {
            srcs: ['8-0.webp', '8-1.webp', '8-2.webp', '8-1.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },
    {   // 9
        title: "Суставная гимнастика",
        description: "2 из 5 упражнений по 15 сек",
        time: 15000,
        name: 'вращения плечами',
        info: '',
        images: {
            srcs: ['9-0.webp', '9-1.webp', '9-2.webp', '9-3.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },
    {   // 10
        title: "Суставная гимнастика",
        description: "3 из 5 упражнений по 15 сек",
        time: 15000,
        name: 'вращения локтями',
        info: '',
        images: {
            srcs: ['10-0.webp', '10-1.webp', '10-2.webp', '10-3.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },
    {   // 11
        title: "Суставная гимнастика",
        description: "4 из 5 упражнений по 15 сек",
        time: 15000,
        name: 'вращения коленями (в каждую сторону)',
        info: '',
        images: {
            srcs: ['11-0.webp', '11-1.webp'],
            classes: ['imgWarmUp2-1', 'imgWarmUp2-2'],
        }
    },
    {   // 12
        title: "Суставная гимнастика",
        description: "5 из 5 упражнений по 20 сек",
        time: 20000,
        name: 'вращения стопами (каждой по 10 секунд)',
        info: '',
        images: {
            srcs: ['12-0.webp', '12-1.webp', '12-2.webp', '12-3.webp'],
            classes: ['imgWarmUp4-1', 'imgWarmUp4-2', 'imgWarmUp4-3', 'imgWarmUp4-4'],
        }
    },

    {   // 13
        title: "Активация кора",
        description: "30 секунд",
        time: 30000,
        name: 'Планка на локтях',
        info: 'пресс, спина, ягодицы в напряжении — идеально перед нагрузкой',
        images: {
            srcs: ['PLANK_0.webp', 'PLANK_0.webp'],
            classes: ['imgWarmUp2-1', 'imgWarmUp2-2'],
        }
    },

    {   // 14
        title: "Настройка",
        description: "30 секунд",
        time: 30000,
        name: 'Готовимся к силовым упражнениям',
        info: 'Глубокий вдох → медленный выдох (2–3 раза)\nЛёгкое потряхивание руками/ногами — сброс напряжения',
        images: {
            srcs:['0-0.webp', '0-2.webp'],
            classes: ['main-animation-0', 'main-animation-1']
        }
    },
]

export function getWormUpByStep(step) {
    return wormUpSteps[step]
}