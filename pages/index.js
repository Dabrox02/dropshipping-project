import { useSession, signIn, signOut } from "next-auth/react";
import { isValidElement } from "react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn('google')}
            className="bg-white p-2 px-4 rounded-md text-black"
          >
            Login With Google
          </button>
        </div>
      </div>
    );
  }

  return <div>Usuario logeado {session.user.email}</div>;
}
