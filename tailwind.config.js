/** @type {import('tailwindcss').Config} */
// Configuração do Tailwind CSS com a identidade visual da ValeSafe.
// Cores baseadas no site oficial (valesafe.com.br) e na fachada da loja.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta institucional ValeSafe
        brand: {
          // Preto/grafite quase preto usado em seções de destaque
          dark: '#0D0D0D',
          darker: '#050505',
          // Cinza grafite para superfícies/cards em fundo escuro
          graphite: '#1A1A1A',
          // Amarelo-ouro/âmbar vibrante — cor de destaque e CTAs
          yellow: '#F5B301',
          yellowDark: '#D99A00',
          // Toque de laranja (elementos do mascote Casquito)
          orange: '#F26B21',
        },
      },
      fontFamily: {
        // Fonte sans-serif geométrica para toda a interface (carregada via index.html)
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        // Flutuação suave para ícones do hero e mascote
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
