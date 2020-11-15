info.onLifeZero(function () {
    game.over(false, effects.melt)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (invincible == 0) {
        invincible = 5
        mySprite.startEffect(effects.hearts)
        info.changeLifeBy(-1)
    }
})
let invincible = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 . 2 2 . . . 2 2 2 . . 
    . . 2 2 . 2 2 . . . 2 2 2 2 . . 
    . . 2 2 2 . 2 2 2 2 2 . 2 2 . . 
    . 2 . 2 2 . 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 . 2 . . . 
    . . . . 2 2 2 2 . . . . 2 . . . 
    . . . 2 2 . 2 2 2 2 . 2 2 . . . 
    . . . 2 . . . . . . 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let oxo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . 8 . 
    . 8 8 8 . 8 8 8 8 . . . . 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    8 8 8 . 8 . 8 8 . . 8 8 . . . . 
    . . 8 8 8 . 8 8 . . 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 . 8 . . . . . 
    . . . . . . 8 8 . 8 . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(39, 26)
controller.moveSprite(mySprite)
info.setLife(3)
game.onUpdateInterval(500, function () {
    if (invincible > 0) {
        invincible += -1
        if (invincible == 0) {
            effects.clearParticles(mySprite)
        }
    }
})
