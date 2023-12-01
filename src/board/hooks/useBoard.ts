import { useState, ChangeEvent } from "react";

import SudokuSolver from "../../services/SudokuSolver";
import Constants from "../../constants";

const useBoard = () => {
  const [sudokuGrid, setSudokuGrid] = useState<number[][]>(
    Constants.initialSudoku
  );

  const handleInputChange = (
    row: number,
    col: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const newGrid = [...sudokuGrid];
    newGrid[row][col] = parseInt(e.target.value) || 0;
    setSudokuGrid(newGrid);
  };

  const handleSolveClick = () => {
    const solver = new SudokuSolver(sudokuGrid);
    if (solver.solve()) {
      setSudokuGrid([...solver.board]);
    } else {
      console.log("No solution exists.");
    }
  };

  const handleResetClick = () => {
    setSudokuGrid([...Constants.initialSudoku]);
  };

  return {
    sudokuGrid,
    handleInputChange,
    handleSolveClick,
    handleResetClick,
  };
};

export default useBoard;
