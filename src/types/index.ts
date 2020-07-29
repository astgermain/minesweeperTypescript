export enum BlockValue {
    none,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    bomb
}

export enum BlockState {
    unvisited,
    visited,
    flagged
}

export type BlockType = {value: BlockValue, state: BlockState}