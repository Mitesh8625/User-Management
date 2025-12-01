import { useState } from "react"

export default function Register() {

    const [formData,setformData ]=useState({
        uname:"",uemail:"",upass:"",ucpass:""
    })
    const [errors,seterror]=useState({});
    const [successMsg,setSuccessMsg]=useState("");

    const handleChange=(e)=>{
        setformData({...formData,[e.target.value]:e.target.value})
    }

    const validate=()=>{
        let newErrors={};
        if(!formData.uname) newErrors.uname='Name is Required';
         if(!formData.uemail) newErrors.uemail='Email is Required';
          if(!formData.upass) newErrors.upass='Password is Required';
           if(!formData.ucpass) newErrors.ucpass='Confiram Password is Required';
            if(!formData.upass!==formData.ucpass) newErrors.ucpass='Password and Confiram Password does not match';
            return newErrors;
    
        }

        const handleSubmit=(e)=>{
            e.preventDefult();
            const validateError=validate();
            setError(validateError);
            if(Object.keys(validateError).length===0)
            {
                setSuccessMsg("Register done Successfully");
            }
            else
            {
                setSuccessMsg("Registeration Failed");
            }
        }
    return (
        <>
            <h1>Register Form</h1>
            <form>
                <label>Enter Name</label>
                <input type="text" name="uname" />
                <br /><br />
                <label>Enter Email</label>
                <input type="text" name="uemail" />
                <br /><br />
                <label>Enter Password</label>
                <input type="text" name="upass" />
                 <br /><br />
                <label>Enter Confirm Password</label>
                <input type="text" name="ucpass" />
                <br /><br />
                <input type="submit" value={"Submit"} />
                <input type="reset" value={"Cancle"} />
                <br /><br />
            </form>


            
        </>
    )
}