import React from "react";
import { useState } from "react";
import "./Contact.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="container-form">
        <h1 className="h1-contact">Contact</h1>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />

            <div className="form-group">
              <label htmlFor="firstname"></label>
              <input
                type="text"
                className="form-control"
                placeholder="Prénom"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"></label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              className="form-control-message"
              rows="5"
              placeholder="Message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button className="button-form" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default App;
// const Contact = () => {
//   const [title, setTitle] = useState("");

//   const handleSubmit = (event) => event.preventDefault();
//   const handleChange = (event) => {
//     if (event.target.value.includes("")) {
//       setTitle(event.target.value);
//     }
//   };

//   return (
//     <div>
//       <h1 className="h1-contact">Contact</h1>
//       <div className="container-form">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="title"></label>
//           <input
//             className="input-contact"
//             id="title"
//             type="text"
//             value={title}
//             onChange={handleChange}
//             placeholder="Nom"
//           />
//           <input
//             className="input-contact"
//             id="title"
//             type="text"
//             value={title}
//             onChange={handleChange}
//             placeholder="Prénom"
//           />{" "}
//           <input
//             className="input-contact"
//             id="title"
//             type="mailto"
//             value={title}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
