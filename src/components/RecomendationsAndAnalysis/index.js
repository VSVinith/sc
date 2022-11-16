import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LoadingButton } from '@mui/lab';

import './index.css'

// const data = {
//     Recommendations: {
//         Recommendation: [
//             {
//                 Description: "Improve OTIF : 20% and Savings : $20000 ",
//                 OTF: " + 20%",
//                 Savings: " $20000 "
//             },
//             {
//                 Description: "Improve OTIF : 10% and Savings : $5000 ",
//                 OTF: " + 10%",
//                 Savings: " $5000 "
//             },
//             {
//                 Description: "Reduce OTIF : 30% and Savings : $30000 ",
//                 OTF: " - 30%",
//                 Savings: " $30000 "
//             }
//         ]
//     }
// }

const data = {
    Recommendations: {
        Recommendation: [
            {
                Description:
                    "Seller_Priority < 2 and Req_Qty >= 501 and Cost_Margin >= 2505",
                OrderCount: "2",
                Orders: [
                    {
                        Cluster: "1",
                        OrderId: "1001801",
                        LineId: "50",
                        ReqDate: "16-Nov-22",
                        ReqQty: "501",
                        PromQty: "501",
                        NewPromQty: "503",
                        PromDate: "16-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S11",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1001812",
                        LineId: "180",
                        ReqDate: "17-Nov-22",
                        ReqQty: "294",
                        PromQty: "292",
                        NewPromQty: "294",
                        PromDate: "17-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"

                    },
                    {
                        Cluster: "1",
                        OrderId: "1001877",
                        LineId: "20",
                        ReqDate: "15-Nov-22",
                        ReqQty: "1024",
                        PromQty: "1024",
                        NewPromQty: "1022",
                        PromDate: "16-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S11",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"


                    },
                    {
                        Cluster: "3",
                        OrderId: "1002731",
                        LineId: "110",
                        ReqDate: "16-Nov-22",
                        ReqQty: "258",
                        PromQty: "250",
                        NewPromQty: "258",
                        PromDate: "16-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "red"


                    },
                    {
                        Cluster: "3",
                        OrderId: "1002777",
                        LineId: "120",
                        ReqDate: "16-Nov-22",
                        ReqQty: "290",
                        PromQty: "299",
                        NewPromQty: "290",
                        PromDate: "17-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "green"


                    },
                    {
                        Cluster: "3",
                        OrderId: "1002812",
                        LineId: "10",
                        ReqDate: "16-Nov-22",
                        ReqQty: "266",
                        PromQty: "266",
                        NewPromQty: "266",
                        PromDate: "17-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "red"


                    },
                    {
                        Cluster: "2",
                        OrderId: "1002815",
                        LineId: "10",
                        ReqDate: "16-Nov-22",
                        ReqQty: "301",
                        PromQty: "301",
                        NewPromQty: "311",
                        PromDate: "17-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "red"


                    },
                    {
                        Cluster: "2",
                        OrderId: "1002885",
                        LineId: "20",
                        ReqDate: "17-Nov-22",
                        ReqQty: "581",
                        PromQty: "581",
                        NewPromQty: "566",
                        PromDate: "18-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "green"


                    },
                    {
                        Cluster: "3",
                        OrderId: "1003001",
                        LineId: "70",
                        ReqDate: "17-Nov-22",
                        ReqQty: "190",
                        PromQty: "190",
                        NewPromQty: "0",
                        PromDate: "18-Nov-22",
                        NewPromDate: "",
                        Seller: "S14",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"


                    },
                    {
                        Cluster: "2",
                        OrderId: "1003015",
                        LineId: "80",
                        ReqDate: "17-Nov-22",
                        ReqQty: "352",
                        PromQty: "295",
                        NewPromQty: "0",
                        PromDate: "18-Nov-22",
                        NewPromDate: "",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"


                    },
                ],
                OTIF: " + 10%",
                Savings: " $20000 ",
            },
            {
                Description:
                    "Seller_Priority >= 2 and Req_Qty >= 300 and Cost_Margin < 1165",
                OrderCount: "3",
                Orders: [
                    {
                        Cluster: "1",
                        OrderId: "1001801",
                        LineId: "50",
                        ReqDate: "16-Nov-22",
                        ReqQty: "501",
                        PromQty: "501",
                        NewPromQty: "531",
                        PromDate: "16-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S11",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1001812",
                        LineId: "180",
                        ReqDate: "17-Nov-22",
                        ReqQty: "294",
                        PromQty: "294",
                        NewPromQty: "294",
                        PromDate: "17-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "1",
                        OrderId: "1001877",
                        LineId: "20",
                        ReqDate: "15-Nov-22",
                        ReqQty: "1024",
                        PromQty: "1024",
                        NewPromQty: "1024",
                        PromDate: "16-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S11",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1002731",
                        LineId: "110",
                        ReqDate: "16-Nov-22",
                        ReqQty: "258",
                        PromQty: "258",
                        NewPromQty: "268",
                        PromDate: "16-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1002777",
                        LineId: "120",
                        ReqDate: "16-Nov-22",
                        ReqQty: "290",
                        PromQty: "290",
                        NewPromQty: "189",
                        PromDate: "17-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1002812",
                        LineId: "10",
                        ReqDate: "16-Nov-22",
                        ReqQty: "266",
                        PromQty: "266",
                        NewPromQty: "0",
                        PromDate: "17-Nov-22",
                        NewPromDate: "",
                        Seller: "S12",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "2",
                        OrderId: "1002815",
                        LineId: "10",
                        ReqDate: "16-Nov-22",
                        ReqQty: "301",
                        PromQty: "301",
                        NewPromQty: "301",
                        PromDate: "17-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "2",
                        OrderId: "1002885",
                        LineId: "20",
                        ReqDate: "17-Nov-22",
                        ReqQty: "581",
                        PromQty: "581",
                        NewPromQty: "584",
                        PromDate: "18-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1003001",
                        LineId: "70",
                        ReqDate: "17-Nov-22",
                        ReqQty: "190",
                        PromQty: "190",
                        NewPromQty: "0",
                        PromDate: "18-Nov-22",
                        NewPromDate: "",
                        Seller: "S14",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "2",
                        OrderId: "1003015",
                        LineId: "80",
                        ReqDate: "17-Nov-22",
                        ReqQty: "352",
                        PromQty: "295",
                        NewPromQty: "352",
                        PromDate: "18-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                ],
                OTIF: " + 20%",
                Savings: " $5000 ",
            },
            {
                Description: "Seller_Priority >= 2 and Req_Qty < 301",
                OrderCount: "5",
                Orders: [
                    {
                        Cluster: "1",
                        OrderId: "1001801",
                        LineId: "50",
                        ReqDate: "16-Nov-22",
                        ReqQty: "501",
                        PromQty: "501",
                        NewPromQty: "501",
                        PromDate: "16-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S11",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1001812",
                        LineId: "180",
                        ReqDate: "17-Nov-22",
                        ReqQty: "294",
                        PromQty: "294",
                        NewPromQty: "294",
                        PromDate: "17-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "1",
                        OrderId: "1001877",
                        LineId: "20",
                        ReqDate: "15-Nov-22",
                        ReqQty: "1024",
                        PromQty: "1024",
                        NewPromQty: "1024",
                        PromDate: "16-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S11",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1002731",
                        LineId: "110",
                        ReqDate: "16-Nov-22",
                        ReqQty: "258",
                        PromQty: "258",
                        NewPromQty: "258",
                        PromDate: "16-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1002777",
                        LineId: "120",
                        ReqDate: "16-Nov-22",
                        ReqQty: "290",
                        PromQty: "290",
                        NewPromQty: "280",
                        PromDate: "17-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1002812",
                        LineId: "10",
                        ReqDate: "16-Nov-22",
                        ReqQty: "266",
                        PromQty: "266",
                        NewPromQty: "266",
                        PromDate: "17-Nov-22",
                        NewPromDate: "16-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "2",
                        OrderId: "1002815",
                        LineId: "10",
                        ReqDate: "16-Nov-22",
                        ReqQty: "301",
                        PromQty: "301",
                        NewPromQty: "300",
                        PromDate: "17-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S12",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "red"
                    },
                    {
                        Cluster: "2",
                        OrderId: "1002885",
                        LineId: "20",
                        ReqDate: "17-Nov-22",
                        ReqQty: "581",
                        PromQty: "581",
                        NewPromQty: "376",
                        PromDate: "18-Nov-22",
                        NewPromDate: "18-Nov-22",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "3",
                        OrderId: "1003001",
                        LineId: "70",
                        ReqDate: "17-Nov-22",
                        ReqQty: "190",
                        PromQty: "190",
                        NewPromQty: "190",
                        PromDate: "18-Nov-22",
                        NewPromDate: "17-Nov-22",
                        Seller: "S14",
                        NewPromQtyColor: "green",
                        NewPromDateColor: "green"
                    },
                    {
                        Cluster: "2",
                        OrderId: "1003015",
                        LineId: "80",
                        ReqDate: "17-Nov-22",
                        ReqQty: "352",
                        PromQty: "295",
                        NewPromQty: "0",
                        PromDate: "18-Nov-22",
                        NewPromDate: "",
                        Seller: "S13",
                        NewPromQtyColor: "red",
                        NewPromDateColor: "green"
                    },
                ],
                OTIF: " - 30%",
                Savings: " $30000 ",
            },
        ],
    },
};

const { Recommendation } = data.Recommendations

let rows = []

let color = "black"

const RecomendationsAndAnalysis = () => {



    const [loader, setLoader] = React.useState(true)

    const [value, setValue] = React.useState('recomendations')

    const [otif, setOtif] = React.useState("")

    const [savings, setSavings] = React.useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleSavings = (event) => {
        setSavings(event.target.value)
        setOtif(event.target.id)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000)

    }, [loader])

    if (otif === " + 10%") {
        rows = Recommendation[0].Orders
    } else if (otif === " + 20%") {
        rows = Recommendation[1].Orders
    } else if (otif === " - 30%") {
        rows = Recommendation[2].Orders
    }

    // useEffect(()=>{
    //     const getResponse = async () => {
    //         const api = "http://localhost:8001/jda/SCPOWeb-orderpromiser/op/integration/v1/getRecommendations"

    //         const options = {
    //             method: "GET"
    //         }

    //         const response = await fetch(api, options)

    //         if(response.ok){
    //             const data = await response.json()
    //             const { Recommendation } = data.Recommendations
    //         }
    //     }

    // }, [])

    return (
        <div>
            {loader ? <div className='loader'><h1>Loading</h1><LoadingButton loading={loader}></LoadingButton></div> :
                <div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box className='tabs'>
                                <TabList onChange={handleChange} >
                                    <Tab label="Recomendations" value="recomendations" />
                                    <Tab label="Analysis" value="analysis" />
                                </TabList>
                            </Box>
                            <TabPanel value="recomendations">
                                <div className="recomendations-container">
                                    <div className='image-heading'>
                                        <img className='image' src="https://cdn.pixabay.com/photo/2016/03/31/22/35/jigsaw-puzzle-1297102_1280.png" alt="img" />
                                        <p className='heading'>Intelligent Allocation with Order Clustering</p>
                                    </div>
                                    <div className='flex-row'>
                                        <h4>OTIF :  </h4>
                                        <h4>{otif}</h4>
                                    </div>
                                    <div className='flex-row image-items'>
                                        <div>
                                            <TipsAndUpdatesSharpIcon className="image-2" sx={{ fontSize: 50 }} />
                                            <p>It's AI-ML thing</p>
                                        </div>
                                        <div className='items'>

                                            {Recommendation.map(eachRecommendation => (
                                                <div className='item'>
                                                    <input type="radio" id={eachRecommendation.OTIF} value={eachRecommendation.Savings} name="allocation" onChange={handleSavings}></input>
                                                    <label htmlFor={eachRecommendation.OTIF}>{eachRecommendation.Description}</label>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <p className='savings'>Savings of {savings} </p>
                                    <div className='buttons'>
                                        <Link to="/">
                                            <button className='reject-button'>
                                                <CancelIcon></CancelIcon>
                                            </button>
                                        </Link>
                                        <Link to="/success">
                                            <button className='accept-button'>
                                                <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="analysis">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Cluster</TableCell>
                                                <TableCell align="right">OrderId</TableCell>
                                                <TableCell align="right">LineId</TableCell>
                                                <TableCell align="right">ReqDate</TableCell>
                                                <TableCell align="right">ReqQty</TableCell>
                                                <TableCell align="right">PromQty</TableCell>
                                                <TableCell align="right">NewPromQty</TableCell>
                                                <TableCell align="right">PromDate</TableCell>
                                                <TableCell align="right">NewPromDate</TableCell>
                                                <TableCell align="right">Seller</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.Cluster}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.Cluster}
                                                    </TableCell>
                                                    <TableCell align="right">{row.OrderId}</TableCell>
                                                    <TableCell align="right">{row.LineId}</TableCell>
                                                    <TableCell align="right">{row.ReqDate}</TableCell>
                                                    <TableCell align="right">{row.ReqQty}</TableCell>
                                                    <TableCell align="right">{row.PromQty}</TableCell>
                                                    <TableCell sx={{ color: row.NewPromQtyColor }} align="right">{row.NewPromQty}</TableCell>
                                                    <TableCell align="right">{row.PromDate}</TableCell>
                                                    <TableCell sx={{ color: row.NewPromDateColor }}align="right">{row.NewPromDate}</TableCell>
                                                    <TableCell align="right">{row.Seller}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            }
        </div>
    )
}

export default RecomendationsAndAnalysis


// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
