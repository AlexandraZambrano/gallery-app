import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

const useStorage = () => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [ url, setUrl ] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransfered / snap.totalBytes) * 100;
            setProgress();
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadUrl();
            setUrl(url);
        })
    }, [file]);

  return { progress, url, error }
}

export default useStorage
