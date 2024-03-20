/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  const postsResponse = await fetch(`/api/getStarred`);
  const posts = await postsResponse.json();
  return { posts };
}
