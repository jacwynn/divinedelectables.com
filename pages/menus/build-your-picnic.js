import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { getMenuData } from '../../lib/sheets';
import Hero from "@/components/Hero";

const MENU_NAME = "BuildYourPicnic";

export default function BuildYourPicnic({ menuData }) {
    const buildYourPicnicData = {
        pageTitle: menuData.pageTitle || "Build Your Picnic",
        content: <Paragraph />,
        image: {
            url: "/images/menus/build-your-picnic.png",
            alt: "Build Your Picnic",
            width: "900",
            mobileWidth: "500",
            height: "370",
          },
        cta: {
          link: "/contact",
          text: "Book Us",
        }
    }

    return (
        <Layout>
            <Hero data={buildYourPicnicData} isMenuPage />
            <MenuIntroSection data={menuData} />
            <Menu data={menuData} />
        </Layout>
    )
}

export async function getStaticProps() {
    const menuData = await getMenuData(MENU_NAME);
    return {
        props: {
            menuData: menuData,
        },
        revalidate: 1
    };
}

const Paragraph = () => {
    return (
        <>
            <p className="text-[1.25rem] mb-[1rem] text-brand-grey">Let Divine Delectables add a touch of class to your Banquet, graduations parties, birthday celebrations, Anniversaries, family reunions and all other needs.</p>
            <p className="text-[1.25rem] text-brand-grey">This is our summer picnic menu. If you are planning a more elaborate affair ask to see our sit-down or elaborate build your own buffet menu.</p>
        </>
    )
}

const MenuIntroSection = ({ data }) => {
    const { menuSection } = data
    return (
        <section>
            <div className="container mx-auto text-center px-[1.5rem] lg:px-0">
                <h3 className="font-bold uppercase text-[2.5rem] mb-[2.5rem]">Menu</h3>
                {/* TODO: figure out a way to not use dangerouslySetInnerHTML */}
                <p className="text-[1.25rem] text-brand-grey" dangerouslySetInnerHTML={{ __html: menuSection.intro }}></p>
                <hr className="w-[60px] border-t-[3px] border-brand-red my-4 mt-5 mx-auto"></hr>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {menuSection.options.map((option, idx) => (
                        <div className="flex justify-between border-b-2 border-[#DFDFDF] pb-[1.75rem]" key={idx}>
                            <div className="text-left">
                                <p className="text-[1.625rem] font-bold">{option.name}</p>
                                <p>{option.description}</p>
                            </div>
                            <div>
                                <p className="text-[1.75rem] font-bold">{option.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Menu = ({ data }) => {
    
    const { categories, additionalItems } = data
    const [activeTab, setActiveTab] = useState('entrees');

    return (
        <section>
            <div className={`container mx-auto bg-brand-bg-grey mt-[6.25rem] rounded-[2.5rem] p-[2.5rem] lg:p-16 lg:px-0`}>
                <div className="space-x-8 text-center">
                    {Object.keys(categories).map(category => <button key={category} onClick={() => setActiveTab(category)} className={`p-4 mt-8 text-white text-[1.75rem] uppercase font-bold ${activeTab === category ? 'bg-brand-red' : 'text-brand-red'} hover:bg-brand-red hover:text-white`}>{category}</button>)}
                </div>
                <AdditionalItems data={additionalItems} />
                <MenuContent data={categories[activeTab]} />
            </div>
        </section>
    )
}

const AdditionalItems = ({ data }) => {
    return (
        <>
            <p className='flex justify-around font-bold text-[1.35rem] py-8'>*Additional Items: {data.map(item => (
                <span className='font-normal text-[1.25rem] text-brand-grey' key={item}>{item}</span>
            ))}</p>
        </>
    )
}

const MenuContent = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            {data.map((item, index) => (
                <div key={index} className="p-8">
                    <p className='text-[1.35rem] border-b-2 border-[#DFDFDF] pb-[2rem]'>{item}</p>
                </div>
            ))}
        </div>
    )
}