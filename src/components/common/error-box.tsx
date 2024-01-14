import { ReactNode } from "react";

export function ErrorBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-red-300 border-red-600 border-2 rounded p-2">
      {children}
    </div>
  );
}
