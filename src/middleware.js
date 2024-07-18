// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })

export function middleware(request) {
  console.log("EJECUTANDO middleware *********************************************")
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
