"use client";

export interface FilterErrorProps {
  error: { message: string };
}

export default function FilterError({ error }: FilterErrorProps) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
