'use client';

import { useState } from 'react';
import { useFirebase } from '@/firebase/provider';
import { useFirebaseStorage } from '@/hooks/use-firebase-storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { initiateEmailSignIn, initiateEmailSignUp } from '@/firebase/non-blocking-login';
import { getAuth, signOut } from 'firebase/auth';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

function AuthForm() {
  const { auth } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAuth = () => {
    setFeedback('Processing...');
    if (isSigningUp) {
      initiateEmailSignUp(auth, email, password);
    } else {
      initiateEmailSignIn(auth, email, password);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{isSigningUp ? 'Create Admin Account' : 'Admin Login'}</CardTitle>
        <CardDescription>
          {isSigningUp
            ? 'Sign up to manage your portfolio content.'
            : 'Log in to access the admin dashboard.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleAuth} className="w-full">
          {isSigningUp ? 'Sign Up' : 'Login'}
        </Button>
        <Button variant="link" onClick={() => setIsSigningUp(!isSigningUp)} className="w-full">
          {isSigningUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Button>
        {feedback && <p className="text-sm text-muted-foreground">{feedback}</p>}
      </CardContent>
    </Card>
  );
}

function Uploader() {
  const { user } = useFirebase();
  const { uploadFile, uploading, error, downloadURL } = useFirebaseStorage();
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file && user) {
      const path = `user-uploads/${user.uid}/${file.name}`;
      await uploadFile(file, path);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Image Uploader</CardTitle>
        <CardDescription>Upload your portfolio assets to Firebase Storage.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="file">Choose a file</Label>
          <Input id="file" type="file" onChange={handleFileChange} />
        </div>
        <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
          {uploading ? 'Uploading...' : 'Upload to Firebase Storage'}
        </Button>
        {uploading && <Progress value={progress} className="w-full" />}
        {error && <p className="text-sm text-destructive">Error: {error.message}</p>}
        {downloadURL && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary">Upload Successful!</p>
            <p className="text-xs text-muted-foreground">
              Copy this URL and paste it into your `placeholder-images.json` file.
            </p>
            <Input readOnly value={downloadURL} />
             <div className="p-4 bg-muted rounded-md">
                <p className="text-sm font-semibold">Example for `src/lib/placeholder-images.json`:</p>
                <pre className="mt-2 text-xs bg-background p-2 rounded-md overflow-x-auto">
                  <code>
{`{
  "id": "aareen-headshot",
  "description": "A professional headshot of Aareen.",
  "imageUrl": "${downloadURL}",
  "imageHint": "professional headshot"
}`}
                  </code>
                </pre>
              </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function AdminPage() {
  const { user, isUserLoading, auth } = useFirebase();

  const handleLogout = () => {
    if (auth) {
      signOut(auth);
    }
  };
  
  if (isUserLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {user ? (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button variant="ghost" onClick={handleLogout}>Logout</Button>
              </div>
              <Uploader />
            </div>
          ) : (
            <AuthForm />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
