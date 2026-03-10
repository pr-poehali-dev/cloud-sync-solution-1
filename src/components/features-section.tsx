import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Глубокие обзоры игр",
    description: "Детальный анализ геймплея, графики, сюжета и механик — честная оценка без рекламы и предвзятости.",
    icon: "gamepad",
    badge: "Обзор",
  },
  {
    title: "Пошаговые прохождения",
    description: "Подробные гайды для одиночных и многопользовательских игр: боссы, секреты, достижения и коллекционные предметы.",
    icon: "map",
    badge: "Гайды",
  },
  {
    title: "Онлайн-игры",
    description: "Актуальная информация о MMO, Battle Royale и кооперативных играх — рейтинги, мета-анализ и советы.",
    icon: "globe",
    badge: "Онлайн",
  },
  {
    title: "Аналитика и рейтинги",
    description: "Объективные оценки и сравнения игр по жанрам, платформам и целевой аудитории.",
    icon: "chart",
    badge: "Рейтинг",
  },
  {
    title: "Новости индустрии",
    description: "Свежие новости об анонсах, обновлениях, DLC и событиях игровой индустрии со всего мира.",
    icon: "news",
    badge: "Новости",
  },
  {
    title: "Сравнение платформ",
    description: "Анализ игр на PC, PlayStation, Xbox и Nintendo Switch — выбирайте лучшую версию для вашей платформы.",
    icon: "compare",
    badge: "Платформы",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё о мире игр</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Профессиональный контент для геймеров: от инди-хитов до блокбастеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "gamepad" && "🎮"}
                    {feature.icon === "map" && "🗺️"}
                    {feature.icon === "globe" && "🌐"}
                    {feature.icon === "chart" && "📊"}
                    {feature.icon === "news" && "📰"}
                    {feature.icon === "compare" && "⚔️"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
