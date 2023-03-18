import Register from "./pages/Register";

function App() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <p>You do have an account ? Login</p>
        </form>
      </div>
    </div>
  );
}

export default App;
