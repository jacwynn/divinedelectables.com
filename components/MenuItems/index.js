import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MenuItems({ context, isMobile }) {
    const router = useRouter();
    const isFooter = context && context === 'footer'; 
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Menus', href: '', subCats: [
            { name: 'Build Your Picnic', href: '/menus/build-your-picnic' },
            { name: 'Tea Party', href: '/menus/tea-party' },
            { name: 'Weddings & Events', href: '/menus/weddings-and-events' },
        ] },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];
    
    const [activeName, setActiveName] = useState(null);
    const toggleDropdown = (name) => {
        if (activeName === name) {
            setActiveName(null);
        } else {

            setActiveName(name);
        }
    }

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
                        <li key={item.name} className={`font-bold ${isFooter ? 'text-white pb-6 lg:pb-0' : 'text-brand-black pb-2'} tracking-[0.06em] border-b-2 ${activeName === item.name ? 'bg-brand-red' : ''} ${(router.pathname === item.href || item.subCats && item.subCats.some(subCat => router.pathname === subCat.href)) ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`} {...(item.subCats ? { onClick: () => toggleDropdown(item.name) } : {})}>
                            {item.subCats?.length > 0 ? (
                                <div className={`${activeName === item.name ? 'bg-[#AF3F3C] text-white' : ''} inline cursor-pointer p-4`}>{item.name}</div>
                            ) : (
                                <Link href={item.href || ''} className={`${activeName === item.name ? 'bg-brand-red' : ''} p-4`}>{item.name}</Link>
                            )}
                            {item.subCats && activeName === item.name && (
                                <ul className={`bg-[#AF3F3C] absolute block top-[75px] w-[20rem]`}>
                                    {item.subCats.map(subItem => (
                                        <li key={subItem.name} className="font-normal p-[0.75rem] text-brand-black tracking-[0.03em]">
                                            <Link className={`${activeName === item.name ? 'text-white' : ''} block p-[0.75rem] hover:bg-brand-red hover:font-bold transition duration-300 ease-in-out`} href={subItem.href}>{subItem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div> 
        )
    )
}