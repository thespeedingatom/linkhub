import { getServerSession } from "next-auth/next"; // Ensure this import is correct
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: "You must be logged in to access this resource." }),
      { status: 401 }
    );
  }

  // Your protected logic here
  return NextResponse.json({ message: "This is a protected route." });
}