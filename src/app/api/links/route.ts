import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"; // Ensure this import is correct
import { prisma } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'You must be logged in to view links.' }),
      { status: 401 }
    );
  }

  const links = await prisma.link.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      order: 'asc',
    },
  });

  return NextResponse.json(links);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'You must be logged in to create a link.' }),
      { status: 401 }
    );
  }

  const { title, url } = await request.json();

  if (!title || !url) {
    return new NextResponse(
      JSON.stringify({ error: 'Title and URL are required.' }),
      { status: 400 }
    );
  }

  const lastLink = await prisma.link.findFirst({
    where: { userId: session.user.id },
    orderBy: { order: 'desc' },
  });

  const newOrder = lastLink ? lastLink.order + 1 : 0;

  const link = await prisma.link.create({
    data: {
      title,
      url,
      order: newOrder,
      userId: session.user.id,
    },
  });

  return NextResponse.json(link);
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'You must be logged in to update a link.' }),
      { status: 401 }
    );
  }

  const { id, title, url, order } = await request.json();

  if (!id) {
    return new NextResponse(
      JSON.stringify({ error: 'Link ID is required.' }),
      { status: 400 }
    );
  }

  const link = await prisma.link.findUnique({
    where: { id },
  });

  if (!link || link.userId !== session.user.id) {
    return new NextResponse(
      JSON.stringify({ error: 'Link not found or you do not have permission to update it.' }),
      { status: 404 }
    );
  }

  const updatedLink = await prisma.link.update({
    where: { id },
    data: {
      title: title ?? link.title,
      url: url ?? link.url,
      order: order ?? link.order,
    },
  });

  return NextResponse.json(updatedLink);
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'You must be logged in to delete a link.' }),
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse(
      JSON.stringify({ error: 'Link ID is required.' }),
      { status: 400 }
    );
  }

  const link = await prisma.link.findUnique({
    where: { id },
  });

  if (!link || link.userId !== session.user.id) {
    return new NextResponse(
      JSON.stringify({ error: 'Link not found or you do not have permission to delete it.' }),
      { status: 404 }
    );
  }

  await prisma.link.delete({
    where: { id },
  });

  return new NextResponse(null, { status: 204 });
}