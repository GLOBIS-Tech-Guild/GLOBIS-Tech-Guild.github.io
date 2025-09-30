import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Users, Target, Rocket, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.05]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-16">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left lg:w-1/2">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                エンジニアコミュニティ
              </Badge>
              
              <h1 className="mx-auto max-w-4xl lg:mx-0 text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                  MBA × エンジニア<br />
                  コミュニティ
                </span>
              </h1>
              
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0 leading-relaxed">
                経営×創造者の情報交換の場。<br />
                最新情報が飛び交うエンジニアコミュニティです。
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/80">情報交換</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent border border-secondary/20 backdrop-blur-sm">
                <div className="p-2 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg">
                  <Rocket className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground/80">プロダクト開発</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/10 to-secondary/30 rounded-3xl blur-3xl opacity-50"></div>
              
              {/* Main image */}
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc1OTIxNzU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern tech workspace"
                  className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover border border-white/20"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-6 -left-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl rounded-2xl shadow-xl border border-primary/30">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 backdrop-blur-xl rounded-2xl shadow-xl border border-secondary/30">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}