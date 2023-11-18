import React,{useEffect, useState} from "react";
import {useLoadScript} from '@react-google-maps/api'
import MapsDemo from "./MapsDemo"

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBeGjaoNVJmeeWpYinPd89xSyyMvy1eWP0'/*sua chave de acesso a API*/,
    })

    if(!isLoaded){//verifica se o mapa não está carregado
        return <div>Loading...</div> 
    }else{
        return(<>
            <MapsDemo/> {/*carrega o mapa na tela*/}
        </>) 
    }
}