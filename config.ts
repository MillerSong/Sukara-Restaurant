// =============================================================================
// Sukara Restaurante - Configuration
// =============================================================================
// Website premium para restaurante e pastelaria gourmet em Luanda, Angola
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Sukara Restaurante | Taste the Difference - Luanda, Angola",
  description: "Sukara - Restaurante e Pastelaria Gourmet em Luanda. Sushi, Pizzas Artesanais, Hamburgueres, Frango Chikenista, Pastelaria Fina, Gelados e Cocktails. Uma experiência gastronómica única.",
  language: "pt",
  keywords: "restaurante luanda, sukara, pastelaria gourmet, sushi luanda, pizza artesanal, hamburgueres, frango chikenista, gelados artesanais, restaurante morro bento",
  ogImage: "/images/logo.jpg",
  canonical: "https://sukara.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "SUKARA",
  brandSubname: "Taste the Difference",
  tagline: "Restaurante & Pastelaria Gourmet",
  navLinks: [
    { name: "Início", href: "#home", icon: "Home" },
    { name: "Sobre", href: "#about", icon: "BookOpen" },
    { name: "Menu", href: "#menu", icon: "Wine" },
    { name: "Galeria", href: "#gallery", icon: "Users" },
    { name: "Reservas", href: "#reservations", icon: "Mail" },
    { name: "Contacto", href: "#contact", icon: "MapPin" },
  ],
  ctaButtonText: "Reservar Mesa",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "SUKARA",
  brandSubname: "Taste the Difference",
  yearText: "Luanda, Angola",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Uma experiência gastronómica única",
  mainTitle: "Sukara\nTaste the Difference",
  ctaButtonText: "Ver Menu",
  ctaTarget: "#menu",
  stats: [
    { value: 50, suffix: "+", label: "Pratos Especiais" },
    { value: 7, suffix: "h", label: "Aberto Todos os Dias" },
    { value: 1000, suffix: "+", label: "Clientes Satisfeitos" },
  ],
  decorativeText: "Restaurante & Pastelaria",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config (adaptado para Menu Destaque)
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Nossas Especialidades",
  subtitle: "SABORES QUE ENCANTAM",
  mainTitle: "Descubra o Nosso Menu",
  wines: [
    {
      id: "pizza",
      name: "Pizza Artesanal",
      subtitle: "Litália Tradicional",
      year: "",
      image: "/images/pizza.jpg",
      filter: "",
      glowColor: "bg-amber-600/20",
      description: "Pizzas preparadas com massa artesanal, molho de tomate caseiro e os melhores ingredientes. Da clássica Margherita à especial Picanha.",
      tastingNotes: "Massa fina e crocante",
      alcohol: "",
      temperature: "Quente",
      aging: "",
    },
    {
      id: "chickenista",
      name: "Frango Chikenista",
      subtitle: "Churrasco na Brasa",
      year: "",
      image: "/images/menu-chickenista.jpg",
      filter: "brightness(1.1)",
      glowColor: "bg-orange-600/20",
      description: "O famoso frango Chikenista, grelhado na brasa com molhos especiais. Disponível em porções inteiras ou meio frango.",
      tastingNotes: "Suculento e saboroso",
      alcohol: "",
      temperature: "Quente",
      aging: "",
    },
    {
      id: "burger",
      name: "Hambúrgueres",
      subtitle: "New York Burger's",
      year: "",
      image: "/images/menu-burgers.jpg",
      filter: "brightness(1.05)",
      glowColor: "bg-red-700/20",
      description: "Hambúrgueres gourmet com carne suculenta, queijo derretido e complementos frescos. Do Deluxe ao Supreme.",
      tastingNotes: "Carnes premium",
      alcohol: "",
      temperature: "Quente",
      aging: "",
    },
  ],
  features: [
    { icon: "Wine", title: "Ingredientes Frescos", description: "Seleção diária dos melhores produtos" },
    { icon: "Thermometer", title: "Preparo Artesanal", description: "Técnicas tradicionais de culinária" },
    { icon: "Clock", title: "Serviço Rápido", description: "Atendimento ágil e eficiente" },
    { icon: "Sparkles", title: "Qualidade Premium", description: "Padrão internacional de excelência" },
  ],
  quote: {
    text: "A gastronomia é a arte de usar o alimento para criar felicidade.",
    attribution: "Sukara",
    prefix: "",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config (adaptado para Ambiente/Espaço)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "O Nosso Espaço",
  subtitle: "AMBIENTE ACOLHEDOR",
  mainTitle: "Conheça o Sukara",
  locationTag: "Morro Bento, Luanda",
  slides: [
    {
      image: "/images/exterior.jpg",
      title: "Esplanada",
      subtitle: "Ambiente Exterior",
      area: "50",
      unit: "lugares",
      description: "Espaço exterior amplo e acolhedor, perfeito para refeições ao ar livre em um ambiente relaxante.",
    },
    {
      image: "/images/interior1.jpg",
      title: "Sala Principal",
      subtitle: "Ambiente Interior",
      area: "80",
      unit: "lugares",
      description: "Interior moderno e elegante, com decoração sofisticada e ambiente climatizado para seu conforto.",
    },
    {
      image: "/images/vitrine.jpg",
      title: "Pastelaria",
      subtitle: "Delícias Frescas",
      area: "30",
      unit: "variedades",
      description: "Vitrine recheada de pastelaria fina, doces artesanais e gelados preparados diariamente.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config (adaptado para Sobre/História)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "A Nossa História",
  subtitle: "SOBRE O SUKARA",
  mainTitle: "Tradição e Sabor",
  introText: "O Sukara é um restaurante e pastelaria gourmet conhecido em Luanda pela sua grande variedade gastronómica. Oferecemos uma experiência culinária única, combinando sabores internacionais com o melhor da cozinha local.",
  timeline: [
    { year: "2018", event: "Inauguração do Sukara em Luanda" },
    { year: "2019", event: "Expansão do menu com sushi" },
    { year: "2020", event: "Lançamento da linha Chikenista" },
    { year: "2023", event: "Reformulação do espaço e menu" },
  ],
  tabs: [
    {
      id: "cuisine",
      name: "Cozinha",
      icon: "BookOpen",
      image: "/images/menu-pratos.jpg",
      content: {
        title: "Cozinha Internacional",
        description: "Do sushi japonês às pizzas italianas, passando pelos hambúrgueres americanos e o frango Chikenista. Nossa cozinha é uma viagem gastronómica pelo mundo.",
        highlight: "Mais de 50 pratos especiais",
      },
    },
    {
      id: "pastry",
      name: "Pastelaria",
      icon: "Award",
      image: "/images/pastelaria.jpg",
      content: {
        title: "Pastelaria Fina",
        description: "Doces artesanais, croissants, tortas e uma variedade de sobremesas preparadas com ingredientes de alta qualidade.",
        highlight: "Frescos todos os dias",
      },
    },
    {
      id: "drinks",
      name: "Bebidas",
      icon: "History",
      image: "/images/menu-bebidas.jpg",
      content: {
        title: "Bebidas e Cocktails",
        description: "Cafés especiais, sumos naturais, refrigerantes e uma seleção de cocktails refrescantes para acompanhar suas refeições.",
        highlight: "Café de especialidade",
      },
    },
  ],
  openingHours: "Todos os dias das 07:30 às 22:00",
  openingHoursLabel: "Horário de Funcionamento",
  ctaButtonText: "Fazer Reserva",
  yearBadge: "2018",
  yearBadgeLabel: "Desde",
  quote: {
    prefix: "",
    text: "Taste the Difference - Prove a diferença em cada prato.",
    attribution: "Sukara",
  },
  founderPhotoAlt: "Logo Sukara",
  founderPhoto: "/images/logo.jpg",
};

// -----------------------------------------------------------------------------
// News Config (adaptado para Galeria e Depoimentos)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Galeria",
  subtitle: "MOMENTOS SUKARA",
  mainTitle: "Nossa Galeria",
  viewAllText: "Ver Tudo",
  readMoreText: "Ver Mais",
  articles: [
    {
      id: 1,
      image: "/images/menu-pizzas.jpg",
      title: "Pizzas Artesanais",
      excerpt: "Massa fina e crocante com os melhores ingredientes",
      date: "Menu",
      category: "Especialidades",
    },
    {
      id: 2,
      image: "/images/menu-chickenista.jpg",
      title: "Frango Chikenista",
      excerpt: "O sabor único do frango grelhado na brasa",
      date: "Menu",
      category: "Churrasco",
    },
    {
      id: 3,
      image: "/images/menu-burgers.jpg",
      title: "Hambúrgueres Gourmet",
      excerpt: "Carnes premium com complementos especiais",
      date: "Menu",
      category: "Burgers",
    },
    {
      id: 4,
      image: "/images/menu-beirut.jpg",
      title: "Sabor do Líbano",
      excerpt: "Fajitas, shawarma e especialidades árabes",
      date: "Menu",
      category: "Internacional",
    },
  ],
  testimonialsScriptText: "Depoimentos",
  testimonialsSubtitle: "O QUE DIZEM OS CLIENTES",
  testimonialsMainTitle: "Experiências Sukara",
  testimonials: [
    {
      name: "Maria Santos",
      role: "Cliente Frequente",
      text: "O melhor restaurante de Luanda! A pizza é incrível e o atendimento é impecável. Recomendo a todos!",
      rating: 5,
    },
    {
      name: "João Silva",
      role: "Cliente",
      text: "O frango Chikenista é simplesmente divino. Ambiente agradável e comida de qualidade. Voltarei sempre!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      role: "Cliente",
      text: "Adoro a pastelaria do Sukara. Os doces são frescos e deliciosos. Café da manhã perfeito!",
      rating: 5,
    },
  ],
  storyScriptText: "Nossa História",
  storySubtitle: "TRADIÇÃO E QUALIDADE",
  storyTitle: "Sukara",
  storyParagraphs: [
    "O Sukara nasceu da paixão pela gastronomia e do desejo de oferecer uma experiência culinária única em Luanda. Desde a nossa inauguração, nos dedicamos a criar pratos que encantam o paladar e criam memórias.",
    "Nossa cozinha combina técnicas internacionais com ingredientes locais de alta qualidade. Cada prato é preparado com cuidado e atenção aos detalhes, garantindo sabor e apresentação impecáveis.",
    "Além do restaurante, nossa pastelaria oferece uma variedade de doces artesanais, pães frescos e gelados preparados diariamente. Tudo feito com amor e dedicação para nossos clientes.",
  ],
  storyTimeline: [
    { value: "50+", label: "Pratos no Menu" },
    { value: "7", label: "Anos de História" },
    { value: "1000+", label: "Clientes/Mês" },
  ],
  storyQuote: {
    prefix: "",
    text: "A verdadeira gastronomia é uma forma de arte que nutre o corpo e a alma.",
    attribution: "Chef Sukara",
  },
  storyImage: "/images/esplanada.jpg",
  storyImageCaption: "Ambiente acolhedor do Sukara",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Reservas",
  subtitle: "RESERVE SUA MESA",
  mainTitle: "Faça Sua Reserva",
  introText: "Garanta seu lugar no Sukara. Preencha o formulário abaixo e entraremos em contacto para confirmar sua reserva.",
  contactInfoTitle: "Informações de Contacto",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Morada",
      value: "Avenida 21 de Janeiro, nº 31",
      subtext: "Morro Bento, Luanda, Angola - Em frente ao Hipermercado Kero",
    },
    {
      icon: "Phone",
      label: "Telefone",
      value: "+244 948 909 000",
      subtext: "+244 947 717 172",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "info@sukara.com",
      subtext: "",
    },
    {
      icon: "Clock",
      label: "Horário",
      value: "Todos os dias",
      subtext: "07:30 - 22:00",
    },
  ],
  form: {
    nameLabel: "Nome",
    namePlaceholder: "Seu nome completo",
    emailLabel: "Email",
    emailPlaceholder: "seu@email.com",
    phoneLabel: "Telefone",
    phonePlaceholder: "+244 XXX XXX XXX",
    visitDateLabel: "Data da Reserva",
    visitorsLabel: "Número de Pessoas",
    visitorsOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "Mais de 8"],
    messageLabel: "Mensagem",
    messagePlaceholder: "Alguma observação especial?",
    submitText: "Reservar Mesa",
    submittingText: "A enviar...",
    successMessage: "Reserva enviada com sucesso! Entraremos em contacto brevemente.",
    errorMessage: "Ocorreu um erro. Por favor, tente novamente.",
  },
  privacyNotice: "Ao enviar, concorda com o processamento dos seus dados pessoais.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "SUKARA",
  tagline: "Taste the Difference",
  description: "Restaurante e Pastelaria Gourmet em Luanda, Angola. Oferecemos uma experiência gastronómica única com sushi, pizzas, hambúrgueres, frango Chikenista e muito mais.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/sukara" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/sukara" },
  ],
  linkGroups: [
    {
      title: "Links Rápidos",
      links: [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Galeria", href: "#gallery" },
        { name: "Reservas", href: "#reservations" },
      ],
    },
    {
      title: "Menu",
      links: [
        { name: "Pizzas", href: "#menu" },
        { name: "Hambúrgueres", href: "#menu" },
        { name: "Chikenista", href: "#menu" },
        { name: "Pastelaria", href: "#menu" },
        { name: "Bebidas", href: "#menu" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Avenida 21 de Janeiro, nº 31, Morro Bento, Luanda" },
    { icon: "Phone", text: "+244 948 909 000 | +244 947 717 172" },
  ],
  newsletterLabel: "Newsletter",
  newsletterPlaceholder: "Seu email",
  newsletterButtonText: "Subscrever",
  newsletterSuccessText: "Subscrição realizada com sucesso!",
  newsletterErrorText: "Erro ao subscrever. Tente novamente.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2024 Sukara Restaurante. Todos os direitos reservados.",
  legalLinks: ["Política de Privacidade", "Termos de Uso"],
  icpText: "",
  backToTopText: "Voltar ao topo",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Voltar ao topo",
};

// -----------------------------------------------------------------------------
// MENU DIGITAL - Dados completos do cardápio (editável via admin)
// -----------------------------------------------------------------------------
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEn: string;
  nameFr: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    nameEn: "Pizzas",
    nameFr: "Pizzas",
    icon: "Pizza",
    items: [
      { id: "p1", name: "Margherita", description: "Molho de tomate e queijo mozzarella", price: 13000, image: "/images/menu-pizzas.jpg", category: "pizzas" },
      { id: "p2", name: "Hawaiian", description: "Molho de tomate, fiambre de peru, ananás e queijo mozzarella", price: 14000, image: "/images/menu-pizzas.jpg", category: "pizzas" },
      { id: "p3", name: "Pollo", description: "Molho de tomate, queijo mozzarella, tiras de frango, pimenta verde, cogumelo", price: 15000, image: "/images/menu-pizzas.jpg", category: "pizzas", popular: true },
      { id: "p4", name: "BBQ", description: "Molho de tomate, queijo mozzarella, carne moída, pimenta verde e cogumelo", price: 16000, image: "/images/menu-pizzas.jpg", category: "pizzas" },
      { id: "p5", name: "Tonno", description: "Molho de tomate, queijo mozzarella, atum, cebola, azeitona preta", price: 15000, image: "/images/menu-pizzas.jpg", category: "pizzas" },
      { id: "p6", name: "Chikenista", description: "Molho de tomate, queijo mozzarella, cebola e frango grelhado na brasa", price: 15000, image: "/images/menu-pizzas.jpg", category: "pizzas", popular: true },
      { id: "p7", name: "4 Estações", description: "Combinação de 4 pizzas: Margherita, Vegetal, BBQ, Pollo", price: 15000, image: "/images/menu-pizzas.jpg", category: "pizzas" },
      { id: "p8", name: "Vegetariana", description: "Molho de tomate, queijo mozzarella, cebola, pimenta verde, azeitona, beringela, courgette, tomate", price: 14000, image: "/images/menu-pizzas.jpg", category: "pizzas" },
      { id: "p9", name: "Picanha", description: "Molho de tomate, queijo mozzarella, picanha fatiada, feijão preto, cebola caramelizada", price: 17000, image: "/images/menu-pizzas.jpg", category: "pizzas", popular: true },
    ],
  },
  {
    id: "burgers",
    name: "Hambúrgueres",
    nameEn: "Burgers",
    nameFr: "Hamburgers",
    icon: "Beef",
    items: [
      { id: "b1", name: "Deluxe", description: "Carne, queijo, alface, tomate, cebola, pimento verde e molho de cocktail", price: 6000, image: "/images/menu-burgers.jpg", category: "burgers" },
      { id: "b2", name: "Supreme", description: "Carne, fiambre de peru, queijo, ovo, alface, tomate, cebola, pimento verde e molho de cocktail", price: 7000, image: "/images/menu-burgers.jpg", category: "burgers", popular: true },
      { id: "b3", name: "Big", description: "Duas camadas de carne, queijo, alface e molho de cocktail", price: 10500, image: "/images/menu-burgers.jpg", category: "burgers" },
      { id: "b4", name: "Libanês", description: "Carne, batatas fritas, ketchup e salada de repolho", price: 6000, image: "/images/menu-burgers.jpg", category: "burgers" },
      { id: "b5", name: "Chikenista", description: "Frango grelhado na brasa desfiado, molho Chikenista picante", price: 5500, image: "/images/menu-burgers.jpg", category: "burgers", popular: true },
      { id: "b6", name: "Crispy", description: "Peito de frango panado, queijo mozzarella, alface e molho de cocktail", price: 6000, image: "/images/menu-burgers.jpg", category: "burgers" },
      { id: "b7", name: "Picanha", description: "Picanha fatiada, queijo, feijão preto, alface, cebola caramelizada e molho de feijão", price: 7000, image: "/images/menu-burgers.jpg", category: "burgers" },
    ],
  },
  {
    id: "chickenista",
    name: "Frango Chikenista",
    nameEn: "Chikenista Chicken",
    nameFr: "Poulet Chikenista",
    icon: "Chicken",
    items: [
      { id: "c1", name: "Chikenista Frango Inteiro", description: "Inclui 2 molhos (Original, Picante, Beirut)", price: 15000, image: "/images/menu-chickenista.jpg", category: "chickenista", popular: true },
      { id: "c2", name: "Chikenista Meio Frango", description: "Inclui 1 molho (Original, Picante, Beirut)", price: 7750, image: "/images/menu-chickenista.jpg", category: "chickenista" },
      { id: "c3", name: "Chikenista Sandwich", description: "Frango grelhado na brasa desfiado, batatas fritas, molho picante no pão árabe e torrado na brasa", price: 3850, image: "/images/menu-chickenista.jpg", category: "chickenista" },
      { id: "c4", name: "Chikenista Quesadilla", description: "Frango grelhado na brasa desfiado, queijo, molho picante e batatas fritas", price: 6000, image: "/images/menu-chickenista.jpg", category: "chickenista" },
      { id: "c5", name: "Tawouk", description: "Peito de frango, salada de repolho, picles, molho e batatas fritas", price: 3850, image: "/images/menu-chickenista.jpg", category: "chickenista" },
      { id: "c6", name: "Chikenista Frango Inteiro (No Prato)", description: "Inclui 2 molhos + 2 acompanhamentos", price: 19000, image: "/images/menu-chickenista.jpg", category: "chickenista", popular: true },
      { id: "c7", name: "Chikenista Meio Frango (No Prato)", description: "Inclui 1 molho + 2 acompanhamentos", price: 11000, image: "/images/menu-chickenista.jpg", category: "chickenista" },
    ],
  },
  {
    id: "beirut",
    name: "Sabor do Líbano",
    nameEn: "Lebanese Flavor",
    nameFr: "Saveur Libanaise",
    icon: "Globe",
    items: [
      { id: "l1", name: "Fajita de Frango", description: "Peito de frango, queijo mozzarella e molho de abacate/BBQ", price: 4500, image: "/images/menu-beirut.jpg", category: "beirut" },
      { id: "l2", name: "Fajita de Carne", description: "Carne lombo, queijo mozzarella e molho", price: 5500, image: "/images/menu-beirut.jpg", category: "beirut" },
      { id: "l3", name: "Picanha Picasso", description: "Picanha fatiada, queijo, feijão preto, alface, molho de feijão, cebola caramelizada", price: 6800, image: "/images/menu-beirut.jpg", category: "beirut", popular: true },
      { id: "l4", name: "Fajita Mix", description: "Carne lombo, peito de frango, queijo, alface, molho", price: 5550, image: "/images/menu-beirut.jpg", category: "beirut" },
      { id: "l5", name: "Picasso Atumar", description: "Atum, alface, milho e maionese", price: 4500, image: "/images/menu-beirut.jpg", category: "beirut" },
      { id: "l6", name: "Crispy Picasso", description: "Peito de frango, queijo, alface, milho e maionese", price: 4500, image: "/images/menu-beirut.jpg", category: "beirut" },
      { id: "l7", name: "Shawarma de Frango", description: "Peito de frango, picles, batata frita e molho de alho", price: 3500, image: "/images/menu-beirut.jpg", category: "beirut" },
    ],
  },
  {
    id: "manakish",
    name: "Manakish",
    nameEn: "Manakish",
    nameFr: "Manakish",
    icon: "Bread",
    items: [
      { id: "m1", name: "Zaatar", description: "Feito com tomilho e semente de sésamo", price: 3500, image: "/images/menu-beirut.jpg", category: "manakish" },
      { id: "m2", name: "Lamh Baajin 'Sfiha'", description: "Feito com carne moída, tomate, cebola e tempero", price: 5000, image: "/images/menu-beirut.jpg", category: "manakish" },
      { id: "m3", name: "Três Queijos", description: "Feito com queijo akawi, queijo mozzarella e queijo flamingo", price: 5500, image: "/images/menu-beirut.jpg", category: "manakish" },
      { id: "m4", name: "Queijo Akawi Al Naka", description: "Feito com queijo al naka", price: 7500, image: "/images/menu-beirut.jpg", category: "manakish" },
      { id: "m5", name: "Manoushe Zaatar e Queijo", description: "Feito com queijo e tomilho", price: 7000, image: "/images/menu-beirut.jpg", category: "manakish" },
      { id: "m6", name: "Za'Queijo", description: "Feito com queijo al naka e tomilho", price: 10000, image: "/images/menu-beirut.jpg", category: "manakish", popular: true },
      { id: "m7", name: "Vegetariano", description: "Feito com tomate, cebola, pimento verde", price: 4000, image: "/images/menu-beirut.jpg", category: "manakish" },
    ],
  },
  {
    id: "salads",
    name: "Saladas",
    nameEn: "Salads",
    nameFr: "Salades",
    icon: "Salad",
    items: [
      { id: "s1", name: "Primavera", description: "Alface, pepino, tomate, cenoura, pimento verde e vermelho, milho doce", price: 4500, image: "/images/menu-saladas.jpg", category: "salads" },
      { id: "s2", name: "Atumar", description: "Alface, atum, ovo cozido, cenoura, azeitonas, milho doce e cebola", price: 6850, image: "/images/menu-saladas.jpg", category: "salads", popular: true },
      { id: "s3", name: "Pollo", description: "Alface, peito de frango, pepino, tomate, milho doce e cebola", price: 5500, image: "/images/menu-saladas.jpg", category: "salads" },
    ],
  },
  {
    id: "tostas",
    name: "Tostas & Omeletes",
    nameEn: "Toasts & Omelettes",
    nameFr: "Toasts & Omelettes",
    icon: "Egg",
    items: [
      { id: "t1", name: "Tosta de Queijo", description: "Queijo flamingo", price: 3500, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "t2", name: "Tosta Mista", description: "Queijo flamingo e fiambre de peru", price: 4000, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "t3", name: "Tosta Atum", description: "Atum, tomate, milho e maionese", price: 4000, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "t4", name: "Club Sandwich", description: "Queijo flamingo, fiambre de peru, alface e tomate, acompanhado de batatas fritas", price: 6500, image: "/images/menu-tostas.jpg", category: "tostas", popular: true },
      { id: "t5", name: "Club Sukara", description: "Peito de frango, queijo, fiambre, ovo, alface, tomate e molho, acompanhado de batatas fritas", price: 6850, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "t6", name: "Torrada", description: "Torrada na manteiga", price: 2500, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "o1", name: "Omelete Mista", description: "Ovo, fiambre de peru e queijo", price: 6500, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "o2", name: "Omelete Vegetariano", description: "Ovo, queijo, tomate, cebola, pimento verde, milho doce", price: 6000, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "o3", name: "Omelete Cogumelo", description: "Ovo, cogumelo e queijo", price: 6000, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "o4", name: "Omelete com Atum", description: "Ovo, atum e queijo", price: 5500, image: "/images/menu-tostas.jpg", category: "tostas" },
      { id: "o5", name: "Omelete Espinafre", description: "Ovo, espinafre e queijo", price: 3850, image: "/images/menu-tostas.jpg", category: "tostas" },
    ],
  },
  {
    id: "miniaturas",
    name: "Miniaturas",
    nameEn: "Miniatures",
    nameFr: "Miniatures",
    icon: "Cookie",
    items: [
      { id: "mi1", name: "Mini Pizza", description: "Pequena pizza artesanal", price: 450, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi2", name: "Mini Espinafre", description: "Pastel de espinafre", price: 450, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi3", name: "Mini Lamh Baajiin", description: "Pastel de carne", price: 450, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi4", name: "Mini Zaatar", description: "Com tomilho e sésamo", price: 450, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi5", name: "Mini Queijo Mozzarella", description: "Com queijo mozzarella", price: 450, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi6", name: "Chamuça Vegetariana", description: "Pastel vegetariano", price: 850, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi7", name: "Chamuça Frango", description: "Pastel de frango", price: 1000, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi8", name: "Chamuça Carne", description: "Pastel de carne", price: 1000, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi9", name: "Pizza Roll", description: "Rolinho de pizza", price: 1500, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi10", name: "Mini Fajita de Frango", description: "Pequena fajita de frango", price: 1800, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi11", name: "Mini Fajita de Carne", description: "Pequena fajita de carne", price: 2000, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
      { id: "mi12", name: "Mini Hambúrguer", description: "Pequeno hambúrguer", price: 2000, image: "/images/menu-miniaturas.jpg", category: "miniaturas" },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas Quentes",
    nameEn: "Hot Drinks",
    nameFr: "Boissons Chaudes",
    icon: "Coffee",
    items: [
      { id: "bq1", name: "Chá Natural", description: "Limão ou gengibre", price: 1500, image: "/images/menu-bebidas.jpg", category: "bebidas" },
      { id: "bq2", name: "Chá (Pacote)", description: "Chá de pacote", price: 1000, image: "/images/menu-bebidas.jpg", category: "bebidas" },
      { id: "bq3", name: "Espresso", description: "Café espresso", price: 1150, image: "/images/menu-bebidas.jpg", category: "bebidas" },
      { id: "bq4", name: "Espresso Duplo", description: "Dose dupla de espresso", price: 2800, image: "/images/menu-bebidas.jpg", category: "bebidas" },
      { id: "bq5", name: "Espresso Descafeinado", description: "Café sem cafeína", price: 1300, image: "/images/menu-bebidas.jpg", category: "bebidas" },
      { id: "bq6", name: "Meia Leite", description: "Café com leite", price: 1850, image: "/images/menu-bebidas.jpg", category: "bebidas" },
      { id: "bq7", name: "Capuccino", description: "Café capuccino", price: 2300, image: "/images/menu-bebidas.jpg", category: "bebidas", popular: true },
      { id: "bq8", name: "Galão", description: "Café galão", price: 2300, image: "/images/menu-bebidas.jpg", category: "bebidas" },
    ],
  },
  {
    id: "refrigerantes",
    name: "Refrigerantes",
    nameEn: "Soft Drinks",
    nameFr: "Boissons Fraîches",
    icon: "GlassWater",
    items: [
      { id: "r1", name: "Gasosa (Lata 330ml)", description: "Coca Cola, Coca Cola Zero, Fanta, Sprite, Sumol", price: 1100, image: "/images/menu-bebidas.jpg", category: "refrigerantes" },
      { id: "r2", name: "Sumos (Pacote 220ml)", description: "Gardenia", price: 700, image: "/images/menu-bebidas.jpg", category: "refrigerantes" },
      { id: "r3", name: "Água Mineral (500ml)", description: "Água pura", price: 600, image: "/images/menu-bebidas.jpg", category: "refrigerantes" },
      { id: "r4", name: "Água Tónica (Lata 330ml)", description: "Tónica", price: 1300, image: "/images/menu-bebidas.jpg", category: "refrigerantes" },
      { id: "r5", name: "Red Bull (Lata 330ml)", description: "Energético", price: 3300, image: "/images/menu-bebidas.jpg", category: "refrigerantes" },
    ],
  },
  {
    id: "sumos",
    name: "Sumos Naturais",
    nameEn: "Natural Juices",
    nameFr: "Jus Naturels",
    icon: "Juice",
    items: [
      { id: "sn1", name: "Detox Verde", description: "Couve, gengibre, hortelã, coentro, maçã e ananás", price: 4850, image: "/images/menu-bebidas.jpg", category: "sumos", popular: true },
      { id: "sn2", name: "Laranja", description: "Sumo de laranja natural", price: 3500, image: "/images/menu-bebidas.jpg", category: "sumos" },
    ],
  },
];

// -----------------------------------------------------------------------------
// Traduções
// -----------------------------------------------------------------------------
export const translations = {
  pt: {
    home: "Início",
    about: "Sobre",
    menu: "Menu",
    gallery: "Galeria",
    reservations: "Reservas",
    contact: "Contacto",
    viewMenu: "Ver Menu",
    bookTable: "Reservar Mesa",
    openingHours: "Horário",
    address: "Morada",
    phone: "Telefone",
    email: "Email",
    name: "Nome",
    message: "Mensagem",
    send: "Enviar",
    popular: "Popular",
    price: "Preço",
    category: "Categoria",
    all: "Todos",
    search: "Pesquisar",
    close: "Fechar",
    seeMore: "Ver Mais",
    seeLess: "Ver Menos",
    qrCodeTitle: "Menu Digital QR Code",
    qrCodeDescription: "Escaneie para ver o menu completo",
  },
  en: {
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    reservations: "Reservations",
    contact: "Contact",
    viewMenu: "View Menu",
    bookTable: "Book Table",
    openingHours: "Opening Hours",
    address: "Address",
    phone: "Phone",
    email: "Email",
    name: "Name",
    message: "Message",
    send: "Send",
    popular: "Popular",
    price: "Price",
    category: "Category",
    all: "All",
    search: "Search",
    close: "Close",
    seeMore: "See More",
    seeLess: "See Less",
    qrCodeTitle: "Digital Menu QR Code",
    qrCodeDescription: "Scan to view full menu",
  },
  fr: {
    home: "Accueil",
    about: "À Propos",
    menu: "Menu",
    gallery: "Galerie",
    reservations: "Réservations",
    contact: "Contact",
    viewMenu: "Voir Menu",
    bookTable: "Réserver Table",
    openingHours: "Heures d'Ouverture",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    name: "Nom",
    message: "Message",
    send: "Envoyer",
    popular: "Populaire",
    price: "Prix",
    category: "Catégorie",
    all: "Tous",
    search: "Rechercher",
    close: "Fermer",
    seeMore: "Voir Plus",
    seeLess: "Voir Moins",
    qrCodeTitle: "Menu Numérique QR Code",
    qrCodeDescription: "Scannez pour voir le menu complet",
  },
};

export type Language = "pt" | "en" | "fr";
