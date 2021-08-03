
{
    type Color = 'Black' | 'White'
    type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
    type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

    class Game {
        private pieces = Game.makePieces()

        private static makePieces() {
            return [
                new King('White', 'E', 1),
                new King('Black', 'E', 8),

                new Queen('White', 'D', 1),
                new Queen('Black', 'D', 8),

                new Bishop('White', 'E', 1),
                new Bishop('White', 'E', 1),
                new Bishop('Black', 'E', 1),
                new Bishop('Black', 'E', 1),
            ]
        }
    }

    class Position {
        constructor(
            private file: File,
            private rank: Rank
        ) { }

        distanceFrom(position: Position) {
            return {
                rank: Math.abs(position.rank - this.rank),
                file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
            }
        }
    }

    abstract class Piece {
        protected position: Position

        constructor(
            private readonly color: Color,
            file: File,
            rank: Rank,
        ) {
            this.position = new Position(file, rank)
        }

        moveTo(position: Position) {
            this.position = position
        }

        abstract canMoveTo(position: Position): boolean
    }

    // コマ
    class King extends Piece {
        canMoveTo(position: Position): boolean {
            let distance = this.position.distanceFrom(position)
            return distance.rank < 2 && distance.file < 2
        }
    }
    class Queen extends Piece {
        canMoveTo(position: Position): boolean {
            throw new Error("Method not implemented.")
        }

    }
    class Bishop extends Piece {
        canMoveTo(position: Position): boolean {
            throw new Error("Method not implemented.")
        }

    }
    class Knight extends Piece {
        canMoveTo(position: Position): boolean {
            throw new Error("Method not implemented.")
        }
    }
    class Rook extends Piece {
        canMoveTo(position: Position): boolean {
            throw new Error("Method not implemented.")
        }
    }
    class Pawn extends Piece {
        canMoveTo(position: Position): boolean {
            throw new Error("Method not implemented.")
        }
    }


}
