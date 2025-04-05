"use client";
import { useState } from "react";
import Image from "next/image";

export default function Servicos() {
  // Array com os caminhos das imagens da galeria
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
  ];

  // Guarda o índice da imagem selecionada; null indica que o modal está fechado
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Abre o modal com a imagem clicada
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Fecha o modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Função para mostrar a imagem anterior (com rotação)
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    }
  };

  // Função para mostrar a próxima imagem (com rotação)
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  return (
    <main>
      {/* HERO SECTION (Imagem de Fundo + Título) */}
      <section
        className="relative w-full min-h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/fundo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl text-center p-6">
          <h1 className="text-5xl font-bold mt-25 mb-4">SERVIÇOS</h1>
          <p className="text-lg leading-relaxed">
            O Estúdio 747 é um espaço para gravação e pós-produção áudio; tens ao teu dispor todos os meios técnicos
            e humanos (especializados e necessários) para a realização de produtos áudio, assim como uma sala de ensaios à disposição.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            PRODUÇÃO & CAPTAÇÃO | MISTURA | MASTERIZAÇÃO | VOZ OFF | PÓS-PRODUÇÃO | DESIGN ARTÍSTICO | SERVIÇO DE ENSINO MUSICAL |
            EDIÇÃO DE VÍDEO E DESIGN GRÁFICO | ALUGUER DE ESTÚDIO E SALA DE ENSAIOS
          </p>
        </div>
      </section>

      {/* GALERIA DE IMAGENS */}
      <section className="text-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {images.map((src, index) => (
            <div key={src} className="cursor-pointer" onClick={() => openModal(index)}>
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal para ampliar as imagens */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div className="relative animate-zoomIn">
            <img
              src={images[selectedImageIndex]}
              alt={`Imagem ${selectedImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] rounded shadow-lg"
            />
            {/* Botão de fechar */}
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2"
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
            >
              &times;
            </button>
            {/* Botão de imagem anterior */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={showPrev}
            >
              &#8249;
            </button>
            {/* Botão de próxima imagem */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={showNext}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
