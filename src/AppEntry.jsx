import { useEffect, useState } from "react";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import App from "./App";

const AppEntry = () => {
  const [loading, setLoading] = useState(true);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const done = localStorage.getItem("onboarding_done");
      setFirstTime(!done);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Splash />;

  if (firstTime)
    return (
      <Onboarding
        onFinish={() => {
          localStorage.setItem("onboarding_done", "true");
          setFirstTime(false);
        }}
      />
    );

  return <App />;
};

export default AppEntry;
