import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Одиночные игры",
      content: (
        <div>
          <p className="text-purple-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Подробные обзоры и прохождения одиночных игр любых жанров. От RPG и экшена до головоломок и
            визуальных новелл — помогаем найти идеальную игру и пройти её на 100%.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              RPG, Action, Adventure, Puzzle
            </div>
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Гайды по боссам и секретным локациям
            </div>
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Разные концовки и ветки сюжета
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Онлайн и MMO",
      content: (
        <div>
          <p className="text-purple-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Экспертный разбор онлайн-игр: мета-анализ, гайды по классам и персонажам,
            советы для новичков и продвинутых игроков, обзоры обновлений и патчей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              MMO, Battle Royale, MOBA, Шутеры
            </div>
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Актуальная мета и тир-листы
            </div>
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Стратегии для рейтинговой игры
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Новинки и анонсы",
      content: (
        <div>
          <p className="text-purple-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Следим за всеми анонсами, релизами и обновлениями игровой индустрии. Первыми
            публикуем обзоры новинок и честно говорим — стоит ли тратить деньги.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Первые обзоры в день релиза
            </div>
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Разборы трейлеров и анонсов
            </div>
            <div className="flex items-center gap-3 text-pink-500 text-sm">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Стоит ли покупать — честный вердикт
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 60%, #ede9fe 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-purple-800 mb-6">Что мы покрываем</h2>
          <p className="text-purple-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Игры Маклая — это профессиональный портал для геймеров: обзоры, прохождения и аналитика
            по всем жанрам и платформам без рекламных фильтров.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}