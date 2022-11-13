import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ThemeModeContextProps {
  isDarkTheme: boolean
  changeTheme: () => void
  isThemeReset: boolean
  resetTheme: () => void
}

const ThemeModeContext = createContext<ThemeModeContextProps>({
  isDarkTheme: false,
  changeTheme: () => null,
  isThemeReset: false,
  resetTheme: () => null,
})

export const useThemeModeContext = (): ThemeModeContextProps =>
  useContext(ThemeModeContext)

const ThemeModeProvider: React.FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [isDarkTheme, setDarkTheme] = useState(
    (typeof window !== 'undefined' && localStorage.theme === 'dark') ||
      (typeof window !== 'undefined' &&
        (!('theme' in localStorage) || !localStorage.theme) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  const [isThemeReset, setIsThemeReset] = useState(
    typeof window !== 'undefined' && !localStorage.theme,
  )

  const changeTheme = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.theme = !isDarkTheme ? 'dark' : 'light'
    }

    setIsThemeReset(false)
    setDarkTheme(!isDarkTheme)
  }

  const resetTheme = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.theme = ''
    }

    setIsThemeReset(true)
  }

  const value: ThemeModeContextProps = {
    isDarkTheme,
    changeTheme,
    isThemeReset,
    resetTheme,
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
