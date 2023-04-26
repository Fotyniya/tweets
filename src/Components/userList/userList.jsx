import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import axios from 'axios';
import {UserCard} from '../userCard/userCard';
import { Button, List } from './userList.styled';
axios.defaults.baseURL = 'https://642db56c66a20ec9cea46bfd.mockapi.io/api/v1';

export const UserList = () => {
    
    const [isLoading, setIsLoading] = useState('false');
    const [page, setPage] = useState(0);
    const [users, setUsers] = useState([]);
   
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('users'));
        if (data) {
            setUsers(data);
        }
    }, []); 

useEffect(()=>{
    async function fetchData() {
        setIsLoading(true);
        try {
            const response = await axios.get(`/users`);
            console.log(response)
            setUsers(prevState => [...prevState, ...response.data]);
            
        } catch ( error ) {
            console.log (error)
        } finally {
            setIsLoading(false); 
        }
    };
    fetchData(); 
},[])

useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    
  }, [users]);

const pagination = () => {
    return  users.slice(0, page*3+3) 
};

        return (
            <>
            {isLoading && <span>Loading...</span>}
            <List >
                {pagination().map(item =>  
                 <li key = {nanoid()}>
                    <UserCard item = {item} />
                </li>
                )}
            </List>
            <Button onClick={() => {
                setPage(prevState => prevState + 1);
                }} >LOAD MORE</Button>
            </>
        )
    }



    
     