def on_logo_touched():
    global 配列, _get, 位置
    music.start_melody(music.built_in_melody(Melodies.PRELUDE), MelodyOptions.ONCE)
    basic.pause(5000)
    basic.show_string("STRAT")
    配列 = []
    for index in range(20):
        配列.append(0)
    _get = 0
    位置 = 2
    for index2 in range(10):
        配列[randint(0, 4)] = 1
        描画()
        for index3 in range(5):
            basic.pause(500)
            落下()
            描画()
    music.start_melody(music.built_in_melody(Melodies.ODE), MelodyOptions.ONCE)
    basic.show_string("RESULT")
    basic.show_string("" + str((_get)))
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def 落下():
    global i
    判定()
    i = 19
    music.play_tone(262, music.beat(BeatFraction.HALF))
    for index4 in range(20):
        if 配列[i] == 1:
            if i >= 15:
                music.play_tone(131, music.beat(BeatFraction.HALF))
                配列[i] = 0
            else:
                配列[i + 5] = 1
                配列[i] = 0
    判定()
def 判定():
    global _get
    if 配列[位置 + 15] == 1:
        _get += 1
        配列[位置 + 15] = 0
        music.play_tone(523, music.beat(BeatFraction.HALF))

def on_button_pressed_a():
    global 位置
    if 位置 >= 1:
        位置 += -1
    描画()
    判定()
input.on_button_pressed(Button.A, on_button_pressed_a)

def 描画():
    global i
    i = 0
    for index5 in range(25):
        led.unplot(i % 5, Math.floor(i / 5))
        i += 1
    led.plot(位置 + 20, 4)
    i = 0
    for index6 in range(20):
        if 配列[i] == 1:
            led.plot(i % 5, Math.floor(i / 5))
        i += 1

def on_button_pressed_b():
    global _get
    if 位置 <= 3:
        _get += 1
    描画()
    判定()
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
位置 = 0
_get = 0
配列: List[number] = []
basic.show_leds("""
    . . . # .
        . . # . .
        # # # # #
        # # # # #
        . # # # .
""")
basic.pause(600)