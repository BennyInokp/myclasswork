import {useState} from "react";
import './api.css';

export default function Api() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);


const onChangeHandler = (e) => {
  setInput(e.target.value);
};
const submitHandler =  (e) => {
  e.preventDefault();
  fetch(`https://api.github.com/search/users?q=${input}`)
    .then((response) => response.json())
    .then((data) =>{
      setResult(data.items);
      console.log(data.items);
      //setResult(input);


    });

};
  return (
       <div className="center">
        <h1> GitHub User Search</h1>
        <form onSubmit={submitHandler}>
          <input type="text"id="in" placeholder="Enter Your Github Account Here" onChange={onChangeHandler} />
          <button type="">Search</button>
        </form>
        <ul>
          {result?.length === 0 ? (
            <li> No results found </li>
          ): (
            result?.map((item) => (
              <div className="border">
              <li key={item.id}>
                 <strong>{item.login}</strong> -{''} <br />
              <img src= {item.avatar_url} alt='Avatar' /> <br />
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
                </a> <br />

              </li>
            </div>
            ))
          )}
          </ul>
       </div>
  );
}  