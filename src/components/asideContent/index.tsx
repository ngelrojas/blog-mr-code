interface AsideContentProps {
  theme: string;
}

const AsideContent: React.FC<AsideContentProps> = ({ theme }) => {
  return (
    <aside
      className={`fixed z-50 basis-1/6 w-64 ${theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      <div className="py-5 border-b aside-header">
        <a href="/home">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </a>
      </div>
      <div className="aside-content">
        <h1 className="py-3 text-2xl">
          <p className="underline">Content</p>
        </h1>
        <ul className="ml-2">
          <li className="border-l-2 border-l-gray-500 pl-1 my-2 hover:text-blue-400 hover:border-l-blue-500">
            <a
              href="#"
              className="transition-all ease-in-out delay-150 duration-300 hover:pl-2"
            >
              This is a title a little large what you think more lettes one
            </a>
          </li>
          <li className="border-l-2 border-l-gray-500 pl-1 my-2 hover:text-blue-400 hover:border-l-blue-500">
            <a
              href="#"
              className="transition-all ease-in-out delay-150 duration-300 hover:pl-2"
            >
              This is a title a little large what you think more letters?
            </a>
          </li>
          <li className="border-l-2 border-l-gray-500 pl-1 my-2 hover:text-blue-400 hover:border-l-blue-500">
            <a
              href="#"
              className="transition-all ease-in-out delay-150 duration-300 hover:pl-2"
            >
              Three title
            </a>
          </li>
        </ul>
      </div>
      <div className="my-5 aside-footer">
        <h1>player</h1>
      </div>
    </aside>
  );
};

export default AsideContent;
