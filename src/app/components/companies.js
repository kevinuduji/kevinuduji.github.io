export default function Companies() {
  return (
    <div className="flex flex-col gap-8 items-start justify-start w-full px-8 ">
        {/* Header */}
        <h2 className="text-4xl font-bold">Associated Companies</h2>
        <div className="grid grid-cols-3 2xl:grid-cols-6 items-center space-x-6 space-y-6 max-w-screen">
            <img
                src="/kevin.jpg"
                alt="Logo"
                className="h-24 w-auto"
            />
            <img
                src="/kevin.jpg"
                alt="Logo"
                className="h-24 w-auto"
            />
            <img
                src="/kevin.jpg"
                alt="Logo"
                className="h-24 w-auto"
            />
            <img
                src="/kevin.jpg"
                alt="Logo"
                className="h-24 w-auto"
            />
            <img
                src="/kevin.jpg"
                alt="Logo"
                className="h-24 w-auto"
            />
            <img
                src="/kevin.jpg"
                alt="Logo"
                className="h-24 w-auto"
            />
        </div>
        <h2 className="flex text-4xl font-bold items-start">Work Experience</h2>
      <div className="grid grid-cols-1 gap-8 w-full max-w-screen-lg">
        {/* Company Cards */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Company Name</h3>
          <p className="text-gray-600">Role: Software Engineer</p>
          <p className="text-gray-600">Duration: Jan 2020 - Present</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Company Name</h3>
          <p className="text-gray-600">Role: Software Engineer</p>
          <p className="text-gray-600">Duration: Jan 2020 - Present</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Company Name</h3>
          <p className="text-gray-600">Role: Software Engineer</p>
          <p className="text-gray-600">Duration: Jan 2020 - Present</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Company Name</h3>
          <p className="text-gray-600">Role: Software Engineer</p>
          <p className="text-gray-600">Duration: Jan 2020 - Present</p>
        </div>
        {/* Add more company cards as needed */}
      </div>
    </div>
  );
}