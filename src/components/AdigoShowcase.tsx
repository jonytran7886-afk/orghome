import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  FileText,
  Handshake,
  Home,
  Layers,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Truck,
} from 'lucide-react';
import {
  PRODUCTS,
  ProductItem,
  SUPPLY_STAGES,
  TRACEABILITY_DEMO,
} from '../data/ecosystemData';
import { AdigoFullLogo } from './BrandMarks';
import { ResilientImage } from './ResilientImage';

type TabletView = 'overview' | 'catalog' | 'trace';

interface AdigoShowcaseProps {
  onOpenProduct: (product: ProductItem) => void;
  onOpenContact: (presetTopic?: string) => void;
}

const SUPPLY_CATEGORY_SHARE = [
  { label: 'Gà thịt', pct: 26, color: '#1E5422', dash: '36 102', offset: '0' },
  { label: 'Thịt lợn', pct: 18, color: '#398A3C', dash: '25 113', offset: '-36' },
  { label: 'Thịt bò & trâu', pct: 16, color: '#61B046', dash: '22 116', offset: '-61' },
  { label: 'Trứng gia cầm', pct: 16, color: '#8ACB52', dash: '22 116', offset: '-83' },
  { label: 'Cam', pct: 13, color: '#B4DD6E', dash: '18 120', offset: '-105' },
  { label: 'Bưởi', pct: 13, color: '#78B833', dash: '18 120', offset: '-123' },
];

export function AdigoShowcase({ onOpenProduct, onOpenContact }: AdigoShowcaseProps) {
  const [tabletView, setTabletView] = useState<TabletView>('overview');
  const [phoneProduct, setPhoneProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [batchQuery, setBatchQuery] = useState<string>('DEMO-GA-01');

  const activeTrace =
    TRACEABILITY_DEMO.find(
      (rec) => rec.batchCode.toUpperCase() === batchQuery.trim().toUpperCase(),
    ) || TRACEABILITY_DEMO[0];

  const renderTabletPanel = () => (
    <div className="bg-[#1C231F] rounded-[20px] p-2 sm:p-2.5 shadow-[0_24px_48px_rgba(16,42,24,0.22)] border border-white/25 overflow-hidden">
      <div className="bg-[#FAFDF8] rounded-[14px] overflow-hidden flex min-h-[300px] sm:min-h-[340px]">
        {/* Dark-Green Sidebar */}
        <div className="w-[104px] sm:w-[122px] bg-[#1E4722] text-white p-3 flex flex-col justify-between shrink-0">
          <div className="space-y-3">
            <div className="pb-1">
              <AdigoFullLogo layout="horizontal" inverse className="h-5 w-auto" />
            </div>
            <div className="space-y-1">
              {[
                { id: 'overview' as TabletView, icon: Home, label: 'Tổng quan' },
                { id: 'catalog' as TabletView, icon: Package, label: 'Sản phẩm' },
                { id: 'trace' as TabletView, icon: Layers, label: 'Nguồn cung' },
              ].map((nav) => {
                const Icon = nav.icon;
                const active = tabletView === nav.id;
                return (
                  <button
                    key={nav.id}
                    type="button"
                    onClick={() => setTabletView(nav.id)}
                    className={`w-full px-2.5 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-2 transition-colors cursor-pointer text-left ${
                      active
                        ? 'bg-[#467D38] text-white font-semibold shadow-xs'
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{nav.label}</span>
                  </button>
                );
              })}

              {[
                { icon: Handshake, label: 'Đối tác' },
                { icon: FileText, label: 'Đơn hàng' },
                { icon: BarChart3, label: 'Báo cáo' },
              ].map((staticItem) => {
                const Icon = staticItem.icon;
                return (
                  <button
                    key={staticItem.label}
                    type="button"
                    onClick={() => setTabletView('overview')}
                    className="w-full px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-white/70 hover:bg-white/10 flex items-center gap-2 transition-colors cursor-pointer text-left"
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{staticItem.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-[9px] text-white/55 leading-tight pt-2">
            Hệ sinh thái Organic VN
          </p>
        </div>

        {/* Main White Panel */}
        <div className="flex-1 p-3 sm:p-4 space-y-3 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-bold text-[#142B1C] truncate">
              Quản trị hệ thống
            </h3>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#DCE7D5] text-[10px] font-medium text-[#324336] shrink-0">
              <Calendar className="w-3 h-3 text-[#2E7D28]" />
              <span>Tháng này</span>
              <ArrowRight className="w-2.5 h-2.5 text-[#5A6D5E]" />
            </div>
          </div>

          {tabletView === 'overview' && (
            <>
              {/* 4 KPI Stat Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 tabular-nums">
                {[
                  { label: 'Sản phẩm', val: '426', delta: '+12%' },
                  { label: 'Nhà cung cấp', val: '58', delta: '+7%' },
                  { label: 'Đơn hàng', val: '1.320', delta: '+18%' },
                  { label: 'Đối tác phân phối', val: '24', delta: '+9%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white border border-[#E5EDE0] p-2 shadow-2xs"
                  >
                    <p className="text-[9.5px] text-[#5A6D5E] truncate">{stat.label}</p>
                    <p className="text-sm sm:text-base font-bold text-[#142B1C] leading-tight mt-0.5">
                      {stat.val}
                    </p>
                    <p className="text-[9.5px] font-semibold text-[#2E7D28] mt-0.5">
                      ↑ {stat.delta}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Line / Area Chart */}
                <div className="rounded-xl bg-white border border-[#E5EDE0] p-2.5 space-y-1.5">
                  <p className="text-[11px] font-bold text-[#142B1C]">Tình hình giao dịch</p>
                  <svg viewBox="0 0 210 108" className="w-full h-24 block" aria-hidden="true">
                    <defs>
                      <linearGradient id="txAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#66B032" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#66B032" stopOpacity="0.03" />
                      </linearGradient>
                    </defs>
                    <g stroke="#EEF3EA" strokeWidth="1">
                      <line x1="28" y1="16" x2="202" y2="16" />
                      <line x1="28" y1="36" x2="202" y2="36" />
                      <line x1="28" y1="56" x2="202" y2="56" />
                      <line x1="28" y1="76" x2="202" y2="76" />
                    </g>
                    <g fill="#7A8A7D" fontSize="8">
                      <text x="2" y="19">1.500</text>
                      <text x="2" y="39">1.200</text>
                      <text x="8" y="59">900</text>
                      <text x="8" y="79">600</text>
                      <text x="28" y="102">01/03</text>
                      <text x="98" y="102">15/03</text>
                      <text x="168" y="102">29/03</text>
                    </g>
                    <path
                      d="M32 76 C56 72 68 58 92 60 C118 62 132 34 156 38 C176 42 188 26 200 18 V86 H32 Z"
                      fill="url(#txAreaGrad)"
                    />
                    <path
                      d="M32 76 C56 72 68 58 92 60 C118 62 132 34 156 38 C176 42 188 26 200 18"
                      fill="none"
                      stroke="#398A3C"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Product Mix Donut */}
                <div className="rounded-xl bg-white border border-[#E5EDE0] p-2.5 space-y-1.5">
                  <p className="text-[11px] font-bold text-[#142B1C]">Cơ cấu sản phẩm</p>
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-20 h-20 shrink-0">
                      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90" aria-hidden="true">
                        <circle cx="32" cy="32" r="22" fill="none" stroke="#EAF2E3" strokeWidth="10" />
                        {SUPPLY_CATEGORY_SHARE.map((seg) => (
                          <circle
                            key={seg.label}
                            cx="32"
                            cy="32"
                            r="22"
                            fill="none"
                            stroke={seg.color}
                            strokeWidth="10"
                            strokeDasharray={seg.dash}
                            strokeDashoffset={seg.offset}
                          />
                        ))}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
                        <span className="text-xs font-bold text-[#142B1C] tabular-nums">426</span>
                        <span className="text-[8px] text-[#5A6D5E] mt-0.5">Sản phẩm</span>
                      </div>
                    </div>
                    <ul className="space-y-1 text-[9.5px] tabular-nums min-w-0 flex-1">
                      {SUPPLY_CATEGORY_SHARE.map((seg) => (
                        <li key={seg.label} className="flex items-center justify-between gap-1 text-[#324336]">
                          <span className="flex items-center gap-1 min-w-0">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: seg.color }}
                              aria-hidden="true"
                            />
                            <span className="truncate">{seg.label}</span>
                          </span>
                          <span className="font-semibold shrink-0">{seg.pct}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {tabletView === 'catalog' && (
            <div className="space-y-2">
              <p className="text-[11px] text-[#4A5D4F]">
                Chọn nhanh nhóm sản phẩm để xem thẻ chi tiết trên màn hình di động:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRODUCTS.map((item) => {
                  const isCurrent = phoneProduct.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPhoneProduct(item)}
                      className={`text-left rounded-xl border p-1.5 flex items-center gap-2 transition-colors cursor-pointer ${
                        isCurrent
                          ? 'bg-[#EAF4E1] border-[#2E7D28]'
                          : 'bg-white border-[#E5EDE0] hover:border-[#66B032]'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0">
                        <ResilientImage
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-[#142B1C] truncate">
                          {item.shortName}
                        </p>
                        <p className="text-[9.5px] text-[#2E7D28] truncate">{item.readiness}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {tabletView === 'trace' && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {TRACEABILITY_DEMO.map((rec) => (
                  <button
                    key={rec.batchCode}
                    type="button"
                    onClick={() => setBatchQuery(rec.batchCode)}
                    className={`px-2 py-1 rounded-md text-[10px] font-mono cursor-pointer transition-colors ${
                      activeTrace.batchCode === rec.batchCode
                        ? 'bg-[#195E26] text-white'
                        : 'bg-[#EEF5E8] text-[#142B1C] hover:bg-[#DFECCF]'
                    }`}
                  >
                    {rec.batchCode}
                  </button>
                ))}
              </div>
              <div className="rounded-xl bg-white border border-[#E5EDE0] p-2.5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold text-[#142B1C]">{activeTrace.productName}</p>
                  <span className="text-[10px] font-semibold text-[#0C6AB0]">
                    {activeTrace.statusLabel}
                  </span>
                </div>
                <div className="space-y-1 pt-1 border-t border-[#EDF3E8]">
                  {SUPPLY_STAGES.slice(0, 3).map((st) => (
                    <div key={st.id} className="flex items-center justify-between text-[10px] text-[#455849]">
                      <span className="font-semibold text-[#142B1C]">
                        {st.step}. {st.title}
                      </span>
                      <span className="text-[#2E7D28]">Đạt chuẩn demo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderDetailPhone = (compact = true) => (
    <div
      className={`bg-white rounded-[24px] border-[4.5px] border-[#1D2620] shadow-[0_22px_40px_rgba(16,42,24,0.26)] overflow-hidden flex flex-col justify-between ${
        compact ? 'w-full' : 'w-full max-w-[230px]'
      }`}
    >
      <div>
        {/* Status & App Header */}
        <div className="px-3 py-2 border-b border-[#EDF3E8] flex items-center justify-between gap-1 bg-[#FAFDF8]">
          <ArrowLeft className="w-3.5 h-3.5 text-[#324336] shrink-0" />
          <AdigoFullLogo layout="horizontal" className="h-3.5 w-auto" />
          <div className="flex items-center gap-1.5 text-[#324336]">
            <Search className="w-3 h-3" />
            <Bell className="w-3 h-3" />
          </div>
        </div>

        {/* Product Hero Thumbnail */}
        <div className="p-2.5 space-y-2">
          <button
            type="button"
            onClick={() => onOpenProduct(phoneProduct)}
            className="block w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-[#E5EDE0] cursor-pointer group"
            title="Xem chi tiết sản phẩm"
          >
            <ResilientImage
              src={phoneProduct.image}
              alt={phoneProduct.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </button>

          {/* Subtle dot selector across the 6 products */}
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-semibold text-[#195E26]">
              {phoneProduct.readiness}
            </span>
            <div className="flex items-center gap-1">
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPhoneProduct(p)}
                  aria-label={`Xem ${p.name}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    phoneProduct.id === p.id
                      ? 'w-3.5 bg-[#2E7D28]'
                      : 'w-1.5 bg-[#CBDAC2] hover:bg-[#82B864]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-[13px] font-bold text-[#142B1C] leading-tight">
              {phoneProduct.name} Organic
            </h4>
            <p className="text-[9.5px] text-[#4A5D4F] mt-0.5 leading-snug line-clamp-2">
              {phoneProduct.summary}
            </p>
          </div>

          <div className="space-y-1 pt-0.5 text-[9.5px] text-[#324336]">
            <div className="flex items-center gap-1.5">
              <Sprout className="w-3 h-3 text-[#2E7D28] shrink-0" />
              <span className="truncate">Nguồn cung ổn định</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#2E7D28] shrink-0" />
              <span className="truncate">Kiểm soát chất lượng</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3 h-3 text-[#2E7D28] shrink-0" />
              <span className="truncate">Truy xuất nguồn gốc đầy đủ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2.5 pb-2.5">
        <button
          type="button"
          onClick={() => onOpenContact(`Đặt hàng / Hợp tác: ${phoneProduct.name}`)}
          className="w-full py-1.5 px-2.5 rounded-full bg-[#1E5C25] hover:bg-[#13461A] text-white text-[10px] font-semibold transition-colors cursor-pointer"
        >
          Liên hệ đặt hàng
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="adigo"
      className="relative w-full h-auto section-py pb-[clamp(4.5rem,3.5rem+2.5vw,7rem)] bg-gradient-to-b from-[#EFF5EB] via-[#F7FAF4] to-[#EFF5EB] flex flex-col justify-center overflow-hidden"
    >
      {/* Full-Width Misty Sunlit Mountain Panorama */}
      <div className="pointer-events-none absolute inset-x-0 top-12 bottom-0 opacity-30" aria-hidden="true">
        <ResilientImage
          src="/assets/aistudio/landscape_092f592f.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFF5EB] via-[#F6FAF2]/60 to-[#EFF5EB]" />
      </div>

      {/* Top-Left Soft Botanical Curve + Top-Right Branch */}
      <svg
        viewBox="0 0 360 160"
        className="hidden md:block pointer-events-none absolute top-0 left-0 w-72 lg:w-96 h-auto text-[#DCECC9]/75"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 0H290C240 58 150 96 0 118V0Z" />
      </svg>
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute top-0 right-0 w-72 xl:w-84 opacity-85"
      >
        <ResilientImage
          src="/images/products-top-leaves.png"
          alt=""
          className="w-full h-auto object-contain object-right-top mix-blend-multiply"
        />
      </div>

      {/* Seamless Bottom Meadow Transition into Section 08 (white) */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-14 sm:h-20"
        aria-hidden="true"
      >
        <path
          d="M0 44C320 82 680 18 1040 52C1240 70 1360 40 1440 24V110H0V44Z"
          fill="#DDECC8"
          fillOpacity="0.65"
        />
        <path
          d="M0 78C380 48 820 96 1440 62V110H0V78Z"
          fill="#FFFFFF"
        />
      </svg>

      <div className="relative z-10 section-container space-y-8 lg:space-y-10">
        {/* Centered Header Lockup */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3.5 sm:gap-5">
            <span className="h-px w-10 sm:w-16 bg-[#98AE8E]" aria-hidden="true" />
            <AdigoFullLogo layout="horizontal" className="h-8 sm:h-10 w-auto" />
            <span className="h-px w-10 sm:w-16 bg-[#98AE8E]" aria-hidden="true" />
          </div>
          <h2 className="text-[clamp(1.85rem,1.25rem+2vw,3.1rem)] font-bold tracking-tight text-[#142B1C] leading-[1.14]">
            Kết nối sản phẩm và thị trường
          </h2>
          <p className="fluid-lead text-[#3E5143] max-w-2xl mx-auto">
            Nền tảng số kết nối sản phẩm, nhà cung cấp, đối tác kinh doanh và khách hàng trong hệ
            sinh thái Organic Việt Nam.
          </p>
        </div>

        {/* Desktop 4-Device Overlapping Stage (lg+) */}
        <div className="hidden lg:flex items-end justify-center w-full max-w-[1380px] mx-auto pt-2 pb-2">
          {/* 1. Left Transparent Catalog iPhone */}
          <div className="w-[17.5%] max-w-[225px] shrink-0 relative z-20 -mr-10 xl:-mr-12 mb-1 drop-shadow-[0_22px_36px_rgba(16,42,24,0.22)]">
            <ResilientImage
              src="/assets/aistudio/03_ADIGO_Mobile_Danh_Muc_8b8b80c9.png"
              alt="Ứng dụng di động ADIGO hiển thị danh mục sản phẩm Organic Việt Nam"
              className="w-full h-auto block"
            />
          </div>

          {/* 2. Center Transparent Laptop Mockup */}
          <div className="w-[46%] max-w-[640px] shrink-0 relative z-10 drop-shadow-[0_24px_48px_rgba(16,42,24,0.18)]">
            <ResilientImage
              src="/images/adigo-laptop-clean.png"
              alt="Giao diện web nền tảng ADIGO quản lý chuỗi cung ứng nông nghiệp"
              className="w-full h-auto block"
            />
          </div>

          {/* 3. Center-Right Floating Product Detail Phone */}
          <div className="w-[16%] min-w-[172px] max-w-[196px] shrink-0 relative z-30 -ml-14 xl:-ml-16 -mr-7 xl:-mr-9 mb-0.5">
            {renderDetailPhone(true)}
          </div>

          {/* 4. Right Interactive Admin Tablet */}
          <div className="w-[33%] max-w-[440px] shrink-0 relative z-10">
            {renderTabletPanel()}
          </div>
        </div>

        {/* Tablet & Mobile Clean Responsive Stage (< lg) */}
        <div className="lg:hidden space-y-6">
          <div className="max-w-[620px] mx-auto drop-shadow-[0_18px_36px_rgba(16,42,24,0.16)]">
            <ResilientImage
              src="/images/adigo-laptop-clean.png"
              alt="Giao diện web nền tảng ADIGO quản lý chuỗi cung ứng nông nghiệp"
              className="w-full h-auto block"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 flex items-end justify-center gap-4">
              <div className="w-36 sm:w-44 shrink-0 drop-shadow-[0_16px_28px_rgba(16,42,24,0.20)]">
                <ResilientImage
                  src="/assets/aistudio/03_ADIGO_Mobile_Danh_Muc_8b8b80c9.png"
                  alt="Ứng dụng di động ADIGO"
                  className="w-full h-auto block"
                />
              </div>
              <div className="w-40 sm:w-44 shrink-0">{renderDetailPhone(false)}</div>
            </div>
            <div className="md:col-span-7">{renderTabletPanel()}</div>
          </div>
        </div>

        {/* Bottom 3 White Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-2">
          {[
            {
              view: 'catalog' as TabletView,
              icon: ShoppingCart,
              title: 'Giao diện thương mại trực quan',
              desc: 'Khám phá và đặt mua các sản phẩm Organic dễ dàng, nhanh chóng.',
            },
            {
              view: 'overview' as TabletView,
              icon: Layers,
              title: 'Quản trị danh mục & nguồn cung',
              desc: 'Theo dõi sản phẩm, nguồn cung và phân phối đồng bộ, hiệu quả.',
            },
            {
              view: 'trace' as TabletView,
              icon: Search,
              title: 'Hỗ trợ tra cứu thông tin sản phẩm',
              desc: 'Kiểm tra nhanh nguồn gốc, tiêu chuẩn và chứng nhận hữu cơ minh bạch.',
            },
          ].map((item) => {
            const Icon = item.icon;
            const active = tabletView === item.view;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setTabletView(item.view)}
                className={`group text-left rounded-[20px] px-5 py-4 bg-white/95 border transition-all duration-150 flex items-center gap-4 cursor-pointer shadow-[0_12px_28px_-14px_rgba(20,51,30,0.14)] hover:shadow-[0_16px_34px_-12px_rgba(25,94,38,0.20)] focus-visible:outline-2 focus-visible:outline-[#135D2F] ${
                  active
                    ? 'border-[#67AE3B]/75 ring-1 ring-[#67AE3B]/25'
                    : 'border-white hover:border-[#CBE0B5]'
                }`}
              >
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F2F9EA] via-[#E5F2D5] to-[#D4E8BD] text-[#286828] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[15px] sm:text-base font-bold text-[#142B1C] group-hover:text-[#135D2F] leading-snug transition-colors">
                    {item.title}
                  </span>
                  <span className="block text-xs sm:text-[13px] text-[#455849] mt-0.5 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
