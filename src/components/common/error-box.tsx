import { ReactNode } from "react";

export function ErrorBox({ children }: { children: ReactNode }) {
  return <div className="bg-red-600 text-white p-2">{children}</div>;
}
