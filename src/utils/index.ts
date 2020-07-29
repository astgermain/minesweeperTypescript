import {GAME_ROW_SIZE, GAME_COL_SIZE} from "../constants"
import {BlockValue, BlockState, BlockType} from "../types"

export const generateBlocks = (): BlockType[][] => {
    let cells: BlockType[][] = [];
    
    for(let row = 0; row < GAME_ROW_SIZE; row++){
        cells.push([])
        for(let col = 0; col < GAME_COL_SIZE; col++){
            cells[row].push({
                value: BlockValue.none,
                state: BlockState.unvisited
            })
        }
    }
    return cells
}