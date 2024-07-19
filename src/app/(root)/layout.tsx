import Sidebar from "@/components/sidebar";
import Image from "next/image";
import MobileNav from "@/components/mobile-nav";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const loggedIn = {firstName: 'Rendo', lastName: 'Sama'};

    return (
        <main className={'flex h-screen w-full font-inter'}>
            <Sidebar user={loggedIn}/>
            <div className={'flex size-full flex-col'}>
                <div className={'root-layout'}>
                    <Image
                        src={'/icons/logo.svg'}
                        alt={'logo'}
                        width={30}
                        height={30}
                    />
                    <div>
                        <MobileNav user={loggedIn}/>
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
