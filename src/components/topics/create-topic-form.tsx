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

export default function CreateTopicForm() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <form action={actions.createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Label htmlFor="ame">Topic Name</Label>
            <Input type="text" placeholder="Name" />
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="More about this topic..." />
            <Button className="bg-blue-700 text-white" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
