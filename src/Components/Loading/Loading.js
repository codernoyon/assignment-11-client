import React from 'react';

const Loading = () => {
    return (
        <div className=''>
            <div className="flex top-0 left-0 justify-center items-center w-screen h-screen fixed bg-gray-200 z-[99999]">
                <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;