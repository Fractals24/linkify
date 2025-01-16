import { FaGoogle } from 'react-icons/fa'
import LoginWithGoogle from '../components/buttons/LoginWIthGoogle'

export default function login() {
    return (
        <div>
            <div className="p-4 max-w-xs mx-auto">
                <h1 className="font-bold text-4xl text-center mb-3">
                    Sign In
                </h1>
                <p className="text-2xl text-center mb-7 text-gray-600">
                    Sign in using any of the methods below
                </p>
                <LoginWithGoogle />
            </div>
        </div>
    )
}