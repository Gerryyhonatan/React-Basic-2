import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1>Profile</h1>
            Username: {username}
        </div>
    )
}

export default ProfilePage