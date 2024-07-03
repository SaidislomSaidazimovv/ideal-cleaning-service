import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "20px auto",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  borderRadius: "8px",
});

const TableWrapper = styled("div")({
  maxWidth: "600px",
  margin: "20px auto",
});

const OrderPage = () => {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (model.trim() !== "" && price.trim() !== "") {
      const newCar = {
        id: cars.length + 1,
        model: model,
        price: price,
      };
      setCars([...cars, newCar]);
      setModel("");
      setPrice("");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Car Order Page</h1>

      <FormContainer>
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Car Model"
            variant="outlined"
            value={model}
            onChange={e => setModel(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            value={price}
            onChange={e => setPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            Add Car
          </Button>
        </form>
      </FormContainer>

      <TableWrapper>
        <TableContainer component={Paper}>
          <Table aria-label="car table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Model</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map(car => (
                <TableRow key={car.id}>
                  <TableCell>{car.id}</TableCell>
                  <TableCell align="center">{car.model}</TableCell>
                  <TableCell align="center">{car.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </div>
  );
};

export default OrderPage;
