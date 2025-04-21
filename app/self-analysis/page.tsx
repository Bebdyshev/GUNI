"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, Lightbulb, Sparkles, CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"

export default function SelfAnalysisPage() {
  const [activeTest, setActiveTest] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const startTest = (testId: string) => {
    setActiveTest(testId)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const tests = [
    {
      id: "superpower",
      title: "Моя скрытая суперсила",
      description: "Узнайте о своих уникальных талантах и способностях, которые помогут вам в учебе и карьере",
      icon: <Sparkles className="h-10 w-10 text-[#D14A68]" />,
      duration: "15 минут",
      questions: 20,
      popular: true,
    },
    {
      id: "learning-style",
      title: "Мой стиль обучения",
      description: "Определите, как вы лучше всего воспринимаете и обрабатываете информацию",
      icon: <Brain className="h-10 w-10 text-[#D14A68]" />,
      duration: "10 минут",
      questions: 15,
      popular: false,
    },
    {
      id: "soft-skills",
      title: "Анализ soft skills",
      description: "Оцените свои мягкие навыки и узнайте, как их развивать для успешной учебы и карьеры",
      icon: <Lightbulb className="h-10 w-10 text-[#D14A68]" />,
      duration: "20 минут",
      questions: 25,
      popular: true,
    },
  ]

  const completedTests = [
    {
      id: "career-path",
      title: "Мой карьерный путь",
      date: "15.04.2023",
      result: "Аналитик данных, Исследователь, Стратег",
    },
    {
      id: "personality",
      title: "Личностный профиль",
      date: "02.03.2023",
      result: "INTJ - Стратег",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="Самоанализ и профориентация"
        description="Пройдите тесты, чтобы лучше понять себя, свои сильные стороны и выбрать подходящий образовательный путь"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {activeTest ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="shadow-md rounded-2xl overflow-hidden border-none">
                <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10">
                  <CardTitle>{tests.find((test) => test.id === activeTest)?.title || "Тест"}</CardTitle>
                  <CardDescription>
                    Отвечайте на вопросы честно, чтобы получить наиболее точный результат
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Прогресс</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  {progress < 100 ? (
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-4">Вопрос {Math.ceil(progress / 10)} из 10</h3>
                        <p className="mb-4">
                          {activeTest === "superpower"
                            ? "Когда я сталкиваюсь с новой задачей, я предпочитаю:"
                            : activeTest === "learning-style"
                              ? "При изучении нового материала мне легче всего:"
                              : "В командной работе я обычно:"}
                        </p>
                        <div className="space-y-2">
                          {["Вариант ответа 1", "Вариант ответа 2", "Вариант ответа 3", "Вариант ответа 4"].map(
                            (option, i) => (
                              <div
                                key={i}
                                className="p-3 border rounded-lg hover:border-[#D14A68] cursor-pointer transition-colors"
                              >
                                {option}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <div className="flex justify-center mb-4">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Тест завершен!</h3>
                      <p className="text-gray-600 mb-6">
                        Ваши результаты готовы. Нажмите кнопку ниже, чтобы увидеть подробный анализ.
                      </p>
                      <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Посмотреть результаты</Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                    onClick={() => setActiveTest(null)}
                  >
                    Вернуться к списку
                  </Button>
                  {progress < 100 && (
                    <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Следующий вопрос</Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ) : (
            <Tabs defaultValue="available" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="available">Доступные тесты</TabsTrigger>
                <TabsTrigger value="completed">Пройденные тесты</TabsTrigger>
              </TabsList>
              <TabsContent value="available">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tests.map((test, index) => (
                    <motion.div
                      key={test.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none h-full flex flex-col">
                        <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10 pb-2">
                          <div className="flex justify-center mb-4">{test.icon}</div>
                          <div className="flex justify-between items-center mb-2">
                            <CardTitle className="text-xl">{test.title}</CardTitle>
                            {test.popular && <Badge className="bg-[#D14A68]">Популярный</Badge>}
                          </div>
                          <CardDescription>{test.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4 flex-grow">
                          <div className="flex justify-between text-sm text-gray-500 mb-1">
                            <span>Длительность:</span>
                            <span>{test.duration}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>Вопросов:</span>
                            <span>{test.questions}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button
                            className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white"
                            onClick={() => startTest(test.id)}
                          >
                            Пройти тест
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="max-w-3xl mx-auto">
                  {completedTests.map((test, index) => (
                    <motion.div
                      key={test.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="text-lg">{test.title}</CardTitle>
                            <span className="text-sm text-gray-500">{test.date}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Результат:</p>
                              <p className="font-medium">{test.result}</p>
                            </div>
                            <Button
                              variant="ghost"
                              className="text-[#D14A68] hover:text-[#D14A68] hover:bg-[#D14A68]/10"
                            >
                              Подробнее <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
    </main>
  )
}
