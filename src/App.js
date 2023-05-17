import { Card, Container, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./context/user";

const App = () => {
  const { dataUser, loading, error, showCard, setShowCard } =
    useContext(UserContext);

  console.log({ dataUser, loading, error });

  if (loading) return <div>loading . . . </div>;
  if (error) return null;

  const handleToggle = () => {
    setShowCard((prevState) => !prevState);
  };

  return (
    <Container fluid className="p-4">
      <>
        <Button onClick={handleToggle}>Show/Hide Card</Button>

        {showCard && (
          <Col xs={4}>
            {dataUser?.map(({ id, avatar, first_name, last_name, email }) => {
              return (
                <Card key={id} className="mb-1" style={{ width: "18rem" }}>
                  <Card.Img
                    width={300}
                    height={300}
                    variant="top"
                    src={avatar}
                  />
                  <Card.Body>
                    <Card.Title>
                      {first_name} {last_name}
                    </Card.Title>
                    <Card.Text>{email}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        )}
      </>
    </Container>
  );
};

export default App;
