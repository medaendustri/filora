import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Admin rotalarını koruma
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = await getToken({ req: request });

    // Login sayfası hariç tüm admin rotalarını kontrol et
    if (request.nextUrl.pathname !== "/admin/login") {
      if (!token) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }

      // Admin rolü kontrolü
      if (token.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } else {
      // Eğer kullanıcı zaten giriş yapmışsa dashboard'a yönlendir
      if (token && token.role === "admin") {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
