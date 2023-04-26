import { useState, useEffect } from 'react';
//import { Button } from "./userCard.styled"
import Picture from "./picture2 1.svg";
import Logo from "./LogoGoIT.svg";

export const UserCard = ({item}) => {

    const [followers, setFollowers] = useState(item.followers);
    const [statusBtn, setStatusBtn] = useState(false);
  
    useEffect(() => {
        const statusBtn = JSON.parse(localStorage.getItem('statusBtn'));
        if (statusBtn) {
            setStatusBtn(statusBtn);
        }
      }, []);

    useEffect(() => {
        console.log(typeof statusBtn)
        console.log(statusBtn)
        if (statusBtn) {   
            setFollowers(prevState => prevState + 1 );
        } else {setFollowers( item.followers );}
        localStorage.setItem('statusBtn', JSON.stringify(statusBtn));
    }, [statusBtn, item]);
    
    function formatFollowers (followers, separator=',') {
        let n = followers.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    };

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
                    top: 284}}>{ item.tweets } tweets </span>
                <span style={{
                    position: 'absolute',
                    left: 83,
                    top: 324}}>{formatFollowers(followers, '.')} followers </span>
            <button onClick={() => {
                if (!statusBtn) {
                     setStatusBtn(true);  
                } else {
                    setStatusBtn(false); 
                }} } style={{backgroundColor: statusBtn ? '#5CD3A8' :'#EBD8FF' , 
    position: 'absolute',
    width: 196,
    height: 50,
    borderRadius: 10.3108,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    left: 92,
    top: 374}} >{statusBtn ? "FOLLOWING" : "FOLLOW"}</button>    
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

