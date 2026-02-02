export default function Loading() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-[#FF5900]/20 rounded-full"></div>
                    <div className="w-12 h-12 border-4 border-[#FF5900] border-t-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
                </div>

                {/* Text */}
                <p className="text-gray-500 text-sm font-medium animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
