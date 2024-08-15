import supabase from "@/lib/supabase";
import { BlogType } from "../blogs/[slug]/components/blogType";

export async function fetchLatestBlog(): Promise<BlogType | null> {
  const { data, error } = await supabase
    .schema("mindbees_consulting")
    .from("mindbees_blogs")
    .select("*")
    .order("created_at", { ascending: false }) // Replace "created_at" with your actual timestamp or id field
    .limit(1);

  if (error) {
    console.error("Error fetching the latest blog:", error.message);
    return null;
  }

  return data?.[0] || null;
}
