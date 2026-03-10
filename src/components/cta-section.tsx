import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #7e22ce 0%, #be185d 60%, #9333ea 100%)" }}>
      {/* Аниме фон */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/31c3d270-ae0b-401a-92a4-255beb1cf7dc/files/a17933f2-5a95-4162-b31c-03b21c278cbd.jpg"
          alt="anime rpg"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-white mb-6 font-sans text-balance">Готов погрузиться в мир игр?</h2>
          <p className="text-xl text-pink-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Тысячи геймеров уже читают наши обзоры и используют прохождения Игры Маклая. Присоединяйся к сообществу —
            находи лучшие игры и проходи их на 100%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white pulse-button text-lg px-8 py-4 border-0"
            >
              Читать обзоры
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-800 text-lg px-8 py-4 bg-transparent"
            >
              Все прохождения
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
