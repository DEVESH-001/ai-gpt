import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If the user is already authenticated, redirect to the dashboard
  if(session){
    return redirect('/dashboard');
  }
  return <>{children}</>;
};

export default AuthLayout;