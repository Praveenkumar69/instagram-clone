import React,{useState} from 'react'
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function Create() {

    const [comments, setComments] = useState("")
    const [Image, setImage] = useState("")

    const handleImage=(e) =>{
        setImage(e.target.files[0])
    }

    const formCont=(e)=>{
        console.log(comments);
        console.log(Image);
        e.preventDefault();
        setComments("")
    }

    
    return (
        <div className="create">
          <form onSubmit={formCont} role="form" method="post" enctype="multipart/form-data">
              <div className="create_input">
                  <input type="text" name="comments" 
                        onChange={(e) =>{
                            setComments(e.target.value)
                        }} value={comments}
                   required className="create_inputt" placeholder="What are in your mind..."/>
              </div>
              <div className="create_second">
                  <div className="create_second-a">
                  <label htmlFor="file"><CameraAltIcon className="camera"/></label>
                  <input type="file" required id="file" className="file"
                  name="image" accept=""
                   onChange={handleImage}
                    />
                  </div>
                  <div className="create_second-b">
                      <input type="submit" name="submit" value="Create" className="btn-sweet"/>
                  </div>
              </div>
          </form>
        </div>
    )
}

export default Create

