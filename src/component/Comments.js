import React,{useState} from 'react'

function Comments() {

    const [state, setstate] = useState("")
    const postComment = (e) =>{
        e.preventDefault();
        console.log(state);
        setstate("")
    }
    return (
        <div className="comment">
          <div className="comments_container">
          <div className="comments_container_name">hy</div>
          <div className="comments_container_msg">massage</div>
          </div>
          <div className="comments_section">
          <form onSubmit={postComment}>
            <input 
                type="text"
                className="comment_input"
                placeholder="Add a comment..."
                onChange={(e) =>setstate(e.target.value)}
                value={state}
            />
            </form>
          </div>
        </div>
    )
}

export default Comments
