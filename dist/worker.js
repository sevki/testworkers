addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
function handleRequest(request) {
  console.log('Got request', request)
  const response = await fetch(request)
  console.log('Got response', response)
  return response
}
