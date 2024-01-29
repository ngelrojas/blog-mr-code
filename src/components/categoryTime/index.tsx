import React from "react";
import { CategoryTimePropsI } from "../../types/utils.interface";

const CategoryTime: React.FC<CategoryTimePropsI> = ({categoryTime, theme}) => {

    return (
        <div className="text-xs mb-5 mt-5">
            <time dateTime={categoryTime.datetime} className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>
                {categoryTime.date}
            </time>
            <a
                href={categoryTime.category.href}
                className={`ml-2 relative z-10 rounded-full px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-gray-800 ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-600'}`}
            >
                {categoryTime.category.title}
            </a>
        </div>
    )
}

export  default CategoryTime;