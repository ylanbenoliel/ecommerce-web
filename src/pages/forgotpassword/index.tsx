import { ChangeEvent, FormEvent, useState } from "react";

export default function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");

  function handleGetUserEmail(event: ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.target.value);
  }

  function handleUserEmailRecover(event: FormEvent) {
    event.preventDefault();

    // Send data to backend

    /* TODO: Check api route and params */
    // const response = await axiosInstance.post("/user/accessRecover", {
    //   userEmail,
    // });

    // console.log(response.data);

    setUserEmail("");
  }

  return (
    <div className="flex w-screen h-screen flex-1 items-center justify-center">
      <form
        onSubmit={handleUserEmailRecover}
        className="border-2 p-5 w-96 h-auto rounded-lg"
      >
        <div className="mb-4 flex">
          <label className="m-auto text-slate-500 justify-center items-center">
            Enter your user account&apos;s verified email address and we will
            send you a password reset link.
          </label>
        </div>

        <div>
          <label className="flex justify-start text-sm"></label>
          <input
            onChange={handleGetUserEmail}
            value={userEmail}
            type="text"
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full"
            placeholder="youremail@gmail.com"
          />
        </div>

        <div className="flex mt-10 justify-center inline-block">
          <button
            type="submit"
            className="bg-purple-300 text-white rounded-lg w-60 p-1"
          >
            Send password reset email
          </button>
        </div>
      </form>
    </div>
  );
}
