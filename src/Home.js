import React from 'react'
import
{BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Sector}
    from 'recharts';
import {HiOutlineShoppingBag} from "react-icons/hi";
import {CiWallet} from "react-icons/ci";
import {AiFillDollarCircle} from "react-icons/ai";
import {RiBillFill} from "react-icons/ri";
import BasicTable from "./Table";

function Home() {
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };
    const data2 = [
        { name: '65% ', value: 580 },
        { name: 'Group B', value: 300 },
    ];
    const data = [
        {
            name: 'Jan',
            uv: 2000,
        },
        {
            name: 'Feb',
            uv: 1500,
        },
        {
            name: 'Mar',
            uv: 3200,
        },
        {
            name: 'Apr',
            uv: 2100,
        },
        {
            name: 'May',
            uv: 2400,
        },
        {
            name: 'Jun',
            uv: 1000,
        },
        {
            name: 'Jul',
            uv: 2400,
        },
        {
            name: 'Aug',
            pv:4200
        },
        {
            name: 'Sep',
            uv: 3900,
        },
        {
            name: 'Oct',
            uv: 3500,
        },
        {
            name: 'Nov',
            uv: 3300,
        },
        {
            name: 'Dec',
            uv: 3500,
        },
    ];
    return (
        <main className='main-container'>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Earning</h3>
                        <AiFillDollarCircle className='card_icon'/>
                    </div>
                    <h1>$198K</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Orders</h3>
                        <RiBillFill className='card_icon'/>
                    </div>
                    <h1>$2.4K</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Balance</h3>
                        <CiWallet className='card_icon'/>
                    </div>
                    <h1>$2.4K</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Sales</h3>
                        <HiOutlineShoppingBag className='card_icon'/>
                    </div>
                    <h1>$89k</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <BarChart strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="pv" fill="#0241C4" />
                        <Bar dataKey="uv" fill="#778986" />
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            activeIndex={0}
                            activeShape={renderActiveShape}
                            data={data2}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="tbl">
            <ResponsiveContainer className="mt-4" width="100%" height="100%">
                    <BasicTable/>
            </ResponsiveContainer>
            </div>
        </main>
    )
}
export default Home