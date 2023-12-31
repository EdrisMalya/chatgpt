'use client'
import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
    return (
        <div
            className={
                'bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'
            }>
            <Image
                src={'https://links.papareact.com/2i6'}
                alt={'test'}
                width={300}
                height={300}
            />
            <button
                onClick={() => signIn('google')}
                className={'text-white font-bold text-3xl animate-pulse'}>
                Sign in to use ChatGPT
            </button>
        </div>
    )
}

export default Login
