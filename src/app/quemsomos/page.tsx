export default function QuemSomos() {
  return (
    <main
      className="relative flex items-center justify-start h-[50vh] bg-cover bg-center text-white px-6"
      style={{ backgroundImage: "url('/quemsomos-fundo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Camada escura para contraste */}

      <div className="relative  w-full text-left pl-20">
        <h1 className="text-5xl font-bold mb-6">QUEM SOMOS</h1>
        <p className="leading-relaxed">
        O ESTÚDIO 747 É UM ESPAÇO PARA GRAVAÇÃO E PÓS-PRODUÇÃO ÁUDIO; TEMOS AO TEU DISPOR TODOS OS
          MEIOS TÉCNICOS E HUMANOS (ESPECIALIZADOS E NECESSÁRIOS) PARA A REALIZAÇÃO DE PRODUTOS ÁUDIO,
          ASSIM COMO UMA SALA DE ENSAIOS À DISPOSIÇÃO.
        </p>
        <p className="mt-4 leading-relaxed">
        O NOSSO PRINCIPAL OBJETIVO É FAZER MÚSICA E, SIMULTANEAMENTE, POSSIBILITAR A TODOS OS QUE
        PARTILHEM O MESMO <i>MOTTO</i>: A CONCRETIZAÇÃO DAS SUAS AMBIÇÕES.
        </p>
        <p className="mt-4 leading-relaxed">
        ADAPTAMO-NOS À REALIDADE DE TODOS OS PROJETOS, PELO QUE NÃO HESITES EM CONTACTAR-NOS.
        ESTAMOS AQUI PARA FAZER ACONTECER!
        </p>
      </div>
    </main>
  );
}