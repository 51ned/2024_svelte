import { json } from '@sveltejs/kit'
import type { RequestEvent } from '@sveltejs/kit'


function POST({ request }: RequestEvent) {
  // save post to db

  console.log(request)

  return json({
    status: true,
    method: request.method
  })
}

function GET({ request }: RequestEvent) {
  // retrieve post from db

  console.log(request)

  return json({
    status: true,
    method: request.method
  })
}


export { POST, GET }