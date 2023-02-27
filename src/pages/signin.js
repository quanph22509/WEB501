import axios from "axios"
import { router, useEffect } from "../lib"

const signin = () => {
    useEffect(() => {
        const form = document.querySelector("#form")
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")

        form.addEventListener("submit", (e)=> {
            e.preventDefault()
            const newData = {
                email: email.value,
                password: password.value
            }
            axios.post(`http://localhost:3000/users`, newData)
                .then(() => router.navigate('/login'))
        })
    })
    return /*html*/`
    <form onsumit="return alert('Đăng ký thành công')"action="" id="form">
    <div>Email: 
        <input type="email" name="" id="email" required>
    </div>
    <div>Password:
        <input type="password" name="" id="password" required>
    </div>
    <div>
        <button class="btn btn-danger">Đăng ký</button>
    </div>
</form>
    `
}
export default signin