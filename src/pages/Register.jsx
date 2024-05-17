import React from 'react'
import { useMenu } from '../Contexts/MenuContext'

const Profil = () => {

  const setMenu = useMenu();

  return (
    <div className={setMenu === false? "profil":"profil active"}>
    <h3>Register</h3>
    <div className='wrapper'>
      <form action="">
        <div className='inputBox'>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className='inputBox'>
          <input type="text" placeholder='E-mail' required/>
        </div>
        <div className='inputBox'>
          <input type="password" placeholder='Password' required/>
        </div>

        <button type='submit'>Register</button>
      </form>

    </div>
    
  </div>
  )
}

export default Profil
