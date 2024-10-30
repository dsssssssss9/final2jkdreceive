radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item == "B") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        -200
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item == "A") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        200
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
        SuperBit.RGB_Program().show()
    } else if (item == "C") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        0
        )
    } else if (item == "S") {
        SuperBit.MotorStopAll()
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item == "L") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        200
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else {
        while (item == "S") {
            SuperBit.MotorStopAll()
        }
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
item = "S"
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    # . # . .
    . # . . .
    `)
SuperBit.RGB_Program().setBrightness(150)
