import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  Cpu,
  Droplet,
  FlaskConical,
  Handshake,
  Layers,
  Leaf,
  Menu,
  Package,
  Play,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  Sprout,
  TrendingUp,
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
  { top: '2%', left: '46%', transform: 'translate(-50%, 0)' },
  { top: '28%', right: '0%', transform: 'translate(0, 0)' },
  { bottom: '4%', right: '8%', transform: 'translate(0, 0)' },
  { bottom: '4%', left: '5%', transform: 'translate(0, 0)' },
  { top: '29%', left: '0%', transform: 'translate(0, 0)' },
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
      desc: 'Gà, gà sao, chim sâm cầm... được nuôi với thảo dược.',
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
      id: 'fruit',
      title: 'Trái cây',
      desc: 'Cam, bưởi và các loại trái cây được trồng, chăm sóc phù hợp.',
      image: '/assets/aistudio/orange_fa3dd582.jpg',
      Icon: CitrusIcon,
      product: PRODUCTS[4],
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
      <header className="sticky top-0 z-40 w-full h-18 bg-white/95 backdrop-blur-sm border-b border-[#E3ECE0]">
        <div className="w-full max-w-[1380px] mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Exact Official Logo */}
          <a
            href="#top"
            className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#135D2F] rounded-md"
            aria-label="Trang chủ Organic Việt Nam"
          >
            <OrganicVietnamLogo className="h-9 sm:h-10 w-auto" />
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
              className="px-4 py-2 rounded-lg bg-[#135D2F] hover:bg-[#0E4824] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#135D2F]"
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
        {/* SECTION 01 – HERO BANNER */}
        <section className="relative w-full overflow-hidden">
          <div className="relative w-full min-h-[68vh] sm:min-h-[78vh] lg:min-h-[88vh] flex flex-col justify-start">
            <ResilientImage
              src="/assets/aistudio/OrganicVN_Banner_Desktop_Logo_Goc_77d1067f.png"
              alt="Tòa nhà điều hành Tập đoàn Organic Việt Nam giữa cảnh quan thiên nhiên xanh"
              className="absolute inset-0 w-full h-full object-cover object-[54%_82%] md:object-bottom"
            />
            <div
              className="absolute inset-x-0 top-0 h-56 sm:h-64 bg-gradient-to-b from-[#F4FAF6]/90 via-[#EAF4EE]/60 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FCFAF8] via-[#FCFAF8]/45 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 text-center">
              <h1 className="text-[clamp(2.2rem,4.5vw,3.85rem)] font-bold tracking-tight text-[#0F351E] leading-[1.14] mx-auto max-w-4xl">
                Kiến tạo hệ sinh thái giá trị
              </h1>
              <div className="mt-4 flex items-center justify-center gap-4 max-w-lg mx-auto">
                <span className="h-px flex-1 bg-[#135D2F]/35" aria-hidden="true" />
                <p className="text-sm sm:text-lg font-semibold text-[#174429] whitespace-nowrap">
                  Nông nghiệp · Thực phẩm · Công nghệ
                </p>
                <span className="h-px flex-1 bg-[#135D2F]/35" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 – VỀ ORGANIC VIỆT NAM */}
        <section
          id="ve-chung-toi"
          className="relative w-full overflow-hidden bg-gradient-to-b from-[#FCFAF8] via-[#FCFAF8] to-[#FEFCF5]"
        >
          {/* Subtle top-right & bottom-right organic sage accents */}
          <svg
            viewBox="0 0 320 180"
            className="hidden lg:block absolute top-0 right-0 w-72 h-auto text-[#EAF2E3]/80 pointer-events-none"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M120 0C170 65 235 110 320 128V0H120Z" />
          </svg>

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Organic 3-Photo Botanical Collage (Edge-to-Edge Left) */}
            <div className="lg:col-span-6 w-full flex items-center justify-start">
              <div className="w-full max-w-[780px]">
                <ResilientImage
                  src="/images/about-collage.png"
                  alt="Hệ sinh thái nông nghiệp thảo dược, trái cây hữu cơ và chăn nuôi sinh thái Organic Việt Nam"
                  className="w-full h-auto object-contain object-left block"
                />
              </div>
            </div>

            {/* Right Editorial Narrative + 3 Value Pillars */}
            <div className="lg:col-span-6 w-full px-5 sm:px-8 lg:pl-6 lg:pr-14 xl:pr-20 py-10 sm:py-14 lg:py-16">
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                {/* Subtle Leaf Hairline Accent */}
                <div className="flex items-center gap-3 text-[#2E7D32]" aria-hidden="true">
                  <span className="h-px w-8 bg-[#2E7D32]/50" />
                  <Sprout className="w-5 h-5" />
                  <span className="h-px w-16 bg-gradient-to-r from-[#2E7D32]/40 to-transparent" />
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#142B1C] tracking-tight leading-tight">
                    Về Organic Việt Nam
                  </h2>
                  <p className="text-sm sm:text-base text-[#3E5143] leading-relaxed">
                    Công ty Cổ phần Tập đoàn Organic Việt Nam là tập đoàn phát triển hệ sinh thái
                    nông nghiệp và thực phẩm dựa trên mô hình nông nghiệp thảo dược, hướng tới nông
                    nghiệp bền vững, sản phẩm an toàn và chuỗi giá trị xanh, kết nối thị trường
                    trong nước và quốc tế.
                  </p>
                </div>

                <div className="divide-y divide-[#E2EBE0]">
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
                        className="group py-5 first:pt-3 last:pb-2 flex items-center gap-4 sm:gap-5 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#EEF4E9] text-[#1E6B38] group-hover:bg-[#135D2F] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-[#142B1C] group-hover:text-[#135D2F] transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4A5D4F] mt-1 leading-relaxed">
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
          </div>
        </section>

        {/* SECTION 03 – HỆ SINH THÁI (height: auto, balanced padding, vertically centered) */}
        <section
          id="he-sinh-thai"
          className="relative w-full h-auto overflow-hidden bg-gradient-to-r from-[#FEFCF5] via-[#FEFEFB] to-[#FEFEFE] flex flex-col justify-center"
        >
          {/* Subtle bottom organic sage wave continuing across the full section width */}
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-24 sm:h-32 text-[#F5F7EA]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 70C280 20 580 110 920 95C1180 84 1340 42 1440 25V160H0V70Z" />
          </svg>

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Editorial Narrative + 4 Circular-Icon Pillars */}
            <div className="lg:col-span-6 w-full px-5 sm:px-8 lg:pl-14 xl:pl-20 lg:pr-6 py-12 sm:py-16 lg:py-20">
              <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#14331E] tracking-tight leading-[1.15]">
                    Mô hình nông nghiệp thảo dược
                  </h2>
                  <p className="text-sm sm:text-base text-[#3E5143] leading-relaxed">
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
                        <div className="w-10 h-10 rounded-full bg-[#EDF4E7] border border-[#DCE8D3] text-[#2D6E32] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm sm:text-[15px] font-bold text-[#173E23] leading-snug">
                            {factor.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#4A5D4F] leading-relaxed">
                            {factor.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Edge-to-Edge Curved Landscape + 6-Herb Radial Wheel */}
            <div className="lg:col-span-6 w-full lg:self-stretch flex items-end justify-end">
              <div className="relative w-full max-w-[820px] ml-auto">
                <ResilientImage
                  src="/images/herbal-model-wheel.png"
                  alt="Mô hình nông nghiệp thảo dược và 6 thảo dược tiêu biểu: Gừng, Nghệ, Đinh lăng, Đương quy, Sâm Bố Chính, Chùm ngây"
                  className="w-full h-auto block object-contain object-right-bottom"
                />
                {/* Soft left feather blend into #FEFEFB above the bottom wave */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 h-[72%] w-16 bg-gradient-to-r from-[#FEFEFB] via-[#FEFEFB]/70 to-transparent"
                />
                {/* Soft bottom edge fade into section bottom */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[#F5F7EA]/70 to-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 – SẢN PHẨM ORGANIC VIỆT NAM */}
        <section
          id="san-pham"
          className="relative w-full overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-[#F5F7EA]/55 via-[#FAFBF7] to-[#FFFFFF]"
        >
          {/* Top-right decorative botanical branch */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute top-0 right-0 w-96 opacity-90"
          >
            <ResilientImage
              src="/images/products-top-leaves.png"
              alt=""
              className="w-full h-auto object-contain object-right-top mix-blend-multiply"
            />
          </div>

          {/* Subtle bottom valley horizon melting seamlessly into Section 05 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 opacity-30"
          >
            <ResilientImage
              src="/images/products-crops-bg.jpg"
              alt=""
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBF7] via-[#FAFBF7]/45 to-white" />
          </div>

          <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
              {/* Left Column: Editorial Intro + Two-Scene Organic Leaf Collage */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#2E7D28]">
                    <span className="text-sm font-bold tracking-wide">Sản phẩm</span>
                    <span className="h-px w-16 bg-[#3E8A44]/55" aria-hidden="true" />
                  </div>
                  <div className="relative inline-block">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#14331E] tracking-tight leading-[1.14]">
                      Sản phẩm Organic Việt Nam
                    </h2>
                    <svg
                      viewBox="0 0 120 26"
                      className="hidden sm:block ml-auto -mt-1 w-24 h-auto text-[#66B032]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 12c28 8 54 6 82-2 10-3 22-8 30-9-4 9-13 17-25 18-7 1-14-1-19-4C46 21 22 20 2 12Z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#3E5143] leading-relaxed">
                    Organic Việt Nam phát triển danh mục thực phẩm đa dạng từ chăn nuôi và trồng
                    trọt theo mô hình nông nghiệp ứng dụng thảo dược, kết hợp nguồn sản xuất của tập
                    đoàn với các đối tác được lựa chọn, chú trọng kiểm soát chất lượng và khả năng
                    đáp ứng nhu cầu thị trường.
                  </p>
                </div>

                {/* Stacked Two-Scene Curved Leaf Collage */}
                <div className="relative w-full max-w-[560px] mx-auto lg:mx-0">
                  <svg
                    viewBox="0 0 560 420"
                    className="w-full h-auto block drop-shadow-[0_14px_28px_rgba(20,51,30,0.10)]"
                    role="img"
                    aria-label="Hai trụ cột sản phẩm: Chăn nuôi theo mô hình thảo dược và Trồng trọt phát triển vùng nguyên liệu"
                  >
                    <defs>
                      <clipPath id="livestockSceneClip">
                        <path d="M18 190C34 72 152 16 286 22C382 26 462 46 544 18C524 102 478 158 408 176C260 176 112 212 36 284C14 252 12 220 18 190Z" />
                      </clipPath>
                      <clipPath id="cropsSceneClip">
                        <path d="M16 378C38 282 146 214 294 190C362 179 418 176 472 184C422 288 310 388 136 402C76 406 34 396 16 378Z" />
                      </clipPath>
                    </defs>

                    {/* Soft decorative left & bottom green botanical curve */}
                    <path
                      d="M8 148C26 84 62 42 110 24C84 58 60 98 40 148Z"
                      fill="#DDF0C8"
                    />
                    <path
                      d="M44 402C184 420 362 356 492 178C468 258 378 398 164 416C112 420 72 414 44 402Z"
                      fill="#7CC043"
                    />

                    {/* Upper Curved Livestock Scene */}
                    <g clipPath="url(#livestockSceneClip)">
                      <image
                        href="/assets/aistudio/chicken_d94f23e2.jpg"
                        x="0"
                        y="0"
                        width="560"
                        height="295"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>
                    <path
                      d="M18 190C34 72 152 16 286 22C382 26 462 46 544 18C524 102 478 158 408 176C260 176 112 212 36 284C14 252 12 220 18 190Z"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                    />

                    {/* Lower Curved Crops Scene */}
                    <g clipPath="url(#cropsSceneClip)">
                      <image
                        href="/images/products-crops-bg.jpg"
                        x="0"
                        y="170"
                        width="500"
                        height="245"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>
                    <path
                      d="M16 378C38 282 146 214 294 190C362 179 418 176 472 184C422 288 310 388 136 402C76 406 34 396 16 378Z"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                    />
                  </svg>

                  {/* Crisp HTML Medallion Overlay 1: Chăn nuôi */}
                  <div className="absolute top-[13%] left-[25%] sm:left-[28%] flex items-center bg-[#FCFDF9]/95 rounded-full pr-4 sm:pr-5 pl-1.5 py-1.5 shadow-md border border-[#72B63D]/35">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#3E8E27] bg-white text-[#2E7D28] flex items-center justify-center shrink-0">
                      <PoultryIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="ml-2.5 sm:ml-3 text-xs sm:text-sm font-bold text-[#14331E] leading-tight max-w-[140px]">
                      Chăn nuôi theo mô hình thảo dược
                    </span>
                  </div>

                  {/* Crisp HTML Medallion Overlay 2: Trồng trọt */}
                  <div className="absolute top-[57%] left-[15%] sm:left-[18%] flex items-center bg-[#FCFDF9]/95 rounded-full pr-4 sm:pr-5 pl-1.5 py-1.5 shadow-md border border-[#72B63D]/35">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#3E8E27] bg-white text-[#2E7D28] flex items-center justify-center shrink-0">
                      <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="ml-2.5 sm:ml-3 text-xs sm:text-sm font-bold text-[#14331E] leading-tight max-w-[148px]">
                      Trồng trọt &amp; phát triển vùng nguyên liệu
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Staggered 2 + 3 Product Category Cards */}
              <div className="lg:col-span-7 space-y-5">
                {/* Row 1: 2 Wide Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:pl-12">
                  {productShowcaseCards.slice(0, 2).map((item) => {
                    const Icon = item.Icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveProductModal(item.product)}
                        className="group text-left rounded-tl-[48px] rounded-tr-2xl rounded-b-3xl bg-[#FBFDF8] border border-[#E5EDE0] hover:border-[#2E7D28]/50 shadow-[0_12px_30px_-14px_rgba(20,51,30,0.16)] hover:shadow-[0_18px_36px_-12px_rgba(19,93,47,0.22)] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#135D2F]"
                      >
                        <div className="relative h-40 sm:h-44 w-full overflow-hidden">
                          <ResilientImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover scale-[1.04] group-hover:scale-[1.08] transition-transform duration-300"
                          />
                          {/* Curved white wave bottom cut */}
                          <svg
                            viewBox="0 0 400 38"
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-7 text-[#FBFDF8]"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M0 16C110 38 260 32 400 2V38H0V16Z" />
                          </svg>
                          {/* Circular green badge overlapping curve */}
                          <span className="absolute bottom-1 left-4 z-10 w-11 h-11 rounded-full bg-[#2E7D28] text-white border-[3px] border-[#FBFDF8] shadow-sm flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </span>
                        </div>

                        <div className="px-5 pt-2 pb-5 flex-1 flex items-end justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#14331E] group-hover:text-[#135D2F] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-[#4A5D4F] mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <span className="w-8 h-8 rounded-full bg-[#EAF4E1] group-hover:bg-[#135D2F] text-[#1E5C25] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Row 2: 3 Compact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
                  {productShowcaseCards.slice(2).map((item) => {
                    const Icon = item.Icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveProductModal(item.product)}
                        className="group text-left rounded-tl-[44px] rounded-tr-2xl rounded-b-3xl bg-[#FBFDF8] border border-[#E5EDE0] hover:border-[#2E7D28]/50 shadow-[0_12px_30px_-14px_rgba(20,51,30,0.16)] hover:shadow-[0_18px_36px_-12px_rgba(19,93,47,0.22)] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#135D2F]"
                      >
                        <div className="relative h-36 sm:h-38 w-full overflow-hidden">
                          <ResilientImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover scale-[1.05] group-hover:scale-[1.09] transition-transform duration-300"
                          />
                          <svg
                            viewBox="0 0 400 38"
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-7 text-[#FBFDF8]"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M0 16C110 38 260 32 400 2V38H0V16Z" />
                          </svg>
                          <span className="absolute bottom-1 left-4 z-10 w-10.5 h-10.5 rounded-full bg-[#2E7D28] text-white border-[3px] border-[#FBFDF8] shadow-sm flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </span>
                        </div>

                        <div className="px-4 pt-2 pb-4.5 flex-1 flex items-end justify-between gap-2.5">
                          <div className="min-w-0">
                            <h3 className="text-base font-bold text-[#14331E] group-hover:text-[#135D2F] transition-colors leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs text-[#4A5D4F] mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <span className="w-7.5 h-7.5 rounded-full bg-[#EAF4E1] group-hover:bg-[#135D2F] text-[#1E5C25] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05 – CHUỖI CUNG ỨNG LIÊN KẾT */}
        <section
          id="chuoi-cung-ung"
          className="relative w-full overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-white via-[#FAFDF8] to-[#F7F9F4] flex flex-col justify-center"
        >
          {/* Decorative top-right soft leaf branch */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute top-0 right-0 w-80 opacity-85"
          >
            <ResilientImage
              src="/images/products-top-leaves.png"
              alt=""
              className="w-full h-auto object-contain object-right-top mix-blend-multiply"
            />
          </div>

          {/* Subtle bottom organic green hillside waves blending cleanly into Section 06 */}
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-16 sm:h-24 text-[#D9ECC0]/70"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 45C240 95 480 18 760 64C1020 105 1260 40 1440 20V120H0V45Z" />
          </svg>

          <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
            {/* Editorial Section Header */}
            <div className="max-w-3xl space-y-3">
              <div className="w-40 h-1.5 rounded-full bg-gradient-to-r from-[#5FA935] via-[#9CD277] to-transparent" aria-hidden="true" />
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#14331E] tracking-tight leading-tight">
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
              <p className="text-sm sm:text-[15px] text-[#3E5143] leading-relaxed">
                Tổ chức chuỗi cung ứng liên kết đồng bộ từ nguồn giống, nuôi trồng, thu hoạch, sơ
                chế, bảo quản đến phân phối ra thị trường; được quản lý bằng dữ liệu, đảm bảo chất
                lượng ổn định và truy xuất rõ ràng.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              {/* Left 8 Cols: Circular 5-Stage Capsule Diagram around Center Logo Hub */}
              <div className="lg:col-span-8">
                {/* Desktop Circular Layout */}
                <div className="hidden lg:block relative h-[560px]">
                  {/* Circular Green Arrow Flow SVG */}
                  <svg
                    viewBox="0 0 800 560"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="385"
                      cy="300"
                      r="205"
                      fill="none"
                      stroke="#7BBF42"
                      strokeWidth="3.5"
                      strokeOpacity="0.65"
                    />
                    <circle
                      cx="385"
                      cy="300"
                      r="142"
                      fill="none"
                      stroke="#DCEAD0"
                      strokeWidth="1.5"
                    />
                    {/* Directional clockwise flow arrowheads */}
                    <polygon points="528,150 515,146 520,160" fill="#5FA935" />
                    <polygon points="578,365 568,354 583,352" fill="#5FA935" />
                    <polygon points="355,505 368,498 368,512" fill="#5FA935" />
                    <polygon points="195,382 206,390 193,395" fill="#5FA935" />
                    <polygon points="222,175 232,166 230,180" fill="#5FA935" />
                  </svg>

                  {/* Central Brand Hub */}
                  <div className="absolute top-[54%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-52 h-52 xl:w-60 xl:h-60 rounded-full bg-gradient-to-b from-white via-[#FAFDF6] to-[#DCECC8] border-2 border-[#D4E6C3] shadow-[0_14px_34px_-16px_rgba(20,51,30,0.22)] flex flex-col items-center justify-center p-5 text-center z-10">
                    <OrganicVietnamLogo layout="stacked" className="h-11 xl:h-12 w-auto" />
                    <p className="mt-2 text-xs xl:text-sm font-bold text-[#14331E] leading-snug max-w-[165px]">
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
                        className={`group absolute z-20 w-[262px] xl:w-[300px] rounded-full p-1.5 pr-4 xl:p-2 xl:pr-5 border text-left transition-all cursor-pointer flex items-center gap-2.5 xl:gap-3 focus-visible:outline-2 focus-visible:outline-[#135D2F] ${
                          isActive
                            ? 'bg-[#F3F9EC] border-[#2E7D28] shadow-[0_14px_30px_-12px_rgba(25,94,38,0.26)]'
                            : 'bg-[#FCFDF9]/95 border-[#DCE8D3] hover:border-[#5FA935] shadow-[0_12px_28px_-14px_rgba(20,51,30,0.16)]'
                        }`}
                      >
                        <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#EDF4E7]">
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

                {/* Tablet & Mobile Sequence */}
                <div className="lg:hidden space-y-5">
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
                            <div className="flex items-center gap-1.5">
                              <span className="w-5.5 h-5.5 rounded-full bg-[#195E26] text-white text-[10px] font-bold flex items-center justify-center">
                                {stage.step}
                              </span>
                              <StageIcon className="w-3.5 h-3.5 text-[#2E7D28]" />
                              <span className="text-sm font-bold text-[#14331E] truncate">
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

              {/* Right 4 Cols: Facility Card + "Giá trị chuỗi cung ứng" */}
              <div className="lg:col-span-4">
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

        {/* SECTION 06 – CHẤT LƯỢNG & CÔNG NGHỆ */}
        <section className="w-full py-16 lg:py-24 lg:min-h-[86vh] bg-[#F7F9F4] flex flex-col justify-center">
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column: Title + Large Lab Image + ADIGO Bridge */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#142419] tracking-tight">
                    Chất lượng &amp; công nghệ
                  </h2>
                  <p className="text-base text-[#3E5143] leading-relaxed">
                    Xây dựng quy trình kiểm soát từ nguyên liệu đầu vào đến sản phẩm thương mại,
                    tích hợp quản lý hồ sơ và truy xuất nguồn gốc thông qua nền tảng công nghệ của
                    hệ sinh thái là ADIGO.
                  </p>
                </div>

                <div className="h-64 sm:h-80 lg:flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-[#DCE7D5]">
                  <ResilientImage
                    src="/images/qc-lab.png"
                    alt="Kiểm tra mẫu và quản lý chất lượng tại phòng kiểm nghiệm"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: 5 Quality & Tech Control Points */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  {QUALITY_ITEMS.map((item) => {
                    const selected = item.id === selectedQualityId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedQualityId(item.id)}
                        className={`w-full text-left rounded-2xl px-5 py-4 border transition-colors flex items-start gap-3.5 cursor-pointer ${
                          selected
                            ? 'bg-white border-[#135D2F] shadow-sm'
                            : 'bg-white/65 border-[#DCE7D5] hover:bg-white'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            selected ? 'bg-[#135D2F] text-white' : 'bg-[#2E8B45] text-white'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <div className="min-w-0">
                          <span className="block text-base font-bold text-[#142419]">
                            {item.title}
                          </span>
                          <span className="block text-xs sm:text-sm text-[#4A5D4F] mt-1 leading-relaxed">
                            {item.summary}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Item Detail + Subtle Bridge to Section 07 ADIGO */}
                <div className="rounded-2xl bg-[#EFF5EB] border border-[#DCE7D5] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#135D2F] flex items-center gap-1.5">
                      <FlaskConical className="w-4 h-4" />
                      {activeQuality.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#324336]">{activeQuality.detail}</p>
                  </div>
                  <a
                    href="#adigo"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C6AB0] hover:underline whitespace-nowrap shrink-0"
                  >
                    Xem trải nghiệm ADIGO
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
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
          className="w-full py-16 lg:py-24 lg:min-h-[85vh] bg-white flex flex-col justify-center"
        >
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#142419] tracking-tight">
                  Truyền thông
                </h2>
                <p className="text-base text-[#3E5143]">
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
        className="relative w-full overflow-hidden bg-[#0E361E] text-white lg:min-h-[75vh] flex flex-col justify-between"
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

        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24 flex-1 flex flex-col justify-between gap-14">
          {/* Cooperation Header + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Hợp tác cùng Organic Việt Nam
              </h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
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
