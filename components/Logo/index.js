import Link from "next/link";
import Image from "next/image";

export default function Logo({ context }) {
    const isFooter = context && context === 'footer';
    return (
        <div className={`flex-1 ${isFooter ? 'hidden' : ''} lg:block`}>
            <Link href="/">
                <Image src="/images/logo.png" alt="Logo" width={124} height={101} />
                <p className={`hidden lg:block ${isFooter && 'text-white'} font-berkshire mt-[-10px]`}>Divine Delectables</p>
            </Link>
        </div>
    )
}