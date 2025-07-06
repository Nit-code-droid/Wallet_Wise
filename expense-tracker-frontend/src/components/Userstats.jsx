import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/userSlice';
import { Mail, User, Wallet } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg mb-8'>
      <h2 className='text-3xl font-extrabold mb-4 text-center sm:text-left'>Welcome, {user?.name}</h2>
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 text-lg">
        {/* Email */}
        <div className="flex items-center space-x-2">
          {/* Using Mail icon from lucide-react */}
          <Mail className="w-5 h-5 text-blue-200" />
          <p className="font-medium">Email: <span className="font-normal">{user?.email || 'N/A'}</span></p>
        </div>

        {/* Username */}
        <div className="flex items-center space-x-2">
          {/* Using User icon from lucide-react */}
          <User className="w-5 h-5 text-blue-200" />
          <p className="font-medium">Username: <span className="font-normal">{user?.username || 'N/A'}</span></p>
        </div>

        {/* Monthly Budget */}
        <div className="flex items-center space-x-2">
          {/* Using Wallet icon from lucide-react */}
          <Wallet className="w-5 h-5 text-blue-200" />
          <p className="font-medium">Monthly Budget: <span className="font-normal">₹{user?.monthlyBudget?.toLocaleString() || 'N/A'}</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;

