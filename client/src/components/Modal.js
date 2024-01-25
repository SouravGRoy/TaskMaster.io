import React, {useState} from "react";
import { useCookies } from "react-cookie";

const Modal = ({mode,setShowModal,getData,task}) => {
  // 75 this should be const mode = "edit",now create
  const editMode = mode === 'edit' ? true : false
  const [cookies, setCookie, removeCookie] = useCookies(null)

  const [data, setData] = useState({
    user_email :editMode ? task.user_email: cookies.Email,
    title:editMode ? task.title:null,
    progress:editMode ? task.progress : 50,
    data: editMode ? task.date : new Date()
  })

const postData = async(e)=>{
  e.preventDefault()
  try{
   const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`,{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
  })
  if(response.status === 200){
    console.log('WORKED')
    setShowModal(false)
    getData()
  }
}catch(err){
    console.error(err)
  }
}

const editData = async(e)=>{
  e.preventDefault(task)
  try{
   const response = await fetch(`http://localhost:8000/todos/${task.id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      })
      if (response.status ===200){
        setShowModal(false)
        getData()
      }
  }catch(err){
console.error(err)
  }
}

// 78 function handleChange but for first console.log('changing')
const handleChange = (e) =>{
  const { name, value } = e.target

  setData(data =>({
    ...data,
    [name] : value
  }))
  console.log(data)
}


  return (
    // 70 div with className and create another div
    <div className="overlay">
    {/* 71 ANother div className modal to hold our btn */}
     <div className="modal">
     {/* 72 Another for the title */}
      <div className="form-title-container">
      {/* 73 Now create a h1 and pass over the {mode} and make a const above const mode = 'edit' */}
        <h3>Let's {mode} your task</h3>
        {/* 74 Create a btn to x and also add a onClick now below the form-title-container create a form element*/}
        <button onClick={()=>setShowModal(false)}>X</button>
      </div>
      {/* 75 To take all the inputs to create a task,we are gonna have 3 inputs-title,progress,submit */}
      <form>
{/* 76 input for title */}
<input 
  required
  maxLength={30}
  placeholder="Your task goes here"
  name="title"
  value={data.title}
  // 77 now we are gonna update everytime something as the input changes,so create a fubction handleChange above for this
  onChange={handleChange}
/>
<br/>
<label for="rang">Drag to select your current progress</label>
{/* 79 input for progress */}
<input 
  type="range"
  required
  id="range"
  min='0'
  max="100"
  name="progress"
  value={data.progress}
  // 80 another handle change
  onChange={handleChange}
/>
{/* 80 input for submit */}
<input 
className={mode}
  type="submit"
  onClick={editMode ? editData : postData}
/>
      </form>

     </div>
    </div>
  )
}

export default Modal;
