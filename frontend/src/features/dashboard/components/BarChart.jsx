import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import axios from 'axios';

const is_production = process.env.NODE_ENV === 'production' 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

  const [earnings, setEarnings] = useState([])
  const [filteredEarnings, setFilteredEarnings] = useState(earnings)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  useEffect(()=>{
    const getEarnings = async()=>{
      axios.get(is_production ? "https://m-d-a-dashboard.vercel.app/earnings" : "http://localhost:4000/earnings") 
      .then(data=>{
        data &&  setEarnings(data.data)
        data && setFilteredEarnings(data.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    getEarnings()
  }, [])
  

const filter = ()=>{
  const filtered = earnings.filter(earning=>{
    const date = new Date(earning.date)
    return date >= new Date(startDate) && date <= new Date(endDate)
  })
  setFilteredEarnings(filtered)
}

const clearFilter = ()=>{
  setFilteredEarnings(earnings)
}

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = filteredEarnings.map(earning=>{
        return  earning.date 
      });

      const amounts = filteredEarnings.map(earning=>{
        return earning.amount
      });
 
      const data = {
        labels,
        datasets: [
          {
            label: 'Earnings',
            data: amounts, 
            backgroundColor: 'violet',
          },
        ],
      };



    return(
      <TitleCard title={"Client Earnings"}>
            <Bar options={options} data={data} />
            
            <div className='py-4 space-y-4'>
              <h1 className='font-bold text-xl capitalize'>select date range</h1>

              <div className='flex gap-4'>
                <div className='flex flex-col gap-1 w-fit'>
               <label className='text-gray-400' htmlFor="">Start date</label>
              <input onChange={(e)=>{setStartDate(e.target.value)}} className='border rounded p-2' type="date" name="" id="" /> 
              </div>

              <div className='flex flex-col gap-1 w-fit'>
               <label className='text-gray-400' htmlFor="">End date</label>
              <input onChange={(e)=>{setEndDate(e.target.value)}} className='border rounded p-2' type="date" name="" id="" /> 
              </div>
              
              </div>

              <div className='flex gap-2 pt-4'>
                <button onClick={filter} className='bg-pink-800 shadow hover:bg-pink-600  font-semibold text-white px-5 py-2 rounded'>Filter</button>
                <button onClick={clearFilter} className='bg-gray-700 hover:bg-red-600  shadow font-semibold text-white px-5 py-2 rounded'>Reset</button>
              </div> 
             
            </div>
      </TitleCard>

    )
}


export default BarChart