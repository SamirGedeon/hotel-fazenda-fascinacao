import { ArrowRight, Bath, BedDouble, Bike, Camera, Car, ChevronDown, Coffee, Gamepad2, Heart, MapPin, MessageCircle, PawPrint, Phone, Quote, ShieldCheck, Sparkles, Star, Trees, Users, UtensilsCrossed, Waves, Wifi } from 'lucide-react';

const whatsapp = 'https://wa.me/5524981281841?text=Olá!%20Gostaria%20de%20consultar%20datas%20e%20disponibilidade%20no%20Hotel%20Fazenda%20Fascinação.';

const features = [
  { icon: Trees, title: 'Natureza por todos os lados', text: 'Área verde, lago e paisagens para desacelerar de verdade.' },
  { icon: UtensilsCrossed, title: 'Pensão completa', text: 'Refeições cuidadosas para aproveitar a estadia sem pressa.' },
  { icon: Waves, title: 'Lazer para diferentes ritmos', text: 'Piscinas, sauna, hidromassagem e atividades ao ar livre.' },
  { icon: Heart, title: 'Hospitalidade que faz diferença', text: 'O atendimento é o aspecto mais elogiado pelos hóspedes.' },
];

const experiences = [
  { icon: Bike, label: 'Natureza e aventura', items: 'Cavalgada, bicicletas, pesca e caminhadas' },
  { icon: Bath, label: 'Descanso e bem-estar', items: 'Piscinas, sauna, hidromassagem e banho a vapor' },
  { icon: Gamepad2, label: 'Diversão em família', items: 'Bilhar, jogos e espaços de convivência' },
  { icon: PawPrint, label: 'Seu pet também é bem-vindo', items: 'Hotel pet friendly — consulte regras e disponibilidade' },
];

const reviews = [
  { name: 'Danielle', text: 'Lugar aconchegante, pessoas acolhedoras. Meu filho queria até morar lá.' },
  { name: 'Patricia', text: 'Funcionários excepcionais, muito educados, receptivos e prestativos.' },
  { name: 'Alvaro', text: 'Lugar tranquilo, com cavalo, pedalinho e pescaria entre outras atrações.' },
];

const faqs = [
  ['Quais refeições estão incluídas?', 'O Instagram oficial informa hospedagem com pensão completa. Consulte o hotel para confirmar a composição das refeições e bebidas para as suas datas.'],
  ['Qual é o horário de entrada e saída?', 'Plataformas de reserva informam entrada das 15h às 22h e saída das 9h às 13h. Confirme os horários no momento da reserva.'],
  ['O hotel aceita crianças?', 'Sim. Crianças de todas as idades são bem-vindas, de acordo com as informações publicadas nas plataformas de reserva.'],
  ['Aceita animais?', 'O hotel se apresenta como pet friendly no Instagram oficial. Regras de porte, quantidade e eventuais taxas devem ser consultadas antes da reserva.'],
  ['Há estacionamento e Wi-Fi?', 'Estacionamento privativo gratuito e Wi-Fi são listados nas plataformas de hospedagem. Por se tratar de uma área rural, a qualidade do sinal pode variar.'],
  ['Como é o acesso?', 'O hotel fica em área rural de Miguel Pereira. Peça a rota recomendada e orientações atualizadas pelo WhatsApp antes de sair.'],
];

function CTA({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a className={`button button-primary ${className}`} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} />{children}</a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Hotel Fazenda Fascinação — início"><span>Hotel Fazenda</span><strong>Fascinação</strong></a>
        <nav aria-label="Navegação principal"><a href="#experiencia">Experiência</a><a href="#acomodacoes">Acomodações</a><a href="#lazer">Lazer</a><a href="#gastronomia">Gastronomia</a><a href="#localizacao">Localização</a></nav>
        <CTA className="header-cta">Consultar disponibilidade</CTA>
      </header>

      <section id="inicio" className="hero">
        <img src="/images/por-do-sol-instagram.jpg" alt="Pôr do sol entre as árvores no Hotel Fazenda Fascinação" />
        <div className="hero-wash" />
        <div className="hero-content">
          <span className="eyebrow light"><MapPin size={15} /> Miguel Pereira, Rio de Janeiro</span>
          <h1>Respire<br />outro ritmo.</h1>
          <p>Natureza, pensão completa e lazer para viver dias mais leves com quem importa.</p>
          <div className="hero-actions"><CTA>Consultar pelo WhatsApp</CTA><a className="button button-ghost" href="#experiencia">Conhecer o hotel <ArrowRight size={18} /></a></div>
          <div className="trust-row"><span><Star size={17} fill="currentColor" /> 9,2/10 na Booking</span><span><ShieldCheck size={17} /> Atendimento 9,7</span><span><Phone size={17} /> Reserva direta</span></div>
        </div>
        <a className="scroll-cue" href="#experiencia" aria-label="Rolar para a próxima seção"><ChevronDown /></a>
      </section>

      <section id="experiencia" className="section intro-section">
        <div className="intro-copy reveal"><span className="eyebrow">A experiência</span><h2>Aqui, o tempo abre espaço para estar junto.</h2><p className="lead">Entre a paisagem, a mesa e as atividades da fazenda, cada dia convida você a escolher: explorar, descansar ou simplesmente aproveitar a companhia.</p><p>O Fascinação combina a tranquilidade do campo com uma estrutura acolhedora para famílias, casais e grupos — em uma escala que preserva a proximidade no atendimento.</p></div>
        <figure className="aerial-card reveal"><img src="/images/vista-aerea-instagram.jpg" alt="Vista aérea publicada pelo Hotel Fazenda Fascinação no Instagram" /><figcaption>Vista da propriedade • Instagram oficial</figcaption></figure>
      </section>

      <section className="feature-band" aria-label="Principais diferenciais">
        {features.map(({ icon: Icon, title, text }) => <article key={title} className="feature-card reveal"><span className="icon-bubble"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="section gallery-section">
        <div className="section-heading reveal"><span className="eyebrow">Cenas do Fascinação</span><h2>Natureza que muda o ritmo da viagem.</h2></div>
        <div className="gallery-grid"><figure className="gallery-main reveal"><img src="/images/por-do-sol-instagram.jpg" alt="Pôr do sol na propriedade" /><figcaption>Fim de tarde em meio ao verde</figcaption></figure><figure className="reveal"><img src="/images/natureza-instagram.jpg" alt="Flores e vegetação na propriedade" /><figcaption>Detalhes da natureza</figcaption></figure><figure className="reveal"><img src="/images/pet-friendly-instagram.jpg" alt="Cão em área externa do hotel" /><figcaption>Pet friendly</figcaption></figure></div>
        <a className="text-link" href="https://www.instagram.com/hotel.fazendafascinacao" target="_blank" rel="noreferrer"><Camera size={18} /> Ver mais no Instagram <ArrowRight size={17} /></a>
      </section>

      <section id="acomodacoes" className="section rooms-section">
        <div className="section-heading centered reveal"><span className="eyebrow">Acomodações</span><h2>Conforto para diferentes jeitos de viajar.</h2><p>As categorias abaixo aparecem nas plataformas de hospedagem. Consulte disponibilidade, capacidade e configuração diretamente com o hotel.</p></div>
        <div className="room-grid">
          {[
            ['Suíte Standard', 'Ideal para casais', ['Ar-condicionado', 'Varanda', 'Frigobar']],
            ['Suíte Família Deluxe', 'Para famílias e grupos', ['Quarto familiar', 'Banheiro privativo', 'Conforto para grupos']],
            ['Estúdio Deluxe', 'Mais espaço para aproveitar', ['Ambiente amplo', 'Ar-condicionado', 'Vista para a natureza']],
          ].map(([title, subtitle, amenities], index) => <article className="room-card reveal" key={title as string}><div className={`room-art room-art-${index + 1}`}><BedDouble size={46} /></div><div className="room-body"><span>{subtitle as string}</span><h3>{title as string}</h3><ul>{(amenities as string[]).map(item => <li key={item}><Sparkles size={14} />{item}</li>)}</ul><a href={whatsapp} target="_blank" rel="noreferrer">Consultar esta acomodação <ArrowRight size={17} /></a></div></article>)}
        </div>
      </section>

      <section id="lazer" className="experience-section"><div className="section experience-inner"><div className="section-heading reveal"><span className="eyebrow light">Lazer</span><h2>Movimento quando quiser. Pausa quando precisar.</h2><p>Da cavalgada ao banho de piscina, o dia pode ser tão ativo ou tranquilo quanto você desejar.</p></div><div className="experience-grid">{experiences.map(({ icon: Icon, label, items }) => <article key={label} className="experience-card reveal"><Icon size={25} /><h3>{label}</h3><p>{items}</p></article>)}</div></div></section>

      <section id="gastronomia" className="section food-section">
        <div className="food-mark"><Coffee size={84} /></div>
        <div className="food-copy reveal"><span className="eyebrow">Gastronomia</span><h2>Mesa posta.<br />Viagem mais leve.</h2><p className="lead">Hospedagem com pensão completa, informada pelo canal oficial do hotel.</p><p>A proposta gastronômica valoriza a comida caseira e os momentos ao redor da mesa. Confirme com o hotel quais refeições e bebidas estão incluídas no período desejado.</p><CTA>Consultar o que está incluído</CTA></div>
        <div className="food-facts reveal"><div><UtensilsCrossed /><span><strong>Restaurante no local</strong>Com atendimento durante a hospedagem</span></div><div><Coffee /><span><strong>Café da manhã</strong>Opções buffet ou continental nas plataformas</span></div><div><Users /><span><strong>Tempo à mesa</strong>Uma experiência para compartilhar</span></div></div>
      </section>

      <section className="reviews-section"><div className="section"><div className="section-heading centered reveal"><span className="eyebrow light">Avaliações verificáveis</span><h2>Quem se hospeda destaca o cuidado.</h2><p>9,2/10 na Booking, com destaque para atendimento, limpeza e conforto.</p></div><div className="review-grid">{reviews.map(review => <blockquote key={review.name} className="review-card reveal"><Quote size={30} /><p>“{review.text}”</p><footer><span>{review.name}</span> • Booking</footer></blockquote>)}</div></div></section>

      <section id="localizacao" className="section location-section">
        <div className="location-copy reveal"><span className="eyebrow">Localização</span><h2>No verde de Miguel Pereira.</h2><p className="lead">Estrada Manoel Guilherme da Silva, Monte Raso<br />Miguel Pereira — RJ, CEP 26950-000</p><div className="location-facts"><span><Car /> Estacionamento gratuito</span><span><Wifi /> Wi-Fi disponível</span><span><MapPin /> Área rural</span></div><p className="note">Antes de sair, peça pelo WhatsApp a rota recomendada e as orientações atualizadas de acesso.</p><a className="button button-outline" href="https://maps.app.goo.gl/wXjj2hSZQWGpbDrAA" target="_blank" rel="noreferrer"><MapPin size={18} /> Traçar rota</a></div>
        <div className="map-wrap reveal"><iframe title="Mapa do Hotel Fazenda Fascinação" src="https://www.google.com/maps?q=Hotel%20Fazenda%20Fascinação%20Miguel%20Pereira&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </section>

      <section className="section faq-section"><div className="section-heading reveal"><span className="eyebrow">Perguntas frequentes</span><h2>Antes de fazer as malas.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} className="faq-item reveal"><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta"><img src="/images/por-do-sol-instagram.jpg" alt="Paisagem ao entardecer no Hotel Fazenda Fascinação" /><div className="final-cta-wash" /><div className="final-cta-content reveal"><span className="eyebrow light">Seu próximo respiro</span><h2>Alguns dias longe do ruído podem mudar o ritmo de tudo.</h2><CTA>Consultar datas e disponibilidade</CTA></div></section>

      <footer className="footer"><div className="footer-brand"><span>Hotel Fazenda</span><strong>Fascinação</strong><p>Natureza, acolhimento e tempo para estar junto.</p></div><div><h3>Explore</h3><a href="#acomodacoes">Acomodações</a><a href="#lazer">Lazer</a><a href="#gastronomia">Gastronomia</a><a href="#localizacao">Localização</a></div><div><h3>Contato</h3><a href="tel:+5524981281841">(24) 98128-1841</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/hotel.fazendafascinacao" target="_blank" rel="noreferrer">Instagram</a></div><div className="footer-address"><h3>Onde estamos</h3><p>Estrada Manoel Guilherme da Silva<br />Monte Raso, Miguel Pereira — RJ</p></div><p className="copyright">© 2026 Hotel Fazenda Fascinação. Todos os direitos reservados.</p></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Consultar disponibilidade pelo WhatsApp"><MessageCircle size={25} /><span>Consultar disponibilidade</span></a>
    </main>
  );
}
