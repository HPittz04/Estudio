import Image from "next/image";

export default function Servicos() {
  return (
    <main>
      {/* HERO SECTION (Imagem de Fundo + Título) */}
      <section
        className="relative w-full min-h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/fundo.jpg')" }} // Troca pelo nome correto da tua imagem
      >


        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl text-center p-6">
          <h1 className="text-5xl font-bold mb-4">SERVIÇOS</h1>
          <p className="text-lg leading-relaxed">
            O Estúdio 747 é um espaço para gravação e pós-produção áudio; tens ao teu dispor todos os meios técnicos 
            e humanos (especializados e necessários) para a realização de produtos áudio, assim como uma sala de ensaios à disposição.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            PRODUÇÃO / CAPTAÇÃO | MISTURA | MASTERIZAÇÃO | VOZ OFF | PÓS-PRODUÇÃO | DESIGN ARTÍSTICO | SERVIÇO DE ENSINO MUSICAL | 
            EDIÇÃO DE VÍDEO E DESIGN GRÁFICO | ALUGUER DE ESTÚDIO E SALA DE ENSAIOS
          </p>
        </div>
      </section>

      {/* GALERIA DE IMAGENS (opcional) */}
      <section className=" text-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <Image src="/1.jpg" alt="Microfone" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/2.jpg" alt="Headphones" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/3.jpg" alt="Interface" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/4.jpg" alt="Colunas" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/5.jpg" alt="Microfone" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/6.jpg" alt="Headphones" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/7.jpg" alt="Interface" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/8.jpg" alt="Colunas" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/9.jpg" alt="Headphones" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/10.jpg" alt="Interface" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/11.jpg" alt="Colunas" width={300} height={200} className="rounded-lg object-cover" />
        </div>
      </section>
    </main>
  );
}