import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, Gavel, FolderTree, Loader2 } from 'lucide-react';
import { productsAPI, usersAPI, bidsAPI, categoriesAPI } from '@/services/api';

export default function Dashboard() {
  const [stats, setStats] = useState([
    { title: 'Total Products', value: '0', icon: Package, color: 'text-blue-600' },
    { title: 'Total Users', value: '0', icon: Users, color: 'text-green-600' },
    { title: 'Total Bids', value: '0', icon: Gavel, color: 'text-purple-600' },
    { title: 'Categories', value: '0', icon: FolderTree, color: 'text-orange-600' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all data in parallel
      const [productsRes, usersRes, bidsRes, categoriesRes] = await Promise.all([
        productsAPI.getAll().catch(() => ({ data: [] })),
        usersAPI.getAll().catch(() => ({ data: [] })),
        bidsAPI.getAll().catch(() => ({ data: [] })),
        categoriesAPI.getAll().catch(() => ({ data: [] })),
      ]);

      const products = productsRes.data || productsRes || [];
      const users = usersRes.data || usersRes || [];
      const bids = bidsRes.data || bidsRes || [];
      const categories = categoriesRes.data || categoriesRes || [];

      setStats([
        { title: 'Total Products', value: Array.isArray(products) ? products.length.toString() : '0', icon: Package, color: 'text-blue-600' },
        { title: 'Total Users', value: Array.isArray(users) ? users.length.toString() : '0', icon: Users, color: 'text-green-600' },
        { title: 'Total Bids', value: Array.isArray(bids) ? bids.length.toString() : '0', icon: Gavel, color: 'text-purple-600' },
        { title: 'Categories', value: Array.isArray(categories) ? categories.length.toString() : '0', icon: FolderTree, color: 'text-orange-600' },
      ]);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the admin panel</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading dashboard data...</span>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">Last updated: Now</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left text-sm hover:underline">Add New Product</button>
              <button className="w-full text-left text-sm hover:underline">Create Category</button>
              <button className="w-full text-left text-sm hover:underline">View All Bids</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

