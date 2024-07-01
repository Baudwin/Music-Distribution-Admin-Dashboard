import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import axios from "axios";
import checkAuth from "../../app/auth";

const is_production = process.env.NODE_ENV === 'production' 

function Login() {

  const navigate = useNavigate()
  const token = checkAuth()

  useEffect(()=>{
    token && navigate("/app/dashboard" )
  }, [])

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState({
    password: "",
    email: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.email.trim() === "")
      return setErrorMessage("Email is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
        axios.post(is_production ? "https://m-d-a-dashboard.vercel.app/login-admin" : "http://localhost:4000/login-admin", loginObj) 
        
        .then(data=>{
           localStorage.setItem("token", JSON.stringify(data.data.adminInfo.token));
           navigate("/app/welcome")    
        })
        .catch(error=>{
           setErrorMessage(error.response.data.msg)
           return
        })

     setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card sm:w-full  mx-auto lg:w-1/3 xl:1/3 max-w-5xl  shadow-xl">
        <div className="  bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                

                <InputText
                  type="email"
                  defaultValue={loginObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Email"
                  updateFormValue={updateFormValue}
                />
                <p className="text-gray-600">admin@mail.com</p>

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
                <p className="text-gray-600">admin123</p>
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
