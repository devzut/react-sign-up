import type { ReactNode } from "react";


interface SignProps {
  children: ReactNode; 
  title?: string; 
}

export function Sign({children}: SignProps) {
  return (
   <main>
      <header>
        
      </header>
      {children}
      <footer></footer>
   </main>
  )
}
