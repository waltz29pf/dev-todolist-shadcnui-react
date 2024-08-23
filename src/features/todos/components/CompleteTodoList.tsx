import { TodoItem } from './TodoItem';

export const CompleteTodoList = (): JSX.Element => {
  return (
    <div className="space-y-4">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};
