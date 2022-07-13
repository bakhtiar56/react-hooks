import { useState, useEffect } from "react";

export default function UseEffect() {
  const [ResourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/${ResourceType}`;

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });

    return () => {
      //cleanup sideeffect when component unmounts
      //stop fetching and updating state when component unmounts
      //for e.g. when going to posts page then quickly clicking on home page
      //the posts page will still be fetching in background and
      //when it is done fetching and starts to update the state
      //it realizes uh-oh, the component is no more
      // So we clean up this side effect using Abort Controller
      //Javascript  in useEffect cleanup function
      abortController.abort();
    };
  }, [ResourceType]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
        <h1>{ResourceType}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
}
