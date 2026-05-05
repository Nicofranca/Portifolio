import Hero from '@/components/Hero'; // ajuste o caminho se necessário
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      <Hero />

      {/* O resto do seu site vem aqui */}
      <section className="h-screen flex items-center justify-center text-gray-500">
        <p>Conteúdo da próxima seção</p>
      </section>
    </main>
  );
}