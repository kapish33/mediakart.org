import { TickTacToe } from "@/components/tick-tac-toe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <TickTacToe />
    </main>
  );
}
