import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import {useEffect, useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  
    const [selectedPage, setSelectedPage] = useState('home');
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboveMediumScreens = useMediaQuery("min-width: 1060px");

    useEffect( () => {
      const handleSroll =() =>
      {
        if (window.scrollY === 0) setIsTopOfPage(true);
        if (window.scrollY !==0) setIsTopOfPage(false);
      }

      window.addEventListener("scroll",handleSroll);
      return () => window.removeEventListener("scroll", handleSroll);

    }, [])

    return <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage ={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
           <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        </div>

      </div>
      
  }

export default App;
