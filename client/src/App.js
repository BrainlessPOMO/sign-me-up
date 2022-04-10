import Header from "./components/Header";

function App() {
  function changeForm(){
    const loginBtn = document.querySelector("#login")
    const signupBtn = document.querySelector("#signup")

    loginBtn.addEventListener("click", () => {
      if(loginBtn.className !== "tab active"){
        signupBtn.parentElement.classList.remove("active")
        loginBtn.parentElement.classList.add("active")
      }
    })
    signupBtn.addEventListener("click", () => {
      if(loginBtn.className !== "tab active"){
        loginBtn.parentElement.classList.remove("active")
        signupBtn.parentElement.classList.add("active")
      }
    })
  }
  return (
    <div className="fullBackground" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'images/map_background.png'})`, height: '100vh'
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 left-homescreen">
            <div className="login-form"> 
              <div className="login-header">
                <li className="tab active"><a href="#" onClick= {changeForm} id="login">Log In</a></li>
                <li className="tab"><a href="#" onClick= {changeForm} id="signup">Sign Up</a></li>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
