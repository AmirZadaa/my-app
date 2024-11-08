
'use client'
import { Suspense } from 'react';
import AccountContent from './_components/AccountContent.jsx';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AccountContent />
        </Suspense>
    );
}
