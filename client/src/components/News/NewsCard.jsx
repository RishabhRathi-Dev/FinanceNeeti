const NewsCard = (props) => {
  return (
    <>
      <div className="max-w-sm p-2 px-4 py-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <img
          className="object-fill h-48 w-90 lg:h-40 lg:w-60 rounded block m-auto"
          src={props.newsImage}
          alt=""
        />
        <h6 className="mb-2 mt-3 text-xl font-medium tracking-tight text-gray-900">
          {props.headline}
        </h6>
        <p className=" mt-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read More
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default NewsCard;
