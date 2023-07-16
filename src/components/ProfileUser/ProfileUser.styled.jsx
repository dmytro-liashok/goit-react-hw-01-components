import styled from '@emotion/styled';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
  padding-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px #0000005c;
  background-color: gray;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 2px 2px 10px #0000005c;
`;

export const Paragraph = styled.p`
  color: #fffff0;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transperent;
`;

export const StatsItem = styled.li`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  height: 86px;
`;
