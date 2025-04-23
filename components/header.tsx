"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
// Добавляем импорт useAuth
import { useAuth } from "@/context/auth-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Используем хук useAuth для получения информации о пользователе
  const { user, logout } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#FF8DA1] to-[#D14A68] text-transparent bg-clip-text">
            GoUNI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Главная
          </Link>
          <Link href="/navigation" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Образование
          </Link>
          <Link href="/self-analysis" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Тесты
          </Link>
          <Link href="/top-students" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Статьи
          </Link>
          <Link href="/universities" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Вузы
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center mr-2">
                <span className="text-[#D14A68] font-medium mr-2">{user.credits}</span>
                <span className="text-gray-600">кредитов</span>
              </div>
              <Button
                variant="outline"
                className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                onClick={() => (window.location.href = "/profile")}
              >
                Профиль
              </Button>
              <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white" onClick={logout}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                onClick={() => (window.location.href = "/login")}
              >
                Войти
              </Button>
              <Button
                className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white"
                onClick={() => (window.location.href = "/register")}
              >
                Регистрация
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="/navigation"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Образование
              </Link>
              <Link
                href="/self-analysis"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Тесты
              </Link>
              <Link
                href="/top-students"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Статьи
              </Link>
              <Link
                href="/universities"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Вузы
              </Link>
              <div className="flex flex-col space-y-3 pt-2">
                {user ? (
                  <>
                    <div className="flex items-center mb-2">
                      <span className="text-[#D14A68] font-medium mr-2">{user.credits}</span>
                      <span className="text-gray-600">кредитов</span>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white w-full"
                      onClick={() => {
                        window.location.href = "/profile"
                        setIsMenuOpen(false)
                      }}
                    >
                      Профиль
                    </Button>
                    <Button
                      className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white w-full"
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                    >
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white w-full"
                      onClick={() => {
                        window.location.href = "/login"
                        setIsMenuOpen(false)
                      }}
                    >
                      Войти
                    </Button>
                    <Button
                      className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white w-full"
                      onClick={() => {
                        window.location.href = "/register"
                        setIsMenuOpen(false)
                      }}
                    >
                      Регистрация
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
