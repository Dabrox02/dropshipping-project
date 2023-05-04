import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-slate-900 flex justify-between">
        <h2>
          Hola,{" "}
          <span className="font-bold text-blue-900">{session?.user?.name}</span>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            className="w-8 h-8"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
          <span className="py-1 px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
