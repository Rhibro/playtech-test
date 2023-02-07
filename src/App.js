import "./index";
import melon from "../src/images/blueseeds.svg";
import Data from "../src/testData.json";


function App() {
  function compareFn(a, b) {
    if (a.marketId < b.marketId) {
      return -1;
    }
    if (a.marketId > b.marketId) {
      return 1;
    }
  }
 
  return (
    <div>
      <header className="head">
          <img src={melon} alt="a slice of watermelon with blue seeds" className="melonSeed"></img>
      </header>
    <>
        <div className="sideBar"></div>
        
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
    </>
    </div>
  );
}

export default App;


/*
data.sort((a, b) => {
  if (a.market.marketId < b.market.marketId)
  { return -1 ;}
});

toSort(a, b) {
    if (a.market.marketId < b.market.marketId)
    { return -1 ;}
  };

  .sort((a, b) => a.marketId > b.marketId ? 1 : -1)

*/