import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  Cpu,
  Droplet,
  FlaskConical,
  Handshake,
  Layers,
  Leaf,
  Menu,
  Monitor,
  Package,
  Play,
  Settings,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  Sprout,
  TrendingUp,
  Utensils,
  X,
} from 'lucide-react';
import { AdigoShowcase } from './components/AdigoShowcase';
import { OrganicVietnamLogo } from './components/BrandMarks';
import {
  ArticleReaderModal,
  PartnershipContactModal,
  ProductDetailModal,
} from './components/Modals';
import { ResilientImage } from './components/ResilientImage';
import {
  NEWS_ARTICLES,
  NewsArticle,
  PARTNERSHIP_PILLARS,
  PRODUCTS,
  ProductItem,
  QUALITY_ITEMS,
  SUPPLY_STAGES,
} from './data/ecosystemData';

const STAGE_POSITIONS = [
  { top: '2%', left: '50%', transform: 'translate(-50%, 0)' },
  { top: '28%', right: '0%', transform: 'translate(0, 0)' },
  { bottom: '4%', right: '4%', transform: 'translate(0, 0)' },
  { bottom: '4%', left: '4%', transform: 'translate(0, 0)' },
  { top: '28%', left: '0%', transform: 'translate(0, 0)' },
];

function PoultryIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 5c1.5 0 2.5 1 2.5 2.4 0 .8-.4 1.5-1 2 .9 1 1.5 2.4 1.5 4.1 0 3.2-2.6 5.5-6.2 5.5H8.5C5.7 19 4 17.2 4 14.5c0-1.9 1-3.3 2.5-3.8C7.8 10.2 9 9.2 9.5 7.7 10.1 6 11.8 5 15 5Z" />
      <path d="M17.5 6.8 20 7.5l-1.8 1.3" />
      <path d="M9.5 19v2.2M13.5 19v2.2" />
    </svg>
  );
}

function PorkIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4.5 13c0-3.3 2.8-5.5 7.2-5.5 3.6 0 6.3 1.4 7.4 3.6l1.4.4c.6.2.8.8.6 1.5l-.4 1.2c-.2.6-.7.9-1.4.9h-.8c-.4 1.2-1.2 2.2-2.4 2.7v2.2h-2.1v-1.6H10v1.6H7.9v-2.2C5.8 17 4.5 15.3 4.5 13Z" />
      <path d="M15.2 7.8 16.7 5.5l1.1 2.5" />
      <circle cx="17.2" cy="11.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

function BeefIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12.2c0-2.5 2-4.2 5.2-4.2h6.3c1.6 0 3 .7 3.8 2l1.2.4c.5.2.8.7.7 1.3l-.3 1.5c-.2.7-.7 1.1-1.4 1.1H18v4.2h-2v-3.2H9.2v3.2h-2v-3.5C5.3 14.8 4 13.7 4 12.2Z" />
      <path d="M17.8 8.2c.6-.9 1.6-1.4 2.5-1.2" />
      <path d="M4 11.2c-1 .4-1.3 1.5-1 2.8" />
    </svg>
  );
}

function EggIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3.5c3.4 0 6.5 6.1 6.5 10.6a6.5 6.5 0 1 1-13 0C5.5 9.6 8.6 3.5 12 3.5Z" />
    </svg>
  );
}

function CitrusIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v10M7.7 9.5l8.6 5M16.3 9.5l-8.6 5" />
    </svg>
  );
}

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedStageId, setSelectedStageId] = useState<string>(SUPPLY_STAGES[0].id);
  const [selectedQualityId, setSelectedQualityId] = useState<string>(QUALITY_ITEMS[0].id);
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<NewsArticle | null>(null);
  const [showNewsArchive, setShowNewsArchive] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string | undefined>(undefined);

  const productShowcaseCards = [
    {
      id: 'poultry',
      title: 'Thịt gia cầm',
      desc: 'Gà, gà sao, chim sâm cầm... được nuôi theo mô hình thảo dược.',
      image: '/assets/aistudio/chicken_d94f23e2.jpg',
      Icon: PoultryIcon,
      product: PRODUCTS[0],
    },
    {
      id: 'pork',
      title: 'Thịt lợn',
      desc: 'Thịt lợn tươi sạch, kiểm soát từ nguồn gốc.',
      image: '/assets/aistudio/pork_6d5dc665.jpg',
      Icon: PorkIcon,
      product: PRODUCTS[1],
    },
    {
      id: 'beef',
      title: 'Thịt bò và trâu',
      desc: 'Thịt bò, trâu nuôi dưỡng theo quy trình có thảo dược.',
      image: '/assets/aistudio/beef_9f23d01c.jpg',
      Icon: BeefIcon,
      product: PRODUCTS[2],
    },
    {
      id: 'eggs',
      title: 'Trứng gia cầm',
      desc: 'Trứng được thu hoạch, phân loại và bảo quản phù hợp.',
      image: '/assets/aistudio/eggs_ce6af497.jpg',
      Icon: EggIcon,
      product: PRODUCTS[3],
    },
    {
      id: 'orange',
      title: 'Cam',
      desc: 'Cam trồng theo quy trình nông nghiệp phù hợp, vị ngọt thanh, thơm dịu.',
      image: '/assets/aistudio/orange_fa3dd582.jpg',
      Icon: CitrusIcon,
      product: PRODUCTS[4],
    },
    {
      id: 'pomelo',
      title: 'Bưởi',
      desc: 'Bưởi được tuyển chọn theo mùa, đáp ứng nhu cầu thị trường.',
      image: '/assets/aistudio/pomelo_91f9139d.jpg',
      Icon: CitrusIcon,
      product: PRODUCTS[5],
    },
  ];

  const activeQuality =
    QUALITY_ITEMS.find((q) => q.id === selectedQualityId) || QUALITY_ITEMS[0];

  const featuredArticle = NEWS_ARTICLES[0];
  const secondaryArticles = NEWS_ARTICLES.slice(1);

  const openContact = (topic?: string) => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAFBF8] text-[#142419] overflow-x-hidden">
      {/* Top Bar: Strict 3-Zone Contract with Official Logo */}
      <header className="sticky top-0 z-40 w-full h-[72px] bg-white/95 backdrop-blur-sm border-b border-[#E3ECE0]">
        <div className="section-container h-full flex items-center justify-between gap-3 sm:gap-6">
          {/* Zone 1: Exact Official Logo */}
          <a
            href="#top"
            className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#135D2F] rounded-md"
            aria-label="Trang chủ Organic Việt Nam"
          >
            <OrganicVietnamLogo className="h-8 sm:h-10 w-auto" />
          </a>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Điều hướng chính"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#324336]"
          >
            <a
              href="#ve-chung-toi"
              className="hover:text-[#135D2F] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Về chúng tôi
            </a>
            <a
              href="#he-sinh-thai"
              className="hover:text-[#135D2F] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Hệ sinh thái
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#135D2F] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Sản phẩm
            </a>
            <a
              href="#adigo"
              className="hover:text-[#135D2F] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              ADIGO
            </a>
            <a
              href="#truyen-thong"
              className="hover:text-[#135D2F] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Truyền thông
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA button (+ mobile toggle) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => openContact()}
              className="px-3 sm:px-4 py-2 rounded-lg bg-[#135D2F] hover:bg-[#0E4824] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#135D2F]"
            >
              Liên hệ hợp tác
            </button>
            <button
              type="button"
              onClick={() => setMobileNavOpen((o) => !o)}
              aria-label={mobileNavOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={mobileNavOpen}
              className="md:hidden w-10 h-10 rounded-lg border border-[#DCE7D5] flex items-center justify-center text-[#142419] cursor-pointer"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation sheet */}
        {mobileNavOpen && (
          <nav
            aria-label="Menu di động"
            className="md:hidden bg-white border-b border-[#DCE7D5] px-4 py-3 flex flex-col gap-1"
          >
            {[
              { href: '#ve-chung-toi', label: 'Về chúng tôi' },
              { href: '#he-sinh-thai', label: 'Hệ sinh thái' },
              { href: '#san-pham', label: 'Sản phẩm' },
              { href: '#chuoi-cung-ung', label: 'Chuỗi cung ứng' },
              { href: '#adigo', label: 'ADIGO' },
              { href: '#truyen-thong', label: 'Truyền thông' },
              { href: '#hop-tac', label: 'Hợp tác' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#142419] hover:bg-[#F2F6EE]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" className="flex-1 w-full">
        {/* SECTION 01 – HERO BANNER (Top-Left Editorial Typography + Bottom Frosted 3-Pillar Green Strip) */}
        <section className="relative w-full overflow-hidden bg-[#F4FAFE]">
          <div className="relative w-full sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] xl:min-h-[650px] max-h-[760px] flex flex-col justify-between">
            {/* Photo container: stacked above building on <640px mobile, full-bleed backdrop on sm+ */}
            <div className="relative sm:static flex-1 flex flex-col justify-start">
              {/* Mobile (<640px): crisp sky header block above unclipped landscape photo */}
              <div className="sm:hidden bg-gradient-to-b from-[#F5FAFE] to-[#EDF6FC] px-4 pt-6 pb-4">
                <div className="space-y-2.5">
                  <div className="w-12 h-[3px] rounded-full bg-[#78B833]" aria-hidden="true" />
                  <h1 className="text-[1.75rem] font-bold tracking-tight text-[#0C351B] leading-[1.15]">
                    Kiến tạo hệ sinh thái giá trị
                  </h1>
                  <p className="text-[13.5px] font-medium text-[#1D3B28] leading-relaxed">
                    Phát triển nông nghiệp bền vững, thực phẩm an toàn và công nghệ hiện đại, kiến
                    tạo giá trị xanh cho cộng đồng và tương lai lâu dài.
                  </p>
                </div>
              </div>
              <div className="sm:hidden relative w-full h-[210px] overflow-hidden">
                <ResilientImage
                  src="/assets/aistudio/OrganicVN_Banner_Desktop_Logo_Goc_77d1067f.png"
                  alt="Tòa nhà điều hành Tập đoàn Organic Việt Nam giữa cảnh quan thiên nhiên xanh"
                  className="w-full h-full object-cover object-[56%_75%]"
                />
                <div
                  className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#EDF6FC] to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Tablet & Desktop (sm+): full-bleed photographic banner + sky-mist left scrim */}
              <ResilientImage
                src="/assets/aistudio/OrganicVN_Banner_Desktop_Logo_Goc_77d1067f.png"
                alt="Tòa nhà điều hành Tập đoàn Organic Việt Nam giữa cảnh quan thiên nhiên xanh"
                className="hidden sm:block absolute inset-0 w-full h-full object-cover object-[58%_80%] md:object-[64%_86%] xl:object-bottom"
              />
              <div
                className="hidden sm:block absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#F1F8FC]/92 via-[#E9F4FA]/55 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="hidden md:block absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-[#F4FAFE]/82 via-[#EEF6FB]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Top-Left Hero Lockup (sm+) */}
              <div className="hidden sm:block relative z-10 section-container pt-10 lg:pt-12 pb-32">
                <div className="max-w-4xl space-y-3">
                  <div className="w-16 h-[3px] rounded-full bg-[#78B833]" aria-hidden="true" />
                  <h1 className="text-[clamp(1.85rem,1.2rem+2.1vw,3.3rem)] font-bold tracking-tight text-[#0C351B] leading-[1.12]">
                    Kiến tạo hệ sinh thái giá trị
                  </h1>
                  <p className="text-[clamp(0.9rem,0.78rem+0.32vw,1.0625rem)] font-medium text-[#1D3B28] leading-relaxed max-w-xl">
                    Phát triển nông nghiệp bền vững, thực phẩm an toàn và công nghệ hiện đại, kiến
                    tạo giá trị xanh cho cộng đồng và tương lai lâu dài.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Frosted Deep-Green 3-Pillar Strip (Stacked cleanly below image on mobile, overlaid along lawn on sm+) */}
            <div className="relative z-10 w-full sm:mt-auto">
              <div className="w-full bg-[#164723] sm:bg-[#164723]/86 sm:backdrop-blur-md border-t border-white/15">
                <div className="section-container py-3 sm:py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/25">
                    {[
                      {
                        icon: Sprout,
                        title: 'Nông nghiệp',
                        desc: 'Mô hình thảo dược',
                        href: '#he-sinh-thai',
                      },
                      {
                        icon: Utensils,
                        title: 'Thực phẩm',
                        desc: 'Chất lượng & chuỗi cung ứng',
                        href: '#san-pham',
                      },
                      {
                        icon: Layers,
                        title: 'Công nghệ',
                        desc: 'Quản trị & kết nối thị trường',
                        href: '#adigo',
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex items-center sm:justify-center gap-3.5 sm:gap-4 py-2.5 sm:py-1 sm:px-4 lg:px-6 transition-opacity hover:opacity-95"
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#BCE856] stroke-[1.75] shrink-0 transition-transform group-hover:scale-105" />
                          <div className="min-w-0">
                            <p className="text-[clamp(0.95rem,0.9rem+0.3vw,1.2rem)] font-bold text-white leading-tight">
                              {item.title}
                            </p>
                            <p className="text-xs sm:text-[13px] text-white/90 mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
                {/* Signature Bottom Lime-Sage Wave Edge */}
                <svg
                  viewBox="0 0 1440 34"
                  preserveAspectRatio="none"
                  className="block w-full h-4 sm:h-6 pointer-events-none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroWaveLime" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#65A630" stopOpacity="0.95" />
                      <stop offset="55%" stopColor="#83BE48" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#58982B" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 12C280 30 560 0 920 16C1160 26 1320 12 1440 6V34H0V12Z"
                    fill="url(#heroWaveLime)"
                  />
                  <path
                    d="M0 24C360 12 760 32 1440 16V34H0V24Z"
                    fill="#F8FAF6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 – VỀ ORGANIC VIỆT NAM (Fresh Botanical Ivory-Sage Surface + Rolling Meadow Horizon) */}
        <section
          id="ve-chung-toi"
          className="relative w-full h-auto overflow-hidden bg-gradient-to-br from-[#F8FAF6] via-[#FAFBF8] to-[#EEF5E6]"
        >
          {/* Soft top-right atmospheric light sweep */}
          <svg
            viewBox="0 0 600 320"
            className="hidden lg:block pointer-events-none absolute top-0 right-0 w-[38vw] max-w-[680px] h-auto text-[#E5F0DB]/65"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M140 0C250 115 410 185 600 220V0H140Z" />
          </svg>

          {/* Bottom Misty Hills + Sunlit Green Meadow Curves Transitioning into Section 03 */}
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-24 sm:h-32 lg:h-40"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="aboutHillFar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E6F0DD" stopOpacity="0.65" />
                <stop offset="55%" stopColor="#DAE8C7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C3DF95" stopOpacity="0.92" />
              </linearGradient>
              <linearGradient id="aboutMeadowNear" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EFF6E9" stopOpacity="0.95" />
                <stop offset="52%" stopColor="#DCEAC4" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#90C752" stopOpacity="0.94" />
              </linearGradient>
            </defs>
            <path
              d="M0 98C260 60 540 118 860 76C1120 42 1300 18 1440 36V160H0V98Z"
              fill="url(#aboutHillFar)"
            />
            <path
              d="M0 118C320 72 680 136 1060 100C1250 82 1360 66 1440 56V160H0V118Z"
              fill="url(#aboutMeadowNear)"
            />
            <path
              d="M0 142C420 118 980 154 1440 132V160H0V142Z"
              fill="#EDF4E7"
            />
          </svg>

          <div className="relative z-10 section-container section-py pb-[clamp(5rem,4rem+3.2vw,8rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-y-5 lg:gap-x-10 xl:gap-x-14 items-center">
              {/* Block 1: Title & Intro (Clean Green Accent Rule; 1st on Mobile/Tablet, Top-Right on Desktop) */}
              <div className="lg:col-start-2 lg:row-start-1 lg:self-end space-y-3 sm:space-y-4">
                <div className="w-12 sm:w-14 h-[3px] rounded-full bg-[#4F8930]" aria-hidden="true" />
                <h2 className="fluid-h2 font-bold text-[#142B1C] tracking-tight">
                  Về Organic Việt Nam
                </h2>
                <p className="fluid-lead text-[#3E5143] max-w-2xl">
                  Công ty Cổ phần Tập đoàn Organic Việt Nam là tập đoàn phát triển hệ sinh thái
                  nông nghiệp và thực phẩm dựa trên mô hình nông nghiệp thảo dược, hướng tới nông
                  nghiệp bền vững, sản phẩm an toàn và chuỗi giá trị xanh, kết nối thị trường
                  trong nước và quốc tế.
                </p>
              </div>

              {/* Block 2: Crisp Botanical Collage Visual (Full 50% col + outer left edge alignment) */}
              <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center w-full flex items-center justify-center lg:justify-start">
                <div className="w-full max-w-[540px] sm:max-w-[600px] lg:max-w-none lg:w-[calc(100%+clamp(1rem,0.5rem+2vw,3.25rem))] lg:-ml-[clamp(1rem,0.5rem+2vw,3.25rem)] mx-auto lg:mr-0">
                  <ResilientImage
                    src="/images/about-collage.png"
                    alt="Hệ sinh thái nông nghiệp thảo dược, trái cây hữu cơ và chăn nuôi sinh thái Organic Việt Nam"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>

              {/* Block 3: 3 Value Pillars (3rd on Mobile/Tablet, Bottom-Right on Desktop) */}
              <div className="lg:col-start-2 lg:row-start-2 lg:self-start divide-y divide-[#DFEAD8] max-w-2xl">
                {[
                  {
                    icon: Sprout,
                    title: 'Nông nghiệp thảo dược',
                    desc: 'Xây dựng vùng nguyên liệu thảo dược bản địa, kết hợp nghiên cứu dinh dưỡng tự nhiên và quy trình nuôi trồng thân thiện môi trường.',
                    href: '#he-sinh-thai',
                  },
                  {
                    icon: Package,
                    title: 'Thực phẩm và chuỗi cung ứng',
                    desc: 'Tổ chức liên kết từ nguồn giống, nuôi trồng, sơ chế đến bảo quản và phân phối, nhằm mang lại nguồn thực phẩm an toàn, đồng nhất.',
                    href: '#chuoi-cung-ung',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Công nghệ và kết nối thị trường',
                    desc: 'Ứng dụng công nghệ quản trị dữ liệu sản xuất, chuẩn hóa hồ sơ truy xuất và phát triển nền tảng thương mại số ADIGO.',
                    href: '#adigo',
                  },
                ].map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <a
                      key={pillar.title}
                      href={pillar.href}
                      className="group py-4 sm:py-5 first:pt-2 last:pb-1 flex items-center gap-3.5 sm:gap-5 transition-colors"
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#E9F2E2] text-[#1E6B38] group-hover:bg-[#135D2F] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[clamp(1rem,0.95rem+0.2vw,1.125rem)] font-bold text-[#142B1C] group-hover:text-[#135D2F] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-[clamp(0.8125rem,0.78rem+0.14vw,0.9375rem)] text-[#4A5D4F] mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E6B38] opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 – HỆ SINH THÁI (Soft Sage Alternating Surface, 50/50 Corporate Split, Seamless Curved Transition) */}
        <section
          id="he-sinh-thai"
          className="relative w-full h-auto overflow-hidden bg-gradient-to-br from-[#EDF4E7] via-[#F2F7ED] to-[#E8F1DF] flex flex-col justify-center"
        >
          {/* Right architectural light botanical backdrop anchoring outer right viewport on wide screens */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-[45vw] max-w-[1140px] bg-gradient-to-l from-[#E0ECD6]/80 via-[#E7F0DF]/45 to-transparent rounded-l-[180px]"
          />

          {/* Simple bottom organic wave continuing softly into Section 04 */}
          <svg
            viewBox="0 0 1440 84"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-12 sm:h-16 lg:h-20 text-[#F6F9F2]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 44C420 0 980 84 1440 28V84H0V44Z" />
          </svg>

          <div className="relative z-10 section-container section-py pb-[clamp(3.75rem,3rem+2.5vw,6rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
              {/* Left Editorial Narrative + 4 Circular-Icon Pillars (50%) */}
              <div className="w-full max-w-2xl mx-auto lg:mx-0 space-y-7 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="fluid-h2 font-bold text-[#14331E] tracking-tight">
                    Mô hình nông nghiệp thảo dược
                  </h2>
                  <p className="fluid-lead text-[#3E5143]">
                    Organic Việt Nam phát triển mô hình nông nghiệp ứng dụng thảo dược, kết hợp nguồn
                    nguyên liệu tự nhiên, dinh dưỡng, kỹ thuật chăm sóc và quản lý môi trường, nhằm
                    tạo ra sản phẩm an toàn, chất lượng và ổn định.
                  </p>
                </div>

                {/* 2x2 Pillar Grid matching reference icon badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-6">
                  {[
                    {
                      icon: Leaf,
                      title: 'Nguồn thảo dược',
                      desc: 'Tuyển chọn và phát triển nguồn thảo dược bản địa có giá trị.',
                    },
                    {
                      icon: Layers,
                      title: 'Dinh dưỡng & kỹ thuật',
                      desc: 'Phối trộn dinh dưỡng và áp dụng kỹ thuật chăm sóc phù hợp cho từng giai đoạn.',
                    },
                    {
                      icon: Droplet,
                      title: 'Môi trường nuôi trồng',
                      desc: 'Kiểm soát nguồn nước, thổ nhưỡng và điều kiện sinh thái.',
                    },
                    {
                      icon: FlaskConical,
                      title: 'Nghiên cứu & đánh giá',
                      desc: 'Theo dõi, đánh giá kết quả để liên tục cải tiến quy trình.',
                    },
                  ].map((factor) => {
                    const Icon = factor.icon;
                    return (
                      <div key={factor.title} className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-white/85 border border-[#D4E4C8] text-[#2D6E32] shadow-xs flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-[clamp(0.9375rem,0.9rem+0.15vw,1.05rem)] font-bold text-[#173E23] leading-snug">
                            {factor.title}
                          </h3>
                          <p className="text-[clamp(0.8125rem,0.78rem+0.12vw,0.875rem)] text-[#4A5D4F] leading-relaxed">
                            {factor.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Large 6-Herb Radial Wheel (50%, outer right bleed, ZERO white edge fades) */}
              <div className="w-full flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-[540px] sm:max-w-[600px] lg:max-w-none lg:w-[calc(100%+clamp(1rem,0.5rem+2vw,3.25rem))] lg:-mr-[clamp(1rem,0.5rem+2vw,3.25rem)] mx-auto lg:ml-0">
                  <ResilientImage
                    src="/images/herbal-model-wheel.png"
                    alt="Mô hình nông nghiệp thảo dược và 6 thảo dược tiêu biểu: Gừng, Nghệ, Đinh lăng, Đương quy, Sâm Bố Chính, Chùm ngây"
                    className="w-full h-auto block object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 – SẢN PHẨM ORGANIC VIỆT NAM (Clean 6-Card Showcase Grid + Subtle Sage Curve Transition) */}
        <section
          id="san-pham"
          className="relative w-full h-auto overflow-hidden section-py pb-[clamp(4.5rem,3.5rem+2vw,6.5rem)] bg-gradient-to-b from-[#F6F9F2] via-[#FAFBF8] to-[#FFFFFF]"
        >
          {/* Gentle soft sage wave along bottom melting seamlessly into Section 05 (#FFFFFF) */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-14 sm:h-20"
            aria-hidden="true"
          >
            <path
              d="M0 36C320 6 680 78 1040 42C1230 24 1350 26 1440 42V100H0V36Z"
              fill="#ECF3E3"
              fillOpacity="0.65"
            />
            <path
              d="M0 68C420 44 940 94 1440 58V100H0V68Z"
              fill="#FFFFFF"
            />
          </svg>

          <div className="relative z-10 section-container space-y-8 sm:space-y-10">
            {/* Editorial Header */}
            <div className="max-w-3xl space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3 text-[#2E7D28]">
                <span className="text-sm sm:text-base font-bold tracking-wide">Sản phẩm</span>
                <span
                  className="h-[2px] w-16 sm:w-20 rounded-full bg-gradient-to-r from-[#5FA935] to-[#B7DA9A]"
                  aria-hidden="true"
                />
              </div>
              <h2 className="fluid-h2 font-bold text-[#142B1C] tracking-tight">
                Sản phẩm Organic Việt Nam
              </h2>
              <p className="fluid-lead text-[#3E5143]">
                Organic Việt Nam phát triển danh mục thực phẩm đa dạng từ chăn nuôi và trồng trọt
                theo mô hình nông nghiệp ứng dụng thảo dược, kết hợp nguồn sản xuất của tập đoàn với
                các đối tác được lựa chọn, chú trọng kiểm soát chất lượng và khả năng đáp ứng nhu
                cầu thị trường.
              </p>
            </div>

            {/* Balanced 3x2 / 2x3 Product Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
              {productShowcaseCards.map((item) => {
                const Icon = item.Icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveProductModal(item.product)}
                    className="group text-left rounded-[22px] bg-[#FAFDF8] border border-[#E5EDE0] hover:border-[#5FA935]/60 shadow-[0_12px_28px_-14px_rgba(20,51,30,0.13)] hover:shadow-[0_18px_36px_-12px_rgba(25,94,38,0.22)] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#135D2F]"
                  >
                    {/* Top Product Photo + Soft Arched Wave Cut + Leaf Badge */}
                    <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden">
                      <ResilientImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.07] transition-transform duration-300"
                      />
                      <svg
                        viewBox="0 0 400 38"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-7 text-[#FAFDF8]"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M0 24C115 6 250 18 400 28V38H0V24Z" />
                      </svg>
                      <span className="absolute bottom-1.5 left-4 z-10 w-11 h-11 rounded-tl-[16px] rounded-tr-[6px] rounded-br-[16px] rounded-bl-[16px] bg-gradient-to-br from-[#5CA329] to-[#3B7E1E] text-white border-[2.5px] border-[#FAFDF8] shadow-sm flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Card Details & Circular Arrow */}
                    <div className="px-5 pt-2 pb-5 flex-1 flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-[19px] font-bold text-[#142B1C] group-hover:text-[#135D2F] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13.5px] text-[#455849] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-[#E6F3D9] group-hover:bg-[#195E26] text-[#1D5E24] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 05 – CHUỖI CUNG ỨNG LIÊN KẾT */}
        <section
          id="chuoi-cung-ung"
          className="relative w-full h-auto overflow-hidden section-py bg-gradient-to-b from-white via-[#FAFDF8] to-[#F7F9F4] flex flex-col justify-center"
        >
          {/* Decorative top-right soft leaf branch */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute top-0 right-0 w-72 xl:w-80 opacity-85"
          >
            <ResilientImage
              src="/images/products-top-leaves.png"
              alt=""
              className="w-full h-auto object-contain object-right-top mix-blend-multiply"
            />
          </div>

          {/* Subtle bottom organic green hillside waves blending seamlessly into Section 06 (#F7FAF3) */}
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-16 sm:h-24"
            aria-hidden="true"
          >
            <path
              d="M0 45C240 95 480 18 760 64C1020 105 1260 40 1440 20V120H0V45Z"
              fill="#DCECC8"
              fillOpacity="0.65"
            />
            <path
              d="M0 78C340 36 680 108 1040 72C1230 53 1350 48 1440 58V120H0V78Z"
              fill="#F7FAF3"
            />
          </svg>

          <div className="relative z-10 section-container space-y-10">
            {/* Editorial Section Header */}
            <div className="max-w-3xl space-y-3">
              <div className="w-40 h-1.5 rounded-full bg-gradient-to-r from-[#5FA935] via-[#9CD277] to-transparent" aria-hidden="true" />
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="fluid-h2 font-bold text-[#14331E] tracking-tight">
                  Chuỗi cung ứng liên kết
                </h2>
                <svg
                  viewBox="0 0 70 28"
                  className="w-12 h-auto text-[#66B032] shrink-0"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 22c18 2 34-3 50-16 5-4 11-6 16-6-2 10-10 21-22 24-14 4-28 2-44-2Z" />
                </svg>
              </div>
              <p className="fluid-lead text-[#3E5143]">
                Tổ chức chuỗi cung ứng liên kết đồng bộ từ nguồn giống, nuôi trồng, thu hoạch, sơ
                chế, bảo quản đến phân phối ra thị trường; được quản lý bằng dữ liệu, đảm bảo chất
                lượng ổn định và truy xuất rõ ràng.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Cols: Circular 5-Stage Capsule Diagram around Center Logo Hub */}
              <div className="lg:col-span-7 xl:col-span-8">
                {/* Wide Desktop (1280px+) Circular Orbital Layout */}
                <div className="hidden xl:block relative h-[560px] max-w-[920px] mx-auto w-full">
                  {/* Circular Green Arrow Flow SVG */}
                  <svg
                    viewBox="0 0 800 560"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="400"
                      cy="300"
                      r="205"
                      fill="none"
                      stroke="#7BBF42"
                      strokeWidth="3.5"
                      strokeOpacity="0.65"
                    />
                    <circle
                      cx="400"
                      cy="300"
                      r="142"
                      fill="none"
                      stroke="#DCEAD0"
                      strokeWidth="1.5"
                    />
                    {/* Directional clockwise flow arrowheads */}
                    <polygon points="543,150 530,146 535,160" fill="#5FA935" />
                    <polygon points="593,365 583,354 598,352" fill="#5FA935" />
                    <polygon points="370,505 383,498 383,512" fill="#5FA935" />
                    <polygon points="210,382 221,390 208,395" fill="#5FA935" />
                    <polygon points="237,175 247,166 245,180" fill="#5FA935" />
                  </svg>

                  {/* Central Brand Hub */}
                  <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 2xl:w-56 2xl:h-56 rounded-full bg-gradient-to-b from-white via-[#FAFDF6] to-[#DCECC8] border-2 border-[#D4E6C3] shadow-[0_14px_34px_-16px_rgba(20,51,30,0.22)] flex flex-col items-center justify-center p-5 text-center z-10">
                    <OrganicVietnamLogo layout="stacked" className="h-11 2xl:h-12 w-auto" />
                    <p className="mt-2 text-xs 2xl:text-sm font-bold text-[#14331E] leading-snug max-w-[160px]">
                      Chuỗi cung ứng từ trang trại đến thị trường
                    </p>
                  </div>

                  {/* 5 Pill-Oval Stage Nodes */}
                  {SUPPLY_STAGES.map((stage, idx) => {
                    const isActive = stage.id === selectedStageId;
                    const pos = STAGE_POSITIONS[idx];
                    const StageIcon =
                      idx === 0
                        ? Sprout
                        : idx === 1
                        ? PoultryIcon
                        : idx === 2
                        ? Settings
                        : idx === 3
                        ? Snowflake
                        : ShoppingCart;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setSelectedStageId(stage.id)}
                        style={pos}
                        className={`group absolute z-20 w-[260px] 2xl:w-[295px] rounded-full p-1.5 pr-4 2xl:p-2 2xl:pr-5 border text-left transition-all cursor-pointer flex items-center gap-2.5 2xl:gap-3 focus-visible:outline-2 focus-visible:outline-[#135D2F] ${
                          isActive
                            ? 'bg-[#F3F9EC] border-[#2E7D28] shadow-[0_14px_30px_-12px_rgba(25,94,38,0.26)]'
                            : 'bg-[#FCFDF9]/95 border-[#DCE8D3] hover:border-[#5FA935] shadow-[0_12px_28px_-14px_rgba(20,51,30,0.16)]'
                        }`}
                      >
                        <div className="w-16 h-16 2xl:w-20 2xl:h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#EDF4E7]">
                          <ResilientImage
                            src={stage.image}
                            alt={stage.title}
                            className="w-full h-full object-cover scale-[1.18]"
                          />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-6 h-6 rounded-full bg-[#195E26] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                              {stage.step}
                            </span>
                            <StageIcon className="w-4 h-4 text-[#2E7D28] shrink-0" />
                          </div>
                          <span className="block text-[13px] font-bold text-[#14331E] leading-tight">
                            {stage.title}
                          </span>
                          <span className="block text-[11px] text-[#4A5D4F] leading-snug line-clamp-2">
                            {stage.summary}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Compact Laptop / Tablet / Mobile Sequence (< 1280px) */}
                <div className="xl:hidden space-y-5">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-gradient-to-b from-white to-[#E6F1D8] border border-[#DCE8D3] px-7 py-5 text-center shadow-sm">
                      <OrganicVietnamLogo layout="stacked" className="h-11 w-auto" />
                      <p className="mt-2 text-xs font-bold text-[#14331E]">
                        Chuỗi cung ứng từ trang trại đến thị trường
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SUPPLY_STAGES.map((stage, idx) => {
                      const StageIcon =
                        idx === 0
                          ? Sprout
                          : idx === 1
                          ? PoultryIcon
                          : idx === 2
                          ? Settings
                          : idx === 3
                          ? Snowflake
                          : ShoppingCart;
                      return (
                        <div
                          key={stage.id}
                          className="rounded-3xl bg-[#FCFDF9] border border-[#DCE8D3] p-3.5 flex items-center gap-3.5 shadow-sm"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#EDF4E7]">
                            <ResilientImage
                              src={stage.image}
                              alt={stage.title}
                              className="w-full h-full object-cover scale-[1.18]"
                            />
                          </div>
                          <div className="min-w-0 space-y-1">
                            <div className="flex items-start gap-1.5">
                              <span className="w-5.5 h-5.5 rounded-full bg-[#195E26] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {stage.step}
                              </span>
                              <StageIcon className="w-3.5 h-3.5 text-[#2E7D28] shrink-0 mt-1" />
                              <span className="text-sm font-bold text-[#14331E] leading-snug">
                                {stage.title}
                              </span>
                            </div>
                            <p className="text-xs text-[#4A5D4F] leading-relaxed">
                              {stage.summary}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right 4/5 Cols: Facility Card + "Giá trị chuỗi cung ứng" */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="rounded-3xl bg-[#FCFDF9] border border-[#E2ECE0] shadow-[0_16px_38px_-14px_rgba(20,51,30,0.16)] overflow-hidden">
                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <ResilientImage
                      src="/images/chain-facility-hd.png"
                      alt="Khu trang trại liên kết quy chuẩn trong hệ sinh thái Organic Việt Nam"
                      className="w-full h-full object-cover scale-[1.03]"
                    />
                  </div>
                  <div className="-mt-7 relative z-10 rounded-t-3xl bg-[#FCFDF9] px-6 pt-6 pb-7 space-y-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#14331E] tracking-tight">
                      Giá trị chuỗi cung ứng
                    </h3>
                    <div className="divide-y divide-[#E7EFE4]">
                      {[
                        {
                          icon: ShieldCheck,
                          title: 'Chất lượng ổn định',
                          desc: 'Kiểm soát xuyên suốt, đồng nhất.',
                        },
                        {
                          icon: Leaf,
                          title: 'Nguồn cung chủ động',
                          desc: 'Từ sản xuất của tập đoàn và đối tác liên kết.',
                        },
                        {
                          icon: Layers,
                          title: 'Minh bạch và truy xuất',
                          desc: 'Quản lý dữ liệu toàn chuỗi, rõ ràng nguồn gốc.',
                        },
                      ].map((item) => {
                        const ValueIcon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="py-3.5 first:pt-1 last:pb-0 flex items-start gap-3.5"
                          >
                            <div className="w-10.5 h-10.5 rounded-xl bg-[#EAF4DF] text-[#2E7D28] flex items-center justify-center shrink-0">
                              <ValueIcon className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-sm sm:text-[15px] font-bold text-[#14331E]">
                                {item.title}
                              </h4>
                              <p className="text-xs sm:text-[13px] text-[#4A5D4F] mt-0.5 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 – CHẤT LƯỢNG & CÔNG NGHỆ (Botanical Lab Curve + 5 Feature Rows + Highlighted ADIGO Bridge) */}
        <section
          id="chat-luong"
          className="relative w-full h-auto overflow-hidden section-py pb-[clamp(4.5rem,3.5rem+2.5vw,7rem)] bg-gradient-to-br from-[#F7FAF3] via-[#F4F9EE] to-[#E6F2DC] flex flex-col justify-center"
        >
          {/* Soft top-right light wash matching sunlit laboratory sage atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 w-[45vw] max-w-[680px] h-72 rounded-full bg-[#DCEECC]/45 blur-3xl"
          />

          {/* Subtle blurred corner foliage depth & seamless meadow curve into Section 07 (#EFF5EB) */}
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-14 sm:h-20 lg:h-24 text-[#EFF5EB]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 54C260 12 520 96 860 58C1120 28 1310 68 1440 36V120H0V54Z" />
          </svg>
          <svg
            viewBox="0 0 160 120"
            className="hidden sm:block pointer-events-none absolute bottom-0 left-0 w-36 lg:w-48 h-auto text-[#77B83C]/35 blur-[2px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 120V32C28 54 68 78 136 120H0Z" />
            <path d="M0 120V68C44 64 92 86 112 120H0Z" fill="#5D9E28" fillOpacity="0.45" />
          </svg>
          <svg
            viewBox="0 0 160 120"
            className="hidden sm:block pointer-events-none absolute bottom-0 right-0 w-36 lg:w-48 h-auto text-[#77B83C]/35 blur-[2px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M160 120V28C124 52 78 78 20 120H160Z" />
          </svg>

          <div className="relative z-10 section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left Column: Accent Rule + Title + Intro + Curved Leaf Lab Window */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-7">
                <div className="space-y-3 sm:space-y-3.5 max-w-xl">
                  <div
                    className="w-16 sm:w-20 h-[3px] rounded-full bg-gradient-to-r from-[#5EA636] to-[#B5D994]"
                    aria-hidden="true"
                  />
                  <h2 className="fluid-h2 font-bold text-[#142B1C] tracking-tight">
                    Chất lượng &amp; công nghệ
                  </h2>
                  <p className="fluid-lead text-[#3E5143]">
                    Xây dựng quy trình kiểm soát từ nguyên liệu đầu vào đến sản phẩm thương mại,
                    tích hợp quản lý hồ sơ và truy xuất nguồn gốc thông qua nền tảng công nghệ của
                    hệ sinh thái là ADIGO.
                  </p>
                </div>

                {/* High-Res Lab Photo inside Organic Botanical Leaf Contour */}
                <div className="relative w-full max-w-[660px] mx-auto lg:mx-0">
                  <svg
                    viewBox="0 0 792 596"
                    className="w-full h-auto block drop-shadow-[0_18px_36px_rgba(20,51,30,0.12)]"
                    role="img"
                    aria-label="Kiểm tra mẫu và quản lý chất lượng tại phòng kiểm nghiệm Organic Việt Nam"
                  >
                    <defs>
                      <clipPath id="qcLabLeafClip">
                        <path d="M22 308C34 208 150 86 376 42C514 14 662 14 756 24C764 156 734 308 642 404C530 502 346 560 138 570C54 574 18 512 22 308Z" />
                      </clipPath>
                      <linearGradient id="qcTopHalo" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#D7ECC4" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#EFF7E7" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="qcBottomSwoosh" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#A9D973" />
                        <stop offset="55%" stopColor="#85C24A" />
                        <stop offset="100%" stopColor="#B8E08C" />
                      </linearGradient>
                    </defs>

                    {/* Subtle Top-Left Leaf Highlight Crescent */}
                    <path
                      d="M12 296C22 182 140 58 378 24C210 64 74 176 28 304Z"
                      fill="url(#qcTopHalo)"
                    />

                    {/* Crisp Lab Photography Window */}
                    <g clipPath="url(#qcLabLeafClip)">
                      <image
                        href="/images/qc-lab-hq.png"
                        x="-28"
                        y="-16"
                        width="852"
                        height="642"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>

                    {/* Clean White Framing Contour */}
                    <path
                      d="M22 308C34 208 150 86 376 42C514 14 662 14 756 24C764 156 734 308 642 404C530 502 346 560 138 570C54 574 18 512 22 308Z"
                      fill="none"
                      stroke="#FAFDF7"
                      strokeWidth="6"
                    />

                    {/* Sweeping Sunlit Lime-Green Lower Curve */}
                    <path
                      d="M178 575C414 568 618 490 734 328C666 472 466 572 195 586Z"
                      fill="url(#qcBottomSwoosh)"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Column: 5 Stacked Control Point Cards + Interactive Highlighted ADIGO Bridge */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
                {QUALITY_ITEMS.map((item, idx) => {
                  const selected = item.id === selectedQualityId;
                  const QualityIcon =
                    idx === 0
                      ? Sprout
                      : idx === 1
                      ? Settings
                      : idx === 2
                      ? Layers
                      : idx === 3
                      ? Share2
                      : Monitor;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedQualityId(item.id)}
                      className={`group w-full text-left rounded-[20px] px-4 py-3.5 sm:px-5 sm:py-4 border transition-all duration-150 flex items-center gap-3.5 sm:gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#135D2F] ${
                        selected
                          ? 'bg-white border-[#6CB240]/70 shadow-[0_12px_28px_-12px_rgba(25,94,38,0.18)]'
                          : 'bg-white/88 hover:bg-white border-white/90 hover:border-[#CEE2BF] shadow-[0_8px_22px_-12px_rgba(20,51,30,0.12)]'
                      }`}
                    >
                      <span
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                          selected
                            ? 'bg-gradient-to-br from-[#E2F2CE] via-[#D4EAB9] to-[#C2E09E] text-[#195E26] ring-1 ring-[#6CB240]/45'
                            : 'bg-gradient-to-br from-[#F2F9EA] via-[#E5F2D5] to-[#D4E8BD] text-[#286828] group-hover:from-[#E8F4DA] group-hover:to-[#C8E3AB]'
                        }`}
                      >
                        <QualityIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.75]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[15px] sm:text-base font-bold text-[#142B1C] group-hover:text-[#135D2F] leading-snug transition-colors">
                          {item.title}
                        </span>
                        <span className="block text-xs sm:text-[13.5px] text-[#455849] mt-0.5 leading-relaxed">
                          {item.summary}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Highlighted Soft-Green Active Control Detail + ADIGO Link Card */}
                <div className="relative mt-4 sm:mt-5 rounded-[24px] bg-gradient-to-r from-[#F0F7E6] via-[#E4F1D3] to-[#D5EABD] border border-[#CAE0B3] shadow-[0_14px_30px_-14px_rgba(32,88,36,0.18)] px-5 py-4 sm:px-6 sm:py-4.5 overflow-hidden">
                  {/* Subtle decorative bottom-right botanical wave matching reference */}
                  <svg
                    viewBox="0 0 320 64"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute bottom-0 right-0 w-52 sm:w-64 h-12 sm:h-14"
                    aria-hidden="true"
                  >
                    <path
                      d="M40 64C120 42 210 18 320 6V64H40Z"
                      fill="#A9D67A"
                      fillOpacity="0.45"
                    />
                    <path
                      d="M110 64C175 48 250 38 320 22V64H110Z"
                      fill="#FFFFFF"
                      fillOpacity="0.32"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                      <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#E9F5DA] to-[#CDE6B3] border border-[#BFE09E]/60 text-[#1E6227] flex items-center justify-center shrink-0">
                        <FlaskConical className="w-6 h-6 stroke-[1.75]" />
                      </span>
                      <span
                        className="hidden sm:block w-px self-stretch my-1 bg-[#87BA65]/45 shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 space-y-0.5">
                        <p className="text-sm sm:text-[15px] font-bold text-[#154E24]">
                          {activeQuality.title}
                        </p>
                        <p className="text-xs sm:text-[13px] text-[#314C37] leading-relaxed">
                          {activeQuality.detail}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#adigo"
                      className="group/link inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#144D23] hover:text-[#0B3315] whitespace-nowrap shrink-0 self-start sm:self-center"
                    >
                      Xem trải nghiệm ADIGO
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 – TRẢI NGHIỆM ADIGO (2-Row Mockup Section) */}
        <AdigoShowcase
          onOpenProduct={(prod) => setActiveProductModal(prod)}
          onOpenContact={(topic) => openContact(topic)}
        />

        {/* SECTION 08 – TRUYỀN THÔNG (Editorial Layout) */}
        <section
          id="truyen-thong"
          className="w-full h-auto section-py bg-white flex flex-col justify-center"
        >
          <div className="section-container space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <h2 className="fluid-h2 font-bold text-[#142419] tracking-tight">
                  Truyền thông
                </h2>
                <p className="fluid-lead text-[#3E5143]">
                  Cập nhật thông tin minh họa về hoạt động sản xuất, nghiên cứu phát triển, hợp tác
                  và tư liệu hình ảnh của Organic Việt Nam.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveArticleModal(null);
                  setShowNewsArchive(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#135D2F] text-[#135D2F] hover:bg-[#135D2F] hover:text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                Xem toàn bộ nội dung
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Featured Large Story */}
              <div className="lg:col-span-7">
                <button
                  type="button"
                  onClick={() => setActiveArticleModal(featuredArticle)}
                  className="group relative w-full h-80 sm:h-[420px] lg:h-full rounded-2xl overflow-hidden border border-[#DCE7D5] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#135D2F]"
                >
                  <ResilientImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover scale-[1.04] group-hover:scale-[1.07] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <div className="flex items-end justify-between gap-4">
                      <div className="space-y-2 max-w-xl">
                        <div className="text-xs text-white/85 flex items-center gap-2">
                          <span>{featuredArticle.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{featuredArticle.date}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                          {featuredArticle.title}
                        </h3>
                        <p className="text-sm text-white/85 leading-relaxed line-clamp-2">
                          {featuredArticle.excerpt}
                        </p>
                      </div>
                      <span className="w-12 h-12 rounded-full bg-white/95 group-hover:bg-[#135D2F] text-[#135D2F] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Play className="w-5 h-5 ml-0.5" />
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Complementary Editorial Stories */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                {secondaryArticles.map((article) => (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => setActiveArticleModal(article)}
                    className="group flex-1 text-left rounded-2xl bg-[#FAFBF8] hover:bg-[#F1F6EC] border border-[#DCE7D5] p-4 flex items-center gap-4 transition-colors cursor-pointer"
                  >
                    <div className="w-28 sm:w-32 h-22 rounded-xl overflow-hidden shrink-0 border border-[#DCE7D5]">
                      <ResilientImage
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-200"
                      />
                    </div>
                    <div className="min-w-0 space-y-1.5">
                      <div className="text-xs text-[#4A5D4F] flex items-center gap-2">
                        <span>{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#142419] group-hover:text-[#135D2F] leading-snug transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 09 – HỢP TÁC CÙNG ORGANIC VIỆT NAM & CORPORATE FOOTER */}
      <footer
        id="hop-tac"
        className="relative w-full h-auto overflow-hidden bg-[#0E361E] text-white flex flex-col justify-between"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
          <ResilientImage
            src="/assets/aistudio/landscape_092f592f.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0B2B17]/95 via-[#114224]/90 to-[#082112]/98 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 section-container section-py flex-1 flex flex-col justify-between gap-12 lg:gap-14">
          {/* Cooperation Header + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <h2 className="text-[clamp(1.85rem,1.35rem+1.7vw,3rem)] font-bold leading-tight text-white">
                Hợp tác cùng Organic Việt Nam
              </h2>
              <p className="fluid-lead text-white/85">
                Chúng tôi chào đón các đối tác sản xuất, đơn vị phân phối, tổ chức nghiên cứu và
                nhà đầu tư đồng hành kiến tạo chuỗi giá trị nông nghiệp và thực phẩm bền vững.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => openContact()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#135D2F] hover:bg-[#EAF4EA] text-sm sm:text-base font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                Liên hệ hợp tác
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Cooperation Directions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTNERSHIP_PILLARS.map((pillar, idx) => {
              const Icon =
                idx === 0
                  ? Handshake
                  : idx === 1
                  ? Award
                  : idx === 2
                  ? Cpu
                  : TrendingUp;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => openContact(pillar.title)}
                  className="group text-left rounded-2xl bg-white/8 hover:bg-white/14 border border-white/15 p-6 transition-colors cursor-pointer flex flex-col justify-between gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-[#BCE6C8]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Corporate Bottom Footer */}
          <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <OrganicVietnamLogo variant="badge" className="h-7 w-auto" />
              <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
                © Công ty Cổ phần Tập đoàn Organic Việt Nam · Giao diện demo hệ sinh thái
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/80">
              <a href="#ve-chung-toi" className="hover:text-white transition-colors">
                Về chúng tôi
              </a>
              <a href="#he-sinh-thai" className="hover:text-white transition-colors">
                Hệ sinh thái
              </a>
              <a href="#san-pham" className="hover:text-white transition-colors">
                Sản phẩm
              </a>
              <a href="#chuoi-cung-ung" className="hover:text-white transition-colors">
                Chuỗi cung ứng
              </a>
              <a href="#adigo" className="hover:text-white transition-colors">
                ADIGO
              </a>
              <a href="#truyen-thong" className="hover:text-white transition-colors">
                Truyền thông
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ProductDetailModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onRequestOrder={(topic) => openContact(topic)}
      />
      <ArticleReaderModal
        article={activeArticleModal}
        showArchiveList={showNewsArchive}
        onSelectArticle={(article) => {
          setShowNewsArchive(false);
          setActiveArticleModal(article);
        }}
        onClose={() => {
          setActiveArticleModal(null);
          setShowNewsArchive(false);
        }}
      />
      {contactOpen && (
        <PartnershipContactModal
          isOpen={contactOpen}
          initialTopic={contactTopic}
          onClose={() => setContactOpen(false)}
        />
      )}
    </div>
  );
}
