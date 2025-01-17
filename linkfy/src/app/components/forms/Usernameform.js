import Usernameformresults from "../formresults/usernameformresults";


export default function Usernameform({desiredUsername}) {
    return (
        <form action={grabusername}>
                <h1 className="font-bold text-center text-4xl mb-3 p-2 mt-2">
                    Grab your Username
                </h1>
                <p className="text-gray-800 text-center">
                    Choose your Username
                </p>
                <div className="max-w-xs mx-auto">
                    <input
                       name="username"
                       className="mx-auto text-center border w-full p-2 mt-2"
                       defaultValue={desiredUsername}
                       type="text"
                       placeholder="username" />
                       <Usernameformresults />
                    <button 
                        className="bg-blue-600 text-white p-2 mx-auto w-full mt-2"
                        type="submit">
                            Claim your username
                        </button>
                </div>
            </form>
    )
}