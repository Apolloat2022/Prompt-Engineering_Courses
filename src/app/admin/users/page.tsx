import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../lib/auth";

export default async function AdminUsersPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    // Fetch all users
    const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        include: { accounts: true },
    });

    return (
        <div className="min-h-screen pt-32 px-8 bg-[#0a0e27] text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">Student Database</h1>
                <p className="text-gray-400 mb-8">Registered Users ({users.length})</p>

                <div className="bg-[#131b4d] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <table className="w-full text-left">
                        <thead className="bg-[#0f1535] text-gray-400 uppercase text-xs tracking-wider">
                            <tr>
                                <th className="p-6">User</th>
                                <th className="p-6">Email</th>
                                <th className="p-6">Joined</th>
                                <th className="p-6">Provider</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 pl-6 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-sm">
                                            {user.name ? user.name[0].toUpperCase() : "?"}
                                        </div>
                                        <span className="font-bold">{user.name || "Unknown"}</span>
                                    </td>
                                    <td className="p-6 text-gray-300">{user.email}</td>
                                    <td className="p-6 text-gray-400 text-sm">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-6">
                                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">
                                            {user.accounts[0]?.provider || "google"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {users.length === 0 && (
                        <div className="p-12 text-center text-gray-500 italic">
                            No users found. Log in to create the first record!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
