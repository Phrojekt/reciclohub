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
            <Link href="/beneficios" className="text-gray-600 hover:text-teal-600">
              Benefícios
            </Link>
            <Link href="/como-funciona" className="text-gray-600 hover:text-teal-600">
              Como Funciona
            </Link>
            <Link href="/sobre-nos" className="text-gray-600 hover:text-teal-600">
              Sobre Nós
            </Link>
            <Link
              href="/cadastro"
              className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600"
            >
              Cadastre-se
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-teal-700 md:text-5xl">
            Conectando Indústrias,
            <br />
            Transformando Resíduos em
            <br />
            Oportunidades
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-gray-600">
            Uma plataforma digital para troca, venda e doação de resíduos industriais entre empresas, promovendo a
            simbiose industrial e impulsionando a economia circular no Brasil.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link href="/cadastro" className="rounded-full bg-teal-500 px-6 py-3 text-white hover:bg-teal-600">
              Cadastre sua empresa
            </Link>
            <Link
              href="/como-funciona"
              className="rounded-full border border-teal-500 bg-white px-6 py-3 text-teal-500 hover:bg-teal-50"
            >
              Saiba como funciona
            </Link>
          </div>
        </div>
      </section>

{/* Benefits Section */}
<section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-teal-600">Por que usar nossa plataforma?</h2>
          <div className="flex flex-col space-y-8">
            {/* Ganhos Econômicos */}
            <div className="mx-auto w-full max-w-3xl rounded-lg bg-teal-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Ganhos Econômicos</h3>
              <p className="text-right text-gray-600">
                Reduza custos com descarte e aquisição de matérias-primas, transformando despesas em receitas.
              </p>
            </div>

            {/* Sustentabilidade Prática */}
            <div className="ml-auto w-full max-w-3xl rounded-lg bg-teal-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Sustentabilidade Prática</h3>
              <p className="text-gray-600">
                Contribua ativamente para a redução de resíduos e emissão de CO<sub>2</sub>, alinhando sua empresa às
                melhores práticas ESG.
              </p>
            </div>

            {/* Conexões Inteligentes */}
            <div className="mx-auto w-full max-w-3xl rounded-lg bg-teal-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Conexões Inteligentes</h3>
              <p className="text-right text-gray-600">
                Encontre parceiros ideais com base no tipo de resíduo e demanda, criando relações comerciais
                sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">Como Funciona?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-semibold text-white">
                1
              </div>
              <h3 className="mb-3 mt-4 text-lg font-semibold text-gray-700">Cadastre sua empresa</h3>
              <p className="text-gray-600">
                Crie seu perfil empresarial em poucos minutos, informando seu setor, localização e interesses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-semibold text-white">
                2
              </div>
              <h3 className="mb-3 mt-4 text-lg font-semibold text-gray-700">Ofereça ou busque resíduos</h3>
              <p className="text-gray-600">
                Registre seus resíduos disponíveis ou procure por materiais de interesse (plásticos, metais, têxteis
                etc.)
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-semibold text-white">
                3
              </div>
              <h3 className="mb-3 mt-4 text-lg font-semibold text-gray-700">Negocie com outras empresas</h3>
              <p className="text-gray-600">
                Entre em contato e estabeleça as melhores condições para troca, venda ou doação dos materiais.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-lg bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-semibold text-white">
                4
              </div>
              <h3 className="mb-3 mt-4 text-lg font-semibold text-gray-700">Acompanhe os impactos</h3>
              <p className="text-gray-600">
                Visualize métricas de economia e sustentabilidade geradas pelas suas transações na plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-teal-700">
            Juntos por um futuro
            <br />
            mais limpo e colaborativo
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-gray-600">
              A RecicloHub é mais que um marketplace de resíduos — é uma rede de colaboração que transforma passivos
              ambientais em ativos de valor, fortalece cadeias produtivas e gera impacto positivo no meio ambiente e na
              economia local.
            </p>
            <p className="text-gray-600">
              Transforme resíduos em valor. Construa parcerias sustentáveis. Faça parte da nova era industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Image src="/RecicloHUB_White.png" alt="RecicloHub" width={150} height={40} className="mb-4 h-8 w-auto" />
              <p className="text-sm text-teal-100">
                Conectando indústrias para um futuro mais sustentável através da economia circular e colaboração.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Links</h3>
              <ul className="space-y-2 text-teal-100">
                <li>
                  <Link href="/" className="hover:text-white">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/beneficios" className="hover:text-white">
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link href="/como-funciona" className="hover:text-white">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nos" className="hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contato</h3>
              <p className="mb-2 text-teal-100">reciclohub@gmail.com</p>
              <p className="mb-2 text-teal-100">(81) 9999-9999</p>
              <p className="text-teal-100">Caruaru-PE</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
