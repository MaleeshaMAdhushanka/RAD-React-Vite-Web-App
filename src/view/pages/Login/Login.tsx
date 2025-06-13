import {useNavigate} from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
            <div className="w-full max-w-sm bg-white border border-green-300 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-green-800 underline decoration-2 mb-6 text-center">
                    Sign In
                </h2>

                <div className="mt-1 mb-4">
                    <button onClick={()=> navigate("/")} className="text-sm text-green-600 hover:text-blue-900  bg-green-200">
                      Go Back
                    </button>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-2xl font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 block w-full px-4 py-3  border border-green-200 rounded-md text-lg shadow-sm focus:ring-green-500 focus:border-green-500 hover:ring-2 hover:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-2xl font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-3 border border-green-200 rounded-md text-lg shadow-sm focus:ring-green-500 focus:border-green-500 hover:ring-2 hover:ring-blue-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}