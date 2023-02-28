import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram } from "@tabler/icons";
import Button from "./component/Button";

const App = () => {
  const type = "submit";
  const onClick = () => alert("Register");
  return (
    <div className="bg-slate-900 grid place-items-center min-h-screen">
      <div className={"flex gap-4"}>
        <Button {...{ type, onClick }}>
          {/* type : "submit", onClick : () => alert('Register) */}
          <IconBrandFacebook />
          Register
        </Button>
        <Button className={"bg-pink-600"} onClick={() => alert("Login")}>
          <IconBrandGithub />
          Login
        </Button>
        <Button onClick={() => alert("Login")} type={"button"}>
          <IconBrandInstagram />
          Login
        </Button>
      </div>
    </div>
  );
};

export default App;
