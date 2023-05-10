import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import "./Home.css"
import {Container, Button} from "react-bootstrap";
import CarService from "../API/CarService";


const Home = () => {

    const [manufacturers, setManufacturers] = useState([{
        id: 2,
        canBeDisplayed: true,
        description: "uj",
        fullDescription: "",
        hasLink: true,
        matchCode: "",
        commercialVehicle: false,
        passengerCar: true,
        vgl: false,
        axle: false,
        engine: false,
        transporter: false,
        motorbike: false
    }]);

    async function fetchCars(){
        const cars = await CarService.getAllManufacturers()
    
        setManufacturers(cars.data)
    }
    function buttonHandler(){
        fetchCars()
    }


    return (
        <div className="main-container">
           <NavBar/>
            <Container className="mx-2">
                <h1>Cars manufacturers</h1>
                <Button
                variant="dark"
                onClick={buttonHandler}
                >                    Get car brands
                </Button>
                {manufacturers.map((car, index) => (
                    <p key={index}>{car.description}</p>
                ))}
            </Container>
        </div>
    );
};

export default Home;