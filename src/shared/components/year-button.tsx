import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent hover:border-gray-300 duration-200 text-sm font-medium ${
        year === currentYear
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {year}
    </button>
  );
}
