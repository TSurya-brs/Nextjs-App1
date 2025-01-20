// import React from 'react'

// const SimpleDropdown = () => {
//   return (
//     <div>
//       <div className="bg-white dark:bg-red-500 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
//   <div>
//     <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
//       <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
//     </span>
//   </div>
//   <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
//   <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
//     The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
//   </p>
// </div>
//     </div>
//   )
// }

// export default SimpleDropdown

// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  // const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if(!mounted) return null

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}> <div className="p-2 border bg-blue-500"><button>Light</button></div></button>
      <button onClick={() => setTheme('dark')}><div className="p-2 border bg-blue-900"><button>Dark</button></div></button>
    </div>
  )
};
