import "./Forms.css"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
export const Forms = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Full name required"),
        email: yup.string().email().required("Email required"),
        age:yup.number().positive().integer().min(18).required("age is required"),
        password:yup.string().min(4).max(20).required(),
        repassword:yup.string().oneOf([yup.ref("password"),null]).required()
    });
   const {register,handleSubmit,formState:{errors}}=useForm({
    resolver: yupResolver(schema)
   })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." className="formInput" {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
            <input type="email" placeholder="example@example.com" className="formInput" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="number" className="age formInput" placeholder="Age..." {...register("age")} />
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password ..." className="formInput" {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." className="formInput"{...register("repassword")} />
            <p>{errors.repassword?.message}</p>
            <input type="submit" />
        </form>
    )
}