"use client";

import { useEffect, useRef } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Portfolio() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans relative overflow-x-hidden selection:bg-blue-500/30 cursor-default">
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-[999] ease-out will-change-transform"
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <a
        href="https://wa.me/5571992853309"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Iron pelo WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 group"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>

      <header className="fixed top-0 w-full z-40 p-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-white tracking-tighter">
            Iron
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Cruz
            </span>
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-semibold text-gray-300">
            <li>
              <a
                href="#especialidades"
                className="hover:text-white transition-colors"
              >
                Especialidades
              </a>
            </li>
            <li>
              <a href="#cases" className="hover:text-white transition-colors">
                Meus Projetos
              </a>
            </li>
            <li>
              <a href="#metodo" className="hover:text-white transition-colors">
                Meu Método
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative flex flex-col items-center">
        <section className="relative w-full h-screen min-h-[850px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 object-center mix-blend-luminosity"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505] z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] z-10"></div>

          <div className="relative z-20 max-w-5xl flex flex-col items-center mt-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">
                Agenda aberta para novos projetos
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tighter text-white">
              Edição Projetada para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Reter e Converter.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 font-medium leading-relaxed">
              Transformo vídeos comuns em conteúdos que prendem a atenção e
              geram resultados reais, escalando sua autoridade e suas vendas.
            </p>

            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative text-lg tracking-wide flex items-center gap-3">
                Quero aumentar a retenção dos meus vídeos
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a]/80 border border-blue-500/30 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-sm font-bold text-blue-100">
                  +93k Views Orgânicos
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a]/80 border border-green-500/30 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-bold text-green-100">
                  Alta Retenção Média
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a]/80 border border-purple-500/30 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-sm font-bold text-purple-100">
                  Performance Escalonável
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="especialidades"
          className="w-full max-w-7xl px-6 py-24 relative z-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Não sou um editor genérico.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meu foco é resolver problemas específicos de conversão e
              engajamento através de estratégias de retenção comprovadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Vídeos para Retenção
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Estruturação estratégica de conteúdo curto. Dominamos a atenção
                nos primeiros 3 segundos com ganchos fortes e conduzimos a
                narrativa com um ritmo visual magnético.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Vídeos de Venda (VSL)
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Edição persuasiva focada em copy. Uso de b-rolls estratégicos,
                tipografia imersiva e sound design para guiar o espectador até a
                compra.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Conteúdo Dinâmico
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Vlogs e vídeos longos editados de forma ágil com correção de cor
                apurada e legendas nativas bem posicionadas.
              </p>
            </div>
          </div>
        </section>

        <section
          id="cases"
          className="w-full px-6 py-24 bg-[#080808] border-y border-white/5 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white tracking-tight">
              Meus Projetos
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="group bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                <div className="aspect-video w-full relative overflow-hidden bg-black rounded-t-3xl">
                  <YouTubeEmbed videoid="aKFI6WQ_W6w" />
                  <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    Retenção em Gameplay
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    Formato Curto: Gameplay Escalonável
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                        O Problema
                      </span>
                      <p className="text-gray-400 text-sm mt-1">
                        Material bruto extenso e com momentos ociosos,
                        resultando em alta taxa de abandono nos primeiros 3
                        segundos de vídeo.
                      </p>
                    </div>
                    <div>
                      <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
                        A Solução
                      </span>
                      <p className="text-gray-400 text-sm mt-1">
                        Lapidação cirúrgica do conteúdo. Extração dos melhores
                        momentos combinada com cortes ágeis, zoom-ins e sound
                        design, transformando horas de gravação em uma
                        experiência altamente retentiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all duration-500 shadow-2xl">
                <div className="aspect-video w-full relative overflow-hidden bg-black rounded-t-3xl">
                  <YouTubeEmbed videoid="JCI661NxRJM" />
                  <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    93k+ Views
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    Vlog Imersivo: Retenção em Formato Longo
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                        O Desafio
                      </span>
                      <p className="text-gray-400 text-sm mt-1">
                        Transformar um material bruto extenso e detalhado em uma
                        narrativa viciante que prendesse a atenção do público do
                        início ao fim.
                      </p>
                    </div>
                    <div>
                      <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
                        O Resultado
                      </span>
                      <p className="text-gray-400 text-sm mt-1">
                        Aplicação de storytelling estruturado, ritmo de cortes
                        ágil e sound design imersivo. O engajamento disparou,
                        ultrapassando a marca de 93 mil visualizações
                        organicamente com alta retenção.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 p-4 hover:border-blue-500/20 transition-colors">
                <div className="w-full aspect-video rounded-xl mb-4 overflow-hidden bg-black">
                  <YouTubeEmbed videoid="nh6IGUBqC_A" />
                </div>
                <h5 className="font-bold text-white">
                  Apresentação de Produto
                </h5>
                <p className="text-xs text-gray-500 mt-1">
                  Edição rítmica focada em conversão para tráfego pago.
                </p>
              </div>
              <div className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 p-4 hover:border-blue-500/20 transition-colors">
                <div className="w-full aspect-video rounded-xl mb-4 overflow-hidden bg-black">
                  <YouTubeEmbed videoid="c80MH1zZEIk" />
                </div>
                <h5 className="font-bold text-white">Exemplo VSL Curto</h5>
                <p className="text-xs text-gray-500 mt-1">
                  Foco na retenção persuasiva para conversão direta.
                </p>
              </div>
              <div className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 p-4 hover:border-blue-500/20 transition-colors">
                <div className="w-full aspect-video rounded-xl mb-4 overflow-hidden bg-black">
                  <YouTubeEmbed videoid="wzY5mLJdTb8" />
                </div>
                <h5 className="font-bold text-white">Canal Curiosidades</h5>
                <p className="text-xs text-gray-500 mt-1">
                  Edição dinâmica e visual essencial para prender o público.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="metodo"
          className="w-full max-w-5xl px-6 py-24 text-center relative z-20"
        >
          <h3 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">
            Por que seus vídeos não convertem?
          </h3>
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-10 md:p-16 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6 relative z-10 font-medium">
              A maioria dos criadores perde sua audiência nos primeiros segundos
              porque confiam em edições genéricas.{" "}
              <strong className="text-white">
                Eu resolvo exatamente isso.
              </strong>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed relative z-10 mb-8">
              Trabalho focado na extração máxima do potencial do seu material.
              Não entrego apenas um arquivo MP4; entrego uma ferramenta
              projetada para segurar a atenção do seu público.
            </p>

            <div className="mt-8 mb-10 space-y-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-black text-xl">
                  ✓
                </div>
                <p className="text-white font-bold text-lg tracking-wide">
                  Aumento massivo de retenção
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-xl">
                  ✓
                </div>
                <p className="text-white font-bold text-lg tracking-wide">
                  Ritmo otimizado e sem ruídos
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-black text-xl">
                  ✓
                </div>
                <p className="text-white font-bold text-lg tracking-wide">
                  Foco absoluto em vendas e conversão
                </p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <p className="text-white font-bold">Pronto para escalar?</p>
                  <p className="text-sm text-gray-500">
                    Agende um bate-papo rápido.
                  </p>
                </div>
              </div>

              <a
                href="#contato"
                className="bg-white text-black hover:bg-gray-200 font-extrabold py-4 px-8 rounded-full transition-transform transform hover:scale-105"
              >
                Falar com o Editor
              </a>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="w-full px-6 py-24 text-center bg-[#080808] border-t border-white/5 relative z-20"
        >
          <h3 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Vamos construir seu próximo projeto.
          </h3>
          <p className="text-gray-400 mb-12 text-lg">
            Clique na plataforma de sua preferência para conversarmos sobre o
            seu projeto.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <a
              href="https://wa.me/5571992853309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Iron pelo WhatsApp"
              className="flex-1 flex items-center justify-center gap-3 bg-[#121212] hover:bg-[#1a1a1a] text-white font-bold py-5 px-8 rounded-2xl border border-white/10 transition-all hover:border-green-500/50 group"
            >
              <span className="text-green-500 group-hover:scale-110 transition-transform">
                WhatsApp
              </span>
            </a>
            <a
              href="mailto:ironc.comercial26@gmail.com"
              className="flex-1 flex items-center justify-center gap-3 bg-[#121212] hover:bg-[#1a1a1a] text-white font-bold py-5 px-8 rounded-2xl border border-white/10 transition-all hover:border-white/30 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                E-mail Corporativo
              </span>
            </a>
            <a
              href="https://instagram.com/ironc.post"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-[#121212] hover:bg-[#1a1a1a] text-white font-bold py-5 px-8 rounded-2xl border border-white/10 transition-all hover:border-pink-500/50 group"
            >
              <span className="text-pink-500 group-hover:scale-110 transition-transform">
                Instagram
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 text-center text-gray-600 bg-[#050505] border-t border-white/5 text-sm font-medium relative z-20">
        <p>© 2026 Iron Cruz. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}