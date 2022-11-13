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
}

const ThemeModeContext = createContext<ThemeModeContextProps>({
  isDarkTheme: false,
  changeTheme: () => null,
})

export const useThemeModeContext = (): ThemeModeContextProps =>
  useContext(ThemeModeContext)

const ThemeModeProvider: React.FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [isDarkTheme, setDarkTheme] = useState(
    (typeof window !== 'undefined' && localStorage.theme === 'dark') ||
      (typeof window !== 'undefined' &&
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  const changeTheme = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.theme = !isDarkTheme ? 'dark' : 'light'
    }

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
