import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Briefcase, 
  Award,
  ChevronRight
} from 'lucide-react';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'outline' | 'white'; 
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg px-6 py-3 text-sm sm:text-base active:scale-95";
  
  const variants = {
    primary: "bg-primary hover:bg-red-800 text-white shadow-lg hover:shadow-xl border border-transparent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-red-50",
    white: "bg-white text-secondary hover:bg-gray-100 shadow-md border border-gray-200"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

const Section = ({ 
  children, 
  className = '', 
  id = '' 
}: { 
  children?: React.ReactNode; 
  className?: string; 
  id?: string;
}) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

// --- Main App Component ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRedirect = () => {
    // Redirect to external payment/registration site
    // Replace this URL with your actual payment page
    window.location.href = "https://example.com/checkout";
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-red-100 selection:text-red-900">
      
      {/* --- Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-secondary">
              SW<span className="text-primary">.</span>LAB
            </span>
          </div>
          
          <button 
            onClick={handleRedirect}
            className="group flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors border-2 border-gray-200 hover:border-primary rounded-full px-4 py-2"
          >
            <Play size={16} className="fill-current" />
            <span className="hidden sm:inline">Смотреть видео</span>
            <span className="sm:hidden">Видео</span>
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* --- Hero Section --- */}
      <Section id="hero" className="pt-8 pb-16 md:pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            
            {/* H1 - Order 1 on Mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-secondary">
              С нуля до мастера окон за 30 дней: как зарабатывать от <span className="text-primary whitespace-nowrap">3000€ в Европе?</span>
            </h1>

            {/* Image - Mobile Only (Order 2) */}
            <div className="block md:hidden rounded-2xl overflow-hidden shadow-xl aspect-video relative group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <img 
                src="https://images.pexels.com/photos/5691503/pexels-photo-5691503.jpeg" 
                alt="Мастер ремонтирует окно" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Subheadline - Order 3 */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-4">
              Получите доступ к бесплатному видео, где мы раскрываем реальный путь входа в востребованную профессию мастера окон, доходы, ошибки новичков и стратегию выхода на стабильный заработок.
            </p>

            {/* CTA - Order 4 */}
            <div className="space-y-3">
              <Button onClick={handleRedirect} className="w-full md:w-auto text-lg px-8 py-4 shadow-red-200/50 shadow-xl">
                Получить доступ к видео
              </Button>
              <p className="text-xs text-gray-500 flex items-center gap-1 justify-center md:justify-start">
                <CheckCircle2 size={12} className="text-green-500" />
                Видео откроется сразу после регистрации
              </p>
            </div>
          </div>

          {/* Image - Desktop Only */}
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform transition hover:-translate-y-1 duration-500">
               <img 
                src="https://images.pexels.com/photos/5691503/pexels-photo-5691503.jpeg" 
                alt="Мастер за работой" 
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 flex items-center gap-3 max-w-xs">
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                   <TrendingUp size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Спрос на услуги</p>
                   <p className="font-bold text-secondary">Растет на 15% в год</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Value Proposition --- */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Содержание</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Что вы получите в видео?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="text-primary" size={24} />,
              text: "Как работает рынок оконного сервиса в Европе и почему спрос растёт."
            },
            {
              icon: <Briefcase className="text-primary" size={24} />,
              text: "Математика доходов мастера: почему 3000€ — реалистичная цифра."
            },
            {
              icon: <Award className="text-primary" size={24} />,
              text: "Какие навыки нужны и как их можно получить за 30 дней без опыта."
            },
            {
              icon: <Users className="text-primary" size={24} />,
              text: "Где берет заказы мастер окон и как быстро выйти на первые деньги."
            },
            {
              icon: <AlertTriangle className="text-primary" size={24} />,
              text: "5 типичных ошибок новичков, которые приводят к потерям и возвратам."
            },
            {
              icon: <CheckCircle2 className="text-primary" size={24} />,
              text: "Как выбрать обучение, которое действительно даёт навык, а не теорию."
            },
            {
              icon: <Award className="text-primary" size={24} />,
              text: "Пошаговый план входа в профессию в зависимости от города и региона.",
              span: true
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all ${item.span ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="shrink-0 mt-1 bg-white p-2 rounded-lg shadow-sm h-min">
                {item.icon}
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={handleRedirect} className="px-10 py-4 text-lg">
            Получить доступ к видео
          </Button>
        </div>
      </Section>

      {/* --- Target Audience --- */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-10">
            Кому подойдёт это видео?
          </h2>
          
          <div className="space-y-4">
            {[
              "Тем, кто хочет легально зарабатывать от 3000€ в Европе.",
              "Тем, кто ищет быструю востребованную профессию без долгого обучения.",
              "Тем, кто хочет сменить работу на стабильную и понятную по доходу.",
              "Тем, кто устал от низкооплачиваемых сезонных работ.",
              "Тем, кто хочет открывать собственную сервисную нишу."
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-transparent hover:border-primary transition-all">
                <div className="bg-red-50 p-2 rounded-full text-primary shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-lg text-gray-800 font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button onClick={handleRedirect} variant="outline" className="px-10">
              Смотреть видео бесплатно
            </Button>
          </div>
        </div>
      </Section>

      {/* --- Market Facts (Dark Section) --- */}
      <Section className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto leading-tight">
            Почему <span className="text-primary">мастер окон</span> — одна из самых быстрорастущих профессий в Европе?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Рост установок", desc: "Рост количества установок окон и дверей.", icon: <TrendingUp size={32} /> },
              { title: "Дефицит кадров", desc: "Нехватка сертифицированных мастеров.", icon: <Users size={32} /> },
              { title: "Доходность", desc: "Высокая маржинальность услуг.", icon: <Award size={32} /> },
              { title: "Свободная ниша", desc: "Низкая конкуренция в большинстве городов.", icon: <Briefcase size={32} /> },
              { title: "Стабильность", desc: "Отсутствие сезонности.", icon: <CheckCircle2 size={32} /> }
            ].map((fact, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-2xl hover:bg-gray-800 transition-colors">
                <div className="text-primary mb-4">{fact.icon}</div>
                <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                <p className="text-gray-400">{fact.desc}</p>
              </div>
            ))}
             
             {/* CTA Card in Grid */}
             <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                <p className="text-white/90 font-medium mb-4">Узнайте все подробности в видео</p>
                <button 
                  onClick={handleRedirect}
                  className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full"
                >
                  Смотреть сейчас
                </button>
             </div>
          </div>
        </div>
      </Section>

      {/* --- About Us --- */}
      <Section id="about">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
           {/* Image Col */}
           <div className="md:col-span-5 order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-primary rounded-2xl transform translate-x-3 translate-y-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1672748341520-6a839e6c05bb" 
               alt="Инженер в каске" 
               className="relative rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
             />
           </div>

           {/* Content Col */}
           <div className="md:col-span-7 order-1 md:order-2 space-y-6">
             <div className="inline-block bg-red-50 text-primary px-3 py-1 rounded-full text-sm font-bold tracking-wide">
               О НАС
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-secondary">
               Кто подготовил это видео и почему вам стоит слушать нас
             </h2>
             
             <div className="space-y-4 text-gray-600 text-lg">
               <p className="font-semibold text-secondary">
                 SW.LAB — единственная в Европе сертифицированная школа мастеров по услугам сервиса окон.
               </p>
               <p>
                 Мы начинали самостоятельно в Польше два года назад и стали лидерами рынка (более 25 000 обслуженных окон).
               </p>
               <ul className="space-y-3 mt-4">
                 <li className="flex items-start gap-3">
                   <div className="mt-1 bg-primary/10 p-1 rounded text-primary">
                     <TrendingUp size={16} />
                   </div>
                   <span>Масштабирование от 1 города до 6 стран.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 bg-primary/10 p-1 rounded text-primary">
                     <AlertTriangle size={16} />
                   </div>
                   <span>Совершили все возможные ошибки, чтобы передать вам чистую выжимку опыта и готовую бизнес-модель.</span>
                 </li>
               </ul>
             </div>
           </div>
        </div>
      </Section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="font-extrabold text-2xl tracking-tighter text-secondary block mb-6">
            SW<span className="text-primary">.</span>LAB
          </span>
          <p className="text-gray-500 mb-8">© 2025 Все права защищены</p>
          
          <div className="max-w-md mx-auto">
            <Button onClick={handleRedirect} fullWidth className="text-lg py-4 shadow-xl shadow-red-100">
              Получить доступ к видео
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}