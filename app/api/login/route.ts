export async function POST(request: Request) {
  try {
        const credentials = await request.json();
    const { username, password } = credentials;    
    return Response.json({ message: "Login successful", user: credentials }, { status: 200 });  
    
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Login failed" }, { status: 400 });
  }
}