import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import './Form.css'



export default function Form() {

  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [otherValue, setOtherValue] = useState('');
  const [evictionSelected, setEvictionSelected] = useState('');
  const [bankruptcySelected, setBankruptcySelected] = useState('');
  const [crimeSelected, setCrimeSelected] = useState('');
  const [previousHouse, setPreviousHouse] = useState('');

  const handleEvictionRadioChange = (event) => {
    setEvictionSelected(event.target.value);
  };

  const handleBankruptcyRadioChange = (event) => {
    setBankruptcySelected(event.target.value);
  };

  const handleCrimeRadioChange = (event) => {
    setCrimeSelected(event.target.value);
  };

  const handlePreviousHouse = (event) => {
    setPreviousHouse(event.target.value);
  };


  const handleOtherChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const accessKey = "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  //   <div>

  //   <input type="text" {...register("name", { required: true })}/>
  //   <input type="email" {...register("email", { required: true })}/>
  // </div>
  //   <textarea {...register("message", { required: true })}></textarea>

  //   <button type="submit">Submit Form</button>


  return (
    <div className="form container">
      <h1>Rental Application</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-info section">
          <h2>Personal Information</h2>


          <div className="name-section part">
            <label>Full Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>


          <div className="part">
            <label>Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Phone Number", { required: true })} />
            </div>
          </div>


          <div className="part">
            <label>Email <span>*</span></label>
            <div className="inputs">
              <input type="email"{...register("Email", { required: true })} />
            </div>
          </div>


          <div className="part">
            <label>Current Address <span>*</span></label>
            <div className="inputs">
              <input type="text" placeholder="Address Line 1" {...register("Address Line 1", { required: true })} />
              <input type="text" placeholder="Address Line 2" {...register("Address Line 2", { required: true })} />
            </div>
            <div className="city name-input">
              <input type="text" placeholder="City" {...register("City", { required: true })} />
              <input type="text" placeholder="State / Province / Region" {...register("State / Province / Region", { required: true })} />
              <input type="text" placeholder="Postal / Zip Code" {...register("Postal / Zip Code", { required: true })} />
            </div>
          </div>


          <div className="part">
            <label>Date of Birth <span>*</span></label>
            <div className="input date">
              <input type="date" {...register("Date of Birth", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Social Security number <span>*</span></label>
            <div className="input">
              <input type="number" {...register("Social Security number", { required: true })} />
              <p>We will only use this to check your credit history</p>
            </div>
          </div>

          <div className="part">
            <label>Emergency Contact Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("Emergency contact First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Emergency Contact Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Emergency Contact Phone Number", { required: true })} />
            </div>
          </div>



        </div>

        <div className="residential-history section">
          <h2>Residential History</h2>
          <div className="part">
            <label>Current Residence Type <span>*</span></label>
            <div className="radio-input">

              <label>
                <input checked={selectedValue === 'Apartment'} onChange={handleRadioChange} value='Apartment' type="radio" name="Current Residence Type" ref={register()} required />
                Apartment
              </label>
              <label>
                <input checked={selectedValue === 'Condominium'} onChange={handleRadioChange} value='Condominium' type="radio" name="Current Residence Type" ref={register()} required />
                Condominium
              </label>
              <label>
                <input checked={selectedValue === 'House'} onChange={handleRadioChange} value='House' type="radio" name="Current Residence Type" ref={register()} required />
                House
              </label>
              <label>
                <input checked={selectedValue === 'Mobile Home'} onChange={handleRadioChange} value='Mobile Home' type="radio" name="Current Residence Type" ref={register()} required />
                Mobile Home
              </label>
              <label>
                <input checked={selectedValue === 'Others'} onChange={handleRadioChange} value='Others' type="radio" name="Current Residence Type" ref={register()} required />
                <input type="text" placeholder="Other" value={otherValue} onChange={handleOtherChange} />
              </label>

            </div>
          </div>

          <div className="part">
            <label>Monthly Rent <span>*</span></label>
            <div className="input">
              <input type="text" {...register("Monthly Rent", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Landlord Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("Landlord First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Landlord Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Phone Number", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Length of Stay <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Lenght of Stay", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Reason for Leaving <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Reason for Leaving", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Previous Residence Type <span>*</span></label>
            <div className="radio-input">

              <label>
                <input checked={previousHouse === 'Apartment'} onChange={handlePreviousHouse} value='Apartment' type="radio" name="Previous Residence Type" ref={register()} required />
                Apartment
              </label>
              <label>
                <input checked={previousHouse === 'Condominium'} onChange={handlePreviousHouse} value='Condominium' type="radio" name="Previous Residence Type" ref={register()} required />
                Condominium
              </label>
              <label>
                <input checked={previousHouse === 'House'} onChange={handlePreviousHouse} value='House' type="radio" name="Previous Residence Type" ref={register()} required />
                House
              </label>
              <label>
                <input checked={previousHouse === 'Mobile Home'} onChange={handlePreviousHouse} value='Mobile Home' type="radio" name="Previous Residence Type" ref={register()} required />
                Mobile Home
              </label>
              <label>
                <input checked={previousHouse === 'Others'} onChange={handlePreviousHouse} value='Others' type="radio" name="Previous Residence Type" ref={register()} required />
                <input type="text" placeholder="Other" value={otherValue} onChange={handleOtherChange} />
              </label>

            </div>
          </div>


          <div className="part">
            <label>Monthly Rent <span>*</span></label>
            <div className="input">
              <input type="text" {...register("Monthly Rent", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Landlord Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("Landlord First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Landlord Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Phone Number", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Length of Stay <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Lenght of Stay", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Reason for Leaving <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Reason for Leaving", { required: true })} />
            </div>
          </div>


        </div>

        <div className="epmloyment-information section">
          <h2>Employment Information</h2>

          <div className="part">
            <label>Current Employer <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("current employer", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Position <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Position", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Employment Start Date <span>*</span></label>
            <div className="input date">
              <input type="date" {...register("Employment Start Date", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Employment End Date <span>*</span></label>
            <div className="input date">
              <input type="date" {...register("Employment End Date", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Supervisor Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("Supervisor First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Supervisor Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Supervisor Phone Number", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Monthly Gross Income <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Monthly Gross Income", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Other Income <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Other Income", { required: true })} />
            </div>
          </div>


        </div>

        <div className="references section">
          <h2>References</h2>

          <div className="part">
            <label>Reference 1 Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("Reference 1 First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Reference 1 Relationship <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Reference 1 Relationship", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Refernce 1 Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Refernce 1 Phone Number", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Reference 2 Name <span>*</span></label>
            <div className="name-input">
              <input type="text" placeholder="First" {...register("Reference 2 First Name", { required: true })} />
              <input type="text" placeholder="Last" {...register("Last Name", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Reference 2 Relationship <span>*</span></label>
            <div className="inputs">
              <input type="text"{...register("Reference 2 Relationship", { required: true })} />
            </div>
          </div>

          <div className="part">
            <label>Refernce 2 Phone Number <span>*</span></label>
            <div className="inputs">
              <input type="number"{...register("Refernce 2 Phone Number", { required: true })} />
            </div>
          </div>

          <div className="additional-information section">
            <h2>Additional Information</h2>


            <div className="part">
              <label>Have you ever been evicted? <span>*</span></label>
              <div className="yesno-input">

                <label>
                  <input checked={evictionSelected === 'Yes'} onChange={handleEvictionRadioChange} value='Yes' type="radio" name="Have you ever been evicted?" ref={register()} required />
                  Yes
                </label>
                <label>
                  <input checked={evictionSelected === 'No'} onChange={handleEvictionRadioChange} value='No' type="radio" name="Have you ever been evicted?" ref={register()} required />
                  No
                </label>

              </div>
            </div>

            <div className="part">
              <label>Have you ever filed for bankruptcy? <span>*</span></label>
              <div className="yesno-input">

                <label>
                  <input checked={bankruptcySelected === 'Yes'} onChange={handleBankruptcyRadioChange} value='Yes' type="radio" name="Have you ever filed for bankruptcy?" ref={register()} required />
                  Yes
                </label>
                <label>
                  <input checked={bankruptcySelected === 'No'} onChange={handleBankruptcyRadioChange} value='No' type="radio" name="Have you ever filed for bankruptcy?" ref={register()} required />
                  No
                </label>

              </div>
            </div>

            <div className="part">
              <label>Have you been convicted of a crime? <span>*</span></label>
              <div className="yesno-input">

                <label>
                  <input checked={crimeSelected === 'Yes'} onChange={handleCrimeRadioChange} value='Yes' type="radio" name="Have you been convicted of a crime?" ref={register()} required />
                  Yes
                </label>
                <label>
                  <input checked={crimeSelected === 'No'} onChange={handleCrimeRadioChange} value='No' type="radio" name="Have you been convicted of a crime?" ref={register()} required />
                  No
                </label>

              </div>
            </div>

            <div className="part">
              <label>If yes, please explain <span>*</span></label>
              <div className="inputs">
                <input type="text"{...register("If yes, please explain", { required: true })} />
              </div>
            </div>

          </div>

        </div>

        <button type="submit">Submit</button>

      </form>

      <div>{result}</div>
    </div>
  );
}