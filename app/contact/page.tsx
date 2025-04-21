"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16">
      <PageHeader
        title="Связаться с нами"
        description="У вас есть вопросы или предложения? Мы всегда рады помочь и услышать ваше мнение"
      />

      <section className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-md rounded-2xl overflow-hidden border-none h-full">
                <CardHeader className="bg-gradient-to-r from-[#FF8DA1]/10 to-[#D14A68]/10">
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                          <Send className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
                      <p className="text-gray-600">Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.</p>
                      <Button
                        className="mt-6 bg-[#D14A68] hover:bg-[#FF8DA1] text-white"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Отправить еще одно сообщение
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="first-name">Имя</Label>
                            <Input
                              id="first-name"
                              placeholder="Имя"
                              className="border-[#D14A68]/30 focus:border-[#D14A68]"
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="last-name">Фамилия</Label>
                            <Input
                              id="last-name"
                              placeholder="Фамилия"
                              className="border-[#D14A68]/30 focus:border-[#D14A68]"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="border-[#D14A68]/30 focus:border-[#D14A68]"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="subject">Тема</Label>
                          <Input
                            id="subject"
                            placeholder="Тема вашего сообщения"
                            className="border-[#D14A68]/30 focus:border-[#D14A68]"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label>Тип обращения</Label>
                          <RadioGroup defaultValue="question" className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="question" id="question" />
                              <Label htmlFor="question">Вопрос</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="feedback" id="feedback" />
                              <Label htmlFor="feedback">Отзыв</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="partnership" id="partnership" />
                              <Label htmlFor="partnership">Сотрудничество</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="message">Сообщение</Label>
                          <Textarea
                            id="message"
                            placeholder="Ваше сообщение..."
                            className="min-h-[120px] border-[#D14A68]/30 focus:border-[#D14A68]"
                            required
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full mt-6 bg-[#D14A68] hover:bg-[#FF8DA1] text-white">
                        Отправить сообщение
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <Card className="shadow-md rounded-2xl overflow-hidden border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="mr-4 bg-[#D14A68]/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-[#D14A68]" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-gray-600">info@guni.kz</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 bg-[#D14A68]/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-[#D14A68]" />
                        </div>
                        <div>
                          <h3 className="font-medium">Телефон</h3>
                          <p className="text-gray-600">+7 (777) 123-45-67</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 bg-[#D14A68]/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-[#D14A68]" />
                        </div>
                        <div>
                          <h3 className="font-medium">Адрес</h3>
                          <p className="text-gray-600">г. Алматы, ул. Достык, 12</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md rounded-2xl overflow-hidden border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Как я могу получить больше кредитов?</h3>
                        <p className="text-gray-600">
                          Вы можете заработать кредиты, проходя тесты, публикуя статьи, ежедневно входя на платформу или
                          приобретая премиум-подписку.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Как связаться с авторами статей?</h3>
                        <p className="text-gray-600">
                          После покупки статьи вы получаете возможность задать вопрос автору через систему комментариев.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Могу ли я стать автором на платформе?</h3>
                        <p className="text-gray-600">
                          Да, мы всегда ищем талантливых авторов. Напишите нам на info@guni.kz с примерами ваших работ.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-[#D14A68] text-[#D14A68] hover:bg-[#D14A68] hover:text-white"
                    >
                      Все вопросы и ответы
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Мы в социальных сетях</h2>
            <div className="flex justify-center gap-8">
              {["Instagram", "Facebook", "Twitter", "YouTube", "Telegram"].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="h-16 w-16 rounded-full bg-[#D14A68]/10 flex items-center justify-center mb-2 hover:bg-[#D14A68]/20 transition-colors">
                    <img
                      src={`/placeholder.svg?height=32&width=32&text=${social[0]}`}
                      alt={social}
                      className="h-8 w-8"
                    />
                  </div>
                  <span className="text-gray-600">{social}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7630587392784!2d76.9453!3d43.2567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE1JzI0LjEiTiA3NsKwNTYnNDMuMSJF!5e0!3m2!1sen!2skz!4v1620000000000!5m2!1sen!2skz"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
