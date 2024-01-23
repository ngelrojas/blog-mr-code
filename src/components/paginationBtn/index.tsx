import {PaginationBtnProps} from '../../types/utils.interface';

export default function PaginationBtn({
                                          paginate,
                                          nextPage,
                                          prevPage,
                                          currentPage,
                                          postsPerPage,
                                          posts
                                      }: PaginationBtnProps) {
    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 text-gray-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                     className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                </svg>

            </button>

            {Array.from({length: Math.ceil(posts.length / postsPerPage)}).map((_, index) => (
                <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`mx-5 px-5 py-1 ${
                        currentPage === index + 1 ? 'bg-blue-50 text-blue-500' : 'text-gray-700'
                    } rounded-md`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
                className="mx-1 px-3 py-1 text-gray-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>

    );
}

