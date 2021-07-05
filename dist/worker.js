addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
asdasd
a
sd
as
d
as
/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response("Hello Victoria")
}
