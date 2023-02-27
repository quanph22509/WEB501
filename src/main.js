import { render, router } from "./lib"
import login from "./pages/login"
import project from "./pages/project"
import project_add from "./pages/project_add"
import project_detail from "./pages/project_detail"
import signin from "./pages/signin"

const app = document.querySelector("#app")

router.on('/', () => {
    render(project,app)
})
router.on('/login', ()=> {
    render(login,app)
})
router.on('/project/add', ()=> {
    render(project_add,app)
})
router.on('/project/:id/edit', (parmas)=> {
    render(() => {
        return project_detail(parmas)
    },app)
})
router.on('/signin', () => {
    render(signin,app)
})
router.resolve()