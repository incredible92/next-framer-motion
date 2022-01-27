// import {
//     BrowserRouter as Router
//   } from "react-router-dom";

// import { useState, useEffect } from 'react';
// import App from "next/app";

// const Loading = () => {

//     const [loading, setLoading] = useState(true)

//     const showLoading = () => (
//         setLoading(true)
//     )

//     const hideLoading = () => (
//         setLoading(false)
//     )

//     useEffect(() => {
//         console.log(loading)
//     }, [loading])

//     return(
//         <>
//         <Router>
//             <App loading={loading} showLoading={() => showLoading()} hideLoading={() => hideLoading()}/>
//         </Router>
//         </>
//     )
// }

// export default Loading