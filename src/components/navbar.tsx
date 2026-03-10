import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/90 backdrop-blur-md border-b border-pink-300/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-purple-800">
              Игры<span className="text-pink-500"> Маклая</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#technology"
                className="font-geist text-purple-800 hover:text-pink-500 transition-colors duration-200"
              >
                Обзоры
              </a>
              <a href="#safety" className="font-geist text-purple-800 hover:text-pink-500 transition-colors duration-200">
                Прохождения
              </a>
              <a href="#faq" className="font-geist text-purple-800 hover:text-pink-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-geist border-0">Читать обзоры</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-800 hover:text-pink-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 border-t border-pink-200">
              <a
                href="#technology"
                className="block px-3 py-2 font-geist text-purple-800 hover:text-pink-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Обзоры
              </a>
              <a
                href="#safety"
                className="block px-3 py-2 font-geist text-purple-800 hover:text-pink-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Прохождения
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-purple-800 hover:text-pink-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-geist border-0">
                  Читать обзоры
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}