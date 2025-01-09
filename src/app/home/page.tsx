'use client'

import React from 'react'
import { useStore } from '../store'

const Data = () => {
    const { userName, password } = useStore()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                <h1 className="text-3xl font-semibold text-center text-gray-800">User Details</h1>

                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <h2 className="mt-1 text-lg font-semibold text-gray-900">{userName}</h2>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <h2 className="mt-1 text-lg font-semibold text-gray-900">{password}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
