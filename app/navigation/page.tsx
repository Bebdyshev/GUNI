"use client"

import { motion } from "framer-motion"
import { BookOpen, Brain, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"

export default function NavigationPage() {
  const educationalCategories = [
    {
      title: "Университет будущего",
      description: "Узнайте, как будет выглядеть образование в ближайшие десятилетия",
      icon: <BookOpen className="h-10 w-10 text-[#D14A68]" />,
      articles: [
        "Образование 2050: прогнозы и тренды",
        "Виртуальные кампусы и дистанционное обучение",
        "Персонализированные образовательные траектории",
        "Искусственный интеллект в образовании",
        "Новые профессии и навыки будущего",
      ],
    },
    {
      title: "Тысяча способов объяснить",
      description: "Различные методики обучения для разных типов восприятия информации",
      icon: <Brain className="h-10 w-10 text-[#D14A68]" />,
      articles: [
        "Визуальное обучение: инфографика и видео",
        "Аудиальное обучение: подкасты и аудиокниги",
        "Кинестетическое обучение: практика и эксперименты",
        "Геймификация образования",
        "Метод интервальных повторений",
      ],
    },
    {
      title: "Секретные методики обучения",
      description: "Эффективные техники, которые помогут вам учиться быстрее и запоминать больше",
      icon: <Users className="h-10 w-10 text-[#D14A68]" />,
      articles: [
        "Техника Помодоро для концентрации",
        "Метод Фейнмана для глубокого понимания",
        "Ментальные карты и структурирование информации",
        "Активное чтение и конспектирование",
        "Техники мнемоники для запоминания",
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="Образовательная навигация"
        description="Исследуйте различные подходы к обучению и образованию, чтобы найти свой идеальный путь"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Поиск по образовательным материалам..."
                className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white">
                Популярные
              </Button>
              <Button variant="outline" className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white">
                Новые
              </Button>
              <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Все материалы</Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все категории</TabsTrigger>
              <TabsTrigger value="articles">Статьи</TabsTrigger>
              <TabsTrigger value="courses">Курсы</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 gap-8">
                {educationalCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none">
                      <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10 pb-2">
                        <div className="flex justify-center mb-4">{category.icon}</div>
                        <CardTitle className="text-2xl text-center">{category.title}</CardTitle>
                        <CardDescription className="text-center">{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          {category.articles.map((article, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#D14A68]" />
                              <span className="text-gray-700 hover:text-[#D14A68] cursor-pointer">{article}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-center pb-6">
                        <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Изучить подробнее</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {
                            [
                              "Техника Помодоро",
                              "Метод Фейнмана",
                              "Ментальные карты",
                              "Активное чтение",
                              "Мнемоника",
                              "Интервальные повторения",
                            ][index]
                          }
                        </CardTitle>
                        <CardDescription>
                          {
                            [
                              "Управление временем",
                              "Глубокое понимание",
                              "Структурирование",
                              "Конспектирование",
                              "Запоминание",
                              "Повторение",
                            ][index]
                          }
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Эффективная методика, которая поможет вам улучшить процесс обучения и достичь лучших
                          результатов.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                        >
                          Читать статью
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="bg-gray-100 rounded-md p-2 mb-2 text-xs text-gray-500">
                          {["4 недели", "2 недели", "6 недель", "3 недели"][index]} •{" "}
                          {["Начальный", "Средний", "Продвинутый", "Начальный"][index]} уровень
                        </div>
                        <CardTitle className="text-lg">
                          {
                            [
                              "Основы эффективного обучения",
                              "Мастерство запоминания",
                              "Скорочтение и анализ текста",
                              "Критическое мышление",
                            ][index]
                          }
                        </CardTitle>
                        <CardDescription>
                          Интерактивный курс с практическими заданиями и обратной связью от экспертов
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 10+ видеоуроков</li>
                          <li>• Практические задания</li>
                          <li>• Сертификат по окончании</li>
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="font-bold text-[#D14A68]">{[150, 200, 300, 180][index]} кредитов</div>
                        <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Записаться</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
