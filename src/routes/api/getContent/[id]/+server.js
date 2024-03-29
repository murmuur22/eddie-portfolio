import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
  let id = params.id;
  let content;

  try {
    content = await prisma.content.findMany({
      where: {
        postId: id
      }
    });
  } catch (error) {
    console.log(error);
  }

  return json(content);
}
