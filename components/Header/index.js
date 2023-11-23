import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {

    const router = useRouter();

    return (
        <header>
            <div className='container flex items-center justify-between mx-auto'>
                <div>
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Logo" width={124} height={101} />
                        <p>Divine Delectables</p>
                    </Link>
                </div>
                <div>
                    <ul className='flex space-x-16 uppercase'>
                        <li className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === '/' ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === '/about' ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === '/services' ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === '/menus' ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href="/menus">Menus</Link>
                        </li>
                        <li className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === '/gallery' ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        <li className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === '/contact' ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src="/images/search.svg" alt="Search Icon" width={24} height={24} />
                </div>
            </div>
        </header>
    )
}