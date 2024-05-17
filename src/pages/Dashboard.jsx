import React from 'react'
import { useMenu } from '../Contexts/MenuContext'

const Dashboard = () => {

  const setMenu = useMenu()

  return (
    <div className={setMenu === false? "dashboard":"dashboard active"}>
      <h3>Login</h3>
      <div className='wrapper'>
        <form action="">
          <div className='inputBox'>
            <input type="text" placeholder='Username' required/>
          </div>
          <div className='inputBox'>
            <input type="password" placeholder='Password' required/>
          </div>
          <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
          <button type='submit'>Login</button>
        </form>

      </div>
      
    </div>
  )
}

export default Dashboard
