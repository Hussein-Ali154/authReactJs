import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FlightReservationForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "Russia",
  "South Africa",
  "Other",
];
const citiesByCountry = {
  "United States": [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Other",
  ],
  "United Kingdom": [
    "London",
    "Birmingham",
    "Manchester",
    "Glasgow",
    "Newcastle",
    "Sheffield",
    "Liverpool",
    "Leeds",
    "Other",
  ],
  Canada: [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Calgary",
    "Ottawa",
    "Edmonton",
    "Quebec City",
    "Hamilton",
    "Other",
  ],
  Australia: [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Gold Coast",
    "Newcastle",
    "Canberra",
    "Other",
  ],
  Germany: [
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Dusseldorf",
    "Dortmund",
    "Other",
  ],
  France: [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Other",
  ],
  Spain: [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Malaga",
    "Bilbao",
    "Palma",
    "Zaragoza",
    "Other",
  ],
  Italy: [
    "Rome",
    "Milan",
    "Naples",
    "Turin",
    "Palermo",
    "Genoa",
    "Bologna",
    "Florence",
    "Other",
  ],
  Japan: [
    "Tokyo",
    "Yokohama",
    "Osaka",
    "Nagoya",
    "Sapporo",
    "Kobe",
    "Kyoto",
    "Fukuoka",
    "Other",
  ],
  China: [
    "Shanghai",
    "Beijing",
    "Guangzhou",
    "Shenzhen",
    "Tianjin",
    "Chongqing",
    "Hangzhou",
    "Nanjing",
    "Other",
  ],
  India: [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Other",
  ],
  Brazil: [
    "Sao Paulo",
    "Rio de Janeiro",
    "Brasilia",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Other",
  ],
  Mexico: [
    "Mexico City",
    "Guadalajara",
    "Monterrey",
    "Puebla",
    "Tijuana",
    "Leon",
    "Juarez",
    "Zapopan",
    "Other",
  ],
  Russia: [
    "Moscow",
    "St. Petersburg",
    "Novosibirsk",
    "Yekaterinburg",
    "Nizhny Novgorod",
    "Kazan",
    "Chelyabinsk",
    "Omsk",
    "Other",
  ],
  "South Africa": [
    "Johannesburg",
    "Cape Town",
    "Durban",
    "Pretoria",
    "Port Elizabeth",
    "Bloemfontein",
    "East London",
    "Polokwane",
    "Other",
  ],
  Other: [],
};
const passengerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const classOptions = ["Economy", "Premium Economy", "Business", "First"];

const airlineOptions = [
  "American Airlines",
  "Delta Air Lines",
  "Southwest Airlines",
  "United Airlines",
  "Air Canada",
  "British Airways",
  "Emirates",
  "Lufthansa",
  "Qatar Airways",
  "Singapore Airlines",
  "Other",
];

const FlightReservationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [idCardNumber, setIdCardNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [departingDate, setDepartingDate] = useState(new Date());
  const [returningDate, setReturningDate] = useState(new Date());
  const [originCountry, setOriginCountry] = useState(countries[0]);
  const [originCity, setOriginCity] = useState( citiesByCountry[countries[0]][0]);
  const [destinationCountry, setDestinationCountry] = useState(countries[0]);
  const [destinationCity, setDestinationCity] = useState(citiesByCountry[countries[0]][0]);
  const [passengers, setPassengers] = useState(1);
  const [airlinePreference, setAirlinePreference] = useState(airlineOptions[0]);
  const [classOfService, setClassOfService] = useState("");
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethodError, setPaymentMethodError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const handleOriginCountryChange = (event) => {
    const country = event.target.value;
    setOriginCountry(country);
    setOriginCity(citiesByCountry[country][0]);
  };

  const handlePassengerChange = (event) => {
    setPassengers(parseInt(event.target.value));
  };

  const handleDestinationCountryChange = (event) => {
    const country = event.target.value;
    setDestinationCountry(country);
    setDestinationCity(citiesByCountry[country][0]);
  };

  const handleClassOfServiceChange = (event) => {
    setClassOfService(event.target.value);
  };

  const handleAirlineChange = (event) => {
    setAirlinePreference(event.target.value);
  };



  const validatePaymentMethod = () => {
    if (paymentMethod.trim() === '') {
      setPaymentMethodError('Payment method is required');
    } else {
      setPaymentMethodError('');
    }
  };
  const validateCardNumber = () => {
    const cardNumberRegex = /^\d{16}$/;
    if (paymentMethod === 'Credit Card' && cardNumber.trim() === '') {
      setCardNumberError('Card number is required');
    } else if (paymentMethod === 'Credit Card' && !cardNumberRegex.test(cardNumber)) {
      setCardNumberError('Invalid card number format (must be 16 digits)');
    } else {
      setCardNumberError('');
    }
  };
  const validateExpiryDate = () => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (paymentMethod === 'Credit Card' && expiryDate.trim() === '') {
      setExpiryDateError('Expiration date is required');
    } else if (paymentMethod === 'Credit Card' && !expiryDateRegex.test(expiryDate)) {
      setExpiryDateError('Invalid expiration date format (must be MM/YY)');
    } else {
      setExpiryDateError('');
    }
  };
    const validateCvv = () => {
    const cvvRegex = /^\d{3}$/;
    if (paymentMethod === 'Credit Card' && cvv.trim() === '') {
      setCvvError('CVV is required');
    } else if (paymentMethod === 'Credit Card' && !cvvRegex.test(cvv)) {
      setCvvError('Invalid CVV format (must be 3 digits)');
    } else {
      setCvvError('');
    }
  };

  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const errors = {};
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!idCardNumber) {
      errors.idCardNumber = "ID Card number is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!streetAddress) {
      errors.streetAddress = "Street Address is required";
    }
    
    if (!city) {
      errors.city = "City is required";
    }
    if (!postalCode) {
      errors.postalCode = "Postal/Zip Code is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    if (!departingDate) {
      errors.departingDate = "Departure Date is Required";
    }
  
    if (!returningDate) {
      errors.returningDate = "Returning Date is required";
    }
    if (!originCity) {
      errors.originCity = "Origin City is required";
    }
    if (!originCountry) {
      errors.originCountry = "Origin Country is required";
    }
    if (!destinationCity) {
      errors.destinationCity = "Destination city is required";
    }
    if (!destinationCountry) {
      errors.destinationCountry = "Destination country is required";
    }
    if (!passengers) {
      errors.passengers = "Number of Passenger is required";
    }
    if (!airlinePreference) {
      errors.airlinePreference = "Airline Preference is required";
    }

    if (Object.keys(errors).length === 0) {
      // Submit form data
      
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="container-lg">
      <h1 className="h1">Flight Reservation Form</h1>
      <form onSubmit={handleSubmit} className="flight-reservation-form">
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={`form-control ${errors.firstName && "is-invalid"}`}
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={`form-control ${errors.lastName && "is-invalid"}`}
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                className="form-control"
                id="dateOfBirth"
                dateFormat="dd/MM/yyyy"
              />
              {errors.dateOfBirth && (
                <div className="invalid-feedback">{errors.dateOfBirth}</div>
              )}
            </div>
            <div className="col">
              <label htmlFor="idCardNumber">ID Card Number</label>
              <input
                type="text"
                className={`form-control ${
                  errors.idCardNumber && "is-invalid"
                }`}
                id="idCardNumber"
                value={idCardNumber}
                onChange={(event) => setIdCardNumber(event.target.value)}
              />
              {errors.idCardNumber && (
                <div className="invalid-feedback">{errors.idCardNumber}</div>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="col">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className={`form-control ${errors.phone && "is-invalid"}`}
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                className={`form-control ${
                  errors.streetAddress && "is-invalid"
                }`}
                id="streetAddress"
                value={streetAddress}
                onChange={(event) => setStreetAddress(event.target.value)}
              />
              {errors.streetAddress && (
                <div className="invalid-feedback">{errors.streetAddress}</div>
              )}
            </div>
            <div className="col">
              <label htmlFor="passengers">Passengers:</label>
              <select
                value={passengers}
                onChange={handlePassengerChange}
                className="form-control"
                id="passengers"
              >
                {passengerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className={`form-control ${errors.city && "is-invalid"}`}
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              {errors.city && (
                <div className="invalid-feedback">{errors.city}</div>
              )}
            </div>
            <div className="col">
              <label htmlFor="postalCode">Postal/Zip Code</label>
              <input
                type="text"
                className={`form-control ${errors.postalCode && "is-invalid"}`}
                id="postalCode"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
              />
              {errors.postalCode && (
                <div className="invalid-feedback">{errors.postalCode}</div>
              )}
            </div>
          </div>
        </div>

        <div className="group-form">
          <div className="row">
            <div className="col">
              <label htmlFor="country">Country</label>
              <select
                className={`form-control ${errors.country && "is-invalid"}`}
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option value="">Choose...</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <div className="invalid-feedback">{errors.country}</div>
              )}
            </div>

            <div className="col">
              <label htmlFor="class-of-service">Class of Service:</label>
              <br />
              <select
                id="class-of-service"
                className="form-control"
                value={classOfService}
                onChange={handleClassOfServiceChange}
                required
              >
                <option value="">Select a class</option>
                {classOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="departingDate">Departing Date</label>
              <div className="d-flex">
                <DatePicker
                  selected={departingDate}
                  onChange={(date) => setDepartingDate(date)}
                  className="form-control mr-1"
                  id="departingDate"
                  dateFormat="MM/dd/yyyy"
                />
              
              </div>
            </div>
            <div className="col">
              <label htmlFor="returningDate">Returning Date </label>
              <div className="d-flex ">
                <DatePicker
                  selected={returningDate}
                  onChange={(date) => setReturningDate(date)}
                  className="form-control mr-1"
                  id="returningDate"
                  dateFormat="MM/dd/yyyy"
                />
        
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="origin-country">Origin Country:</label>
              <select
                id="origin-country"
                value={originCountry}
                onChange={handleOriginCountryChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="col">
              <label htmlFor="origin-city">Origin City:</label>
              <select
                id="origin-city"
                value={originCity}
                onChange={(event) => setOriginCity(event.target.value)}
              >
                {citiesByCountry[originCountry].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="destination-country">Destination Country:</label>
              <select
                id="destination-country"
                value={destinationCountry}
                onChange={handleDestinationCountryChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="col">
              <label htmlFor="destination-city">Destination City:</label>
              <select
                id="destination-city"
                value={destinationCity}
                onChange={(event) => setDestinationCity(event.target.value)}
              >
                {citiesByCountry[destinationCountry].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="airline">Airline:</label>
              <select
                value={airlinePreference}
                onChange={handleAirlineChange}
                className="form-control"
                id="airline"
              >
                {airlineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
<div className="form-group">
  <div className="row">
    <div className="col">
      <label>
        Payment Method:
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} onBlur={validatePaymentMethod} required>
          <option value="">-- Select Payment Method --</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
        </select>
        {paymentMethodError && <span className="error">{paymentMethodError}</span>}
      </label>
      {paymentMethod === 'Credit Card' && (
        <>
          <label>
            Card Number:
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onBlur={validateCardNumber} required />
            {cardNumberError && <span className="error">{cardNumberError}</span>}
          </label>
          <label>
            Expiry Date:
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} onBlur={validateExpiryDate} required />
            {expiryDateError && <span className="error">{expiryDateError}</span>}
          </label>
          <label>
            CVV:
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} onBlur={validateCvv} required />
            {cvvError && <span className="error">{cvvError}</span>}
          </label>
        </>
      )}
  </div>
    </div> 
</div>



   <button type="submit" className="btn btn-primary btn-lg active">
          Reseve Now 
        </button>
      </form>
    </div>
  );
};

export default FlightReservationForm;
