import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MenuItems({ context, isMobile }) {
    const router = useRouter();
    const isFooter = context && context === 'footer'; 
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Menus', href: '/menus', subCats: [
            { name: 'Build Your Picnic', href: '/menus/build-your-picnic' },
            { name: 'Tea Party', href: '/menus/tea-party' },
            { name: 'Weddings & Events', href: '/menus/weddings-and-events' },
        ] },
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
                    {menuItems.map((item, idx) => (
                        <li key={item.name} className={`group font-bold ${isFooter ? 'text-white pb-6 lg:pb-0' : 'text-brand-black pb-2'} tracking-[0.06em] border-b-2 ${(router.pathname === item.href || item.subCats && item.subCats.some(subCat => router.pathname === subCat.href)) ? 'border-brand-red' : 'border-transparent'} hover:border-brand-red`}>
                            <Link href={item.href}>{item.name}</Link>
                            {item.subCats && (
                                <ul className={`absolute rounded-[2%] hidden bg-white shadow w-[18.75rem] ${!isFooter ? 'group-hover:block' : ''}`}>
                                    {item.subCats.map(subItem => (
                                        <li key={subItem.name} className="border-b-2 font-normal text-brand-black tracking-[0.03em]">
                                            <Link className="block p-[1.5rem] pr-[3rem] hover:bg-gray-100 hover:text-red-500 hover:font-bold transition duration-300 ease-in-out" href={subItem.href}>{subItem.name}</Link>
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