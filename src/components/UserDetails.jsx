const UserDetails = () => {
  return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 w-full flex justify-center items-center h-[520px] mt-10 rounded-md">
          <div className="bg-gradient-to-r from-stone-500 to-stone-700 flex flex-col items-center rounded-lg shadow-lg p-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                  <img
                      className="h-20 w-20 rounded-full border-4 border-white shadow-md"
                      src="./src/profile.png"
                      alt="Profile"
                  />
              </div>

              {/* User Information */}
              <div className="bg-gradient-to-r from-amber-200 via-orange-400 to-red-600 w-full rounded-lg shadow-inner p-6 text-center">
                  <h1 className="text-lg font-semibold mb-2">User ID: 12345</h1>
                  <h1 className="text-lg font-semibold mb-2">User Name: John Doe</h1>
                  <h1 className="text-lg font-semibold">User Role: Student</h1>
              </div>
          </div>
      </div>
  );
};

export default UserDetails;
