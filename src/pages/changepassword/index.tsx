import { ChangeEvent, FormEvent, useState } from "react";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleGetNewPassword(event: ChangeEvent<HTMLInputElement>) {
    setNewPassword(event.target.value);
  }

  function handleGetConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
  }

  async function handleChangeUserPassword(event: FormEvent) {
    event.preventDefault();

    // const response = await axiosInstance.post("/changeUserPassword", {
    //   newPassword,
    //   confirmPassword,
    // });

    // console.log(response.data);
  }

  return (
    <div className="flex w-screen h-screen flex-1 items-center justify-center">
      <form
        onSubmit={handleChangeUserPassword}
        className="border-2 p-5 w-96 h-auto rounded-lg"
      >
        <div>
          <label className="flex justify-start text-sm">New password</label>
          <input
            type="text"
            required
            value={newPassword}
            onChange={handleGetNewPassword}
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full"
          />
        </div>
        <div className="mt-5">
          <label className="flex justify-start text-sm">Confirm password</label>
          <input
            type="text"
            value={confirmPassword}
            onChange={handleGetConfirmPassword}
            required
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full"
          />
        </div>

        <div className="flex mt-10 justify-center inline-block">
          <button
            type="submit"
            className="bg-purple-300 text-white rounded-lg w-60 p-1"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
