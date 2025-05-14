export default function Projects() {
    return (
        <div className="flex flex-col gap-8 items-start justify-start w-full px-8 ">
            {/* Header */}
            <h2 className="text-4xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-8 w-full max-w-screen-lg">
                {/* Project Cards */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Project Name</h3>
                    <p className="text-gray-600">Description of the project goes here.</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Project Name</h3>
                    <p className="text-gray-600">Description of the project goes here.</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Project Name</h3>
                    <p className="text-gray-600">Description of the project goes here.</p>
                </div>
            </div>
        </div>
    );
}