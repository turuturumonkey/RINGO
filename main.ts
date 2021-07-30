input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    basic.pause(5000)
    basic.showString("STRAT")
    配列 = []
    for (let index = 0; index < 20; index++) {
        配列.push(0)
    }
    _get = 0
    位置 = 2
    for (let index = 0; index < 10; index++) {
        配列[randint(0, 4)] = 1
        描画()
        for (let index = 0; index < 5; index++) {
            basic.pause(500)
            落下()
            描画()
        }
    }
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    basic.showString("RESULT")
    basic.showString("" + (_get))
})
function player描画 () {
    j = 0
    for (let index = 0; index < 5; index++) {
        led.unplot(j, 4)
        j += 1
    }
    led.plot(位置, 4)
}
function 落下 () {
    判定()
    i = 19
    for (let index = 0; index < 20; index++) {
        if (配列[i] == 1) {
            if (i >= 15) {
                music.playTone(131, music.beat(BeatFraction.Half))
                配列[i] = 0
            } else {
                配列[i + 5] = 1
                配列[i] = 0
            }
        }
        i += -1
    }
    music.playTone(262, music.beat(BeatFraction.Half))
    描画()
    判定()
}
function 判定 () {
    if (配列[位置 + 15] == 1) {
        _get += 1
        配列[位置 + 15] = 0
        music.playMelody("C E G - - - - - ", 160)
    }
}
input.onButtonPressed(Button.A, function () {
    if (位置 >= 1) {
        位置 += -1
    }
    player描画()
    判定()
})
function 描画 () {
    i = 0
    for (let index = 0; index < 20; index++) {
        led.unplot(i % 5, Math.floor(i / 5))
        i += 1
    }
    led.plot(位置, 4)
    i = 0
    for (let index = 0; index < 20; index++) {
        if (配列[i] == 1) {
            led.plot(i % 5, Math.floor(i / 5))
        }
        i += 1
    }
}
input.onButtonPressed(Button.B, function () {
    if (位置 <= 3) {
        位置 += 1
    }
    player描画()
    判定()
})
let i = 0
let j = 0
let 位置 = 0
let _get = 0
let 配列: number[] = []
basic.showLeds(`
    . . . # .
    . . # . .
    # # # # #
    # # # # #
    . # # # .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
