import {
  Button,
  FloatingLabel,
  Label,
  TextInput,
  Spinner,
} from "flowbite-react";
import { useState } from "react";

function Register() {
 

  const handleSubmit=()=>{

  }

  

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
          <form onSubmit={handleSubmit} className=" absolute inset-[2px] rounded-[8px] z-[10] form flex flex-col p-20">
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

            <Button  type="submit" className="mt-2">
              Register new account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
