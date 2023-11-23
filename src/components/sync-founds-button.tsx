'use client';
import { button } from '@/theme'
import { useState } from 'react';
import { founds } from '@/services';
import { updateFounds } from '@/actions';

interface Props {
    children?: React.ReactNode;
}

export const SyncFoundsButton: React.FC<Props> = ({ children }) => {
    const classNames = button({ color: 'primary'});


    const [loading, setLoading] = useState(false);
    
    


    return (
        <button className={classNames} type="submit">
            Importar Fundos { loading && '...' }
        </button>
    )
}