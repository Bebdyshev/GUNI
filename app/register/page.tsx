"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF8DA1] to-[#D14A68] text-transparent bg-clip-text">
              GUNI
            </h1>
          </Link>
          <p className="text-gray-600 mt-2">Образовательная платформа</p>
        </div>

        <Card className="shadow-lg rounded-2xl overflow-hidden border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Создать аккаунт</CardTitle>
            <CardDescription className="text-center">
              Зарегистрируйтесь, чтобы получить доступ ко всем возможностям
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">Имя</Label>
                    <div className="relative">
                      <PersonIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="first-name"
                        placeholder="Имя"
                        className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Фамилия</Label>
                    <Input
                      id="last-name"
                      placeholder="Фамилия"
                      className="border-[#D14A68]/30 focus:border-[#D14A68]"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <EnvelopeClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Пароль</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="user-type">Кто вы?</Label>
                  <Select>
                    <SelectTrigger className="border-[#D14A68]/30 focus:border-[#D14A68]">
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Школьник</SelectItem>
                      <SelectItem value="university">Студент</SelectItem>
                      <SelectItem value="graduate">Выпускник</SelectItem>
                      <SelectItem value="parent">Родитель</SelectItem>
                      <SelectItem value="teacher">Преподаватель</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    Я согласен с{" "}
                    <Link href="/terms" className="text-[#D14A68] hover:underline">
                      условиями использования
                    </Link>{" "}
                    и{" "}
                    <Link href="/privacy" className="text-[#D14A68] hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </Label>
                </div>
              </div>
              <Button className="w-full mt-6 bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Зарегистрироваться</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">или зарегистрироваться через</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white">
                Google
              </Button>
              <Button variant="outline" className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white">
                Facebook
              </Button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Уже есть аккаунт?{" "}
                <Link href="/login" className="text-[#D14A68] hover:underline">
                  Войти
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  )
}
