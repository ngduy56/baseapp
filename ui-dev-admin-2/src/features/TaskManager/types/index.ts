export interface TaskManagerState {
  taskList: Task[];
  isSuccess: boolean;
  successMessage: string;
  isError: boolean;
  errorMessage: string;
  taskEdit: Task;
  allTasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  type: 0 | 1;
  isDeleted: boolean;
}
