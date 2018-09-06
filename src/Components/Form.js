import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div className="container">
        <center>
            <div className="card" id="card1">
            <input type="text" name="city" placeholder='enter city' className="form-control my-2" />
            <input type="text" name="country" placeholder='enter country' className="form-control my-2" />
            
            </div>
            <div>
            <button className="btn btn-info mt-2">Get weather</button>
            </div>
            </center>
        </div>
    </form>
) 
export default Form;