import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite: apenas o plugin do React é necessário.
// Projeto 100% front-end, sem proxy nem variáveis de back-end.
// Se a variável de ambiente PORT estiver definida, o dev server a utiliza
// (padrão do Vite = 5173 quando PORT não existe).
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
