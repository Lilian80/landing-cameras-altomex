# Landing Page Câmeras Altomex

## 🎯 Objetivo

Landing page de alta conversão para câmeras Wi-Fi Altomex, otimizada para vendas via WhatsApp.

## 📊 Tracking Implementado

### Eventos do Google Analytics 4

1. **whatsapp_click** - Rastreia todos os cliques nos botões de WhatsApp
   - Hero (primário e secundário)
   - Cards de modelos
   - Página de modelos
   - Barra fixa mobile
   - CTA de especialista
   
2. **whatsapp_message_sent** - Detecta quando a mensagem foi enviada (quando possível)

3. **scroll_depth** - Rastreia profundidade do scroll (25%, 50%, 75%, 90%, 100%)

4. **lead_form_submit** - Captura de lead via formulário

5. **time_on_page** - Tempo de permanência na página

6. **video_view** - Visualização dos vídeos do hero

### Meta Pixel

- PageView
- Contact (cliques no WhatsApp)
- Lead (formulários e conversões qualificadas)

## 🚀 Próximos Passos

### ✅ Fase 1: Tracking & Analytics (CONCLUÍDO)
- [x] Sistema de eventos para WhatsApp
- [x] Google Analytics 4
- [x] Meta Pixel
- [x] Hooks de scroll e tempo
- [x] Componentes rastreáveis

### 🔄 Fase 2: Captura e Gestão de Leads (PRÓXIMO)
- [ ] API de captura de leads
- [ ] Integração com Google Sheets / CRM
- [ ] Validação de formulário (máscara telefone)
- [ ] Mensagens de sucesso/erro
- [ ] Email de notificação de novo lead

### 📝 Fase 3: Otimização de Conversão
- [ ] Mensagens de WhatsApp qualificadas
- [ ] Selos de confiança (Garantia, Compra Segura)
- [ ] Região de atendimento visível
- [ ] Prova social com prints de conversas

### ⚡ Fase 4: Performance & SEO
- [ ] Otimização de vídeos
- [ ] Meta tags completas
- [ ] Schema markup para produtos
- [ ] Sitemap XML

### 🧪 Fase 5: Testes A/B
- [ ] Teste: "Sem mensalidade" vs "Ver casa pelo celular"
- [ ] Teste: CTAs diferentes
- [ ] Teste: Ordem das seções

## 🛠️ Stack Técnica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Analytics**: Google Analytics 4 + Meta Pixel
- **Deploy**: Vercel (recomendado)

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/Lilian80/landing-cameras-altomex.git

# Instalar dependências
cd landing-cameras-altomex
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# Rodar em desenvolvimento
npm run dev
```

## 🔐 Variáveis de Ambiente

Veja `.env.example` para todas as variáveis necessárias.

## 📱 Contato

**Vendmaxx Tecnologia**
WhatsApp: +55 (11) 9999-9999
São Paulo e região

---

**Desenvolvido com foco em conversão e performance** 🚀