'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { usePathname, useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ThreadValidation } from '@/lib/validations/thread'

interface Props {
  userId: string
}

const PostThread = ({ userId }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: '',
      accountId: userId,
    },
  })

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {}

  return <h1 className="text-white">Post Thread Form</h1>
}

export default PostThread
