import UserData from 'components/UserCard/UserData/UserData';
import {
  AddPetBtn,
  MainContainer,
  PetsContainer,
  Title,
} from 'components/UserCard/UserData/UserData.styled';
import PetsData from 'components/UserCard/PetsData/PetsData';
import { PlusSmall } from 'components/icons';

const User = () => {
  return (
    <>
      <MainContainer>
        <div>
          <Title>My information:</Title>
          <UserData />
        </div>

        <div style={{ width: '100%' }}>
          <PetsContainer>
            <Title>My pets:</Title>
            <AddPetBtn to="/add-pet">
              Add Pet <PlusSmall />
            </AddPetBtn>
          </PetsContainer>
          <PetsData />
        </div>
      </MainContainer>
    </>
  );
};

export default User;
