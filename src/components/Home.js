import { useEffect } from "react"
import { useState } from "react"
import { Button, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"


function Home()
{
    const navigate = useNavigate()
    const[blogs, setBlogs] = useState([])
    useEffect(() => {
        const blogs = localStorage.getItem('blogs')
        setBlogs(JSON.parse(blogs))
    }, [blogs])
    
    /* Delete case */
     const handleDelete = (blogOutIndex) => {
        const _blogs = blogs.filter((blog, blogInIndex) => {
            if(blogInIndex !== blogOutIndex){
                return blog
            } 
        })
        console.log(_blogs)
        setBlogs(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
     }

     const handleEdit = (blogIndex) =>{
        localStorage.setItem('editIndex', blogIndex)
        navigate('/edit')
     }
    return(
        <div class="home_page">
        <br />
        <Typography><emp>Employee Detail</emp></Typography><br />
        {
        blogs && blogs.length > 0 ?
            blogs.map((blog, blogIndex) => {
                return(
                    <div>
                    
                        Full Name - {blog?.fullname} <br />
                        Address - {blog?.address} <br />
                        Mobile No. - {blog?.mobile}<br />
                        <DeleteIcon onClick={() => handleDelete(blogIndex)}></DeleteIcon>
                        <EditIcon onClick={() => handleEdit(blogIndex)}></EditIcon>
                    </div>
                )
            })
            :
            'No Any Data Here! please Insert Employee Detail'
         }
           <br /><br /> <Button onClick={() =>{
            navigate('/add')
        }
        } 
        variant="contained" color="success">+ Add New</Button>
        </div>
    )
}
export default Home