export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
        // Simulate an API call with a timeout
    setTimeout(() => {
            // You can change this to resolve or reject based on the condition you want to simulate
        resolve('API response');
            // If you want to reject the promise, you can use:
            // reject('API call failed');
    }, 1000); // Simulating a 1-second delay for the API response
  });
}