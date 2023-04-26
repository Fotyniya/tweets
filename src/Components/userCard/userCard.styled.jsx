import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
   font-family: 'Montserrat';
   font-style: normal;
   text-transform: uppercase;
   width: 380px;
   height: 460px;
   background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
   border-radius: 20px;
`

export const Button = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 14px 28px;
   gap: 6px;
   position: absolute;
   width: 196px;
   height: 50px;
   left: 92px;
   top: 374px;
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
   border-radius: 10.3108px;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
`
export const Rectangle = styled.div`
   position: absolute;
   width: 380px;
   height: 8px;
   left: 0px;
   top: 214px;

   background: #EBD8FF;
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`

export const Img = styled.img`
   position: absolute;
   width: 308px;
   height: 168px;
   left: 36px;
   top: 28px;
`
export const Logo = styled.img`
   position: absolute;
   width: 76px;
   height: 22px;
   left: 20px;
   top: 20px;
`
export const Tweets = styled.span`
   position: absolute;
   left: 124px;
   top: 284px;
   
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;

   color: #EBD8FF;
`
export const Followers = styled.span`
   position: absolute;
   left: 83px;
   top: 324px;

   font-weight: 500;
   font-size: 20px;
   line-height: 24px;

   color: #EBD8FF;
`
export const Boy = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;

border-radius: 85.9232px;
`
export const Group1 = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 0px;
top: 0px;
`
export const Ellipse = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 0px;
top: 0px;

background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;
`

export const Avatar = styled.img`
position: absolute;
width: 62px;
height: 62px;
left: 9.48px;
top: 9.42px;
border-radius: 50%;
box-shadow: 0px -3.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #000000;
`