import type { PageLoad } from './$types'


const key = 'DEMO_KEY'


// The code snippet from the book... 

// export function load() {
//   const data = fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
//     .then(response => {
//       console.log('got res')
//       return response.json()
//     })

//   return data 
// }

// ...causes the warning:

/** 
  'Loading https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY using `window.fetch`.
  For best results, use the `fetch` that is passed to your `load` function:'
*/

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
  const items = await res.json()

  return items 
}
