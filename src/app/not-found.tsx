const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      <h1 className="text-6xl font-bold">
        <span className="text-red-500">4</span>
        <span className="text-green-500">0</span>
        <span className="text-yellow-500">4</span>
      </h1>
      <h2 className="text-3xl font-semibold text-black mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-black mt-2">
        Sorry, the page you&apos;re looking for does not exist.
      </p>
      <p className="text-lg text-black mt-2">
        It might have been removed, or the URL might be incorrect.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </a>
      <div className="mt-8">
        <p className="text-sm text-gray-500">
          If you think that&apos;s wrong, checkout <a href="/contact" className="text-blue-500 hover:underline">Github</a>.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
