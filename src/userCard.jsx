import { useState } from 'react';
//import { Button } from "./userCard.styled"
import Picture from "./picture2 1.svg";
import Logo from "./LogoGoIT.svg";

export const UserCard = ({item}) => {
    
    const initialState = {  
        followers: item.followers,
        titleButton: "FOLLOW",
        colorBtn: '#EBD8FF',  
    };

    const [followers, setFollowers] = useState(initialState.followers);
    const [titleButton, setTitleButton] = useState(initialState.titleButton);
    const [colorBtn, setColorBtn] = useState(initialState.colorBtn);

    const handleClick = () => {
        switch (titleButton){
            case "FOLLOW":
                setTitleButton ("FOLLOWING");
                setFollowers(prevState => prevState + 1 );
                setColorBtn('#5CD3A8');
                break;
            case "FOLLOWING":
                setTitleButton (initialState.titleButton);
                setFollowers( initialState.followers );
                setColorBtn(initialState.colorBtn);
                break;
            default: console.log(titleButton)
            }
    }

    return (<>
        <div 
            style={{
                position: 'relative',
                width: 380, 
                height: 460, 
                backgroundColor: '#5736A3', 
                borderRadius: 20,
                }}>
            <img 
                src={Picture} 
                alt="" 
                style={{
                    position: 'absolute',
                    width: 308,
                    height: 168,
                    left: 36,
                    top: 28}} />
                <img src={Logo} 
                    alt="logo" 
                    style={{fill: '#FFFFFF', 
                    position: 'absolute',
                    width: 76,
                    height: 22,
                    left: 20,
                    top: 20}}/>    
                <span style={{
                    position: 'absolute',
                    left: 124,
                    top: 284}}>TWEETS: </span>
                <span style={{
                    position: 'absolute',
                    left: 83,
                    top: 324}}>FOLLOWERS: {followers} </span>
            <button style={{
                position: 'absolute',
                width: 196,
                height: 50,
                backgroundColor: colorBtn,
                borderRadius: 10.3108,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 6,
                left: 92,
                top: 374}} onClick={ handleClick } >{titleButton}</button>    
            <div style={{
                position: 'absolute',
                width: 380,
                height: 8,
                left: 0,
                top: 214,
                background: '#EBD8FF'
                }}>        
            </div>
            
            <div style={{
                position: 'absolute',
                width: 80,
                height: 80,
                left: 150,
                top: 178,
                background: '#EBD8FF',
                borderRadius: 85.9232
                }}> 
                <img src={item.avatar} alt='avatar' style={{width: 62, height: 62}}/>
            </div>
        </div>
        </>
    )
}