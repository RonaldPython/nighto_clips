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
        <div className="fixed top-0 left-0 h-screen z-50 w-16 md:w-20 hidden md:block">
          <Sidebar user={loggedIn} />
        </div>
        <div className="flex size-full flex-col ml-0 md:ml-16">

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
