'use client';

import React, { useState } from 'react'
import { useStore } from "../store"
import { useRouter } from 'next/navigation';
import {Form, Input, Button} from "@heroui/react";
import {Card ,CardHeader,CardBody} from '@heroui/react'

const page = () => {
    const [next, setNext] = useState(false)
    const { userName, password, updateName, updatePassword } = useStore()
    const router = useRouter()

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateName(e.target.value)
        
    }

    const showPassword = () => {
        if (userName .length>5) {
            setNext(true)
        } 
    }

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        updatePassword(e.target.value)
    }

    const submitData = (e: React.FormEvent) => {
        e.preventDefault(); 
        if (!password) {
            alert("enter values")
        } else {
            // alert("Successful login");
            router.push('/home')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-1/4">
             <Form
                    onSubmit={submitData}
                    validationBehavior="native"
                >
                    <CardHeader>
                        <h2>Login</h2>
                    </CardHeader>

                    <CardBody>
                    <div className="flex gap-4 items-center">
                        <div className="flex-1">
                            <Input
                                isRequired 
                                label="Username"
                                labelPlacement="outside"
                                type="text"
                                placeholder="Enter your username"
                                value={userName}
                                onChange={setUserName}
                                validate={(value) => value.length > 5 || "Username must be at least 6 characters"}
                            />
                        </div>
                        <Button  onPress={showPassword} type="button">Continue</Button>
                    </div>


                    {next && (
                        <div>
                            <div>
                                <Input
                                    isRequired
                                    type="password"
                                    label="Password"
                                    labelPlacement='outside'
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={setPassword} 
                                    validate={(value)=>value.length>3||"Password should be atleast 4 characters"}
                                />
                            </div>
                            <Button color='secondary'  type='submit' >Submit</Button>
                        </div>
                    )}
                    </CardBody>

                
            </Form>
        </Card>
        </div>
   
);
}

export default page
