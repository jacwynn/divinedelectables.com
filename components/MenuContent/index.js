export default function MenuContent({ data, ...props }) {
    console.log(props, 'props');
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            {props.enableHotAndColdColumns && (
                <>
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="font-bold text-[1.25rem] text-[#6B7A17] uppercase text-center">Cold</h4>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="font-bold text-[1.25rem] text-[#6B7A17] uppercase text-center">Hot</h4>
                    </div>
                </>
            )}
            {data.map((item, index) => (
                <div key={index} className="p-8">
                    <p className='text-[1.35rem] border-b-2 border-[#DFDFDF] pb-[2rem]'>{item}</p>
                </div>
            ))}
        </div>
    )
}