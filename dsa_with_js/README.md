# dsa
here i am solving dsa question with some different approachs.
# what is javascript?
-Brindan Eich created first javascript engine.
- one callstack and a heap.
->one thread --->one call stack --->one thing at a time.

## event loop
just a simple job --> look at the webapis and task queue-->stack-->popoff
event lop waits for call stack to be clear so even if we put 0ms in setTimeout it still calls and go through with event loop.
reference -https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=16m.

##difference between promise.all and promise.AllSetteled:
Promise.allSettled is a method that returns a promise that resolves after all of the input promises have either fulfilled or rejected, and the resulting array of objects contain information about the status of each promise.

Unlike Promise.all, which short-circuits and rejects as soon as any input promise rejects, Promise.allSettled waits for all promises to settle (either fulfill or reject) and then returns an array of objects representing the state of each promise.

The resulting array contains an object for each promise that was passed in.
   <!--+++++++++++++++++++++++++++++++++ example of promise.all ++++++++++++++++++++++++++++++++++++++== -->

ex:     try {
        const [response1, response2] = await Promise.all([
          axios.get("https://api.example.com/data1"),
          axios.get("https://api.example.com/data2"),
        ]);

        setData1(response1.data);
        setData2(response2.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    
<!--+++++++++++++++++++++++++++++++++ example of promise.allSetteled ++++++++++++++++++++++++++++++++++++++== -->

    const promises = [
  Promise.resolve('foo'),
  Promise.reject('bar'),
  Promise.resolve('baz'),
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Value:', result.value);
      } else {
        console.log('Reason:', result.reason);
      }
    });
  })
  .catch(error => {
    console.error(error);
  });