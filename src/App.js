// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "India",
//     streetAddress: "",
//     city: "",
//     state: "",
//     pinCode: "",
//     comments: false,
//     candidate: false,
//     offers: false,
//     pushNotification: "",
//   });

//   function changeHandler(event) {
//     const { name, value, checked, type } = event.target;
//     setFormData((prev) => ({ ...prev, [name]:type === "checkbox" ? checked: value }));
//   }

//   function sumbitHandler(event) {
//     event.preventDefault();

//     console.log("------------")
//     console.log(formData)
//   }

//   return (
//     <div className="flex flex-col items-center mt-4 w-[750px] border mx-auto ">
//       <form onSubmit={sumbitHandler}>
//         <label
//           htmlFor="firstName"
//           className="block text-sm font-medium text-gray-700"
//         >
//           First Name
//         </label>
//         <input
//           type="text"
//           name="firstName"
//           id="firstName"
//           placeholder="Enter your first name"
//           value={formData.firstName}
//           onChange={changeHandler}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//         />
//         <br />

//         <label htmlFor="lastName">last name</label>
//         <br></br>
//         <input
//           type="text"
//           name="lastName"
//           id="lastName"
//           placeholder="Dora"
//           value={FormData.lastName}
//           onChange={changeHandler}
//           className="outline "
//         ></input>

//         <br />

//         <label htmlFor="email">Email</label>
//         <br></br>
//         <input
//           type="text"
//           name="email"
//           id="email"
//           placeholder="rdx2002@gmail.com"
//           value={FormData.email}
//           onChange={changeHandler}
//           className="outline"
//         ></input>

//         <br />
//         <label>Country</label>
//         <br />
//         <select
//           id="country"
//           name="country"
//           value={formData.country}
//           onChange={changeHandler}
//           className="outline"
//         >
//           <option>India</option>
//           <option>USA</option>
//           <option>China</option>
//           <option>Nepal</option>
//         </select>

//         <br />

//         <label htmlFor="streetAddress">Street Address</label>
//         <br></br>
//         <input
//           type="text"
//           name="streetAddress"
//           id="streetAddress"
//           placeholder="XYZ"
//           value={FormData.streetAddress}
//           onChange={changeHandler}
//           className="outline"
//         ></input>
//         <br />

//         <label htmlFor="city">City</label>
//         <br></br>
//         <input
//           type="text"
//           name="city"
//           id="city"
//           placeholder="Vapi"
//           value={FormData.city}
//           onChange={changeHandler}
//           className="outline"
//         ></input>
//         <br />

//         <label htmlFor="state">State</label>
//         <br></br>
//         <input
//           type="text"
//           name="state "
//           id="state"
//           placeholder="Gujarat"
//           value={FormData.state}
//           onChange={changeHandler}
//           className="outline"
//         ></input>
//         <br />

//         <label htmlFor="pinCode">PinCode</label>
//         <br></br>
//         <input
//           type="text"
//           name="pinCode"
//           id="pinCode"
//           placeholder="396161"
//           value={FormData.pinCode}
//           onChange={changeHandler}
//           className="outline"
//         ></input>

//         <br />
//         <fieldset>
//           <legend>By Email</legend>
//           <div className="flex">
//             <input
//               type="checkbox"
//               id="comments"
//               name="comments"
//               value={formData.comments}
//               onChange={changeHandler}
//             />
//             <div>
//               <label htmlFor="comments">Comments</label>
//               <p>Get notified when someones posts a comment on a posting</p>
//             </div>
//           </div>

//           <div className="flex">
//             <input
//               type="checkbox"
//               id="candidate"
//               name="candidate"
//               value={formData.candidate}
//               onChange={changeHandler}
//             />
//             <div>
//               <label htmlFor="candidate">candidate</label>
//               <p>Get notified when someones posts a comment on a posting</p>
//             </div>
//           </div>

//           <div className="flex">
//             <input
//               type="checkbox"
//               id="offers"
//               name="offers"
//               value={formData.offers}
//               onChange={changeHandler}
//             />
//             <div>
//               <label htmlFor="offers">offers</label>
//               <p>Get notified when someones posts a comment on a posting</p>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset>
//           <legend>Push Notification</legend>
//           <p>These are delivered via SMS to your mobile phone</p>

//           <input
//             type="radio"
//             id="pushEverything"
//             name="pushNotification"
//             value="Everything"
//             onChange={changeHandler}
//           />
//           <label htmlFor="pushEverything">Everything</label>

//           <input
//             type="radio"
//             id="pushEmail"
//             name="pushNotification"
//             value="Same as email"
//             onChange={changeHandler}
//           />
//           <label htmlFor="pushEmail">Same as Email</label>

//           <input
//             type="radio"
//             id="pushNothing"
//             name="pushNotification"
//             value="No Push Notification"
//             onChange={changeHandler}
//           />
//           <label htmlFor="pushNothing">No Push Notification</label>
//         </fieldset>

//         <button className="bg-blue-500 text-white font-bold rounded py-2 px-3">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
      >
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={changeHandler}
          className="input-field"
        />

        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={changeHandler}
          className="input-field"
        />

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={changeHandler}
          className="input-field"
        />

        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="input-field"
        >
          <option>India</option>
          <option>USA</option>
          <option>China</option>
          <option>Nepal</option>
        </select>

        <label
          htmlFor="streetAddress"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Enter your street address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="input-field"
        />

        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={changeHandler}
          className="input-field"
        />

        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Enter your state"
          value={formData.state}
          onChange={changeHandler}
          className="input-field"
        />

        <label
          htmlFor="pinCode"
          className="block text-sm font-medium text-gray-700 mt-4 mb-2"
        >
          Pin Code
        </label>
        <input
          type="text"
          name="pinCode"
          id="pinCode"
          placeholder="Enter your pin code"
          value={formData.pinCode}
          onChange={changeHandler}
          className="input-field"
        />

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-700">
            Notifications
          </legend>
          <div className="mt-3 space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="comments"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
                className="checkbox-field"
              />
              <label htmlFor="comments" className="ml-2 text-sm text-gray-700">
                Receive comments notifications
              </label>
            </div>
            {/* Add similar checkbox sections for 'candidate' and 'offers' */}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-700">
            Push Notification
          </legend>
          <p className="text-xs text-gray-500 mt-2">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="flex items-center space-x-4 mt-3">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
              className="radio-field"
            />
            <label htmlFor="pushEverything" className="text-sm text-gray-700">
              Everything
            </label>

            <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same as email"
              onChange={changeHandler}
              className="radio-field"
            />
            <label htmlFor="pushEmail" className="text-sm text-gray-700">
              Same as Email
            </label>

            <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No Push Notification"
              onChange={changeHandler}
              className="radio-field"
            />
            <label htmlFor="pushNothing" className="text-sm text-gray-700">
              No Push Notification
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mt-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;


