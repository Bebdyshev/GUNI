"use client"

import { motion } from "framer-motion"
import { Search, Filter, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageHeader from "@/components/page-header"
import { cn } from "@/lib/utils"

export default function TopStudentsPage() {
  const students = [
    {
      id: 1,
      name: "Алия Сатпаева",
      university: "Назарбаев Университет",
      title: "Как я поступила в NU с полным грантом",
      description:
        "Делюсь своим опытом подготовки к вступительным экзаменам, написания мотивационного письма и прохождения собеседования.",
      credits: 50,
      tags: ["Поступление", "Гранты", "Мотивационное письмо"],
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      name: "Арман Касымов",
      university: "MIT",
      title: "Мой путь от школы в Алматы до Массачусетского технологического",
      description:
        "История о том, как я готовился к поступлению в один из самых престижных технических вузов мира, и какие препятствия пришлось преодолеть.",
      credits: 75,
      tags: ["Зарубежное образование", "Технические вузы", "SAT"],
      rating: 4.9,
      reviews: 32,
    },
    {
      id: 3,
      name: "Дана Нурланова",
      university: "Стэнфорд",
      title: "Секреты успешной подготовки к SAT и IELTS",
      description:
        "Методики и ресурсы, которые помогли мне получить высокие баллы на международных экзаменах и поступить в Стэнфорд.",
      credits: 60,
      tags: ["SAT", "IELTS", "Экзамены"],
      rating: 4.7,
      reviews: 18,
    },
    {
      id: 4,
      name: "Тимур Ахметов",
      university: "Гарвард",
      title: "Как написать мотивационное письмо, которое заметят",
      description:
        "Практические советы по написанию эффективного мотивационного письма, которое выделит вас среди тысяч других кандидатов.",
      credits: 80,
      tags: ["Мотивационное письмо", "Поступление", "Гарвард"],
      rating: 4.9,
      reviews: 41,
    },
    {
      id: 5,
      name: "Айгерим Бекова",
      university: "Оксфорд",
      title: "Стипендии и гранты: полное руководство",
      description:
        "Обзор доступных стипендий и грантов для казахстанских студентов, желающих учиться за рубежом, и как их получить.",
      credits: 65,
      tags: ["Стипендии", "Гранты", "Финансирование"],
      rating: 4.8,
      reviews: 29,
    },
    {
      id: 6,
      name: "Нурлан Сагинтаев",
      university: "КБТУ",
      title: "Как совмещать учебу и работу без выгорания",
      description:
        "Практические советы по тайм-менеджменту и организации своего времени для успешного совмещения учебы и работы.",
      credits: 45,
      tags: ["Тайм-менеджмент", "Выгорание", "Баланс"],
      rating: 4.6,
      reviews: 15,
    },
    {
      id: 7,
      name: "Асель Жумабаева",
      university: "Сорбонна",
      title: "Учеба во Франции: от подачи документов до получения диплома",
      description:
        "Подробное руководство по поступлению и обучению во французских университетах, особенности системы образования.",
      credits: 70,
      tags: ["Франция", "Европейское образование", "Языковые требования"],
      rating: 4.7,
      reviews: 22,
    },
    {
      id: 8,
      name: "Бауыржан Алиев",
      university: "Токийский университет",
      title: "Образование в Японии: мой опыт и рекомендации",
      description:
        "Все о поступлении, учебе и жизни в Японии, культурных особенностях и возможностях для казахстанских студентов.",
      credits: 85,
      tags: ["Япония", "Азиатское образование", "Стипендии"],
      rating: 4.8,
      reviews: 27,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="Советы от топ-студентов"
        description="Узнайте секреты успеха от студентов, которые поступили в лучшие университеты мира"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Поиск по статьям..." className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]" />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-500" />
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Фильтр по вузам" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все университеты</SelectItem>
                    <SelectItem value="nu">Назарбаев Университет</SelectItem>
                    <SelectItem value="foreign">Зарубежные вузы</SelectItem>
                    <SelectItem value="kbtu">КБТУ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">По цене (мин-макс)</SelectItem>
                  <SelectItem value="price-high">По цене (макс-мин)</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
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
                    <p className="text-sm text-gray-600 mb-4">{student.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-[#D14A68] text-[#D14A68]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(student.rating) ? "text-yellow-400" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-gray-500">
                          {student.rating} ({student.reviews})
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{Math.floor(Math.random() * 20) + 5} мин. чтения</span>
                      </div>
                    </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
