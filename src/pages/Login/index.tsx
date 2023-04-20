import GoogleIcon from "@/assets/googleIcon";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleGetUserEmail(event: ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.target.value);
  }

  function handleGetUserPassword(event: ChangeEvent<HTMLInputElement>) {
    setUserPassword(event.target.value);
  }

  async function handleUserLogin(event: FormEvent) {
    event.preventDefault();

    // Send data to backend

    /* TODO: Check api route and params */
    // const response = await axiosInstance.post("/user", {
    //   userEmail,
    //   userPassword,
    // });

    // console.log(response.data);

    setUserEmail("");
    setUserPassword("");
  }

  return (
    <div className="flex w-screen h-screen flex-1 items-center justify-center">
      <form
        onSubmit={handleUserLogin}
        className="border-2 p-5 w-96 h-auto rounded-lg"
      >
        <div className="mb-4 flex">
          <label className="m-auto text-slate-500 justify-center items-center">
            Please fill your detail to access your account.
          </label>
        </div>

        <div>
          <label className="flex justify-start text-sm">Email</label>
          <input
            onChange={handleGetUserEmail}
            value={userEmail}
            type="text"
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full"
          />
        </div>
        <div className="mt-5">
          <label className="flex justify-start text-sm">Password</label>
          <input
            onChange={handleGetUserPassword}
            value={userPassword}
            type="text"
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full focus:ring-sky-500"
          />
        </div>

        <div className="flex items-center mt-6 justify-between">
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <label className="ml-1 text-sm">Remember me</label>
          </div>

          <div className="flex">
            <a
              href="../changepassword"
              className="mr-2 underline font-medium text-purple-300 text-sm"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="flex mt-10 justify-center inline-block">
          <button
            type="submit"
            className="bg-purple-300 text-white rounded-lg w-60 p-1"
          >
            Login
          </button>
        </div>
        <div className="flex mt-3 justify-center">
          <button className="rounded-lg bg-white border-2 text-black w-60 p-1">
            <GoogleIcon />
            Sign in with Google
          </button>
        </div>

        <div className="flex justify-center mt-4 ml-2">
          <label className="text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="../signup/"
              className="underline font-medium text-purple-300 text-sm"
            >
              Sign up
            </a>
          </label>
        </div>
      </form>
    </div>
  );
}
