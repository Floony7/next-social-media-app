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
import { ErrorBox } from "../common/error-box";

export default function CreatePostForm({ slug }: { slug: string }) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    { errors: {} }
  );
  const { pending } = useFormStatus();
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button className="w-full" color="primary">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="font-bold text-lg">Create Post</h3>
            <Label htmlFor="title">Post Title</Label>
            <Input type="text" name="title" placeholder="Add a post title" />
            {formState.errors.title ? (
              <ErrorBox>{formState.errors.title?.join(", ")}</ErrorBox>
            ) : null}
            <Label htmlFor="content">Content</Label>
            <Textarea name="content" placeholder="More about this topic..." />
            {formState.errors.content ? (
              <ErrorBox>{formState.errors.content?.join(", ")}</ErrorBox>
            ) : null}
            {formState.errors._form ? (
              <ErrorBox>{formState.errors._form.join(", ")}</ErrorBox>
            ) : null}
            <Button
              disabled={pending}
              className="bg-blue-700 text-white w-full"
              type="submit"
            >
              {pending ? "Submitting..." : "Create Post"}
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
