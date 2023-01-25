import { useState, useEffect } from "react";
import "./App.css";
function App() {
  //create state for data - default to null as we need to make sure that the state can expect to recieve no data if the API is down - so we don't use an empty string or array
  const [data, setData] = useState(null);
  //Write our fetch request inside a useEffect, so it'll execute on app/component mount
  useEffect(() => {
    //initial request - takes in url endpoint as argument - this will return a promise (all async methods return a promise)
    fetch(`https://dog.ceo/api/breeds/image/random`)
      //then, use a callback function to take the response data and convert it to readable (json) format
      .then((res) => res.json())
      //then, take the received data (call it whatever you like), and log it to console to see it - we can then grab any part of the returned data object and do something with it
      .then((apiData) => {
        console.log(apiData);
        //set the returned data into state - we can now render it in the return
        setData(apiData.message);
      });
  }, []);
  return (
    <div className="App bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
        Fetching data in React with Fetch API
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        The Fetch API is built into javascript - it's the only data fetching
        method in React that doesn't involve using a third party package such as
        Axios. It's probably the simplest way of grabbing data from an API or
        third party in React.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        Here, we're using it to fetch a random image of a dog. Check the
        comments in the code to see the actual process behind using the fetch
        API.
      </p>

      <div class="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl pt-8">
          Look at this handsome boy!
        </h1>

        <img src={data} alt="" />
      </div>
    </div>
  );
}

export default App;
