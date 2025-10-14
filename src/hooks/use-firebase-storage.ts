import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function useFirebaseStorage() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const uploadFile = async (file: File, path: string) => {
    setUploading(true);
    setError(null);
    setDownloadURL(null);

    try {
      const storage = getStorage();
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setDownloadURL(url);
      return url;
    } catch (e: any) {
      setError(e);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploading, error, downloadURL, uploadFile };
}
