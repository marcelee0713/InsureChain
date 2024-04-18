const Profile = () => {
    return (
        <div className="py-8 px-12">
            <h2 className="text-black text-3xl font-bold mb-2">Profile</h2>
            <p className="text-black text-base">
                you can see a lot about yourself here too
            </p>
            <div className="grid grid-rows-9 grid-cols-10 h-screen mt-9 gap-3">
                <div className="component-grid border-opacity-40 border-black row-start-1 row-end-11 col-start-1 col-end-5 px-8">
                    <img
                        src="/images/vector-profile.png"
                        alt="picture"
                        className="w-[250px] h-[250px] mb-10"
                    />
                    <div className="flex flex-row justify-between items-center text-black w-full">
                        <h3>username</h3>
                        <h3>lancekian12</h3>
                    </div>
                    <hr className="w-full border-black mt-5 mb-9" />
                    <div className="flex flex-row justify-between items-center text-black w-full">
                        <h3>email</h3>
                        <h3>lancekian12@gmail.com</h3>
                    </div>
                    <hr className="w-full border-black mt-5 mb-9" />
                    <div className="flex flex-row justify-between items-center text-black w-full">
                        <h3>challenges completed</h3>
                        <h3>150</h3>
                    </div>
                    <hr className="w-full border-black mt-5 mb-9" />
                    <div className="flex flex-row justify-between items-center text-black w-full">
                        <h3>total points</h3>
                        <h3>5038</h3>
                    </div>
                    <hr className="w-full border-black mt-5 mb-9" />
                    <button className="text-black rounded-xl border border-black px-6 py-5 ">
                        Change Password
                    </button>
                </div>
                <div className="component-grid border-opacity-40 border-black row-start-1 row-end-3 col-start-5 col-end-8"></div>
                <div className="component-grid border-opacity-40 border-black row-start-3 row-end-5 col-start-5 col-end-8"></div>
                <div className="component-grid border-opacity-40 border-black row-start-5 row-end-11 col-start-5 col-end-8"></div>
                <div className="component-grid border-opacity-40 border-black row-start-1 row-end-4 col-start-8 col-end-11"></div>
                <div className="component-grid border-opacity-40 border-black row-start-4 row-end-7 col-start-8 col-end-11"></div>
                <div className="component-grid border-opacity-40 border-black row-start-7 row-end-11 col-start-8 col-end-11"></div>
            </div>
        </div>
    );
};

export default Profile;
