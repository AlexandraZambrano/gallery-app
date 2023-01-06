import axios from 'axios'
import React from 'react'

function Axios() {

    axios
    .get('https://127.0.0.1:8000/get/api/image/uploader')
    .then(res => {
        // console.log('it works')
        console.log(res.data)
    })

  return (
    <div>
    </div>
  )
}

export default Axios
