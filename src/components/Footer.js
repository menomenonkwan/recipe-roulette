import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0,0,0,0.5)));
  background: -o-linear-gradient(transparent, rgba(0,0,0,0.5));
  background: linear-gradient(transparent, rgba(0,0,0,0.5));
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Built using the Edamam API</p>
      <p>&copy; 2021 Brannon Lee</p>
    </StyledFooter>
  );
}
 
export default Footer;