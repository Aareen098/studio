'use client';

import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { collection, query, orderBy } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/firebase';

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  submissionDate: string;
};

function AdminDashboard() {
  const firestore = useFirestore();
  const submissionsCollection = useMemoFirebase(() => collection(firestore, 'contactFormSubmissions'), [firestore]);
  const submissionsQuery = useMemoFirebase(() => query(submissionsCollection, orderBy('submissionDate', 'desc')), [submissionsCollection]);
  const { data: submissions, isLoading, error } = useCollection<Submission>(submissionsQuery);
  const auth = useAuth();

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto max-w-5xl">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Contact Form Submissions</CardTitle>
            <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
          </CardHeader>
          <CardContent>
            {isLoading && <p>Loading submissions...</p>}
            {error && <p className="text-destructive">Error loading submissions: {error.message}</p>}
            {!isLoading && !submissions?.length && <p>No submissions yet.</p>}
            {submissions && submissions.length > 0 && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{new Date(submission.submissionDate).toLocaleString()}</TableCell>
                      <TableCell>{submission.name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell className="whitespace-pre-wrap">{submission.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // or a redirect component
  }

  return <AdminDashboard />;
}
