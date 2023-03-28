export default function Login() {
  return (
    <div className="flex bg-black w-screen h-screen flex-1 items-center justify-center">
      <form className="text-white border-2 border-sky-500 w-96 h-96">
        <div className="ml-2">
          <label className="block mt-4">Email</label>
          <input type="text" name="" id="" className="block mt-1 rounded-lg" />

          <label className="block mt-4">Password</label>
          <input type="text" name="" id="" className="block mt-1 rounded-lg" />

          <div className="flex justify-between items-center">
            <div className="inline">
              <input type="checkbox" name="" id="" className="mt-4 mr-2" />
              <label htmlFor="">Remember me</label>
            </div>

            <label htmlFor="">Forgot password?</label>
          </div>

          <div className="flex mt-10 justify-center inline-block">
            <button type="submit" className="bg-purple-500 rounded-lg w-60">
              Sing in
            </button>
          </div>
          <div className="flex mt-2 justify-center inline-block">
            <button
              type="submit"
              className="rounded-lg bg-white text-black w-60"
            >
              Sing in with Google
            </button>
          </div>

          <div className="mt-5 items-center">
            <label>
              Don't have an account?{" "}
              <a href="#" className="underline">
                Sing up
              </a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
