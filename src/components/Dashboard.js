import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { data } from './data';
import { ReactComponent as DownArrowLogo } from '../asset/arrowdown.svg'
import { ReactComponent as RightArrowLogo } from '../asset/arrow-right-thick-svgrepo-com.svg'
import { ReactComponent as UpArrowLogo } from '../asset/arrow-up-thick-svgrepo-com.svg'
import { ReactComponent as LeftArrowLogo } from '../asset/arrow-left-thick-svgrepo-com.svg'
import NavBar from './NavBar';


const Dashboard = () => {
    
    const dataOne = [
        {
            name: 'Page A',
            do: 149,
        },
        {
            name: 'Page B',
            do: 249,
        },
        {
            name: 'Page C',
            do: 349,
        },
        {
            name: 'Page D',
            do: 239,
        },
        {
            name: 'Page E',
            do: 239,
        },
        {
            name: 'Page F',
            do: 129,
        },
        {
            name: 'Page G',
            do: 239,
        },
        {
            name: 'Page H',
            do: 339,
        },
        {
            name: 'Page I',
            do: 539,
        },
        {
            name: 'Page J',
            do: 239,
        },
        {
            name: 'Page K',
            do: 339,
        },
        {
            name: 'Page L',
            do: 139,
        },
    ];

    const dataTwo = [
        {
            name: 'Page A',
            do: 349,
        },
        {
            name: 'Page B',
            do: 270,
        },
        {
            name: 'Page C',
            do: 359,
        },
        {
            name: 'Page D',
            do: 213,
        },
        {
            name: 'Page E',
            do: 239,
        },
        {
            name: 'Page F',
            do: 329,
        },
        {
            name: 'Page G',
            do: 439,
        },
        {
            name: 'Page H',
            do: 319,
        },
        {
            name: 'Page I',
            do: 389,
        },
        {
            name: 'Page J',
            do: 412,
        },
        {
            name: 'Page K',
            do: 511,
        },
        {
            name: 'Page L',
            do: 570,
        },
    ];

    const dataThree = [
        {
            name: 'Page A',
            do: 449,
        },
        {
            name: 'Page B',
            do: 410,
        },
        {
            name: 'Page C',
            do: 359,
        },
        {
            name: 'Page D',
            do: 513,
        },
        {
            name: 'Page E',
            do: 439,
        },
        {
            name: 'Page F',
            do: 379,
        },
        {
            name: 'Page G',
            do: 317,
        },
        {
            name: 'Page H',
            do: 319,
        },
        {
            name: 'Page I',
            do: 285,
        },
        {
            name: 'Page J',
            do: 270,
        },
        {
            name: 'Page K',
            do: 267,
        },
        {
            name: 'Page L',
            do: 265,
        },
    ];

    const dataFour = [
        {
            name: 'Page A',
            do: 249,
        },
        {
            name: 'Page B',
            do: 410,
        },
        {
            name: 'Page C',
            do: 359,
        },
        {
            name: 'Page D',
            do: 513,
        },
        {
            name: 'Page E',
            do: 439,
        },
        {
            name: 'Page F',
            do: 379,
        },
        {
            name: 'Page G',
            do: 317,
        },
        {
            name: 'Page H',
            do: 319,
        },
        {
            name: 'Page I',
            do: 285,
        },
        {
            name: 'Page J',
            do: 415,
        },
        {
            name: 'Page K',
            do: 422,
        },
        {
            name: 'Page L',
            do: 513,
        },
    ];

    const dataFive = [
        {
            name: 'Page A',
            do: 458,
        },
        {
            name: 'Page B',
            do: 223,
        },
        {
            name: 'Page C',
            do: 456,
        },
        {
            name: 'Page D',
            do: 400,
        },
        {
            name: 'Page E',
            do: 521,
        },
        {
            name: 'Page F',
            do: 505,
        },
        {
            name: 'Page G',
            do: 221,
        },
        {
            name: 'Page H',
            do: 751,
        },
        {
            name: 'Page I',
            do: 113,
        },
        {
            name: 'Page J',
            do: 267,
        },
        {
            name: 'Page K',
            do: 287,
        },
        {
            name: 'Page L',
            do: 265,
        },
        {
            name: 'Page M',
            do: 298,
        },
        {
            name: 'Page N',
            do: 199,
        },
        {
            name: 'Page 0',
            do: 189,
        },
        {
            name: 'Page P',
            do: 177,
        },
        {
            name: 'Page Q',
            do: 334,
        },
        {
            name: 'Page R',
            do: 218,
        },
        {
            name: 'Page S',
            do: 223,
        },
    ];

    const dataHistorGramOne = [
        {
            name: 'Jan',
            offline: 458,
            online: 358
        },
        {
            name: 'Feb',
            offline: 567,
            online: 421,
        },
        {
            name: 'Mar',
            offline: 461,
            online: 351,
        },
        {
            name: 'Apr',
            offline: 550,
            online: 509,
        },
        {
            name: 'May',
            offline: 387,
            online: 191,
        },
        {
            name: 'Jun',
            offline: 468,
            online: 307
        },
        {
            name: 'Jul',
            offline: 458,
            online: 307
        },
        {
            name: 'Aug',
            offline: 152,
            online: 94
        },
        {
            name: 'Sep',
            offline: 627,
            online: 398,
        },
        {
            name: 'Oct',
            offline: 418,
            online: 390,
        },
        {
            name: 'Nov',
            offline: 391,
            online: 381,
        },
        {
            name: 'Dec',
            offline: 399,
            online: 381
        },
    ];

    const dataPieOne = [
        { name: 'A', value: 100, color: '#45aef0'},
        { name: 'B', value: 40, color: '#cac2c6'},
    ];

    const RADIAN = Math.PI /180, cx = 150, cy=200, iR=50, oR=100, value=50 ;
    

  return (
    <div className='bg-[#20304c] h-min'>

        <NavBar />

        {/* first components */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-3'>
            {/* first row  */}
            <div className='rounded-md bg-[#0c1a32] p-2'>
                <p className='text-center text-gray-300 text-xs'>Marketing</p>
                <h1 className='text-[#3a92cd] text-center text-3xl font-semibold'>$8.5k</h1>
                <p className='text-center text-gray-300'>&#40;$11.4k Last Year&#41;</p> 

                <div className='flex gap-6 items-center w-full h-[90%]'>
                    <ResponsiveContainer width='100%' height='70%' >
                        <LineChart 
                        width={500}
                        height={300}
                        data={dataOne}
                        margin={{
                            top: 5,
                            right: 4,
                            left: 0,
                            bottom: 5,
                        }}
                        >
                        <XAxis dataKey='name' tick={false} />   
                        <YAxis tick={false} />
                        <Tooltip />
                        
                        <Line type='monotone' dataKey='do' stroke='red' strokeWidth={1.5} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className='flex items-center gap-1 pr-6'>
                        <p className='text-sm text-red-600'>27.11%</p>
                        <DownArrowLogo className='w-4 h-4 stroke-3 fill-red-600' />
                    </div>
                </div>

            </div>
            {/* second row  */}
            <div className='rounded-md bg-[#0c1a32] p-2'>
                <p className='text-center text-gray-300 text-xs'>Return</p>
                <h1 className='text-[#3a92cd] text-center text-3xl font-semibold'>$450</h1>
                <p className='text-center text-gray-300'>&#40;$10.4k Last Year&#41;</p> 

                <div className='flex gap-6 items-center w-full h-[90%]'>
                    <ResponsiveContainer width='100%' height='70%' >
                        <LineChart 
                        width={500}
                        height={300}
                        data={dataTwo}
                        margin={{
                            top: 5,
                            right: 4,
                            left: 0,
                            bottom: 5,
                        }}
                        >
                        <XAxis dataKey='name' tick={false} />   
                        <YAxis tick={false} />
                        <Tooltip />
                        
                        <Line type='monotone' dataKey='do' stroke='green' strokeWidth={1.5} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className='flex items-center gap-1 pr-6'>
                        <p className='text-sm text-[#3a92cd]'>47.11%</p>
                        <UpArrowLogo className='w-4 h-4 stroke-3 fill-[#3a92cd]' />
                    </div>
                </div>

            </div>
            {/* third row  */}
            <div className='rounded-md bg-[#0c1a32] p-2'>
                <p className='text-center text-gray-300 text-xs'>Purchase</p>
                <h1 className='text-[#3a92cd] text-center text-3xl font-semibold'>$19.5k</h1>
                <p className='text-center text-gray-300'>&#40;$16.7k Last Year&#41;</p> 

                <div className='flex gap-6 items-center w-full h-[90%]'>
                    <ResponsiveContainer width='100%' height='70%' >
                        <LineChart 
                        width={500}
                        height={300}
                        data={dataThree}
                        margin={{
                            top: 5,
                            right: 4,
                            left: 0,
                            bottom: 5,
                        }}
                        >
                        <XAxis dataKey='name' tick={false} />   
                        <YAxis tick={false} />
                        <Tooltip />
                        
                        <Line type='monotone' dataKey='do' stroke='red' strokeWidth={1.5} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className='flex items-center gap-1 pr-6'>
                        <p className='text-sm text-red-600'>12.21%</p>
                        <DownArrowLogo className='w-4 h-4 stroke-3 fill-red-600' />
                    </div>
                </div>

            </div>
            {/* fourth row  */}
            <div className='rounded-md bg-[#0c1a32] p-2'>
                <p className='text-center text-gray-300 text-xs'>Sales</p>
                <h1 className='text-[#3a92cd] text-center text-3xl font-semibold'>$45.5k</h1>
                <p className='text-center text-gray-300'>&#40;$9.4k Last Year&#41;</p> 

                <div className='flex gap-6 items-center w-full h-[90%]'>
                    <ResponsiveContainer width='100%' height='70%' >
                        <LineChart 
                        width={500}
                        height={300}
                        data={dataFour}
                        margin={{
                            top: 5,
                            right: 4,
                            left: 0,
                            bottom: 5,
                        }}
                        >
                        <XAxis dataKey='name' tick={false} />   
                        <YAxis tick={false} />
                        <Tooltip />
                        
                        <Line type='monotone' dataKey='do' stroke='green' strokeWidth={1.5} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className='flex items-center gap-1 pr-6'>
                        <p className='text-sm text-[#3a92cd]'>142.11%</p>
                        <UpArrowLogo className='w-4 h-4 stroke-3 fill-[#3a92cd]' />
                    </div>
                </div>

            </div>

            {/* five row  next row */}
            <div className='rounded-md bg-[#45aef0]'>
                <div className='flex justify-between p-4'>
                    <div>
                        <button className='text-white text-xs px-4 py-1 border border-white rounded-xl'>View</button>
                        <p className='text-xs text-white pt-6'>down last year %41</p>
                    </div>

                    <div>
                        <p className='text-white text-sm text-right'>Revenue</p>
                        <p className='text-xs text-white pt-6 text-right'>Weekly Revenue</p>
                        <p className='text-lg text-white font-semibold text-center'>$16K</p>
                    </div>
                </div>
                
                <ResponsiveContainer width='100%' height='70%' >
                    <AreaChart 
                    width={500}
                    height={300}
                    data={dataFive}
                    margin={{
                        top: 0,
                        right: 0,
                        left: -60,
                        bottom: -60,
                    }}
                    >
                    <XAxis dataKey='name' axisLine={false} tick={false} />   
                    <YAxis axisLine={false} tick={false} />
                    <Tooltip />
                    
                    <Area type='monotone' dataKey='do' stroke='white' fill='#7ac4f5' strokeWidth={1.5} dot={false} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

              {/* six row  */}
            <div className='sm:col-span-3 rounded-md bg-[#0c1a32] p-0'>
                <div className='flex flex-col sm:grid grid-cols-1 grid-cols-3'>
               <div className='sm:col-span-1 border-r border-r-gray-400 border-opacity-50 p-2'>
                    <h2 className='text-right text-white border-b border-b-gray-600 border-opacity-50 p-4'>Sales Overview</h2>
                    <div className='flex justify-between p-2'>
                            <div className='flex items-center'>
                            <p className='text-lg text-white'>$250</p>
                            <DownArrowLogo className='w-[11px] h-[11px] stroke-3 fill-[#45aef0]' />
                            </div>

                            <div>
                                <h2 className='text-white text-lg text-right'>iPod</h2>
                                <p className='text-gray-600 text-xs'>25 mins ago</p>
                            </div>
                    </div>
                    
                    <div className='flex justify-between p-2'>
                            <div className='flex items-center'>
                            <p className='text-lg text-white'>$589</p>
                            <DownArrowLogo className='w-[11px] h-[11px] stroke-3 fill-red-600' />
                            </div>

                            <div>
                                <h2 className='text-white text-lg text-right'>iPhone</h2>
                                <p className='text-gray-600 text-xs'>5 hours ago</p>
                            </div>
                    </div>

                    <div className='flex justify-between p-2 border-b border-b-gray-600 border-opacity-50 pb-6'>
                            <div className='flex items-center'>
                            <p className='text-lg text-white'>$1292</p>
                            <DownArrowLogo className='w-[11px] h-[11px] stroke-3 fill-[#45aef0]' />
                            </div>

                            <div>
                                <h2 className='text-white text-lg text-right'>Hi TV</h2>
                                <p className='text-gray-600 text-xs'>3 days ago</p>
                            </div>
                    </div>

                    <div className='py-4'>
                        <p className='text-right text-lg text-white'>Total Sales</p>
                        <p className='text-right text-lg text-[#45aef0] pb-6'>$8.45%</p>
                        <div className='flex'>
                            <div className='h-4 rounded-tl-lg  rounded-bl-lg w-[60%] bg-[#20304c]'>&nbsp;</div>
                            <div className='h-4 rounded-tr-lg  rounded-br-lg w-[40%] bg-[#45aef0]'>&nbsp;</div>
                        </div>
                    </div>

               </div>

               <div className='sm:col-span-2 '>
                <p className='text-white text-right pt-2 pr-2'>Order Summary</p>
                    <ResponsiveContainer width='100%' height="90%" >
                        <BarChart 
                        width={10}
                        height={100}
                        data={dataHistorGramOne}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={false} />
                        <YAxis />
                        <Tooltip />
                        <Legend 
                        layout='horizontal'
                        verticalAlign='top'
                        align='left'
                        wrapperStyle={{
                            padding: '10px'
                        }}
                        />
                        <Bar dataKey="offline" barSize={25} stackId='a' fill='red' />
                        <Bar dataKey="online" barSize={25} stackId='a' fill='blue' />
                        </BarChart>
                    </ResponsiveContainer>
               </div>
                </div>
            </div>

             {/* seventh row  next row */}
             <div className='rounded-md bg-[#0c1a32]'>
                <div className='flex justify-between pt-4 px-4'>
                    <div>
                        <button className='text-white text-xs px-4 py-1 border border-white rounded-xl'>Export</button>
                    </div>

                    <div>
                        <p className='text-white text-sm text-right'>Overview</p>
                    </div>
                </div>
                
               <div className='flex justify-center'>
                <PieChart width={400} height={200} margin={{
                    top: -70,
                }} >
                    <Pie
                    dataKey='value'
                    startAngle={180}
                    endAngle={0}
                    data={dataPieOne}
                    cx={cx}
                    cy={cy}
                    innerRadius={iR}
                    outerRadius={oR}
                    fill='#45aef0'
                    stroke='none'

                    >
                        {
                            dataPieOne.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                                
                            ))
                        }
                        
                    </Pie>
                </PieChart>
                <p className='text-white'>56</p>
               </div>
            </div>


        </div>

                {/* second components */}
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2'>
            
        </div> */}
        
    
    </div>
  )
}

export default Dashboard