'use client'

import React from 'react'
import { useStore } from '../store'
import {Card ,CardHeader,CardBody} from '@heroui/react'

const Data = () => {
    const { userName, password } = useStore()

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-1/4">
                <CardHeader>
                    <h2>User Details</h2>
                </CardHeader>
                <CardBody>
                    <h1>UserName : {userName}</h1>
                    <h1>Password : {password}</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Data
