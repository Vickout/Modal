import styled from 'styled-components';

interface ContainerProps {
  colorText: string;
}

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<ContainerProps>`
  background: #fff;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(242, 243, 245, 0.05);
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;

  img {
    height: 150px;
    margin-bottom: 24px;
  }

  strong {
    color: ${props => props.colorText};
    font-weight: 700;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0;
`;
