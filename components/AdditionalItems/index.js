export default function AdditionalItems({ data }) {
    console.log(data, 'data');
    return (
        <>
            {data.length > 0 ? (
                <p className='flex justify-around font-bold text-[1.35rem] py-12'>*Additional Items: {data.map(item => (
                    <span className='font-normal text-[1.25rem] text-brand-grey' key={item}>{item}</span>
                ))}</p> 
            ) : (
                <p className="flex justify-around my-[3rem] text-[1rem] uppercase text-center text-brand-grey">*Choose Three</p>
            )}
        </>
    )
}