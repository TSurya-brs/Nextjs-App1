import {create} from 'zustand';

interface Form{
    userName:string;
    password:string;
    updateName:(userName:string)=>void;
    updatePassword:(password:string)=>void;
}

export const useStore = create <Form>((set)=>({
    userName:"",
    password:"",
    updateName:(userName)=>set({userName}),
    updatePassword:(password)=>set({password}),
}))