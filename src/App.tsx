import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  Cpu,
  FlaskConical,
  Handshake,
  Menu,
  Play,
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
  HERBS,
  HerbItem,
  NEWS_ARTICLES,
  NewsArticle,
  PARTNERSHIP_PILLARS,
  PRODUCTS,
  ProductItem,
  QUALITY_ITEMS,
  SUPPLY_STAGES,
} from './data/ecosystemData';

const STAGE_POSITIONS = [
  { top: '6%', left: '50%', transform: 'translate(-50%, 0)' },
  { top: '34%', right: '3%', transform: 'translate(0, 0)' },
  { bottom: '6%', right: '14%', transform: 'translate(0, 0)' },
  { bottom: '6%', left: '14%', transform: 'translate(0, 0)' },
  { top: '34%', left: '3%', transform: 'translate(0, 0)' },
];

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState<HerbItem>(HERBS[0]);
  const [productFilter, setProductFilter] = useState<'all' | 'meat-egg' | 'fruit'>('all');
  const [selectedStageId, setSelectedStageId] = useState<string>(SUPPLY_STAGES[0].id);
  const [selectedQualityId, setSelectedQualityId] = useState<string>(QUALITY_ITEMS[0].id);
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<NewsArticle | null>(null);
  const [showNewsArchive, setShowNewsArchive] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string | undefined>(undefined);

  const filteredProducts =
    productFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === productFilter);

  const activeStage =
    SUPPLY_STAGES.find((s) => s.id === selectedStageId) || SUPPLY_STAGES[0];
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
            <OrganicVietnamLogo className="h-11 sm:h-12 w-auto" />
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
        <section className="relative w-full overflow-hidden border-b border-[#DCE7D5]">
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
          className="w-full py-16 lg:py-24 lg:min-h-[86vh] bg-[#FAFBF8] flex flex-col justify-center"
        >
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Editorial Narrative + 3 Strategic Pillars */}
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#142419] tracking-tight leading-tight">
                    Về Organic Việt Nam
                  </h2>
                  <p className="text-base sm:text-lg text-[#3E5143] leading-relaxed">
                    Công ty Cổ phần Tập đoàn Organic Việt Nam định hướng phát triển hệ sinh thái nông
                    nghiệp và thực phẩm bền vững, lấy mô hình nông nghiệp ứng dụng thảo dược làm nền
                    tảng, gắn kết chuỗi cung ứng liên kết và công nghệ kết nối thị trường.
                  </p>
                </div>

                <div className="divide-y divide-[#DCE7D5] border-y border-[#DCE7D5]">
                  {[
                    {
                      num: '01',
                      title: 'Nông nghiệp thảo dược',
                      desc: 'Xây dựng vùng nguyên liệu thảo dược bản địa, kết hợp nghiên cứu dinh dưỡng tự nhiên và quy trình nuôi trồng thân thiện môi trường.',
                      href: '#he-sinh-thai',
                    },
                    {
                      num: '02',
                      title: 'Thực phẩm và chuỗi cung ứng',
                      desc: 'Tổ chức liên kết từ nguồn giống, nuôi trồng, sơ chế đến bảo quản và phân phối nhằm mang lại nguồn thực phẩm an toàn, đồng nhất.',
                      href: '#chuoi-cung-ung',
                    },
                    {
                      num: '03',
                      title: 'Công nghệ và kết nối thị trường',
                      desc: 'Ứng dụng công nghệ quản trị dữ liệu sản xuất, chuẩn hóa hồ sơ truy xuất và phát triển nền tảng thương mại số ADIGO.',
                      href: '#adigo',
                    },
                  ].map((pillar) => (
                    <a
                      key={pillar.num}
                      href={pillar.href}
                      className="group py-5 flex items-start gap-5 transition-colors"
                    >
                      <span className="text-sm font-mono font-semibold text-[#135D2F] pt-1 shrink-0 tabular-nums">
                        {pillar.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#142419] group-hover:text-[#135D2F] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-[#4A5D4F] mt-1 leading-relaxed">{pillar.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#135D2F] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Large Nature & Production Visual */}
              <div className="lg:col-span-6">
                <div className="h-80 sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-[#DCE7D5]">
                  <ResilientImage
                    src="/assets/aistudio/farm_dd551941.jpg"
                    alt="Không gian sinh thái xanh và công trình Organic Việt Nam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 – HỆ SINH THÁI (height: auto, balanced padding, vertically centered) */}
        <section
          id="he-sinh-thai"
          className="w-full h-auto py-12 lg:py-16 bg-white border-y border-[#E5EDE1] flex flex-col justify-center"
        >
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
            {/* Top Editorial Row: Visual + 4 Combined Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#DCE7D5]">
                  <ResilientImage
                    src="/assets/aistudio/landscape_092f592f.jpg"
                    alt="Cảnh quan đồi núi và vùng trồng thảo dược xanh mát"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#142419] tracking-tight leading-tight">
                    Mô hình nông nghiệp thảo dược
                  </h2>
                  <p className="text-base text-[#3E5143] leading-relaxed">
                    Organic Việt Nam định hướng nghiên cứu và ứng dụng thảo dược trong nuôi trồng
                    thông qua sự kết hợp đồng bộ bốn yếu tố cốt lõi, từng bước thử nghiệm và chuẩn
                    hóa theo dữ liệu thực tiễn.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Nguồn nguyên liệu thảo dược',
                      desc: 'Tuyển chọn và phát triển nguồn thảo dược bản địa có hồ sơ thực vật rõ ràng.',
                    },
                    {
                      title: 'Dinh dưỡng và kỹ thuật chăm sóc',
                      desc: 'Phối trộn khẩu phần phù hợp từng giai đoạn sinh trưởng dưới hướng dẫn kỹ thuật.',
                    },
                    {
                      title: 'Điều kiện môi trường nuôi trồng',
                      desc: 'Chú trọng mật độ, nguồn nước, thổ nhưỡng và không gian sinh thái thông thoáng.',
                    },
                    {
                      title: 'Nghiên cứu, theo dõi và đánh giá kết quả',
                      desc: 'Ghi nhận chỉ số phát triển và chất lượng đầu ra để liên tục hiệu chỉnh quy trình.',
                    },
                  ].map((factor) => (
                    <div
                      key={factor.title}
                      className="rounded-xl bg-[#FAFBF8] border border-[#E3ECE0] p-4 space-y-1"
                    >
                      <h3 className="text-sm font-bold text-[#135D2F]">{factor.title}</h3>
                      <p className="text-xs sm:text-sm text-[#4A5D4F] leading-relaxed">
                        {factor.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6 Herbs Grid with Large Clear Images */}
            <div className="space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {HERBS.map((herb) => {
                  const isSelected = selectedHerb.id === herb.id;
                  return (
                    <button
                      key={herb.id}
                      type="button"
                      onClick={() => setSelectedHerb(herb)}
                      className={`group text-left rounded-2xl border overflow-hidden transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#135D2F] ${
                        isSelected
                          ? 'bg-[#EFF5EB] border-[#135D2F] shadow-sm'
                          : 'bg-[#FAFBF8] border-[#DCE7D5] hover:border-[#8DB898]'
                      }`}
                    >
                      <div className="h-24 sm:h-28 w-full bg-white overflow-hidden">
                        <ResilientImage
                          src={herb.image}
                          alt={herb.name}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-200"
                        />
                      </div>
                      <div className="p-3">
                        <span className="block text-sm font-bold text-[#142419]">{herb.name}</span>
                        <span className="block text-[11px] italic text-[#4A5D4F] truncate">
                          {herb.scientificName}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Herb Orientation Panel */}
              <div className="rounded-2xl bg-[#F4F8F0] border border-[#DCE7D5] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#135D2F]">
                    {selectedHerb.name}{' '}
                    <span className="font-normal italic text-[#4A5D4F]">
                      ({selectedHerb.scientificName})
                    </span>
                  </p>
                  <p className="text-sm text-[#324336]">{selectedHerb.application}</p>
                </div>
                <div className="md:text-right text-xs text-[#4A5D4F] shrink-0 space-y-1">
                  <p>
                    <strong className="text-[#142419]">Bộ phận nghiên cứu:</strong>{' '}
                    {selectedHerb.partUsed}
                  </p>
                  <p>{selectedHerb.researchFocus}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 – SẢN PHẨM (Mandatory 2 rows × 3 columns on desktop) */}
        <section
          id="san-pham"
          className="w-full py-16 lg:py-24 lg:min-h-[88vh] bg-[#FAFBF8] flex flex-col justify-center"
        >
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#142419] tracking-tight">
                  Sản phẩm Organic Việt Nam
                </h2>
                <p className="text-base text-[#3E5143] leading-relaxed">
                  Danh mục sáu nhóm sản phẩm nông nghiệp và thực phẩm cốt lõi trong hệ sinh thái,
                  phân định rõ nhóm đã sẵn sàng thương mại và nhóm đang trong định hướng phát triển.
                </p>
              </div>

              {/* Interactive Category Filter Control */}
              <div
                role="tablist"
                aria-label="Lọc nhóm sản phẩm"
                className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#EBF1E6] border border-[#DCE7D5] self-start lg:self-auto"
              >
                {[
                  { id: 'all' as const, label: 'Tất cả (6)' },
                  { id: 'meat-egg' as const, label: 'Thịt & Trứng' },
                  { id: 'fruit' as const, label: 'Trái cây' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={productFilter === tab.id}
                    onClick={() => setProductFilter(tab.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      productFilter === tab.id
                        ? 'bg-white text-[#135D2F] shadow-sm'
                        : 'text-[#4A5D4F] hover:text-[#142419]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mandatory 2 Rows x 3 Columns Desktop Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setActiveProductModal(product)}
                  className="group text-left rounded-2xl bg-white border border-[#DCE7D5] hover:border-[#135D2F] overflow-hidden transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#135D2F]"
                >
                  <div className="h-48 sm:h-52 w-full overflow-hidden">
                    <ResilientImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.06] transition-transform duration-200"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
                        <span className="text-[#4A5D4F]">{product.categoryLabel}</span>
                        <span
                          className={`font-semibold ${
                            product.readiness === 'Thương mại'
                              ? 'text-[#135D2F]'
                              : 'text-[#0C6AB0]'
                          }`}
                        >
                          {product.readiness}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#142419] group-hover:text-[#135D2F] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#4A5D4F] mt-1.5 leading-relaxed">
                        {product.summary}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#EBF1E6] flex items-center justify-between text-xs font-semibold text-[#135D2F]">
                      <span>Xem hồ sơ sản phẩm</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 05 – CHUỖI CUNG ỨNG (Dedicated Large Circular Diagram around Center Logo) */}
        <section
          id="chuoi-cung-ung"
          className="w-full py-16 lg:py-24 lg:min-h-[90vh] bg-white border-y border-[#E5EDE1] flex flex-col justify-center"
        >
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#142419] tracking-tight">
                Chuỗi cung ứng liên kết
              </h2>
              <p className="text-base text-[#3E5143] leading-relaxed">
                Mô hình phối hợp đa bên từ khâu giống, nuôi trồng đến sơ chế, phân phối và thị
                trường. Mỗi mắt xích liên kết cùng chia sẻ tiêu chuẩn chất lượng và đồng bộ dữ liệu
                trên nền tảng hệ sinh thái.
              </p>
            </div>

            {/* Desktop Circular 5-Stage Layout with Center Official Logo */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 relative h-[580px]">
                {/* Circular Connecting Ring SVG */}
                <svg
                  viewBox="0 0 600 600"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  aria-hidden="true"
                >
                  <circle
                    cx="300"
                    cy="300"
                    r="205"
                    fill="none"
                    stroke="#CFE0C7"
                    strokeWidth="2.5"
                    strokeDasharray="8 6"
                  />
                  {/* Radial connectors from center hub */}
                  <line x1="300" y1="300" x2="300" y2="95" stroke="#DCE7D5" strokeWidth="1.5" />
                  <line x1="300" y1="300" x2="495" y2="236" stroke="#DCE7D5" strokeWidth="1.5" />
                  <line x1="300" y1="300" x2="420" y2="466" stroke="#DCE7D5" strokeWidth="1.5" />
                  <line x1="300" y1="300" x2="180" y2="466" stroke="#DCE7D5" strokeWidth="1.5" />
                  <line x1="300" y1="300" x2="105" y2="236" stroke="#DCE7D5" strokeWidth="1.5" />
                  {/* Directional flow arrows along the ring */}
                  <polygon points="415,120 403,118 408,129" fill="#135D2F" />
                  <polygon points="494,368 487,358 499,357" fill="#135D2F" />
                  <polygon points="295,505 305,499 305,511" fill="#135D2F" />
                  <polygon points="105,360 113,369 102,371" fill="#135D2F" />
                  <polygon points="188,124 198,118 194,129" fill="#135D2F" />
                </svg>

                {/* Central Official Organic Việt Nam Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-[#F4F8F0] border-2 border-[#135D2F]/25 shadow-sm flex flex-col items-center justify-center p-5 text-center z-10">
                  <OrganicVietnamLogo className="h-10 w-auto mb-2" />
                  <p className="text-xs text-[#4A5D4F] leading-snug">
                    Trung tâm điều phối liên kết giá trị
                  </p>
                </div>

                {/* 5 Circular Stage Nodes */}
                {SUPPLY_STAGES.map((stage, idx) => {
                  const isActive = stage.id === selectedStageId;
                  const pos = STAGE_POSITIONS[idx];
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setSelectedStageId(stage.id)}
                      style={pos}
                      className={`absolute z-20 w-56 rounded-2xl p-3 border text-left transition-all cursor-pointer flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#135D2F] ${
                        isActive
                          ? 'bg-[#EFF5EB] border-[#135D2F] shadow-md'
                          : 'bg-white border-[#DCE7D5] hover:border-[#8DB898] shadow-sm'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#DCE7D5]">
                        <ResilientImage
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-mono font-bold text-[#135D2F]">
                          Công đoạn {stage.step}
                        </span>
                        <span className="block text-sm font-bold text-[#142419] leading-snug">
                          {stage.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Inspector Side Panel */}
              <div className="lg:col-span-4 rounded-2xl bg-[#FAFBF8] border border-[#DCE7D5] p-6 space-y-5">
                <div className="h-44 rounded-xl overflow-hidden border border-[#DCE7D5]">
                  <ResilientImage
                    src={activeStage.image}
                    alt={activeStage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono font-bold text-[#135D2F]">
                    Công đoạn {activeStage.step} / 05
                  </p>
                  <h3 className="text-xl font-bold text-[#142419]">{activeStage.title}</h3>
                  <p className="text-sm text-[#3E5143] leading-relaxed">{activeStage.summary}</p>
                  <p className="text-xs text-[#4A5D4F] pt-2 border-t border-[#E5EDE1] leading-relaxed">
                    {activeStage.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Tablet & Mobile Responsive Sequence */}
            <div className="lg:hidden space-y-4">
              <div className="flex justify-center py-2">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-[#F4F8F0] border border-[#DCE7D5] px-5 py-3">
                  <OrganicVietnamLogo className="h-8 w-auto" />
                  <span className="text-xs font-medium text-[#4A5D4F]">
                    Điều phối liên kết 5 công đoạn
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SUPPLY_STAGES.map((stage) => (
                  <div
                    key={stage.id}
                    className="rounded-2xl bg-[#FAFBF8] border border-[#DCE7D5] p-4 flex items-start gap-4"
                  >
                    <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 border border-[#DCE7D5]">
                      <ResilientImage
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono font-bold text-[#135D2F]">
                        {stage.step}. {stage.title}
                      </p>
                      <p className="text-xs text-[#4A5D4F] mt-1 leading-relaxed">
                        {stage.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 – CHẤT LƯỢNG & CÔNG NGHỆ */}
        <section className="w-full py-16 lg:py-24 lg:min-h-[86vh] bg-[#FAFBF8] flex flex-col justify-center">
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
          className="w-full py-16 lg:py-24 lg:min-h-[85vh] bg-white border-t border-[#E5EDE1] flex flex-col justify-center"
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
