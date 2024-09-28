import supabase from "@/lib/supabase";
import { BlogType } from "../blogs/[slug]/components/blogType";
import { fetchLatestBlog } from "./fetchLatestBlog";

export async function fetchOtherBlogs(): Promise<BlogType[] | null> {
  const latestBlogId = await fetchLatestBlog();

  const { data, error } = await supabase
    .schema("mindbees_consulting")
    .from("mindbees_blogs")
    .select("*")
    .neq("slug", latestBlogId?.slug) // Exclude the latest blog by its ID
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching other blogs:", error.message);
    return null;
  }

  return data || null;
}
