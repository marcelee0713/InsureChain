import React from "react";

const LandingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-black font-bold text-5xl mb-6">InsureChain</h1>
            <p className="max-w-[778px] min-w-[900px] text-xl mb-7">
                It's a platform where insurance companies share what they offer, and
                users can learn and have fun with challenges and be given with tokens
                once they completed their challenges! With tokens as our currency, we're
                making insurance more interactive and easy to understand for everyone
            </p>
            <p className="text-xl mb-5">
                In <span className="font-bold">InsureChain</span>, you can
            </p>
            <div className="flex items-center justify-between w-[1300px]">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <img
                        src="../../public/images/Challenges.png"
                        alt="Challenge Vector"
                    />
                    <h2 className="text-xl font-bold my-5">Challenges</h2>
                    <p className="text-lg w-[380px]">
                        Embark on diverse challenges to accrue points, showcasing your
                        prowess and dedication. Convert these points into tokens, granting
                        access to exclusive rewards and enhancing your gaming experience.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/2">
                    <img
                        src="../../public/images/EarnInsurance.png"
                        alt="Earn Insurance Vector"
                    />
                    <h2 className="text-xl font-bold my-5">Earn an Insurance</h2>
                    <p className="text-lg w-[380px]">
                        Utilize your tokens to acquire the insurance plan that suits you
                        best. With tokens as your currency, you have the flexibility to
                        choose from a variety of insurance options tailored to your
                        preferences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
