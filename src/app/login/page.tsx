'use client';

import React, { useState } from 'react'
import { useStore } from "../store"
import { useRouter } from 'next/navigation';
import { Form, Input, Button } from "@nextui-org/react";

const page = () => {
    const [next, setNext] = useState(false)
    const [errors, setErrors] = useState({ name: "", pass: "" })
    const { userName, password, updateName, updatePassword } = useStore()
    const router = useRouter()

    // Handle username input change
    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        updateName(value)

        // Check if the username is less than 6 characters
        if (value.length < 6 && value.length > 0) {
            setErrors({ ...errors, name: "Username must be more than 5 letters" }); // Show error if username is too short
        } else if (value.length >= 6) {
            setErrors({ ...errors, name: "" }); // Clear error if username is valid
        } else {
            setErrors({ ...errors, name: "" }); // Clear error if username is empty
        }
    }

    // Trigger password input visibility
    const showPassword = () => {
        // Check if username has valid length
        if (userName.length >= 6) {
            setNext(true); // Show password input if username is valid
        } else {
            setErrors({ ...errors, name: "Username must be more than 5 letters" }); // Show error if username is invalid
        }
    }

    // Handle password input change
    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        updatePassword(e.target.value)
    }

    // Handle form submission
    const submitData = () => {
        // If password is empty, set error for password
        if (!password) {
            setErrors({ ...errors, pass: "Password not valid" })
        } else {
            alert("Successful login");
            router.push('/home');
        }
    }

    return (
        <Form
            onSubmit={submitData}
            validationBehavior="native"
        >
            <h1>Login</h1>

            <div className="flex gap-4 items-center">
                <div className="flex-1">
                    <Input
                        isRequired
                        errorMessage={errors.name}
                        label="Username"
                        labelPlacement="outside"
                        type="text"
                        placeholder="Enter your username"
                        value={userName}
                        onChange={setUserName}
                    />
                </div>
                <Button onPress={showPassword} type="submit">Continue</Button>
            </div>

            {/* Password input and Submit button shown after username validation */}
            {next && (
                <div>
                    <div>
                        <Input
                            isRequired
                            type="password"
                            label="Password"
                            labelPlacement='outside'
                            placeholder="Enter your password"
                            errorMessage={errors.pass}
                            value={password}
                            onChange={setPassword}
                        />
                    </div>
                    <Button color='secondary' onPress={submitData} type='submit' >Submit</Button>
                </div>
            )}
        </Form>
    );
}

export default page;
