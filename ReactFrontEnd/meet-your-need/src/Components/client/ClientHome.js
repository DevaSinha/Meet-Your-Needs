import { Button } from "@mui/material";
import PendingRequest from "./pendingRequest";


function Client(){



    
    return(
        <div>
            <Button href="/completedProjects">Completed Porjects</Button>
            <Button href="/request">New Request</Button>
            <PendingRequest/>
        </div>
    )
}

export default Client;