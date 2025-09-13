"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  User,
  Calendar,
  BookOpen,
  Shield,
  Users,
  Heart,
  Scale,
  Eye,
  Award,
  Lock,
  Gavel,
  Lightbulb,
  Brain,
  Bot,
  Accessibility,
  Leaf,
  DollarSign,
  Share2,
  Download,
  PrinterIcon as Print,
  Check,
  Edit,
} from "lucide-react"
import { useState } from "react"

export default function CodigoEticaProfesional() {
  const principios = [
    {
      icon: <Shield className="h-5 w-5" />,
      titulo: "Responsabilidad",
      descripcion: "Consideraré siempre el impacto de mis decisiones técnicas en la sociedad y el medio ambiente.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      titulo: "Integridad",
      descripcion: "Actuaré con honestidad, evitando cualquier forma de plagio, manipulación o engaño.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      titulo: "Respeto",
      descripcion:
        "Trataré con dignidad a todos los involucrados en el proceso tecnológico, promoviendo un ambiente inclusivo.",
    },
    {
      icon: <Scale className="h-5 w-5" />,
      titulo: "Justicia",
      descripcion: "Lucharé por el acceso equitativo a la tecnología, sin discriminación.",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      titulo: "Transparencia",
      descripcion: "Comunicaré mis procesos, decisiones y limitaciones con claridad.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      titulo: "Compromiso con la Calidad",
      descripcion: "Entregaré productos confiables, bien diseñados y funcionales.",
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      titulo: "Legalidad",
      descripcion: "Cumpliré con leyes, regulaciones y buenas prácticas sobre software, datos y derechos digitales.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      titulo: "Innovación Responsable",
      descripcion: "Desarrollaré soluciones tecnológicas alineadas con valores éticos y humanos.",
    },
  ]

  const clausulasEspeciales = [
    {
      icon: <Brain className="h-6 w-6" />,
      titulo: "Autenticidad y honestidad intelectual",
      descripcion:
        "Asumo el compromiso de aprender y crecer por méritos propios. Rechazo el uso de IA o cualquier herramienta como medio para evadir el esfuerzo intelectual.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      titulo: "Uso ético y consciente de la Inteligencia Artificial",
      descripcion:
        "Utilizaré la IA como herramienta de apoyo, no como reemplazo de la ética. Me opondré al desarrollo de sistemas que perpetúen sesgos o vulneren derechos humanos.",
    },
    {
      icon: <Accessibility className="h-6 w-6" />,
      titulo: "Inclusión digital y accesibilidad",
      descripcion:
        "Diseñaré productos pensados para todos, sin excluir a personas con discapacidades, limitaciones tecnológicas o de conectividad.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      titulo: "Sustentabilidad digital",
      descripcion:
        "Me comprometo a escribir código eficiente, reducir el uso innecesario de recursos y apoyar proyectos que consideren el impacto ambiental.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titulo: "Rechazo a ambientes tóxicos o antiéticos",
      descripcion:
        "No participaré en entornos laborales abusivos o discriminatorios. Buscaré contribuir a espacios que respeten la salud mental y la dignidad humana.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      titulo: "Ética por encima del beneficio económico",
      descripcion:
        "Anteponer el beneficio financiero a los valores éticos no forma parte de mi visión profesional. Me comprometo a actuar correctamente.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      titulo: "Compartir conocimiento y fomentar comunidad",
      descripcion:
        "Promoveré una cultura de mentoría y colaboración. Compartiré lo que sé, reconociendo que la tecnología avanza colectivamente.",
    },
  ]

  const [isSigned, setIsSigned] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [motivationalMessage, setMotivationalMessage] = useState("")

  const motivationalMessages = [
    "¡Excelente! Tu compromiso ético es el fundamento de una carrera exitosa 🚀",
    "Has sellado tu compromiso con la excelencia y la ética profesional ⭐",
    "Tu firma representa el inicio de un camino profesional íntegro 🛤️",
    "¡Felicidades! Ahora eres oficialmente un ingeniero comprometido con la ética 🎯",
    "Tu integridad profesional acaba de ser oficialmente reconocida 🏆",
    "¡Increíble! Has dado el primer paso hacia una carrera tecnológica responsable 🌟",
    "Tu compromiso ético te distingue como un profesional excepcional 💎",
    "¡Bravo! La tecnología necesita más profesionales como tú 🌍",
    "Has demostrado que la ética y la innovación van de la mano 🤝",
    "Tu firma es el sello de un futuro ingeniero ejemplar 🎓",
  ]

  const handleSignCommitment = () => {
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
    setMotivationalMessage(randomMessage)
    setIsSigned(true)
    setShowConfetti(true)

    // Ocultar confeti después de 4 segundos
    setTimeout(() => {
      setShowConfetti(false)
    }, 4000)
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-4 md:p-8">
      {/* Glassmorphic container */}
      <div className="w-full max-w-6xl mx-auto backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Header */}
        <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-black text-white rounded-xl">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">MI CÓDIGO DE ÉTICA</h1>
                <p className="text-lg font-bold text-gray-700">Compromiso como Futuro Ingeniero en Software</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl border-2 border-black font-bold bg-transparent">
                <Print className="h-4 w-4 mr-2" /> Imprimir
              </Button>
              <Button className="bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Download className="h-4 w-4 mr-2" /> Descargar PDF
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6">
          <Tabs defaultValue="datos" className="w-full">
            <TabsList className="w-full bg-white/50 border-2 border-black rounded-xl p-1 mb-6">
              <TabsTrigger
                value="datos"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold"
              >
                Datos Generales
              </TabsTrigger>
              <TabsTrigger
                value="introduccion"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold"
              >
                Introducción
              </TabsTrigger>
              <TabsTrigger
                value="principios"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold"
              >
                Principios
              </TabsTrigger>
              <TabsTrigger
                value="normas"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold"
              >
                Normas
              </TabsTrigger>
              <TabsTrigger
                value="clausulas"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold"
              >
                Cláusulas
              </TabsTrigger>
              <TabsTrigger
                value="reflexion"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold"
              >
                Reflexión
              </TabsTrigger>
            </TabsList>

            {/* Datos Generales */}
            <TabsContent value="datos">
              <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="card-header">
                  <User className="h-6 w-6" />
                  <h2 className="text-2xl font-black">DATOS GENERALES DEL EQUIPO</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 border-2 border-black rounded-xl">
                      <h3 className="font-bold text-lg mb-2">Integrantes del equipo:</h3>
                      <div className="space-y-2">
                        <p className="text-lg">• Nicolás Gamboa</p>
                        <p className="text-lg">• Liliana Vecino Colli</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 border-2 border-black rounded-xl">
                      <h3 className="font-bold text-lg mb-2">Carrera:</h3>
                      <Badge className="bg-black text-white text-lg px-4 py-2">Ingeniería en Software</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 border-2 border-black rounded-xl">
                      <h3 className="font-bold text-lg mb-2">Semestre y grupo:</h3>
                      <p className="text-xl">3° Cuatrimestre – Grupo 3°C</p>
                    </div>
                    <div className="p-4 bg-white/50 border-2 border-black rounded-xl">
                      <h3 className="font-bold text-lg mb-2">Fecha de entrega:</h3>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <p className="text-xl">01 de agosto de 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-black rounded-xl">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-700 mb-2">© 2025 - Código de Ética Profesional</p>
                    <p className="text-xs text-gray-600">
                      Todos los derechos reservados a <strong>Nicolás Gamboa</strong> y{" "}
                      <strong>Liliana Vecino Colli</strong>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Ingeniería en Software - 3° Cuatrimestre - Grupo 3°C</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Introducción */}
            <TabsContent value="introduccion">
              <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-6 w-6" />
                  <h2 className="text-2xl font-black">INTRODUCCIÓN</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Un código de ética es un conjunto de principios, valores y normas de conducta que guían el
                    comportamiento profesional y personal de quienes lo adoptan. En el área de la tecnología, este
                    código actúa como una <strong>brújula moral</strong> que orienta nuestras decisiones, especialmente
                    en contextos donde la ley no siempre ofrece respuestas claras.
                  </p>

                  <p className="text-lg leading-relaxed mb-4">
                    Contar con un código de ética como profesional es esencial para construir relaciones de confianza,
                    actuar con responsabilidad y tomar decisiones que respeten tanto a los usuarios como al entorno
                    social y digital.
                  </p>

                  <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-black rounded-xl mt-6">
                    <p className="text-lg font-bold">
                      <strong>Finalidad:</strong> Establecer compromisos claros sobre cómo quiero ejercer mi profesión,
                      consolidando una visión ética, inclusiva y sustentable del desarrollo tecnológico.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Principios Éticos */}
            <TabsContent value="principios">
              <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-6 w-6" />
                  <h2 className="text-2xl font-black">PRINCIPIOS ÉTICOS FUNDAMENTALES</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {principios.map((principio, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/50 border-2 border-black rounded-xl hover:translate-y-[-2px] transition-transform"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-black text-white rounded-lg flex-shrink-0">{principio.icon}</div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{principio.titulo}</h3>
                          <p className="text-sm leading-relaxed">{principio.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Normas de Conducta */}
            <TabsContent value="normas">
              <div className="space-y-6">
                <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 mb-6">
                    <Gavel className="h-6 w-6" />
                    <h2 className="text-2xl font-black">NORMAS DE CONDUCTA PROFESIONAL</h2>
                  </div>

                  <div className="grid gap-6">
                    {/* Conducta Personal */}
                    <div className="p-4 bg-gradient-to-r from-green-100 to-teal-100 border-2 border-black rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="h-5 w-5" />
                        <h3 className="text-xl font-bold">Conducta Personal</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>• Seré ético en el uso de tecnologías, incluyendo la inteligencia artificial.</li>
                        <li>• Me capacitaré continuamente para responder a los desafíos del entorno digital.</li>
                      </ul>
                    </div>

                    {/* Conducta con Colegas */}
                    <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-black rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5" />
                        <h3 className="text-xl font-bold">Conducta con Colegas y Supervisores</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>• Fomentaré el respeto mutuo, el trabajo colaborativo y el reconocimiento de ideas.</li>
                        <li>• Rechazaré ambientes tóxicos, conductas abusivas y discriminación.</li>
                      </ul>
                    </div>

                    {/* Conducta con Clientes */}
                    <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-black rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="h-5 w-5" />
                        <h3 className="text-xl font-bold">Conducta con Clientes y Usuarios</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          • Diseñaré soluciones seguras, accesibles y centradas en las necesidades reales del usuario.
                        </li>
                        <li>• Comunicaré de forma clara, sin generar falsas expectativas.</li>
                      </ul>
                    </div>

                    {/* Protección de Datos */}
                    <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-black rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Lock className="h-5 w-5" />
                        <h3 className="text-xl font-bold">Protección de Datos y Privacidad</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>• Respetaré la confidencialidad de los datos personales y sensibles.</li>
                        <li>• Aplicaré buenas prácticas de seguridad y protección de la información.</li>
                      </ul>
                    </div>

                    {/* Conducta ante la Ley */}
                    <div className="p-4 bg-gradient-to-r from-red-100 to-rose-100 border-2 border-black rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Scale className="h-5 w-5" />
                        <h3 className="text-xl font-bold">Conducta ante la Ley</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>• Cumpliré con normativas sobre licencias, propiedad intelectual y derechos digitales.</li>
                        <li>• Rechazaré prácticas fraudulentas, incluyendo el uso de software no autorizado.</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Cláusulas Especiales */}
            <TabsContent value="clausulas">
              <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6" />
                  <h2 className="text-2xl font-black">CLÁUSULAS ESPECIALES O PERSONALES</h2>
                </div>

                <div className="mb-6 p-4 bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-black rounded-xl">
                  <p className="text-lg font-medium">
                    Estas cláusulas representan compromisos personales que reflejan mi identidad profesional, mis
                    principios y la manera en que quiero contribuir éticamente al desarrollo tecnológico.
                  </p>
                </div>

                <div className="space-y-4">
                  {clausulasEspeciales.map((clausula, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white/50 border-2 border-black rounded-xl hover:translate-y-[-2px] transition-transform"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-black text-white rounded-xl flex-shrink-0">{clausula.icon}</div>
                        <div>
                          <h3 className="font-bold text-xl mb-3">
                            {index + 1}. {clausula.titulo}
                          </h3>
                          <p className="text-lg leading-relaxed">{clausula.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Reflexión Final */}
            <TabsContent value="reflexion">
              <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6" />
                  <h2 className="text-2xl font-black">REFLEXIÓN FINAL</h2>
                </div>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-lg leading-relaxed">
                    La ingeniería en software no se limita al diseño de aplicaciones o sistemas. Es una disciplina con
                    gran <strong>responsabilidad social</strong>, que debe construirse desde la ética, el respeto y la
                    conciencia del impacto que generamos en las personas y en el entorno.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-black rounded-xl">
                    <p className="text-lg font-bold mb-4">
                      Este código no es un requisito académico más; es una manifestación de mi compromiso con el tipo de
                      profesional que quiero ser.
                    </p>
                    <p className="text-lg">
                      Aspiro a contribuir con soluciones que no solo funcionen, sino que también respeten la dignidad
                      humana, fomenten la inclusión, y busquen un equilibrio entre innovación y responsabilidad.
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Mi trabajo tendrá verdadero valor no solo por lo que pueda hacer técnicamente, sino por la{" "}
                    <strong>intención ética</strong> con la que lo ejecute.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-green-100 to-teal-100 border-2 border-black rounded-xl text-center">
                    <p className="text-xl font-black">
                      "Porque el futuro de la tecnología no solo se programa: se diseña con conciencia."
                    </p>
                  </div>

                  {/* Sección de Firma */}
                  <div className="mt-8 relative">
                    {showConfetti && (
                      <div className="fixed inset-0 pointer-events-none z-50">
                        <div className="absolute inset-0 overflow-hidden">
                          {/* Confeti cuadrado rosa */}
                          {[...Array(80)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2"
                              style={{
                                left: `${Math.random() * 100}%`,
                                backgroundColor: [
                                  "#FF69B4", // Hot Pink
                                  "#FFB6C1", // Light Pink
                                  "#FF1493", // Deep Pink
                                  "#FFC0CB", // Pink
                                  "#FF91A4", // Salmon Pink
                                  "#FF8FA3", // Light Salmon Pink
                                  "#FF6B9D", // Medium Pink
                                  "#FF85B3", // Soft Pink
                                ][Math.floor(Math.random() * 8)],
                                animation: `confetti-fall ${2 + Math.random() * 3}s ease-out forwards`,
                                animationDelay: `${Math.random() * 2}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                opacity: 0.9 - Math.random() * 0.3, // Opacidad variable entre 0.6 y 0.9
                              }}
                            />
                          ))}
                          {/* Confeti rectangular rosa */}
                          {[...Array(50)].map((_, i) => (
                            <div
                              key={`rect-${i}`}
                              className="absolute w-3 h-1"
                              style={{
                                left: `${Math.random() * 100}%`,
                                backgroundColor: [
                                  "#FF1493", // Deep Pink
                                  "#FF69B4", // Hot Pink
                                  "#FFB6C1", // Light Pink
                                  "#FF91A4", // Salmon Pink
                                  "#FFC0CB", // Pink
                                  "#FF8FA3", // Light Salmon Pink
                                  "#FF6B9D", // Medium Pink
                                  "#FF85B3", // Soft Pink
                                ][Math.floor(Math.random() * 8)],
                                animation: `confetti-fall ${2.5 + Math.random() * 2.5}s ease-out forwards`,
                                animationDelay: `${Math.random() * 1.5}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                opacity: 0.8 - Math.random() * 0.2, // Opacidad variable entre 0.6 y 0.8
                              }}
                            />
                          ))}
                          {/* Confeti circular rosa */}
                          {[...Array(40)].map((_, i) => (
                            <div
                              key={`circle-${i}`}
                              className="absolute w-1 h-1 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                backgroundColor: [
                                  "#FF69B4", // Hot Pink
                                  "#FF1493", // Deep Pink
                                  "#FFB6C1", // Light Pink
                                  "#FFC0CB", // Pink
                                  "#FF91A4", // Salmon Pink
                                  "#FF8FA3", // Light Salmon Pink
                                  "#FF6B9D", // Medium Pink
                                  "#FF85B3", // Soft Pink
                                ][Math.floor(Math.random() * 8)],
                                animation: `confetti-fall ${3 + Math.random() * 2}s ease-out forwards`,
                                animationDelay: `${Math.random() * 1}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                opacity: 1 - Math.random() * 0.3, // Opacidad variable entre 0.7 y 1
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-r from-amber-50 to-yellow-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-black text-white rounded-lg">
                          <Edit className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-black">FIRMA DEL COMPROMISO</h3>
                      </div>

                      <p className="text-lg mb-6 leading-relaxed">
                        Este código representa mi compromiso personal y profesional. Al firmarlo, acepto seguir estos
                        principios durante toda mi carrera en ingeniería de software.
                      </p>

                      {!isSigned ? (
                        <div className="text-center">
                          <div className="p-6 bg-white/70 border-2 border-dashed border-gray-400 rounded-xl mb-4">
                            <p className="text-gray-600 font-medium mb-4">Estado: Pendiente de firma</p>
                            <Button
                              onClick={handleSignCommitment}
                              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white rounded-xl border-2 border-black font-bold text-lg px-8 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all"
                            >
                              <Edit className="h-5 w-5 mr-2" />
                              FIRMAR CÓDIGO DE ÉTICA
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {/* Mensaje motivacional */}
                          <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-xl text-center animate-pulse">
                            <p className="text-lg font-bold text-green-800">{motivationalMessage}</p>
                          </div>

                          {/* Recuadro de firma */}
                          <div className="p-6 bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="p-2 bg-green-500 text-white rounded-full">
                                  <Check className="h-4 w-4" />
                                </div>
                                <span className="font-bold text-green-700">COMPROMISO ACEPTADO</span>
                              </div>
                              <Badge className="bg-green-500 text-white">Verificado</Badge>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">Firmado digitalmente el: {getCurrentDate()}</p>

                            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg">
                              <div className="text-center">
                                <p className="text-2xl font-bold mb-2" style={{ fontFamily: "cursive" }}>
                                  Nicolás Gamboa & Liliana Vecino Colli
                                </p>
                                <div className="w-48 h-0.5 bg-black mx-auto mb-2"></div>
                                <p className="text-sm font-medium text-gray-700">
                                  Estudiante de Ingeniería en Software
                                </p>
                                <p className="text-xs text-gray-500 mt-2">Segundo Cuatrimestre</p>
                              </div>
                            </div>

                            <div className="mt-4 text-center">
                              <p className="text-lg font-bold text-gray-700 flex items-center justify-center gap-2">
                                <GraduationCap className="h-5 w-5" />
                                "Comprometido con la excelencia y la ética profesional"
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx global>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
