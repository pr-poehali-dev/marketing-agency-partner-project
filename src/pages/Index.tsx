import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const stats = [
    { value: '500+', label: 'Партнерских программ', icon: 'Network' },
    { value: '99.8%', label: 'Время безотказной работы', icon: 'Shield' },
    { value: '15M+', label: 'Отслеженных конверсий', icon: 'TrendingUp' },
    { value: '24/7', label: 'Техническая поддержка', icon: 'Headphones' }
  ];

  const services = [
    {
      title: 'CPA Трекинг',
      description: 'Мощная аналитическая платформа для отслеживания конверсий и оптимизации кампаний',
      icon: 'BarChart3',
      features: ['Real-time отчеты', 'Anti-fraud защита', 'API интеграция']
    },
    {
      title: 'Партнерские Сети',
      description: 'Интеграция с топовыми CPA сетями и прямыми рекламодателями',
      icon: 'Users',
      features: ['1000+ офферов', 'Персональные менеджеры', 'Быстрые выплаты']
    },
    {
      title: 'Автоматизация',
      description: 'ИИ-решения для автоматической оптимизации рекламных кампаний',
      icon: 'Bot',
      features: ['Умное распределение', 'A/B тестирование', 'Прогнозирование ROI']
    }
  ];

  const platforms = [
    { name: 'Google Ads', logo: '🔍', status: 'Активно' },
    { name: 'Facebook Ads', logo: '📘', status: 'Активно' },
    { name: 'TikTok Ads', logo: '🎵', status: 'Активно' },
    { name: 'Admitad', logo: '💼', status: 'Активно' },
    { name: 'PartnerKin', logo: '⚡', status: 'Активно' },
    { name: 'ActionPay', logo: '💰', status: 'Активно' }
  ];

  const blogPosts = [
    {
      title: 'Топ-10 CPA офферов в 2024 году',
      excerpt: 'Разбираем самые прибыльные направления в партнерском маркетинге',
      date: '12 августа 2024',
      readTime: '5 мин'
    },
    {
      title: 'Как увеличить ROI на 300% с помощью ИИ',
      excerpt: 'Практические советы по автоматизации рекламных кампаний',
      date: '10 августа 2024',
      readTime: '8 мин'
    },
    {
      title: 'Новые требования iOS 17 для мобильного трафика',
      excerpt: 'Что изменилось в отслеживании и как адаптироваться',
      date: '8 августа 2024',
      readTime: '6 мин'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TechPartners</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="glow-effect">
              Начать работу
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Новое поколение партнерского маркетинга
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Максимизируйте доходы с CPA партнерками
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Наше агентство использует передовые технологии и ИИ для управления партнерскими программами. 
                Интеграция с 500+ CPA сетями и автоматическая оптимизация кампаний.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-effect hover-scale">
                  Получить консультацию
                  <Icon name="Calendar" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/a5564e96-edd3-47e7-b0ce-08a4c40aa169.jpg" 
                alt="Tech workspace"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live трекинг активен</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon name={stat.icon as any} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Settings" size={16} className="mr-2" />
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр CPA решений</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От трекинга до автоматизации — все инструменты для успешного партнерского маркетинга
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale group cursor-pointer border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Integration */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Интеграции с платформами</h2>
            <p className="text-muted-foreground">Подключаем ваши кампании к лучшим CPA сетям</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover-scale cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{platform.logo}</div>
                  <h3 className="font-semibold mb-2">{platform.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {platform.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <img 
              src="/img/d6d8be0e-3e9b-41c9-a6ec-8951bbae6b8a.jpg" 
              alt="Partnership network"
              className="rounded-2xl shadow-2xl mx-auto max-w-2xl hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Блог
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Экспертные материалы</h2>
            <p className="text-xl text-muted-foreground">Актуальные инсайты и стратегии в мире CPA</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-scale cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Icon name="Clock" size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-semibold">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами для персональной консультации
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">hello@techpartners.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-muted-foreground">@techpartners_support</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Бесплатная консультация</CardTitle>
                    <CardDescription>
                      Оставьте заявку и мы свяжемся с вами в течение часа
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Имя</label>
                        <input 
                          type="text" 
                          className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Расскажите о ваших целях и задачах..."
                      ></textarea>
                    </div>
                    <Button className="w-full glow-effect">
                      Отправить заявку
                      <Icon name="Send" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">TechPartners</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Ведущее агентство партнерского маркетинга с фокусом на CPA и автоматизацию кампаний.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">CPA Трекинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнерские Сети</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Автоматизация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-lg">💬</span>
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-lg">🔗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TechPartners. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}