'use client'

import React from 'react'
import { useStore } from '../store'
import {Card ,CardHeader,CardBody} from '@nextui-org/react'
import { div } from 'framer-motion/client'

const Data = () => {
    const { userName, password } = useStore()

    return (
        // <div className=" flex items-center justify-center min-h-screen">
        //     <Card className="w-1/4">
        //         <CardHeader>
        //             <h2>User Details</h2>
        //         </CardHeader>
        //         <CardBody>
        //             <h1>UserName : {userName}</h1>
        //             <h1>Password : {password}</h1>
        //         </CardBody>
        //     </Card>
        // </div>
        <div className='border-4 border-white-500'>Hello</div>
    )
}

export default Data
