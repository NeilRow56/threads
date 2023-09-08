import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex h-screen flex-grow items-center justify-center bg-blue-50 ">
      <div className=" text-center">
        <Button className="rounded-lg bg-blue-500 p-2 px-4 text-white">
          Welcome to Home Page
        </Button>
      </div>
    </main>
  )
}
