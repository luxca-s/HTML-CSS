import dandroidsImg from "@/assets/dandroids.jpg";
import bugdroidImg from "@/assets/bugdroid.jpg";
import irinaImg from "@/assets/irina-inspiration.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="bg-header text-header-foreground py-8 px-4 text-center">
        <h1 className="font-display text-3xl md:text-5xl tracking-wide uppercase">
          Curiosidades de Tecnologia
        </h1>
        <p className="mt-2 text-sm md:text-base opacity-90 font-body">
          Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar
        </p>
      </header>

      {/* Nav */}
      <nav className="bg-nav">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap justify-center">
            <li>
              <a href="#" className="block px-5 py-3 text-header-foreground font-semibold text-sm transition-colors duration-200 hover:bg-nav-hover">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-5 py-3 text-header-foreground font-semibold text-sm transition-colors duration-200 hover:bg-nav-hover">
                Notícias
              </a>
            </li>
            <li>
              <a href="#" className="block px-5 py-3 text-header-foreground font-semibold text-sm transition-colors duration-200 hover:bg-nav-hover">
                Curiosidades
              </a>
            </li>
            <li>
              <a href="#" className="block px-5 py-3 text-header-foreground font-semibold text-sm transition-colors duration-200 hover:bg-nav-hover">
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-8">
        <article>
          <h2 className="font-display text-2xl md:text-4xl mb-6">
            História do Mascote do Android
          </h2>

          <p className="font-body text-sm md:text-base leading-relaxed mb-6">
            Provavelmente você sabe que o sistema operacional{" "}
            <strong>Android</strong>, mantido pelo <strong>Google</strong> é um
            dos mais utilizados para dispositivos móveis em todo o mundo. Mas
            talvez você não saiba que o seu simpático mascote tem um nome e uma
            história muito curiosa? Pois acompanhe esse artigo para aprender
            muita coisa sobre esse robozinho.
          </p>

          {/* Section 1 */}
          <h3 className="font-display text-xl md:text-2xl text-highlight mb-4 border-b-2 border-highlight pb-1 inline-block">
            A primeira versão
          </h3>
          <p className="font-body text-sm md:text-base leading-relaxed mb-4">
            A primeira tentativa de criar um mascote surgiu em 2007 e veio de um
            desenvolvedor chamado{" "}
            <a href="#" className="text-link font-bold hover:underline">
              Dan Morrill
            </a>
            . Ele conta que abriu o{" "}
            <a href="#" className="text-link font-bold hover:underline">
              Inkscape
            </a>{" "}
            (software livre para vetorização de imagens) e criou sua própria
            versão de robô. O objetivo era apenas personificar o sistema apenas
            para a sua equipe, não existia nenhuma solicitação da empresa para a
            criação de um mascote.
          </p>

          <div className="flex justify-center my-6">
            <img
              src={dandroidsImg}
              alt="Os primeiros Dandroids criados por Dan Morrill"
              className="w-full max-w-2xl rounded-lg shadow-md"
            />
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed mb-8">
            Essa primeira versão bizarra até foi batizada em homenagem ao seu
            criador: seriam os <strong>Dandroids</strong>.
          </p>

          {/* Section 2 */}
          <h3 className="font-display text-xl md:text-2xl text-highlight mb-4 border-b-2 border-highlight pb-1 inline-block">
            Surge um novo mascote
          </h3>
          <p className="font-body text-sm md:text-base leading-relaxed mb-4">
            A ideia de ter um mascote foi amadurecendo e a missão foi passada
            para uma profissional da área. A ilustradora Russa{" "}
            <strong>Irina Blok</strong>, também funcionária do Google, ficou com
            a missão de representar o pequeno robô de uma maneira mais agradável.
          </p>

          <div className="flex justify-center my-6">
            <img
              src={bugdroidImg}
              alt="O Bugdroid, mascote oficial do Android"
              loading="lazy"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed mb-4">
            A ideia principal da Irina era representar tudo graficamente com
            poucos traços e de forma mais chapada. O desenho também deveria gerar
            identificação rápida com quem o olha. Surgiu então o{" "}
            <strong>Bugdroid</strong>, o novo mascote do Android.
          </p>

          <div className="flex justify-center my-6">
            <img
              src={irinaImg}
              alt="Bonequinhos de porta de banheiro que inspiraram o Bugdroid"
              loading="lazy"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed mb-4">
            A principal inspiração para os traços do novo Bugdroid veio daqueles
            bonequinhos que ilustram portas de banheiro para indicar o gênero de
            cada porta. Conta a lenda que a artista estava criando em sua mesa no
            escritório do Google e olhou para o lado dos banheiros e a
            identificação foi imediata: simples, limpo, objetivo.
          </p>

          {/* Video */}
          <div className="flex justify-center my-8">
            <div className="w-full max-w-2xl aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/l2UDgpLz20M"
                title="História do Android"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Extra Box */}
          <div className="bg-extra border-4 border-extra-border rounded-lg p-6 my-8">
            <h3 className="font-display text-xl md:text-2xl mb-4">
              [Extra] Quer aprender mais?
            </h3>
            <p className="font-body text-sm md:text-base leading-relaxed mb-4">
              Outro assunto curioso em relação ao Android é que cada versão
              sempre foi nomeada em homenagem a um doce, em ordem alfabética a
              partir da versão 1.5 até a 9.0.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 font-body text-sm md:text-base mb-4 list-disc list-inside">
              <li>1.5 - Cupcake</li>
              <li>1.6 - Donut</li>
              <li>3.0 - Eclair</li>
              <li>2.2 - Froyo</li>
              <li>2.3 - Gingerbread</li>
              <li>3.0 - Honeycomb</li>
              <li>4.0 - Ice Cream Sandwich</li>
              <li>4.1 - Jelly Bean</li>
              <li>4.4 - KitKat</li>
              <li>5.0 - Lollipop</li>
              <li>6.0 - Marshmallow</li>
              <li>7.0 - Nougat</li>
              <li>8.0 - Oreo</li>
              <li>9.0 - Pie</li>
            </ul>
            <p className="font-body text-sm md:text-base leading-relaxed">
              Infelizmente, o Android Q não existiu, pois o Google resolveu pôr
              fim a essa divertida prática e começou a usar numerações, o que deu
              origem ao Android 10.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed mt-3">
              Acesse aqui o site{" "}
              <a
                href="https://www.android.com/history/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link font-bold hover:underline"
              >
                Android History
              </a>{" "}
              para conhecer a sequência das versões "adocicadas" e o que cada uma
              trouxe para o sistema Android.
            </p>
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed mb-8">
            Então é isso! Espero que você tenha gostado do nosso artigo com essa
            curiosidade sobre o sistema Android e seu simpático mascote.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-footer text-footer-foreground py-4 text-center text-sm">
        Site criado por <strong>Gustavo Guanabara</strong> para o{" "}
        <strong>CursoemVideo</strong>.
      </footer>
    </div>
  );
};

export default Index;
