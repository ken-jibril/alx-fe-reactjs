import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Finish React project')).toBeInTheDocument();
  expect(screen.getByText('Read a new article')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add new todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Learn testing' } });
  fireEvent.click(button);

  expect(screen.getByText('Learn testing')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Finish React project');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteBtn = screen.getAllByText('❌')[0];
  fireEvent.click(deleteBtn);

  expect(screen.queryByText('Finish React project')).not.toBeInTheDocument();
});
