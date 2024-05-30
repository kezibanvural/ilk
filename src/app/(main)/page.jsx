import MainSignUpForm from "@/components/main/sign-up/main-sign-up-form";

export default function Home() {
  return (
    <>
     <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="w-75 w-md-100">
              <h1>
                <span>Welcome to </span>
                <span>Learning Matrix</span>
              </h1>
              <p>Before you dive in, let's get you started!</p>
              <MainSignUpForm />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
