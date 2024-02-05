import React from "react";
import { DescriptionTitlePropsI } from "../../types/utils.interface";

const DescriptionTitle: React.FC<DescriptionTitlePropsI> = ({desTitle, theme}) => {

    return (
        <div className="group relative mt-3 mb-3">
            <h3 className={`mt-3 text-lg font-semibold leading-6 group-hover:text-gray-400 ${theme === 'light' ? 'text-black': 'text-white'}`}>
                <a href={desTitle.href}>
                    <span className="absolute inset-0"/>
                    {desTitle.title}
                </a>
            </h3>
            <p className={`mt-5 line-clamp-3 text-sm leading-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{desTitle.description}</p>
        </div>
    )
}

export default DescriptionTitle;