'use client';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

type playerVariant = '🧑' | '🤖';

export function TickTacToe() {
  const { toast } = useToast();
  const [board, setBoard] = useState<Array<playerVariant | null>>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<playerVariant>('🧑');
  const [score, setScore] = useState({ '🧑': 0, '🤖': 0 });
  const [loading, setLoading] = useState(false);

  const handleClick = (index: number) => {
    if (board[index] === null && currentPlayer === '🧑' && !loading) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer('🤖');
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('🧑');
  };

  const checkWin = useCallback((player: playerVariant) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombos.some((combo) =>
      combo.every((index) => board[index] === player)
    );
  }, [board]);

  const makeComputerMove = useCallback(() => {
    const availableMoves = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null) as number[];
    if (availableMoves.length > 0) {
      setLoading(true);
      setTimeout(() => {
        const randomMove =
          availableMoves[Math.floor(Math.random() * availableMoves.length)];
        const newBoard = [...board];
        newBoard[randomMove] = '🤖';
        setBoard(newBoard);
        setCurrentPlayer('🧑');
        setLoading(false);
      }, 300); // Delay of 300ms
    }
  }, [board]);

  useEffect(() => {
    if (checkWin('🧑')) {
      setScore((prevScore) => ({ ...prevScore, '🧑': prevScore['🧑'] + 1 }));
      toast({
        title: 'Congratulations!',
        description: '🧑 You win!',
      });
      handleReset();
    } else if (checkWin('🤖')) {
      setScore((prevScore) => ({ ...prevScore, '🤖': prevScore['🤖'] + 1 }));
      toast({
        title: 'Oops!',
        description: '🤖 Computer wins!',
      });
      handleReset();
    } else if (!board.includes(null)) {
      toast({
        title: "It's a draw!",
        description: 'Try again!',
      });
      handleReset();
    } else if (currentPlayer === '🤖' && !loading) {
      makeComputerMove();
    }
  }, [board, currentPlayer, checkWin, loading, makeComputerMove, score, toast]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <Loader2 className="mr-2 text-white h-36 w-36 animate-spin" />
        </div>
      )}
      <div
        className={`bg-card rounded-lg shadow-lg p-8 ${
          loading ? 'opacity-25' : ''
        }`}
      >
        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <Button
              key={index}
              className={`w-16 h-16 text-4xl font-bold ${
                cell === '🧑'
                  ? 'text-green-600 hover:text-green-700'
                  : cell === '🤖'
                  ? 'text-red-500 hover:text-red-700'
                  : ''
              }`}
              onClick={() => handleClick(index)}
              disabled={loading}
              size="icon"
            >
              {cell}
            </Button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-semibold">
            {currentPlayer === '🧑' ? "Your Turn" : "Boot's Turn"}:{' '}
            <span
              className={
                currentPlayer === '🧑' ? 'text-green-600' : 'text-red-600'
              }
            >
              {currentPlayer}
            </span>
          </div>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
