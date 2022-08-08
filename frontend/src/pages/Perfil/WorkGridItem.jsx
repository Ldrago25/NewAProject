import React from 'react'

const WorkGridItem = ({img,team,setTeam,images}) => {
    return (
        
        <div className='col' >
            <div className='card' style={{  margin:6, display: "flex", justifyContent: "center"}}>
                <img className=''style={{ width: 180,height:180}} src={img.url} alt={img.name} />                
            </div>
        </div>
        
    
  )
}

export default WorkGridItem