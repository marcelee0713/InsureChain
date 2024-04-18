// import { FormEvent, useState } from "react";
// import { insurechain_backend } from "../../declarations/insurechain_backend";

// function AppSecond() {
//   const [greeting, setGreeting] = useState("");

//   const handleSubmit = (event: FormEvent<HTMLFormElement>): boolean => {
//     event.preventDefault();

//     const userName = event.currentTarget.elements.namedItem(
//       "name"
//     ) as HTMLInputElement;
//     const password = event.currentTarget.elements.namedItem(
//       "password"
//     ) as HTMLInputElement;

//     console.log("user value: " + userName.value);
//     console.log("user paswrd: " + password.value);

//     insurechain_backend
//       .signIn({ username: userName.value, password: password.value })
//       .then((res: any) => {
//         setGreeting(res);
//       });

//     return false;
//   };

//   return (
//     <main>
//       <img src="/logo2.svg" alt="DFINITY logo" />
//       <br />
//       <br />
//       <form action="#" onSubmit={handleSubmit}>
//         <label htmlFor="name">Enter username: &nbsp;</label>
//         <input id="name" alt="Name" type="text" />
//         <label htmlFor="password">Enter password: &nbsp;</label>
//         <input id="password" alt="password" type="text" />
//         <button className="bg-black text-stone-800" type="submit">
//           Click Me!!!!
//         </button>
//       </form>
//       <section id="greeting">{greeting}</section>
//     </main>
//   );
// }
// export default AppSecond;
