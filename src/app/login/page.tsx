'use client';

import React, { useState } from 'react'
import { useStore } from "../store"
import { useRouter } from 'next/navigation';
import {Form, Input, Button} from "@nextui-org/react";

const page = () => {
    const [next, setNext] = useState(false)
    const [errors, setErrors]=useState({name:""})
    const { userName, password, updateName, updatePassword } = useStore()
    const router = useRouter()

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateName(e.target.value)
        console.log(e.target.value,errors.name)
        if (e.target.value .length<5) {
            setErrors({name:"enter"})
        } 
        else{
            setErrors({ name: "" });
        }
    }

    const showPassword = () => {
        if (userName .length>5) {
            setNext(true)
        } else {
            setErrors({name:"enter 6 digit"})
        }
        console.log(errors.name)
    }

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        updatePassword(e.target.value)
    }

    const submitData = () => {
        if (!password) {
            alert("enter values")
        } else {
            alert("Successful login");
            router.push('/home')
        }
    }

    return (
    <Form
        onSubmit={submitData}
        validationBehavior="native"
    >
        <h1 className='border-4 border-white-500'>Login</h1>


        <div className="flex gap-4 items-center">
            <div className="flex-1">
                <Input
                    // maxLength={6}
                    isRequired 
                    // errorMessage={errors.name}
                    label="Username"
                    labelPlacement="outside"
                    type="text"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={setUserName}
                    validate={(value) => value.length >= 5 || "Username must be at least 5 characters"}
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
                        // errorMessage={errors.pass}
                        value={password}
                        onChange={setPassword} 
                    />
                </div>
                <Button color='secondary' onPress={submitData}  type='submit' >Submit</Button>
            </div>
        )}

    
</Form>
);
}

export default page
