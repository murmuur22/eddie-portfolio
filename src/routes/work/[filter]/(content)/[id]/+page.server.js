/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  let id = params.id;

  const contentResponse = await fetch(`/api/getContent/${id}`);
  const content = await contentResponse.json();

  return { content };
}
