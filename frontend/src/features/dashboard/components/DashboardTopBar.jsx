
import { useState } from "react"

function DashboardTopBar({updateDashboardPeriod}){

        const [dateValue, setDateValue] = useState({ 
            startDate: new Date(), 
            endDate: new Date() 
        }); 


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="">
          
            </div>
          
        </div>
    )
}

export default DashboardTopBar