import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MenuItems({ context, isMobile }) {
    const router = useRouter();
    const isFooter = context && context === 'footer'; 
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
                    <li key={item.name} className={`font-bold p-4 ${isFooter ? 'text-white' : 'text-brand-black'} text-center tracking-[0.06em]`}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul> 
        ) : (
            <div className={`flex-1 ${isFooter ? '' : 'hidden'} lg:block`}>
                <ul className='flex flex-col uppercase lg:space-x-16 lg:flex-row'>
                    {menuItems.map(item => (
                        <li key={item.name} className={`font-bold ${isFooter ? 'text-white pb-6 lg:pb-0' : 'text-brand-black pb-2'} tracking-[0.06em] border-b-2 ${router.pathname === item.href ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div> 
        )
    )
}