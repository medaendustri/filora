import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../lib/auth";

const prisma = new PrismaClient();

async function main() {
  // Admin kullanıcısı oluştur
  const hashedPassword = await hashPassword("admin123"); // Değiştirin!

  const admin = await prisma.user.upsert({
    where: { email: "admin@filorayazilim.com" },
    update: {},
    create: {
      email: "admin@filorayazilim.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  // Örnek sayfa içerikleri oluştur
  await prisma.pageContent.upsert({
    where: { slug: "about" },
    update: {},
    create: {
      slug: "about",
      title: "Hakkımızda",
      content: `# Filora Yazılım Hakkında

Filora Yazılım, modern teknolojilerle geliştirilmiş çözümler sunan bir yazılım şirketidir.

## Misyonumuz
Müşterilerimize en iyi yazılım deneyimini sunmak.

## Vizyonumuz
Teknoloji dünyasında öncü olmak.`,
    },
  });

  await prisma.pageContent.upsert({
    where: { slug: "services" },
    update: {},
    create: {
      slug: "services",
      title: "Hizmetlerimiz",
      content: `# Hizmetlerimiz

## Web Geliştirme
Modern ve kullanıcı dostu web siteleri geliştiriyoruz.

## Mobil Uygulama
iOS ve Android platformları için mobil uygulamalar.

## Danışmanlık
Teknoloji danışmanlığı hizmetleri.`,
    },
  });

  await prisma.pageContent.upsert({
    where: { slug: "pricing" },
    update: {},
    create: {
      slug: "pricing",
      title: "Fiyatlarımız",
      content: `# Fiyat Paketlerimiz

## Temel Paket
- Web sitesi geliştirme
- Temel destek
- **5.000 TL**

## Profesyonel Paket
- Web + Mobil uygulama
- Gelişmiş destek
- **15.000 TL**

## Kurumsal Paket
- Tam entegre çözüm
- 7/24 destek
- **Fiyat teklifi için iletişim**`,
    },
  });

  // Örnek blog yazısı
  await prisma.post.upsert({
    where: { slug: "nextjs-ile-modern-web-gelistirme" },
    update: {},
    create: {
      title: "Next.js ile Modern Web Geliştirme",
      slug: "nextjs-ile-modern-web-gelistirme",
      excerpt:
        "Next.js kullanarak modern, hızlı ve SEO uyumlu web siteleri nasıl geliştirilir?",
      content: `# Next.js ile Modern Web Geliştirme

Next.js, React tabanlı modern web uygulamaları geliştirmek için güçlü bir framework'tür.

## Avantajları

### 1. Server-Side Rendering (SSR)
SSR sayesinde SEO performansı artar.

### 2. Static Site Generation (SSG)
Hızlı yüklenen statik sayfalar oluşturabilirsiniz.

### 3. API Routes
Backend functionality'sini aynı projede geliştirebilirsiniz.

## Sonuç
Next.js ile hem frontend hem backend geliştirerek full-stack uygulamalar oluşturabilirsiniz.`,
      published: true,
      authorId: admin.id,
    },
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
