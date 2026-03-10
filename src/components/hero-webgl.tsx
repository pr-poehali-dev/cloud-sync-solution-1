import { useState, useEffect } from "react"



export const Hero3DWebGL = () => {
  const titleWords = "Игры Маклая".split(" ")
  const subtitle = "Профессиональные обзоры, прохождения и аналитика игрового мира."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 40%, #ede9fe 70%, #fce7f3 100%)" }}>
      {/* Аниме-картинка справа */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-50/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-50/80 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-pink-50/60 to-transparent" />
      </div>

      {/* Аниме картинка */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0 pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/31c3d270-ae0b-401a-92a4-255beb1cf7dc/files/05160f3e-e24b-4c08-9129-edbda9d8f9a0.jpg"
          alt="anime gamer"
          className="w-full h-full object-cover object-top opacity-80"
          style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 40%, transparent 100%)" }}
        />
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-pink-300/30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-32 left-32 w-40 h-40 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/2 w-20 h-20 rounded-full bg-violet-300/20 blur-xl pointer-events-none" />

      <div className="h-screen uppercase items-start w-full absolute z-[60] pointer-events-none px-10 md:px-20 flex justify-center flex-col max-w-3xl">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-4 overflow-hidden">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                  color: index === 0 ? "#7e22ce" : "#ec4899",
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-4 overflow-hidden font-bold max-w-xl text-left px-0" style={{ color: "#6b21a8" }}>
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3DWebGL