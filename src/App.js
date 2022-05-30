import React from "react"
import { AppContextProvider } from "./State/AppContext"
import AppRouter from "./AppRouter"

export default function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  )
}