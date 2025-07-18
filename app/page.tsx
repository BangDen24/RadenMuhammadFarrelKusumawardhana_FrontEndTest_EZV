import { LiveData } from "@/components/liveData"
import { HomePageProps, Todo } from "@/features/types/todo"

export const revalidate = 10 // Keep ISR revalidation

export default async function HomePage({ searchParams }: HomePageProps) {
  const page = Number(searchParams.page || "1")
  const limit = 10
  const start = (page - 1) * limit

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limit}`,
    { 
      next: { 
        revalidate: 10 
      }
    }
  )
  
  if (!res.ok) {
    throw new Error('Failed to fetch todos')
  }
  
  const initialData: Todo[] = await res.json()

  return (
    <main className="p-16">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <LiveData page={page} limit={limit} initialData={initialData} />
    </main>
  )
}