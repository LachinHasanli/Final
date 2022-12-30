import React, { useRef } from 'react';

const Start = ({ setName }) => {

  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setName(inputRef.current.value)
  }
  return (

    <div className="startPage">

      <div className="center">



        <input ref={inputRef} type={"text"} placeholder="Adınızı daxil edin
        " name='username' />
        <button className='btn btn-2' onClick={handleClick}>Start Quiz</button>

        <summary>

          Burada 15 sual olacaq və hər bir sual üçün 40 saniyə vaxtınız olacaq.


        </summary>

      </div>

    </div>
  )
}

export default Start