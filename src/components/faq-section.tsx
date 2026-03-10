import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как вы оцениваете игры?",
      answer:
        "Мы используем собственную систему оценки по 10-балльной шкале. Учитываем геймплей, графику, сюжет, звук, оптимизацию и соотношение цена/качество. Все оценки — независимые, без влияния издателей.",
    },
    {
      question: "Как быстро выходят обзоры новых игр?",
      answer:
        "Стараемся публиковать первые впечатления в день релиза, а полный обзор — в течение 3-5 дней после выхода. Для крупных тайтлов проводим стримы и публикуем обзоры параллельно с прохождением.",
    },
    {
      question: "Есть ли у вас прохождения для онлайн-игр?",
      answer:
        "Да, для онлайн-игр мы публикуем гайды по классам, тир-листы персонажей, разборы мета и стратегии для рейтинговой игры. Регулярно обновляем материалы после патчей.",
    },
    {
      question: "Можно ли предложить игру для обзора?",
      answer:
        "Конечно! Вы можете написать нам с предложением через форму обратной связи. Мы рассматриваем все запросы и стараемся охватить максимальное разнообразие игр.",
    },
    {
      question: "На каких платформах вы делаете обзоры?",
      answer:
        "Мы покрываем PC (Steam, Epic Games), PlayStation 4/5, Xbox One/Series, Nintendo Switch, а также мобильные платформы iOS и Android.",
    },
    {
      question: "Есть ли у вас видеоконтент?",
      answer:
        "Да, мы активно развиваем видеоформат. Публикуем видеообзоры, стримы прохождений и аналитику на YouTube. Ссылки на каналы есть в подвале сайта.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о GameVerse, наших обзорах и прохождениях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
