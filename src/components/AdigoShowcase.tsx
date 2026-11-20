import React, { useState } from 'react';
import {
  CheckCircle2,
  ClipboardCheck,
  QrCode,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
  User,
} from 'lucide-react';
import {
  PRODUCTS,
  ProductItem,
  SUPPLY_STAGES,
  TRACEABILITY_DEMO,
} from '../data/ecosystemData';
import { AdigoFullLogo } from './BrandMarks';
import { ResilientImage } from './ResilientImage';

type LaptopTab = 'commerce' | 'catalog' | 'trace';

interface AdigoShowcaseProps {
  onOpenProduct: (product: ProductItem) => void;
  onOpenContact: (presetTopic?: string) => void;
}

const PHONE_SHORT_LABELS: Record<string, string> = {
  chicken: 'Gà',
  pork: 'Heo',
  beef: 'Bò',
  eggs: 'Trứng',
  orange: 'Cam',
  pomelo: 'Bưởi',
};

const SUPPLY_CATEGORY_SHARE = [
  { label: 'Gà', pct: 26, color: '#17783C' },
  { label: 'Heo', pct: 24, color: '#39A85B' },
  { label: 'Bò & Trâu', pct: 18, color: '#0B74B8' },
  { label: 'Trứng, Cam, Bưởi', pct: 32, color: '#84CC16' },
];

export function AdigoShowcase({ onOpenProduct, onOpenContact }: AdigoShowcaseProps) {
  const [laptopTab, setLaptopTab] = useState<LaptopTab>('commerce');
  const [phoneProduct, setPhoneProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [batchQuery, setBatchQuery] = useState<string>('DEMO-GA-01');
  const [demoCartCount, setDemoCartCount] = useState<number>(0);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const activeTrace =
    TRACEABILITY_DEMO.find(
      (rec) => rec.batchCode.toUpperCase() === batchQuery.trim().toUpperCase(),
    ) || TRACEABILITY_DEMO[0];

  const handleDemoOrder = (product: ProductItem) => {
    setDemoCartCount((c) => c + 1);
    setAddedToast(`Đã thêm "${PHONE_SHORT_LABELS[product.id] || product.shortName}" vào giỏ hàng demo`);
    setTimeout(() => setAddedToast(null), 2600);
  };

  return (
    <section
      id="adigo"
      className="w-full py-18 lg:py-24 lg:min-h-[90vh] bg-[#EFF5EB] border-y border-[#DCE7D5] flex flex-col justify-center"
    >
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-3.5">
              <AdigoFullLogo className="h-11 sm:h-13 w-auto shrink-0" />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#142419]">
                – Kết nối sản phẩm và thị trường
              </span>
            </div>
            <p className="text-base sm:text-lg text-[#425547] leading-relaxed max-w-3xl">
              Nền tảng thương mại số kết nối sản phẩm, nhà cung cấp, đối tác kinh doanh và khách
              hàng trong hệ sinh thái Organic Việt Nam.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right space-y-2">
            <p className="text-xs sm:text-sm text-[#4A5D4F]">
              Giao diện mô phỏng trải nghiệm đa thiết bị (Demo) · Đồng bộ danh mục 6 nhóm sản phẩm
            </p>
            <button
              type="button"
              onClick={() => onOpenContact('Tìm hiểu và hợp tác nền tảng ADIGO')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0C6AB0] hover:bg-[#09548C] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Đăng ký trải nghiệm đối tác
            </button>
          </div>
        </div>

        {/* ROW 1: Desktop/Laptop Storefront + Tablet Supply Chain & Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Desktop / Laptop Mockup (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-[#1A241E] rounded-t-2xl p-3 sm:p-4 shadow-md">
              <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
                {/* Browser / App Bar inside Laptop */}
                <div className="px-4 py-3 border-b border-[#E5ECE0] flex items-center justify-between gap-3 bg-[#FAFBF8]">
                  <div className="shrink-0">
                    <AdigoFullLogo className="h-7 w-auto" />
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto">
                    {(
                      [
                        { id: 'commerce', label: 'Thương mại sản phẩm' },
                        { id: 'catalog', label: 'Danh mục kết nối' },
                        { id: 'trace', label: 'Thông tin nguồn gốc' },
                      ] as { id: LaptopTab; label: string }[]
                    ).map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setLaptopTab(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          laptopTab === tab.id
                            ? 'bg-[#135D2F] text-white'
                            : 'text-[#4A5D4F] hover:bg-[#EBF2E6]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-[#4A5D4F] shrink-0">
                    <span className="tabular-nums">Giỏ demo ({demoCartCount})</span>
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Laptop Viewport Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white min-h-[340px]">
                  {laptopTab === 'commerce' && (
                    <div className="space-y-4">
                      <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden border border-[#DCE7D5]">
                        <ResilientImage
                          src="/assets/aistudio/landscape_092f592f.jpg"
                          alt="Không gian nông nghiệp hữu cơ trên nền tảng ADIGO"
                          className="w-full h-full object-cover object-bottom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15 flex flex-col items-center justify-center text-center px-4">
                          <p className="text-lg sm:text-xl font-bold text-white">
                            Thực phẩm Organic Việt Nam trên ADIGO
                          </p>
                          <p className="text-xs sm:text-sm text-white/90 mt-1">
                            Kết nối trực tiếp nhà sản xuất, đối tác phân phối và người tiêu dùng
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {PRODUCTS.map((item) => {
                          const label = PHONE_SHORT_LABELS[item.id] || item.shortName;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                setPhoneProduct(item);
                                onOpenProduct(item);
                              }}
                              className="group text-left rounded-xl border border-[#E5ECE0] bg-[#FAFBF8] hover:border-[#135D2F] overflow-hidden transition-colors cursor-pointer"
                            >
                              <div className="h-20 overflow-hidden">
                                <ResilientImage
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.06] transition-transform duration-200"
                                />
                              </div>
                              <div className="p-2.5 flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-[#142419] truncate">
                                  {label} · {item.shortName}
                                </span>
                                <span className="text-[10px] text-[#135D2F] shrink-0">
                                  {item.readiness === 'Thương mại' ? 'Sẵn sàng' : 'Định hướng'}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {laptopTab === 'catalog' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-[#142419]">
                          Danh mục 6 nhóm sản phẩm kết nối (Mô phỏng)
                        </h3>
                        <span className="text-xs text-[#4A5D4F]">Chọn để xem hồ sơ</span>
                      </div>
                      <div className="divide-y divide-[#E7EFE1] border border-[#E7EFE1] rounded-xl overflow-hidden">
                        {PRODUCTS.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setPhoneProduct(item)}
                            className="w-full px-3.5 py-2.5 flex items-center justify-between gap-3 bg-[#FAFBF8] hover:bg-[#F0F6EC] text-left transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-12 h-9 rounded-lg overflow-hidden shrink-0 border border-[#DCE7D5]">
                                <ResilientImage
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-[#142419] truncate">
                                  {item.name}
                                </p>
                                <p className="text-[11px] text-[#4A5D4F] truncate">
                                  {item.sourceModel}
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] font-medium text-[#135D2F] shrink-0">
                              {item.readiness}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {laptopTab === 'trace' && (
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="relative flex-1 min-w-[180px]">
                          <Search className="w-4 h-4 text-[#4A5D4F] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={batchQuery}
                            onChange={(e) => setBatchQuery(e.target.value)}
                            aria-label="Tra cứu mã hồ sơ demo"
                            placeholder="Nhập mã hồ sơ demo (VD: DEMO-GA-01)"
                            className="w-full pl-9 pr-3 py-2 text-xs font-mono rounded-lg border border-[#D4E0CD] bg-[#FAFBF8] focus:outline-none focus:border-[#135D2F]"
                          />
                        </div>
                        <div className="flex gap-1.5">
                          {TRACEABILITY_DEMO.map((r) => (
                            <button
                              key={r.batchCode}
                              type="button"
                              onClick={() => setBatchQuery(r.batchCode)}
                              className={`px-2.5 py-2 rounded-lg text-[11px] font-mono cursor-pointer transition-colors ${
                                activeTrace.batchCode === r.batchCode
                                  ? 'bg-[#135D2F] text-white'
                                  : 'bg-[#EEF4E9] text-[#142419] hover:bg-[#E1ECE0]'
                              }`}
                            >
                              {r.batchCode}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl border border-[#DCE7D5] bg-[#FAFBF8] p-4 space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-bold text-[#142419]">
                              {activeTrace.productName}
                            </p>
                            <p className="text-xs text-[#4A5D4F]">{activeTrace.stageSummary}</p>
                          </div>
                          <span className="text-xs font-mono text-[#0C6AB0] shrink-0">
                            {activeTrace.statusLabel}
                          </span>
                        </div>
                        <div className="space-y-1.5 pt-2 border-t border-[#E7EFE1]">
                          {activeTrace.checkpoints.map((cp) => (
                            <div
                              key={cp.time}
                              className="flex items-start gap-2.5 text-xs text-[#425547]"
                            >
                              <span className="font-mono text-[#135D2F] shrink-0">{cp.time}</span>
                              <span>
                                <strong className="text-[#142419]">{cp.stage}:</strong> {cp.action}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="h-3.5 bg-[#C8D2CC] rounded-b-2xl mx-auto w-[103%] -ml-[1.5%] flex items-center justify-center">
              <div className="w-16 h-1 rounded-full bg-[#96A39B]" />
            </div>
          </div>

          {/* Tablet Mockup: Catalog & Supply Chain Management (5 cols) */}
          <div className="lg:col-span-5 bg-[#1A241E] rounded-3xl p-3 sm:p-4 shadow-md flex flex-col">
            <div className="bg-white rounded-2xl p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7EFE1]">
                  <AdigoFullLogo className="h-7 w-auto" />
                  <span className="text-xs font-bold text-[#135D2F]">
                    Quản trị chuỗi cung ứng (Demo)
                  </span>
                </div>

                {/* 5-Stage Supply Chain Tracker inside Tablet */}
                <div>
                  <p className="text-xs font-semibold text-[#4A5D4F] mb-2">
                    Tiến trình liên kết chuỗi cung ứng
                  </p>
                  <div className="space-y-2">
                    {SUPPLY_STAGES.map((stage) => (
                      <div
                        key={stage.id}
                        className="rounded-lg bg-[#FAFBF8] border border-[#E7EFE1] px-3 py-2 flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-[11px] font-mono font-bold text-[#135D2F] shrink-0">
                            {stage.step}
                          </span>
                          <span className="text-xs font-semibold text-[#142419] truncate">
                            {stage.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#4A5D4F] shrink-0">Đồng bộ hồ sơ</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Allocation Chart (Demo) */}
              <div className="mt-4 pt-3 border-t border-[#E7EFE1] flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold text-[#4A5D4F] mb-2">
                    Cơ cấu danh mục mô phỏng
                  </p>
                  <ul className="space-y-1 text-xs tabular-nums">
                    {SUPPLY_CATEGORY_SHARE.map((m) => (
                      <li key={m.label} className="flex items-center gap-2 text-[#142419]">
                        <span
                          className="w-2.5 h-2.5 rounded-sm shrink-0"
                          style={{ backgroundColor: m.color }}
                          aria-hidden="true"
                        />
                        <span className="font-medium">{m.label}</span>
                        <span className="text-[#4A5D4F]">({m.pct}%)</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <svg viewBox="0 0 64 64" className="w-20 h-20 shrink-0" aria-hidden="true">
                  <circle cx="32" cy="32" r="22" fill="none" stroke="#E5ECE0" strokeWidth="12" />
                  <circle
                    cx="32"
                    cy="32"
                    r="22"
                    fill="none"
                    stroke="#17783C"
                    strokeWidth="12"
                    strokeDasharray="36 102"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="22"
                    fill="none"
                    stroke="#39A85B"
                    strokeWidth="12"
                    strokeDasharray="33 105"
                    strokeDashoffset="-36"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="22"
                    fill="none"
                    stroke="#0B74B8"
                    strokeWidth="12"
                    strokeDasharray="25 113"
                    strokeDashoffset="-69"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="22"
                    fill="none"
                    stroke="#84CC16"
                    strokeWidth="12"
                    strokeDasharray="44 94"
                    strokeDashoffset="-94"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Two Large Mobile Mockups + Platform Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Two Large Mobile Phone Mockups (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {/* Phone 1: Mobile Product Catalog Screen */}
            <div className="bg-white rounded-[32px] border-[6px] border-[#1F2D23] shadow-md overflow-hidden flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="bg-[#FAFBF8] px-4 py-3 border-b border-[#E7EFE1] flex items-center justify-between">
                  <AdigoFullLogo className="h-5 w-auto" />
                  <span className="text-xs font-medium text-[#4A5D4F] tabular-nums">
                    Giỏ ({demoCartCount})
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-[#142419]">Danh mục sản phẩm</p>
                  <p className="text-xs text-[#4A5D4F] mt-0.5 mb-3">
                    Chọn sản phẩm để xem chi tiết trên màn hình bên cạnh
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {PRODUCTS.map((item) => {
                      const isSelected = phoneProduct.id === item.id;
                      const short = PHONE_SHORT_LABELS[item.id] || item.shortName;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPhoneProduct(item)}
                          className={`rounded-xl p-2 text-left border transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#E5F2E3] border-[#135D2F]'
                              : 'bg-[#FAFBF8] border-[#E5ECE0] hover:border-[#9CC3A6]'
                          }`}
                        >
                          <div className="h-16 rounded-lg overflow-hidden mb-1.5">
                            <ResilientImage
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="block text-xs font-bold text-[#142419]">{short}</span>
                          <span className="block text-[10px] text-[#4A5D4F] truncate">
                            {item.shortName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="px-4 py-2.5 border-t border-[#E7EFE1] bg-[#FAFBF8] flex items-center justify-between text-[11px] text-[#4A5D4F]">
                <span className="font-semibold text-[#135D2F]">Danh mục</span>
                <button
                  type="button"
                  onClick={() => {
                    setBatchQuery(phoneProduct.batchCode);
                    setLaptopTab('trace');
                  }}
                  className="hover:text-[#135D2F] cursor-pointer"
                >
                  Xem truy xuất
                </button>
              </div>
            </div>

            {/* Phone 2: Product Detail & Purchase Experience Screen */}
            <div className="bg-white rounded-[32px] border-[6px] border-[#1F2D23] shadow-md overflow-hidden flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="bg-[#FAFBF8] px-4 py-3 border-b border-[#E7EFE1] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#142419]">
                    {PHONE_SHORT_LABELS[phoneProduct.id]} · {phoneProduct.shortName}
                  </span>
                  <span className="text-[11px] font-mono text-[#0C6AB0]">{phoneProduct.batchCode}</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-36 rounded-2xl overflow-hidden border border-[#E7EFE1]">
                    <ResilientImage
                      src={phoneProduct.image}
                      alt={phoneProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#135D2F] font-semibold">
                      {phoneProduct.readiness}
                    </p>
                    <h3 className="text-base font-bold text-[#142419] mt-0.5">
                      {phoneProduct.name}
                    </h3>
                    <p className="text-xs text-[#4A5D4F] mt-1 leading-relaxed">
                      {phoneProduct.summary}
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#324336]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1E7B3B] shrink-0" />
                      <span>Thông tin hồ sơ sản xuất minh bạch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-[#0C6AB0] shrink-0" />
                      <span>Tích hợp tra cứu nguồn gốc demo</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => handleDemoOrder(phoneProduct)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#135D2F] hover:bg-[#0E4824] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Thêm vào giỏ hàng demo
                </button>
                {addedToast && (
                  <p className="text-[11px] text-[#135D2F] font-medium text-center">{addedToast}</p>
                )}
              </div>
            </div>
          </div>

          {/* Feature Highlights Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#142419]">
              Tính năng định hướng của nền tảng ADIGO
            </h3>
            <p className="text-sm text-[#4A5D4F] leading-relaxed">
              Các màn hình trên minh họa định hướng trải nghiệm người dùng khi kết nối hệ sinh thái
              Organic Việt Nam trên máy tính, máy tính bảng và điện thoại.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                {
                  tab: 'commerce' as LaptopTab,
                  icon: ShoppingBag,
                  title: 'Giao diện thương mại trực quan',
                  desc: 'Trình bày rõ ràng 6 nhóm sản phẩm chủ lực (Gà, Heo, Bò, Trứng, Cam, Bưởi) cho khách hàng và đối tác.',
                },
                {
                  tab: 'catalog' as LaptopTab,
                  icon: Truck,
                  title: 'Quản trị danh mục & nguồn cung',
                  desc: 'Theo dõi trạng thái liên kết sản xuất, sơ chế và phân phối đồng bộ theo từng nhóm hàng.',
                },
                {
                  tab: 'trace' as LaptopTab,
                  icon: ShieldCheck,
                  title: 'Hỗ trợ tra cứu thông tin sản phẩm',
                  desc: 'Kiểm tra nhanh hồ sơ lô hàng mô phỏng từ khâu nguyên liệu đến khi đưa ra thị trường.',
                },
              ].map((item) => {
                const Icon = item.icon;
                const active = laptopTab === item.tab;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setLaptopTab(item.tab)}
                    className={`text-left rounded-xl p-4 border transition-colors cursor-pointer flex items-start gap-3.5 ${
                      active
                        ? 'bg-white border-[#135D2F] shadow-sm'
                        : 'bg-white/80 border-[#DCE7D5] hover:bg-white'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EBF4E7] text-[#135D2F] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-sm font-bold text-[#142419]">{item.title}</span>
                      <span className="block text-xs text-[#4A5D4F] mt-1 leading-relaxed">
                        {item.desc}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#135D2F]">
                        <ClipboardCheck className="w-3.5 h-3.5" />
                        {active ? 'Đang xem trên màn hình Laptop' : 'Mở xem trên màn hình Laptop'}
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
  );
}
