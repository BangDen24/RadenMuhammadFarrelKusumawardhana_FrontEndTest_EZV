"use client"

import { useEffect } from "react"
import { useGetTodosQuery } from "@/features/api/todos"
import Link from "next/link"
import { LiveDataProps } from "@/features/types/todo"
import { AddDataModals } from "./formModalWrapper"

export function LiveData({ initialData, page, limit }: LiveDataProps) {
  const {
    data: clientData,
    refetch,
    isFetching,
    isLoading,
  } = useGetTodosQuery(
    { start: (page - 1) * limit, limit },
    {
      // RTK Query configuration for client-side revalidation
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
      // Use initial data from SSR
      skip: false,
    }
  )

  // Strategy: Use SSR data initially, then switch to client data when available
  const datas = clientData ?? initialData

  // Auto-refetch every 30 seconds for real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      refetch()
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [refetch])

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Page {page}</h2>
        <AddDataModals />
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {datas.map((data) => (
          <li key={data.id} className="border p-4 rounded bg-white shadow-sm">
            <p>{data.title}</p>
            <p className="text-sm text-gray-500">
              Completed: {data.completed ? "Yes" : "No"}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-6 justify-center items-center">
        <Link
          href={`/?page=${page - 1}`}
          className={`px-4 py-2 rounded bg-black text-white ${
            page === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          Prev
        </Link>
        <p>{page}</p>
        <Link
          href={`/?page=${page + 1}`}
          className={`px-4 py-2 rounded bg-black text-white ${
            datas.length < limit ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  )
}