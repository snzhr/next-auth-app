'use client';
import { AuthContext } from '@/context/authContext';
import React, { useContext } from 'react'

function HomePage() {
  const auth = useContext(AuthContext);
    return (
    <div>
        {
            auth?.user ? `Welcome ${auth.user.name}` : "Please log in"
        }
    </div>
  )
}

export default HomePage