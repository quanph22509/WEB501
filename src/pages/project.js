import axios from "axios"
import { router, useEffect, useState } from "../lib"

const project = () => {
    const [data,setdata] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/posts`)
        .then(({data})=>setdata(data))
    },[])
    useEffect(() => {
        const btns = document.querySelectorAll("#btn-xoa")

        for(let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener('click',() =>{
                const project = data.filter((project)=>{
                    return project.id != id;
                })
                axios.delete(`http://localhost:3000/${id}`)
                .then(() =>router.navigate('/'))
            })
        }
    })
    return /*html*/`
    <table class="table table-border">
    <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>
                <a href="/project/add">Thêm</a>
            </th>
        </tr>
    </thead>
    <tbody>
        ${data.map(list=>{
            return /*html*/`
                <tr>
                    <td>${list.id}</td>
                    <td>${list.title}</td>
                    <td>
                        <button onclick="return confirm('Xác nhận xóa?')" id="btn-xoa" data-id="${list.id}">Xoá</button>
                        <a href="/project/${list.id}/edit">Sửa</a>
                    </td>
                </tr>
            `
        }).join("")}
    </tbody>
</table>
    `
}
export default project