// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000101010101010101010101020202020404040401010200000000000004010102000000000000040101020000000000000301010200000000000004010102020202040404040101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`14000e0000020000000000000000000000000000000000000202020202020202020202020202020202020200000202020202020200000000000000000002020000020000000000000000000000000000000002000002000000000001000000000000000000000200000200000001000000010000000000000000020000020001000000000000000000000000000002000002000000010001000000000100000000020200000200000000000000000000000000000000020000020000010000010000010000000000000002020002000000000000000000000000000000000202000200000000000000000000000000000000020200020202020202020202020202020202020202000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . . . . 
. . . . . 2 . . . 2 . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
