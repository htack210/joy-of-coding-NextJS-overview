// GET - get data
// POST - create data
// PUT - update date

import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Fred" },
    { id: 2, name: "Barney" },
  ]);
}
