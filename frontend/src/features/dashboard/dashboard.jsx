import DashboardStats from './components/DashboardStats'


import {FiDownload, FiMail, FiMusic, FiPlayCircle, FiUsers} from 'react-icons/fi'


import UserChannels from './components/Services'
import BarChart from './components/BarChart'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const statsData = [
    {title : "Users", value : "200+", icon : <FiUsers className='w-8 h-8' /> , description : "↗︎ 2300 (22%)"},
    {title : "Total Releases", value : "400+", icon : <FiMusic className='w-8 h-8'/> , description : "Current month"},
    {title : "Streams", value : "100m+", icon : <FiPlayCircle className='w-8 h-8'/>, description : "↙ 300 (18%)"},
]


function Dashboard(){

    const dispatch = useDispatch()

    // download report function 
    const downloadReport = ()=>{
        axios.get("http://localhost:4000/download-pdf", {
            responseType:'blob'
        })
    
        .then(response=>{
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const anchorTag = document.createElement('a')
            anchorTag.style.display = 'none'
            anchorTag.href = url;
            anchorTag.setAttribute('download', 'report.pdf')
            document.body.appendChild(anchorTag)
            anchorTag.click()
        })
    }

       // download report as csv function 
       const downloadCsv = ()=>{
        axios.get("http://localhost:4000/download-csv", {
            responseType:'blob'
        })
    
        .then(response=>{
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const anchorTag = document.createElement('a')
            anchorTag.style.display = 'none'
            anchorTag.href = url;
            anchorTag.setAttribute('download', 'report.csv')
            document.body.appendChild(anchorTag)
            anchorTag.click()
        })
    }


    return(
        <>

        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-3 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((data, k) => {
                        return (
                            <DashboardStats key={k} {...data} colorIndex={k}/>
                        )
                    })
                }
            </div>


        {/** ---------------------- User source channels table  ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <BarChart />
            </div>


{/* ------------------------------Download report button-----------------------------  */}
            <div className='flex justify-end pt-10 gap-3'>
                <button onClick={downloadReport} className='rounded flex items-center gap-1 text-white border bg-pink-900 p-2'>
                    <FiDownload/>
                   <span> Download pdf report</span>
                    </button>

                    <button onClick={downloadCsv} className='rounded flex items-center gap-1 text-white border bg-amber-900 p-2'>
                    <FiDownload/>
                   <span> Download csv report</span>
                    </button>
            </div>


        {/** ---------------------- Different charts ------------------------- */}
            {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div> */}
            

        </>
    )
}

export default Dashboard