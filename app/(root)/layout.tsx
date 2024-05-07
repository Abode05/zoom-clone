import { StreamVideoProvider } from "@/provider/StreamClientProvider";


export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
      <main>
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
         
    </main>
  );
}
