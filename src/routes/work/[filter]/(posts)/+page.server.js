/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  let filter = params.filter;

  const postsResponse = await fetch(`/api/getPosts/${filter}`);
  const posts = await postsResponse.json();

  return { posts };
}
