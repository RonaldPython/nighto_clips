import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  


  
  const loggedIn = await  getLoggedInUser()

  if(!loggedIn) redirect("/sign-in")

  return (
    <main className="flex min-h-screen w-full justify-between font-inter bg-[#181A20]">
        <Sidebar 
        user = {loggedIn}
        />
        <div className="flex size-full flex-col">

          <div className="root-layout">
            <Image  src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1100}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
        />
    </main>
  );
}
