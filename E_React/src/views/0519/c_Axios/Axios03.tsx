import axios from 'axios';
import React, { useState } from 'react'

interface User {
  name: string;
  email: string;
}

//! Axios 요청 - POST
export default function Axios03() {
  const [user, setUser] = useState<User>({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      console.log('User added', response.data);
      alert('User added successfully');
    } catch(error: any) {
      alert('Failed to add user: ' + error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <hr />
      <label>Name:
        <input 
          type="text" 
          name='name' 
          value={user.name} 
          onChange={handleInputChange}
        />
      </label>
      <label>Email:
        <input 
          type="text" 
          name='email' 
          value={user.email} 
          onChange={handleInputChange}
        />
      </label>
      <button type='submit'>사용자 추가</button>
    </form>
  )
}
