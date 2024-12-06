import flightsapi from "../api/flightsapi"

export const searchFlights =(info) => async (dispatch) => {
    try {
        const response = await flightsapi.get(`/find-flights/${info.origin}/${info.dest}/${info.date}`)

        if(response && response.status ===200){
           // console.log("request sucess")
               dispatch({type:SEARCH_FLIGHTS,payload:response.data});
        }
    }catch (error){
        console.log(error)
    }
}