
import './App.css'

function App() {
  let arr=[
    {
      id: 1,
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam itaque nulla ea assumenda natus aperiam praesentium quas quia officia nesciunt exercitationem sapiente adipisci?"},
    { id: 2, 
      content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam itaque nulla ea assumenda natus aperiam praesentium quas quia officia nesciunt exercitationem sapiente adipisci?"},
    { id: 3, 
      content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam itaque nulla ea assumenda natus aperiam praesentium quas quia officia nesciunt exercitationem sapiente adipisci?"}
  ]
  let result=arr.map((item,ind)=>{
    return(
      <div className="card" key={item.id}>
        <h1>{item.id}</h1>
        <p>
          {item.content}
        </p>
        <button className='btn'>Read More</button>
      </div>
    )
});

  return (
    <div>
    <div className='container'>
        {result}
    </div>
</div>

  )
}

export default App
