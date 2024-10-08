import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { SignInFlow } from '../types'

interface SignUpCardProps{
    setState:(state:SignInFlow)=>void;
}

const SignUpCard = ({setState}:SignUpCardProps) => {

  const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [conformPassword,setConfirmPassword] = useState("")

    return (
        <Card className='w-full h-full p-8'>
            <CardHeader>
                <CardTitle>
                    Sign up to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>

            <CardContent className='space-y-5 px-0 pb-0'>
                <form className='space-y-2.5'>
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        type='email'
                        required
                    />
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        type='password'
                        required
                    />
                    <Input
                        disabled={false}
                        value={conformPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirm Password'
                        type='password'
                        required
                    />
                    <Button type='submit' className='w-full' disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className='flex flex-col gap-y-2.5'>
                    <Button
                        disabled={false}
                        onClick={()=>{}}
                        variant='outline'
                        size='lg'
                        className='w-full relative'
                    >
                        <FcGoogle className='absolute size-5 top-2.5 left-2.5'/>
                        Continue with Google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={()=>{}}
                        variant='outline'
                        size='lg'
                        className='w-full relative'
                    >
                        <FaGithub className='absolute size-5 top-2.5 left-2.5'/>
                        Continue with Github
                    </Button>
                </div>
                <p className='text-sm text-muted-foreground'>
                    Already have an account? 
                    <span 
                    onClick={()=>setState('signIn')}
                    className='text-sky-700 hover:underline cursor-pointer'>
                        Sign in
                        </span>
                </p>
            </CardContent>

        </Card>
    )
}

export default SignUpCard