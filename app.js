import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfólio de Oli</h1>
        <p>Bacharel em Ciência da Computação | Sucesso do Cliente | Programador Certificado</p>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#certificacoes">Certificações</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>Sou Bacharel em Ciência da Computação pela UNIFACS, com uma vasta experiência em Sucesso do Cliente. Tenho certificações em Programação de Computadores pela Brigham Young University e em Análise de Dados e Design de UX pelo Google. Atualmente, trabalho na Hostinger, onde lidero uma equipe e ajudo clientes a resolver problemas complexos relacionados a configurações de domínio, servidores e muito mais.</p>
        </section>

        <section id="experiencia">
          <h2>Experiência Profissional</h2>
          <ul>
            <li><strong>Team Leader - Hostinger</strong> (Data de Início - Presente)
              <p>Gerencio uma equipe focada em Sucesso do Cliente, melhorando processos como sessões de calibração e fornecendo feedback para aprimorar a qualidade do atendimento. Também ajudo na resolução de problemas técnicos complexos, como configurações de CORS e portas de VPS.</p>
            </li>
            {/* Adicione mais experiências conforme necessário */}
          </ul>
        </section>

        <section id="certificacoes">
          <h2>Certificações</h2>
          <ul>
            <li>Certificação em Programação de Computadores - Brigham Young University (2021)</li>
            <li>Certificação em Análise de Dados - Google (2023)</li>
            <li>Certificação em Design de UX - Google (2023)</li>
          </ul>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Estou disponível para novos desafios e colaborações. Você pode entrar em contato comigo através dos seguintes canais:</p>
          <ul>
            <li>Email: <a href="mailto:olikiversilva@gmail.com">olikiversilva@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/olikiverdejesusbarros/">linkedin.com/in/olikiverdejesusbarros</a></li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Oli. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
