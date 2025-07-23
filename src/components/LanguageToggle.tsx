import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-malu-text hover:bg-malu-pink-light flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};

export default LanguageToggle;