import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import json from '$lib/articles.json'


interface Article {
  title: string;
  slug: string;
  content: string
}

type Articles = Record<string, Article>


const articles: Articles = json as Articles


export const load: PageServerLoad = async ({ params }) => {
  // Because 'forEach' doesn't stop until all elements are processed,
  // whereas the '.find' method stops as soon as the desired article is found,
  // the latter can be faster in some cases..?

  const found = Object.values(articles)
    .find(article => article.slug === params.slug)

  if (found) {
    return found
  }

  throw error(404, 'Whoops! That article wasn\'t found!')
}
