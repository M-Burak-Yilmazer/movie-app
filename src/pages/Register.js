import {
  Button,
  FloatingLabel,
  Label,
  TextInput,
  Spinner,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [movies, setMovies] = useState([]);
  const { createUser, signUpProvider } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${name}${lastName}`;
    console.log(displayName);
    createUser(email, password, displayName);
    
  };

  const apiKey = process.env.REACT_APP_API_KEY;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=lord%of%the%rings`;

  const getMovies = (baseUrl) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };
  useEffect(() => {
    getMovies(searchUrl);
  }, [searchUrl]);
  console.log(movies);

  return (
    <div className="flex justify-center">
      <div className=" w-min-[100px] flex-1  mx-auto hidden md:block ">
        <img
          src={
            movies[0]
              ? `https://image.tmdb.org/t/p/w500${
                  movies[Math.round(Math.random() * 2)].poster_path
                }`
              : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          }
          alt=""
          className="mx-auto h-screen w-full "
        />
      </div>
      <div className="relative  flex-1 h-screen items-start dark:bg-[#23242a]">
        <div className="login-box">
          <form
            onSubmit={handleSubmit}
            className=" absolute inset-[2px] rounded-[8px] z-[10] form flex flex-col p-10"
          >
            <h2 className="text-red-400 text-2xl font-[500] text-center mb-5 ]">
              Register App
            </h2>
            <div>
              <div className="grid grid-flow-col text-purple-950 justify-stretch space-x-4">
                <FloatingLabel
                  variant="filled"
                  label="First Name"
                  sizing="sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-col text-purple-950 justify-stretch space-x-4">
                <FloatingLabel
                  variant="filled"
                  label="Last Name"
                  sizing="sm"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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

            <Button type="submit" className="mt-2">
              Register new account
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
export default Register;
