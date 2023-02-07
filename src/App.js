import "./index";
import melon from "../src/images/blueseeds.svg";
import Data from "../src/testData.json";


function App() {
 
  return (
    <div>
      <header className="head">
          <img src={melon} alt="a slice of watermelon with blue seeds" className="melonSeed"></img>
      </header>
    <>
        <div className="sideBar"></div>
        
        <div className="containerBox">
              { Data && Data
              .sort( (a,b) => a.id < b.id ? 1 : -1)
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
    </>
    </div>
  );
}

export default App;

