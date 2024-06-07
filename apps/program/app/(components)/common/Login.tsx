'use client'

import useSignin from '@/hooks/use-signin'
import { Button } from '@repo/ui/button'

export default function Login() {
  const { signinWithOauth } = useSignin()

  return (
    <div className="flex flex-1 items-center justify-center">
      <Button onClick={() => signinWithOauth('google')}>Google로 로그인</Button>
    </div>
  )
}
