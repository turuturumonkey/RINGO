input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("STRAT")
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
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
})
function 落下 () {
    判定()
    i = 19
    music.playTone(262, music.beat(BeatFraction.Half))
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
    }
    判定()
}
function 判定 () {
    if (配列[位置 + 14] == 1) {
        _get += 1
        music.playTone(523, music.beat(BeatFraction.Half))
    }
}
input.onButtonPressed(Button.A, function () {
    if (位置 >= 1) {
        位置 += -1
    }
    判定()
})
function 描画 () {
    i = 0
    for (let index = 0; index < 25; index++) {
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
        _get += 1
    }
    判定()
})
let i = 0
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
basic.pause(600)
