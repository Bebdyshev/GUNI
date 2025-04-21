import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF8DA1] to-[#D14A68] text-transparent bg-clip-text">
                GUNI
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Образовательная платформа, которая поможет вам раскрыть свой потенциал и найти свой путь в мире
              образования.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-[#D14A68]">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#D14A68]">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#D14A68]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#D14A68]">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Образование
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Тесты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Статьи
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Университеты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Стипендии
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Подготовка к экзаменам
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Карьерный рост
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#D14A68]">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@guni.kz</li>
              <li className="text-gray-600">+7 (777) 123-45-67</li>
              <li className="text-gray-600">г. Алматы, ул. Достык, 12</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} GUNI. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-[#D14A68] text-sm">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#D14A68] text-sm">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
