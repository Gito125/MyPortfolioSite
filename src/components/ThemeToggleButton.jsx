import React from "react";
// import { FaMoon, FaSun } from "react-icons/Fa";

// const ThemeToggleButton = () => {
//   return (
//     <>
//       {/* Theme Toggle Button */}
//       <div className="themeToggleButton absolute top-3 left-3">
//         <button onClick={() => changeTheme()}>
//           {theme === "light" ? (
//             <div>
//               <FaSun size={25} />
//             </div>
//           ) : (
//             <div>
//               <FaMoon size={25} />
//             </div>
//           )}
//         </button>
//       </div>
//     </>
//   );
// };

import { useTheme } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-0 left-0 text-xl px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-[#b3b3b3]"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
