
import './App.css'

function App() {
  const handlerAddtosubmit = event =>{
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       const user = {name, email, password}
       console.log(user)
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(user)
      })
      .then(res =>res.json())
      .then(data =>{
          console.log(data)
          if(data.insertedId){
            alert('Data is added successfully')
          }
      form.reset();
      })
  }



  return (
    <>
     
      <h1>simple curd</h1>
      <form onSubmit={handlerAddtosubmit}>

          <input type="text" name='name' />
          <br />
          <input type="email" name='email' />
          <br />
          <input type="password" name='password' />
          <br />
          <input type="submit" value="Add User"/>

      </form>
  
    </>
  )
}

export default App
