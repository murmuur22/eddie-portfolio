import { json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
  let slug = params.slug;

  let filters = slug.split("+");
  filters = filters.map((item) => item.toUpperCase());

  let posts;

  try {
    posts = await prisma.post.findMany({
      where: {
        tags: { in: filters }
      }
    });
  } catch (error) {
    console.log(error);
  }

  //console.log("----------------------------------JELLO");

  return json(posts);
}
