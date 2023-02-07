import "./index";
import melon from "../src/images/blueseeds.svg";
import Data from "../src/testData.json";


function App() {

  let parsedMarkId =  Data.map((data, index) => {
    return parseInt(Object.values(data.testData[0].market))
   })
 
  return (
    <div>
      <header className="head">
          <img src={melon} alt="a slice of watermelon with blue seeds" className="melonSeed"></img>
      </header>
    <>
        <div className="sideBar"></div>
<div className="box">  
        {parsedMarkId && parsedMarkId.sort ( (a,b) => a.id < b.id ? 1 : -1 )}
        <div className="containerBox">
              { Data && Data
             
              .map (data => {
                return (
                  <div className="boxPink" key={ data.id }>
                    {
                      data.testData && data.testData 
                      .map( data => {
                        return (
                        <div key={ data.id }> 
                          { data.sport.sportName } || 
                          Event I.D:{ data.sport.eventId } ||
                          Market I.D:{ data.market.marketId }
                        </div>
                        )
                      })
                    }
                  </div>
                )
              })
              }
        </div>
        </div>
    </>
    </div>
  );
}

export default App;

/*
data.sort((a, b) => {
  if (a.marketId < b.marketId)
  {return -1;}
});

let parsedMarkId =  Data.map((data, index) => {
   return parseInt(Object.values(data.testData[0].market))
  })

*/