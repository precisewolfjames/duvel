info.onScore(13, function () {
    info.changeCountdownBy(60)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite2, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(mySprite2, assets.tile`transparency16`)
})
info.onScore(20, function () {
    game.setGameOverEffect(true, effects.smiles)
    game.gameOver(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
mySprite2 = sprites.create(assets.image`pumpkin`, SpriteKind.Food)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
tiles.placeOnRandomTile(mySprite2, assets.tile`transparency16`)
controller.moveSprite(mySprite)
info.startCountdown(30)
