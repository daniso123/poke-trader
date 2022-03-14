import React, { useEffect, useState } from 'react';
import { Card, Buttons, Xp, Cancel } from './styles/Cardpoket';
import Buttoncard from "./Buttoncard";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function Cardpoket({ url, onClickCancel, onClickLeft, onClickRight, type, pokemon }) {

    const [poke, setPoke] = useState();

    useEffect(() => {
        if (type === 'default'){
            axios.get(`${url}`).then((res) => setPoke(res.data));
        }
    }, [url, type]);

    function handleLeft() {onClickLeft(poke)}
    function handleRight() {onClickRight(poke)}

    if (type === 'default'){
        return(
            <Card type={type}>
                <Xp>power: {poke?.base_experience}</Xp>
                <img src = {poke?.sprites?.front_default} alt="pokemon"/>
                {poke?.name}
                <Buttons>
                    <Buttoncard onClick={() => handleLeft()} type={'violeta'}>
                        
                    </Buttoncard>
                    <Buttoncard onClick={() => handleRight()} type={'red'}>
                    
                    </Buttoncard>
                </Buttons>
            </Card>
        )
    }
    else if (type === 'chosen'){
        return(
            <Card type={type}>
                <Cancel onClick={onClickCancel} style={{color: 'grey', fontSize: '1.5rem', cursor: 'pointer'}}>
                    <FaTimes/>
                </Cancel>
                <img src = {pokemon?.sprites?.front_default } alt="pokemon"/>
                {pokemon?.name}
            </Card>
        )
    }
}