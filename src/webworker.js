console.log("webworker");
export const onmessage = function(e) {
  console.log("Message received from main script", e);
  console.log("Posting message back to main script");
  postMessage(e, "*");
};
