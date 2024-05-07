import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


export default function HomLayout({ children }:Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative">
          <Navbar/>
      
         <div className="flex">
              <Sidebar/>
              <section className="flex flex-col px-6 max-md:pb-14 pt-28 pb-6 min-h-screen flex-1 sm:px-16">
                  <div className="w-full">
                       {children}
                  </div>
              </section>
        </div>
         
          
    </main>
  );
}