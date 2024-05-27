controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (georgestickman.vy == 0) {
        georgestickman.vy += -200
    }
})
let georgestickman: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
tiles.setCurrentTilemap(tilemap`leveltest`)
georgestickman = sprites.create(assets.image`George stickman`, SpriteKind.Player)
georgestickman.ay = 450
controller.moveSprite(georgestickman, 100, 0)
tiles.placeOnTile(georgestickman, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(georgestickman)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
georgestickman.setStayInScreen(false)
