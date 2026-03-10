import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Хардкорный геймер, 15 лет опыта",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец-то нашёл портал с честными обзорами. Никакой рекламы от издателей — только реальные впечатления от людей, которые реально играли.",
  },
  {
    name: "Мария Козлова",
    role: "Стример, 200К подписчиков",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Гайды с GameVerse реально помогают моей аудитории. Всегда актуальные прохождения с разбором всех секретов и достижений.",
  },
  {
    name: "Дмитрий Петров",
    role: "Инди-разработчик, геймер",
    avatar: "/professional-woman-scientist.png",
    content:
      "Как разработчик ценю профессиональную аналитику. Команда разбирает игры по-настоящему глубоко — это редкость в русскоязычном интернете.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fdf2f8 100%)" }}>
      {/* Аниме баннер */}
      <div className="max-w-6xl mx-auto mb-16 rounded-2xl overflow-hidden relative h-56 md:h-72">
        <img
          src="https://cdn.poehali.dev/projects/31c3d270-ae0b-401a-92a4-255beb1cf7dc/files/1589dabe-e647-4efe-a529-ae3364e5e84e.jpg"
          alt="anime gaming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-pink-800/40 to-transparent flex items-center px-10">
          <div>
            <p className="text-white font-orbitron text-2xl md:text-4xl font-bold">Сообщество геймеров</p>
            <p className="text-pink-200 mt-2 text-sm md:text-base">Тысячи читателей уже с нами</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-4 font-sans">Нам доверяют геймеры</h2>
          <p className="text-xl text-purple-500 max-w-2xl mx-auto leading-relaxed">
            Что говорит наше сообщество о портале Игры Маклая
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}