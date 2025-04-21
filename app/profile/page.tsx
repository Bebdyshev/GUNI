"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, CheckCircle2, Clock, Download, Edit, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PageHeader from "@/components/page-header"

// Добавляем импорт useAuth и useRouter
import { useAuth } from "@/context/auth-context"

// Импортируем AuthGuard
import AuthGuard from "@/components/auth-guard"

export default function ProfilePage() {
  const { user } = useAuth()

  // Используем данные из контекста авторизации
  const userInfo = user
    ? {
        name: user.name,
        email: user.email,
        credits: user.credits,
        joinDate: user.joinDate,
        completedTests: 5,
        purchasedArticles: 3,
        streak: 7,
      }
    : null

  // Если пользователь не авторизован, перенаправляем на страницу входа
  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login")
  //   }
  // }, [user, router])

  // // Если пользователь не авторизован, показываем заглушку
  // if (!user) {
  //   return null
  // }

  // const userInfo = {
  //   name: user.name,
  //   email: user.email,
  //   credits: user.credits,
  //   joinDate: user.joinDate,
  //   completedTests: 5,
  //   purchasedArticles: 3,
  //   streak: 7,
  // }

  const recentActivity = [
    {
      type: "test",
      title: "Пройден тест: Моя скрытая суперсила",
      date: "22.04.2023",
      credits: "+20",
    },
    {
      type: "purchase",
      title: "Покупка статьи: Как поступить в Гарвард",
      date: "20.04.2023",
      credits: "-80",
    },
    {
      type: "login",
      title: "Ежедневный вход",
      date: "19.04.2023",
      credits: "+5",
    },
    {
      type: "test",
      title: "Пройден тест: Анализ soft skills",
      date: "15.04.2023",
      credits: "+30",
    },
    {
      type: "purchase",
      title: "Покупка статьи: Секреты успешной подготовки к SAT",
      date: "10.04.2023",
      credits: "-60",
    },
  ]

  const purchasedArticles = [
    {
      id: 1,
      title: "Как поступить в Гарвард",
      author: "Тимур Ахметов",
      date: "20.04.2023",
      price: 80,
    },
    {
      id: 2,
      title: "Секреты успешной подготовки к SAT",
      author: "Дана Нурланова",
      date: "10.04.2023",
      price: 60,
    },
    {
      id: 3,
      title: "Как я поступила в NU с полным грантом",
      author: "Алия Сатпаева",
      date: "05.03.2023",
      price: 50,
    },
  ]

  const completedTests = [
    {
      id: 1,
      title: "Моя скрытая суперсила",
      date: "22.04.2023",
      result: "Аналитик, Стратег, Исследователь",
    },
    {
      id: 2,
      title: "Анализ soft skills",
      date: "15.04.2023",
      result: "Коммуникация, Адаптивность, Критическое мышление",
    },
    {
      id: 3,
      title: "Мой стиль обучения",
      date: "02.04.2023",
      result: "Визуальный, Кинестетический",
    },
    {
      id: 4,
      title: "Мой карьерный путь",
      date: "15.03.2023",
      result: "Аналитик данных, Исследователь, Стратег",
    },
    {
      id: 5,
      title: "Личностный профиль",
      date: "02.03.2023",
      result: "INTJ - Стратег",
    },
  ]

  const achievements = [
    {
      title: "Первые шаги",
      description: "Заработайте свои первые 100 кредитов",
      progress: 100,
      completed: true,
    },
    {
      title: "Постоянный посетитель",
      description: "Войдите на платформу 7 дней подряд",
      progress: 100,
      completed: true,
    },
    {
      title: "Эксперт",
      description: "Пройдите все тесты в разделе самоанализа",
      progress: 60,
      completed: false,
    },
    {
      title: "Автор",
      description: "Опубликуйте свою первую статью",
      progress: 0,
      completed: false,
    },
  ]

  return (
    <AuthGuard>
      <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
        <PageHeader
          title="Личный кабинет"
          description="Управляйте своим профилем, отслеживайте прогресс и просматривайте историю активности"
        />

        <section className="w-full py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-md rounded-2xl overflow-hidden border-none lg:col-span-1">
                <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10 pb-2">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96&text=АК" />
                      <AvatarFallback className="bg-[#D14A68] text-white text-2xl">АК</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl text-center">{userInfo?.name}</CardTitle>
                    <CardDescription className="text-center">{userInfo?.email}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-[#D14A68] mr-2" />
                        <span>Кредиты</span>
                      </div>
                      <Badge className="bg-[#D14A68]">{userInfo?.credits}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-[#D14A68] mr-2" />
                        <span>Дата регистрации</span>
                      </div>
                      <span className="text-gray-600">{userInfo?.joinDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-[#D14A68] mr-2" />
                        <span>Пройдено тестов</span>
                      </div>
                      <span className="text-gray-600">{userInfo?.completedTests}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-[#D14A68] mr-2" />
                        <span>Куплено статей</span>
                      </div>
                      <span className="text-gray-600">{userInfo?.purchasedArticles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-[#D14A68] mr-2" />
                        <span>Текущая серия</span>
                      </div>
                      <Badge variant="outline" className="border-[#D14A68] text-[#D14A68]">
                        {userInfo?.streak} дней
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                  >
                    <Edit className="h-4 w-4 mr-2" /> Редактировать
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                  >
                    <Settings className="h-4 w-4 mr-2" /> Настройки
                  </Button>
                </CardFooter>
              </Card>

              <Card className="shadow-md rounded-2xl overflow-hidden border-none lg:col-span-2">
                <CardHeader>
                  <CardTitle>Недавняя активность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <div className="mr-3">
                            {activity.type === "test" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                            {activity.type === "purchase" && <BookOpen className="h-5 w-5 text-blue-500" />}
                            {activity.type === "login" && <User className="h-5 w-5 text-[#D14A68]" />}
                          </div>
                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                        <Badge className={activity.credits.startsWith("+") ? "bg-green-500" : "bg-[#D14A68]"}>
                          {activity.credits}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="articles" className="w-full mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="articles">Купленные статьи</TabsTrigger>
                <TabsTrigger value="tests">Пройденные тесты</TabsTrigger>
              </TabsList>
              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {purchasedArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                          <CardDescription>Автор: {article.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span>Дата покупки:</span>
                            <span>{article.date}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>Стоимость:</span>
                            <Badge variant="outline" className="border-[#D14A68] text-[#D14A68]">
                              {article.price} кредитов
                            </Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
                            <BookOpen className="h-4 w-4 mr-2" /> Читать
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tests">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedTests.map((test, index) => (
                    <motion.div
                      key={test.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="text-lg">{test.title}</CardTitle>
                            <span className="text-sm text-gray-500">{test.date}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Результат:</p>
                            <p className="font-medium">{test.result}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button
                            variant="outline"
                            className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                          >
                            Подробнее
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                          >
                            <Download className="h-4 w-4 mr-2" /> Скачать PDF
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Достижения</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`shadow-sm hover:shadow-md transition-shadow ${achievement.completed ? "border-green-500" : ""}`}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-2 flex justify-between text-sm">
                          <span>Прогресс</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress
                          value={achievement.progress}
                          className={`h-2 mb-4 ${achievement.completed ? "bg-green-500" : ""}`}
                        />
                        {achievement.completed && (
                          <div className="flex items-center justify-center text-green-500">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            <span>Выполнено</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Рекомендации для вас</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                На основе ваших интересов и результатов тестов мы подобрали для вас следующие материалы:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  {
                    title: "Как написать мотивационное письмо",
                    type: "Статья",
                    credits: 80,
                  },
                  {
                    title: "Тест: Карьерные перспективы",
                    type: "Тест",
                    credits: 0,
                  },
                  {
                    title: "Подготовка к IELTS",
                    type: "Курс",
                    credits: 200,
                  },
                ].map((item, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant="outline" className="border-[#D14A68] text-[#D14A68] w-fit">
                        {item.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      {item.credits > 0 ? (
                        <Badge className="bg-[#D14A68]">{item.credits} кредитов</Badge>
                      ) : (
                        <Badge className="bg-green-500">Бесплатно</Badge>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
                        {item.credits > 0 ? "Купить" : "Пройти"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </AuthGuard>
  )
}
