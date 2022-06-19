import { Link } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  return (
    <Form style={{ height: "330px" }}>
      <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

      <TextInput type="password" placeholder="Enter password" icon="lock" />

      <Button>
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Sign Up</Link> instead.
      </div>
    </Form>
  );
}
