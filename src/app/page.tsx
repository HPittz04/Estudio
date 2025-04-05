"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Array com as URLs das imagens
  const images = ["/mic.jpg", "/mic2.jpg", "/interface.jpg", "/speaker.jpg"];
  // Guarda o índice da imagem selecionada; null significa que nenhuma imagem está aberta no modal.
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/fotocapa-web.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl font-bold z-10">BEM VINDOS!</h1>
      </section>

      {/* SEÇÃO COM IMAGEM DE FUNDO */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-10 pb-10"
        style={{ backgroundImage: "url('/fundo.jpg')" }}
      >
        <div className="relative z-10 text-white max-w-4xl mx-auto text-center">
          <p className="text-sm leading-relaxed tracking-wide text-white-300 uppercase">
            O ESTÚDIO 747 É UM ESPAÇO PARA GRAVAÇÃO E PÓS-PRODUÇÃO ÁUDIO; TEMOS AO TEU DISPOR
            TODOS OS MEIOS TÉCNICOS E HUMANOS <span className="font-semibold text-white">(ESPECIALIZADOS E NECESSÁRIOS)</span>
            PARA A REALIZAÇÃO DE PRODUTOS ÁUDIO, ASSIM COMO UMA SALA DE ENSAIOS À DISPOSIÇÃO.
          </p>
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-white-300">
            O NOSSO PRINCIPAL OBJETIVO É FAZER MÚSICA E, SIMULTANEAMENTE,
            POSSIBILITAR A TODOS OS QUE PARTILHEM O MESMO <span className="italic">MOTTO</span>:
            A CONCRETIZAÇÃO DAS SUAS AMBIÇÕES.
          </p>
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-white-300">
            ADAPTAMO-NOS À REALIDADE DE TODOS OS PROJETOS, PELO QUE NÃO HESITES EM CONTACTAR-NOS.
            ESTAMOS AQUI PARA FAZER ACONTECER!
          </p>
          {/* Galeria de Imagens */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>

        {/* WATCH - VÍDEO DO YOUTUBE */}
        <section className="text-white text-center py-12">
          <h2 className="text-4xl font-bold mb-6">WATCH</h2>
          <div className="w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/eAMHDVh7h5M?si=T8ZeCYix8DDDUh_P"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </section>

      {/* Modal para visualização das imagens */}
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
      {/* Botão de anterior */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        onClick={showPrev}
      >
        &#8249;
      </button>
      {/* Botão de próximo */}
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
