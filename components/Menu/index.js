import { useState } from 'react';

import AdditionalItems from '@/components/AdditionalItems';
import MenuContent from '@/components/MenuContent';

export default function Menu({ data, ...props }) {
    const { categories, additionalItems } = data;
    const { enableHotAndColdColumns } = props;
    
    // TODO: Clean up functionality to be more readable
    let initialTab;
    if (categories[Object.keys(categories)[0]].length > 0) {
        initialTab = Object.keys(categories)[0];
    } else if (categories[Object.keys(categories)[5]].length > 0) {
        initialTab = Object.keys(categories)[5];
    } else {
        initialTab = Object.keys(categories)[1];
    }

    const [activeTab, setActiveTab] = useState(initialTab);

    return (
        <section>
            <div className={`container mx-auto bg-brand-bg-grey mt-[6.25rem] rounded-[2.5rem] p-[2.5rem] lg:p-16 lg:px-0`}>
                <div className="space-x-8 text-center">
                    {Object.keys(categories).map(category => (
                        categories[category].length > 0 && <button key={category} onClick={() => setActiveTab(category)} className={`p-4 mt-8 text-[1.75rem] uppercase font-bold ${activeTab === category ? 'bg-brand-red text-white' : 'bg-transparent text-brand-red'} hover:bg-brand-red hover:text-white`}>{category}</button>
                    ))}
                </div>
                <AdditionalItems data={additionalItems} />
                <MenuContent data={categories[activeTab]} enableHotAndColdColumns={enableHotAndColdColumns} />
            </div>
        </section>
    )
}