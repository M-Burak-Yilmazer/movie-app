import {
  Button,
  FloatingLabel,
  Label,
  TextInput,
  Spinner,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUpProvider,forgotPassword } = useContext(AuthContext);

  const apiKey = process.env.REACT_APP_API_KEY;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=the%godfather`;

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };
  const getMovies = (baseUrl) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };
  useEffect(() => {
    getMovies(searchUrl);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-min-[100px] flex-1  mx-auto hidden md:block">
        <img
          src={
            movies[0]
              ? `https://image.tmdb.org/t/p/w500${
                  movies[Math.round(Math.random() * 2)].poster_path
                }`
              : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          }
          alt=""
          className="mx-auto h-screen w-full"
        />
      </div>
      <div className="relative overflow-hidden flex-1 h-screen items-start dark:bg-[#23242a]">
        <div className="login-box">
          <form
            onSubmit={handleSubmit}
            className=" absolute inset-[2px] rounded-[8px] z-[10] form flex flex-col p-20"
          >
            <h2 className="text-red-400 text-2xl font-[500] text-center mb-5 ]">
              Login App
            </h2>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                shadow
              />
            </div>
            <div className="dark:text-orange-300 font-medium text-red-600 text-sm flex justify-between p-1">
              <span onClick={() => forgotPassword(email)}>
                Forget Password
              </span>
              <NavLink to="/register"> Sign up</NavLink>
            </div>

            <Button type="submit" className="mt-2">
              Login
            </Button>
            <Button
              type="button"
              className="bg-orange-500 flex text-center mt-2 items-center"
              onClick={() => signUpProvider()}
            >
              Continue with Google
              <img
                src="./google.png"
                style={{ width: "20px", marginLeft: "1rem" }}
                alt="w"
              />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
