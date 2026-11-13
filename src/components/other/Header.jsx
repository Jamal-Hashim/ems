
const Header = (props) => {

    const username = props.data?.firstName || "Admin";

    const LogOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        props.changeUser('');
    };

    return (
        <div className='bg-white p-4 sm:p-5 rounded-xl shadow-sm'>

            <div className='flex items-start justify-between gap-4'>

                <h1 className='text-xl sm:text-2xl font-medium text-slate-700'>
                    Hello,
                    <span className='text-2xl sm:text-3xl font-semibold text-blue-500 ml-2'>
                        {username}
                    </span>
                </h1>

                <button
                    onClick={LogOutUser}
                    className='bg-red-500 text-white px-5 py-2 rounded-lg cursor-pointer font-semibold text-sm sm:text-base hover:bg-red-600 active:scale-95 transition-all duration-200'
                >
                    Log Out
                </button>

            </div>

        </div>
    );
};

export default Header;
