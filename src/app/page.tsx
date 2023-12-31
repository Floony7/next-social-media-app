import CreateTopicForm from "@/components/topics/create-topic-form";

export default function Home() {
  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <CreateTopicForm />
      </div>
    </section>
  );
}
