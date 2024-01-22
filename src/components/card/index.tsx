import {useState} from "react";
import ModalWindow from "../modalWindow";
import CategoryTime from "../categoryTime";
import Author from "../author";
import DescriptionTitle from "../descriptionTitle";

interface Post{
    id: number,
    title: string,
    href: string,
    description: string,
    date: string,
    datetime: string,
    category: { title: string, href: string },
    author: {name: string, role: string, href: string, imageUrl: string}
}

export default function Card(post: Post) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-white border rounded card-spaces">
            <div className="mx-auto  px-5">
                <div className="mx-auto grid">
                    <article className="flex flex-col">
                        <div className="relative mt-4 flex flex-row items-center">
                            <div className="text-sm leading-6 items-center grow">

                                <CategoryTime {...post}/>

                                <Author {...post.author}/>
                            </div>

                            <img src={post.author.imageUrl} alt=""
                                 className="h-20 w-20 rounded-full bg-gray-50 flex-none"/>

                        </div>

                        <DescriptionTitle {...post}/>

                        <div className="container flex justify-between mt-7 mb-3">
                            <button
                                type="button"
                                id={`card-post-${post.id.toString()}`}
                                className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={handleOpenModal}>SUMMARY
                            </button>
                            <button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900">
                                READ MORE
                            </button>
                        </div>
                    </article>
                </div>
            </div>
            <ModalWindow isOpen={isOpen} onClose={handleCloseModal} content={post.description} />
        </div>
    )
}
