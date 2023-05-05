input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Eszter")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.clearScreen()
    basic.pause(500)
    kpo = randint(1, 3)
    if (kpo == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (kpo == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(2023)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(500)
    random_boolean = Math.randomBoolean()
    if (random_boolean == true) {
        basic.showString("F")
    } else {
        basic.showString("I")
    }
})
let random_boolean = false
let kpo = 0
led.setBrightness(50)
music.setVolume(255)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
