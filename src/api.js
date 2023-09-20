// src/api.js

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const signup = async (email, password) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Signup failed");
  }

  return response;
};

export const signin = async (email, password) => {
  const response = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Signin failed");
  }

  const data = await response.json();
  return data.access_token;
};

export const createTodo = async (token, todo) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo,
    }),
  });

  const data = await response.json();
  return data;
};

export const getTodos = async (token) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

export const updateTodo = async (token, id, todo, isCompleted) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo,
      isCompleted,
    }),
  });

  const data = await response.json();
  return data;
};

export const deleteTodo = async (token, id) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Delete failed");
  }

  return response;
};
