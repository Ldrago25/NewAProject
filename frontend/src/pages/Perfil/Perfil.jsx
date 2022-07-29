import React from 'react'

const Perfil = () => {
  return (
    
    <div className='col' >
        <div className='card' style={{ width: 180, margin:10 }}>
            <img className='' src={img.url} alt={img.name} />
            <div className='card-body'>
                
                <p className='card-text'>{img.name}</p>
                
                {images &&(
                <button 
                    className='btn btn-success btn-sm'
                    onClick={()=>addUser(img)}>
                    Add to Team
                </button>
                ) }
               
            </div>
        </div>
    </div>
    

)
}
}

export default Perfil