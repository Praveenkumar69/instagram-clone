import React from 'react'
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function Create() {
    return (
        <div className="create">
          <form>
              <div className="create_input">
                  <input type="text" className="create_inputt" placeholder="What are in your mind..."/>
              </div>
              <div className="create_second">
                  <div className="create_second-a">
                  <label htmlFor="file"><CameraAltIcon/></label>
                  <input type="file" className="file" id="file" />
                  </div>
              </div>
          </form>
        </div>
    )
}

export default Create
