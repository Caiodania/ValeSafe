/**
 * content.ts
 * -----------------------------------------------------------------------------
 * Fonte única de conteúdo do site (100% estático, sem back-end).
 * Para atualizar textos, telefones, depoimentos, etc., basta editar este arquivo.
 *
 * Tipos de ícone usados nos cards são strings mapeadas em src/components/Icons.tsx.
 */

/* -------------------------------------------------------------------------- */
/* Dados institucionais da rede + unidade Indaiatuba                          */
/* -------------------------------------------------------------------------- */

export const company = {
  nome: "ValeSafe EPI's",
  unidade: 'Indaiatuba',
  slogan:
    "A maior rede de lojas especializadas em EPI's e EPC's do Brasil",
  fundacao: 2012,
  cidadeFundacao: 'Taubaté (SP)',
  // Números da rede nacional
  unidades: '+40',
  produtosCatalogados: '+10 mil',
  clientesAtendidos: '+14 mil',
  // Avaliação da unidade no Google
  google: {
    nota: '4,9',
    avaliacoes: 133,
  },
  missao:
    'Disponibilizar ao mercado consumidor brasileiro itens essenciais à saúde e integridade do trabalhador, através de lojas franqueadas especializadas em EPI.',
  visao:
    'Ser referência em fornecimento de Equipamentos de Proteção Individual.',
  valores: [
    'Qualidade no relacionamento com clientes e fornecedores',
    'Eficiência com simplicidade',
    'Trabalho em equipe',
    'Referência em EPIs e EPCs',
  ],
}

/* -------------------------------------------------------------------------- */
/* Contato / localização da unidade Indaiatuba                                */
/* -------------------------------------------------------------------------- */

export const contato = {
  enderecoLinha1: 'Av. Conceição, 3101 — Solar de Itamaracá',
  enderecoLinha2: 'Indaiatuba - SP, 13333-395',
  enderecoCompleto:
    'Av. Conceição, 3101 - Solar de Itamaracá, Indaiatuba - SP, 13333-395',
  // Telefone principal (WhatsApp) e telefone fixo da fachada
  whatsappDisplay: '(19) 97140-7064',
  whatsappNumero: '5519971407064', // usado nos links wa.me
  telefoneFixo: '(19) 2518-6080',
  email: 'valesafe.indaiatuba@valesafe.com.br',
  horario: [
    { dia: 'Segunda a Sexta', horas: '08h00 às 18h00' },
    { dia: 'Sábado', horas: '08h00 às 12h00' },
    { dia: 'Domingo e Feriados', horas: 'Fechado' },
  ],
  servicos: ['Atendimento em loja', 'Entrega a domicílio'],
}

/** Link padrão do WhatsApp com mensagem pré-preenchida. */
export const whatsappLink = `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
  'Olá! Vim pelo site da ValeSafe Indaiatuba e gostaria de mais informações sobre EPIs.',
)}`

/** URL de embed do Google Maps (sem necessidade de API key). */
export const mapaEmbedUrl =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(contato.enderecoCompleto) +
  '&output=embed'

/* -------------------------------------------------------------------------- */
/* Redes sociais (placeholders — substituir pelas URLs oficiais da unidade)   */
/* -------------------------------------------------------------------------- */

export const redesSociais = [
  { nome: 'Instagram', icon: 'instagram', url: 'https://instagram.com/valesafe' },
  { nome: 'Facebook', icon: 'facebook', url: 'https://facebook.com/valesafe' },
  { nome: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/company/valesafe' },
  { nome: 'YouTube', icon: 'youtube', url: 'https://youtube.com/@valesafe' },
]

/* -------------------------------------------------------------------------- */
/* Setores atendidos                                                          */
/* -------------------------------------------------------------------------- */

export interface Setor {
  titulo: string
  icon: string
  descricao: string
}

export const setores: Setor[] = [
  {
    titulo: 'Construção Civil',
    icon: 'hardhat',
    descricao:
      'Capacetes, cintos de segurança, calçados e EPIs para obras e canteiros.',
  },
  {
    titulo: 'Indústria',
    icon: 'factory',
    descricao:
      'Proteção completa para linhas de produção, manutenção e áreas fabris.',
  },
  {
    titulo: 'Alimentação',
    icon: 'utensils',
    descricao:
      'Toucas, luvas, aventais e vestimentas adequadas às normas sanitárias.',
  },
  {
    titulo: 'Saúde',
    icon: 'health',
    descricao:
      'Equipamentos de proteção para hospitais, clínicas e laboratórios.',
  },
  {
    titulo: 'Agronegócio',
    icon: 'leaf',
    descricao:
      'EPIs para manuseio de defensivos, campo, colheita e maquinário.',
  },
  {
    titulo: 'Hotelaria',
    icon: 'building',
    descricao:
      'Proteção para equipes de limpeza, manutenção e serviços gerais.',
  },
]

/* -------------------------------------------------------------------------- */
/* Categorias de produtos (EPIs)                                              */
/* -------------------------------------------------------------------------- */

export interface Categoria {
  titulo: string
  icon: string
  descricao: string
  // Placeholder de imagem — substituir por foto real do produto
  imgAlt: string
}

export const categorias: Categoria[] = [
  {
    titulo: 'Proteção Auditiva',
    icon: 'ear',
    descricao: 'Protetores auriculares tipo plug e concha, com atenuação certificada.',
    imgAlt: 'Protetores auriculares de segurança',
  },
  {
    titulo: 'Luvas',
    icon: 'glove',
    descricao: 'Luvas de raspa, nitrílica, látex, malha de aço e antichama.',
    imgAlt: 'Luvas de proteção diversas',
  },
  {
    titulo: 'Trabalho em Altura',
    icon: 'harness',
    descricao: 'Cintos tipo paraquedista, talabartes, trava-quedas e linhas de vida.',
    imgAlt: 'Cinto de segurança para trabalho em altura',
  },
  {
    titulo: 'Calçados de Segurança',
    icon: 'boot',
    descricao: 'Botinas e botas com bico de composite, aço ou PVC impermeável.',
    imgAlt: 'Calçados de segurança com biqueira',
  },
  {
    titulo: 'Capacetes',
    icon: 'hardhat',
    descricao: 'Capacetes de aba frontal e total, com e sem jugular, várias cores.',
    imgAlt: 'Capacetes de segurança amarelos',
  },
  {
    titulo: 'Vestimentas Impermeáveis',
    icon: 'raincoat',
    descricao: 'Conjuntos, capas e aventais impermeáveis em PVC e nylon.',
    imgAlt: 'Vestimenta impermeável de proteção',
  },
]

/* -------------------------------------------------------------------------- */
/* Depoimentos de clientes (citações reais de unidades da rede)               */
/* -------------------------------------------------------------------------- */

export interface Depoimento {
  nome: string
  cargo: string
  texto: string
  estrelas: number
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Marcos Antônio',
    cargo: 'Técnico de Segurança do Trabalho',
    texto:
      'Atendimento excelente e produtos de qualidade. Sempre encontro tudo o que preciso para minha equipe, com preço justo e entrega rápida.',
    estrelas: 5,
  },
  {
    nome: 'Fernanda Lima',
    cargo: 'Compradora — Indústria Metalúrgica',
    texto:
      'A ValeSafe virou nossa fornecedora oficial de EPIs. Variedade enorme e a equipe entende de norma regulamentadora de verdade.',
    estrelas: 5,
  },
  {
    nome: 'Roberto Nunes',
    cargo: 'Encarregado de Obra',
    texto:
      'Precisei de capacetes e cintos com urgência para o canteiro e fui muito bem atendido. Recomendo demais!',
    estrelas: 5,
  },
  {
    nome: 'Juliana Prado',
    cargo: 'Gestora de Facilities',
    texto:
      'Loja organizada, produtos certificados e um time que realmente ajuda a escolher o EPI certo. Nota 10.',
    estrelas: 5,
  },
]

/* -------------------------------------------------------------------------- */
/* Perguntas frequentes (FAQ) — conteúdo genérico, ajustável depois           */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  pergunta: string
  resposta: string
}

export const faq: FaqItem[] = [
  {
    pergunta: 'Quais as formas de pagamento aceitas?',
    resposta:
      'Aceitamos PIX, dinheiro, cartões de débito e crédito (parcelamento sujeito a análise). Para empresas, também trabalhamos com faturamento mediante cadastro.',
  },
  {
    pergunta: 'Vocês entregam? Qual o prazo?',
    resposta:
      'Sim! Fazemos entrega a domicílio na região de Indaiatuba e cidades próximas. O prazo varia conforme a localização e a disponibilidade em estoque — consulte pelo WhatsApp.',
  },
  {
    pergunta: 'Os produtos possuem Certificado de Aprovação (CA)?',
    resposta:
      'Todos os EPIs comercializados possuem Certificado de Aprovação (CA) válido, emitido pelo Ministério do Trabalho, garantindo conformidade com as Normas Regulamentadoras.',
  },
  {
    pergunta: 'Atendem compras para empresas e grandes volumes?',
    resposta:
      'Com certeza. Atendemos desde o autônomo até grandes empresas, com condições especiais para compras em volume. Fale com nossa equipe para um orçamento personalizado.',
  },
  {
    pergunta: 'Posso retirar o produto na loja?',
    resposta:
      'Sim. Você pode comprar pelo WhatsApp e retirar na loja, ou ser atendido presencialmente na Av. Conceição, 3101 — Solar de Itamaracá, Indaiatuba/SP.',
  },
]

/* -------------------------------------------------------------------------- */
/* Itens de navegação do menu                                                 */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Produtos/EPIs', to: '/produtos' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Setores atendidos', to: '/setores' },
  { label: 'Depoimentos', to: '/depoimentos' },
  { label: 'Contato', to: '/contato' },
]
