input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.setVolume(255)
        soundExpression.spring.playUntilDone()
        soundExpression.hello.playUntilDone()
        soundExpression.sad.playUntilDone()
        soundExpression.mysterious.playUntilDone()
        soundExpression.soaring.playUntilDone()
    }
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Happy)
}
basic.forever(function () {
	
})
