import React, { useEffect,useState } from 'react'
import { getUser } from '../../helpers/getUser';
import WorkGridItem from './WorkGridItem';
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
            <div style={{ width: 150,height:100, margin:10, display: "flex", justifyContent: "center"}}>
                <img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" alt="" style={{borderRadius: "50%"}} className='img-responsive'/>
                <p className='mt-2 mx-2'>UserName</p>
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