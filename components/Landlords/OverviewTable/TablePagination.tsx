'use client'

import { Pagination } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'

const TablePagination = () => {
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [value, setValue] = useState<string | null>('10');
    const isSmallScreen = useMediaQuery('(max-width: 640px)')
    const isLargeScreen = useMediaQuery('(min-width: 1440px)')
    const arr = new Array(50);
    arr.fill(0);
    const nums = arr.map((_, index) => index + 1)


    const handlePageChange = (page: number) => {
        setActivePage(page);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('activePage', page.toString());
        }
    };

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('activePage', activePage.toString());
        }
    }, [activePage]);

    useEffect(() => {
        setItemsPerPage(parseInt(value || '10'));
    }, [value])

    const totalPages = Math.ceil(nums.length / itemsPerPage);
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = nums.slice(startIndex, endIndex);
    return (
        <div className='flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-950 from-60% to bg-purple-950 '>
            <Pagination
                value={activePage}
                onChange={handlePageChange}
                total={totalPages}
                withEdges
                radius='md'
                spacing={isSmallScreen ? 'sm' : 'lg'}
                size='sm'
                styles={(theme) => ({
                    control: {
                        '&[data-active]': {
                            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
                            border: 0,
                        },
                    },
                })} />
        </div>
    )
}

export default TablePagination;