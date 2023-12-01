import "./Board.sass";
import useSudokuBoard from "./hooks/useBoard";

const Board: React.FC = () => {
  const { sudokuGrid, handleInputChange, handleSolveClick, handleResetClick } =
    useSudokuBoard();

  return (
    <div className="board__container">
      <div className="board">
        {sudokuGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="board__row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="number"
                value={cell === 0 ? "" : cell}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                className="row__input"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handleSolveClick}>Solve Sudoku</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default Board;
