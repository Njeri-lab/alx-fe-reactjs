function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto sm:w-24,h-24 md:w-26,h-26"
      />
      <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl">
        John Doe
      </h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base">
        Developer at Example Co. loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
