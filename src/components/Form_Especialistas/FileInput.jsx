import React from 'react'

const FileInput = ({ register }) => {
  return (
    <div>
       <div>
      <input type="file" {...register('archivo')} />
    </div>
    </div>
  )
}

export default FileInput
