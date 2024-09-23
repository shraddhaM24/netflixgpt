import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    const [onlineStatus,setOnineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online",() => {
            setOnineStatus(true);
        })
        window.addEventListener("offline",() => {
            setOnineStatus(false);
        })
    });

    return onlineStatus;

}

export default useOnlineStatus;