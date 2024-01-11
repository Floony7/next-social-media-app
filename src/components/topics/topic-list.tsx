import Link from "next/link";
import { db } from "@/db";
import paths from "@/paths";
import { Badge } from "@/components/ui/badge";

export default async function TopicList() {
  const allTopics = await db.topic.findMany();
  const renderedTopics = allTopics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Badge variant="warning">{topic.slug}</Badge>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-wrap gap-2 my-3">{renderedTopics}</div>;
}
