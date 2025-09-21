# Örnek Blog Yazısı Verileri

Bu dosya admin panelinde yeni blog yazısı oluştururken kullanabileceğiniz örnek verileri içerir.

## 📋 Form Verileri

**Başlık:**

```
Next.js 15 ile Modern E-ticaret Sitesi Geliştirme
```

**Slug:**

```
nextjs-15-modern-eticaret-sitesi-gelistirme
```

**Özet:**

```
Next.js 15'in yeni özelliklerini kullanarak performanslı, SEO uyumlu ve kullanıcı dostu e-ticaret siteleri nasıl geliştirilir? Bu rehberde adım adım öğrenin.
```

**Manşet Görseli URL:**

```
https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80
```

---

## 📝 Markdown İçerik

Aşağıdaki markdown içeriğini admin panelindeki editöre kopyalayabilirsiniz:

````markdown
# Next.js 15 ile Modern E-ticaret Sitesi Geliştirme

E-ticaret dünyası hızla gelişiyor ve modern teknolojilerle ayak uydurmak her zamankinden daha önemli. Bu yazıda Next.js 15'in sunduğu yeniliklerle nasıl profesyonel bir e-ticaret sitesi geliştirebileceğinizi öğreneceksiniz.

## Neden Next.js 15?

Next.js 15, e-ticaret siteleri için mükemmel bir seçim çünkü:

### 1. Server-Side Rendering (SSR)

- SEO performansı için kritik
- Ürün sayfalarının arama motorlarında daha iyi görünmesi
- İlk yükleme hızının artması

### 2. App Router Mimarisi

```javascript
// app/products/[slug]/page.tsx
export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
```
````

### 3. Built-in Optimizasyonlar

- Otomatik görsel optimizasyonu
- Code splitting
- Prefetching

## Temel Özellikler

### Ürün Katalogu

Modern e-ticaret sitesinin kalbi ürün kataloğudur:

- **Filtreleme**: Kategori, fiyat, marka bazında
- **Sıralama**: Popülerlik, fiyat, yenilik
- **Arama**: Gelişmiş arama algoritmaları

### Sepet Yönetimi

```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  return { items, addItem };
};
```

### Ödeme Entegrasyonu

Güvenli ödeme sistemleri için:

1. **Stripe** - Kredi kartı ödemeleri
2. **PayPal** - Dijital cüzdan
3. **İyzico** - Türkiye'ye özel çözümler

## Performans Optimizasyonları

### 1. Görsel Optimizasyonu

```jsx
import Image from "next/image";

<Image
  src="/product-image.jpg"
  alt="Ürün Görseli"
  width={500}
  height={300}
  priority
  placeholder="blur"
/>;
```

### 2. Database Sorguları

```javascript
// Prisma ile optimize edilmiş sorgular
const products = await prisma.product.findMany({
  include: {
    category: true,
    reviews: {
      select: {
        rating: true,
      },
    },
  },
  take: 20,
  skip: (page - 1) * 20,
});
```

### 3. Caching Stratejileri

- Static Generation için ürün sayfaları
- ISR (Incremental Static Regeneration) için stok güncellemeleri
- Redis cache için sepet verileri

## Güvenlik Önlemleri

### 1. Authentication

```typescript
// NextAuth.js ile güvenli giriş
import { getServerSession } from "next-auth";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <CheckoutForm />;
}
```

### 2. Data Validation

```typescript
import { z } from "zod";

const orderSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().min(1),
    })
  ),
  shipping: z.object({
    address: z.string().min(10),
    city: z.string(),
    zipCode: z.string(),
  }),
});
```

## SEO Optimizasyonu

### 1. Meta Tags

```typescript
export async function generateMetadata({ params }) {
  const product = await getProduct(params.slug);

  return {
    title: `${product.name} - Filora E-ticaret`,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}
```

### 2. Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ürün Adı",
  "description": "Ürün açıklaması",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "TRY"
  }
}
```

## Mobil Uyumluluk

### Responsive Design

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Touch Optimizasyonu

- Büyük dokunma alanları
- Swipe gesture'ları
- Mobile-first yaklaşım

## Sonuç

Next.js 15 ile modern e-ticaret sitesi geliştirmek artık çok daha kolay. Bu framework'ün sunduğu güçlü özellikler sayesinde:

- ⚡ Hızlı ve performanslı siteler
- 🔍 SEO uyumlu yapılar
- 📱 Mobil-first yaklaşım
- 🔒 Güvenli ödeme sistemleri

oluşturabilirsiniz.

### Sonraki Adımlar

1. **Proje kurulumu** ile başlayın
2. **Database şeması** tasarlayın
3. **API routes** oluşturun
4. **Frontend component'ları** geliştirin
5. **Test** ve **deploy** edin

Bu rehberi takip ederek kendi e-ticaret projenizi hayata geçirebilirsiniz!

---

_Bu yazı Filora Yazılım tarafından hazırlanmıştır. E-ticaret projeleriniz için profesyonel destek almak istiyorsanız bizimle iletişime geçin._

```

---

## 🚀 Nasıl Kullanılır?

1. **Admin paneline gidin**: http://localhost:3000/admin/login
2. **Giriş yapın**: admin@filorayazilim.com / admin123
3. **"Yeni Blog Yazısı Oluştur"** butonuna tıklayın
4. **Form alanlarını** yukarıdaki verilerle doldurun
5. **Markdown içeriğini** editöre yapıştırın
6. **"Hemen yayınla"** seçeneğini işaretleyin
7. **"Kaydet"** butonuna tıklayın

Blog yazınız anında yayınlanacak ve ana sayfada görünecektir!
```
