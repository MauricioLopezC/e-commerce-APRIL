import { NextResponse } from "next/server"

export function GET(request) {
  console.log("REQUEST ----->>>>>", request)
  return NextResponse.json("hola a todes")
}
