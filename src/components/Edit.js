import { TextField, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Edit(){
    const navigate = useNavigate()
    const [fullname, setFullname] = useState('fullname')
    const [address, setAddress] = useState('address')
    const [mobile, setMobile] = useState('mobile')
    const handleFullnameChange = (e) =>{
      setFullname(e.target.value)
   }
   const handleMobileChange = (e) =>{
      setMobile(e.target.value)
  }
  const handleAddressChange = (e) =>{
      setAddress(e.target.value)
  }
  /*Edit handle*/
 const handleEdit = () => {
    console.log ({fullname, address, mobile, index:localStorage.getItem('editIndex')})
    let blogs =localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []
    
    const _blogs = blogs.map((blog, blogInIndex) =>{
        if(blogInIndex == localStorage.getItem('editIndex')){
            return {fullname, address, mobile}
        }else{
            return blog
        }
    })
     console.log (_blogs)
    localStorage.setItem('blogs', JSON.stringify(_blogs))
    navigate('/')
}
    return(
        <>
        <Typography>Edit Blog</Typography>
        <TextField  Value={fullname} onChange={(e)=>handleFullnameChange(e)} label="Full name" variant="outlined" /><br /> <br />
         <TextField  Value={address} onChange={(e)=>handleAddressChange(e)} label="address" variant="outlined" /><br /> <br />
         <TextField  Value={mobile} onChange={(e)=>handleMobileChange(e)} label="mobile" variant="outlined" /><br /> <br />
        <Button onClick={handleEdit} variant="contained">Edit</Button>
       </>
    )

}
export default Edit