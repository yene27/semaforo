let luz = 0
function rojo () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function verde () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 200)
}
function amarillo () {
    pins.analogWritePin(AnalogPin.P0, 1000)
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 0)
}
basic.forever(function () {
    basic.showString("SEMAFORO")
    luz = 2
    basic.pause(5000)
    luz = 1
    basic.pause(2000)
    luz = 0
    basic.pause(5000)
})
basic.forever(function () {
    if (luz == 0) {
        rojo()
    }
    if (luz == 1) {
        amarillo()
    }
    if (luz == 2) {
        verde()
    }
})
