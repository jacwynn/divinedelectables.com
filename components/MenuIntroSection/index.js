export default function MenuIntroSection({ data }) {
    const { menuSection } = data
    return (
        <section>
            <div className="container mx-auto text-center px-[1.5rem] lg:px-0">
                <h3 className="font-bold uppercase text-[2.5rem] mb-[2.5rem]">Menu</h3>
                {/* TODO: figure out a way to not use dangerouslySetInnerHTML */}
                <p className="text-[1.25rem] text-brand-grey max-w-[620px] mx-auto" dangerouslySetInnerHTML={{ __html: menuSection.intro }}></p>
                <hr className="w-[60px] border-t-[3px] border-brand-red my-4 mt-5 mx-auto"></hr>
                {menuSection.options && (
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
                )}
            </div>
        </section>
    )
}