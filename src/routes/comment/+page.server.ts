// from the 'formData' chapter:

// export const actions = {
//   default: async (event) => {
//     const form = await event.request.formData()
//     const comment = form.get('comment')

//     if (comment) {
//       // save comment to db...
      
//       return {
//         status: true,
//         msg: 'Your comment has been recieved!'
//       }
//     }
//   }
// }


// from the 'url' chapter:

// export const actions = {
//   default: async (event) => {
//     const form = await event.request.formData()
//     const url = event.url
//     const comment = form.get('comment')
    
//     // console.log(url)

//     if (comment) {
//       // save comment to db...
      
//       return {
//         status: true,
//         msg: `Your comment at ${url.hostname} has been recieved!`
//       }
//     }
//   }
// }

// from the 'routing' chapter: 

export const actions = {
  create: async (event) => {
    const form = await event.request.formData()
    const url = event.url
    const comment = form.get('comment')

    if (comment) {
      // save comment to db...
      
      return {
        status: true,
        msg: `Your comment at ${url.hostname} has been recieved!`
      }
    }
  },

  star: async () => {
    return {
      status: true,
      msg: 'You starred this comment!'
    }
  },
  
  reply: async () => {
    return {
      status: true,
      msg: 'You replied!'
    }
  }
}