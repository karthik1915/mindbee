import supabase from "@/lib/supabase";
import { BlogType } from "../blogs/[slug]/components/blogType";

export async function fetchOtherBlogsExcept(
  slug: string,
): Promise<BlogType[] | null> {
  const { data, error } = await supabase
    .schema("mindbees_consulting")
    .from("mindbees_blogs")
    .select("*")
    .neq("slug", slug) // Exclude the blog with the given slug
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching other blogs:", error.message);
    return null;
  }

  return data || null;
}
