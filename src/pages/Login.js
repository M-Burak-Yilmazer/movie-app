import {
  Button,
  FloatingLabel,
  Label,
  TextInput,
  Spinner,
} from "flowbite-react";
import { useState } from "react";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";

function Login() {


  return (
    <div className="flex justify-center">
      <div className="form-image hidden md:block">
        <img
          src={
            `https://picsum.photos/id/${Math.ceil(
              Math.random() * 900
            )}/800/800` || "https://picsum.photos/id/100/800/800"
          }
          alt=""
          className="object-cover h-screen w-full"
        />
      </div>
      <div className="relative overflow-hidden flex-1 h-screen items-start dark:bg-[#23242a]">
        <div className="login-box">
          <form className=" absolute inset-[2px] rounded-[8px] z-[10] form flex flex-col p-20">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput id="password2" type="password" required shadow />
            </div>
            <div className="dark:text-orange-300 font-medium text-red-600 text-sm flex justify-between p-1">
              <span>Forget Password</span>
              <NavLink to="/register"> Sign up</NavLink>
            </div>

            <Button type="submit" className="mt-2">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
