import Header from "./Header";
const Login = () => {
    return (
        <div>
        <Header/>
  <div>
    <img  
    src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
    alt="logo"/> 
     </div>
     <form>
     <input type="text" placeholder = "Email Address" className= "p-2 m-2"  />   
       <input type="password" placeholder = "Password" className= "p-2 m-2"  />   
       <button className = "p-4 m-4 bg-red-700 ">Sign in</button>

     </form>
        </div>

    )       
}
export default Login;
