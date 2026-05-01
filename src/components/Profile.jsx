import { use, useState } from "react";
function Profile({name, role}) {
    const [following, setFollowing]=useState(false)
    return (
        <>
        <h1>{name}</h1>
        <p>{role}</p>
        <button onClick={()=>setFollowing(!following)}> {following?"following":"follow"}</button>
        </>


    )
}
export default Profile;