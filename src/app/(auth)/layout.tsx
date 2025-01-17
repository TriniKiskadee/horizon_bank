import Image from "next/image";
import {getLoggedInUser} from "@/lib/actions/user.actions";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className={'flex min-h-screen w-full justify-between font-inter'}>
            {children}
            <div className={'auth-asset'}>
                <Image
                    src={'/icons/auth-image.svg'}
                    alt={'Auth image'}
                    width={500}
                    height={50}
                />
            </div>
        </main>
    );
}
