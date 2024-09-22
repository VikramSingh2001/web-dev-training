import React from 'react'

const Question3 = ({status}) => {
  return (
    <div>
      {status==="success"&&<p>Operation was successful</p>}
      {status==="error"&&<p>Operation has some error</p>}
    </div>
  )
}

export default Question3
