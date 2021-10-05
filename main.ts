let cm = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    cm = pins.map(
    pins.pulseIn(DigitalPin.P2, PulseValue.High),
    0,
    46473,
    2,
    1000
    )
    basic.showNumber(cm)
})
