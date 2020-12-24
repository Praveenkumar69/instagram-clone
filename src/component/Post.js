import React from 'react'
import Comments from './Comments'
// import Comment_logo from "./Image/comment.png";
import Comment_logo from "./Image/com.png";
// import Share from "./Image/shares.png";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import direct from "./Image/direct.png"



function Post() {

    const [state, setState] = React.useState([
        { image:"/Img/avatar.png"},
        {image:"/Img/pubg.jpg"   },
    ])
    return (
        // {
            state.map(post => (
            <div className="post">
          <div className="post_header">
            <div className="post_header_av" key={post.id}>p</div>
            <div className="post_header_name">ps</div>
          </div>
          <div className="post_img">
             <img src={post.image} />
          </div>
          <div className="like_comment_logo">
             <div className="like_comment_logo-1">
              <FavoriteBorderIcon />
              <img src={Comment_logo} style={{marginLeft:"10px"}} height="25" alt="comment logo" />
              <img src={direct} style={{marginLeft:"10px"}}  height="30" alt="Share logo" />
             </div>
          <div className="like_comment_logo-2">
          <BookmarkBorderIcon  className="like_comment_logo-2_svg"/>
          </div>
          </div>
          <Comments />
        </div>
            ))
        // }
    )
}

export default Post
