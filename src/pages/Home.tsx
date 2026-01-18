import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import type { Property } from "../types/property";
import PropertyCard from "../components/PropertyCard";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Phone,
  Mail,
  Home as HomeIcon,
  Tag,
  Wrench,
  CheckCircle,
  FileText,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function Home() {
  const services = [
    { icon: HomeIcon, label: "Compra", sublabel: "Compra" },
    { icon: Tag, label: "Venda", sublabel: "Venda" },
    { icon: Wrench, label: "Locação", sublabel: "Locação" },
    { icon: CheckCircle, label: "Administração", sublabel: "Administração" },
    { icon: FileText, label: "Legalização", sublabel: "Legalização" },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950">
      {/* Apresentação */}
      <section
        id="inicio"
        className="relative flex items-center justify-center overflow-hidden"
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left - Logo & Brand */}
            <div className="flex flex-col items-start justify-center space-y-8 md:pr-8">
              {/* Shield Logo */}
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-amber-300 to-amber-500 rounded-3xl p-6 flex items-center justify-center shadow-2xl border-4 border-amber-200">
                  <div className="text-center">
                    <div className="font-display text-7xl font-bold text-amber-900 mb-2">
                      GQ
                    </div>
                    <div className="text-xs text-amber-900 font-serif tracking-widest">
                      ESCUDO
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Main Content */}
            <div className="flex flex-col items-start justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
                  Em busca do seu
                </h1>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-amber-300 leading-tight">
                  Imóvel dos Sonhos
                </h2>
              </div>

              {/* <Button
                className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-serif font-bold text-base px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => alert("Fale conosco - Feature coming soon")}
              >
                Fale Conosco
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase Section */}
      <section
        id="imoveis"
        className="relative py-20 bg-gradient-to-b from-amber-900 to-amber-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 flex items-center justify-center">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/5 rounded-3xl blur-3xl"></div>

            {/* House illustration placeholder */}
            <div className="relative w-80 h-80 bg-gradient-to-b from-amber-200 to-amber-100 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-amber-300">
              <div className="text-center space-y-4">
                {/* <HomeIcon className="text-amber-600 mx-auto w-24 h-24" /> */}
                <p className="font-display text-2xl font-bold text-amber-900">
                  Seu Imóvel Aqui
                </p>
                <p className="font-serif text-amber-700 text-sm">
                  Imagem do imóvel em destaque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicos"
        className="py-20 bg-gradient-to-b from-amber-950 to-black/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="text-amber-200 font-serif text-lg italic mb-2">
              Compra, venda e aluguel de imóveis com confiança e qualidade!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-amber-300 hover:border-amber-100"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-amber-950/30 rounded-full text-amber-100 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold text-amber-950">
                    {service.label}
                  </h3>
                  <p className="font-serif text-xs text-amber-900 mt-1">
                    {service.sublabel}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-white font-serif text-xl italic">
              Seu imóvel dos sonhos está aqui!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Siga-nos nas Redes Sociais
            </h2>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Facebook */}
              <div className="flex items-start gap-4 bg-gradient-to-r from-blue-600/20 to-blue-400/10 p-4 rounded-lg border border-blue-500/30">
                {/* <Facebook className="text-blue-400 mt-1 flex-shrink-0 w-6 h-6" /> */}
                <div>
                  <p className="font-serif text-amber-100 font-semibold">
                    Facebook
                  </p>
                  <p className="font-serif text-amber-300 text-sm">
                    GilbertoQueirozImoveis@gmail.com
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 bg-gradient-to-r from-pink-600/20 to-pink-400/10 p-4 rounded-lg border border-pink-500/30">
                {/* <Instagram className="text-pink-400 mt-1 flex-shrink-0 w-6 h-6" /> */}
                <div>
                  <p className="font-serif text-amber-100 font-semibold">
                    Instagram
                  </p>
                  <p className="font-serif text-amber-300 text-sm">
                    EcoLSolucoes.com.br/imoveis
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 bg-gradient-to-r from-cyan-600/20 to-cyan-400/10 p-4 rounded-lg border border-cyan-500/30">
                {/* <Globe className="text-cyan-400 mt-1 flex-shrink-0 w-6 h-6" /> */}
                <div>
                  <p className="font-serif text-amber-100 font-semibold">
                    Telefone
                  </p>
                  <p className="font-serif text-amber-300 text-sm">
                    (21) 99645-7347
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 bg-gradient-to-r from-amber-600/20 to-amber-400/10 p-4 rounded-lg border border-amber-500/30">
                {/* <Phone className="text-amber-400 mt-1 flex-shrink-0 w-6 h-6" /> */}
                <div>
                  <p className="font-serif text-amber-100 font-semibold">
                    Contato
                  </p>
                  <p className="font-serif text-amber-300 text-sm">
                    (21) 99645-7347
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl border-4 border-green-400 hover:shadow-green-500/50 transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                {/* <MessageCircle className="text-green-600 w-8 h-8" /> */}
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">
                WhatsApp
              </h3>
              <p className="font-serif text-green-100 mb-6 text-sm">
                Converse conosco direto no WhatsApp
              </p>
              <a
                href="https://wa.me/5521996457347"
                className="bg-white text-green-600 font-serif font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors duration-300 inline-block shadow-lg"
              >
                (21) 99645-7347
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
