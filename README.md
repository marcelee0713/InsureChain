# InsureChain

InsureChain is a decentralized platform revolutionizing insurance accessibility and engagement. Users interact with insurance products through gamified challenges, earning tokens for completion.

[Live Preview](https://u5vvv-oyaaa-aaaak-qigka-cai.icp0.io/)

## Introduction

InsureChain serves both new and established insurance companies, as well as consumers, by providing a simplified, engaging platform for insurance interaction. Users can earn tokens through gamified challenges and apply them directly toward insurance contracts, enhancing accessibility and participation in the insurance marketplace.

Here's an illustration on how everything works.

![Illustration Example](https://res.cloudinary.com/dop8qsdej/image/upload/v1714843473/my-uploads/architecture_fiyhqh.png)

### Prerequisites

1. Install [WSL](https://ubuntu.com/desktop/wsl) or `wsl.exe --install` in command prompt with Administrative Rights

2. Install [NVM](https://github.com/nvm-sh/nvm) in the wsl terminal:

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
- `nvm install node`
- `node --version`

3. Install [DFX](https://internetcomputer.org/docs/current/developer-docs/getting-started/install/) or `sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"` in the wsl terminal. Make sure you have everything set up, especially your [identity](https://internetcomputer.org/docs/current/developer-docs/developer-tools/cli-tools/cli-reference/dfx-identity).

4. Install [Rust](https://www.digitalocean.com/community/tutorials/install-rust-on-ubuntu-linux) in the wsl terminal:

- `curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh`
- `source $HOME/.cargo/env`
- `rustc --version`
- `rustup target add wasm32-unknown-unknown`

5. Install [Podman](https://podman.io/) or `sudo apt-get -y install podman`

6. `sudo apt-get update` to update every packages/libraries you have installed.

7. Assuming you are on chrome, install the [MetaMask chrome extension](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).

### Configurations

```bash
$ git clone <GitHub repo>
$ cd <project>
$ npm install
$ cd src/insurechain_frontend
$ npm install
$ cd ../insurechain_backend
$ npm install
```

Create an .env file in the src/insurechain_frontend

1. Get a project id at [WalletConnect](https://walletconnect.com/) then put it on VITE_REACT_APP_PROJECT_ID.
2. Get a RPC Development URL for Testnet purposes in [BuildBear](buildbear.io).
3. Get a Block Explorer URL too in [BuildBear](buildbear.io) by pressing Snippets -> Wagmi.

```env
VITE_REACT_APP_PROJECT_ID='923123as1.....';

VITE_RPC_DEV_URL="https://rpc.buildbear.io/abcdd......"

VITE_BLOCK_EXPLORERS_URL="https://explorer.buildbear.io/abcdd......"
```

## Installation

Make sure you are inside in the frontend directory.

```bash
$ cd src/insurechain_frontend
$ dfx start --clean --background
$ npm run setup
$ npm run start
```

## Usage

I'm pretty much sure after running `npm run setup`, it'll show URLs for the frontend and backend canisters.

### Example 1

Let's get all of the insurance companies, note that this will be a huge string of json file.

```bash
$ dfx canister call insurechain_backend getInsurances
```

### Example 2

Rather than manually typing every endpoint of our canister, why not let's use the Candid UI instead for interact our canister's [smart contracts](https://internetcomputer.org/how-it-works/smart-contracts-serve-the-web/).

The URL of Candid UI will be shown once you ran `npm run setup`.

1. Find the signUp function and create an account.
2. Find the signIn function and sign in to get your userId.
3. Find the getUserProfileData and paste your userId, then it'll show your analyzed data.

### Example 3

The result of the getUserProfileData seems pretty empty right, it's time for you to use the frontend. Make sure you are in the front-end directory.

1. `npm run start`
2. Go to http://localhost:3000
3. Explore the website, by doing challenges and applying an insurance!

## Roadmap

Since this is a hackathon project we envision that we put more features in the future.

- [x] Brainstorming of the concept.
- [x] UI/UX or mockup created by using figma.
- [x] React and Azle Integration.
- [x] Decentralize Wallet Integration by using [WalletConnect](walletconnect.com)
- [ ] Insurance Company Dashboard
- [ ] Admin Dashboard

## License

This project is licensed under the MIT license, see LICENSE.md for details. See CONTRIBUTE.md for details about how to contribute to this project.

## Acknowledgements

- [ICP Discord Server](https://discord.gg/sAhCT32H)
- [Francis Gonzles](https://github.com/FGonzales-Dev)

## References

- [Internet Computer](https://internetcomputer.org)
