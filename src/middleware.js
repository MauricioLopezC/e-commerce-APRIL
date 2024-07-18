import { auth } from "@/auth"
import { NextResponse } from "next/server"


const publicRoutes = ["/", "products"]
const authRoutes = ["/auth/login", "auth/register"]

export default auth((req) => {

  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  console.log({ isLoggedIn, path: nextUrl.pathname });

  // Permitir acceso a rutas públicas sin importar el estado de autenticación
  if (publicRoutes.includes(nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!isLoggedIn && nextUrl.pathname === '/auth/register') {
    return NextResponse.next()
  }

  // Redirigir a /dashboard si el usuario está logueado y trata de acceder a rutas de autenticación
  if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Redirigir a /login si el usuario no está logueado y trata de acceder a una ruta protegida
  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next()

  // if (!req.auth && req.nextUrl.pathname === "/auth/login"){
  //   return NextResponse.next() 
  // }
  //
  // if (!req.auth && req.nextUrl.pathname !== "/auth/login") {
  //   const newUrl = new URL("/auth/login", req.nextUrl.origin)
  //   return Response.redirect(newUrl)
  // }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

