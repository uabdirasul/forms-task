import React from "react";
import ReactDOM from "react-dom/client";

class SignUpForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      agreement: false,
    };
  }

  handleValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheck = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let { email, agreement } = this.state;
    if (!this.validateEmail(email)) {
      alert("Email is not valid");
    } else if (!agreement) {
      alert("Please accept our rules");
    } else {
      alert("Congratulations");
      this.setState({
        email: "",
      });
    }
  };

  validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  render() {
    return (
      <form>
        <h2 className="bg-dark text-light text-center p-3">Contact Us</h2>
        <div className="form-body d-flex flex-column justify-content-center p-4">
          <div className="row g-3">
            <div className="col-2">
              <label htmlFor="email" className="col-form-label">
                Email
              </label>
            </div>
            <div className="col-10">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={this.handleValue}
                value={this.state.email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                value={this.state.agreement}
                onChange={this.handleCheck}
              />
              <label htmlFor="agreement">Terms & Conditions</label>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-auto">
              <input
                type="button"
                className="btn btn-success"
                value="- Submit"
                onClick={this.submitHandler}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SignUpForm />);
