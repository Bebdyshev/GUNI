"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
  credits: number
  joinDate: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, userType: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Проверяем, есть ли сохраненный пользователь при загрузке
  useEffect(() => {
    const storedUser = localStorage.getItem("guni_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Имитация входа в систему
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Имитация задержки сети
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Простая проверка (в реальном приложении здесь был бы запрос к API)
    if (password.length >= 6) {
      // Создаем фиктивного пользователя
      const mockUser: User = {
        id: "user-123",
        name: email
          .split("@")[0]
          .split(".")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" "),
        email,
        credits: 250,
        joinDate: new Date().toLocaleDateString(),
      }

      setUser(mockUser)
      localStorage.setItem("guni_user", JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  // Имитация регистрации
  const register = async (name: string, email: string, password: string, userType: string): Promise<boolean> => {
    setIsLoading(true)

    // Имитация задержки сети
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Простая проверка (в реальном приложении здесь был бы запрос к API)
    if (password.length >= 6) {
      // Создаем фиктивного пользователя
      const mockUser: User = {
        id: "user-" + Math.floor(Math.random() * 1000),
        name,
        email,
        credits: 100, // Новые пользователи получают 100 кредитов
        joinDate: new Date().toLocaleDateString(),
      }

      setUser(mockUser)
      localStorage.setItem("guni_user", JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  // Выход из системы
  const logout = () => {
    setUser(null)
    localStorage.removeItem("guni_user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
