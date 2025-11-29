import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import { bidsAPI } from '@/services/api';

export default function BidsManager() {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBids();
  }, []);

  const fetchBids = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await bidsAPI.getAll();
      console.log('Bids API Response:', response);
      
      // Backend might return array directly or wrapped
      const bidsList = response.data || response || [];
      console.log('Setting bids:', bidsList.length, 'items');
      setBids(Array.isArray(bidsList) ? bidsList : []);
    } catch (err) {
      setError(err.message || 'Failed to load bids');
      console.error('Error fetching bids:', err);
      setBids([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Bids Management</h1>
        <p className="text-muted-foreground">View and manage all bids</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bids</CardTitle>
          <CardDescription>A list of all bids in the system</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading bids...</span>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Bidder</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bids.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      No bids found
                    </TableCell>
                  </TableRow>
                ) : (
                  bids.map((bid) => (
                    <TableRow key={bid._id}>
                      <TableCell className="font-medium">{bid.product?.title || bid.productId || 'N/A'}</TableCell>
                      <TableCell>{bid.name || bid.email || bid.user?.email || 'N/A'}</TableCell>
                      <TableCell>${bid.bidAmount || bid.amount || 'N/A'}</TableCell>
                      <TableCell>{bid.createdAt ? new Date(bid.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

