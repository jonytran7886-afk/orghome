export interface HerbItem {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  partUsed: string;
  researchFocus: string;
  application: string;
}

export interface ProductItem {
  id: string;
  name: string;
  shortName: string;
  category: 'meat-egg' | 'fruit';
  categoryLabel: string;
  readiness: 'Thương mại' | 'Định hướng phát triển';
  image: string;
  batchCode: string;
  sourceModel: string;
  herbalOrientation: string;
  summary: string;
  specs: { label: string; value: string }[];
}

export interface SupplyStage {
  id: string;
  step: string;
  title: string;
  summary: string;
  image: string;
  description: string;
}

export interface QualityItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  isVideo?: boolean;
  excerpt: string;
  content: string[];
}

export interface TraceabilityRecord {
  batchCode: string;
  productName: string;
  stageSummary: string;
  updatedDate: string;
  statusLabel: string;
  herbalNote: string;
  checkpoints: { time: string; stage: string; action: string }[];
}

export const HERBS: HerbItem[] = [
  {
    id: 'ginger',
    name: 'Gừng',
    scientificName: 'Zingiber officinale',
    image: '/assets/aistudio/ginger_95cd6aeb.jpg',
    partUsed: 'Thân rễ tươi & chiết xuất tinh dầu',
    researchFocus: 'Định hướng phối trộn khẩu phần hỗ trợ tiêu hóa và giữ ấm tự nhiên',
    application: 'Nghiên cứu bổ sung vào thức ăn chăn nuôi theo tỷ lệ thử nghiệm từng giai đoạn.',
  },
  {
    id: 'turmeric',
    name: 'Nghệ',
    scientificName: 'Curcuma longa',
    image: '/assets/aistudio/turmeric_983a17b6.jpg',
    partUsed: 'Thân rễ giàu Curcuminoids',
    researchFocus: 'Đánh giá vai trò chống oxy hóa và giảm phụ thuộc phụ gia tổng hợp',
    application: 'Kết hợp trong công thức dinh dưỡng thảo dược cho vật nuôi định hướng hữu cơ.',
  },
  {
    id: 'dinhlang',
    name: 'Đinh lăng',
    scientificName: 'Polyscias fruticosa',
    image: '/assets/aistudio/dinh-lang_2a28cdf3.jpg',
    partUsed: 'Lá và thân rễ',
    researchFocus: 'Theo dõi tác động hỗ trợ sức đề kháng tự nhiên khi thay đổi thời tiết',
    application: 'Phát triển vùng trồng xen canh và thử nghiệm bổ sung dinh dưỡng đàn thả vườn.',
  },
  {
    id: 'chumngay',
    name: 'Chùm ngây',
    scientificName: 'Moringa oleifera',
    image: '/assets/aistudio/moringa_e27fd410.jpg',
    partUsed: 'Lá tươi & bột lá sấy lạnh',
    researchFocus: 'Bổ sung nguồn đạm thực vật, vitamin và khoáng chất tự nhiên',
    application: 'Nghiên cứu ứng dụng trong khẩu phần gia cầm lấy thịt và trứng thảo dược.',
  },
  {
    id: 'sambochinh',
    name: 'Sâm Bố Chính',
    scientificName: 'Abelmoschus sagittifolius',
    image: '/assets/aistudio/sam-bo-chinh_8ff0c79c.jpg',
    partUsed: 'Củ rễ và hoa',
    researchFocus: 'Bảo tồn nguồn gen dược liệu quý gắn với phát triển vùng nguyên liệu liên kết',
    application: 'Định hướng nghiên cứu sản phẩm thực phẩm giá trị gia tăng trong dài hạn.',
  },
  {
    id: 'duongquy',
    name: 'Đương quy',
    scientificName: 'Angelica sinensis',
    image: '/assets/aistudio/duong-quy_940e14a7.jpg',
    partUsed: 'Rễ củ đạt chuẩn độ tuổi',
    researchFocus: 'Phát triển mô hình trồng trọt chuyên canh theo điều kiện khí hậu phù hợp',
    application: 'Nghiên cứu phối hợp thảo mộc nâng cao chất lượng và hương vị nông sản.',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'chicken',
    name: 'Gà thịt',
    shortName: 'Gà thịt',
    category: 'meat-egg',
    categoryLabel: 'Thịt & Gia cầm',
    readiness: 'Thương mại',
    image: '/assets/aistudio/chicken_d94f23e2.jpg',
    batchCode: 'DEMO-GA-01',
    sourceModel: 'Trang trại liên kết định hướng thảo dược',
    herbalOrientation: 'Khẩu phần phối trộn thảo dược tự nhiên theo quy trình theo dõi dinh dưỡng.',
    summary: 'Nhóm sản phẩm thịt gia cầm chủ lực, thịt săn chắc, vị thanh và hồ sơ thông tin minh bạch.',
    specs: [
      { label: 'Trạng thái', value: 'Sẵn sàng thương mại' },
      { label: 'Đóng gói', value: 'Hút chân không mát' },
      { label: 'Quản trị lô', value: 'Mã hóa ADIGO Demo' },
    ],
  },
  {
    id: 'pork',
    name: 'Thịt lợn',
    shortName: 'Thịt lợn',
    category: 'meat-egg',
    categoryLabel: 'Thịt & Gia cầm',
    readiness: 'Thương mại',
    image: '/assets/aistudio/pork_6d5dc665.jpg',
    batchCode: 'DEMO-HEO-02',
    sourceModel: 'Chuỗi chăn nuôi liên kết kiểm soát đầu vào',
    herbalOrientation: 'Nghiên cứu bổ sung thảo mộc giúp cải thiện độ tươi và cấu trúc thớ thịt.',
    summary: 'Thịt lợn tươi sạch được sơ chế, bảo quản mát và gắn thông tin nguồn gốc rõ ràng.',
    specs: [
      { label: 'Trạng thái', value: 'Sẵn sàng thương mại' },
      { label: 'Bảo quản', value: '0–4 °C' },
      { label: 'Quản trị lô', value: 'Mã hóa ADIGO Demo' },
    ],
  },
  {
    id: 'beef',
    name: 'Thịt bò và trâu',
    shortName: 'Thịt bò & trâu',
    category: 'meat-egg',
    categoryLabel: 'Thịt & Gia cầm',
    readiness: 'Định hướng phát triển',
    image: '/assets/aistudio/beef_9f23d01c.jpg',
    batchCode: 'DEMO-BO-03',
    sourceModel: 'Mô hình chăn thả liên kết & chuẩn hóa thức ăn thô xanh',
    herbalOrientation: 'Định hướng phát triển vùng chăn nuôi đồng cỏ kết hợp khoáng thảo mộc.',
    summary: 'Nhóm sản phẩm thịt đỏ giàu dinh dưỡng đang được tập đoàn mở rộng liên kết đầu tư.',
    specs: [
      { label: 'Trạng thái', value: 'Định hướng phát triển' },
      { label: 'Quy chuẩn', value: 'An toàn sinh học' },
      { label: 'Quản trị lô', value: 'Mã hóa ADIGO Demo' },
    ],
  },
  {
    id: 'eggs',
    name: 'Trứng gia cầm',
    shortName: 'Trứng gia cầm',
    category: 'meat-egg',
    categoryLabel: 'Thịt & Gia cầm',
    readiness: 'Thương mại',
    image: '/assets/aistudio/eggs_ce6af497.jpg',
    batchCode: 'DEMO-TR-04',
    sourceModel: 'Trang trại gà đẻ liên kết theo dõi nhật ký hàng ngày',
    herbalOrientation: 'Khẩu phần ngũ cốc kết hợp bột lá thảo dược giúp lòng đỏ tự nhiên, đậm vị.',
    summary: 'Trứng gia cầm tươi thu hoạch mỗi ngày, phân loại và đóng hộp bảo vệ tiêu chuẩn.',
    specs: [
      { label: 'Trạng thái', value: 'Sẵn sàng thương mại' },
      { label: 'Quy cách', value: 'Hộp 10 quả' },
      { label: 'Quản trị lô', value: 'Mã hóa ADIGO Demo' },
    ],
  },
  {
    id: 'orange',
    name: 'Cam',
    shortName: 'Cam',
    category: 'fruit',
    categoryLabel: 'Trái cây',
    readiness: 'Thương mại',
    image: '/assets/aistudio/orange_fa3dd582.jpg',
    batchCode: 'DEMO-CAM-05',
    sourceModel: 'Vùng trồng cây ăn quả áp dụng quy trình chăm sóc sinh học',
    herbalOrientation: 'Ưu tiên dinh dưỡng hữu cơ và chế phẩm sinh học thân thiện môi trường.',
    summary: 'Cam tươi thu hoạch đúng độ chín tự nhiên, hương thơm dịu và vị ngọt thanh.',
    specs: [
      { label: 'Trạng thái', value: 'Sẵn sàng thương mại' },
      { label: 'Phân loại', value: 'Tuyển chọn theo mùa' },
      { label: 'Quản trị lô', value: 'Mã hóa ADIGO Demo' },
    ],
  },
  {
    id: 'pomelo',
    name: 'Bưởi',
    shortName: 'Bưởi',
    category: 'fruit',
    categoryLabel: 'Trái cây',
    readiness: 'Thương mại',
    image: '/assets/aistudio/pomelo_91f9139d.jpg',
    batchCode: 'DEMO-BUOI-06',
    sourceModel: 'Vùng nguyên liệu liên kết kiểm soát dư lượng định kỳ',
    herbalOrientation: 'Quy trình canh tác giảm thiểu hóa chất, bảo vệ cân bằng sinh thái vườn.',
    summary: 'Bưởi tuyển chọn múi giòn ngọt, bảo quản tự nhiên và kết nối phân phối qua ADIGO.',
    specs: [
      { label: 'Trạng thái', value: 'Sẵn sàng thương mại' },
      { label: 'Phân loại', value: 'Đạt chuẩn phân phối' },
      { label: 'Quản trị lô', value: 'Mã hóa ADIGO Demo' },
    ],
  },
];

export const SUPPLY_STAGES: SupplyStage[] = [
  {
    id: 'seed-material',
    step: '01',
    title: 'Nguồn giống và nguyên liệu',
    summary: 'Tuyển chọn con giống khỏe, nguồn nguyên liệu thảo dược và vật tư đầu vào đạt chuẩn.',
    image: '/images/chain-farm.png',
    description: 'Thiết lập tiêu chuẩn lựa chọn giống cây trồng, vật nuôi và nguyên liệu thảo dược cùng các đơn vị cung ứng liên kết.',
  },
  {
    id: 'farming',
    step: '02',
    title: 'Nuôi trồng',
    summary: 'Ứng dụng kỹ thuật chăm sóc định hướng hữu cơ, theo dõi dinh dưỡng và môi trường.',
    image: '/images/chain-livestock.png',
    description: 'Phối hợp cùng các hộ và trang trại liên kết ghi nhận nhật ký nuôi trồng, điều kiện chuồng trại và vườn cây.',
  },
  {
    id: 'processing',
    step: '03',
    title: 'Sơ chế, đóng gói',
    summary: 'Tổ chức sơ chế, phân loại, đóng gói đảm bảo vệ sinh an toàn thực phẩm và gắn mã nhận diện.',
    image: '/images/chain-processing.png',
    description: 'Kiểm soát quy trình tiếp nhận nguyên liệu, sơ chế một chiều và chuẩn hóa bao bì trước khi lưu kho.',
  },
  {
    id: 'distribution',
    step: '04',
    title: 'Bảo quản, phân phối',
    summary: 'Bảo quản đúng dải nhiệt độ tiêu chuẩn và điều phối vận chuyển tới mạng lưới đối tác.',
    image: '/images/chain-logistics.png',
    description: 'Liên kết hệ thống kho vận và đối tác phân phối để duy trì độ tươi ngon và rút ngắn thời gian lưu thông.',
  },
  {
    id: 'market',
    step: '05',
    title: 'Khách hàng và thị trường',
    summary: 'Kết nối trực tiếp đối tác thương mại và người tiêu dùng thông qua nền tảng ADIGO.',
    image: '/assets/aistudio/eggs_ce6af497.jpg',
    description: 'Thu thập phản hồi thị trường và cung cấp thông tin truy xuất nguồn gốc minh bạch cho từng nhóm sản phẩm.',
  },
];

export const QUALITY_ITEMS: QualityItem[] = [
  {
    id: 'material-control',
    title: 'Kiểm soát nguồn nguyên liệu',
    summary: 'Rà soát tiêu chuẩn đầu vào từ đất, nước, giống và nguyên liệu thảo dược trước khi đưa vào sản xuất.',
    detail: 'Thiết lập bộ tiêu chí tiếp nhận nguyên liệu và lấy mẫu đánh giá định kỳ tại các vùng liên kết.',
  },
  {
    id: 'production-tracking',
    title: 'Theo dõi hoạt động sản xuất',
    summary: 'Ghi nhận nhật ký nuôi trồng, chế độ dinh dưỡng và điều kiện môi trường theo từng giai đoạn.',
    detail: 'Chuẩn hóa dữ liệu vận hành giúp đội ngũ kỹ thuật kịp thời điều chỉnh quy trình chăm sóc phù hợp.',
  },
  {
    id: 'product-records',
    title: 'Quản lý hồ sơ và thông tin sản phẩm',
    summary: 'Số hóa hồ sơ lô hàng, kết quả kiểm nghiệm và thông số đóng gói trên một hệ thống tập trung.',
    detail: 'Giúp đối tác phân phối và bộ phận quản lý dễ dàng đối chiếu tài liệu chất lượng của từng lô sản phẩm.',
  },
  {
    id: 'traceability',
    title: 'Truy xuất nguồn gốc',
    summary: 'Cung cấp mã nhận diện cho từng nhóm sản phẩm để người dùng tra cứu thông tin hành trình cung ứng.',
    detail: 'Tăng cường tính minh bạch từ khâu nguyên liệu, nuôi trồng, sơ chế đến điểm tiếp nhận thị trường.',
  },
  {
    id: 'management-tech',
    title: 'Ứng dụng công nghệ hỗ trợ quản trị',
    summary: 'Tích hợp dữ liệu vận hành với nền tảng công nghệ ADIGO để tối ưu hóa kết nối toàn hệ sinh thái.',
    detail: 'Dữ liệu chất lượng và chuỗi cung ứng được đồng bộ làm nền tảng cho trải nghiệm thương mại số ADIGO ở bước tiếp theo.',
  },
];

export const TRACEABILITY_DEMO: TraceabilityRecord[] = [
  {
    batchCode: 'DEMO-GA-01',
    productName: 'Gà thịt',
    stageSummary: 'Mẫu mô phỏng chuỗi liên kết từ trang trại đến điểm phân phối',
    updatedDate: 'Dữ liệu demo',
    statusLabel: 'Hồ sơ mẫu đạt chuẩn',
    herbalNote: 'Định hướng phối trộn nghệ, gừng và chùm ngây theo khẩu phần thử nghiệm',
    checkpoints: [
      { time: 'Bước 01', stage: 'Nguồn giống & nguyên liệu', action: 'Ghi nhận hồ sơ con giống và nguyên liệu thảo dược đầu vào' },
      { time: 'Bước 02', stage: 'Nuôi trồng', action: 'Theo dõi nhật ký chăm sóc và môi trường chuồng trại' },
      { time: 'Bước 03', stage: 'Sơ chế & đóng gói', action: 'Phân loại, đóng gói và gắn mã truy xuất ADIGO Demo' },
    ],
  },
  {
    batchCode: 'DEMO-CAM-05',
    productName: 'Cam',
    stageSummary: 'Mẫu mô phỏng nhật ký vùng trồng cây ăn quả hữu cơ',
    updatedDate: 'Dữ liệu demo',
    statusLabel: 'Hồ sơ mẫu đạt chuẩn',
    herbalNote: 'Chăm sóc sinh học định kỳ, hạn chế hóa chất bảo vệ thực vật',
    checkpoints: [
      { time: 'Bước 01', stage: 'Chăm sóc vườn', action: 'Ghi nhận lịch bón phân hữu cơ vi sinh theo mùa vụ' },
      { time: 'Bước 02', stage: 'Thu hoạch & phân loại', action: 'Tuyển chọn trái đạt độ chín tự nhiên và kiểm tra mẫu' },
      { time: 'Bước 03', stage: 'Bảo quản & kết nối', action: 'Cập nhật tồn kho lên nền tảng thương mại demo ADIGO' },
    ],
  },
  {
    batchCode: 'DEMO-BO-03',
    productName: 'Thịt bò và trâu',
    stageSummary: 'Mẫu mô phỏng nhóm sản phẩm định hướng phát triển',
    updatedDate: 'Dữ liệu demo',
    statusLabel: 'Định hướng phát triển',
    herbalNote: 'Nghiên cứu mô hình chăn thả đồng cỏ kết hợp khoáng thảo mộc',
    checkpoints: [
      { time: 'Bước 01', stage: 'Quy hoạch liên kết', action: 'Xây dựng tiêu chuẩn vùng chăn thả và nguồn thức ăn thô xanh' },
      { time: 'Bước 02', stage: 'Kiểm soát sức khỏe', action: 'Ghi nhận hồ sơ theo dõi sinh trưởng định kỳ' },
      { time: 'Bước 03', stage: 'Chuẩn hóa sơ chế', action: 'Hoàn thiện phương án pha lóc và bảo quản lạnh liên kết' },
    ],
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'demo-herbal-model',
    title: 'Định hướng phát triển mô hình nông nghiệp thảo dược gắn với chuỗi giá trị thực phẩm',
    category: 'Nghiên cứu và phát triển',
    date: 'Nội dung demo',
    readTime: 'Video & Tin nổi bật',
    image: '/assets/aistudio/news_1c56df78.jpg',
    isVideo: true,
    excerpt: 'Tổng quan cách Organic Việt Nam kết hợp nghiên cứu thảo dược bản địa vào quy trình dinh dưỡng và theo dõi chất lượng nuôi trồng.',
    content: [
      'Đây là bài viết mô phỏng (demo) nhằm trình bày cách thức Organic Việt Nam truyền thông về định hướng nghiên cứu và ứng dụng thảo dược trong nông nghiệp.',
      'Trọng tâm của mô hình là sự phối hợp giữa nguồn nguyên liệu thảo dược, chế độ dinh dưỡng cân bằng, điều kiện môi trường phù hợp và việc ghi nhận số liệu theo dõi.',
      'Thông qua sự kết nối với nền tảng công nghệ ADIGO, các hồ sơ vùng nguyên liệu và thông tin sản phẩm được chuẩn hóa để phục vụ đối tác và người tiêu dùng.',
    ],
  },
  {
    id: 'demo-adigo-platform',
    title: 'Giới thiệu trải nghiệm mô phỏng nền tảng thương mại số ADIGO kết nối thị trường',
    category: 'Công nghệ & Thị trường',
    date: 'Nội dung demo',
    readTime: '3 phút đọc',
    image: '/images/news-citrus.png',
    excerpt: 'ADIGO đóng vai trò cầu nối giữa nhà cung cấp nông sản, đối tác phân phối và khách hàng trên giao diện đa thiết bị.',
    content: [
      'Đây là nội dung demo minh họa cho chuyên mục tin tức công nghệ của tập đoàn.',
      'Nền tảng ADIGO được định hướng phát triển nhằm đồng bộ dữ liệu danh mục sản phẩm, quản trị chuỗi cung ứng liên kết và hỗ trợ đặt hàng trực tuyến.',
    ],
  },
  {
    id: 'demo-partner-network',
    title: 'Mở rộng mạng lưới hợp tác vùng nguyên liệu và phân phối thực phẩm an toàn',
    category: 'Hoạt động hợp tác',
    date: 'Nội dung demo',
    readTime: '3 phút đọc',
    image: '/images/news-herbs.png',
    excerpt: 'Cập nhật định hướng đồng hành cùng hợp tác xã, đơn vị sản xuất và hệ thống phân phối trong chuỗi cung ứng liên kết.',
    content: [
      'Đây là nội dung demo minh họa cho các hoạt động hợp tác của Organic Việt Nam.',
      'Tập đoàn tập trung vào liên kết đầu vào, chuẩn hóa quy trình sản xuất – bảo quản và phát triển thị trường bền vững cùng các đối tác chiến lược.',
    ],
  },
  {
    id: 'demo-qc-process',
    title: 'Chuẩn hóa hồ sơ kiểm soát chất lượng và thông tin truy xuất nguồn gốc sản phẩm',
    category: 'Hoạt động sản xuất',
    date: 'Nội dung demo',
    readTime: '2 phút đọc',
    image: '/images/qc-lab.png',
    excerpt: 'Minh họa quy trình kiểm soát nguyên liệu, lưu trữ hồ sơ và chuẩn bị thông tin truy xuất nguồn gốc trước khi thương mại.',
    content: [
      'Đây là nội dung demo minh họa cho chuyên mục hoạt động sản xuất và quản lý chất lượng.',
      'Từng nhóm sản phẩm thương mại được thiết lập hồ sơ thông số rõ ràng để tạo sự yên tâm cho đối tác và gia đình Việt.',
    ],
  },
];

export const PARTNERSHIP_PILLARS = [
  {
    id: 'production-material',
    title: 'Liên kết sản xuất và nguồn nguyên liệu',
    desc: 'Hợp tác cùng trang trại, hợp tác xã và đơn vị cung ứng phát triển vùng nguyên liệu thảo dược, nuôi trồng đạt chuẩn.',
  },
  {
    id: 'distribution-market',
    title: 'Phân phối, phát triển thị trường',
    desc: 'Đồng hành cùng hệ thống bán lẻ, siêu thị và đối tác thương mại mở rộng kênh tiêu thụ thực phẩm an toàn.',
  },
  {
    id: 'tech-research',
    title: 'Công nghệ và nghiên cứu',
    desc: 'Phối hợp chuyên gia dinh dưỡng, đơn vị kiểm nghiệm và đối tác công nghệ hoàn thiện nền tảng quản trị ADIGO.',
  },
  {
    id: 'investment-dev',
    title: 'Đầu tư và phát triển',
    desc: 'Kết nối nguồn lực chiến lược cho hạ tầng sơ chế, bảo quản lạnh và mở rộng quy mô hệ sinh thái tập đoàn.',
  },
];
