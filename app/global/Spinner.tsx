"use client";

import React from "react";

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen absolute top-50 bottom-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
        </div>
    );
};

export default Spinner;