"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Brain, Users, Award, School, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Preloader from "@/components/preloader"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF8DA1] to-[#D14A68] text-transparent bg-clip-text">
            GUNI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Образовательная платформа, которая поможет вам раскрыть свой потенциал и найти свой путь в мире образования
          </p>
          <Button
            size="lg"
            className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white transition-all"
            onClick={() => {
              document.getElementById("education-nav")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Узнать больше
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ChevronDownIcon className="h-8 w-8 text-[#D14A68]" />
        </motion.div>
      </section>

      {/* Educational Navigation */}
      <section id="education-nav" className="w-full py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Образовательная навигация</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Университет будущего",
                description: "Узнайте, как будет выглядеть образование в ближайшие десятилетия",
                icon: <BookOpen className="h-10 w-10 text-[#D14A68]" />,
              },
              {
                title: "Тысяча способов объяснить",
                description: "Различные методики обучения для разных типов восприятия информации",
                icon: <Brain className="h-10 w-10 text-[#D14A68]" />,
              },
              {
                title: "Секретные методики обучения",
                description: "Эффективные техники, которые помогут вам учиться быстрее и запоминать больше",
                icon: <Users className="h-10 w-10 text-[#D14A68]" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none"
              >
                <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10 pb-2">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <CardTitle className="text-xl text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-center text-gray-600">{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pb-6">
                  <Button
                    variant="outline"
                    className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                  >
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Self-analysis and Career Guidance */}
      <section className="w-full py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Самоанализ и профориентация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none">
              <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10">
                <CardTitle className="text-xl">Моя скрытая суперсила</CardTitle>
                <CardDescription>
                  Узнайте о своих уникальных талантах и способностях, которые помогут вам в учебе и карьере
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Креативность", "Аналитика", "Коммуникация", "Лидерство", "Эмпатия"].map((skill, i) => (
                    <Badge key={i} className="bg-[#FF8DA1] hover:bg-[#D14A68]">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600">
                  Пройдите наш уникальный тест, чтобы раскрыть свои сильные стороны и понять, как их можно применить в
                  образовании и будущей карьере.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Пройти тест</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none">
              <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10">
                <CardTitle className="text-xl">Тесты на soft skills</CardTitle>
                <CardDescription>
                  Оцените свои мягкие навыки и узнайте, как их развивать для успешной учебы и карьеры
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {[
                    "Коммуникативные навыки",
                    "Критическое мышление",
                    "Тайм-менеджмент",
                    "Работа в команде",
                    "Адаптивность",
                  ].map((test, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#D14A68]" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Выбрать тест</Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Student Advice */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Советы от топ-студентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Алия Сатпаева",
                university: "Назарбаев Университет",
                title: "Как я поступила в NU с полным грантом",
                credits: 50,
              },
              {
                name: "Арман Касымов",
                university: "MIT",
                title: "Мой путь от школы в Алматы до Массачусетского технологического",
                credits: 75,
              },
              {
                name: "Дана Нурланова",
                university: "Стэнфорд",
                title: "Секреты успешной подготовки к SAT и IELTS",
                credits: 60,
              },
              {
                name: "Тимур Ахметов",
                university: "Гарвард",
                title: "Как написать мотивационное письмо, которое заметят",
                credits: 80,
              },
              {
                name: "Айгерим Бекова",
                university: "Оксфорд",
                title: "Стипендии и гранты: полное руководство",
                credits: 65,
              },
              {
                name: "Нурлан Сагинтаев",
                university: "КБТУ",
                title: "Как совмещать учебу и работу без выгорания",
                credits: 45,
              },
            ].map((student, index) => (
              <Card
                key={index}
                className={cn(
                  "shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden border-none",
                  "hover:translate-y-[-5px]",
                )}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-2">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${student.name[0]}`} />
                      <AvatarFallback className="bg-[#FF8DA1]">{student.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.university}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{student.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Полезные советы и личный опыт поступления, который поможет вам достичь своих образовательных целей.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Badge variant="outline" className="border-[#D14A68] text-[#D14A68]">
                    {student.credits} кредитов
                  </Badge>
                  <Button size="sm" className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reward System */}
      <section className="w-full py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Kred-система</h2>
          <div className="bg-gradient-to-r from-[#FF8DA1]/20 to-[#D14A68]/20 rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <Award className="h-24 w-24 text-[#D14A68]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Зарабатывайте кредиты и получайте доступ к премиум-контенту</h3>
                <p className="text-gray-700">
                  Наша система поощрения позволяет вам зарабатывать кредиты за активность на платформе и обменивать их
                  на доступ к эксклюзивным материалам, консультациям и курсам.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Ежедневный вход",
                  description: "Получайте 5 кредитов каждый день просто за вход на платформу",
                  credits: "+5",
                },
                {
                  title: "Прохождение тестов",
                  description: "Зарабатывайте от 10 до 30 кредитов за каждый пройденный тест",
                  credits: "+10-30",
                },
                {
                  title: "Написание статей",
                  description: "Делитесь своим опытом и получайте до 100 кредитов за публикацию",
                  credits: "+100",
                },
                {
                  title: "Подписка",
                  description: "Премиум-подписка дает вам 500 кредитов сразу и 50 ежемесячно",
                  credits: "+500",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    <Badge className="bg-[#D14A68]">{item.credits}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Educational Navigation */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Навигация по образованию</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none col-span-1 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <School className="h-6 w-6 text-[#D14A68]" />
                  <CardTitle>Рекомендации по вузам</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Казахстан</h4>
                    <ul className="space-y-1">
                      {["Назарбаев Университет", "КБТУ", "КИМЭП", "ЕНУ", "КазНУ"].map((uni, i) => (
                        <li key={i} className="text-gray-700 hover:text-[#D14A68] cursor-pointer">
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Зарубежье</h4>
                    <ul className="space-y-1">
                      {["Гарвард", "MIT", "Стэнфорд", "Оксфорд", "Кембридж"].map((uni, i) => (
                        <li key={i} className="text-gray-700 hover:text-[#D14A68] cursor-pointer">
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                >
                  Все университеты
                </Button>
              </CardFooter>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-6 w-6 text-[#D14A68]" />
                  <CardTitle>FAQ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Как подготовиться к поступлению?",
                    "Какие документы нужны для зарубежных вузов?",
                    "Как получить грант или стипендию?",
                    "Как выбрать подходящую специальность?",
                    "Что делать после получения диплома?",
                  ].map((q, i) => (
                    <div key={i} className="pb-2 border-b border-gray-100">
                      <p className="text-gray-700 hover:text-[#D14A68] cursor-pointer">{q}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white w-full"
                >
                  Все вопросы
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Информация о поступлении</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  university: "Назарбаев Университет",
                  deadline: "15 марта",
                  requirements: ["IELTS 6.5+", "SAT 1200+", "Мотивационное письмо"],
                },
                {
                  university: "Гарвард",
                  deadline: "1 января",
                  requirements: ["TOEFL 100+", "SAT 1500+", "Рекомендательные письма"],
                },
                {
                  university: "КБТУ",
                  deadline: "30 июня",
                  requirements: ["ЕНТ 120+", "Английский B2", "Собеседование"],
                },
              ].map((uni, index) => (
                <Card key={index} className="border border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{uni.university}</CardTitle>
                    <CardDescription>Дедлайн: {uni.deadline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">Требования:</p>
                    <ul className="space-y-1">
                      {uni.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          • {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
