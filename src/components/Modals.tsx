import React, { useState } from 'react';
import {
  CheckCircle2,
  MapPin,
  Play,
  QrCode,
  ShieldCheck,
  Sprout,
  X,
} from 'lucide-react';
import {
  NEWS_ARTICLES,
  NewsArticle,
  PARTNERSHIP_PILLARS,
  ProductItem,
  TRACEABILITY_DEMO,
} from '../data/ecosystemData';
import { ResilientImage } from './ResilientImage';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestOrder: (productName: string) => void;
}

export function ProductDetailModal({ product, onClose, onRequestOrder }: ProductModalProps) {
  if (!product) return null;
  const trace = TRACEABILITY_DEMO.find((t) => t.batchCode === product.batchCode);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden border border-[#DDE7D4] shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 sm:h-64">
          <ResilientImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#142419] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <p className="text-xs text-white/85 mb-1">
              {product.categoryLabel} · {product.readiness}
            </p>
            <h3 id="product-modal-title" className="text-xl sm:text-2xl font-bold">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E6EEE0]">
            <div>
              <p className="text-xs text-[#4A5D4F]">Tình trạng phát triển</p>
              <p className="text-base font-bold text-[#135D2F]">{product.readiness}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#4A5D4F]">Mã hồ sơ mô phỏng</p>
              <p className="text-sm font-mono font-semibold text-[#0C6AB0] inline-flex items-center gap-1.5">
                <QrCode className="w-4 h-4" />
                {product.batchCode}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-sm text-[#324336]">
            <p className="leading-relaxed">{product.summary}</p>
            <p className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5D4F]">
              <MapPin className="w-4 h-4 text-[#135D2F] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#142419]">Mô hình nguồn cung:</strong> {product.sourceModel}
              </span>
            </p>
            <p className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5D4F]">
              <Sprout className="w-4 h-4 text-[#135D2F] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#142419]">Định hướng chăm sóc:</strong>{' '}
                {product.herbalOrientation}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl bg-[#F4F8F0] border border-[#E1EBD9] p-3 tabular-nums"
              >
                <p className="text-[11px] text-[#4A5D4F] mb-0.5">{spec.label}</p>
                <p className="text-sm font-bold text-[#142419]">{spec.value}</p>
              </div>
            ))}
          </div>

          {trace && (
            <div className="rounded-xl bg-[#FAFBF8] border border-[#E1EBD9] p-4 space-y-2">
              <p className="text-xs font-bold text-[#135D2F] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Minh họa hành trình thông tin ({trace.updatedDate})
              </p>
              <div className="space-y-1.5">
                {trace.checkpoints.map((cp) => (
                  <div key={cp.time} className="text-xs text-[#425547] flex gap-2">
                    <span className="font-mono text-[#0C6AB0] shrink-0">{cp.time}</span>
                    <span>
                      <strong className="text-[#142419]">{cp.stage}:</strong> {cp.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-[#D4E0CD] text-sm font-medium text-[#142419] hover:bg-[#F3F7EF] transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestOrder(`Tìm hiểu / Liên hệ thương mại: ${product.name}`);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#135D2F] hover:bg-[#0E4824] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Liên hệ thông tin sản phẩm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ArticleModalProps {
  article: NewsArticle | null;
  showArchiveList?: boolean;
  onSelectArticle?: (article: NewsArticle) => void;
  onClose: () => void;
}

export function ArticleReaderModal({
  article,
  showArchiveList,
  onSelectArticle,
  onClose,
}: ArticleModalProps) {
  if (!article && !showArchiveList) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden border border-[#DDE7D4] shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {showArchiveList && !article ? (
          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[#E6EEE0] pb-4">
              <div>
                <p className="text-xs font-semibold text-[#135D2F]">Truyền thông Organic Việt Nam</p>
                <h3 id="article-modal-title" className="text-xl font-bold text-[#142419]">
                  Toàn bộ tin tức & nội dung truyền thông (Demo)
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng danh sách bài viết"
                className="w-9 h-9 rounded-full bg-[#F2F6EE] hover:bg-[#E4EDE0] text-[#142419] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="divide-y divide-[#E6EEE0]">
              {NEWS_ARTICLES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectArticle?.(item)}
                  className="w-full py-4 text-left flex items-center gap-4 hover:bg-[#FAFBF8] rounded-xl px-2 transition-colors cursor-pointer"
                >
                  <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-[#DCE7D5]">
                    <ResilientImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#4A5D4F] mb-1">
                      {item.category} · {item.date}
                    </p>
                    <h4 className="text-sm font-bold text-[#142419] leading-snug">{item.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          article && (
            <>
              <div className="relative h-56">
                <ResilientImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Đóng bài viết"
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#142419] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs text-white/85 mb-1.5 flex items-center gap-2">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 id="article-modal-title" className="text-lg sm:text-xl font-bold leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {article.isVideo && (
                  <div className="rounded-xl bg-[#F0F5EB] border border-[#DCE7D5] p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#135D2F] text-white flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    <div className="text-xs sm:text-sm text-[#324336]">
                      <strong className="text-[#142419]">Tư liệu minh họa truyền thông:</strong> Nội
                      dung giới thiệu định hướng nghiên cứu và phát triển mô hình nông nghiệp thảo
                      dược.
                    </div>
                  </div>
                )}
                <p className="text-sm font-medium text-[#135D2F]">{article.excerpt}</p>
                <div className="space-y-3 text-sm text-[#324336] leading-relaxed">
                  {article.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="pt-3 flex justify-end border-t border-[#E6EEE0]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-[#135D2F] text-white text-sm font-semibold hover:bg-[#0E4824] cursor-pointer"
                  >
                    Đóng bài viết
                  </button>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

interface ContactModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export function PartnershipContactModal({ isOpen, initialTopic, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pillar, setPillar] = useState(initialTopic || PARTNERSHIP_PILLARS[0].title);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      setError('Vui lòng nhập họ tên hoặc tên đơn vị (tối thiểu 2 ký tự).');
      return;
    }
    if (!/^[0-9+\s()-]{8,15}$/.test(trimmedPhone)) {
      setError('Số điện thoại chưa đúng định dạng (8–15 chữ số).');
      return;
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Địa chỉ email chưa hợp lệ.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError(null);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full border border-[#DDE7D4] shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#135D2F] text-white flex items-center justify-between">
          <div>
            <p className="text-xs text-white/80">Công ty Cổ phần Tập đoàn Organic Việt Nam</p>
            <h3 id="contact-modal-title" className="text-lg font-bold">
              Liên hệ hợp tác cùng Organic Việt Nam
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Đóng biểu mẫu"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E8F4EA] text-[#135D2F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-[#142419]">Đã ghi nhận thông tin liên hệ (Demo)</h4>
            <p className="text-sm text-[#4A5D4F] leading-relaxed">
              Cảm ơn <strong className="text-[#142419]">{name}</strong> đã quan tâm đến nội dung{' '}
              <strong className="text-[#142419]">{pillar}</strong>. Thông tin liên hệ qua số{' '}
              <span className="font-mono text-[#135D2F] tabular-nums">{phone}</span> đã được ghi
              nhận trong phiên trải nghiệm demo.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-5 py-2.5 rounded-lg bg-[#135D2F] text-white text-sm font-semibold hover:bg-[#0E4824] cursor-pointer"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div
                role="alert"
                className="rounded-lg bg-red-50 border border-red-200 px-3.5 py-2.5 text-xs font-medium text-red-700"
              >
                {error}
              </div>
            )}
            <div>
              <label htmlFor="partner-name" className="block text-xs font-semibold text-[#142419] mb-1">
                Họ tên / Tên tổ chức *
              </label>
              <input
                id="partner-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Công ty / Hợp tác xã đối tác"
                className="w-full rounded-lg border border-[#D4E0CD] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#135D2F]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="partner-phone" className="block text-xs font-semibold text-[#142419] mb-1">
                  Số điện thoại *
                </label>
                <input
                  id="partner-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0912 345 678"
                  className="w-full rounded-lg border border-[#D4E0CD] px-3.5 py-2.5 text-sm tabular-nums focus:outline-none focus:border-[#135D2F]"
                />
              </div>
              <div>
                <label htmlFor="partner-email" className="block text-xs font-semibold text-[#142419] mb-1">
                  Email liên hệ
                </label>
                <input
                  id="partner-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@donvi.vn"
                  className="w-full rounded-lg border border-[#D4E0CD] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#135D2F]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="partner-topic" className="block text-xs font-semibold text-[#142419] mb-1">
                Định hướng hợp tác quan tâm
              </label>
              <select
                id="partner-topic"
                value={pillar}
                onChange={(e) => setPillar(e.target.value)}
                className="w-full rounded-lg border border-[#D4E0CD] px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-[#135D2F]"
              >
                {PARTNERSHIP_PILLARS.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
                {initialTopic &&
                  !PARTNERSHIP_PILLARS.some((p) => p.title === initialTopic) && (
                    <option value={initialTopic}>{initialTopic}</option>
                  )}
              </select>
            </div>

            <div>
              <label htmlFor="partner-message" className="block text-xs font-semibold text-[#142419] mb-1">
                Nội dung trao đổi
              </label>
              <textarea
                id="partner-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Chia sẻ định hướng hợp tác vùng nguyên liệu, phân phối hoặc công nghệ..."
                className="w-full rounded-lg border border-[#D4E0CD] px-3.5 py-2 text-sm focus:outline-none focus:border-[#135D2F]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 rounded-lg border border-[#D4E0CD] text-sm font-medium text-[#142419] hover:bg-[#F3F7EF] cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#135D2F] hover:bg-[#0E4824] text-white text-sm font-semibold cursor-pointer"
              >
                Gửi thông tin hợp tác
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
