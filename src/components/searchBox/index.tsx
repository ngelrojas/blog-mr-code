import React, { useState } from 'react';

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

export default function SearchBox ({ onSearch }:SearchBoxProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
        setSearchQuery(''); // Clear the input after submission
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex items-center w-full">
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search..."
                className="w-full px-4 py-2 text-black text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute right-2 top-0 mt-3 mr-4">
                <svg
                    className="w-4 h-4 fill-current text-gray-400"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </form>
    );
};
