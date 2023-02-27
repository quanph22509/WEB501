import axios from "axios"
import { router, useEffect } from "../lib"

const project_add = () => {
    useEffect(() => {
        const form = document.querySelector("#form")
        const title = document.querySelector("#title")

        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const newData = {
                title: title.value
            }
            axios.post(`http://localhost:3000/posts`, newData)
            .then(() => router.navigate('/'))
        })
        
    })
    return /*html*/` 
    <form onsubmit="return alert('Thành công')" action="" id="form">
    <div>Title:
      <input type="text" name="" id="title">
    </div>
    <div>
      <button class='btn btn-primary'>Thêm</button>
    </div>
  </form>
    `
}
export default project_add