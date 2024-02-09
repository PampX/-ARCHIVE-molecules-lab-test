export default function Conseil({conseils}){
    const isArray = Array.isArray(conseils)
    
    return(
        <div>
        {isArray ? conseils.map((conseil,index)=>(
            <p>{conseil}</p>
        )) : 
        conseils
        }
        </div>
    )
}