import Image from "next/image";
import Link from "next/link";

export default function HomepageHero() {
    return (
        <section className="container px-4 mx-auto lg:px-0">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="flex-1 order-2 space-y-6 lg:order-1">
                    <h1 className="font-bold uppercase text-[2.125rem] lg:text-7xl">Satisfying food for soul</h1>
                    {/* eslint-disable-next-line */}
                    <p className="text-[1.75rem] lg:text-4xl font-seaweed tracking-[0.06em]">that's sinfully delicious</p>
                    <p className="max-w-prose text-brand-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostu exercitation ullamco.</p>
                    <Link href="/menus"><button className="p-4 mt-8 text-white uppercase bg-brand-red">View Our Menus</button></Link>
                </div>
                <div className="relative flex-1 order-1 lg:order-2">
                    <Image src={`/images/food-plate.png`} alt="food plate" width={1300} height={760} />
                    <div className="absolute z-[-1] transform rotate-[-158.699deg] top-[-17rem] lg:top-[-30rem] right-[-40rem] lg:right-[-45rem]">
                        <Image src={`/images/red-shape.png`} alt="" width={1303} height={933} />
                    </div>
                </div> 
            </div>
        </section>
    )
}