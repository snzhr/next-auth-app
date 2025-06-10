import React from 'react'
import styles from './Register.module.css';
import Link from 'next/link';
import RegisterForm from '@/components/register-form/RegisterForm';
import prisma from '@/lib/prisma';

async function Register() {
  const users = await prisma.user.findMany();
  // console.log(users);
  
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <p className={styles.description}>
        Please enter your credentials to register.
      </p>
      <RegisterForm />
      <p className={styles.register}>
        Don't have an account?
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      </p>
    </div>
  )
}

export default Register