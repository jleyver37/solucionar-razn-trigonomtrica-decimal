let áng = 0
let ángu = 0
/**
 * El estudiante debe recitar el seno del ángulo que aparezca después de presionar el botón A.
 * 
 * Y comprobar con el botón B.
 * 
 * Mejorar para que aparezca en raíces
 */
input.onButtonPressed(Button.A, function () {
    áng = 30
    áng += 15 * randint(0, 2)
    basic.showNumber(áng)
    basic.clearScreen()
})
/**
 * Mejorar a raices, tocaría dibujar las raices
 */
input.onButtonPressed(Button.B, function () {
    ángu = áng * (Math.asin(1) / 90)
    basic.showNumber(Math.sin(ángu))
})
