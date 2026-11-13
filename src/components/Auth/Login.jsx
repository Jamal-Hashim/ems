import { useState } from "react";

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail("");
        setPassword("");
    }

    return (
        <div className='min-h-screen w-full bg-slate-100 flex items-center justify-center p-4'>

            <div className='w-full max-w-md rounded-2xl bg-white shadow-lg p-6 sm:p-10'>

                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'
                >

                    <h2 className='text-2xl sm:text-3xl mb-2 font-bold text-slate-800'>
                        Welcome Back!
                    </h2>

                    <p className='text-sm text-slate-500 mb-7 text-center'>
                        Login to continue to your Task Manager
                    </p>

                    {/* Email Input */}
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 text-sm sm:text-base text-slate-800 outline-none bg-white placeholder:text-slate-400 rounded-xl transition-all'
                        type="email"
                        placeholder='Enter Your E-mail'
                    />

                    {/* Password Input */}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='w-full border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 text-sm sm:text-base text-slate-800 outline-none bg-white placeholder:text-slate-400 rounded-xl mt-4 transition-all'
                        type="password"
                        placeholder='Enter Your Password'
                    />

                    {/* Login Button */}
                    <button
                        type="submit"
                        className='w-full mt-6 bg-blue-600 hover:bg-blue-700 duration-300 active:scale-95 cursor-pointer font-semibold text-base sm:text-lg text-white p-3 outline-none rounded-xl'
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login