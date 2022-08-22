import styled from "styled-components";


const Title = styled.h1`
  display: inline-block;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-right: 8px;
`;

const Subtitle = styled.h2`
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
`;

const Wrapper = styled.header`
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 3rem;
  background: ${props => props.theme.main.color.primary};
`;

const Header = () => (
    <Wrapper>
        <div>
            <Title>
                MKS
            </Title>
            <Subtitle>
                Sistemas
            </Subtitle>
        </div>
    </Wrapper>
)

export default Header