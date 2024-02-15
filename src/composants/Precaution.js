import '../utils/css/precaution.css'

export default function Precaution({precautions}) {
    return (
        <div>
        {precautions.map((precaution,index)=>(
            <p className='precaution-p' key={index}>{precaution}</p>
        ))}
        </div>
    )
}