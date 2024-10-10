import { createContext } from "react";

const RouteContext  = createContext({
    path : "/",
    setPath: (path: string) => {}
})

export default RouteContext