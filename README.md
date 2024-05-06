# InsureChain

InsureChain is a decentralized platform revolutionizing insurance accessibility and engagement. Users interact with insurance products through gamified challenges, earning tokens for completion.

[Live Preview](https://vq3r3-bqaaa-aaaak-qignq-cai.icp0.io/) & [Video Presentation](https://drive.google.com/drive/folders/1litfeNQnNgFZjmX-zjSnrwLiq9e_c6bb?usp=sharing)

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

Rather than manually typing every endpoint of our canister, why not let's use the Candid UI instead to interact our canister's [smart contracts](https://internetcomputer.org/how-it-works/smart-contracts-serve-the-web/).

The URL of Candid UI will be shown once you ran `npm run setup`.

1. Find the signUp function and create an account, make sure to set **isInsuranceCompany** to enter it "FALSE".
2. Find the signIn function and sign in to get your userId.
3. Find the getUserProfileData and paste your userId, then it'll show your analyzed data.

### Example 3

The result of the getUserProfileData seems pretty empty right, it's time for you to use the frontend. Make sure you are in the front-end directory.

1. `npm run start`
2. Go to http://localhost:3000
3. Explore the website, by doing challenges and applying an insurance!

## User Flow

We have two types of User.

1. Consumer User - Who will be the doing the challenges, get incentivised, and apply different insurance companies.

2. Insurance Company User - Who is responsible for monitoring challenges that are pending.

#### Consumer Flow

1. User Dashboard - This is where the user will mostly see his wallet status, information about his challenges, and insurance companies that are currently available.

![UserDashboard](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982352/my-uploads/insurechain/consumer/UserOnDashboard_khfuad.png)

2. Connection to Metamask Wallet - Now before we check out other pages, let's connect to our Wallet First!

![UserConnectsWallet](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982350/my-uploads/insurechain/consumer/UserConnectsWallet_vjsove.png)

3. Insurance Page - This page is where the consumer can view and apply to the insurance company's informations, benefits, and challenges!

![UserViewsInsurance](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982349/my-uploads/insurechain/consumer/UserViewsInsurance_pf7cwf.png)

4. Challenges - This page is where all of the insurance companies challenges. You can also check out the status of your challenges if they are either:

- AVAILABLE - Where you can start taking the challenge.
- ON-GOING - This part is when you are doing the challenge.
- PENDING - This will happen if you submit your challenge and the insurance company will check it if it's valid.
- FINISHED - At this part it will now incentivise since the insurance company have approved the consumer's work.

![UserViewsChallenges](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982349/my-uploads/insurechain/consumer/UserViewsChallenges_gvxvaa.png)

5. Profile - This page is where you can see all of your analyzed data that pretty much tells more about how you interact in InsureChain. For example, your latest started challenges, your latest finished challenges, and pretty much more.

![UserViewsProfile](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982349/my-uploads/insurechain/consumer/UserViewsProfile_mxp0wm.png)

6. Applying an Insurance - Now if the consumer have enough tokens to apply a certain insurance company. The consumer can now apply and get all of the benefits that the insurance company will give.

![UserTriesToApplyInsurance](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982349/my-uploads/insurechain/consumer/UserTriesToApplyAnInsurance_g2lfky.png)

![UserSuccess](https://res.cloudinary.com/dop8qsdej/image/upload/v1714982348/my-uploads/insurechain/consumer/UserSuccessfullyAppliedAnInsurance_gopy5w.png)

#### Insurance Company Flow

1. Insurance Company Dashboard - Where the insurance company can view his information, benefits, challenges, and pending challenges.

![InsuranceDashboard](https://res.cloudinary.com/dop8qsdej/image/upload/v1714983498/my-uploads/insurechain/insuranceCompany/InsuranceCompanyDashboard_qjikax.png)

2. Connect Metamask Wallet - Again, before we start checking out the other sections we should connect to Metamask Wallet first.

![InsuranceConnects](https://res.cloudinary.com/dop8qsdej/image/upload/v1714983499/my-uploads/insurechain/insuranceCompany/InsuranceConnectsAWallet_taud2f.png)

3. Pending Challenges - This is where the consumer submits their work on the insurance companies challenges. Now the insurance user can either:

- Approve - This will open up your wallet to incentivise or reward the consumer.
- Cancel - If the insurance company is not satisfied to the consumer's work, it will be cancelled.

![InsurancePendingChallenges](https://res.cloudinary.com/dop8qsdej/image/upload/v1714983502/my-uploads/insurechain/insuranceCompany/PendingChallenges_jvbapx.png)

4. Approving Challenges - This is where a transaction happens where the insurance company will reward our consumer. It will be sending to a unique metamask address.

![InsuranceApproves](https://res.cloudinary.com/dop8qsdej/image/upload/v1714983499/my-uploads/insurechain/insuranceCompany/InsuranceIncentivesUser_rgfak4.png)

The **Defense Driving Challenge** will now disappear since it is already been approved.

![ApprovedChallenge](https://res.cloudinary.com/dop8qsdej/image/upload/v1714983500/my-uploads/insurechain/insuranceCompany/InsuranceSuccessfullyIncentivisedUser_cjneht.png)

## Test Accounts

If you want to test out accounts were used in the development, feel free to use some of them!

- #### Consumer Accounts

1. username: johndoe | password: P@ssword123
2. username: janedoe | password: P@ssword123

- #### Insurance Accounts

1. username: HealthFirstUser | password: P@ssword123
2. username: SafeGuardUser | password: P@ssword123
3. username: TravelGuardUser | password: P@ssword123
4. username: PetUser | password: P@ssword123
5. username: HomeGuardUser | password: P@ssword123
6. username: FinanceUser | password: P@ssword123

## Roadmap

Since this is a hackathon project we envision that we put more features in the future.

- [x] Brainstorming of the concept.
- [x] UI/UX or mockup created by using figma.
- [x] React and Azle Integration.
- [x] Decentralized Wallet Integration by using [WalletConnect](walletconnect.com)
- [x] Insurance Company Dashboard
- [ ] Admin Dashboard

## License

This project is licensed under the MIT license, see LICENSE.md for details. See CONTRIBUTE.md for details about how to contribute to this project.

## Contributors

- [Lance Kian F. Flores](https://github.com/lancekian12)
- [Ranier Dave T. Arcega](https://github.com/rdaavee)
- [Christer Dale M. Reyes](https://github.com/Montilla007)

## Acknowledgements

- [ICP Discord Server](https://discord.gg/sAhCT32H)

## References

- [Internet Computer](https://internetcomputer.org)
