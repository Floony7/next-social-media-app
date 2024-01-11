import CreateTopicForm from "@/components/topics/create-topic-form";
import TopicList from "@/components/topics/topic-list";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <CreateTopicForm />
        {/* <Separator className="my-4" /> */}
        <TopicList />
      </div>
    </section>
  );
}
