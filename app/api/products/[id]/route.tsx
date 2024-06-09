import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const pid = params.id;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(pid) },
  });

  if (!product)
    return NextResponse.json(
      { error: "Item id " + pid + " not found" },
      { status: 404 }
    );
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  const pid = params.id;
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(pid) },
  });

  if (!product)
    return NextResponse.json(
      { error: "Item " + pid + "not found" },
      { status: 404 }
    );

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(pid) },
    data: {
      name: body.name,
      price: body.price,
      isActive: body.isActive,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const pid = params.id;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(pid) },
  });
  if (!product)
    return NextResponse.json({ error: "Item not found" }, { status: 400 });

  const deletedProduct = await prisma.product.delete({
    where: { id: parseInt(pid) },
  });

  return NextResponse.json(
    { message: deletedProduct.name + " deleted." },
    { status: 200 }
  );
}
