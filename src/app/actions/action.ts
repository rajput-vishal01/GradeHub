"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export type SignupState = {
  error: string | null;
  success: boolean;
};

export async function registerUser(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return { error: "All fields are required.", success: false };
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return { error: "User already exists.", success: false };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { error: null, success: true };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong.", success: false };
  }
}
