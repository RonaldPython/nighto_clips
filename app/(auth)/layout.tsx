import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <main className="flex min-h-screen w-full justify-between font-inter bg-[#181A20]">
        {children}
        
        
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
