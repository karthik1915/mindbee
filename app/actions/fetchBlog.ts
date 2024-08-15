import supabase from "@/lib/supabase";
import { BlogType } from "../blogs/[slug]/components/blogType";

export default async function fetchBlog(
  blogSlug: string,
): Promise<BlogType | null> {
  const { data, error } = await supabase
    .schema("mindbees_consulting")
    .from("mindbees_blogs")
    .select("*")
    .eq("slug", blogSlug)
    .single(); // Use .single() to fetch a single row

  if (error) {
    console.error(`Error fetching blog: ${error.message}`);
    return null;
  }

  return data;
}
