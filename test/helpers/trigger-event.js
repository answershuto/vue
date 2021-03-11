window.triggerEvent = function triggerEvent (target, event, process) {
  var e = new Event(event, {
    bubbles: true,
    cancelable: true
  });
  if (process) process(e)
  target.dispatchEvent(e)
}
