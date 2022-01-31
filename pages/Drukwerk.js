function Drukwerk() {
  return (
        <div className="b-gray-100 overflow-y-hidden">
            <div className="w-full flex flex-wrap">
                <div className="relative rounded-lg w-full bg-gray-100 mx-auto lg:flex md:flex-wrap items-center pt-12 sm:pt-24 pb-12 lg:pb-24">
                    <div className="lg:w-2/6 text-3xl text-center text-red-500 font-mono">
                        Drukwerk
                    </div> 

                    <div className="lg:w-3/6 mx-5 text-xl font-mono">
                        Ook met ‘drukken’ zijn alle formaten mogelijk. Ten opzichte van "printen"is bij "drukken" wel een minimale afname vastgesteld. Drukken is aan te raden bij grotere oplages. 
                        De drukopdrachten nemen ongeveer 5-6 werkdagen in beslag, waar dit bij printopdrachten meestal binnen 1 werkdag klaar is. 
                        
                        Klik op de onderstaande button voor de prijslijst.

                        <button className="bg-gray-300 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 flex-wrap rounded inline-flex mt-5 float-right">
                            <svg className="fill-current w-4 h-4 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download</span>
                        </button>   
                    </div>                      
                </div>
            </div>
        </div>
    ) 
}

export default Drukwerk;
