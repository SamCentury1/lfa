// import { useEffect, useState } from 'react';
// import './App.css';
// // import WorldMap from './components/WorldMap/WorldMap'
// import NavBar from './components/NavBar/NavBar';
// import IntroView from './views/HomePage/IntroView/IntroView';
// import MissionView from './views/HomePage/MissionView/MissionView';
// import TutoringView from './views/HomePage/TutoringView/TutoringView';
// import CoursesView from './views/HomePage/CoursesView/CoursesView';
// import TripsView from './views/HomePage/TripsView/TripsView';
// import FooterView from './views/HomePage/FooterView/FooterView';



// function App() {


//   const [yPosCurrent, setYPosCurrent] = useState(null)
//   const [yPosPrev, setYPosPrev] = useState(null)
//   const [yPosArray, setYPosArray] = useState([0,0,0,0,0])

//   const [navBarActive, setNavBarActive] = useState(true)
    
//   useEffect(() => {

//     // setYPos(window.scrollY);

//     const handleScroll = () => {
//       // setYPosPrev(window.scrollY)
//       const scrollY = window.scrollY || 0;

//       const arr = yPosArray
//       arr.push(scrollY)

//       setYPosCurrent(arr[arr.length-1])
//       setYPosPrev(arr[arr.length-2])

//       const newArr = arr.slice(1).slice(-2)

//       setYPosArray(newArr)
//     };


//     document.addEventListener("scroll", handleScroll)

//     if (yPosCurrent < window.innerHeight) {
//       setNavBarActive(true)
//     } else {
//       if (yPosCurrent > yPosPrev) {
//         setNavBarActive(false)
//       } else if (yPosCurrent < yPosPrev) {
//         setNavBarActive(true)
//       } else {
//         setNavBarActive(false)
//       }
//     }



//   }, [yPosArray, yPosCurrent, yPosPrev]);


//   // console.log( {"previous": yPosPrev  , "current": yPosCurrent})
//   // console.log(navBarActive)




//   return (
//     <div className="app">



//       <NavBar visible={navBarActive} />
      

//       <IntroView />

//       <MissionView />

//       <TutoringView />

//       <CoursesView />

//       <TripsView />

//       <FooterView />



//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import AboutPage from "./views/AboutPage/AboutPage";
import TutoringPage from "./views/TutoringPage/TutoringPage";
import CoursesPage from "./views/CoursesPage/CoursesPage";
import TripsPage from "./views/TripsPage/TripsPage";
import ReviewsPage from "./views/ReviewsPage/ReviewsPage"



function App() {

  const [yPosCurrent, setYPosCurrent] = useState(null)
  const [yPosPrev, setYPosPrev] = useState(null)
  const [yPosArray, setYPosArray] = useState([0,0,0,0,0])

  const [navBarActive, setNavBarActive] = useState(true)
    
  useEffect(() => {

    // setYPos(window.scrollY);

    const handleScroll = () => {
      // setYPosPrev(window.scrollY)
      const scrollY = window.scrollY || 0;

      const arr = yPosArray
      arr.push(scrollY)

      setYPosCurrent(arr[arr.length-1])
      setYPosPrev(arr[arr.length-2])

      const newArr = arr.slice(1).slice(-2)

      setYPosArray(newArr)
    };


    document.addEventListener("scroll", handleScroll)

    if (yPosCurrent < window.innerHeight) {
      setNavBarActive(true)
    } else {
      if (yPosCurrent > yPosPrev) {
        setNavBarActive(false)
      } else if (yPosCurrent < yPosPrev) {
        setNavBarActive(true)
      } else {
        setNavBarActive(false)
      }
    }



  }, [yPosArray, yPosCurrent, yPosPrev]);

  // useEffect(() => {
  //   const getWindowWidth = () => {
  //     const width = window.width
  //   }
  // })


  return (
    <BrowserRouter>
      <div>
        <NavBar visible={navBarActive}/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/tutoring" element={<TutoringPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/trips" element={<TripsPage/>} />
          <Route path="/reviews" element={<ReviewsPage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
