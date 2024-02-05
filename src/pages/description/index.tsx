import { useParams } from "react-router-dom";
import Author from "../../components/author";
import CategoryTime from "../../components/categoryTime";

// TODO: create a description page
// no permanent interface
const theme = 'light';
const author = {
    name: 'John Doe',
    role: 'Software Engineer',
    href: 'https://www.johndoe.com',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

}
const categoryTime = {
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'React-JS', slug: 'react-js' }

}
export default function Description() {
    const { slug, description } = useParams();

    return(
        <div className="flex flex-row container pt-28">

            <div className="mx-auto max-w-2xl py-5 sm:px-10 lg:px-12 basis-1/2">

                <div className="relative mt-4 flex flex-row items-center">
                    <div className="text-sm leading-6 items-center grow">
                        <Author author={author} theme={theme}/>
                        <CategoryTime categoryTime={categoryTime} theme={theme}/>
                    </div>

                    <img src={author.imageUrl} alt=""
                         className="h-20 w-20 rounded-full bg-gray-50 flex-none"/>
                </div>

                <div className="mrcode-icon-social-networks py-5">
                    icons
                </div>

                <div className="description container py-5">

                    <h1>Description {description} - {slug} </h1>
                </div>

                <div className="carousel-post-mrcode">carousel slides</div>

                <div className="comment-editor"></div>

                <div className="comment-list"></div>
            </div>
            <aside className="basis-1/4">here side</aside>
        </div>
    )
}