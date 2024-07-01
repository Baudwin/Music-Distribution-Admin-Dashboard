import { useEffect, useState } from "react"
import TitleCard from "../../../components/Cards/TitleCard"
import axios from "axios"
import { FiCheckCircle, FiUmbrella } from "react-icons/fi"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillCheckCircleFill } from "react-icons/bs"

const is_production = process.env.NODE_ENV === 'production' 

function Services(){
    const token = JSON.parse(localStorage.getItem("token"))
    const [services, setServices] = useState([])

    useEffect(()=>{
        const getServices = ()=>{
        axios.get( is_production ? "https://m-d-a-dashboard.vercel.app/services" : "http://localhost:4000/services", 
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
                }
        ) 
        .then(data=>{
          data &&  setServices(data.data)
        })
        .catch(error=>{
            console.log(error)
        })
        }
        getServices()
    }, [])

    return(
        <>
         <TitleCard title={"Services"}>
        <ul className="space-y-4">
            {services.map((service, i)=>{
                return <li key={i}  className="">
                    <div className="flex items-center gap-1">
                        <BsFillCheckCircleFill color="" className="text-green-600" />
                        <p className="capitalize">{service.title} </p>
                    </div>
                    
                </li>
            })}
        </ul>
     
     {/* <button className="mt-5 bg-pink-900 font-semibold uppercase rounded-full text-white py-2 px-3">View services</button> */}
        </TitleCard>
        
        </>
       
    )
}

export default Services