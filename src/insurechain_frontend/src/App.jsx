import { useState } from "react";
import { insurechain_backend } from "declarations/insurechain_backend";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.name.value;
    const password = event.target.elements.password.value;

    insurechain_backend.signIn(username, password).then((res) => {
      setGreeting(res);
    });

    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter username: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <label htmlFor="password">Enter password: &nbsp;</label>
        <input id="password" alt="password" type="text" />
        <button type="submit">Click Me!!!!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}
export default App;
