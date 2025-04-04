import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white" 
        style={{ backgroundImage: "url('/fotocapa-web.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div> {/* Camada escura */}
        <h1 className="relative text-5xl font-bold z-10">BEM VINDOS!</h1>
      </section>

      {/* SEÇÃO COM IMAGEM DE FUNDO */}
      <section 
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat  pt-10 pb-10"
  style={{ backgroundImage: "url('/fundo.jpg')" }}
>


<div className="relative z-10 text-white max-w-4xl mx-auto text-center">
<h1 className="text-5xl font-bold mb-6">BEM VINDOS!</h1>

        <p className="text-sm leading-relaxed tracking-wide text-white-300 uppercase">
            O ESTÚDIO 747 É UM ESPAÇO PARA GRAVAÇÃO E PÓS-PRODUÇÃO ÁUDIO; TEMOS AO TEU DISPOR
            TODOS OS MEIOS TÉCNICOS E HUMANOS <span className="font-semibold text-white">(ESPECIALIZADOS E NECESSÁRIOS) </span>
            PARA A REALIZAÇÃO DE PRODUTOS ÁUDIO, ASSIM COMO UMA SALA DE ENSAIOS À DISPOSIÇÃO.
        </p>

        <p className="mt-4 text-sm leading-relaxed tracking-wide text-white-300">
            O NOSSO PRINCIPAL OBJETIVO É FAZER MÚSICA E, SIMULTANEAMENTE,
            POSSIBILITAR A TODOS OS QUE PARTILHEM O MESMO <span className="italic">MOTTO</span>:
            A CONCRETIZAÇÃO DAS SUAS AMBIÇÕES.
        </p>

        <p className="mt-4 text-sm leading-relaxed tracking-wide text-white-300 ">
            ADAPTAMO-NOS À REALIDADE DE TODOS OS PROJETOS PELO QUE NÃO HESITES EM CONTACTAR-NOS.
            ESTAMOS AQUI PARA FAZER ACONTECER!
        </p>
    <div className="mt-8 grid grid-cols-4 gap-4">
      {/* Imagens */}
      <img src="/mic.jpg" className="w-full h-auto rounded-lg shadow-lg" />
      <img src="/headphones.jpg" className="w-full h-auto rounded-lg shadow-lg" />
      <img src="/interface.jpg" className="w-full h-auto rounded-lg shadow-lg" />
      <img src="/speaker.jpg" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
  </div>

{/* WATCH - VÍDEO DO YOUTUBE */}
<section className="text-white text-center py-12">
        <h2 className="text-4xl font-bold mb-6">WATCH</h2>
        <div className="flex justify-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/eAMHDVh7h5M?si=T8ZeCYix8DDDUh_P"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

</section>

      
    </main>
  );
}
