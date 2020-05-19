import React, {useState, useMemo} from 'react'
import { ArtistEndpoint, Header } from "./../config";


const FetchContext = React.createContext()

export function FetchProvider(props){

    const [datos, setDatos] = useState('');
    const [info, setInfo] = useState([])
    const [redirect, setRedirect] = useState(false)
    

    const handleChange = (e) => {
        setDatos(e.target.value);
       console.log(datos)
       
     };
    
     const getData = async (e) => {
       e.preventDefault()
       console.log(datos)
      
       try {
           const res = await fetch(
               `${ArtistEndpoint.url}?q=${datos}&type=${ArtistEndpoint.type}`,
               { headers: Header }
               );
               const data = await res.json();
               
               setInfo(await data)
               setRedirect(true)
               
          
               
         
         
         
        }
        catch (error) {
            console.log(error);
        }
    };
    console.log(info)


  
     
    const value = useMemo( () =>{
        return ({
            datos,
            handleChange,
            getData,
            info,
            redirect
            
            
        })
    }, [datos, info, redirect])

    return <FetchContext.Provider value={value} {...props}/>
}

export function useFetch(){
    const context = React.useContext(FetchContext)
    if (!context){
     throw Error ('useFetch debe estar dentro del proveedor FetchContext')
    }
    return context
}

