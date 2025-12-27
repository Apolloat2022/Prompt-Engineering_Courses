import LoginButton from './LoginButton';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to access your courses</p>
          </div>

          <LoginButton />

          <p className="text-xs text-gray-500 text-center mt-6">
            Secure OAuth authentication
          </p>
        </div>
      </div>
    </div>
  );
}
