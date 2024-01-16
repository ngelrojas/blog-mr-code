import {useState} from "react";
import ModalWindow from "../modalWindow";
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
                                <div className="text-xs mb-5">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>

                                <p className="font-semibold text-gray-900">
                                    <a href={post.author.href}>
                                        <span className="absolute inset-0"/>
                                        {post.author.name}
                                    </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                            </div>

                            <img src={post.author.imageUrl} alt=""
                                 className="h-20 w-20 rounded-full bg-gray-50 flex-none"/>

                        </div>

                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                    <span className="absolute inset-0"/>
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                        </div>
                        <div className="container flex justify-between mt-7 mb-3">

                            <button
                                type="button"
                                id={`card-post-${post.id.toString()}`}
                                className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={handleOpenModal}>SUMMARY
                            </button>

                            <button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900">READ MORE
                            </button>
                        </div>
                    </article>
                </div>
            </div>
            <ModalWindow isOpen={isOpen} onClose={handleCloseModal} content={post.description} />
        </div>
    )
}
