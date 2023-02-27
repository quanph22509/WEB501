import axios from "axios"
import  { router, useEffect, useState } from "../lib"
const project_detail = ({data:{id}}) => {

    const [data,setdata] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then(({data}) => setdata(data))
    },[])

    useEffect(() => {
        const form = document.querySelector("#form")
        const title = document.querySelector("#title")
        form.addEventListener("submit",(e) => {
            e.preventDefault()
            const newData = {
                title: title.value
            }
            axios.put(`http://localhost:3000/posts/${id}`, newData)
            .then(() => router.navigate('/'))
        })
        
    })
    return `
    <form onsubmit="return alert('Thành công')" action="" id="form">
    <div>Title:
      <input type="text" value="${data.title}" id="title">
    </div>
    
    <div>
      <button class='btn btn-warning'>sửa</button>
    </div>
  </form>
    `
}
export default project_detail