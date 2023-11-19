import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateUser() {

    const {
        register, // allow to register each form input
        handleSubmit,
    } = useForm();

    const create = (user) => {

        alert("User was sucessfully created!");
        console.log(user);
    }

    return (
        <>
            <h2 >Create New User</h2>
            <form onSubmit={handleSubmit(create)}>
                <label>
                    <span>Email:</span>
                    <input {...register("email")} type="text" />
                </label>
                <label>
                    <span>Birthdate:</span>
                    <input {...register("birthdate")} type="date" />
                </label>
                <label>
                    <span>Is Admin:</span>
                    <input {...register("isAdmin")} type="checkbox" />
                </label>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </>
    )
}
