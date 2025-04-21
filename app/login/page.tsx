"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Добавляем импорт useAuth и useRouter
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { login, user } = useAuth()
  const router = useRouter()

  // Если пользователь уже авторизован, перенаправляем на главную
  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const success = await login(email, password)
      if (success) {
        router.push("/")
      } else {
        setError("Неверный email или пароль. Пароль должен содержать минимум 6 символов.")
      }
    } catch (err) {
      setError("Произошла ошибка при входе. Пожалуйста, попробуйте снова.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register" onClick={() => router.push("/register")}>
                Регистрация
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Добро пожаловать!</CardTitle>
                <CardDescription className="text-center">Войдите в свой аккаунт, чтобы продолжить</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    {error && <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div>}
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Пароль</Label>
                        <Link href="/forgot-password" className="text-sm text-[#D14A68] hover:underline">
                          Забыли пароль?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
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
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">
                        Запомнить меня
                      </Label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-6 bg-[#D14A68] hover:bg-[#FF8DA1] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Вход..." : "Войти"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">или войти через</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                  >
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                  >
                    Facebook
                  </Button>
                </div>
              </CardFooter>
            </TabsContent>
            <TabsContent value="register">
              {/* Пустой контент, так как при клике на вкладку перенаправляем на страницу регистрации */}
            </TabsContent>
          </Tabs>
        </Card>
      </motion.div>
    </main>
  )
}
