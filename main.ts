let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . . d 1 1 1 d . . . . . . 
    . . . . d 1 f 1 f 1 d . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`pumpkin`, SpriteKind.Player)
controller.moveSprite(mySprite)
