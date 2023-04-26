import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Container, 
    Button, 
    Rectangle, 
    Img, Logo, 
    Tweets, 
    Followers,
    Avatar,
    Ellipse,
    Group1,
    Boy} from "./userCard.styled"
import Picture from "./picture1.svg";
import LogoGoIT from "./LogoGoIT.svg";
axios.defaults.baseURL = 'https://642db56c66a20ec9cea46bfd.mockapi.io/api/v1';

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
        
        if (statusBtn) {   
            setFollowers(prevState => prevState + 1 );
           
        } else {setFollowers( item.followers );}
        localStorage.setItem('statusBtn', JSON.stringify(statusBtn));
    }, [statusBtn, item]);
    
    async function updateData() {
       
        try {
            const response = await axios.put(`/users/${item.id}`,{
                "user": `${item.user}`,
                "id":`${item.id}`,
                "tweets": `${item.tweets}`,
                "followers":`${followers}`});
                console.log(response)
                    
        } catch ( error ) {
            //setError(error)
            console.log (error)
        } 
    };

    updateData()   
   
    function formatFollowers (followers, separator=',') {
        let n = followers.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    };
   
    return (<>
        < Container >
            < Img src={Picture} alt="picture" />
                <Logo src={LogoGoIT} alt="logo" />    
                <Tweets >{ item.tweets } tweets </Tweets>
                <Followers >{formatFollowers(followers, '.')} followers </Followers>
            <Button onClick={() => {
                if (!statusBtn) {
                     setStatusBtn(true);  
                } else {
                    setStatusBtn(false); 
                }} } style={{backgroundColor: statusBtn ? '#5CD3A8' :'#EBD8FF'}}>
                    {statusBtn ? "FOLLOWING" : "FOLLOW"}</Button>    
            <Rectangle></Rectangle>
            <Boy>
                <Group1>
                    <Ellipse></Ellipse>
                        <Avatar src={item.avatar} alt='avatar' /> 
                </Group1>       
            </Boy>
        </Container>
        </>
    )
}

