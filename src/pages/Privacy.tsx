import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-malu-text mb-2">Política de Privacidade</h1>
            <p className="text-malu-gray">Última atualização: Julho de 2025</p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-malu-text">Sua Privacidade É Importante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-malu-text">
              <section>
                <h2 className="text-xl font-semibold mb-3">Informações que Coletamos</h2>
                <p className="text-malu-gray mb-3">
                  O malu foi projetado para ser seu espaço pessoal e privado para momentos lindos. Coletamos informações mínimas para te oferecer a melhor experiência:
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>Os momentos, fotos e memórias que você escolhe salvar no app</li>
                  <li>Informações básicas da conta (email) se você escolher criar uma conta para sincronização</li>
                  <li>Análises de uso do app para melhorar a performance (anonimizadas)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Como Protegemos Seus Dados</h2>
                <p className="text-malu-gray mb-3">
                  Seus momentos são preciosos para você, e são preciosos para nós também:
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>Todos os seus momentos pessoais são criptografados e armazenados com segurança</li>
                  <li>Nunca compartilhamos seu conteúdo pessoal com terceiros</li>
                  <li>Você controla seus dados - exporte ou delete a qualquer momento</li>
                  <li>Opção de armazenamento local disponível para privacidade completa</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">O que Não Fazemos</h2>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>Não vendemos seus dados para anunciantes</li>
                  <li>Não escaneamos seu conteúdo para fins de marketing</li>
                  <li>Não compartilhamos seus momentos com redes sociais</li>
                  <li>Não te rastreamos em outros sites ou apps</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Seus Direitos</h2>
                <p className="text-malu-gray mb-3">
                  Você tem controle completo sobre seus dados:
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>Solicitar uma cópia de seus dados a qualquer momento</li>
                  <li>Deletar sua conta e todos os dados associados</li>
                  <li>Optar por não participar da coleta de análises</li>
                  <li>Entrar em contato conosco com qualquer preocupação sobre privacidade</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Entre em Contato</h2>
                <p className="text-malu-gray">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou como lidamos com seus dados, 
                  entre em contato conosco em <a href="mailto:privacy@malu.app" className="text-malu-pink hover:underline">privacy@malu.app</a>.
                </p>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-malu-gray">
                  Esta política de privacidade pode ser atualizada periodicamente. Notificaremos você sobre mudanças significativas 
                  através do app ou por email, se você tiver fornecido um.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;