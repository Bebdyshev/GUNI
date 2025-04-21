"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, GraduationCap, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"
import { MagnifyingGlassIcon, CalendarIcon } from "@radix-ui/react-icons"

export default function UniversitiesPage() {
  const [activeRegion, setActiveRegion] = useState("all")

  const universities = [
    {
      id: 1,
      name: "Назарбаев Университет",
      location: "Астана, Казахстан",
      region: "kazakhstan",
      description: "Ведущий исследовательский университет Казахстана с международными стандартами образования.",
      programs: ["Инженерия", "Бизнес", "Медицина", "Наука", "Гуманитарные науки"],
      deadline: "15 марта",
      requirements: ["IELTS 6.5+", "SAT 1200+", "Мотивационное письмо"],
      website: "https://nu.edu.kz",
      featured: true,
    },
    {
      id: 2,
      name: "КБТУ",
      location: "Алматы, Казахстан",
      region: "kazakhstan",
      description:
        "Казахстанско-Британский технический университет, специализирующийся на технических и бизнес-направлениях.",
      programs: ["IT", "Нефтегазовое дело", "Финансы", "Химическая инженерия"],
      deadline: "30 июня",
      requirements: ["ЕНТ 120+", "Английский B2", "Собеседование"],
      website: "https://kbtu.edu.kz",
      featured: false,
    },
    {
      id: 3,
      name: "КИМЭП",
      location: "Алматы, Казахстан",
      region: "kazakhstan",
      description:
        "Казахстанский институт менеджмента, экономики и прогнозирования, ведущий вуз в области бизнес-образования.",
      programs: ["Бизнес", "Право", "Международные отношения", "Журналистика"],
      deadline: "15 июля",
      requirements: ["IELTS 5.5+", "Эссе", "Собеседование"],
      website: "https://kimep.kz",
      featured: false,
    },
    {
      id: 4,
      name: "Гарвардский университет",
      location: "Кембридж, США",
      region: "foreign",
      description:
        "Один из самых престижных университетов мира, известный своими высокими стандартами образования и исследований.",
      programs: ["Искусство и науки", "Бизнес", "Право", "Медицина", "Образование"],
      deadline: "1 января",
      requirements: ["TOEFL 100+", "SAT 1500+", "Рекомендательные письма"],
      website: "https://harvard.edu",
      featured: true,
    },
    {
      id: 5,
      name: "Массачусетский технологический институт",
      location: "Кембридж, США",
      region: "foreign",
      description: "Ведущий технический университет мира, известный своими инновациями и исследованиями.",
      programs: ["Инженерия", "Компьютерные науки", "Физика", "Математика", "Экономика"],
      deadline: "1 января",
      requirements: ["TOEFL 100+", "SAT 1500+", "Портфолио проектов"],
      website: "https://mit.edu",
      featured: true,
    },
    {
      id: 6,
      name: "Оксфордский университет",
      location: "Оксфорд, Великобритания",
      region: "foreign",
      description: "Старейший университет в англоязычном мире, известный своим высоким качеством образования.",
      programs: ["Гуманитарные науки", "Социальные науки", "Математика", "Медицина", "Право"],
      deadline: "15 октября",
      requirements: ["IELTS 7.0+", "Вступительные экзамены", "Собеседование"],
      website: "https://ox.ac.uk",
      featured: false,
    },
  ]

  const faqs = [
    {
      question: "Как выбрать подходящий университет?",
      answer:
        "При выборе университета учитывайте свои академические интересы, карьерные цели, финансовые возможности, местоположение и культурную среду. Исследуйте рейтинги, отзывы студентов и возможности трудоустройства выпускников.",
    },
    {
      question: "Какие документы нужны для поступления в зарубежный вуз?",
      answer:
        "Обычно требуются: аттестат о среднем образовании, результаты языковых тестов (IELTS, TOEFL), стандартизированные тесты (SAT, ACT), мотивационное письмо, рекомендательные письма, CV/резюме и иногда портфолио работ.",
    },
    {
      question: "Как получить грант или стипендию?",
      answer:
        "Исследуйте стипендиальные программы университетов, государственные программы (например, Болашак), международные фонды и организации. Подавайте заявки заранее, подготовьте сильное мотивационное письмо и убедительно продемонстрируйте свои достижения и потенциал.",
    },
    {
      question: "Как подготовиться к вступительным экзаменам?",
      answer:
        "Начните подготовку заранее, используйте официальные учебные материалы, пройдите пробные тесты, рассмотрите возможность занятий с репетитором или подготовительные курсы. Создайте план подготовки и регулярно отслеживайте свой прогресс.",
    },
    {
      question: "Что делать после получения диплома?",
      answer:
        "Варианты включают: поиск работы по специальности, продолжение образования (магистратура, докторантура), стажировки, волонтерство, создание собственного бизнеса или проекта. Важно начать планировать карьеру еще во время учебы.",
    },
  ]

  const filteredUniversities =
    activeRegion === "all" ? universities : universities.filter((uni) => uni.region === activeRegion)

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="Навигация по образованию"
        description="Исследуйте ведущие университеты Казахстана и мира, узнайте о требованиях и сроках поступления"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Поиск университетов..."
                className="pl-10 border-[#D14A68]/30 focus:border-[#D14A68]"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={activeRegion === "all" ? "default" : "outline"} 
                className={activeRegion === "all" ? "bg-[#D14A68] hover:bg-[#FF8DA1] text-white" : "border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text  hover:bg-[#FF8DA1] text-white" : "border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"}
                onClick={() => setActiveRegion("all")}
              >
                Все
              </Button>
              <Button 
                variant={activeRegion === "kazakhstan" ? "default" : "outline"} 
                className={activeRegion === "kazakhstan" ? "bg-[#D14A68] hover:bg-[#FF8DA1] text-white" : "border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"}
                onClick={() => setActiveRegion("kazakhstan")}
              >
                Казахстан
              </Button>
              <Button 
                variant={activeRegion === "foreign" ? "default" : "outline"} 
                className={activeRegion === "foreign" ? "bg-[#D14A68] hover:bg-[#FF8DA1] text-white" : "border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"}
                onClick={() => setActiveRegion("foreign")}
              >
                Зарубежье
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredUniversities.map((university, index) => (
              <motion.div
                key={university.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-none h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{university.name}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin size={14} className="mr-1" />
                          {university.location}
                        </div>
                      </div>
                      {university.featured && (
                        <Badge className="bg-[#D14A68]">Топ вуз</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2 flex-grow">
                    <p className="text-sm text-gray-600 mb-4\">{university.description}</p>
                    <div className="mb-4">
                      <div classNameName="flex items-center mb-2">
                        <GraduationCap size={16} className="text-[#D14A68] mr-2" />
                        <span className="text-sm font-medium">Программы:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {university.programs.slice(0, 3).map((program, i) => (
                          <Badge key={i} variant="outline" className="border-[#D14A68] text-[#D14A68]">
                            {program}
                          </Badge>
                        ))}
                        {university.programs.length > 3 && (
                          <Badge variant="outline" className="border-[#D14A68] text-[#D14A68]">
                            +{university.programs.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <CalendarIcon size={16} className="text-[#D14A68] mr-2" />
                        <span className="text-sm font-medium">Дедлайн: {university.deadline}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <HelpCircle size={16} className="text-[#D14A68] mr-2" />
                        <span className="text-sm font-medium">Требования:</span>
                      </div>
                      <ul className="ml-6 space-y-1">
                        {university.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-600">• {req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                      onClick={() => window.open(university.website, "_blank")}
                    >
                      Сайт <ExternalLink size={14} className="ml-1" />
                    </Button>
                    <Button size="sm" className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h3>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Нужна помощь с поступлением?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Наши эксперты готовы помочь вам с выбором университета, подготовкой документов и консультацией по поступлению.
            </p>
            <Button className="bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
