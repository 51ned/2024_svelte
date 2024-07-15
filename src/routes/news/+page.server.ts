import type { PageServerLoad } from './$types'

import json from '$lib/articles.json'


export const load: PageServerLoad = async () => {
  return { json }
}