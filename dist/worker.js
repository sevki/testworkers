addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

this isn't event js 

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response("Hello Victoria")
}
