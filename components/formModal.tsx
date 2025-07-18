'use client'

import { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useCreateTodoMutation } from '@/features/api/todos'
import { Input } from './ui/input'

export function AddDataModal() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  const [createTodo, { isLoading }] = useCreateTodoMutation()

  const handleSubmit = async () => {
    await createTodo({ title, completed })
    setTitle('')
    setCompleted(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Data</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Data</DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Data title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <span>Completed</span>
        </label>

        <Button className="mt-4 w-full" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Data"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
