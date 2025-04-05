export default function Contactos() {
    return (
      <main
        className="relative bg-black text-white min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fundo.jpg')" }} // Altera para o teu fundo
      >
        {/* Camada escura para melhorar a legibilidade */}
        <div className="absolute inset-0 bg-black/20"></div>
  
        {/* Conteúdo principal */}
        <div className="relative z-10 px-6 py-12 max-w-4xl mx-auto text-center pt-50">
          {/* Título grande */}
          <h1 className="text-5xl font-bold mb-4">CONTACTE-NOS!</h1>
  
          {/* Subtítulo E-MAIL */}
          <h2 className="text-xl font-bold">E-MAIL</h2>
          <p className="text-red-400 mb-4">
            747estudio.rec@gmail.com | soro.music.geral@gmail.com
          </p>
  
          {/* Subtítulo TELEMÓVEL */}
          <h2 className="text-xl font-bold">TELEMÓVEL</h2>
          <p className="text-red-400 mb-8">
            967 862 700 / 962 404 814
          </p>
  
          {/* Linha divisória */}
          <hr className="border-gray-500 mb-8" />
  
          {/* Subtítulo ONDE ESTAMOS */}
          <h2 className="text-3xl font-bold mb-4">ONDE ESTAMOS?</h2>
  
          {/* Mapa (Google Maps) */}
          <div className="mx-auto" style={{ maxWidth: "600px" }}>
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=estudio747+Vendas+Novas&output=embed"
            ></iframe>
          </div>
        </div>
      </main>
    );
  }
  