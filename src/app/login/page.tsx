'use client';

import React, { useState } from 'react'
import { useStore } from "../store"
import { useRouter } from 'next/navigation';
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@nextui-org/react";

const page = () => {
    const [next, setNext] = useState(false)
    const { userName, password, updateName, updatePassword } = useStore()
    const router = useRouter()

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateName(e.target.value)
    }

    const showPassword = () => {
        if (userName.length >= 6) {
            setNext(true)
        } else {
            alert("Enter correct name (min 6 characters)")
        }
    }

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        updatePassword(e.target.value)
    }

    const submitData = () => {
        if (!userName || !password) {
            alert("Enter both fields")
        } else {
            alert("Successful login");
            router.push('/home')
        }
    }

    return (
    <Form
    onSubmit={submitData}
    >
    <h1>Login</h1>


    <div>
        <div>
            <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="Username"
                labelPlacement='outside'
                type="text"
                placeholder="Enter your username"
                value={userName}
                onChange={setUserName}
            />
        </div>

        <button onClick={showPassword}>Continue</button>
    </div>

    {next && (
        <div>
            <div>
                <label>Password</label>
                <Input
                    isRequired
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="Enter your password"
                />
            </div>
        </div>
    )}

    <Button color='secondary' onPress={submitData}  type='submit' >Submit</Button>
    <Button color='primary'>Button</Button>
</Form>
);
}

export default page
