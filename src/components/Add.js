import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add(){
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

    const handleAdd = () =>{
           console.log ({fullname,address,mobile})
           const _blogs =localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []
           localStorage.setItem('blogs', JSON.stringify([..._blogs, {fullname,address,mobile}]))
           navigate('/')
    }
    return(
        <>
         <Typography>Add Employee</Typography>
         <TextField  Value={fullname} onChange={(e)=>handleFullnameChange(e)} label="Full name" variant="outlined" /><br /> <br />
         <TextField  Value={address} onChange={(e)=>handleAddressChange(e)} label="address" variant="outlined" /><br /> <br />
         <TextField  Value={mobile} onChange={(e)=>handleMobileChange(e)} label="mobile" variant="outlined" /><br /> <br />
         <Button onClick={handleAdd} variant="contained" color="success">Add</Button>
        </>
    )
}
export default Add