"use client";

import { useEffect, useState } from "react";
import DancingLinks from "@/lib/sudoku";

type Point = { x: number; y: number };
const end: Point = { x: 8, y: 8 };
var ans=Array(9).fill(0).map(()=>Array(9).fill(0));
const dlx = new DancingLinks(ans);
var atFirst=0;

export default function Home() {
  const [map, setMap] = useState<number[][]>(
    Array(9).fill(0).map(() => Array(9).fill(0))
  );
  const [ansd, setAnsd] = useState<number[][]>(Array(9).fill(0).map(() => Array(9).fill(0)));
  
  const [target, setTarget] = useState<Point>({ x: 0, y: 0 });

  const handleTarget = (x: number, y: number) => {
    if (x < 0 || x > end.x || y < 0 || y > end.y) return;
    setTarget({ x, y });
  };

  // target changed
  // useEffect(() => {
  //   console.log(target);
  // }, [target]);

  // keyInput type="number"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { x, y } = target;
      // console.log("target:", target);
      if (e.key === "ArrowUp") handleTarget(x - 1, y);
      if (e.key === "ArrowDown") handleTarget(x + 1, y);
      if (e.key === "ArrowLeft") handleTarget(x, y - 1);
      if (e.key === "ArrowRight") handleTarget(x, y + 1);
      if ("0" <= e.key && e.key <= "9")
        setMap(
          map.map((row, i) =>
            row.map((col, j) => (i === x && j === y ? Number(e.key) : col))
          )
        );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  function dancingLinks() {
    // console.log("map:", map);
    if(atFirst<1) { // Skip the first and the second render
      ++atFirst;
      return;
    }
    for(let i=0;i<9;i++)
      for(let j=0;j<9;j++)
        ans[i][j]=map[i][j];
    dlx.build(map);
    dlx.solve(0);
    // console.log("ans: ", ans);
    setAnsd(Array.from(ans));
  }

  useEffect(dancingLinks, [map]);

  function Matrix({map}:{map: number[][]}) {
    // if(map[0][0]===0) return <></>
    return map.map((row, i) => (
      <div key={i}>
        {row.map((col, j) => {
          let additionalClass =
            i === target.x && j === target.y ? "bg-red-500" : "";
          return (
            // 上下左右居中
            <span
              onClick={() => handleTarget(i, j)}
              key={j}
              className={
                "text-center content-center border text-3xl w-14 h-12 inline-grid " +
                additionalClass
              }
            >
              {col === 0 ? <>&nbsp;</> : col}
            </span>
          );
        })}
      </div>
    ));
  }

  return (
    <div className="mt-4 ml-8 select-none">
      <button
        className="text-2xl mr-4"
        onClick={() => setMap(Array(9).fill(Array(9).fill(undefined)))}
      >
        Clean
      </button>
      <Matrix map={map} />
      <Matrix map={ansd} />
    </div>
  );
}