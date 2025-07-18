export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface HomePageProps {
  searchParams: { page?: string };
}

export interface LiveDataProps {
  initialData: Todo[]
  page: number
  limit: number
}
