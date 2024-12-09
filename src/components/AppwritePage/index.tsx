import Profile from "./Profile";
import StoragePage from "./StoragePage";

const AppwritePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-4">
      {/* Header */}
      <div className="border-b border-b-gray-400 flex items-center justify-between p-4">
        <h1 className="text-pink-500 text-3xl text-center font-extrabold">
          AppWrite
        </h1>
        <div>
          <Profile />
        </div>
      </div>
      <StoragePage />
    </div>
  );
};

export default AppwritePage;
