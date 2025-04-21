"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle2, Gift, BookOpen, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"
import { CalendarIcon } from "@radix-ui/react-icons"

export default function KredsPage() {
  const earnMethods = [
    {
      title: "Ежедневный вход",
      description: "Получайте 5 кредитов каждый день просто за вход на платформу",
      credits: "+5",
      icon: <CalendarIcon className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Прохождение тестов",
      description: "Зарабатывайте от 10 до 30 кредитов за каждый пройденный тест",
      credits: "+10-30",
      icon: <CheckCircle2 className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Написание статей",
      description: "Делитесь своим опытом и получайте до 100 кредитов за публикацию",
      credits: "+100",
      icon: <BookOpen className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Подписка",
      description: "Премиум-подписка дает вам 500 кредитов сразу и 50 ежемесячно",
      credits: "+500",
      icon: <Star className="h-10 w-10 text-[#D14A68]" />,
    },
  ]

  const spendMethods = [
    {
      title: "Статьи от топ-студентов",
      description: "Доступ к эксклюзивным материалам от студентов ведущих вузов",
      credits: "30-100",
      icon: <BookOpen className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Консультации",
      description: "Индивидуальные консультации по поступлению и обучению",
      credits: "200-500",
      icon: <Users className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Премиум-курсы",
      description: "Доступ к расширенным образовательным курсам и материалам",
      credits: "150-300",
      icon: <Star className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Подарки и мерч",
      description: "Фирменные товары GUNI и другие полезные подарки",
      credits: "100-400",
      icon: <Gift className="h-10 w-10 text-[#D14A68]" />,
    },
  ]

  const achievements = [
    {
      title: "Первые шаги",
      description: "Заработайте свои первые 100 кредитов",
      progress: 65,
      reward: 50,
    },
    {
      title: "Постоянный посетитель",
      description: "Войдите на платформу 7 дней подряд",
      progress: 85,
      reward: 70,
    },
    {
      title: "Эксперт",
      description: "Пройдите все тесты в разделе самоанализа",
      progress: 40,
      reward: 100,
    },
    {
      title: "Автор",
      description: "Опубликуйте свою первую статью",
      progress: 0,
      reward: 150,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="Kred-система"
        description="Зарабатывайте кредиты и получайте доступ к премиум-контенту и эксклюзивным возможностям"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-gradient-to-r from-[#FF8DA1]/20 to-[#D14A68]/20 rounded-2xl p-8 shadow-md">
            <div className="flex-shrink-0">
              <Award className="h-24 w-24 text-[#D14A68]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Ваш баланс: 250 кредитов</h3>
              <p className="text-gray-700 mb-4">
                Kred-система — это внутренняя валюта платформы GUNI, которая позволяет вам получать доступ к
                премиум-контенту и эксклюзивным возможностям. Зарабатывайте кредиты за активность на платформе и тратьте
                их на то, что вам интересно.
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Заработать больше</Button>
                <Button
                  variant="outline"
                  className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                >
                  История транзакций
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="earn" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="earn">Как заработать</TabsTrigger>
              <TabsTrigger value="spend">Как потратить</TabsTrigger>
            </TabsList>
            <TabsContent value="earn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {earnMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none h-full flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex justify-center mb-4">{method.icon}</div>
                        <CardTitle className="text-xl text-center">{method.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2 flex-grow">
                        <p className="text-sm text-gray-600 text-center mb-4">{method.description}</p>
                        <div className="flex justify-center">
                          <Badge className="bg-[#D14A68] text-lg px-4 py-1">{method.credits}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="spend">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {spendMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none h-full flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex justify-center mb-4">{method.icon}</div>
                        <CardTitle className="text-xl text-center">{method.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2 flex-grow">
                        <p className="text-sm text-gray-600 text-center mb-4">{method.description}</p>
                        <div className="flex justify-center">
                          <Badge variant="outline" className="border-[#D14A68] text-[#D14A68] text-lg px-4 py-1">
                            {method.credits}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Достижения</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Прогресс</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2 mb-4" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Награда:</span>
                        <Badge className="bg-[#D14A68]">+{achievement.reward} кредитов</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-center">Премиум-подписка</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-md border-none">
                <CardHeader className="pb-2 text-center">
                  <CardTitle>Месячная</CardTitle>
                  <div className="text-3xl font-bold text-[#D14A68] my-2">1 500 ₸</div>
                  <CardDescription>Идеально для знакомства с платформой</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {["500 кредитов сразу", "Доступ к базовым статьям", "Скидка 10% на консультации"].map(
                      (feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Выбрать</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-xl border-none relative">
                <div className="absolute top-0 right-0 bg-[#D14A68] text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Популярный
                </div>
                <CardHeader className="pb-2 text-center">
                  <CardTitle>Полугодовая</CardTitle>
                  <div className="text-3xl font-bold text-[#D14A68] my-2">7 500 ₸</div>
                  <CardDescription>Экономия 17%</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {[
                      "1500 кредитов сразу",
                      "100 кредитов ежемесячно",
                      "Доступ ко всем статьям",
                      "Скидка 20% на консультации",
                      "Приоритетная поддержка",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Выбрать</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-md border-none">
                <CardHeader className="pb-2 text-center">
                  <CardTitle>Годовая</CardTitle>
                  <div className="text-3xl font-bold text-[#D14A68] my-2">12 000 ₸</div>
                  <CardDescription>Экономия 33%</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {[
                      "2500 кредитов сразу",
                      "200 кредитов ежемесячно",
                      "Доступ ко всем материалам",
                      "Бесплатная консультация",
                      "VIP-поддержка",
                      "Эксклюзивные мероприятия",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Выбрать</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
