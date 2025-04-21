"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Cross2Icon } from "@radix-ui/react-icons"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#FF8DA1] to-[#D14A68] text-transparent bg-clip-text">
            GUNI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Главная
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Образование
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Тесты
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            Статьи
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#D14A68] transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white">
            Войти
          </Button>
          <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Регистрация</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <Cross2Icon size={24} /> : <Menu size={24} />}
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
                href="#"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Образование
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Тесты
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Статьи
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#D14A68] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col space-y-3 pt-2">
                <Button
                  variant="outline"
                  className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white w-full"
                >
                  Войти
                </Button>
                <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white w-full">Регистрация</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
