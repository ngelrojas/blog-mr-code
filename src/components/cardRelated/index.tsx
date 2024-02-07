import Author from "../author";
import React from "react";

type Theme = 'light' | 'dark';
interface CardRelatedProps {
    theme: Theme;
    author: any;
    content: any;

}
const CardRelated:React.FC<CardRelatedProps> = ({theme, author, content}) => {
    return (
        <div className="mx-1 border related-card-mrcode bg-gray-50 w-full rounded p-1">
            <div className="card-header flex justify-between bg-gray-50 p-1">
                <div className="author">
                    <Author author={author} theme={theme}/>
                </div>
                <div className="image-author">
                    <img src={author.imageUrl} alt=""
                         className="h-10 w-10 rounded-full bg-gray-50 flex-none"/>
                </div>
            </div>

            <div className="card-banner my-2">
                <img src={content.bannerImg} alt={content.title} className="w-full h-40 rounded"/>
            </div>
            <div className="card-content my-2">
                <h1><a href="#">{content.title}</a></h1>
            </div>
        </div>
    )
}

export default CardRelated;