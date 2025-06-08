import 'bcryptjs';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const credentials = await request.json();
    const { fullName, email, username, password } = credentials;
    if (!fullName || !email || !username || !password) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
    
    return Response.json({ message: "Registration successful", user: { fullName, email, username } }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json({ error: "Registration failed" }, { status: 400 });
  }
    
}