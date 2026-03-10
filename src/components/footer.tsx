import { Github, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-pink-200" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 60%, #ede9fe 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-purple-800 mb-4">
              Игры<span className="text-pink-500"> Маклая</span>
            </h2>
            <p className="font-space-mono text-purple-600 mb-6 max-w-md">
              Профессиональный портал об играх: честные обзоры, детальные прохождения и аналитика игровой индустрии.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-400 hover:text-pink-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-400 hover:text-pink-500 transition-colors duration-200">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-purple-400 hover:text-pink-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-purple-400 hover:text-pink-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-orbitron text-purple-800 font-semibold mb-4">Контент</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#technology"
                  className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200"
                >
                  Обзоры
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200"
                >
                  Прохождения
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200"
                >
                  Онлайн-игры
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-purple-800 font-semibold mb-4">Портал</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200">
                  Написать нам
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200">
                  Реклама
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-purple-500 hover:text-pink-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-pink-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-purple-400 text-sm">2025 Игры Маклая. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-purple-400 hover:text-pink-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-purple-400 hover:text-pink-500 text-sm transition-colors duration-200"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="font-space-mono text-purple-400 hover:text-pink-500 text-sm transition-colors duration-200"
              >
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}