"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Айгерим Нурланова",
      role: "Основатель и CEO",
      bio: "Выпускница Назарбаев Университета и Стэнфорда. Более 7 лет опыта в образовательной сфере.",
      image: "/placeholder.svg?height=100&width=100&text=АН",
    },
    {
      name: "Тимур Сатпаев",
      role: "Технический директор",
      bio: "Выпускник MIT. Разработчик образовательных платформ с опытом работы в ведущих технологических компаниях.",
      image: "/placeholder.svg?height=100&width=100&text=ТС",
    },
    {
      name: "Дана Ахметова",
      role: "Руководитель образовательных программ",
      bio: "Магистр педагогики Гарвардского университета. Эксперт в области инновационных методик обучения.",
      image: "/placeholder.svg?height=100&width=100&text=ДА",
    },
    {
      name: "Арман Касымов",
      role: "Маркетинг-директор",
      bio: "Выпускник Оксфорда. Опыт работы в международных образовательных проектах и маркетинге.",
      image: "/placeholder.svg?height=100&width=100&text=АК",
    },
  ]

  const values = [
    {
      title: "Доступность",
      description:
        "Мы стремимся сделать качественное образование доступным для всех, независимо от местоположения и финансовых возможностей.",
      icon: <Users className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Инновации",
      description:
        "Мы постоянно исследуем и внедряем новые методики обучения и технологии для повышения эффективности образовательного процесса.",
      icon: <Lightbulb className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Персонализация",
      description:
        "Мы верим, что каждый человек уникален, и стремимся предоставить индивидуальный подход к обучению и развитию.",
      icon: <Target className="h-10 w-10 text-[#D14A68]" />,
    },
    {
      title: "Сообщество",
      description:
        "Мы создаем сообщество единомышленников, где студенты могут обмениваться опытом, знаниями и поддерживать друг друга.",
      icon: <Heart className="h-10 w-10 text-[#D14A68]" />,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="О проекте GUNI"
        description="Наша миссия, ценности и команда, стоящая за образовательной платформой"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-gray-600 mb-4">
                GUNI — это образовательная платформа, созданная с целью помочь молодым людям раскрыть свой потенциал и
                найти свой путь в мире образования. Мы верим, что каждый человек уникален и имеет свои сильные стороны,
                которые можно развивать и применять для достижения успеха.
              </p>
              <p className="text-gray-600 mb-4">
                Наша миссия — сделать качественное образование доступным для всех, предоставить инструменты для
                самоанализа и профориентации, а также создать сообщество, где студенты могут делиться опытом и
                поддерживать друг друга.
              </p>
              <p className="text-gray-600">
                Мы стремимся к тому, чтобы каждый молодой человек мог принимать осознанные решения о своем образовании и
                будущей карьере, основываясь на понимании своих сильных сторон и интересов.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8DA1] to-[#D14A68] rounded-2xl blur-md"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=GUNI"
                    alt="GUNI Mission"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">{value.icon}</div>
                      <CardTitle className="text-xl text-center">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none text-center">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={member.image || "/placeholder.svg"} />
                          <AvatarFallback className="bg-[#D14A68] text-white text-2xl">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8DA1]/20 to-[#D14A68]/20 rounded-2xl p-8 shadow-md text-center">
            <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к нам</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Мы всегда открыты для сотрудничества с талантливыми людьми, которые разделяют наши ценности и хотят внести
              свой вклад в развитие образования. Если вы хотите стать частью нашей команды или у вас есть идеи для
              сотрудничества, свяжитесь с нами.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">Вакансии</Button>
              <Button variant="outline" className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
