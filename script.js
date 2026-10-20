const siteIntro = document.querySelector('#siteIntro');

if (siteIntro) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let introFinished = false;
  let logoTimer;
  let exitTimer;

  const finishIntro = () => {
    if (introFinished) return;
    introFinished = true;
    window.clearTimeout(logoTimer);
    window.clearTimeout(exitTimer);
    document.removeEventListener('keydown', handleIntroKey);
    siteIntro.classList.add('is-leaving');
    window.setTimeout(() => {
      siteIntro.remove();
      document.body.classList.remove('intro-active');
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        window.requestAnimationFrame(() => target?.scrollIntoView({ block: 'start' }));
      }
    }, reducedMotion ? 30 : 1100);
  };

  const handleIntroKey = event => {
    if (event.key === 'Escape') finishIntro();
  };

  if (reducedMotion) {
    siteIntro.classList.add('is-logo-phase');
    exitTimer = window.setTimeout(finishIntro, 700);
  } else {
    logoTimer = window.setTimeout(() => siteIntro.classList.add('is-logo-phase'), 3500);
    exitTimer = window.setTimeout(finishIntro, 5600);
  }

  siteIntro.addEventListener('click', finishIntro, { once: true });
  document.addEventListener('keydown', handleIntroKey);
} else if (window.location.hash) {
  window.addEventListener('load', () => {
    const target = document.getElementById(window.location.hash.slice(1));
    window.setTimeout(() => target?.scrollIntoView({ block: 'start' }), 80);
  }, { once: true });
}

const translations = {
  pt: {
    'nav.home': 'Início', 'nav.products': 'Produtos', 'nav.about': 'Sobre nós', 'nav.contact': 'Fale conosco', 'nav.careers': 'Trabalhe conosco', 'nav.location': 'Localização',
    'hero.kicker': 'Mineração que movimenta o futuro', 'hero.title': 'Solidez para construir <em>o amanhã.</em>', 'hero.copy': 'Agregados minerais de alta performance, produzidos com precisão, responsabilidade e a força de quem conhece o território.', 'hero.products': 'Conheça os produtos', 'hero.contact': 'Fale com a equipe', 'hero.buy': 'Falar com o vendedor', 'hero.scroll': 'Role para explorar',
    'home.introEyebrow': 'Superbritas em essência', 'home.introTitle': 'Da rocha nasce a base de <em>grandes realizações.</em>', 'home.introCopy': 'Transformamos recursos minerais em infraestrutura, desenvolvimento e confiança. Unimos experiência operacional, controle rigoroso e logística eficiente para entregar qualidade constante em cada carga.', 'home.introNote': 'Nossa operação combina conhecimento local e visão de longo prazo para atender obras de diferentes escalas com segurança e consistência.', 'home.stat1': 'anos de experiência', 'home.stat2': 'controle de conformidade', 'home.stat3': 'resposta logística',
    'home.productsEyebrow': 'Portfólio mineral', 'home.productsTitle': 'O agregado certo para <em>cada desafio.</em>', 'home.productsLead': 'Granulometrias selecionadas para construção, pavimentação, drenagem e aplicações especiais.', 'home.p1': 'Britas graduadas', 'home.p1copy': 'Resistência e estabilidade para bases e estruturas.', 'home.p2': 'Pedras especiais', 'home.p2copy': 'Soluções resistentes para drenagem e contenção.', 'home.p3': 'Pó de pedra', 'home.p3copy': 'Precisão para assentamento, nivelamento e pavimentação.', 'common.catalog': 'Ver catálogo completo',
    'home.aboutEyebrow': 'Nossa trajetória', 'home.aboutTitle': 'Experiência brasileira.<br><em>Visão sem fronteiras.</em>', 'home.aboutCopy': 'A Superbritas cresce ao lado das cidades, das estradas e das pessoas. Nossa história é construída com trabalho, proximidade e o compromisso de deixar bases mais fortes para o futuro.', 'home.aboutLink': 'Conheça a Superbritas',
    'home.locationEyebrow': 'Onde estamos', 'home.locationTitle': 'Encontre a força da <em>Superbritas.</em>', 'home.locationCopy': 'Visualize nossa localização, planeje sua rota e venha conhecer de perto nossa operação.', 'home.locationButton': 'Abrir no Google Maps', 'home.address': 'Av. Santo Amaro de Ipitanga, 4444 · Caji · Lauro de Freitas/BA',
    'partners.eyebrow': 'Empresas parceiras', 'partners.title': 'Uma rede que constrói <em>junto.</em>', 'partners.copy': 'Marcas conectadas pela experiência, confiança e compromisso com o desenvolvimento.',
    'chat.status': 'Atendente rápido · online', 'chat.greeting': 'Oi! Que bom ter você por aqui 😊 Eu sou o Vicentinho. Antes de começarmos: você fala do Brasil, da China ou prefere atendimento em inglês?', 'chat.products': 'Quero conhecer os produtos', 'chat.location': 'Quero ver a localização', 'chat.contact': 'Falar com o comercial', 'chat.whatsapp': 'Continuar no WhatsApp', 'chat.fast': 'Atendimento rápido', 'chat.placeholder': 'Digite seu país ou idioma...', 'chat.conversationPlaceholder': 'Conte um pouco sobre você...', 'chat.languageRetry': 'Só para eu conversar direitinho com você: prefere Português, 中文 ou English?', 'chat.conversation': 'Prazer em receber você! Como está? Me conte um pouquinho: o que trouxe você até a Superbritas hoje?', 'chat.menuIntro': 'Que bom conhecer um pouco mais sobre você! Agora consigo ajudar melhor. Escolha uma opção abaixo ou continue escrevendo para mim.', 'chat.reply.products': 'Temos britas de diferentes granulometrias, pedras especiais e pó de pedra. Posso ajudar a escolher o material ideal para sua obra.', 'chat.reply.location': 'Estamos na Av. Santo Amaro de Ipitanga, 4444, Caji, Lauro de Freitas. A seção Localização possui mapa e rota completa.', 'chat.reply.contact': 'Posso encaminhar você agora para nossa equipe comercial pelo WhatsApp. O atendimento é feito pelo número (71) 99605-1876.', 'chat.reply.price': 'Os valores variam conforme material, volume e destino da entrega. Envie sua quantidade e localização pelo WhatsApp para receber uma cotação.', 'chat.reply.delivery': 'Atendemos com logística planejada. Informe o endereço da obra e a quantidade desejada para verificarmos prazo e disponibilidade.', 'chat.reply.hello': 'Olá! É um prazer falar com você. Posso ajudar com produtos, preços, entregas ou localização.', 'chat.reply.default': 'Entendi. Para orientar melhor, conte o tipo de obra, o material desejado e a quantidade aproximada. Se preferir, continue direto com nossa equipe no WhatsApp.',
    'products.eyebrow': 'Catálogo Superbritas', 'products.title': 'Pedras que sustentam <em>grandes projetos.</em>', 'products.introEyebrow': 'Precisão em cada granulometria', 'products.introTitle': 'Um catálogo pensado para <em>construir melhor.</em>', 'products.introCopy': 'Selecionamos e controlamos cada material para oferecer desempenho previsível no canteiro. Encontre a granulometria ideal para sua aplicação.',
    'product.dust': 'Pó de Pedra', 'product.dustcopy': 'Indicado para terraplenagem, sub-bases, assentamento de pré-moldados e paralelepípedos, além da produção de massa asfáltica.',
    'product.b19': 'Brita 19 mm (3/4”)', 'product.b19copy': 'Aplicada em concreto estrutural, pavimentação, peças pré-moldadas e concreto asfáltico.',
    'product.b17': 'Brita 5/8', 'product.b17copy': 'Aplicada em concreto estrutural, pavimentação, peças pré-moldadas e concreto asfáltico.',
    'product.b125': 'Brita 1/2', 'product.b125copy': 'Adequada à produção de blocos e pré-moldados, pavimentos simples, pisos resistentes e concreto asfáltico.',
    'product.b95': 'Brita 3/8', 'product.b95copy': 'Adequada à produção de blocos e pré-moldados, pavimentos simples, pisos resistentes e concreto asfáltico.',
    'product.b78': 'Brita 7/8', 'product.b78copy': 'Indicada para concreto estrutural, pavimentação e aplicações que exigem agregado de maior granulometria.',
    'product.cascalho': 'Cascalho', 'product.cascalhocopy': 'Material versátil para regularização de terrenos, drenagem, acessos provisórios e bases de pavimentos.',
    'product.rachao': 'Rachão', 'product.rachaocopy': 'Pedra de maior porte usada em bases, drenagens, contenções, gabiões, enrocamentos e concreto ciclópico.',
    'product.raw': 'Pedras Brutas', 'product.rawcopy': 'Usadas em barragens, contenção de marés e proteção de aterros, taludes e estruturas contra erosão.',
    'product.hand': 'Pedras Marroadas', 'product.handcopy': 'Rochas selecionadas para calçamentos, muros de contenção, fundações, drenagens e paisagismo.',
    'product.b76': 'Brita 76 mm (3”)', 'product.b76copy': 'Conhecida como pedra de lastro, atende ferrovias, drenagem do solo e decantação de fossas sépticas.',
    'product.b38': 'Brita 38 mm (2”)', 'product.b38copy': 'Indicada para concretos de alta resistência, fundações, pisos espessos, subestações elétricas e grandes concretagens.',
    'product.b25': 'Brita 25 mm (1”)', 'product.b25copy': 'Indicada para concreto convencional ou bombeado em edifícios, colunas, vigas e lajes.',
    'product.graded': 'Brita Graduada', 'product.gradedcopy': 'Aplicada em bases e sub-bases de vias com tráfego pesado, pisos, pátios e galpões.',
    'product.gravel': 'Gravilha', 'product.gravelcopy': 'Recomendada para pisos, acabamentos, drenagem leve e fabricação de blocos pré-moldados.', 'product.quote': 'Solicitar cotação', 'product.more': 'Ver mais', 'product.less': 'Ver menos',
    'cart.volume': 'Volume desejado', 'cart.add': 'Adicionar ao carrinho', 'cart.title': 'Nota do seu pedido', 'cart.subtitle': 'Monte sua cotação por volume', 'cart.empty': 'Seu carrinho está vazio. Escolha o volume nos produtos acima.', 'cart.total': 'Volume total', 'cart.items': 'itens', 'cart.name': 'Seu nome', 'cart.location': 'Cidade ou local da obra', 'cart.note': 'Esta é uma solicitação de cotação. Valores, frete e disponibilidade serão confirmados pela equipe comercial.', 'cart.send': 'Enviar pedido pelo WhatsApp', 'cart.remove': 'Remover', 'cart.dock': 'Ver carrinho',
    'about.eyebrow': 'Sobre a Superbritas', 'about.title': 'Nossa força vem <em>do que construímos juntos.</em>', 'about.storyEyebrow': 'Uma história sólida', 'about.storyTitle': 'Trabalho que transforma <em>territórios.</em>', 'about.storyCopy': 'A Superbritas integra a experiência do Grupo São Vicente e atua na produção de agregados minerais para obras que impulsionam o desenvolvimento. Evoluímos com tecnologia, responsabilidade e uma equipe que conhece profundamente cada etapa da operação.', 'about.storyCopy2': 'Mais do que fornecer pedra, criamos relações de confiança. Planejamos, produzimos e entregamos com o cuidado de quem entende que toda grande obra começa por uma base bem-feita.', 'about.groupEyebrow': 'A força do Grupo São Vicente', 'about.groupTitle': 'Uma estrutura que conecta <em>regiões.</em>', 'about.groupCopy': 'O Grupo São Vicente reúne empresas, conhecimento técnico e operações que abastecem a construção civil em diferentes regiões da Bahia. Da Região Metropolitana de Salvador ao Extremo Sul do estado, sua presença conecta produção, logística e atendimento para obras de todos os portes.', 'about.groupNote': 'No Extremo Sul, a operação atende Itagimirim, Eunápolis, Porto Seguro, Santa Cruz Cabrália, Itabela e municípios do entorno, levando qualidade e capacidade de entrega para uma região estratégica.', 'about.groupTag1': 'Desde 2004', 'about.groupTag2': 'Presença regional', 'about.groupTag3': 'Extremo Sul da Bahia', 'about.videoLabel': 'Filme institucional', 'about.videoCaption': 'Uma história que movimenta a Bahia', 'about.videoFallback': 'Seu navegador não oferece suporte a vídeo.', 'about.valuesEyebrow': 'O que nos orienta', 'about.valuesTitle': 'Princípios firmes.<br>Futuro em movimento.', 'about.v1': 'Segurança', 'about.v1copy': 'Cuidar das pessoas é a primeira etapa de toda operação bem executada.', 'about.v2': 'Qualidade', 'about.v2copy': 'Controle e consistência para entregar o desempenho esperado em cada projeto.', 'about.v3': 'Responsabilidade', 'about.v3copy': 'Respeito ao território, uso consciente de recursos e visão de longo prazo.',
    'about.terrainTab1': 'Camadas do relevo', 'about.terrainTab2': 'Jazida consolidada', 'about.terrainEyebrow': 'Leitura técnica do território', 'about.terrainTitle': 'Do relevo à <em>jazida.</em>', 'about.terrainCopy': 'Superfície, curvas topográficas e estrutura geológica se aproximam durante a rolagem para revelar uma única formação mineral.', 'about.terrainLayer1': 'Superfície texturizada', 'about.terrainLayer2': 'Modelo topográfico', 'about.terrainLayer3': 'Massa geológica', 'about.terrainFinal': 'Jazida formada',
    'cta.title': 'Vamos construir uma parceria sólida?', 'cta.button': 'Fale conosco', 'footer.line': 'Força que transforma', 'footer.rights': 'Todos os direitos reservados'
  },
  en: {
    'nav.home': 'Home', 'nav.products': 'Products', 'nav.about': 'About us', 'nav.contact': 'Contact us', 'nav.careers': 'Careers', 'nav.location': 'Location',
    'hero.kicker': 'Mining that moves the future', 'hero.title': 'Solid foundations for <em>tomorrow.</em>', 'hero.copy': 'High-performance mineral aggregates produced with precision, responsibility and the strength of those who know the land.', 'hero.products': 'Explore products', 'hero.contact': 'Talk to our team', 'hero.buy': 'Talk to a sales representative', 'hero.scroll': 'Scroll to explore',
    'home.introEyebrow': 'The Superbritas essence', 'home.introTitle': 'From rock comes the foundation of <em>great achievements.</em>', 'home.introCopy': 'We transform mineral resources into infrastructure, development and trust. Operational expertise, rigorous control and efficient logistics deliver consistent quality in every load.', 'home.introNote': 'Our operation combines local knowledge and long-term vision to serve projects of every scale with safety and consistency.', 'home.stat1': 'years of expertise', 'home.stat2': 'compliance control', 'home.stat3': 'logistics response',
    'home.productsEyebrow': 'Mineral portfolio', 'home.productsTitle': 'The right aggregate for <em>every challenge.</em>', 'home.productsLead': 'Selected grain sizes for construction, paving, drainage and special applications.', 'home.p1': 'Graded stone', 'home.p1copy': 'Strength and stability for bases and structures.', 'home.p2': 'Special stones', 'home.p2copy': 'Resistant solutions for drainage and retaining.', 'home.p3': 'Stone dust', 'home.p3copy': 'Precision for bedding, leveling and paving.', 'common.catalog': 'View full catalog',
    'home.aboutEyebrow': 'Our journey', 'home.aboutTitle': 'Brazilian expertise.<br><em>A borderless vision.</em>', 'home.aboutCopy': 'Superbritas grows alongside cities, roads and people. Our story is built on hard work, close relationships and a commitment to stronger foundations for the future.', 'home.aboutLink': 'Meet Superbritas',
    'home.locationEyebrow': 'Where we are', 'home.locationTitle': 'Find the strength of <em>Superbritas.</em>', 'home.locationCopy': 'See our location, plan your route and come experience our operation up close.', 'home.locationButton': 'Open in Google Maps', 'home.address': 'Santo Amaro de Ipitanga Ave., 4444 · Caji · Lauro de Freitas, Brazil',
    'partners.eyebrow': 'Partner companies', 'partners.title': 'A network that builds <em>together.</em>', 'partners.copy': 'Brands connected by expertise, trust and a commitment to development.',
    'chat.status': 'Quick service · online', 'chat.greeting': "Hi! It's great to have you here 😊 I'm Vicentinho. Before we begin: are you from Brazil, China, or would you prefer service in English?", 'chat.products': 'I want to see the products', 'chat.location': 'I want to see the location', 'chat.contact': 'Talk to sales', 'chat.whatsapp': 'Continue on WhatsApp', 'chat.fast': 'Quick service', 'chat.placeholder': 'Type your country or language...', 'chat.conversationPlaceholder': 'Tell me a little about yourself...', 'chat.languageRetry': 'Just so we can chat comfortably: would you prefer Português, 中文, or English?', 'chat.conversation': "It's a pleasure to welcome you! How are you? Tell me a little: what brought you to Superbritas today?", 'chat.menuIntro': 'It was great getting to know you a little! Now I can help you better. Choose an option below or keep writing to me.', 'chat.reply.products': 'We offer several crushed-stone sizes, special rocks and stone dust. I can help you choose the right material for your project.', 'chat.reply.location': 'We are at 4444 Santo Amaro de Ipitanga Avenue, Caji, Lauro de Freitas. The Location section has the full map and route.', 'chat.reply.contact': 'I can connect you to our sales team on WhatsApp now. Service is available at +55 71 99605-1876.', 'chat.reply.price': 'Prices vary according to material, volume and delivery destination. Send the quantity and location on WhatsApp for a quote.', 'chat.reply.delivery': 'We provide planned logistics. Tell us the project address and desired quantity so we can check timing and availability.', 'chat.reply.hello': 'Hello! It is great to hear from you. I can help with products, pricing, delivery or location.', 'chat.reply.default': 'Got it. To guide you better, tell me the project type, desired material and approximate quantity. You can also continue directly with our team on WhatsApp.',
    'products.eyebrow': 'Superbritas catalog', 'products.title': 'Stone that supports <em>great projects.</em>', 'products.introEyebrow': 'Precision in every grain size', 'products.introTitle': 'A catalog designed to <em>build better.</em>', 'products.introCopy': 'Every material is selected and controlled for predictable jobsite performance. Find the ideal grain size for your application.',
    'product.dust': 'Stone dust', 'product.dustcopy': 'For earthworks, sub-bases, precast floor and cobblestone bedding, and asphalt mix production.',
    'product.b19': '19 mm crushed stone (3/4”)', 'product.b19copy': 'For structural concrete, paving, precast components and asphalt concrete.',
    'product.b17': '5/8 crushed stone', 'product.b17copy': 'For structural concrete, paving, precast components and asphalt concrete.',
    'product.b125': '1/2 crushed stone', 'product.b125copy': 'For blocks, precast components, light-duty pavements, high-strength floors and asphalt concrete.',
    'product.b95': '3/8 crushed stone', 'product.b95copy': 'For blocks, precast components, light-duty pavements, high-strength floors and asphalt concrete.',
    'product.b78': '7/8 crushed stone', 'product.b78copy': 'For structural concrete, paving and applications that require a larger aggregate.',
    'product.cascalho': 'Gravel', 'product.cascalhocopy': 'A versatile material for ground leveling, drainage, temporary access roads and pavement bases.',
    'product.rachao': 'Large crushed rock', 'product.rachaocopy': 'Large stone for bases, drainage, retaining structures, gabions, riprap and cyclopean concrete.',
    'product.raw': 'Raw stones', 'product.rawcopy': 'For dams, tidal riprap and erosion protection on embankments, slopes and structures.',
    'product.hand': 'Hand-cut stones', 'product.handcopy': 'Selected rock for paving, retaining walls, foundations, drainage and landscaping.',
    'product.b76': '76 mm crushed stone (3”)', 'product.b76copy': 'Ballast stone for rail beds, soil drainage and septic tank settling systems.',
    'product.b38': '38 mm crushed stone (2”)', 'product.b38copy': 'For high-strength concrete, foundations, thick floors, electrical substations and large pours.',
    'product.b25': '25 mm crushed stone (1”)', 'product.b25copy': 'For conventional or pumped concrete in buildings, columns, beams and slabs.',
    'product.graded': 'Graded crushed stone', 'product.gradedcopy': 'For bases and sub-bases on heavy-traffic roads, floors, yards and industrial sheds.',
    'product.gravel': 'Fine gravel', 'product.gravelcopy': 'Recommended for floors, finishes, light drainage and precast block production.', 'product.quote': 'Request a quote', 'product.more': 'View more', 'product.less': 'View less',
    'cart.volume': 'Desired volume', 'cart.add': 'Add to cart', 'cart.title': 'Your order note', 'cart.subtitle': 'Build your quote by volume', 'cart.empty': 'Your cart is empty. Choose the volume on the products above.', 'cart.total': 'Total volume', 'cart.items': 'items', 'cart.name': 'Your name', 'cart.location': 'City or project location', 'cart.note': 'This is a quote request. Prices, freight and availability will be confirmed by our sales team.', 'cart.send': 'Send order via WhatsApp', 'cart.remove': 'Remove', 'cart.dock': 'View cart',
    'about.eyebrow': 'About Superbritas', 'about.title': 'Our strength comes from <em>what we build together.</em>', 'about.storyEyebrow': 'A solid history', 'about.storyTitle': 'Work that transforms <em>territories.</em>', 'about.storyCopy': 'Superbritas brings Grupo São Vicente’s experience to the production of mineral aggregates for projects that drive development. We evolve through technology, responsibility and a team that deeply understands every stage of the operation.', 'about.storyCopy2': 'We do more than supply stone: we build trust. We plan, produce and deliver knowing that every great project begins with a solid foundation.', 'about.groupEyebrow': 'The strength of Grupo São Vicente', 'about.groupTitle': 'A structure that connects <em>regions.</em>', 'about.groupCopy': 'Grupo São Vicente brings together companies, technical expertise and operations that supply the construction industry across different regions of Bahia. From the Salvador Metropolitan Region to the far south of the state, its presence connects production, logistics and service for projects of every scale.', 'about.groupNote': 'In the far south, the operation serves Itagimirim, Eunápolis, Porto Seguro, Santa Cruz Cabrália, Itabela and nearby municipalities, delivering quality and dependable capacity to a strategic region.', 'about.groupTag1': 'Since 2004', 'about.groupTag2': 'Regional presence', 'about.groupTag3': 'Far South of Bahia', 'about.videoLabel': 'Institutional film', 'about.videoCaption': 'A story that moves Bahia forward', 'about.videoFallback': 'Your browser does not support video.', 'about.valuesEyebrow': 'What guides us', 'about.valuesTitle': 'Firm principles.<br>A future in motion.', 'about.v1': 'Safety', 'about.v1copy': 'Caring for people is the first step in every well-executed operation.', 'about.v2': 'Quality', 'about.v2copy': 'Control and consistency to deliver the expected performance in every project.', 'about.v3': 'Responsibility', 'about.v3copy': 'Respect for the land, conscious use of resources and long-term vision.',
    'about.terrainTab1': 'Terrain layers', 'about.terrainTab2': 'Consolidated deposit', 'about.terrainEyebrow': 'Technical reading of the land', 'about.terrainTitle': 'From terrain to the <em>mineral deposit.</em>', 'about.terrainCopy': 'Surface, topographic contours and geological structure move together as you scroll to reveal a single mineral formation.', 'about.terrainLayer1': 'Textured surface', 'about.terrainLayer2': 'Topographic model', 'about.terrainLayer3': 'Geological mass', 'about.terrainFinal': 'Deposit formed',
    'cta.title': 'Shall we build a solid partnership?', 'cta.button': 'Contact us', 'footer.line': 'Strength that transforms', 'footer.rights': 'All rights reserved'
  },
  zh: {
    'nav.home': '首页', 'nav.products': '产品', 'nav.about': '关于我们', 'nav.contact': '联系我们', 'nav.careers': '加入我们', 'nav.location': '位置',
    'hero.kicker': '推动未来的矿业力量', 'hero.title': '坚实基础，<em>筑就未来</em>', 'hero.copy': '以精准、责任与深耕本土的实力，提供高性能矿物骨料。', 'hero.products': '查看产品', 'hero.contact': '联系团队', 'hero.buy': '联系销售顾问', 'hero.scroll': '向下探索',
    'home.introEyebrow': 'Superbritas 品牌理念', 'home.introTitle': '从坚石出发，成就<em>宏伟事业</em>', 'home.introCopy': '我们将矿产资源转化为基础设施、发展与信任。凭借丰富运营经验、严格品控和高效物流，确保每一批产品品质如一。', 'home.introNote': '我们融合本土经验与长远视野，以安全、稳定的方式服务不同规模的工程项目。', 'home.stat1': '年以上行业经验', 'home.stat2': '合规质量控制', 'home.stat3': '高效物流响应',
    'home.productsEyebrow': '矿物产品系列', 'home.productsTitle': '针对每项挑战的<em>理想骨料</em>', 'home.productsLead': '为建筑、道路、排水及特殊应用提供精选粒径。', 'home.p1': '级配碎石', 'home.p1copy': '为基层和结构提供强度与稳定性。', 'home.p2': '特种石材', 'home.p2copy': '为排水和挡土工程提供耐用方案。', 'home.p3': '石粉', 'home.p3copy': '适用于铺设、找平和道路施工。', 'common.catalog': '查看完整目录',
    'home.aboutEyebrow': '我们的历程', 'home.aboutTitle': '巴西经验<br><em>全球视野</em>', 'home.aboutCopy': 'Superbritas 与城市、道路和人们共同成长。我们的故事建立在实干、紧密合作以及为未来打造坚实基础的承诺之上。', 'home.aboutLink': '了解 Superbritas',
    'home.locationEyebrow': '我们的位置', 'home.locationTitle': '找到 <em>Superbritas</em> 的力量', 'home.locationCopy': '查看我们的位置、规划路线，亲临现场了解我们的运营。', 'home.locationButton': '在 Google 地图中打开', 'home.address': '巴西巴伊亚州劳罗-迪弗雷塔斯 · Caji · 4444号',
    'partners.eyebrow': '合作企业', 'partners.title': '携手共建的<em>合作网络</em>', 'partners.copy': '以经验、信任和发展承诺紧密相连的品牌。',
    'chat.status': '快速服务 · 在线', 'chat.greeting': '您好！很高兴见到您 😊 我是 Vicentinho。开始之前，请问您来自巴西、中国，还是希望使用英语交流？', 'chat.products': '查看产品', 'chat.location': '查看位置', 'chat.contact': '联系销售团队', 'chat.whatsapp': '在 WhatsApp 中继续', 'chat.fast': '快速服务', 'chat.placeholder': '请输入您的国家或语言...', 'chat.conversationPlaceholder': '请简单介绍一下您的需求...', 'chat.languageRetry': '为了方便交流，请选择 Português、中文或 English。', 'chat.conversation': '很高兴接待您！最近怎么样？请简单说说，今天是什么让您来到 Superbritas？', 'chat.menuIntro': '很高兴对您有了更多了解！现在我可以更好地帮助您。请选择下方选项，也可以继续给我留言。', 'chat.reply.products': '我们提供多种粒径的碎石、特种石材和石粉。我可以帮助您为工程选择合适的材料。', 'chat.reply.location': '我们位于劳罗-迪弗雷塔斯 Caji，Santo Amaro de Ipitanga 大道 4444 号。位置页面提供完整地图和路线。', 'chat.reply.contact': '我可以立即通过 WhatsApp 为您联系销售团队，联系电话是 +55 71 99605-1876。', 'chat.reply.price': '价格根据材料、数量和交付地点而定。请通过 WhatsApp 发送数量和位置以获取报价。', 'chat.reply.delivery': '我们提供规划物流服务。请告知工程地址和所需数量，以便确认交付时间和库存。', 'chat.reply.hello': '您好！很高兴为您服务。我可以帮助解答产品、价格、配送或位置问题。', 'chat.reply.default': '明白了。为了更好地协助您，请说明工程类型、所需材料和大致数量。您也可以通过 WhatsApp 直接联系团队。',
    'products.eyebrow': 'Superbritas 产品目录', 'products.title': '坚固石材，支撑<em>宏伟工程</em>', 'products.introEyebrow': '每一种粒径都精准可靠', 'products.introTitle': '为卓越建设而设计的<em>产品目录</em>', 'products.introCopy': '我们严格筛选和控制每一种材料，确保工地性能稳定可预期。为您的应用选择理想粒径。',
    'product.dust': '石粉', 'product.dustcopy': '适用于土方工程、基层、预制地砖和铺路石铺设，以及沥青混合料生产。',
    'product.b19': '19毫米碎石（3/4英寸）', 'product.b19copy': '适用于结构混凝土、道路铺装、预制构件和沥青混凝土。',
    'product.b17': '5/8英寸碎石', 'product.b17copy': '适用于结构混凝土、道路铺装、预制构件和沥青混凝土。',
    'product.b125': '1/2英寸碎石', 'product.b125copy': '适用于砌块与预制构件、普通路面、高强度地坪和沥青混凝土。',
    'product.b95': '3/8英寸碎石', 'product.b95copy': '适用于砌块与预制构件、普通路面、高强度地坪和沥青混凝土。',
    'product.b78': '7/8英寸碎石', 'product.b78copy': '适用于结构混凝土、道路铺装以及需要较大粒径骨料的工程。',
    'product.cascalho': '砾石', 'product.cascalhocopy': '适用于场地平整、排水、临时道路和路面基层。',
    'product.rachao': '大块碎石', 'product.rachaocopy': '适用于基层、排水、挡土结构、石笼、抛石和毛石混凝土。',
    'product.raw': '原石', 'product.rawcopy': '用于水坝、护潮抛石以及保护填土、边坡和结构免受侵蚀。',
    'product.hand': '手选块石', 'product.handcopy': '精选石材，适用于铺路、挡墙、基础、排水和景观工程。',
    'product.b76': '76毫米碎石（3英寸）', 'product.b76copy': '也称道砟石，适用于铁路道床、土壤排水和化粪池沉淀系统。',
    'product.b38': '38毫米碎石（2英寸）', 'product.b38copy': '适用于高强度混凝土、基础、厚地坪、变电站和大体积浇筑。',
    'product.b25': '25毫米碎石（1英寸）', 'product.b25copy': '用于建筑、柱、梁和楼板的普通或泵送混凝土。',
    'product.graded': '级配碎石', 'product.gradedcopy': '用于重载道路的基层和底基层，以及地坪、场院和厂房。',
    'product.gravel': '细砾', 'product.gravelcopy': '适用于地坪、饰面、轻型排水和预制砌块生产。', 'product.quote': '获取报价', 'product.more': '查看更多', 'product.less': '收起内容',
    'cart.volume': '所需体积', 'cart.add': '加入购物车', 'cart.title': '您的订单清单', 'cart.subtitle': '按体积创建报价单', 'cart.empty': '购物车为空，请在上方产品中选择体积。', 'cart.total': '总体积', 'cart.items': '项产品', 'cart.name': '您的姓名', 'cart.location': '城市或工程地点', 'cart.note': '此订单为询价申请，价格、运费和库存将由销售团队确认。', 'cart.send': '通过 WhatsApp 发送订单', 'cart.remove': '删除', 'cart.dock': '查看购物车',
    'about.eyebrow': '关于 Superbritas', 'about.title': '我们的力量源于<em>携手共建</em>', 'about.storyEyebrow': '稳健历程', 'about.storyTitle': '实干改变<em>一方水土</em>', 'about.storyCopy': 'Superbritas 汇聚 Grupo São Vicente 的经验，为推动发展的工程生产矿物骨料。我们以技术、责任和深谙每个运营环节的团队持续进步。', 'about.storyCopy2': '我们不只供应石材，更建立信任。我们用心规划、生产和交付，因为每一项宏伟工程都始于坚实基础。', 'about.groupEyebrow': 'Grupo São Vicente 的实力', 'about.groupTitle': '连接不同<em>地区</em>的产业体系', 'about.groupCopy': 'Grupo São Vicente 汇聚多家企业、专业技术与运营能力，为巴伊亚州不同地区的建筑业提供支持。从萨尔瓦多都会区到该州最南部，集团以生产、物流和服务连接各种规模的工程。', 'about.groupNote': '在巴伊亚州最南部，业务覆盖 Itagimirim、Eunápolis、Porto Seguro、Santa Cruz Cabrália、Itabela 及周边城市，为这一战略区域提供可靠的品质与交付能力。', 'about.groupTag1': '始于 2004 年', 'about.groupTag2': '区域业务布局', 'about.groupTag3': '巴伊亚州最南部', 'about.videoLabel': '企业宣传片', 'about.videoCaption': '推动巴伊亚发展的历程', 'about.videoFallback': '您的浏览器不支持视频。', 'about.valuesEyebrow': '我们的原则', 'about.valuesTitle': '原则坚定<br>未来向前', 'about.v1': '安全', 'about.v1copy': '关爱每一个人，是高质量运营的第一步。', 'about.v2': '品质', 'about.v2copy': '以严格控制和稳定表现满足每个项目的需求。', 'about.v3': '责任', 'about.v3copy': '尊重土地、合理利用资源，坚持长远发展。',
    'about.terrainTab1': '地形图层', 'about.terrainTab2': '完整矿床', 'about.terrainEyebrow': '地貌技术分析', 'about.terrainTitle': '从地貌到<em>矿床</em>', 'about.terrainCopy': '随着页面滚动，地表、等高线模型与地质结构逐渐合拢，形成完整的矿体。', 'about.terrainLayer1': '纹理地表', 'about.terrainLayer2': '地形模型', 'about.terrainLayer3': '地质岩体', 'about.terrainFinal': '矿床形成',
    'cta.title': '让我们建立稳固的合作伙伴关系', 'cta.button': '联系我们', 'footer.line': '凝聚力量 · 创造未来', 'footer.rights': '版权所有'
  }
};

const header = document.querySelector('.site-header');
const menu = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const languageButtons = document.querySelectorAll('[data-lang]');
const headerLogo = document.querySelector('.brand img');
const salesWhatsappNumber = '5571996051876';
const desktopMenuParent = menu?.parentNode;
const desktopMenuAnchor = menu?.nextSibling;
const bottomMenuMedia = matchMedia('(max-width: 1100px)');

function syncMenuPlacement() {
  if (!menu || !desktopMenuParent) return;
  if (bottomMenuMedia.matches) {
    if (menu.parentNode !== document.body) document.body.appendChild(menu);
  } else if (menu.parentNode !== desktopMenuParent) {
    desktopMenuParent.insertBefore(menu, desktopMenuAnchor);
  }
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

if (bottomMenuMedia.addEventListener) bottomMenuMedia.addEventListener('change', syncMenuPlacement);
else bottomMenuMedia.addListener(syncMenuPlacement);
syncMenuPlacement();

function getCurrentLanguage() {
  return document.documentElement.lang.startsWith('zh') ? 'zh' : document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
}

function getSalesMessage(language, productName = '') {
  const languageNote = language === 'zh'
    ? ' Sou chinês e prefiro atendimento em chinês.'
    : language === 'en'
      ? ' Meu idioma é inglês e prefiro atendimento em inglês.'
      : '';
  const productNote = productName ? ` Tenho interesse no produto: ${productName}.` : '';
  return `Olá! Gostaria de falar com um vendedor da Superbritas.${productNote}${languageNote}`;
}

function getSalesWhatsappUrl(language, productName = '') {
  return `https://wa.me/${salesWhatsappNumber}?text=${encodeURIComponent(getSalesMessage(language, productName))}`;
}

function getProductName(card) {
  const label = card.querySelector('h2[data-i18n], h3[data-i18n]');
  return label ? (translations.pt[label.dataset.i18n] || label.textContent.trim()) : '';
}

function updateSalesContactLinks(language) {
  const selectors = [
    `a[href*="wa.me/${salesWhatsappNumber}"]`,
    'a[data-i18n="chat.contact"]',
    'a[data-i18n="nav.contact"]',
    'a[data-i18n="cta.button"]'
  ].join(',');

  document.querySelectorAll(selectors).forEach(link => {
    link.dataset.defaultHref ||= link.getAttribute('href');
    const originallyWhatsapp = link.dataset.defaultHref.includes('wa.me/');
    if (language !== 'pt' || originallyWhatsapp) {
      link.href = getSalesWhatsappUrl(language);
      link.target = '_blank';
      link.rel = 'noopener';
    } else {
      link.href = link.dataset.defaultHref;
    }
  });

  document.querySelectorAll('.catalog-card').forEach(card => {
    const contactable = !card.querySelector('[data-product-order]') && (language === 'zh' || language === 'en');
    card.classList.toggle('is-contactable', contactable);
    if (contactable) {
      card.tabIndex = 0;
      card.setAttribute('role', 'link');
      card.setAttribute('aria-label', `Falar com um vendedor sobre ${getProductName(card)}`);
    } else {
      card.removeAttribute('tabindex');
      card.removeAttribute('role');
      card.removeAttribute('aria-label');
    }
  });
}

const navIconMarkup = {
  home: '<path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10v10h13V10M9.5 20v-6h5v6"></path>',
  products: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path><path d="m4.5 7.7 7.5 4.2 7.5-4.2M12 12v9"></path>',
  about: '<circle cx="9" cy="8" r="3"></circle><path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V20"></path><circle cx="17" cy="9" r="2.4"></circle><path d="M15.5 14h1.8a3.7 3.7 0 0 1 3.7 3.7V20"></path>',
  contact: '<path d="M4 5h16v11H8l-4 4V5Z"></path><path d="m7 8 5 4 5-4"></path>',
  careers: '<rect x="3" y="7" width="18" height="12" rx="2"></rect><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2"></path>',
  location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle>'
};

function addNavIcons() {
  document.querySelectorAll('.main-nav [data-icon]').forEach(link => {
    if (link.querySelector('.nav-icon')) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'nav-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.7');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = navIconMarkup[link.dataset.icon] || '';
    link.prepend(svg);
  });
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.pt;
  const isChinese = language === 'zh';
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : language === 'zh' ? 'zh-CN' : 'en';
  document.body.classList.toggle('language-zh', isChinese);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    if (dictionary[element.dataset.i18n]) element.textContent = dictionary[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    if (dictionary[element.dataset.i18nHtml]) element.innerHTML = dictionary[element.dataset.i18nHtml];
  });
  languageButtons.forEach(button => button.classList.toggle('active', button.dataset.lang === language));
  document.querySelectorAll('[data-image-default][data-image-zh]').forEach(image => {
    image.src = isChinese ? image.dataset.imageZh : image.dataset.imageDefault;
    image.alt = isChinese ? (image.dataset.altZh || image.alt) : (image.dataset.altDefault || image.alt);
  });
  document.querySelectorAll('.chat-panel-head img').forEach(image => {
    image.src = isChinese ? 'assets/chat/vicentinho-china.png' : 'assets/chat/vicentinho.webp';
    image.alt = isChinese ? 'Vicentinho com chapéu tradicional chinês' : 'Vicentinho';
  });
  document.querySelectorAll('.chat-launch img').forEach(image => {
    image.src = isChinese ? 'assets/chat/vicentinho-china.png' : 'assets/chat/vicentinho-button.webp';
    image.alt = '';
  });
  updateSalesContactLinks(language);
  updateChinaMusicToggle();
  localStorage.setItem('superbritas-language', language);
  document.querySelector('[data-chat-input]')?.setAttribute('placeholder', dictionary['chat.placeholder']);
  addNavIcons();
  document.dispatchEvent(new CustomEvent('superbritas:languagechange', { detail: { language } }));
}

const languageScroll = document.createElement('div');
languageScroll.className = 'language-scroll-transition';
languageScroll.setAttribute('aria-hidden', 'true');
languageScroll.innerHTML = '<div class="real-scroll-shutter real-scroll-shutter-top"></div><div class="real-scroll-shutter real-scroll-shutter-bottom"></div><div class="real-scroll-paper"></div><div class="real-scroll-roller real-scroll-roller-top"></div><div class="real-scroll-roller real-scroll-roller-bottom"></div><div class="real-scroll-seal">华</div>';
document.body.append(languageScroll);

const chinesePageScroll = document.createElement('div');
chinesePageScroll.className = 'china-page-scroll-frame';
chinesePageScroll.setAttribute('aria-hidden', 'true');
chinesePageScroll.innerHTML = '<img src="assets/china-scroll-frame-v3.png" alt="">';
document.body.append(chinesePageScroll);

const chinesePageFilter = document.createElement('div');
chinesePageFilter.className = 'china-page-filter';
chinesePageFilter.setAttribute('aria-hidden', 'true');
document.body.append(chinesePageFilter);

const chineseAtmosphere = document.createElement('div');
chineseAtmosphere.className = 'china-atmosphere';
chineseAtmosphere.setAttribute('aria-hidden', 'true');
const chineseLeaves = Array.from({ length: 8 }, (_, index) => {
  const y = 7 + ((index * 17) % 84);
  const delay = -((index * 1.73) % 17).toFixed(2);
  const duration = 12 + (index % 5) * 1.9;
  const scale = (.58 + (index % 4) * .16).toFixed(2);
  return `<i class="china-leaf tone-${index % 3}" style="--leaf-y:${y}%;--leaf-delay:${delay}s;--leaf-duration:${duration}s;--leaf-scale:${scale}"></i>`;
}).join('');
chineseAtmosphere.innerHTML = `<div class="china-wind">${chineseLeaves}</div><div class="china-ambient-mark"><span>山水之间 · 匠心筑基</span><b>石</b></div>`;
document.body.append(chineseAtmosphere);

const chineseMusicToggle = document.createElement('button');
chineseMusicToggle.className = 'china-music-toggle';
chineseMusicToggle.type = 'button';
chineseMusicToggle.innerHTML = '<i aria-hidden="true">♫</i><span>音乐</span>';
document.body.append(chineseMusicToggle);

let chineseMusicMuted = localStorage.getItem('superbritas-china-music-muted') === 'true';

function updateChinaMusicToggle() {
  if (!chineseMusicToggle) return;
  chineseMusicToggle.classList.toggle('is-muted', chineseMusicMuted);
  chineseMusicToggle.setAttribute('aria-pressed', String(chineseMusicMuted));
  chineseMusicToggle.setAttribute('aria-label', chineseMusicMuted ? 'Ativar música chinesa' : 'Silenciar música chinesa');
  chineseMusicToggle.title = chineseMusicMuted ? 'Ativar música' : 'Silenciar música';
  chineseMusicToggle.querySelector('i').textContent = chineseMusicMuted ? '♪' : '♫';
  chineseMusicToggle.querySelector('span').textContent = chineseMusicMuted ? '静音' : '音乐';
}

let languageTransitionId = 0;
let activeLanguageTransition;
const languageAssetCache = new Map();
let chineseMusicContext;
let chineseMusicMaster;
let chineseMusicTimer = 0;
let chineseMusicStep = 0;
let chineseMusicStarting = false;

async function startChineseAmbientMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || chineseMusicMuted || navigator.connection?.saveData || chineseMusicTimer || chineseMusicStarting) return;

  try {
    chineseMusicStarting = true;
    chineseMusicContext ||= new AudioContextClass();
    const context = chineseMusicContext;
    await context.resume();
    if (context.state !== 'running') return;

    chineseMusicMaster = context.createGain();
    chineseMusicMaster.gain.setValueAtTime(.001, context.currentTime);
    chineseMusicMaster.gain.exponentialRampToValueAtTime(.075, context.currentTime + 1.8);
    chineseMusicMaster.connect(context.destination);

    const pentatonic = [220, 247, 294, 330, 392];
    const melody = [0, 2, 4, 2, 1, 3, 2, 0, 1, 2, 4, 3];
    const playNote = () => {
      if (!chineseMusicMaster || context.state !== 'running') return;
      const now = context.currentTime + .03;
      const frequency = pentatonic[melody[chineseMusicStep % melody.length]];
      const oscillator = context.createOscillator();
      const harmonic = context.createOscillator();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();
      oscillator.type = 'triangle';
      harmonic.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, now);
      harmonic.frequency.setValueAtTime(frequency * 2, now);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1150, now);
      filter.frequency.exponentialRampToValueAtTime(520, now + 2.9);
      gain.gain.setValueAtTime(.001, now);
      gain.gain.exponentialRampToValueAtTime(.12, now + .18);
      gain.gain.exponentialRampToValueAtTime(.001, now + 3.1);
      oscillator.connect(filter);
      harmonic.connect(filter);
      filter.connect(gain).connect(chineseMusicMaster);
      oscillator.start(now);
      harmonic.start(now);
      oscillator.stop(now + 3.15);
      harmonic.stop(now + 3.15);
      chineseMusicStep += 1;
    };

    playNote();
    chineseMusicTimer = window.setInterval(playNote, 1380);
  } catch (error) {
    // Music is progressive enhancement; language switching must remain available.
  } finally {
    chineseMusicStarting = false;
  }
}

function stopChineseAmbientMusic() {
  window.clearInterval(chineseMusicTimer);
  chineseMusicTimer = 0;
  if (!chineseMusicMaster || !chineseMusicContext) return;
  const now = chineseMusicContext.currentTime;
  chineseMusicMaster.gain.cancelScheduledValues(now);
  chineseMusicMaster.gain.setValueAtTime(Math.max(chineseMusicMaster.gain.value, .001), now);
  chineseMusicMaster.gain.exponentialRampToValueAtTime(.001, now + .8);
  const masterToDisconnect = chineseMusicMaster;
  chineseMusicMaster = null;
  window.setTimeout(() => masterToDisconnect.disconnect(), 900);
}

function preloadLanguageImage(source) {
  if (!source) return Promise.resolve();
  const url = new URL(source, document.baseURI).href;
  if (languageAssetCache.has(url)) return languageAssetCache.get(url);

  const loading = new Promise(resolve => {
    const image = new Image();
    const finish = async () => {
      try {
        if (image.decode) await image.decode();
      } catch (error) {
        // A loaded image can still be used when decode() is unavailable.
      }
      resolve();
    };
    image.addEventListener('load', finish, { once: true });
    image.addEventListener('error', resolve, { once: true });
    image.src = url;
  });

  languageAssetCache.set(url, loading);
  return loading;
}

function prepareLanguageAssets(language) {
  if (language !== 'zh') return Promise.resolve();

  const sources = [
    ...document.querySelectorAll('[data-image-zh]')
  ].map(image => image.dataset.imageZh);
  sources.push('assets/chat/vicentinho-china.png', 'assets/china-scroll-frame-v3.png');
  if (document.body.dataset.page === 'products') sources.push('assets/hero-china-bridge.png');
  if (document.body.dataset.page === 'about') sources.push('assets/hero-china-lake.png');

  return Promise.all(sources.map(preloadLanguageImage));
}

const waitForLanguageTransition = duration => new Promise(resolve => window.setTimeout(resolve, duration));
const waitForLanguagePaint = () => new Promise(resolve => {
  window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
});

function clearLanguageTransition() {
  languageScroll.className = 'language-scroll-transition';
  document.documentElement.classList.remove('language-scroll-switching');
  document.body.classList.remove('language-transition-active');
  languageButtons.forEach(button => button.removeAttribute('aria-busy'));
}

async function runChineseScrollTransition(language, transitionId) {
  const enteringChinese = language === 'zh';
  activeLanguageTransition?.skipTransition();
  activeLanguageTransition = null;
  document.documentElement.classList.remove('language-view-transition');
  document.documentElement.classList.add('language-scroll-switching');
  document.body.classList.add('language-transition-active');
  languageScroll.className = `language-scroll-transition is-active${enteringChinese ? '' : ' is-ready-to-close'}`;

  // Wait until the overlay is opaque before changing layout or image sources.
  await waitForLanguageTransition(120);
  if (transitionId !== languageTransitionId) return;

  if (enteringChinese) {
    applyLanguage(language);
    await waitForLanguagePaint();
    if (transitionId !== languageTransitionId) return;
    languageScroll.classList.add('is-opening');
    await waitForLanguageTransition(740);
  } else {
    void languageScroll.offsetWidth;
    languageScroll.classList.add('is-closing');
    await waitForLanguageTransition(700);
    if (transitionId !== languageTransitionId) return;
    applyLanguage(language);
    await waitForLanguagePaint();
  }

  if (transitionId !== languageTransitionId) return;
  languageScroll.classList.add('is-dismissing');
  await waitForLanguageTransition(140);
  if (transitionId === languageTransitionId) clearLanguageTransition();
}

chineseMusicToggle.addEventListener('click', event => {
  event.stopPropagation();
  chineseMusicMuted = !chineseMusicMuted;
  localStorage.setItem('superbritas-china-music-muted', String(chineseMusicMuted));
  updateChinaMusicToggle();
  if (chineseMusicMuted) stopChineseAmbientMusic();
  else if (getCurrentLanguage() === 'zh') startChineseAmbientMusic();
});

async function setLanguage(language, animate = true) {
  const transitionId = ++languageTransitionId;
  const currentLanguage = getCurrentLanguage();
  if (language === currentLanguage) {
    activeLanguageTransition?.skipTransition();
    activeLanguageTransition = null;
    document.documentElement.classList.remove('language-view-transition');
    clearLanguageTransition();
    languageButtons.forEach(button => button.classList.toggle('active', button.dataset.lang === language));
    return;
  }

  if (language !== 'zh') stopChineseAmbientMusic();
  languageButtons.forEach(button => button.classList.toggle('active', button.dataset.lang === language));
  languageButtons.forEach(button => button.setAttribute('aria-busy', 'true'));

  await prepareLanguageAssets(language);
  if (transitionId !== languageTransitionId) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canAnimate = animate && !reduceMotion;
  const isChineseChange = language === 'zh' || currentLanguage === 'zh';
  if (canAnimate && isChineseChange) {
    await runChineseScrollTransition(language, transitionId);
    return;
  }

  const canCrossfade = canAnimate && typeof document.startViewTransition === 'function';
  if (!canCrossfade) {
    applyLanguage(language);
    languageButtons.forEach(button => button.removeAttribute('aria-busy'));
    return;
  }

  activeLanguageTransition?.skipTransition();
  document.documentElement.classList.add('language-view-transition');
  const transition = document.startViewTransition(() => applyLanguage(language));
  activeLanguageTransition = transition;

  try {
    await transition.finished;
  } finally {
    if (transitionId === languageTransitionId) {
      document.documentElement.classList.remove('language-view-transition');
      languageButtons.forEach(button => button.removeAttribute('aria-busy'));
      activeLanguageTransition = null;
    }
  }
}

languageButtons.forEach(button => button.addEventListener('click', () => {
  if (button.dataset.lang === 'zh') startChineseAmbientMusic();
  setLanguage(button.dataset.lang);
}));
const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
applyLanguage(translations[requestedLanguage] ? requestedLanguage : (localStorage.getItem('superbritas-language') || 'pt'));
const scheduleLanguagePreload = window.requestIdleCallback || (callback => window.setTimeout(callback, 800));
scheduleLanguagePreload(() => prepareLanguageAssets('zh'), { timeout: 2500 });
document.addEventListener('pointerdown', () => {
  if (document.body.classList.contains('language-zh')) startChineseAmbientMusic();
}, { passive: true });

function openProductSalesContact(card, event) {
  if (card.querySelector('[data-product-order]')) return;
  const language = getCurrentLanguage();
  if (language === 'pt') return;
  event.preventDefault();
  window.open(getSalesWhatsappUrl(language, getProductName(card)), '_blank', 'noopener');
}

document.querySelectorAll('[data-mineral-card]').forEach(card => {
  card.addEventListener('click', event => openProductSalesContact(card, event));
});

document.querySelectorAll('.catalog-card').forEach(card => {
  card.addEventListener('click', event => openProductSalesContact(card, event));
  card.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && getCurrentLanguage() !== 'pt') {
      openProductSalesContact(card, event);
    }
  });
});

const productCart = document.querySelector('[data-product-cart]');
if (productCart) {
  const cartStorageKey = 'superbritas-product-cart-v1';
  const productCards = [...document.querySelectorAll('.catalog-card')];
  const cartItems = productCart.querySelector('[data-cart-items]');
  const cartTotal = productCart.querySelector('[data-cart-total]');
  const cartWhatsapp = productCart.querySelector('[data-cart-whatsapp]');
  const cartName = productCart.querySelector('[data-cart-name]');
  const cartLocation = productCart.querySelector('[data-cart-location]');
  const receiptDate = productCart.querySelector('[data-receipt-date]');
  const cartDock = document.querySelector('[data-cart-dock]');
  const cartCount = document.querySelector('[data-cart-count]');
  const cartClose = productCart.querySelector('[data-cart-close]');
  const allowedProductKeys = productCards.map(card => card.querySelector('h2[data-i18n]')?.dataset.i18n).filter(Boolean);
  let cart = {};

  const closeProductCart = () => {
    const wasOpen = productCart.classList.contains('is-open');
    productCart.classList.remove('is-open');
    productCart.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-modal-open');
    productCart.hidden = true;
    if (wasOpen) cartDock.focus();
  };

  const openProductCart = () => {
    if (!Object.values(cart).some(volume => Number(volume) > 0)) return;
    productCart.hidden = false;
    productCart.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-modal-open');
    void productCart.offsetWidth;
    productCart.classList.add('is-open');
    cartClose.focus();
  };

  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '{}');
    cart = Object.fromEntries(Object.entries(savedCart).filter(([key, volume]) => allowedProductKeys.includes(key) && Number(volume) > 0));
  } catch {
    cart = {};
  }

  const normalizeVolume = value => Math.max(0, Math.round((Number(String(value).replace(',', '.')) || 0) * 2) / 2);
  const formatVolume = value => new Intl.NumberFormat(getCurrentLanguage() === 'pt' ? 'pt-BR' : getCurrentLanguage() === 'zh' ? 'zh-CN' : 'en', { maximumFractionDigits: 1 }).format(value);

  function renderProductCart() {
    const dictionary = translations[getCurrentLanguage()] || translations.pt;
    const entries = Object.entries(cart).filter(([, volume]) => volume > 0);
    const totalVolume = entries.reduce((total, [, volume]) => total + Number(volume), 0);
    cartItems.replaceChildren();

    if (!entries.length) {
      const empty = document.createElement('p');
      empty.className = 'receipt-empty';
      empty.dataset.i18n = 'cart.empty';
      empty.textContent = dictionary['cart.empty'];
      cartItems.appendChild(empty);
    } else {
      entries.forEach(([key, volume]) => {
        const item = document.createElement('div');
        item.className = 'receipt-item';

        const name = document.createElement('span');
        name.className = 'receipt-item-name';
        name.textContent = dictionary[key] || translations.pt[key] || key;

        const amount = document.createElement('strong');
        amount.className = 'receipt-item-volume';
        amount.textContent = `${formatVolume(volume)} m³`;

        const remove = document.createElement('button');
        remove.className = 'receipt-remove';
        remove.type = 'button';
        remove.dataset.removeCartItem = key;
        remove.textContent = dictionary['cart.remove'];
        remove.setAttribute('aria-label', `${dictionary['cart.remove']} ${name.textContent}`);

        item.append(name, amount, remove);
        cartItems.appendChild(item);
      });
    }

    cartTotal.textContent = `${formatVolume(totalVolume)} m³`;
    cartCount.textContent = String(entries.length);
    cartWhatsapp.disabled = entries.length === 0;
    cartDock.disabled = entries.length === 0;
    cartDock.classList.toggle('has-items', entries.length > 0);
    if (!entries.length && !productCart.hidden) closeProductCart();
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));

    const locale = getCurrentLanguage() === 'pt' ? 'pt-BR' : getCurrentLanguage() === 'zh' ? 'zh-CN' : 'en';
    receiptDate.textContent = new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
  }

  productCards.forEach(card => {
    const copy = card.querySelector('.catalog-copy');
    const productKey = copy?.querySelector('h2[data-i18n]')?.dataset.i18n;
    if (!copy || !productKey) return;

    const order = document.createElement('div');
    order.className = 'product-order';
    order.dataset.productOrder = productKey;
    const siteDictionary = translations[getCurrentLanguage()] || translations.pt;
    order.innerHTML = `<span class="product-order-label" data-i18n="cart.volume">${siteDictionary['cart.volume']}</span><div class="quantity-picker"><button type="button" data-volume-step="-.5" aria-label="Diminuir volume">−</button><input type="number" min="0" step="0.5" value="0" inputmode="decimal" aria-label="Volume em metros cúbicos"><button type="button" data-volume-step=".5" aria-label="Aumentar volume">+</button><span>m³</span></div><button class="cart-add" type="button" data-cart-add data-i18n="cart.add" disabled>${siteDictionary['cart.add']}</button>`;
    const specs = copy.querySelector('.specs');
    if (specs) copy.insertBefore(order, specs);
    else copy.appendChild(order);

    const input = order.querySelector('input');
    const addButton = order.querySelector('[data-cart-add]');
    input.value = '0';
    const updateProductButton = () => { addButton.disabled = normalizeVolume(input.value) === 0; };
    order.querySelectorAll('[data-volume-step]').forEach(button => button.addEventListener('click', () => {
      input.value = String(normalizeVolume(Number(input.value) + Number(button.dataset.volumeStep)));
      updateProductButton();
    }));
    input.addEventListener('input', updateProductButton);
    input.addEventListener('change', () => { input.value = String(normalizeVolume(input.value)); updateProductButton(); });
    addButton.addEventListener('click', event => {
      const volume = normalizeVolume(input.value);
      if (volume === 0) return;
      cart[productKey] = volume;
      renderProductCart();
      const button = event.currentTarget;
      button.classList.add('is-added');
      button.textContent = `✓ ${formatVolume(volume)} m³`;
      window.setTimeout(() => {
        button.classList.remove('is-added');
        button.textContent = (translations[getCurrentLanguage()] || translations.pt)['cart.add'];
      }, 1200);
    });
  });

  cartItems.addEventListener('click', event => {
    const button = event.target.closest('[data-remove-cart-item]');
    if (!button) return;
    delete cart[button.dataset.removeCartItem];
    renderProductCart();
  });

  cartDock.addEventListener('click', openProductCart);
  cartClose.addEventListener('click', closeProductCart);
  productCart.addEventListener('click', event => { if (event.target === productCart) closeProductCart(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !productCart.hidden) closeProductCart();
  });
  cartWhatsapp.addEventListener('click', () => {
    const language = getCurrentLanguage();
    const dictionary = translations[language] || translations.pt;
    const entries = Object.entries(cart).filter(([, volume]) => volume > 0);
    if (!entries.length) return;
    const totalVolume = entries.reduce((total, [, volume]) => total + Number(volume), 0);
    const lines = entries.map(([key, volume]) => `• ${dictionary[key] || translations.pt[key]} — ${formatVolume(volume)} m³`);
    const customerName = cartName.value.trim();
    const customerLocation = cartLocation.value.trim();
    const headers = language === 'zh'
      ? { hello: '您好！我想向 Superbritas 申请以下产品报价：', total: '总体积', name: '姓名', location: '工程地点' }
      : language === 'en'
        ? { hello: 'Hello! I would like to request a quote from Superbritas for:', total: 'Total volume', name: 'Name', location: 'Project location' }
        : { hello: 'Olá! Gostaria de solicitar uma cotação da Superbritas para:', total: 'Volume total', name: 'Nome', location: 'Cidade/local da obra' };
    const message = [headers.hello, '', ...lines, '', `${headers.total}: ${formatVolume(totalVolume)} m³`, customerName && `${headers.name}: ${customerName}`, customerLocation && `${headers.location}: ${customerLocation}`].filter(Boolean).join('\n');
    window.open(`https://wa.me/${salesWhatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });

  document.addEventListener('superbritas:languagechange', renderProductCart);
  updateSalesContactLinks(getCurrentLanguage());
  renderProductCart();
}

const productDetailCards = [...document.querySelectorAll('.catalog-card')];
productDetailCards.forEach(card => {
  const copy = card.querySelector('.catalog-copy');
  const specs = copy?.querySelector('.specs');
  if (!copy || !specs) return;
  const button = document.createElement('button');
  button.className = 'product-more';
  button.type = 'button';
  button.dataset.i18n = 'product.more';
  button.setAttribute('aria-expanded', 'false');
  button.textContent = (translations[getCurrentLanguage()] || translations.pt)['product.more'];
  copy.insertBefore(button, specs);
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    const willExpand = !card.classList.contains('is-expanded');
    productDetailCards.forEach(otherCard => {
      otherCard.classList.remove('is-expanded');
      const otherButton = otherCard.querySelector('.product-more');
      if (!otherButton) return;
      otherButton.dataset.i18n = 'product.more';
      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.textContent = (translations[getCurrentLanguage()] || translations.pt)['product.more'];
    });
    if (!willExpand) return;
    card.classList.add('is-expanded');
    button.dataset.i18n = 'product.less';
    button.setAttribute('aria-expanded', 'true');
    button.textContent = (translations[getCurrentLanguage()] || translations.pt)['product.less'];
    window.setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 40);
  });
});

function updateHeader() {
  if (header) {
    const blueHeader = window.scrollY > 45;
    header.classList.toggle('scrolled', window.scrollY > 45);
    if (headerLogo) headerLogo.src = blueHeader ? 'assets/superbritas-blue.png' : 'assets/superbritas-outline.png';
  }
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const currentPage = document.body.dataset.page;
document.querySelectorAll(`[data-page-link="${currentPage}"]`).forEach(link => link.classList.add('active'));

document.querySelectorAll('[data-mobile-carousel]').forEach(carousel => {
  const track = carousel.querySelector('[data-carousel-track]');
  const cards = track ? [...track.children] : [];
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const status = carousel.querySelector('[data-carousel-status]');
  if (!track || !cards.length || !previous || !next || !status) return;
  let activeIndex = 0;
  let updateFrame = 0;

  const updateStatus = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    activeIndex = cards.reduce((best, card, index) => {
      const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2;
      const bestCard = cards[best];
      const bestCenter = bestCard.offsetLeft - track.offsetLeft + bestCard.offsetWidth / 2;
      return Math.abs(cardCenter - center) < Math.abs(bestCenter - center) ? index : best;
    }, 0);
    status.textContent = `${activeIndex + 1} / ${cards.length}`;
  };

  const goTo = index => {
    activeIndex = (index + cards.length) % cards.length;
    const destination = cards[activeIndex].offsetLeft - track.offsetLeft;
    track.scrollTo({ left: destination, behavior: 'smooth' });
    status.textContent = `${activeIndex + 1} / ${cards.length}`;
  };

  previous.addEventListener('click', () => goTo(activeIndex - 1));
  next.addEventListener('click', () => goTo(activeIndex + 1));
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(updateFrame);
    updateFrame = requestAnimationFrame(updateStatus);
  }, { passive: true });
  window.addEventListener('resize', updateStatus, { passive: true });
  updateStatus();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${(index % 3) * 80}ms`;
  revealObserver.observe(element);
});

document.querySelectorAll('[data-year]').forEach(element => element.textContent = new Date().getFullYear());

const chatWidget = document.querySelector('.chat-widget');
const chatLaunch = document.querySelector('.chat-launch');
const chatPanel = document.querySelector('.chat-panel');
const chatBody = document.querySelector('.chat-body');
let chatThread;
let chatStage = 'language';
let chatLanguage = null;
let chatReturnFocus = null;

function currentDictionary() {
  const language = chatLanguage || (document.documentElement.lang.startsWith('zh') ? 'zh' : document.documentElement.lang.startsWith('en') ? 'en' : 'pt');
  return translations[language];
}

function detectChatLanguage(message) {
  const clean = message.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (/[\u3400-\u9fff]/.test(message) || /\b(china|chines(?:a|es|as)?|chinese|mandarim|mandarin|zh)\b/.test(clean)) return 'zh';
  if (/\b(english|ingles|england|united states|usa|uk|hello|hi|hey)\b/.test(clean)) return 'en';
  if (/\b(brasil|brazil|brasileir[oa]s?|portuguesa?|portuguese|pt-br|ola|oi)\b/.test(clean)) return 'pt';
  return null;
}

function appendChatMessage(text, type = 'bot') {
  if (!chatThread) return;
  const bubble = document.createElement('p');
  bubble.className = `chat-message${type === 'user' ? ' user' : ''}`;
  bubble.textContent = text;
  chatThread.appendChild(bubble);
  chatThread.scrollTop = chatThread.scrollHeight;
}

function chooseChatReply(message) {
  const clean = message.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const dictionary = currentDictionary();
  if (/(produto|brita|pedra|po de pedra|material|aggregate|stone|product|碎石|石粉|产品)/.test(clean)) return dictionary['chat.reply.products'];
  if (/(preco|valor|cotacao|orcamento|price|quote|cost|价格|报价)/.test(clean)) return dictionary['chat.reply.price'];
  if (/(onde|local|endereco|mapa|rota|where|address|location|位置|地址|地图)/.test(clean)) return dictionary['chat.reply.location'];
  if (/(entrega|frete|prazo|delivery|shipping|物流|配送)/.test(clean)) return dictionary['chat.reply.delivery'];
  if (/(comercial|vendedor|atendente|telefone|contato|sales|contact|phone|销售|联系)/.test(clean)) return dictionary['chat.reply.contact'];
  if (/^(oi|ola|bom dia|boa tarde|boa noite|hello|hi|hey|您好|你好)/.test(clean)) return dictionary['chat.reply.hello'];
  return dictionary['chat.reply.default'];
}

function answerChat(message, forcedKey, onAnswered) {
  if (!chatThread) return;
  const dictionary = currentDictionary();
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.innerHTML = '<i></i><i></i><i></i>';
  chatThread.appendChild(typing);
  chatThread.scrollTop = chatThread.scrollHeight;
  window.setTimeout(() => {
    typing.remove();
    appendChatMessage(forcedKey ? dictionary[forcedKey] : chooseChatReply(message));
    onAnswered?.();
  }, 720);
}

if (chatBody) {
  chatThread = document.createElement('div');
  chatThread.className = 'chat-thread';
  const greeting = chatBody.querySelector('.chat-message');
  if (greeting) chatThread.appendChild(greeting);
  chatBody.prepend(chatThread);

  const chatForm = document.createElement('form');
  chatForm.className = 'chat-form';
  chatForm.innerHTML = '<input class="chat-input" data-chat-input autocomplete="off" aria-label="Mensagem para o Vicentinho"><button class="chat-send" type="submit" aria-label="Enviar mensagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m4 4 17 8-17 8 3-8-3-8Z"></path><path d="M7 12h14"></path></svg></button>';
  const whatsappLink = chatBody.querySelector('.chat-whatsapp');
  const chatActions = chatBody.querySelector('.chat-actions');
  chatActions.hidden = true;
  whatsappLink.hidden = true;

  const languageChoices = document.createElement('div');
  languageChoices.className = 'chat-language-choices';
  languageChoices.setAttribute('aria-label', 'Escolha o idioma do atendimento');
  languageChoices.innerHTML = '<button type="button" data-chat-language="pt">🇧🇷 Brasil · Português</button><button type="button" data-chat-language="zh">🇨🇳 中国 · 中文</button><button type="button" data-chat-language="en">🌎 English</button>';
  chatBody.insertBefore(languageChoices, chatActions);
  chatBody.insertBefore(chatForm, whatsappLink);
  const chatInput = chatForm.querySelector('[data-chat-input]');
  chatInput.placeholder = currentDictionary()['chat.placeholder'];

  const revealChatMenu = () => {
    chatActions.hidden = false;
    whatsappLink.hidden = false;
    chatActions.classList.add('is-visible');
    whatsappLink.classList.add('is-visible');
    chatInput.placeholder = currentDictionary()['chat.placeholder'];
  };

  const selectChatLanguage = async language => {
    chatLanguage = language;
    chatStage = 'conversation';
    languageChoices.hidden = true;
    chatInput.disabled = true;
    if (language === 'zh') startChineseAmbientMusic();
    await setLanguage(language, false);
    chatInput.placeholder = currentDictionary()['chat.conversationPlaceholder'];
    answerChat('', 'chat.conversation', () => {
      chatInput.disabled = false;
      chatInput.focus();
    });
  };

  languageChoices.querySelectorAll('[data-chat-language]').forEach(button => {
    button.addEventListener('click', () => {
      appendChatMessage(button.textContent.trim(), 'user');
      selectChatLanguage(button.dataset.chatLanguage);
    });
  });

  chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    appendChatMessage(message, 'user');
    chatInput.value = '';
    if (chatStage === 'language') {
      const detectedLanguage = detectChatLanguage(message);
      if (detectedLanguage) selectChatLanguage(detectedLanguage);
      else answerChat(message, 'chat.languageRetry');
      return;
    }
    if (chatStage === 'conversation') {
      chatStage = 'menu';
      chatInput.disabled = true;
      answerChat(message, 'chat.menuIntro', () => {
        revealChatMenu();
        chatInput.disabled = false;
        chatInput.focus();
      });
      return;
    }
    answerChat(message);
  });

  const quickReplyKeys = ['chat.reply.products', 'chat.reply.location', 'chat.reply.contact'];
  chatBody.querySelectorAll('.chat-option').forEach((option, index) => option.addEventListener('click', event => {
    event.preventDefault();
    appendChatMessage(option.textContent.trim(), 'user');
    answerChat(option.textContent, quickReplyKeys[index]);
  }));
}

function setChat(open) {
  if (!chatWidget) return;
  if (open) chatReturnFocus = document.activeElement;
  chatWidget.classList.toggle('open', open);
  document.body.classList.toggle('chat-open', open);
  chatLaunch?.setAttribute('aria-expanded', String(open));
  chatPanel?.setAttribute('aria-hidden', String(!open));
  if (chatPanel) {
    if (open && matchMedia('(max-width: 620px)').matches) chatPanel.setAttribute('aria-modal', 'true');
    else chatPanel.removeAttribute('aria-modal');
  }
  if (open) window.setTimeout(() => document.querySelector('[data-chat-input]')?.focus(), 280);
  else if (chatReturnFocus instanceof HTMLElement) window.setTimeout(() => chatReturnFocus.focus(), 0);
}
chatLaunch?.addEventListener('click', () => setChat(!chatWidget.classList.contains('open')));
document.querySelector('.chat-close')?.addEventListener('click', () => setChat(false));
document.querySelectorAll('[data-open-chat]').forEach(trigger => trigger.addEventListener('click', event => { event.preventDefault(); setChat(true); }));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setChat(false);
  if (event.key !== 'Tab' || !chatWidget?.classList.contains('open') || !matchMedia('(max-width: 620px)').matches || !chatPanel) return;
  const focusable = [...chatPanel.querySelectorAll('button:not([disabled]),a[href],input:not([disabled])')]
    .filter(element => !element.hidden && element.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
if (window.location.hash === '#atendimento') setChat(true);

const hero = document.querySelector('.home-hero');
if (hero && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('mousemove', event => {
    const bounds = hero.getBoundingClientRect();
    const x = Math.max(-.5, Math.min(.5, (event.clientX - bounds.left) / bounds.width - .5));
    const y = Math.max(-.5, Math.min(.5, (event.clientY - bounds.top) / bounds.height - .5));
    hero.style.setProperty('--cover-shift-x', `${x * 8}px`);
    hero.style.setProperty('--cover-shift-y', `${y * 5}px`);
    hero.style.setProperty('--wordmark-shift-x', `${x * 13}px`);
    hero.style.setProperty('--wordmark-shift-y', `${y * 8}px`);
    hero.style.setProperty('--copy-shift-x', `${x * -7}px`);
    hero.style.setProperty('--copy-shift-y', `${y * -5}px`);
    hero.style.setProperty('--island-shift-x', `${x * 11}px`);
    hero.style.setProperty('--island-shift-y', `${y * 7}px`);
  });
  hero.addEventListener('mouseleave', () => {
    ['--cover-shift-x', '--cover-shift-y', '--wordmark-shift-x', '--wordmark-shift-y', '--copy-shift-x', '--copy-shift-y', '--island-shift-x', '--island-shift-y']
      .forEach(property => hero.style.removeProperty(property));
  });
}

const slides = [...document.querySelectorAll('.hero-slide')];
const carouselDots = [...document.querySelectorAll('[data-carousel-dot]')];
const heroWordmarkStack = document.querySelector('.hero-wordmark-stack');
const heroCutoutOverlays = [...document.querySelectorAll('[data-cutout-slide]')];
if (slides.length > 1) {
  let currentSlide = 0;
  let carouselTimer;
  const showSlide = index => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
    carouselDots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentSlide));
    heroCutoutOverlays.forEach(overlay => overlay.classList.toggle('active', Number(overlay.dataset.cutoutSlide) === currentSlide));
    hero?.classList.toggle('is-island-active', currentSlide === 1);
    if (heroWordmarkStack) {
      heroWordmarkStack.classList.remove('is-zooming');
      void heroWordmarkStack.offsetWidth;
      heroWordmarkStack.classList.add('is-zooming');
    }
  };
  const startCarousel = () => {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => showSlide(currentSlide + 1), 6500);
  };
  document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
  document.querySelector('[data-carousel-next]')?.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
  carouselDots.forEach(dot => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.carouselDot)); startCarousel(); }));
  hero?.addEventListener('mouseenter', () => clearInterval(carouselTimer));
  hero?.addEventListener('mouseleave', startCarousel);
  showSlide(0);
  startCarousel();
}

if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let heroScrollFrame = 0;
  const updateHeroDepth = () => {
    const bounds = hero.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -bounds.top / Math.max(bounds.height * .86, 1)));
    hero.style.setProperty('--cloud-scroll-y', `${progress * -72}px`);
    hero.style.setProperty('--cloud-scroll-x', `${progress * 54}px`);
    hero.style.setProperty('--island-scroll-x', `${progress * -36}px`);
    hero.style.setProperty('--island-scroll-y', `${progress * -110}px`);
    hero.style.setProperty('--island-scroll-rotate', `${progress * -2.2}deg`);
    heroScrollFrame = 0;
  };
  const requestHeroDepth = () => {
    if (!heroScrollFrame) heroScrollFrame = window.requestAnimationFrame(updateHeroDepth);
  };
  updateHeroDepth();
  window.addEventListener('scroll', requestHeroDepth, { passive: true });
  window.addEventListener('resize', requestHeroDepth);
}

const mineralCarousel = document.querySelector('[data-mineral-carousel]');

if (mineralCarousel) {
  const mineralCards = [...mineralCarousel.querySelectorAll('[data-mineral-card]')];
  const mineralCurrent = mineralCarousel.querySelector('[data-portfolio-current]');
  const previousMineral = mineralCarousel.querySelector('[data-portfolio-prev]');
  const nextMineral = mineralCarousel.querySelector('[data-portfolio-next]');
  const reducePortfolioMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeMineral = Math.min(1, mineralCards.length - 1);
  let portfolioTimer;
  let pointerStart = null;

  const paintMineralCarousel = () => {
    mineralCards.forEach((card, index) => {
      let offset = index - activeMineral;
      if (offset > mineralCards.length / 2) offset -= mineralCards.length;
      if (offset < -mineralCards.length / 2) offset += mineralCards.length;
      card.dataset.offset = String(offset);
      card.classList.toggle('active', offset === 0);
      card.setAttribute('aria-current', offset === 0 ? 'true' : 'false');
    });
    if (mineralCurrent) mineralCurrent.textContent = String(activeMineral + 1).padStart(2, '0');
  };

  const showMineral = index => {
    const nextIndex = (index + mineralCards.length) % mineralCards.length;
    if (nextIndex === activeMineral) return;
    let travel = nextIndex - activeMineral;
    if (travel > mineralCards.length / 2) travel -= mineralCards.length;
    if (travel < -mineralCards.length / 2) travel += mineralCards.length;
    const entryClass = travel < 0 ? 'entering-from-left' : 'entering-from-right';
    mineralCards.forEach(card => card.classList.remove('entering-from-left', 'entering-from-right'));
    activeMineral = nextIndex;
    paintMineralCarousel();
    const incomingCard = mineralCards[activeMineral];
    void incomingCard.offsetWidth;
    incomingCard.classList.add(entryClass);
    window.setTimeout(() => incomingCard.classList.remove(entryClass), 850);
  };

  const startPortfolioCarousel = () => {
    window.clearInterval(portfolioTimer);
    if (!reducePortfolioMotion) portfolioTimer = window.setInterval(() => showMineral(activeMineral + 1), 5200);
  };

  previousMineral?.addEventListener('click', () => { showMineral(activeMineral - 1); startPortfolioCarousel(); });
  nextMineral?.addEventListener('click', () => { showMineral(activeMineral + 1); startPortfolioCarousel(); });
  mineralCards.forEach((card, index) => card.addEventListener('click', event => {
    if (index === activeMineral) return;
    event.preventDefault();
    showMineral(index);
    startPortfolioCarousel();
  }));
  mineralCarousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showMineral(activeMineral - 1); startPortfolioCarousel(); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showMineral(activeMineral + 1); startPortfolioCarousel(); }
  });
  mineralCarousel.addEventListener('pointerdown', event => { pointerStart = event.clientX; });
  mineralCarousel.addEventListener('pointerup', event => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    if (Math.abs(distance) > 55) showMineral(activeMineral + (distance < 0 ? 1 : -1));
  });
  mineralCarousel.addEventListener('mouseenter', () => window.clearInterval(portfolioTimer));
  mineralCarousel.addEventListener('mouseleave', startPortfolioCarousel);
  mineralCarousel.addEventListener('focusin', () => window.clearInterval(portfolioTimer));
  mineralCarousel.addEventListener('focusout', startPortfolioCarousel);
  paintMineralCarousel();
  startPortfolioCarousel();
}

const terrainStudy = document.querySelector('[data-terrain-study]');

if (terrainStudy) {
  const terrainVisual = terrainStudy.querySelector('.terrain-visual');
  const terrainSteps = [...terrainStudy.querySelectorAll('.terrain-steps li')];
  const terrainTabs = [...terrainStudy.querySelectorAll('[data-terrain-tab]')];
  const reduceTerrainMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let terrainFrame = 0;

  const paintTerrain = rawProgress => {
    const progress = Math.max(0, Math.min(1, rawProgress));
    const visualHeight = terrainVisual?.clientHeight || 700;
    const joiningDistance = visualHeight * .29;

    terrainStudy.style.setProperty('--terrain-progress', progress.toFixed(3));
    terrainStudy.style.setProperty('--terrain-top-y', `${(progress - 1) * joiningDistance}px`);
    terrainStudy.style.setProperty('--terrain-bottom-y', `${(1 - progress) * joiningDistance}px`);
    terrainStudy.style.setProperty('--terrain-orbit-scale', (.84 + progress * .16).toFixed(3));
    terrainStudy.classList.toggle('is-formed', progress > .82);

    terrainSteps.forEach((step, index) => {
      step.classList.toggle('active', progress >= index * .34);
    });

    terrainTabs.forEach(tab => {
      const active = tab.dataset.terrainTab === 'deposit' ? progress >= .62 : progress < .62;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
  };

  const updateTerrain = () => {
    const bounds = terrainStudy.getBoundingClientRect();
    const travel = Math.max(terrainStudy.offsetHeight - window.innerHeight, 1);
    paintTerrain(reduceTerrainMotion ? 1 : -bounds.top / travel);
    terrainFrame = 0;
  };

  const requestTerrainUpdate = () => {
    if (!terrainFrame) terrainFrame = window.requestAnimationFrame(updateTerrain);
  };

  terrainTabs.forEach(tab => tab.addEventListener('click', () => {
    const sectionTop = window.scrollY + terrainStudy.getBoundingClientRect().top;
    const travel = Math.max(terrainStudy.offsetHeight - window.innerHeight, 1);
    const destination = tab.dataset.terrainTab === 'deposit' ? 1 : 0;
    window.scrollTo({ top: sectionTop + travel * destination, behavior: reduceTerrainMotion ? 'auto' : 'smooth' });
  }));

  updateTerrain();
  window.addEventListener('scroll', requestTerrainUpdate, { passive: true });
  window.addEventListener('resize', requestTerrainUpdate);
}
