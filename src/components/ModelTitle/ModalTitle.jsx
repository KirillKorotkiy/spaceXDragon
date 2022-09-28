import {
  Title,
  FirstFlight,
  WrapperTitle,
  Modal,
  Description,
  Date,
  FirstFlightTitle,
} from './ModalTitle.styled';

export const ModalTitle = ({ dragon }) => {
  return (
    <>
      <WrapperTitle>
        <Title>
          Model: <Modal> {dragon.data.name}</Modal>
        </Title>
        <FirstFlight>
          <FirstFlightTitle>First flight:</FirstFlightTitle>
          <Date>{dragon.data.first_flight}</Date>
        </FirstFlight>
        <Description>{dragon.data.description}</Description>
      </WrapperTitle>
    </>
  );
};
