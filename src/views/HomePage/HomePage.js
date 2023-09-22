import { useEffect, useState } from 'react';
import '../../App.css';
// import WorldMap from './components/WorldMap/WorldMap'
// import NavBar from './components/NavBar/NavBar';
import IntroView from './IntroView/IntroView';
import MissionView from './MissionView/MissionView';
import TutoringView from './TutoringView/TutoringView';
import CoursesView from './CoursesView/CoursesView';
import TripsView from './TripsView/TripsView';
import FooterView from './FooterView/FooterView';

// import MobileIntroView from './IntroView/MobileIntroView';
// import MobileMissionView from './MissionView/MobileMissionView';
// import MobileTutoringView from './TutoringView/MobileTutoringView';
// import MobileCoursesView from './CoursesView/MobileCoursesView';
// import MobileTripsView from './TripsView/MobileTripsView';
// import MobileFooterView from './FooterView/MobileFooterView';



function HomePage() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(screenWidth)


  return (
    <div className="app">

      { screenWidth > 900 ? 
      <>
      
        <IntroView /> 

        <MissionView />

        <TutoringView />

        <CoursesView />

        <TripsView />

        <FooterView />
      </>

      :

      <>
        <div>mobile view is disabled at the moment</div>
        {/* < MobileIntroView />
        < MobileMissionView />
        < MobileTutoringView />
        < MobileCoursesView />
        < MobileTripsView/>
        < MobileFooterView /> */}
      
      </>
      }


    </div>
  );
}

export default HomePage;
