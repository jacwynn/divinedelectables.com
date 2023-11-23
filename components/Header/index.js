import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className='container flex items-center justify-between mx-auto'>
                <Logo />

                {/* Desktop Menu */}
                <MenuItems isMobile={false} />
                
                {/* Only shows on mobile & tablet */}
                <SearchIcon />
                <HamburgerMenu openState={{ isOpen, setIsOpen }} />
            </nav>
            
            {/* Mobile Menu */}
            {isOpen && <MenuItems isMobile />}
        </header>
    )
}

const MenuItems = ({ isMobile }) => {
    const router = useRouter();
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Menus', href: '/menus' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        isMobile ? (
            <ul className='uppercase lg:hidden'>
                {menuItems.map(item => (
                    <li key={item.name} className={`font-bold p-4 text-brand-black text-center tracking-[0.06em]`}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul> 
        ) : (
            <div className='hidden lg:block'>
                <ul className='flex space-x-16 uppercase'>
                    {menuItems.map(item => (
                        <li key={item.name} className={`font-bold text-brand-black tracking-[0.06em] pb-2 border-b-2 ${router.pathname === item.href ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div> 
        )
    )
}

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src="/images/logo.png" alt="Logo" width={124} height={101} />
                <p className='hidden lg:block font-berkshire mt-[-10px]'>Divine Delectables</p>
            </Link>
        </div>
    )
}

const HamburgerMenu = ({ openState: { isOpen, setIsOpen } }) => {
    return (
        <div className='lg:hidden'>
            <button className='mr-4' onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="10" rx="10"></rect>
                    <rect y="30" width="100" height="10" rx="10"></rect>
                    <rect y="60" width="100" height="10" rx="10"></rect>
                </svg> : 
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="10" x2="30" y2="30" stroke="black" height="10" strokeWidth="3" strokeLinecap='round'/>
                    <line x1="30" y1="10" x2="10" y2="30" stroke="black" height="10" strokeWidth="3" strokeLinecap='round'/>
                </svg>}
            </button>
        </div>
    )
}

const SearchIcon = () => {
    return (
        <div className='hidden lg:block'>
            <Image src="/images/search.svg" alt="Search Icon" width={24} height={24} />
        </div>
    )
}