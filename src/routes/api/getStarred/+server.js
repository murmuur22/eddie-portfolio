import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
  let posts;

  try {
    posts = await prisma.post.findMany({
      where: {
        starred: true
      }
    });
  } catch (error) {
    console.log(error);
  }

  return json(posts);
}
