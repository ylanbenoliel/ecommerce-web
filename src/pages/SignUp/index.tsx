import { ChangeEvent, FormEvent, useState } from "react";

export default function SignUp() {
  const [dataRegisterUser, setDataRegisterUser] = useState("");

  function handleGetUserEmail(event: ChangeEvent<HTMLInputElement>) {
    setDataRegisterUser(event.currentTarget.value);
  }

  function handleRegisterUser(event: FormEvent) {
    event.preventDefault();

    // Send data to backend

    /* TODO: Check api route and params */
    // const response = await axiosInstance.post("/signUp", {
    //   userEmail,
    // });

    // console.log(response.data);
  }

  return (
    <div className="flex w-screen h-screen flex-1 items-center justify-center">
      <form
        onSubmit={handleRegisterUser}
        className="border-2 p-5 w-96 h-auto rounded-lg"
      >
        <div className="mb-4 flex">
          <label className="m-auto text-slate-500 justify-center items-center">
            Please fill your detail to create your account.
          </label>
        </div>

        <div>
          <label className="flex justify-start text-sm">Email</label>
          <input
            type="text"
            onChange={handleGetUserEmail}
            value={dataRegisterUser}
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full"
          />
        </div>

        <div className="flex mt-5 justify-center inline-block">
          <button
            type="submit"
            className="bg-purple-300 text-white rounded-lg w-60 p-1"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
