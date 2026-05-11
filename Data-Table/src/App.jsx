import React, { useState } from "react";

function App() {

  const [arr, setArr] = useState([
    { name: "Sneha", age: 22, email: "sneha@gmail.com", location: "Hyderabad" },
    { name: "Swetha", age: 20, email: "swethareddy@gmail.com", location: "Karimnagar" },
    { name: "Akshitha", age: 21, email: "akshitharaj@gmail.com", location: "Kurnool" },
    { name: "Pallavi", age: 22, email: "pallavi20@gmail.com", location: "Rayalseema" },
    { name: "Rani", age: 21, email: "rani@gmail.com", location: "Bangalore" },
    { name: "Bhargavi", age: 21, email: "bhargavi@gmail.com", location: "Hyderabad" },
  ]);

  function deleteItem(index) {

    let newArr = arr.filter((item, ind) => {
      return index !== ind;
    });

    setArr(newArr);
  }

  return (
    <div>

      <table border="1px" cellPadding="10px">

        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Location</th>
          <th>Action</th>
        </tr>

        {
          arr.length === 0 ? (
            <tr>
              <td colSpan="5">No Data Found</td>
            </tr>
          ) : (
            arr.map((item, ind) => {
              return (
                <tr key={ind}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.location}</td>

                  <td>
                    <button onClick={() => deleteItem(ind)}>
                      Delete
                    </button>
                  </td>

                </tr>
              );
            })
          )
        }

      </table>

    </div>
  );
}

export default App;