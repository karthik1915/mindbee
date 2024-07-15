"use server";
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

export interface BlogType {
  title: string;
  content: string;
  category: string;
  likes: number;
  blog_category: string;
}

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function fetchBlog(slug: string): Promise<BlogType | null> {
  const params = {
    TableName: "mindbees_blogs",
    KeyConditionExpression: "blog_slug = :slug", // Use your sort key name here
    ExpressionAttributeValues: {
      ":slug": { S: slug },
    },
  };

  try {
    const command = new QueryCommand(params);
    const data = await client.send(command);

    if (!data.Items || data.Items.length === 0) {
      return null;
    }

    const item = data.Items[0];

    const blog: BlogType = {
      title: item.title?.S ?? "",
      content: item.content?.S ?? "",
      category: item.category?.S ?? "",
      likes: Number(item.likes?.N) ?? 0,
      blog_category: item.blog_category?.S ?? "",
    };

    return blog;
  } catch (error) {
    console.error("Error fetching blog from DynamoDB:", error);
    return null;
  }
}
