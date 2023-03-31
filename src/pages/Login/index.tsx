export default function Login() {
  return (
    <div className="flex w-screen h-screen flex-1 items-center justify-center">
      <form className="border-2 p-5 w-96 h-auto rounded-lg">
        <div className="mb-4 flex">
          <label className="m-auto text-slate-500 justify-center items-center">
            Please fill your detail to access your account.
          </label>
        </div>

        <div>
          <label className="flex justify-start text-sm">Email</label>
          <input
            type="text"
            className="block m-auto border-2 items-center p-1 mt-1 rounded-lg w-full"
          />
        </div>
        <div className="mt-5">
          <label className="flex justify-start text-sm">Password</label>
          <input
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
              href="#"
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
          <button
            type="submit"
            className="rounded-lg bg-white border-2 text-black w-60 p-1"
          >
            <svg
              className="inline-block mr-2"
              width="24"
              height="24"
              viewBox="0 0 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.501 12.2332C22.501 11.3699 22.4296 10.7399 22.2748 10.0865H12.2153V13.9832H18.12C18.001 14.9515 17.3582 16.4099 15.9296 17.3898L15.9096 17.5203L19.0902 19.935L19.3106 19.9565C21.3343 18.1249 22.501 15.4298 22.501 12.2332Z"
                fill="#4285F4"
              />
              <path
                d="M12.214 22.5C15.1068 22.5 17.5353 21.5666 19.3092 19.9567L15.9282 17.3899C15.0235 18.0083 13.8092 18.4399 12.214 18.4399C9.38069 18.4399 6.97596 16.6083 6.11874 14.0766L5.99309 14.0871L2.68583 16.5954L2.64258 16.7132C4.40446 20.1433 8.0235 22.5 12.214 22.5Z"
                fill="#34A853"
              />
              <path
                d="M6.12046 14.0767C5.89428 13.4234 5.76337 12.7233 5.76337 12C5.76337 11.2767 5.89428 10.5767 6.10856 9.92337L6.10257 9.78423L2.75386 7.2356L2.64429 7.28667C1.91814 8.71002 1.50146 10.3084 1.50146 12C1.50146 13.6917 1.91814 15.29 2.64429 16.7133L6.12046 14.0767Z"
                fill="#FBBC05"
              />
              <path
                d="M12.2141 5.55997C14.2259 5.55997 15.583 6.41163 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.2141 1.5C8.02353 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97598 7.39166 9.38073 5.55997 12.2141 5.55997Z"
                fill="#EB4335"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <div className="flex justify-center mt-4 ml-2">
          <label className="text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="underline font-medium text-purple-300 text-sm"
            >
              Sing up
            </a>
          </label>
        </div>
      </form>
    </div>
  );
}
