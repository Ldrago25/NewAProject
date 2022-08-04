import React, { useEffect,useState } from 'react'
import { getUser } from '../../helpers/getUser';
import WorkGridItem from './WorkGridItem';
import perfil from "../../img/perfil.jpg";
import Header from '../../components/Header';
const Perfil = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getUser().then(setImages);
    }, [])
    return (
        <div>
            <Header/>
        <div className=' bg-light container'>
            <div className="d-flex justify-content-center align-items-center">
            <div style={{ width: 180,height:180, margin:10, display: "flex", justifyContent: "center"}}>
                <img src={perfil} alt="" style={{borderRadius: "50%"}} className='img-responsive'/>
                <p className='mt-5 mx-2'>UserName</p>
            </div>
            
            
           
        </div>              
            <div className="row">
            {
                images.map(img=>(
                    <WorkGridItem 
                        key={img.id}
                        img={img}
                        images={images}/>
                ))
            }
            </div>  
        </div>

        </div>
      )
}

export default Perfil