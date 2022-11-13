import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeModeContextProps {
  isDarkTheme: boolean
  changeTheme: () => void
}

const ThemeModeContext = createContext<ThemeModeContextProps>({
  isDarkTheme: false,
  changeTheme: () => null,
})

export const useThemeModeContext = (): ThemeModeContextProps =>
  useContext(ThemeModeContext)

const ThemeModeProvider = ({ children }): React.FC => {
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  const changeTheme = (): void => {
    localStorage.theme = !isDarkTheme ? 'dark' : 'light'
    setDarkTheme(!isDarkTheme)
  }

  const value: ThemeModeContextProps = {
    isDarkTheme,
    changeTheme,
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkTheme])

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider
