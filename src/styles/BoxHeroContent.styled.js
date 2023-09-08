import styled from 'styled-components';

export const Hero = styled.div`
                  position: relative;
                  top: 0;
                  left: 0;
                  width: 93%;
                  height: 32rem;
                  overflow: hidden; 
                  transition: .3s;
                  color: #fff;
                  z-index: 1;
                  /* background-color: #5e449f; */
                  border-radius: 10px;           
                  /* margin: 1rem 0;       */
                  margin: 0 auto;      
                `;

export const HeroImage = styled.img`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  transition: .3s;
                  z-index: 10;
                  border-radius: 10px;  
                  @media (max-width: 768px) {
                    width: 100%;
                    height: 60%;
                  }
                  @media (max-width: 500px) {
                    width: 100%;
                    height: 40%;
                  }
                `;
export const HeroImageTitle = styled.img`
                position: absolute;
                top: ${(props) => (props.top === '' ? '8rem' : props.top)};
                left: 3rem;
                width: calc(40% + 25.6px);
                transition: .3s;
                z-index: 20;
                outline: none;
                background-color: transparent;
                @media (max-width: 768px) {
                    width: 40%;
                    height: 15%;
                    top: 25px;
                    left: 25px
                  }
                  @media (max-width: 500px) {
                    width: 30%;
                    height: 10%;
                  }  
                `;

export const HeroImageSubTitle = styled.p`
                position: absolute;
                top: 22rem;
                left: 3rem;
                width: calc(40% + 25.6px);
                color: ${(props) => (props.color === 'dark' ? '#ffffff' : '#000000')};
                font-size: 15px;
                font-weight: 500;
                line-height: 22px;
                z-index: 20;      
                @media (max-width: 768px) {
                    width: 40%;
                    height: 15%;
                    top: 105px;
                    left: 25px
                  }          
                  @media (max-width: 500px) {
                    width: 50%;
                    height: 10%;
                    top: 75px;
                    font-size: 11px;
                  }  
                `;

export const HeroButton = styled.div`
                position: absolute;
                padding: 8px 30px ;
                background-color: #ffa500;
                border-radius: 10px;
                top: 27.5rem;
                left: 3rem;                
                color: #2e2626;
                font-weight: 600;
                z-index: 20;     
                @media (max-width: 768px) {                   
                    top: 50%;
                    left: 25px
                  }          
                  @media (max-width: 500px) {
                    top:160px;
                    font-size: 12px;
                  }   
                `;