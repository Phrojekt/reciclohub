import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <Image src="/RECICLOHUB_Prancheta.png" alt="RecicloHub" width={150} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#benefits" className="text-gray-600 hover:text-teal-600">
              Benefícios
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-teal-600">
              Como Funciona
            </Link>
            <Link href="#mission" className="text-gray-600 hover:text-teal-600">
              Sobre Nós
            </Link>
            <Link
              href="https://forms.gle/fyzdRCHt2yAf43tA6"
              className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600" target="__blank"
            >
              Cadastre-se
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#83D5D9]/15 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-[#00757B] md:text-5xl">
            Conectando Indústrias,
            <br />
            Transformando Resíduos em
            <br />
            Oportunidades
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
            Uma plataforma digital para troca, venda e doação de resíduos industriais entre empresas, promovendo a
            simbiose industrial e impulsionando a economia circular no Brasil.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link href="https://forms.gle/fyzdRCHt2yAf43tA6" target="_blank" className="rounded-full bg-[#00A2AA] px-6 py-3 text-white hover:bg-teal-600">
              Cadastre sua empresa
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-[#00A2AA] bg-white px-6 py-3 text-[#00A2AA] hover:bg-teal-50"
            >
              Saiba como funciona
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-12 text-center text-4xl font-extrabold text-[#00A2AA]">Por que usar nossa plataforma?</h1>
          <div className="flex flex-col space-y-8">
            {/* Ganhos Econômicos */}
            <div className="mx-auto w-full max-w-xl rounded-lg bg-[#00A2AA22] p-6 text-left">
              <h3 className="mb-4 text-xl font-semibold text-[#5B5858]">Ganhos Econômicos</h3>
              <p className="text-gray-600">
                Reduza custos com descarte e aquisição de matérias-primas, transformando despesas em receitas.
              </p>
            </div>

            {/* Sustentabilidade Prática */}
            <div className="mx-auto w-full max-w-xl rounded-lg bg-[#00A2AA22] p-6 text-left">
              <h3 className="mb-4 text-xl font-semibold text-[#5B5858]">Sustentabilidade Prática</h3>
              <p className="text-gray-600">
                Contribua ativamente para a redução de resíduos e emissão de CO<sub>2</sub>, alinhando sua empresa às melhores práticas ESG.
              </p>
            </div>

            {/* Conexões Inteligentes */}
            <div className="mx-auto w-full max-w-xl rounded-lg bg-[#00A2AA22] p-6 text-left">
              <h3 className="mb-4 text-xl font-semibold text-[#5B5858]">Conexões Inteligentes</h3>
              <p className="text-gray-600">
                Encontre parceiros ideais com base no tipo de resíduo e demanda, criando relações comerciais sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-black text-[#00A2AA]">Como Funciona?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md max-w-sm mx-auto">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A2AA] text-xl font-semibold text-white">
                1
              </div>
              <h3 className="mb-3 mt-4 text-lg font-bold text-[#5B5858]">Cadastre sua empresa</h3>
              <p className="text-gray-600">
                Crie seu perfil empresarial em poucos minutos, informando seu setor, localização e interesses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md max-w-sm mx-auto">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A2AA] text-xl font-semibold text-white">
                2
              </div>
              <h3 className="mb-3 mt-4 text-lg font-bold text-[#5B5858]">Ofereça ou busque resíduos</h3>
              <p className="text-gray-600">
                Registre seus resíduos disponíveis ou procure por materiais de interesse (plásticos, metais, têxteis etc.)
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md max-w-sm mx-auto">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A2AA] text-xl font-semibold text-white">
                3
              </div>
              <h3 className="mb-3 mt-4 text-lg font-bold text-[#5B5858]">Negocie com outras empresas</h3>
              <p className="text-gray-600">
                Entre em contato e estabeleça as melhores condições para troca, venda ou doação dos materiais.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md max-w-sm mx-auto">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A2AA] text-xl font-semibold text-white">
                4
              </div>
              <h3 className="mb-3 mt-4 text-lg font-bold text-[#5B5858]">Acompanhe os impactos</h3>
              <p className="text-gray-600">
                Visualize métricas de economia e sustentabilidade geradas pelas suas transações na plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-10 text-3xl font-extrabold text-teal-700">
            Juntos por um futuro
            <br />
            mais limpo e colaborativo.
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-center text-gray-600 leading-relaxed">
              A RecicloHub é mais que um marketplace de resíduos — é uma rede de colaboração que{" "}
              <span className="font-semibold">transforma passivos ambientais em ativos de valor</span>, fortalece
              cadeias produtivas e{" "}
              <span className="font-semibold">gera impacto positivo no meio ambiente e na economia local</span>.
            </p>
            <p className="text-center text-gray-600 leading-relaxed">
              Transforme resíduos em valor. Construa parcerias sustentáveis. Faça parte da nova era industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#00757B] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Image src="/RecicloHUB_White.png" alt="RecicloHub" width={150} height={40} className="mb-4 h-8 w-auto" />
              <p className="text-sm text-white font-bold">
                Conectando indústrias para um futuro mais sustentável através da economia circular e colaboração.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Links</h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#benefits" className="hover:text-gray-300 hover:cursor-pointer">
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-gray-300 hover:cursor-pointer">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#mission" className="hover:text-gray-300 hover:cursor-pointer">
                    Sobre Nós
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contato</h3>
                <a
                href="mailto:reciclohub@gmail.com"
                className="mb-2 text-white hover:text-gray-300 hover:cursor-pointer"
                rel="noopener noreferrer"
                >
                reciclohub@gmail.com
                </a>
              <p className="text-white">Caruaru-PE</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
