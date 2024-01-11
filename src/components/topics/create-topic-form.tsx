"use client";

import { useFormState, useFormStatus } from "react-dom";
import * as actions from "@/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui";
import { Label } from "../ui/label";
import { ReactNode } from "react";

export default function CreateTopicForm() {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });
  const { pending } = useFormStatus();
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button className="w-full" color="primary">
          Create Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <h3 className="text-lg">Create a Topic</h3>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <Label htmlFor="name">Topic Name</Label>
            <Input type="text" placeholder="Name" name="name" />
            {formState.errors.name ? (
              <ErrorBox>{formState.errors.name.join(", ")}</ErrorBox>
            ) : null}
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              placeholder="More about this topic..."
            />
            {formState.errors.name ? (
              <ErrorBox>{formState.errors.name.join(", ")}</ErrorBox>
            ) : null}
            {formState.errors._form?.join(", ")}
            <Button
              disabled={pending}
              className="bg-blue-700 text-white w-full"
              type="submit"
            >
              {pending ? "Submitting..." : "Create Topic"}
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

function ErrorBox({ children }: { children: ReactNode }) {
  return <div className="bg-red-600 text-white p-2">{children}</div>;
}

function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <Button type="submit" className="bg-blue-700 text-white">
      {children}
    </Button>
  );
}
